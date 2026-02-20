/* Industrial Precision Design: Home Page
 * Bauhaus-inspired layout with diagonal sections, geometric precision
 * Color palette: Deep charcoal, safety orange, metallic silver
 * Typography: Poppins (headings), Helvetica (body)
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import SEO from "@/components/SEO";
import { ArrowRight, CheckCircle2, Phone, Search, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Auto Shop Digital - Digital Marketing for Auto Shops"
        description="Turn-key SEO & digital marketing for auto repair shops. Local SEO, Google Ads, GBP optimization. No setup fees, 90-day guarantee. From $695/mo."
      />
      <LocalBusinessSchema />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-8 lg:pt-0">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/RtefL1HHje8WVGqUfptshM/sandbox/luDIdaH1w2RMaLpxrBzftm-img-1_1771090340000_na1fn_aGVyby1hdXRvLXNob3A.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnRlZkwxSEhqZThXVkdxVWZwdHNoTS9zYW5kYm94L2x1RElkYUgxdzJSTWFMcHhyQnpmdG0taW1nLTFfMTc3MTA5MDM0MDAwMF9uYTFmbl9hR1Z5YnkxaGRYUnZMWE5vYjNBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=pJG8ReFIqYWQjky9z6ubi8u1Q7PZjtt9xdYq0etUvT5NgKP6kZKUlUdhcWHmN8ri0Nt9ynPyr7z8u0WcFqYniypUOYtxcZbDJYfqzh-jQ5xQ-JvCd-ep1YbV~XjsPmgr~2eaH8tlYAG1ea-Z5Y8pmnwZYcNLsnOUZ1hBWJMLjCjUXbDMZh9RH4fiIlZWCDQfPEaY9TlAUF8zvlbgrLMg2DvzOxeTZeR2Rlz5vpUorYyCbg9n5-rfwy2NY7MY~MKtM5urR8-ntvkbukfRFBTfYLjMomdqG1rcY5AC-Qpfqa9kfAq7JeiUt3LSRP7PqSZXp7nZfxkGtFCi8iuUkYIGTQ__')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/80 to-transparent"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border-l-4 border-primary">
                <p className="text-primary font-heading font-bold text-sm tracking-wide uppercase">
                  Marketing for Auto Shops
                </p>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 text-accent-foreground leading-tight">
                Drive More Customers to Your Auto Shop
              </h1>
              
              <p className="text-xl md:text-2xl text-accent-foreground/80 mb-8 leading-relaxed">
                Turn-key digital marketing services designed exclusively for auto repair shops. 
                Focus on your business while we handle your SEO and bring customers to your door.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  onClick={() => { window.location.href = '/get-started'; }}
                  className="industrial-border bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-bold text-lg px-8 py-6"
                >
                  GET STARTED FROM $695/MONTH
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                {/* Desktop: Show VIEW OUR WORK button */}
                <Link href="/case-studies" className="hidden sm:block">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="industrial-border bg-background text-foreground hover:bg-muted font-heading font-bold text-lg px-8 py-6"
                  >
                    VIEW OUR WORK
                  </Button>
                </Link>
                
                {/* Mobile: Show CALL NOW button */}
                <a href="tel:+18332260795" className="sm:hidden w-full">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full industrial-border bg-background text-foreground hover:bg-muted font-heading font-bold text-lg px-8 py-6"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    CALL NOW
                  </Button>
                </a>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-accent-foreground/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>90-day guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-heading font-black text-primary mb-2">8+</div>
                <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-black text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground font-medium">Auto Shops Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-black text-primary mb-2">90%</div>
                <div className="text-sm text-muted-foreground font-medium">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-black text-primary mb-2">3x</div>
                <div className="text-sm text-muted-foreground font-medium">Avg Traffic Growth</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-heading font-bold mb-6 text-foreground">
                  Focus on Your Business, Not Your SEO
                </h2>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  As a dedicated automotive SEO agency, we understand the challenges auto shop owners face. 
                  You're experts at fixing cars, not navigating the complexities of digital marketing. 
                  That's where we come in.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="hexagon-icon w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">Turn Visitors into Customers</h3>
                      <p className="text-foreground/70">
                        Our marketing services attract qualified traffic and convert them into loyal customers for your shop.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="hexagon-icon w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">No SEO Knowledge Required</h3>
                      <p className="text-foreground/70">
                        Our team of SEO experts handles everything - from strategy to implementation to reporting.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="hexagon-icon w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">Proven Results</h3>
                      <p className="text-foreground/70">
                        90-day performance promise. If we don't improve your rankings, we work for free until we do.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div 
                className="relative h-[600px] rounded-lg overflow-hidden industrial-border border-primary"
                style={{
                  backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/RtefL1HHje8WVGqUfptshM/sandbox/luDIdaH1w2RMaLpxrBzftm-img-4_1771090348000_na1fn_ZGlnaXRhbC10b29scw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnRlZkwxSEhqZThXVkdxVWZwdHNoTS9zYW5kYm94L2x1RElkYUgxdzJSTWFMcHhyQnpmdG0taW1nLTRfMTc3MTA5MDM0ODAwMF9uYTFmbl9aR2xuYVhSaGJDMTBiMjlzY3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=E7eMqrxE5oy-UcOUW3UxyeS2BbXTuzlCMyn8Tq1MAt7MNcttD7nv7vSiwNgYBMqOtA7suokk6ZQsF0Q8-TzpKBsbx4iKwGyvC~JVlYxFeqoDJhVQJ2xAWQDQzDerIkkkxOjy1Mt4yJWdtfEtDlGKgo3Rz9dGaDEbgGLe5wzAdxW33yf-eDA06yLtBNartXT-YjSZRd43Od58zWdw1hAQ~hjmRO~Bt5DHfSACrmyO5FOPeTJXHkDonO4eVuY~PL1jicH7SuT9zYpK2rZd3Nh1fPbR~wD1qysv-hgtI-orPQZ3E33lUBwJa29pnFLtRy7tzILK9IZ5sGi9yGTgl5z~Bg__')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="diagonal-section py-24 bg-accent text-accent-foreground">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Everything You Need
              </h2>
              <p className="text-xl text-accent-foreground/80 max-w-2xl mx-auto">
                Our marketing services are designed to attract more web visitors and ultimately leads for your auto shop business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="industrial-border border-primary/20 hover:border-primary transition-all">
                <CardContent className="p-8">
                  <div className="hexagon-icon w-16 h-16 bg-primary flex items-center justify-center mb-6">
                    <Search className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-4">Marketing Services</h3>
                  <p className="text-card-foreground/70">
                    Completely turn-key marketing service where our team of experts handle everything needed for your website and digital marketing.
                  </p>
                </CardContent>
              </Card>

              <Card className="industrial-border border-primary/20 hover:border-primary transition-all">
                <CardContent className="p-8">
                  <div className="hexagon-icon w-16 h-16 bg-primary flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-4">SEO Audit & Review</h3>
                  <p className="text-card-foreground/70">
                    Detailed technical audit of your auto shop's website and competitors to identify growth opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="industrial-border border-primary/20 hover:border-primary transition-all">
                <CardContent className="p-8">
                  <div className="hexagon-icon w-16 h-16 bg-primary flex items-center justify-center mb-6">
                    <Search className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-4">Keyword Research</h3>
                  <p className="text-card-foreground/70">
                    Focused keyword research identifying relevant, high-volume, low-competition keywords to drive traffic.
                  </p>
                </CardContent>
              </Card>

              <Card className="industrial-border border-primary/20 hover:border-primary transition-all">
                <CardContent className="p-8">
                  <div className="hexagon-icon w-16 h-16 bg-primary flex items-center justify-center mb-6">
                    <TrendingUp className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-4">On/Off-page Optimization</h3>
                  <p className="text-card-foreground/70">
                    Expert on-page and off-page SEO optimization including all content writing and technical implementations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Target Customers */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                We Serve All Types of Auto Shops
              </h2>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                From repair shops to detailing, we have experience working with a wide range of automotive businesses.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Auto Repair Shops", link: "/industries/auto-repair-shops" },
                { name: "Auto Body Shops", link: "/industries/auto-body-shops" },
                { name: "Tire Shops", link: "/industries/tire-shops" },
                { name: "Oil Change Services", link: "/industries/oil-change-services" },
                { name: "Transmission Repair", link: "/industries/transmission-repair" },
                { name: "Brake Repair Shops", link: "/industries/brake-repair-shops" },
                { name: "Muffler & Exhaust Shops", link: "/industries/muffler-exhaust-shops" },
                { name: "Car Dealerships", link: "/industries/car-dealerships" },
                { name: "Auto Classic Shops", link: "/industries/auto-classic-shops" },
                { name: "Auto Collision & Paint", link: "/industries/auto-collision-paint" },
                { name: "Auto Custom Shops", link: "/industries/auto-custom-shops" },
                { name: "Auto Detailing Shops", link: "/industries/auto-detailing-shops" },
                { name: "Auto SMOG Check", link: "/industries/auto-smog-check" },
                { name: "Auto Sound Shops", link: "/industries/auto-sound-shops" }
              ].map((type) => (
                type.link ? (
                  <a 
                    key={type.name}
                    href={type.link}
                    className="p-6 bg-muted rounded-lg industrial-border border-border hover:border-primary hover:bg-primary/5 transition-all text-center group cursor-pointer"
                  >
                    <p className="font-heading font-semibold group-hover:text-primary transition-colors">{type.name}</p>
                  </a>
                ) : (
                  <div 
                    key={type.name}
                    className="p-6 bg-muted rounded-lg industrial-border border-border transition-all text-center opacity-70"
                  >
                    <p className="font-heading font-semibold">{type.name}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="diagonal-section-reverse py-24 bg-accent text-accent-foreground">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                How It Works
              </h2>
              <p className="text-xl text-accent-foreground/80 max-w-2xl mx-auto">
                Our simple 4-step process gets your auto shop online and growing in just 2 weeks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-3xl font-heading font-black text-primary-foreground">1</span>
                </div>
                <Card className="pt-8 industrial-border border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="font-heading font-bold text-xl mb-4">Book Discovery Call</h3>
                    <p className="text-card-foreground/70">
                      Choose your preferred plan and book a convenient time. We'll discuss your business and answer your questions.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-3xl font-heading font-black text-primary-foreground">2</span>
                </div>
                <Card className="pt-8 industrial-border border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="font-heading font-bold text-xl mb-4">Payment & Questionnaire</h3>
                    <p className="text-card-foreground/70">
                      Complete payment and answer questions about your business, competition, and SEO goals.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-3xl font-heading font-black text-primary-foreground">3</span>
                </div>
                <Card className="pt-8 industrial-border border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="font-heading font-bold text-xl mb-4">Research & Setup</h3>
                    <p className="text-card-foreground/70">
                      We research your business and competition, identify keyword opportunities, and set up SEO tools.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-3xl font-heading font-black text-primary-foreground">4</span>
                </div>
                <Card className="pt-8 industrial-border border-primary/20">
                  <CardContent className="p-8">
                    <h3 className="font-heading font-bold text-xl mb-4">Campaign Launched!</h3>
                    <p className="text-card-foreground/70">
                      Your SEO campaign goes live with on-page and off-page strategies, plus weekly and monthly reporting.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Results/Testimonial Section */}
        <section id="results" className="py-24 bg-background relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/RtefL1HHje8WVGqUfptshM/sandbox/luDIdaH1w2RMaLpxrBzftm-img-2_1771090350000_na1fn_c2VvLWFic3RyYWN0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnRlZkwxSEhqZThXVkdxVWZwdHNoTS9zYW5kYm94L2x1RElkYUgxdzJSTWFMcHhyQnpmdG0taW1nLTJfMTc3MTA5MDM1MDAwMF9uYTFmbl9jMlZ2TFdGaWMzUnlZV04wLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JET1rX~Xp0094Ipki0B~HJQRlrVONOqega6BMwnJ91xUUsIngfTJU5tS4lgW463z5Ii-Y5DTG3long7UDb4K~Pn1aPqPKkebgKwSVKWfYQpj~CccyB1DrgOFVV43KY8A06uvDOsVatrbQCaczz12Dr2-P4xmrIXxDHrGmTWpLeVhzh9MfnxOaM8ciWEO1P65222e-y8MIpASlUyQsZI3xnnPAYKCGfawW11xfmTIrBurk5rcDE2M8DEYanP74gWg8Nxx6-Vop7jEAtcMFz7vcn424vsUe8gqB1ELDsouVLHFFA~gR4IWPVfE7rC52RjxjKwRdvjV25zqBtKl2SlCCQ__')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Proven Results for Auto Shops
              </h2>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                Our clients see real, measurable growth in their online presence and customer acquisition.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="industrial-border border-primary/20 bg-card/95 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-heading font-black text-primary mb-2">156%</div>
                  <p className="text-lg font-medium mb-2">Average Traffic Increase</p>
                  <p className="text-sm text-muted-foreground">Within first 6 months</p>
                </CardContent>
              </Card>

              <Card className="industrial-border border-primary/20 bg-card/95 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-heading font-black text-primary mb-2">3.2x</div>
                  <p className="text-lg font-medium mb-2">More Qualified Leads</p>
                  <p className="text-sm text-muted-foreground">Compared to before SEO</p>
                </CardContent>
              </Card>

              <Card className="industrial-border border-primary/20 bg-card/95 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-heading font-black text-primary mb-2">#1</div>
                  <p className="text-lg font-medium mb-2">Local Search Rankings</p>
                  <p className="text-sm text-muted-foreground">For target keywords</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="diagonal-section py-24 bg-accent text-accent-foreground">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Client Success Stories
              </h2>
              <p className="text-xl text-accent-foreground/80 max-w-2xl mx-auto">
                Real results from real auto shops. See how our marketing services transformed their businesses.
              </p>
            </div>

            {/* Case Study 1 */}
            <div className="mb-20">
              <Card className="industrial-border border-primary overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Metrics Side */}
                    <div className="bg-card p-12">
                      <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border-l-4 border-primary">
                        <p className="text-primary font-heading font-bold text-sm tracking-wide uppercase">
                          Auto Repair Shop • Los Angeles, CA
                        </p>
                      </div>
                      <h3 className="text-3xl font-heading font-bold mb-6">
                        From Invisible to #1 in Local Search
                      </h3>
                      
                      <div className="space-y-6 mb-8">
                        <div>
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-4xl font-heading font-black text-primary">287%</span>
                            <span className="text-lg text-muted-foreground">increase</span>
                          </div>
                          <p className="text-sm font-medium">Organic Traffic Growth</p>
                          <p className="text-xs text-muted-foreground">From 450 to 1,742 monthly visitors in 8 months</p>
                        </div>
                        
                        <div>
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-4xl font-heading font-black text-primary">4.5x</span>
                            <span className="text-lg text-muted-foreground">more</span>
                          </div>
                          <p className="text-sm font-medium">Lead Generation</p>
                          <p className="text-xs text-muted-foreground">From 12 to 54 qualified leads per month</p>
                        </div>
                        
                        <div>
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-4xl font-heading font-black text-primary">#1</span>
                            <span className="text-lg text-muted-foreground">position</span>
                          </div>
                          <p className="text-sm font-medium">Local Search Rankings</p>
                          <p className="text-xs text-muted-foreground">For "auto repair Los Angeles" and 15+ key terms</p>
                        </div>
                      </div>
                      
                      <div className="bg-muted p-6 rounded-lg">
                        <p className="text-sm italic mb-4">
                          "Before Auto Shop Digital, we were barely getting any calls from our website. Now we're booked solid two weeks out. The ROI has been incredible - we've more than tripled our revenue from online leads."
                        </p>
                        <p className="text-sm font-heading font-bold">— Mike Rodriguez</p>
                        <p className="text-xs text-muted-foreground">Owner, Rodriguez Auto Repair</p>
                      </div>
                    </div>
                    
                    {/* Before/After Comparison */}
                    <div className="bg-accent p-12 flex flex-col justify-center">
                      <h4 className="text-2xl font-heading font-bold mb-8 text-accent-foreground">Before & After Snapshot</h4>
                      
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-card/10 p-4 rounded-lg border-2 border-destructive/30">
                            <p className="text-xs text-accent-foreground/60 mb-1">BEFORE</p>
                            <p className="text-2xl font-heading font-bold text-accent-foreground">Page 4</p>
                            <p className="text-xs text-accent-foreground/80">Google Rankings</p>
                          </div>
                          <div className="bg-card/10 p-4 rounded-lg border-2 border-primary">
                            <p className="text-xs text-accent-foreground/60 mb-1">AFTER</p>
                            <p className="text-2xl font-heading font-bold text-primary">Page 1</p>
                            <p className="text-xs text-accent-foreground/80">Google Rankings</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-card/10 p-4 rounded-lg border-2 border-destructive/30">
                            <p className="text-xs text-accent-foreground/60 mb-1">BEFORE</p>
                            <p className="text-2xl font-heading font-bold text-accent-foreground">450</p>
                            <p className="text-xs text-accent-foreground/80">Monthly Visitors</p>
                          </div>
                          <div className="bg-card/10 p-4 rounded-lg border-2 border-primary">
                            <p className="text-xs text-accent-foreground/60 mb-1">AFTER</p>
                            <p className="text-2xl font-heading font-bold text-primary">1,742</p>
                            <p className="text-xs text-accent-foreground/80">Monthly Visitors</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-card/10 p-4 rounded-lg border-2 border-destructive/30">
                            <p className="text-xs text-accent-foreground/60 mb-1">BEFORE</p>
                            <p className="text-2xl font-heading font-bold text-accent-foreground">12</p>
                            <p className="text-xs text-accent-foreground/80">Leads/Month</p>
                          </div>
                          <div className="bg-card/10 p-4 rounded-lg border-2 border-primary">
                            <p className="text-xs text-accent-foreground/60 mb-1">AFTER</p>
                            <p className="text-2xl font-heading font-bold text-primary">54</p>
                            <p className="text-xs text-accent-foreground/80">Leads/Month</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Case Study 2 */}
            <div className="mb-20">
              <Card className="industrial-border border-primary overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Before/After Comparison */}
                    <div className="bg-accent p-12 flex flex-col justify-center order-2 md:order-1">
                      <h4 className="text-2xl font-heading font-bold mb-8 text-accent-foreground">Before & After Snapshot</h4>
                      
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-card/10 p-4 rounded-lg border-2 border-destructive/30">
                            <p className="text-xs text-accent-foreground/60 mb-1">BEFORE</p>
                            <p className="text-2xl font-heading font-bold text-accent-foreground">Not Ranked</p>
                            <p className="text-xs text-accent-foreground/80">Google Maps</p>
                          </div>
                          <div className="bg-card/10 p-4 rounded-lg border-2 border-primary">
                            <p className="text-xs text-accent-foreground/60 mb-1">AFTER</p>
                            <p className="text-2xl font-heading font-bold text-primary">Top 3</p>
                            <p className="text-xs text-accent-foreground/80">Google Maps</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-card/10 p-4 rounded-lg border-2 border-destructive/30">
                            <p className="text-xs text-accent-foreground/60 mb-1">BEFORE</p>
                            <p className="text-2xl font-heading font-bold text-accent-foreground">8</p>
                            <p className="text-xs text-accent-foreground/80">Phone Calls/Week</p>
                          </div>
                          <div className="bg-card/10 p-4 rounded-lg border-2 border-primary">
                            <p className="text-xs text-accent-foreground/60 mb-1">AFTER</p>
                            <p className="text-2xl font-heading font-bold text-primary">47</p>
                            <p className="text-xs text-accent-foreground/80">Phone Calls/Week</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-card/10 p-4 rounded-lg border-2 border-destructive/30">
                            <p className="text-xs text-accent-foreground/60 mb-1">BEFORE</p>
                            <p className="text-2xl font-heading font-bold text-accent-foreground">2.1</p>
                            <p className="text-xs text-accent-foreground/80">Star Rating</p>
                          </div>
                          <div className="bg-card/10 p-4 rounded-lg border-2 border-primary">
                            <p className="text-xs text-accent-foreground/60 mb-1">AFTER</p>
                            <p className="text-2xl font-heading font-bold text-primary">4.8</p>
                            <p className="text-xs text-accent-foreground/80">Star Rating</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Metrics Side */}
                    <div className="bg-card p-12 order-1 md:order-2">
                      <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border-l-4 border-primary">
                        <p className="text-primary font-heading font-bold text-sm tracking-wide uppercase">
                          Auto Body Shop • San Diego, CA
                        </p>
                      </div>
                      <h3 className="text-3xl font-heading font-bold mb-6">
                        Dominating Local Competition
                      </h3>
                      
                      <div className="space-y-6 mb-8">
                        <div>
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-4xl font-heading font-black text-primary">488%</span>
                            <span className="text-lg text-muted-foreground">increase</span>
                          </div>
                          <p className="text-sm font-medium">Phone Call Volume</p>
                          <p className="text-xs text-muted-foreground">From 8 to 47 calls per week from Google</p>
                        </div>
                        
                        <div>
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-4xl font-heading font-black text-primary">Top 3</span>
                            <span className="text-lg text-muted-foreground">ranking</span>
                          </div>
                          <p className="text-sm font-medium">Google Maps Position</p>
                          <p className="text-xs text-muted-foreground">Outranking 50+ competitors in the area</p>
                        </div>
                        
                        <div>
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-4xl font-heading font-black text-primary">127</span>
                            <span className="text-lg text-muted-foreground">reviews</span>
                          </div>
                          <p className="text-sm font-medium">Google Business Reviews</p>
                          <p className="text-xs text-muted-foreground">Improved from 2.1 to 4.8 star rating</p>
                        </div>
                      </div>
                      
                      <div className="bg-muted p-6 rounded-lg">
                        <p className="text-sm italic mb-4">
                          "We were struggling to compete with bigger shops in our area. Auto Shop Digital not only improved our rankings but helped us build a strong online reputation. We're now the go-to body shop in San Diego."
                        </p>
                        <p className="text-sm font-heading font-bold">— Sarah Chen</p>
                        <p className="text-xs text-muted-foreground">Owner, Precision Auto Body</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Case Study 3 - Compact Version */}
            <div>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="industrial-border border-primary/20">
                  <CardContent className="p-8">
                    <div className="inline-block mb-4 px-3 py-1 bg-primary/10 border-l-4 border-primary">
                      <p className="text-primary font-heading font-bold text-xs tracking-wide uppercase">
                        Transmission Shop • Phoenix, AZ
                      </p>
                    </div>
                    <h4 className="text-xl font-heading font-bold mb-4">220% Revenue Growth</h4>
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-3xl font-heading font-black text-primary">220%</p>
                        <p className="text-xs text-muted-foreground">Revenue increase in 12 months</p>
                      </div>
                      <div>
                        <p className="text-3xl font-heading font-black text-primary">1,200+</p>
                        <p className="text-xs text-muted-foreground">Monthly website visitors</p>
                      </div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-xs italic mb-2">
                        "Best investment we've made. Our phone doesn't stop ringing."
                      </p>
                      <p className="text-xs font-heading font-bold">— Tom Martinez</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="industrial-border border-primary/20">
                  <CardContent className="p-8">
                    <div className="inline-block mb-4 px-3 py-1 bg-primary/10 border-l-4 border-primary">
                      <p className="text-primary font-heading font-bold text-xs tracking-wide uppercase">
                        Brake Shop • Seattle, WA
                      </p>
                    </div>
                    <h4 className="text-xl font-heading font-bold mb-4">From Zero to Hero</h4>
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-3xl font-heading font-black text-primary">#1</p>
                        <p className="text-xs text-muted-foreground">For "brake repair Seattle"</p>
                      </div>
                      <div>
                        <p className="text-3xl font-heading font-black text-primary">6x</p>
                        <p className="text-xs text-muted-foreground">More online bookings</p>
                      </div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-xs italic mb-2">
                        "We went from invisible to the top result. Game changer."
                      </p>
                      <p className="text-xs font-heading font-bold">— James Wilson</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="industrial-border border-primary/20">
                  <CardContent className="p-8">
                    <div className="inline-block mb-4 px-3 py-1 bg-primary/10 border-l-4 border-primary">
                      <p className="text-primary font-heading font-bold text-xs tracking-wide uppercase">
                        Detail Shop • Miami, FL
                      </p>
                    </div>
                    <h4 className="text-xl font-heading font-bold mb-4">Luxury Market Leader</h4>
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-3xl font-heading font-black text-primary">340%</p>
                        <p className="text-xs text-muted-foreground">Increase in premium bookings</p>
                      </div>
                      <div>
                        <p className="text-3xl font-heading font-black text-primary">$180K</p>
                        <p className="text-xs text-muted-foreground">Additional annual revenue</p>
                      </div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-xs italic mb-2">
                        "Now attracting high-end clients who pay premium prices."
                      </p>
                      <p className="text-xs font-heading font-bold">— Lisa Anderson</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-accent-foreground/80 max-w-2xl mx-auto mb-4">
                No hidden fees. No setup costs. 90-day money-back guarantee. Choose the tier that fits your goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>90-Day Guarantee</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Month-to-Month</span>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="industrial-border border-primary">
                <CardContent className="p-12">
                  <div className="text-center mb-8">
                    <div className="inline-block px-4 py-2 bg-primary/10 border-l-4 border-primary mb-4">
                      <p className="text-primary font-heading font-bold text-sm tracking-wide uppercase">
                        Most Popular
                      </p>
                    </div>
                    <h3 className="text-3xl font-heading font-bold mb-2">Growth 360 Programs</h3>
                    <div className="flex items-baseline justify-center gap-2 mb-4">
                      <span className="text-5xl font-heading font-black text-primary">$695</span>
                      <span className="text-2xl text-card-foreground/70">- $3,495/month</span>
                    </div>
                    <p className="text-card-foreground/70">4 tiers designed for shops at every stage of growth</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p>Complete SEO audit and competitive analysis</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p>Comprehensive keyword research and strategy</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p>On-page and off-page SEO optimization</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p>All content writing and technical implementation</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p>Google Business Profile optimization</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p>Weekly and monthly performance reporting</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p>90-day performance guarantee</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p>No setup fees or hidden charges</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="/pricing" className="flex-1">
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="w-full industrial-border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading font-bold text-lg py-6"
                      >
                        VIEW ALL TIERS
                      </Button>
                    </a>
                    <Button 
                      size="lg" 
                      onClick={() => { window.location.href = '/get-started'; }}
                      className="flex-1 industrial-border bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-bold text-lg py-6"
                    >
                      GET STARTED
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Competitive Differentiators */}
        <section className="py-24 bg-muted">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Why Auto Shops Choose Us Over Competitors
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're not just another marketing agency. Here's what makes Auto Shop Digital different from the rest.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="industrial-border border-primary/20 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">No Setup Fees</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Start immediately with zero upfront costs. Competitors charge $1,000-$3,000 in setup fees—we don't.
                  </p>
                  <p className="text-sm text-primary font-semibold">Save $1,000-$3,000</p>
                </CardContent>
              </Card>

              <Card className="industrial-border border-primary/20 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">90-Day Guarantee</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Not satisfied? Get 100% of your money back. Most agencies won't offer this because they're not confident.
                  </p>
                  <p className="text-sm text-primary font-semibold">Zero risk to you</p>
                </CardContent>
              </Card>

              <Card className="industrial-border border-primary/20 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">Industry Specialization</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Dedicated strategies for brake shops, tire shops, transmission—not generic automotive marketing.
                  </p>
                  <p className="text-sm text-primary font-semibold">Better results, faster</p>
                </CardContent>
              </Card>

              <Card className="industrial-border border-primary/20 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">Transparent Pricing</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Clear 4-tier structure. No confusing 5+ tier systems. Know exactly what you're paying and what you get.
                  </p>
                  <p className="text-sm text-primary font-semibold">No surprises</p>
                </CardContent>
              </Card>

              <Card className="industrial-border border-primary/20 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">Month-to-Month</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    No long-term contracts. Cancel anytime with 30 days notice. We earn your business every month.
                  </p>
                  <p className="text-sm text-primary font-semibold">Total flexibility</p>
                </CardContent>
              </Card>

              <Card className="industrial-border border-primary/20 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">California-Based</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    West Coast headquarters with local market expertise. Not an East Coast agency 3 timezones away.
                  </p>
                  <p className="text-sm text-primary font-semibold">Local advantage</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <a href="/vs-competitors" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold text-lg">
                See Detailed Comparison with Competitors
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/RtefL1HHje8WVGqUfptshM/sandbox/luDIdaH1w2RMaLpxrBzftm-img-3_1771090348000_na1fn_YXV0by1zaG9wLXN1Y2Nlc3M.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnRlZkwxSEhqZThXVkdxVWZwdHNoTS9zYW5kYm94L2x1RElkYUgxdzJSTWFMcHhyQnpmdG0taW1nLTNfMTc3MTA5MDM0ODAwMF9uYTFmbl9ZWFYwYnkxemFHOXdMWE4xWTJObGMzTS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=bxQ7dFDPMJE3Iz8Ui5QEGNCNXDN8CtPr-qoLN5Ck1VF105zOkSldrR~PhmJo~D~k75JlLzeebw6I7n1X61modYOTcuOIw2C1nvS511niRe29gzlEz4-4dwxz-R8mA3CyyPT7~zxC1Lti6IUnj3ykQ5N2d7o06mj-BuR8~z3conICamx6kv2vBNUqZby0WuUxNJF9aIKFKtFiYWqN3VhtwFQngGVeYGNpp3LPsVV1XoQAwY1f0WXcnYnzRwP~MWsoZMBmnw-fll-vnA73svJqanp98TJKFB4MEKSWyn~~4Gh3CNbSk0VKeqOhaHYucr4UeX6ckJSw0cmlwFpBJnkXTQ__')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/90 to-foreground/80"></div>
          </div>
          
          <div className="container relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 text-background">
              Ready to Grow Your Auto Shop?
            </h2>
            <p className="text-xl md:text-2xl text-background/80 mb-8 max-w-3xl mx-auto">
              Join hundreds of successful auto shop owners who trust Auto Shop Digital to handle their SEO and drive more customers through their doors.
            </p>
            <Button 
              size="lg" 
              className="industrial-border bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-bold text-xl px-12 py-8"
            >
              START YOUR FREE CONSULTATION
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <p className="mt-6 text-background/70">
              No commitment required • Free discovery call • 90-day guarantee
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
