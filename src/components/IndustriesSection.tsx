"use client";

import { useEffect, useState, useRef } from "react";
import { 
  ShoppingCart, 
  Heart, 
  Building2, 
  GraduationCap, 
  Stethoscope, 
  Cpu, 
  Briefcase, 
  Home 
} from "lucide-react";

const IndustriesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      icon: ShoppingCart,
      name: "E-Commerce & Retail",
      description: "AI-powered automation for inventory, customer insights, and personalized marketing."
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "Streamline patient engagement with AI chatbots and automated appointment systems."
    },
    {
      icon: Building2,
      name: "Real Estate",
      description: "Lead generation automation and AI-driven property marketing solutions."
    },
    {
      icon: GraduationCap,
      name: "Education",
      description: "Automated student engagement and AI-powered learning management systems."
    },
    {
      icon: Stethoscope,
      name: "Fitness & Wellness",
      description: "AI chatbots for client onboarding and personalized marketing automation."
    },
    {
      icon: Cpu,
      name: "Technology & SaaS",
      description: "Advanced marketing automation and AI-driven customer support solutions."
    },
    {
      icon: Briefcase,
      name: "Professional Services",
      description: "Workflow automation and AI-powered client relationship management."
    },
    {
      icon: Home,
      name: "Hospitality",
      description: "Smart booking automation and AI chatbots for enhanced guest experiences."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 px-6 bg-black overflow-hidden"
      style={{
        willChange: 'transform',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
            }}
          >
            Industries We Serve
          </h2>
          <p 
            className="text-base md:text-lg text-white/70 max-w-3xl mx-auto"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
            }}
          >
            Empowering businesses across diverse sectors with cutting-edge AI automation and digital marketing solutions
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div 
          className="relative w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)'
          }}
        >
          <div 
            className="flex gap-6 py-8 animate-scroll"
            style={{
              animation: 'scroll 40s linear infinite'
            }}
          >
            {/* Duplicate the industries 3 times for seamless loop */}
            {[...Array(3)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex gap-6 shrink-0">
                {industries.map((industry, index) => {
                  const Icon = industry.icon;
                  return (
                    <div
                      key={index}
                      className="group relative w-80 shrink-0"
                    >
                      {/* Glow Effect */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-[#FF4925] to-[#E63E1F] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-300"
                      />
                      
                      {/* Card */}
                      <div 
                        className="relative bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-[#FF4925]/30 transition-all duration-300 h-full"
                      >
                        {/* Icon */}
                        <div 
                          className="w-14 h-14 rounded-xl mb-4 flex items-center justify-center"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255, 73, 37, 0.2) 0%, rgba(230, 62, 31, 0.1) 100%)',
                            border: '1px solid rgba(255, 73, 37, 0.3)'
                          }}
                        >
                          <Icon className="w-7 h-7 text-[#FF4925]" />
                        </div>

                        {/* Content */}
                        <h3 
                          className="text-xl font-bold text-white mb-3"
                          style={{
                            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
                          }}
                        >
                          {industry.name}
                        </h3>
                        <p 
                          className="text-sm text-gray-300"
                          style={{
                            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
                          }}
                        >
                          {industry.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p 
            className="text-white/40 text-sm uppercase tracking-wider"
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
            }}
          >
            And Many More Industries
          </p>
        </div>
      </div>

      {/* Add keyframes for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default IndustriesSection;
