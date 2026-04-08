"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Share2, Code, Zap, Server, Brain, Network, XCircle, CheckCircle2, Cpu } from "lucide-react";

export default function BlogPost() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-4 md:px-8 overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                            Technical Analysis & Market Positioning
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Why the Next Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500">Software Company in Sri Lanka</span> Isn't Using Legacy Code
                        </h1>
                        <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                            An aggressive technical teardown comparing traditional enterprise IT powerhouses against ARC AI's serverless, AI-native edge architecture.
                        </p>
                        
                        <div className="flex items-center justify-center gap-4 text-sm text-neutral-500 mb-12">
                            <span>ARC Engineering Team</span>
                            <span>•</span>
                            <span>15 Min Read</span>
                            <span>•</span>
                            <span>April 2026</span>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
                        <Image
                            src="/arc-ai-software-company-sri-lanka.webp"
                            alt="Futuristic software engineering workspace in Colombo Sri Lanka"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                    </motion.div>
                </div>
            </section>

            <article className="py-12 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="prose prose-invert prose-lg max-w-none">
                        <div className="space-y-6 text-neutral-300 leading-relaxed">
                            <p className="text-xl text-neutral-200">
                                If you search for a <strong>software company in Sri Lanka</strong> to modernize your enterprise, you are typically greeted by a roster of monolithic giants. Companies that built their empires two decades ago by operating vast <a href="https://www.wiley.com/en-us/Offshore+Outsourcing%3A+Business+Models%2C+ROI+and+Best+Practices-p-9780471676092" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">offshore outsourcing</a> centers designed to maintain legacy Java and .NET environments for Western enterprises. But the landscape of software engineering has violently shifted.
                            </p>

                            <p>
                                Today, modern businesses don't require an army of 40 junior developers to spend eight months shipping a basic SaaS product. They demand intelligent, serverless architectures, natively integrated AI agents, and global edge-computing networks that load dynamic interfaces in single-digit milliseconds. This represents the critical technological divergence between traditional Sri Lankan IT firms and ARC AI.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Legacy Monolith Problem in Colombo's Tech Scene</h2>
                            <p>
                                Look closely at traditional IT giants operating locally, such as <a href="https://www.99x.io" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">99x</a>, <a href="https://www.virtusa.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Virtusa</a>, or <a href="https://www.creativesoftware.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Creative Software</a>. While historically successful and critical to establishing Sri Lanka on the global IT map, their fundamental business model relies heavily on legacy IT body-shopping: billing clients per-head for massive human teams dealing with heavily layered Agile bureaucracy and monolithic backend systems.
                            </p>
                            <p>
                                When a growing enterprise attempts to launch a cloud-native product via these legacy providers or even newer digital agencies like <a href="https://surge.global" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Surge Global</a>, the proposed architecture is frequently a structured MVC backend or an unoptimised WordPress wrapper with basic API endpoints. The consequence? Exorbitant cloud hosting overhead, immense human capital costs to maintain fragile database relationships, and painfully slow deployment cycles spanning multiple fiscal quarters.
                            </p>

                            <div className="overflow-hidden rounded-xl border border-neutral-800 my-10 bg-neutral-900/50">
                                <div className="grid grid-cols-3 bg-neutral-900 border-b border-neutral-800 p-4">
                                    <div className="font-bold text-neutral-400">Architecture Component</div>
                                    <div className="font-bold text-neutral-400">Traditional Software Companies</div>
                                    <div className="font-bold text-accent">ARC AI Next-Gen Stack</div>
                                </div>
                                <div className="grid grid-cols-3 p-4 border-b border-neutral-800/50 items-center">
                                    <div className="font-medium text-white flex items-center gap-2">
                                        <Server className="w-4 h-4 text-neutral-500" />
                                        Compute Delivery
                                    </div>
                                    <div className="text-sm text-neutral-400 flex items-center gap-2">
                                        <XCircle className="w-4 h-4 text-red-500" />
                                        Centralized Cloud VMs (AWS EC2)
                                    </div>
                                    <div className="text-sm text-emerald-400 flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4" />
                                        Serverless Edge Networks (Vercel)
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 p-4 border-b border-neutral-800/50 items-center">
                                    <div className="font-medium text-white flex items-center gap-2">
                                        <Brain className="w-4 h-4 text-neutral-500" />
                                        AI Integration
                                    </div>
                                    <div className="text-sm text-neutral-400 flex items-center gap-2">
                                        <XCircle className="w-4 h-4 text-red-500" />
                                        Third-party wrappers and basic APIs
                                    </div>
                                    <div className="text-sm text-emerald-400 flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4" />
                                        Native vector databases and LLM RAG pipelines
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 p-4 items-center">
                                    <div className="font-medium text-white flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-neutral-500" />
                                        Development Speed
                                    </div>
                                    <div className="text-sm text-neutral-400 flex items-center gap-2">
                                        <XCircle className="w-4 h-4 text-red-500" />
                                        6-8 months (Human bottleneck)
                                    </div>
                                    <div className="text-sm text-emerald-400 flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4" />
                                        Weeks (Agentic code generation)
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The ARC AI Advantage: Serverless Edge & AI-Native Integration</h2>
                            <p>
                                To operate as the premier <strong>software development company in Sri Lanka</strong> for the AI era, ARC AI bypasses the monolithic architecture entirely. We architect software using the <strong>Next.js App Router</strong>, globally distributed database clusters like Supabase, and Serverless Edge Functions that execute code within geographic proximity to the end-user.
                            </p>

                            <p>
                                This approach yields catastrophic advantages over traditional agencies. While a legacy team spends 300 billable hours configuring Docker containers, Kubernetes orchestrations, and CI/CD pipelines, ARC's Edge infrastructure deploys globally inherently automatically. Because we utilize AI agentic coding networks (such as Claude 3.5 Sonnet and custom foundational models) during our own development cycle, we can write perfectly-typed, deeply-tested TypeScript applications fundamentally faster and more securely than a traditional human-only workforce.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-10 mb-4">Why Outsource When You Can Automate?</h3>
                            <p>
                                For decades, the entire value proposition of a Sri Lankan software company was labor arbitrage: "Hire developers in Colombo because they are cheaper than developers in London."
                            </p>
                            <p>
                                Our pitch is mathematically superior: <strong>Do not hire developers to do what AI can do flawlessly in milliseconds.</strong>
                            </p>
                            <p>
                                When we build B2B applications, we do not require your business to staff a 10-person customer support team. Instead, ARC AI deploys a custom-trained large language model relying on Pinecone vector databases and advanced logic loops. This agent securely accesses your internal corporate data (via Retrieval-Augmented Generation) to execute massive workflow automations on behalf of your users instantly, scaling infinitely without adding a single dollar to your payroll.
                            </p>

                            <div className="bg-gradient-to-r from-accent/20 to-orange-600/20 border border-accent/20 rounded-xl p-8 mt-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Cpu className="w-32 h-32 text-accent" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                        <Zap className="w-6 h-6 text-accent text-white" />
                                        Deploy the Impossible. Faster.
                                    </h3>
                                    <p className="text-neutral-200 mb-6 max-w-xl">
                                        If your business relies on a traditional offshore IT agency to modernize your technology stack, your infrastructure is already obsolete. Transition your enterprise to an AI-native edge network designed explicitly for the demands of the 2030s. Contact the best <strong>software company in Sri Lanka</strong> directly.
                                    </p>
                                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors">
                                        Speak with an ARC Engineer
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800">
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Core Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Next.js App Router", "Serverless Edge", "TypeScript", "Vercel", "Supabase", "RAG Algorithms", "Vector Databases", "LangChain"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm rounded-full cursor-default">
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
                                <div className="font-semibold">All Articles</div>
                            </div>
                        </Link>
                        <Link href="/blog/websites-vs-smart-websites-sri-lanka" className="group flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors text-right">
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Next Concept</div>
                                <div className="font-semibold">Smart Websites</div>
                            </div>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-8 pt-8 border-t border-neutral-800">
                        <div className="flex items-center gap-4">
                            <span className="text-neutral-400 text-sm font-semibold">Distribute This Architecture:</span>
                            <button className="p-2 bg-neutral-900 rounded-lg hover:bg-accent hover:text-white text-neutral-400 transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </article>
        </div>
    );
}
