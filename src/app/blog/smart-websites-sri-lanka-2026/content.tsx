"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Zap, MonitorSmartphone, Brain, Rocket } from "lucide-react";
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
                    <Image src="/smart-website-sri-lanka.png"
                        alt="Smart Website Interface"
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
                            Why Your Sri Lankan Business Needs a Smart Website in 2026
                        </h1>
                        <div className="flex items-center gap-6 text-neutral-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>March 4, 2026</span>
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
                                Look at most local business websites in Sri Lanka today. They are essentially digital business cards—static, unresponsive, and waiting passively for a visitor to hopefully click &quot;Contact Us.&quot; In 2026, this approach is costing you money. Welcome to the era of the <strong>Smart Website</strong>.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What Exactly is a &quot;Smart Website&quot;?</h2>
                            <p>
                                A traditional website is a digital brochure. A Smart Website is a <strong>digital employee</strong>. Built with AI and automation at its core, a Smart Website actively works to convert visitors into customers.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 text-red-400">Traditional Website</h3>
                                    <ul className="space-y-2 text-sm text-neutral-400">
                                        <li>• Static text and images</li>
                                        <li>• &quot;Please fill this form and we will reply in 24 hours&quot;</li>
                                        <li>• The same experience for every visitor</li>
                                        <li>• Zero post-visit follow-up</li>
                                    </ul>
                                </div>
                                <div className="bg-gradient-to-br from-accent/20 to-neutral-900 border border-accent/30 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 text-accent">Smart Website</h3>
                                    <ul className="space-y-2 text-sm text-neutral-300">
                                        <li>• Embedded AI Agents that answer questions instantly</li>
                                        <li>• &quot;Let me book that appointment for you right now&quot;</li>
                                        <li>• Dynamic content based on user behavior</li>
                                        <li>• Automated WhatsApp/Email follow-ups</li>
                                    </ul>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Sri Lanka Needs This Now</h2>
                            <p>
                                The Sri Lankan consumer has evolved. During the recent economic shifts, digital adoption skyrocketed. People now expect instant answers. If an expat looking to buy property in Colombo, or a tourist booking a villa in Galle, lands on your site at 2:00 AM Sri Lankan time—who is going to answer them?
                            </p>
                            <p>
                                A Smart Website bridges this gap. It provides a premium, immediate experience regardless of the time or day. It doesn&apos;t ask for Poya days off, and it never replies with &quot;Check our Facebook page for details.&quot;
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">The ARC AI Advantage</h3>
                            <p>
                                At ARC AI, we don&apos;t just build websites; we engineer sales machines. As one of the <Link href="/ai-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">top AI companies in Sri Lanka</Link>, our Smart Websites are built using Next.js (the same ultra-fast technology used by global giants) and are deeply integrated with customized AI capabilities. We optimize for the Sri Lankan market—making sure the site loads lightning-fast even on 3G connections, and integrating seamlessly with local communication habits like WhatsApp.
                            </p>

                            <div className="bg-gradient-to-r from-accent/20 to-orange-600/20 border border-accent/30 rounded-xl p-8 mt-12">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    <MonitorSmartphone className="w-6 h-6" />
                                    Ready to Upgrade Your Digital Front Door?
                                </h3>
                                <p className="text-neutral-200 mb-6">
                                    Stop losing customers to slow, outdated websites. Let ARC AI build you a high-performance Smart Website that actually grows your business.
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors">
                                    Get Your Smart Website Proposal
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags & Nav */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800">
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Smart Websites", "Web Development", "Sri Lanka Web Design", "AI Integration", "Digital Marketing", "Business Growth"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-full border border-neutral-800 hover:border-accent transition-colors cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </article>
        </div>
    );
}
