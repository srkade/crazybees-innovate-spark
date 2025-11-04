import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Code2, Palette } from "lucide-react";

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: BookOpen,
      title: "Technical Publications",
      items: [
        "Development of parts catalogues",
        "Service and operator manuals",
        "Training content for precise knowledge transfer",
      ],
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: Code2,
      title: "Automation & Development",
      items: [
        "AI, ML, RPA, and ChatBOT process automation",
        "Tailored product and solution development",
        "Addressing industry challenges to boost growth",
        "Flexible engagements from 100 annual hours minimum",
      ],
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: Palette,
      title: "Graphics & Animations",
      items: [
        "2D/3D graphics creation",
        "Wiring harnesses and electrical schematics",
        "Hydraulic and pneumatic schematics",
        "Immersive animations",
      ],
      color: "from-orange-600 to-yellow-600",
    },
  ];

  return (
    <section id="services" ref={ref} className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Comprehensive Service Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diverse, tailored solutions to drive industry success with flexible engagement models
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative p-8 bg-card rounded-3xl tech-border card-glow h-full overflow-hidden">
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                  />

                  <div className="relative z-10">
                    <div className={`mb-6 inline-flex p-5 bg-gradient-to-br ${service.color} rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <ul className="space-y-3">
                      {service.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                        >
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-accent transition-colors flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Corner accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
