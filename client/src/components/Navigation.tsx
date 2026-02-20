/* Industrial Precision Design: Navigation
 * Clean header with geometric precision, safety orange CTA
 * Sticky positioning with subtle shadow on scroll
 * Active page highlighting for current route
 */

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const services = [
    {
      title: "Managed Local SEO",
      href: "/services/managed-local-seo",
      description: "Dominate your local market with expert SEO services"
    },
    {
      title: "Managed Google Business Profile",
      href: "/services/managed-google-business-profile",
      description: "Maximize visibility on Google Maps and local search"
    },
    {
      title: "Managed Google Ads",
      href: "/services/managed-google-ads",
      description: "Drive qualified traffic with strategic paid advertising"
    }
  ];

  const industries = [
    { title: "Auto Repair Shops", href: "/industries/auto-repair-shops" },
    { title: "Auto Body Shops", href: "/industries/auto-body-shops" },
    { title: "Tire Shops", href: "/industries/tire-shops" },
    { title: "Oil Change Services", href: "/industries/oil-change-services" },
    { title: "Transmission Repair", href: "/industries/transmission-repair" },
    { title: "Brake Repair Shops", href: "/industries/brake-repair-shops" },
    { title: "Muffler & Exhaust Shops", href: "/industries/muffler-exhaust-shops" },
    { title: "Car Dealerships", href: "/industries/car-dealerships" },
    { title: "Auto Classic Shops", href: "/industries/auto-classic-shops" },
    { title: "Auto Collision & Paint", href: "/industries/auto-collision-paint" },
    { title: "Auto Custom Shops", href: "/industries/auto-custom-shops" },
    { title: "Auto Detailing Shops", href: "/industries/auto-detailing-shops" },
    { title: "Auto SMOG Check", href: "/industries/auto-smog-check" },
    { title: "Auto Sound Shops", href: "/industries/auto-sound-shops" }
  ];

  const locations = [
    { title: "Los Angeles", href: "/locations/los-angeles" },
    { title: "Pasadena", href: "/locations/pasadena" },
    { title: "Hollywood", href: "/locations/hollywood" },
    { title: "Santa Monica", href: "/locations/santa-monica" },
    { title: "Burbank", href: "/locations/burbank" },
    { title: "Van Nuys", href: "/locations/van-nuys" },
    { title: "West LA", href: "/locations/west-la" },
    { title: "Torrance", href: "/locations/torrance" }
  ];

  const aboutLinks = [
    { title: "About", href: "/about-us" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact-us" },
    { title: "FAQs", href: "/faq" },
    { title: "Free SEO Audit", href: "/seo-audit" },
    { title: "Our Guarantee", href: "/guarantee" },
    { title: "Vs Competitors", href: "/vs-competitors" }
  ];

  const aboutPaths = aboutLinks.map(l => l.href);

  // Helper to check if a path is active
  const isActive = (href: string) => location === href;
  const isActiveSection = (prefix: string) => location.startsWith(prefix);

  // Active link style
  const activeLinkClass = "!text-primary font-bold";
  const activeDropdownClass = "!text-primary";

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-md">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663285621680/eqTlDxnABbVGjorG.png" 
              alt="Auto Shop Digital" 
              className="h-12 w-auto transition-opacity group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="gap-6">
                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`text-base text-foreground/80 hover:text-foreground font-medium bg-transparent ${isActiveSection('/services') ? activeLinkClass : ''}`}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {services.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className={`group/item block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:!bg-[#1a1a1a] hover:!text-white focus:!bg-[#1a1a1a] focus:!text-white ${isActive(service.href) ? 'bg-primary/10 text-primary' : ''}`}
                            >
                              <div className="text-sm font-heading font-bold leading-none">
                                {service.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover/item:text-white/70">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                {/* Industries Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`text-base text-foreground/80 hover:text-foreground font-medium bg-transparent ${isActiveSection('/industries') ? activeLinkClass : ''}`}>
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-2 p-4">
                      {industries.map((industry) => (
                        <li key={industry.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={industry.href}
                              className={`block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:!bg-[#1a1a1a] hover:!text-white focus:!bg-[#1a1a1a] focus:!text-white ${isActive(industry.href) ? 'bg-primary/10 text-primary font-bold' : ''}`}
                            >
                              <div className="text-sm font-medium leading-none">
                                {industry.title}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                {/* Locations Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`text-base text-foreground/80 hover:text-foreground font-medium bg-transparent ${isActiveSection('/locations') ? activeLinkClass : ''}`}>
                    Locations
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4">
                      {locations.map((location) => (
                        <li key={location.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={location.href}
                              className={`block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:!bg-[#1a1a1a] hover:!text-white focus:!bg-[#1a1a1a] focus:!text-white ${isActive(location.href) ? 'bg-primary/10 text-primary font-bold' : ''}`}
                            >
                              <div className="text-sm font-medium leading-none">
                                {location.title}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link href="/pricing" className={`text-base text-foreground/80 hover:text-foreground font-medium transition-colors ${isActive('/pricing') ? activeLinkClass : ''}`}>
              Pricing
            </Link>
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                {/* About Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`text-base text-foreground/80 hover:text-foreground font-medium bg-transparent ${aboutPaths.some(p => isActive(p)) ? activeLinkClass : ''}`}>
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-2 p-4">
                      {aboutLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className={`block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:!bg-[#1a1a1a] hover:!text-white focus:!bg-[#1a1a1a] focus:!text-white ${isActive(link.href) ? 'bg-primary/10 text-primary font-bold' : ''}`}
                            >
                              <div className="text-sm font-medium leading-none">
                                {link.title}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/get-started">
              <Button 
                size="lg" 
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-bold"
              >
                GET STARTED
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`flex items-center justify-between w-full text-base text-foreground/80 hover:text-foreground font-medium py-2 transition-colors ${isActiveSection('/services') ? activeLinkClass : ''}`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`block text-sm text-foreground/70 hover:text-foreground py-2 transition-colors ${isActive(service.href) ? activeDropdownClass : ''}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Industries Dropdown */}
              <div>
                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className={`flex items-center justify-between w-full text-base text-foreground/80 hover:text-foreground font-medium py-2 transition-colors ${isActiveSection('/industries') ? activeLinkClass : ''}`}
                >
                  Industries
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileIndustriesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {industries.map((industry) => (
                      <Link
                        key={industry.href}
                        href={industry.href}
                        className={`block text-sm text-foreground/70 hover:text-foreground py-2 transition-colors ${isActive(industry.href) ? activeDropdownClass : ''}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {industry.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Locations Dropdown */}
              <div>
                <button
                  onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                  className={`flex items-center justify-between w-full text-base text-foreground/80 hover:text-foreground font-medium py-2 transition-colors ${isActiveSection('/locations') ? activeLinkClass : ''}`}
                >
                  Locations
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileLocationsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileLocationsOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {locations.map((location) => (
                      <Link
                        key={location.href}
                        href={location.href}
                        className={`block text-sm text-foreground/70 hover:text-foreground py-2 transition-colors ${isActive(location.href) ? activeDropdownClass : ''}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {location.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link 
                href="/pricing" 
                className={`text-base text-foreground/80 hover:text-foreground font-medium py-2 transition-colors ${isActive('/pricing') ? activeLinkClass : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              {/* Mobile About Dropdown */}
              <div>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className={`flex items-center justify-between w-full text-base text-foreground/80 hover:text-foreground font-medium py-2 transition-colors ${aboutPaths.some(p => isActive(p)) ? activeLinkClass : ''}`}
                >
                  About
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileAboutOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block text-sm text-foreground/70 hover:text-foreground py-2 transition-colors ${isActive(link.href) ? activeDropdownClass : ''}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/get-started" onClick={() => setMobileMenuOpen(false)}>
                <Button 
                  size="lg" 
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-bold w-full"
                >
                  GET STARTED
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
