import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Wrench, Target, TrendingUp, Rocket } from "lucide-react";

export const Innovation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stages = [
    { icon: Lightbulb, title: "Innovation & Ideation", description: "Creative thinking and conceptualization" },
    { icon: Wrench, title: "Product Development", description: "Building robust technology solutions" },
    { icon: Target, title: "Solution Tailoring", description: "Customizing for specific industry needs" },
    { icon: TrendingUp, title: "Market Adaptation", description: "Scaling and optimizing for markets" },
    { icon: Rocket, title: "Growth & Impact", description: "Sustained success and expansion" },
  ];

  return (
    <section id="innovation" ref={ref} className="py-24 px-4 relative bg-muted/30">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <motion.span className="inline-block px-4 py-1.5 bg-primary/10 text-secondary text-sm font-semibold rounded-full mb-6 border border-primary/20">
            Our Framework
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-secondary">Product & Solution </span>
            <span className="gradient-text">Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our five-stage innovation framework transforms ideas into impactful solutions
          </p>
        </motion.div>

        {/* Desktop Flow */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-30 -translate-y-1/2" />
            
            <div className="flex justify-between items-center relative z-10">
              {stages.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.15 }}
                    className="flex flex-col items-center max-w-[160px] group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border-2 border-primary/20 mb-4 group-hover:border-primary transition-colors"
                    >
                      <Icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="text-sm font-bold text-center mb-2 text-secondary group-hover:text-primary transition-colors">{stage.title}</h3>
                    <p className="text-xs text-muted-foreground text-center">{stage.description}</p>
                    <div className="mt-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-secondary font-bold text-sm">{index + 1}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Stack */}
        <div className="lg:hidden space-y-4">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-5 p-5 bg-white rounded-2xl card-modern"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-secondary">{stage.title}</h3>
                  <p className="text-sm text-muted-foreground">{stage.description}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-secondary font-bold">{index + 1}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
