import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, RefreshCw, Zap, Puzzle, CheckCircle2, Rocket } from "lucide-react";

export const SoftwareDevelopment = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stages = [
    {
      icon: Users,
      title: "Stakeholder Collaboration",
      description: "Close partnership with clients throughout development",
    },
    {
      icon: RefreshCw,
      title: "Iterative Development",
      description: "Continuous refinement based on feedback",
    },
    {
      icon: Zap,
      title: "Adaptability",
      description: "Flexible approach to changing requirements",
    },
    {
      icon: Puzzle,
      title: "Technology Integration",
      description: "Leveraging cutting-edge tools and frameworks",
    },
    {
      icon: CheckCircle2,
      title: "Quality Assurance",
      description: "Rigorous testing and validation processes",
    },
    {
      icon: Rocket,
      title: "Faster Time-to-Market",
      description: "Accelerated delivery without compromising quality",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Honeycomb background */}
      <div className="absolute inset-0 honeycomb-bg opacity-15 pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
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
            Agile Methodology
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display">
            <span className="gradient-text">Agile Software Development</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our agile methodology ensures flexibility, quality, and rapid delivery
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring"
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="relative p-6 glass rounded-2xl h-full overflow-hidden">
                  {/* Gradient hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="mb-4 inline-flex p-3 bg-gradient-to-br from-secondary to-primary rounded-xl shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </motion.div>

                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors font-display">
                      {stage.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  {/* Stage number badge */}
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {index + 1}
                  </motion.div>
                  
                  {/* Border gradient */}
                  <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-secondary/0 to-primary/0 group-hover:from-secondary/50 group-hover:to-primary/50 transition-all duration-500 -z-10" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 glass rounded-3xl max-w-3xl">
            <p className="text-lg text-muted-foreground mb-6">
              Our agile approach ensures that your software evolves with your business needs, delivering value at every stage of development.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {["Scalable Architecture", "Modern Tech Stack", "Continuous Integration"].map((tag, index) => (
                <motion.span 
                  key={index}
                  className="px-5 py-2.5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-sm font-medium text-foreground border border-primary/20"
                  whileHover={{ scale: 1.05, borderColor: "hsl(42 95% 50% / 0.5)" }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
