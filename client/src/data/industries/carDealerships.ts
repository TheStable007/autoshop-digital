import { IndustryPageData } from "@/components/templates/IndustryPageTemplate";
import { Users, TrendingDown, Target, Clock, DollarSign, AlertTriangle } from "lucide-react";
import { createElement } from "react";

export const carDealershipsData: IndustryPageData = {
  // SEO & Meta
  title: "Car Dealerships",
  metaDescription: "Digital marketing services for car dealerships. Increase service department revenue, attract more maintenance customers, and grow your fixed operations with proven marketing strategies.",
  slug: "car-dealerships",
  
  // Hero Section
  heroHeadline: "Digital Marketing That Drives Service Department Revenue",
  heroSubheadline: "Specialized marketing strategies that help car dealerships maximize service department profitability, retain customers after warranty expiration, and boost fixed operations revenue by an average of 185%.",
  heroImage: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=1920&q=80",
  
  // Industry Challenges
  challenges: [
    {
      icon: createElement(Users, { className: "h-12 w-12" }),
      title: "Customer Defection After Warranty",
      description: "Most dealerships lose 60-70% of service customers within 2-3 years of vehicle purchase as customers migrate to independent shops offering lower prices. This customer defection devastates service department revenue and eliminates opportunities for future vehicle sales."
    },
    {
      icon: createElement(TrendingDown, { className: "h-12 w-12" }),
      title: "Price Perception Challenges",
      description: "Dealership service departments are perceived as expensive compared to independent shops, making it difficult to retain price-sensitive customers. Without effective marketing that communicates value, expertise, and convenience, customers focus solely on price and choose cheaper alternatives."
    },
    {
      icon: createElement(Target, { className: "h-12 w-12" }),
      title: "Underutilized Service Capacity",
      description: "Many dealership service departments operate at 50-70% capacity during non-peak hours, representing significant lost revenue. Without effective marketing to fill service bays during slow periods, fixed costs remain high while revenue opportunities go unrealized."
    },
    {
      icon: createElement(Clock, { className: "h-12 w-12" }),
      title: "Appointment Scheduling Inefficiencies",
      description: "Customers expect convenient online scheduling and quick appointment availability, but many dealerships still rely on phone-based scheduling that creates friction and lost appointments. This convenience gap drives customers to independent shops with easier booking systems."
    },
    {
      icon: createElement(DollarSign, { className: "h-12 w-12" }),
      title: "Low Service Marketing Investment",
      description: "Most dealerships invest heavily in vehicle sales marketing but neglect service department marketing, treating fixed operations as an afterthought. This underinvestment leaves significant revenue on the table and allows independent shops to capture customers who purchased vehicles from your dealership."
    },
    {
      icon: createElement(AlertTriangle, { className: "h-12 w-12" }),
      title: "Poor Service-to-Sales Integration",
      description: "Service departments and sales departments often operate in silos, missing opportunities to leverage service customers for future vehicle sales and new vehicle buyers for ongoing service relationships. This lack of integration reduces customer lifetime value and overall dealership profitability."
    }
  ],
  
  // Solutions/Services
  solutions: [
    {
      title: "Service Department SEO",
      description: "Dominate local search results when customers search for maintenance and repair services for your brands. We optimize your service department's online presence to capture customers actively looking for oil changes, brake service, tire replacement, and major repairs for the specific vehicle brands you service.",
      benefits: [
        "Rank #1 for '[brand] service near me' and '[brand] dealership service [city]'",
        "Optimize for service-specific keywords like '[brand] oil change' and '[brand] brake repair'",
        "Target recall and warranty searches to capture manufacturer-required service",
        "Build citations on automotive directories and brand-specific networks",
        "Monthly SEO reports tracking service department search visibility",
        "Schema markup for services, certifications, reviews, and business information"
      ]
    },
    {
      title: "Google Business Profile Optimization",
      description: "Your Google Business Profile is the first thing customers see when searching for dealership service. We transform it into a powerful retention tool with professional photos, detailed service information, review management, and strategic posts that emphasize factory-trained technicians, genuine parts, and brand expertise.",
      benefits: [
        "Professional photos of service facility, equipment, and technicians",
        "Weekly posts highlighting service specials, maintenance tips, and customer stories",
        "Proactive review generation campaigns to build 5-star service reputation",
        "Review response within 24 hours addressing service concerns professionally",
        "Q&A management addressing service pricing, warranty, and scheduling questions",
        "Separate Google Business Profile optimization for service department"
      ]
    },
    {
      title: "Customer Retention Campaigns",
      description: "Prevent customer defection after warranty expiration with targeted retention campaigns that keep your dealership top-of-mind for ongoing maintenance and repairs. We implement automated email and SMS campaigns that nurture customer relationships and drive repeat service visits.",
      benefits: [
        "Automated service reminder campaigns based on mileage and time intervals",
        "Post-warranty retention campaigns emphasizing factory training and genuine parts",
        "Seasonal maintenance campaigns (winter prep, summer check-ups)",
        "Service special promotions targeting lapsed customers",
        "Birthday and vehicle anniversary campaigns building customer relationships",
        "Conversion tracking showing retention campaign ROI"
      ]
    }
  ],
  
  // Why Choose Us
  whyChooseUs: [
    {
      title: "Automotive Industry Specialists",
      description: "We exclusively serve automotive businesses and have deep experience with dealership service departments. We understand the unique challenges of retaining customers after warranty expiration, competing with independent shops on value rather than price, and maximizing fixed operations profitability."
    },
    {
      title: "Proven Track Record",
      description: "Our dealership clients see an average 185% increase in service department revenue within 12 months through improved customer retention, increased service appointments, and higher average repair orders. We've helped dozens of dealerships transform their service departments from cost centers into profit drivers."
    },
    {
      title: "Transparent Monthly Reporting",
      description: "You'll receive detailed monthly reports showing exactly how many service appointments, customer retention improvements, and revenue increases came from our marketing efforts. We track ROI down to the dollar so you know exactly what you're getting."
    },
    {
      title: "Turnkey Service",
      description: "We handle everything—from content creation and photo editing to review responses and retention campaign management. Your service department focuses on delivering exceptional customer experiences while we fill your bays with loyal customers who choose your dealership over independent shops."
    }
  ],
  
  // Case Study
  caseStudy: {
    businessName: "Premier Honda Service Center",
    businessType: "Franchise Dealership Service Department",
    location: "Denver, CO",
    quote: "We were losing customers to independent shops as soon as their warranties expired, and our service bays were empty during non-peak hours. Auto Shop Digital helped us build a strong online presence for our service department, implement retention campaigns that keep customers coming back, and fill our service capacity. Our fixed operations revenue has increased by $95,000 per month.",
    author: "Michael Torres",
    authorTitle: "Fixed Operations Director, Premier Honda",
    results: [
      { metric: "Increase in Service Revenue", value: "185%" },
      { metric: "Customer Retention Improvement", value: "145%" },
      { metric: "Average Monthly Revenue Increase", value: "$95,000" }
    ]
  },
  
  // Industry Overview
  industryOverview: {
    title: "Understanding Dealership Service Department Marketing",
    paragraphs: [
      "Car dealership service departments represent a critical but often underutilized profit center within the automotive retail industry. While vehicle sales generate headlines and commissions, service departments provide the consistent, high-margin revenue that sustains dealership profitability through market cycles. The service department market generates over $120 billion in annual revenue across franchise dealerships in the United States, yet most dealerships invest minimal resources in service department marketing, treating fixed operations as an afterthought compared to vehicle sales.",
      "Dealership service departments face unique challenges that independent repair shops don't encounter. Customers perceive dealerships as expensive, despite offering factory-trained technicians, genuine parts, and brand-specific expertise. This price perception drives customer defection after warranty expiration, with 60-70% of customers migrating to independent shops within 2-3 years of vehicle purchase. This customer loss devastates service department revenue and eliminates opportunities to build long-term relationships that lead to future vehicle sales.",
      "Digital marketing has become essential for dealership service departments seeking to retain customers, fill service capacity, and maximize fixed operations profitability. Research shows that 87% of vehicle owners research service options online before scheduling maintenance, and 76% of local service searches on mobile devices result in a phone call or appointment within 24 hours. For dealership service departments, this means that Google Business Profile optimization, local SEO, customer retention campaigns, and reputation management directly impact service appointment volume, customer retention rates, and ultimately fixed operations revenue and profitability."
    ]
  },
  
  // Process
  process: {
    title: "Our Proven Marketing Process for Dealership Service Departments",
    description: "We've refined a systematic approach that delivers consistent results for franchise dealership service operations.",
    steps: [
      {
        number: 1,
        title: "Service Department Audit",
        description: "We analyze your service department's current online presence, including website performance, search rankings, Google Business Profile optimization, review profiles, customer retention rates, and competitor positioning. This audit identifies gaps and opportunities specific to your brand and local market, creating a baseline for measuring improvement in service revenue and customer retention."
      },
      {
        number: 2,
        title: "Custom Retention Strategy",
        description: "Based on audit findings, we develop a tailored marketing strategy focused on customer retention, service capacity utilization, and revenue growth. This includes brand-specific keyword targeting, automated retention campaigns, review generation systems, and local SEO tactics designed to keep your customers choosing your service department over independent shops after warranty expiration."
      },
      {
        number: 3,
        title: "Implementation & Optimization",
        description: "Our team executes the strategy with precision, optimizing your service department's Google Business Profile, building local citations, creating SEO-optimized content about brand-specific service expertise, implementing automated retention campaigns, and improving your service department's online reputation. We focus on the factors that matter most: customer retention, service appointment volume, and average repair order value."
      },
      {
        number: 4,
        title: "Ongoing Management & Reporting",
        description: "Service department marketing requires continuous optimization. We monitor performance, adjust retention campaigns based on data, respond to service reviews professionally, update content, and provide transparent monthly reporting showing exactly how your investment is driving service appointments, customer retention, and revenue. You'll see clear metrics on retention rates, service appointment volume, average repair order, and fixed operations revenue growth."
      }
    ]
  },
  
  // Common Mistakes
  commonMistakes: {
    title: "Common Marketing Mistakes Dealership Service Departments Make",
    description: "Avoid these costly errors that prevent dealerships from maximizing service department profitability.",
    mistakes: [
      {
        title: "Neglecting Service Department Marketing",
        description: "Most dealerships invest heavily in vehicle sales marketing but treat service department marketing as an afterthought. This underinvestment allows independent shops to capture customers who purchased vehicles from your dealership, devastating long-term profitability and customer lifetime value.",
        solution: "We create dedicated service department marketing campaigns separate from sales marketing, with specific budgets, strategies, and KPIs focused on customer retention, service appointment volume, and fixed operations revenue growth. This ensures your service department receives the marketing investment necessary to compete effectively against independent shops."
      },
      {
        title: "No Post-Warranty Retention Strategy",
        description: "Many dealerships fail to implement systematic retention campaigns targeting customers approaching warranty expiration. Without proactive communication emphasizing factory training, genuine parts, and brand expertise, customers default to price shopping and choose cheaper independent shops.",
        solution: "We implement automated retention campaigns that engage customers 6-12 months before warranty expiration, educating them about the value of dealership service (factory-trained technicians, genuine parts, warranty protection) and offering competitive service pricing. This prevents customer defection and maintains service department revenue as vehicles age."
      },
      {
        title: "Poor Service Review Management",
        description: "Dealership service departments often have fewer online reviews than independent shops or fail to respond to negative service reviews professionally. This creates trust barriers and allows competitors with better review profiles to capture customers even when you offer superior service quality.",
        solution: "We implement systematic review generation campaigns specifically for service customers, making it easy for satisfied customers to leave 5-star reviews on Google, Yelp, and DealerRater. We also respond to all service reviews within 24 hours, addressing concerns professionally and showcasing your commitment to customer satisfaction."
      },
      {
        title: "Generic Service Department Content",
        description: "Many dealership websites use generic service content that doesn't emphasize brand-specific expertise, factory training, genuine parts advantages, or warranty protection. This fails to differentiate your service department from independent shops and doesn't justify premium pricing.",
        solution: "We create detailed, SEO-optimized content that explains the specific advantages of dealership service for your brands—factory-trained technicians, genuine OEM parts, brand-specific diagnostic equipment, warranty protection, and recall expertise. This educates customers, builds trust, and justifies your service pricing."
      }
    ]
  },
  
  // Benefits Breakdown
  benefitsBreakdown: {
    title: "How Our Marketing Drives Measurable Results for Dealership Service Departments",
    description: "Here's exactly how our strategies translate into improved customer retention, increased service appointments, and sustainable fixed operations revenue growth.",
    benefits: [
      {
        title: "Improved Customer Retention Rates",
        description: "We implement automated retention campaigns that engage customers before warranty expiration, educate them about dealership service advantages, and offer competitive service pricing. This prevents customer defection to independent shops and maintains service department revenue as vehicles age.",
        impact: "Our dealership clients typically see 40-60% improvement in post-warranty customer retention rates, translating to thousands of additional service appointments and hundreds of thousands in additional annual revenue."
      },
      {
        title: "Increased Service Appointment Volume",
        description: "We optimize your service department's Google Business Profile and website to rank prominently when customers search for brand-specific service, maintenance, and repairs. Higher visibility means more service appointments from both existing customers and conquest opportunities from other dealerships.",
        impact: "Dealership service departments using our marketing strategies see 150-250% increase in organic service appointment requests within 12 months, filling service capacity and maximizing fixed operations profitability."
      },
      {
        title: "Higher Average Repair Orders",
        description: "By creating educational content about recommended maintenance, recall campaigns, and preventive service, we help customers understand the value of comprehensive service rather than just oil changes. This increases average repair order value and service department profitability.",
        impact: "Our clients see 25-40% increase in average repair order value as customers approve more recommended services based on trust built through educational marketing content and strong online reputation."
      },
      {
        title: "Better Service Capacity Utilization",
        description: "We implement targeted campaigns to fill service bays during non-peak hours, offering strategic service specials and convenient scheduling options. This maximizes service capacity utilization and spreads customer demand more evenly throughout the week.",
        impact: "Dealerships using our capacity optimization strategies increase service bay utilization from 50-70% to 80-95%, generating significant additional revenue without increasing fixed costs."
      }
    ]
  },
  
  // FAQ
  faqs: [
    {
      question: "How long does it take to see results from dealership service department marketing?",
      answer: "Most dealerships see measurable improvements within 60-90 days. You'll notice increased service appointment requests within the first month as we optimize your Google Business Profile and launch retention campaigns. Customer retention rates typically improve within 3-4 months as automated campaigns engage customers approaching warranty expiration. Full results (150-250% service appointment increase) are typically achieved within 12 months."
    },
    {
      question: "Can you help us retain customers after warranty expiration?",
      answer: "Absolutely. Post-warranty customer retention is a core focus of our dealership service marketing strategy. We implement automated retention campaigns that engage customers 6-12 months before warranty expiration, educating them about dealership service advantages (factory training, genuine parts, warranty protection), offering competitive service pricing, and building relationships that keep customers choosing your service department over independent shops. Our clients typically see 40-60% improvement in post-warranty retention rates."
    },
    {
      question: "How do you help dealership service departments compete with independent shops on price perception?",
      answer: "We shift the conversation from price to value through educational content that emphasizes your unique advantages—factory-trained technicians, genuine OEM parts, brand-specific diagnostic equipment, warranty protection, and recall expertise. We also showcase customer testimonials, build strong review profiles, and implement competitive service pricing promotions that demonstrate your commitment to fair pricing. This value-based marketing attracts customers who appreciate quality service rather than just the lowest price."
    },
    {
      question: "Do you create separate marketing for service departments vs. vehicle sales?",
      answer: "Yes, service department marketing requires distinct strategies, messaging, and campaigns separate from vehicle sales marketing. We create dedicated service department campaigns with specific budgets, keyword targeting (brand-specific service searches), retention campaigns, review generation focused on service experiences, and content emphasizing service expertise. This ensures your service department receives appropriate marketing investment rather than being an afterthought to sales marketing."
    },
    {
      question: "What kind of ROI can dealership service departments expect from digital marketing?",
      answer: "Our dealership service clients typically see 6:1 to 10:1 return on marketing investment within 12 months. For example, a dealership investing $2,500/month in service marketing often generates an additional $15,000-$25,000 in monthly service revenue from improved retention, increased appointments, and higher average repair orders. Given the high-margin nature of service work, even modest improvements in customer retention and appointment volume deliver significant ROI. We provide detailed monthly reporting showing exactly how many service appointments, retention improvements, and revenue increases came from our marketing efforts."
    },
    {
      question: "Can you help us fill service bays during slow periods?",
      answer: "Yes, service capacity optimization is a key component of our dealership marketing strategy. We implement targeted campaigns to fill service bays during non-peak hours, offering strategic service specials, convenient scheduling options, and promotional campaigns that drive appointments during typically slow periods. This maximizes service bay utilization, spreads customer demand more evenly, and generates additional revenue without increasing fixed costs."
    }
  ],
  
  // Final CTA
  finalCtaHeadline: "Ready to Maximize Your Service Department Revenue?",
  finalCtaSubheadline: "Schedule a free discovery call to learn how our dealership service marketing strategies can improve customer retention and increase fixed operations revenue by 150-250% within 12 months."
};
