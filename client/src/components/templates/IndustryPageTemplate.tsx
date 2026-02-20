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
import { CheckCircle2, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export interface IndustryPageData {
  // SEO & Meta
  title: string; // Page title for SEO
  metaDescription: string; // Meta description for SEO
  slug: string; // URL slug (e.g., "auto-repair-shops")
  
  // Hero Section
  heroHeadline: string; // H1 with primary keyword
  heroSubheadline: string;
  heroImage: string; // URL to hero image
  
  // Industry Overview (NEW - for SEO content)
  industryOverview?: {
    title: string;
    paragraphs: string[]; // 2-3 paragraphs of industry context
  };
  
  // Industry Challenges
  challenges: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  
  // How It Works / Process (NEW - for SEO content)
  process?: {
    title: string;
    description: string;
    steps: Array<{
      number: number;
      title: string;
      description: string;
    }>;
  };
  
  // Solutions/Services
  solutions: Array<{
    title: string;
    description: string;
    benefits: string[];
  }>;
  
  // Why Choose Us
  whyChooseUs: Array<{
    title: string;
    description: string;
  }>;
  
  // Common Mistakes (NEW - for SEO content)
  commonMistakes?: {
    title: string;
    description: string;
    mistakes: Array<{
      title: string;
      description: string;
      solution: string;
    }>;
  };
  
  // Benefits Breakdown (NEW - for SEO content)
  benefitsBreakdown?: {
    title: string;
    description: string;
    benefits: Array<{
      title: string;
      description: string;
      impact: string;
    }>;
  };
  
  // Case Study/Testimonial
  caseStudy?: {
    businessName: string;
    businessType: string;
    location: string;
    quote: string;
    author: string;
    authorTitle: string;
    results: Array<{
      metric: string;
      value: string;
    }>;
  };
  
  // FAQ
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  
  // Final CTA
  finalCtaHeadline: string;
  finalCtaSubheadline: string;
}

interface IndustryPageTemplateProps {
  data: IndustryPageData;
}

export default function IndustryPageTemplate({ data }: IndustryPageTemplateProps) {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#1a1a1a]">
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {data.heroHeadline}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {data.heroSubheadline}
            </p>
            <Button
              size="lg"
              className="bg-[#F3680F] hover:bg-[#d95a0c] text-white font-semibold px-8 py-6 text-lg"
              onClick={() => setIsCalendlyOpen(true)}
            >
              Book Your Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Overview Section */}
      {data.industryOverview && (
        <section className="py-20 bg-[#1a1a1a]">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-8">
                {data.industryOverview.title}
              </h2>
              <div className="space-y-6">
                {data.industryOverview.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Industry Challenges Section */}
      <section className="py-20 bg-[#2a2a2a]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Challenges Facing {data.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We understand the unique obstacles your business faces in today's competitive market.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.challenges.map((challenge, index) => (
              <Card key={index} className="bg-[#1a1a1a] border-gray-700 p-8 hover:border-[#F3680F] transition-colors">
                <div className="text-[#F3680F] mb-4">
                  {challenge.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {challenge.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {challenge.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works / Process Section */}
      {data.process && (
        <section className="py-20 bg-[#1a1a1a]">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                {data.process.title}
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                {data.process.description}
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-8">
              {data.process.steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#F3680F] rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Solutions Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Solutions for Your Business
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital marketing services designed specifically for your industry.
            </p>
          </div>
          
          <div className="space-y-12">
            {data.solutions.map((solution, index) => (
              <div key={index} className="bg-[#2a2a2a] border border-gray-700 rounded-lg p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {solution.benefits.map((benefit, bIndex) => (
                    <div key={bIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-[#F3680F] flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#2a2a2a]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Auto Shop Digital
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We specialize in automotive digital marketing and understand your industry inside and out.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {data.whyChooseUs.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#F3680F] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      {data.commonMistakes && (
        <section className="py-20 bg-[#1a1a1a]">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                {data.commonMistakes.title}
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                {data.commonMistakes.description}
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-8">
              {data.commonMistakes.mistakes.map((mistake, index) => (
                <Card key={index} className="bg-[#2a2a2a] border-gray-700 p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    ❌ {mistake.title}
                  </h3>
                  <p className="text-gray-400 text-lg mb-4 leading-relaxed">
                    {mistake.description}
                  </p>
                  <div className="flex items-start gap-3 bg-[#1a1a1a] p-4 rounded-lg">
                    <CheckCircle2 className="h-6 w-6 text-[#F3680F] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold mb-1">The Right Approach:</p>
                      <p className="text-gray-300 leading-relaxed">{mistake.solution}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Breakdown Section */}
      {data.benefitsBreakdown && (
        <section className="py-20 bg-[#2a2a2a]">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                {data.benefitsBreakdown.title}
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                {data.benefitsBreakdown.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {data.benefitsBreakdown.benefits.map((benefit, index) => (
                <Card key={index} className="bg-[#1a1a1a] border-gray-700 p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-lg mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#F3680F] font-semibold">
                    <ArrowRight className="h-5 w-5" />
                    <span>{benefit.impact}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Study Section */}
      {data.caseStudy && (
        <section className="py-20 bg-[#1a1a1a]">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Success Story
                </h2>
                <p className="text-xl text-gray-400">
                  Real results from a business just like yours
                </p>
              </div>
              
              <Card className="bg-[#2a2a2a] border-gray-700 p-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {data.caseStudy.businessName}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {data.caseStudy.businessType} • {data.caseStudy.location}
                  </p>
                </div>
                
                <blockquote className="text-2xl text-gray-300 italic mb-8 leading-relaxed border-l-4 border-[#F3680F] pl-6">
                  "{data.caseStudy.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4 mb-10">
                  <div>
                    <p className="text-white font-semibold text-lg">
                      {data.caseStudy.author}
                    </p>
                    <p className="text-gray-400">
                      {data.caseStudy.authorTitle}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {data.caseStudy.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold text-[#F3680F] mb-2">
                        {result.value}
                      </div>
                      <div className="text-gray-400">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-[#2a2a2a]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-400">
                Get answers to common questions about our services
              </p>
            </div>
            
            <div className="space-y-4">
              {data.faqs.map((faq, index) => (
                <div key={index} className="bg-[#1a1a1a] border border-gray-700 rounded-lg overflow-hidden">
                  <button
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-[#2a2a2a] transition-colors"
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

      {/* Final CTA Section */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              {data.finalCtaHeadline}
            </h2>
            <p className="text-2xl text-gray-300 mb-10 leading-relaxed">
              {data.finalCtaSubheadline}
            </p>
            <Button
              size="lg"
              className="bg-[#F3680F] hover:bg-[#d95a0c] text-white font-semibold px-12 py-8 text-xl"
              onClick={() => setIsCalendlyOpen(true)}
            >
              Schedule Your Discovery Call
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
