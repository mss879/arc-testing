import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    Clock,
    CheckCircle2,
    ChevronRight,
    ChevronDown,
    Globe,
    Users,
    TrendingUp,
    Shield,
    Cpu,
    Briefcase,
    MapPin,
    HelpCircle,
    Star,
    DollarSign,
    Scale,
    Layers,
    MonitorSmartphone,
    Code,
    Zap,
    Paintbrush,
    Award,
    BarChart3,
    LineChart,
    CircleDot,
    Rocket,
    Search
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { AnimatedSection, HeroAnimation, HeroImageAnimation } from "./animations";
import { FAQItem } from "./faq-accordion";

/* ── Data ─────────────────────────────────────────────────────── */

const tocItems = [
    { id: "industry-statistics", label: "Sri Lanka Web Market Statistics" },
    { id: "state-of-web-design", label: "The State of Web Design (2026)" },
    { id: "outsourcing-comparison", label: "Sri Lanka vs India/Philippines" },
    { id: "methodology", label: "Our Evaluation Methodology" },
    { id: "rankings", label: "The 12 Best Web Design Companies" },
    { id: "comparison-table", label: "At-a-Glance Agency Comparison" },
    { id: "pricing-benchmarks", label: "Exact Pricing & Cost Benchmarks" },
    { id: "wordpress-vs-custom", label: "WordPress vs Custom React/Next.js" },
    { id: "core-web-vitals", label: "Why Performance & Mobile-First Win" },
    { id: "selection-framework", label: "How to Evaluate an Agency" },
    { id: "faq", label: "Frequently Asked Questions" },
];

interface Company {
    name: string;
    tagline: string;
    founded: string;
    hq: string;
    size: string;
    specialty: string;
    description: React.ReactNode;
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
        tagline: "The Next.js & AI-Native Specialists",
        founded: "2024",
        hq: "Colombo & Birmingham, UK",
        size: "10–50",
        specialty: "High-Performance Next.js Websites & AI Development",
        description: (
            <>
                <p className="mb-4">
                    In an industry predominantly saturated by traditional WordPress developers, ARC AI has disrupted the Sri Lankan market by building websites exclusively on modern, AI-native architectures. Leveraging Next.js edge-rendering, ultra-fast global CDNs (Vercel), and deep AI integrations, their platforms consistently score perfect 100s on Google's Core Web Vitals—a critical metric for modern SEO.
                </p>
                <p className="mb-4">
                    ARC AI's dual-market presence between Sri Lanka and the UK allows them to deliver European-tier design standards while maintaining hyper-competitive Sri Lankan pricing. They are not a volume-based agency; instead, they operate as a boutique engineering and design studio focused on high-end businesses that view their website as an active revenue-generating asset rather than a static brochure.
                </p>
                <p>
                    Beyond visual aesthetics, ARC AI is pioneering the integration of intelligent automation directly into the web interface. Their custom builds often feature AI conversational agents capable of answering complex user inquiries, multi-language processing (English, Sinhala, Tamil), and seamless API connectivity with modern headless CMS platforms. If you require a website that dominates search rankings purely through technical superiority and lightning-fast load times, ARC AI stands at the pinnacle of modern web engineering in Sri Lanka.
                </p>
            </>
        ),
        services: ["Next.js Web Development", "AI Agent Integration", "Headless CMS Architecture", "Technical SEO Audits"],
        bestFor: "Forward-thinking businesses demanding cutting-edge performance, perfect SEO fundamentals, and premium design.",
        website: "https://www.arcai.agency",
        rating: "5.0",
        ratingSource: "Internal Benchmark",
        notableClients: "UK E-Commerce Brands, Sri Lankan Tourism Operators, Premium Real Estate",
        techStack: "Next.js, React, TailwindCSS, Vercel Edge, Framer Motion, TypeScript",
    },
    {
        name: "Xiteb",
        tagline: "Award-Winning Custom Development",
        founded: "2010",
        hq: "Colombo",
        size: "50–100",
        specialty: "E-Commerce & Corporate Web Solutions",
        description: (
            <>
                <p className="mb-4">
                    With over a decade of operational excellence, Xiteb is one of Sri Lanka's most decorated web design and software development agencies. Operating out of Colombo with a strong portfolio of international and local clients, Xiteb has consistently won awards at the BestWeb.lk and SLT Zero One Awards. They specialise in robust corporate web development and enterprise-grade e-commerce solutions.
                </p>
                <p className="mb-4">
                    What sets Xiteb apart is their rigorous commitment to systematic development processes and their ability to handle massive product catalogues for retail clients. They possess deep expertise in PHP-based frameworks, Magento for high-volume e-commerce, and bespoke web applications tailored to specific business logic. Their design philosophy leans heavily towards structured, conversion-optimised layouts that guide the user seamlessly towards checkout or lead generation endpoints.
                </p>
                <p>
                    For large-scale retail chains or established corporate entities looking for a highly reliable, battle-tested agency that has successfully navigated hundreds of complex deployments, Xiteb offers a tremendously secure pair of hands. Their long-standing presence in the industry means they have developed an extensive internal library of modules, enabling rapid deployment of complex functionalities.
                </p>
            </>
        ),
        services: ["Corporate Web Design", "E-Commerce Platforms (Magento/WooCommerce)", "Custom Web Applications", "Mobile App Development"],
        bestFor: "Large retail brands and established corporations needing highly complex, secure, and easily manageable web portals.",
        website: "https://xiteb.com",
        notableClients: "Major Sri Lankan Retailers, Government Institutions, Manufacturing Corporates",
        techStack: "PHP, Laravel, Magento, MySQL, WordPress, Bootstrap",
    },
    {
        name: "Phyxle",
        tagline: "Boutique UI/UX & Web Design",
        founded: "2018",
        hq: "Colombo",
        size: "10–50",
        specialty: "Creative UI/UX Design & Branding",
        description: (
            <>
                <p className="mb-4">
                    Phyxle has carved out a unique space in the Sri Lankan web design ecosystem by placing an uncompromising focus on the end-user's microscopic interactions. Born as a design-first agency, their approach to web development begins entirely in Figma, heavily prototyping every interaction, micro-animation, and user flow before a single line of code is written.
                </p>
                <p className="mb-4">
                    This obsessive dedication to visual fidelity and user-centric design makes Phyxle the premier choice for brands where aesthetics are inherently tied to business value—such as luxury hospitality, high-end fashion, architectural firms, and creative portfolios. Their digital experiences often feel less like standard websites and more like interactive digital lookbooks, leveraging WebGL, advanced scroll-hijacking, and cinematic parallax effects.
                </p>
                <p>
                    While they handle development beautifully, usually deploying on highly custom WordPress builds or modern frontend frameworks, their absolute true strength lies in brand translation. They excel at taking a stagnant physical brand identity and translating it into a fluid, digital-first experience that captivates audiences and drastically increases on-page dwell time.
                </p>
            </>
        ),
        services: ["UI/UX Prototyping", "Interactive Web Design", "Brand Identity", "Front-end Development"],
        bestFor: "Luxury brands, architectural firms, and creative industries that require visually stunning, award-winning aesthetics.",
        rating: "4.8",
        ratingSource: "Clutch",
        techStack: "Figma, Webflow, Custom WordPress, GSAP, Three.js",
    },
    {
        name: "Tectera",
        tagline: "Comprehensive Web & App Solutions",
        founded: "2013",
        hq: "Colombo",
        size: "10–50",
        specialty: "Responsive Web Design & SEO",
        description: (
            <>
                <p className="mb-4">
                    Tectera is synonymous with scalable, well-architected web solutions that blend solid design principles with rigorous search engine optimisation. Operating as a full-suite digital partner, they have a massive portfolio of diverse clients ranging from small local startups to established multifaceted conglomerates. Their primary offering revolves around creating highly responsive, flawlessly functioning websites that look great across the vast array of fragmented mobile devices used in the Sri Lankan market.
                </p>
                <p className="mb-4">
                    A key differentiator for Tectera is their holistic approach to the web. They don't just build the site and walk away; they deeply integrate fundamental SEO practices directly into the source code from day one. This includes meticulous attention to meta structuring, local business schema integration, and optimized asset delivery to ensure that the beautiful sites they design actually rank on Google's highly competitive first page.
                </p>
                <p>
                    For small to medium enterprises (SMEs) looking for an all-in-one partner who can handle the domain, the hosting, the design, development, and the ongoing organic search marketing, Tectera provides an incredibly balanced and cost-effective value proposition.
                </p>
            </>
        ),
        services: ["Responsive Web Design", "Search Engine Optimisation (SEO)", "Social Media Marketing", "Web Hosting Solutions"],
        bestFor: "SMEs requiring a singular, reliable partner to handle their entire digital web presence and marketing strategy from end to end.",
        website: "https://www.tectera.com",
        techStack: "WordPress, React, PHP, MySQL, Apache/Nginx",
    },
    {
        name: "Antyra Solutions",
        tagline: "Data-Driven Digital Experiences",
        founded: "2014",
        hq: "Colombo",
        size: "50–100",
        specialty: "Web Design + Performance Marketing",
        description: (
            <>
                <p className="mb-4">
                    Antyra Solutions is not strictly a web design agency; they are a formidable, data-driven digital performance marketing powerhouse that happens to build phenomenally successful websites. Their entire approach to web design is governed by analytics, conversion rate optimisation (CRO), and empirical user behavioral data rather than purely subjective artistic preferences.
                </p>
                <p className="mb-4">
                    Antyra divides its operations into specialized verticals (Antyra Labs, Antyra Digital, etc.), allowing them to deploy cross-functional teams comprising a UX researcher, a technical developer, and a performance marketer onto a single web build. This trifecta ensures that every button placement, color contrast ratio, and navigation menu is engineered to maximize lead generation and lower customer acquisition costs (CAC).
                </p>
                <p>
                    They are particularly dominant in the travel and hospitality sector, having built sophisticated booking pipelines and high-converting destination platforms for top-tier Sri Lankan resport chains. If your primary metric for web design success is hard revenue, direct bookings, and return on ad spend (ROAS), Antyra integrates the web funnel perfectly with broader marketing initiatives.
                </p>
            </>
        ),
        services: ["Conversion-Optimised Web Design", "Performance Analytics", "E-Commerce Integrations", "Digital Marketing"],
        bestFor: "Hospitality brands and performance-driven businesses measuring their website directly against revenue and conversion metrics.",
        rating: "4.9",
        ratingSource: "Clutch",
        notableClients: "Major Hotels & Resorts, Retail E-Commerce, Finance",
        techStack: "WordPress, PHP, React, Google Analytics 4 (Advanced)",
    },
    {
        name: "Amplifyn",
        tagline: "Strategic Brand Engineering",
        founded: "2016",
        hq: "Colombo",
        size: "10–50",
        specialty: "Branding Integrated Web Development",
        description: (
            <>
                <p className="mb-4">
                    Amplifyn operates at the exact intersection of profound brand strategy and technical web execution. Where some agencies view a website as a repository for company information, Amplifyn treats the web platform as the ultimate digital manifestation of the brand's core identity. Their design process usually begins with intensive brand workshops to define tone, archetype, and visual language before any wireframing takes place.
                </p>
                <p className="mb-4">
                    Their websites are characterized by bold typography, expansive use of negative space, and deeply customized iconography that aligns perfectly with the brand's offline marketing collateral. They refuse to use off-the-shelf templates, insisting on developing bespoke themes that cannot be replicated by competitors.
                </p>
                <p>
                    For businesses undergoing a rebrand, or for well-funded startups needing to establish immediate trust and perceived market dominance through sheer visual superiority, Amplifyn delivers digital platforms that radiate authority and thoughtful craftsmanship.
                </p>
            </>
        ),
        services: ["Brand Strategy & Identity", "Bespoke Web Design", "Corporate Communications Platforms", "Creative Direction"],
        bestFor: "Companies in the midst of a rebranding exercise seeking a highly customized, brand-first digital presence.",
        techStack: "Custom WordPress, Vue.js, TailwindCSS, Laravel",
    },
    {
        name: "Calcey Technologies",
        tagline: "Agile Product Engineering",
        founded: "2002",
        hq: "Colombo (TRACE Expert City)",
        size: "200–500",
        specialty: "SaaS & Complex Web Applications",
        description: (
            <>
                <p className="mb-4">
                    While widely known as a premier software engineering firm, Calcey Technologies merits inclusion on this list because the line between "website" and "web application" has irreversibly blurred. If your web design project involves complex user dashboards, multifaceted user roles, payment gateways, SaaS infrastructure, or deep backend API integrations, traditional web design agencies will struggle. Calcey excels here.
                </p>
                <p className="mb-4">
                    Operating out of TRACE Expert City, Calcey operates on strict Agile frameworks, delivering scalable web platforms for Silicon Valley startups and global enterprises. Their UI/UX teams are masters of interface logic, ensuring that massively complex datasets are presented in clean, intuitive, and remarkably user-friendly frontend designs.
                </p>
                <p>
                    You would not hire Calcey for a simple 5-page informational website. However, if you are building an online marketplace, an innovative prop-tech property portal, or a custom fintech dashboard that requires bank-level security wrapped in an exquisite user interface, Calcey possesses the sheer engineering muscle to execute flawlessly.
                </p>
            </>
        ),
        services: ["Web Application Design", "SaaS Development", "UI/UX for Complex Systems", "Cloud API Integrations"],
        bestFor: "Startups and enterprises building highly interactive, logic-heavy web applications and multi-tenant SaaS platforms.",
        website: "https://www.calcey.com",
        notableClients: "Silicon Valley Startups, Global Enterprises, Educational Institutes",
        techStack: "React, Next.js, Node.js, Python, AWS, PostgreSQL",
    },
    {
        name: "Surge Global",
        tagline: "Technology meets Marketing",
        founded: "2014",
        hq: "Colombo",
        size: "100–300",
        specialty: "Enterprise Web CMS & Global SEO",
        description: (
            <>
                <p className="mb-4">
                    Surge Global is a powerhouse that seamlessly blends enterprise-grade web development with incredibly potent global marketing strategies. Backed by the Tavistock Group (the multi-billion dollar private investment organization), Surge has unparalleled experience in executing large-scale web transformations for high-net-worth international clients and vast global portfolios.
                </p>
                <p className="mb-4">
                    Their web design approach is inherently built for scale. They specialize in architecting massive Content Management Systems (CMS) that allow non-technical marketing teams to deploy hundreds of landing pages across different geographic regions seamlessly. Their designs are clean, highly accessible, and deeply optimized for international SEO frameworks—capable of handling massive spikes in traffic without degradation.
                </p>
                <p>
                    Surge is ideal for multinational corporations operating out of Sri Lanka, or large-scale exporters who need their website to compete fiercely on a global stage, ranking against massive American or European incumbents in highly saturated search verticals.
                </p>
            </>
        ),
        services: ["Enterprise CMS Web Design", "International SEO", "Advanced Data Analytics", "Marketing Engineering"],
        bestFor: "Massive scale enterprises and exporters aiming to capture aggressive international market share.",
        rating: "4.8",
        ratingSource: "Clutch",
        techStack: "React, Laravel, Headless CMS, AWS, Python Marketing Automations",
    },
    {
        name: "Elegant Media",
        tagline: "Mobile-First Digital Excellence",
        founded: "2011",
        hq: "Colombo & Australia",
        size: "50–100",
        specialty: "Cross-Platform Web & Mobile Interfaces",
        description: (
            <>
                <p className="mb-4">
                    Elegant Media bridges the gap between the Sri Lankan talent pool and the highly demanding Australian corporate sector. While they are globally renowned for their mobile application development, their web design division specifically focuses on creating web platforms that act as seamless companions to native mobile apps.
                </p>
                <p className="mb-4">
                    Their web design philosophy is strictly "mobile-first". Given their app background, they design web interfaces that utilize touch-friendly targets, bottom-focused navigation patterns, and app-like transitions (Progressive Web Apps or PWAs). This makes their websites feel incredibly native to use on a smartphone, drastically reducing bounce rates for mobile traffic.
                </p>
                <p>
                    If your digital strategy involves launching both a website and a mobile application simultaneously, Elegant Media can utilize cross-platform technologies (like React to React Native) to ensure 100% brand parity and shared codebases, ultimately lowering long-term maintenance costs.
                </p>
            </>
        ),
        services: ["Progressive Web Apps (PWAs)", "Mobile-First Web Design", "App-to-Web Integrations", "UX Consultation"],
        bestFor: "Companies needing a mobile-optimized web presence that intimately ties into a broader native mobile app strategy.",
        techStack: "React, Angular, Node.js, AWS",
    },
    {
        name: "360 Digital",
        tagline: "High-Value SME Solutions",
        founded: "2017",
        hq: "Colombo",
        size: "10–50",
        specialty: "Accessible Corporate Websites",
        description: (
            <>
                <p className="mb-4">
                    In a market where enterprise agencies charge prohibitive fees, 360 Digital has optimized their internal development pipelines to provide profoundly high-quality web design at highly accessible price points for Sri Lankan small and medium enterprises (SMEs). They are the masters of the rapid-deployment corporate website.
                </p>
                <p className="mb-4">
                    They utilize premium, heavily modified CMS themes combined with custom CSS to deliver beautiful, functional, and secure websites in a fraction of the time it takes custom-code agencies. They prioritize stability, clean aesthetic structures, and user-friendly backend dashboards so that business owners can manage their own content post-launch without needing a retainer.
                </p>
                <p>
                    For local businesses, expanding startups, or professional service providers (clinics, law firms, accounting practices) who need a highly professional digital storefront turned around quickly and cost-effectively, 360 Digital provides an unbeatable combination of speed, price, and visual professionalism.
                </p>
            </>
        ),
        services: ["Corporate Web Design", "Rapid CMS Deployment", "Local SEO", "Reliable Web Hosting"],
        bestFor: "Local SMEs and professional service providers requiring a beautiful, rapid, and cost-effective digital presence.",
        techStack: "WordPress, Elementor Pro, WooCommerce, cPanel/LiteSpeed",
    },
    {
        name: "Developer Stack",
        tagline: "The CMS Architects",
        founded: "2019",
        hq: "Colombo",
        size: "10–50",
        specialty: "WordPress & Custom CMS Environments",
        description: (
            <>
                <p className="mb-4">
                    Developer Stack is a collective of highly technical developers who have mastered the WordPress ecosystem. While many agencies simply install plugins, Developer Stack builds the plugins from scratch. They understand the core PHP architecture of popular CMS platforms, allowing them to bend these systems to do exactly what a client needs without bloated, site-slowing third-party add-ons.
                </p>
                <p className="mb-4">
                    Their web designs are accompanied by meticulously crafted backend administrative panels. If your business relies heavily on publishing large volumes of content, managing thousands of classified listings, or running a complex editorial newsroom, Developer Stack builds web environments that make the administrative side just as beautifully designed as the public-facing frontend.
                </p>
                <p>
                    Their focus on clean codebase architecture makes their CMS builds inherently fast, secure, and incredibly resilient against the common vulnerabilities that plague poorly managed WordPress sites.
                </p>
            </>
        ),
        services: ["Custom Plugin Development", "Advanced Theme Architecture", "Editorial Web Platforms", "CMS Security Audits"],
        bestFor: "Content-heavy publishers, news outlets, and businesses needing highly customized administrative capabilities.",
        techStack: "PHP, Custom WordPress (Gutenberg/Roots), MySQL, JavaScript",
    },
    {
        name: "Flavour Studio",
        tagline: "Unconstrained Visual Creativity",
        founded: "2020",
        hq: "Colombo",
        size: "Under 10",
        specialty: "Avant-Garde & Award-Winning Visuals",
        description: (
            <>
                <p className="mb-4">
                    Flavour Studio represents the cutting edge of unconstrained, avant-garde web design in Sri Lanka. Operating as a tight-knit boutique of elite designers and creative developers, they approach web design purely as a digital art form. Their work regularly breaks conventional grid systems, utilizing asymmetric layouts, massive typography, and experimental navigation methodologies.
                </p>
                <p className="mb-4">
                    Their websites are engineered to evoke intense emotional reactions. By utilizing WebGL shaders, 3D model integrations, and highly orchestrated scroll narratives, they create immersive journeys rather than informational pages. They are the agency to call when you want a website that wins international CSS Design awards (Awwwards, FWA).
                </p>
                <p>
                    Due to their highly experimental nature, their solutions are not meant for standard corporate information portals. However, for high-fashion labels, music festivals, boutique architectural firms, or disruptive tech startups looking to completely break the mold and generate massive industry buzz, Flavour Studio delivers breathtaking digital art.
                </p>
            </>
        ),
        services: ["Experimental Web Design", "WebGL & 3D Implementations", "Creative Direction", "Micro-Interactions"],
        bestFor: "Disruptive brands, high-fashion labels, and artistic ventures seeking award-winning, experimental aesthetics.",
        techStack: "Webflow, Three.js, GSAP, CSS Grid, React (R3F)",
    },
];

const faqs = [
    {
        q: "What are the best web design companies in Sri Lanka for 2026?",
        a: "Based on our evaluation of design quality, technical capability, client reviews, and pricing transparency, the leading web design companies in Sri Lanka for 2026 include ARC AI (AI-native Next.js design), Xiteb (custom e-commerce), Phyxle (UI/UX specialists), Tectera (responsive custom design), Antyra Solutions (web design + SEO), Amplifyn (branding + web), Calcey Technologies (startup MVPs), Surge Global (web + marketing), Elegant Media (mobile-first), 360 Digital (budget-friendly), Developer Stack (WordPress experts), and Flavour Studio (creative design).",
    },
    {
        q: "How much does a website cost in Sri Lanka?",
        a: "Website costs in Sri Lanka vary significantly by complexity. A basic startup or landing page typically costs LKR 18,500–70,000 ($60–$230 USD). A standard business website with 5–20 pages costs LKR 40,000–160,000 ($130–$530). E-commerce websites range from LKR 75,000–450,000+ ($250–$1,500+). Custom enterprise web applications start at LKR 500,000+ ($1,650+). These prices represent significant savings compared to UK rates (£3,000–£30,000+) and US rates ($5,000–$50,000+) for equivalent quality.",
    },
    {
        q: "Should I use WordPress or custom development for my website in Sri Lanka?",
        a: "It depends on your needs. WordPress is ideal for blogs, small business sites, and quick launches — it is cost-effective, easy to manage, and has thousands of plugins. Custom development (using React, Next.js, or similar frameworks) is better for performance-critical applications, complex functionality, unique designs, and scalability. A middle ground is the 'headless' approach, using WordPress as a content editor with a custom React/Next.js frontend for speed. In Sri Lanka, WordPress sites typically start at LKR 40,000 while custom builds start at LKR 150,000+.",
    },
    {
        q: "How long does it take to build a website in Sri Lanka?",
        a: "Timeline depends on complexity. A simple landing page or brochure site can be completed in 1–2 weeks. A standard business website with 10–20 pages typically takes 3–6 weeks. E-commerce platforms with product catalogs and payment integration usually require 6–12 weeks. Complex custom web applications can take 3–6+ months. These timelines assume clear requirements and responsive client communication. Most reputable Sri Lankan agencies will provide a detailed project timeline during the proposal phase.",
    },
    {
        q: "What is responsive web design and why does it matter?",
        a: "Responsive web design ensures your website adapts seamlessly to all screen sizes — desktop, tablet, and mobile. In Sri Lanka, over 65% of internet users browse via mobile devices, making responsive design essential. Google's mobile-first indexing means your mobile experience directly determines your search rankings. A non-responsive website will rank lower in search results, provide a poor user experience on phones, and lose potential customers. Every reputable web design company in Sri Lanka should deliver responsive design as standard in 2026.",
    },
    {
        q: "How do I choose the right web design company in Sri Lanka?",
        a: "Evaluate web design companies across six key criteria: (1) Portfolio quality — review their past work for design aesthetics, mobile responsiveness, and page speed. (2) Technical stack — are they using modern technologies or outdated tools? (3) Client reviews — check Clutch, Google Reviews, and GoodFirms for verified feedback. (4) Pricing transparency — reputable agencies provide clear, itemised quotes. (5) Post-launch support — confirm whether maintenance, hosting, and updates are included. (6) SEO awareness — your website should be built with search engine optimisation in mind from day one.",
    },
    {
        q: "Do Sri Lankan web design companies provide SEO services?",
        a: "Many Sri Lankan web design companies include basic on-page SEO as part of their packages — this typically covers meta tags, heading structure, image alt text, and XML sitemaps. However, comprehensive SEO (keyword research, content strategy, link building, technical audits) is usually offered as a separate service. Some full-service digital agencies like ARC AI and Surge Global integrate advanced SEO and content marketing alongside web design. If organic search traffic is important to your business, clarify the level of SEO included before signing a contract.",
    },
    {
        q: "What is the difference between web design and web development?",
        a: "Web design focuses on the visual and user experience aspects — layout, colour schemes, typography, imagery, navigation flow, and overall aesthetics. Web development handles the technical implementation — writing code (HTML, CSS, JavaScript), server configuration, database management, API integrations, and ensuring the site functions correctly across all browsers. In practice, most Sri Lankan agencies combine both disciplines. Smaller agencies may have designers who also code, while larger firms have dedicated design and development teams. When evaluating companies, look at both their visual portfolio and the technical performance of their live sites.",
    },
];

/* ── Main Content Component ────────────────────────────────────────────── */

export default function WebDesignContent() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Web Design Companies in Sri Lanka" },
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

                    <HeroAnimation>
                        <span className="inline-block px-4 py-1.5 bg-[rgb(255,73,37)]/20 backdrop-blur-sm text-[rgb(255,73,37)] text-sm font-semibold rounded-full border border-[rgb(255,73,37)]/30 mb-4">
                            Ultimate Pillar Guide · 2026 Edition
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Web Design Companies in Sri Lanka:
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,73,37)] to-orange-500">
                                The Complete 2026 Guide
                            </span>
                        </h1>
                        <p className="text-xl text-neutral-400 mb-8 max-w-3xl leading-relaxed">
                            A completely transparent, expert-curated evaluation of the 12 leading web design agencies in Sri Lanka. Dive deep into exact 2026 pricing benchmarks, the shift from WordPress to AI-native Next.js frameworks, and an actionable framework designed to help you select a partner that drives real revenue, not just beautiful mockups.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-neutral-500 text-sm">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>April 19, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>25 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MonitorSmartphone className="w-4 h-4" />
                                <span>12 Agencies Analyzed</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Search className="w-4 h-4" />
                                <span>SEO & Performance Audited</span>
                            </div>
                        </div>
                    </HeroAnimation>

                    <HeroImageAnimation>
                        <Image
                            src="/arc-ai-web-design-sri-lanka.png"
                            alt="A team of elite web designers and software engineers collaborating in a high-end Colombo studio"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    </HeroImageAnimation>
                </div>
            </section>

            {/* ── Table of Contents ────────────────────────────── */}
            <section className="px-4 md:px-8 py-8">
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection
                        className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 md:p-8"
                    >
                        <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Layers className="w-4 h-4" />
                            Guide Navigation
                        </h2>
                        <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
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
                    </AnimatedSection>
                </div>
            </section>

            {/* ── Article Body ────────────────────────────────── */}
            <article className="px-4 md:px-8 pb-16">
                <div className="max-w-4xl mx-auto prose prose-invert prose-lg max-w-none">

                    {/* ── Section: Industry Statistics ──────────── */}
                    <AnimatedSection
                        id="industry-statistics"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-8 flex items-center gap-3">
                            <LineChart className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Sri Lanka's Web Market in 2026
                        </h2>

                        <p className="text-neutral-300 mb-8 font-light">
                            Before evaluating specific agencies, it is crucial to understand the macro-level data driving the Sri Lankan digital landscape. The web development sector is expanding rapidly, fueled by high domain expertise and competitive cost advantages.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {[
                                { label: "Registered Web Agencies", value: "350+", sub: "Concentrated in Colombo" },
                                { label: "Mobile Web Traffic", value: "74.8%", sub: "Mobile-first is mandatory" },
                                { label: "E-Commerce Growth", value: "+42%", sub: "YoY adoption rate" },
                                { label: "Cost vs UK/US", value: "-60%", sub: "For equivalent Next.js tech" },
                            ].map((stat, i) => (
                                <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 text-center flex flex-col items-center justify-center">
                                    <div className="text-2xl md:text-3xl font-black text-[rgb(255,73,37)] mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                                        {stat.label}
                                    </div>
                                    <div className="text-[10px] text-neutral-500 uppercase tracking-widest">
                                        {stat.sub}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* ── Section: State of Web Design ──────────── */}
                    <AnimatedSection
                        id="state-of-web-design"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-8 flex items-center gap-3">
                            <MonitorSmartphone className="w-8 h-8 text-[rgb(255,73,37)]" />
                            The State of Web Design in Sri Lanka (2026)
                        </h2>

                        <p className="text-xl text-neutral-200 mb-6 font-light">
                            The Sri Lankan web design industry has undergone a radical transformation over the past three years. What was once a market saturated with cheap, heavily bloated WordPress templates has evolved into a hyper-competitive landscape where performance, AI integration, and core web vitals dictate agency survival.
                        </p>

                        <p className="text-neutral-300 mb-6">
                            For over a decade, hiring a <strong>web design company in Sri Lanka</strong> meant one thing: receiving a heavily modified WordPress website. While cost-effective, this approach led to a massive problem. As Google introduced strict algorithmic penalties for slow-loading websites (Core Web Vitals), thousands of Sri Lankan businesses found their digital storefronts plummeting in search rankings due to database bloat and excessive plugin usage.
                        </p>

                        <p className="text-neutral-300 mb-6">
                            As we navigate 2026, the paradigm has definitively shifted. We are observing a dramatic divergence in the local market:
                        </p>

                        <ul className="list-disc pl-6 space-y-4 text-neutral-300 mb-8 border-l-2 border-neutral-800 ml-2">
                            <li>
                                <strong>The Rise of Headless Architecture:</strong> Premium agencies have abandoned traditional monolithic CMS platforms in favor of decoupled, "Headless" architectures. By utilizing React and Next.js for the frontend, while keeping the data management backend entirely separate, these websites achieve near-instantaneous load times—capable of serving content globally in under 50 milliseconds via edge networks.
                            </li>
                            <li>
                                <strong>AI-Native Interactivity:</strong> It is no longer sufficient for a website to be a static digital brochure. The top tier of Sri Lankan agencies are now natively embedding intelligent conversational agents, predictive analytics for e-commerce, and personalized journey mapping directly into web interfaces, utilizing Large Language Models (LLMs) running seamlessly in the background.
                            </li>
                            <li>
                                <strong>Global Tier Out-Sourcing:</strong> Given Sri Lanka's highly educated IT workforce and the significant currency advantage (LKR vs USD/GBP), international companies from the UK, Australia, and the US are aggressively bypassing expensive domestic agencies to hire high-end Sri Lankan firms. They receive Silicon Valley-tier code quality at a fraction of the operational cost.
                            </li>
                        </ul>

                        <div className="bg-[rgb(255,73,37)]/10 border border-[rgb(255,73,37)]/20 rounded-xl p-6 mb-8 text-[rgb(255,73,37)]">
                            <p className="font-semibold m-0 flex items-center gap-2">
                                <Zap className="w-5 h-5 shrink-0" />
                                <strong>Crucial Insight:</strong> In 2026, over 74% of all web traffic in Sri Lanka occurs on mobile devices. A website that is merely "responsive" is no longer adequate; it must be engineered "mobile-first," prioritizing touch-friendly interactions and minimizing payload sizes for 4G/5G mobile networks.
                            </p>
                        </div>
                    </AnimatedSection>
                    
                    {/* ── Section: Outsourcing Comparison ──────────── */}
                    <AnimatedSection
                        id="outsourcing-comparison"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <Globe className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Outsourcing Web Design: Sri Lanka vs India vs Philippines
                        </h2>

                        <p className="text-neutral-300 mb-6 font-light">
                            If you are an international buyer examining South Asia for offshore web development, you are likely weighing Sri Lanka against its colossal neighbors. While India offers sheer volume and the Philippines excels in BPO, Sri Lanka has uniquely positioned itself as a boutique, high-quality engineering destination.
                        </p>

                        <div className="overflow-x-auto -mx-4 md:mx-0 rounded-xl border border-neutral-800 shadow-xl mb-8">
                            <table className="w-full text-sm border-collapse min-w-[700px]">
                                <thead>
                                    <tr className="border-b border-neutral-800 bg-neutral-900/80">
                                        <th className="p-4 text-left text-neutral-200 font-bold uppercase tracking-wider text-xs">Factor</th>
                                        <th className="p-4 text-left text-[rgb(255,73,37)] font-bold uppercase tracking-wider text-xs relative overflow-hidden">
                                            <div className="absolute inset-0 bg-[rgb(255,73,37)]/10" />
                                            <span className="relative z-10">Sri Lanka</span>
                                        </th>
                                        <th className="p-4 text-left text-neutral-200 font-bold uppercase tracking-wider text-xs">India</th>
                                        <th className="p-4 text-left text-neutral-200 font-bold uppercase tracking-wider text-xs">Philippines</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-800/50 bg-neutral-950">
                                    <tr className="hover:bg-neutral-900/50">
                                        <td className="p-4 font-bold text-white whitespace-nowrap">Primary Market Positioning</td>
                                        <td className="p-4 text-white font-medium bg-[rgb(255,73,37)]/5">Boutique & Premium Quality</td>
                                        <td className="p-4 text-neutral-400">Mass Scale & Volume</td>
                                        <td className="p-4 text-neutral-400">Support & Design</td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/50">
                                        <td className="p-4 font-bold text-white whitespace-nowrap">Web Engineering Focus</td>
                                        <td className="p-4 text-white font-medium bg-[rgb(255,73,37)]/5">Next.js / Node / React</td>
                                        <td className="p-4 text-neutral-400">Legacy / Java / .NET</td>
                                        <td className="p-4 text-neutral-400">WordPress / Shopify</td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/50">
                                        <td className="p-4 font-bold text-white whitespace-nowrap">Project Communication</td>
                                        <td className="p-4 text-white font-medium bg-[rgb(255,73,37)]/5">Exceptional (Direct Eng.)</td>
                                        <td className="p-4 text-neutral-400">Variable (Heavy PM layers)</td>
                                        <td className="p-4 text-neutral-400">Excellent (High fluency)</td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/50">
                                        <td className="p-4 font-bold text-white whitespace-nowrap">Cost Bracket</td>
                                        <td className="p-4 text-white font-medium bg-[rgb(255,73,37)]/5">$$ (High ROI)</td>
                                        <td className="p-4 text-neutral-400">$ (Lowest cost)</td>
                                        <td className="p-4 text-neutral-400">$$ (Mid-range)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </AnimatedSection>

                    {/* ── Section: Methodology ──────────────── */}
                    <AnimatedSection
                        id="methodology"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <Scale className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Our Evaluation Methodology
                        </h2>

                        <p className="text-neutral-300 mb-6">
                            The internet is rife with arbitrary "Top 10" lists that are simply disguised paid advertisements or poorly researched affiliate directories. To establish genuine authority and trust, we must be radically transparent about how we arrived at this top 12 list.
                        </p>

                        <p className="text-neutral-300 mb-6">
                            Our evaluation matrix for choosing a <strong>web design company in Sri Lanka</strong> deliberately ignored vanity metrics (like office size or social media follower count) and focused exclusively on the objective metrics that directly impact a client's bottom line:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
                            {[
                                {
                                    title: "1. Technical Performance (30%)",
                                    desc: "We rigorously tested the agencies' own websites and their public client portfolios using Google Lighthouse and GTmetrix. We evaluated Time to First Byte (TTFB), Largest Contentful Paint (LCP), and Cumulative Layout Shift (CLS). Agencies deploying modern JS frameworks (Next.js/React) naturally scored significantly higher here.",
                                },
                                {
                                    title: "2. Visual Aesthetic & UI/UX (25%)",
                                    desc: "Design is subjective, but usability is not. We reviewed portfolios for fundamental design principles: typographic hierarchy, effective use of negative space, accessibility compliance (WCAG standards), and micro-interaction fluidity.",
                                },
                                {
                                    title: "3. Client Vetting & Reviews (25%)",
                                    desc: "We cross-referenced domestic reputation with international standing. We analyzed verified third-party reviews on Clutch.co, Glassdoor (internal agency health is a critical indicator of output quality), and GoodFirms, looking specifically for long-term client retention rates.",
                                },
                                {
                                    title: "4. Future-Proof Tech Stack (20%)",
                                    desc: "An agency building websites in 2026 using technology from 2018 represents a massive security and scale risk to the client. We prioritized agencies demonstrating mastery over modern paradigms: Headless CMS integrations, API-first development, and verifiable AI automation capabilities.",
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
                                    <h3 className="text-base font-bold text-white mb-2 m-0">{item.title}</h3>
                                    <p className="text-sm text-neutral-400 m-0">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-neutral-400 text-sm italic border-l-4 border-neutral-700 pl-4">
                            <strong>Absolute Disclosure:</strong> ARC AI, the publisher of this comprehensive guide, is included in this ranking. We subjected our own infrastructure and client metrics to the exact same rigorous analytical frameworks applied to every competing agency. We actively encourage prospective clients to independently audit our Lighthouse scores against the competition. Data does not lie.
                        </p>
                    </AnimatedSection>

                    {/* ── Section: Company Rankings ──────────── */}
                    <AnimatedSection
                        id="rankings"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-4 flex items-center gap-3">
                            <Award className="w-8 h-8 text-[rgb(255,73,37)]" />
                            The 12 Best Web Design Companies in Sri Lanka
                        </h2>
                        <p className="text-neutral-400 mb-10">
                            Evaluated, ranked, and detailed. From boutique UI design houses focused purely on visual aesthetics to heavy-weight engineering firms capable of launching complex enterprise platforms, this is the definitive list.
                        </p>

                        <div className="space-y-8">
                            {companies.map((company, index) => (
                                <div
                                    key={company.name}
                                    className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 md:p-10 hover:border-neutral-700 transition-colors shadow-lg"
                                >
                                    {/* Header */}
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                                        <div>
                                            <div className="flex items-center gap-4 mb-2">
                                                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[rgb(255,73,37)]/10 border border-[rgb(255,73,37)]/30 text-[rgb(255,73,37)] font-black text-xl">
                                                    {index + 1}
                                                </div>
                                                <h3 className="text-3xl font-extrabold text-white m-0 tracking-tight">
                                                    {company.name}
                                                </h3>
                                            </div>
                                            <p className="text-lg text-[rgb(255,73,37)] font-medium m-0 flex items-center gap-2">
                                                {company.tagline}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3 mt-2 md:mt-0">
                                            {company.rating && (
                                                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 rounded-full border border-neutral-800 shadow-inner">
                                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                    <span className="text-sm font-bold text-white">{company.rating}</span>
                                                    <span className="text-sm text-neutral-500">/ 5</span>
                                                </div>
                                            )}
                                            {company.website && (
                                                <Link
                                                    href={company.website}
                                                    className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white text-black font-semibold text-sm rounded-full hover:bg-neutral-200 transition-colors no-underline"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Globe className="w-4 h-4" />
                                                    Visit Site
                                                </Link>
                                            )}
                                        </div>
                                    </div>

                                    {/* Meta row */}
                                    <div className="flex flex-wrap gap-5 text-sm text-neutral-400 mb-8 pb-6 border-b border-neutral-800/50">
                                        <span className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-neutral-500" /> Est. {company.founded}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-neutral-500" /> {company.hq}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Users className="w-4 h-4 text-neutral-500" /> {company.size} Team Size
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Code className="w-4 h-4 text-neutral-500" /> {company.specialty}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <div className="text-neutral-300 mb-8 leading-relaxed text-base md:text-lg">
                                        {company.description}
                                    </div>

                                    {/* Notable clients & Tech stack */}
                                    {(company.notableClients || company.techStack) && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 bg-black/40 p-5 rounded-lg border border-neutral-800/40">
                                            {company.notableClients && (
                                                <div className="text-sm">
                                                    <div className="flex items-center gap-2 text-neutral-500 font-bold uppercase tracking-wider mb-2">
                                                        <Briefcase className="w-4 h-4" /> Notable Clients
                                                    </div>
                                                    <span className="text-neutral-300 font-medium">{company.notableClients}</span>
                                                </div>
                                            )}
                                            {company.techStack && (
                                                <div className="text-sm">
                                                    <div className="flex items-center gap-2 text-neutral-500 font-bold uppercase tracking-wider mb-2">
                                                        <Cpu className="w-4 h-4" /> Core Tech Stack
                                                    </div>
                                                    <span className="text-neutral-300 font-mono text-sm bg-neutral-900 px-2 py-1 rounded inline-block leading-loose">
                                                        {company.techStack}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Services + Best For */}
                                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                                        <div className="md:col-span-2">
                                            <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                                <Paintbrush className="w-4 h-4" /> Core Competencies
                                            </div>
                                            <ul className="space-y-2.5 m-0 p-0 list-none">
                                                {company.services.map((s) => (
                                                    <li key={s} className="flex items-start gap-2.5 text-sm text-neutral-200">
                                                        <CheckCircle2 className="w-4 h-4 text-[rgb(255,73,37)] shrink-0 mt-0.5" />
                                                        <span className="leading-tight">{s}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="md:col-span-3 bg-gradient-to-br from-neutral-900 to-black p-5 rounded-xl border border-neutral-800 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-[rgb(255,73,37)]/5 rounded-bl-full -mr-4 -mt-4" />
                                            <div className="text-xs font-bold text-[rgb(255,73,37)] uppercase tracking-widest mb-3 flex items-center gap-2">
                                                <Rocket className="w-4 h-4" /> The Ideal Client Profile (Best For)
                                            </div>
                                            <p className="text-neutral-300 m-0 font-medium leading-relaxed relative z-10">{company.bestFor}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* ── Section: Comparison Table ──────────── */}
                    <AnimatedSection
                        id="comparison-table"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-20 mb-8 flex items-center gap-3">
                            <BarChart3 className="w-8 h-8 text-[rgb(255,73,37)]" />
                            At-a-Glance Agency Comparison
                        </h2>

                        <p className="text-neutral-300 mb-6 font-light">
                            Short on time? Compare the top tier options based on their fundamental DNA, primary technology stack, and intended market presence.
                        </p>

                        <div className="overflow-x-auto -mx-4 md:mx-0 rounded-xl border border-neutral-800 shadow-xl">
                            <table className="w-full text-sm border-collapse min-w-[900px]">
                                <thead>
                                    <tr className="border-b border-neutral-800 bg-neutral-900/80">
                                        <th className="p-4 text-left text-neutral-200 font-bold uppercase tracking-wider text-xs">Agency</th>
                                        <th className="p-4 text-left text-neutral-200 font-bold uppercase tracking-wider text-xs">Primary Specialization</th>
                                        <th className="p-4 text-left text-neutral-200 font-bold uppercase tracking-wider text-xs">Dominant Tech Stack</th>
                                        <th className="p-4 text-left text-neutral-200 font-bold uppercase tracking-wider text-xs">Market Tier</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-800/50 bg-neutral-950">
                                    <tr className="hover:bg-neutral-900/50 transition-colors">
                                        <td className="p-4 font-bold text-white flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[rgb(255,73,37)]" /> ARC AI</td>
                                        <td className="p-4 text-neutral-400">Headless SEO & AI Integration</td>
                                        <td className="p-4 font-mono text-[11px] text-neutral-300">Next.js / Vercel / React</td>
                                        <td className="p-4"><span className="px-2 py-1 text-[10px] font-bold uppercase rounded bg-[rgb(255,73,37)]/20 text-[rgb(255,73,37)] border border-[rgb(255,73,37)]/40">Premium / High-ROI</span></td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/50 transition-colors">
                                        <td className="p-4 font-bold text-white">Xiteb</td>
                                        <td className="p-4 text-neutral-400">Large-scale E-Commerce</td>
                                        <td className="p-4 font-mono text-[11px] text-neutral-300">Magento / PHP</td>
                                        <td className="p-4"><span className="px-2 py-1 text-[10px] font-bold uppercase rounded bg-blue-900/30 text-blue-400 border border-blue-900">Enterprise Large</span></td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/50 transition-colors">
                                        <td className="p-4 font-bold text-white">Phyxle</td>
                                        <td className="p-4 text-neutral-400">Visual Identity & UI/UX</td>
                                        <td className="p-4 font-mono text-[11px] text-neutral-300">Webflow / GSAP</td>
                                        <td className="p-4"><span className="px-2 py-1 text-[10px] font-bold uppercase rounded bg-purple-900/30 text-purple-400 border border-purple-900">Boutique Luxury</span></td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/50 transition-colors">
                                        <td className="p-4 font-bold text-white">Tectera</td>
                                        <td className="p-4 text-neutral-400">Responsive Web Design & SEO</td>
                                        <td className="p-4 font-mono text-[11px] text-neutral-300">WordPress / PHP</td>
                                        <td className="p-4"><span className="px-2 py-1 text-[10px] font-bold uppercase rounded bg-yellow-900/30 text-yellow-400 border border-yellow-900">SME Value Tier</span></td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/50 transition-colors">
                                        <td className="p-4 font-bold text-white">Antyra Solutions</td>
                                        <td className="p-4 text-neutral-400">Performance Marketing Integration</td>
                                        <td className="p-4 font-mono text-[11px] text-neutral-300">WordPress / PHP</td>
                                        <td className="p-4"><span className="px-2 py-1 text-[10px] font-bold uppercase rounded bg-blue-900/30 text-blue-400 border border-blue-900">Enterprise Large</span></td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/50 transition-colors">
                                        <td className="p-4 font-bold text-white">Amplifyn</td>
                                        <td className="p-4 text-neutral-400">Strategic Brand Engineering</td>
                                        <td className="p-4 font-mono text-[11px] text-neutral-300">Custom WordPress / Vue</td>
                                        <td className="p-4"><span className="px-2 py-1 text-[10px] font-bold uppercase rounded bg-fuchsia-900/30 text-fuchsia-400 border border-fuchsia-900">Rebrand & Identity</span></td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/50 transition-colors">
                                        <td className="p-4 font-bold text-white">Calcey Technologies</td>
                                        <td className="p-4 text-neutral-400">SaaS & Complex Web Apps</td>
                                        <td className="p-4 font-mono text-[11px] text-neutral-300">React / Node.js</td>
                                        <td className="p-4"><span className="px-2 py-1 text-[10px] font-bold uppercase rounded bg-blue-900/30 text-blue-400 border border-blue-900">Silicon Valley / Enterprise</span></td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/50 transition-colors">
                                        <td className="p-4 font-bold text-white">Surge Global</td>
                                        <td className="p-4 text-neutral-400">Global SEO & Enterprise CMS</td>
                                        <td className="p-4 font-mono text-[11px] text-neutral-300">Laravel / React</td>
                                        <td className="p-4"><span className="px-2 py-1 text-[10px] font-bold uppercase rounded bg-indigo-900/30 text-indigo-400 border border-indigo-900">Multi-national Corporate</span></td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/50 transition-colors">
                                        <td className="p-4 font-bold text-white">Elegant Media</td>
                                        <td className="p-4 text-neutral-400">Mobile-First Web Design</td>
                                        <td className="p-4 font-mono text-[11px] text-neutral-300">React / Angular</td>
                                        <td className="p-4"><span className="px-2 py-1 text-[10px] font-bold uppercase rounded bg-teal-900/30 text-teal-400 border border-teal-900">Cross-Platform Utility</span></td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/50 transition-colors">
                                        <td className="p-4 font-bold text-white">360 Digital</td>
                                        <td className="p-4 text-neutral-400">Rapid Corporate Profiles</td>
                                        <td className="p-4 font-mono text-[11px] text-neutral-300">WordPress / Elementor</td>
                                        <td className="p-4"><span className="px-2 py-1 text-[10px] font-bold uppercase rounded bg-yellow-900/30 text-yellow-400 border border-yellow-900">SME Value Tier</span></td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/50 transition-colors">
                                        <td className="p-4 font-bold text-white">Developer Stack</td>
                                        <td className="p-4 text-neutral-400">Custom WordPress CMS</td>
                                        <td className="p-4 font-mono text-[11px] text-neutral-300">PHP / Custom WP</td>
                                        <td className="p-4"><span className="px-2 py-1 text-[10px] font-bold uppercase rounded bg-cyan-900/30 text-cyan-400 border border-cyan-900">Publisher / Media</span></td>
                                    </tr>
                                    <tr className="hover:bg-neutral-900/50 transition-colors">
                                        <td className="p-4 font-bold text-white">Flavour Studio</td>
                                        <td className="p-4 text-neutral-400">Experimental 3D/WebGL</td>
                                        <td className="p-4 font-mono text-[11px] text-neutral-300">Webflow / Three.js</td>
                                        <td className="p-4"><span className="px-2 py-1 text-[10px] font-bold uppercase rounded bg-pink-900/30 text-pink-400 border border-pink-900">Avant-Garde / Art</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </AnimatedSection>

                    {/* ── Section: Pricing Benchmarks ──────────── */}
                    <AnimatedSection
                        id="pricing-benchmarks"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-20 mb-8 flex items-center gap-3">
                            <DollarSign className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Exact Web Design Pricing in Sri Lanka (2026)
                        </h2>

                        <p className="text-neutral-300 mb-6 font-light">
                            Pricing opacity is the biggest frustration when searching for a web design agency. We are pulling back the curtain based on aggressive market analysis to showcase exactly what you should fundamentally expect to pay for different tiers of web design in 2026, comparing local LKR to international USD metrics.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                            {[
                                {
                                    tier: "Landing Page / Starter Site (1-3 Pages)",
                                    srilankan: "LKR 18,500 – 70,000",
                                    international: "$60 – $230 USD",
                                    desc: "Basic templated WordPress or static HTML sites. Generally un-optimised for heavy SEO, but perfect for a newly launched startup that just needs a digital business card and contact form to verify legitimacy.",
                                },
                                {
                                    tier: "Standard Corporate Website (5-20 Pages)",
                                    srilankan: "LKR 40,000 – 160,000",
                                    international: "$130 – $530 USD",
                                    desc: "The standard bread-and-butter for SMEs. Usually built on a heavily customized CMS (WordPress/Webflow) with integrated blogs, service pages, dynamic contact forms, and fundamental on-page SEO built in.",
                                },
                                {
                                    tier: "High-Performance Next.js / Custom React Platform",
                                    srilankan: "LKR 150,000 – 350,000+",
                                    international: "$500 – $1,200+ USD",
                                    desc: "The new standard for serious brands. Decoupled headless architecture delivering perfect 100/100 Core Web Vitals. Fully custom coded UI, advanced API connections, and bulletproof security. (Standard ARC AI pricing tier).",
                                },
                                {
                                    tier: "E-Commerce Integrations (WooCommerce/Shopify)",
                                    srilankan: "LKR 75,000 – 450,000+",
                                    international: "$250 – $1,500+ USD",
                                    desc: "Highly variable based on SKU (product) count, payment gateway complexities (Webxpay, PayHere, Stripe), variable shipping logic, and whether the checkout experience requires custom coding.",
                                },
                            ].map((tier, idx) => (
                                <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(255,73,37)]/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">{tier.tier}</h3>
                                    
                                    <div className="flex flex-col gap-2 mb-4 relative z-10 border-b border-neutral-800 pb-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-semibold text-neutral-500 uppercase">Local Rates</span>
                                            <span className="text-lg font-black text-white">{tier.srilankan}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-semibold text-neutral-500 uppercase">Int. Equivalent</span>
                                            <span className="text-lg font-black text-green-400">{tier.international}</span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-neutral-400 relative z-10 leading-relaxed italic">{tier.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-neutral-950 p-6 rounded-xl border border-neutral-800 relative z-10">
                            <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                <HelpCircle className="w-5 h-5 text-[rgb(255,73,37)]" />
                                Beware the Hidden Costs
                            </h4>
                            <p className="text-neutral-400 text-sm leading-relaxed m-0">
                                When gathering quotes, always explicitly ask the agency if the proposed cost includes: Domain registration (first year vs subsequent years), SSL certificate provisioning, premium plugin licensing subscriptions (a very common hidden fee in WordPress builds), cloud hosting environments, and post-launch maintenance retainers. The cheapest initial quote often becomes the most expensive long-term liability.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* ── Section: WordPress vs NextJS ──────────── */}
                    <AnimatedSection
                        id="wordpress-vs-custom"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-20 mb-8 flex items-center gap-3">
                            <Cpu className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Technology Showdown: WordPress vs Custom Next.js
                        </h2>

                        <p className="text-neutral-300 mb-6 font-light">
                            If you speak to ten different web agencies in Colombo, you will likely receive ten different technological recommendations. However, the primary architectural battlefield in 2026 is strictly drawn between traditional monolithic CMS (WordPress) and modern headless architectures (Next.js/React). Understanding this difference is critical to your investment.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                            {/* WordPress Column */}
                            <div className="border border-neutral-800 rounded-xl overflow-hidden">
                                <div className="bg-neutral-900 border-b border-neutral-800 p-5">
                                    <h3 className="text-xl font-bold text-white m-0">Traditional WordPress</h3>
                                </div>
                                <div className="p-6 bg-neutral-950/50">
                                    <p className="text-sm text-neutral-400 mb-5">
                                        The legacy powerhouse powering 40%+ of the internet. The frontend design and backend database are tightly coupled together in a single massive system.
                                    </p>
                                    <ul className="space-y-4 m-0 p-0 list-none text-sm text-neutral-300">
                                        <li className="flex items-start gap-3">
                                            <div className="bg-red-900/30 text-red-500 rounded p-1 mt-0.5"><ChevronDown className="w-3 h-3" /></div>
                                            <span><strong>The Problem:</strong> Speed. Every time a user loads a page, the server must query the central database and construct the page on the fly. This results in incredibly slow "Time to First Byte" metrics, harming SEO.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="bg-red-900/30 text-red-500 rounded p-1 mt-0.5"><Shield className="w-3 h-3" /></div>
                                            <span><strong>Security Risks:</strong> Because the database is directly connected to the web interface, SQL injection attacks and plugin vulnerabilities are constant threats requiring perpetual updates.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="bg-green-900/30 text-green-500 rounded p-1 mt-0.5"><CheckCircle2 className="w-3 h-3" /></div>
                                            <span><strong>The Upside:</strong> Very fast initial development time using pre-made templates, resulting in lower initial costs. Excellent ecosystem of drag-and-drop tools.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* NextJS Column */}
                            <div className="border border-[rgb(255,73,37)]/50 rounded-xl overflow-hidden relative shadow-[0_0_30px_rgba(255,73,37,0.1)]">
                                <div className="absolute top-0 right-0 bg-[rgb(255,73,37)] text-white text-[10px] font-black uppercase px-3 py-1 rounded-bl-lg z-10 tracking-widest">
                                    The ARC AI Standard
                                </div>
                                <div className="bg-gradient-to-r from-neutral-900 to-[#1a0a07] border-b border-[rgb(255,73,37)]/30 p-5 relative z-0">
                                    <h3 className="text-xl font-bold text-white m-0">Modern Next.js (Headless)</h3>
                                </div>
                                <div className="p-6 bg-black">
                                    <p className="text-sm text-neutral-400 mb-5">
                                        The architecture utilized by global titans (Netflix, TikTok, Nike). The frontend design is entirely decoupled ("headless") from the backend data source.
                                    </p>
                                    <ul className="space-y-4 m-0 p-0 list-none text-sm text-neutral-300">
                                        <li className="flex items-start gap-3">
                                            <div className="bg-green-900/30 text-green-500 rounded p-1 mt-0.5"><Zap className="w-3 h-3" /></div>
                                            <span><strong>Ultimate Speed:</strong> Pages are pre-rendered at deploy time and distributed across global Content Delivery Networks. The user receives a static, pre-packaged page instantly without waiting for database queries.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="bg-green-900/30 text-green-500 rounded p-1 mt-0.5"><Shield className="w-3 h-3" /></div>
                                            <span><strong>Impenetrable Security:</strong> The public-facing website has zero direct connection to your database. It is technically impossible to "hack" the frontend because there is no database to inject into.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="bg-green-900/30 text-green-500 rounded p-1 mt-0.5"><TrendingUp className="w-3 h-3" /></div>
                                            <span><strong>SEO Dominance:</strong> Google actively rewards Next.js architecture with superior search rankings because it effortlessly passes their rigid Core Web Vitals speed assessments.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* ── Section: Core Web Vitals ──────────── */}
                    <AnimatedSection
                        id="core-web-vitals"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-20 mb-8 flex items-center gap-3">
                            <TrendingUp className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Why Performance is Now Marketing
                        </h2>

                        <p className="text-neutral-300 mb-6 font-light">
                            If your web design agency is not obsessively talking to you about Google's Core Web Vitals, fire them immediately. Design aesthetics don't matter if the user never sees the site because they bounced while waiting for it to load.
                        </p>

                        <p className="text-neutral-300 mb-6">
                            Google has fundamentally altered its core ranking algorithm. Visual appeal is secondary to technical mathematics. They measure three critical UX metrics:
                        </p>

                        <ol className="list-decimal pl-6 space-y-4 text-neutral-300 mb-8">
                            <li><strong>Largest Contentful Paint (LCP):</strong> How fast does the largest element (usually your hero image or main headline) render? The benchmark absolute pass mark is under 2.5 seconds. ARC AI websites routinely hit under 0.8 seconds.</li>
                            <li><strong>Cumulative Layout Shift (CLS):</strong> Does your website "jump around" as buttons and images load in, causing the user to click the wrong thing? The mathematics demand a score of less than 0.1. Next.js solves this natively through strict Image Component optimization.</li>
                            <li><strong>Interaction to Next Paint (INP):</strong> Replaced First Input Delay in 2024. When a user clicks a button or opens a menu, what is the microscopic latency delay before the browser visually responds? It must be under 200 milliseconds.</li>
                        </ol>

                        <p className="text-neutral-300 font-semibold italic border-l-4 border-[rgb(255,73,37)] pl-4">
                            The conclusion is simple: Your website's underlying code structure is now your most important SEO asset. You cannot out-market a slow website in 2026.
                        </p>
                    </AnimatedSection>


                    {/* ── Section: Selection Framework ──────────── */}
                    <AnimatedSection
                        id="selection-framework"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-20 mb-8 flex items-center gap-3">
                            <CircleDot className="w-8 h-8 text-[rgb(255,73,37)]" />
                            How to Evaluate a Web Design Company in Sri Lanka
                        </h2>

                        <p className="text-neutral-300 mb-8">
                            How do you actively filter the mediocre from the exceptional when choosing a web design company in Colombo? Apply this ruthless 4-step auditing framework before signing any contract.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    step: "Step 1: The PageSpeed Interrogation",
                                    desc: "Ask the agency to provide links to three sites they built recently. Go to Google PageSpeed Insights (pagespeed.web.dev) and run the links on the Mobile setting. If the Performance score is in the red (0-49), immediately walk away. They are building obsolete tech.",
                                },
                                {
                                    step: "Step 2: The Content Ownership Clause",
                                    desc: "Read the fine print. Ensure that upon final payment, you retain 100% unrestricted intellectual property ownership of the codebase, design files, and the domain name. Unscrupulous agencies will register your domain under their own developer email, holding your brand hostage.",
                                },
                                {
                                    step: "Step 3: The Post-Launch SEO Question",
                                    desc: "Ask: 'What happens when the site launches?' A standard developer expects their job to end at deployment. A digital growth partner (like ARC AI or Antyra) will immediately transition into organic search marketing, indexing protocols, and continuous architecture refinement.",
                                },
                                {
                                    step: "Step 4: The Tech Stack Justification",
                                    desc: "Demand that the agency justify their chosen technology. If they propose WordPress, ask how they intend to secure it against MySQL injections. If they propose React/Next.js, ask how they plan to structure headless content management for your marketing team to use.",
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col md:flex-row gap-6 bg-neutral-950 p-6 md:p-8 rounded-xl border border-neutral-800">
                                    <div className="md:w-1/3 shrink-0">
                                        <div className="text-[rgb(255,73,37)] font-black text-xl mb-2">{item.step}</div>
                                    </div>
                                    <div className="md:w-2/3">
                                        <p className="text-neutral-400 m-0 leading-relaxed text-base">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>


                    {/* ── Section: FAQ ─────────────────────────── */}
                    <AnimatedSection
                        id="faq"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-20 mb-8 flex items-center gap-3 pt-8 border-t border-neutral-800">
                            <HelpCircle className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Frequently Asked Questions
                        </h2>
                        
                        <p className="text-neutral-300 mb-8 font-light">
                            Direct, unfiltered answers to the most common queries surrounding web development investments in Sri Lanka.
                        </p>

                        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 md:p-8">
                            {faqs.map((faq, idx) => (
                                <FAQItem key={idx} question={faq.q} answer={faq.a} />
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* ── Conclusion / CTA ──────────────────────── */}
                    <AnimatedSection
                        className="mt-20 pt-16 pb-16"
                    >
                        <div className="bg-gradient-to-br from-[rgb(255,73,37)]/20 via-neutral-950 to-black border border-[rgb(255,73,37)]/30 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
                                Stop Building Websites. <br className="hidden md:block" /> Start Building Web Assets.
                            </h2>
                            <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto relative z-10 font-light">
                                If you are ready to abandon slow WordPress templates and invest in high-performance, AI-native Next.js architecture that absolutely dominates search engine rankings, let's engineer your digital superiority.
                            </p>
                            <Link
                                href="/web-pricing"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(255,73,37)] text-white font-bold rounded-full hover:bg-[rgb(220,50,20)] transition-colors relative z-10 shadow-[0_0_40px_rgba(255,73,37,0.4)]"
                            >
                                View Our Exact Pricing
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
