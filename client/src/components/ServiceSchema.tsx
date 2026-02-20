import { Helmet } from "react-helmet-async";

interface ServiceSchemaProps {
  name: string;
  description: string;
  serviceType: string;
  priceRange?: string;
  url: string;
  areaServed?: string[];
}

/**
 * ServiceSchema component adds JSON-LD structured data for service pages
 * This helps search engines understand the services offered and enables rich service snippets
 * 
 * @see https://schema.org/Service
 * @see https://developers.google.com/search/docs/appearance/structured-data/service
 */
export default function ServiceSchema({
  name,
  description,
  serviceType,
  priceRange = "$$",
  url,
  areaServed = [
    "Los Angeles, CA",
    "Pasadena, CA",
    "Hollywood, CA",
    "Santa Monica, CA",
    "Burbank, CA",
    "Van Nuys, CA",
    "West Los Angeles, CA",
    "Torrance, CA"
  ]
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "serviceType": serviceType,
    "provider": {
      "@type": "AutomotiveBusiness",
      "name": "Auto Shop Digital",
      "url": "https://autoshopdigital.com",
      "logo": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663285621680/SxwVtjYZxkDghnRz.png",
      "telephone": "+1-833-226-0795",
      "email": "hello@autoshopdigital.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "areaServed": areaServed.map(area => {
      const [city, state] = area.split(", ");
      return {
        "@type": "City",
        "name": city,
        "containedIn": {
          "@type": "State",
          "name": state === "CA" ? "California" : state
        }
      };
    }),
    "url": url,
    "priceRange": priceRange,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
