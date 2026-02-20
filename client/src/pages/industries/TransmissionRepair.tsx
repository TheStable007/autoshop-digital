import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { transmissionRepairData } from "@/data/industries/transmissionRepair";
import SEO from "@/components/SEO";

export default function TransmissionRepairPage() {
  return (
    <>
      <SEO 
        title="Transmission Shop Marketing & SEO | Auto Shop Digital"
        description="Specialized digital marketing for transmission repair shops. Dominate local search, attract qualified leads. From $695/month with 90-day guarantee."
      />
      <IndustryPageTemplate data={transmissionRepairData} />
    </>
  );
}
