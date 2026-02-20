import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { brakeRepairShopsData } from "@/data/industries/brakeRepairShops";
import SEO from "@/components/SEO";

export default function BrakeRepairShops() {
  return (
    <>
      <SEO 
        title="Brake Shop Marketing & SEO Services | Auto Shop Digital"
        description="Get more brake repair customers with expert SEO and digital marketing. Proven strategies for brake shops. No setup fees, cancel anytime."
      />
      <IndustryPageTemplate data={brakeRepairShopsData} />
    </>
  );
}
