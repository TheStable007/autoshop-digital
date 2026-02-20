import { LocationPageData } from "@/components/templates/LocationPageTemplate";
import { Search, MapPin, TrendingUp, Users, Star, Phone } from "lucide-react";
import { createElement } from "react";

export const losAngelesData: LocationPageData = {
  // SEO & Meta
  title: "Auto Shop Digital Marketing in Los Angeles, CA",
  metaDescription: "Digital marketing services for auto repair shops, body shops, and automotive businesses in Los Angeles. Dominate local search, attract more customers, and grow your LA auto business.",
  slug: "los-angeles",
  
  // Hero Section
  cityName: "Los Angeles",
  stateName: "California",
  heroHeadline: "Digital Marketing for Auto Shops in Los Angeles",
  heroSubheadline: "Help your LA auto business dominate local search and attract more customers in the nation's largest automotive market. Specialized marketing strategies for Los Angeles auto repair shops, body shops, tire centers, and dealerships.",
  heroImage: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=1920&q=80",
  
  // Location Details
  serviceArea: [
    "Downtown LA",
    "Hollywood",
    "West LA",
    "Santa Monica",
    "Beverly Hills",
    "Pasadena",
    "Glendale",
    "Burbank",
    "Culver City",
    "Inglewood",
    "Long Beach",
    "Torrance",
    "El Segundo",
    "Manhattan Beach",
    "Redondo Beach",
    "San Fernando Valley",
    "Sherman Oaks",
    "Van Nuys",
    "North Hollywood",
    "Koreatown"
  ],
  population: "13M+",
  businessCount: "8,500+",
  
  // Local Market Insights
  marketInsights: [
    {
      title: "Massive Automotive Market",
      description: "Los Angeles County has over 7 million registered vehicles, creating enormous demand for auto repair, maintenance, and collision services across all neighborhoods.",
      stat: "7M+"
    },
    {
      title: "High Competition",
      description: "With 8,500+ auto-related businesses in the LA metro area, standing out requires sophisticated digital marketing strategies and strong local SEO to capture market share.",
      stat: "8,500+"
    },
    {
      title: "Mobile-First Consumers",
      description: "85% of LA residents search for auto services on mobile devices while on the go. Your online presence must be optimized for mobile users looking for immediate service.",
      stat: "85%"
    }
  ],
  
  // Services for This Location
  services: [
    {
      title: "LA Local SEO",
      description: "Dominate search results when LA residents search for auto services in their neighborhood. We optimize for hyper-local keywords like \"auto repair Hollywood\" and \"mechanic near Santa Monica.\"",
      icon: createElement(Search, { className: "h-12 w-12" })
    },
    {
      title: "Google Business Profile",
      description: "Stand out in Google Maps when customers search for auto services nearby. We optimize your profile with LA-specific content, photos, and posts to drive more calls and directions.",
      icon: createElement(MapPin, { className: "h-12 w-12" })
    },
    {
      title: "Targeted Google Ads",
      description: "Capture LA customers actively searching for your services right now. We create geo-targeted ad campaigns for specific LA neighborhoods and zip codes.",
      icon: createElement(TrendingUp, { className: "h-12 w-12" })
    },
    {
      title: "Review Management",
      description: "Build a 5-star reputation across Google, Yelp, and other platforms that LA consumers trust. We help you generate positive reviews and respond professionally to all feedback.",
      icon: createElement(Star, { className: "h-12 w-12" })
    },
    {
      title: "Multi-Location Marketing",
      description: "Operating multiple LA locations? We create unified marketing strategies while optimizing each location for its specific neighborhood and customer base.",
      icon: createElement(Users, { className: "h-12 w-12" })
    },
    {
      title: "Call Tracking & Analytics",
      description: "Track every phone call, form submission, and customer interaction from your LA marketing campaigns. Know exactly what's working and what's not.",
      icon: createElement(Phone, { className: "h-12 w-12" })
    }
  ],
  
  // Local Success Stories
  localTestimonials: [
    {
      businessName: "Precision Auto Care",
      neighborhood: "West LA",
      quote: "Before Auto Shop Digital, we were invisible online despite being in business for 15 years. Now we rank #1 for 'auto repair West LA' and our phone rings constantly. We've had to hire three more technicians to keep up with demand.",
      author: "Mike Rodriguez",
      rating: 5,
      results: "287% increase in new customers"
    },
    {
      businessName: "Elite Collision Center",
      neighborhood: "Torrance",
      quote: "The LA market is incredibly competitive for body shops. Auto Shop Digital helped us stand out with targeted ads and an optimized Google Business Profile. We went from 80% insurance referrals to 60% direct customers in just 8 months.",
      author: "Carlos Martinez",
      rating: 5,
      results: "312% increase in direct repair orders"
    },
    {
      businessName: "Quick Lane Tire & Auto",
      neighborhood: "Glendale",
      quote: "We tried other marketing agencies but they didn't understand the automotive industry or the LA market. Auto Shop Digital gets it. They know what keywords work, what customers are searching for, and how to capture them before our competitors do.",
      author: "Sarah Kim",
      rating: 5,
      results: "5x increase in online bookings"
    },
    {
      businessName: "Downtown Transmission Specialists",
      neighborhood: "Downtown LA",
      quote: "As a transmission specialist, we needed to reach customers with specific problems, not just general repair searches. Auto Shop Digital created targeted campaigns that bring us qualified leads daily. Our revenue is up 45% year-over-year.",
      author: "James Thompson",
      rating: 5,
      results: "$28,000 average monthly revenue increase"
    }
  ],
  
  // Why Choose Us in This Location
  localAdvantages: [
    {
      title: "Deep LA Market Knowledge",
      description: "We've worked with 50+ auto businesses across Los Angeles County. We understand the unique characteristics of each neighborhood—from the luxury vehicle market in Beverly Hills to the commercial fleet opportunities in the San Fernando Valley."
    },
    {
      title: "Proven LA Success Stories",
      description: "Our LA clients consistently rank in the top 3 for their target keywords and see average revenue increases of 250%+ within the first year. We know what works in this competitive market because we've done it dozens of times."
    },
    {
      title: "Multi-Location Expertise",
      description: "Many LA auto businesses operate multiple locations across the metro area. We specialize in multi-location marketing strategies that maintain brand consistency while optimizing each location for its specific neighborhood."
    },
    {
      title: "LA-Specific Content & Strategy",
      description: "We create content that resonates with LA consumers—addressing traffic concerns, smog check requirements, California emissions standards, and other local issues that matter to your customers."
    }
  ],
  
  // Local FAQ
  locationOverview: {
    title: "Auto Shop Digital Marketing in Los Angeles: Market Overview",
    paragraphs: [
      "Los Angeles County is home to over 10 million residents and more than 8 million registered vehicles, creating one of the largest automotive service markets in the United States. With over 2,400 auto repair shops, 800+ collision centers, and countless specialty automotive businesses operating across LA's 88 incorporated cities, the competition for customer attention is intense. Success in this market requires sophisticated digital marketing strategies that help your business stand out in local search results.",
      "The Los Angeles automotive market is unique in several ways. The city's sprawling geography means customers typically search for services within their immediate neighborhood or along their daily commute routes. Search terms like 'auto repair near me,' 'mechanic in [neighborhood],' and 'car service [zip code]' dominate local search behavior. Additionally, LA's diverse population means multilingual marketing capabilities and cultural sensitivity can provide significant competitive advantages.",
      "Digital marketing has become the primary customer acquisition channel for LA auto shops. With notorious traffic making word-of-mouth referrals less practical and younger vehicle owners relying almost exclusively on online research, shops that don't invest in professional SEO and local search optimization are essentially invisible to the majority of potential customers. Our data shows that auto shops ranking in the top 3 Google local pack positions receive 10-15x more phone calls than those ranking below position 7."
    ]
  },
  localChallenges: {
    title: "Unique Marketing Challenges for LA Auto Shops",
    description: "Los Angeles presents specific obstacles that require specialized digital marketing approaches.",
    challenges: [
      {
        title: "Extreme Competition in Every Neighborhood",
        description: "With thousands of auto shops competing for visibility, generic SEO tactics don't work. LA shops face competition not just from local independents but also from national chains, dealerships, and mobile mechanics, all fighting for the same search rankings and customers.",
        solution: "We use hyper-local SEO strategies that target specific LA neighborhoods, optimize for long-tail keywords like 'Toyota specialist in Burbank' or 'European auto repair West LA,' and build location-specific content that helps you dominate your immediate service area rather than trying to compete citywide."
      },
      {
        title: "High Customer Acquisition Costs",
        description: "Los Angeles has some of the highest cost-per-click rates in the country for automotive keywords. Shops relying on Google Ads or lead generation services often pay $50-150 per lead, making customer acquisition expensive and cutting into profit margins.",
        solution: "Our SEO-focused approach builds long-term organic visibility that generates consistent leads without per-click costs. While SEO requires upfront investment, the long-term cost per acquisition is typically 60-75% lower than paid advertising, dramatically improving your marketing ROI."
      },
      {
        title: "Review Management Across Multiple Platforms",
        description: "LA consumers are sophisticated online researchers who check multiple review platforms before choosing a shop. Managing your reputation across Google, Yelp, Facebook, and industry-specific sites like RepairPal requires constant attention and systematic review generation.",
        solution: "We implement automated review request systems that make it easy for satisfied customers to leave reviews on the platforms that matter most. We also monitor all review sites and help you respond professionally to feedback, building trust with potential customers and improving your online reputation."
      },
      {
        title: "Mobile-First Search Behavior",
        description: "Over 75% of auto repair searches in LA happen on mobile devices, often when someone is stranded or needs immediate service. If your website isn't mobile-optimized with click-to-call functionality and fast loading times, you're losing customers to competitors every single day.",
        solution: "We ensure your website is fully responsive, loads in under 2 seconds on mobile devices, and features prominent click-to-call buttons. We also optimize your Google Business Profile for mobile searchers, making it easy for customers to contact you with a single tap when they need service urgently."
      }
    ]
  },
  serviceAreasDetail: {
    title: "Comprehensive Coverage Across Greater Los Angeles",
    description: "We help auto shops dominate search results in every corner of the LA metro area.",
    areas: [
      {
        name: "West Los Angeles & Westside",
        description: "Serving Santa Monica, Venice, Mar Vista, Culver City, and surrounding communities with high vehicle density and affluent customer base.",
        highlights: [
          "Target high-value European and luxury vehicle owners",
          "Optimize for premium service keywords and specialty repairs",
          "Compete with dealership service centers through superior online presence"
        ]
      },
      {
        name: "San Fernando Valley",
        description: "Covering Burbank, Glendale, North Hollywood, Van Nuys, Sherman Oaks, and the entire Valley with its massive automotive service market.",
        highlights: [
          "Capture family vehicle maintenance and repair searches",
          "Dominate neighborhood-specific searches across Valley communities",
          "Build visibility for fleet services and commercial accounts"
        ]
      },
      {
        name: "South Bay & Beach Cities",
        description: "Marketing to Torrance, Redondo Beach, Manhattan Beach, El Segundo, and surrounding coastal communities.",
        highlights: [
          "Target affluent coastal residents with import and luxury vehicles",
          "Optimize for beach community searches and local keywords",
          "Compete effectively against dealerships and national chains"
        ]
      },
      {
        name: "East LA & San Gabriel Valley",
        description: "Serving Pasadena, Alhambra, Monterey Park, East LA, and the diverse SGV communities.",
        highlights: [
          "Implement multilingual SEO for diverse customer base",
          "Target specific ethnic communities with culturally relevant marketing",
          "Build visibility for affordable service options and value-focused searches"
        ]
      }
    ]
  },
    faqs: [
    {
      question: "Why is digital marketing so important for LA auto shops?",
      answer: "Los Angeles has over 8,500 auto-related businesses competing for customers. When someone's car breaks down or needs service, they immediately search Google on their phone for \"auto repair near me.\" If you're not ranking in the top 3 results, you're invisible to these high-intent customers. Digital marketing ensures you're found when LA residents need your services."
    },
    {
      question: "How do you handle marketing for multiple LA locations?",
      answer: "We create location-specific Google Business Profiles, landing pages, and ad campaigns for each of your locations while maintaining consistent branding. Each location gets optimized for its neighborhood keywords (e.g., \"auto repair Hollywood\" vs \"mechanic Torrance\") to capture local search traffic."
    },
    {
      question: "What makes the LA auto market different from other cities?",
      answer: "LA is the largest automotive market in the US with unique characteristics: massive geographic spread, diverse neighborhoods with different demographics, high competition, mobile-first consumers, and specific regulations like smog checks. Success requires hyper-local targeting and understanding of each area's customer base."
    },
    {
      question: "How quickly can I see results in the LA market?",
      answer: "Due to high competition, LA campaigns typically take 60-90 days to show significant SEO results. However, Google Ads can drive qualified leads within the first week. Most LA shops see measurable increases in calls and bookings within 30 days and substantial revenue growth by month 3-4."
    },
    {
      question: "Do you help with Yelp marketing in LA?",
      answer: "Yes! Yelp is particularly important in Los Angeles where consumers heavily rely on reviews. We help you optimize your Yelp profile, generate positive reviews, respond to feedback, and integrate Yelp into your overall digital marketing strategy."
    },
    {
      question: "What's the typical ROI for LA auto shops?",
      answer: "Our LA clients typically see 5-10x ROI within the first year. For example, a shop investing $2,500/month in our services might see $15,000-$25,000 in additional monthly revenue. The exact ROI depends on your services, pricing, and how well you convert the leads we generate."
    }
  ],
  
  // Contact Info (optional)
  contactInfo: {
    phone: "(555) 123-4567",
    email: "info@autoshopdigital.com",
    hours: "Mon-Fri: 9am-6pm PST"
  },
  
  // Google Map & Business Profile
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192993092697!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
  googleBusinessProfileUrl: "https://maps.app.goo.gl/HhfaKorD8fbmotGT9"
};
