"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowUpRight, Code2, Palette, Share2, Sparkles, FileText, Zap, MessageSquare, X, Check, Laptop, Rocket, BrainCircuit, Bot, Search } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Animation Variants
const letterContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.04, delayChildren: 0.15 },
    },
};

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const letterVariant: Variants = {
    hidden: { y: "0.55em", opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 50,
            damping: 20
        }
    }
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

interface ServiceDetails {
    icon: React.ReactNode;
    number: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    modalContent: {
        headline: string;
        subheadline: string;
        problem: string;
        solution: string;
        benefits: string[];
        process: string[];
        results: string;
        cta: string;
    };
}

export default function ServicesList() {
    const [selectedService, setSelectedService] = useState<ServiceDetails | null>(null);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll for navbar effect if needed
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const digitalServices: ServiceDetails[] = [
        {
            icon: <Laptop className="w-8 h-8" />,
            number: "01",
            title: "Smart Websites",
            description: "High-converting, intelligent websites designed to capture attention and drive action. Not just a pretty face—a powerful sales engine.",
            tags: ["Conversion Optimized", "Next.js", "SEO Ready"],
            link: "/services/web-design-development",
            modalContent: {
                headline: "Turn Visitors Into Customers—Instantly",
                subheadline: "Smart websites designed to convert, not just look pretty",
                problem: "Your traffic is costing you money. Most businesses send ads to their homepage, where visitors get distracted, confused, or lost. A generic homepage converts at 2-3%. You're literally throwing 97% of your ad spend down the drain.",
                solution: "We build laser-focused smart websites with one goal: conversion. Every element—headlines, visuals, CTAs, social proof—is strategically placed to guide visitors toward taking action. No distractions. No confusion. Just results.",
                benefits: [
                    "Increase conversion rates by 300-500% compared to homepage traffic",
                    "Reduce cost-per-acquisition with pages built for specific campaigns",
                    "Fast loading speeds that keep visitors engaged (sub-2 second load times)",
                    "Mobile-first design that converts on any device",
                    "A/B testing framework built-in to continually improve performance",
                    "Clear analytics that show exactly what's working"
                ],
                process: [
                    "Deep dive into your offer, audience, and competitors",
                    "Craft compelling copy that speaks to pain points and desires",
                    "Design a conversion-optimized layout with strategic CTAs",
                    "Implement tracking pixels and analytics for full visibility",
                    "Launch with A/B testing to optimize from day one"
                ],
                results: "Our clients typically see 3-5x higher conversion rates within the first 30 days. One client went from 2.1% to 11.3% conversion rate, cutting their cost per lead by 81%.",
                cta: "Ready to stop wasting ad spend? Let's build a landing page that actually converts."
            }
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            number: "02",
            title: "Smart Ad Campaigns",
            description: "Data-driven advertising campaigns that find your ideal customers and scale your revenue with surgical precision.",
            tags: ["Meta Ads", "Google Ads", "ROI Focused"],
            link: "/services/social-media",
            modalContent: {
                headline: "Stop Burning Money on Ads That Don't Convert",
                subheadline: "Data-driven campaigns that find your customers and make them buy",
                problem: "You're spending thousands on ads but getting mediocre results. Why? Most agencies spray and pray—targeting everyone and converting no one. They lack proper tracking, don't run tests, and have no clue what's actually working. You deserve better.",
                solution: "We build smart ad campaigns powered by AI and real data. We identify your highest-value audience segments, craft compelling ad creative that stops the scroll, and continuously optimize based on performance. Every dollar is tracked. Every campaign is tested. Nothing is left to chance.",
                benefits: [
                    "Reduce cost-per-acquisition by 40-70% through precise targeting",
                    "Reach only the people most likely to buy from you",
                    "AI-powered optimization that improves results automatically",
                    "Full transparency with real-time dashboards showing ROI",
                    "Multi-platform campaigns (Facebook, Instagram, Google, LinkedIn)",
                    "Creative testing to find what resonates with your audience"
                ],
                process: [
                    "Audience research and ideal customer profiling",
                    "Competitor analysis to identify gaps and opportunities",
                    "Campaign strategy and budget allocation",
                    "Ad creative development with multiple variants",
                    "Launch with conversion tracking and attribution modeling",
                    "Weekly optimization based on performance data"
                ],
                results: "Our e-commerce clients average 4.2x ROAS. One B2B client reduced their cost-per-lead from $143 to $38 while increasing lead quality by 60%.",
                cta: "Ready to make your ads work harder? Let's build campaigns that actually deliver ROI."
            }
        },
        {
            icon: <Code2 className="w-8 h-8" />,
            number: "03",
            title: "Web Apps",
            description: "Custom web applications built with modern tech stacks to solve complex business problems and streamline operations.",
            tags: ["SaaS", "Internal Tools", "Scalable"],
            link: "/services/web-apps",
            modalContent: {
                headline: "Build Software That Scales With Your Business",
                subheadline: "Custom web applications that solve real problems and drive growth",
                problem: "Off-the-shelf software doesn't fit your unique business needs. You're stuck with clunky workarounds, manual processes, and tools that slow you down instead of speeding you up. Meanwhile, your team is frustrated and your growth is bottlenecked.",
                solution: "We build custom web applications tailored exactly to how your business operates. From internal tools that automate workflows to customer-facing platforms that enhance experience, we create software that becomes your competitive advantage.",
                benefits: [
                    "Eliminate manual processes and save hundreds of hours monthly",
                    "Built specifically for your workflows—no compromises",
                    "Scalable architecture that grows with your business",
                    "Modern, intuitive interfaces your team will actually love using",
                    "Real-time features for instant updates and collaboration",
                    "Seamless integration with your existing tools and systems"
                ],
                process: [
                    "Discovery session to understand your business and pain points",
                    "User flow mapping and feature prioritization",
                    "Custom design and prototype for your approval",
                    "Agile development with weekly progress updates",
                    "Testing, refinement, and team training",
                    "Launch support and ongoing maintenance"
                ],
                results: "One client automated their entire order fulfillment process, reducing processing time from 4 hours to 8 minutes per order. Another built a custom CRM that increased sales team productivity by 156%.",
                cta: "Ready to build software that gives you an unfair advantage? Let's talk about your custom solution."
            }
        },
        {
            icon: <Search className="w-8 h-8" />,
            number: "04",
            title: "Smart Funnels",
            description: "Intelligent systems that nurture leads from curiosity to conversion on autopilot, 24/7/365.",
            tags: ["Automation", "Email Marketing", "Lead Nurturing"],
            link: "/services/smart-funnels",
            modalContent: {
                headline: "Turn Leads Into Customers on Autopilot",
                subheadline: "Intelligent funnels that nurture, qualify, and convert while you sleep",
                problem: "Leads come in, but most disappear without buying. You follow up manually (maybe), send generic emails (that get ignored), and watch 80% of your potential customers slip away. You're losing sales simply because you don't have a system.",
                solution: "We build smart funnels that automatically guide prospects from awareness to purchase. Personalized email sequences, behavior-based triggers, and strategic touchpoints that nurture leads until they're ready to buy. It runs 24/7, even when you're offline.",
                benefits: [
                    "Convert 3-5x more leads with automated nurture sequences",
                    "Save 20+ hours per week on manual follow-ups",
                    "Behavior-based automation that personalizes each journey",
                    "Qualify leads automatically before they hit your sales team",
                    "Recover abandoned carts and re-engage cold prospects",
                    "Full visibility into what's working with conversion tracking"
                ],
                process: [
                    "Map your customer journey from awareness to purchase",
                    "Identify key touchpoints and conversion opportunities",
                    "Create compelling email sequences and content",
                    "Build automation rules based on behavior and engagement",
                    "Integrate with your CRM and existing tools",
                    "Optimize based on performance data and feedback"
                ],
                results: "Clients see an average 43% increase in lead-to-customer conversion rate. One SaaS client recovered $127K in abandoned signups in 90 days with a single automated sequence.",
                cta: "Ready to stop chasing leads and start converting them automatically? Let's build your smart funnel."
            }
        },
        {
            icon: <BrainCircuit className="w-8 h-8" />,
            number: "05",
            title: "Custom Backend Systems",
            description: "Robust, secure backend infrastructure designed for scale, speed, and rock-solid reliability.",
            tags: ["API Development", "Cloud Infrastructure", "Security"],
            link: "/services/custom-backend",
            modalContent: {
                headline: "Build the Engine That Powers Your Business",
                subheadline: "Secure, scalable backend infrastructure that never breaks",
                problem: "Your current backend is fragile. It crashes under load, can't handle growth, and every new feature requires weeks of development. Security vulnerabilities keep you up at night. You need infrastructure you can trust.",
                solution: "We architect and build robust backend systems designed for scale and security. Clean APIs, optimized databases, cloud-native infrastructure, and security best practices built in from day one. Your business runs on a foundation that won't crack under pressure.",
                benefits: [
                    "Handle 10x traffic spikes without breaking a sweat",
                    "Reduce server costs by 40-60% through optimization",
                    "Bank-level security with encryption and compliance built-in",
                    "99.9% uptime guaranteed with redundancy and monitoring",
                    "RESTful APIs that make integration seamless",
                    "Documentation and support for your dev team"
                ],
                process: [
                    "Audit current infrastructure and identify bottlenecks",
                    "Design scalable architecture and database schema",
                    "Build secure APIs with authentication and rate limiting",
                    "Implement cloud infrastructure (AWS, Azure, or GCP)",
                    "Set up monitoring, logging, and automated backups",
                    "Handoff with full documentation and training"
                ],
                results: "One client reduced API response times from 3.2s to 180ms—a 94% improvement. Another scaled from 1,000 to 50,000 daily users without adding a single server.",
                cta: "Ready for infrastructure that scales with your ambition? Let's build a backend that never lets you down."
            }
        },
        {
            icon: <Palette className="w-8 h-8" />,
            number: "06",
            title: "Brand Kits",
            description: "Comprehensive visual identities that command authority and distinguish you from the competition.",
            tags: ["Visual Identity", "Strategy", "Guidelines"],
            link: "/services/branding",
            modalContent: {
                headline: "Stop Looking Amateur. Build a Brand That Commands Premium Prices",
                subheadline: "Professional brand identity that makes you unforgettable",
                problem: "Your brand looks like everyone else's. Generic logo, inconsistent colors, no clear identity. Customers don't remember you, don't trust you, and definitely won't pay premium prices. Your visual identity is costing you sales.",
                solution: "We create comprehensive brand kits that make you stand out and command respect. Strategic logo design, cohesive color palettes, custom typography, and detailed brand guidelines that ensure consistency everywhere you show up.",
                benefits: [
                    "Premium brand identity that justifies higher prices",
                    "Stand out from competitors with distinctive visual language",
                    "Build instant trust and recognition with consistent branding",
                    "Complete brand guidelines for flawless execution",
                    "Files optimized for print, web, and social media",
                    "Unlimited revisions until you're 100% satisfied"
                ],
                process: [
                    "Brand discovery to understand your values and audience",
                    "Competitor analysis and positioning strategy",
                    "Multiple logo concepts with strategic rationale",
                    "Color palette, typography, and visual elements",
                    "Brand guidelines document with usage examples",
                    "Complete file package in all formats you'll need"
                ],
                results: "One consultant tripled their rates after rebranding. Another startup landed $2M in funding because their brand made them look like an established player from day one.",
                cta: "Ready to build a brand that makes you money? Let's create an identity you're proud to show off."
            }
        }
    ];

    const aiServices: ServiceDetails[] = [
        {
            icon: <FileText className="w-8 h-8" />,
            number: "07",
            title: "AI Content Generation",
            description: "Create weeks of high-quality, on-brand content in minutes. Review, refine, and publish at scale.",
            tags: ["Blog Posts", "Social Media", "SEO"],
            link: "/services/ai-content-generation",
            modalContent: {
                headline: "Create a Month of Content in One Afternoon",
                subheadline: "AI-powered content that sounds like you, ranks on Google, and converts",
                problem: "Content marketing works, but it's exhausting. Blog posts, social media, emails, ad copy—it never ends. You hire writers who miss deadlines, don't understand your voice, and charge $500 per article. Meanwhile, your content calendar is empty and your competitors are dominating.",
                solution: "Our AI content generation system creates high-quality, on-brand content at scale. Trained on your voice and industry, it produces blog posts, social media content, email sequences, and ad copy that actually converts. Human oversight ensures quality, AI provides speed.",
                benefits: [
                    "Produce 20-30 high-quality articles per month at a fraction of the cost",
                    "Maintain consistent brand voice across all content",
                    "SEO-optimized content that ranks on Google",
                    "Multi-language support to reach global audiences",
                    "Social media content that engages and converts",
                    "Content calendar planned and executed automatically"
                ],
                process: [
                    "Brand voice analysis and content strategy session",
                    "AI model training on your existing content and guidelines",
                    "Content calendar planning based on your goals",
                    "AI generates drafts, humans review and refine",
                    "SEO optimization and keyword integration",
                    "Publishing and performance tracking"
                ],
                results: "One B2B client went from 2 blog posts per month to 25, increasing organic traffic by 412% in 6 months. Another saved $8,400 monthly on freelance writers while improving content quality.",
                cta: "Ready to dominate with content? Let's build your AI content engine."
            }
        },
        {
            icon: <Zap className="w-8 h-8" />,
            number: "08",
            title: "Automated Workflows",
            description: "Eliminate repetitive tasks with intelligent automation. Save time, reduce errors, and focus on strategy.",
            tags: ["n8n", "Zapier", "Process Optimization"],
            link: "/services/ai-automated-workflows",
            modalContent: {
                headline: "Stop Doing Work a Robot Could Do",
                subheadline: "Intelligent automation that handles repetitive tasks while you focus on growth",
                problem: "Your team is drowning in busy work. Data entry, email routing, report generation, customer onboarding—tasks that eat hours but create zero value. Your best people are doing monkey work instead of moving the business forward.",
                solution: "We build intelligent automation workflows that handle repetitive tasks flawlessly. From lead routing to data synchronization to report generation, we connect your tools and eliminate manual work. Your team focuses on strategy while AI handles execution.",
                benefits: [
                    "Eliminate 15-30 hours of manual work per person weekly",
                    "Zero human error in repetitive processes",
                    "24/7 operation—automation never sleeps or takes breaks",
                    "Seamless integration between all your existing tools",
                    "Instant scalability without hiring more people",
                    "Real-time alerts and monitoring for peace of mind"
                ],
                process: [
                    "Process audit to identify automation opportunities",
                    "Map current workflows and pain points",
                    "Design intelligent automation sequences",
                    "Build integrations between your tools (Zapier, Make, custom APIs)",
                    "Test thoroughly and train your team",
                    "Monitor, optimize, and expand automation"
                ],
                results: "One agency automated their entire client onboarding process, saving 12 hours per client. Another eliminated 85% of manual data entry, allowing their team to handle 3x more customers without hiring.",
                cta: "Ready to buy back your time? Let's automate the boring stuff."
            }
        },
        {
            icon: <Bot className="w-8 h-8" />,
            number: "09",
            title: "AI Chatbots",
            description: "Smart assistants that provide 24/7 support, qualify leads, and book meetings while you sleep.",
            tags: ["Customer Support", "Lead Gen", "24/7 Availability"],
            link: "/services/ai-chatbots",
            modalContent: {
                headline: "Never Miss a Lead. Answer Every Question. 24/7.",
                subheadline: "AI chatbots that convert visitors, support customers, and work while you sleep",
                problem: "Leads hit your website at 2am and bounce because no one's there to help. Your support team is overwhelmed with repetitive questions. Live chat costs a fortune and still misses 60% of inquiries. You're losing sales and frustrating customers.",
                solution: "We deploy AI-powered chatbots that handle customer interactions intelligently. Trained on your business, products, and FAQs, they answer questions, qualify leads, book appointments, and escalate complex issues to humans—all instantly, 24/7.",
                benefits: [
                    "Capture leads 24/7, even when your team is offline",
                    "Respond to 95% of inquiries instantly",
                    "Reduce support costs by 60-80%",
                    "Qualify leads before they reach sales",
                    "Multi-platform deployment (website, Facebook, WhatsApp)",
                    "Continuously learns and improves from conversations"
                ],
                process: [
                    "Map common questions and customer journey touchpoints",
                    "Train AI on your business, products, and brand voice",
                    "Design conversation flows and escalation protocols",
                    "Integrate with your CRM and support tools",
                    "Deploy across your platforms and test thoroughly",
                    "Monitor performance and refine based on real conversations"
                ],
                results: "One e-commerce client captured 340 additional qualified leads in the first month. Another reduced support ticket volume by 73% while improving customer satisfaction scores.",
                cta: "Ready to never miss another lead? Let's build your AI support team."
            }
        }
    ];

    const ServiceCard = ({ service, index }: { service: ServiceDetails; index: number }) => {
        // We handle selection or navigation
        const handleClick = (e: React.MouseEvent) => {
            if (!service.link) {
                e.preventDefault();
                setSelectedService(service);
            }
        };

        return (
            <motion.div variants={itemVariants} className="h-full">
                <Link
                    href={service.link || "#"}
                    onClick={handleClick}
                    className="block h-full"
                >
                    <div className="group relative h-full bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.06] hover:border-orange-500/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        {/* Gradient Glow Effect on Hover */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />

                        <div className="relative z-10 flex flex-col h-full">
                            {/* Header: Icon & Number */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <span className="text-4xl text-orange-500/40 font-bold tabular-nums group-hover:text-orange-500/60 transition-colors">
                                    {service.number}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-2xl font-medium text-white mb-3 group-hover:text-orange-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-neutral-400 leading-relaxed text-sm mb-6">
                                    {service.description}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {service.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 text-[11px] font-medium tracking-wide uppercase rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/10 group-hover:border-orange-500/20 group-hover:bg-orange-500/20 transition-all duration-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Hover Arrow */}
                            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                <ArrowUpRight className="w-6 h-6 text-orange-500" />
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-orange-500/30 selection:text-orange-200">
            <Navbar />

            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen opacity-30" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-900/20 rounded-full blur-[120px] mix-blend-screen opacity-30" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-32 pb-20">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 73, 37, 0.15) 1px, transparent 0)`,
                            backgroundSize: '40px 40px'
                        }}
                    />

                    <div className="relative z-10 max-w-7xl mx-auto text-center">
                        <motion.div
                            initial="hidden"
                            animate="show"
                            variants={letterContainer}
                            className="mb-8"
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white">
                                {["OUR", "SERVICES"].map((word, i) => (
                                    <span key={i} className="block mb-2">
                                        {word.split("").map((char, j) => (
                                            <motion.span
                                                key={j}
                                                className="inline-block"
                                                variants={letterVariant}
                                            >
                                                {char === " " ? "\u00A0" : char}
                                            </motion.span>
                                        ))}
                                    </span>
                                ))}
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12"
                        >
                            From digital marketing to AI-powered solutions, we deliver comprehensive services
                            that drive growth and transform your business.
                        </motion.p>
                    </div>
                </section>

                {/* Digital Services Grid */}
                <section className="py-20 px-6 md:px-12">
                    <div className="max-w-[1800px] mx-auto">
                        <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-8">
                            <h2 className="text-3xl md:text-4xl font-medium">
                                Digital <span className="text-white/40">Services</span>
                            </h2>
                            <p className="hidden md:block text-neutral-500 text-sm max-w-xs text-right">
                                Foundation of your digital presence. Built for speed, conversion, and scale.
                            </p>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={containerVariants}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                        >
                            {digitalServices.map((service, index) => (
                                <ServiceCard key={index} service={service} index={index} />
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* AI Services Grid */}
                <section className="py-20 px-6 md:px-12 bg-white/[0.02]">
                    <div className="max-w-[1800px] mx-auto">
                        <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-8">
                            <h2 className="text-3xl md:text-4xl font-medium">
                                AI <span className="text-white/40">Solutions</span>
                            </h2>
                            <p className="hidden md:block text-neutral-500 text-sm max-w-xs text-right">
                                Next-generation automation. Leverage AI to work faster and smarter.
                            </p>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={containerVariants}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                        >
                            {aiServices.map((service, index) => (
                                <ServiceCard key={index} service={service} index={index + 6} />
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA / Footer Integration */}
                <section className="py-32 px-6 md:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-6xl font-medium mb-8">
                            Ready to <span className="text-orange-500">Scale?</span>
                        </h2>
                        <p className="text-xl text-neutral-400 mb-10">
                            Stop guessing and start growing. Let's discuss how we can transform your business today.
                        </p>
                        <Link href="/contact">
                            <button className="group relative px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)]">
                                <span className="relative z-10 flex items-center gap-2 text-white font-bold tracking-wide">
                                    START A PROJECT
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                            </button>
                        </Link>
                    </motion.div>
                </section>

                <Footer />
            </div>

            {/* Service Modal */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    >
                        {/* Backpack Blur Overlay */}
                        <div
                            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                            onClick={() => setSelectedService(null)}
                        />

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl custom-scrollbar"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedService(null)}
                                className="sticky top-4 right-4 float-right z-10 p-2 bg-black/50 hover:bg-white/10 backdrop-blur-md rounded-full border border-white/10 transition-colors"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>

                            <div className="p-8 md:p-12">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row gap-8 mb-12">
                                    <div className="shrink-0">
                                        <div className="w-20 h-20 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20">
                                            {selectedService.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-4 mb-2">
                                            <span className="text-orange-500 font-bold tracking-widest text-sm uppercase">Service {selectedService.number}</span>
                                            <div className="h-px flex-1 bg-gradient-to-r from-orange-500/50 to-transparent" />
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-flarex font-medium text-white mb-4">{selectedService.title}</h2>
                                        <h3 className="text-xl md:text-2xl text-neutral-300 font-medium">
                                            {selectedService.modalContent.headline}
                                        </h3>
                                    </div>
                                </div>

                                {/* Main Content Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                    {/* Problem */}
                                    <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                                        <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-red-400" />
                                            The Challenge
                                        </h4>
                                        <p className="text-neutral-400 leading-relaxed text-sm">
                                            {selectedService.modalContent.problem}
                                        </p>
                                    </div>

                                    {/* Solution */}
                                    <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/10">
                                        <h4 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-green-400" />
                                            Our Solution
                                        </h4>
                                        <p className="text-neutral-400 leading-relaxed text-sm">
                                            {selectedService.modalContent.solution}
                                        </p>
                                    </div>
                                </div>

                                {/* Benefits & Process */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                            <Check className="w-5 h-5 text-orange-500" />
                                            Key Benefits
                                        </h4>
                                        <div className="space-y-4">
                                            {selectedService.modalContent.benefits.map((benefit, i) => (
                                                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                                                    <span className="text-sm text-neutral-300 leading-relaxed">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                            <Sparkles className="w-5 h-5 text-orange-500" />
                                            The Process
                                        </h4>
                                        <div className="relative border-l border-white/10 ml-3 space-y-8 py-2">
                                            {selectedService.modalContent.process.map((step, i) => (
                                                <div key={i} className="relative pl-8">
                                                    <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-800 border-2 border-orange-500/50" />
                                                    <span className="block text-xs font-bold text-neutral-500 mb-1">STEP 0{i + 1}</span>
                                                    <span className="text-sm text-neutral-300 leading-relaxed">{step}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Results & CTA */}
                                <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-purple-500/5 border border-orange-500/20 text-center">
                                    <h4 className="text-lg font-bold text-orange-400 mb-4">Proven Results</h4>
                                    <p className="text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                                        "{selectedService.modalContent.results}"
                                    </p>

                                    <div className="h-px w-full bg-white/10 mb-8" />

                                    <h4 className="text-2xl font-flarex text-white mb-6">
                                        {selectedService.modalContent.cta}
                                    </h4>

                                    <Link href="/contact" onClick={() => setSelectedService(null)}>
                                        <button className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-colors">
                                            Let's Talk Business
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
