import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, TrendingUp, Users, Zap } from "lucide-react";

export const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Lightbulb,
      title: "Technology-Driven Innovation",
      description: "AI, ML, and RPA at the core of our solutions",
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "Self-sustained operating models for long-term success",
    },
    {
      icon: Users,
      title: "Inclusive Excellence",
      description: "Leveraging talent from Tier 2/3 cities for economic growth",
    },
    {
      icon: Zap,
      title: "Operational Excellence",
      description: "Superior quality, efficiency, and profitability",
    },
  ];

  return (
    <section id="vision" ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="gradient-text">Driving Innovation</span>
            <br />
            <span className="text-foreground">and Inclusive Growth</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Crazybees Innovation Hub envisions supporting industries through innovative, self-sustained operating models powered by technology-driven products and solutions. We are committed to enhancing customer outcomes by delivering top-tier product quality, superior service, and sustained profitability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <div className="p-6 bg-card rounded-2xl tech-border card-glow h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
                  <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:animate-pulse-glow">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
