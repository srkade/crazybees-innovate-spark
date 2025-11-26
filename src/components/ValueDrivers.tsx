import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Bot, DollarSign, Shield, Recycle } from "lucide-react";

export const ValueDrivers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const drivers = [
    {
      icon: Clock,
      title: "Flexible Operating Model",
      description: "Hourly charges and pay-per-delivery emphasize accountability and quality in every output.",
    },
    {
      icon: Bot,
      title: "Advanced Automation",
      description: "End-to-end AI, Machine Learning, RPA, and ChatBOTs streamline complex business processes for enhanced efficiency and accuracy.",
    },
    {
      icon: DollarSign,
      title: "Cost Leadership",
      description: "Leveraging skilled talent from Tier 2 and 3 cities significantly reduces transactional work costs.",
    },
    {
      icon: Shield,
      title: "Full Operational Ownership",
      description: "Managing processes end-to-end optimizes costs and performance with complete accountability.",
    },
    {
      icon: Recycle,
      title: "Sustainable Software Solutions",
      description: "Designed for zero recurrence costs to ensure long-term sustainability and seamless transitions.",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 relative bg-muted/30">
      {/* Subtle pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-30 pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-primary/10 text-secondary text-sm font-semibold rounded-full mb-6 border border-primary/20"
          >
            Why Choose Us
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-secondary">Distinctive </span>
            <span className="gradient-text">Value Drivers</span>
            <br />
            <span className="text-secondary text-3xl md:text-4xl">of CrazyBees</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Flexible, Automated, Cost-Efficient, and Fully Owned Solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drivers.map((driver, index) => {
            const Icon = driver.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group ${index === drivers.length - 1 && drivers.length % 3 === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="p-8 bg-white rounded-2xl card-modern h-full">
                  <motion.div 
                    className="mb-6 inline-flex p-4 bg-secondary rounded-2xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-4 text-secondary group-hover:text-primary transition-colors">
                    {driver.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {driver.description}
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
