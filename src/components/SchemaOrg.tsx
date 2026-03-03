// Schema.org Structured Data for SEO
// This component provides JSON-LD structured data for search engines

import React from 'react';

interface SchemaOrgProps {
  type?: 'home' | 'about' | 'services' | 'portfolio' | 'blog' | 'contact' | 'service-page';
  pageTitle?: string;
  pageDescription?: string;
  pageUrl?: string;
  serviceName?: string;
  serviceDescription?: string;
  blogTitle?: string;
  blogDescription?: string;
  blogImage?: string;
  blogDatePublished?: string;
  blogDateModified?: string;
  blogAuthor?: string;
  showFAQ?: boolean;
}

export default function SchemaOrg({
  type = 'home',
  pageTitle,
  pageDescription,
  pageUrl,
  serviceName,
  serviceDescription,
  blogTitle,
  blogDescription,
  blogImage,
  blogDatePublished,
  blogDateModified,
  blogAuthor = 'ARC AI',
  showFAQ = false,
}: SchemaOrgProps) {

  // Organization Schema (appears on all pages)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.arcai.agency/#organization",
    "name": "ARC AI",
    "alternateName": "ARC AI Agency",
    "url": "https://www.arcai.agency",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.arcai.agency/logo.png",
      "width": 512,
      "height": 512
    },
    "description": "Leading AI-powered digital agency specializing in web design, branding, AI automation, chatbots, and digital marketing services in UK and Sri Lanka.",
    "email": "support@arcai.agency",
    "telephone": "+447466368427",
    "address": [
      {
        "@type": "PostalAddress",
        "addressCountry": "GB",
        "addressRegion": "England",
        "addressLocality": "Birmingham"
      },
      {
        "@type": "PostalAddress",
        "addressCountry": "LK",
        "addressRegion": "Western Province",
        "addressLocality": "Colombo"
      }
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "Sri Lanka"
      },
      {
        "@type": "Place",
        "name": "Global"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/arc-ai-agency",
      "https://twitter.com/arcaiagency",
      "https://www.facebook.com/arcaiagency",
      "https://www.instagram.com/arcaiagency"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+447466368427",
        "contactType": "customer service",
        "areaServed": "GB",
        "availableLanguage": ["en"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+94771852522",
        "contactType": "customer service",
        "areaServed": "LK",
        "availableLanguage": ["en"]
      }
    ]
  };

  // Local Business Schema for UK
  const localBusinessSchemaUK = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.arcai.agency/#localbusiness-uk",
    "name": "ARC AI - UK",
    "alternateName": "ARC AI Agency UK",
    "url": "https://www.arcai.agency",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.arcai.agency/logo.png",
      "width": 512,
      "height": 512
    },
    "description": "AI-powered digital agency in UK specializing in web design, branding, and AI automation services.",
    "email": "support@arcai.agency",
    "telephone": "+447466368427",
    "priceRange": "£££",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB",
      "addressRegion": "England",
      "addressLocality": "Birmingham",
      "streetAddress": "Birmingham"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.4862,
      "longitude": -1.8904
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/arc-ai-agency",
      "https://twitter.com/arcaiagency"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+447466368427",
      "contactType": "customer service",
      "areaServed": "GB",
      "availableLanguage": ["en"]
    }
  };

  // Local Business Schema for Sri Lanka
  const localBusinessSchemaSL = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.arcai.agency/#localbusiness-sl",
    "name": "ARC AI - Sri Lanka",
    "alternateName": "ARC AI Agency Sri Lanka",
    "url": "https://www.arcai.agency",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.arcai.agency/logo.png",
      "width": 512,
      "height": 512
    },
    "description": "AI-powered digital agency in Sri Lanka specializing in web design, branding, and AI automation services.",
    "email": "support@arcai.agency",
    "telephone": "+94771852522",
    "priceRange": "LKR",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "LK",
      "addressRegion": "Western Province",
      "addressLocality": "Colombo",
      "streetAddress": "Colombo 4"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.8935,
      "longitude": 79.8558
    },
    "areaServed": {
      "@type": "Country",
      "name": "Sri Lanka"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/arc-ai-agency",
      "https://www.facebook.com/arcaiagency"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+94771852522",
      "contactType": "customer service",
      "areaServed": "LK",
      "availableLanguage": ["en"]
    }
  };

  // Website Schema (no fake SearchAction)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.arcai.agency/#website",
    "url": "https://www.arcai.agency",
    "name": "ARC AI",
    "description": "Leading AI-powered digital agency in UK & Sri Lanka",
    "publisher": {
      "@id": "https://www.arcai.agency/#organization"
    }
  };

  // Service Schema
  const serviceSchema = serviceName ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "provider": {
      "@id": "https://www.arcai.agency/#organization"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "Sri Lanka"
      },
      {
        "@type": "Place",
        "name": "Global"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": serviceName,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceName,
            "description": serviceDescription || ""
          }
        }
      ]
    }
  } : null;

  // FAQ Schema — boosts SERP real estate with rich FAQ dropdowns
  const faqSchema = showFAQ ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What AI services does ARC AI offer in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ARC AI offers AI chatbot development, workflow automation, AI content generation, smart sales funnels, web design & development, motion design, branding, and social media marketing for businesses in the UK, with offices in Birmingham."
        }
      },
      {
        "@type": "Question",
        "name": "Does ARC AI work with businesses in Sri Lanka?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. ARC AI is a dual-market agency with a team in Colombo, Sri Lanka. We serve Sri Lankan businesses across all our services including web design, AI automation, branding, and digital marketing."
        }
      },
      {
        "@type": "Question",
        "name": "What makes ARC AI different from other software companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ARC AI combines AI-first thinking with design and marketing expertise. We use cutting-edge tools like OpenAI, n8n, and Make.com to build solutions that are not just beautiful but automated and intelligent. We serve both UK and Sri Lanka markets with dedicated teams in each region."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a website cost in the UK with ARC AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Website pricing varies based on complexity and requirements. Contact ARC AI for a free quote tailored to your project. We serve businesses of all sizes from startups to enterprises across the UK and Sri Lanka."
        }
      },
      {
        "@type": "Question",
        "name": "Can ARC AI build an AI chatbot for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. ARC AI specialises in AI chatbot development for businesses in the UK and Sri Lanka. Our chatbots operate 24/7, handle customer inquiries, qualify leads, and integrate with your existing systems."
        }
      }
    ]
  } : null;

  // Blog Article Schema
  const blogArticleSchema = blogTitle ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogTitle,
    "description": blogDescription,
    "image": blogImage || "https://www.arcai.agency/og-image.jpg",
    "datePublished": blogDatePublished || "2024-01-01",
    "dateModified": blogDateModified || blogDatePublished || "2024-01-01",
    "author": {
      "@type": "Organization",
      "name": blogAuthor,
      "url": "https://www.arcai.agency"
    },
    "publisher": {
      "@id": "https://www.arcai.agency/#organization"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl || "https://www.arcai.agency"
    }
  } : null;

  // Breadcrumb Schema
  const breadcrumbSchema = pageUrl && pageTitle ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.arcai.agency"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageTitle,
        "item": pageUrl
      }
    ]
  } : null;

  // Combine schemas based on page type
  const schemas: any[] = [organizationSchema, websiteSchema];

  if (type === 'home' || type === 'about' || type === 'contact') {
    schemas.push(localBusinessSchemaUK, localBusinessSchemaSL);
  }

  if (serviceSchema) {
    schemas.push(serviceSchema);
  }

  if (faqSchema) {
    schemas.push(faqSchema);
  }

  if (blogArticleSchema) {
    schemas.push(blogArticleSchema);
  }

  if (breadcrumbSchema) {
    schemas.push(breadcrumbSchema);
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
