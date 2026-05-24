import { Metadata } from "next";
import WebDesignContent from "@/components/WebDesignContent";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Professional Web Design & Development Services | ARC AI",
  description: "Custom web design and development services using Next.js and React. We build fast, responsive, and SEO-friendly websites that convert visitors into customers.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Professional Web Design & Development Services | ARC AI",
    description: "Transform your online presence with our expert web design and development services. Fast, secure, and beautiful websites.",
    url: "https://www.arcai.agency/services/web-design-development",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Web Design & Development Services | ARC AI",
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
    title: "Professional Web Design & Development Services | ARC AI",
    description: "Transform your online presence with our expert web design and development services.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/services/web-design-development"
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function WebDesignPage() {
  return (
    <>
      <SchemaOrg
        type="service-page"
        pageTitle="Web Design & Development"
        pageDescription="Custom web design and development services for modern businesses."
        pageUrl="https://www.arcai.agency/services/web-design-development"
        serviceName="Web Design & Development"
        serviceDescription="Professional web design and development including responsive design, SEO optimization, and custom web applications."
      />
      <WebDesignContent />
    </>
  );
}
