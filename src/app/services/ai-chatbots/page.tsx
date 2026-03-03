
import { Metadata } from "next";
import AIChatbotsContent from "./content";

export const metadata: Metadata = {
  title: "ARC AI | AI Chatbot Development UK & Sri Lanka",
  description: "Deploy intelligent AI chatbots in UK & Sri Lanka. ARC AI builds 24/7 customer support chatbots that automate operations, qualify leads & reduce support costs.",
  keywords: [
    "AI chatbot development UK", "chatbot development company Sri Lanka",
    "AI chatbot agency Birmingham", "customer support chatbot UK",
    "business chatbot Colombo", "AI chatbot company Sri Lanka",
    "automated customer service UK", "chatbot integration services",
    "AI conversational agents UK", "WhatsApp chatbot Sri Lanka"
  ],
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "AI Chatbots Service | ARC AI",
    description: "Transform customer support and automate business operations with AI-driven chatbots from ARC AI.",
    url: "https://www.arcai.agency/services/ai-chatbots",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI Chatbots Service",
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
    title: "AI Chatbots Service | ARC AI",
    description: "Deploy intelligent chatbots with ARC AI. Automate operations and enhance support.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/ai-chatbots"
  }
};

export default function AIChatbotsPage() {
  return <AIChatbotsContent />;
}
