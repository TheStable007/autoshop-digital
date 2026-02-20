import { IndustryPageData } from "@/components/templates/IndustryPageTemplate";
import { Wrench, TrendingDown, Users, Target, DollarSign, Clock } from "lucide-react";
import { createElement } from "react";

export const tireShopsData: IndustryPageData = {
  // SEO & Meta
  title: "Tire Shops",
  metaDescription: "Digital marketing services designed for tire shops and tire retailers. Increase tire sales, attract more customers, and grow your tire business with proven marketing strategies that drive measurable results.",
  slug: "tire-shops",
  
  // Hero Section
  heroHeadline: "Digital Marketing That Drives More Tire Sales and Service Appointments",
  heroSubheadline: "Specialized marketing strategies that help tire shops dominate local search, increase seasonal tire sales, and boost service appointments by an average of 285%.",
  heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80",
  
  // Industry Challenges
  challenges: [
    {
      icon: createElement(TrendingDown, { className: "h-12 w-12" }),
      title: "Seasonal Revenue Fluctuations",
      description: "Tire sales spike during specific seasons (winter, spring), creating feast-or-famine revenue cycles that make it difficult to maintain consistent cash flow and staffing levels year-round."
    },
    {
      icon: createElement(Users, { className: "h-12 w-12" }),
      title: "Price-Driven Competition",
      description: "Customers often shop solely on tire price, comparing quotes from multiple shops and online retailers, forcing you to compete on margins rather than service quality and expertise."
    },
    {
      icon: createElement(Target, { className: "h-12 w-12" }),
      title: "Low Online Visibility",
      description: "When customers search for 'tire shop near me' or 'tire installation,' national chains and online retailers dominate search results, capturing customers before they discover your local shop."
    },
    {
      icon: createElement(DollarSign, { className: "h-12 w-12" }),
      title: "Difficulty Upselling Services",
      description: "Customers come in for tires but don't know about your alignment, balancing, rotation, or other services that could increase ticket value and build long-term relationships."
    },
    {
      icon: createElement(Clock, { className: "h-12 w-12" }),
      title: "Customer Retention Challenges",
      description: "Tire purchases happen infrequently (every 3-5 years), making it hard to stay top-of-mind and bring customers back for routine maintenance, rotations, and seasonal changeovers."
    },
    {
      icon: createElement(Wrench, { className: "h-12 w-12" }),
      title: "Limited Brand Awareness",
      description: "Independent tire shops struggle to compete with the brand recognition of national chains like Discount Tire, Tire Rack, and Les Schwab, even when offering better service and competitive pricing."
    }
  ],
  
  // Solutions/Services
  solutions: [
    {
      title: "Local SEO for Tire Shops",
      description: "Dominate local search results when customers search for tire services in your area. We optimize your online presence to capture high-intent customers actively looking for tire sales, installation, and related services right now.",
      benefits: [
        "Rank #1 for 'tire shop near me' and 'tire installation [city]'",
        "Optimize for seasonal keywords like 'winter tires' and 'all-season tires'",
        "Target service-specific searches like 'tire rotation' and 'wheel alignment'",
        "Build citations on automotive directories and tire manufacturer sites",
        "Monthly SEO reports tracking rankings and organic traffic growth",
        "Schema markup for services, products, reviews, and business information"
      ]
    },
    {
      title: "Google Business Profile Optimization",
      description: "Your Google Business Profile is the first thing customers see when searching for tire services. We transform it into a powerful lead generation tool with professional photos, regular updates, review management, and strategic posts that showcase your inventory and expertise.",
      benefits: [
        "Professional photos of your shop, tire inventory, and service bays",
        "Weekly posts highlighting tire promotions, seasonal specials, and new arrivals",
        "Proactive review generation campaigns to build 5-star reputation",
        "Review response within 24 hours to all customer feedback",
        "Q&A management addressing tire sizing, pricing, and service questions",
        "Google Business Profile insights and performance tracking"
      ]
    },
    {
      title: "Targeted Google Ads for Tire Sales",
      description: "Capture customers at the exact moment they need new tires or tire services. Our Google Ads campaigns target high-intent keywords and geographic areas to deliver qualified leads—people actively searching for tire solutions in your service area.",
      benefits: [
        "Seasonal tire campaigns (winter tire prep, summer tire sales)",
        "Geographic targeting within your service radius",
        "Call-only ads for mobile users needing immediate tire service",
        "Remarketing to website visitors who didn't convert",
        "Conversion tracking for calls, form fills, and appointments",
        "Monthly optimization to reduce cost per lead by 30-50%"
      ]
    }
  ],
  
  // Why Choose Us
  whyChooseUs: [
    {
      title: "Tire Industry Specialists",
      description: "We exclusively serve automotive businesses and have deep experience with tire shops. We understand seasonal sales cycles, tire manufacturer programs, competitive dynamics, and the unique challenges of marketing tire services."
    },
    {
      title: "Proven Track Record",
      description: "Our tire shop clients see an average 285% increase in service appointments and tire sales within 6 months. We've helped dozens of independent tire retailers compete effectively against national chains and grow profitable, sustainable businesses."
    },
    {
      title: "Transparent Monthly Reporting",
      description: "You'll receive detailed monthly reports showing exactly how many calls, appointment requests, and tire sales came from our marketing efforts. We track ROI down to the dollar so you know exactly what you're getting."
    },
    {
      title: "Turnkey Service",
      description: "We handle everything—from content creation and photo editing to review responses and ad management. You focus on delivering exceptional tire service while we fill your bays with quality customers."
    }
  ],
  
  // Case Study
  caseStudy: {
    businessName: "Valley Tire & Auto",
    businessType: "Independent Tire Shop & Service Center",
    location: "Phoenix, AZ",
    quote: "We were losing customers to Discount Tire and online retailers every single day. Auto Shop Digital helped us dominate local search and showcase our superior service. Now we're booked solid with tire installations and our average ticket is 40% higher because customers trust us for alignments and other services too.",
    author: "Mike Thompson",
    authorTitle: "Owner, Valley Tire & Auto",
    results: [
      { metric: "Increase in Tire Sales", value: "285%" },
      { metric: "Growth in Service Revenue", value: "198%" },
      { metric: "Average Monthly Revenue Increase", value: "$45,000" }
    ]
  },
  
  // Industry Overview
  industryOverview: {
    title: "Understanding the Tire Shop Industry",
    paragraphs: [
      "The tire retail and service industry is a vital segment of the automotive aftermarket, generating over $44 billion in annual revenue across more than 25,000 tire shops in the United States. This industry serves millions of vehicle owners who need tire sales, installation, rotation, balancing, alignment, and seasonal tire changeovers. Independent tire shops face intense competition from national chains, big-box retailers, and online tire sellers, making effective marketing essential for survival and growth.",
      "Tire shops operate in a unique business environment characterized by seasonal demand fluctuations, price-sensitive customers, and the challenge of building long-term relationships for a product that's replaced infrequently. Unlike routine maintenance services, tire purchases are often driven by immediate need (worn tires, flat tire, seasonal change), creating opportunities for shops that can capture customers at the moment of intent through strong local search visibility.",
      "Digital marketing has become the primary battleground for tire shop customer acquisition. Research shows that 92% of consumers research tire options online before making a purchase, and 76% of local tire searches on mobile devices result in a phone call or visit within 24 hours. For tire shops, this means that Google Business Profile optimization, local SEO, and targeted advertising directly impact foot traffic, phone calls, and ultimately tire sales and service revenue."
    ]
  },
  
  // Process
  process: {
    title: "Our Proven Marketing Process for Tire Shops",
    description: "We've refined a systematic approach that delivers consistent results for tire retailers and service centers.",
    steps: [
      {
        number: 1,
        title: "Comprehensive Digital Audit",
        description: "We analyze your current online presence, including website performance, search rankings, Google Business Profile optimization, review profiles, and competitor positioning. This audit identifies gaps and opportunities specific to your local tire market and creates a baseline for measuring improvement."
      },
      {
        number: 2,
        title: "Custom Strategy Development",
        description: "Based on audit findings, we develop a tailored marketing strategy that addresses your specific challenges and goals. This includes keyword targeting for tire-related searches, seasonal campaign planning, review generation systems, and local SEO tactics designed to dominate your service area for high-intent searches like 'tire shop near me' and 'tire installation [city]'."
      },
      {
        number: 3,
        title: "Implementation & Optimization",
        description: "Our team executes the strategy with precision, optimizing your Google Business Profile, building local citations, creating SEO-optimized content about tire brands and services, and implementing technical improvements to your website. We focus on the factors that matter most for tire shops: local pack rankings, review quantity and quality, and mobile user experience."
      },
      {
        number: 4,
        title: "Ongoing Management & Reporting",
        description: "Digital marketing requires continuous optimization. We monitor performance, adjust strategies based on data, respond to reviews, update seasonal content, and provide transparent monthly reporting showing exactly how your investment is driving calls, appointments, and revenue. You'll see clear metrics on search visibility, website traffic, phone calls, and customer acquisition cost."
      }
    ]
  },
  
  // Common Mistakes
  commonMistakes: {
    title: "Common Marketing Mistakes Tire Shops Make",
    description: "Avoid these costly errors that prevent tire retailers from reaching their full potential.",
    mistakes: [
      {
        title: "Competing Only on Price",
        description: "Many tire shops try to compete with national chains and online retailers solely on tire pricing, leading to razor-thin margins and unsustainable business models. This race to the bottom ignores the value of expert service, convenience, and customer relationships.",
        solution: "We help you market your complete value proposition—expert tire recommendations, professional installation, wheel alignment services, warranty support, and convenient local service. By emphasizing service quality and expertise rather than just price, you attract customers willing to pay for value and build higher-margin, loyal customer relationships."
      },
      {
        title: "Neglecting Seasonal Marketing",
        description: "Tire demand is highly seasonal (winter tire prep, spring tire sales), yet many shops don't adjust their marketing efforts to capitalize on these predictable demand cycles. This results in missed revenue opportunities during peak seasons and cash flow challenges during slow periods.",
        solution: "We implement seasonal marketing campaigns that ramp up before peak demand periods, targeting keywords like 'winter tires [city]' and 'all-season tire sale.' We also create off-season campaigns promoting tire rotations, alignments, and other services to smooth revenue throughout the year."
      },
      {
        title: "Poor Google Business Profile Management",
        description: "Tire shops often create a Google Business Profile but fail to optimize it with complete tire brand information, service photos, regular posts about promotions, or responses to reviews. This results in lower local pack rankings and lost opportunities to showcase inventory and expertise.",
        solution: "We fully optimize your Google Business Profile with detailed tire brand listings, high-quality photos of your shop and inventory, weekly posts about tire promotions and seasonal specials, and prompt responses to all reviews. This signals authority to Google and builds trust with potential customers."
      },
      {
        title: "No Follow-Up System",
        description: "Tire shops often provide excellent service but have no system for staying in touch with customers for future tire rotations, seasonal changeovers, or replacement tires in 3-5 years. This allows customers to forget about you and shop elsewhere when they need tires again.",
        solution: "We help you implement email marketing and retargeting campaigns that keep you top-of-mind with past customers. Automated reminders for tire rotations, seasonal tire changeover notifications, and exclusive customer loyalty offers ensure customers return to you instead of shopping around."
      }
    ]
  },
  
  // Benefits Breakdown
  benefitsBreakdown: {
    title: "How Our Marketing Drives Measurable Results for Tire Shops",
    description: "Here's exactly how our strategies translate into more tire sales, higher service revenue, and sustainable business growth.",
    benefits: [
      {
        title: "Increased Local Search Visibility",
        description: "We optimize your Google Business Profile and website to rank prominently when customers search for 'tire shop near me,' 'tire installation [city],' or specific tire brands and services. Higher visibility means more website visits and phone calls from customers actively looking for tire solutions.",
        impact: "Our tire shop clients typically see a 200-350% increase in organic search traffic within 6 months, translating directly to more appointment requests and walk-in customers."
      },
      {
        title: "More Positive Reviews & Social Proof",
        description: "We implement systematic review generation campaigns that make it easy for satisfied customers to leave 5-star reviews on Google, Yelp, and Facebook. More reviews improve your search rankings and build trust with potential customers comparing tire shops.",
        impact: "Tire shops with 50+ positive reviews convert 3x more website visitors into customers compared to shops with fewer than 10 reviews. We help you build that critical mass of social proof."
      },
      {
        title: "Higher Average Ticket Value",
        description: "By promoting your full range of services (tire sales, installation, balancing, alignment, rotation, TPMS service), we educate customers about the value of comprehensive tire care. This increases upsell opportunities and average transaction value.",
        impact: "Our clients see average ticket values increase by 35-50% as customers add alignment, balancing, and other services to their tire purchase instead of just buying the cheapest tires."
      },
      {
        title: "Seasonal Revenue Optimization",
        description: "Our seasonal marketing campaigns ensure you capture maximum demand during peak tire-buying seasons (winter prep, spring sales) while also promoting maintenance services during slower periods to smooth revenue throughout the year.",
        impact: "Tire shops using our seasonal campaigns see 40-60% less revenue volatility between peak and off-peak months, improving cash flow predictability and staffing efficiency."
      }
    ]
  },
  
  // FAQ
  faqs: [
    {
      question: "How long does it take to see results from tire shop marketing?",
      answer: "Most tire shops see measurable improvements within 30-60 days. You'll notice increased phone calls and appointment requests within the first month as we optimize your Google Business Profile and launch targeted ads. Organic search rankings typically improve significantly within 3-4 months, with full results (200-300% traffic increase) achieved within 6 months."
    },
    {
      question: "Can you help us compete against national tire chains like Discount Tire?",
      answer: "Absolutely. While national chains have brand recognition, they can't match your local expertise, personalized service, and community connections. We help you dominate local search results in your specific service area, showcase your superior customer service through reviews and content, and target customers who value quality and convenience over the lowest price. Many of our tire shop clients successfully compete against and even outperform national chains in their local markets."
    },
    {
      question: "Do you handle seasonal tire marketing campaigns?",
      answer: "Yes, seasonal campaigns are a core part of our tire shop marketing strategy. We create and manage campaigns for winter tire prep (October-November), spring tire sales (March-April), summer tire promotions, and off-season maintenance services. Each campaign includes targeted keywords, Google Ads, social media posts, and email marketing to maximize revenue during peak demand periods."
    },
    {
      question: "How do you help tire shops increase service revenue beyond just tire sales?",
      answer: "We promote your complete service offering—tire rotation, wheel alignment, balancing, TPMS service, and seasonal tire storage—through website content, Google Business Profile posts, and targeted advertising. We also implement customer retention campaigns (email reminders for rotations, seasonal changeover notifications) that bring customers back for ongoing services, increasing lifetime value and building recurring revenue streams."
    },
    {
      question: "What kind of ROI can tire shops expect from digital marketing?",
      answer: "Our tire shop clients typically see 4:1 to 8:1 return on marketing investment within 6 months. For example, a shop investing $2,000/month in our services often generates an additional $8,000-$16,000 in monthly revenue from increased tire sales and service appointments. We provide detailed monthly reporting showing exactly how many calls, appointments, and sales came from our marketing efforts so you can track ROI precisely."
    },
    {
      question: "Do we need to provide tire inventory data or pricing for marketing?",
      answer: "While we can incorporate tire brand information and general pricing guidance into your marketing, you don't need to provide detailed inventory data. We focus on marketing your services, expertise, and value proposition rather than competing on price alone. However, if you want to highlight specific tire promotions or seasonal specials, we can easily incorporate that into campaigns."
    }
  ],
  
  // Final CTA
  finalCtaHeadline: "Ready to Fill Your Bays with More Tire Customers?",
  finalCtaSubheadline: "Schedule a free discovery call to learn how our tire shop marketing strategies can increase your tire sales and service revenue by 200-300% within 6 months."
};
