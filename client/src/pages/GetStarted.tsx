/* Industrial Precision Design: Get Started Page
 * Dedicated booking page with embedded Calendly calendar
 * Two-column layout: benefits on left, calendar on right
 */

import { CheckCircle2, Clock, TrendingUp } from "lucide-react";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// Declare Calendly type for TypeScript
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export default function GetStarted() {
  useEffect(() => {
    // Initialize Calendly widget when component mounts
    const initCalendly = () => {
      const widget = document.querySelector('.calendly-inline-widget') as HTMLElement;
      // Check if already initialized (has iframe child)
      if (widget && window.Calendly && !widget.querySelector('iframe')) {
        window.Calendly.initInlineWidget({
          url: widget.getAttribute('data-url') || '',
          parentElement: widget
        });
      }
    };

    // Check if Calendly script is already loaded
    if (window.Calendly) {
      initCalendly();
    } else {
      // Wait for script to load
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          initCalendly();
          clearInterval(checkCalendly);
        }
      }, 100);

      return () => clearInterval(checkCalendly);
    }
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Get Started | Book Your Discovery Call | Auto Shop Digital"
        description="Ready to grow your auto shop? Book a free discovery call to discuss your marketing goals. No commitment required. Choose your preferred time today."
      />
      <Navigation />
      {/* Hero Section */}
      <section className="bg-accent text-accent-foreground py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Book Your Free Discovery Call
            </h1>
            <p className="text-xl text-accent-foreground/80">
              Schedule a 30-minute strategy session with our founder to discuss your shop's growth goals and create a customized marketing plan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            {/* Left Column - Benefits & Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-3xl mb-6">
                  What You'll Get From This Call
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-2">
                        Custom Growth Strategy
                      </h3>
                      <p className="text-muted-foreground">
                        We'll analyze your current online presence, identify quick wins, and outline a 90-day roadmap to dominate your local market. You'll leave with actionable insights—even if we don't work together.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-2">
                        Competitive Analysis
                      </h3>
                      <p className="text-muted-foreground">
                        We'll show you exactly where you stand against local competitors, which keywords they're ranking for, and the specific gaps you can exploit to capture more customers.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-2">
                        ROI Projections
                      </h3>
                      <p className="text-muted-foreground">
                        Based on your average repair order and local search volume, we'll project realistic customer acquisition numbers and revenue impact for your first 6 months.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Prepare */}
              <div className="bg-accent/50 p-6 rounded-lg">
                <h3 className="font-heading font-bold text-xl mb-4">
                  Come Prepared With:
                </h3>
                <ul className="space-y-2 text-accent-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Your current website URL (if you have one)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Average repair order value and monthly revenue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Your biggest marketing frustrations or challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Goals for the next 6-12 months</span>
                  </li>
                </ul>
              </div>

              {/* Trust Indicators */}
              <div className="border-l-4 border-primary pl-6">
                <p className="text-lg font-medium mb-2">
                  No pressure, no sales pitch
                </p>
                <p className="text-muted-foreground">
                  This is a genuine strategy session. We'll be honest about whether we're a good fit, and you'll walk away with valuable insights regardless of whether you decide to work with us.
                </p>
              </div>
            </div>

            {/* Right Column - Calendly Embed */}
            <div>
              {/* Calendly inline widget */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/auto-shop-digital/seo-discovery-call?hide_gdpr_banner=1&primary_color=ff6b00" 
                style={{minWidth: '320px', height: '1200px', overflow: 'visible'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                  What happens during the discovery call?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We'll spend 30 minutes discussing your shop's current marketing efforts, analyzing your online presence, and identifying immediate opportunities for growth. You'll receive actionable insights whether or not we decide to work together.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                  Is there any cost or obligation?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  No. The discovery call is completely free with zero obligation. We believe in demonstrating value upfront. If we're not the right fit for your shop, we'll tell you honestly.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                  What should I prepare before the call?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Have your current website URL ready (if you have one), know your average repair order value and monthly revenue, and think about your biggest marketing challenges. The more context you provide, the more specific our recommendations will be.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                  How long until I see results if we work together?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Most shops see increased phone calls and appointment requests within 30-60 days. SEO improvements take 3-6 months to fully mature, but we focus on quick wins first—optimizing your Google Business Profile, fixing website issues, and launching targeted local ads.
                </p>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                  Do you work with shops outside of California?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  While we specialize in California markets, we work with auto repair shops nationwide. Our strategies are proven across different markets, and we adapt our approach based on your local competition and search behavior.
                </p>
              </div>

              {/* FAQ Item 6 */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                  What makes you different from other marketing agencies?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We exclusively serve auto repair shops. We understand your industry, your customers, and the specific challenges you face. We don't do generic marketing—every strategy is tailored to automotive service businesses and designed to drive real repair orders, not just website traffic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-accent text-accent-foreground py-12">
        <div className="container text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
            Questions Before Booking?
          </h2>
          <p className="text-xl text-accent-foreground/80 mb-6 max-w-2xl mx-auto">
            Call us at <a href="tel:+18332260795" className="text-primary hover:underline font-bold">(833) 226-0795</a> or email{" "}
            <a href="mailto:hello@autoshopdigital.com" className="text-primary hover:underline font-bold">hello@autoshopdigital.com</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
