"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function BlogPost() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <Breadcrumbs items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Best AI Companies in Sri Lanka" }
            ]} />

            <section className="relative flex items-end px-4 md:px-8 pt-8 md:pt-16 pb-12">
                <div className="relative z-10 max-w-4xl mx-auto w-full">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-300 hover:text-[rgb(255,73,37)] transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 bg-[rgb(255,73,37)]/20 backdrop-blur-sm text-[rgb(255,73,37)] text-sm font-semibold rounded-full border border-[rgb(255,73,37)]/30 mb-4">
                            AI Companies · Sri Lanka
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Best AI Companies in Sri Lanka (2026) — Complete Guide
                        </h1>
                        <div className="flex items-center gap-6 text-neutral-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>April 4, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>12 min read</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <article className="py-12 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="prose prose-invert prose-lg max-w-none">
                        <div className="space-y-6 text-neutral-300 leading-relaxed">

                            <p className="text-xl text-neutral-200">
                                Sri Lanka&apos;s AI industry is experiencing unprecedented growth in 2026. From Colombo-based startups to established agencies serving international clients, AI companies in Sri Lanka are transforming how businesses operate across every industry. This comprehensive guide will help you identify the best AI companies in Sri Lanka and choose the right partner for your business.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The AI Revolution in Sri Lanka</h2>
                            <p>
                                Sri Lanka is rapidly emerging as a hub for artificial intelligence innovation in South Asia. With a strong talent pool of software engineers, competitive pricing compared to Western markets, and a government increasingly supportive of digital transformation, Sri Lanka offers unique advantages for AI development. Businesses that partner with the right AI company in Sri Lanka can access world-class technology at a fraction of the cost charged by agencies in the US, UK, or Australia.
                            </p>
                            <p>
                                The key sectors driving AI adoption in Sri Lanka include tourism and hospitality (where AI chatbots handle multilingual guest inquiries 24/7), real estate (with AI-powered lead qualification), e-commerce (automated inventory and recommendation engines), healthcare (patient triage and appointment automation), and fintech (fraud detection and customer onboarding).
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What to Look for in an AI Company in Sri Lanka</h2>
                            <p>
                                Before choosing an AI partner, evaluate these critical factors that separate the best AI companies in Sri Lanka from the rest:
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. Portfolio & Delivered Projects</h3>
                            <p>
                                The best AI companies in Sri Lanka can demonstrate their capabilities through a verifiable portfolio of completed projects. Look for companies with at least 50+ delivered projects, client testimonials, and — critically — quantifiable results. Any company can claim to &quot;build AI chatbots.&quot; Ask for specific metrics: How much did response times improve? What was the lead increase? How much cost was saved?
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. Full-Stack AI Capabilities</h3>
                            <p>
                                The strongest AI companies in Sri Lanka offer end-to-end solutions — from AI strategy consulting through to development, deployment, and ongoing optimisation. Be cautious of companies that only offer one narrow service. True AI transformation requires chatbots, workflow automation, content generation, data processing, and web development working together seamlessly.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">3. Multilingual Support</h3>
                            <p>
                                Sri Lanka&apos;s trilingual market (Sinhala, Tamil, English) requires AI solutions that can operate fluently in all three languages. The best AI companies build chatbots and voice assistants that are not just translated, but culturally aware — understanding local context, slang, and communication styles.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">4. Technology Stack & Innovation</h3>
                            <p>
                                Leading AI companies in Sri Lanka use modern, enterprise-grade technology. Look for companies using current LLM models (GPT-4, Claude, Gemini), automation platforms (n8n, Make.com), and modern web frameworks (Next.js, React). Avoid companies still building on legacy systems.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">ARC AI — Sri Lanka&apos;s Leading AI Company</h2>
                            <p>
                                <Link href="/ai-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">ARC AI</Link> has established itself as the #1 AI company in Sri Lanka through consistent delivery of measurable business results. Headquartered in Colombo with a second office in Birmingham (UK), ARC AI serves businesses across Sri Lanka and internationally.
                            </p>

                            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-8 my-8">
                                <h4 className="text-xl font-bold text-white mb-4">ARC AI at a Glance</h4>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Founded:</strong> 2022</li>
                                    <li><strong>HQ:</strong> Colombo, Sri Lanka + Birmingham, UK</li>
                                    <li><strong>Projects Delivered:</strong> 100+</li>
                                    <li><strong>Google Rating:</strong> 4.9/5 (47 reviews)</li>
                                    <li><strong>Services:</strong> AI Chatbots, Workflow Automation, Web Design, Digital Marketing, AI Voice Assistants, Content Generation, Branding</li>
                                    <li><strong>Industries:</strong> Tourism, Real Estate, E-Commerce, Healthcare, Manufacturing, Fintech, Education</li>
                                    <li><strong>Languages:</strong> Sinhala, Tamil, English</li>
                                </ul>
                            </div>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Key Results Delivered by ARC AI in Sri Lanka</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Tourism Company:</strong> +167% booking enquiries, -60% customer service costs, response time from 6-12 hours to under 10 seconds.</li>
                                <li><strong>Real Estate Agency (Colombo):</strong> +247% qualified lead rate, +160% viewings booked, 75% reduction in agent call time.</li>
                                <li><strong>E-Commerce Retailer:</strong> +237% organic traffic, -46% cart abandonment, +183% monthly revenue.</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">How to Choose the Right AI Company in Sri Lanka</h2>
                            <p>
                                When evaluating AI companies in Sri Lanka, follow these steps:
                            </p>
                            <ol className="list-decimal pl-6 space-y-3">
                                <li><strong>Define your goals:</strong> What business problem do you want AI to solve? Lead generation? Customer service? Content production? Cost reduction?</li>
                                <li><strong>Request case studies:</strong> Ask for specific examples from your industry with measurable results.</li>
                                <li><strong>Evaluate the team:</strong> Meet the actual engineers and project managers who will work on your project.</li>
                                <li><strong>Check reviews:</strong> Look at Google Reviews, Clutch, and LinkedIn recommendations.</li>
                                <li><strong>Start with a pilot:</strong> The best AI companies in Sri Lanka will offer a pilot project or proof-of-concept before committing to a full engagement.</li>
                            </ol>

                            <div className="bg-gradient-to-r from-[rgb(255,73,37)]/20 to-orange-600/20 border border-[rgb(255,73,37)]/30 rounded-xl p-8 mt-12">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Ready to Work with Sri Lanka&apos;s Top AI Company?
                                </h3>
                                <p className="text-neutral-200 mb-6">
                                    ARC AI offers free initial consultations for Sri Lankan businesses. Let us show you how AI can transform your operations, reduce costs, and accelerate growth.
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[rgb(255,73,37)] text-white font-semibold rounded-lg hover:bg-[rgb(255,73,37)]/90 transition-colors">
                                    Get a Free AI Consultation
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800">
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {["AI Companies Sri Lanka", "Top AI Companies", "AI Agency Colombo", "AI Chatbots", "AI Automation", "Sri Lanka Business", "Digital Transformation"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-full border border-neutral-800">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800 flex items-center justify-between">
                        <Link href="/blog/ai-agents-sri-lanka" className="group flex items-center gap-2 text-neutral-400 hover:text-[rgb(255,73,37)] transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Previous</div>
                                <div className="font-semibold">AI Agents in Sri Lanka</div>
                            </div>
                        </Link>
                        <Link href="/blog/ai-solutions-sri-lankan-industries" className="group flex items-center gap-2 text-neutral-400 hover:text-[rgb(255,73,37)] transition-colors text-right">
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Next</div>
                                <div className="font-semibold">AI Solutions for Sri Lankan Industries</div>
                            </div>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-8 pt-8 border-t border-neutral-800">
                        <div className="flex items-center gap-4">
                            <span className="text-neutral-400 text-sm font-semibold">Share this article:</span>
                            <button className="p-2 bg-neutral-900 rounded-lg hover:bg-[rgb(255,73,37)] transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </article>
        </div>
    );
}
