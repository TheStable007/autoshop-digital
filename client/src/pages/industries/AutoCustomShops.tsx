import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { autoCustomShopsData } from "@/data/industries/autoCustomShops";
import SEO from "@/components/SEO";

export default function AutoCustomShops() {
  return (
    <>
      <SEO 
        title="Custom Auto Shop Marketing & SEO | Auto Shop Digital"
        description="Showcase your custom work with specialized digital marketing. SEO, Google Ads, and reputation management for custom auto shops. No setup fees."
      />
      <IndustryPageTemplate data={autoCustomShopsData} />
    </>
  );
}
