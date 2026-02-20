/**
 * Managed Local SEO Service Page
 * Industrial Precision design: Diagonal sections, safety orange CTAs, geometric clarity
 */

import { Button } from "@/components/ui/button";
import { CheckCircle2, Target, TrendingUp, MapPin, Search, BarChart3, Users, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbListSchema from "@/components/BreadcrumbListSchema";
import ServiceFAQSchema from "@/components/ServiceFAQSchema";
import SEO from "@/components/SEO";

export default function ManagedLocalSEO() {
  const serviceData = {
    name: "Managed Local SEO for Auto Shops",
    description: "Comprehensive local SEO strategy designed specifically for auto repair shops to dominate your local market. Includes Google Maps optimization, local keyword research, citation building, and dedicated account management.",
    serviceType: "Local SEO Services",
    priceRange: "$$-$$$$",
    url: "https://autoshopdigital.com/services/managed-local-seo"
  };

  const features = [
    {
      icon: Target,
      title: "Local SEO Strategy",
      description: "Comprehensive local SEO strategy designed specifically for auto shops to dominate your local market."
    },
    {
      icon: MapPin,
      title: "Google Maps Optimization",
      description: "Optimize your presence in Google Maps to capture customers searching for nearby auto services."
    },
    {
      icon: Search,
      title: "Local Keyword Research",
      description: "Identify high-converting local keywords that auto shop customers are actively searching for."
    },
    {
      icon: TrendingUp,
      title: "Citation Building",
      description: "Build and manage consistent business citations across top local directories and platforms."
    },
    {
      icon: BarChart3,
      title: "Local Performance Tracking",
      description: "Monitor your local search rankings, visibility, and customer engagement with detailed analytics."
    },
    {
      icon: Users,
      title: "Dedicated Account Manager",
      description: "Your dedicated account manager oversees your local SEO campaign and is available to contact."
    },
    {
      icon: CheckCircle2,
      title: "No Setup Fees",
      description: "We're confident in our abilities and don't charge setup fees unlike most competitors."
    },
    {
      icon: Award,
      title: "90 Day Performance Promise",
      description: "We'll improve your local rankings within 90 days, or we work for free until we do."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Managed Local SEO for Auto Shops | Auto Shop Digital"
        description="Dominate local search with our managed SEO service for auto repair shops. Rank higher on Google, attract more customers. From $695/mo. 90-day guarantee."
      />
      <ServiceSchema {...serviceData} />
      <BreadcrumbListSchema items={[
        { name: "Home", url: "https://autoshopdigital.com" },
        { name: "Services", url: "https://autoshopdigital.com/services" },
        { name: "Managed Local SEO", url: "https://autoshopdigital.com/services/managed-local-seo" }
      ]} />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight">
              Managed Local SEO
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Dominate your local market with our managed local SEO services designed exclusively for auto repair shops. Attract more local customers and grow your business with proven local search strategies.
            </p>
            <Button size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg px-8 py-6" onClick={() => { window.location.href = '/get-started'; }}>
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
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80" 
                alt="Auto shop mechanic" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-black mb-6">
                Local SEO Experts for Auto Shops
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We understand auto repair shops and have designed our managed local SEO services specifically for attracting local customers to your auto shop's website, and ultimately bringing more business through your doors. This is the Auto Shop Digital difference.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We "get" the auto repair business and have recent and relevant industry experience, which makes our local SEO services more specialized and effective for your shop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Designed for Local Markets */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-heading font-black mb-6">
                Capture Local Customers
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With auto repair shops primarily interested in attracting local customers, our managed local SEO services incorporate powerful geographic targeting strategies designed to reach customers in your service area.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our local SEO approach includes Google Maps optimization, local citation building, location-specific content, and review management to ensure your shop appears when local customers search for auto services.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" 
                alt="Local map search" 
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
                alt="Consultation meeting" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-black mb-6">
                Easy Onboarding Process
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We've perfected our onboarding process for all our local SEO services. Getting started is simple, fast, and easy to understand. It begins with booking a call with one of our local SEO experts.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                During this call, we'll ask questions about your business, your local market, competitors, and online marketing goals to create a customized local SEO strategy for your shop.
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
                We're so confident in the quality of your experience partnering with Auto Shop Digital, and the performance of our managed local SEO services, that we don't charge any setup fees to launch your campaign.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Just simply book a call to get started and begin dominating your local market.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" 
                alt="Handshake agreement" 
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
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80" 
                alt="Performance metrics" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-black mb-6">
                90 Day Performance Promise
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Similar to why we don't charge setup fees, we also offer a 90-day performance promise with all our managed local SEO services. If we don't improve your local search rankings in the first 90 days, we'll continue working on your campaign for free until we do.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This guarantee reflects our confidence in delivering measurable results for your auto shop.
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
            Start Growing Your Shop Business Now!
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Generate significant business growth for your auto shop with professional managed local SEO services.
          </p>
          <Button size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg px-8 py-6" onClick={() => { window.location.href = '/get-started'; }}>
                GET STARTED
              </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
              Everything Your Shop Needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Auto Shop Digital's managed local SEO services are designed to increase local visibility and drive customers to your business via a completely managed approach—allowing you to focus on what you do best: running your shop.
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
            Start Growing Your Auto Shop Business Today!
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get started by booking a call with one of our local SEO experts to discuss how Auto Shop Digital can grow your auto shop through expert local SEO.
          </p>
          <Button size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg px-8 py-6" onClick={() => { window.location.href = '/get-started'; }}>
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
              Common questions about our managed local SEO services for auto shops
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-heading font-bold mb-3">
                How long does it take to see results from local SEO?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Most auto shops start seeing improved local search rankings within 60-90 days. However, significant traffic and lead increases typically occur within 3-6 months as your local authority builds. Our 90-day performance promise ensures you'll see measurable progress.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-heading font-bold mb-3">
                What's included in your managed local SEO service?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our service includes comprehensive local keyword research, Google Maps optimization, citation building across 50+ directories, on-page SEO optimization, local content creation, review management strategy, monthly performance reports, and dedicated account management.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-heading font-bold mb-3">
                Do you require a long-term contract?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                No, we offer month-to-month services with no long-term contracts. You can cancel anytime with 30 days notice. We believe in earning your business every month through consistent results and exceptional service.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-heading font-bold mb-3">
                How do you measure local SEO success?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We track local search rankings for your target keywords, Google Maps visibility, website traffic from local searches, phone calls and form submissions, citation consistency across directories, and overall online visibility in your service area.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-heading font-bold mb-3">
                Will local SEO work for my specific location?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes! Local SEO works in any market size, from small towns to major metropolitan areas. We customize our strategy based on your location's competition level, search volume, and market dynamics to maximize your visibility and customer acquisition.
              </p>
            </div>
          </div>
        </div>
        
        <ServiceFAQSchema faqs={[
          {
            question: "How long does it take to see results from local SEO?",
            answer: "Most auto shops start seeing improved local search rankings within 60-90 days. However, significant traffic and lead increases typically occur within 3-6 months as your local authority builds. Our 90-day performance promise ensures you'll see measurable progress."
          },
          {
            question: "What's included in your managed local SEO service?",
            answer: "Our service includes comprehensive local keyword research, Google Maps optimization, citation building across 50+ directories, on-page SEO optimization, local content creation, review management strategy, monthly performance reports, and dedicated account management."
          },
          {
            question: "Do you require a long-term contract?",
            answer: "No, we offer month-to-month services with no long-term contracts. You can cancel anytime with 30 days notice. We believe in earning your business every month through consistent results and exceptional service."
          },
          {
            question: "How do you measure local SEO success?",
            answer: "We track local search rankings for your target keywords, Google Maps visibility, website traffic from local searches, phone calls and form submissions, citation consistency across directories, and overall online visibility in your service area."
          },
          {
            question: "Will local SEO work for my specific location?",
            answer: "Yes! Local SEO works in any market size, from small towns to major metropolitan areas. We customize our strategy based on your location's competition level, search volume, and market dynamics to maximize your visibility and customer acquisition."
          }
        ]} />
      </section>

      <Footer />
    </div>
  );
}
