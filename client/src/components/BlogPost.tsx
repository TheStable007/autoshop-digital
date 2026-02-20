/* Industrial Precision Design: Blog Post Template
 * Clean, readable blog post layout with typography hierarchy
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Streamdown } from 'streamdown';
import BlogArticleSchema from "@/components/BlogArticleSchema";
import SEO from "@/components/SEO";

interface BlogPostProps {
  title: string;
  author: string;
  date: string;
  content: string;
  featuredImage?: string;
  metaDescription?: string;
  publishDate?: string; // ISO format: 2026-01-15
  url?: string; // Full URL to the blog post
}

export default function BlogPost({ title, author, date, content, featuredImage, metaDescription, publishDate, url }: BlogPostProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {metaDescription && (
        <SEO 
          title={`${title} | Auto Shop Digital`}
          description={metaDescription}
        />
      )}
      {publishDate && url && (
        <BlogArticleSchema
          title={title}
          description={metaDescription || title}
          author={author}
          publishDate={publishDate}
          url={url}
          imageUrl={featuredImage}
        />
      )}
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-accent py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-accent-foreground">
              {title}
            </h1>
            <div className="flex items-center gap-4 text-accent-foreground/70">
              <span>By {author}</span>
              <span>•</span>
              <span>{date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {featuredImage && (
        <div className="container py-8">
          <div className="max-w-4xl mx-auto">
            <img 
              src={featuredImage} 
              alt={title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      {/* Blog Content */}
      <article className="py-12 flex-grow">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert
            prose-headings:font-heading prose-headings:font-bold
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-foreground/80 prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground prose-strong:font-bold
            prose-ul:my-6 prose-li:my-2
            prose-img:rounded-lg prose-img:shadow-md">
            <Streamdown>{content}</Streamdown>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
