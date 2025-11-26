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
    <section id="vision" ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Our Vision
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 font-display"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="gradient-text">Driving Innovation</span>
            <br />
            <span className="text-foreground">and Inclusive Growth</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Crazybees Innovation Hub envisions supporting industries through innovative, self-sustained operating models powered by technology-driven products and solutions. We are committed to enhancing customer outcomes by delivering top-tier product quality, superior service, and sustained profitability.
          </motion.p>
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
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative p-6 glass rounded-2xl h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden">
                  {/* Hover gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="mb-5 inline-flex p-4 bg-gradient-to-br from-primary to-accent rounded-xl shadow-lg group-hover:shadow-primary/30 transition-shadow"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors font-display">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Border gradient on hover */}
                  <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/50 group-hover:via-accent/30 group-hover:to-primary/50 transition-all duration-500 -z-10" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
