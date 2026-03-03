
import { Metadata } from "next";
import AIContentGenerationContent from "./content";

export const metadata: Metadata = {
  title: "ARC AI | AI Content Generation Services UK & Sri Lanka",
  description: "Scale content creation with AI in UK & Sri Lanka. ARC AI generates SEO articles, ad copy, social content & more — aligned with your brand, at scale.",
  keywords: [
    "AI content generation UK", "AI content agency Sri Lanka",
    "AI copywriting services UK", "automated content creation Colombo",
    "SEO content generation agency UK", "AI marketing content UK",
    "blog content generation Sri Lanka", "social media content AI UK",
    "brand content creation agency Birmingham", "AI writing services UK"
  ],
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "AI Content Generation Services | ARC AI",
    description: "Generate high-quality, on-brand content at scale with ARC AI.",
    url: "https://www.arcai.agency/services/ai-content-generation",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI Content Generation Services",
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
    title: "AI Content Generation Services | ARC AI",
    description: "Generate high-quality, on-brand content at scale with ARC AI.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/ai-content-generation"
  }
};

export default function AIContentGenerationPage() {
  return <AIContentGenerationContent />;
}
