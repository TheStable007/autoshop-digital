import LocationPageTemplate from "@/components/templates/LocationPageTemplate";
import { burbankData } from "@/data/locations/burbank";
import SEO from "@/components/SEO";

export default function Burbank() {
  return (
    <>
      <SEO 
        title="Auto Shop Marketing in Burbank CA | Auto Shop Digital"
        description="Dominate Burbank auto repair search results. Expert digital marketing for Burbank auto shops. Local SEO specialists. No setup fees, cancel anytime."
      />
      <LocationPageTemplate data={burbankData} />
    </>
  );
}
