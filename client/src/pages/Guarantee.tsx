/**
 * Guarantee Page
 * Design Philosophy: Industrial Precision with trust-building transparency
 * - Complete transparency about guarantee terms
 * - Clear expectations and success criteria
 * - Safety orange accents for key benefits
 */

import { Shield, CheckCircle, AlertTriangle, FileText, Clock, TrendingUp } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

export default function Guarantee() {
  return (
    <>
    <SEO 
      title="Our 90-Day Guarantee | Auto Shop Digital"
      description="Risk-free auto shop marketing with our 90-day performance guarantee. If we don't improve your rankings, we work for free until we do. Learn more."
    />
    <Navigation />
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
          }} />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500 rounded-full mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Our 90-Day Money-Back Guarantee
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              We're so confident in our ability to deliver results that we offer a complete 90-day 
              money-back guarantee. If we don't deliver on our promises, you don't pay.
            </p>
          </div>
        </div>
      </section>

      {/* The Guarantee Promise */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-12 border-2 border-orange-500 shadow-xl">
              <h2 className="text-3xl font-bold text-center mb-8 text-neutral-900">Our Promise to You</h2>
              
              <div className="prose prose-lg max-w-none text-neutral-800">
                <p className="text-xl leading-relaxed mb-6">
                  When you partner with Auto Shop Digital, you're taking a risk on us. We understand that. 
                  That's why we're willing to take the risk with you.
                </p>
                
                <p className="text-xl leading-relaxed font-semibold text-orange-700">
                  If within the first 90 days of working together, you're not satisfied with our services 
                  or the results we're delivering, we'll refund 100% of your investment—no questions asked.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t-2 border-orange-300">
                <p className="text-center text-neutral-700 italic">
                  This isn't a marketing gimmick. It's a genuine commitment to earning your business 
                  through results, not contracts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">What's Covered by Our Guarantee</h2>
            <p className="text-xl text-neutral-600 text-center mb-12">
              Our guarantee covers all services and deliverables outlined in your Growth 360 program tier
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Service Delivery</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      All promised services must be delivered on time and to professional standards. 
                      This includes website optimization, content creation, SEO implementation, Google 
                      Business Profile management, and advertising campaign setup.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Performance Metrics</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      We track and report on key performance indicators including website traffic, 
                      phone calls, form submissions, Google Business Profile views, and search rankings. 
                      If we're not moving the needle, you're covered.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Communication Standards</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      You'll receive monthly performance reports, regular strategy updates, and responsive 
                      communication from your dedicated account manager. If we're not meeting these 
                      communication standards, you're covered.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Strategic Direction</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      We provide industry-specific strategies tailored to your shop type (brake, tire, 
                      transmission, etc.). If our strategies aren't aligned with your business goals or 
                      market realities, you're covered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Criteria */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">What We Measure for Success</h2>
            <p className="text-xl text-neutral-600 text-center mb-12">
              These are the metrics we track to ensure we're delivering value to your business
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Website Traffic Growth</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      We aim for a <strong>50-150% increase in organic website traffic</strong> within 
                      90 days. This includes both direct searches for your shop and discovery searches 
                      for services you offer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Lead Generation</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      We track phone calls, form submissions, and appointment requests. Our goal is to 
                      deliver <strong>measurable increases in qualified leads</strong> that turn into 
                      paying customers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Search Visibility</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Your Google Business Profile views and search rankings for key services should show 
                      <strong> consistent upward trends</strong>. We monitor these weekly and adjust 
                      strategies accordingly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Review Growth & Reputation</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      We help you build a <strong>stronger online reputation</strong> through review 
                      management, response strategies, and reputation monitoring across all major platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Exclusions */}
      <section className="py-20 bg-neutral-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Important Exclusions & Limitations</h2>
            <p className="text-xl text-neutral-600 text-center mb-12">
              To maintain fairness and clarity, here's what's NOT covered by our guarantee
            </p>

            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-amber-400">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Client Non-Cooperation</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      If you don't provide requested information, access to accounts, or approval for 
                      recommended strategies within reasonable timeframes, the guarantee may be voided. 
                      We need your partnership to deliver results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">External Factors Beyond Our Control</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      Major algorithm changes, natural disasters, economic downturns, or other external 
                      factors that significantly impact all businesses in your market are not covered. 
                      However, we'll work with you to adapt strategies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Unrealistic Expectations</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      If your expectations significantly exceed industry benchmarks (e.g., expecting 1,000% 
                      growth in 30 days), we'll discuss realistic goals during onboarding. The guarantee 
                      covers reasonable, data-driven performance targets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Shop Service Quality Issues</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      We can bring customers to your door, but we can't control the service experience 
                      they receive. If poor reviews or service quality issues undermine our marketing 
                      efforts, this is outside our guarantee scope.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Advertising Budget Constraints</h3>
                    <p className="text-neutral-600 leading-relaxed">
                      For tiers that include paid advertising, results depend partially on ad spend. 
                      If you choose to run campaigns with insufficient budget for your market's 
                      competitiveness, we'll advise you but can't guarantee results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Claim */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">How to Claim Your Guarantee</h2>
            <p className="text-xl text-neutral-600 text-center mb-12">
              We've made the process simple and straightforward
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Contact Your Account Manager</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Within the 90-day period, reach out to your dedicated account manager via email or 
                  phone to express your concerns.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Review & Discussion</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We'll review your account, discuss specific concerns, and determine if the guarantee 
                  criteria have been met.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-full text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Refund Processing</h3>
                <p className="text-neutral-600 leading-relaxed">
                  If eligible, we'll process your full refund within 10 business days via your original 
                  payment method.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-neutral-900 mb-2">Documentation Requirements</h4>
                  <p className="text-neutral-700 leading-relaxed">
                    To process your guarantee claim, we'll need to review our service delivery records, 
                    performance reports, and communication history. This ensures fairness and helps us 
                    understand where we fell short.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Offer This */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Why We Offer This Guarantee</h2>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-neutral-300 leading-relaxed mb-6">
                Most marketing agencies won't offer guarantees like this because they're not confident 
                in their ability to deliver results. We are.
              </p>
              
              <p className="text-xl text-neutral-300 leading-relaxed mb-6">
                We've spent years developing specialized strategies for auto repair shops. We know what 
                works for brake shops, tire shops, transmission specialists, and every other type of 
                automotive business. We track our results obsessively, and we know we can deliver value.
              </p>
              
              <p className="text-xl text-neutral-300 leading-relaxed font-semibold">
                This guarantee isn't just a marketing tool—it's a reflection of our confidence in our 
                process, our team, and our commitment to your success.
              </p>
            </div>

            <div className="mt-12">
              <Link
                href="/get-started"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg"
              >
                Start Your Risk-Free Partnership Today
              </Link>
              <p className="text-sm text-neutral-400 mt-4">
                90-day guarantee • No setup fees • No long-term contracts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Guarantee FAQs</h2>

            <div className="space-y-6">
              <details className="bg-white rounded-lg p-6 shadow-lg border border-neutral-200 group">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Does the 90-day period start from my first payment or first service delivery?</span>
                  <Clock className="w-5 h-5 text-orange-500 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  The 90-day period starts from your first payment date. This gives us time to implement 
                  strategies and for you to see initial results before the guarantee period expires.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 shadow-lg border border-neutral-200 group">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Can I get a partial refund if I'm only partially satisfied?</span>
                  <Clock className="w-5 h-5 text-orange-500 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  Our guarantee is all-or-nothing. If you're not satisfied and meet the guarantee criteria, 
                  you receive a 100% refund. We believe this keeps us accountable to deliver complete value.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 shadow-lg border border-neutral-200 group">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>What happens to my website and accounts if I claim the guarantee?</span>
                  <Clock className="w-5 h-5 text-orange-500 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  All work we've completed remains yours. We'll transfer ownership of any accounts we 
                  manage and provide documentation of all work completed. You keep everything we've built.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 shadow-lg border border-neutral-200 group">
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>Is there a limit to how many times I can claim the guarantee?</span>
                  <Clock className="w-5 h-5 text-orange-500 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  The guarantee applies once per client relationship. If you claim the guarantee and later 
                  decide to work with us again, the guarantee would apply to that new engagement as well.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
