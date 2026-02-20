import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { tireShopsData } from "@/data/industries/tireShops";
import SEO from "@/components/SEO";

export default function TireShopsPage() {
  return (
    <>
      <SEO 
        title="Tire Shop Marketing & SEO Services | Auto Shop Digital"
        description="Grow your tire shop with expert digital marketing. Local SEO, Google Ads, reputation management. 90-day performance guarantee. No setup fees."
      />
      <IndustryPageTemplate data={tireShopsData} />
    </>
  );
}
