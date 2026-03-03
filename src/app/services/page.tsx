import { Metadata } from "next";
import ServicesList from "@/components/ServicesList";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "ARC AI | Digital Services UK & Sri Lanka — AI, Web Design & Marketing",
  description: "ARC AI services: AI automation, web design, chatbots, branding & digital marketing in UK & Sri Lanka. From smart websites to automated workflows.",
  keywords: [
    "AI automation services UK", "web design services Sri Lanka",
    "AI chatbot services UK", "workflow automation agency UK",
    "content generation Sri Lanka", "custom web apps UK",
    "brand identity design Sri Lanka", "social media marketing UK",
    "digital transformation services UK", "software company UK services",
    "AI company Sri Lanka services", "best web design UK"
  ],
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Digital Marketing & AI Automation Services | ARC AI",
    description: "Transform your business with our AI-powered digital services. From smart websites to automated workflows, we deliver results that matter.",
    url: "https://www.arcai.agency/services",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing & AI Automation Services | ARC AI",
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
    title: "Digital Marketing & AI Automation Services | ARC AI",
    description: "Transform your business with our AI-powered digital services.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services"
  }
};

export default function ServicesPage() {
  return (
    <>
      <SchemaOrg
        type="services"
        pageTitle="Our Services"
        pageDescription="Comprehensive digital marketing and AI-powered services including web design, smart ad campaigns, and automated workflows."
        pageUrl="https://www.arcai.agency/services"
      />
      <ServicesList />
    </>
  );
}
