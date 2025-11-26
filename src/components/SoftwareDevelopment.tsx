import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, RefreshCw, Zap, Puzzle, CheckCircle2, Rocket } from "lucide-react";

export const SoftwareDevelopment = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stages = [
    { icon: Users, title: "Stakeholder Collaboration", description: "Close partnership with clients throughout development" },
    { icon: RefreshCw, title: "Iterative Development", description: "Continuous refinement based on feedback" },
    { icon: Zap, title: "Adaptability", description: "Flexible approach to changing requirements" },
    { icon: Puzzle, title: "Technology Integration", description: "Leveraging cutting-edge tools and frameworks" },
    { icon: CheckCircle2, title: "Quality Assurance", description: "Rigorous testing and validation processes" },
    { icon: Rocket, title: "Faster Time-to-Market", description: "Accelerated delivery without compromising quality" },
  ];

  return (
    <section ref={ref} className="py-24 px-4 relative bg-white">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <motion.span className="inline-block px-4 py-1.5 bg-primary/10 text-secondary text-sm font-semibold rounded-full mb-6 border border-primary/20">
            Agile Methodology
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
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
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative p-6 bg-white rounded-2xl card-modern h-full">
                  <motion.div className="mb-4 inline-flex p-3 bg-primary rounded-xl" whileHover={{ scale: 1.1 }}>
                    <Icon className="w-7 h-7 text-secondary" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2 text-secondary group-hover:text-primary transition-colors">{stage.title}</h3>
                  <p className="text-muted-foreground text-sm">{stage.description}</p>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }} className="mt-16 text-center">
          <div className="inline-block p-8 bg-muted/50 rounded-2xl border border-border max-w-3xl">
            <p className="text-muted-foreground mb-6">Our agile approach ensures that your software evolves with your business needs, delivering value at every stage of development.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Scalable Architecture", "Modern Tech Stack", "Continuous Integration"].map((tag, index) => (
                <span key={index} className="px-5 py-2 bg-white rounded-full text-sm font-medium text-secondary border border-border">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
