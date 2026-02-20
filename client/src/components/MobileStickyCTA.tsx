/**
 * Mobile Sticky CTA Bar
 * Fixed bottom bar with Call Now and Get Started buttons
 * Only visible on mobile/tablet devices (< lg breakpoint)
 */

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-sm border-t border-border p-3 shadow-lg">
      <div className="flex gap-2 max-w-screen-xl mx-auto">
        {/* Call Now Button - 40% width */}
        <a href="tel:+18332260795" className="flex-[2]">
          <Button 
            variant="outline" 
            className="w-full h-12 text-sm font-heading font-bold"
          >
            <Phone className="w-4 h-4 mr-1.5" />
            CALL NOW
          </Button>
        </a>
        
        {/* Get Started Button - 60% width */}
        <a href="/get-started" className="flex-[3]">
          <Button 
            className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-heading font-bold"
          >
            GET STARTED
          </Button>
        </a>
      </div>
    </div>
  );
}
