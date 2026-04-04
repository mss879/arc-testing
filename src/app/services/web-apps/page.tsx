import { Metadata } from "next";
import WebAppsContent from "@/components/WebAppsContent";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
    title: "Custom Web App Development Services | ARC AI",
    description: "Enterprise-grade custom web applications, SaaS platforms, and internal tools built with Next.js and React. Scalable, secure, and tailored to your business.",
    authors: [{ name: "ARC AI Agency" }],
    openGraph: {
        title: "Custom Web App Development Services | ARC AI",
        description: "Build software that scales with your business. Custom web apps tailored to your unique workflows.",
        url: "https://www.arcai.agency/services/web-apps",
        siteName: "ARC AI Agency",
        images: [
            {
                url: "https://www.arcai.agency/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Custom Web App Development Services | ARC AI",
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
        title: "Custom Web App Development Services | ARC AI",
        description: "Build software that scales with your business.",
        images: ["https://www.arcai.agency/og-image.jpg"],
    },
    alternates: {
        canonical: "https://www.arcai.agency/services/web-apps"
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

export default function WebAppsPage() {
    return (
        <>
            <SchemaOrg
                type="service-page"
                pageTitle="Custom Web Apps"
                pageDescription="Custom web applications built with modern technologies to solve complex business problems."
                pageUrl="https://www.arcai.agency/services/web-apps"
                serviceName="Web App Development"
                serviceDescription="Full-cycle custom web application development including design, development, and deployment."
            />
            <WebAppsContent />
        </>
    );
}
