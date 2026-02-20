import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { autoBodyShopsData } from "@/data/industries/autoBodyShops";
import SEO from "@/components/SEO";

export default function AutoBodyShops() {
  return (
    <>
      <SEO 
        title="Auto Body Shop Marketing & SEO | Auto Shop Digital"
        description="Attract more collision repair customers with specialized SEO for auto body shops. Proven strategies, transparent pricing. Get started from $695/mo."
      />
      <IndustryPageTemplate data={autoBodyShopsData} />
    </>
  );
}
