/**
 * Managed Google Ads Service Page
 * Industrial Precision design: Diagonal sections, safety orange CTAs, geometric clarity
 */

import { Button } from "@/components/ui/button";
import { CheckCircle2, Target, DollarSign, BarChart3, MousePointerClick, TrendingUp, Users, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbListSchema from "@/components/BreadcrumbListSchema";
import ServiceFAQSchema from "@/components/ServiceFAQSchema";
import SEO from "@/components/SEO";

export default function ManagedGoogleAds() {
  const serviceData = {
    name: "Google Ads Management for Auto Shops",
    description: "Professional Google Ads campaign management designed specifically for auto repair shops to maximize ROI and customer acquisition. Includes campaign strategy, keyword research, budget management, ad copy creation, and continuous performance optimization.",
    serviceType: "Google Ads Management",
    priceRange: "$$-$$$$",
    url: "https://autoshopdigital.com/services/managed-google-ads"
  };

  const features = [
    {
      icon: Target,
      title: "Campaign Strategy & Setup",
      description: "Comprehensive Google Ads strategy designed specifically for auto shops to maximize ROI and customer acquisition."
    },
    {
      icon: MousePointerClick,
      title: "Keyword Research & Targeting",
      description: "Identify high-converting keywords that auto shop customers are actively searching for in your local area."
    },
    {
      icon: DollarSign,
      title: "Budget Management",
      description: "Strategic budget allocation and bid management to maximize your advertising spend efficiency."
    },
    {
      icon: BarChart3,
      title: "Ad Copy & Creative",
      description: "Compelling ad copy and extensions designed to attract clicks and convert searchers into customers."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous campaign monitoring, A/B testing, and optimization to improve results over time."
    },
    {
      icon: Users,
      title: "Dedicated Account Manager",
      description: "Your dedicated account manager oversees your campaigns and is available to contact anytime."
    },
    {
      icon: CheckCircle2,
      title: "No Setup Fees",
      description: "We're confident in our abilities and don't charge setup fees unlike most competitors."
    },
    {
      icon: Award,
      title: "90 Day Performance Promise",
      description: "We'll improve your campaign performance within 90 days, or we work for free until we do."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Google Ads Management for Auto Shops | Auto Shop Digital"
        description="Drive instant leads with managed Google Ads for auto repair shops. Expert campaign management, transparent pricing, measurable ROI. No setup fees."
      />
      <ServiceSchema {...serviceData} />
      <BreadcrumbListSchema items={[
        { name: "Home", url: "https://autoshopdigital.com" },
        { name: "Services", url: "https://autoshopdigital.com/services" },
        { name: "Google Ads", url: "https://autoshopdigital.com/services/managed-google-ads" }
      ]} />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight">
              Managed Google Ads
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Drive immediate, qualified traffic to your auto shop with our fully managed Google Ads service. Get in front of customers actively searching for auto repair services and convert clicks into appointments.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg px-8 py-6"
            >
              GET STARTED
            </Button>
          </div>
        </div>
      </section>

      {/* Auto Shop Specialization */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                alt="Digital advertising dashboard" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-black mb-6">
                Google Ads Experts for Auto Shops
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We understand the unique challenges and opportunities of advertising auto repair services online. Our managed Google Ads service is specifically designed for auto shops, targeting customers with high purchase intent who are actively searching for services you offer.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With deep expertise in both Google Ads and the auto repair industry, we create campaigns that deliver measurable results and positive ROI for your shop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Results */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-heading font-black mb-6">
                Immediate, Qualified Traffic
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Unlike SEO which takes time to build momentum, Google Ads delivers immediate visibility at the top of search results. When customers search for auto repair services in your area, your ads appear first, driving qualified traffic to your website instantly.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our managed service ensures your campaigns are optimized for maximum ROI, targeting the right keywords, at the right time, with the right message to convert searchers into paying customers.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80" 
                alt="Analytics and performance" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Easy Onboarding */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
                alt="Strategy consultation" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-black mb-6">
                Expert Campaign Setup
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our streamlined onboarding process gets your Google Ads campaigns up and running quickly. We handle all the technical setup, from account structure and keyword research to ad copy creation and conversion tracking.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                During our initial consultation, we'll discuss your business goals, target services, budget, and competitive landscape to create a customized advertising strategy for your shop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* No Setup Fees */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-heading font-black mb-6">
                No Setup Fees
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We're confident in our ability to deliver results with Google Ads for auto shops. That's why we don't charge any setup fees to build and launch your campaigns—you only pay for our management service and your ad spend.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Simply book a call to get started and begin driving qualified traffic to your shop.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" 
                alt="Business partnership" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Performance Promise */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" 
                alt="ROI metrics" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-black mb-6">
                90 Day Performance Promise
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We offer a 90-day performance promise with our managed Google Ads service. If we don't improve your campaign performance metrics—including click-through rates, conversion rates, and cost per acquisition—within the first 90 days, we'll continue working for free until we do.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This guarantee reflects our confidence in delivering measurable ROI for your auto shop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
            Start Driving Qualified Traffic Today!
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Generate immediate business growth with professional Google Ads management designed for auto shops.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg px-8 py-6"
          >
            GET STARTED
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
              Complete Campaign Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our managed Google Ads service handles everything needed to drive qualified traffic and maximize your advertising ROI—allowing you to focus on serving customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a call with one of our Google Ads experts to discuss how Auto Shop Digital can drive more customers to your shop through strategic paid advertising.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg px-8 py-6"
          >
            GET STARTED
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about Google Ads management for auto shops
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-heading font-bold mb-3">
                How much should I budget for Google Ads?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Most auto shops see good results with $1,500-$3,000 per month in ad spend, plus our management fee. The ideal budget depends on your market size, competition level, and business goals. We'll recommend a budget based on your specific situation and can start smaller to test performance.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-heading font-bold mb-3">
                How quickly will I see results from Google Ads?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Unlike SEO, Google Ads can drive traffic immediately once campaigns launch. You'll typically see calls and website visits within the first week. However, optimal performance and cost-efficiency develop over 30-60 days as we gather data and refine targeting, ad copy, and bidding strategies.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-heading font-bold mb-3">
                What's included in your Google Ads management service?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our service includes campaign strategy and setup, keyword research and selection, ad copywriting and testing, landing page recommendations, bid management and optimization, conversion tracking setup, monthly performance reports, and ongoing campaign refinement based on results.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-heading font-bold mb-3">
                How do you measure Google Ads success?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We track key metrics including cost per click (CPC), click-through rate (CTR), conversion rate, cost per lead, phone calls generated, form submissions, and overall return on ad spend (ROAS). Our goal is to maximize qualified leads while minimizing cost per acquisition.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-heading font-bold mb-3">
                Can I pause or adjust my Google Ads campaigns?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes! You have full flexibility to adjust budgets, pause campaigns during slow periods, or scale up during busy seasons. We recommend running campaigns consistently for at least 90 days to gather sufficient data and optimize performance, but you're never locked into spending.
              </p>
            </div>
          </div>
        </div>
        
        <ServiceFAQSchema faqs={[
          {
            question: "How much should I budget for Google Ads?",
            answer: "Most auto shops see good results with $1,500-$3,000 per month in ad spend, plus our management fee. The ideal budget depends on your market size, competition level, and business goals. We'll recommend a budget based on your specific situation and can start smaller to test performance."
          },
          {
            question: "How quickly will I see results from Google Ads?",
            answer: "Unlike SEO, Google Ads can drive traffic immediately once campaigns launch. You'll typically see calls and website visits within the first week. However, optimal performance and cost-efficiency develop over 30-60 days as we gather data and refine targeting, ad copy, and bidding strategies."
          },
          {
            question: "What's included in your Google Ads management service?",
            answer: "Our service includes campaign strategy and setup, keyword research and selection, ad copywriting and testing, landing page recommendations, bid management and optimization, conversion tracking setup, monthly performance reports, and ongoing campaign refinement based on results."
          },
          {
            question: "How do you measure Google Ads success?",
            answer: "We track key metrics including cost per click (CPC), click-through rate (CTR), conversion rate, cost per lead, phone calls generated, form submissions, and overall return on ad spend (ROAS). Our goal is to maximize qualified leads while minimizing cost per acquisition."
          },
          {
            question: "Can I pause or adjust my Google Ads campaigns?",
            answer: "Yes! You have full flexibility to adjust budgets, pause campaigns during slow periods, or scale up during busy seasons. We recommend running campaigns consistently for at least 90 days to gather sufficient data and optimize performance, but you're never locked into spending."
          }
        ]} />
      </section>

      <Footer />
    </div>
  );
}
