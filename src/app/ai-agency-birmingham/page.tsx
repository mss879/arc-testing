import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "AI Agency Birmingham | AI Automation & Web Design — ARC AI",
  description: "ARC AI is Birmingham's leading AI automation and web design agency. Custom AI chatbots, workflow automation, web development, and digital marketing for businesses across Birmingham and the West Midlands.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "AI Agency Birmingham — AI Automation & Web Design | ARC AI",
    description: "Birmingham's leading AI agency. Custom AI chatbots, automated workflows, SEO-optimised websites, and data-driven digital marketing for businesses across the West Midlands.",
    url: "https://www.arcai.agency/ai-agency-birmingham",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI — Birmingham AI Agency",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agency Birmingham — ARC AI",
    description: "Custom AI chatbots, workflow automation, and web design for Birmingham businesses.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/ai-agency-birmingham",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function BirminghamPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SchemaOrg
        type="services"
        pageTitle="AI Agency Birmingham"
        pageDescription="ARC AI is Birmingham's leading AI automation and web design agency."
        pageUrl="https://www.arcai.agency/ai-agency-birmingham"
      />
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "AI Agency Birmingham" },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <p className="text-sm uppercase tracking-[0.2em] text-[rgb(255,73,37)]">
            Birmingham, West Midlands
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
            AI Automation &{" "}
            <span className="bg-gradient-to-r from-[rgb(255,73,37)] to-orange-400 bg-clip-text text-transparent">
              Web Design Agency
            </span>{" "}
            in Birmingham
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed">
            ARC AI is a specialist AI automation and web design agency based in
            Birmingham, serving businesses across the West Midlands, the wider
            UK, and internationally. We combine advanced artificial intelligence
            with expert web development to help businesses automate operations,
            reduce costs, and outperform their competition.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[rgb(255,73,37)] text-white font-semibold rounded-lg hover:scale-105 transition-transform"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 border border-zinc-700 text-white font-semibold rounded-lg hover:border-zinc-500 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 lg:px-12 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              AI & Digital Services for Birmingham Businesses
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Whether you're a startup in Digbeth, a retailer in the Bullring, or an enterprise in Edgbaston, ARC AI delivers tailored AI solutions and digital marketing strategies that drive measurable results. Our Birmingham team understands the local business landscape and combines it with cutting-edge AI technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">AI Chatbots & Virtual Assistants</h3>
              <p className="text-zinc-400 leading-relaxed">
                We build custom AI chatbots for Birmingham businesses that handle customer inquiries 24/7, qualify leads automatically, book appointments, and integrate with your existing CRM. Our chatbots are trained on your business data and deliver accurate, brand-consistent responses — reducing customer service costs by up to 60%.
              </p>
              <Link href="/services/ai-chatbots" className="text-[rgb(255,73,37)] text-sm font-medium hover:underline">
                Learn more about AI Chatbots →
              </Link>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">AI Workflow Automation</h3>
              <p className="text-zinc-400 leading-relaxed">
                Automate repetitive business processes with intelligent AI workflows. From automated lead nurturing and invoice processing to CRM integrations and data entry, our automation solutions save Birmingham businesses an average of 20+ hours per week while eliminating human error and improving operational consistency.
              </p>
              <Link href="/services/ai-automated-workflows" className="text-[rgb(255,73,37)] text-sm font-medium hover:underline">
                Learn more about AI Automation →
              </Link>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Web Design & Development</h3>
              <p className="text-zinc-400 leading-relaxed">
                We design and develop custom, responsive, SEO-optimised websites for Birmingham businesses. Built with modern frameworks like Next.js and React, every site is engineered for speed, accessibility, and conversion. From corporate websites to complex e-commerce platforms and SaaS applications, we deliver pixel-perfect results.
              </p>
              <Link href="/services/web-design-development" className="text-[rgb(255,73,37)] text-sm font-medium hover:underline">
                Learn more about Web Design →
              </Link>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Digital Marketing & SEO</h3>
              <p className="text-zinc-400 leading-relaxed">
                Our data-driven digital marketing services help Birmingham businesses dominate local search results and attract qualified customers. We offer technical SEO audits, content marketing, social media management, Google Ads, and brand identity design — all tailored to the West Midlands market and your specific business goals.
              </p>
              <Link href="/services/smart-ad-campaigns" className="text-[rgb(255,73,37)] text-sm font-medium hover:underline">
                Learn more about Digital Marketing →
              </Link>
            </div>
          </div>

          {/* Why Birmingham businesses choose ARC AI */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Why Birmingham Businesses Choose ARC AI
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3 p-6 rounded-xl border border-zinc-800/50">
                <h3 className="text-lg font-semibold">Local Presence</h3>
                <p className="text-zinc-400 leading-relaxed">
                  With our Birmingham office, we offer in-person consultations, rapid turnaround, and a deep understanding of the West Midlands business ecosystem. We know Birmingham's industries — from manufacturing and logistics to fintech and creative services.
                </p>
              </div>
              <div className="space-y-3 p-6 rounded-xl border border-zinc-800/50">
                <h3 className="text-lg font-semibold">AI-First Approach</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Unlike traditional agencies, we integrate AI into everything we build. From AI-powered content generation and automated customer service to predictive analytics and smart sales funnels, every solution is designed to learn, adapt, and improve over time.
                </p>
              </div>
              <div className="space-y-3 p-6 rounded-xl border border-zinc-800/50">
                <h3 className="text-lg font-semibold">Proven Track Record</h3>
                <p className="text-zinc-400 leading-relaxed">
                  With a 4.9/5 Google rating and 100+ successful projects, ARC AI has a proven track record of delivering results. Our Birmingham clients have seen lead increases of up to 67% and operational cost reductions of 45%.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Frequently Asked Questions — Birmingham AI Agency
            </h2>
            <div className="space-y-4">
              <details className="group border border-zinc-800 rounded-lg p-6" open>
                <summary className="text-white font-medium cursor-pointer list-none flex items-center justify-between">
                  What AI services does ARC AI offer in Birmingham?
                  <span className="text-zinc-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-zinc-400 mt-4 leading-relaxed">
                  ARC AI offers a full range of AI services in Birmingham including AI chatbot development, workflow automation, AI content generation, AI data processing, voice assistants, web design and development, branding, social media marketing, and SEO. We serve businesses of all sizes — from startups to established enterprises — across the West Midlands and beyond.
                </p>
              </details>
              <details className="group border border-zinc-800 rounded-lg p-6">
                <summary className="text-white font-medium cursor-pointer list-none flex items-center justify-between">
                  How much does an AI chatbot cost for a Birmingham business?
                  <span className="text-zinc-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-zinc-400 mt-4 leading-relaxed">
                  AI chatbot pricing varies based on complexity, integrations, and customisation requirements. Our AI chatbot solutions for Birmingham businesses start from competitive rates, with packages tailored to your specific needs. Contact us for a free, no-obligation consultation and quote.
                </p>
              </details>
              <details className="group border border-zinc-800 rounded-lg p-6">
                <summary className="text-white font-medium cursor-pointer list-none flex items-center justify-between">
                  Can ARC AI help my Birmingham business with SEO?
                  <span className="text-zinc-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-zinc-400 mt-4 leading-relaxed">
                  Yes. ARC AI provides comprehensive SEO services for Birmingham businesses, including technical SEO audits, on-page optimisation, local SEO for Google Maps and Google Business Profile, content strategy, link building, and ongoing performance reporting. We help Birmingham businesses rank on the first page of Google for their target keywords.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
