import { Metadata } from "next";
import SmartFunnelsContent from "@/components/SmartFunnelsContent";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
    title: "Smart Sales Funnels & Marketing Automation | ARC AI",
    description: "Intelligent sales funnels that guide prospects from lead to customer automatically. Maximize conversions with behavior-based automation and personalization.",
    authors: [{ name: "ARC AI Agency" }],
    openGraph: {
        title: "Smart Sales Funnels & Marketing Automation | ARC AI",
        description: "Turn leads into customers on autopilot. Intelligent funnels that nurture, qualify, and convert 24/7.",
        url: "https://www.arcai.agency/services/smart-funnels",
        siteName: "ARC AI Agency",
        images: [
            {
                url: "https://www.arcai.agency/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Smart Sales Funnels & Marketing Automation | ARC AI",
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
        title: "Smart Sales Funnels & Marketing Automation | ARC AI",
        description: "Turn leads into customers on autopilot.",
        images: ["https://www.arcai.agency/og-image.jpg"],
    },
    alternates: {
        canonical: "https://www.arcai.agency/services/smart-funnels"
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

export default function SmartFunnelsPage() {
    return (
        <>
            <SchemaOrg
                type="service-page"
                pageTitle="Smart Funnels"
                pageDescription="Intelligent sales funnels and marketing automation services."
                pageUrl="https://www.arcai.agency/services/smart-funnels"
                serviceName="Sales Funnel Automation"
                serviceDescription="Automated sales funnels that nurture leads and drive conversions."
            />
            <SmartFunnelsContent />
        </>
    );
}
