import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { autoDetailingShopsData } from "@/data/industries/autoDetailingShops";
import SEO from "@/components/SEO";

export default function AutoDetailingShops() {
  return (
    <>
      <SEO 
        title="Auto Detailing Shop Marketing & SEO | Auto Shop Digital"
        description="Grow your detailing business with expert digital marketing. Local SEO, Google Ads, online booking optimization. 90-day performance guarantee."
      />
      <IndustryPageTemplate data={autoDetailingShopsData} />
    </>
  );
}
