import { Metadata } from "next";
import AIMultiAgentSystemsContent from "./content";

export const metadata: Metadata = {
  title: "ARC AI | AI Multi-Agent Systems UK & Sri Lanka",
  description: "Complete organizational intelligence with specialized AI agents working together securely.",
  keywords: [
    "Multi-agent AI architecture", "enterprise AI workflows", "LangChain development UK", "CrewAI agency Sri Lanka"
  ],
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "ARC AI | AI Multi-Agent Systems",
    description: "Complete organizational intelligence with specialized AI agents working together securely.",
    url: "https://www.arcai.agency/services/ai-multi-agent-systems",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI AI Multi-Agent Systems",
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
    title: "ARC AI | AI Multi-Agent Systems",
    description: "Complete organizational intelligence with specialized AI agents working together securely.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/ai-multi-agent-systems"
  }
};

export default function AIMultiAgentSystemsPage() {
  return <AIMultiAgentSystemsContent />;
}