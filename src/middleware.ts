import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Skip CSP in development — Next.js HMR uses websockets and inline scripts without nonces
    if (process.env.NODE_ENV === 'development') {
        return NextResponse.next();
    }

    // Generate a unique nonce for each request
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

    // Build Content Security Policy with nonce
    // Modern browsers: nonce takes precedence over 'unsafe-inline' for scripts
    // Older browsers: fall back to 'unsafe-inline'
    const csp = [
        `default-src 'self'`,
        `script-src 'self' 'nonce-${nonce}' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com`,
        `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
        `font-src 'self' https://fonts.gstatic.com`,
        `img-src 'self' data: blob: https://gbkrwadxqzwuhhxmkfjb.supabase.co`,
        `connect-src 'self' https://gbkrwadxqzwuhhxmkfjb.supabase.co https://www.google-analytics.com https://region1.google-analytics.com https://api.openai.com`,
        `media-src 'self'`,
        `frame-src 'none'`,
        `upgrade-insecure-requests`,
    ].join('; ');

    // Clone the request headers and set the nonce for downstream use
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-nonce', nonce);

    // Create response with updated headers
    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });

    // Set CSP header on the response
    response.headers.set('Content-Security-Policy', csp);

    return response;
}

// Only apply to page routes — skip API routes, static files, and assets
export const config = {
    matcher: [
        {
            source: '/((?!api|_next/static|_next/image|favicon\\.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|mp4|woff|woff2|otf|ttf|ico|xml|json|txt|webmanifest)).*)',
        },
    ],
};

