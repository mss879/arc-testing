import { Metadata } from "next";
import WebDesignContent from "./content";

const post = {
    title: "Web Design & Development Services Sri Lanka — 2026 Industry Guide | ARC AI",
    excerpt:
        "The definitive guide to web design and web development services in Sri Lanka. Custom Next.js websites, e-commerce, web apps — LKR pricing benchmarks, technology comparisons, and how to choose the right web development company in Colombo (2026).",
    slug: "web-design-sri-lanka",
};

export const metadata: Metadata = {
    title: "Web Design & Development Services Sri Lanka — 2026 Industry Guide | ARC AI",
    description:
        "Web design & development services in Sri Lanka. Custom Next.js websites, e-commerce, web apps — LKR pricing, technology comparison, and how to choose the right agency (2026).",
    openGraph: {
        title: "Web Design & Development Services Sri Lanka — 2026 Industry Guide | ARC AI",
        description:
            "The definitive guide to web design and web development services in Sri Lanka. Covers LKR pricing benchmarks, WordPress vs Next.js, service offerings, and how to evaluate web development companies in Colombo.",
        type: "article",
        url: "https://www.arcai.agency/web-design-sri-lanka",
        images: [
            {
                url: "/arc-ai-web-design-sri-lanka.png",
                width: 1200,
                height: 630,
                alt: "Web Design & Development Services Sri Lanka 2026 Guide",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Design & Development Services Sri Lanka — 2026 Guide",
        description:
            "The definitive guide to web design and web development services in Sri Lanka. LKR pricing, technology comparison, service offerings, and how to evaluate agencies.",
    },
    alternates: {
        canonical: "https://www.arcai.agency/web-design-sri-lanka",
    },
};

/* ── FAQ Schema (FAQPage) ──────────────────────────────────────── */
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the average cost to build a corporate website in Sri Lanka (2026)?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "For a standard corporate website built on legacy CMS (WordPress), expect to pay between LKR 80,000 and LKR 150,000. For high-performance, custom-coded headless architectures (Next.js/React) engineered for SEO dominance, initial capital expenditure ranges from LKR 200,000 to LKR 450,000+. E-commerce deployments heavily depend on SKU volume and payment gateway complexity, usually starting around LKR 150,000.",
            },
        },
        {
            "@type": "Question",
            name: "Why do so many local agencies exclusively push WordPress?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "WordPress relies on pre-packaged themes and a vast ecosystem of third-party plugins. This allows agencies to bypass expensive software engineering talent, utilizing 'assemblers' instead of developers. This significantly lowers their operational costs, enabling them to offer cheaper upfront quotes. The tradeoff is inherited technical debt, severe security vulnerabilities (plugin rot), and inherently slow load times.",
            },
        },
        {
            "@type": "Question",
            name: "What does 'Headless Architecture' mean and why does it matter?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "In traditional monolithic systems like WordPress, the frontend (what users see) and the backend database are tightly coupled. A 'headless' architecture physically separates them. The frontend is built using a modern framework (like Next.js) and communicates with the database via APIs. This results in impenetrable security (no direct database connection for hackers to exploit) and instantaneous page loads via Edge computing.",
            },
        },
        {
            "@type": "Question",
            name: "How does web design directly impact Conversion Rate Optimization (CRO)?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "CRO is the science of turning passive traffic into active leads. Poor web design creates friction. If a mobile page takes over 3 seconds to load, bounce rates increase by 32%. If the contrast ratios are mathematically incorrect, cognitive load increases, causing users to abandon the funnel. A high-converting website removes all visual and technical friction, guiding the user to the endpoint intuitively.",
            },
        },
        {
            "@type": "Question",
            name: "Should we hire an in-house developer or outsource to a Colombo agency?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Hiring a senior Full-Stack or React Developer in Sri Lanka commands a monthly salary of LKR 300,000 to LKR 600,000+. For a single build, this is an inefficient deployment of capital. Engaging a specialized agency provides you with a fractional team (UX Researcher, Frontend Engineer, DevOps, Technical SEO Specialist) for the cost of a single developer's monthly salary.",
            },
        },
        {
            "@type": "Question",
            name: "What web development services are available in Sri Lanka?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Sri Lankan web development companies offer a full spectrum of services including custom corporate website development, e-commerce platform builds (with PayHere and Webxpay payment gateway integration), progressive web apps (PWAs), SaaS web application development, API and backend engineering, and ongoing website maintenance. Leading agencies like ARC AI build exclusively on modern frameworks such as Next.js and React, delivering significantly faster and more secure websites compared to traditional WordPress builds.",
            },
        },
        {
            "@type": "Question",
            name: "How long does custom web development take in Sri Lanka?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Timelines vary based on project complexity. A standard corporate website (5–10 pages) typically takes 3–5 days with ARC AI. A full-featured e-commerce store ranges from 4–8 weeks depending on product catalog size and payment integrations. Custom web applications (dashboards, SaaS platforms) can take 6–16 weeks. Agencies using pre-built WordPress templates may deliver faster initially, but the resulting technical debt often requires a complete rebuild within 12–18 months.",
            },
        },
        {
            "@type": "Question",
            name: "Can a Sri Lankan agency build a multilingual website in Sinhala, Tamil, and English?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Modern web development frameworks like Next.js have built-in internationalisation (i18n) support, enabling seamless multilingual websites in Sinhala, Tamil, and English. This is critical for Sri Lankan businesses targeting both local and international audiences. The key technical considerations include proper Unicode font rendering for Sinhala and Tamil scripts, right-to-left (RTL) layout support if needed, and hreflang tags for SEO so Google serves the correct language version to each user.",
            },
        },
    ],
};

/* ── Article Schema (E-E-A-T) ──────────────────────────────────── */
const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Web Design & Development Services Sri Lanka — The Complete 2026 Industry Guide",
    description:
        "The definitive guide to web design and web development services in Sri Lanka. Covers service offerings, LKR pricing benchmarks, technology stack comparisons, industries served, and how to evaluate web development companies in Colombo.",
    author: {
        "@type": "Organization",
        name: "ARC AI",
        url: "https://www.arcai.agency",
    },
    publisher: {
        "@type": "Organization",
        name: "ARC AI",
        url: "https://www.arcai.agency",
        logo: {
            "@type": "ImageObject",
            url: "https://www.arcai.agency/arc-ai-logo.png",
        },
    },
    datePublished: "2026-04-24",
    dateModified: "2026-04-30",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.arcai.agency/web-design-sri-lanka",
    },
    image: "https://www.arcai.agency/arc-ai-web-design-sri-lanka.png",
    wordCount: 4700,
    keywords:
        "web development services Sri Lanka, web development company Sri Lanka, web design Sri Lanka, web development Colombo, custom web development Sri Lanka, website development Sri Lanka, e-commerce development Sri Lanka, web designers Colombo, website cost Sri Lanka, WordPress vs Next.js, headless CMS Sri Lanka, Core Web Vitals, web application development Sri Lanka",
    about: {
        "@type": "Thing",
        name: "Web Design & Development Services in Sri Lanka",
    },
    isAccessibleForFree: true,
};

/* ── Breadcrumb Schema ─────────────────────────────────────────── */
const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.arcai.agency",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Web Design & Development Services Sri Lanka Guide",
            item: "https://www.arcai.agency/web-design-sri-lanka",
        },
    ],
};

export default function WebDesignSriLankaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
            <WebDesignContent />
        </>
    );
}
