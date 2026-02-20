import LocationPageTemplate from "@/components/templates/LocationPageTemplate";
import { hollywoodData } from "@/data/locations/hollywood";
import SEO from "@/components/SEO";

export default function Hollywood() {
  return (
    <>
      <SEO 
        title="Auto Shop Marketing in Hollywood CA | Auto Shop Digital"
        description="Hollywood auto shop SEO and digital marketing services. Attract more customers in Hollywood and surrounding areas. 90-day performance guarantee."
      />
      <LocationPageTemplate data={hollywoodData} />
    </>
  );
}
