/**
 * Thank You Page
 * Industrial Precision design: Diagonal sections, safety orange CTAs, geometric clarity
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, Calendar, FileText, TrendingUp, Mail, Phone, Send, Loader2, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { Link, useSearch } from "wouter";
import SEO from "@/components/SEO";

export default function ThankYou() {
  const searchString = useSearch();
  const source = useMemo(() => new URLSearchParams(searchString).get("from"), [searchString]);

  const [formData, setFormData] = useState({
    shopName: "",
    website: "",
    monthlyRevenue: "",
    currentMarketing: [] as string[],
    biggestChallenge: "",
    goals: "",
    timeline: ""
  });

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      currentMarketing: checked
        ? [...prev.currentMarketing, value]
        : prev.currentMarketing.filter(item => item !== value)
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("https://formspree.io/f/xwvnqeqv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: "Pre-Call Questionnaire Submission",
          shopName: formData.shopName,
          website: formData.website,
          monthlyRevenue: formData.monthlyRevenue,
          currentMarketing: formData.currentMarketing.join(", "),
          biggestChallenge: formData.biggestChallenge,
          goals: formData.goals,
          timeline: formData.timeline,
          formType: "Pre-Call Questionnaire"
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ shopName: "", website: "", monthlyRevenue: "", currentMarketing: [], biggestChallenge: "", goals: "", timeline: "" });
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
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Thank You | Auto Shop Digital"
        description="Thank you for contacting Auto Shop Digital. We'll be in touch soon to discuss how we can help grow your auto repair business."
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
            {source === "seo-audit" ? (
              <Search className="w-10 h-10 text-white" />
            ) : (
              <CheckCircle2 className="w-10 h-10 text-white" />
            )}
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight">
            {source === "seo-audit" ? "Your SEO Audit Request Is In!" : source === "contact" ? "Message Received!" : "You're All Set!"}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            {source === "seo-audit" ? (
              "Thank you for requesting a free SEO audit. Our team will analyze your website and send you a detailed report with actionable recommendations to improve your local search rankings."
            ) : source === "contact" ? (
              "Thank you for reaching out to Auto Shop Digital. We've received your message and will get back to you within 24 hours. In the meantime, feel free to book a discovery call if you'd like to speak with us sooner."
            ) : (
              "Thank you for booking your discovery call with Auto Shop Digital. We're excited to help you grow your auto shop's online presence and drive more customers through your doors."
            )}
          </p>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-heading font-black text-center mb-4">
            What Happens Next?
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {source === "seo-audit"
              ? "Here's what to expect after submitting your SEO audit request."
              : source === "contact"
              ? "Here's what to expect now that we've received your message."
              : "Here's what you can expect in the coming days leading up to your discovery call."}
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card border-2 border-border p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                {source === "seo-audit" ? "1. We Analyze Your Site" : source === "contact" ? "1. Check Your Inbox" : "1. Check Your Email"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {source === "seo-audit"
                  ? "Our team will review your website's technical SEO, local search presence, Google Business Profile, and keyword rankings."
                  : source === "contact"
                  ? "You'll receive a confirmation that we've received your message. We typically respond within 24 hours on business days."
                  : "You'll receive a confirmation email with your meeting details, calendar invite, and a link to reschedule if needed."}
              </p>
            </div>

            <div className="bg-card border-2 border-border p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                {source === "seo-audit" ? "2. You Get Your Report" : source === "contact" ? "2. We Review Your Details" : "2. Prepare for the Call"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {source === "seo-audit"
                  ? "Within 24-48 hours, you'll receive a detailed SEO audit report via email with specific findings and prioritized recommendations."
                  : source === "contact"
                  ? "A member of our team will review your message and prepare a thoughtful, personalized response to your inquiry."
                  : "Think about your current marketing challenges, business goals, and any questions you have about our services."}
              </p>
            </div>

            <div className="bg-card border-2 border-border p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                {source === "seo-audit" ? (
                  <TrendingUp className="w-8 h-8 text-primary" />
                ) : (
                  <Calendar className="w-8 h-8 text-primary" />
                )}
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                {source === "seo-audit" ? "3. Let's Talk Strategy" : source === "contact" ? "3. We'll Be in Touch" : "3. Join the Call"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {source === "seo-audit"
                  ? "Schedule a free discovery call to walk through your audit results together and discuss a custom SEO strategy for your shop."
                  : source === "contact"
                  ? "We'll reach out via your preferred contact method to answer your questions and discuss how we can help your shop grow."
                  : "We'll discuss your shop's needs, answer your questions, and create a custom growth strategy together."}
              </p>
            </div>
          </div>

          {/* CTA for SEO Audit and Contact sources */}
          {(source === "seo-audit" || source === "contact") && (
            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">
                {source === "seo-audit"
                  ? "Want to walk through your audit results with an expert? Schedule a free discovery call."
                  : "Want to speak with us sooner? Book a free 30-minute strategy session."}
              </p>
              <Link href="/get-started">
                <Button
                  size="lg"
                  className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg px-8"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Discovery Call
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-black mb-4 text-center">
              How to Prepare for Your Discovery Call
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Get the most out of our conversation by having these details ready.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Your Current Website URL
                  </h3>
                  <p className="text-muted-foreground">
                    We'll review your existing website and identify immediate opportunities for improvement.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Your Business Goals
                  </h3>
                  <p className="text-muted-foreground">
                    What does success look like? More phone calls? More bookings? Specific revenue targets?
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Current Marketing Efforts
                  </h3>
                  <p className="text-muted-foreground">
                    What are you doing now? Google Ads? Social media? This helps us avoid duplicating efforts.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    Your Top Competitors
                  </h3>
                  <p className="text-muted-foreground">
                    Who are the top 2-3 shops you compete with? We'll analyze their strategies and find your edge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Call Questionnaire */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-black mb-4">
                Help Us Prepare for Your Call
              </h2>
              <p className="text-xl text-muted-foreground">
                Take 2 minutes to share some details about your shop. This helps us make your discovery call as valuable as possible.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-card border-2 border-border p-8 md:p-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Questionnaire Submitted!</h3>
                <p className="text-lg text-muted-foreground mb-2">Thank you for sharing those details.</p>
                <p className="text-muted-foreground">We'll review your responses before our call so we can make the most of our time together.</p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="bg-card border-2 border-border p-8 md:p-12 space-y-8">
              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4">
                  <p className="font-semibold">Submission failed</p>
                  <p className="text-sm mt-1">{submitError}</p>
                </div>
              )}
              {/* Shop Name */}
              <div className="space-y-2">
                <Label htmlFor="shopName" className="text-lg font-heading font-bold">
                  Shop Name *
                </Label>
                <Input
                  id="shopName"
                  value={formData.shopName}
                  onChange={(e) => setFormData(prev => ({ ...prev, shopName: e.target.value }))}
                  placeholder="e.g., Mike's Auto Repair"
                  required
                  className="text-base"
                />
              </div>

              {/* Website URL */}
              <div className="space-y-2">
                <Label htmlFor="website" className="text-lg font-heading font-bold">
                  Current Website URL
                </Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                  placeholder="https://www.yourshop.com"
                  className="text-base"
                />
                <p className="text-sm text-muted-foreground">Leave blank if you don't have a website yet</p>
              </div>

              {/* Monthly Revenue */}
              <div className="space-y-2">
                <Label className="text-lg font-heading font-bold">
                  Approximate Monthly Revenue *
                </Label>
                <RadioGroup
                  value={formData.monthlyRevenue}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, monthlyRevenue: value }))}
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="under-25k" id="under-25k" />
                    <Label htmlFor="under-25k" className="font-normal cursor-pointer">Under $25,000</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="25k-50k" id="25k-50k" />
                    <Label htmlFor="25k-50k" className="font-normal cursor-pointer">$25,000 - $50,000</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="50k-100k" id="50k-100k" />
                    <Label htmlFor="50k-100k" className="font-normal cursor-pointer">$50,000 - $100,000</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="100k-250k" id="100k-250k" />
                    <Label htmlFor="100k-250k" className="font-normal cursor-pointer">$100,000 - $250,000</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="over-250k" id="over-250k" />
                    <Label htmlFor="over-250k" className="font-normal cursor-pointer">Over $250,000</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Current Marketing */}
              <div className="space-y-3">
                <Label className="text-lg font-heading font-bold">
                  What marketing are you currently doing? (Check all that apply)
                </Label>
                <div className="space-y-3">
                  {[
                    { id: 'google-ads', label: 'Google Ads' },
                    { id: 'facebook-ads', label: 'Facebook/Instagram Ads' },
                    { id: 'seo', label: 'SEO (Search Engine Optimization)' },
                    { id: 'social-media', label: 'Social Media (Organic)' },
                    { id: 'email', label: 'Email Marketing' },
                    { id: 'direct-mail', label: 'Direct Mail/Flyers' },
                    { id: 'none', label: 'None - Just getting started' }
                  ].map(option => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={option.id}
                        checked={formData.currentMarketing.includes(option.id)}
                        onCheckedChange={(checked) => handleCheckboxChange(option.id, checked as boolean)}
                      />
                      <Label htmlFor={option.id} className="font-normal cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Biggest Challenge */}
              <div className="space-y-2">
                <Label htmlFor="biggestChallenge" className="text-lg font-heading font-bold">
                  What's your biggest marketing challenge right now? *
                </Label>
                <Textarea
                  id="biggestChallenge"
                  value={formData.biggestChallenge}
                  onChange={(e) => setFormData(prev => ({ ...prev, biggestChallenge: e.target.value }))}
                  placeholder="e.g., Not getting enough phone calls, struggling to compete with bigger shops, website doesn't rank on Google..."
                  required
                  rows={4}
                  className="text-base"
                />
              </div>

              {/* Goals */}
              <div className="space-y-2">
                <Label htmlFor="goals" className="text-lg font-heading font-bold">
                  What would you like to achieve in the next 6-12 months? *
                </Label>
                <Textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
                  placeholder="e.g., Double my customer base, rank #1 for 'auto repair near me', increase revenue by 50%..."
                  required
                  rows={4}
                  className="text-base"
                />
              </div>

              {/* Timeline */}
              <div className="space-y-2">
                <Label className="text-lg font-heading font-bold">
                  When are you looking to get started? *
                </Label>
                <RadioGroup
                  value={formData.timeline}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="immediately" id="immediately" />
                    <Label htmlFor="immediately" className="font-normal cursor-pointer">Immediately (within 1 week)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1-month" id="1-month" />
                    <Label htmlFor="1-month" className="font-normal cursor-pointer">Within 1 month</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1-3-months" id="1-3-months" />
                    <Label htmlFor="1-3-months" className="font-normal cursor-pointer">1-3 months</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="exploring" id="exploring" />
                    <Label htmlFor="exploring" className="font-normal cursor-pointer">Just exploring options</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Pre-Call Questionnaire
                    </>
                  )}
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  This is optional but helps us prepare a customized strategy for your shop.
                </p>
              </div>
            </form>
            )}
          </div>
        </div>
      </section>

      {/* Meet Your Team */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-4xl font-heading font-black text-center mb-4">
            Meet Your Growth Partner
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            You'll be working with a dedicated team of automotive marketing experts who understand your industry.
          </p>

          <div className="max-w-3xl mx-auto bg-card border-2 border-border p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center text-white text-4xl font-heading font-black">
                  ASD
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-heading font-black mb-2">
                  Auto Shop Digital Team
                </h3>
                <p className="text-xl text-primary mb-4">
                  Automotive Marketing Specialists
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With over 8 years of experience serving 200+ auto shops, we've helped businesses like yours achieve an average 3x growth in online traffic and qualified leads. We specialize exclusively in the automotive industry, so we understand your unique challenges and opportunities.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span>8+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>200+ Shops Served</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span>90% Retention Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* While You Wait */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-4xl font-heading font-black text-center mb-4">
            While You Wait...
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Explore our resources to learn more about how we help auto shops grow.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href="/blog">
              <div className="bg-card border-2 border-border p-8 hover:border-primary transition-colors cursor-pointer">
                <FileText className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-heading font-bold mb-3">
                  Read Our Blog
                </h3>
                <p className="text-muted-foreground mb-4">
                  Learn proven strategies for auto shop marketing, SEO tips, and industry insights.
                </p>
                <span className="text-primary font-semibold">
                  Browse Articles →
                </span>
              </div>
            </Link>

            <Link href="/#results">
              <div className="bg-card border-2 border-border p-8 hover:border-primary transition-colors cursor-pointer">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-heading font-bold mb-3">
                  View Case Studies
                </h3>
                <p className="text-muted-foreground mb-4">
                  See real results from auto shops that partnered with us to grow their business.
                </p>
                <span className="text-primary font-semibold">
                  See Results →
                </span>
              </div>
            </Link>

            <Link href="/pricing">
              <div className="bg-card border-2 border-border p-8 hover:border-primary transition-colors cursor-pointer">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-heading font-bold mb-3">
                  Review Pricing
                </h3>
                <p className="text-muted-foreground mb-4">
                  Explore our Growth 360 programs and see which tier fits your business goals.
                </p>
                <span className="text-primary font-semibold">
                  View Pricing →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Need to Reschedule */}
      <section className="py-20 bg-background">
        <div className="container text-center">
          <h2 className="text-4xl font-heading font-black mb-4">
            Need to Reschedule?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            No problem! You can reschedule or cancel your appointment anytime using the link in your confirmation email, or reach out to us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-lg">
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-semibold">(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-semibold">info@autoshopdigital.com</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
