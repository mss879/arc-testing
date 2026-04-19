"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    Clock,
    CheckCircle2,
    ChevronRight,
    Globe,
    Users,
    TrendingUp,
    Shield,
    Cpu,
    Building2,
    Rocket,
    Award,
    BarChart3,
    BookOpen,
    Layers,
    Briefcase,
    MapPin,
    ExternalLink,
    HelpCircle,
    ChevronDown,
    Star,
    DollarSign,
    Scale,
    Landmark,
    GraduationCap,
    CircleDot,
    Search,
} from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";

/* ── Animation Variants ──────────────────────────────────────── */

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

/* ── Data ─────────────────────────────────────────────────────── */

const tocItems = [
    { id: "methodology", label: "How We Evaluated These Companies" },
    { id: "industry-overview", label: "Sri Lanka's Software Industry in 2026" },
    { id: "what-to-look-for", label: "What to Look for in a Software Partner" },
    { id: "rankings", label: "The 15 Leading Firms (2026)" },
    { id: "comparison-table", label: "At-a-Glance Comparison" },
    { id: "pricing", label: "How Much Does Development Cost?" },
    { id: "sri-lanka-vs-india", label: "Sri Lanka vs India vs Philippines" },
    { id: "tech-ecosystem", label: "Tech Hubs & Ecosystem" },
    { id: "why-outsource", label: "Why Outsource to Sri Lanka?" },
    { id: "faq", label: "Frequently Asked Questions" },
];

interface Company {
    name: string;
    tagline: string;
    founded: string;
    hq: string;
    size: string;
    specialty: string;
    description: string;
    services: string[];
    bestFor: string;
    website?: string;
    rating?: string;
    ratingSource?: string;
    notableClients?: string;
    techStack?: string;
}

const companies: Company[] = [
    {
        name: "ARC AI",
        tagline: "AI-Native Software & Automation",
        founded: "2024",
        hq: "Colombo & Birmingham, UK",
        size: "10–50",
        specialty: "AI Development & Smart Websites",
        description:
            "A newer entrant that has gained rapid traction by building exclusively on AI-native architecture. ARC AI specialises in serverless Next.js applications deployed at the edge, AI-powered customer service agents, and process automation using LLM-driven workflows. Their dual-market presence (Sri Lanka + UK) gives them a unique blend of local cost efficiency and international design standards. Notable for delivering complete AI ecosystems — from chatbots handling Sinhala, Tamil, and English to fully automated lead qualification pipelines. Their case studies show measurable outcomes including 167% booking increases for tourism clients and 237% organic traffic growth for e-commerce platforms.",
        services: ["Custom AI Development", "Serverless Next.js Apps", "AI Chatbots & Voice Agents", "Process Automation"],
        bestFor: "Businesses wanting modern, AI-powered systems built on cutting-edge architecture.",
        website: "https://www.arcai.agency",
        notableClients: "Tourism operators, real estate agencies, e-commerce retailers (UK & Sri Lanka)",
        techStack: "Next.js, React, TypeScript, LangChain, Supabase, Vercel Edge, OpenAI",
    },
    {
        name: "WSO2",
        tagline: "Open-Source Integration & API Management",
        founded: "2005",
        hq: "Colombo (Global HQ: Santa Clara, CA)",
        size: "1,000+",
        specialty: "Enterprise Middleware",
        description:
            "One of Sri Lanka's most internationally recognised technology companies, WSO2 has become the global standard for open-source API management, identity and access management (IAM), and enterprise integration. Their products power critical infrastructure for hundreds of enterprise clients worldwide, including major banks, healthcare providers, and government agencies. WSO2 is a CNCF member and regularly contributes to the open-source community. Their Ballerina programming language was designed specifically for cloud-native integration. WSO2 Choreo, their internal developer platform, represents their latest push into the API-first development space.",
        services: ["API Management (Choreo)", "Identity Server", "Enterprise Integration", "Ballerina Language"],
        bestFor: "Large enterprises needing robust API management and identity solutions.",
        rating: "4.5",
        ratingSource: "Gartner Peer Insights",
        notableClients: "Global banks, healthcare systems, government agencies across 70+ countries",
        techStack: "Java, Ballerina, Kubernetes, Microservices, OAuth/OIDC",
    },
    {
        name: "Virtusa",
        tagline: "Global Digital Engineering & IT Consulting",
        founded: "1996",
        hq: "Colombo (Global HQ: Southborough, MA)",
        size: "30,000+",
        specialty: "Enterprise Digital Transformation",
        description:
            "Virtusa is one of the largest IT services companies with roots in Sri Lanka, operating a massive delivery centre in Colombo employing thousands of engineers. They serve Fortune 500 clients across banking, financial services, insurance (BFSI), healthcare, and telecommunications. Their capabilities span legacy modernisation, cloud transformation, data analytics, and digital engineering. Virtusa was acquired by Baring Private Equity Asia in 2021 for approximately $2 billion, underscoring the value of Sri Lankan tech talent on the global stage. They maintain partnerships with major cloud providers and enterprise platforms including AWS, Azure, Salesforce, and Pega.",
        services: ["IT Consulting", "Digital Engineering", "Cloud Transformation", "Data & Analytics"],
        bestFor: "Multinational corporations requiring large-scale digital transformation.",
        rating: "4.2",
        ratingSource: "Glassdoor",
        notableClients: "Fortune 500 companies in BFSI, healthcare, telecommunications",
        techStack: "Java, .NET, Salesforce, Pega, AWS, Azure, Spark, Hadoop",
    },
    {
        name: "99x",
        tagline: "Product Engineering for Global Markets",
        founded: "2004",
        hq: "Colombo (Parent: Oslo, Norway)",
        size: "500–1,000",
        specialty: "Product Engineering",
        description:
            "99x has built a strong reputation as a product engineering company, primarily serving Scandinavian and European clients. They focus on building long-term partnerships rather than project-based engagements, embedding dedicated teams that function as extensions of their client's internal engineering departments. 99x was recognised as a Great Place to Work® multiple consecutive years and is known for investing heavily in employee development and R&D. Their technical expertise spans full-stack development, DevOps, QA, and emerging technologies. They operate under a \"co-creation\" model where their teams share ownership of product outcomes rather than simply executing specifications.",
        services: ["Custom Software Development", "Product Engineering", "QA & Testing", "DevOps"],
        bestFor: "European companies looking for reliable, long-term offshore engineering teams.",
        rating: "4.7",
        ratingSource: "Great Place to Work®",
        notableClients: "Scandinavian SaaS companies, European enterprises",
        techStack: "React, Angular, Node.js, .NET, Azure, AWS, Docker, Kubernetes",
    },
    {
        name: "IFS",
        tagline: "Enterprise ERP, EAM & Field Service Management",
        founded: "1983",
        hq: "Colombo (Global HQ: Linköping, Sweden)",
        size: "6,000+ (global)",
        specialty: "Enterprise Software (ERP)",
        description:
            "IFS maintains one of its largest R&D centres in Sri Lanka, developing top-tier enterprise resource planning (ERP), enterprise asset management (EAM), and field service management (FSM) solutions. IFS Cloud, their flagship platform, serves heavy industries including aerospace, defence, energy, construction, and manufacturing. Their Sri Lankan team is integral to global product development, contributing to core platform features used by clients across 60+ countries. IFS has consistently been named a leader in the Gartner Magic Quadrant for Field Service Management and EAM.",
        services: ["ERP (IFS Cloud)", "Enterprise Asset Management", "Field Service Management", "Industrial IoT"],
        bestFor: "Heavy industries requiring strict ERP and asset management systems.",
        rating: "4.3",
        ratingSource: "Gartner Magic Quadrant (Leader)",
        notableClients: "Aerospace, defence, energy, construction companies globally",
        techStack: "PL/SQL, .NET, C++, REST APIs, Azure, Industrial IoT protocols",
    },
    {
        name: "Sysco LABS",
        tagline: "Innovation Centre for Global Supply Chain",
        founded: "2013",
        hq: "Colombo",
        size: "1,500+",
        specialty: "Supply Chain & Retail Technology",
        description:
            "Sysco LABS is the captive technology innovation centre for Sysco Corporation, the world's largest foodservice distribution company (Fortune 51 on the 2026 Fortune 500 list, with $82 billion in annual revenue). Operating out of Colombo, their engineering teams build the software that powers Sysco's global supply chain managing $70+ billion in annual revenue, logistics, and e-commerce platforms. While they don't accept external clients, Sysco LABS is an important indicator of the calibre of engineering talent in Sri Lanka — they compete with Silicon Valley for talent and offer some of the most competitive compensation packages on the island.",
        services: ["Supply Chain Software", "E-commerce Platforms", "Data Engineering", "Enterprise Architecture"],
        bestFor: "Captive centre — demonstrates Sri Lanka's enterprise engineering capability.",
        notableClients: "Sysco Corporation (Fortune 51)",
        techStack: "Java, Kotlin, React, Python, Kafka, Kubernetes, GCP, ML/AI pipelines",
    },
    {
        name: "Calcey Technologies",
        tagline: "Boutique Software Engineering for Startups & Enterprises",
        founded: "2013",
        hq: "Colombo (TRACE Expert City)",
        size: "200–500",
        specialty: "Full-Stack Product Development",
        description:
            "Located at TRACE Expert City in Colombo, Calcey Technologies is a boutique software engineering firm that partners with startups and growth-stage companies globally to build web and mobile applications. They are known for their strong design sensibility, agile delivery processes, and ability to take products from concept to market quickly. Calcey has worked with clients from Silicon Valley, Australia, Europe, and the Middle East across industries including fintech, healthtech, and proptech. They are a Clutch Global Leader with consistently high client satisfaction scores.",
        services: ["Mobile App Development", "Web Applications", "UI/UX Design", "Cloud Infrastructure"],
        bestFor: "Startups and SMEs looking for agile, design-focused MVP development.",
        rating: "4.9",
        ratingSource: "Clutch",
        notableClients: "Silicon Valley startups, Australian fintechs, European proptechs",
        techStack: "React Native, Flutter, React, Node.js, AWS, Firebase, Python",
    },
    {
        name: "Arimac",
        tagline: "Immersive Technology & Digital Innovation",
        founded: "2013",
        hq: "Colombo",
        size: "200–500",
        specialty: "AR/VR, Gamification & Creative Tech",
        description:
            "Arimac stands out in the Sri Lankan tech landscape for its focus on immersive and experiential technologies. They specialise in augmented reality (AR), virtual reality (VR), gamification, and creative digital solutions. Beyond immersive tech, Arimac also delivers custom software development, mobile apps, and enterprise solutions. Their work has been recognised internationally — including at global competitions and startup showcases — and they've partnered with brands in tourism, education, and entertainment to create engaging digital experiences. Founded by Chamira Fernando, Arimac represents the creative and innovative edge of Sri Lanka's software sector.",
        services: ["AR/VR Development", "Gamification", "Mobile Apps", "Enterprise Software"],
        bestFor: "Brands wanting immersive, experiential digital products.",
        rating: "4.6",
        ratingSource: "Clutch",
        notableClients: "Tourism boards, educational institutions, entertainment brands",
        techStack: "Unity, Unreal Engine, ARKit, ARCore, React, Node.js, Swift, Kotlin",
    },
    {
        name: "Rootcode",
        tagline: "Digital Product Engineering Hub",
        founded: "2016",
        hq: "Colombo",
        size: "100–300",
        specialty: "Product Engineering & Cloud-Native Development",
        description:
            "Rootcode has grown rapidly as a specialised digital product engineering company. They focus on building scalable, cloud-native applications using modern technology stacks and are known for their engineering-first culture. Their team works with startups, scale-ups, and enterprises to build products from scratch or modernise legacy systems. Rootcode places a strong emphasis on DevOps, continuous delivery practices, and infrastructure-as-code. Their rapid growth and focus on modern architectures make them representative of the new generation of Sri Lankan software companies.",
        services: ["Product Engineering", "Cloud-Native Development", "DevOps & CI/CD", "Data Engineering"],
        bestFor: "Startups and scale-ups building cloud-native products.",
        rating: "4.8",
        ratingSource: "Clutch",
        notableClients: "International startups, SaaS scale-ups",
        techStack: "React, Next.js, Node.js, Go, AWS, Terraform, Docker, Kubernetes",
    },
    {
        name: "Surge Global",
        tagline: "Software Development + Digital Marketing",
        founded: "2014",
        hq: "Colombo",
        size: "100–300",
        specialty: "Full-Service Digital Agency",
        description:
            "Surge Global occupies an interesting niche by combining custom software development with digital marketing expertise. They can build your product and then help you market it — a combination that few pure-play software companies offer. Their development team handles web and mobile applications, while their marketing division provides data-driven campaigns, performance marketing, SEO, and analytics. Surge serves clients across Australia, USA, UK, and the MENA region and has won multiple industry awards for their integrated approach.",
        services: ["Web & Mobile Development", "Digital Marketing & SEO", "Data Analytics", "E-commerce Solutions"],
        bestFor: "Businesses needing both software development and marketing execution.",
        rating: "4.7",
        ratingSource: "Clutch",
        notableClients: "Australian e-commerce brands, UK digital businesses",
        techStack: "React, Angular, Laravel, Node.js, Python, Google Analytics, AWS",
    },
    {
        name: "Mitra Innovation",
        tagline: "Digital Advancement & Cloud Engineering",
        founded: "2014",
        hq: "Colombo & London, UK",
        size: "100–300",
        specialty: "Cloud Migration & Enterprise Solutions",
        description:
            "Mitra Innovation specialises in helping enterprises adopt modern cloud architectures, particularly on AWS. With offices in both Sri Lanka and the UK, they bridge the gap between offshore development costs and Western enterprise requirements. Mitra is an AWS Advanced Consulting Partner with multiple AWS competencies and has built deep expertise in product incubation — helping enterprises turn internal ideas into standalone software products. Their engagements tend to be long-term, often evolving into managed services relationships that cover ongoing platform maintenance and optimisation.",
        services: ["Cloud Migration (AWS)", "Product Incubation", "Enterprise Applications", "Managed Services"],
        bestFor: "Enterprises pursuing cloud-first strategies and AWS adoption.",
        rating: "4.6",
        ratingSource: "Clutch",
        notableClients: "UK enterprises, regional AWS migration projects",
        techStack: "AWS (Lambda, ECS, S3, DynamoDB), Java, Python, React, Terraform",
    },
    {
        name: "Creative Software",
        tagline: "Dedicated Teams & Staff Augmentation",
        founded: "1999",
        hq: "Colombo",
        size: "200–500",
        specialty: "Offshore Development Teams",
        description:
            "With over two and a half decades of experience, Creative Software is one of the pioneering IT outsourcing companies in Sri Lanka. They specialise in providing dedicated, long-term software development teams to global clients. Rather than project-based work, their model centres on embedding engineers within client organisations for extended periods — often years. This makes them a reliable partner for companies needing to scale their engineering teams without the overhead of direct recruitment in high-cost markets. As one of the oldest software companies in Sri Lanka, they bring unmatched institutional knowledge about operating successful offshore teams.",
        services: ["Dedicated Development Teams", "Staff Augmentation", "Enterprise IT", "Legacy Modernisation"],
        bestFor: "Companies needing long-term, dedicated offshore engineering teams.",
        notableClients: "Long-term enterprise clients across Europe and North America",
        techStack: "Java, .NET, PHP, React, Angular, Mobile (iOS/Android)",
    },
    {
        name: "hSenid",
        tagline: "HR Technology & Enterprise Software",
        founded: "1997",
        hq: "Colombo",
        size: "500–1,000",
        specialty: "Human Resource Management Systems",
        description:
            "hSenid is one of Sri Lanka's oldest and most established technology firms, with deep expertise in human resource management systems (HRMS). Their flagship product, hSenid HRM, is deployed by organisations across South Asia, Southeast Asia, and Africa — serving millions of employees through their platform. Beyond HR tech, hSenid operates in mobile technology and has been a significant contributor to Sri Lanka's software export growth since the late 1990s. They represent the stability and maturity of the Sri Lankan software industry, with nearly three decades of continuous operation.",
        services: ["HRM Software", "Payroll Systems", "Mobile Solutions", "Enterprise Applications"],
        bestFor: "Organisations looking for proven HRMS solutions in emerging markets.",
        notableClients: "Telcos, banks, and enterprises across South Asia and Africa",
        techStack: "Java, Spring Boot, Angular, MySQL, PostgreSQL, AWS",
    },
    {
        name: "Addix",
        tagline: "Custom Application Development with Source Code Ownership",
        founded: "2018",
        hq: "Colombo",
        size: "50–100",
        specialty: "Custom Web & Mobile Applications",
        description:
            "Addix has differentiated itself by emphasising source code ownership and transparent, client-first engagement models. They build custom web and mobile applications with a focus on agile delivery and clear communication. Their \"humanised\" service approach means clients work directly with senior engineers rather than being routed through layers of project management. Addix has built a strong online presence and is frequently cited in directories like Clutch, GoodFirms, and TheManifest as a top-rated Sri Lankan software company, particularly for mid-market and SME clients.",
        services: ["Custom Web Apps", "Mobile Development", "UI/UX Design", "API Development"],
        bestFor: "SMEs wanting hands-on, agile development with full code ownership.",
        rating: "4.9",
        ratingSource: "Clutch",
        notableClients: "SMEs and startups globally (USA, UK, Australia, MENA)",
        techStack: "React, Next.js, React Native, Node.js, Python, AWS, Firebase",
    },
    {
        name: "CodeGen International",
        tagline: "Travel Technology & Enterprise Solutions",
        founded: "1999",
        hq: "Colombo",
        size: "500–1,000",
        specialty: "Travel Tech & Leisure Industry Software",
        description:
            "CodeGen International is a pioneer in travel technology software originating from Sri Lanka. Their flagship products, including TravelBox™ and SiTours, are used by some of the world's largest travel and leisure companies — handling complex booking engines, inventory management, and distribution systems for tour operators and travel agencies globally. CodeGen has expanded into other verticals including education technology with their CodeGen Edu platform. They combine deep domain expertise in the travel industry with enterprise software engineering capabilities accrued over 25+ years of operation.",
        services: ["Travel Booking Engines", "Tour Operator Software", "Enterprise Applications", "Education Technology"],
        bestFor: "Travel and leisure companies needing specialised booking and distribution platforms.",
        notableClients: "Major international tour operators, travel agencies, and hospitality groups",
        techStack: "Java, Spring, React, PostgreSQL, Elasticsearch, AWS, Microservices",
    },
];

const faqs = [
    {
        q: "What are the top-rated software development companies in Sri Lanka for 2026?",
        a: "Based on our evaluation of technical capability, market reputation, innovation, and client portfolio, the leading software companies in Sri Lanka for 2026 include ARC AI (AI-native development), WSO2 (API & integration), Virtusa (enterprise digital engineering), 99x (product engineering), IFS (ERP & FSM), Sysco LABS (supply chain innovation), Calcey Technologies (startup MVPs), Arimac (immersive tech), Rootcode (digital products), Surge Global (development + marketing), Mitra Innovation (cloud migration), Creative Software (dedicated teams), hSenid (HR tech), Addix (custom apps), and CodeGen International (travel tech).",
    },
    {
        q: "Why is Sri Lanka considered a good destination for software outsourcing?",
        a: "Sri Lanka offers strong English proficiency (higher than many South Asian neighbours), a well-educated STEM workforce of 175,000+ IT professionals, hourly rates of $20–$60 USD (50–70% savings over UK/US), a convenient UTC+5:30 timezone that overlaps with European and Middle Eastern business hours, and growing government commitment including a 30 billion LKR (~US$98M) digital budget allocation in 2026. Unlike larger outsourcing markets, Sri Lanka competes on quality over volume — producing ~10,000 selective IT graduates annually.",
    },
    {
        q: "How much does it cost to hire a software development company in Sri Lanka?",
        a: "Hourly rates for software development in Sri Lanka typically range from $20 to $60 USD depending on the company size, specialisation, and seniority of developers. Boutique agencies and startups charge $20–$35/hour, mid-market firms charge $35–$50/hour, and established enterprise-grade companies charge $45–$60/hour. Monthly retainers for dedicated developers typically range from $2,500 to $5,000/month. This represents significant savings compared to UK rates ($80–$150/hour), US rates ($100–$200/hour), and is competitive with Indian rates ($15–$50/hour) while often offering higher per-capita quality.",
    },
    {
        q: "What services do software companies in Sri Lanka typically offer?",
        a: "Sri Lankan software companies offer a comprehensive range of services including: custom software development, mobile app development (iOS & Android), web application development (React, Next.js, Angular), enterprise resource planning (ERP), quality assurance and testing, UI/UX design, cloud migration and DevOps, AI and machine learning solutions, API integration, IT staff augmentation, and managed services. Many firms also specialise in vertical solutions for fintech, healthtech, travel tech, and e-commerce. An emerging specialisation is AI-native development — chatbots, voice agents, and intelligent automation.",
    },
    {
        q: "Which programming languages and technologies are popular among Sri Lankan software companies?",
        a: "The most widely used technologies include JavaScript/TypeScript (React, Next.js, Angular, Node.js), Java (Spring Boot — the dominant enterprise language), Python (Django, Flask, AI/ML), C# (.NET for enterprise clients), PHP (Laravel for web applications), and mobile frameworks (React Native, Flutter, Swift, Kotlin). Cloud platforms (AWS is dominant, followed by Azure and GCP) and DevOps tools (Docker, Kubernetes, Terraform, Jenkins) are standard. AI-focused firms increasingly use LangChain, vector databases (Pinecone, Weaviate), and LLM orchestration frameworks.",
    },
    {
        q: "How do I choose the right software development partner in Sri Lanka?",
        a: "Evaluate partners across five pillars: (1) Technical expertise — does their stack align with your requirements? (2) Portfolio and case studies — have they successfully delivered in your domain? (3) Communication standards — do they use agile methodologies with transparent project management tooling? (4) Security compliance — look for ISO 27001, SOC2 practices, and GDPR awareness. (5) Scalability and retention — can they scale the team, and is their developer retention above 80%? Additionally, request reference calls with existing clients and verify their presence on independent review platforms like Clutch or GoodFirms.",
    },
    {
        q: "Is Sri Lanka better than India for software outsourcing?",
        a: "It depends on your priorities. India offers unmatched scale (5 million+ developers) and lower entry-level rates. Sri Lanka offers higher average English proficiency, smaller team sizes with more senior attention per project, comparable quality at competitive rates, and a timezone that works better for European clients. For projects requiring 3–30 developers with strong communication and design quality, Sri Lanka often outperforms. For projects requiring 100+ developers or highly specialised niche skills, India's larger talent pool may be advantageous. Many clients use both markets for different project types.",
    },
    {
        q: "What is SLASSCOM and how does it relate to Sri Lankan software companies?",
        a: "SLASSCOM (Sri Lanka Association of Software and Service Companies) is the national chamber representing the IT/BPM industry in Sri Lanka. It serves as the primary industry body advocating for policy, talent development, and international market access. SLASSCOM members include most major software companies in Sri Lanka. The organisation publishes industry reports, organises events, and runs initiatives supporting startup growth and talent pipeline development. Being a SLASSCOM member is generally considered a positive indicator of a company's standing in the local industry.",
    },
];

/* ── FAQ Accordion Component ─────────────────────────────────── */

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-neutral-800 last:border-b-0">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-start justify-between gap-4 py-6 text-left group"
            >
                <span className="text-lg font-semibold text-white group-hover:text-[rgb(255,73,37)] transition-colors">
                    {question}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-neutral-400 mt-1 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] pb-6" : "max-h-0"}`}
            >
                <p className="text-neutral-400 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}

/* ── Main Content ────────────────────────────────────────────── */

export default function SoftwareCompaniesContent() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Software Companies in Sri Lanka" },
                ]}
            />

            {/* ── Hero ─────────────────────────────────────────── */}
            <section className="relative px-4 md:px-8 pt-8 md:pt-16 pb-12">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-neutral-300 hover:text-[rgb(255,73,37)] transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        All Articles
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-[rgb(255,73,37)]/20 backdrop-blur-sm text-[rgb(255,73,37)] text-sm font-semibold rounded-full border border-[rgb(255,73,37)]/30 mb-4">
                            Industry Guide · Updated April 2026
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Software Companies in Sri Lanka
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,73,37)] to-orange-500">
                                The Definitive 2026 Guide
                            </span>
                        </h1>
                        <p className="text-xl text-neutral-400 mb-8 max-w-3xl">
                            An in-depth analysis of the 15 leading software development firms operating in Sri Lanka today — from enterprise giants employing 30,000+ engineers to agile AI-native studios. Updated with 2026 industry statistics, pricing benchmarks, and expert evaluation criteria.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-neutral-500 text-sm">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>April 19, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>22 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                <span>15 companies reviewed</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Search className="w-4 h-4" />
                                <span>8 FAQs answered</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl mt-10"
                    >
                        <Image
                            src="/arc-ai-software-company-sri-lanka.webp"
                            alt="Software development offices and tech teams in Colombo, Sri Lanka"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    </motion.div>
                </div>
            </section>

            {/* ── Table of Contents ────────────────────────────── */}
            <section className="px-4 md:px-8 py-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 md:p-8"
                    >
                        <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Layers className="w-4 h-4" />
                            In This Guide
                        </h2>
                        <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
                            {tocItems.map((item, i) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="flex items-center gap-3 py-2 text-neutral-300 hover:text-[rgb(255,73,37)] transition-colors group"
                                >
                                    <span className="text-xs text-neutral-600 font-mono w-6 shrink-0">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <ChevronRight className="w-3 h-3 text-neutral-700 group-hover:text-[rgb(255,73,37)] transition-colors" />
                                    <span className="font-medium text-sm">{item.label}</span>
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                </div>
            </section>

            {/* ── Article Body ────────────────────────────────── */}
            <article className="px-4 md:px-8 pb-16">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg max-w-none">

                    {/* ── Section 0: Methodology ──────────────── */}
                    <motion.section
                        id="methodology"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-8 flex items-center gap-3">
                            <Scale className="w-8 h-8 text-[rgb(255,73,37)]" />
                            How We Evaluated These Companies
                        </h2>

                        <p className="text-neutral-300 mb-6">
                            Transparency builds trust. Here is the exact methodology used to evaluate and rank the <strong>software companies in Sri Lanka</strong> featured in this guide. Unlike paid directory listings, our evaluation is editorial and independent.
                        </p>

                        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 md:p-8 my-8">
                            <h3 className="text-lg font-bold text-white mb-4">Evaluation Criteria (Weighted)</h3>
                            <div className="space-y-4">
                                {[
                                    { criterion: "Technical Capability & Innovation", weight: "25%", desc: "Technology stack modernity, AI/cloud adoption, architectural quality, open-source contributions." },
                                    { criterion: "Market Reputation & Track Record", weight: "20%", desc: "Industry recognition, awards, Clutch/Gartner ratings, years of operation, notable client portfolio." },
                                    { criterion: "Client Portfolio & Case Studies", weight: "20%", desc: "Quality and diversity of delivered projects, verifiable outcomes, industry-specific expertise." },
                                    { criterion: "Scale & Growth Trajectory", weight: "15%", desc: "Team size, revenue growth indicators, international expansion, hiring momentum." },
                                    { criterion: "Specialisation & Differentiation", weight: "10%", desc: "Unique value proposition, niche expertise, defensible market position." },
                                    { criterion: "Communication & Process Maturity", weight: "10%", desc: "Agile adoption, project management transparency, English proficiency, timezone flexibility." },
                                ].map((item) => (
                                    <div key={item.criterion} className="flex gap-4 items-start">
                                        <span className="text-[rgb(255,73,37)] font-bold text-sm w-12 shrink-0 pt-0.5">
                                            {item.weight}
                                        </span>
                                        <div>
                                            <div className="font-semibold text-white text-sm">{item.criterion}</div>
                                            <div className="text-xs text-neutral-500 mt-0.5">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-neutral-400 text-sm italic">
                            <strong>Disclosure:</strong> ARC AI, the publisher of this guide, is included in the rankings. To maintain editorial integrity, ARC AI was evaluated using the same criteria and methodology as every other company. We encourage readers to independently verify all claims by contacting the listed companies directly and consulting third-party review platforms such as Clutch, GoodFirms, and Glassdoor.
                        </p>
                    </motion.section>

                    {/* ── Section 1: Industry Overview ─────────── */}
                    <motion.section
                        id="industry-overview"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <TrendingUp className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Sri Lanka&apos;s Software Industry in 2026
                        </h2>

                        <p className="text-xl text-neutral-200 mb-6">
                            Sri Lanka&apos;s ICT/BPM sector has entered a defining growth phase. What was historically viewed as a lower-cost alternative to India has matured into a high-quality, specialist-driven ecosystem that global enterprises actively seek out for complex engineering work.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
                            {[
                                { value: "$177.8M", label: "Jan 2026 IT Exports", icon: TrendingUp },
                                { value: "60.2%", label: "YoY Export Growth", icon: BarChart3 },
                                { value: "175K+", label: "IT Professionals", icon: Users },
                                { value: "LKR 30B", label: "2026 Digital Budget", icon: Building2 },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 text-center"
                                >
                                    <stat.icon className="w-5 h-5 text-[rgb(255,73,37)] mx-auto mb-2" />
                                    <div className="text-2xl font-black text-white">{stat.value}</div>
                                    <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <p className="text-neutral-300">
                            According to the Export Development Board (EDB), <strong>software companies in Sri Lanka</strong> generated US$177.83 million in export earnings in January 2026 alone — a 60.21% increase over January 2025. February followed with US$153.62 million, representing 36.66% year-on-year growth. The sector now employs over 175,000 skilled professionals and has reached what industry analysts describe as a &ldquo;tipping point&rdquo; in foreign exchange generation, placing it among the country&apos;s top five export earners.
                        </p>

                        <p className="text-neutral-300 mt-4">
                            The government has signalled strong commitment to digital infrastructure with a 2026 national budget allocation of approximately 30 billion LKR (~US$98 million) for major digitisation projects, including the Unique Digital Identity initiative, the e-Grama Niladhari programme, and the Digital Economy Advancement Program. Internet penetration stands at approximately 59.7% of the population (~13.9 million users), with mobile broadband coverage expanding via 4G and emerging 5G deployments.
                        </p>

                        <p className="text-neutral-300 mt-4">
                            Structurally, the industry is undergoing a strategic pivot from basic &ldquo;digitisation&rdquo; (cloud migration, simple CRM/ERP implementation) toward what analysts at the Morning Herald and SLASSCOM are calling <strong>&ldquo;intelligent operations&rdquo;</strong> — leveraging AI-native development platforms, multi-agent systems, and domain-specific AI models to build fundamentally smarter software. This shift is creating a two-tier market: established firms integrating AI into existing enterprise offerings, and newer AI-native companies like ARC AI or Rootcode building entirely on modern architectures from day one.
                        </p>

                        <p className="text-neutral-300 mt-4 text-sm italic">
                            Sources: Export Development Board of Sri Lanka, SLASSCOM, Central Bank of Sri Lanka Annual Report 2025, DataReportal Digital 2026 Sri Lanka, National Budget 2026.
                        </p>
                    </motion.section>

                    {/* ── Section 2: What to Look For ──────────── */}
                    <motion.section
                        id="what-to-look-for"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <Shield className="w-8 h-8 text-[rgb(255,73,37)]" />
                            What to Look for in a Software Partner
                        </h2>

                        <p className="text-neutral-300 mb-6">
                            Finding a vendor is straightforward; finding the <em>right partner</em> requires structured evaluation. Whether you&apos;re a startup building an MVP or a Fortune 500 company modernising legacy systems, these six pillars should guide your selection when evaluating <strong>software companies in Sri Lanka</strong>:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
                            {[
                                {
                                    icon: Cpu,
                                    title: "1. Technical Expertise & Architecture",
                                    desc: "Evaluate their technology stack. Are they building with modern frameworks (React, Next.js, serverless) or relying on legacy monolithic architectures? In 2026, look for firms that can natively integrate AI and deploy to cloud-edge environments. Ask to see their GitHub or architecture documentation.",
                                },
                                {
                                    icon: Briefcase,
                                    title: "2. Portfolio & Domain Experience",
                                    desc: "Request specific case studies in your industry vertical. A firm that has built fintech platforms will have very different expertise from one specialising in travel tech or healthcare. Domain knowledge reduces project risk, accelerates delivery timelines, and avoids costly architectural mistakes.",
                                },
                                {
                                    icon: Users,
                                    title: "3. Communication & Process Maturity",
                                    desc: "Sri Lankan teams generally have excellent English proficiency, but verify their project management methodology. Look for agile/Scrum adoption with regular sprint demos, transparent JIRA/Linear boards, and dedicated account managers. Request a trial sprint before committing to a long-term engagement.",
                                },
                                {
                                    icon: Shield,
                                    title: "4. Security & Compliance",
                                    desc: "For enterprise or regulated industry projects, verify their security posture: ISO 27001 certification, SOC2 compliance practices, GDPR awareness, and secure SDLC processes. Ask specifically about code review workflows, vulnerability scanning (SAST/DAST), and data encryption standards at rest and in transit.",
                                },
                                {
                                    icon: TrendingUp,
                                    title: "5. Scalability & Talent Retention",
                                    desc: "Can they scale from 3 to 30 engineers as your project grows? What is their annual developer retention rate? High turnover is a critical red flag — you lose accumulated domain knowledge with every departure. Top Sri Lankan firms maintain 85%+ retention. Ask for their retention numbers directly.",
                                },
                                {
                                    icon: Globe,
                                    title: "6. Timezone & Cultural Alignment",
                                    desc: "Sri Lanka's UTC+5:30 timezone provides full-day overlap with European teams and partial overlap with US East Coast (evening calls). Assess their willingness to adjust schedules, and confirm whether they have experience working with clients in your region. Cultural alignment on communication norms can make or break a remote partnership.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="bg-neutral-950 border border-neutral-800 rounded-xl p-6"
                                >
                                    <item.icon className="w-6 h-6 text-[rgb(255,73,37)] mb-3" />
                                    <h3 className="text-base font-bold text-white mb-2 m-0">{item.title}</h3>
                                    <p className="text-sm text-neutral-400 m-0">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* ── Section 3: Company Rankings ──────────── */}
                    <motion.section
                        id="rankings"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-4 flex items-center gap-3">
                            <Award className="w-8 h-8 text-[rgb(255,73,37)]" />
                            The 15 Leading Software Companies in Sri Lanka (2026)
                        </h2>
                        <p className="text-neutral-400 mb-10">
                            Ranked using the weighted methodology described above. This list covers the full spectrum — from global enterprise giants with 30,000+ employees to agile AI-native studios with 10 engineers — so you can find a partner that genuinely matches your project&apos;s specific needs and budget.
                        </p>

                        <div className="space-y-6">
                            {companies.map((company, index) => (
                                <div
                                    key={company.name}
                                    className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 md:p-8 hover:border-neutral-700 transition-colors"
                                >
                                    {/* Header */}
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className="text-sm font-mono text-neutral-600">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                                <h3 className="text-2xl font-bold text-white m-0">
                                                    {company.name}
                                                </h3>
                                            </div>
                                            <p className="text-sm text-[rgb(255,73,37)] font-medium m-0">
                                                {company.tagline}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            {company.rating && (
                                                <div className="flex items-center gap-1 px-2.5 py-1 bg-neutral-900 rounded-full border border-neutral-800">
                                                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                                    <span className="text-xs font-bold text-white">{company.rating}</span>
                                                    <span className="text-xs text-neutral-500">/ 5</span>
                                                </div>
                                            )}
                                            {company.website && (
                                                <Link
                                                    href={company.website}
                                                    className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-[rgb(255,73,37)] transition-colors no-underline"
                                                >
                                                    <ExternalLink className="w-3 h-3" />
                                                    Visit
                                                </Link>
                                            )}
                                        </div>
                                    </div>

                                    {/* Meta row */}
                                    <div className="flex flex-wrap gap-4 text-xs text-neutral-500 mb-5">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" /> Est. {company.founded}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3" /> {company.hq}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Users className="w-3 h-3" /> {company.size} employees
                                        </span>
                                        {company.ratingSource && (
                                            <span className="flex items-center gap-1">
                                                <Star className="w-3 h-3" /> {company.ratingSource}
                                            </span>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className="text-neutral-300 mb-5">{company.description}</p>

                                    {/* Notable clients & Tech stack */}
                                    {(company.notableClients || company.techStack) && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                                            {company.notableClients && (
                                                <div className="text-xs">
                                                    <span className="text-neutral-500 font-semibold uppercase tracking-wider">Notable Clients: </span>
                                                    <span className="text-neutral-400">{company.notableClients}</span>
                                                </div>
                                            )}
                                            {company.techStack && (
                                                <div className="text-xs">
                                                    <span className="text-neutral-500 font-semibold uppercase tracking-wider">Tech Stack: </span>
                                                    <span className="text-neutral-400">{company.techStack}</span>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Services + Best For */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                                                Core Services
                                            </div>
                                            <ul className="space-y-1.5 m-0 p-0 list-none">
                                                {company.services.map((s) => (
                                                    <li key={s} className="flex items-center gap-2 text-sm text-neutral-300">
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-[rgb(255,73,37)] shrink-0" />
                                                        {s}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800/50">
                                            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                                <Rocket className="w-3.5 h-3.5" /> Best For
                                            </div>
                                            <p className="text-sm text-neutral-300 m-0">{company.bestFor}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* ── Section 4: Comparison Table ──────────── */}
                    <motion.section
                        id="comparison-table"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <BarChart3 className="w-8 h-8 text-[rgb(255,73,37)]" />
                            At-a-Glance Comparison
                        </h2>

                        <div className="overflow-x-auto -mx-4 md:mx-0">
                            <table className="w-full text-sm border border-neutral-800 min-w-[800px]">
                                <thead>
                                    <tr className="border-b border-neutral-800 bg-neutral-950">
                                        <th className="p-3 text-left text-neutral-400 font-semibold">#</th>
                                        <th className="p-3 text-left text-neutral-400 font-semibold">Company</th>
                                        <th className="p-3 text-left text-neutral-400 font-semibold">Est.</th>
                                        <th className="p-3 text-left text-neutral-400 font-semibold">Specialty</th>
                                        <th className="p-3 text-left text-neutral-400 font-semibold">Size</th>
                                        <th className="p-3 text-left text-neutral-400 font-semibold">Rating</th>
                                        <th className="p-3 text-left text-neutral-400 font-semibold">Best For</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {companies.map((c, i) => (
                                        <tr key={c.name} className="border-b border-neutral-800/50 hover:bg-neutral-900/50 transition-colors">
                                            <td className="p-3 text-neutral-600 font-mono text-xs">{String(i + 1).padStart(2, "0")}</td>
                                            <td className="p-3 text-white font-semibold whitespace-nowrap">{c.name}</td>
                                            <td className="p-3 text-neutral-400">{c.founded}</td>
                                            <td className="p-3 text-neutral-400 text-xs">{c.specialty}</td>
                                            <td className="p-3 text-neutral-400 whitespace-nowrap">{c.size}</td>
                                            <td className="p-3 text-neutral-400 whitespace-nowrap">
                                                {c.rating ? (
                                                    <span className="flex items-center gap-1">
                                                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                                        {c.rating}
                                                    </span>
                                                ) : (
                                                    <span className="text-neutral-600">—</span>
                                                )}
                                            </td>
                                            <td className="p-3 text-neutral-500 text-xs max-w-[200px]">{c.bestFor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.section>

                    {/* ── Section 5: Pricing ───────────────────── */}
                    <motion.section
                        id="pricing"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <DollarSign className="w-8 h-8 text-[rgb(255,73,37)]" />
                            How Much Does Software Development Cost in Sri Lanka?
                        </h2>

                        <p className="text-neutral-300 mb-6">
                            One of the primary reasons international businesses choose <strong>software companies in Sri Lanka</strong> is the compelling cost structure. Here is a detailed breakdown of current market rates as of 2026:
                        </p>

                        <div className="overflow-x-auto -mx-4 md:mx-0 my-8">
                            <table className="w-full text-sm border border-neutral-800 min-w-[600px]">
                                <thead>
                                    <tr className="border-b border-neutral-800 bg-neutral-950">
                                        <th className="p-4 text-left text-neutral-400 font-semibold">Company Tier</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">Hourly Rate (USD)</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">Monthly Dedicated Dev</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">Typical Profile</th>
                                    </tr>
                                </thead>
                                <tbody className="text-neutral-300">
                                    <tr className="border-b border-neutral-800/50">
                                        <td className="p-4 font-medium text-white">Boutique / Startup</td>
                                        <td className="p-4">$20 – $35</td>
                                        <td className="p-4">$2,500 – $3,500</td>
                                        <td className="p-4 text-xs text-neutral-400">Small teams, agile, founder-led. e.g. Addix, ARC AI</td>
                                    </tr>
                                    <tr className="border-b border-neutral-800/50">
                                        <td className="p-4 font-medium text-white">Mid-Market</td>
                                        <td className="p-4">$35 – $50</td>
                                        <td className="p-4">$3,500 – $5,000</td>
                                        <td className="p-4 text-xs text-neutral-400">Established teams, structured processes. e.g. Calcey, Surge, Rootcode</td>
                                    </tr>
                                    <tr className="border-b border-neutral-800/50">
                                        <td className="p-4 font-medium text-white">Enterprise</td>
                                        <td className="p-4">$45 – $60</td>
                                        <td className="p-4">$5,000 – $7,000</td>
                                        <td className="p-4 text-xs text-neutral-400">Large-scale, compliance-ready. e.g. Virtusa, 99x, Mitra</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium text-white">Specialised / Niche</td>
                                        <td className="p-4">$40 – $80</td>
                                        <td className="p-4">$4,500 – $8,000</td>
                                        <td className="p-4 text-xs text-neutral-400">Domain experts (ERP, travel tech). e.g. IFS, CodeGen, WSO2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4">How Does Sri Lanka Compare Globally?</h3>
                        <div className="overflow-x-auto -mx-4 md:mx-0 my-6">
                            <table className="w-full text-sm border border-neutral-800 min-w-[500px]">
                                <thead>
                                    <tr className="border-b border-neutral-800 bg-neutral-950">
                                        <th className="p-4 text-left text-neutral-400 font-semibold">Country</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">Average Hourly Rate (USD)</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">vs Sri Lanka</th>
                                    </tr>
                                </thead>
                                <tbody className="text-neutral-300">
                                    {[
                                        { country: "🇺🇸 United States", rate: "$100 – $200", vs: "3–6x more expensive" },
                                        { country: "🇬🇧 United Kingdom", rate: "$80 – $150", vs: "2.5–5x more expensive" },
                                        { country: "🇦🇺 Australia", rate: "$80 – $140", vs: "2.5–4x more expensive" },
                                        { country: "🇵🇱 Poland / Eastern Europe", rate: "$40 – $80", vs: "1.5–2x more expensive" },
                                        { country: "🇮🇳 India", rate: "$15 – $50", vs: "Comparable (SL often higher quality/capita)" },
                                        { country: "🇱🇰 Sri Lanka", rate: "$20 – $60", vs: "—" },
                                        { country: "🇵🇭 Philippines", rate: "$15 – $40", vs: "Comparable (SL stronger in engineering)" },
                                        { country: "🇻🇳 Vietnam", rate: "$18 – $45", vs: "Comparable" },
                                    ].map((row) => (
                                        <tr key={row.country} className="border-b border-neutral-800/50">
                                            <td className="p-4 font-medium whitespace-nowrap">{row.country}</td>
                                            <td className="p-4">{row.rate}</td>
                                            <td className="p-4 text-xs text-neutral-400">{row.vs}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="text-neutral-400 text-sm italic">
                            Rates are estimates based on publicly available data, Clutch listings, and industry surveys as of Q1 2026. Actual rates vary by project complexity, seniority requirements, and engagement model.
                        </p>
                    </motion.section>

                    {/* ── Section 6: SL vs India vs Philippines ── */}
                    <motion.section
                        id="sri-lanka-vs-india"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <Scale className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Sri Lanka vs India vs Philippines: Which Should You Choose?
                        </h2>

                        <p className="text-neutral-300 mb-6">
                            This is one of the most common questions when evaluating offshore software development options. Each market has distinct advantages depending on your project requirements:
                        </p>

                        <div className="overflow-x-auto -mx-4 md:mx-0 my-8">
                            <table className="w-full text-sm border border-neutral-800 min-w-[700px]">
                                <thead>
                                    <tr className="border-b border-neutral-800 bg-neutral-950">
                                        <th className="p-4 text-left text-neutral-400 font-semibold">Factor</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">🇱🇰 Sri Lanka</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">🇮🇳 India</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">🇵🇭 Philippines</th>
                                    </tr>
                                </thead>
                                <tbody className="text-neutral-300">
                                    {[
                                        { factor: "Talent Pool Size", sl: "175,000+ IT professionals", india: "5,000,000+ IT professionals", ph: "1,500,000+ in IT/BPO" },
                                        { factor: "English Proficiency", sl: "Very High (South Asia leading)", india: "High (varies by region)", ph: "Very High (US-influenced)" },
                                        { factor: "Average Hourly Rate", sl: "$20 – $60", india: "$15 – $50", ph: "$15 – $40" },
                                        { factor: "Timezone (UTC)", sl: "+5:30 (EU overlap)", india: "+5:30 (EU overlap)", ph: "+8:00 (APAC overlap)" },
                                        { factor: "Quality per Capita", sl: "Very High (selective)", india: "Varies widely", ph: "Good (BPO-focused)" },
                                        { factor: "Best For", sl: "Quality-focused teams of 3–30", india: "Scale: teams of 50–500+", ph: "BPO, support, content" },
                                        { factor: "Key Differentiator", sl: "Elite talent density, design quality", india: "Massive scale, every niche covered", ph: "Cultural alignment with US clients" },
                                        { factor: "Scalability Risk", sl: "Limited for 100+ teams", india: "Low — massive pipeline", ph: "Moderate — engineering talent thinner" },
                                    ].map((row) => (
                                        <tr key={row.factor} className="border-b border-neutral-800/50">
                                            <td className="p-4 font-medium text-white whitespace-nowrap">{row.factor}</td>
                                            <td className="p-4 text-sm">{row.sl}</td>
                                            <td className="p-4 text-sm">{row.india}</td>
                                            <td className="p-4 text-sm">{row.ph}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 my-8">
                            <h3 className="text-lg font-bold text-white mb-3 m-0">The Bottom Line</h3>
                            <p className="text-neutral-400 m-0 text-sm">
                                <strong className="text-white">Choose Sri Lanka</strong> when you need a high-quality team of 3–30 developers with excellent communication, design sensibility, and willingness to operate as a genuine extension of your team. The selective talent pipeline means higher average skill per developer.
                                <br /><br />
                                <strong className="text-white">Choose India</strong> when you need massive scale (50–500+ developers), hyper-specific niche skills, or the lowest possible entry-level rates. India&apos;s ecosystem covers virtually every technology and domain.
                                <br /><br />
                                <strong className="text-white">Choose the Philippines</strong> when your primary need is BPO, customer support, or content operations — especially if you need strong cultural alignment with US clientele. For deep software engineering, Sri Lanka and India typically offer stronger options.
                            </p>
                        </div>
                    </motion.section>

                    {/* ── Section 7: Tech Ecosystem ────────────── */}
                    <motion.section
                        id="tech-ecosystem"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <Landmark className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Sri Lanka&apos;s Tech Hubs & Ecosystem
                        </h2>

                        <p className="text-neutral-300 mb-6">
                            Understanding where <strong>software companies in Sri Lanka</strong> operate and the supporting ecosystem provides valuable context for evaluating potential partners:
                        </p>

                        <div className="space-y-6 my-8">
                            {[
                                {
                                    icon: Building2,
                                    name: "TRACE Expert City, Maradana",
                                    desc: "Sri Lanka's premier technology park, purpose-built for IT companies. Houses Calcey Technologies, multiple startups, and innovation labs. Managed by the University of Moratuwa. Provides shared infrastructure, networking events, and incubation programmes.",
                                },
                                {
                                    icon: Building2,
                                    name: "Orion City, Colombo 09",
                                    desc: "A major IT tower in Colombo hosting several technology companies and BPO operations. Provides enterprise-grade office infrastructure, backup power, and connectivity for mission-critical operations.",
                                },
                                {
                                    icon: GraduationCap,
                                    name: "University Pipeline",
                                    desc: "The University of Moratuwa (ranked #1 for engineering in Sri Lanka), University of Colombo School of Computing (UCSC), and the Informatics Institute of Technology (IIT) produce approximately 10,000 IT graduates annually. Government-supported bootcamps and micro-credential programmes through the new GOVTECH initiative supplement the university pipeline.",
                                },
                                {
                                    icon: CircleDot,
                                    name: "SLASSCOM",
                                    desc: "The Sri Lanka Association of Software and Service Companies is the national industry body representing 300+ member companies. SLASSCOM publishes annual industry reports, runs talent development initiatives, organises international trade missions, and advocates for policy reform to support the IT sector. Membership is a positive indicator of company standing.",
                                },
                                {
                                    icon: Globe,
                                    name: "Startup Ecosystem",
                                    desc: "Colombo's startup scene has matured significantly since 2020, with accelerators like Hatch (by Sri Lanka Telecom), Spiralation, and Blue Ocean Ventures supporting early-stage tech companies. The government has also established a Rs. 1.5 billion startup fund under the Ministry of Digital Economy to further support tech entrepreneurs.",
                                },
                            ].map((hub) => (
                                <div key={hub.name} className="flex gap-4">
                                    <div className="w-10 h-10 bg-[rgb(255,73,37)]/10 rounded-lg flex items-center justify-center shrink-0">
                                        <hub.icon className="w-5 h-5 text-[rgb(255,73,37)]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">{hub.name}</h3>
                                        <p className="text-neutral-400 m-0 text-sm">{hub.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* ── Section 8: Why Outsource to SL ──────── */}
                    <motion.section
                        id="why-outsource"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <Globe className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Why Outsource to Sri Lanka?
                        </h2>

                        <p className="text-neutral-300 mb-6">
                            Sri Lanka may not have the sheer scale of India or the Philippines, but that&apos;s increasingly seen as an advantage. Here is what sets Sri Lankan <strong>software companies</strong> apart in the global outsourcing landscape:
                        </p>

                        <div className="space-y-6 my-8">
                            {[
                                {
                                    icon: Users,
                                    title: "English Proficiency",
                                    desc: "Sri Lanka consistently ranks among the top English-speaking nations in South Asia. English is taught as a second language from primary school and used as the medium of instruction at most universities. This results in naturally fluent communication — not just competent translation — significantly reducing friction in remote collaborations.",
                                },
                                {
                                    icon: Award,
                                    title: "Quality Over Volume",
                                    desc: "Rather than competing on scale, Sri Lankan firms compete on quality. The country produces roughly 10,000 IT graduates annually — a manageable pipeline that allows companies to be highly selective in hiring. The result is teams with higher average skill levels per capita compared to mass-production talent markets. Several Sri Lankan engineers have won global competitive programming awards.",
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Competitive Cost Structure",
                                    desc: "Hourly rates of $20–$60 USD offer 50–70% savings over UK or US teams without compromising quality. Following the 2022 economic adjustment, the rupee has stabilised and the cost structure has become even more attractive for international clients while still supporting strong local engineering salaries.",
                                },
                                {
                                    icon: Globe,
                                    title: "Strategic Timezone (UTC+5:30)",
                                    desc: "Full-day overlap with European teams enables seamless standups, sprint reviews, and pair programming sessions. Partial overlap with US East Coast enables critical evening handoffs. This timezone advantage is frequently cited by UK, European, and Australian clients as a primary reason for choosing Sri Lanka.",
                                },
                                {
                                    icon: Building2,
                                    title: "Government-Backed Digital Growth",
                                    desc: "The 2026 national budget allocated ~US$98 million for digitisation projects. The new GOVTECH initiative (replacing ICTA) leads digital governance, TRACE Expert City offers purpose-built tech facilities, and BOI incentives attract international companies to establish R&D centres. This infrastructure commitment signals long-term stability for the sector.",
                                },
                                {
                                    icon: Shield,
                                    title: "Intellectual Property Safety",
                                    desc: "Sri Lanka has established IP protection frameworks and is a signatory to major international intellectual property treaties (Berne Convention, Paris Convention, TRIPS). This provides legal recourse for IP disputes — an important consideration for companies outsourcing proprietary software development.",
                                },
                            ].map((item) => (
                                <div key={item.title} className="flex gap-4">
                                    <div className="w-10 h-10 bg-[rgb(255,73,37)]/10 rounded-lg flex items-center justify-center shrink-0">
                                        <item.icon className="w-5 h-5 text-[rgb(255,73,37)]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                                        <p className="text-neutral-400 m-0 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* ── Section 9: FAQs ──────────────────────── */}
                    <motion.section
                        id="faq"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <HelpCircle className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Frequently Asked Questions
                        </h2>

                        <div className="bg-neutral-950 border border-neutral-800 rounded-xl px-6 md:px-8">
                            {faqs.map((faq) => (
                                <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                            ))}
                        </div>
                    </motion.section>

                    {/* ── Related Articles ─────────────────────── */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mt-16"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">Related Reading</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                {
                                    title: "How AI Is Transforming Sri Lankan Businesses in 2026",
                                    href: "/blog/how-ai-transforms-sri-lanka-businesses-2026",
                                    tag: "AI Case Studies",
                                },
                                {
                                    title: "Top Automation Companies in Sri Lanka",
                                    href: "/blog/automation-companies-sri-lanka",
                                    tag: "Process Automation",
                                },
                                {
                                    title: "AI Companies in Sri Lanka — Complete Guide",
                                    href: "/ai-companies-sri-lanka",
                                    tag: "AI Companies",
                                },
                            ].map((article) => (
                                <Link
                                    key={article.href}
                                    href={article.href}
                                    className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 hover:border-[rgb(255,73,37)]/30 transition-colors no-underline group"
                                >
                                    <span className="text-xs text-[rgb(255,73,37)] font-semibold uppercase tracking-wider">
                                        {article.tag}
                                    </span>
                                    <p className="text-white font-semibold mt-2 mb-0 group-hover:text-[rgb(255,73,37)] transition-colors text-sm">
                                        {article.title}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </motion.section>

                    {/* ── Bottom CTA (subtle) ─────────────────── */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mt-16"
                    >
                        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-8 text-center">
                            <h3 className="text-xl font-bold text-white mb-3">
                                Need help choosing the right software partner?
                            </h3>
                            <p className="text-neutral-400 mb-6 max-w-xl mx-auto text-sm">
                                Every project has unique requirements — budget, timeline, technology stack, and team size. If you&apos;re evaluating software companies in Sri Lanka for your next project, we&apos;re happy to share our perspective based on years of operating in this market — no strings attached.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[rgb(255,73,37)] text-white font-semibold rounded-lg hover:bg-[rgb(255,73,37)]/90 transition-colors text-sm no-underline"
                            >
                                Get a Free Consultation
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.section>

                    {/* ── Author / E-E-A-T Section ─────────────── */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mt-16"
                    >
                        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 md:p-8">
                            <div className="flex items-start gap-5">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[rgb(255,73,37)] to-orange-600 flex items-center justify-center p-2 shrink-0">
                                    <Image src="/favicon.png" alt="ARC AI" width={64} height={64} className="w-full h-full object-contain" loading="lazy" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1 m-0">About the Author</h3>
                                    <p className="text-sm text-[rgb(255,73,37)] font-medium mb-3 m-0">ARC AI Research Team</p>
                                    <p className="text-sm text-neutral-400 m-0">
                                        This guide was researched and compiled by the ARC AI editorial team, drawing on direct experience operating as a software company in both Colombo and Birmingham (UK). Our team has worked with firms across the Sri Lankan tech ecosystem and maintains relationships with SLASSCOM and multiple companies on this list. Data sourced from the Export Development Board (EDB), Central Bank Annual Report, SLASSCOM publications, Clutch, and GoodFirms.
                                    </p>
                                    <div className="flex gap-3 mt-4">
                                        <Link href="/about" className="text-xs text-neutral-500 hover:text-[rgb(255,73,37)] transition-colors no-underline">About ARC AI</Link>
                                        <span className="text-neutral-800">|</span>
                                        <Link href="/contact" className="text-xs text-neutral-500 hover:text-[rgb(255,73,37)] transition-colors no-underline">Contact Us</Link>
                                        <span className="text-neutral-800">|</span>
                                        <Link href="/blog" className="text-xs text-neutral-500 hover:text-[rgb(255,73,37)] transition-colors no-underline">More Articles</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* ── Tags ─────────────────────────────────── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mt-12 pt-8 border-t border-neutral-800"
                    >
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                            Topics Covered
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Software Companies Sri Lanka",
                                "IT Outsourcing Sri Lanka",
                                "Software Development Colombo",
                                "Digital Transformation",
                                "AI Development Sri Lanka",
                                "Enterprise Software",
                                "Offshore Development",
                                "Sri Lanka vs India",
                                "SLASSCOM",
                                "Tech Startups Colombo",
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-full border border-neutral-800"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Navigation ───────────────────────────── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mt-12 pt-8 border-t border-neutral-800 flex items-center justify-between"
                    >
                        <Link
                            href="/blog"
                            className="group flex items-center gap-2 text-neutral-400 hover:text-[rgb(255,73,37)] transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Back</div>
                                <div className="font-semibold">All Articles</div>
                            </div>
                        </Link>
                        <Link
                            href="/ai-companies-sri-lanka"
                            className="group flex items-center gap-2 text-neutral-400 hover:text-[rgb(255,73,37)] transition-colors text-right"
                        >
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Related</div>
                                <div className="font-semibold">AI Companies Guide</div>
                            </div>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    {/* Cross-link to Web Design Guide */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mt-8 bg-gradient-to-br from-[rgb(255,73,37)]/10 via-neutral-950 to-black border border-[rgb(255,73,37)]/20 rounded-xl p-6"
                    >
                        <Link href="/web-design-sri-lanka" className="flex items-center justify-between gap-4 group no-underline">
                            <div>
                                <div className="text-xs font-bold text-[rgb(255,73,37)] uppercase tracking-widest mb-1">Related Pillar Guide</div>
                                <h4 className="text-lg font-bold text-white group-hover:text-[rgb(255,73,37)] transition-colors m-0">Web Design Companies in Sri Lanka — The Complete 2026 Guide</h4>
                                <p className="text-sm text-neutral-400 mt-1 m-0">12 agencies evaluated · Pricing benchmarks · WordPress vs Next.js</p>
                            </div>
                            <ArrowRight className="w-6 h-6 text-neutral-400 group-hover:text-[rgb(255,73,37)] transition-colors shrink-0" />
                        </Link>
                    </motion.div>
                </div>
            </article>
        </div>
    );
}
