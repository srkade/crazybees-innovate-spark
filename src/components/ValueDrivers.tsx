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
      gradient: "from-primary to-accent",
    },
    {
      icon: Bot,
      title: "Advanced Automation",
      description: "End-to-end AI, Machine Learning, RPA, and ChatBOTs streamline complex business processes for enhanced efficiency and accuracy.",
      gradient: "from-secondary to-primary",
    },
    {
      icon: DollarSign,
      title: "Cost Leadership",
      description: "Leveraging skilled talent from Tier 2 and 3 cities significantly reduces transactional work costs.",
      gradient: "from-accent to-orange-light",
    },
    {
      icon: Shield,
      title: "Full Operational Ownership",
      description: "Managing processes end-to-end optimizes costs and performance with complete accountability.",
      gradient: "from-growth to-secondary",
    },
    {
      icon: Recycle,
      title: "Sustainable Software Solutions",
      description: "Designed for zero recurrence costs to ensure long-term sustainability and seamless transitions.",
      gradient: "from-secondary to-growth",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 relative">
      {/* Honeycomb background accent */}
      <div className="absolute inset-0 honeycomb-bg opacity-20 pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
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
            Why Choose Us
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display">
            <span className="gradient-text">Distinctive Value Drivers</span>
            <br />
            <span className="text-foreground text-3xl md:text-4xl mt-2 block">
              of CrazyBees
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Flexible, Automated, Cost-Efficient, and Fully Owned Solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drivers.map((driver, index) => {
            const Icon = driver.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className={`relative group ${index === drivers.length - 1 && drivers.length % 3 === 1 ? 'md:col-start-2 lg:col-start-2' : ''}`}
              >
                <div className="relative p-8 glass rounded-3xl overflow-hidden h-full">
                  {/* Animated gradient border */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl p-px bg-gradient-to-br ${driver.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    style={{ zIndex: -1 }}
                  />
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${driver.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`mb-6 inline-flex p-4 bg-gradient-to-br ${driver.gradient} rounded-2xl shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors font-display">
                      {driver.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {driver.description}
                    </p>
                  </div>

                  {/* Corner decoration */}
                  <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${driver.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
