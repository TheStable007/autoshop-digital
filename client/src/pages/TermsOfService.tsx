/**
 * Terms of Service Page
 * Legal agreement governing the use of Auto Shop Digital services
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function TermsOfService() {

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Terms of Service | Auto Shop Digital"
        description="Auto Shop Digital terms of service. Legal terms and conditions for using our website and marketing services. Last updated February 2026."
      />
      <Navigation />

      {/* Header */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last Updated: February 15, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") and Digital Product Labs LLC, doing business as Auto Shop Digital ("Auto Shop Digital," "we," "us," or "our"), concerning your access to and use of our website <strong>autoshopdigital.com</strong> (the "Site") and our digital marketing services (the "Services").
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              By accessing or using our Site or Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree with these Terms, you must not access or use our Site or Services.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Services Description</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Auto Shop Digital provides digital marketing services specifically designed for automotive repair businesses, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Managed Local SEO:</strong> Search engine optimization services to improve local search rankings</li>
              <li><strong>Google Business Profile Management:</strong> Optimization and management of Google Business Profile listings</li>
              <li><strong>Google Ads Management:</strong> Creation, management, and optimization of Google Ads campaigns</li>
              <li><strong>Website Optimization:</strong> Technical and content optimization for improved search performance</li>
              <li><strong>Reputation Management:</strong> Review generation and response management</li>
              <li><strong>Content Creation:</strong> SEO-optimized content writing and publishing</li>
              <li><strong>Analytics and Reporting:</strong> Performance tracking and monthly reporting</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The specific Services provided to you will be outlined in your Service Agreement or Statement of Work.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Service Plans and Pricing</h2>
            
            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Service Tiers</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We offer multiple service tiers with varying features and pricing. Current pricing and plan details are available on our Pricing page. All prices are in United States Dollars (USD) and are subject to change with 30 days' written notice.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Payment Terms</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Billing Cycle:</strong> Services are billed monthly in advance on the anniversary date of your service start</li>
              <li><strong>Payment Methods:</strong> We accept major credit cards, debit cards, and ACH bank transfers</li>
              <li><strong>Auto-Renewal:</strong> Your subscription automatically renews each month unless you cancel</li>
              <li><strong>No Setup Fees:</strong> We do not charge setup fees or onboarding fees</li>
              <li><strong>Late Payments:</strong> Accounts with payments more than 15 days overdue may be suspended until payment is received</li>
              <li><strong>Failed Payments:</strong> If a payment fails, we will attempt to process it again. After three failed attempts, your account may be suspended</li>
            </ul>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Refunds and Guarantee</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We offer a 90-day money-back guarantee for new clients. If you are not satisfied with our Services within the first 90 days, you may request a full refund. After the 90-day period, all payments are non-refundable. See our Cancellation Policy for details on canceling your service.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Client Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To enable us to provide effective Services, you agree to:
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Access and Cooperation</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Provide timely access to your website, Google Business Profile, Google Ads account, and other necessary platforms</li>
              <li>Grant appropriate administrative permissions and credentials as needed</li>
              <li>Respond to requests for information, approvals, and feedback within reasonable timeframes</li>
              <li>Designate a primary point of contact for communications</li>
              <li>Participate in onboarding calls, strategy sessions, and review meetings as scheduled</li>
            </ul>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Content and Information</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Provide accurate and complete information about your business, services, and target market</li>
              <li>Review and approve content, ad copy, and other materials before publication</li>
              <li>Ensure that all information provided is truthful, accurate, and not misleading</li>
              <li>Notify us immediately of any changes to your business information, services, or contact details</li>
            </ul>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Compliance</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Comply with all applicable laws, regulations, and industry standards</li>
              <li>Maintain all required business licenses, certifications, and insurance</li>
              <li>Adhere to Google's Terms of Service, advertising policies, and business profile guidelines</li>
              <li>Not engage in any deceptive, fraudulent, or unethical business practices</li>
            </ul>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Service Level and Performance</h2>
            
            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Performance Expectations</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              While we strive to deliver excellent results, digital marketing outcomes depend on numerous factors beyond our control, including market conditions, competition, algorithm changes, and your business operations. We do not guarantee specific rankings, traffic levels, lead volumes, or revenue results.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">90-Day Performance Promise</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our 90-day performance promise states that if we do not improve your search rankings within the first 90 days, we will continue working for free until we do. This promise is subject to the following conditions:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>You have provided timely access to all necessary platforms and information</li>
              <li>You have responded to our requests and participated in scheduled meetings</li>
              <li>Your website and business information remain accessible and functional</li>
              <li>You have not made unauthorized changes to your website, Google Business Profile, or other platforms that interfere with our work</li>
              <li>Your business remains in good standing and compliant with all applicable laws and platform policies</li>
            </ul>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Service Modifications</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time with reasonable notice. We will make commercially reasonable efforts to notify you of any material changes that may affect your service.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Intellectual Property</h2>
            
            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Our Intellectual Property</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All content, materials, software, tools, methodologies, and intellectual property provided by Auto Shop Digital remain our exclusive property. This includes but is not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Website design, code, and functionality</li>
              <li>Marketing strategies, processes, and methodologies</li>
              <li>Templates, frameworks, and tools</li>
              <li>Reports, analytics, and dashboards</li>
              <li>Training materials and documentation</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              You may not copy, reproduce, distribute, or create derivative works from our intellectual property without our express written permission.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Your Content</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              You retain ownership of all content, trademarks, logos, and materials you provide to us. By providing content, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display your content solely for the purpose of providing Services to you.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Work Product</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Content we create specifically for your business (such as blog posts, ad copy, and website content) becomes your property upon full payment. However, we retain the right to use anonymized case studies and performance metrics for marketing purposes.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Confidentiality</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during the course of our relationship. This includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Business strategies, financial information, and trade secrets</li>
              <li>Customer data, pricing information, and competitive intelligence</li>
              <li>Login credentials, access codes, and security information</li>
              <li>Any information marked as confidential or that would reasonably be considered confidential</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This obligation continues for three years after the termination of our relationship.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To the maximum extent permitted by law, Auto Shop Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Loss of profits, revenue, or business opportunities</li>
              <li>Loss of data or information</li>
              <li>Business interruption or downtime</li>
              <li>Damage to reputation or goodwill</li>
              <li>Third-party claims or actions</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our total liability for any claims arising from or related to our Services shall not exceed the total amount paid by you for Services in the three months immediately preceding the claim.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              You agree to indemnify, defend, and hold harmless Auto Shop Digital and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising from:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Your use of our Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any law, regulation, or third-party rights</li>
              <li>Content, information, or materials you provide to us</li>
              <li>Your business operations, products, or services</li>
            </ul>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Termination</h2>
            
            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Termination by Client</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              You may cancel your Services at any time by providing 30 days' written notice. See our Cancellation Policy for complete details on the cancellation process and what happens to your account upon cancellation.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Termination by Auto Shop Digital</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We reserve the right to suspend or terminate your Services immediately if:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>You fail to pay amounts due within 15 days of the due date</li>
              <li>You violate these Terms or any applicable laws or regulations</li>
              <li>You engage in fraudulent, abusive, or unethical conduct</li>
              <li>Your business operations violate platform policies (Google, etc.)</li>
              <li>Providing Services becomes illegal or impractical</li>
            </ul>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Effect of Termination</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Upon termination:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>You remain responsible for all charges incurred through the end of your billing cycle</li>
              <li>We will cease providing Services within 30 days of notice</li>
              <li>You will retain ownership of content created specifically for your business</li>
              <li>We will provide reasonable assistance with transition (subject to additional fees)</li>
              <li>All confidentiality obligations continue as specified</li>
            </ul>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Dispute Resolution</h2>
            
            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Informal Resolution</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you have any dispute with us, you agree to first contact us at <strong>support@autoshopdigital.com</strong> and attempt to resolve the dispute informally. We will work in good faith to resolve any issues.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Arbitration</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If we cannot resolve a dispute informally within 60 days, any controversy or claim arising out of or relating to these Terms shall be settled by binding arbitration in accordance with the Commercial Arbitration Rules of the American Arbitration Association. The arbitration shall be conducted in Los Angeles County, California, and judgment on the award may be entered in any court having jurisdiction.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Class Action Waiver</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              You agree that any arbitration or proceeding shall be limited to the dispute between you and us individually. You waive any right to participate in a class action lawsuit or class-wide arbitration.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">General Provisions</h2>
            
            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Governing Law</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Entire Agreement</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              These Terms, together with our Privacy Policy and any Service Agreement or Statement of Work, constitute the entire agreement between you and Auto Shop Digital regarding our Services and supersede all prior agreements and understandings.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Severability</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Waiver</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Assignment</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Force Majeure</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Neither party shall be liable for any failure or delay in performance due to circumstances beyond their reasonable control, including acts of God, natural disasters, war, terrorism, labor disputes, or government actions.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of our Services after any changes constitutes acceptance of the new Terms.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <p className="text-muted-foreground mb-2"><strong>Digital Product Labs LLC</strong></p>
              <p className="text-muted-foreground mb-2">DBA Auto Shop Digital</p>
              <p className="text-muted-foreground mb-2">Email: <a href="mailto:support@autoshopdigital.com" className="text-primary hover:underline">support@autoshopdigital.com</a></p>
              <p className="text-muted-foreground mb-2">Phone: (555) 123-4567</p>
              <p className="text-muted-foreground mb-2">Office: 4112 Del Rey Ave, Marina Del Rey, CA 90292</p>
              <p className="text-muted-foreground">Mailing: 440 N Barranca Ave #1425, Covina, CA 91723</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
