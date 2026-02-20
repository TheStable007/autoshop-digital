import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { autoCollisionPaintData } from "@/data/industries/autoCollisionPaint";
import SEO from "@/components/SEO";

export default function AutoCollisionPaint() {
  return (
    <>
      <SEO 
        title="Collision & Paint Shop Marketing | Auto Shop Digital"
        description="Attract more collision repair customers with expert SEO and digital marketing. Specialized strategies for auto body and paint shops. Get started today."
      />
      <IndustryPageTemplate data={autoCollisionPaintData} />
    </>
  );
}
