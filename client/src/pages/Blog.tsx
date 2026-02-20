/* Industrial Precision Design: Blog Main Page
 * Grid layout with featured posts, clean typography
 * Matches the Industrial Precision design philosophy
 */

import { Link } from "wouter";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

type Category = "All" | "SEO" | "Marketing" | "Technology" | "Business Management";

const blogPosts = [
  {
    slug: "workshop-management-software",
    title: "Garageplug, MechanicDesk & More: Managing Your Auto Workshop with Ease",
    author: "Daniel Harman",
    date: "December 26, 2025",
    excerpt: "Streamline your auto repair shop with workshop management software. Boost efficiency, profit, and customer satisfaction. Find the best WMS for you.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    category: "Technology" as Category
  },
  {
    slug: "business-plan-for-maintenance-services",
    title: "From Idea to Income: A Practical Guide to Maintenance Business Planning",
    author: "Daniel Harman",
    date: "December 24, 2025",
    excerpt: "Create your robust business plan for maintenance services pdf. Secure funding, grow your business, and achieve success with our practical guide.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    category: "Business Management" as Category
  },
  {
    slug: "google-map-pack",
    title: "Unlock Local Visibility: Demystifying the Google Map Pack",
    author: "Daniel Harman",
    date: "December 23, 2025",
    excerpt: "Drive customers to your auto shop! Learn to rank in the Google map pack and boost local visibility with our step-by-step guide.",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
    category: "SEO" as Category
  },
  {
    slug: "auto-repair-seo-experts",
    title: "Your Pit Crew for Rankings: How to Choose Auto Repair SEO Experts",
    author: "Daniel Harman",
    date: "December 22, 2025",
    excerpt: "Find top auto repair SEO experts to boost your shop's online visibility, attract local customers, and drive more appointments. Get results!",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "SEO" as Category
  },
  {
    slug: "automotive-seo-services",
    title: "Beyond the Showroom: How Automotive SEO Services Fuel Your Digital Presence",
    author: "Daniel Harman",
    date: "December 22, 2025",
    excerpt: "Drive your auto shop to the top! Learn how Automotive SEO Services boost online visibility, attract customers & grow your business.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    category: "SEO" as Category
  },
  {
    slug: "automotive-reputation-management",
    title: "Drive Positive Perceptions: Mastering Your Auto Brand's Online Reputation",
    author: "Daniel Harman",
    date: "December 19, 2025",
    excerpt: "Elevate your auto brand's online presence. Learn how automotive reputation management drives sales, trust, and customer loyalty.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    category: "Marketing" as Category
  },
  {
    slug: "car-dealer-seo-agency",
    title: "Don't Get Taken for a Ride: How to Pick a Top Car Dealer SEO Agency",
    author: "Daniel Harman",
    date: "December 18, 2025",
    excerpt: "Don't get taken for a ride! Discover how to pick a top car dealer SEO service, optimize your dealership, and boost sales today.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    category: "SEO" as Category
  },
  {
    slug: "auto-body-shop-advertising",
    title: "Marketing for Body Shops: How to Attract More Customers",
    author: "Daniel Harman",
    date: "December 18, 2025",
    excerpt: "Attract more customers with effective auto body shop advertising. Boost your online presence, SEO, and reviews for growth.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    category: "Marketing" as Category
  },
  {
    slug: "tire-shop-pos",
    title: "Torque360, ASA, TireShop: The Best POS for Your Tire Business",
    author: "Daniel Harman",
    date: "December 18, 2025",
    excerpt: "Discover how a dedicated tire shop POS transforms your business. Streamline operations, boost sales, and enhance customer experience with specialized tools.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Technology" as Category
  },
  {
    slug: "seo-for-auto-shops",
    title: "Google My Business for Auto Shops: Your Roadmap to Local Search Dominance",
    author: "Daniel Harman",
    date: "December 15, 2025",
    excerpt: "Master local search with SEO for auto shops! Optimize your Google Business Profile & website to attract more customers and drive revenue.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    category: "SEO" as Category
  }
];

const categories: Category[] = ["All", "SEO", "Marketing", "Technology", "Business Management"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-accent py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 text-accent-foreground">
              Beyond the shop
            </h1>
            <p className="text-xl text-accent-foreground/80">
              Writing about everything that helps <strong>auto shops grow their business online</strong>.
            </p>
            <p className="text-lg text-accent-foreground/70 mt-4">
              Articles and posts about auto repair shop marketing and how to grow your auto shop business.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category 
                  ? "bg-primary text-primary-foreground font-heading font-bold" 
                  : "font-heading font-medium hover:border-primary"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No posts found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group cursor-pointer h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
                  {/* Featured Image */}
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-sm text-muted-foreground mb-3">
                      By {post.author} • {post.date}
                    </div>
                    
                    <h2 className="font-heading font-bold text-xl mb-3 text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="text-primary font-medium group-hover:underline">
                      Read More →
                    </div>
                  </div>
                </article>
              </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
