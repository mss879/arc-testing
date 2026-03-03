import { Metadata } from "next";
import CustomBackendContent from "@/components/CustomBackendContent";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
    title: "Custom Backend & API Development Services | ARC AI",
    description: "Scalable backend systems, RESTful APIs, and cloud infrastructure designed for high performance and security. Power your business with robust engineering.",
    keywords: [
        "backend development UK", "API development company Sri Lanka",
        "custom software development UK", "Node.js development Birmingham",
        "cloud infrastructure Sri Lanka", "software company UK",
        "software company Sri Lanka", "scalable backend systems UK",
        "microservices architecture UK", "database design Colombo",
        "AWS cloud services UK", "best software company Sri Lanka"
    ],
    authors: [{ name: "ARC AI Agency" }],
    openGraph: {
        title: "Custom Backend & API Development Services | ARC AI",
        description: "Build the engine that powers your business. Secure, scalable backend infrastructure designed for growth.",
        url: "https://www.arcai.agency/services/custom-backend",
        siteName: "ARC AI Agency",
        images: [
            {
                url: "https://www.arcai.agency/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Custom Backend & API Development Services | ARC AI",
                type: "image/jpeg",
            },
        ],
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@arcaiagency",
        creator: "@arcaiagency",
        title: "Custom Backend & API Development Services | ARC AI",
        description: "Build the engine that powers your business.",
        images: ["https://www.arcai.agency/og-image.jpg"],
    },
    alternates: {
        canonical: "https://www.arcai.agency/services/custom-backend"
    }
};

export default function CustomBackendPage() {
    return (
        <>
            <SchemaOrg
                type="service-page"
                pageTitle="Custom Backend Systems"
                pageDescription="Scalable backend systems and API development services."
                pageUrl="https://www.arcai.agency/services/custom-backend"
                serviceName="Backend Development"
                serviceDescription="Architecting and building robust backend infrastructure and APIs."
            />
            <CustomBackendContent />
        </>
    );
}
