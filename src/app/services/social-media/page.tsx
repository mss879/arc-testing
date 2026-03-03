
import { Metadata } from "next";
import SocialMediaContent from "./content";

export const metadata: Metadata = {
  title: "ARC AI | Social Media Marketing Agency UK & Sri Lanka",
  description: "Grow your brand on social media with ARC AI. Data-driven strategy, content creation & community management for businesses in UK & Sri Lanka.",
  keywords: [
    "social media marketing agency UK", "social media management Sri Lanka",
    "social media agency Birmingham", "Facebook marketing agency UK",
    "Instagram marketing Sri Lanka", "LinkedIn marketing agency UK",
    "social media strategy Colombo", "content creation agency UK",
    "TikTok marketing agency UK", "digital marketing agency Sri Lanka"
  ],
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Social Media Marketing Service | ARC AI",
    description: "Transform your social media presence with ARC AI. Strategic content creation and management.",
    url: "https://www.arcai.agency/services/social-media",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI Social Media Service",
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
    title: "Social Media Marketing Service | ARC AI",
    description: "Boost your social media presence with ARC AI. Strategic content creation and management.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/social-media"
  }
};

export default function SocialMediaPage() {
  return <SocialMediaContent />;
}
