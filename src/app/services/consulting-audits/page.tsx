import { Metadata } from "next";
import ConsultingAuditsContent from "./content";

export const metadata: Metadata = {
  title: "ARC AI | Consulting & Automation Audits UK & Sri Lanka",
  description: "Expert strategic consulting to map your business processes and identify high-ROI AI integration opportunities.",
  keywords: [
    "AI consulting UK", "automation audit Sri Lanka", "digital transformation", "business process mapping"
  ],
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "ARC AI | Consulting & Automation Audits",
    description: "Expert strategic consulting to map your business processes and identify high-ROI AI integration opportunities.",
    url: "https://www.arcai.agency/services/consulting-audits",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI Consulting & Automation Audits",
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
    title: "ARC AI | Consulting & Automation Audits",
    description: "Expert strategic consulting to map your business processes and identify high-ROI AI integration opportunities.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/consulting-audits"
  }
};

export default function ConsultingAuditsPage() {
  return <ConsultingAuditsContent />;
}