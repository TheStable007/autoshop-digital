import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { autoClassicShopsData } from "@/data/industries/autoClassicShops";
import SEO from "@/components/SEO";

export default function AutoClassicShops() {
  return (
    <>
      <SEO 
        title="Classic Car Shop Marketing & SEO | Auto Shop Digital"
        description="Reach classic car enthusiasts with specialized digital marketing. SEO and Google Ads for restoration shops. Expert strategies, measurable results."
      />
      <IndustryPageTemplate data={autoClassicShopsData} />
    </>
  );
}
