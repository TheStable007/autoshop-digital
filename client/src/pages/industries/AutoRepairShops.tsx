import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { autoRepairShopsData } from "@/data/industries/autoRepairShops";
import SEO from "@/components/SEO";

export default function AutoRepairShops() {
  return (
    <>
      <SEO 
        title="Auto Repair Shop Marketing & SEO | Auto Shop Digital"
        description="Digital marketing services designed for auto repair shops. Local SEO, Google Ads, GBP optimization. 90-day guarantee. From $695/month."
      />
      <IndustryPageTemplate data={autoRepairShopsData} />
    </>
  );
}
