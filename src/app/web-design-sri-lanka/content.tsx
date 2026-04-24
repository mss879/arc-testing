"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    ChevronRight,
    TrendingUp,
    Shield,
    Cpu,
    Zap,
    CircleDot,
    HelpCircle,
    BarChart3,
    AlertTriangle,
    Database,
    Globe,
    Layers,
    Search
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { AnimatedSection, HeroAnimation, HeroImageAnimation } from "./animations";
import { FAQItem } from "./faq-accordion";

const tocItems = [
    { id: "executive-summary", label: "Executive Summary: The State of the Market" },
    { id: "technology-divide", label: "The Technology Divide: Monolith vs. Headless" },
    { id: "core-web-vitals", label: "Core Web Vitals & Search Algorithm Reality" },
    { id: "true-cost-ownership", label: "The True Cost of Ownership (LKR Pricing)" },
    { id: "agency-archetypes", label: "The 5 Agency Archetypes in Colombo" },
    { id: "procurement-framework", label: "The 5-Point Procurement Framework" },
    { id: "faq", label: "Frequently Asked Questions" },
];

const faqs = [
    {
        q: "What is the average cost to build a corporate website in Sri Lanka (2026)?",
        a: "For a standard corporate website built on legacy CMS (WordPress), expect to pay between LKR 80,000 and LKR 150,000. For high-performance, custom-coded headless architectures (Next.js/React) engineered for SEO dominance, initial capital expenditure ranges from LKR 200,000 to LKR 450,000+. E-commerce deployments heavily depend on SKU volume and payment gateway complexity, usually starting around LKR 150,000."
    },
    {
        q: "Why do so many local agencies exclusively push WordPress?",
        a: "WordPress relies on pre-packaged themes and a vast ecosystem of third-party plugins. This allows agencies to bypass expensive software engineering talent, utilizing 'assemblers' instead of developers. This significantly lowers their operational costs, enabling them to offer cheaper upfront quotes. The tradeoff is inherited technical debt, severe security vulnerabilities (plugin rot), and inherently slow load times."
    },
    {
        q: "What does 'Headless Architecture' mean and why does it matter?",
        a: "In traditional monolithic systems like WordPress, the frontend (what users see) and the backend database are tightly coupled. A 'headless' architecture physically separates them. The frontend is built using a modern framework (like Next.js) and communicates with the database via APIs. This results in impenetrable security (no direct database connection for hackers to exploit) and instantaneous page loads via Edge computing."
    },
    {
        q: "How does web design directly impact Conversion Rate Optimization (CRO)?",
        a: "CRO is the science of turning passive traffic into active leads. Poor web design creates friction. If a mobile page takes over 3 seconds to load, bounce rates increase by 32%. If the contrast ratios are mathematically incorrect, cognitive load increases, causing users to abandon the funnel. A high-converting website removes all visual and technical friction, guiding the user to the endpoint intuitively."
    },
    {
        q: "Should we hire an in-house developer or outsource to a Colombo agency?",
        a: "Hiring a senior Full-Stack or React Developer in Sri Lanka commands a monthly salary of LKR 300,000 to LKR 600,000+. For a single build, this is an inefficient deployment of capital. Engaging a specialized agency provides you with a fractional team (UX Researcher, Frontend Engineer, DevOps, Technical SEO Specialist) for the cost of a single developer's monthly salary."
    }
];

export default function WebDesignContent() {
    return (
        <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-[rgb(255,73,37)]/30 selection:text-white">
            <Navbar />

            {/* ── Hero Section ───────────────────────────── */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden px-4 md:px-8 border-b border-neutral-800">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-black to-black" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <Breadcrumbs
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Web Design Sri Lanka", href: "/web-design-sri-lanka" },
                        ]}
                    />

                    <HeroAnimation>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mt-8 mb-6 leading-[1.1]">
                            The Complete Guide to Web Design in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,73,37)] to-orange-500">Sri Lanka (2026)</span>
                        </h1>
                        <p className="text-xl text-neutral-400 max-w-3xl leading-relaxed font-light mb-8">
                            An authoritative, technically rigorous industry report analyzing the Sri Lankan web development ecosystem. We deconstruct the hidden costs of legacy monolithic CMS, the shift toward headless architectures, and how to objectively procure digital assets that dominate search rankings.
                        </p>
                    </HeroAnimation>
                </div>
            </section>

            {/* ── Main Content ────────────────────────────── */}
            <article className="px-4 md:px-8 pb-32 pt-16">
                <div className="max-w-4xl mx-auto">
                    
                    {/* ── Table of Contents ─────────────────── */}
                    <AnimatedSection className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 md:p-8 mb-20 backdrop-blur-sm">
                        <h2 className="text-sm font-bold text-neutral-400 mb-6 uppercase tracking-widest flex items-center gap-2">
                            <CircleDot className="w-4 h-4 text-[rgb(255,73,37)]" /> Report Directory
                        </h2>
                        <nav>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 m-0 p-0 list-none">
                                {tocItems.map((item, idx) => (
                                    <li key={idx}>
                                        <Link
                                            href={`#${item.id}`}
                                            className="group flex items-center gap-3 text-neutral-300 hover:text-white transition-colors text-sm font-medium"
                                        >
                                            <span className="w-5 h-5 rounded bg-neutral-950 border border-neutral-800 flex items-center justify-center text-[10px] text-neutral-500 group-hover:border-[rgb(255,73,37)] group-hover:text-[rgb(255,73,37)] transition-colors shrink-0">
                                                {idx + 1}
                                            </span>
                                            <span className="leading-tight">{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </AnimatedSection>

                    {/* ── Section: Executive Summary ──────── */}
                    <AnimatedSection id="executive-summary" className="scroll-mt-32 mb-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            1. Executive Summary: The State of the Market
                        </h2>
                        <div className="prose prose-invert prose-lg max-w-none text-neutral-300 font-light leading-relaxed">
                            <p>
                                The digital landscape in Sri Lanka is undergoing a brutal, rapid maturation phase. Historically, local businesses treated corporate websites as static digital brochures—a checkbox exercise in corporate legitimacy. In 2026, algorithmic shifts by major search engines have fundamentally altered this dynamic. A website is no longer a passive entity; it is the primary engine for Customer Acquisition Cost (CAC) reduction and pipeline generation.
                            </p>
                            <p>
                                Despite this, an estimated <strong>80% of corporate websites launched in Sri Lanka fail to generate measurable organic revenue</strong>. The culprit is rarely visual design. Sri Lankan UI/UX talent is world-class, heavily utilized by Australian and UK firms for offshore operations. The failure lies in <em>underlying technical architecture</em>. The local market remains dangerously addicted to legacy, template-driven development that fails modern web performance standards.
                            </p>
                            
                            <div className="my-10 bg-neutral-950 border-l-4 border-[rgb(255,73,37)] p-6 rounded-r-xl">
                                <div className="flex items-start gap-4">
                                    <AlertTriangle className="w-6 h-6 text-[rgb(255,73,37)] shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2 m-0">The Core Market Failure</h4>
                                        <p className="text-neutral-400 text-sm leading-relaxed m-0">
                                            Many Sri Lankan agencies compete entirely on upfront pricing, sacrificing structural integrity to win contracts. They utilize heavy, unoptimized monolithic templates (primarily WordPress) that collapse under Google's strict Core Web Vitals assessments. The client receives a visually pleasing site that is mathematically incapable of ranking on the first page for competitive keywords.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* ── Section: Technology Divide ──────── */}
                    <AnimatedSection id="technology-divide" className="scroll-mt-32 mb-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
                            <Cpu className="w-8 h-8 text-[rgb(255,73,37)] shrink-0" />
                            2. The Technology Divide: Monolith vs. Headless
                        </h2>
                        <p className="text-neutral-300 mb-8 font-light leading-relaxed text-lg">
                            When procuring digital services in Colombo, you are ultimately making an architectural decision. The global enterprise standard has aggressively shifted toward <strong>Headless Architecture</strong>, while the local SME market remains entrenched in the <strong>Legacy Monolith</strong>. Understanding this divergence is the most critical factor in your ROI.
                        </p>

                        <div className="space-y-8">
                            {/* The Monolith */}
                            <div className="border border-neutral-800 rounded-2xl p-8 bg-neutral-900/20">
                                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-neutral-800">
                                    <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center">
                                        <Database className="w-6 h-6 text-neutral-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white m-0">The Legacy Monolith (WordPress/PHP)</h3>
                                        <p className="text-sm text-neutral-500 m-0 mt-1">The ubiquitous standard of the 2010s.</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                            <Search className="w-4 h-4 text-neutral-400" /> How it Works
                                        </h4>
                                        <p className="text-sm text-neutral-400 leading-relaxed">
                                            The frontend code (HTML/CSS) and the backend database are physically tethered. When a user requests a page, the server must run complex PHP scripts, query the MySQL database, assemble the HTML, and send it to the browser in real-time.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-800">
                                            <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">The Critical Flaw</div>
                                            <div className="text-sm text-neutral-300"><strong>Time To First Byte (TTFB) Latency.</strong> Dynamic assembly on every single page load severely impacts speed metrics. Furthermore, relying on dozens of third-party plugins creates a massive attack surface for automated SQL injections (Plugin Rot).</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Headless Next.js */}
                            <div className="border border-[rgb(255,73,37)]/30 rounded-2xl p-8 bg-gradient-to-br from-[rgb(255,73,37)]/5 to-transparent relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(255,73,37)]/5 rounded-full blur-3xl -mr-20 -mt-20" />
                                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[rgb(255,73,37)]/20 relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-black border border-[rgb(255,73,37)]/50 flex items-center justify-center shadow-[0_0_15px_rgba(255,73,37,0.2)]">
                                        <Zap className="w-6 h-6 text-[rgb(255,73,37)]" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white m-0">The Modern Headless Web (Next.js)</h3>
                                        <p className="text-sm text-[rgb(255,73,37)]/80 m-0 mt-1">The global standard for enterprise performance.</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                    <div>
                                        <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                            <Layers className="w-4 h-4 text-[rgb(255,73,37)]" /> How it Works
                                        </h4>
                                        <p className="text-sm text-neutral-300 leading-relaxed">
                                            The frontend is entirely decoupled from the database. Next.js statically pre-renders the entire website during the build process and distributes it across a global Edge Network (CDN). The CMS (Contentful, Sanity, or even Headless WordPress) simply pushes data via secure APIs.
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                            <span className="text-sm text-neutral-300"><strong>Zero-Latency Delivery:</strong> Pages load instantaneously globally, natively passing Google's Core Web Vitals.</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                            <span className="text-sm text-neutral-300"><strong>Impenetrable Security:</strong> Hackers cannot inject malicious code into the database because the public frontend has zero direct connection to it.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* ── Section: Core Web Vitals ──────────── */}
                    <AnimatedSection id="core-web-vitals" className="scroll-mt-32 mb-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                            <TrendingUp className="w-8 h-8 text-[rgb(255,73,37)]" />
                            3. Core Web Vitals: The Mathematical Reality of SEO
                        </h2>
                        <div className="prose prose-invert prose-lg max-w-none text-neutral-300 font-light leading-relaxed mb-8">
                            <p>
                                Search Engine Optimization (SEO) is no longer a dark art of keyword stuffing. Google's algorithm has evolved into a rigid, mathematical evaluation of user experience known as <strong>Core Web Vitals</strong>. Visual aesthetics do not factor into the algorithm; Google's bots only see raw performance telemetry.
                            </p>
                            <p>
                                If your agency is not explicitly guaranteeing passing scores on these three metrics, your website is effectively invisible to organic traffic:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    metric: "LCP",
                                    name: "Largest Contentful Paint",
                                    target: "< 2.5 seconds",
                                    desc: "Measures loading performance. It marks the precise time the largest text block or image becomes fully visible."
                                },
                                {
                                    metric: "INP",
                                    name: "Interaction to Next Paint",
                                    target: "< 200 milliseconds",
                                    desc: "Measures overall responsiveness. How quickly does the website visually respond after the user taps a button or link?"
                                },
                                {
                                    metric: "CLS",
                                    name: "Cumulative Layout Shift",
                                    target: "< 0.1 score",
                                    desc: "Measures visual stability. Does the layout 'jump' unpredictably while images load, causing the user to misclick?"
                                }
                            ].map((vital, idx) => (
                                <div key={idx} className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                                    <div className="text-[rgb(255,73,37)] font-black text-2xl mb-1">{vital.metric}</div>
                                    <div className="text-white font-bold text-sm mb-4">{vital.name}</div>
                                    <div className="bg-neutral-900 border border-neutral-800 rounded text-xs font-mono text-center py-2 mb-4 text-neutral-400">
                                        TARGET: <span className="text-green-400">{vital.target}</span>
                                    </div>
                                    <p className="text-sm text-neutral-400 m-0 leading-relaxed">{vital.desc}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* ── Section: Pricing & TCO ────────────── */}
                    <AnimatedSection id="true-cost-ownership" className="scroll-mt-32 mb-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
                            <DollarSign className="w-8 h-8 text-[rgb(255,73,37)]" />
                            4. The True Cost of Ownership (TCO)
                        </h2>
                        <p className="text-neutral-300 mb-8 font-light leading-relaxed text-lg">
                            The Sri Lankan market suffers from severe pricing opacity. The initial quote provided by an agency is rarely the final cost. When calculating capital expenditure, executives must look at the <strong>3-Year Total Cost of Ownership (TCO)</strong>, which includes technical debt, hosting, and security mitigation.
                        </p>

                        {/* Pricing Table */}
                        <div className="overflow-x-auto -mx-4 md:mx-0 rounded-xl border border-neutral-800 shadow-xl mb-10">
                            <table className="w-full text-sm border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="border-b border-neutral-800 bg-neutral-900">
                                        <th className="p-5 text-left text-neutral-200 font-bold uppercase tracking-wider text-xs w-1/4">Digital Asset Tier</th>
                                        <th className="p-5 text-left text-neutral-200 font-bold uppercase tracking-wider text-xs w-1/4">Initial CapEx (LKR)</th>
                                        <th className="p-5 text-left text-neutral-200 font-bold uppercase tracking-wider text-xs w-1/2">The Hidden Operational Costs</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-800/50 bg-neutral-950">
                                    <tr className="hover:bg-neutral-900/30 transition-colors">
                                        <td className="p-5 font-bold text-white">Entry-Level CMS<br/><span className="text-xs font-normal text-neutral-500">1-5 Page Template</span></td>
                                        <td className="p-5 font-mono text-green-400 font-bold">LKR 40,000 – 100,000</td>
                                        <td className="p-5 text-neutral-400 text-sm leading-relaxed">
                                            <strong>High Risk.</strong> Agencies use cheap shared hosting (LKR 2,000/mo). Premium plugins required for security/speed will incur recurring USD subscriptions. Usually requires a full rebuild within 18 months as the business outgrows the template.
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/30 transition-colors">
                                        <td className="p-5 font-bold text-white">Custom Corporate CMS<br/><span className="text-xs font-normal text-neutral-500">Bespoke Design</span></td>
                                        <td className="p-5 font-mono text-green-400 font-bold">LKR 120,000 – 250,000</td>
                                        <td className="p-5 text-neutral-400 text-sm leading-relaxed">
                                            <strong>Moderate Risk.</strong> Needs dedicated VPS hosting (LKR 8,000+/mo). Requires a mandatory ongoing retainer for plugin vulnerability patching and version updates. Failure to maintain results in catastrophic hacks within 2 years.
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/30 transition-colors bg-[rgb(255,73,37)]/5">
                                        <td className="p-5 font-bold text-white border-l-2 border-[rgb(255,73,37)]">Next.js Headless App<br/><span className="text-xs font-normal text-[rgb(255,73,37)]/80">Enterprise Standard</span></td>
                                        <td className="p-5 font-mono text-white font-bold">LKR 200,000 – 450,000+</td>
                                        <td className="p-5 text-neutral-300 text-sm leading-relaxed">
                                            <strong>Low TCO.</strong> High initial engineering cost, but near-zero maintenance. Edge CDN hosting (Vercel) is often free or negligible. No plugins to update. Impervious to SQL injection. Highest ROI via organic SEO capture.
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/30 transition-colors">
                                        <td className="p-5 font-bold text-white">E-Commerce System<br/><span className="text-xs font-normal text-neutral-500">WooCommerce / Custom</span></td>
                                        <td className="p-5 font-mono text-green-400 font-bold">LKR 150,000 – 600,000+</td>
                                        <td className="p-5 text-neutral-400 text-sm leading-relaxed">
                                            <strong>Variable.</strong> Extremely complex pricing dependent on payment gateway integrations (PayHere/Webxpay), inventory logic, and server scaling during high-traffic events (Black Friday).
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </AnimatedSection>

                    {/* ── Section: Agency Archetypes ────────── */}
                    <AnimatedSection id="agency-archetypes" className="scroll-mt-32 mb-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
                            <Globe className="w-8 h-8 text-[rgb(255,73,37)]" />
                            5. The 5 Agency Archetypes in Colombo
                        </h2>
                        <p className="text-neutral-300 mb-8 font-light leading-relaxed text-lg">
                            The Sri Lankan agency ecosystem is highly fragmented. To procure effectively, you must identify the correct archetype for your specific business objective. An objective analysis reveals five distinct categories dominating the market.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    name: "The Headless Innovator",
                                    example: "ARC AI",
                                    focus: "Next.js Performance & AI Automation",
                                    desc: "Focuses exclusively on engineering high-performance, custom-coded web architectures. They abandon legacy CMS entirely in favor of Next.js and React, prioritizing flawless Core Web Vitals, enterprise-grade security, and AI integrations."
                                },
                                {
                                    name: "The E-Commerce Giant",
                                    example: "Xiteb",
                                    focus: "Large-Scale PHP/Magento Deployments",
                                    desc: "Battle-tested agencies equipped to handle massive product catalogs and complex ERP integrations. They specialize in heavy, monolithic e-commerce platforms requiring robust server infrastructure and ongoing technical maintenance."
                                },
                                {
                                    name: "The Visual Storyteller",
                                    example: "Phyxle",
                                    focus: "Premium UI/UX and Interactive Webflow",
                                    desc: "Agencies that prioritize aesthetics and micro-interactions above all else. Utilizing tools like Figma and Webflow, they cater to luxury brands and creative portfolios where the website functions as a cinematic digital lookbook."
                                },
                                {
                                    name: "The Performance Marketer",
                                    example: "Antyra Solutions",
                                    focus: "Data-Driven Design & ROAS Tracking",
                                    desc: "Digital marketing powerhouses that approach web design strictly through the lens of conversion rate optimization. Every design element is mathematically evaluated against its ability to lower Customer Acquisition Cost."
                                },
                                {
                                    name: "The Local SEO Workhorse",
                                    example: "Tectera",
                                    focus: "Responsive SME Design & Organic Reach",
                                    desc: "Highly reliable agencies offering the complete package for small to medium enterprises. They deliver scalable, responsive designs paired with aggressive foundational SEO strategies."
                                }
                            ].map((archetype, idx) => (
                                <div key={idx} className="bg-neutral-950 border border-neutral-800 p-6 rounded-xl relative overflow-hidden group hover:border-neutral-600 transition-colors">
                                    <div className="absolute top-0 right-0 px-3 py-1 bg-neutral-900 border-b border-l border-neutral-800 text-[10px] font-bold text-neutral-500 uppercase tracking-widest rounded-bl-lg">
                                        Notable Example: <span className="text-white">{archetype.example}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 mt-4">{archetype.name}</h3>
                                    <div className="text-sm font-semibold text-[rgb(255,73,37)] mb-4">{archetype.focus}</div>
                                    <p className="text-neutral-400 text-sm leading-relaxed m-0">
                                        {archetype.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* ── Section: Procurement Framework ────── */}
                    <AnimatedSection id="procurement-framework" className="scroll-mt-32 mb-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
                            <Shield className="w-8 h-8 text-[rgb(255,73,37)]" />
                            6. The 5-Point Procurement Framework
                        </h2>
                        <p className="text-neutral-300 mb-8 font-light leading-relaxed text-lg">
                            Do not sign a web design contract in Sri Lanka without subjecting the agency to this rigorous 5-point interrogation. This framework protects your capital and ensures delivery of a high-yield digital asset.
                        </p>

                        <div className="space-y-4">
                            {[
                                {
                                    num: "01",
                                    title: "The Lighthouse Audit",
                                    desc: "Demand URLs of three recent client sites. Run them through Google Lighthouse (PageSpeed Insights). If the mobile performance score is below 60, terminate the negotiation. The agency is deploying unoptimized, obsolete code."
                                },
                                {
                                    num: "02",
                                    title: "Absolute IP Ownership",
                                    desc: "The contract must explicitly state that 100% of the Intellectual Property (source code, design files, domain registry, and hosting credentials) transfers to your entity upon final payment. Never permit an agency to register your domain under their corporate email address."
                                },
                                {
                                    num: "03",
                                    title: "The Tech Stack Justification",
                                    desc: "Force the agency to defend their technology choice. If they propose WordPress, ask for their mitigation strategy against MySQL injection and plugin vulnerabilities. If they cannot provide a technical answer, they are not engineers; they are template installers."
                                },
                                {
                                    num: "04",
                                    title: "Semantic HTML & Accessibility",
                                    desc: "Ask how they handle ARIA labels and semantic HTML5 structuring. Google relies heavily on proper DOM structuring to parse content. A site built entirely with generic <div> tags is severely penalized in algorithmic rankings."
                                },
                                {
                                    num: "05",
                                    title: "The Data Portability Clause",
                                    desc: "Ensure you are not locked into a proprietary, custom-built CMS that only the agency understands. Demand standard data export capabilities so you can migrate to another vendor in the future without rebuilding from scratch."
                                }
                            ].map((point, idx) => (
                                <div key={idx} className="flex gap-6 p-6 rounded-xl hover:bg-neutral-900/30 transition-colors border border-transparent hover:border-neutral-800">
                                    <div className="text-4xl font-black text-neutral-800 shrink-0">{point.num}</div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">{point.title}</h4>
                                        <p className="text-neutral-400 text-sm leading-relaxed m-0">{point.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* ── Section: FAQ ──────────────────────── */}
                    <AnimatedSection id="faq" className="scroll-mt-32 mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3 border-t border-neutral-800 pt-16">
                            <HelpCircle className="w-8 h-8 text-[rgb(255,73,37)]" />
                            7. Frequently Asked Questions
                        </h2>
                        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 md:p-8">
                            {faqs.map((faq, idx) => (
                                <FAQItem key={idx} question={faq.q} answer={faq.a} />
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* ── Conclusion / CTA ──────────────────────── */}
                    <AnimatedSection className="mt-20 pt-16 pb-16 border-t border-neutral-800">
                        <div className="bg-gradient-to-br from-[rgb(255,73,37)]/20 via-neutral-950 to-black border border-[rgb(255,73,37)]/30 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
                                Stop Building Websites. <br className="hidden md:block" /> Start Building Web Assets.
                            </h2>
                            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto relative z-10 font-light">
                                If you are ready to abandon slow, vulnerable templates and invest in high-performance, headless architecture that mathematically dominates search engine rankings, let's engineer your digital superiority.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(255,73,37)] text-white font-bold rounded-full hover:bg-[rgb(220,50,20)] transition-all relative z-10 shadow-[0_0_40px_rgba(255,73,37,0.4)] hover:shadow-[0_0_60px_rgba(255,73,37,0.6)] hover:-translate-y-1"
                            >
                                Schedule a Technical Audit
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </AnimatedSection>

                </div>
            </article>

            <Footer />
        </div>
    );
}
