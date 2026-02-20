import { IndustryPageData } from "@/components/templates/IndustryPageTemplate";
import { Shield, DollarSign, Users, TrendingDown, Target, Clock } from "lucide-react";
import { createElement } from "react";

export const autoCollisionPaintData: IndustryPageData = {
  // SEO & Meta
  title: "Auto Collision & Paint Shops",
  metaDescription: "Digital marketing for collision repair and auto paint shops. Reduce insurance dependence, attract direct customers, and grow your body shop with proven SEO and advertising strategies.",
  slug: "auto-collision-paint",
  
  // Hero Section
  heroHeadline: "Digital Marketing That Reduces Your Insurance Dependence & Brings Direct Customers",
  heroSubheadline: "Specialized marketing strategies that help collision and paint shops build direct-to-consumer pipelines, increase estimate requests, and grow revenue by an average of 312%.",
  heroImage: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1920&q=80",
  
  // Industry Challenges
  challenges: [
    {
      icon: createElement(Shield, { className: "h-12 w-12" }),
      title: "Insurance Dependence",
      description: "Relying on insurance referrals puts you at the mercy of DRP programs with declining reimbursement rates and strict requirements."
    },
    {
      icon: createElement(DollarSign, { className: "h-12 w-12" }),
      title: "Shrinking Margins",
      description: "Insurance companies squeeze reimbursement rates while parts and labor costs rise, making it harder to maintain profitability."
    },
    {
      icon: createElement(Users, { className: "h-12 w-12" }),
      title: "Customer Acquisition",
      description: "Collision repair is often a one-time need, making consistent customer acquisition expensive without a direct marketing pipeline."
    },
    {
      icon: createElement(TrendingDown, { className: "h-12 w-12" }),
      title: "Low Online Visibility",
      description: "Most collision shops don't rank in local search, so potential customers never find you before calling their insurance company."
    },
    {
      icon: createElement(Target, { className: "h-12 w-12" }),
      title: "Price Shopping",
      description: "Without strong online presence and reviews, customers default to choosing the cheapest estimate instead of the best shop."
    },
    {
      icon: createElement(Clock, { className: "h-12 w-12" }),
      title: "Long Sales Cycles",
      description: "Customers research collision shops for days before deciding. If you're not visible throughout their search, you lose the job."
    }
  ],
  
  // Solutions/Services
  solutions: [
    {
      title: "Collision Repair SEO",
      description: "Search engine optimization targeting customers searching for collision repair, auto body work, and paint services before they call insurance.",
      benefits: [
        "Rank for 'collision repair near me,' 'auto body shop [city],' and paint-related searches",
        "Capture customers before they contact insurance companies and get steered to DRP shops",
        "Build authority with content about insurance claims, repair processes, and quality standards",
        "Optimize for mobile search—most collision searches happen immediately after accidents",
        "Target commercial fleet keywords to attract high-value business accounts",
        "Create location-specific pages to dominate multiple service areas and neighborhoods"
      ]
    },
    {
      title: "Google Business Profile Optimization",
      description: "Optimized GBP with before/after photos, 5-star reviews, and strategic Q&A that builds trust and drives estimate requests.",
      benefits: [
        "Showcase before/after collision repair photos that demonstrate quality workmanship",
        "Build 4.5+ star rating with strategic review generation from satisfied customers",
        "Answer common questions about insurance claims, repair timelines, and OEM parts",
        "Highlight certifications (I-CAR, OEM, PPG) that differentiate you from competitors",
        "Optimize for 'near me' searches that drive immediate estimate requests",
        "Track phone calls, direction requests, and website clicks to measure ROI"
      ]
    },
    {
      title: "Google Ads for Direct Customers",
      description: "Targeted advertising campaigns capturing customers actively searching for collision repair and bypassing insurance referrals.",
      benefits: [
        "Appear at top of search results for high-intent keywords like 'collision repair quote'",
        "Target customers searching immediately after accidents when urgency is highest",
        "Retarget website visitors who got estimates but haven't booked yet",
        "Geo-target specific neighborhoods and zip codes around your shop location",
        "Track cost per estimate request and optimize for highest-converting keywords",
        "Generate 10-20 direct estimate requests per month that bypass insurance steering"
      ]
    }
  ],
  
  // Why Choose Us
  whyChooseUs: [
    {
      title: "Collision Industry Expertise",
      description: "We understand DRP programs, insurance steering, and the challenges of building direct-to-consumer pipelines for collision shops. Our strategies are proven to reduce insurance dependence."
    },
    {
      title: "Before/After Marketing",
      description: "We help you showcase your best collision repair work with professional photography and strategic placement across your website, GBP, and advertising to demonstrate quality."
    },
    {
      title: "Direct Customer Focus",
      description: "Our strategies target customers before they call insurance, helping you build a pipeline of direct repair orders (DROs) that deliver better margins and customer relationships."
    },
    {
      title: "Proven Results",
      description: "Our collision shop clients see 250-400% increases in direct estimate requests and significantly reduce their dependence on insurance referrals within 6-12 months."
    }
  ],
  
  // Industry Overview
  industryOverview: {
    title: "The Collision Repair Industry Challenge",
    paragraphs: [
      "The collision repair industry faces a critical challenge: increasing dependence on insurance company referrals through Direct Repair Programs (DRPs). While DRP partnerships provide steady work, they come with declining reimbursement rates, strict requirements, and loss of control over your business. Many collision shops find themselves working harder for less profit, trapped in a cycle of insurance dependence.",
      "However, customers are actively searching online for collision repair shops before contacting their insurance companies. Searches like 'collision repair near me,' 'auto body shop [city],' and 'car paint repair' represent opportunities to capture direct customers who will pay better rates and build long-term relationships. The problem is most collision shops are invisible in these searches, losing potential customers to competitors or insurance steering.",
      "Digital marketing for collision and paint shops requires a strategic approach focused on building direct-to-consumer pipelines. By ranking #1 in local search, maintaining a 4.5+ star rating, and running targeted advertising, you can capture customers before they call their insurance company. This reduces your dependence on DRP programs, improves your margins, and gives you control over your business growth."
    ]
  },
  
  // Process
  process: {
    title: "Our Proven Process for Collision Shops",
    description: "A specialized 4-step approach designed to reduce insurance dependence and build direct customer pipelines.",
    steps: [
      {
        number: 1,
        title: "Collision Shop Audit & Strategy",
        description: "We analyze your current insurance dependence, competitive landscape, service area, and identify opportunities to capture direct customers through search."
      },
      {
        number: 2,
        title: "Keyword & Competitor Research",
        description: "Identify high-intent collision repair keywords, analyze top-ranking competitors, and develop a strategy to capture customers before they call insurance."
      },
      {
        number: 3,
        title: "Website & GBP Optimization",
        description: "Optimize your website with before/after galleries, insurance claim guidance, and trust-building content. Build your GBP with photos, reviews, and strategic Q&A."
      },
      {
        number: 4,
        title: "Ongoing Lead Generation & Optimization",
        description: "Continuous SEO, review generation, and targeted advertising to drive direct estimate requests. Track results and optimize for maximum ROI."
      }
    ]
  },
  
  // Common Mistakes
  commonMistakes: {
    title: "4 Marketing Mistakes Collision Shops Make",
    description: "Avoid these common pitfalls that keep collision shops dependent on insurance referrals.",
    mistakes: [
      {
        title: "Relying Solely on Insurance Referrals",
        description: "Depending entirely on DRP programs puts you at the mercy of insurance companies and declining reimbursement rates.",
        solution: "Build a direct-to-consumer marketing pipeline through SEO and Google Ads to capture customers before they call insurance."
      },
      {
        title: "Poor Before/After Documentation",
        description: "Not showcasing your collision repair quality with professional photos fails to differentiate you from cheaper competitors.",
        solution: "Invest in before/after photography for every major repair and showcase your best work across your website and GBP."
      },
      {
        title: "Ignoring Online Reviews",
        description: "Low ratings or few reviews cause customers to choose competitors, even if your repair quality is superior.",
        solution: "Implement systematic review generation to build 4.5+ star rating with 50+ reviews that build trust and drive estimates."
      },
      {
        title: "Generic Automotive Marketing",
        description: "Using the same marketing as oil change shops fails to address collision-specific customer concerns about insurance, quality, and timelines.",
        solution: "Create collision-specific content addressing insurance claims, OEM certifications, repair processes, and quality guarantees."
      }
    ]
  },
  
  // Benefits Breakdown
  benefitsBreakdown: {
    title: "The Impact of Direct Customer Marketing",
    description: "How reducing insurance dependence transforms collision shop profitability and growth.",
    benefits: [
      {
        title: "Reduced Insurance Dependence",
        description: "Build a pipeline of direct repair orders (DROs) that bypass insurance steering and DRP requirements. Direct customers pay better rates, have fewer restrictions, and build long-term relationships that lead to referrals.",
        impact: "Clients typically reduce insurance dependence from 80-90% to 40-60% within 12 months, improving margins by 15-25%"
      },
      {
        title: "Higher Profit Margins",
        description: "Direct customers accept higher labor rates, approve additional repairs, and don't negotiate reimbursement rates. This significantly improves per-job profitability compared to insurance work.",
        impact: "Average repair order value increases 25-40% for direct customers vs. insurance referrals"
      },
      {
        title: "Consistent Estimate Flow",
        description: "Instead of waiting for insurance referrals, generate 10-20+ direct estimate requests per month through search visibility and targeted advertising. This creates predictable revenue and reduces feast-or-famine cycles.",
        impact: "Most clients see 15-25 direct estimate requests per month within 90 days of starting"
      },
      {
        title: "Competitive Advantage",
        description: "Most collision shops don't invest in digital marketing, relying entirely on insurance referrals. By dominating local search, you capture market share and position yourself as the area's leading collision repair provider.",
        impact: "Clients typically move from page 2-3 to top 3 local pack positions, capturing 45% of all collision search traffic"
      }
    ]
  },
  
  // Case Study
  caseStudy: {
    businessName: "Elite Collision Center",
    businessType: "Auto Body & Collision Repair Shop",
    location: "San Diego, CA",
    quote: "We were 80% dependent on insurance referrals and constantly fighting for scraps. Auto Shop Digital helped us build a direct-to-consumer pipeline. Now 60% of our work comes from direct customers who found us online, and our margins are significantly better.",
    author: "Carlos Martinez",
    authorTitle: "Owner",
    results: [
      { metric: "Direct Repair Orders", value: "+312%" },
      { metric: "Insurance Dependence", value: "-45%" },
      { metric: "Monthly Revenue Growth", value: "+$32K" }
    ]
  },
  
  // FAQ
  faqs: [
    {
      question: "How do you help collision shops compete with insurance preferred shops?",
      answer: "We help you build a strong direct-to-consumer pipeline so you're less dependent on insurance referrals. By ranking #1 in local search and running targeted ads, we capture customers before they even call their insurance company. We also help you communicate your value—certifications, OEM parts, lifetime warranties—so customers choose you even if you're not on their insurance's preferred list."
    },
    {
      question: "Can you help us get more commercial fleet accounts?",
      answer: "Yes! We create targeted campaigns for fleet managers and business owners searching for commercial collision repair services. We optimize your website for B2B keywords and can even help you create fleet-specific landing pages and proposals."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most collision shops see increased estimate requests within 30 days from Google Ads. SEO results typically take 60-90 days as we build your rankings and authority. The key is consistency—shops that stick with us for 6+ months see the most dramatic growth in direct repair orders."
    },
    {
      question: "Do you help with before/after photos and content?",
      answer: "Absolutely. We'll guide you on what types of photos to take (we provide a shot list), and we handle all the editing, posting, and optimization. Before/after photos are incredibly powerful for collision repair marketing, and we make sure they're showcased everywhere—your website, Google Business Profile, and ads."
    },
    {
      question: "What makes your approach different from other marketing agencies?",
      answer: "We exclusively serve auto-related businesses, so we understand the collision repair industry deeply. We know the difference between DROs and insurance work, we understand certification requirements, and we know what keywords actually convert to paying jobs. Most agencies treat all businesses the same—we don't."
    },
    {
      question: "How much does it cost?",
      answer: "Our Growth 360 programs start at $695 per month and range up to $3,495 depending on your market size, competition, and goals. All programs include multiple services and are designed to deliver positive ROI within 90 days. Most collision shops see a 5-10x return on their marketing investment."
    }
  ],
  
  // Final CTA
  finalCtaHeadline: "Ready to Reduce Your Insurance Dependence?",
  finalCtaSubheadline: "Join collision shops that trust Auto Shop Digital to build direct customer pipelines and grow profitably."
};
