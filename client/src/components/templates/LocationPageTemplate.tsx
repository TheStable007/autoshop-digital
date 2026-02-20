/**
 * Industrial Precision Design Philosophy:
 * - Bauhaus-inspired geometric clarity with diagonal cuts
 * - Safety orange (#F3680F) CTAs for high visibility
 * - Poppins for headings, Helvetica for body text
 * - Deep charcoal backgrounds with metallic accents
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BreadcrumbListSchema from "@/components/BreadcrumbListSchema";

export interface LocationPageData {
  // SEO & Meta
  title: string; // Page title for SEO (e.g., "Auto Repair Digital Marketing in Los Angeles")
  metaDescription: string;
  slug: string; // URL slug (e.g., "los-angeles")
  
  // Hero Section
  cityName: string; // e.g., "Los Angeles"
  stateName: string; // e.g., "California"
  heroHeadline: string; // H1 with location keyword
  heroSubheadline: string;
  heroImage: string;
  
  // Location Details
  serviceArea: string[]; // Neighborhoods/areas served
  population?: string;
  businessCount?: string; // Number of auto businesses in area
  
  // Location Overview (NEW - for SEO content)
  locationOverview?: {
    title: string;
    paragraphs: string[]; // 2-3 paragraphs about the local market
  };
  
  // Local Market Insights
  marketInsights: Array<{
    title: string;
    description: string;
    stat?: string;
  }>;
  
  // Services for This Location
  services: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
  
  // Local Success Stories
  localTestimonials: Array<{
    businessName: string;
    neighborhood: string;
    quote: string;
    author: string;
    rating: number;
    results?: string;
  }>;
  
  // Why Choose Us in This Location
  localAdvantages: Array<{
    title: string;
    description: string;
  }>;
  
  // Local Challenges (NEW - for SEO content)
  localChallenges?: {
    title: string;
    description: string;
    challenges: Array<{
      title: string;
      description: string;
      solution: string;
    }>;
  };
  
  // Service Areas Detail (NEW - for SEO content)
  serviceAreasDetail?: {
    title: string;
    description: string;
    areas: Array<{
      name: string;
      description: string;
      highlights: string[];
    }>;
  };
  
  // Local FAQ
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  
  // Contact Info (optional - for future physical office)
  contactInfo?: {
    address?: string;
    phone?: string;
    email?: string;
    hours?: string;
  };
  
  // Google Map Embed
  mapEmbedUrl?: string; // Google Maps embed iframe URL
  googleBusinessProfileUrl?: string; // Link to Google Business Profile
}

interface LocationPageTemplateProps {
  data: LocationPageData;
}

export default function LocationPageTemplate({ data }: LocationPageTemplateProps) {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#1a1a1a]">
      <BreadcrumbListSchema items={[
        { name: "Home", url: "https://autoshopdigital.com" },
        { name: "Locations", url: "https://autoshopdigital.com/locations" },
        { name: data.cityName, url: `https://autoshopdigital.com/locations/${data.slug}` }
      ]} />
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-24 overflow-hidden"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)",
          marginBottom: "-5rem",
          paddingBottom: "8rem"
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.85), rgba(26, 26, 26, 0.85)), url(${data.heroImage})`,
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-[#F3680F]" />
              <span className="text-[#F3680F] font-semibold text-lg">
                {data.cityName}, {data.stateName}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {data.heroHeadline}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {data.heroSubheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-[#F3680F] hover:bg-[#d95a0c] text-white font-semibold px-8 py-6 text-lg"
                onClick={() => setIsCalendlyOpen(true)}
              >
                Book Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1a1a1a] px-8 py-6 text-lg"
                onClick={() => {
                  const element = document.getElementById('services');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-[#2a2a2a]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Serving {data.cityName} and Surrounding Areas
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {data.serviceArea.map((area, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-lg text-gray-300"
                >
                  {area}
                </span>
              ))}
            </div>
            {(data.population || data.businessCount) && (
              <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-3xl mx-auto">
                {data.population && (
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#F3680F] mb-2">
                      {data.population}
                    </div>
                    <div className="text-gray-400">Metro Population</div>
                  </div>
                )}
                {data.businessCount && (
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#F3680F] mb-2">
                      {data.businessCount}
                    </div>
                    <div className="text-gray-400">Auto Businesses</div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Location Overview Section */}
      {data.locationOverview && (
        <section className="py-20 bg-[#1a1a1a]">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-8">
                {data.locationOverview.title}
              </h2>
              <div className="space-y-6">
                {data.locationOverview.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Local Market Insights Section */}  <section className="py-20 bg-[#1a1a1a]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              The {data.cityName} Auto Market
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Understanding the local market to deliver better results for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {data.marketInsights.map((insight, index) => (
              <Card key={index} className="bg-[#2a2a2a] border-gray-700 p-8 hover:border-[#F3680F] transition-colors">
                {insight.stat && (
                  <div className="text-4xl font-bold text-[#F3680F] mb-4">
                    {insight.stat}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {insight.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {insight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#2a2a2a]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Services in {data.cityName}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions tailored for {data.cityName} auto businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.services.map((service, index) => (
              <Card key={index} className="bg-[#1a1a1a] border-gray-700 p-8 hover:border-[#F3680F] transition-colors">
                <div className="text-[#F3680F] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Success Stories from {data.cityName}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real results from local auto businesses we've helped grow
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {data.localTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-[#2a2a2a] border-gray-700 p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#F3680F] text-[#F3680F]" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-300 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-white font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonial.businessName} • {testimonial.neighborhood}
                  </p>
                  {testimonial.results && (
                    <p className="text-[#F3680F] font-semibold mt-2">
                      {testimonial.results}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us in This Location */}
      <section className="py-20 bg-[#2a2a2a]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why {data.cityName} Businesses Choose Us
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Local expertise combined with proven digital marketing strategies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {data.localAdvantages.map((advantage, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#F3680F] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Challenges Section */}
      {data.localChallenges && (
        <section className="py-20 bg-[#2a2a2a]">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                {data.localChallenges.title}
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                {data.localChallenges.description}
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-8">
              {data.localChallenges.challenges.map((challenge, index) => (
                <Card key={index} className="bg-[#1a1a1a] border-gray-700 p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    ❌ {challenge.title}
                  </h3>
                  <p className="text-gray-400 text-lg mb-4 leading-relaxed">
                    {challenge.description}
                  </p>
                  <div className="flex items-start gap-3 bg-[#2a2a2a] p-4 rounded-lg">
                    <CheckCircle2 className="h-6 w-6 text-[#F3680F] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold mb-1">Our Solution:</p>
                      <p className="text-gray-300 leading-relaxed">{challenge.solution}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Areas Detail Section */}
      {data.serviceAreasDetail && (
        <section className="py-20 bg-[#1a1a1a]">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                {data.serviceAreasDetail.title}
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                {data.serviceAreasDetail.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {data.serviceAreasDetail.areas.map((area, index) => (
                <Card key={index} className="bg-[#2a2a2a] border-gray-700 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-8 w-8 text-[#F3680F]" />
                    <h3 className="text-2xl font-bold text-white">
                      {area.name}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="space-y-2">
                    {area.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-[#F3680F] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-400">
                Common questions from {data.cityName} auto business owners
              </p>
            </div>
            
            <div className="space-y-4">
              {data.faqs.map((faq, index) => (
                <div key={index} className="bg-[#2a2a2a] border border-gray-700 rounded-lg overflow-hidden">
                  <button
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-[#1a1a1a] transition-colors"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <h3 className="text-xl font-semibold text-white pr-8">
                      {faq.question}
                    </h3>
                    <ArrowRight 
                      className={`h-6 w-6 text-[#F3680F] flex-shrink-0 transition-transform ${
                        expandedFaq === index ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section (if provided) */}
      {data.contactInfo && (
        <section className="py-20 bg-[#2a2a2a]">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-xl text-gray-400">
                  Ready to grow your {data.cityName} auto business?
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.contactInfo.phone && (
                  <Card className="bg-[#1a1a1a] border-gray-700 p-6 text-center">
                    <Phone className="h-8 w-8 text-[#F3680F] mx-auto mb-3" />
                    <p className="text-gray-400 text-sm mb-2">Phone</p>
                    <p className="text-white font-semibold">{data.contactInfo.phone}</p>
                  </Card>
                )}
                {data.contactInfo.email && (
                  <Card className="bg-[#1a1a1a] border-gray-700 p-6 text-center">
                    <Mail className="h-8 w-8 text-[#F3680F] mx-auto mb-3" />
                    <p className="text-gray-400 text-sm mb-2">Email</p>
                    <p className="text-white font-semibold">{data.contactInfo.email}</p>
                  </Card>
                )}
                {data.contactInfo.hours && (
                  <Card className="bg-[#1a1a1a] border-gray-700 p-6 text-center">
                    <Clock className="h-8 w-8 text-[#F3680F] mx-auto mb-3" />
                    <p className="text-gray-400 text-sm mb-2">Hours</p>
                    <p className="text-white font-semibold">{data.contactInfo.hours}</p>
                  </Card>
                )}
                {data.contactInfo.address && (
                  <Card className="bg-[#1a1a1a] border-gray-700 p-6 text-center">
                    <MapPin className="h-8 w-8 text-[#F3680F] mx-auto mb-3" />
                    <p className="text-gray-400 text-sm mb-2">Location</p>
                    <p className="text-white font-semibold text-sm">{data.contactInfo.address}</p>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Dominate the {data.cityName} Market?
            </h2>
            <p className="text-2xl text-gray-300 mb-10 leading-relaxed">
              Schedule a discovery call to learn how we can help your auto business grow in {data.cityName}.
            </p>
            <Button
              size="lg"
              className="bg-[#F3680F] hover:bg-[#d95a0c] text-white font-semibold px-12 py-8 text-xl"
              onClick={() => setIsCalendlyOpen(true)}
            >
              Book Your Discovery Call
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Google Map & Business Profile Section */}
      {(data.mapEmbedUrl || data.googleBusinessProfileUrl) && (
        <section className="py-20 bg-[#2a2a2a]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Visit Our {data.cityName} Office
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Serving auto shops throughout {data.cityName} and surrounding areas
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
              {/* Google Map Embed */}
              {data.mapEmbedUrl && (
                <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-700">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={data.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${data.cityName}`}
                    />
                  </div>
                </div>
              )}
              
              {/* Contact Info & GBP Link */}
              <div className="space-y-6">
                <Card className="bg-[#1a1a1a] border-gray-700 p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Get in Touch
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-[#F3680F] flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-white font-semibold mb-1">Service Area</p>
                        <p className="text-gray-400">
                          {data.cityName}, {data.stateName} and surrounding areas
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-[#F3680F] flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-white font-semibold mb-1">Phone</p>
                        <a href="tel:5551234567" className="text-gray-400 hover:text-[#F3680F] transition-colors">
                          (555) 123-4567
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-[#F3680F] flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-white font-semibold mb-1">Email</p>
                        <a href="mailto:info@autoshopdigital.com" className="text-gray-400 hover:text-[#F3680F] transition-colors">
                          info@autoshopdigital.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-[#F3680F] flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-white font-semibold mb-1">Business Hours</p>
                        <p className="text-gray-400">Monday - Friday: 9am - 6pm PST</p>
                        <p className="text-gray-400">Saturday: 10am - 4pm PST</p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                {/* Google Business Profile Link */}
                {data.googleBusinessProfileUrl && (
                  <Card className="bg-gradient-to-br from-[#F3680F] to-[#d95a0c] border-0 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Star className="h-8 w-8 text-white fill-white" />
                      <h3 className="text-2xl font-bold text-white">
                        Find Us on Google
                      </h3>
                    </div>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      Check out our reviews, photos, and get directions to our {data.cityName} office.
                    </p>
                    <a
                      href={data.googleBusinessProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-[#F3680F] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      View Google Business Profile
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
