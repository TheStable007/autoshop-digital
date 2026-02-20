import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import MobileStickyCTA from "./components/MobileStickyCTA";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import WorkshopManagementSoftware from "./pages/blog/WorkshopManagementSoftware";
import MaintenanceBusinessPlanning from "./pages/blog/MaintenanceBusinessPlanning";
import GoogleMapPack from "./pages/blog/GoogleMapPack";
import AutoRepairSEOExperts from "./pages/blog/AutoRepairSEOExperts";
import AutomotiveSEOServices from "./pages/blog/AutomotiveSEOServices";
import AutomotiveReputationManagement from "./pages/blog/AutomotiveReputationManagement";
import CarDealerSEOAgency from "./pages/blog/CarDealerSEOAgency";
import AutoBodyShopAdvertising from "./pages/blog/AutoBodyShopAdvertising";
import TireShopPOS from "./pages/blog/TireShopPOS";
import SEOForAutoShops from "./pages/blog/SEOForAutoShops";
import ManagedLocalSEO from "./pages/services/ManagedLocalSEO";
import ManagedGoogleBusinessProfile from "./pages/services/ManagedGoogleBusinessProfile";
import ManagedGoogleAds from "./pages/services/ManagedGoogleAds";
import Pricing from "./pages/Pricing";
import GetStarted from "./pages/GetStarted";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ThankYou from "./pages/ThankYou";
import AutoRepairShops from "./pages/industries/AutoRepairShops";
import AutoBodyShops from "./pages/industries/AutoBodyShops";
import TireShops from "./pages/industries/TireShops";
import OilChangeServices from "./pages/industries/OilChangeServices";
import TransmissionRepair from "./pages/industries/TransmissionRepair";
import BrakeRepairShops from "./pages/industries/BrakeRepairShops";
import MufflerExhaustShops from "./pages/industries/MufflerExhaustShops";
import CarDealerships from "./pages/industries/CarDealerships";
import AutoClassicShops from "./pages/industries/AutoClassicShops";
import AutoCollisionPaint from "./pages/industries/AutoCollisionPaint";
import AutoCustomShops from "./pages/industries/AutoCustomShops";
import AutoDetailingShops from "./pages/industries/AutoDetailingShops";
import AutoSmogCheck from "./pages/industries/AutoSmogCheck";
import AutoSoundShops from "./pages/industries/AutoSoundShops";
import VsCompetitors from "./pages/VsCompetitors";
import Guarantee from "./pages/Guarantee";
import FAQ from "./pages/FAQ";
import CaseStudies from "./pages/CaseStudies";
import SEOAudit from "./pages/SEOAudit";
import LosAngeles from "./pages/locations/LosAngeles";
import Pasadena from "./pages/locations/Pasadena";
import Hollywood from "./pages/locations/Hollywood";
import SantaMonica from "./pages/locations/SantaMonica";
import Burbank from "./pages/locations/Burbank";
import VanNuys from "./pages/locations/VanNuys";
import WestLA from "./pages/locations/WestLA";
import Torrance from "./pages/locations/Torrance";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CancellationPolicy from "./pages/CancellationPolicy";
import CookieConsent from "./components/CookieConsent";


function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);
  return null;
}
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <>
    <ScrollToTop />
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/workshop-management-software"} component={WorkshopManagementSoftware} />
      <Route path={"/blog/business-plan-for-maintenance-services"} component={MaintenanceBusinessPlanning} />
      <Route path={"/blog/google-map-pack"} component={GoogleMapPack} />
      <Route path={"/blog/auto-repair-seo-experts"} component={AutoRepairSEOExperts} />
      <Route path={"/blog/automotive-seo-services"} component={AutomotiveSEOServices} />
      <Route path={"/blog/automotive-reputation-management"} component={AutomotiveReputationManagement} />
      <Route path={"/blog/car-dealer-seo-agency"} component={CarDealerSEOAgency} />
      <Route path={"/blog/auto-body-shop-advertising"} component={AutoBodyShopAdvertising} />
      <Route path={"/blog/tire-shop-pos"} component={TireShopPOS} />
      <Route path={"/blog/seo-for-auto-shops"} component={SEOForAutoShops} />
      <Route path={"/services/managed-local-seo"} component={ManagedLocalSEO} />
      <Route path={"/services/managed-google-business-profile"} component={ManagedGoogleBusinessProfile} />
      <Route path={"/services/managed-google-ads"} component={ManagedGoogleAds} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/get-started" component={GetStarted} />
      <Route path="/about-us" component={AboutUs} />
      <Route path={"/contact-us"} component={ContactUs} />
      <Route path={"/vs-competitors"} component={VsCompetitors} />
      <Route path={"/guarantee"} component={Guarantee} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/case-studies"} component={CaseStudies} />
      <Route path={"/seo-audit"} component={SEOAudit} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/industries/auto-repair-shops" component={AutoRepairShops} />
      <Route path="/industries/auto-body-shops" component={AutoBodyShops} />
      <Route path="/industries/tire-shops" component={TireShops} />
      <Route path="/industries/oil-change-services" component={OilChangeServices} />
      <Route path="/industries/transmission-repair" component={TransmissionRepair} />
      <Route path="/industries/brake-repair-shops" component={BrakeRepairShops} />
      <Route path="/industries/muffler-exhaust-shops" component={MufflerExhaustShops} />
      <Route path="/industries/car-dealerships" component={CarDealerships} />
      <Route path="/industries/auto-classic-shops" component={AutoClassicShops} />
      <Route path="/industries/auto-collision-paint" component={AutoCollisionPaint} />
      <Route path="/industries/auto-custom-shops" component={AutoCustomShops} />
      <Route path="/industries/auto-detailing-shops" component={AutoDetailingShops} />
      <Route path="/industries/auto-smog-check" component={AutoSmogCheck} />
      <Route path="/industries/auto-sound-shops" component={AutoSoundShops} />
      <Route path="/locations/los-angeles" component={LosAngeles} />
      <Route path="/locations/pasadena" component={Pasadena} />
      <Route path="/locations/hollywood" component={Hollywood} />
      <Route path="/locations/santa-monica" component={SantaMonica} />
          <Route path="/locations/burbank" component={Burbank} />
          <Route path="/locations/van-nuys" component={VanNuys} />
          <Route path="/locations/west-la" component={WestLA} />
          <Route path="/locations/torrance" component={Torrance} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/cancellation-policy" component={CancellationPolicy} />
      <Route path="/404" component={NotFound} />      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          <MobileStickyCTA />
          <CookieConsent />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
