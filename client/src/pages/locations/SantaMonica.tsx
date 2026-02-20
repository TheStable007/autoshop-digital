import LocationPageTemplate from "@/components/templates/LocationPageTemplate";
import { santaMonicaData } from "@/data/locations/santaMonica";
import SEO from "@/components/SEO";

export default function SantaMonica() {
  return (
    <>
      <SEO 
        title="Auto Shop Marketing in Santa Monica | Auto Shop Digital"
        description="Santa Monica auto shop digital marketing services. Expert SEO and Google Ads for coastal auto repair businesses. Proven results, transparent pricing."
      />
      <LocationPageTemplate data={santaMonicaData} />
    </>
  );
}
