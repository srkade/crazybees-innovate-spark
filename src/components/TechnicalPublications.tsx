import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, FileText, GraduationCap, Zap, Shield, Target } from "lucide-react";

export const TechnicalPublications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    { icon: BookOpen, title: "Parts Catalogues", description: "Essential for product lifecycle management" },
    { icon: FileText, title: "Service Manuals", description: "Comprehensive operator and maintenance guides" },
    { icon: GraduationCap, title: "Training Content", description: "Customized content tailored to client needs" },
  ];

  const benefits = [
    { icon: Zap, title: "AI-Powered Speed", description: "Leverage AI and ML automation to speed updates and improve accuracy" },
    { icon: Shield, title: "Error Reduction", description: "Reduce manual errors and intervention through intelligent content automation" },
    { icon: Target, title: "Enhanced Safety", description: "Support industries with complex machinery to enhance maintenance and safety" },
  ];

  return (
    <section ref={ref} className="py-24 px-4 relative bg-muted/30">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <motion.span className="inline-block px-4 py-1.5 bg-primary/10 text-secondary text-sm font-semibold rounded-full mb-6 border border-primary/20">
            Documentation Excellence
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical Publications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive content to streamline operations and training
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="p-8 bg-white rounded-2xl card-modern h-full text-center">
                  <motion.div className="mb-5 inline-flex p-4 bg-secondary rounded-2xl" whileHover={{ scale: 1.1 }}>
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10 text-secondary">Why Choose Our Technical Publications?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={index} whileHover={{ scale: 1.02 }} className="p-6 bg-white rounded-2xl card-modern">
                  <div className="mb-4 inline-flex p-3 icon-honey rounded-xl">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-secondary">{benefit.title}</h4>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
