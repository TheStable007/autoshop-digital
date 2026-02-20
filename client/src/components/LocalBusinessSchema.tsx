import { Helmet } from "react-helmet-async";

/**
 * LocalBusinessSchema component adds JSON-LD structured data for local business
 * This helps search engines understand your business and enables rich search results
 * including business hours, contact info, service areas, and reviews
 * 
 * @see https://schema.org/LocalBusiness
 * @see https://developers.google.com/search/docs/appearance/structured-data/local-business
 */
export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "name": "Auto Shop Digital",
    "description": "Turn-key digital marketing services designed exclusively for auto repair shops. Focus on your business while we handle your SEO and bring customers to your door.",
    "url": "https://autoshopdigital.com",
    "logo": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663285621680/SxwVtjYZxkDghnRz.png",
    "image": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663285621680/SxwVtjYZxkDghnRz.png",
    "telephone": "+1-833-226-0795",
    "email": "hello@autoshopdigital.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.0522",
      "longitude": "-118.2437"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Los Angeles",
        "containedIn": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "City",
        "name": "Pasadena",
        "containedIn": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "City",
        "name": "Hollywood",
        "containedIn": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "City",
        "name": "Santa Monica",
        "containedIn": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "City",
        "name": "Burbank",
        "containedIn": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "City",
        "name": "Van Nuys",
        "containedIn": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "City",
        "name": "West Los Angeles",
        "containedIn": {
          "@type": "State",
          "name": "California"
        }
      },
      {
        "@type": "City",
        "name": "Torrance",
        "containedIn": {
          "@type": "State",
          "name": "California"
        }
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/autoshopdigital",
      "https://www.facebook.com/autoshopdigital",
      "https://www.linkedin.com/company/autoshopdigital",
      "https://www.google.com/maps/place/Auto+Shop+Digital"
    ],
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Auto Shop Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Managed Local SEO",
            "description": "Completely turn-key marketing service where our team of experts handle everything needed for your website and digital marketing."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Business Profile Optimization",
            "description": "Optimize your Google Business Profile to rank in the local map pack and drive more customers to your shop."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Ads Management",
            "description": "Professional Google Ads campaign management to drive qualified leads and increase your car count."
          }
        }
      ]
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
