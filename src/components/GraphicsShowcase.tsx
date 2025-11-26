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
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Visual Excellence
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display">
            <span className="gradient-text">Graphics & Animations</span>
            <br />
            <span className="text-foreground text-3xl md:text-4xl mt-2 block">
              Expertise
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bringing technical concepts to life with stunning visual clarity
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                <div className="p-6 glass rounded-2xl h-full relative overflow-hidden">
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div 
                    className="mb-4 inline-flex p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors font-display">
                    {capability.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {capability.description}
                  </p>
                  
                  {/* Border gradient */}
                  <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/50 group-hover:to-primary/50 transition-all duration-500 -z-10" />
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
          <div className="p-8 glass rounded-3xl relative overflow-hidden">
            {/* Honeycomb background */}
            <div className="absolute inset-0 honeycomb-bg opacity-20" />
            
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground font-display relative z-10">
              Comprehensive Visualization Services
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/30 hover:bg-background/50 transition-all group"
                >
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0"
                    whileHover={{ scale: 1.5 }}
                  />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
