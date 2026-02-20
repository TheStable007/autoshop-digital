import { IndustryPageData } from "@/components/templates/IndustryPageTemplate";
import { Wrench, TrendingDown, Users, Target, DollarSign, Clock } from "lucide-react";
import { createElement } from "react";

export const autoBodyShopsData: IndustryPageData = {
  // SEO & Meta
  title: "Auto Body Shops",
  metaDescription: "Digital marketing services designed for auto body shops and collision repair centers. Increase insurance referrals, attract more customers, and grow your body shop with proven marketing strategies.",
  slug: "auto-body-shops",
  
  // Hero Section
  heroHeadline: "Digital Marketing That Brings More Collision Repair Jobs to Your Auto Body Shop",
  heroSubheadline: "Specialized marketing strategies that help auto body shops dominate local search, build insurance partnerships, and increase collision repair bookings by an average of 250%.",
  heroImage: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1920&q=80",
  
  // Industry Challenges
  challenges: [
    {
      icon: createElement(TrendingDown, { className: "h-12 w-12" }),
      title: "Dependence on Insurance Referrals",
      description: "Relying solely on insurance company referrals limits your growth and puts you at the mercy of their preferred shop networks and declining reimbursement rates."
    },
    {
      icon: createElement(Users, { className: "h-12 w-12" }),
      title: "Customer Acquisition Costs",
      description: "Collision repair is often a one-time need, making customer acquisition expensive without a steady stream of direct repair orders (DROs)."
    },
    {
      icon: createElement(Target, { className: "h-12 w-12" }),
      title: "Low Online Visibility",
      description: "When accident victims search for \"auto body shop near me\" or \"collision repair,\" your competitors appear first, capturing customers before they find you."
    },
    {
      icon: createElement(DollarSign, { className: "h-12 w-12" }),
      title: "Price Competition",
      description: "Customers shopping multiple estimates often choose based on price alone, forcing you to compete on margins rather than quality and service."
    },
    {
      icon: createElement(Clock, { className: "h-12 w-12" }),
      title: "Long Sales Cycles",
      description: "From initial estimate to job completion, the sales cycle is long, and customers often go dark between steps, requiring constant follow-up."
    },
    {
      icon: createElement(Wrench, { className: "h-12 w-12" }),
      title: "Difficulty Showcasing Quality",
      description: "Your expert craftsmanship, certifications, and state-of-the-art equipment don't translate online, making it hard to justify premium pricing."
    }
  ],
  
  // Solutions/Services
  solutions: [
    {
      title: "Local SEO for Auto Body Shops",
      description: "Dominate local search results when accident victims and fleet managers search for collision repair services in your area. We optimize your online presence to capture high-intent customers actively looking for body shop services right now.",
      benefits: [
        "Rank #1 for \"auto body shop near me\" and \"collision repair [city]\"",
        "Optimize for insurance-related keywords like \"insurance approved body shop\"",
        "Target commercial fleet keywords for B2B opportunities",
        "Build citations on automotive and insurance directories",
        "Monthly SEO reports tracking rankings and organic traffic growth",
        "Schema markup for services, reviews, and business information"
      ]
    },
    {
      title: "Google Business Profile Optimization",
      description: "Your Google Business Profile is the first thing customers see when searching for collision repair. We transform it into a powerful lead generation tool with professional photos, regular updates, review management, and strategic posts that showcase your expertise.",
      benefits: [
        "Before/after photos showcasing your best collision repair work",
        "Weekly posts highlighting certifications, equipment, and services",
        "Proactive review generation campaigns to build 5-star reputation",
        "Review response within 24 hours to all customer feedback",
        "Q&A management addressing insurance and repair questions",
        "Google Business Profile insights and performance tracking"
      ]
    },
    {
      title: "Targeted Google Ads for Collision Repair",
      description: "Capture customers at the exact moment they need collision repair services. Our Google Ads campaigns target high-intent keywords and geographic areas to deliver qualified leads—people who just had an accident and need your services now.",
      benefits: [
        "Emergency collision repair ad campaigns for immediate needs",
        "Geographic targeting within your service radius",
        "Call-only ads for mobile users needing immediate assistance",
        "Remarketing to website visitors who didn't convert",
        "Conversion tracking for calls, form fills, and estimates",
        "Monthly optimization to reduce cost per lead by 30-50%"
      ]
    }
  ],
  
  // Why Choose Us
  whyChooseUs: [
    {
      title: "Auto Body Industry Specialists",
      description: "We exclusively serve automotive businesses and have deep experience with collision repair shops. We understand DROs, insurance partnerships, certification requirements, and the unique challenges of marketing body shop services."
    },
    {
      title: "Proven Track Record",
      description: "Our auto body shop clients see an average 250% increase in direct repair orders within 6 months. We've helped dozens of collision centers reduce their dependence on insurance referrals and build profitable DRO businesses."
    },
    {
      title: "Transparent Monthly Reporting",
      description: "You'll receive detailed monthly reports showing exactly how many calls, estimate requests, and jobs came from our marketing efforts. We track ROI down to the dollar so you know exactly what you're getting."
    },
    {
      title: "Turnkey Service",
      description: "We handle everything—from content creation and photo editing to review responses and ad management. You focus on delivering exceptional collision repairs while we fill your schedule with quality jobs."
    }
  ],
  
  // Case Study
  caseStudy: {
    businessName: "Elite Collision Center",
    businessType: "Auto Body & Collision Repair Shop",
    location: "San Diego, CA",
    quote: "We were 80% dependent on insurance referrals and constantly fighting for scraps. Auto Shop Digital helped us build a direct-to-consumer pipeline. Now 60% of our work comes from direct customers who found us online, and our margins are significantly better.",
    author: "Carlos Martinez",
    authorTitle: "Owner, Elite Collision Center",
    results: [
      { metric: "Increase in Direct Repair Orders", value: "312%" },
      { metric: "Reduction in Insurance Dependence", value: "45%" },
      { metric: "Average Monthly Revenue Growth", value: "$32,000" }
    ]
  },
  
  // FAQ
  industryOverview: {
    title: "Understanding the Auto Body Shop Industry",
    paragraphs: [
      "The auto body repair industry is a critical component of the automotive ecosystem, serving millions of vehicle owners who need collision repair, paint work, and restoration services. With over 35,000 auto body shops operating across the United States and generating more than $42 billion in annual revenue, this industry faces unique challenges in attracting and retaining customers in an increasingly digital marketplace.",
      "Auto body shops operate in a highly competitive environment where reputation, visibility, and customer trust are paramount. Unlike routine maintenance services, body work is typically needed unexpectedly after accidents or damage, making it essential for shops to be easily discoverable when customers are actively searching for immediate solutions. This creates a unique marketing challenge where timing, local visibility, and credibility are critical success factors.",
      "Digital marketing has become the primary driver of new customer acquisition for auto body shops. Studies show that 97% of consumers search online for local services, and 88% of local business searches on mobile devices result in a call or visit within 24 hours. For auto body shops, this means that strong online presence, positive reviews, and high search rankings directly translate to more estimates, more jobs, and higher revenue."
    ]
  },
  process: {
    title: "Our Proven Marketing Process for Auto Body Shops",
    description: "We've refined a systematic approach that delivers consistent results for collision repair businesses.",
    steps: [
      {
        number: 1,
        title: "Comprehensive Digital Audit",
        description: "We start by analyzing your current online presence, including website performance, search rankings, Google Business Profile optimization, review profiles, and competitor positioning. This audit identifies gaps and opportunities specific to your local market and creates a baseline for measuring improvement."
      },
      {
        number: 2,
        title: "Custom Strategy Development",
        description: "Based on audit findings, we develop a tailored marketing strategy that addresses your specific challenges and goals. This includes keyword targeting for collision-related searches, content planning, review generation systems, and local SEO tactics designed to dominate your service area for high-intent searches like 'auto body shop near me' and 'collision repair [city]'."
      },
      {
        number: 3,
        title: "Implementation & Optimization",
        description: "Our team executes the strategy with precision, optimizing your Google Business Profile, building local citations, creating SEO-optimized content, and implementing technical improvements to your website. We focus on the factors that matter most for auto body shops: local pack rankings, review quantity and quality, and mobile user experience."
      },
      {
        number: 4,
        title: "Ongoing Management & Reporting",
        description: "Digital marketing isn't set-it-and-forget-it. We continuously monitor performance, adjust strategies based on data, respond to reviews, update content, and provide transparent monthly reporting showing exactly how your investment is driving calls, estimates, and revenue. You'll see clear metrics on search visibility, website traffic, phone calls, and customer acquisition."
      }
    ]
  },
  commonMistakes: {
    title: "Common Marketing Mistakes Auto Body Shops Make",
    description: "Avoid these costly errors that prevent collision repair shops from reaching their full potential.",
    mistakes: [
      {
        title: "Neglecting Google Business Profile",
        description: "Many body shops create a Google Business Profile but never optimize it with complete information, regular posts, photos of recent work, or responses to reviews. This results in lower rankings in the local pack and missed opportunities to showcase expertise.",
        solution: "We fully optimize your Google Business Profile with detailed service descriptions, high-quality before/after photos, regular posts about capabilities and certifications, and prompt responses to all reviews. This signals to Google that your business is active and authoritative, improving your local search rankings."
      },
      {
        title: "Ignoring Online Reviews",
        description: "Auto body shops often focus solely on doing great work but fail to systematically request reviews from satisfied customers. With only a handful of reviews, potential customers can't gauge your reputation and may choose competitors with more social proof.",
        solution: "We implement automated review request systems that make it easy for happy customers to leave reviews on Google, Yelp, and Facebook. We also help you respond professionally to all reviews (positive and negative), demonstrating your commitment to customer satisfaction and building trust with prospects."
      },
      {
        title: "Generic, Non-Optimized Website Content",
        description: "Many body shop websites use generic template content that doesn't mention specific services, certifications, or local areas served. This makes it nearly impossible to rank for valuable search terms and fails to convert visitors into customers.",
        solution: "We create SEO-optimized content that targets specific collision repair services (frame straightening, paintless dent repair, insurance claims), highlights certifications (I-CAR, ASE), and emphasizes your service areas. This helps you rank for high-intent searches and establishes credibility with potential customers."
      },
      {
        title: "No Mobile Optimization",
        description: "Over 70% of auto body shop searches happen on mobile devices, often immediately after an accident. If your website isn't mobile-friendly with click-to-call buttons and fast loading times, you're losing customers to competitors.",
        solution: "We ensure your website is fully responsive, loads quickly on mobile devices, and features prominent click-to-call buttons. We also optimize your Google Business Profile for mobile searchers, making it easy for stressed accident victims to contact you immediately."
      }
    ]
  },
  benefitsBreakdown: {
    title: "The Business Impact of Professional Digital Marketing",
    description: "Here's how strategic digital marketing directly improves your auto body shop's bottom line.",
    benefits: [
      {
        title: "Increased Estimate Requests",
        description: "When your shop appears at the top of search results for collision repair searches, you receive significantly more phone calls and online estimate requests. Higher visibility means more opportunities to quote jobs and convert prospects into paying customers.",
        impact: "Our clients typically see 150-300% increase in monthly estimate requests within 6 months"
      },
      {
        title: "Higher Quality Jobs",
        description: "SEO attracts customers who are actively searching for specific services you offer, rather than just price shopping. These customers are more likely to approve estimates, accept recommended repairs, and become repeat customers for future needs.",
        impact: "Average job value increases 25-40% when customers find you through organic search vs. aggregators"
      },
      {
        title: "Reduced Marketing Costs",
        description: "Unlike pay-per-click advertising or lead generation services that charge for every click or lead, SEO builds long-term organic visibility. Once you rank well, you receive consistent traffic without ongoing per-click costs, dramatically improving your marketing ROI.",
        impact: "Cost per acquisition drops 60-75% compared to paid advertising after 12 months of SEO"
      },
      {
        title: "Competitive Advantage",
        description: "Most auto body shops don't invest in professional digital marketing, relying instead on word-of-mouth and insurance referrals. By dominating local search results, you capture market share from competitors and position your shop as the area's leading collision repair provider.",
        impact: "Clients typically move from page 2-3 to top 3 local pack positions, capturing 45% of all search traffic"
      },
      {
        title: "Better Insurance Relationships",
        description: "When insurance adjusters and policyholders search for body shops in your area and consistently see your name at the top of results with excellent reviews, you become the preferred shop for claims. This leads to more DRP opportunities and insurance referrals.",
        impact: "75% of our clients report improved insurance relationships and increased DRP referrals"
      },
      {
        title: "Reputation Management",
        description: "Professional review management ensures you maintain a strong online reputation with consistent 4.5+ star ratings. This builds trust with potential customers and makes them more likely to choose your shop over competitors, even if your prices are slightly higher.",
        impact: "Shops with 4.5+ stars and 50+ reviews convert 3x more website visitors into customers"
      }
    ]
  },
    faqs: [
    {
      question: "How do you help auto body shops compete with insurance preferred shops?",
      answer: "We help you build a strong direct-to-consumer pipeline so you're less dependent on insurance referrals. By ranking #1 in local search and running targeted ads, we capture customers before they even call their insurance company. We also help you communicate your value—certifications, OEM parts, lifetime warranties—so customers choose you even if you're not on their insurance's preferred list."
    },
    {
      question: "Can you help us get more commercial fleet accounts?",
      answer: "Yes! We create targeted campaigns for fleet managers and business owners searching for commercial collision repair services. We optimize your website for B2B keywords and can even help you create fleet-specific landing pages and proposals."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most auto body shops see increased estimate requests within 30 days from Google Ads. SEO results typically take 60-90 days as we build your rankings and authority. The key is consistency—shops that stick with us for 6+ months see the most dramatic growth in direct repair orders."
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
      answer: "Our Growth 360 programs range from $1,495 to $3,495 per month depending on your market size, competition, and goals. All programs include multiple services and are designed to deliver positive ROI within 90 days. Most body shops see a 5-10x return on their marketing investment."
    }
  ],
  
  // Final CTA
  finalCtaHeadline: "Ready to Reduce Your Insurance Dependence?",
  finalCtaSubheadline: "Schedule a free discovery call to learn how we can help your auto body shop attract more direct customers and increase profitable collision repair work."
};
