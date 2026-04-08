"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Smartphone, Zap, Globe, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";

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

            <section className="relative min-h-[60vh] flex items-end px-4 md:px-8 pt-32 pb-12">
                <div className="absolute inset-0">
                    <Image src="/blog-smart-websites.webp"
                        alt="Smart Websites in Sri Lanka"
                        width={1600}
                        height={900}
                        className="w-full h-full object-cover"
                        loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto w-full">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-300 hover:text-accent transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold rounded-full border border-accent/30 mb-4">
                            Web Development
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Smart Websites in Sri Lanka: The Future of Digital Business
                        </h1>
                        <div className="flex items-center gap-6 text-neutral-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>March 15, 2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 min read</span>
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
                                When it comes to digital transformation, having a standard "company website" is no longer enough for growth. <strong>Smart websites in Sri Lanka</strong> are rapidly replacing traditional static websites, transforming them from mere digital brochures into active, 24/7 sales engines powered by AI and automation.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What Defines Smart Websites in Sri Lanka?</h2>
                            <p>
                                Unlike traditional websites that passively display information, a Smart Website is highly highly interactive. It engages with your visitors, learns from their browsing behavior, and actively guides them toward conversions—whether that's making a booking, purchasing a product, or submitting a sales inquiry. 
                            </p>
                            <p>
                                As highlighted by industry leaders like <a href="https://blog.hubspot.com/website/artificial-intelligence-web-design" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">HubSpot regarding AI in web design</a>, leveraging artificial intelligence fundamentally shifts how brands connect with consumers online. For local businesses—from boutique hotels in Galle and gem exporters in Ratnapura to tech startups in Colombo—adopting this technology ensures you remain competitive on a global scale.
                            </p>

                            <div className="bg-gradient-to-r from-accent/20 to-orange-600/20 border border-accent/30 rounded-xl p-6 my-8">
                                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                    <Zap className="w-5 h-5" />
                                    Core Capabilities of Smart Websites
                                </h4>
                                <ul className="space-y-2 text-neutral-200">
                                    <li>• <strong>AI Chatbots & Agents:</strong> Instantly answer 80% of customer queries, available in English, Sinhala, or Tamil.</li>
                                    <li>• <strong>Dynamic Personalization:</strong> Display tailored content and recommendations based on user behavior.</li>
                                    <li>• <strong>Seamless Connectivity:</strong> Direct backend integration with CRM tools, accounting, and local payment gateways.</li>
                                    <li>• <strong>Automated Workflows:</strong> Streamline appointment scheduling, lead qualification, and calendar syncing.</li>
                                </ul>
                            </div>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why You Need a Smart Website in Sri Lanka Now</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. Capturing the 24/7 Global Market</h3>
                            <p>
                                For Sri Lankan export businesses, tourism operators, and service providers, your target audience resides across varying time zones. While a traditional site sleeps when your office closes, <strong>Smart websites in Sri Lanka</strong> never clock out. AI agents tirelessly capture leads from Europe, USA, or Australia while you rest in Colombo.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. Unmatched Cost Efficiency</h3>
                            <p>
                                Maintaining a 24/7 human support and sales force is incredibly cost-prohibitive. A smart website acts as your autonomous frontline, fielding repetitive questions about pricing, availability, and services. It scales your output without proportionally scaling your payroll.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">3. Outperforming Competitors</h3>
                            <p>
                                Many local competitors still rely on slow, outdated, and un-optimized websites. By upgrading to a high-speed, interactive smart website, you command immediate trust and authority. Modern consumers strongly align digital excellence with brand quality.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Build Your Foundation with ARC AI</h2>

                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Next.js Architecture:</strong> The industry-standard framework used by global giants for lightning-fast loading speeds.</li>
                                <li><strong>Native AI Integration:</strong> Custom-trained agents built directly into the fabric of your website.</li>
                                <li><strong>Mobile-First Design:</strong> Perfectly optimized for mobile users, maximizing the growing demographic of smartphone internet users in Sri Lanka.</li>
                                <li><strong>SEO Dominance:</strong> Engineered to rank #1 on Google for high-value localized searches.</li>
                            </ul>

                            <div className="bg-gradient-to-r from-accent/20 to-orange-600/20 border border-accent/30 rounded-xl p-8 mt-12">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Globe className="w-6 h-6" />
                                    Launch Your Smart Website Today
                                </h3>
                                <p className="text-neutral-200 mb-6">
                                    Stop using your website as a digital static flyer. Turn it into a measurable, dynamic revenue generator. As the leading <Link href="/ai-companies-sri-lanka" className="text-white hover:underline font-semibold">AI company in Sri Lanka</Link>, ARC AI specializes in deploying world-class Smart Websites tailored exactly for your business context.
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors">
                                    Get a Smart Website Proposal
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800">
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Smart Websites", "Web Development", "Sri Lanka Business", "AI Integration", "Digital Transformation", "Next.js", "E-commerce"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-full border border-neutral-800 hover:border-accent transition-colors cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800 flex items-center justify-between">
                        <Link href="/blog/" className="group flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Back</div>
                                <div className="font-semibold">Blog Home</div>
                            </div>
                        </Link>
                        <Link href="/blog/ai-agents-sri-lanka" className="group flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors text-right">
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Next</div>
                                <div className="font-semibold">AI Agents in Sri Lanka</div>
                            </div>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-8 pt-8 border-t border-neutral-800">
                        <div className="flex items-center gap-4">
                            <span className="text-neutral-400 text-sm font-semibold">Share this article:</span>
                            <button className="p-2 bg-neutral-900 rounded-lg hover:bg-accent transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </article>
        </div>
    );
}
