const fs = require('fs');
const path = require('path');

const basePath = path.join(
  'c:', 'Users', 'Shahid', 'Desktop', 'ARC AI Agency', 'ARC AI + personal', 
  'ARC website backups', 'latest arc website16.12,25', 'src', 'app', 'services'
);

const services = [
  {
    slug: 'smart-ad-campaigns',
    title: 'Smart Ad Campaigns',
    shortTitle: 'Ads',
    desc: 'Data-driven Meta and Google advertising campaigns that scale ROI. ARC AI serves businesses in UK & Sri Lanka.',
    componentName: 'SmartAdCampaigns',
    keywords: '"Meta ads UK", "Google ads agency Sri Lanka", "performance marketing", "ROAS agency", "AI ad targeting"'
  },
  {
    slug: 'consulting-audits',
    title: 'Consulting & Automation Audits',
    shortTitle: 'Consulting',
    desc: 'Expert strategic consulting to map your business processes and identify high-ROI AI integration opportunities.',
    componentName: 'ConsultingAudits',
    keywords: '"AI consulting UK", "automation audit Sri Lanka", "digital transformation", "business process mapping"'
  },
  {
    slug: 'ai-data-processing',
    title: 'AI Data Processing',
    shortTitle: 'Data Processing',
    desc: 'Intelligently extract clean data from messy PDFs, receipts, and emails directly into your database using NLP.',
    componentName: 'AIDataProcessing',
    keywords: '"AI data extraction UK", "document parsing AI", "automated invoice processing", "OCR automation Sri Lanka"'
  },
  {
    slug: 'ai-voice-assistants',
    title: 'AI Voice Assistants',
    shortTitle: 'Voice AI',
    desc: 'Human-sounding AI voice agents to call inbound leads instantly and handle 24/7 customer support.',
    componentName: 'AIVoiceAssistants',
    keywords: '"AI voice agents UK", "automated calling AI", "AI receptionist Sri Lanka", "voice AI for business"'
  },
  {
    slug: 'ai-sales-sdrs',
    title: 'AI Sales Reps (SDRs)',
    shortTitle: 'AI SDRs',
    desc: 'Automated prospectors that research targets and write hyper-personalized cold emails at massive scale.',
    componentName: 'AISalesSDRs',
    keywords: '"AI SDR software", "automated cold email AI", "sales automation UK", "AI prospecting Sri Lanka"'
  },
  {
    slug: 'ai-multi-agent-systems',
    title: 'AI Multi-Agent Systems',
    shortTitle: 'Multi-Agent AI',
    desc: 'Complete organizational intelligence with specialized AI agents working together securely.',
    componentName: 'AIMultiAgentSystems',
    keywords: '"Multi-agent AI architecture", "enterprise AI workflows", "LangChain development UK", "CrewAI agency Sri Lanka"'
  }
];

services.forEach(service => {
  const dir = path.join(basePath, service.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Create page.tsx
  const pageContent = `
import { Metadata } from "next";
import ${service.componentName}Content from "./content";

export const metadata: Metadata = {
  title: "ARC AI | ${service.title} UK & Sri Lanka",
  description: "${service.desc}",
  keywords: [
    ${service.keywords}
  ],
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "ARC AI | ${service.title}",
    description: "${service.desc}",
    url: "https://www.arcai.agency/services/${service.slug}",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI ${service.title}",
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
    title: "ARC AI | ${service.title}",
    description: "${service.desc}",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/${service.slug}"
  }
};

export default function ${service.componentName}Page() {
  return <${service.componentName}Content />;
}
`;

  // Provide a temporary content.tsx template (will be replaced by AI)
  const contentTemplate = `"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ${service.componentName}Content() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl font-black mb-6">${service.title}</h1>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">${service.desc}</p>
                </div>
            </section>
            <Footer />
        </div>
    );
}
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), pageContent.trim());
  fs.writeFileSync(path.join(dir, 'content.tsx'), contentTemplate.trim());
  console.log('Generated:', service.slug);
});
