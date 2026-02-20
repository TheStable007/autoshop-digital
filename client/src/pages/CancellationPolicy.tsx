/**
 * Cancellation Policy Page
 * Details on how to cancel services and what to expect
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, AlertCircle, Clock, FileText } from "lucide-react";
import SEO from "@/components/SEO";

export default function CancellationPolicy() {

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Cancellation Policy | Auto Shop Digital"
        description="Auto Shop Digital cancellation policy. Month-to-month contracts, 30-day notice required. No long-term commitments or cancellation fees."
      />
      <Navigation />

      {/* Header */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Cancellation Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last Updated: February 15, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 bg-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold mb-6">Quick Summary</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg border border-border">
                <Clock className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-heading font-bold mb-2">30-Day Notice</h3>
                <p className="text-sm text-muted-foreground">
                  Cancel anytime with 30 days' written notice
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-heading font-bold mb-2">90-Day Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  Full refund available within first 90 days
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <FileText className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-heading font-bold mb-2">No Penalties</h3>
                <p className="text-sm text-muted-foreground">
                  No cancellation fees or early termination charges
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Our Commitment to Flexibility</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Auto Shop Digital, we believe in earning your business every month. That's why we offer month-to-month service agreements with no long-term contracts, no cancellation fees, and a straightforward cancellation process. If our Services aren't delivering the results you need, you can cancel at any time with 30 days' notice.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">How to Cancel Your Service</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Canceling your service is simple and straightforward. Follow these steps:
            </p>

            <div className="space-y-6 my-8">
              <div className="flex gap-4 p-6 bg-muted/30 rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">Submit Written Notice</h3>
                  <p className="text-muted-foreground mb-3">
                    Send a cancellation request via email to <strong>support@autoshopdigital.com</strong> from the email address associated with your account. Include your business name, account email, and reason for cancellation (optional but appreciated for feedback).
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-muted/30 rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">Receive Confirmation</h3>
                  <p className="text-muted-foreground mb-3">
                    We will send you a confirmation email within 1-2 business days acknowledging your cancellation request and confirming your final billing date.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-muted/30 rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">30-Day Transition Period</h3>
                  <p className="text-muted-foreground mb-3">
                    We will continue providing full service for 30 days from the date of your cancellation notice. This gives you time to transition to another provider or make alternative arrangements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-muted/30 rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">Final Billing and Offboarding</h3>
                  <p className="text-muted-foreground mb-3">
                    You will be billed for the final 30-day period. After that, no further charges will be made. We will provide transition assistance and export any data or content you need.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">90-Day Money-Back Guarantee</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We stand behind the quality of our Services with a comprehensive 90-day money-back guarantee for new clients.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">How It Works</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you are not completely satisfied with our Services within the first 90 days of your service start date, you may request a full refund of all payments made. No questions asked, no hassle.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Eligibility Requirements</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To qualify for the 90-day money-back guarantee, you must:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Be a new client (first-time customer of Auto Shop Digital)</li>
              <li>Request the refund within 90 days of your service start date</li>
              <li>Have provided timely access to necessary platforms and information</li>
              <li>Have responded to our communications and participated in scheduled meetings</li>
              <li>Not have violated our Terms of Service or engaged in fraudulent activity</li>
            </ul>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">How to Request a Refund</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To request a refund under our 90-day guarantee, email <strong>support@autoshopdigital.com</strong> with "90-Day Guarantee Refund Request" in the subject line. Include your business name and account email. We will process your refund within 10 business days.
            </p>

            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg my-8">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-heading font-bold mb-2">Important Note</p>
                  <p className="text-sm text-muted-foreground">
                    After the 90-day guarantee period expires, all payments become non-refundable. You may still cancel your service at any time with 30 days' notice, but you will not receive a refund for past services rendered.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">What Happens After Cancellation</h2>
            
            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Service Continuation</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              During the 30-day notice period, we will continue providing full service as outlined in your service agreement. This includes ongoing SEO work, Google Business Profile management, ad campaign management, reporting, and support.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Access and Ownership</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Upon cancellation:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Your Content:</strong> You retain full ownership of all content created specifically for your business (blog posts, ad copy, website content)</li>
              <li><strong>Platform Access:</strong> You maintain ownership and control of your website, Google Business Profile, Google Ads account, and all other platforms</li>
              <li><strong>Data Export:</strong> We will provide exports of any data, reports, or analytics you request within 30 days of cancellation</li>
              <li><strong>Account Credentials:</strong> We will transfer or remove our access to your platforms as requested</li>
            </ul>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Transition Assistance</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We want your transition to be as smooth as possible. We offer the following transition assistance at no additional charge:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Documentation of current SEO strategies and implementations</li>
              <li>Export of keyword research, rankings, and performance data</li>
              <li>Transfer of Google Business Profile management access</li>
              <li>Transfer of Google Ads account ownership (if applicable)</li>
              <li>One transition call to answer questions and provide guidance</li>
            </ul>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Final Billing</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Your final bill will cover the 30-day notice period. After your final payment, no further charges will be made to your payment method. We will send a final invoice and receipt for your records.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Pause Service (Alternative to Cancellation)</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you need to temporarily pause service due to seasonal business changes, financial constraints, or other reasons, we offer a service pause option as an alternative to full cancellation.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">How Service Pause Works</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Duration:</strong> Pause service for 1-3 months</li>
              <li><strong>Billing:</strong> No charges during pause period</li>
              <li><strong>Reactivation:</strong> Resume service at any time with 7 days' notice</li>
              <li><strong>Retention:</strong> Your account, data, and settings remain intact</li>
              <li><strong>Limitations:</strong> Maximum of two pause periods per year</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To request a service pause, email <strong>support@autoshopdigital.com</strong> with your desired pause start and end dates.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Downgrade to Lower Tier (Alternative to Cancellation)</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If budget is a concern, consider downgrading to a lower service tier instead of canceling completely. This allows you to maintain some level of service at a reduced cost.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Downgrade Process</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Contact us to discuss which tier best fits your current needs and budget</li>
              <li>We'll adjust your service scope and billing accordingly</li>
              <li>Downgrade takes effect at your next billing cycle</li>
              <li>You can upgrade again at any time</li>
            </ul>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Cancellation by Auto Shop Digital</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              While we strive to maintain long-term relationships with all clients, we reserve the right to cancel service in the following circumstances:
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Immediate Termination</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may immediately terminate service without refund if:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Payment is more than 30 days overdue after multiple collection attempts</li>
              <li>You violate our Terms of Service or engage in fraudulent activity</li>
              <li>Your business operations violate Google's policies or applicable laws</li>
              <li>You engage in abusive, threatening, or harassing behavior toward our team</li>
              <li>Providing service becomes illegal or impractical</li>
            </ul>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Termination with Notice</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may terminate service with 30 days' notice if:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>You consistently fail to provide necessary access, information, or cooperation</li>
              <li>Your business model or practices change in ways that conflict with our values</li>
              <li>We discontinue the specific service tier or offering you're using</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In cases of termination with notice, you will receive a prorated refund for any unused portion of your service period.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Frequently Asked Questions</h2>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Can I cancel immediately without the 30-day notice?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The 30-day notice period is required to ensure a smooth transition and proper offboarding. However, if you're within the 90-day guarantee period, you can request an immediate cancellation with a full refund.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Will I lose my Google rankings if I cancel?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              SEO is an ongoing process. Rankings may decline over time without continued optimization and maintenance. We recommend having a transition plan in place before canceling to maintain your search visibility.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Can I get a refund if I cancel after 90 days?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              No. After the 90-day guarantee period, all payments are non-refundable. You will be charged for the 30-day notice period, but no further charges will be made after that.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">What happens to my Google Ads account?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If we manage your Google Ads account, we will transfer ownership back to you or remove our access as requested. Your campaigns, ad history, and account data remain yours.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Can I re-activate my account later?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Yes! If you cancel and later decide to return, we welcome you back. However, you will not be eligible for the 90-day guarantee as a returning client. Pricing and service tiers may have changed since your cancellation.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Do you offer prorated refunds for partial months?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              No. Services are billed monthly in advance, and we do not offer prorated refunds for partial months (except in cases where we terminate service with notice).
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Contact Us About Cancellation</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Before you cancel, we'd love to hear from you. Many issues can be resolved through a conversation. If you're considering cancellation due to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Budget concerns:</strong> Ask about downgrading to a lower tier or pausing service</li>
              <li><strong>Performance concerns:</strong> Schedule a strategy call to review and optimize your campaign</li>
              <li><strong>Communication issues:</strong> Let us know how we can improve our service</li>
              <li><strong>Changing needs:</strong> We may be able to adjust your service scope</li>
            </ul>

            <div className="bg-muted/30 p-6 rounded-lg my-8">
              <p className="text-muted-foreground mb-4">
                <strong>To cancel your service or discuss alternatives:</strong>
              </p>
              <p className="text-muted-foreground mb-2">Email: <a href="mailto:support@autoshopdigital.com" className="text-primary hover:underline">support@autoshopdigital.com</a></p>
              <p className="text-muted-foreground mb-2">Phone: (555) 123-4567</p>
              <p className="text-muted-foreground mb-2">Subject Line: "Service Cancellation Request" or "Discuss Service Options"</p>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg my-8">
              <p className="font-heading font-bold mb-2">We Value Your Feedback</p>
              <p className="text-sm text-muted-foreground">
                If you do decide to cancel, we'd appreciate hearing why. Your feedback helps us improve our Services for future clients. Thank you for trusting Auto Shop Digital with your digital marketing needs.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
