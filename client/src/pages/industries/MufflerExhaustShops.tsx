import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { mufflerExhaustShopsData } from "@/data/industries/mufflerExhaustShops";
import SEO from "@/components/SEO";

export default function MufflerExhaustShops() {
  return (
    <>
      <SEO 
        title="Muffler Shop Marketing & SEO | Auto Shop Digital"
        description="Grow your exhaust and muffler shop with targeted digital marketing. Local SEO, Google Ads, reputation management. 90-day guarantee."
      />
      <IndustryPageTemplate data={mufflerExhaustShopsData} />
    </>
  );
}
