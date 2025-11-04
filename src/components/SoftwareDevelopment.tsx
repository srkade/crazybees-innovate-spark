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
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Agile Software Development</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our agile methodology ensures flexibility, quality, and rapid delivery
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring"
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="relative p-6 bg-card rounded-2xl tech-border card-glow h-full overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-primary to-accent rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {stage.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  {/* Stage number */}
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {index + 1}
                  </motion.div>
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
          <div className="inline-block p-8 bg-card rounded-3xl tech-border card-glow">
            <p className="text-lg text-muted-foreground mb-4 max-w-2xl">
              Our agile approach ensures that your software evolves with your business needs, delivering value at every stage of development.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
              <span className="px-4 py-2 bg-primary/10 rounded-full">Scalable Architecture</span>
              <span className="px-4 py-2 bg-accent/10 rounded-full">Modern Tech Stack</span>
              <span className="px-4 py-2 bg-primary/10 rounded-full">Continuous Integration</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
