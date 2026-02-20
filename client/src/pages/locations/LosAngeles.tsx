import LocationPageTemplate from "@/components/templates/LocationPageTemplate";
import { losAngelesData } from "@/data/locations/losAngeles";
import SEO from "@/components/SEO";

export default function LosAngeles() {
  return (
    <>
      <SEO 
        title="Auto Shop Marketing in Los Angeles | Auto Shop Digital"
        description="Los Angeles auto shop marketing experts. Local SEO, Google Ads, GBP optimization for LA auto repair businesses. 90-day guarantee. Get started today."
      />
      <LocationPageTemplate data={losAngelesData} />
    </>
  );
}
