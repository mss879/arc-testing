import { Metadata } from "next";
import CustomBackendContent from "@/components/CustomBackendContent";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
    title: "Custom Backend & API Development Services | ARC AI",
    description: "Scalable backend systems, RESTful APIs, and cloud infrastructure designed for high performance and security. Power your business with robust engineering.",
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
    },

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
