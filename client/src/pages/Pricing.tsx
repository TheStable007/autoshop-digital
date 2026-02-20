/**
 * Enhanced Pricing Page with Starter Tier
 * Industrial Precision design: Diagonal sections, safety orange CTAs, geometric clarity
 * Added: Starter tier, comparison table, ROI calculator
 */

import { Button } from "@/components/ui/button";
import { Check, Calculator, TrendingUp, DollarSign } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Pricing() {
  const [roiInputs, setRoiInputs] = useState({
    monthlyRevenue: 50000,
    averageTicket: 500,
    desiredGrowth: 30
  });

  const programs = [
    {
      name: "Starter",
      price: "$695",
      period: "/month",
      description: "Essential digital marketing for budget-conscious shops testing professional marketing services",
      popular: false,
      isNew: true,
      features: [
        "Google Business Profile optimization",
        "Basic local SEO (10 keywords)",
        "Monthly review management",
        "Quarterly content updates",
        "Monthly performance reporting",
        "No setup fees",
        "90-day money-back guarantee",
        "Month-to-month (no long-term contract)"
      ]
    },
    {
      name: "Foundation",
      price: "$1,495",
      period: "/month",
      description: "Complete digital foundation for local auto shops ready to establish their online presence",
      popular: true,
      isNew: false,
      features: [
        "SEO strategy for core services and local market",
        "Monthly on-page optimization and content",
        "Google Business Profile management (1 location)",
        "Online directory and citation management",
        "AI visibility strategy and content",
        "Schema and structured data implementation",
        "Social media audit and weekly posts",
        "Website conversion improvements",
        "Monthly performance reporting",
        "Client portal with live dashboard"
      ]
    },
    {
      name: "Accelerate",
      price: "$2,495",
      period: "/month",
      description: "Comprehensive growth program combining organic, paid, and AI strategies for maximum impact",
      popular: false,
      isNew: false,
      features: [
        "Everything in Foundation, plus:",
        "Google Ads strategy and management",
        "High-intent search campaign optimization",
        "Landing page optimization for conversions",
        "Up to 3 AI-focused content pieces monthly",
        "Quarterly PR content distribution",
        "Advanced conversion optimization",
        "2 hours monthly website maintenance",
        "Phone tracking and ROI analytics",
        "Bi-monthly email campaign summaries"
      ]
    }
  ];

  // ROI Calculator Logic
  const calculateROI = () => {
    const { monthlyRevenue, averageTicket, desiredGrowth } = roiInputs;
    const targetRevenue = monthlyRevenue * (1 + desiredGrowth / 100);
    const additionalRevenue = targetRevenue - monthlyRevenue;
    const newCustomersNeeded = Math.ceil(additionalRevenue / averageTicket);
    const estimatedMarketingInvestment = Math.min(additionalRevenue * 0.15, 3495); // 15% of additional revenue or max tier
    const projectedROI = (additionalRevenue / estimatedMarketingInvestment).toFixed(1);
    
    return {
      targetRevenue,
      additionalRevenue,
      newCustomersNeeded,
      estimatedMarketingInvestment,
      projectedROI
    };
  };

  const roiResults = calculateROI();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Pricing | Auto Shop Digital Marketing Services"
        description="Transparent pricing for auto shop marketing services. 4 tiers from $695-$3,495/month. No setup fees, 90-day guarantee, cancel anytime. View plans."
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-black mb-6 leading-tight">
            Growth 360 Programs
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing. No setup fees. 90-day guarantee. Choose the level that matches your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Check className="w-4 h-4 text-[#FF6B35]" />
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Check className="w-4 h-4 text-[#FF6B35]" />
              <span>90-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Check className="w-4 h-4 text-[#FF6B35]" />
              <span>Month-to-Month</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`relative bg-card border-2 rounded-lg p-8 flex flex-col ${
                  program.popular
                    ? "border-[#FF6B35] shadow-2xl scale-105"
                    : "border-border hover:border-[#FF6B35]/50 transition-all"
                }`}
              >
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B35] text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                {program.isNew && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    NEW!
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-bold mb-2">{program.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold text-[#FF6B35]">{program.price}</span>
                    <span className="text-muted-foreground">{program.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => { window.location.href = '/get-started'; }}
                  className={`w-full ${
                    program.popular
                      ? "bg-[#FF6B35] hover:bg-[#FF6B35]/90"
                      : "bg-primary hover:bg-primary/90"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Program Comparison Table */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-4">
              Compare Our Programs
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              See exactly what's included in each tier to choose the right fit for your shop
            </p>

            <div className="bg-card rounded-lg shadow-xl overflow-hidden border border-border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted">
                      <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">
                        Starter<br /><span className="text-[#FF6B35] font-normal">$695/mo</span>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold bg-[#FF6B35] text-white uppercase tracking-wider">
                        Foundation<br /><span className="font-normal">$1,495/mo</span>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">
                        Accelerate<br /><span className="text-[#FF6B35] font-normal">$2,495/mo</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {/* SEO & Content */}
                    <tr className="bg-muted/50">
                      <td colSpan={4} className="px-6 py-3 font-bold text-sm uppercase tracking-wide">
                        SEO & Content
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Keyword Research & Strategy</td>
                      <td className="px-6 py-4 text-center">10 keywords</td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5 font-semibold">Full strategy</td>
                      <td className="px-6 py-4 text-center">Full strategy</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">On-page Optimization</td>
                      <td className="px-6 py-4 text-center">—</td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5"><Check className="w-5 h-5 text-[#FF6B35] mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-[#FF6B35] mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Content Updates</td>
                      <td className="px-6 py-4 text-center">Quarterly</td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5 font-semibold">Monthly</td>
                      <td className="px-6 py-4 text-center font-semibold">Monthly</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">AI-focused Content</td>
                      <td className="px-6 py-4 text-center">—</td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5"><Check className="w-5 h-5 text-[#FF6B35] mx-auto" /></td>
                      <td className="px-6 py-4 text-center font-semibold">Up to 3/month</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Schema & Structured Data</td>
                      <td className="px-6 py-4 text-center">—</td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5"><Check className="w-5 h-5 text-[#FF6B35] mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-[#FF6B35] mx-auto" /></td>
                    </tr>

                    {/* Local & GBP */}
                    <tr className="bg-muted/50">
                      <td colSpan={4} className="px-6 py-3 font-bold text-sm uppercase tracking-wide">
                        Local SEO & Google Business Profile
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">GBP Optimization</td>
                      <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-[#FF6B35] mx-auto" /></td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5 font-semibold">Full management</td>
                      <td className="px-6 py-4 text-center font-semibold">Full management</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Review Management</td>
                      <td className="px-6 py-4 text-center">Monthly</td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5"><Check className="w-5 h-5 text-[#FF6B35] mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-[#FF6B35] mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Directory & Citation Management</td>
                      <td className="px-6 py-4 text-center">—</td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5"><Check className="w-5 h-5 text-[#FF6B35] mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-[#FF6B35] mx-auto" /></td>
                    </tr>

                    {/* Paid Advertising */}
                    <tr className="bg-muted/50">
                      <td colSpan={4} className="px-6 py-3 font-bold text-sm uppercase tracking-wide">
                        Paid Advertising
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Google Ads Management</td>
                      <td className="px-6 py-4 text-center">—</td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5">—</td>
                      <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-[#FF6B35] mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Landing Page Optimization</td>
                      <td className="px-6 py-4 text-center">—</td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5">—</td>
                      <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-[#FF6B35] mx-auto" /></td>
                    </tr>

                    {/* Social & PR */}
                    <tr className="bg-muted/50">
                      <td colSpan={4} className="px-6 py-3 font-bold text-sm uppercase tracking-wide">
                        Social Media & PR
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Social Media Posts</td>
                      <td className="px-6 py-4 text-center">—</td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5">Weekly</td>
                      <td className="px-6 py-4 text-center">Weekly</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">PR Content Distribution</td>
                      <td className="px-6 py-4 text-center">—</td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5">—</td>
                      <td className="px-6 py-4 text-center">Quarterly</td>
                    </tr>

                    {/* Analytics & Support */}
                    <tr className="bg-muted/50">
                      <td colSpan={4} className="px-6 py-3 font-bold text-sm uppercase tracking-wide">
                        Analytics & Support
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Performance Reporting</td>
                      <td className="px-6 py-4 text-center">Monthly</td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5">Monthly + Dashboard</td>
                      <td className="px-6 py-4 text-center">Monthly + Dashboard</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Phone Tracking & ROI Analytics</td>
                      <td className="px-6 py-4 text-center">—</td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5">—</td>
                      <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-[#FF6B35] mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Website Maintenance</td>
                      <td className="px-6 py-4 text-center">—</td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5">Basic</td>
                      <td className="px-6 py-4 text-center">2 hours/month</td>
                    </tr>

                    {/* Guarantees */}
                    <tr className="bg-muted/50">
                      <td colSpan={4} className="px-6 py-3 font-bold text-sm uppercase tracking-wide">
                        Guarantees & Terms
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Setup Fees</td>
                      <td className="px-6 py-4 text-center font-semibold text-[#FF6B35]">$0</td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5 font-semibold text-[#FF6B35]">$0</td>
                      <td className="px-6 py-4 text-center font-semibold text-[#FF6B35]">$0</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">90-Day Money-Back Guarantee</td>
                      <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-[#FF6B35] mx-auto" /></td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5"><Check className="w-5 h-5 text-[#FF6B35] mx-auto" /></td>
                      <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-[#FF6B35] mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Contract Terms</td>
                      <td className="px-6 py-4 text-center font-semibold text-[#FF6B35]">Month-to-Month</td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5 font-semibold text-[#FF6B35]">Month-to-Month</td>
                      <td className="px-6 py-4 text-center font-semibold text-[#FF6B35]">Month-to-Month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button
                onClick={() => { window.location.href = '/get-started'; }}
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90"
              >
                Choose Your Program
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison with Competitors */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-4">
              How We Compare to Industry Alternatives
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              See why shops choose Auto Shop Digital over traditional competitors
            </p>

            <div className="bg-card rounded-lg shadow-xl overflow-hidden border border-border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted">
                      <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold bg-[#FF6B35] text-white uppercase tracking-wider">
                        Auto Shop Digital
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">
                        Typical Competitor
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-6 py-4 font-semibold">Starting Price</td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5 font-bold text-[#FF6B35]">$695/month</td>
                      <td className="px-6 py-4 text-center text-muted-foreground">$295-$795/month</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Setup Fees</td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5 font-bold text-[#FF6B35]">$0</td>
                      <td className="px-6 py-4 text-center text-muted-foreground">$1,000-$3,000+</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Performance Guarantee</td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5 font-bold text-[#FF6B35]">90-day money-back</td>
                      <td className="px-6 py-4 text-center text-muted-foreground">Unclear or none</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Industry Specialization</td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5 font-bold text-[#FF6B35]">Shop-type specific</td>
                      <td className="px-6 py-4 text-center text-muted-foreground">Generic automotive</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Contract Terms</td>
                      <td className="px-6 py-4 text-center bg-[#FF6B35]/5 font-bold text-[#FF6B35]">Month-to-month</td>
                      <td className="px-6 py-4 text-center text-muted-foreground">6-12 month lock-in</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/vs-competitors">
                <a className="text-[#FF6B35] hover:underline font-semibold">
                  View Detailed Comparison →
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B35] rounded-full mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-heading font-bold mb-4">
                Calculate Your Potential ROI
              </h2>
              <p className="text-xl text-muted-foreground">
                See how much revenue growth you need to justify marketing investment
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="bg-card rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold mb-6">Your Shop's Numbers</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Current Monthly Revenue
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="number"
                        value={roiInputs.monthlyRevenue}
                        onChange={(e) => setRoiInputs({...roiInputs, monthlyRevenue: Number(e.target.value)})}
                        className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Average Repair Order Value
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="number"
                        value={roiInputs.averageTicket}
                        onChange={(e) => setRoiInputs({...roiInputs, averageTicket: Number(e.target.value)})}
                        className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Desired Growth Percentage
                    </label>
                    <div className="relative">
                      <TrendingUp className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="number"
                        value={roiInputs.desiredGrowth}
                        onChange={(e) => setRoiInputs({...roiInputs, desiredGrowth: Number(e.target.value)})}
                        className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 rounded-lg p-8 border-2 border-[#FF6B35]">
                <h3 className="text-2xl font-bold mb-6">Your Projected Results</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Target Monthly Revenue</div>
                    <div className="text-3xl font-bold text-[#FF6B35]">
                      ${roiResults.targetRevenue.toLocaleString()}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Additional Revenue Needed</div>
                    <div className="text-3xl font-bold">
                      ${roiResults.additionalRevenue.toLocaleString()}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">New Customers Needed Monthly</div>
                    <div className="text-3xl font-bold">
                      {roiResults.newCustomersNeeded} customers
                    </div>
                  </div>

                  <div className="pt-6 border-t-2 border-[#FF6B35]/30">
                    <div className="text-sm text-muted-foreground mb-1">Recommended Marketing Investment</div>
                    <div className="text-3xl font-bold text-[#FF6B35]">
                      ${roiResults.estimatedMarketingInvestment.toLocaleString()}/month
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Projected ROI</div>
                    <div className="text-4xl font-bold text-green-600">
                      {roiResults.projectedROI}:1
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      For every $1 invested, you get ${roiResults.projectedROI} back
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-muted/50 border-l-4 border-[#FF6B35] p-6 rounded">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Note:</strong> This calculator provides estimates based on industry averages. 
                Actual results vary based on your market, competition, service quality, and capacity. Our clients typically 
                see 5:1 to 8:1 ROI within 6 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Still Not Sure? We've Got You Covered.
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our 90-day money-back guarantee means you can test our services risk-free. 
              If we don't deliver results, you get 100% of your investment back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/guarantee">
                <a className="inline-block bg-white text-[#1a1a1a] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-all">
                  Learn About Our Guarantee
                </a>
              </Link>
              <Button
                onClick={() => { window.location.href = '/get-started'; }}
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white"
              >
                Schedule Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
