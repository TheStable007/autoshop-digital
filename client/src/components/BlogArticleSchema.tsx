import { Helmet } from "react-helmet-async";

interface BlogArticleSchemaProps {
  title: string;
  description: string;
  author: string;
  publishDate: string; // ISO 8601 format: "2026-02-15"
  modifiedDate?: string; // ISO 8601 format: "2026-02-18"
  imageUrl?: string;
  url: string; // Full URL to the blog post
}

/**
 * BlogArticleSchema component adds JSON-LD structured data for blog posts
 * This helps search engines understand the content and enables rich search results
 * 
 * @see https://schema.org/Article
 * @see https://developers.google.com/search/docs/appearance/structured-data/article
 */
export default function BlogArticleSchema({
  title,
  description,
  author,
  publishDate,
  modifiedDate,
  imageUrl,
  url,
}: BlogArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Auto Shop Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663285621680/SxwVtjYZxkDghnRz.png",
      },
    },
    "datePublished": publishDate,
    "dateModified": modifiedDate || publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
    ...(imageUrl && {
      "image": {
        "@type": "ImageObject",
        "url": imageUrl,
      },
    }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
