/**
 * Free SEO Audit Tool Page
 * Design Philosophy: Industrial Precision with lead generation focus
 * - Simple form to capture leads
 * - Instant basic audit results
 * - CTA for comprehensive audit via discovery call
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, AlertCircle, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useLocation } from "wouter";
import SEO from "@/components/SEO";

export default function SEOAudit() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    businessName: "",
    website: "",
    email: "",
    phone: ""
  });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setSubmitError("");

    try {
      const response = await fetch("https://formspree.io/f/xwvnqeqv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: "SEO Audit Request",
          businessName: formData.businessName,
          website: formData.website,
          email: formData.email,
          phone: formData.phone,
          formType: "SEO Audit"
        })
      });

      if (response.ok) {
        navigate("/thank-you?from=seo-audit");
      } else {
        const data = await response.json();
        if (data.errors) {
          setSubmitError(data.errors.map((err: { message: string }) => err.message).join(", "));
        } else {
          setSubmitError("Something went wrong. Please try again or call us directly.");
        }
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again, or call us directly at (833) 226-0795.");
    } finally {
      setIsAnalyzing(false);
    }
  };



  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Free SEO Audit for Auto Shops | Auto Shop Digital"
        description="Get a free comprehensive SEO audit for your auto shop. Discover ranking opportunities, technical issues, and competitor insights. No obligation."
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35] rounded-full mb-6">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Free SEO Audit for Auto Shops
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Discover what's holding your website back from ranking #1 in local search. Get instant insights into your SEO performance and actionable recommendations to outrank your competitors.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35]" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35]" />
                <span>Instant Results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B35]" />
                <span>No Credit Card</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Form / Results */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
              <Card className="industrial-border border-primary">
                <CardContent className="p-12">
                  <h2 className="text-3xl font-heading font-bold mb-2 text-center">
                    Get Your Free SEO Audit
                  </h2>
                  <p className="text-muted-foreground text-center mb-8">
                    Enter your information below to receive an instant SEO analysis of your auto shop's website
                  </p>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6">
                      <p className="font-semibold">Submission failed</p>
                      <p className="text-sm mt-1">{submitError}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                        placeholder="e.g., Rodriguez Auto Repair"
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Website URL *
                      </label>
                      <input
                        type="url"
                        required
                        value={formData.website}
                        onChange={(e) => setFormData({...formData, website: e.target.value})}
                        placeholder="e.g., https://www.yourautoshop.com"
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="(555) 123-4567"
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isAnalyzing}
                      className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-heading font-bold"
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                          Analyzing Your Website...
                        </>
                      ) : (
                        <>
                          Get My Free SEO Audit
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to receive marketing communications from Auto Shop Digital. 
                      We respect your privacy and will never sell your information.
                    </p>
                  </form>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-center mb-12">
                What You'll Discover in Your Free Audit
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="industrial-border border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-4">
                      <Search className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-3">Local Search Visibility</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      See how your shop ranks for important local keywords and where you're losing potential customers to competitors.
                    </p>
                  </CardContent>
                </Card>

                <Card className="industrial-border border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-4">
                      <AlertCircle className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-3">Technical Issues</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Identify technical problems like slow page speed, mobile issues, and broken links that hurt your rankings.
                    </p>
                  </CardContent>
                </Card>

                <Card className="industrial-border border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-3">Quick Wins</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Get actionable recommendations you can implement immediately to start improving your search visibility.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

      <Footer />
    </div>
  );
}
