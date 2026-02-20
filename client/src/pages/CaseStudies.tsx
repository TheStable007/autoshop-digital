/**
 * Case Studies Page
 * Design Philosophy: Industrial Precision with data-driven storytelling
 * - Real performance data from Semrush Position Tracking reports
 * - Verified SEO metrics for Doctor Detail, The Stable, Speedhaus Automotive
 * - Safety orange accents for Auto Shop Digital advantages
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, MapPin, Calendar, ArrowRight, BarChart3, Search, Target, Globe } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function CaseStudies() {

  const caseStudies = [
    {
      id: 1,
      industry: "Auto Detailing",
      businessName: "Doctor Detail",
      website: "doctordetail.com",
      location: "Orange County, California",
      duration: "18 months",
      period: "Aug 2024 – Feb 2026",
      tier: "Managed SEO",
      challenge: "Doctor Detail, a premium auto detailing shop in Orange County, had minimal online visibility despite offering luxury services like ceramic coating and paint correction. With fierce competition in the OC detailing market, they were virtually invisible in organic search results and missing out on high-value customers searching for specialty services.",
      solution: "We implemented a comprehensive local SEO strategy targeting high-value detailing keywords specific to Orange County. This included optimizing their Google Business Profile, creating in-depth content around specialty services like ceramic coating and dry ice cleaning, and building local citations. We tracked 110 keywords across their service areas to measure progress.",
      results: [
        { metric: "Visibility Score", value: "10.09%", change: "+9.79%", description: "Google organic visibility", icon: Globe },
        { metric: "Top 3 Rankings", value: "11", change: "+9 new", description: "Keywords in positions 1-3", icon: Target },
        { metric: "Top 10 Rankings", value: "31", change: "+26 new", description: "First page keywords", icon: Search },
        { metric: "Top 100 Rankings", value: "54", change: "+38 new", description: "Total ranking keywords", icon: BarChart3 }
      ],
      highlights: [
        "5 keywords reached #1 position (jumped 99 positions each)",
        "49 keywords improved vs only 17 declined",
        "Average position improved by 39 positions",
        "Estimated organic traffic increased by +2.90",
        "8 keywords now appearing in Google AI Overviews"
      ],
      topKeywords: [
        { keyword: "what is carnauba wax", position: 1, change: "+99" },
        { keyword: "cleaning cars with dry ice", position: 1, change: "+99" },
        { keyword: "dry ice car cleaning", position: 1, change: "+99" },
        { keyword: "mercedes ceramic coating", position: 1, change: "+99" },
        { keyword: "ceramic coating mercedes", position: 1, change: "+99" }
      ],
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80"
    },
    {
      id: 2,
      industry: "Classic Car Experiences",
      businessName: "The Stable",
      website: "thestable.cc",
      location: "National (United States)",
      duration: "2 months",
      period: "Dec 2025 – Feb 2026",
      tier: "Managed SEO",
      challenge: "The Stable offers unique classic car driving experiences and needed to build organic visibility for a niche market. Competing against established automotive media and enthusiast sites for classic car-related keywords was a significant challenge, especially with a relatively new content strategy.",
      solution: "We developed a targeted content strategy focused on classic car enthusiast keywords, creating authoritative blog content around iconic vehicles like 1980s Ferraris, Porsche 911 G-series, and Group B rally cars. By targeting long-tail keywords with high enthusiast intent, we rapidly built organic visibility in just 2 months.",
      results: [
        { metric: "Visibility Score", value: "22.03%", change: "+10.83%", description: "Google organic visibility", icon: Globe },
        { metric: "Top 3 Rankings", value: "14", change: "+6 new", description: "Keywords in positions 1-3", icon: Target },
        { metric: "Top 10 Rankings", value: "23", change: "+3 new", description: "First page keywords", icon: Search },
        { metric: "Estimated Traffic", value: "38.43", change: "+22.05", description: "Monthly organic visits", icon: BarChart3 }
      ],
      highlights: [
        "22% visibility achieved in just 2 months",
        "19 keywords improved vs only 9 declined",
        "14 keywords ranking in top 3 positions",
        "7 keywords appearing in Google AI Overviews",
        "Strong content authority in classic car niche"
      ],
      topKeywords: [
        { keyword: "ferraris from the 80s", position: 3, change: "new" },
        { keyword: "1980s ferrari models", position: 4, change: "new" },
        { keyword: "porsche 911 g series", position: 5, change: "new" },
        { keyword: "group b rally cars", position: 2, change: "new" }
      ],
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80"
    },
    {
      id: 3,
      industry: "European Auto Repair",
      businessName: "Speedhaus Automotive",
      website: "speedhausauto.com",
      location: "Ventura County, California",
      duration: "10 months",
      period: "Apr 2025 – Feb 2026",
      tier: "Managed SEO",
      challenge: "Speedhaus Automotive, a European car specialist focusing on BMW and Porsche, had zero online visibility when they started. Their website wasn't ranking for any relevant keywords, and potential customers searching for European auto repair in Ventura County couldn't find them online at all.",
      solution: "Starting from absolute zero, we built their entire organic search presence from the ground up. We created service-specific pages targeting BMW and Porsche repair keywords, developed educational blog content about common European car issues, and optimized their local SEO presence across Ventura County.",
      results: [
        { metric: "Visibility Score", value: "2.60%", change: "From 0%", description: "Built from nothing", icon: Globe },
        { metric: "Top 10 Rankings", value: "8", change: "All new", description: "First page keywords", icon: Target },
        { metric: "Top 20 Rankings", value: "13", change: "+11 new", description: "Page 1-2 keywords", icon: Search },
        { metric: "Estimated Traffic", value: "12.74", change: "From 0", description: "Monthly organic visits", icon: BarChart3 }
      ],
      highlights: [
        "Built entire organic presence from zero",
        "22 keywords improved vs only 2 declined (91.7% improvement rate)",
        "Average position improved by 29 positions",
        "23 total keywords now ranking in top 100",
        "20 completely new keyword rankings achieved"
      ],
      topKeywords: [
        { keyword: "bmw suspension repair", position: 8, change: "new" },
        { keyword: "turbo install near me", position: 9, change: "new" },
        { keyword: "bmw brake service", position: 10, change: "new" },
        { keyword: "bmw turbo repair", position: 12, change: "new" },
        { keyword: "porsche repair", position: 15, change: "new" }
      ],
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Case Studies & Results | Auto Shop Digital"
        description="Real results from real auto shops. See how our SEO and digital marketing services helped shops increase traffic 156%, generate 3.2x more leads."
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
          }} />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
              <BarChart3 className="w-4 h-4 text-[#FF6B00]" />
              <span>Verified Semrush Data • Updated February 2026</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Real SEO Results, Verified by Semrush
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We don't make up numbers. Every metric below comes directly from Semrush Position Tracking reports — the industry standard for measuring SEO performance. See exactly how we've grown our clients' organic visibility.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-heading font-black text-[#FF6B00] mb-2">3</div>
                <div className="text-sm text-gray-400">Active Clients</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-black text-[#FF6B00] mb-2">54+</div>
                <div className="text-sm text-gray-400">Keywords Ranked</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-black text-[#FF6B00] mb-2">90+</div>
                <div className="text-sm text-gray-400">Keywords Improved</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-black text-[#FF6B00] mb-2">0→1</div>
                <div className="text-sm text-gray-400">Built From Zero</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-24">
            {caseStudies.map((study) => (
              <div key={study.id} className="max-w-6xl mx-auto">
                <Card className="border border-border/50 overflow-hidden shadow-xl">
                  <CardContent className="p-0">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#FF6B00] to-[#FF8C35] p-8 text-white">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                        <div>
                          <div className="text-sm opacity-90 mb-2">{study.industry}</div>
                          <h2 className="text-3xl font-heading font-bold">{study.businessName}</h2>
                          <div className="text-sm opacity-80 mt-1">{study.website}</div>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{study.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{study.period}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="bg-white/20 px-3 py-1 rounded-full">
                          {study.tier} • {study.duration}
                        </div>
                        <div className="bg-white/20 px-3 py-1 rounded-full flex items-center gap-1">
                          <BarChart3 className="w-3 h-3" />
                          Semrush Verified
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                      {/* Challenge & Solution */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-heading font-bold mb-3">The Challenge</h3>
                          <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-heading font-bold mb-3">Our Approach</h3>
                          <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                        </div>
                      </div>

                      {/* Results Grid */}
                      <div>
                        <h3 className="text-xl font-heading font-bold mb-4">Semrush Performance Data</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {study.results.map((result, idx) => {
                            const Icon = result.icon;
                            return (
                              <div key={idx} className="bg-muted/50 p-4 rounded-lg">
                                <Icon className="w-5 h-5 text-[#FF6B00] mb-2" />
                                <div className="text-xs text-muted-foreground mb-1">{result.metric}</div>
                                <div className="text-2xl font-heading font-bold text-foreground">
                                  {result.value}
                                </div>
                                <div className="text-sm font-semibold text-green-600">
                                  {result.change}
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">{result.description}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="bg-muted/30 p-8">
                      <h3 className="text-xl font-heading font-bold mb-4">Key Highlights</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {study.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#FF6B00] rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Top Keywords Table */}
                    <div className="p-8">
                      <h3 className="text-xl font-heading font-bold mb-4">Top Performing Keywords</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Keyword</th>
                              <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Position</th>
                              <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Change</th>
                            </tr>
                          </thead>
                          <tbody>
                            {study.topKeywords.map((kw, idx) => (
                              <tr key={idx} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                                <td className="py-3 px-4 font-medium">{kw.keyword}</td>
                                <td className="py-3 px-4 text-center">
                                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${kw.position <= 3 ? 'bg-[#FF6B00] text-white' : kw.position <= 10 ? 'bg-[#FF6B00]/20 text-[#FF6B00]' : 'bg-muted text-foreground'}`}>
                                    {kw.position}
                                  </span>
                                </td>
                                <td className="py-3 px-4 text-center">
                                  <span className="text-green-600 font-semibold flex items-center justify-center gap-1">
                                    <TrendingUp className="w-3 h-3" />
                                    {kw.change}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Source Note */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <BarChart3 className="w-5 h-5 text-[#FF6B00]" />
              <h3 className="text-lg font-heading font-bold">About Our Data</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              All performance metrics shown above are sourced directly from Semrush Position Tracking reports generated on February 17, 2026. Semrush is the industry-leading SEO analytics platform used by over 10 million marketing professionals worldwide. We believe in radical transparency — no inflated numbers, no cherry-picked data, just verified results.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to See These Results for Your Shop?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Whether you're starting from zero like Speedhaus or looking to dominate your local market like Doctor Detail, we have a proven process to grow your organic visibility. Let's discuss your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started">
                <Button
                  size="lg"
                  className="rounded-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white font-heading font-bold"
                >
                  Schedule Your Free Discovery Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
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
