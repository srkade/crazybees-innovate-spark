import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Maximize2, Sparkles, Palette } from "lucide-react";

export const GraphicsShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const capabilities = [
    { icon: Layers, title: "2D/3D Graphics", description: "Professional technical illustrations and 3D modeling" },
    { icon: Maximize2, title: "Exploded Views", description: "Isometric exploded views for complex assemblies" },
    { icon: Sparkles, title: "AR/VR/MR", description: "Immersive augmented and virtual reality experiences" },
    { icon: Palette, title: "Vector Conversion", description: "Raster-to-vector illustration transformation" },
  ];

  const features = [
    "Wiring harnesses & electrical schematics",
    "Hydraulic & pneumatic schematics", 
    "Assembly animations & training visuals",
    "Technical documentation illustrations",
    "Product visualization & rendering",
    "Interactive 3D models",
  ];

  return (
    <section ref={ref} className="py-24 px-4 relative bg-white">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <motion.span className="inline-block px-4 py-1.5 bg-primary/10 text-secondary text-sm font-semibold rounded-full mb-6 border border-primary/20">
            Visual Excellence
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Graphics & Animations</span>
            <br /><span className="text-secondary text-3xl">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bringing technical concepts to life with stunning visual clarity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="p-6 bg-white rounded-2xl card-modern h-full">
                  <motion.div className="mb-4 inline-flex p-3 icon-honey rounded-xl" whileHover={{ scale: 1.1 }}>
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2 text-secondary group-hover:text-primary transition-colors">{capability.title}</h3>
                  <p className="text-muted-foreground text-sm">{capability.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }} className="max-w-4xl mx-auto">
          <div className="p-8 bg-muted/50 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold mb-8 text-center text-secondary">Comprehensive Visualization Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div key={index} whileHover={{ x: 5 }} className="flex items-center gap-4 p-4 rounded-xl bg-white hover:shadow-md transition-all">
                  <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
