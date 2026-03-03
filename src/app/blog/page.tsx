import { Metadata } from "next";
import BlogList from "@/components/BlogList";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "ARC AI Blog | AI & Digital Marketing Insights UK & Sri Lanka",
  description: "Expert insights on AI automation, web design & digital marketing for UK & Sri Lanka. Learn how to grow your business with cutting-edge AI solutions.",
  keywords: [
    "AI automation blog UK", "digital marketing blog Sri Lanka",
    "AI tips for businesses UK", "web design advice Sri Lanka",
    "AI companies Sri Lanka blog", "software company UK insights",
    "AI chatbot tips UK", "digital transformation blog Sri Lanka",
    "marketing technology trends UK", "AI business automation 2025"
  ],
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Digital Marketing & AI Insights | ARC AI Blog",
    description: "Expert insights on AI automation, digital marketing, and web technology to help your business grow.",
    url: "https://www.arcai.agency/blog",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing & AI Insights | ARC AI Blog",
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
    title: "Digital Marketing & AI Insights | ARC AI Blog",
    description: "Expert insights on AI automation, digital marketing, and web technology to help your business grow.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/blog"
  }
};

export default function BlogPage() {
  return (
    <>
      <SchemaOrg
        type="blog"
        pageTitle="Insights & Expertise"
        pageDescription="Explore cutting-edge strategies in AI automation and digital marketing."
        pageUrl="https://arcai.agency/blog"
      />
      <BlogList />
    </>
  );
}
