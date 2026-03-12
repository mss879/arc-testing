import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // CSP disabled — Next.js generates inline scripts that require proper nonce integration
    // with the rendering pipeline (via next.config.js experimental.serverActions or custom
    // Document). Without that integration, CSP blocks Next.js's own scripts and causes
    // a white/black screen. Security headers are still set via netlify.toml.
    return NextResponse.next();
}

// Only apply to page routes — skip API routes, static files, and assets
export const config = {
    matcher: [
        {
            source: '/((?!api|_next/static|_next/image|favicon\\.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|mp4|woff|woff2|otf|ttf|ico|xml|json|txt|webmanifest)).*)',
        },
    ],
};

