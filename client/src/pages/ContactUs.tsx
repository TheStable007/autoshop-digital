/**
 * Contact Us Page
 * Industrial Precision design: Diagonal sections, safety orange CTAs, geometric clarity
 * Formspree integration for email submissions: https://formspree.io/f/xwvnqeqv
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import SEO from "@/components/SEO";

export default function ContactUs() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    shopName: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          shopName: formData.shopName,
          message: formData.message
        })
      });

      if (response.ok) {
        navigate("/thank-you?from=contact");
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Contact Us | Auto Shop Digital"
        description="Get in touch with Auto Shop Digital. Free consultation for auto repair shop marketing. California-based team ready to help grow your business."
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Ready to grow your auto shop? Let's talk about how we can help you dominate your local market.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg p-8">
                    <h2 className="text-3xl font-heading font-black mb-6">
                      Send Us a Message
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>

                    {submitError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6">
                        <p className="font-semibold">Submission failed</p>
                        <p className="text-sm mt-1">{submitError}</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">Your Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="John Smith"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="shopName">Shop Name</Label>
                          <Input
                            id="shopName"
                            name="shopName"
                            type="text"
                            placeholder="Smith's Auto Repair"
                            value={formData.shopName}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@autoshop.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">How Can We Help? *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your auto shop and what you're looking to achieve with digital marketing..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          rows={6}
                          className="mt-2"
                        />
                      </div>

                      <Button 
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-black mb-2">Phone</h3>
                <a href="tel:+18332260795" className="text-lg text-primary hover:underline">
                  (833) 226-0795
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Monday - Friday, 9am - 6pm PST
                </p>
              </div>

              {/* Email */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-black mb-2">Email</h3>
                <a href="mailto:hello@autoshopdigital.com" className="text-lg text-primary hover:underline break-all">
                  hello@autoshopdigital.com
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  We respond within 24 hours
                </p>
              </div>

              {/* Business Hours */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-black mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border">
                    All times Pacific Standard Time (PST)
                  </p>
                </div>
              </div>

              {/* Office Location */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-black mb-3">Mailing Address</h3>
                <div className="text-sm space-y-1">
                  <p className="font-semibold">440 N Barranca Ave #1425</p>
                  <p className="text-muted-foreground">Covina, CA 91723</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
                Common Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to questions you may have
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-heading font-bold mb-2">
                  How quickly will I hear back from you?
                </h3>
                <p className="text-muted-foreground">
                  We respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly at (833) 226-0795.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-heading font-bold mb-2">
                  Do you offer free consultations?
                </h3>
                <p className="text-muted-foreground">
                  Yes! We offer a free 30-minute discovery call to discuss your shop's needs, review your current online presence, and explain how our services can help you grow.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-heading font-bold mb-2">
                  What information should I include in my message?
                </h3>
                <p className="text-muted-foreground">
                  Let us know your shop name, location, what services you offer, and what challenges you're facing with digital marketing. The more details you provide, the better we can prepare for our conversation.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-heading font-bold mb-2">
                  Can I visit your office in person?
                </h3>
                <p className="text-muted-foreground">
                  While we primarily work remotely with clients across California and beyond, we're happy to schedule in-person meetings. Please call ahead to arrange a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
            Prefer to Get Started Right Away?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Skip the contact form and jump straight into our onboarding process to start growing your auto shop today.
          </p>
          <Link href="/get-started">
            <Button 
              size="lg" 
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg px-8 py-6"
            >
              START YOUR GROWTH PLAN
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
