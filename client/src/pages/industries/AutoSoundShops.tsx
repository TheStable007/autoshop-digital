import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { autoSoundShopsData } from "@/data/industries/autoSoundShops";
import SEO from "@/components/SEO";

export default function AutoSoundShops() {
  return (
    <>
      <SEO 
        title="Car Audio Shop Marketing & SEO | Auto Shop Digital"
        description="Amplify your car audio business with expert digital marketing. SEO and Google Ads for car stereo and sound shops. Proven results, transparent pricing."
      />
      <IndustryPageTemplate data={autoSoundShopsData} />
    </>
  );
}
