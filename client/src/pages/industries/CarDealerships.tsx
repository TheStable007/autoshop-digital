import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { carDealershipsData } from "@/data/industries/carDealerships";
import SEO from "@/components/SEO";

export default function CarDealerships() {
  return (
    <>
      <SEO 
        title="Car Dealership Marketing & SEO | Auto Shop Digital"
        description="Drive showroom traffic with specialized SEO for car dealerships. Increase online visibility, generate quality leads. Transparent pricing, proven results."
      />
      <IndustryPageTemplate data={carDealershipsData} />
    </>
  );
}
