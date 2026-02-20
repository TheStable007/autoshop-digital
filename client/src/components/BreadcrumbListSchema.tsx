import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbListSchemaProps {
  items: BreadcrumbItem[];
}

/**
 * BreadcrumbListSchema component adds JSON-LD structured data for breadcrumb navigation
 * This helps search engines understand site hierarchy and displays breadcrumbs in search results
 * 
 * @see https://schema.org/BreadcrumbList
 * @see https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
 * 
 * @example
 * <BreadcrumbListSchema items={[
 *   { name: "Home", url: "https://autoshopdigital.com" },
 *   { name: "Services", url: "https://autoshopdigital.com/services" },
 *   { name: "Local SEO", url: "https://autoshopdigital.com/services/managed-local-seo" }
 * ]} />
 */
export default function BreadcrumbListSchema({ items }: BreadcrumbListSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
