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
    <section id="vision" ref={ref} className="py-24 px-4 relative bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-primary/10 text-secondary text-sm font-semibold rounded-full mb-6 border border-primary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
          >
            Our Vision
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-secondary">Driving </span>
            <span className="gradient-text">Innovation</span>
            <br />
            <span className="text-secondary">and Inclusive Growth</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Crazybees Innovation Hub envisions supporting industries through innovative, self-sustained operating models powered by technology-driven products and solutions. We are committed to enhancing customer outcomes by delivering top-tier product quality, superior service, and sustained profitability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="p-6 bg-white rounded-2xl card-modern h-full text-center">
                  <motion.div 
                    className="mb-5 inline-flex p-4 icon-honey rounded-2xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-lg font-bold mb-3 text-secondary group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
