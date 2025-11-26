import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, FileText, GraduationCap, Zap, Shield, Target } from "lucide-react";

export const TechnicalPublications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: BookOpen,
      title: "Parts Catalogues",
      description: "Essential for product lifecycle management",
    },
    {
      icon: FileText,
      title: "Service Manuals",
      description: "Comprehensive operator and maintenance guides",
    },
    {
      icon: GraduationCap,
      title: "Training Content",
      description: "Customized content tailored to client needs",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "AI-Powered Speed",
      description: "Leverage AI and ML automation to speed updates and improve accuracy",
    },
    {
      icon: Shield,
      title: "Error Reduction",
      description: "Reduce manual errors and intervention through intelligent content automation",
    },
    {
      icon: Target,
      title: "Enhanced Safety",
      description: "Support industries with complex machinery to enhance maintenance and safety",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Documentation Excellence
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display">
            <span className="gradient-text">Technical Publications</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive content to streamline operations and training
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="p-8 glass rounded-2xl h-full text-center relative overflow-hidden">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div 
                    className="mb-5 inline-flex p-4 bg-gradient-to-br from-secondary to-primary rounded-2xl shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors font-display">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Border gradient */}
                  <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-secondary/0 to-primary/0 group-hover:from-secondary/50 group-hover:to-primary/50 transition-all duration-500 -z-10" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-10 text-foreground font-display">
            Why Choose Our Technical Publications?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 glass rounded-2xl group"
                >
                  <motion.div 
                    className="mb-4 inline-flex p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl"
                    whileHover={{ rotate: 10 }}
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  
                  <h4 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors font-display">
                    {benefit.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
