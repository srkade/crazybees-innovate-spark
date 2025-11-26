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
    },
  ];

  return (
    <section id="services" ref={ref} className="py-24 px-4 relative bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-primary/10 text-secondary text-sm font-semibold rounded-full mb-6 border border-primary/20"
          >
            What We Offer
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-secondary">Comprehensive </span>
            <span className="gradient-text">Service Portfolio</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Diverse, tailored solutions to drive industry success with flexible engagement models
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="p-8 bg-white rounded-2xl card-modern h-full border-t-4 border-t-primary">
                  <motion.div 
                    className="mb-6 inline-flex p-5 bg-primary rounded-2xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-10 h-10 text-secondary" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-6 text-secondary group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <ul className="space-y-4">
                    {service.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.15 + i * 0.05 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <div className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
