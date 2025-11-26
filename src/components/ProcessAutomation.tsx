import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Zap, Shield, CheckCircle2 } from "lucide-react";

export const ProcessAutomation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { name: "Artificial Intelligence", icon: Brain },
    { name: "Machine Learning", icon: Zap },
    { name: "RPA Automation", icon: Shield },
    { name: "ChatBOTs & AI Agents", icon: CheckCircle2 },
  ];

  const benefits = [
    "Enhanced Accuracy & Precision",
    "Significant Cost Efficiency",
    "Regulatory Compliance",
    "Process Consistency",
  ];

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
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
            Smart Automation
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display">
            <span className="gradient-text">Process Automation</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Streamline complex business processes with cutting-edge AI technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Visual - Animated Tech Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative p-8 glass rounded-3xl overflow-hidden">
              {/* Honeycomb background */}
              <div className="absolute inset-0 honeycomb-bg opacity-30" />
              
              {/* Animated gradient orb */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
                style={{
                  background: "radial-gradient(circle, hsl(42 95% 50% / 0.3) 0%, transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Central icon */}
              <div className="relative z-10 flex flex-col items-center justify-center py-16">
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center shadow-2xl shadow-primary/30"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Brain className="w-16 h-16 text-primary-foreground" />
                </motion.div>
                
                <motion.div
                  className="mt-6 px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <span className="text-primary-foreground font-bold text-lg">AI-Powered</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground font-display">
                Key Technologies
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technologies.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center gap-4 p-4 glass rounded-xl group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-primary/30 transition-shadow">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{tech.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground font-display">
                Key Benefits
              </h3>
              
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
