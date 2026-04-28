import { NextRequest, NextResponse } from 'next/server';

// ── In-memory Rate Limiter ──────────────────────────────────────────────────
// Tracks submissions per IP. Resets after the time window.
// Simple but effective for single-instance deployments (Netlify Functions).
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 10; // max 10 form submissions per hour per IP

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record) {
        rateLimitMap.set(ip, { count: 1, firstRequest: now });
        return false;
    }

    // Reset if window has expired
    if (now - record.firstRequest > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.set(ip, { count: 1, firstRequest: now });
        return false;
    }

    // Check if over limit
    if (record.count >= MAX_REQUESTS_PER_WINDOW) {
        return true;
    }

    // Increment count
    record.count++;
    return false;
}

// Periodic cleanup to prevent memory leaks (every 10 minutes)
setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of rateLimitMap.entries()) {
        if (now - record.firstRequest > RATE_LIMIT_WINDOW_MS) {
            rateLimitMap.delete(ip);
        }
    }
}, 10 * 60 * 1000);

// ── API Handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
    try {
        // Get client IP for rate limiting
        const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
            || req.headers.get('x-real-ip')
            || 'unknown';

        // Check rate limit
        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: 'Too many submissions. Please try again later.' },
                { status: 429 }
            );
        }

        const body = await req.json().catch(() => null);

        // Validate required fields
        if (!body || !body.name || !body.phone || !body.message) {
            return NextResponse.json(
                { error: 'Missing required fields: name, phone, and message are required' },
                { status: 400 }
            );
        }

        const { name, phone, company, service, message } = body;

        // ── Phone number validation ─────────────────────────────────────────
        // Only allow digits, +, -, spaces, parentheses
        const phoneAllowedPattern = /^[0-9+\-\s()]+$/;
        const phoneDigits = phone.replace(/\D/g, '');
        if (!phoneAllowedPattern.test(phone)) {
            return NextResponse.json(
                { error: 'Phone number contains invalid characters. Only digits, +, -, spaces, and parentheses are allowed.' },
                { status: 400 }
            );
        }
        if (phoneDigits.length < 7) {
            return NextResponse.json(
                { error: 'Phone number must contain at least 7 digits.' },
                { status: 400 }
            );
        }
        if (phone.length > 20) {
            return NextResponse.json(
                { error: 'Phone number is too long.' },
                { status: 400 }
            );
        }

        // ── Name validation ─────────────────────────────────────────────────
        if (name.trim().length < 2) {
            return NextResponse.json(
                { error: 'Name must be at least 2 characters.' },
                { status: 400 }
            );
        }

        // ── Message validation ──────────────────────────────────────────────
        if (message.trim().length < 10) {
            return NextResponse.json(
                { error: 'Message must be at least 10 characters.' },
                { status: 400 }
            );
        }

        // Basic input sanitization — reject suspiciously long inputs
        if (name.length > 200 || phone.length > 50 || (company && company.length > 200) || (service && service.length > 200) || message.length > 5000) {
            return NextResponse.json(
                { error: 'Input exceeds maximum allowed length' },
                { status: 400 }
            );
        }

        // Get webhook URL from server-side env (never exposed to client)
        const webhookUrl = process.env.MAKE_WEBHOOK_URL;

        if (!webhookUrl) {
            console.error('MAKE_WEBHOOK_URL is not configured');
            return NextResponse.json(
                { error: 'Contact form is not configured. Please try again later.' },
                { status: 500 }
            );
        }

        // Forward to Make.com webhook
        const webhookResponse = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, phone, company, service, message }),
        });

        if (!webhookResponse.ok) {
            console.error('Webhook error:', webhookResponse.status, webhookResponse.statusText);
            return NextResponse.json(
                { error: 'Failed to process your request. Please try again later.' },
                { status: 502 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
