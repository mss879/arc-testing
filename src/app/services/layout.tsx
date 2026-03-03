import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services - Digital Marketing & AI Solutions",
    description: "Comprehensive digital marketing and AI-powered services including web design, smart ad campaigns, automated workflows, AI chatbots, content generation, and custom solutions.",
    keywords: [
        "digital marketing services", "AI automation services", "web design agency",
        "smart ad campaigns", "AI chatbots", "workflow automation", "content generation",
        "web development", "brand identity", "marketing funnels", "backend systems"
    ],
    openGraph: {
        title: "Services - Digital Marketing & AI Solutions",
        description: "Comprehensive digital marketing and AI-powered services to transform your business and drive growth.",
        url: "https://www.arcai.agency/services",
        type: "website",
        images: [{
            url: "https://www.arcai.agency/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "ARC AI Services"
        }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Services - Digital Marketing & AI Solutions",
        description: "Comprehensive digital marketing and AI-powered services",
        images: ["https://www.arcai.agency/og-image.jpg"]
    },
    alternates: {
        canonical: "https://www.arcai.agency/services"
    }
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
