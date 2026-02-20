/**
 * FAQ Page
 * Design Philosophy: Industrial Precision with trust-building transparency
 * - Comprehensive answers to competitive questions
 * - Clear, honest communication
 * - Safety orange accents for key points
 */

import { ChevronDown, MessageCircle, Shield, DollarSign, TrendingUp, Clock, Users } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQPageSchema from "@/components/FAQPageSchema";
import SEO from "@/components/SEO";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      icon: Shield,
      title: "About Auto Shop Digital",
      questions: [
        {
          q: "How is Auto Shop Digital different from Auto Shop Solutions and other competitors?",
          a: "We differentiate in five key ways: (1) Transparent 4-tier pricing vs. confusing 5-tier structures, (2) No setup fees vs. $1,000-$3,000+ upfront costs, (3) Industry specialization (brake shops, tire shops, transmission) vs. generic automotive marketing, (4) 90-day money-back guarantee vs. unclear guarantees, and (5) California-based with West Coast market expertise vs. East Coast competitors. We focus on measurable results with detailed monthly ROI reporting, not just marketing activities."
        },
        {
          q: "Why should I choose you over a larger, more established agency?",
          a: "Larger agencies often mean you're just another account number. We provide personalized service with dedicated account managers who understand your specific shop type. Our specialized approach for brake shops, tire shops, and other automotive businesses delivers better results than one-size-fits-all marketing. Plus, our 90-day guarantee and no-setup-fee policy show we're confident enough to earn your business through results, not contracts."
        },
        {
          q: "Are you really based in California, or is that just marketing?",
          a: "Yes, we're genuinely headquartered in Marina Del Rey, California. This isn't just a mailing address—our team works in Pacific timezone, understands California market dynamics, regulatory environments, and competitive landscapes. When you call during business hours, you're talking to someone who knows the difference between marketing a shop in Los Angeles vs. Pasadena vs. San Diego."
        }
      ]
    },
    {
      icon: DollarSign,
      title: "Pricing & Investment",
      questions: [
        {
          q: "Why is your Starter tier $695/month when competitors start at $295/month?",
          a: "Our Starter tier at $695/month includes more comprehensive services than competitors' basic tiers. While they may advertise $295/month, that typically covers only basic website hosting and minimal SEO. Our Starter includes Google Business Profile optimization, review management, local SEO for 10 keywords, quarterly content, and detailed reporting—plus no setup fees and a 90-day guarantee. When you factor in their setup fees ($1,000-$3,000), our total cost of ownership is actually lower in the first year."
        },
        {
          q: "Do you really have no setup fees, or are they hidden in the monthly price?",
          a: "Absolutely no setup fees. What you see is what you pay. Our monthly pricing covers all services, and we don't charge extra for onboarding, account setup, website audits, or initial strategy development. Competitors often charge $1,000-$3,000 upfront for 'design and development fees' that we include in our standard service. This is one of our core differentiators—we remove barriers to entry."
        },
        {
          q: "What's included in each tier? How do I know which one is right for me?",
          a: "Starter ($695/month) is ideal for budget-conscious shops testing professional marketing or those with limited capacity. Foundation ($1,495/month) provides complete digital presence for established shops ready to grow. Accelerate ($2,495/month) adds Google Ads and advanced conversion optimization for aggressive growth. Flagship ($3,495/month) includes multi-location support and white-glove service. During your discovery call, we'll review your revenue, goals, market competition, and capacity to recommend the best fit."
        },
        {
          q: "Can I upgrade or downgrade between tiers?",
          a: "Yes, absolutely. We operate month-to-month with no long-term contracts, so you can upgrade when you're ready to scale or downgrade if you need to adjust your budget. Many clients start with Starter or Foundation, see results, and upgrade to Accelerate or Flagship within 3-6 months as their revenue grows. We'll never lock you into a tier that doesn't serve your current needs."
        },
        {
          q: "What's the typical ROI I can expect?",
          a: "Our clients typically see 5:1 to 8:1 ROI within 6 months—meaning for every $1,000 invested in marketing, they generate $5,000-$8,000 in new revenue. Specific results vary based on your market, competition, service quality, and capacity. We track every call, lead, and job that comes from our marketing, so you'll see exactly what you're getting. Our 90-day guarantee ensures that if we're not delivering value, you don't pay."
        }
      ]
    },
    {
      icon: Shield,
      title: "Guarantee & Risk",
      questions: [
        {
          q: "What exactly does your 90-day money-back guarantee cover?",
          a: "Our guarantee covers all services and deliverables outlined in your Growth 360 program tier. If within 90 days you're not satisfied with our service delivery, performance metrics, communication standards, or strategic direction, we'll refund 100% of your investment. This includes situations where we fail to deliver promised services on time, don't move performance metrics (traffic, calls, rankings), don't meet communication standards, or provide strategies misaligned with your business. See our full Guarantee page for complete terms and exclusions."
        },
        {
          q: "What's NOT covered by the guarantee?",
          a: "The guarantee doesn't cover situations where you don't provide requested information or account access, external factors beyond our control (major algorithm changes, natural disasters, economic downturns), unrealistic expectations that exceed industry benchmarks, shop service quality issues that generate poor reviews, or insufficient advertising budgets for your market's competitiveness. We'll discuss realistic expectations during onboarding to ensure alignment."
        },
        {
          q: "How do I claim the guarantee if I'm not satisfied?",
          a: "Simply contact your dedicated account manager within the 90-day period via email or phone. We'll review your account, discuss specific concerns, and determine if guarantee criteria have been met. If eligible, we process your full refund within 10 business days via your original payment method. All work we've completed remains yours—we transfer ownership of accounts and provide documentation of all work."
        },
        {
          q: "Do other marketing agencies offer guarantees like this?",
          a: "Very few do, and those that do often have vague terms or significant exclusions. Most agencies won't offer guarantees because they're not confident in their ability to deliver results. We offer this guarantee because we've spent years developing specialized strategies for auto repair shops, we track our results obsessively, and we know we can deliver value. It's a reflection of our confidence in our process, team, and commitment to your success."
        }
      ]
    },
    {
      icon: TrendingUp,
      title: "Results & Performance",
      questions: [
        {
          q: "How long until I see results?",
          a: "You'll see initial improvements within 30-60 days (better Google Business Profile visibility, increased website traffic, improved search rankings), but significant revenue impact typically occurs at 90-120 days. SEO and reputation building take time—anyone promising overnight results is being dishonest. Our 90-day guarantee period reflects realistic timelines for measurable performance improvements. Most clients see 200-350% traffic increases and 275% lead growth within 6 months."
        },
        {
          q: "What metrics do you track to measure success?",
          a: "We track website traffic growth (organic and paid), lead generation (phone calls, form submissions, appointment requests), search visibility (Google Business Profile views, keyword rankings), review growth and reputation scores, conversion rates, and attributed revenue. You'll receive detailed monthly reports showing exactly how many calls, leads, and jobs came from our marketing efforts, plus ROI calculations showing your return on investment."
        },
        {
          q: "Can you show me case studies or examples of results you've achieved?",
          a: "Yes, we have detailed case studies showing results for brake shops (275% increase in brake appointments), tire shops (340% increase in tire-related traffic), transmission specialists (185% increase in transmission jobs), and other shop types. During your discovery call, we'll share case studies relevant to your specific business type and market. We focus on real metrics—traffic, calls, jobs, revenue—not vanity metrics like social media followers."
        },
        {
          q: "What if my market is really competitive? Can you still deliver results?",
          a: "Competitive markets require more sophisticated strategies and often higher investment, but they also have more customer demand. We'll conduct a competitive analysis during onboarding to understand your market dynamics and recommend the appropriate tier and strategy. In highly competitive markets like Los Angeles or San Francisco, we might recommend Accelerate or Flagship tiers to compete effectively. Our industry specialization gives us an edge—we know what works for brake shops in competitive markets vs. tire shops vs. transmission specialists."
        }
      ]
    },
    {
      icon: Users,
      title: "Service & Support",
      questions: [
        {
          q: "Will I have a dedicated account manager, or will I talk to different people?",
          a: "Every client gets a dedicated account manager who becomes your primary point of contact. They'll learn your business, understand your goals, and coordinate all marketing activities. You'll have their direct email and phone number. For Flagship clients, you'll also have monthly strategy calls with your account manager. We believe continuity and relationship-building are essential for effective marketing."
        },
        {
          q: "How often will we communicate? What if I have questions?",
          a: "You'll receive monthly performance reports with detailed metrics and insights. Your account manager will proactively reach out for approvals, updates, and strategy discussions. You can contact them anytime via email or phone—we typically respond within 24 hours on business days. Flagship clients get monthly strategy calls. We're not a 'set it and forget it' agency; we believe in partnership and collaboration."
        },
        {
          q: "Do you require long-term contracts?",
          a: "No. We operate month-to-month with no long-term contracts. You can cancel anytime with 30 days notice. We believe we should earn your business every month through results, not trap you in contracts. This is another key differentiator from competitors who often require 6-12 month commitments. Our confidence in delivering value means we don't need contracts to retain clients."
        },
        {
          q: "What happens if I want to cancel?",
          a: "Simply provide 30 days written notice to your account manager. We'll transfer ownership of all accounts we manage (Google Business Profile, social media, etc.), provide documentation of all work completed, and ensure a smooth transition. There are no cancellation fees or penalties. Everything we've built for you remains yours. We'll even provide recommendations for managing your marketing in-house or with another provider if you ask."
        }
      ]
    },
    {
      icon: MessageCircle,
      title: "Services & Strategy",
      questions: [
        {
          q: "What makes your 'industry specialization' different from generic automotive marketing?",
          a: "A brake shop has different marketing needs than a transmission specialist or tire shop. Brake customers are often driven by safety concerns and need trust-building content. Tire customers are more price-sensitive and seasonal. Transmission customers face high-ticket decisions and need education. We develop specific strategies, keywords, content, and campaigns for each shop type rather than generic 'auto repair' marketing. This specialization delivers better results because we understand the unique customer psychology and decision-making process for each service category."
        },
        {
          q: "Do you work with shops outside of California?",
          a: "Yes, we work with auto shops nationwide. While we're based in California and have deep West Coast market expertise, our strategies work in any market. We conduct thorough market research for each client's specific location to understand local competition, search behavior, and customer demographics. Our California base is an advantage for West Coast shops but doesn't limit our ability to serve shops elsewhere."
        },
        {
          q: "Do you handle website design/development, or just marketing?",
          a: "We handle both. All tiers include website optimization and conversion improvements. If you need a complete website redesign or new website, we can accommodate that—it would be scoped separately from the Growth 360 programs. Most clients already have websites that need optimization rather than complete rebuilds. We focus on making your existing website convert visitors into customers through strategic improvements rather than unnecessary redesigns."
        },
        {
          q: "Can you help with social media, or is it just SEO and Google Ads?",
          a: "Foundation tier and above include social media strategy, audits, and weekly posts. We focus on platforms that actually drive business for auto shops (Facebook, Instagram, Google Business Profile) rather than wasting time on platforms that don't generate ROI. Our social media approach is strategic—building reputation, showcasing expertise, and driving local engagement—not just posting for the sake of posting."
        },
        {
          q: "What if I'm already working with another marketing company? Can I switch?",
          a: "Yes, many of our clients switched from other agencies. We'll conduct a thorough audit of your current marketing to understand what's working and what's not, then develop a transition plan. We can often improve on existing strategies while maintaining continuity. If you're under contract with another provider, we recommend waiting until that contract expires or negotiating an exit. Our 90-day guarantee makes switching low-risk—if we don't deliver better results, you get your money back."
        }
      ]
    },
    {
      icon: Clock,
      title: "Getting Started",
      questions: [
        {
          q: "What's the process for getting started?",
          a: "First, schedule a free discovery call where we'll discuss your goals, current marketing, competition, and capacity. If we're a good fit, we'll recommend a tier and send a proposal. Once you approve, we'll conduct onboarding (account access, strategy development, competitive analysis) and begin implementation within 7-10 days. You'll see initial optimizations within the first 30 days and measurable performance improvements by 60-90 days."
        },
        {
          q: "What information do you need from me to get started?",
          a: "We'll need access to your Google Business Profile, website (or hosting credentials), Google Analytics (if you have it), social media accounts, and any existing advertising accounts. We'll also ask about your services, pricing, target customers, geographic service area, and business goals. The more information you provide during onboarding, the faster we can implement effective strategies."
        },
        {
          q: "Do I need to do anything, or is it completely hands-off?",
          a: "We handle 95% of the work, but we need your partnership for approvals (content, ad copy, strategy changes), providing information (service details, pricing, promotions), and responding to reviews (we'll draft responses, but you should approve them). The level of involvement depends on your preference—some clients want weekly updates and collaboration, others prefer monthly check-ins. We adapt to your communication style."
        },
        {
          q: "I'm not tech-savvy. Will I be able to understand the reports and work with you?",
          a: "Absolutely. We explain everything in plain English, not marketing jargon. Our reports focus on metrics that matter to your business—calls, leads, jobs, revenue—not confusing technical metrics. Your account manager will walk you through your first report and answer any questions. We believe transparency and education are essential, so we'll teach you what we're doing and why it works."
        }
      ]
    }
  ];

  // Flatten all FAQs for schema
  const allFAQs = faqCategories.flatMap(category => 
    category.questions.map(q => ({ question: q.q, answer: q.a }))
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="FAQ | Auto Shop Digital Marketing Services"
        description="Frequently asked questions about auto shop SEO and digital marketing. Pricing, timelines, guarantees, and what to expect from our services."
      />
      <FAQPageSchema faqs={allFAQs} />
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
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Everything you need to know about Auto Shop Digital, our services, pricing, and how we compare to competitors. Can't find your answer? Schedule a discovery call.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {faqCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex} className="mb-16">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold">{category.title}</h2>
                  </div>

                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex;
                      const isOpen = openIndex === globalIndex;
                      
                      return (
                        <div
                          key={faqIndex}
                          className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                          <button
                            onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                            className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
                          >
                            <span className="font-semibold text-lg pr-4">{faq.q}</span>
                            <ChevronDown
                              className={`w-5 h-5 text-[#FF6B35] flex-shrink-0 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          
                          {isOpen && (
                            <div className="px-6 pb-5 pt-2">
                              <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're here to help. Schedule a free discovery call to discuss your specific situation, 
              get personalized recommendations, and see if we're the right fit for your shop.
            </p>
            <button
              onClick={() => { window.location.href = '/get-started'; }}
              className="inline-block bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              Schedule Your Free Discovery Call
            </button>
            <p className="text-sm text-gray-400 mt-4">
              No pressure, no sales pitch. Just an honest conversation about your goals.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
