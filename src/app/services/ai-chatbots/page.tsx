
import { Metadata } from "next";
import AIAgentsContent from "./content";

export const metadata: Metadata = {
  title: "ARC AI | AI Agent Development UK & Sri Lanka",
  description: "Deploy intelligent AI agents in UK & Sri Lanka. ARC AI builds 24/7 customer support AI agents that automate operations, qualify leads & reduce support costs.",
  keywords: [
    "AI agent development UK", "AI agent development company Sri Lanka",
    "AI agent agency Birmingham", "customer support AI agent UK",
    "business AI agent Colombo", "AI agent company Sri Lanka",
    "automated customer service UK", "AI agent integration services",
    "AI conversational agents UK", "WhatsApp AI agent Sri Lanka"
  ],
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "AI Agents Service | ARC AI",
    description: "Transform customer support and automate business operations with AI-driven AI agents from ARC AI.",
    url: "https://www.arcai.agency/services/ai-agents",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI Agents Service",
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
    title: "AI Agents Service | ARC AI",
    description: "Deploy intelligent AI agents with ARC AI. Automate operations and enhance support.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/ai-agents"
  }
};

export default function AIAgentsPage() {
  return <AIAgentsContent />;
}
