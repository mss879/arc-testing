import { Metadata } from "next";
import SmartAdCampaignsContent from "./content";

export const metadata: Metadata = {
  title: "ARC AI | Smart Ad Campaigns UK & Sri Lanka",
  description: "Data-driven Meta and Google advertising campaigns that scale ROI. ARC AI serves businesses in UK & Sri Lanka.",
  keywords: [
    "Meta ads UK", "Google ads agency Sri Lanka", "performance marketing", "ROAS agency", "AI ad targeting"
  ],
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "ARC AI | Smart Ad Campaigns",
    description: "Data-driven Meta and Google advertising campaigns that scale ROI. ARC AI serves businesses in UK & Sri Lanka.",
    url: "https://www.arcai.agency/services/smart-ad-campaigns",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI Smart Ad Campaigns",
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
    title: "ARC AI | Smart Ad Campaigns",
    description: "Data-driven Meta and Google advertising campaigns that scale ROI. ARC AI serves businesses in UK & Sri Lanka.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/smart-ad-campaigns"
  }
};

export default function SmartAdCampaignsPage() {
  return <SmartAdCampaignsContent />;
}