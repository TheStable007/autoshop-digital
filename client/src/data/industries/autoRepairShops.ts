import { IndustryPageData } from "@/components/templates/IndustryPageTemplate";
import { Wrench, TrendingDown, Users, Target, DollarSign, Calendar } from "lucide-react";
import { createElement } from "react";

export const autoRepairShopsData: IndustryPageData = {
  // SEO & Meta
  title: "Auto Repair Shops",
  metaDescription: "Digital marketing services specifically designed for auto repair shops. Increase customer bookings, improve online visibility, and grow your repair business with proven strategies.",
  slug: "auto-repair-shops",
  
  // Hero Section
  heroHeadline: "Digital Marketing That Drives More Customers to Your Auto Repair Shop",
  heroSubheadline: "Specialized marketing strategies that help auto repair shops dominate local search, attract quality customers, and increase service bookings by an average of 3x.",
  heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80",
  
  // Industry Challenges
  challenges: [
    {
      icon: createElement(TrendingDown, { className: "h-12 w-12" }),
      title: "Inconsistent Customer Flow",
      description: "Slow periods hurt cash flow and make it difficult to retain skilled technicians. You need a steady stream of quality customers year-round."
    },
    {
      icon: createElement(Users, { className: "h-12 w-12" }),
      title: "Price-Shopping Customers",
      description: "Customers comparing quotes from multiple shops often choose based on price alone, not quality or expertise, hurting your margins."
    },
    {
      icon: createElement(Target, { className: "h-12 w-12" }),
      title: "Limited Online Visibility",
      description: "When locals search for auto repair services, your competitors appear first. You're losing customers before they even know you exist."
    },
    {
      icon: createElement(DollarSign, { className: "h-12 w-12" }),
      title: "Low Customer Retention",
      description: "One-time customers don't return for regular maintenance, forcing you to constantly acquire new customers at high costs."
    },
    {
      icon: createElement(Calendar, { className: "h-12 w-12" }),
      title: "Last-Minute Cancellations",
      description: "Empty bays from no-shows and cancellations waste your team's time and reduce daily revenue potential."
    },
    {
      icon: createElement(Wrench, { className: "h-12 w-12" }),
      title: "Difficulty Showcasing Expertise",
      description: "Your years of experience and certifications don't translate online, making it hard to differentiate from competitors."
    }
  ],
  
  // Solutions/Services
  solutions: [
    {
      title: "Local SEO Domination",
      description: "Get your shop ranking #1 when customers search for auto repair services in your area. We optimize your Google Business Profile, local citations, and website to ensure you're the first shop they see.",
      benefits: [
        "Rank in the top 3 for \"auto repair near me\" searches",
        "Optimize for high-intent keywords like \"brake repair\" and \"oil change\"",
        "Build local citations across 50+ directories",
        "Monthly local SEO reports showing ranking improvements"
      ]
    },
    {
      title: "Google Business Profile Management",
      description: "Your Google Business Profile is your digital storefront. We manage it completely—posting updates, responding to reviews, adding photos, and optimizing every element to drive more calls and directions requests.",
      benefits: [
        "Professional weekly posts showcasing services and specials",
        "Review monitoring and response within 24 hours",
        "High-quality photos of your shop, team, and work",
        "Q&A management to address common customer questions"
      ]
    },
    {
      title: "Targeted Google Ads Campaigns",
      description: "Capture customers actively searching for auto repair services right now. Our Google Ads campaigns target high-intent keywords and geographic areas to deliver qualified leads at a predictable cost.",
      benefits: [
        "Ads appear when customers search for your services",
        "Geographic targeting to reach customers near your shop",
        "Call tracking to measure campaign effectiveness",
        "Continuous optimization to lower cost per lead"
      ]
    }
  ],
  
  // Why Choose Us
  whyChooseUs: [
    {
      title: "Automotive Industry Specialists",
      description: "We exclusively serve auto-related businesses. We understand your customers, your competition, and the unique challenges of marketing repair services."
    },
    {
      title: "Proven Results",
      description: "Our clients see an average 3x increase in customer bookings within 90 days. We've helped over 200 auto repair shops grow their businesses."
    },
    {
      title: "Transparent Reporting",
      description: "Monthly reports show exactly what we're doing, what's working, and how many new customers you're getting. No smoke and mirrors—just real results."
    },
    {
      title: "Done-For-You Service",
      description: "We handle everything so you can focus on running your shop. From content creation to review responses, we've got you covered."
    }
  ],
  
  // Case Study
  caseStudy: {
    businessName: "Precision Auto Care",
    businessType: "Independent Auto Repair Shop",
    location: "Los Angeles, CA",
    quote: "Before Auto Shop Digital, we were struggling with inconsistent customer flow. Now we're booked 2-3 weeks out and had to hire two more technicians. The ROI has been incredible.",
    author: "Mike Rodriguez",
    authorTitle: "Owner, Precision Auto Care",
    results: [
      { metric: "Increase in Monthly Customers", value: "287%" },
      { metric: "Google Business Profile Views", value: "+450%" },
      { metric: "Average Monthly Revenue Growth", value: "$18,500" }
    ]
  },
  
  // FAQ
  faqs: [
    {
      question: "How long does it take to see results?",
      answer: "Most auto repair shops see increased calls and bookings within the first 30 days. Significant ranking improvements typically occur within 60-90 days as our SEO strategies take effect."
    },
    {
      question: "Do you work with shops that already have a website?",
      answer: "Yes! We can optimize your existing website or build a new one if needed. We'll audit your current site and recommend the best path forward."
    },
    {
      question: "What makes you different from other marketing agencies?",
      answer: "We exclusively serve auto-related businesses, so we understand your industry deeply. We know what keywords convert, what customers are searching for, and how to position your shop against competitors."
    },
    {
      question: "How much does it cost?",
      answer: "Our Growth 360 programs range from $1,495 to $3,495 per month depending on your market size and goals. All programs include multiple services and are designed to deliver positive ROI within 90 days."
    },
    {
      question: "Do I need to sign a long-term contract?",
      answer: "We offer month-to-month agreements because we're confident in our results. Most clients stay with us for years because the ROI is so strong."
    },
    {
      question: "Will I have to create content or manage anything?",
      answer: "No. We handle everything—content creation, posting, review responses, ad management, and reporting. You just focus on servicing the new customers we send your way."
    }
  ],
  
  // Final CTA
  finalCtaHeadline: "Ready to Fill Your Service Bays?",
  finalCtaSubheadline: "Schedule a free discovery call to learn how we can help your auto repair shop attract more customers and increase revenue."
};
