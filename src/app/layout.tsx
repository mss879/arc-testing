import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "@/index.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/components/providers/query-provider";
import PerformanceMonitor from "@/components/PerformanceMonitor";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
});

const flarex = localFont({
  src: "./fonts/flarex.otf",
  variable: "--font-flarex",
  display: "swap",
});

// Comprehensive SEO Metadata for UK and Sri Lankan markets
export const metadata: Metadata = {
  metadataBase: new URL('https://www.arcai.agency'),
  title: 'ARC AI - AI Automation and Digital Marketing Company UK | Sri Lanka',
  description: 'Leading AI automation and digital marketing company in UK & Sri Lanka. Expert web design, branding, AI automation, chatbots, content generation & digital marketing services. Transform your business with cutting-edge technology.',

  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180' },
    ],
  },

  openGraph: {
    title: 'ARC AI - AI Automation and Digital Marketing Company',
    description: 'Leading AI automation and digital marketing company in UK & Sri Lanka. Expert web design, branding, AI automation, chatbots, content generation & digital marketing services.',
    url: 'https://www.arcai.agency',
    siteName: 'ARC AI',
    type: 'website',
    locale: 'en_GB',

    images: [
      {
        url: 'https://www.arcai.agency/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ARC AI - AI Automation and Digital Marketing Company',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@arcaiagency',
    creator: '@arcaiagency',
    title: 'ARC AI - AI Automation and Digital Marketing Company',
    description: 'Leading AI automation and digital marketing company in UK & Sri Lanka. Expert web design, branding, AI automation & digital marketing.',
    images: ['https://www.arcai.agency/og-image.jpg'],
  },

  // Keeping other existing metadata for SEO but ensuring they don't conflict
  // Note: Google has officially ignored meta keywords since 2009 — removed to keep code clean
  authors: [{ name: "ARC AI", url: "https://www.arcai.agency" }],
  creator: "ARC AI",
  publisher: "ARC AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.arcai.agency',
    languages: {
      'en-GB': 'https://www.arcai.agency',
      'en-LK': 'https://www.arcai.agency',
    },
  },
  // TODO: Replace with your actual Google Search Console verification code
  // verification: { google: 'paste-your-actual-code-here' },
  category: 'technology',
  classification: 'Business Services',
  other: {
    'geo.region': 'GB',
    'geo.placename': 'Birmingham, United Kingdom',
    'geo.region.secondary': 'LK',
    'geo.placename.secondary': 'Colombo, Sri Lanka',
    'distribution': 'global',
    'revisit-after': '7 days',
    'language': 'English',
    'coverage': 'Worldwide',
    'rating': 'General',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className="dark">
      <head>
        {/* Critical Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* DNS Prefetch & Preconnect - Reduce request latency */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload Critical Resources - Reduce LCP */}
        <link rel="preload" as="image" href="/logo.png" type="image/png" fetchPriority="high" />
        {/* Remove video preload - let browser decide based on bandwidth */}
        <link rel="preload" as="font" href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2" type="font/woff2" crossOrigin="anonymous" fetchPriority="high" />


        {/* Web App Manifest - Deferred */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme Colors */}
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />

        {/* Performance & Security Headers */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0447V2XK5V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
              gtag('config', 'G-0447V2XK5V');
          `}
        </Script>
      </head>
      <body className={`${inter.className} ${flarex.variable}`}>
        <PerformanceMonitor />
        <QueryProvider>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
