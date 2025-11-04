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
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Bot,
      title: "Advanced Automation",
      description: "End-to-end AI, Machine Learning, RPA, and ChatBOTs streamline complex business processes for enhanced efficiency and accuracy.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: DollarSign,
      title: "Cost Leadership",
      description: "Leveraging skilled talent from Tier 2 and 3 cities significantly reduces transactional work costs.",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      icon: Shield,
      title: "Full Operational Ownership",
      description: "Managing processes end-to-end optimizes costs and performance with complete accountability.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Recycle,
      title: "Sustainable Software Solutions",
      description: "Designed for zero recurrence costs to ensure long-term sustainability and seamless transitions.",
      gradient: "from-teal-500 to-blue-500",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Distinctive Value Drivers</span>
            <br />
            <span className="text-foreground text-3xl md:text-4xl mt-2 block">
              of CrazyBees
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible, Automated, Cost-Efficient, and Fully Owned Solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drivers.map((driver, index) => {
            const Icon = driver.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className={`relative group ${index === 2 ? 'md:col-start-2 lg:col-start-auto' : ''}`}
              >
                <div className="relative p-8 bg-card rounded-3xl tech-border card-glow overflow-hidden h-full">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${driver.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`mb-6 inline-flex p-4 bg-gradient-to-br ${driver.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {driver.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {driver.description}
                    </p>
                  </div>

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: `linear-gradient(135deg, transparent 0%, hsl(var(--primary) / 0.1) 50%, transparent 100%)`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
