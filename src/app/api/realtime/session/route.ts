import { VOICE_SYSTEM_PROMPT } from '@/lib/ai-context';
import { getClientIP, checkVoiceSessionLimit, recordRateLimitEvent } from '@/lib/rate-limit';

export async function POST(req: Request) {
    if (!process.env.OPENAI_API_KEY) {
        return new Response(JSON.stringify({ error: 'API key not configured' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    // ── Rate Limiting ────────────────────────────────────────────────────────
    const clientIP = getClientIP(req);
    const { allowed, remaining } = await checkVoiceSessionLimit(clientIP);

    if (!allowed) {
        console.warn(`[Session] Rate limit exceeded for IP: ${clientIP}`);
        return new Response(JSON.stringify({
            error: 'Too many voice sessions. Please try again later.',
        }), {
            status: 429,
            headers: {
                'Content-Type': 'application/json',
                'Retry-After': '3600',
                'X-RateLimit-Remaining': '0',
            },
        });
    }

    try {
        const response = await fetch("https://api.openai.com/v1/realtime/sessions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "gpt-realtime-1.5",
                voice: "ash",
                instructions: VOICE_SYSTEM_PROMPT,
                tools: [
                    {
                        type: "function",
                        name: "searchCompanyKnowledge",
                        description: "Search the company knowledge base (RAG) to find context and answers regarding ARC AI services and processes. Always use this tool when asked about services, capabilities, or pricing if you don't know the answer.",
                        parameters: {
                            type: "object",
                            properties: {
                                query: { type: "string", description: "The search query to look up in the knowledge base." }
                            },
                            required: ["query"]
                        }
                    },
                    {
                        type: "function",
                        name: "sendProposal",
                        description: "Generate and email a custom pricing proposal with ARC AI packages. Use selectedPackage 'all' if the user cannot choose a specific package.",
                        parameters: {
                            type: "object",
                            properties: {
                                name: { type: "string", description: "The prospect's full name" },
                                email: { type: "string", description: "The prospect's email address" },
                                company: { type: "string", description: "The prospect's company name" },
                                selectedPackage: { type: "string", enum: ['starter', 'launch', 'growth', 'scale', 'flow', 'engage', 'qualify', 'command', 'all'], description: "Which package the user is interested in." }
                            },
                            required: ["name", "email", "company", "selectedPackage"]
                        }
                    },
                    {
                        type: "function",
                        name: "saveLead",
                        description: "Save a customer as a new lead in the CRM. Use this when you have gathered enough info about a prospect during the conversation.",
                        parameters: {
                            type: "object",
                            properties: {
                                name: { type: "string", description: "The prospect's full name" },
                                phone: { type: "string", description: "The prospect's phone number" },
                                email: { type: "string", description: "The prospect's email address" },
                                company: { type: "string", description: "The prospect's company name" },
                                notes: { type: "string", description: "AI-generated summary of conversation interests" }
                            },
                            required: ["name", "notes"]
                        }
                    },
                    {
                        type: "function",
                        name: "subscribeNewsletter",
                        description: "Subscribe a user to the ARC AI newsletter. Use this when a user agrees to receive updates and provides their email address.",
                        parameters: {
                            type: "object",
                            properties: {
                                email: { type: "string", description: "The user's email address" },
                                topic_interest: { type: "string", description: "The specific service or topic the user is interested in" }
                            },
                            required: ["email", "topic_interest"]
                        }
                    },
                    {
                        type: "function",
                        name: "navigateClientScreen",
                        description: "Magically control the user's browser to physically navigate to a specific page on the website. Use this anytime you recommend a service package, mention the portfolio, or refer to contact information. It creates a powerful 'co-browsing' experience.",
                        parameters: {
                            type: "object",
                            properties: {
                                target_path: { type: "string", description: "The relative path to navigate to. Valid paths are: '/portfolio' (for case studies), '/web-pricing' (website prices), '/ai-pricing' (AI prices), '/' (home), or '#calendly' (to pop up the booking calendar when user asks to book a call/meeting)." }
                            },
                            required: ["target_path"]
                        }
                    }
                ],
                tool_choice: "auto",
                temperature: 0.7,
                turn_detection: {
                    type: "server_vad",
                    // Increased from 0.5 to 0.8: requires much clearer, louder voice to interrupt the AI. 
                    // This prevents coughs, throat-clears, or background noise from causing accidental interruptions.
                    threshold: 0.8,
                    prefix_padding_ms: 300,
                    // Increased from 500 to 800: Gives the user slightly more time to pause between sentences 
                    // without the AI immediately cutting in.
                    silence_duration_ms: 800,
                },
            }),
        });

        if (!response.ok) {
            const errBody = await response.text();
            console.error("Failed to generate ephemeral token:", response.status, errBody);
            throw new Error(`Failed to generate ephemeral token: ${response.status}`);
        }

        const data = await response.json();

        // Record session creation for rate limiting (non-blocking)
        recordRateLimitEvent(clientIP, 'voice_session_created', `Voice session created from ${clientIP}`);

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'X-RateLimit-Remaining': String(remaining - 1),
            },
        });
    } catch (error: unknown) {
        const err = error as Error;
        console.error('Session Token API Error:', err);
        return new Response(JSON.stringify({
            error: 'Internal server error',
            details: err.message ?? String(error),
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
