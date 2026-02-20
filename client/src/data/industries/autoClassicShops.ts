import { IndustryPageData } from "@/components/templates/IndustryPageTemplate";
import { Target, DollarSign, Users, MapPin, Search, TrendingUp } from "lucide-react";
import { createElement } from "react";

export const autoClassicShopsData: IndustryPageData = {
  // SEO & Meta
  title: "Classic & Vintage Auto Shops",
  metaDescription: "Specialized digital marketing for classic car restoration and vintage auto shops. Attract collectors and enthusiasts with targeted SEO and Google Ads strategies.",
  slug: "auto-classic-shops",
  
  // Hero Section
  heroHeadline: "Digital Marketing That Connects You with Classic Car Collectors & Enthusiasts",
  heroSubheadline: "Specialized marketing strategies that help classic car restoration shops attract high-value restoration projects, build authority in the collector community, and increase premium bookings by an average of 400%.",
  heroImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&q=80",
  
  // Industry Challenges
  challenges: [
    {
      icon: createElement(Target, { className: "h-12 w-12" }),
      title: "Niche Market Targeting",
      description: "Reaching collectors and enthusiasts requires specialized keywords and targeting strategies that generic automotive marketing misses entirely."
    },
    {
      icon: createElement(DollarSign, { className: "h-12 w-12" }),
      title: "High-Value Projects",
      description: "Restoration projects range from $10K-$100K+. Missing even one qualified lead per month costs significant revenue."
    },
    {
      icon: createElement(Users, { className: "h-12 w-12" }),
      title: "Trust & Credibility",
      description: "Classic car owners need extensive proof of expertise before trusting you with their prized vehicles—portfolio and reviews are critical."
    },
    {
      icon: createElement(MapPin, { className: "h-12 w-12" }),
      title: "Geographic Reach",
      description: "Collectors will travel 50-100+ miles for the right specialist, but only if they can find you online first."
    },
    {
      icon: createElement(Search, { className: "h-12 w-12" }),
      title: "Make/Model Specialization",
      description: "Customers search for specific expertise: 'classic Porsche specialist' or 'vintage British car restoration'—not generic terms."
    },
    {
      icon: createElement(TrendingUp, { className: "h-12 w-12" }),
      title: "Long Sales Cycles",
      description: "Restoration decisions take months. You need ongoing visibility and nurture strategies to stay top-of-mind during consideration."
    }
  ],
  
  // Solutions/Services
  solutions: [
    {
      title: "Classic Car SEO",
      description: "Specialized search engine optimization targeting collectors, enthusiasts, and vintage vehicle owners with make/model-specific keywords.",
      benefits: [
        "Target specific searches like 'classic Porsche restoration' and 'vintage Mustang specialist'",
        "Showcase completed restorations with detailed before/after galleries optimized for search",
        "Content strategy positioning you as the expert: restoration guides, parts sourcing tips",
        "Rank for '[make/model] specialist [region]' to capture customers willing to travel",
        "Capture long-tail searches: 'air-cooled Porsche specialist,' 'classic British car electrical repair'",
        "Build visibility in classic car forums, clubs, and communities where collectors gather"
      ]
    },
    {
      title: "Google Business Profile for Specialists",
      description: "Optimized GBP showcasing your restoration portfolio, specializations, and collector testimonials to build trust.",
      benefits: [
        "Professional photos of completed projects that demonstrate craftsmanship",
        "Showcase testimonials from satisfied classic car owners that build credibility",
        "Highlight specific makes/models you specialize in: Porsche, Mustang, British cars, muscle cars",
        "Set realistic expectations with transparent timelines and communication",
        "Answer common questions about restoration costs, timelines, and processes",
        "Display industry certifications, show awards, and club memberships that validate expertise"
      ]
    },
    {
      title: "Google Ads for High-Value Projects",
      description: "Targeted advertising campaigns reaching collectors actively searching for restoration specialists with premium project budgets.",
      benefits: [
        "Bid on high-intent keywords like 'classic car restoration quote' and '[make/model] specialist near me'",
        "Even one $50K restoration project per quarter delivers 10x+ return on ad spend",
        "Appear at the top of search results instantly while SEO builds long-term rankings",
        "Measure which keywords and ads drive the most valuable restoration inquiries",
        "Stay visible to collectors who visited your site but haven't contacted you yet",
        "Target collectors within 50-100 mile radius who will travel for specialized expertise"
      ]
    }
  ],
  
  // Why Choose Us
  whyChooseUs: [
    {
      title: "Classic Car Industry Expertise",
      description: "We understand the collector market, make/model-specific searches, and how to position restoration shops as premium specialists rather than generic mechanics."
    },
    {
      title: "Portfolio-First Marketing",
      description: "We help you showcase your best restoration work with professional photography, detailed project documentation, and before/after galleries that sell your expertise."
    },
    {
      title: "High-Value Lead Focus",
      description: "Our strategies target collectors with $10K-$100K+ restoration budgets, not tire-kickers looking for cheap repairs. Quality over quantity."
    },
    {
      title: "Proven Results",
      description: "Our classic car shop clients see 300-500% increases in restoration inquiries and fill their schedules with premium projects that command top dollar."
    }
  ],
  
  // Industry Overview (for SEO)
  industryOverview: {
    title: "The Classic Car Market Opportunity",
    paragraphs: [
      "The classic and vintage automobile market represents a unique and passionate segment of the automotive industry. Classic car owners are not simply looking for the cheapest mechanic—they are searching for specialists who understand the intricacies of vintage vehicles, have access to rare parts, and possess the craftsmanship to preserve automotive history. These customers are willing to travel farther and pay premium prices for shops that demonstrate expertise and authenticity.",
      "However, most classic car restoration shops struggle with digital marketing. Their ideal customers—collectors, enthusiasts, and vintage car owners—are actively searching online for 'classic car restoration near me,' 'vintage auto repair,' and specific make/model specialists, but many shops remain invisible in search results. Traditional word-of-mouth marketing, while valuable, limits growth potential and leaves revenue on the table.",
      "Digital marketing for classic car shops requires a specialized approach. Generic automotive SEO does not work—you need strategies that target high-value keywords like 'Porsche 911 restoration,' 'classic Mustang specialist,' and 'vintage Mercedes repair.' Your online presence must showcase your portfolio, demonstrate expertise, and build trust with discerning customers who view their vehicles as investments and passion projects."
    ]
  },
  
  // Process
  process: {
    title: "Our Proven Process for Classic Car Shops",
    description: "A specialized 4-step approach designed specifically for classic car restoration and vintage auto specialists.",
    steps: [
      {
        number: 1,
        title: "Discovery & Specialization Audit",
        description: "We analyze your shop's unique expertise, completed restoration portfolio, target makes/models, and competitive positioning in the classic car market."
      },
      {
        number: 2,
        title: "Collector Keyword Research",
        description: "Identify high-value keywords: make/model-specific searches, restoration terms, parts sourcing, and enthusiast community phrases your ideal customers use."
      },
      {
        number: 3,
        title: "Portfolio & Content Optimization",
        description: "Optimize your website with restoration galleries, expertise demonstrations, before/after showcases, and educational content that builds authority."
      },
      {
        number: 4,
        title: "Ongoing Visibility & Lead Generation",
        description: "Continuous SEO, GBP optimization, and targeted advertising to attract collectors, track high-value leads, and grow your restoration business."
      }
    ]
  },
  
  // Common Mistakes
  commonMistakes: {
    title: "4 Marketing Mistakes Classic Car Shops Make",
    description: "Avoid these common pitfalls that prevent restoration shops from attracting high-value collector clients.",
    mistakes: [
      {
        title: "Generic Automotive Marketing",
        description: "Using the same strategies as regular repair shops fails to reach collectors searching for specialized expertise.",
        solution: "Target make/model-specific keywords and enthusiast communities where classic car owners actively search for specialists."
      },
      {
        title: "Poor Portfolio Presentation",
        description: "Low-quality photos or no before/after galleries fail to demonstrate craftsmanship to discerning collectors.",
        solution: "Invest in professional photography of completed restorations and create detailed project showcases with process documentation."
      },
      {
        title: "Competing on Price",
        description: "Trying to be the 'cheapest' restoration shop attracts wrong customers and devalues your expertise.",
        solution: "Position as premium specialist with transparent pricing, detailed estimates, and emphasis on quality craftsmanship over cost."
      },
      {
        title: "Limited Geographic Targeting",
        description: "Only targeting immediate local area misses collectors willing to travel 50-100+ miles for the right specialist.",
        solution: "Expand SEO and advertising radius to capture regional collectors—classic car owners will travel for expertise."
      }
    ]
  },
  
  // Benefits Breakdown
  benefitsBreakdown: {
    title: "The Impact of Specialized Classic Car Marketing",
    description: "How our targeted strategies transform restoration shops into thriving collector destinations.",
    benefits: [
      {
        title: "High-Value Lead Generation",
        description: "Attract collectors and enthusiasts with $10K-$100K+ restoration budgets instead of low-margin maintenance work. Our strategies target specific make/model searches and enthusiast communities where serious collectors search for specialists.",
        impact: "Clients typically see 3-5 qualified restoration inquiries per month, with average project values 2-3x higher than before"
      },
      {
        title: "Authority Positioning",
        description: "Establish your shop as the recognized specialist for specific makes/models in your region. Portfolio showcases, educational content, and community engagement position you as the expert collectors trust with their prized vehicles.",
        impact: "Top 3 rankings for make/model-specific searches like 'classic Porsche restoration [city]' within 4-6 months"
      },
      {
        title: "Collector Network Growth",
        description: "Build visibility in enthusiast communities, car clubs, and forums where your ideal customers gather. Strategic content marketing and community engagement create ongoing referral streams from the collector network.",
        impact: "50-100 new collector contacts per quarter through organic search, community engagement, and referrals"
      },
      {
        title: "Premium Project Pipeline",
        description: "Fill your schedule with high-margin restoration projects instead of chasing low-value oil changes. Consistent visibility ensures a steady pipeline of premium work that commands top dollar and showcases your craftsmanship.",
        impact: "Most clients build 6-12 month restoration waitlists and increase annual revenue by $500K-$2M+"
      }
    ]
  },
  
  // Case Study
  caseStudy: {
    businessName: "Thompson Porsche Restoration",
    businessType: "Classic Porsche Restoration Shop",
    location: "Orange County, CA",
    quote: "We went from relying entirely on word-of-mouth to having a 6-month waitlist for restoration projects. The specialized SEO strategy targeting air-cooled Porsche enthusiasts brought us exactly the high-value clients we wanted. Best investment we've made in 20 years.",
    author: "David Thompson",
    authorTitle: "Owner",
    results: [
      { metric: "Restoration Inquiries", value: "+400%" },
      { metric: "Average Project Value", value: "+150%" },
      { metric: "Geographic Reach", value: "+567%" }
    ]
  },
  
  // FAQ
  faqs: [
    {
      question: "How is classic car marketing different from regular auto shop marketing?",
      answer: "Classic car marketing targets a completely different customer with different search behaviors. Collectors search for make/model-specific specialists ('classic Porsche restoration'), care more about expertise than price, and will travel farther for the right shop. Generic automotive SEO misses these high-value searches entirely."
    },
    {
      question: "What if I specialize in multiple makes/models?",
      answer: "Perfect! We create dedicated landing pages for each specialization (Porsche, Mustang, British cars, etc.) to capture specific searches. This multi-specialization strategy actually increases visibility and attracts more diverse collector clientele."
    },
    {
      question: "How do you showcase my restoration portfolio online?",
      answer: "We optimize your website with before/after galleries, detailed project showcases, process documentation, and customer testimonials. Each completed restoration becomes a marketing asset that demonstrates expertise and attracts similar projects."
    },
    {
      question: "Can you help me reach collectors outside my immediate area?",
      answer: "Absolutely. Classic car owners will travel 50-100+ miles for the right specialist. We expand your SEO and advertising radius to capture regional collectors, optimize for '[make/model] specialist [region]' searches, and build visibility in enthusiast communities."
    },
    {
      question: "What about competing with larger restoration shops?",
      answer: "Specialization is your competitive advantage. We position you as the expert for specific makes/models or restoration types (concours, driver quality, race prep) rather than trying to compete as a generalist. Collectors prefer specialists over large shops."
    },
    {
      question: "How long until I see restoration inquiries?",
      answer: "Google Ads can generate inquiries within 2-4 weeks. SEO takes 3-6 months to build momentum, but delivers consistent long-term leads. Most classic car shops see their first high-value restoration inquiry within 30-60 days of starting."
    }
  ],
  
  // Final CTA
  finalCtaHeadline: "Ready to Attract More High-Value Restoration Projects?",
  finalCtaSubheadline: "Join classic car shops that trust Auto Shop Digital to connect them with collectors and enthusiasts who value their expertise."
};
