/**
 * Persistent Rate Limiting for ARC AI Voice Agent
 *
 * Uses Supabase for storage so limits survive serverless cold starts.
 * Falls back to "allow" on errors to avoid blocking legitimate users.
 */

import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || '',
);

/**
 * Extract the client's IP address from the request headers.
 * Works with Netlify, Vercel, Cloudflare, and standard proxies.
 */
export function getClientIP(req: Request): string {
    // Netlify / Vercel / most proxies
    const forwarded = req.headers.get('x-forwarded-for');
    if (forwarded) return forwarded.split(',')[0].trim();

    // Cloudflare
    const cfIp = req.headers.get('cf-connecting-ip');
    if (cfIp) return cfIp;

    // Fallback
    const realIp = req.headers.get('x-real-ip');
    if (realIp) return realIp;

    return 'unknown';
}

/**
 * Check whether a request is within its rate limit.
 *
 * @param key       - The identifier to rate-limit on (e.g. IP address or email)
 * @param eventRole - The role/event type stored in Supabase (e.g. 'voice_session', 'voice_tool_call')
 * @param max       - Maximum allowed requests in the window
 * @param windowMs  - Time window in milliseconds
 * @returns Object with `allowed` boolean and `remaining` count
 */
export async function checkRateLimit(
    key: string,
    eventRole: string,
    max: number,
    windowMs: number,
): Promise<{ allowed: boolean; remaining: number; count: number }> {
    // Bypass rate limits in local development so testing isn't blocked
    if (process.env.NODE_ENV === 'development' || key === '127.0.0.1' || key === '::1' || key === 'localhost') {
        return { allowed: true, remaining: 9999, count: 0 };
    }

    try {
        const since = new Date(Date.now() - windowMs).toISOString();

        const { data, error } = await supabaseAdmin
            .from('chat_messages')
            .select('id')
            .eq('role', eventRole)
            .eq('session_id', key)
            .gte('created_at', since);

        if (error) {
            console.error('[RateLimit] Supabase check failed:', error.message);
            // Fail open — don't block users if the check itself fails
            return { allowed: true, remaining: max, count: 0 };
        }

        const count = data?.length ?? 0;
        return {
            allowed: count < max,
            remaining: Math.max(0, max - count),
            count,
        };
    } catch (err) {
        console.error('[RateLimit] Unexpected error:', err);
        return { allowed: true, remaining: max, count: 0 };
    }
}

/**
 * Record a rate-limited event in Supabase for future checks.
 */
export async function recordRateLimitEvent(
    key: string,
    eventRole: string,
    content: string,
): Promise<void> {
    const { error } = await supabaseAdmin
        .from('chat_messages')
        .insert([{ session_id: key, role: eventRole, content }]);

    if (error) {
        console.error('[RateLimit] Failed to record event:', error.message);
    }
}

// ── Pre-configured limiters ─────────────────────────────────────────────────

const ONE_HOUR = 60 * 60 * 1000;
const ONE_DAY = 24 * ONE_HOUR;

/** Voice session creation: 5 sessions per IP per hour */
export async function checkVoiceSessionLimit(ip: string) {
    return checkRateLimit(ip, 'voice_session_created', 5, ONE_HOUR);
}

/** Tool execution: 60 tool calls per IP per hour */
export async function checkToolExecLimit(ip: string) {
    return checkRateLimit(ip, 'voice_tool_call', 60, ONE_HOUR);
}

/** Proposal sending: 3 proposals per email per 24 hours */
export async function checkProposalLimit(email: string) {
    return checkRateLimit(email.toLowerCase(), 'proposal_sent', 3, ONE_DAY);
}
