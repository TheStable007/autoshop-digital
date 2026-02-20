import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { autoSmogCheckData } from "@/data/industries/autoSmogCheck";
import SEO from "@/components/SEO";

export default function AutoSmogCheck() {
  return (
    <>
      <SEO 
        title="Smog Check Station Marketing & SEO | Auto Shop Digital"
        description="Drive more smog check customers with local SEO and digital marketing. Specialized strategies for emissions testing stations. From $695/month."
      />
      <IndustryPageTemplate data={autoSmogCheckData} />
    </>
  );
}
