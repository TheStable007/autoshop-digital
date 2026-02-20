import { IndustryPageData } from "@/components/templates/IndustryPageTemplate";
import { Wrench, DollarSign, Users, Target, TrendingUp, Zap } from "lucide-react";
import { createElement } from "react";

export const autoCustomShopsData: IndustryPageData = {
  // SEO & Meta
  title: "Auto Custom Shops & Performance Tuning",
  metaDescription: "Digital marketing for custom car shops, performance tuning, and automotive customization businesses. Attract enthusiasts and high-value custom projects with specialized SEO and advertising.",
  slug: "auto-custom-shops",
  
  // Hero Section
  heroHeadline: "Digital Marketing That Connects You with Car Enthusiasts & Custom Project Clients",
  heroSubheadline: "Specialized marketing strategies that help custom shops and performance tuners attract high-value projects, build enthusiast followings, and increase custom bookings by an average of 385%.",
  heroImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80",
  
  // Industry Challenges
  challenges: [
    {
      icon: createElement(Target, { className: "h-12 w-12" }),
      title: "Niche Audience Targeting",
      description: "Reaching car enthusiasts and custom project clients requires specialized marketing that generic automotive strategies completely miss."
    },
    {
      icon: createElement(DollarSign, { className: "h-12 w-12" }),
      title: "High-Value Project Pipeline",
      description: "Custom builds range from $5K-$50K+. Inconsistent lead flow creates feast-or-famine cycles that hurt profitability and planning."
    },
    {
      icon: createElement(Users, { className: "h-12 w-12" }),
      title: "Portfolio Visibility",
      description: "Your best custom work sits in your shop or on Instagram, but potential clients searching Google never see your craftsmanship."
    },
    {
      icon: createElement(TrendingUp, { className: "h-12 w-12" }),
      title: "Competition from DIY",
      description: "Enthusiasts often attempt modifications themselves. You need to demonstrate expertise that justifies professional custom work."
    },
    {
      icon: createElement(Zap, { className: "h-12 w-12" }),
      title: "Specialization Marketing",
      description: "Customers search for specific mods: 'turbo install,' 'suspension tuning,' 'engine swap'—not generic 'custom shop' terms."
    },
    {
      icon: createElement(Wrench, { className: "h-12 w-12" }),
      title: "Trust & Credibility",
      description: "Custom work requires significant trust. Enthusiasts need extensive proof of expertise before committing to expensive projects."
    }
  ],
  
  // Solutions/Services
  solutions: [
    {
      title: "Custom Shop SEO",
      description: "Specialized search engine optimization targeting car enthusiasts searching for performance upgrades, custom builds, and modification services.",
      benefits: [
        "Target specific mod searches: 'turbo installation,' 'suspension tuning,' 'engine swap near me'",
        "Rank for make/model-specific customization: 'Honda tuning,' 'BMW performance upgrades'",
        "Build authority with educational content: mod guides, parts comparisons, tuning tips",
        "Optimize portfolio galleries with before/after custom builds for search visibility",
        "Capture long-tail keywords: 'LS swap specialist,' 'standalone ECU tuning,' 'roll cage fabrication'",
        "Build visibility in enthusiast forums, car clubs, and modification communities"
      ]
    },
    {
      title: "Google Business Profile for Custom Shops",
      description: "Optimized GBP showcasing your custom builds, specializations, and enthusiast testimonials to attract high-value projects.",
      benefits: [
        "Professional photos of completed custom builds that demonstrate craftsmanship and creativity",
        "Showcase testimonials from satisfied enthusiasts that build credibility in the community",
        "Highlight specific services: turbo/supercharger, suspension, engine swaps, dyno tuning",
        "Display certifications, dyno charts, and performance results that validate expertise",
        "Answer common questions about custom work costs, timelines, and modification processes",
        "Track calls and direction requests from enthusiasts searching for custom shops"
      ]
    },
    {
      title: "Google Ads for Performance Enthusiasts",
      description: "Targeted advertising campaigns reaching car enthusiasts actively searching for custom work and performance upgrades.",
      benefits: [
        "Bid on high-intent keywords like 'turbo installation quote' and 'performance tuning near me'",
        "Target enthusiasts searching for specific mods: 'coilover installation,' 'exhaust fabrication'",
        "Appear at top of search results instantly while SEO builds long-term organic rankings",
        "Retarget website visitors who viewed your portfolio but haven't contacted you yet",
        "Measure which keywords and ads drive the most valuable custom project inquiries",
        "Geo-target enthusiast hotspots and areas with high concentrations of modified cars"
      ]
    }
  ],
  
  // Why Choose Us
  whyChooseUs: [
    {
      title: "Enthusiast Market Expertise",
      description: "We understand car culture, modification trends, and how enthusiasts search for custom shops. Our strategies target the specific keywords and communities where your ideal clients gather."
    },
    {
      title: "Portfolio-First Marketing",
      description: "We help you showcase your best custom builds with professional photography, detailed project documentation, and strategic placement that demonstrates your craftsmanship and creativity."
    },
    {
      title: "High-Value Project Focus",
      description: "Our strategies target enthusiasts with $5K-$50K+ custom build budgets, not tire-kickers. We focus on quality leads that turn into profitable projects."
    },
    {
      title: "Proven Results",
      description: "Our custom shop clients see 300-500% increases in project inquiries and build consistent pipelines of high-value custom work that keeps their bays full year-round."
    }
  ],
  
  // Industry Overview
  industryOverview: {
    title: "The Custom Automotive Market Opportunity",
    paragraphs: [
      "The custom automotive and performance tuning market represents a passionate and growing segment of car enthusiasts willing to invest significant money in their vehicles. These customers are not looking for the cheapest oil change—they are searching for specialists who can execute complex modifications, deliver reliable performance gains, and bring their custom build visions to life. They will travel farther and pay premium prices for shops that demonstrate expertise and creativity.",
      "However, most custom shops struggle with digital marketing. Their ideal customers—enthusiasts, tuners, and custom build clients—are actively searching online for 'turbo installation near me,' 'performance tuning,' and specific modification services, but many shops remain invisible in search results. Relying solely on Instagram and word-of-mouth limits growth potential and creates inconsistent project pipelines.",
      "Digital marketing for custom shops requires a specialized approach. Generic automotive SEO does not work—you need strategies that target modification-specific keywords like 'LS swap specialist,' 'standalone ECU tuning,' and 'roll cage fabrication.' Your online presence must showcase your portfolio, demonstrate technical expertise, and build trust with discerning enthusiasts who view their vehicles as expressions of personal style and performance."
    ]
  },
  
  // Process
  process: {
    title: "Our Proven Process for Custom Shops",
    description: "A specialized 4-step approach designed specifically for custom automotive and performance tuning businesses.",
    steps: [
      {
        number: 1,
        title: "Custom Shop Audit & Specialization",
        description: "We analyze your shop's unique services, completed custom builds, target modifications, and competitive positioning in the enthusiast market."
      },
      {
        number: 2,
        title: "Modification Keyword Research",
        description: "Identify high-value keywords: specific mod searches, make/model customization terms, and enthusiast community phrases your ideal clients use."
      },
      {
        number: 3,
        title: "Portfolio & Content Optimization",
        description: "Optimize your website with custom build galleries, technical expertise demonstrations, before/after showcases, and educational content that builds authority."
      },
      {
        number: 4,
        title: "Ongoing Visibility & Project Generation",
        description: "Continuous SEO, GBP optimization, and targeted advertising to attract enthusiasts, track high-value project inquiries, and grow your custom business."
      }
    ]
  },
  
  // Common Mistakes
  commonMistakes: {
    title: "4 Marketing Mistakes Custom Shops Make",
    description: "Avoid these common pitfalls that prevent custom shops from attracting high-value enthusiast projects.",
    mistakes: [
      {
        title: "Instagram-Only Marketing",
        description: "Relying solely on Instagram misses enthusiasts searching Google for 'turbo installation near me' and specific modification services.",
        solution: "Build strong Google presence with SEO and GBP optimization to capture enthusiasts actively searching for custom work."
      },
      {
        title: "Generic Service Descriptions",
        description: "Listing 'performance upgrades' without specifics fails to capture searches for 'turbo installation,' 'suspension tuning,' or 'engine swaps.'",
        solution: "Create dedicated pages for each modification service with detailed descriptions, pricing guidance, and portfolio examples."
      },
      {
        title: "Poor Technical Documentation",
        description: "Not documenting your custom builds with specs, dyno charts, and process photos fails to demonstrate expertise to discerning enthusiasts.",
        solution: "Document every major project with detailed specs, performance results, and process photos that showcase technical expertise."
      },
      {
        title: "Competing on Price",
        description: "Trying to be the 'cheapest' custom shop attracts wrong customers and devalues your craftsmanship and expertise.",
        solution: "Position as premium specialist with transparent pricing, detailed quotes, and emphasis on quality workmanship and reliability."
      }
    ]
  },
  
  // Benefits Breakdown
  benefitsBreakdown: {
    title: "The Impact of Specialized Custom Shop Marketing",
    description: "How targeted enthusiast marketing transforms custom shops into thriving performance destinations.",
    benefits: [
      {
        title: "High-Value Project Pipeline",
        description: "Attract enthusiasts with $5K-$50K+ custom build budgets instead of low-margin maintenance work. Our strategies target specific modification searches and enthusiast communities where serious builders search for specialists.",
        impact: "Clients typically see 5-10 qualified custom project inquiries per month, with average project values 3-5x higher than before"
      },
      {
        title: "Enthusiast Community Authority",
        description: "Establish your shop as the recognized specialist for specific modifications or makes/models in your region. Portfolio showcases, technical content, and community engagement position you as the expert enthusiasts trust.",
        impact: "Top 3 rankings for modification-specific searches like 'turbo installation [city]' within 4-6 months"
      },
      {
        title: "Consistent Custom Work",
        description: "Build a steady pipeline of custom projects instead of feast-or-famine cycles. Consistent visibility ensures ongoing inquiries from enthusiasts planning their next modifications.",
        impact: "Most clients build 2-3 month project waitlists and increase annual custom revenue by $200K-$800K+"
      },
      {
        title: "Premium Pricing Power",
        description: "When you're recognized as the specialist, enthusiasts pay premium prices for your expertise. Strong online presence and portfolio allow you to command top dollar for custom work.",
        impact: "Average project value increases 40-60% as you attract serious enthusiasts willing to pay for quality"
      }
    ]
  },
  
  // Case Study
  caseStudy: {
    businessName: "Apex Performance Tuning",
    businessType: "Custom Shop & Performance Tuning",
    location: "Atlanta, GA",
    quote: "We were relying on Instagram and word-of-mouth, which created unpredictable project flow. The specialized SEO targeting turbo installation and performance tuning searches brought us a consistent pipeline of high-value custom builds. We're now booked 3 months out.",
    author: "Marcus Johnson",
    authorTitle: "Owner",
    results: [
      { metric: "Custom Project Inquiries", value: "+385%" },
      { metric: "Average Project Value", value: "+220%" },
      { metric: "Annual Custom Revenue", value: "+$640K" }
    ]
  },
  
  // FAQ
  faqs: [
    {
      question: "How is custom shop marketing different from regular auto shop marketing?",
      answer: "Custom shop marketing targets a completely different customer—enthusiasts who search for specific modifications like 'turbo installation' or 'suspension tuning,' not generic 'auto repair.' We optimize for modification-specific keywords, showcase your custom build portfolio, and build visibility in enthusiast communities where your ideal clients gather."
    },
    {
      question: "What if I specialize in multiple types of custom work?",
      answer: "Perfect! We create dedicated landing pages for each service (turbo/supercharger, suspension, engine swaps, etc.) to capture specific searches. This multi-specialization strategy actually increases visibility and attracts more diverse custom projects."
    },
    {
      question: "How do you showcase my custom builds online?",
      answer: "We optimize your website with before/after galleries, detailed project showcases with specs and dyno charts, process documentation, and customer testimonials. Each completed build becomes a marketing asset that demonstrates expertise and attracts similar projects."
    },
    {
      question: "Can you help me reach enthusiasts outside my immediate area?",
      answer: "Absolutely. Enthusiasts will travel 50-100+ miles for the right custom shop. We expand your SEO and advertising radius to capture regional enthusiasts, optimize for '[modification] specialist [region]' searches, and build visibility in car clubs and forums."
    },
    {
      question: "What about competing with larger performance shops?",
      answer: "Specialization is your competitive advantage. We position you as the expert for specific modifications or makes/models (Honda tuning, BMW performance, etc.) rather than trying to compete as a generalist. Enthusiasts prefer specialists."
    },
    {
      question: "How long until I see custom project inquiries?",
      answer: "Google Ads can generate inquiries within 2-4 weeks. SEO takes 3-6 months to build momentum, but delivers consistent long-term leads. Most custom shops see their first high-value project inquiry within 30-60 days of starting."
    }
  ],
  
  // Final CTA
  finalCtaHeadline: "Ready to Attract More High-Value Custom Projects?",
  finalCtaSubheadline: "Join custom shops that trust Auto Shop Digital to connect them with enthusiasts who value their expertise and craftsmanship."
};
