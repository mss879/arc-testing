// Server Component - Optimized for SEO
import { Metadata } from "next";
import Link from "next/link";
import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SchemaOrg from "@/components/SchemaOrg";

// Dynamic imports for below-the-fold components (reduce initial bundle)
// Using loading fallback to prevent layout shift
const WhyUs = dynamic(() => import("@/components/WhyUs"), {
  ssr: true,
  loading: () => <SectionLoader />
});
const Benefits = dynamic(() => import("@/components/Benefits"), {
  ssr: true,
  loading: () => <SectionLoader />
});
const ClientsSection = dynamic(() => import("@/components/ClientsSection"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const Features = dynamic(() => import("@/components/Features"));
const AIServices = dynamic(() => import("@/components/AIServices"));
const ProblemSection = dynamic(() => import("@/components/ProblemSection"));
const PortfolioCarousel = dynamic(() => import("@/components/PortfolioCarousel"));
const SolutionSection = dynamic(() => import("@/components/SolutionSection"));
const Integrations = dynamic(() => import("@/components/Integrations"));
const Process = dynamic(() => import("@/components/Process"));
const CTA = dynamic(() => import("@/components/CTA"));
const Footer = dynamic(() => import("@/components/Footer"));

// Client-only component - imported separately

// SEO Metadata for Homepage
export const metadata: Metadata = {
  title: "ARC AI | AI Automation & Web Design Agency UK & Sri Lanka",
  description: "ARC AI: Leading AI automation & web design agency in UK & Sri Lanka. Expert AI chatbots, automation workflows, branding & digital marketing. Get a free quote.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "ARC AI - AI Automation and Digital Marketing Company",
    description: "Leading AI automation and digital marketing company in UK & Sri Lanka. Transform your business with cutting-edge web design, AI automation, and digital marketing.",
    url: "https://www.arcai.agency",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI - AI Automation and Digital Marketing Company",
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
    title: "ARC AI - AI Automation and Digital Marketing Company",
    description: "Leading AI automation and digital marketing company in UK & Sri Lanka",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency"
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

// Loading fallback component — invisible to search engines
const SectionLoader = () => (
  <div className="w-full h-96 bg-black" aria-busy="true" aria-label="Loading section" />
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background dark">
      {/* Schema.org Structured Data for SEO */}
      <SchemaOrg type="home" showFAQ={true} />

      {/* SEO H1 — keyword-rich, visible, single H1 for the entire page */}
      <h1 className="sr-only">ARC AI — AI Automation & Web Design Agency in UK & Sri Lanka | Top AI Company in Sri Lanka</h1>

      <Navbar />

      {/* Main content wrapper with semantic HTML */}
      <article>
        {/* Above the fold - load immediately */}
        <Hero />

        {/* Below the fold - dynamically imported and lazy loaded */}
        <WhyUs />
        <Benefits />
        <ClientsSection />
        <ProblemSection />
        <PortfolioCarousel />
        <SolutionSection />
        <ServicesSection />
        <Features />
        <AIServices />
        <Integrations />
        <Process />

        {/* Crawlable SEO content — provides Google with keyword-rich text */}
        <section className="relative bg-black py-24 px-6 lg:px-12" aria-label="About ARC AI services">
          <div className="max-w-5xl mx-auto space-y-16">

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                AI Automation & Digital Marketing Agency — Serving the UK & Sri Lanka
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed">
                ARC AI is a specialist AI automation and web design agency with offices in Birmingham, UK and Colombo, Sri Lanka. Recognised as one of the <Link href="/ai-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">top AI companies in Sri Lanka</Link>, we help businesses of all sizes — from ambitious startups to established enterprises — leverage artificial intelligence, automation workflows, and data-driven marketing to grow faster, reduce costs, and outperform their competition.
              </p>
              <p className="text-base text-zinc-400 leading-relaxed">
                Founded in 2022, ARC AI has served over 100 verified clients across the United Kingdom, Sri Lanka, the Middle East, and beyond. As a leading AI company in Sri Lanka and the UK, our team of AI engineers, full-stack developers, UX designers, and digital strategists work together to deliver solutions that are not just visually stunning but technically superior — built on modern frameworks like Next.js, React, and Node.js, powered by platforms like OpenAI, n8n, Make.com, and Zapier.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Web Design & Development</h3>
                <p className="text-zinc-400 leading-relaxed">
                  We design and develop custom, responsive websites that are SEO-optimised from the ground up. Every site we build is engineered for speed, accessibility, and conversion — using server-side rendering, structured data, and performance best practices. Whether you need a corporate website, e-commerce platform, or SaaS application, we deliver pixel-perfect results that rank on Google and convert visitors into customers.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">AI Chatbots & Virtual Assistants</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Our AI chatbot solutions operate 24/7 to handle customer inquiries, qualify leads, schedule appointments, and process orders — all without human intervention. Built on large language models and trained on your business data, our chatbots deliver accurate, context-aware responses that improve customer satisfaction and reduce operational costs by up to 60%.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">AI Workflow Automation</h3>
                <p className="text-zinc-400 leading-relaxed">
                  We build intelligent automation workflows that connect your tools, eliminate repetitive tasks, and streamline business operations. From automated lead nurturing and CRM integrations to invoice processing and data entry, our automation solutions save businesses an average of 20+ hours per week while reducing errors and improving consistency.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Digital Marketing & Branding</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Our data-driven digital marketing services include social media management, content marketing, search engine optimisation, paid advertising, and brand identity design. We create comprehensive marketing strategies that build brand awareness, drive qualified traffic, and generate measurable ROI across all digital channels.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Why Businesses Choose ARC AI
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <p className="text-lg font-semibold text-white">Dual-Market Expertise</p>
                  <p className="text-zinc-400 leading-relaxed">
                    With teams in both the UK and Sri Lanka, we understand the unique business landscape, consumer behaviour, and digital marketing dynamics of both markets. This is why businesses consistently rank ARC AI among the top AI companies in Sri Lanka — our dual presence allows us to offer competitive pricing without compromising on quality.
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-lg font-semibold text-white">AI-First Approach</p>
                  <p className="text-zinc-400 leading-relaxed">
                    Unlike traditional agencies, we integrate AI into everything we build. From AI-powered content generation and automated customer service to predictive analytics and smart sales funnels, every solution is designed to learn, adapt, and improve over time.
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-lg font-semibold text-white">Proven Results</p>
                  <p className="text-zinc-400 leading-relaxed">
                    Our portfolio speaks for itself — with a 4.9 out of 5 rating on Google Reviews and over 100 successful projects delivered. We have helped clients increase leads by up to 67%, reduce operational costs by 45%, and achieve measurable growth across key performance indicators.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <details className="group border border-zinc-800 rounded-lg p-6" open>
                  <summary className="text-white font-medium cursor-pointer list-none flex items-center justify-between">
                    What AI services does ARC AI offer in the UK?
                    <span className="text-zinc-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-zinc-400 mt-4 leading-relaxed">
                    ARC AI offers AI chatbot development, workflow automation, AI content generation, smart sales funnels, web design and development, motion design, branding, and social media marketing for businesses in the UK, with offices in Birmingham.
                  </p>
                </details>
                <details className="group border border-zinc-800 rounded-lg p-6">
                  <summary className="text-white font-medium cursor-pointer list-none flex items-center justify-between">
                    Does ARC AI work with businesses in Sri Lanka?
                    <span className="text-zinc-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-zinc-400 mt-4 leading-relaxed">
                    Yes. ARC AI is recognised as one of the <a href="/ai-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">top AI companies in Sri Lanka</a>, with a dedicated team in Colombo. We serve Sri Lankan businesses across all our services including web design, AI automation, branding, and digital marketing.
                  </p>
                </details>
                <details className="group border border-zinc-800 rounded-lg p-6">
                  <summary className="text-white font-medium cursor-pointer list-none flex items-center justify-between">
                    How much does a website cost with ARC AI?
                    <span className="text-zinc-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-zinc-400 mt-4 leading-relaxed">
                    Website pricing varies based on complexity, features, and requirements. We offer packages for all business sizes — from simple landing pages to complex enterprise web applications. Contact us for a free, no-obligation quote tailored to your project.
                  </p>
                </details>
                <details className="group border border-zinc-800 rounded-lg p-6">
                  <summary className="text-white font-medium cursor-pointer list-none flex items-center justify-between">
                    Can ARC AI build an AI chatbot for my business?
                    <span className="text-zinc-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-zinc-400 mt-4 leading-relaxed">
                    Yes. ARC AI specialises in AI chatbot development for businesses in the UK and Sri Lanka. Our chatbots operate 24/7, handle customer inquiries, qualify leads, and integrate with your existing CRM, email, and messaging systems.
                  </p>
                </details>
                <details className="group border border-zinc-800 rounded-lg p-6">
                  <summary className="text-white font-medium cursor-pointer list-none flex items-center justify-between">
                    What makes ARC AI different from other agencies?
                    <span className="text-zinc-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-zinc-400 mt-4 leading-relaxed">
                    ARC AI combines AI-first thinking with design and marketing expertise. We use cutting-edge tools like OpenAI, TensorFlow, n8n, and Make.com to build solutions that are not just beautiful but automated and intelligent. We serve both UK and Sri Lanka markets with dedicated teams in each region, offering enterprise-quality work at competitive rates.
                  </p>
                </details>
              </div>
            </div>

            {/* Location pages — internal link equity funnel */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Locations We Serve
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <a href="/ai-agency-birmingham" className="group p-5 rounded-xl border border-zinc-800 hover:border-[rgb(255,73,37)]/30 transition-colors">
                  <p className="text-lg font-semibold text-white group-hover:text-[rgb(255,73,37)] transition-colors">AI Agency Birmingham</p>
                  <p className="text-sm text-zinc-400 mt-1">AI automation, web design & digital marketing in Birmingham, UK.</p>
                </a>
                <a href="/ai-automation-sri-lanka" className="group p-5 rounded-xl border border-zinc-800 hover:border-[rgb(255,73,37)]/30 transition-colors">
                  <p className="text-lg font-semibold text-white group-hover:text-[rgb(255,73,37)] transition-colors">AI Automation Sri Lanka</p>
                  <p className="text-sm text-zinc-400 mt-1">AI automation & web design services for businesses across Sri Lanka.</p>
                </a>
                <a href="/ai-companies-sri-lanka" className="group p-5 rounded-xl border border-zinc-800 hover:border-[rgb(255,73,37)]/30 transition-colors">
                  <p className="text-lg font-semibold text-white group-hover:text-[rgb(255,73,37)] transition-colors">Top AI Companies in Sri Lanka</p>
                  <p className="text-sm text-zinc-400 mt-1">Discover why ARC AI is the #1 AI company in Sri Lanka for 2026.</p>
                </a>
                <a href="/ai-consultants-sri-lanka" className="group p-5 rounded-xl border border-zinc-800 hover:border-[rgb(255,73,37)]/30 transition-colors">
                  <p className="text-lg font-semibold text-white group-hover:text-[rgb(255,73,37)] transition-colors">AI Consultants Sri Lanka</p>
                  <p className="text-sm text-zinc-400 mt-1">Expert AI consulting &amp; strategic audits for Sri Lankan enterprises.</p>
                </a>
                <a href="/web-design-sri-lanka" className="group p-5 rounded-xl border border-zinc-800 hover:border-[rgb(255,73,37)]/30 transition-colors">
                  <p className="text-lg font-semibold text-white group-hover:text-[rgb(255,73,37)] transition-colors">Web Design Sri Lanka</p>
                  <p className="text-sm text-zinc-400 mt-1">Premium web design &amp; development services for businesses in Sri Lanka.</p>
                </a>
                <a href="/software-companies-sri-lanka" className="group p-5 rounded-xl border border-zinc-800 hover:border-[rgb(255,73,37)]/30 transition-colors">
                  <p className="text-lg font-semibold text-white group-hover:text-[rgb(255,73,37)] transition-colors">Software Companies Sri Lanka</p>
                  <p className="text-sm text-zinc-400 mt-1">Top software development companies in Sri Lanka — 2026 guide.</p>
                </a>
              </div>
            </div>

          </div>
        </section>

        <CTA />
      </article>

      <Footer />
    </div>
  );
}
