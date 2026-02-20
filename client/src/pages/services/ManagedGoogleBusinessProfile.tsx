/**
 * Managed Google Business Profile Service Page
 * Industrial Precision design: Diagonal sections, safety orange CTAs, geometric clarity
 */

import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin, Star, Camera, MessageSquare, TrendingUp, Users, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbListSchema from "@/components/BreadcrumbListSchema";
import ServiceFAQSchema from "@/components/ServiceFAQSchema";
import SEO from "@/components/SEO";

export default function ManagedGoogleBusinessProfile() {
  const serviceData = {
    name: "Google Business Profile Optimization for Auto Shops",
    description: "Complete optimization and management of your Google Business Profile to maximize visibility in local search and Google Maps. Includes profile optimization, review management, photo/video updates, weekly posts, and performance analytics.",
    serviceType: "Google Business Profile Management",
    priceRange: "$$-$$$$",
    url: "https://autoshopdigital.com/services/managed-google-business-profile"
  };

  const features = [
    {
      icon: MapPin,
      title: "Profile Optimization",
      description: "Complete optimization of your Google Business Profile to maximize visibility in local search and Google Maps."
    },
    {
      icon: Star,
      title: "Review Management",
      description: "Proactive review monitoring, response management, and strategies to generate more positive reviews."
    },
    {
      icon: Camera,
      title: "Photo & Video Management",
      description: "Regular updates with high-quality photos and videos showcasing your shop, services, and team."
    },
    {
      icon: MessageSquare,
      title: "Post Creation & Publishing",
      description: "Weekly Google Business posts highlighting services, offers, and updates to engage local customers."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Detailed reporting on profile views, customer actions, search queries, and engagement metrics."
    },
    {
      icon: Users,
      title: "Dedicated Account Manager",
      description: "Your dedicated account manager oversees your profile and is available to contact anytime."
    },
    {
      icon: CheckCircle2,
      title: "No Setup Fees",
      description: "We're confident in our abilities and don't charge setup fees unlike most competitors."
    },
    {
      icon: Award,
      title: "90 Day Performance Promise",
      description: "We'll improve your profile performance within 90 days, or we work for free until we do."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Google Business Profile Optimization | Auto Shop Digital"
        description="Maximize your Google Business Profile visibility. Expert GBP optimization for auto shops. More reviews, better rankings, increased calls. Get started today."
      />
      <ServiceSchema {...serviceData} />
      <BreadcrumbListSchema items={[
        { name: "Home", url: "https://autoshopdigital.com" },
        { name: "Services", url: "https://autoshopdigital.com/services" },
        { name: "Google Business Profile", url: "https://autoshopdigital.com/services/managed-google-business-profile" }
      ]} />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight">
              Managed Google Business Profile
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Maximize your visibility on Google Maps and local search with our fully managed Google Business Profile service. Attract more local customers and build trust with professional profile management.
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
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80" 
                alt="Auto shop professional" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-black mb-6">
                Google Business Profile Experts for Auto Shops
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We understand that your Google Business Profile is often the first impression potential customers have of your auto shop. Our managed service ensures your profile is optimized, engaging, and working hard to bring customers through your doors.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With deep expertise in the auto repair industry, we know exactly what local customers are looking for and how to position your shop to win their business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Critical for Local Visibility */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-heading font-black mb-6">
                Critical for Local Visibility
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Your Google Business Profile is the most important asset for local search visibility. When customers search for auto repair services on Google or Google Maps, your profile determines whether they choose your shop or a competitor.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our managed service ensures your profile is fully optimized with accurate information, engaging content, positive reviews, and regular updates that signal to Google that your business is active and trustworthy.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80" 
                alt="Google Maps on mobile" 
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
                alt="Business consultation" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-black mb-6">
                Simple Setup Process
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Getting started with our managed Google Business Profile service is straightforward. We'll handle the technical setup, optimization, and ongoing management while you focus on serving your customers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our onboarding process includes a comprehensive audit of your current profile, competitor analysis, and a customized strategy to maximize your local visibility and customer engagement.
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
                We're confident in the quality of our managed Google Business Profile service and the results we deliver. That's why we don't charge any setup fees to get your profile optimized and managed.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Simply book a call to get started and begin attracting more local customers through Google.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" 
                alt="Partnership handshake" 
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
                alt="Performance dashboard" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-black mb-6">
                90 Day Performance Promise
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We stand behind our work with a 90-day performance promise. If we don't improve your Google Business Profile performance metrics—including views, clicks, calls, and direction requests—within the first 90 days, we'll continue working for free until we do.
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
            Start Attracting More Local Customers!
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Maximize your Google Business Profile and dominate local search with our professional managed service.
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
              Complete Profile Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our managed Google Business Profile service handles everything needed to maximize your local visibility and customer engagement—allowing you to focus on running your shop.
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
            Ready to Dominate Local Search?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a call with one of our Google Business Profile experts to discuss how Auto Shop Digital can help your shop attract more local customers.
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
              Common questions about Google Business Profile optimization for auto shops
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-heading font-bold mb-3">
                Why is Google Business Profile important for auto shops?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Your Google Business Profile is often the first impression potential customers have of your auto shop. It appears in Google Maps and local search results, showing your hours, reviews, photos, and contact information. An optimized profile can significantly increase calls, directions requests, and website visits.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-heading font-bold mb-3">
                How often should I update my Google Business Profile?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We recommend posting at least weekly to keep your profile active and engaging. Our managed service includes weekly posts, monthly photo updates, regular review responses, and immediate updates to hours or services as needed. Active profiles rank higher in local search results.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-heading font-bold mb-3">
                Do you help with negative reviews?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes! Our review management service includes professional responses to all reviews, both positive and negative. We help you address customer concerns professionally, demonstrate your commitment to service, and turn negative experiences into opportunities to showcase your customer care.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-heading font-bold mb-3">
                What types of posts should I share on my Google Business Profile?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Effective posts include service promotions, seasonal maintenance reminders, before/after photos of repairs, shop updates, customer testimonials, and educational content about auto care. We create a content calendar tailored to your shop's services and seasonal opportunities.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-heading font-bold mb-3">
                How long does it take to see results from profile optimization?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Most auto shops see increased profile views and customer actions within 2-4 weeks of optimization. Full impact including improved rankings and consistent customer engagement typically develops over 60-90 days as Google recognizes your active, well-maintained profile.
              </p>
            </div>
          </div>
        </div>
        
        <ServiceFAQSchema faqs={[
          {
            question: "Why is Google Business Profile important for auto shops?",
            answer: "Your Google Business Profile is often the first impression potential customers have of your auto shop. It appears in Google Maps and local search results, showing your hours, reviews, photos, and contact information. An optimized profile can significantly increase calls, directions requests, and website visits."
          },
          {
            question: "How often should I update my Google Business Profile?",
            answer: "We recommend posting at least weekly to keep your profile active and engaging. Our managed service includes weekly posts, monthly photo updates, regular review responses, and immediate updates to hours or services as needed. Active profiles rank higher in local search results."
          },
          {
            question: "Do you help with negative reviews?",
            answer: "Yes! Our review management service includes professional responses to all reviews, both positive and negative. We help you address customer concerns professionally, demonstrate your commitment to service, and turn negative experiences into opportunities to showcase your customer care."
          },
          {
            question: "What types of posts should I share on my Google Business Profile?",
            answer: "Effective posts include service promotions, seasonal maintenance reminders, before/after photos of repairs, shop updates, customer testimonials, and educational content about auto care. We create a content calendar tailored to your shop's services and seasonal opportunities."
          },
          {
            question: "How long does it take to see results from profile optimization?",
            answer: "Most auto shops see increased profile views and customer actions within 2-4 weeks of optimization. Full impact including improved rankings and consistent customer engagement typically develops over 60-90 days as Google recognizes your active, well-maintained profile."
          }
        ]} />
      </section>

      <Footer />
    </div>
  );
}
