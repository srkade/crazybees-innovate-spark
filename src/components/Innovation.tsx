import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Wrench, Target, TrendingUp, Rocket } from "lucide-react";

export const Innovation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stages = [
    {
      icon: Lightbulb,
      title: "Innovation & Ideation",
      description: "Creative thinking and conceptualization",
      gradient: "from-primary to-accent",
    },
    {
      icon: Wrench,
      title: "Product Development",
      description: "Building robust technology solutions",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Target,
      title: "Solution Tailoring",
      description: "Customizing for specific industry needs",
      gradient: "from-growth to-secondary",
    },
    {
      icon: TrendingUp,
      title: "Market Adaptation",
      description: "Scaling and optimizing for markets",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Rocket,
      title: "Growth & Impact",
      description: "Sustained success and expansion",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section id="innovation" ref={ref} className="py-24 px-4 relative overflow-hidden">
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
            className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Our Framework
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display">
            <span className="gradient-text">Product & Solution Innovation</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our five-stage innovation framework transforms ideas into impactful solutions
          </p>
        </motion.div>

        {/* Desktop Flow View */}
        <div className="hidden lg:block">
          <div className="relative max-w-6xl mx-auto">
            {/* Connection Line */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(42 95% 50%)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="hsl(28 95% 55%)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(42 95% 50%)" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <motion.line
                x1="10%"
                y1="50%"
                x2="90%"
                y2="50%"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeDasharray="10 5"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>

            <div className="flex justify-between items-center relative z-10 py-8">
              {stages.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="flex flex-col items-center max-w-[180px] group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${stage.gradient} p-1 mb-4 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/30 transition-shadow`}
                    >
                      <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </motion.div>

                    <h3 className="text-base font-bold text-center mb-2 text-foreground group-hover:text-primary transition-colors font-display">
                      {stage.title}
                    </h3>
                    
                    <p className="text-xs text-muted-foreground text-center leading-relaxed">
                      {stage.description}
                    </p>

                    {/* Stage Number */}
                    <motion.div
                      className="mt-4 w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary font-bold text-sm border border-primary/30"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Stack View */}
        <div className="lg:hidden space-y-4">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-5 p-5 glass rounded-2xl group"
              >
                <motion.div 
                  className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${stage.gradient} p-1`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1 text-foreground group-hover:text-primary transition-colors font-display">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {stage.description}
                  </p>
                </div>

                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary font-bold border border-primary/30">
                  {index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
