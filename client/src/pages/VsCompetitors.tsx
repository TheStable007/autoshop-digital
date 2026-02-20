/**
 * Competitive Comparison Page
 * Design Philosophy: Industrial Precision with transparent comparison tables
 * - Objective, factual comparisons without disparaging competitors
 * - Clear visual hierarchy with comparison tables
 * - Safety orange accents for Auto Shop Digital advantages
 */

import { Check, X, AlertCircle } from 'lucide-react';
import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

export default function VsCompetitors() {
  return (
    <>
    <SEO 
      title="Why Choose Us Over Competitors | Auto Shop Digital"
      description="See how Auto Shop Digital compares to other automotive marketing agencies. No setup fees, 90-day guarantee, industry specialization, transparent pricing."
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              How We Compare to Other Auto Shop Marketing Agencies
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              We believe in radical transparency. Here's an honest comparison of Auto Shop Digital 
              versus typical industry alternatives, so you can make an informed decision for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Main Comparison Table */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Side-by-Side Comparison</h2>
            <p className="text-xl text-neutral-600 text-center mb-12">
              See how Auto Shop Digital stacks up against typical industry competitors
            </p>

            <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-neutral-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-neutral-100 border-b-2 border-neutral-300">
                      <th className="px-6 py-4 text-left text-sm font-bold text-neutral-900 uppercase tracking-wider">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold bg-orange-500 text-white uppercase tracking-wider">
                        Auto Shop Digital
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-neutral-900 uppercase tracking-wider">
                        Typical Competitor
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {/* Pricing Structure */}
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-neutral-900">
                        Pricing Structure
                      </td>
                      <td className="px-6 py-4 text-center bg-orange-50">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="w-5 h-5 text-orange-600" />
                          <span className="font-semibold text-neutral-900">Clear 4-tier system</span>
                        </div>
                        <p className="text-sm text-neutral-600 mt-1">$695 - $3,495/month</p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <AlertCircle className="w-5 h-5 text-amber-600" />
                          <span className="text-neutral-700">5+ confusing tiers</span>
                        </div>
                        <p className="text-sm text-neutral-500 mt-1">$295 - $1,395/month</p>
                      </td>
                    </tr>

                    {/* Setup Fees */}
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-neutral-900">
                        Setup Fees
                      </td>
                      <td className="px-6 py-4 text-center bg-orange-50">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="w-5 h-5 text-orange-600" />
                          <span className="font-bold text-orange-600 text-lg">$0</span>
                        </div>
                        <p className="text-sm text-neutral-600 mt-1">No barriers to entry</p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <X className="w-5 h-5 text-red-600" />
                          <span className="text-neutral-700">Day 1 development fee</span>
                        </div>
                        <p className="text-sm text-neutral-500 mt-1">$1,000 - $3,000+</p>
                      </td>
                    </tr>

                    {/* Performance Guarantee */}
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-neutral-900">
                        Performance Guarantee
                      </td>
                      <td className="px-6 py-4 text-center bg-orange-50">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="w-5 h-5 text-orange-600" />
                          <span className="font-semibold text-neutral-900">90-day money-back</span>
                        </div>
                        <p className="text-sm text-neutral-600 mt-1">Clear terms & criteria</p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <AlertCircle className="w-5 h-5 text-amber-600" />
                          <span className="text-neutral-700">Unclear or none</span>
                        </div>
                        <p className="text-sm text-neutral-500 mt-1">Vague promises</p>
                      </td>
                    </tr>

                    {/* Industry Specialization */}
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-neutral-900">
                        Industry Specialization
                      </td>
                      <td className="px-6 py-4 text-center bg-orange-50">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="w-5 h-5 text-orange-600" />
                          <span className="font-semibold text-neutral-900">Shop-type specific</span>
                        </div>
                        <p className="text-sm text-neutral-600 mt-1">Brake, tire, transmission, etc.</p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <X className="w-5 h-5 text-red-600" />
                          <span className="text-neutral-700">Generic automotive</span>
                        </div>
                        <p className="text-sm text-neutral-500 mt-1">One-size-fits-all approach</p>
                      </td>
                    </tr>

                    {/* Results Reporting */}
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-neutral-900">
                        Results Reporting
                      </td>
                      <td className="px-6 py-4 text-center bg-orange-50">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="w-5 h-5 text-orange-600" />
                          <span className="font-semibold text-neutral-900">Detailed monthly ROI</span>
                        </div>
                        <p className="text-sm text-neutral-600 mt-1">Calls, leads, revenue tracked</p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <AlertCircle className="w-5 h-5 text-amber-600" />
                          <span className="text-neutral-700">Basic dashboards</span>
                        </div>
                        <p className="text-sm text-neutral-500 mt-1">Activity metrics only</p>
                      </td>
                    </tr>

                    {/* Geographic Presence */}
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-neutral-900">
                        West Coast Presence
                      </td>
                      <td className="px-6 py-4 text-center bg-orange-50">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="w-5 h-5 text-orange-600" />
                          <span className="font-semibold text-neutral-900">California-based</span>
                        </div>
                        <p className="text-sm text-neutral-600 mt-1">Local market expertise</p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <X className="w-5 h-5 text-red-600" />
                          <span className="text-neutral-700">East Coast (NC, etc.)</span>
                        </div>
                        <p className="text-sm text-neutral-500 mt-1">3-hour timezone gap</p>
                      </td>
                    </tr>

                    {/* Contract Terms */}
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-neutral-900">
                        Contract Terms
                      </td>
                      <td className="px-6 py-4 text-center bg-orange-50">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="w-5 h-5 text-orange-600" />
                          <span className="font-semibold text-neutral-900">Month-to-month</span>
                        </div>
                        <p className="text-sm text-neutral-600 mt-1">Earn your business monthly</p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <AlertCircle className="w-5 h-5 text-amber-600" />
                          <span className="text-neutral-700">6-12 month contracts</span>
                        </div>
                        <p className="text-sm text-neutral-500 mt-1">Lock-in required</p>
                      </td>
                    </tr>

                    {/* Website Experience */}
                    <tr className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-neutral-900">
                        Website Experience
                      </td>
                      <td className="px-6 py-4 text-center bg-orange-50">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="w-5 h-5 text-orange-600" />
                          <span className="font-semibold text-neutral-900">Fast & accessible</span>
                        </div>
                        <p className="text-sm text-neutral-600 mt-1">Mobile-optimized, no barriers</p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <X className="w-5 h-5 text-red-600" />
                          <span className="text-neutral-700">Bot protection</span>
                        </div>
                        <p className="text-sm text-neutral-500 mt-1">Cloudflare challenges</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Total Cost of Ownership */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Total Cost of Ownership</h2>
            <p className="text-xl text-neutral-600 text-center mb-12">
              Setup fees add up quickly. Here's what you actually pay over time.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Auto Shop Digital */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-8 border-2 border-orange-500">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Auto Shop Digital</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-2 border-b border-orange-300">
                    <span className="text-neutral-700">Setup Fee</span>
                    <span className="font-bold text-orange-600">$0</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-orange-300">
                    <span className="text-neutral-700">Monthly (Foundation)</span>
                    <span className="font-bold text-neutral-900">$1,495</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t-2 border-orange-400">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-neutral-900">12-Month Total</span>
                    <span className="text-2xl font-bold text-orange-600">$17,940</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-neutral-900">24-Month Total</span>
                    <span className="text-2xl font-bold text-orange-600">$35,880</span>
                  </div>
                </div>
              </div>

              {/* Typical Competitor */}
              <div className="bg-neutral-100 rounded-lg p-8 border-2 border-neutral-300">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Typical Competitor</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-2 border-b border-neutral-300">
                    <span className="text-neutral-700">Setup Fee</span>
                    <span className="font-bold text-red-600">$2,500</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-neutral-300">
                    <span className="text-neutral-700">Monthly (RPM 4)</span>
                    <span className="font-bold text-neutral-900">$1,095</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t-2 border-neutral-400">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-neutral-900">12-Month Total</span>
                    <span className="text-2xl font-bold text-neutral-700">$15,640</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-neutral-900">24-Month Total</span>
                    <span className="text-2xl font-bold text-neutral-700">$28,780</span>
                  </div>
                </div>

                <p className="text-sm text-neutral-600 mt-4 text-center italic">
                  *But with fewer services and no specialization
                </p>
              </div>
            </div>

            <div className="mt-8 bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
              <p className="text-neutral-800 leading-relaxed">
                <strong className="text-orange-600">Note:</strong> While our monthly investment is higher, 
                you get comprehensive services, industry specialization, and a 90-day guarantee—with no 
                upfront barriers. Our clients see 5:1 to 8:1 ROI, making the higher monthly investment 
                a smart business decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Why This Matters for Your Shop</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg border border-neutral-200">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">No Surprises</h3>
                <p className="text-neutral-600 leading-relaxed">
                  You know exactly what you're paying from day one. No hidden setup fees, no surprise 
                  charges, no confusing tier structures. Just transparent pricing and clear deliverables.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border border-neutral-200">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Risk-Free Testing</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Our 90-day guarantee means you can test our services without risk. If we don't deliver 
                  results, you get your money back. No long-term contracts, no penalties.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border border-neutral-200">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Specialized Expertise</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Generic automotive marketing doesn't work. A brake shop needs different strategies than 
                  a transmission specialist. We understand these differences and build strategies accordingly.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border border-neutral-200">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Measurable Results</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We track every call, every lead, every job that comes from our marketing. You'll see 
                  exactly how many customers we're bringing you and the revenue they generate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
          }} />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Make an Informed Decision?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              We've shown you the facts. Now let's discuss how we can help your specific shop grow. 
              Book a free discovery call to see if we're the right fit.
            </p>
            <Link
              href="/get-started"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg"
            >
              Schedule Your Free Discovery Call
            </Link>
            <p className="text-sm text-neutral-400 mt-4">
              No pressure, no sales pitch. Just an honest conversation about your goals.
            </p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
