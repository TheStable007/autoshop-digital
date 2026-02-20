import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, CheckCircle2, Star, ChevronDown, ChevronUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { vanNuysData } from "@/data/locations/vanNuys";
import SEO from "@/components/SEO";

export default function VanNuys() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO 
        title="Auto Shop Marketing in Van Nuys CA | Auto Shop Digital"
        description="Van Nuys auto repair marketing services. Local SEO and Google Ads for Valley auto shops. Expert strategies, measurable results. Get started today."
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80')] opacity-10 bg-cover bg-center" />
        <div className="container relative z-10">
          <div className="flex items-center gap-2 text-primary mb-4">
            <MapPin className="h-5 w-5" />
            <span className="font-medium">{vanNuysData.city}, {vanNuysData.state}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {vanNuysData.heroTitle}
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mb-8">
            {vanNuysData.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => { window.location.href = '/get-started'; }} className="bg-primary hover:bg-primary/90">
              Book Discovery Call
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <h2 className="font-heading text-2xl font-bold text-center mb-6">
            Serving Van Nuys and Surrounding Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {vanNuysData.serviceAreas.map((area) => (
              <div key={area} className="px-4 py-2 bg-background rounded-full border text-sm font-medium">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
            Auto Shop Digital Marketing in Van Nuys: Market Overview
          </h2>
          <div className="space-y-6 text-lg text-foreground/80">
            {vanNuysData.marketOverview.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">The Van Nuys Auto Market</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {vanNuysData.marketStats.map((stat, idx) => (
              <Card key={idx} className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.stat}</div>
                <h3 className="font-heading text-xl font-bold mb-3">{stat.label}</h3>
                <p className="text-foreground/70">{stat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Services in Van Nuys</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vanNuysData.services.map((service, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="font-heading text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Success Stories from Van Nuys</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {vanNuysData.testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.business} • {testimonial.location}</p>
                  <p className="text-sm text-primary font-medium mt-2">{testimonial.result}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Why Choose Auto Shop Digital</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {vanNuysData.whyChooseUs.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">
            Unique Marketing Challenges for Van Nuys Auto Shops
          </h2>
          <div className="space-y-8">
            {vanNuysData.challenges.map((challenge, idx) => (
              <Card key={idx} className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-3">{challenge.title}</h3>
                <p className="text-foreground/70 mb-4">{challenge.description}</p>
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                  <p className="font-medium text-sm text-foreground/80"><strong>Our Solution:</strong> {challenge.solution}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Detail */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Service Areas Detail</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {vanNuysData.serviceAreasDetail.map((area, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="font-heading text-xl font-bold mb-3">{area.area}</h3>
                <p className="text-foreground/70">{area.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {vanNuysData.faqs.map((faq, idx) => (
              <Card key={idx} className="p-6">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-start gap-4 text-left"
                >
                  <h3 className="font-heading text-lg font-bold">{faq.question}</h3>
                  {openFaq === idx ? (
                    <ChevronUp className="h-5 w-5 flex-shrink-0 text-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <p className="mt-4 text-foreground/70">{faq.answer}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate Van Nuys Auto Search?
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            Book a free discovery call to learn how we can help your Van Nuys auto shop attract more customers and grow revenue.
          </p>
          <Button size="lg" onClick={() => { window.location.href = '/get-started'; }} className="bg-primary hover:bg-primary/90">
            Book Your Discovery Call
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
