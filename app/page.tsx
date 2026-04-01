
import { Footer } from "@/components/Footer";
import { GalleryShowcaseSection } from "@/components/GalleryShowcaseSection";
import { GridBackground } from "@/components/GridBackground";
import { HomeHeroSection } from "@/components/HomeHeroSection copy";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PricingSection } from "@/components/PricingSection";

import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 lg:p-5">
    <HomeHeroSection />
    <GalleryShowcaseSection />
    <HowItWorksSection />
   <PricingSection />
    <Testimonials/>
    <Footer/>

    </div>
  );
}



