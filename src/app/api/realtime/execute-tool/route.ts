import { retrieveContext } from '@/lib/rag';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { generateProposalEmail } from '@/lib/email-template';
import { z } from 'zod';
import { getClientIP, checkToolExecLimit, checkProposalLimit, recordRateLimitEvent } from '@/lib/rate-limit';

const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

// Service-role client for server-side operations that bypass RLS
const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || '',
);

// ── Zod Schemas for Tool Argument Validation ────────────────────────────────

const toolSchemas = {
    searchCompanyKnowledge: z.object({
        query: z.string().min(1, 'Query is required').max(500, 'Query too long'),
    }),
    sendProposal: z.object({
        name: z.string().min(1, 'Name is required').max(200),
        email: z.string().email('Invalid email address').max(320),
        company: z.string().min(1, 'Company name is required').max(200),
        selectedPackage: z.enum(['starter', 'launch', 'growth', 'scale', 'flow', 'engage', 'qualify', 'command', 'all']),
    }),
    saveLead: z.object({
        name: z.string().min(1, 'Name is required').max(200),
        phone: z.string().max(30).optional().nullable(),
        email: z.string().email().max(320).optional().nullable(),
        company: z.string().max(200).optional().nullable(),
        notes: z.string().min(1, 'Notes are required').max(2000),
    }),
    subscribeNewsletter: z.object({
        email: z.string().email('Invalid email address').max(320),
        topic_interest: z.string().min(1, 'Topic interest is required').max(200),
    }),
} as const;

type ToolName = keyof typeof toolSchemas;

// ── Voice Session Logging ───────────────────────────────────────────────────

async function logVoiceToolCall(
    clientIP: string,
    toolName: string,
    args: Record<string, unknown>,
    result: unknown,
    success: boolean,
): Promise<void> {
    try {
        await supabaseAdmin.from('chat_messages').insert([{
            session_id: `voice-${clientIP}`,
            role: 'voice_tool_call',
            content: JSON.stringify({
                tool: toolName,
                args: sanitizeArgsForLog(args),
                result_summary: summarizeResult(result),
                success,
                timestamp: new Date().toISOString(),
            }),
        }]);
    } catch (err) {
        console.error('[VoiceLog] Failed to log tool call:', err);
    }
}

/** Remove sensitive data from args before logging */
function sanitizeArgsForLog(args: Record<string, unknown>): Record<string, unknown> {
    const sanitized = { ...args };
    // Mask email for privacy in logs
    if (typeof sanitized.email === 'string') {
        const [local, domain] = (sanitized.email as string).split('@');
        sanitized.email = `${local.substring(0, 2)}***@${domain}`;
    }
    return sanitized;
}

/** Create a short summary of tool results for logging */
function summarizeResult(result: unknown): string {
    if (!result || typeof result !== 'object') return String(result);
    const r = result as Record<string, unknown>;
    if (r.success !== undefined) return `success=${r.success}`;
    if (r.context) return `context_length=${(r.context as string).length}`;
    return 'completed';
}

// ── Main Handler ────────────────────────────────────────────────────────────

export async function POST(req: Request) {
    try {
        // ── Rate Limiting ────────────────────────────────────────────────
        const clientIP = getClientIP(req);
        const { allowed } = await checkToolExecLimit(clientIP);

        if (!allowed) {
            console.warn(`[ExecuteTool] Rate limit exceeded for IP: ${clientIP}`);
            return new Response(JSON.stringify({
                error: 'Too many requests. Please slow down.',
            }), {
                status: 429,
                headers: {
                    'Content-Type': 'application/json',
                    'Retry-After': '60',
                },
            });
        }

        const body = await req.json();
        const { toolName, args } = body;

        if (!toolName || typeof toolName !== 'string' || !args || typeof args !== 'object') {
            return new Response(JSON.stringify({ error: 'Missing or invalid toolName/args' }), { status: 400 });
        }

        // ── Validate tool name exists ────────────────────────────────────
        if (!(toolName in toolSchemas)) {
            return new Response(JSON.stringify({ error: `Unknown tool: ${toolName}` }), { status: 400 });
        }

        // ── Validate args with Zod ───────────────────────────────────────
        const schema = toolSchemas[toolName as ToolName];
        const validation = schema.safeParse(args);

        if (!validation.success) {
            const errorMessages = validation.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ');
            console.warn(`[ExecuteTool] Validation failed for ${toolName}:`, errorMessages);
            return new Response(JSON.stringify({
                error: 'Invalid tool arguments',
                details: errorMessages,
            }), { status: 400 });
        }

        const validatedArgs = validation.data;
        console.log(`Executing realtime tool: ${toolName}`, validatedArgs);

        // Record tool execution for rate limiting (non-blocking)
        recordRateLimitEvent(clientIP, 'voice_tool_call', `${toolName} from ${clientIP}`);

        let result: unknown = null;

        switch (toolName) {
            case 'searchCompanyKnowledge': {
                const { query } = validatedArgs as z.infer<typeof toolSchemas.searchCompanyKnowledge>;
                // Voice agent already provides a clean query, so we skip the extraction step (isRawMessage = false)
                const context = await retrieveContext(query, false);
                result = { context: context || "No relevant information found in the knowledge base." };
                break;
            }

            case 'sendProposal': {
                const { name, email, company, selectedPackage } = validatedArgs as z.infer<typeof toolSchemas.sendProposal>;

                // ── Persistent Rate Limit (Supabase) ─────────────────────
                const { allowed: proposalAllowed } = await checkProposalLimit(email);

                if (!proposalAllowed) {
                    result = { success: false, rateLimited: true, hoursUntilReset: 24 };
                    break;
                }

                const htmlContent = generateProposalEmail(name, company, selectedPackage);

                if (resend) {
                    try {
                        const { error } = await resend.emails.send({
                            from: 'ARC AI <noreply@arcai.agency>',
                            to: email,
                            subject: `Your Custom Proposal from ARC AI — ${company}`,
                            html: htmlContent,
                        });

                        if (error) {
                            console.error('Resend Error:', error);
                            result = { success: false, emailError: error.message ?? 'Email delivery failed' };
                            break;
                        }
                    } catch (e: unknown) {
                        const err = e as Error;
                        console.error('Email caught error:', err);
                        result = { success: false, emailError: err.message };
                        break;
                    }
                }

                // Record proposal sent for persistent rate limiting
                await recordRateLimitEvent(
                    email.toLowerCase(),
                    'proposal_sent',
                    `Proposal sent to ${email} for ${company} (${selectedPackage})`,
                );

                result = { success: true, message: `Proposal sent successfully to ${email}` };
                break;
            }

            case 'saveLead': {
                const { name, phone, email, company, notes } = validatedArgs as z.infer<typeof toolSchemas.saveLead>;

                const { data, error } = await supabaseAdmin.rpc('submit_contact_form', {
                    p_full_name: name,
                    p_email: email || 'no-email-provided@pending.com',
                    p_phone: phone || null,
                    p_company: company || null,
                    p_subject: 'AI Agent Lead',
                    p_message: null,
                    p_notes: notes,
                    p_source: 'ai_agent_voice',
                });

                if (error) {
                    result = { success: false, error: error.message };
                } else {
                    result = { success: true, leadId: data, message: `Lead saved successfully for ${name}` };
                }
                break;
            }

            case 'subscribeNewsletter': {
                const { email, topic_interest } = validatedArgs as z.infer<typeof toolSchemas.subscribeNewsletter>;

                const { error } = await supabaseAdmin.rpc('subscribe_email_list', {
                    p_email: email,
                    p_topic_interest: topic_interest,
                    p_source: 'ai_agent_voice',
                    p_source_page: null,
                });

                if (error) {
                    result = { success: false, error: error.message };
                } else {
                    result = { success: true, message: `Successfully subscribed ${email}` };
                }
                break;
            }

            default:
                // This should never happen due to the toolSchemas check above
                return new Response(JSON.stringify({ error: `Unknown tool: ${toolName}` }), { status: 400 });
        }

        // ── Log Voice Tool Call (non-blocking) ───────────────────────────
        logVoiceToolCall(clientIP, toolName, args, result, true);

        return new Response(JSON.stringify(result), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error: unknown) {
        const err = error as Error;
        console.error('Execute Tool API Error:', err);

        // Log the failure too
        try {
            const clientIP = getClientIP(req);
            logVoiceToolCall(clientIP, 'unknown', {}, { error: err.message }, false);
        } catch { /* ignore logging errors */ }

        return new Response(JSON.stringify({ error: err.message ?? String(error) }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
