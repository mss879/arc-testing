"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./ServicesSection.css";

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const services = [
  { 
    id: "workflow-automation", 
    number: "001", 
    title: "Workflow Automation Systems",
    description: "Automate repetitive tasks and streamline your business operations.",
    features: [
      "Lead capture to CRM",
      "Sales pipeline automations",
      "Client onboarding and offboarding",
      "Internal approvals and notifications",
      "Automated reporting summaries"
    ]
  },
  { 
    id: "content-automation", 
    number: "002", 
    title: "Content Automation Systems",
    description: "Scale your content creation and distribution effortlessly.",
    features: [
      "Long form to short form repurposing (YouTube to shorts, carousels, blog, email)",
      "Automated social media calendars and scheduling",
      "AI content generation workflows",
      "Creator, influencer and UGC content pipelines"
    ]
  },
  { 
    id: "ai-assistants", 
    number: "003", 
    title: "AI Assistants and Chatbots",
    description: "AI powered assistants that handle customer interactions and support.",
    features: [
      "Website chatbots for lead capture and FAQs",
      "Customer support assistants for common queries",
      "Internal knowledge assistants for teams",
      "Lead qualification chatbots",
      "WhatsApp agents for lead nurturing, support and follow up",
      "Instagram DM agents for auto replies, lead capture from comments, and DMs"
    ]
  },
  { 
    id: "consulting-audits", 
    number: "004", 
    title: "Consulting and Automation Audits",
    description: "Expert guidance to optimize and scale your automation strategy.",
    features: [
      "Automation audit of current tools and processes",
      "3 to 6 month automation roadmap",
      "Training for the client team on how to use the systems you build"
    ]
  },
  { 
    id: "landing-pages", 
    number: "005", 
    title: "Smart Websites",
    description: "Websites that do more than just look good. They work for you.",
    features: [
      "AI powered chat and lead capture that qualifies visitors 24/7",
      "Smart forms that send leads to the right person or system automatically",
      "Integrated booking, payments or enquiries to streamline your operations",
      "Connected to your CRM, WhatsApp, email and other tools so nothing is manual",
      "Built for speed, SEO and conversion so you get more leads from the same traffic"
    ]
  },
  { 
    id: "smart-ad-campaigns", 
    number: "006", 
    title: "Smart Ad Campaigns",
    description: "Paid ads that improve themselves over time instead of burning money.",
    features: [
      "AI assisted audience research and creative ideas",
      "Automated split testing of creatives, headlines and landing pages",
      "Smart rules that scale winners and pause losing ads",
      "Live performance dashboards so clients see what is happening at a glance",
      "Retargeting flows that follow up visitors on Instagram, Facebook and Google"
    ]
  },
  { 
    id: "web-apps", 
    number: "007", 
    title: "Web Apps",
    description: "Custom web based tools for your business or your clients.",
    features: [
      "Client portals for projects, onboarding or support",
      "Internal tools for tracking leads, tasks, orders or inventory",
      "Dashboards that pull data from multiple platforms into one view",
      "Role based access control for teams, partners and clients",
      "Built with scalable tech stacks and clean, documented code"
    ]
  },
  { 
    id: "smart-funnels", 
    number: "008", 
    title: "Smart Funnels",
    description: "Automated funnels that capture, nurture and convert leads.",
    features: [
      "Funnel strategy from first click to paid offer",
      "High converting landing pages connected to your CRM and email tools",
      "Automated email and WhatsApp follow up sequences",
      "Upsell and cross sell flows to increase average order value",
      "Continuous testing of steps to improve conversion rates over time"
    ]
  },
  { 
    id: "custom-backend", 
    number: "009", 
    title: "Custom Backend Systems",
    description: "The invisible engine that connects and powers everything.",
    features: [
      "APIs that connect your website, app and third party tools",
      "Central databases to keep your data clean and in sync",
      "Automation layers that remove manual data entry and copy paste work",
      "Secure authentication, roles and permissions for users",
      "Scalable architecture that can handle growth"
    ]
  },
  { 
    id: "brand-kits", 
    number: "010", 
    title: "Brand Kits",
    description: "A clear, consistent visual identity for your brand.",
    features: [
      "Logo concepts and final logo files for all uses",
      "Color palette and typography system for web and print",
      "Social media post templates and story templates",
      "Basic brand usage guide so your team stays on brand",
      "Optional website and funnel styling aligned with the brand kit"
    ]
  },
];

const ServicesSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (!expandedId) return;

    const element = itemRefs.current[expandedId];
    if (!element) return;

    // Small timeout so the expand animation can start and height is updated
    const timeout = setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 250);

    return () => clearTimeout(timeout);
  }, [expandedId]);

  const toggleService = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="services-section" id="services">
      <div className="services-content-container">
        <div className="services-headline">
          <motion.div
            className="services-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              className="services-tag-wrapper"
              variants={headingVariants}
            >
              <div className="services-tag">
                <p className="services-tag-text">services</p>
              </div>
            </motion.div>

            <motion.div
              className="services-text-container"
              variants={headingVariants}
            >
              <h2 className="services-subtitle">How can we help</h2>
              <p className="services-title">Your business grow</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="services-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="services-item"
              ref={(el) => {
                itemRefs.current[service.id] = el;
              }}
              variants={itemVariants}
            >
              <div
                className="services-question"
                role="button"
                tabIndex={0}
                aria-expanded={expandedId === service.id}
                aria-controls={`svc-panel-${service.id}`}
                onClick={() => toggleService(service.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleService(service.id);
                  }
                }}
              >
                <div className="services-number services-number-dim">
                  {service.number}
                </div>
                <p className="services-service-title">{service.title}</p>
                <div 
                  className="services-icon" 
                  aria-hidden="true"
                  style={{
                    transform: expandedId === service.id ? 'rotate(45deg)' : 'rotate(0deg)'
                  }}
                >
                  <div className="services-plus-line"></div>
                  <div className="services-plus-line"></div>
                </div>
              </div>

              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div
                    id={`svc-panel-${service.id}`}
                    className="services-panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="services-panel-content">
                      <p className="services-description">{service.description}</p>
                      <ul className="services-features">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="services-feature-item">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
