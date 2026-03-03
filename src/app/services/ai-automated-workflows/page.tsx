
import { Metadata } from "next";
import AIAutomatedWorkflowsContent from "./content";

export const metadata: Metadata = {
  title: "ARC AI | AI Workflow Automation UK & Sri Lanka",
  description: "Automate your business operations with AI-powered workflows. ARC AI serves businesses in UK & Sri Lanka — cut costs, eliminate errors & scale 24/7.",
  keywords: [
    "AI workflow automation UK", "business automation Sri Lanka",
    "automated workflows Birmingham", "workflow automation company UK",
    "process automation Sri Lanka", "AI automation agency UK",
    "n8n automation UK", "Zapier alternatives UK", "Make.com agency Sri Lanka",
    "digital transformation UK", "RPA automation company"
  ],
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "AI Automated Workflows Services | ARC AI",
    description: "Automate your business processes and scale efficiently with ARC AI.",
    url: "https://www.arcai.agency/services/ai-automated-workflows",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI Automated Workflows",
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
    title: "AI Automated Workflows Services | ARC AI",
    description: "Automate your business processes and scale efficiently with ARC AI.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/ai-automated-workflows"
  }
};

export default function AIAutomatedWorkflowsPage() {
  return <AIAutomatedWorkflowsContent />;
}
