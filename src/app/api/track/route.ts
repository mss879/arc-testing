import { createClient } from '@supabase/supabase-js';

// ── Rate Limiting ──────────────────────────────────────────────────────────
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 30; // max 30 page tracks per minute per IP

// Periodic cleanup to prevent memory leaks (every 5 minutes)
setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of rateLimitMap.entries()) {
        if (now - record.firstRequest > RATE_LIMIT_WINDOW_MS) {
            rateLimitMap.delete(ip);
        }
    }
}, 5 * 60 * 1000);

export async function POST(req: Request) {
    try {
        // ── Rate Limiting ────────────────────────────────────────────────
        const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
            || req.headers.get('x-real-ip')
            || 'unknown';

        const now = Date.now();
        const record = rateLimitMap.get(clientIP);
        if (record) {
            if (now - record.firstRequest > RATE_LIMIT_WINDOW_MS) {
                rateLimitMap.set(clientIP, { count: 1, firstRequest: now });
            } else if (record.count >= MAX_REQUESTS_PER_WINDOW) {
                return new Response(JSON.stringify({ ok: true }), {
                    status: 200, // Return 200 silently — don't reveal rate limiting to analytics scripts
                    headers: { 'Content-Type': 'application/json' },
                });
            } else {
                record.count++;
            }
        } else {
            rateLimitMap.set(clientIP, { count: 1, firstRequest: now });
        }

        const body = await req.json().catch(() => null);

        if (!body || !body.visitorId || !body.pagePath) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const { visitorId, pagePath, referrer } = body;

        // ── Input Validation ─────────────────────────────────────────────
        if (typeof visitorId !== 'string' || visitorId.length > 100) {
            return new Response(JSON.stringify({ error: 'Invalid visitorId' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        if (typeof pagePath !== 'string' || pagePath.length > 500) {
            return new Response(JSON.stringify({ error: 'Invalid pagePath' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        if (referrer && (typeof referrer !== 'string' || referrer.length > 2000)) {
            return new Response(JSON.stringify({ error: 'Invalid referrer' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const supabaseAdmin = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL || '',
            process.env.SUPABASE_SERVICE_ROLE_KEY || '',
        );

        await supabaseAdmin.rpc('log_page_visit', {
            p_visitor_id: visitorId,
            p_page_path: pagePath,
            p_referrer: referrer || null,
        });

        return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Track API Error:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
