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

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
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
      
      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 CrazyBees Innovation Hub. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Empowering industries with AI-driven technology solutions
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
