import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Maximize2, Sparkles, Palette } from "lucide-react";

export const GraphicsShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const capabilities = [
    {
      icon: Layers,
      title: "2D/3D Graphics",
      description: "Professional technical illustrations and 3D modeling",
    },
    {
      icon: Maximize2,
      title: "Exploded Views",
      description: "Isometric exploded views for complex assemblies",
    },
    {
      icon: Sparkles,
      title: "AR/VR/MR",
      description: "Immersive augmented and virtual reality experiences",
    },
    {
      icon: Palette,
      title: "Vector Conversion",
      description: "Raster-to-vector illustration transformation",
    },
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
    <section ref={ref} className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Graphics & Animations</span>
            <br />
            <span className="text-foreground text-3xl md:text-4xl mt-2 block">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bringing technical concepts to life with stunning visual clarity
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="p-6 bg-card rounded-2xl tech-border card-glow h-full">
                  <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 bg-card rounded-3xl tech-border card-glow">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
              Comprehensive Visualization Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
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
