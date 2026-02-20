import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { oilChangeServicesData } from "@/data/industries/oilChangeServices";
import SEO from "@/components/SEO";

export default function OilChangeServicesPage() {
  return (
    <>
      <SEO 
        title="Oil Change Service Marketing & SEO | Auto Shop Digital"
        description="Drive more customers to your oil change business. Specialized SEO and digital marketing for quick lube shops. Results in 90 days or money back."
      />
      <IndustryPageTemplate data={oilChangeServicesData} />
    </>
  );
}
