import { Metadata } from "next";
import SoftwareCompaniesContent from "./content";

export const metadata: Metadata = {
    title: "Software Companies in Sri Lanka — The Definitive 2026 Industry Guide",
    description:
        "An in-depth guide to the 15 leading software companies in Sri Lanka for 2026. Covers enterprise IT, AI development, product engineering, outsourcing rates ($20–$60/hr), Sri Lanka vs India comparison, tech hubs, and expert selection criteria.",
    openGraph: {
        title: "Software Companies in Sri Lanka — The Definitive 2026 Industry Guide",
        description:
            "An in-depth guide to the 15 leading software companies in Sri Lanka for 2026. Updated with industry statistics, pricing benchmarks, and selection criteria.",
        url: "https://www.arcai.agency/software-companies-sri-lanka",
        locale: "en_GB",
        type: "article",
        images: [
            {
                url: "https://www.arcai.agency/software-companies-sri-lanka-guide-2026.webp",
                width: 1200,
                height: 630,
                alt: "Software Companies in Sri Lanka 2026 Guide",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@arcaiagency",
        creator: "@arcaiagency",
        title: "Software Companies in Sri Lanka — 2026 Industry Guide",
        description:
            "An in-depth guide to the 15 leading software companies in Sri Lanka for 2026. Updated with industry statistics, pricing, and selection criteria.",
        images: ["https://www.arcai.agency/software-companies-sri-lanka-guide-2026.webp"],
    },
    alternates: {
        canonical: "https://www.arcai.agency/software-companies-sri-lanka",
    },
    robots: {
        index: true,
        follow: true,
    },
};

/* ── Structured Data ────────────────────────────────────────────── */

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What are the top-rated software development companies in Sri Lanka for 2026?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Based on our evaluation of technical capability, market reputation, innovation, and client portfolio, the leading software companies in Sri Lanka for 2026 include ARC AI (AI-native development), WSO2 (API & integration), Virtusa (enterprise digital engineering), 99x (product engineering), IFS (ERP & FSM), Sysco LABS (supply chain innovation), Calcey Technologies (startup MVPs), Arimac (immersive tech), Rootcode (digital products), Surge Global (development + marketing), Mitra Innovation (cloud migration), Creative Software (dedicated teams), hSenid (HR tech), Addix (custom apps), and CodeGen International (travel tech).",
            },
        },
        {
            "@type": "Question",
            name: "Why is Sri Lanka considered a good destination for software outsourcing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Sri Lanka offers strong English proficiency (higher than many South Asian neighbours), a well-educated STEM workforce of 175,000+ IT professionals, hourly rates of $20–$60 USD (50–70% savings over UK/US), a convenient UTC+5:30 timezone that overlaps with European and Middle Eastern business hours, and growing government commitment including a 30 billion LKR (~US$98M) digital budget allocation in 2026.",
            },
        },
        {
            "@type": "Question",
            name: "How much does it cost to hire a software development company in Sri Lanka?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Hourly rates for software development in Sri Lanka typically range from $20 to $60 USD depending on company size and specialisation. Boutique agencies charge $20–$35/hour, mid-market firms charge $35–$50/hour, and established enterprise firms charge $45–$60/hour. Monthly retainers for dedicated developers range from $2,500 to $5,000. This represents significant savings over UK rates ($80–$150/hour) and US rates ($100–$200/hour).",
            },
        },
        {
            "@type": "Question",
            name: "What services do software companies in Sri Lanka typically offer?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Sri Lankan software companies typically offer custom software development, mobile app development (iOS & Android), web application development (React, Next.js, Angular), enterprise resource planning (ERP), QA & testing, UI/UX design, cloud migration and DevOps, AI/ML solutions, API integration, IT staff augmentation, and managed services. Many firms also specialise in fintech, healthtech, travel tech, and e-commerce.",
            },
        },
        {
            "@type": "Question",
            name: "Which programming languages and technologies are popular among Sri Lankan software companies?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The most popular technologies include JavaScript/TypeScript (React, Next.js, Angular, Node.js), Java (Spring Boot), Python (Django, Flask, AI/ML), C# (.NET), PHP (Laravel), mobile frameworks (React Native, Flutter, Swift, Kotlin), and cloud platforms (AWS, Azure, GCP). AI-focused firms increasingly use LangChain, vector databases, and LLM orchestration frameworks.",
            },
        },
        {
            "@type": "Question",
            name: "How do I choose the right software development partner in Sri Lanka?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Evaluate partners across five pillars: (1) Technical expertise matching your stack, (2) Portfolio with case studies in your domain, (3) Communication standards and agile processes, (4) Security compliance (ISO 27001, SOC2 practices, GDPR awareness), and (5) Scalability and developer retention above 80%. Additionally, request reference calls with existing clients and verify their presence on independent review platforms like Clutch or GoodFirms.",
            },
        },
        {
            "@type": "Question",
            name: "Is Sri Lanka better than India for software outsourcing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It depends on your priorities. India offers unmatched scale (5 million+ developers) and lower entry-level rates. Sri Lanka offers higher average English proficiency, smaller team sizes with senior attention per project, comparable quality at competitive rates, and a timezone ideal for European clients. For quality-focused teams of 3–30 developers, Sri Lanka often outperforms. For teams requiring 100+ developers, India's larger talent pool is advantageous.",
            },
        },
        {
            "@type": "Question",
            name: "What is SLASSCOM and how does it relate to Sri Lankan software companies?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "SLASSCOM (Sri Lanka Association of Software and Service Companies) is the national chamber representing the IT/BPM industry in Sri Lanka. It serves as the primary industry body advocating for policy, talent development, and international market access. Most major software companies in Sri Lanka are SLASSCOM members. The organisation publishes industry reports, organises events, and runs initiatives supporting startup growth and talent pipeline development.",
            },
        },
    ],
};

const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Software Companies in Sri Lanka — The Definitive 2026 Industry Guide",
    description:
        "An in-depth guide to the 15 leading software companies in Sri Lanka for 2026, covering enterprise IT, AI development, product engineering, outsourcing rates, and industry statistics.",
    image: "https://www.arcai.agency/software-companies-sri-lanka-guide-2026.webp",
    author: {
        "@type": "Organization",
        name: "ARC AI",
        url: "https://www.arcai.agency",
    },
    publisher: {
        "@type": "Organization",
        name: "ARC AI",
        logo: {
            "@type": "ImageObject",
            url: "https://www.arcai.agency/favicon.png",
        },
    },
    datePublished: "2026-04-19",
    dateModified: "2026-04-19",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.arcai.agency/software-companies-sri-lanka",
    },
};

const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "ARC AI", url: "https://www.arcai.agency" },
        { "@type": "ListItem", position: 2, name: "WSO2", url: "https://wso2.com" },
        { "@type": "ListItem", position: 3, name: "Virtusa", url: "https://www.virtusa.com" },
        { "@type": "ListItem", position: 4, name: "99x", url: "https://99x.io" },
        { "@type": "ListItem", position: 5, name: "IFS", url: "https://www.ifs.com" },
        { "@type": "ListItem", position: 6, name: "Sysco LABS", url: "https://syscolabs.lk" },
        { "@type": "ListItem", position: 7, name: "Calcey Technologies", url: "https://calcey.com" },
        { "@type": "ListItem", position: 8, name: "Arimac", url: "https://arimac.digital" },
        { "@type": "ListItem", position: 9, name: "Rootcode", url: "https://rootcodelabs.com" },
        { "@type": "ListItem", position: 10, name: "Surge Global", url: "https://surgeglobal.com" },
        { "@type": "ListItem", position: 11, name: "Mitra Innovation", url: "https://mitrainnovation.com" },
        { "@type": "ListItem", position: 12, name: "Creative Software", url: "https://creativesoftware.com" },
        { "@type": "ListItem", position: 13, name: "hSenid", url: "https://hsenid.com" },
        { "@type": "ListItem", position: 14, name: "Addix", url: "https://addix.lk" },
        { "@type": "ListItem", position: 15, name: "CodeGen International", url: "https://codegen.co.uk" },
    ],
};

const breadcrumbJsonLd = {
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
            name: "Software Companies in Sri Lanka",
            item: "https://www.arcai.agency/software-companies-sri-lanka",
        },
    ],
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <SoftwareCompaniesContent />
        </>
    );
}
