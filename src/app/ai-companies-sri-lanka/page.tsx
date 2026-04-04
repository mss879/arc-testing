import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Top AI Companies in Sri Lanka (2026) — Leading AI Agency | ARC AI",
  description:
    "Discover the top AI companies in Sri Lanka for 2026. ARC AI is Colombo's leading AI company offering chatbots, automation, web design & digital marketing. 100+ projects delivered, 4.9/5 Google rating.",
  authors: [{ name: "ARC AI Agency" }],
  openGraph: {
    title: "Top AI Companies in Sri Lanka (2026) | ARC AI",
    description:
      "ARC AI is Sri Lanka's #1 AI company. Custom AI chatbots, workflow automation, smart websites, and digital marketing for businesses across Colombo and Sri Lanka.",
    url: "https://www.arcai.agency/ai-companies-sri-lanka",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Top AI Companies in Sri Lanka — ARC AI",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top AI Companies in Sri Lanka (2026) | ARC AI",
    description:
      "Sri Lanka's leading AI company. Custom AI chatbots, automation, and web design for businesses across Colombo.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/ai-companies-sri-lanka",
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

// FAQPage + LocalBusiness + Organization JSON-LD
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the top AI companies in Sri Lanka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ARC AI is widely recognised as one of the top AI companies in Sri Lanka, headquartered in Colombo with offices in Birmingham, UK. ARC AI specialises in AI chatbot development, workflow automation, smart website design, AI content generation, and digital marketing. With over 100 projects delivered and a 4.9/5 Google rating, ARC AI serves businesses across tourism, real estate, e-commerce, healthcare, and manufacturing sectors in Sri Lanka.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI company in Sri Lanka is best for chatbots?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ARC AI is the leading AI chatbot development company in Sri Lanka. Their AI chatbots operate 24/7 in Sinhala, Tamil, and English, handle customer inquiries, qualify leads, book appointments, and integrate with WhatsApp, Facebook Messenger, and websites. Sri Lankan businesses using ARC AI chatbots have seen customer service costs reduce by up to 60% and response times drop from hours to seconds.",
      },
    },
    {
      "@type": "Question",
      name: "How much does AI automation cost in Sri Lanka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI automation costs in Sri Lanka vary based on complexity, integrations, and scale. ARC AI offers competitively priced AI solutions tailored to the Sri Lankan market, from basic chatbots to enterprise-grade multi-agent systems. Contact ARC AI for a free consultation and customised quote. Their dual-market model (UK + Sri Lanka) means you get international-quality AI at local Sri Lankan rates.",
      },
    },
    {
      "@type": "Question",
      name: "Does ARC AI have an office in Sri Lanka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ARC AI has its Sri Lankan headquarters in Colombo, with a dedicated team of AI engineers, web developers, and digital marketers. They serve businesses across Colombo, Kandy, Galle, Negombo, and all other cities in Sri Lanka, both in-person and remotely.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do AI companies in Sri Lanka serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI companies in Sri Lanka, particularly ARC AI, serve a wide range of industries including tourism and hospitality, real estate, e-commerce, healthcare, education, manufacturing, fintech, food and beverage, logistics, retail, legal services, and construction. Each industry benefits from tailored AI solutions such as booking automation, lead qualification, inventory management, and customer service chatbots.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI companies in Sri Lanka build multilingual chatbots?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Leading AI companies in Sri Lanka like ARC AI build multilingual chatbots that operate in Sinhala, Tamil, and English. These chatbots are culturally aware, understand local context and communication preferences, and can be deployed across WhatsApp, Facebook Messenger, websites, and other channels used by Sri Lankan consumers.",
      },
    },
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.arcai.agency/ai-companies-sri-lanka#localbusiness",
  name: "ARC AI — Top AI Company in Sri Lanka",
  alternateName: "ARC AI Agency Sri Lanka",
  url: "https://www.arcai.agency/ai-companies-sri-lanka",
  logo: {
    "@type": "ImageObject",
    url: "https://www.arcai.agency/logo.png",
    width: 512,
    height: 512,
  },
  description:
    "ARC AI is one of the top AI companies in Sri Lanka, offering AI chatbot development, workflow automation, web design, and digital marketing services from Colombo.",
  email: "support@arcai.agency",
  telephone: "+94771852522",
  priceRange: "LKR",
  address: {
    "@type": "PostalAddress",
    addressCountry: "LK",
    addressRegion: "Western Province",
    addressLocality: "Colombo",
    streetAddress: "Colombo 4",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.8935,
    longitude: 79.8558,
  },
  areaServed: {
    "@type": "Country",
    name: "Sri Lanka",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "47",
    reviewCount: "47",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://x.com/arc_ai_agency",
    "https://www.instagram.com/arcai_agency/",
    "https://www.linkedin.com/company/105845719",
    "https://www.facebook.com/ARCAI.lk",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.arcai.agency",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI Companies in Sri Lanka",
      item: "https://www.arcai.agency/ai-companies-sri-lanka",
    },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.arcai.agency/ai-companies-sri-lanka#webpage",
  url: "https://www.arcai.agency/ai-companies-sri-lanka",
  name: "Top AI Companies in Sri Lanka (2026) — Leading AI Agency | ARC AI",
  description: "Discover the top AI companies in Sri Lanka for 2026. ARC AI is Colombo's leading AI company offering chatbots, automation, web design & digital marketing.",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.arcai.agency/#website",
    url: "https://www.arcai.agency",
    name: "ARC AI Agency",
    publisher: { "@id": "https://www.arcai.agency/#organization" },
  },
  about: { "@id": "https://www.arcai.agency/ai-companies-sri-lanka#localbusiness" },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.arcai.agency/og-image.jpg",
  },
  datePublished: "2026-01-15",
  dateModified: "2026-04-04",
  inLanguage: "en",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.arcai.agency/#organization",
  name: "ARC AI",
  alternateName: "ARC AI Agency",
  url: "https://www.arcai.agency",
  logo: {
    "@type": "ImageObject",
    url: "https://www.arcai.agency/logo.png",
    width: 512,
    height: 512,
  },
  description: "ARC AI is one of the top AI companies in Sri Lanka and the UK, specialising in AI automation, chatbot development, web design, and digital marketing.",
  email: "support@arcai.agency",
  telephone: "+94771852522",
  address: [
    {
      "@type": "PostalAddress",
      addressCountry: "LK",
      addressLocality: "Colombo",
      addressRegion: "Western Province",
    },
    {
      "@type": "PostalAddress",
      addressCountry: "GB",
      addressLocality: "Birmingham",
      addressRegion: "West Midlands",
    },
  ],
  sameAs: [
    "https://x.com/arc_ai_agency",
    "https://www.instagram.com/arcai_agency/",
    "https://www.linkedin.com/company/105845719",
    "https://www.facebook.com/ARCAI.lk",
  ],
  foundingDate: "2022",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 50 },
  knowsAbout: [
    "Artificial Intelligence",
    "AI Chatbots",
    "Workflow Automation",
    "Web Design",
    "Digital Marketing",
    "Machine Learning",
  ],
};

export default function AICompaniesSriLankaPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollToTop />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "AI Companies in Sri Lanka" },
        ]}
      />
      <FloatingActions />

      {/* Hero Section */}
      <section className="relative pt-8 md:pt-16 pb-20 px-6 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(255,73,37)]/[0.03] via-transparent to-transparent pointer-events-none" aria-hidden="true" />
        <div className="max-w-5xl mx-auto space-y-8 relative z-10">
          <p className="text-sm uppercase tracking-[0.2em] text-[rgb(255,73,37)]">
            Sri Lanka&apos;s Leading AI Company
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
            Top AI Companies in{" "}
            <span className="bg-gradient-to-r from-[rgb(255,73,37)] to-orange-400 bg-clip-text text-transparent">
              Sri Lanka
            </span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed">
            Looking for the best AI companies in Sri Lanka? ARC AI is
            Colombo&apos;s leading artificial intelligence company, delivering
            custom AI chatbots, workflow automation, smart websites, and
            data-driven digital marketing for businesses across Sri Lanka. With
            100+ projects delivered and a 4.9/5 Google rating, we help Sri
            Lankan businesses automate operations, reduce costs, and scale
            faster.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[rgb(255,73,37)] text-white font-semibold rounded-lg hover:scale-105 transition-transform"
            >
              Get a Free AI Consultation
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

      {/* What Makes a Top AI Company Section */}
      <section className="py-20 px-6 lg:px-12 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              What Makes a Top AI Company in Sri Lanka?
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Sri Lanka&apos;s AI industry is rapidly growing, with businesses
              across Colombo, Kandy, and Galle increasingly adopting artificial
              intelligence to gain a competitive edge. But not all AI companies
              in Sri Lanka are equal. The best AI companies share these critical
              qualities:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3 p-6 rounded-xl border border-zinc-800/50">
              <h3 className="text-lg font-semibold">Proven Track Record</h3>
              <p className="text-zinc-400 leading-relaxed">
                Top AI companies in Sri Lanka have a verifiable portfolio of
                successful AI deployments with measurable business impact —
                not just demo projects or proof-of-concepts. Look for companies
                with 50+ delivered projects, client testimonials, and
                quantifiable results like lead increases, cost reductions, and
                revenue growth.
              </p>
            </div>
            <div className="space-y-3 p-6 rounded-xl border border-zinc-800/50">
              <h3 className="text-lg font-semibold">
                Local + International Expertise
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                The best AI companies in Sri Lanka combine deep understanding
                of the local market — including Sinhala and Tamil language
                capabilities, local business culture, and regulatory
                requirements — with international best practices and
                enterprise-grade technology standards.
              </p>
            </div>
            <div className="space-y-3 p-6 rounded-xl border border-zinc-800/50">
              <h3 className="text-lg font-semibold">
                Full-Stack AI Capabilities
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Leading AI companies in Sri Lanka offer end-to-end solutions —
                from AI strategy consulting and chatbot development to workflow
                automation, data processing, content generation, and ongoing
                support. Avoid companies that only offer one narrow AI service.
              </p>
            </div>
            <div className="space-y-3 p-6 rounded-xl border border-zinc-800/50">
              <h3 className="text-lg font-semibold">
                Transparent Pricing & Support
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Trustworthy AI companies in Sri Lanka provide clear pricing,
                detailed proposals, and dedicated project managers. They offer
                ongoing support and maintenance after deployment — not just a
                one-time handoff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARC AI — #1 AI Company Section */}
      <section className="py-20 px-6 lg:px-12 bg-zinc-950/50">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[rgb(255,73,37)]">
              #1 AI Company in Sri Lanka
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              ARC AI — Sri Lanka&apos;s Leading AI Company
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
              Founded in 2022 and headquartered in Colombo with a second office
              in Birmingham, UK, ARC AI has rapidly established itself as one of
              the top AI companies in Sri Lanka. We combine cutting-edge
              artificial intelligence with expert web development and digital
              marketing to deliver complete digital transformation solutions for
              Sri Lankan businesses.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: "100+", label: "Projects Delivered" },
              { stat: "4.9/5", label: "Google Reviews" },
              { stat: "67%", label: "Avg. Lead Increase" },
              { stat: "60%", label: "Cost Reduction" },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center p-6 rounded-xl border border-zinc-800/50"
              >
                <p className="text-3xl md:text-4xl font-black text-[rgb(255,73,37)]">
                  {item.stat}
                </p>
                <p className="text-sm text-zinc-400 mt-2">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">
              AI Services We Offer in Sri Lanka
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">
                  AI Chatbots & Virtual Assistants
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  We build custom AI chatbots that operate 24/7 in Sinhala,
                  Tamil, and English. Our chatbots handle customer inquiries,
                  qualify leads, book appointments, and integrate with
                  WhatsApp, Facebook Messenger, and your website. Sri Lankan
                  businesses using our chatbots have reduced customer service
                  costs by up to 60%.
                </p>
                <Link
                  href="/services/ai-chatbots"
                  className="text-[rgb(255,73,37)] text-sm font-medium hover:underline"
                >
                  Learn more about AI Chatbots →
                </Link>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">
                  AI Workflow Automation
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  Automate repetitive business processes with intelligent AI
                  workflows. From automated lead nurturing and invoice
                  processing to CRM integrations and data entry, our
                  automation solutions save Sri Lankan businesses 20+ hours per
                  week while eliminating human error.
                </p>
                <Link
                  href="/services/ai-automated-workflows"
                  className="text-[rgb(255,73,37)] text-sm font-medium hover:underline"
                >
                  Learn more about AI Automation →
                </Link>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">
                  Smart Website Development
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  We build Smart Websites — AI-powered websites that actively
                  engage visitors with built-in chatbots, capture leads
                  automatically, and provide real-time analytics. Built on
                  Next.js and React for blazing-fast performance and superior
                  Google rankings.
                </p>
                <Link
                  href="/services/web-design-development"
                  className="text-[rgb(255,73,37)] text-sm font-medium hover:underline"
                >
                  Learn more about Web Design →
                </Link>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">
                  Digital Marketing & SEO
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  Data-driven digital marketing designed for the Sri Lankan
                  market. We offer social media management, Google Ads, SEO,
                  content marketing, and brand identity design — all measured,
                  optimised, and reported on for maximum ROI.
                </p>
                <Link
                  href="/services/social-media"
                  className="text-[rgb(255,73,37)] text-sm font-medium hover:underline"
                >
                  Learn more about Digital Marketing →
                </Link>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">
                  AI Content Generation
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  Scale your content production with AI. We build content
                  generation systems that produce SEO-optimised blog posts,
                  social media content, ad copy, product descriptions, and
                  email campaigns — all aligned with your brand voice and
                  target audience.
                </p>
                <Link
                  href="/services/ai-content-generation"
                  className="text-[rgb(255,73,37)] text-sm font-medium hover:underline"
                >
                  Learn more about AI Content →
                </Link>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">
                  AI Voice Assistants
                </h4>
                <p className="text-zinc-400 leading-relaxed">
                  Human-sounding AI voice agents that handle inbound and
                  outbound calls 24/7. Perfect for lead follow-up, appointment
                  scheduling, customer support, and sales qualification. Our
                  voice assistants integrate with your phone system and CRM.
                </p>
                <Link
                  href="/services/ai-voice-assistants"
                  className="text-[rgb(255,73,37)] text-sm font-medium hover:underline"
                >
                  Learn more about AI Voice →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results from Sri Lankan Clients */}
      <section className="py-20 px-6 lg:px-12 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Real Results from Sri Lankan Businesses
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              As one of the top AI companies in Sri Lanka, ARC AI has delivered
              measurable business impact across multiple industries. Here are
              real results from our Sri Lankan clients:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-zinc-800/50 p-8 space-y-6">
              <p className="text-xs uppercase tracking-widest text-[rgb(255,73,37)]">
                Tourism & Hospitality
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-black text-white">+167%</p>
                  <p className="text-sm text-zinc-400">Booking Enquiries</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">-60%</p>
                  <p className="text-sm text-zinc-400">Customer Service Cost</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">&lt;10s</p>
                  <p className="text-sm text-zinc-400">Response Time (from 6-12hrs)</p>
                </div>
              </div>
              <Link
                href="/case-studies"
                className="text-[rgb(255,73,37)] text-sm font-medium hover:underline"
              >
                Read full case study →
              </Link>
            </div>

            <div className="rounded-2xl border border-zinc-800/50 p-8 space-y-6">
              <p className="text-xs uppercase tracking-widest text-[rgb(255,73,37)]">
                Real Estate
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-black text-white">+247%</p>
                  <p className="text-sm text-zinc-400">Qualified Lead Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">+160%</p>
                  <p className="text-sm text-zinc-400">Viewings Booked</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">-75%</p>
                  <p className="text-sm text-zinc-400">Agent Call Time</p>
                </div>
              </div>
              <Link
                href="/case-studies"
                className="text-[rgb(255,73,37)] text-sm font-medium hover:underline"
              >
                Read full case study →
              </Link>
            </div>

            <div className="rounded-2xl border border-zinc-800/50 p-8 space-y-6">
              <p className="text-xs uppercase tracking-widest text-[rgb(255,73,37)]">
                E-Commerce
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-black text-white">+237%</p>
                  <p className="text-sm text-zinc-400">Organic Traffic</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">-46%</p>
                  <p className="text-sm text-zinc-400">Cart Abandonment</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">+183%</p>
                  <p className="text-sm text-zinc-400">Monthly Revenue</p>
                </div>
              </div>
              <Link
                href="/case-studies"
                className="text-[rgb(255,73,37)] text-sm font-medium hover:underline"
              >
                Read full case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-6 lg:px-12 bg-zinc-950/50">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Industries Served by AI Companies in Sri Lanka
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            AI companies in Sri Lanka serve a diverse range of industries. ARC
            AI has delivered tailored AI solutions across all major Sri Lankan
            business sectors:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Tourism & Hospitality",
              "Real Estate",
              "E-Commerce",
              "Healthcare",
              "Education",
              "Manufacturing",
              "Fintech",
              "Food & Beverage",
              "Logistics",
              "Retail",
              "Legal Services",
              "Construction",
            ].map((industry) => (
              <div
                key={industry}
                className="p-4 rounded-lg border border-zinc-800/50 text-center hover:border-[rgb(255,73,37)]/30 transition-colors"
              >
                <span className="text-sm text-zinc-300">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ARC AI */}
      <section className="py-20 px-6 lg:px-12 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why Sri Lankan Businesses Choose ARC AI Over Other AI Companies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3 p-6 rounded-xl border border-zinc-800/50">
              <h3 className="text-lg font-semibold">Colombo + UK Presence</h3>
              <p className="text-zinc-400 leading-relaxed">
                With teams in both Colombo and Birmingham (UK), ARC AI combines
                local Sri Lankan market knowledge with international
                enterprise-grade technology. We understand Sri Lanka&apos;s
                unique digital landscape, consumer behaviour, and regulatory
                requirements — while delivering solutions that meet global
                standards.
              </p>
            </div>
            <div className="space-y-3 p-6 rounded-xl border border-zinc-800/50">
              <h3 className="text-lg font-semibold">
                Multilingual AI Solutions
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Our AI chatbots and voice assistants work in Sinhala, Tamil, and
                English — ensuring your AI solutions reach all Sri Lankan
                audiences. We build culturally aware AI that understands local
                context, slang, and communication preferences across all three
                languages.
              </p>
            </div>
            <div className="space-y-3 p-6 rounded-xl border border-zinc-800/50">
              <h3 className="text-lg font-semibold">Competitive Pricing</h3>
              <p className="text-zinc-400 leading-relaxed">
                ARC AI delivers world-class AI solutions at competitive Sri
                Lankan rates. Our dual-market model means you get UK-quality
                engineering and design at prices that make sense for the Sri
                Lankan market. We offer flexible payment plans for all business
                sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 px-6 lg:px-12 bg-zinc-950/50">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Learn More About AI in Sri Lanka
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/blog/best-ai-companies-sri-lanka-2026"
              className="group p-6 rounded-xl border border-zinc-800/50 hover:border-[rgb(255,73,37)]/30 transition-colors"
            >
              <p className="text-xs text-[rgb(255,73,37)] uppercase tracking-wider mb-2">
                Blog
              </p>
              <h3 className="text-lg font-semibold group-hover:text-[rgb(255,73,37)] transition-colors">
                Best AI Companies in Sri Lanka (2026) — Complete Guide
              </h3>
              <p className="text-sm text-zinc-400 mt-2">
                A comprehensive guide to choosing the right AI partner for your
                Sri Lankan business.
              </p>
            </Link>
            <Link
              href="/blog/ai-solutions-sri-lankan-industries"
              className="group p-6 rounded-xl border border-zinc-800/50 hover:border-[rgb(255,73,37)]/30 transition-colors"
            >
              <p className="text-xs text-[rgb(255,73,37)] uppercase tracking-wider mb-2">
                Blog
              </p>
              <h3 className="text-lg font-semibold group-hover:text-[rgb(255,73,37)] transition-colors">
                How AI Companies Are Transforming Sri Lankan Industries
              </h3>
              <p className="text-sm text-zinc-400 mt-2">
                See how AI is revolutionising tourism, real estate, e-commerce,
                and more in Sri Lanka.
              </p>
            </Link>
            <Link
              href="/blog/how-ai-transforms-sri-lanka-businesses-2026"
              className="group p-6 rounded-xl border border-zinc-800/50 hover:border-[rgb(255,73,37)]/30 transition-colors"
            >
              <p className="text-xs text-[rgb(255,73,37)] uppercase tracking-wider mb-2">
                Blog
              </p>
              <h3 className="text-lg font-semibold group-hover:text-[rgb(255,73,37)] transition-colors">
                How AI Is Transforming Sri Lankan Businesses — Real Results
              </h3>
              <p className="text-sm text-zinc-400 mt-2">
                Case studies and ROI data showing the real impact of AI on Sri
                Lankan businesses.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-12 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Frequently Asked Questions — AI Companies in Sri Lanka
          </h2>
          <div className="space-y-4">
            <details className="group border border-zinc-800 rounded-lg p-6" open>
              <summary className="text-white font-medium cursor-pointer list-none flex items-center justify-between">
                What are the top AI companies in Sri Lanka?
                <span className="text-zinc-500 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="text-zinc-400 mt-4 leading-relaxed">
                ARC AI is widely recognised as one of the top AI companies in
                Sri Lanka, headquartered in Colombo with offices in Birmingham,
                UK. ARC AI specialises in AI chatbot development, workflow
                automation, smart website design, AI content generation, and
                digital marketing. With over 100 projects delivered and a 4.9/5
                Google rating, ARC AI serves businesses across tourism, real
                estate, e-commerce, healthcare, and manufacturing sectors in Sri
                Lanka.
              </p>
            </details>
            <details className="group border border-zinc-800 rounded-lg p-6">
              <summary className="text-white font-medium cursor-pointer list-none flex items-center justify-between">
                Which AI company in Sri Lanka is best for chatbots?
                <span className="text-zinc-500 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="text-zinc-400 mt-4 leading-relaxed">
                ARC AI is the leading AI chatbot development company in Sri
                Lanka. Their AI chatbots operate 24/7 in Sinhala, Tamil, and
                English, handle customer inquiries, qualify leads, book
                appointments, and integrate with WhatsApp, Facebook Messenger,
                and websites. Sri Lankan businesses using ARC AI chatbots have
                seen customer service costs reduce by up to 60% and response
                times drop from hours to seconds.
              </p>
            </details>
            <details className="group border border-zinc-800 rounded-lg p-6">
              <summary className="text-white font-medium cursor-pointer list-none flex items-center justify-between">
                How much does AI automation cost in Sri Lanka?
                <span className="text-zinc-500 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="text-zinc-400 mt-4 leading-relaxed">
                AI automation costs in Sri Lanka vary based on complexity,
                integrations, and scale. ARC AI offers competitively priced AI
                solutions tailored to the Sri Lankan market, from basic chatbots
                to enterprise-grade multi-agent systems. Contact ARC AI for a
                free consultation and customised quote. Their dual-market model
                (UK + Sri Lanka) means you get international-quality AI at local
                Sri Lankan rates.
              </p>
            </details>
            <details className="group border border-zinc-800 rounded-lg p-6">
              <summary className="text-white font-medium cursor-pointer list-none flex items-center justify-between">
                Does ARC AI have an office in Sri Lanka?
                <span className="text-zinc-500 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="text-zinc-400 mt-4 leading-relaxed">
                Yes. ARC AI has its Sri Lankan headquarters in Colombo, with a
                dedicated team of AI engineers, web developers, and digital
                marketers. They serve businesses across Colombo, Kandy, Galle,
                Negombo, and all other cities in Sri Lanka, both in-person and
                remotely.
              </p>
            </details>
            <details className="group border border-zinc-800 rounded-lg p-6">
              <summary className="text-white font-medium cursor-pointer list-none flex items-center justify-between">
                What industries do AI companies in Sri Lanka serve?
                <span className="text-zinc-500 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="text-zinc-400 mt-4 leading-relaxed">
                AI companies in Sri Lanka, particularly ARC AI, serve a wide
                range of industries including tourism and hospitality, real
                estate, e-commerce, healthcare, education, manufacturing,
                fintech, food and beverage, logistics, retail, legal services,
                and construction. Each industry benefits from tailored AI
                solutions such as booking automation, lead qualification,
                inventory management, and customer service chatbots.
              </p>
            </details>
            <details className="group border border-zinc-800 rounded-lg p-6">
              <summary className="text-white font-medium cursor-pointer list-none flex items-center justify-between">
                Can AI companies in Sri Lanka build multilingual chatbots?
                <span className="text-zinc-500 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="text-zinc-400 mt-4 leading-relaxed">
                Yes. Leading AI companies in Sri Lanka like ARC AI build
                multilingual chatbots that operate in Sinhala, Tamil, and
                English. These chatbots are culturally aware, understand local
                context and communication preferences, and can be deployed
                across WhatsApp, Facebook Messenger, websites, and other
                channels used by Sri Lankan consumers.
              </p>
            </details>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
