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

  const benefits = ["Enhanced Accuracy & Precision", "Significant Cost Efficiency", "Regulatory Compliance", "Process Consistency"];

  return (
    <section ref={ref} className="py-24 px-4 relative bg-muted/30">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <motion.span className="inline-block px-4 py-1.5 bg-primary/10 text-secondary text-sm font-semibold rounded-full mb-6 border border-primary/20">
            Smart Automation
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Process Automation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Streamline complex business processes with cutting-edge AI technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}}>
            <div className="p-8 bg-white rounded-2xl card-modern">
              <div className="flex flex-col items-center py-12">
                <motion.div
                  className="w-28 h-28 bg-primary rounded-3xl flex items-center justify-center shadow-lg mb-6"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Brain className="w-14 h-14 text-secondary" />
                </motion.div>
                <span className="px-6 py-2 bg-secondary text-white rounded-full font-semibold">AI-Powered</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-secondary">Key Technologies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technologies.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div key={index} whileHover={{ scale: 1.02 }} className="flex items-center gap-4 p-4 bg-white rounded-xl card-modern">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                      <span className="font-semibold text-secondary">{tech.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-secondary">Key Benefits</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div key={index} whileHover={{ x: 5 }} className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-3 h-3 rounded-full bg-primary" />
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
