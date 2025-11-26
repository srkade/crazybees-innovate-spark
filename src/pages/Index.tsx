import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Vision } from "@/components/Vision";
import { ValueDrivers } from "@/components/ValueDrivers";
import { Services } from "@/components/Services";
import { TechnicalPublications } from "@/components/TechnicalPublications";
import { GraphicsShowcase } from "@/components/GraphicsShowcase";
import { ProcessAutomation } from "@/components/ProcessAutomation";
import { SoftwareDevelopment } from "@/components/SoftwareDevelopment";
import { Innovation } from "@/components/Innovation";
import { Contact } from "@/components/Contact";
import { HoneycombBackground } from "@/components/HoneycombBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <HoneycombBackground />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <Vision />
        <ValueDrivers />
        <Services />
        <TechnicalPublications />
        <GraphicsShowcase />
        <ProcessAutomation />
        <SoftwareDevelopment />
        <Innovation />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-semibold text-lg">© 2025 CrazyBees Innovation Hub</p>
              <p className="text-sm text-white/70 mt-1">All rights reserved.</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/80">Empowering industries with AI-driven technology solutions</p>
              <div className="flex items-center justify-center md:justify-end gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-primary font-medium">Innovation in Motion</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
