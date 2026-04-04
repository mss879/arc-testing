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
                { label: "AI for Tourism in Sri Lanka" }
            ]} />

            <section className="relative flex items-end px-4 md:px-8 pt-8 md:pt-16 pb-12">
                <div className="relative z-10 max-w-4xl mx-auto w-full">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-300 hover:text-[rgb(255,73,37)] transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 bg-[rgb(255,73,37)]/20 backdrop-blur-sm text-[rgb(255,73,37)] text-sm font-semibold rounded-full border border-[rgb(255,73,37)]/30 mb-4">
                            AI &middot; Tourism &middot; Sri Lanka
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            How AI Is Revolutionising Tourism in Sri Lanka (2026)
                        </h1>
                        <div className="flex items-center gap-6 text-neutral-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>April 4, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>11 min read</span>
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
                                Sri Lanka welcomed over 2.3 million tourists in 2025, and the numbers are climbing. But most tourism businesses are still handling bookings, guest inquiries, and customer service the same way they did a decade ago &mdash; manually. Leading <Link href="/ai-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">AI companies in Sri Lanka</Link> are changing that, deploying intelligent AI solutions that are transforming every aspect of the tourism experience.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The $47 Billion Opportunity: AI in Sri Lankan Tourism</h2>
                            <p>
                                Tourism contributes approximately 12% to Sri Lanka&apos;s GDP, making it one of the most critical sectors. Yet most tourism businesses operate with razor-thin margins, largely because of operational inefficiencies: unanswered inquiries, slow response times, manual booking processes, and language barriers that prevent them from serving international guests effectively.
                            </p>
                            <p>
                                AI solves every one of these problems. Here is how <Link href="/ai-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">top AI companies in Sri Lanka</Link> are deploying AI across the tourism value chain:
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">1. AI-Powered Multilingual Guest Communication</h2>
                            <p>
                                Sri Lankan hotels and tour operators serve guests from dozens of countries speaking dozens of languages. An AI chatbot can communicate fluently in English, German, French, Chinese, Japanese, Russian, and of course Sinhala and Tamil &mdash; simultaneously, 24/7, without hiring a single additional staff member.
                            </p>
                            <p>
                                When a German tourist sends a WhatsApp message at 2 AM asking about availability, the AI responds instantly in German with accurate room details, pricing, and a direct booking link. No human intervention required.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">2. Automated Booking and Reservation Management</h2>
                            <p>
                                AI agents can handle the entire booking process: checking availability across multiple room types, presenting options, processing payments, sending confirmation emails, and even upselling spa treatments or tour packages. For tour operators, AI can dynamically build custom itineraries based on guest preferences, available dates, and seasonal factors.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">3. Smart Review and Reputation Management</h2>
                            <p>
                                AI monitors reviews across TripAdvisor, Google, Booking.com, and Agoda in real-time. It alerts managers to negative reviews instantly, drafts professional response templates, and identifies recurring complaint themes that need operational attention. Hotels using AI-powered reputation management have seen their average ratings increase by 0.3-0.5 stars within 6 months.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">4. Dynamic Pricing and Revenue Optimisation</h2>
                            <p>
                                AI analyses historical booking data, competitor pricing, seasonal patterns, local events, and weather forecasts to recommend optimal room rates. Hotels using AI-driven dynamic pricing consistently achieve 15-25% higher revenue per available room (RevPAR) compared to static pricing strategies.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Real Case Study: AI Chatbot for a Sri Lankan Tourism Company</h2>

                            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-8 my-8">
                                <h4 className="text-xl font-bold text-white mb-4">Results After 6 Months</h4>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Booking enquiries: <strong>+167% increase</strong></li>
                                    <li>Response time: from <strong>6-12 hours</strong> to <strong>under 10 seconds</strong></li>
                                    <li>Customer service costs: <strong>-60% reduction</strong></li>
                                    <li>Off-hours conversions: <strong>from 0% to 35%</strong> of total bookings</li>
                                    <li>Languages handled: Sinhala, Tamil, English, German, French</li>
                                    <li>Channels: Website, WhatsApp, Facebook Messenger</li>
                                </ul>
                                <p className="text-neutral-400 mt-4">
                                    Built and deployed by <Link href="/ai-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">ARC AI</Link> &mdash; Sri Lanka&apos;s leading AI company.
                                </p>
                            </div>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">5. AI-Enhanced Marketing for Tourism</h2>
                            <p>
                                AI is transforming how tourism businesses reach potential guests. From automated social media content generation to AI-powered Google Ads optimisation, tourism companies using AI marketing see significantly higher return on ad spend (ROAS). AI analyses which images, headlines, and offers resonate with specific demographics, automatically optimising campaigns for maximum bookings.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Getting Started: AI Implementation for Tourism Businesses</h2>
                            <p>
                                If you run a hotel, resort, tour company, or travel agency in Sri Lanka, here is a practical roadmap for AI adoption:
                            </p>
                            <ol className="list-decimal pl-6 space-y-3">
                                <li><strong>Start with a chatbot:</strong> Deploy an AI chatbot on your website and WhatsApp. This delivers the fastest ROI and solves the most urgent pain point (slow response times).</li>
                                <li><strong>Automate booking workflows:</strong> Connect your chat to your booking system so reservations happen automatically without staff intervention.</li>
                                <li><strong>Add AI marketing:</strong> Use AI to generate and optimise your social media content, Google Ads, and email campaigns.</li>
                                <li><strong>Implement dynamic pricing:</strong> Let AI analyse your data and recommend optimal pricing strategies.</li>
                                <li><strong>Scale with voice:</strong> Deploy AI voice assistants to handle phone inquiries in multiple languages.</li>
                            </ol>

                            <div className="bg-gradient-to-r from-[rgb(255,73,37)]/20 to-orange-600/20 border border-[rgb(255,73,37)]/30 rounded-xl p-8 mt-12">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Transform Your Tourism Business with AI
                                </h3>
                                <p className="text-neutral-200 mb-6">
                                    ARC AI has helped tourism businesses across Sri Lanka increase bookings by over 167% and cut customer service costs by 60%. Get a free consultation and see how AI can transform your operations.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[rgb(255,73,37)] text-white font-semibold rounded-lg hover:bg-[rgb(255,73,37)]/90 transition-colors">
                                        Get a Free AI Consultation
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <Link href="/case-studies" className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-white font-semibold rounded-lg hover:border-zinc-500 transition-colors">
                                        View Tourism Case Studies
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800">
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {["AI Tourism Sri Lanka", "AI Companies Sri Lanka", "Hotel AI Chatbot", "Tourism Automation", "Colombo AI", "Travel AI", "Sri Lanka Hotels"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-full border border-neutral-800">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800 flex items-center justify-between">
                        <Link href="/blog/ai-chatbots-sri-lankan-businesses" className="group flex items-center gap-2 text-neutral-400 hover:text-[rgb(255,73,37)] transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Previous</div>
                                <div className="font-semibold">AI Chatbots for Sri Lankan Businesses</div>
                            </div>
                        </Link>
                        <Link href="/blog/ai-vs-manual-operations-sri-lanka" className="group flex items-center gap-2 text-neutral-400 hover:text-[rgb(255,73,37)] transition-colors text-right">
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Next</div>
                                <div className="font-semibold">AI vs Manual Operations</div>
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
