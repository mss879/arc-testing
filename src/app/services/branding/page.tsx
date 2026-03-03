
import { Metadata } from "next";
import BrandingContent from "./content";

export const metadata: Metadata = {
  title: "ARC AI | Branding Agency UK & Sri Lanka",
  description: "Build a powerful brand identity with ARC AI. Expert branding agency serving UK & Sri Lanka — logo design, brand strategy, visual identity & guidelines.",
  keywords: [
    "branding agency UK", "brand identity design Sri Lanka",
    "logo design agency Birmingham", "branding company Colombo",
    "brand strategy UK", "visual identity design Sri Lanka",
    "branding agency for startups UK", "rebranding agency UK",
    "brand guidelines design Sri Lanka", "best branding agency UK"
  ],
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Branding Services | ARC AI",
    description: "Build a brand that stands out with ARC AI's expert branding services.",
    url: "https://www.arcai.agency/services/branding",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI Branding Services",
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
    title: "Branding Services | ARC AI",
    description: "Build a brand that stands out with ARC AI's expert branding services.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/branding"
  }
};

export default function BrandingPage() {
  return <BrandingContent />;
}
