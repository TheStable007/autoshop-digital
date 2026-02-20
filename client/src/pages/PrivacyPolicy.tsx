/**
 * Privacy Policy Page
 * Legal document outlining data collection and privacy practices
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function PrivacyPolicy() {

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Privacy Policy | Auto Shop Digital"
        description="Auto Shop Digital privacy policy. How we collect, use, and protect your personal information. Last updated February 2026."
      />
      <Navigation />

      {/* Header */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Privacy Policy
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
            
            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Digital Product Labs LLC, doing business as Auto Shop Digital ("Auto Shop Digital," "we," "us," or "our"), is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>autoshopdigital.com</strong> (the "Site") and use our digital marketing services (the "Services").
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              By accessing or using our Site or Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access the Site or use our Services.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Information We Collect</h2>
            
            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Personal Information You Provide</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Request a consultation or discovery call</li>
              <li>Fill out contact forms or request information</li>
              <li>Subscribe to our newsletter or blog updates</li>
              <li>Request a free SEO audit</li>
              <li>Become a client and sign up for our Services</li>
              <li>Communicate with us via email, phone, or chat</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This information may include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, business name, mailing address</li>
              <li><strong>Business Information:</strong> Business type, website URL, services offered, location, number of employees</li>
              <li><strong>Financial Information:</strong> Payment card information, billing address (processed securely through third-party payment processors)</li>
              <li><strong>Communications:</strong> Any information you provide in emails, phone calls, chat messages, or other communications with us</li>
            </ul>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Information Automatically Collected</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you visit our Site, we automatically collect certain information about your device and browsing behavior, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Device Information:</strong> IP address, browser type and version, operating system, device type, screen resolution</li>
              <li><strong>Usage Information:</strong> Pages viewed, time spent on pages, links clicked, referring website, search terms used to find our Site</li>
              <li><strong>Location Information:</strong> General geographic location based on IP address</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, pixels, and similar technologies to collect information about your browsing behavior</li>
            </ul>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Information from Third Parties</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We may receive information about you from third-party sources, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Analytics Providers:</strong> Google Analytics, Facebook Pixel, and other analytics services</li>
              <li><strong>Advertising Networks:</strong> Google Ads, Facebook Ads, and other advertising platforms</li>
              <li><strong>Business Partners:</strong> Referral partners, affiliates, and other business partners who refer clients to us</li>
              <li><strong>Public Sources:</strong> Publicly available business information, social media profiles, business directories</li>
            </ul>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">To Provide and Improve Our Services</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Deliver digital marketing services to our clients</li>
              <li>Process payments and manage billing</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Schedule and conduct discovery calls and consultations</li>
              <li>Generate SEO audits and performance reports</li>
              <li>Improve and optimize our Services based on usage data</li>
            </ul>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">To Communicate with You</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Send service-related communications (account updates, billing notices, service changes)</li>
              <li>Provide customer support and respond to your requests</li>
              <li>Send marketing communications, newsletters, and promotional offers (with your consent)</li>
              <li>Conduct surveys and gather feedback about our Services</li>
            </ul>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">For Marketing and Analytics</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Analyze website traffic and user behavior to improve our Site</li>
              <li>Conduct market research and competitive analysis</li>
              <li>Personalize your experience on our Site</li>
              <li>Display targeted advertising on third-party platforms</li>
              <li>Track the effectiveness of our marketing campaigns</li>
            </ul>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">For Legal and Security Purposes</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Comply with legal obligations and respond to legal requests</li>
              <li>Protect our rights, property, and safety, and that of our clients and others</li>
              <li>Detect, prevent, and address fraud, security issues, and technical problems</li>
              <li>Enforce our Terms of Service and other agreements</li>
            </ul>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">How We Share Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell your personal information to third parties. We may share your information in the following circumstances:
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Service Providers</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We share information with third-party service providers who perform services on our behalf, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Payment Processors:</strong> Stripe, PayPal, and other payment processing services</li>
              <li><strong>Email Service Providers:</strong> For sending newsletters, marketing emails, and transactional emails</li>
              <li><strong>Analytics Providers:</strong> Google Analytics, Facebook Pixel, and other analytics platforms</li>
              <li><strong>Hosting and Infrastructure:</strong> Web hosting, cloud storage, and content delivery networks</li>
              <li><strong>Customer Support Tools:</strong> Help desk software, live chat platforms, and CRM systems</li>
              <li><strong>Marketing Platforms:</strong> Advertising networks, social media platforms, and marketing automation tools</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              These service providers are contractually obligated to protect your information and use it only for the purposes for which we disclose it to them.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Business Transfers</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If we are involved in a merger, acquisition, financing, reorganization, bankruptcy, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our Site of any change in ownership or use of your personal information.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Legal Requirements</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court, government agency, or law enforcement).
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">With Your Consent</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We may share your information with third parties when you give us explicit consent to do so.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We use cookies and similar tracking technologies to collect information about your browsing behavior and improve your experience on our Site.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Types of Cookies We Use</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the Site to function properly (e.g., session management, security)</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our Site (e.g., Google Analytics)</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign effectiveness</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Managing Cookies</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you disable cookies, some features of our Site may not function properly.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure data storage with encryption at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection and privacy</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Retention periods vary depending on the type of information and the purpose for which it was collected:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Client Data:</strong> Retained for the duration of the client relationship plus 7 years for legal and tax purposes</li>
              <li><strong>Marketing Data:</strong> Retained until you unsubscribe or request deletion</li>
              <li><strong>Website Analytics:</strong> Retained for 26 months (Google Analytics default)</li>
              <li><strong>Financial Records:</strong> Retained for 7 years as required by law</li>
            </ul>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Your Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">General Rights</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
            </ul>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">California Residents (CCPA)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, use, and share, and the right to request deletion of your personal information.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">European Residents (GDPR)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR), including the right to access, rectify, erase, restrict processing, object to processing, and data portability.
            </p>

            <h3 className="text-2xl font-heading font-bold mt-8 mb-4">Exercising Your Rights</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To exercise any of these rights, please contact us at <strong>privacy@autoshopdigital.com</strong>. We will respond to your request within 30 days.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our Site may contain links to third-party websites and services that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the privacy policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children without verification of parental consent, we will take steps to remove that information from our servers.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We encourage you to review this Privacy Policy periodically for any changes. Your continued use of our Site and Services after any modifications to this Privacy Policy will constitute your acknowledgment of the modifications and your consent to abide by the modified Privacy Policy.
            </p>

            <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <p className="text-muted-foreground mb-2"><strong>Digital Product Labs LLC</strong></p>
              <p className="text-muted-foreground mb-2">DBA Auto Shop Digital</p>
              <p className="text-muted-foreground mb-2">Email: <a href="mailto:privacy@autoshopdigital.com" className="text-primary hover:underline">privacy@autoshopdigital.com</a></p>
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
