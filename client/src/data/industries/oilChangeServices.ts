import { IndustryPageData } from "@/components/templates/IndustryPageTemplate";
import { Wrench, TrendingDown, Users, Target, DollarSign, Clock } from "lucide-react";
import { createElement } from "react";

export const oilChangeServicesData: IndustryPageData = {
  // SEO & Meta
  title: "Oil Change Services",
  metaDescription: "Digital marketing services designed for quick lube shops and oil change centers. Attract more customers, increase service appointments, and grow your oil change business with proven marketing strategies.",
  slug: "oil-change-services",
  
  // Hero Section
  heroHeadline: "Digital Marketing That Keeps Your Bays Full of Oil Change Customers",
  heroSubheadline: "Specialized marketing strategies that help quick lube shops and oil change centers dominate local search, increase service appointments, and boost revenue by an average of 245%.",
  heroImage: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1920&q=80",
  
  // Industry Challenges
  challenges: [
    {
      icon: createElement(TrendingDown, { className: "h-12 w-12" }),
      title: "Intense Price Competition",
      description: "National chains like Jiffy Lube and Valvoline offer aggressive pricing and coupons, forcing independent shops to compete on price rather than service quality, expertise, and customer relationships."
    },
    {
      icon: createElement(Users, { className: "h-12 w-12" }),
      title: "Customer Loyalty Challenges",
      description: "Oil changes are routine maintenance, and customers often shop around for the best deal or most convenient location. Building loyalty and repeat business requires consistent communication and superior service."
    },
    {
      icon: createElement(Target, { className: "h-12 w-12" }),
      title: "Low Online Visibility",
      description: "When customers search for 'oil change near me,' national chains dominate search results, capturing customers before they discover your local shop. Without strong local SEO, you're invisible to high-intent customers."
    },
    {
      icon: createElement(DollarSign, { className: "h-12 w-12" }),
      title: "Difficulty Upselling Services",
      description: "Customers come in for a basic oil change but don't know about your air filter replacement, fluid top-offs, tire rotation, or other services that could increase ticket value and vehicle health."
    },
    {
      icon: createElement(Clock, { className: "h-12 w-12" }),
      title: "Appointment Scheduling Gaps",
      description: "Slow periods and empty bays hurt profitability. Without a steady flow of appointments, you face staffing challenges and revenue volatility that make it hard to plan and grow your business."
    },
    {
      icon: createElement(Wrench, { className: "h-12 w-12" }),
      title: "Limited Brand Awareness",
      description: "Independent quick lube shops struggle to compete with the brand recognition of national chains, even when offering faster service, better quality oil, and more personalized customer care."
    }
  ],
  
  // Solutions/Services
  solutions: [
    {
      title: "Local SEO for Quick Lube Shops",
      description: "Dominate local search results when customers search for oil change services in your area. We optimize your online presence to capture high-intent customers actively looking for fast, convenient oil changes right now.",
      benefits: [
        "Rank #1 for 'oil change near me' and 'quick lube [city]'",
        "Optimize for service-specific keywords like 'synthetic oil change' and 'diesel oil change'",
        "Target vehicle-specific searches like 'Honda oil change' and 'truck oil change'",
        "Build citations on automotive directories and service review sites",
        "Monthly SEO reports tracking rankings and organic traffic growth",
        "Schema markup for services, pricing, reviews, and business hours"
      ]
    },
    {
      title: "Google Business Profile Optimization",
      description: "Your Google Business Profile is the first thing customers see when searching for oil change services. We transform it into a powerful lead generation tool with professional photos, regular updates, review management, and strategic posts that showcase your speed and expertise.",
      benefits: [
        "Professional photos of your facility, service bays, and team",
        "Weekly posts highlighting oil change specials, service packages, and promotions",
        "Proactive review generation campaigns to build 5-star reputation",
        "Review response within 24 hours to all customer feedback",
        "Q&A management addressing pricing, oil types, and service questions",
        "Google Business Profile insights and performance tracking"
      ]
    },
    {
      title: "Targeted Google Ads for Oil Changes",
      description: "Capture customers at the exact moment they need an oil change. Our Google Ads campaigns target high-intent keywords and geographic areas to deliver qualified leads—people actively searching for quick, convenient oil change services in your area.",
      benefits: [
        "Geographic targeting within your service radius",
        "Call-only ads for mobile users needing immediate service",
        "Remarketing to website visitors who didn't book appointments",
        "Conversion tracking for calls, form fills, and appointments",
        "Monthly optimization to reduce cost per lead by 30-50%",
        "Seasonal campaigns for winter prep and summer road trips"
      ]
    }
  ],
  
  // Why Choose Us
  whyChooseUs: [
    {
      title: "Quick Lube Industry Specialists",
      description: "We exclusively serve automotive businesses and have deep experience with oil change centers. We understand service bay efficiency, customer flow optimization, upsell opportunities, and the unique challenges of marketing routine maintenance services."
    },
    {
      title: "Proven Track Record",
      description: "Our quick lube clients see an average 245% increase in service appointments within 6 months. We've helped dozens of independent oil change shops compete effectively against national chains and build profitable, sustainable businesses."
    },
    {
      title: "Transparent Monthly Reporting",
      description: "You'll receive detailed monthly reports showing exactly how many calls, appointment requests, and oil changes came from our marketing efforts. We track ROI down to the dollar so you know exactly what you're getting."
    },
    {
      title: "Turnkey Service",
      description: "We handle everything—from content creation and photo editing to review responses and ad management. You focus on delivering fast, quality oil changes while we keep your bays full of customers."
    }
  ],
  
  // Case Study
  caseStudy: {
    businessName: "Express Lube & Auto",
    businessType: "Quick Lube & Oil Change Center",
    location: "Austin, TX",
    quote: "We were constantly running Groupon deals just to fill our bays, which killed our margins. Auto Shop Digital helped us rank #1 for oil change searches in Austin and build a steady stream of full-price customers. Now we're booked solid without discounting, and our average ticket is up 55% because customers trust us for additional services.",
    author: "David Martinez",
    authorTitle: "Owner, Express Lube & Auto",
    results: [
      { metric: "Increase in Service Appointments", value: "245%" },
      { metric: "Growth in Average Ticket Value", value: "55%" },
      { metric: "Average Monthly Revenue Increase", value: "$32,000" }
    ]
  },
  
  // Industry Overview
  industryOverview: {
    title: "Understanding the Quick Lube Industry",
    paragraphs: [
      "The quick lube and oil change industry is a cornerstone of the automotive aftermarket, generating over $9 billion in annual revenue across more than 20,000 service centers in the United States. This industry serves millions of vehicle owners who need routine oil changes, fluid top-offs, filter replacements, and basic maintenance services. Independent quick lube shops face intense competition from national chains, dealership service departments, and big-box retailers, making effective marketing essential for survival and growth.",
      "Quick lube shops operate in a unique business environment characterized by high customer frequency (oil changes every 3-6 months), price-sensitive customers, and the challenge of building loyalty in a commoditized service category. Unlike specialized repairs, oil changes are routine maintenance that customers often view as interchangeable, creating opportunities for shops that can differentiate on speed, convenience, quality, and customer experience.",
      "Digital marketing has become the primary driver of customer acquisition for quick lube shops. Research shows that 89% of consumers search online for oil change services before visiting a shop, and 78% of local oil change searches on mobile devices result in a phone call or visit within 24 hours. For quick lube shops, this means that Google Business Profile optimization, local SEO, and targeted advertising directly impact appointment volume, bay utilization, and ultimately revenue and profitability."
    ]
  },
  
  // Process
  process: {
    title: "Our Proven Marketing Process for Quick Lube Shops",
    description: "We've refined a systematic approach that delivers consistent results for oil change centers and quick lube shops.",
    steps: [
      {
        number: 1,
        title: "Comprehensive Digital Audit",
        description: "We analyze your current online presence, including website performance, search rankings, Google Business Profile optimization, review profiles, and competitor positioning. This audit identifies gaps and opportunities specific to your local market and creates a baseline for measuring improvement."
      },
      {
        number: 2,
        title: "Custom Strategy Development",
        description: "Based on audit findings, we develop a tailored marketing strategy that addresses your specific challenges and goals. This includes keyword targeting for oil change searches, review generation systems, and local SEO tactics designed to dominate your service area for high-intent searches like 'oil change near me' and 'quick lube [city]'."
      },
      {
        number: 3,
        title: "Implementation & Optimization",
        description: "Our team executes the strategy with precision, optimizing your Google Business Profile, building local citations, creating SEO-optimized content about oil types and services, and implementing technical improvements to your website. We focus on the factors that matter most for quick lube shops: local pack rankings, review quantity and quality, and mobile user experience."
      },
      {
        number: 4,
        title: "Ongoing Management & Reporting",
        description: "Digital marketing requires continuous optimization. We monitor performance, adjust strategies based on data, respond to reviews, update content, and provide transparent monthly reporting showing exactly how your investment is driving calls, appointments, and revenue. You'll see clear metrics on search visibility, website traffic, phone calls, and customer acquisition cost."
      }
    ]
  },
  
  // Common Mistakes
  commonMistakes: {
    title: "Common Marketing Mistakes Quick Lube Shops Make",
    description: "Avoid these costly errors that prevent oil change centers from reaching their full potential.",
    mistakes: [
      {
        title: "Competing Only on Price",
        description: "Many quick lube shops try to compete with national chains solely on oil change pricing, leading to razor-thin margins and unsustainable business models. This race to the bottom ignores the value of speed, convenience, quality oil, and customer service.",
        solution: "We help you market your complete value proposition—fast service, quality synthetic oil options, convenient location, no appointment necessary, and expert technicians. By emphasizing speed and convenience rather than just price, you attract customers willing to pay for value and build higher-margin, loyal customer relationships."
      },
      {
        title: "No Customer Retention System",
        description: "Quick lube shops often provide excellent service but have no system for bringing customers back for their next oil change in 3-6 months. This allows customers to forget about you and shop around for the best deal next time.",
        solution: "We implement email marketing and SMS reminder campaigns that notify customers when their next oil change is due. Automated reminders, exclusive customer loyalty offers, and seasonal maintenance tips keep you top-of-mind and ensure customers return to you instead of shopping around."
      },
      {
        title: "Poor Google Business Profile Management",
        description: "Quick lube shops often create a Google Business Profile but fail to optimize it with complete service information, photos, regular posts about promotions, or responses to reviews. This results in lower local pack rankings and lost opportunities to showcase your speed and expertise.",
        solution: "We fully optimize your Google Business Profile with detailed service listings, high-quality photos of your facility and team, weekly posts about oil change specials and service packages, and prompt responses to all reviews. This signals authority to Google and builds trust with potential customers."
      },
      {
        title: "Ignoring Upsell Opportunities",
        description: "Many quick lube shops focus solely on marketing basic oil changes, missing opportunities to promote higher-margin services like synthetic oil upgrades, air filter replacements, fluid flushes, and tire rotations that increase ticket value.",
        solution: "We create marketing content and campaigns that educate customers about the benefits of synthetic oil, the importance of air filter replacement, and the value of comprehensive vehicle maintenance. This increases average ticket value by 40-60% as customers add services to their basic oil change."
      }
    ]
  },
  
  // Benefits Breakdown
  benefitsBreakdown: {
    title: "How Our Marketing Drives Measurable Results for Quick Lube Shops",
    description: "Here's exactly how our strategies translate into more appointments, higher ticket values, and sustainable business growth.",
    benefits: [
      {
        title: "Increased Local Search Visibility",
        description: "We optimize your Google Business Profile and website to rank prominently when customers search for 'oil change near me,' 'quick lube [city],' or specific oil types and services. Higher visibility means more website visits and phone calls from customers actively looking for oil change services.",
        impact: "Our quick lube clients typically see a 200-300% increase in organic search traffic within 6 months, translating directly to more appointment requests and walk-in customers."
      },
      {
        title: "More Positive Reviews & Social Proof",
        description: "We implement systematic review generation campaigns that make it easy for satisfied customers to leave 5-star reviews on Google, Yelp, and Facebook. More reviews improve your search rankings and build trust with potential customers comparing oil change shops.",
        impact: "Quick lube shops with 50+ positive reviews convert 3x more website visitors into customers compared to shops with fewer than 10 reviews. We help you build that critical mass of social proof."
      },
      {
        title: "Higher Average Ticket Value",
        description: "By promoting your full range of services (synthetic oil, air filter replacement, fluid top-offs, tire rotation), we educate customers about the value of comprehensive vehicle maintenance. This increases upsell opportunities and average transaction value.",
        impact: "Our clients see average ticket values increase by 40-60% as customers add synthetic oil upgrades, filter replacements, and other services to their basic oil change instead of just getting the cheapest option."
      },
      {
        title: "Customer Retention & Repeat Business",
        description: "Our automated email and SMS reminder campaigns ensure customers return to you for their next oil change instead of shopping around. Loyalty programs and exclusive offers build long-term relationships and predictable recurring revenue.",
        impact: "Quick lube shops using our retention campaigns see 65-80% of customers return for their next oil change, compared to industry average of 30-40%, dramatically reducing customer acquisition costs."
      }
    ]
  },
  
  // FAQ
  faqs: [
    {
      question: "How long does it take to see results from quick lube marketing?",
      answer: "Most quick lube shops see measurable improvements within 30-60 days. You'll notice increased phone calls and walk-in customers within the first month as we optimize your Google Business Profile and launch targeted ads. Organic search rankings typically improve significantly within 3-4 months, with full results (200-300% traffic increase) achieved within 6 months."
    },
    {
      question: "Can you help us compete against national chains like Jiffy Lube and Valvoline?",
      answer: "Absolutely. While national chains have brand recognition, they can't match your local expertise, personalized service, and community connections. We help you dominate local search results in your specific service area, showcase your superior customer service through reviews and content, and target customers who value speed and convenience over the lowest price. Many of our quick lube clients successfully compete against and even outperform national chains in their local markets."
    },
    {
      question: "How do you help quick lube shops increase average ticket value?",
      answer: "We promote your complete service offering—synthetic oil upgrades, air filter replacement, fluid top-offs, tire rotation, and other maintenance services—through website content, Google Business Profile posts, and targeted advertising. We also create educational content that explains the benefits of synthetic oil and preventive maintenance, making customers more likely to add services to their basic oil change."
    },
    {
      question: "Do you handle customer retention and reminder campaigns?",
      answer: "Yes, customer retention is a core part of our quick lube marketing strategy. We implement automated email and SMS campaigns that remind customers when their next oil change is due (based on mileage or time interval). We also send seasonal maintenance tips, exclusive loyalty offers, and service specials to keep you top-of-mind and ensure customers return to you instead of shopping around."
    },
    {
      question: "What kind of ROI can quick lube shops expect from digital marketing?",
      answer: "Our quick lube clients typically see 4:1 to 7:1 return on marketing investment within 6 months. For example, a shop investing $1,500/month in our services often generates an additional $6,000-$10,000 in monthly revenue from increased oil changes and service appointments. We provide detailed monthly reporting showing exactly how many calls, appointments, and services came from our marketing efforts so you can track ROI precisely."
    },
    {
      question: "Can you help us reduce reliance on Groupon and discount coupons?",
      answer: "Yes, that's one of our primary goals. Many quick lube shops rely on Groupon, daily deal sites, and aggressive couponing to fill their bays, which destroys margins and attracts price-sensitive customers who don't return at full price. We help you build a steady stream of full-price customers through local SEO, review generation, and targeted advertising, allowing you to eliminate or significantly reduce discounting while maintaining or increasing appointment volume."
    }
  ],
  
  // Final CTA
  finalCtaHeadline: "Ready to Fill Your Bays with More Oil Change Customers?",
  finalCtaSubheadline: "Schedule a free discovery call to learn how our quick lube marketing strategies can increase your service appointments and revenue by 200-300% within 6 months."
};
