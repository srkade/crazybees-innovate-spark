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
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Wrench,
      title: "Product Development",
      description: "Building robust technology solutions",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Target,
      title: "Solution Tailoring",
      description: "Customizing for specific industry needs",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: TrendingUp,
      title: "Market Adaptation",
      description: "Scaling and optimizing for markets",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Rocket,
      title: "Growth & Impact",
      description: "Sustained success and expansion",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="innovation" ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Product & Solution Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our five-stage innovation framework transforms ideas into impactful solutions
          </p>
        </motion.div>

        {/* Desktop Flow View */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(220 70% 50%)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(270 70% 60%)" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 200 100 Q 400 50, 600 100 T 1000 100 T 1400 100"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>

            <div className="flex justify-between items-center relative z-10">
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
                    className="flex flex-col items-center max-w-[200px]"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${stage.color} p-1 mb-4 shadow-lg`}
                    >
                      <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                        <Icon className="w-10 h-10 text-primary" />
                      </div>
                      <motion.div
                        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100"
                        animate={{
                          boxShadow: [
                            "0 0 20px hsl(220 70% 50% / 0)",
                            "0 0 40px hsl(220 70% 50% / 0.5)",
                            "0 0 20px hsl(220 70% 50% / 0)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>

                    <h3 className="text-lg font-bold text-center mb-2 text-foreground">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-center">
                      {stage.description}
                    </p>

                    {/* Stage Number */}
                    <motion.div
                      className="mt-4 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold"
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
        <div className="lg:hidden space-y-6">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-card rounded-2xl tech-border card-glow"
              >
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${stage.color} p-1`}>
                  <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 text-foreground">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {stage.description}
                  </p>
                </div>

                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
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
