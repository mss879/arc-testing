import { Metadata } from "next";
import AIDataProcessingContent from "./content";

export const metadata: Metadata = {
  title: "ARC AI | AI Data Processing UK & Sri Lanka",
  description: "Intelligently extract clean data from messy PDFs, receipts, and emails directly into your database using NLP.",
  keywords: [
    "AI data extraction UK", "document parsing AI", "automated invoice processing", "OCR automation Sri Lanka"
  ],
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "ARC AI | AI Data Processing",
    description: "Intelligently extract clean data from messy PDFs, receipts, and emails directly into your database using NLP.",
    url: "https://www.arcai.agency/services/ai-data-processing",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI AI Data Processing",
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
    title: "ARC AI | AI Data Processing",
    description: "Intelligently extract clean data from messy PDFs, receipts, and emails directly into your database using NLP.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/ai-data-processing"
  }
};

export default function AIDataProcessingPage() {
  return <AIDataProcessingContent />;
}