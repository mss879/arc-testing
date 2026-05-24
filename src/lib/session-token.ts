import crypto from 'crypto';

const SIGNING_SECRET = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.OPENAI_API_KEY || 'arc-ai-secure-voice-session-token-key-fallback';

/**
 * Generate a cryptographically signed voice token for a given session, IP, and expiry.
 * The token is bound to both the client's IP address and the specific session ID.
 */
export function generateVoiceToken(sessionId: string, clientIP: string, expiresAt: number): string {
    const payload = `${sessionId}:${clientIP}:${expiresAt}`;
    return crypto.createHmac('sha256', SIGNING_SECRET).update(payload).digest('hex');
}

/**
 * Verify if the voice token is authentic, belongs to the correct client IP and session,
 * and is within its expiration window.
 */
export function verifyVoiceToken(
    token: string | null | undefined,
    sessionId: string | null | undefined,
    clientIP: string,
    expiresAtStr: string | null | undefined
): boolean {
    if (!token || !sessionId || !expiresAtStr) {
        return false;
    }

    const expiresAt = parseInt(expiresAtStr, 10);
    if (isNaN(expiresAt) || Date.now() > expiresAt) {
        return false; // Expired or invalid expiry
    }

    const expectedSignature = generateVoiceToken(sessionId, clientIP, expiresAt);

    try {
        const tokenBuffer = Buffer.from(token, 'hex');
        const expectedBuffer = Buffer.from(expectedSignature, 'hex');

        // Timing-safe comparison to prevent side-channel attacks
        if (tokenBuffer.length !== expectedBuffer.length) {
            return false;
        }
        return crypto.timingSafeEqual(tokenBuffer, expectedBuffer);
    } catch {
        return false;
    }
}
export type { };
