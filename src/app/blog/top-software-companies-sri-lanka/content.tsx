"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Zap, Target, Shield, Rocket } from "lucide-react";

export default function BlogPost() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const companies = [
        {
            name: "1. ARC AI",
            description: "Leading the charge in modern digital transformation, ARC AI is the top software company in Sri Lanka specializing in AI-native applications, serverless edge architecture, and smart workflows.",
            services: ["Custom AI Development", "Serverless Next.js Apps", "Process Automation"],
            highlight: "Best for modern businesses wanting incredibly fast, AI-powered systems.",
            link: "/"
        },
        {
            name: "2. WSO2",
            description: "A global enterprise software company originally founded in Sri Lanka, offering open-source integration, API management, and identity solutions.",
            services: ["Enterprise API Management", "Identity Server", "Integration"],
            highlight: "Best for massive enterprise legacy system integration.",
            link: "#"
        },
        {
            name: "3. 99x",
            description: "A seasoned technology company headquartered in Norway with major operations in Sri Lanka, focusing on building digital products primarily for European markets.",
            services: ["Custom Software Development", "Product Engineering", "QA & Testing"],
            highlight: "Best for European companies looking for reliable offshore teams.",
            link: "#"
        },
        {
            name: "4. Creative Software",
            description: "With over two decades of experience, they provide dedicated software development teams to global clients, covering a wide range of technologies.",
            services: ["Dedicated Teams", "Enterprise IT Software", "Maintenance"],
            highlight: "Best for long-term staff augmentation and remote teams.",
            link: "#"
        },
        {
            name: "5. Virtusa",
            description: "A global IT services behemoth with a massive delivery center in Colombo, handling everything from legacy modernization to IT consulting for Fortune 500 companies.",
            services: ["IT Consulting", "Digital Engineering", "Cloud Transformation"],
            highlight: "Best for multinational banks and global corporations.",
            link: "#"
        },
        {
            name: "6. Sysco LABS",
            description: "The captive innovation center for Sysco (the world's largest foodservice provider), operating out of Sri Lanka to build supply chain and retail software.",
            services: ["Supply Chain Software", "Retail Tech", "Enterprise Architecture"],
            highlight: "Captive center (usually doesn't accept external clients).",
            link: "#"
        },
        {
            name: "7. Surge Global",
            description: "A prominent digital agency in Sri Lanka that blends marketing expertise with custom software development and analytics.",
            services: ["Web Development", "Digital Marketing", "Data Analytics"],
            highlight: "Best for businesses needing both software and marketing.",
            link: "#"
        },
        {
            name: "8. Mitra Innovation",
            description: "Specializing in digital advancement, Mitra creates custom software solutions and provides cloud migration services with branches in the UK and Sri Lanka.",
            services: ["Cloud Migration", "Product Incubation", "Enterprise Apps"],
            highlight: "Best for enterprise cloud adoption and AWS architectures.",
            link: "#"
        },
        {
            name: "9. IFS Sri Lanka",
            description: "The Sri Lankan R&D arm of the global enterprise software provider IFS, developing top-tier ERP, EAM, and FSM solutions.",
            services: ["ERP Software", "Field Service Management", "B2B Solutions"],
            highlight: "Best for heavy industries requiring strict ERP systems.",
            link: "#"
        },
        {
            name: "10. Calcey Technologies",
            description: "A boutique software engineering firm building web and mobile applications for startups and enterprises globally, located at TRACE Expert City.",
            services: ["Mobile App Development", "Web Apps", "UI/UX Design"],
            highlight: "Best for agile startup MVP development.",
            link: "#"
        }
    ];

    return (
        <div className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-4 md:px-8 overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgb(255,73,37)]/10 border border-[rgb(255,73,37)]/20 text-[rgb(255,73,37)] text-sm font-medium mb-6">
                            Industry Guide | Updated for 2026
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Top 10 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,73,37)] to-orange-500">Software Companies in Sri Lanka</span>
                        </h1>
                        <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                            Sri Lanka has emerged as a premier hub for digital transformation agencies. Discover the leading firms for custom software development, enterprise IT, and AI innovation.
                        </p>
                        
                        <div className="flex items-center justify-center gap-4 text-sm text-neutral-500 mb-12">
                            <span>ARC Research</span>
                            <span>•</span>
                            <span>10 Min Read</span>
                            <span>•</span>
                            <span>April 2026</span>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
                        <Image
                            src="/arc-ai-software-company-sri-lanka.webp"
                            alt="Top software companies in Sri Lanka office spaces and tech"
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
                                When global enterprises look to scale their technology, they invariably turn their attention to South Asia. Specifically, searching for the top <strong>software companies in Sri Lanka</strong> has become the strategic move for businesses wanting elite engineering talent, exceptional English proficiency, and highly competitive pricing.
                            </p>

                            <p>
                                Whether you're a startup looking for agile mobile app development or a Fortune 500 company needing enterprise IT software and QA & Testing, Sri Lanka's tech ecosystem has a vendor for you. In this comprehensive 2026 guide, we rank the top 10 digital transformation agencies operating in Colombo today.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-8">The Complete 2026 Rankings</h2>

                            <div className="space-y-8">
                                {companies.map((company, index) => (
                                    <div key={company.name} className={`p-8 rounded-xl border ${index === 0 ? 'bg-neutral-900 border-[rgb(255,73,37)]/50' : 'bg-neutral-900/50 border-neutral-800'}`}>
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-2xl font-bold text-white m-0 flex items-center gap-3">
                                                {company.name}
                                                {index === 0 && <span className="px-2 py-1 bg-[rgb(255,73,37)] text-white text-xs rounded-full font-bold uppercase tracking-wider">#1 Ranked</span>}
                                            </h3>
                                        </div>
                                        <p className="text-neutral-300 mb-6">{company.description}</p>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Core Services</div>
                                                <ul className="space-y-2 m-0 p-0 list-none">
                                                    {company.services.map(service => (
                                                        <li key={service} className="flex items-center gap-2 text-sm text-neutral-300">
                                                            <CheckCircle2 className="w-4 h-4 text-[rgb(255,73,37)]" />
                                                            {service}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-800">
                                                <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                                                    <Target className="w-4 h-4" /> Ideal For
                                                </div>
                                                <p className="text-sm text-neutral-300 m-0">{company.highlight}</p>
                                            </div>
                                        </div>
                                        
                                        {index === 0 && (
                                            <Link href={company.link} className="inline-flex items-center gap-2 px-6 py-3 bg-[rgb(255,73,37)] text-white font-semibold rounded-lg hover:bg-[rgb(255,73,37)]/90 transition-colors m-0 text-sm no-underline mt-4">
                                                Visit ARC AI
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-3xl font-bold text-white mt-16 mb-6">How to Choose Between Software Companies in Sri Lanka?</h2>
                            
                            <p>
                                Finding a vendor is easy; finding the right partner is difficult. When evaluating these firms for your custom software development needs, consider these three pillars:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                                <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl">
                                    <Zap className="w-8 h-8 text-[rgb(255,73,37)] mb-4" />
                                    <h4 className="text-lg font-bold text-white mb-2">Modern Architecture</h4>
                                    <p className="text-sm text-neutral-400">Do they still rely on slow, legacy monolithic backends, or do they deploy serverless edge networks that load instantly globally?</p>
                                </div>
                                <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl">
                                    <Shield className="w-8 h-8 text-[rgb(255,73,37)] mb-4" />
                                    <h4 className="text-lg font-bold text-white mb-2">Data Security & QA</h4>
                                    <p className="text-sm text-neutral-400">Look for agencies with rigorous QA & Testing protocols, native SOC2 compliance architectures, and enterprise-grade encryption.</p>
                                </div>
                                <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl">
                                    <Rocket className="w-8 h-8 text-[rgb(255,73,37)] mb-4" />
                                    <h4 className="text-lg font-bold text-white mb-2">AI Capabilities</h4>
                                    <p className="text-sm text-neutral-400">In 2026, software without AI is obsolete. Ensure your partner can natively integrate LLMs, RAG pipelines, and automated agents.</p>
                                </div>
                            </div>

                            <p>
                                By far the most critical metric in 2026 is their adoption of Artificial Intelligence. Traditional agencies taking 8 months to build a basic web application are rapidly being replaced by AI-native engineering firms like ARC AI, who can deploy vastly superior, intelligent systems in a fraction of the time.
                            </p>

                            <div className="bg-gradient-to-r from-[rgb(255,73,37)]/20 to-orange-600/20 border border-[rgb(255,73,37)]/20 rounded-xl p-8 mt-12 relative overflow-hidden">
                                <div className="relative z-10 text-center">
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        Ready to build with the #1 Ranked Firm?
                                    </h3>
                                    <p className="text-neutral-200 mb-6 max-w-xl mx-auto">
                                        Stop wasting budget on legacy architectures. Deploy intelligent, serverless software at the edge out of Colombo with ARC AI.
                                    </p>
                                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(255,73,37)] text-white font-semibold rounded-lg hover:bg-[rgb(255,73,37)]/90 transition-colors">
                                        Start Your Project
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800 flex items-center justify-between">
                        <Link href="/blog/" className="group flex items-center gap-2 text-neutral-400 hover:text-[rgb(255,73,37)] transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Back</div>
                                <div className="font-semibold">All Articles</div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </article>
        </div>
    );
}
