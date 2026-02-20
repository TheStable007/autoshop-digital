/**
 * Enhanced About Us Page
 * Design Philosophy: Industrial Precision with trust-building elements
 * - Team bios with photos
 * - Company history and mission
 * - Certifications and partnerships
 * - Why We're Different section
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Check, Target, Users, Award, TrendingUp, Shield, MapPin, Clock, ArrowRight, Linkedin } from "lucide-react";

export default function AboutUs() {

  const teamMembers = [
    {
      name: "Daniel Harman",
      title: "CEO, Founder",
      bio: "Daniel is a keen car enthusiast and experience marketer, which lead him to launch Auto Shop Digital back in 2017. Responsible today for the ongoing operations of the business and making sure clients receive a healthy ROI.",
      expertise: ["Local SEO Strategy", "Google Business Profile", "Automotive Industry"],
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663285621680/VXOFCkkPhGocUaVR.png",
      linkedin: "https://www.linkedin.com/in/danharman"
    },
    {
      name: "Sage Longo",
      title: "Sales & Account Manager",
      bio: "Experience Sales and Account Manager, Sage manages client relationships, coordinates strategy implementation, and provides detailed performance reporting. 5+ years in digital marketing account management for automotive businesses.",
      expertise: ["Account Management", "Performance Reporting", "Client Relations"],
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663285621680/YVZnfnpHriGMyZhf.png",
      linkedin: "https://www.linkedin.com/in/sage-longo/"
    },
    {
      name: "David Wong",
      title: "Content Manager",
      bio: "Responsible for clients' content marketing and strategy. David combines technical automotive knowledge with content marketing expertise to create educational content that ranks and converts.",
      expertise: ["Content Marketing", "Automotive Knowledge", "Link Building"],
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663285621680/TQiqBZlvcUMyqGmT.jpg",
      linkedin: "https://www.linkedin.com/in/david-wong-6b766a1a6/"
    }
  ];

  const certifications = [
    { name: "Google Partner", icon: Shield },
    { name: "Google Analytics Certified", icon: Award },
    { name: "Google Ads Certified", icon: Award },
    { name: "Bing Ads Accredited", icon: Award }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="About Auto Shop Digital | Automotive Marketing Experts"
        description="Meet the team behind Auto Shop Digital. 8+ years helping auto shops grow with expert SEO and digital marketing. California-based, automotive-focused."
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
          }} />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Digital Marketing Experts for Auto Shops
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              We're a California-based digital marketing agency specializing exclusively in helping auto repair shops and automotive businesses dominate their local markets.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Our Story
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Auto Shop Digital was founded with a simple mission: to help independent auto repair shops compete and win in the digital age. We saw too many skilled mechanics and shop owners struggling to attract customers online while their expertise went unnoticed.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike general marketing agencies that dabble in automotive, we've dedicated ourselves exclusively to this industry. We understand the unique challenges auto shops face—from seasonal fluctuations to fierce local competition to the trust barrier customers have when choosing a mechanic.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the past 8+ years, we've helped over 200 auto shops across California and beyond transform their online presence, attract more qualified leads, and grow their businesses. Our proven strategies combine technical SEO expertise with deep automotive industry knowledge to deliver results that matter: more phone calls, more appointments, and more revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-heading font-black text-[#FF6B35] mb-2">8+</div>
              <div className="text-lg font-heading font-bold mb-1">Years</div>
              <div className="text-sm text-muted-foreground">Industry Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-heading font-black text-[#FF6B35] mb-2">200+</div>
              <div className="text-lg font-heading font-bold mb-1">Auto Shops</div>
              <div className="text-sm text-muted-foreground">Successfully Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-heading font-black text-[#FF6B35] mb-2">94%</div>
              <div className="text-lg font-heading font-bold mb-1">Retention</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-heading font-black text-[#FF6B35] mb-2">287%</div>
              <div className="text-lg font-heading font-bold mb-1">Growth</div>
              <div className="text-sm text-muted-foreground">Average Traffic Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry experts dedicated to your success. Real people, not outsourced contractors.
            </p>
          </div>

          {/* Hero Team Photo */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663285621680/nvfmqZqgxRURZvYm.jpg"
                alt="Auto Shop Digital Team"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-heading font-bold mb-2">Driven by Results, Powered by Expertise</h3>
                <p className="text-lg text-gray-200">Your dedicated team of automotive digital marketing specialists</p>
              </div>
            </div>
          </div>

          {/* Individual Team Members */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border border-border/50 overflow-hidden group hover:shadow-xl transition-all duration-300 !p-0 !gap-0">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-heading font-bold mb-1">{member.name}</h3>
                      <div className="text-[#FF6B35] font-semibold text-lg">{member.title}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-[#FF6B35]/10 text-[#FF6B35] px-3 py-1 rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#FF6B35] hover:text-[#FF6B35]/80 transition-colors font-medium text-sm"
                    >
                      <Linkedin className="w-5 h-5" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognized by industry leaders for our expertise and results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card key={index} className="industrial-border border-border">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-12 h-12 text-[#FF6B35] mx-auto mb-3" />
                    <div className="font-heading font-bold text-sm">{cert.name}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another marketing agency. We're automotive digital marketing specialists.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="industrial-border border-border">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-[#FF6B35]" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Automotive-Only Focus
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don't work with restaurants, lawyers, or dentists. We exclusively serve auto repair shops and automotive businesses. This laser focus means we understand your industry inside and out—from ASE certifications to bay capacity to seasonal service trends.
                </p>
              </CardContent>
            </Card>

            <Card className="industrial-border border-border">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-[#FF6B35]" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Results-Driven Approach
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're not satisfied with vanity metrics. Our 90-day performance guarantee means we're committed to delivering measurable results—more calls, more appointments, more customers. If we don't deliver results, you get your money back.
                </p>
              </CardContent>
            </Card>

            <Card className="industrial-border border-border">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-[#FF6B35]" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Dedicated Account Management
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  You're not just a number in our system. Every client gets a dedicated Account Manager who knows your business, understands your goals, and is available when you need them. No automated responses, no offshore support—just real people who care about your success.
                </p>
              </CardContent>
            </Card>

            <Card className="industrial-border border-border">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-[#FF6B35]" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Transparent & Honest
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  No smoke and mirrors. No confusing jargon. We explain exactly what we're doing, why we're doing it, and what results you can expect. You'll receive detailed monthly reports showing your progress, and we're always available to answer questions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine technical SEO expertise with automotive industry knowledge to create campaigns that actually work.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center">
                  <span className="text-xl font-heading font-bold text-white">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold mb-3">Deep Industry Research</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Before we touch your website, we conduct extensive research into your local market, competitors, and target customers. We analyze what's working for top-ranking shops in your area and identify opportunities to outperform them.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center">
                  <span className="text-xl font-heading font-bold text-white">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold mb-3">Strategic Implementation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We develop a custom strategy tailored to your shop's services, location, and goals. This includes on-page SEO optimization, Google Business Profile management, citation building, content creation, and technical improvements—all executed by our in-house team of experts.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center">
                  <span className="text-xl font-heading font-bold text-white">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold mb-3">Continuous Optimization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  SEO isn't a one-time project—it's an ongoing process. We continuously monitor your rankings, analyze performance data, and adjust our strategies to ensure you stay ahead of the competition. Monthly reports keep you informed of progress and next steps.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center">
                  <span className="text-xl font-heading font-bold text-white">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold mb-3">Measurable Results</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We track everything—from keyword rankings to phone calls to appointment bookings. You'll see exactly how many customers we're bringing you and the revenue they generate. Transparency and accountability are core to everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why California Shops Choose Us */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Why California Auto Shops Choose Us
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="industrial-border border-border">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-lg mb-3">Local Market Expertise</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Based in California, we understand the competitive LA, San Diego, and Bay Area markets. We know what works in your local area.
                  </p>
                </CardContent>
              </Card>

              <Card className="industrial-border border-border">
                <CardContent className="p-6 text-center">
                  <Clock className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-lg mb-3">Same Timezone</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    No 3-hour time difference like East Coast agencies. We're available during your business hours for calls and support.
                  </p>
                </CardContent>
              </Card>

              <Card className="industrial-border border-border">
                <CardContent className="p-6 text-center">
                  <Shield className="w-10 h-10 text-[#FF6B35] mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-lg mb-3">90-Day Guarantee</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We're so confident in our results that we offer a complete 90-day money-back guarantee. Zero risk to you.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Grow Your Auto Shop?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how our proven strategies can help you dominate your local market, attract more customers, and grow your revenue.
            </p>
            <Button
              onClick={() => { window.location.href = '/get-started'; }}
              size="lg"
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-heading font-bold"
            >
              Schedule Your Free Discovery Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-gray-400 mt-4">
              90-day guarantee • No setup fees • No long-term contracts
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
