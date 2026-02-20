import LocationPageTemplate from "@/components/templates/LocationPageTemplate";
import { pasadenaData } from "@/data/locations/pasadena";
import SEO from "@/components/SEO";

export default function Pasadena() {
  return (
    <>
      <SEO 
        title="Auto Shop Marketing in Pasadena CA | Auto Shop Digital"
        description="Pasadena auto repair marketing experts. Local SEO, Google Ads, reputation management for Pasadena auto shops. From $695/month with guarantee."
      />
      <LocationPageTemplate data={pasadenaData} />
    </>
  );
}
