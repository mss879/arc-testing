import { Metadata } from "next";
import AISalesSDRsContent from "./content";

export const metadata: Metadata = {
  title: "ARC AI | AI Sales Reps (SDRs) UK & Sri Lanka",
  description: "Automated prospectors that research targets and write hyper-personalized cold emails at massive scale.",
  keywords: [
    "AI SDR software", "automated cold email AI", "sales automation UK", "AI prospecting Sri Lanka"
  ],
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "ARC AI | AI Sales Reps (SDRs)",
    description: "Automated prospectors that research targets and write hyper-personalized cold emails at massive scale.",
    url: "https://www.arcai.agency/services/ai-sales-sdrs",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI AI Sales Reps (SDRs)",
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
    title: "ARC AI | AI Sales Reps (SDRs)",
    description: "Automated prospectors that research targets and write hyper-personalized cold emails at massive scale.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/ai-sales-sdrs"
  }
};

export default function AISalesSDRsPage() {
  return <AISalesSDRsContent />;
}