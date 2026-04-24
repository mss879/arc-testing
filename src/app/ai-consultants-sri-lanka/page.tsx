import { Metadata } from "next";
import AIConsultantsContent from "./content";

const post = {
    title: "AI Consultants in Sri Lanka — The Complete 2026 Industry Report",
    excerpt:
        "An authoritative industry report for C-Suite executives on the Sri Lankan AI consulting landscape. Covers the difference between AI hype and ROI, TCO benchmarks (LKR), auditing frameworks, and evaluating traditional vs agile engineering firms.",
    slug: "ai-consultants-sri-lanka",
};

export const metadata: Metadata = {
    title: "AI Consultants in Sri Lanka — The Complete 2026 Industry Report",
    description:
        "An authoritative industry report for C-Suite executives on the Sri Lankan AI consulting landscape. Covers the difference between AI hype and ROI, TCO benchmarks (LKR), auditing frameworks, and evaluating traditional vs agile engineering firms.",
    openGraph: {
        title: "AI Consultants in Sri Lanka — The Complete 2026 Industry Report",
        description:
            "An authoritative industry report for C-Suite executives on the Sri Lankan AI consulting landscape. Covers the difference between AI hype and ROI, TCO benchmarks (LKR), auditing frameworks, and evaluating traditional vs agile engineering firms.",
        type: "article",
        url: "https://www.arcai.agency/ai-consultants-sri-lanka",
        images: [
            {
                url: "/arc-ai-ai-consultants-sri-lanka.png",
                width: 1200,
                height: 630,
                alt: "AI Consultants in Sri Lanka 2026 Industry Report",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Consultants in Sri Lanka — 2026 Industry Report",
        description:
            "An authoritative industry report for C-Suite executives on the Sri Lankan AI consulting landscape. Covers the difference between AI hype and ROI, TCO benchmarks (LKR), auditing frameworks, and evaluating traditional vs agile engineering firms.",
    },
    alternates: {
        canonical: "https://www.arcai.agency/ai-consultants-sri-lanka",
    },
};

/* ── FAQ Schema (FAQPage) ──────────────────────────────────────── */
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What does an AI Consultant actually do?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A legitimate AI consultant bridges the gap between commercial strategy and deep technology. Unlike software engineers who only write code, an AI consultant audits your operational workflows, identifies bottlenecks costing you money, determines if AI can mathematically solve those bottlenecks with a positive ROI, and then architects the deployment roadmap. They tell you what NOT to build just as often as what TO build.",
            },
        },
        {
            "@type": "Question",
            name: "How much does AI Consulting cost in Sri Lanka (2026)?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Initial feasibility studies and operational audits typically range from LKR 150,000 to LKR 400,000. If engaging traditional 'Big 4' management consultancies, strategy reports can exceed LKR 1.5 Million before a single line of code is written. Agile engineering consultancies typically embed the consulting cost into the final deployment pipeline, bringing the Total Cost of Ownership (TCO) down significantly.",
            },
        },
        {
            "@type": "Question",
            name: "Why do most AI implementation projects fail?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Two reasons: 'Garbage In, Garbage Out' (GIGO) and 'Solutionism.' First, companies try to train AI on messy, unstructured Excel sheets, resulting in hallucinating AI models. Second, agencies sell off-the-shelf AI tools to solve problems the business doesn't actually have (Solutionism). A true consultant fixes the data infrastructure first.",
            },
        },
        {
            "@type": "Question",
            name: "Should we hire an in-house Data Scientist instead of a consultant?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A senior Data Scientist or Machine Learning Engineer in Colombo commands a salary of LKR 400,000 to LKR 800,000+ per month. However, building an AI pipeline requires more than just a Data Scientist; it requires Cloud Architects, UI Developers, and Prompt Engineers. Engaging an external consultancy provides a fractional, multi-disciplinary team for a fraction of the annual payroll cost.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between a traditional software agency and an AI consultancy?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A software agency asks: 'What do you want us to build?' An AI consultancy asks: 'Why are your profit margins shrinking in Q3, and what unstructured data do we have to automate that cost center?' Software agencies execute instructions; AI consultancies dictate strategy based on algorithmic feasibility.",
            },
        },
        {
            "@type": "Question",
            name: "What industries in Sri Lanka benefit most from AI consulting?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Tourism and hospitality benefit from dynamic pricing algorithms and AI concierge systems. Apparel and manufacturing gain from supply chain demand forecasting and quality control vision systems. Financial services leverage fraud detection, credit scoring models, and automated KYC compliance. Healthcare is beginning to adopt diagnostic imaging analysis and patient triage automation.",
            },
        },
        {
            "@type": "Question",
            name: "How long does an AI consulting engagement typically last?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A feasibility audit is typically completed in 2 to 4 weeks. A Proof of Concept (PoC) build takes 6 to 12 weeks. Full enterprise deployment can extend to 4 to 8 months depending on scope and data readiness.",
            },
        },
        {
            "@type": "Question",
            name: "Is my company data safe when using AI APIs like OpenAI or Anthropic?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It depends entirely on which API tier the consultant uses. Consumer-grade and free-tier APIs may use your data to train future models. Enterprise-tier APIs guarantee that your data is never stored, logged, or used for model training. A competent AI consultant will always specify the data retention policy in writing before any integration begins.",
            },
        },
    ],
};

/* ── Article Schema (E-E-A-T) ──────────────────────────────────── */
const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI Consultants in Sri Lanka — The Complete 2026 Industry Report",
    description:
        "An authoritative industry report analyzing the Sri Lankan AI consulting ecosystem, including auditing frameworks, data readiness, TCO in LKR, and how to evaluate Big 4 vs Agile firms.",
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
    dateModified: "2026-04-24",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.arcai.agency/ai-consultants-sri-lanka",
    },
    image: "https://www.arcai.agency/arc-ai-ai-consultants-sri-lanka.png",
    wordCount: 4500,
    keywords:
        "AI consultants Sri Lanka, AI consulting firms Colombo, AI strategy, artificial intelligence consultants, AI feasibility study, machine learning consultant Sri Lanka, AI auditing",
    about: {
        "@type": "Thing",
        name: "AI Consulting Industry in Sri Lanka",
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
            name: "AI Consultants Sri Lanka Industry Report",
            item: "https://www.arcai.agency/ai-consultants-sri-lanka",
        },
    ],
};

export default function AIConsultantsPage() {
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
            <AIConsultantsContent />
        </>
    );
}
