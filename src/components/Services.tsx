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
      gradient: "from-secondary to-primary",
      iconBg: "from-secondary to-primary",
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
      gradient: "from-primary to-accent",
      iconBg: "from-primary to-accent",
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
      gradient: "from-accent to-orange-light",
      iconBg: "from-accent to-orange-light",
    },
  ];

  return (
    <section id="services" ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            What We Offer
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display">
            <span className="gradient-text">Comprehensive Service Portfolio</span>
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
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative p-8 glass rounded-3xl h-full overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  
                  {/* Honeycomb pattern overlay on hover */}
                  <div className="absolute inset-0 honeycomb-bg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <motion.div 
                      className={`mb-6 inline-flex p-5 bg-gradient-to-br ${service.iconBg} rounded-2xl shadow-xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors font-display">
                      {service.title}
                    </h3>

                    <ul className="space-y-4">
                      {service.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors"
                        >
                          <motion.div 
                            className={`mt-2 w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`}
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Decorative corner glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 blur-3xl group-hover:opacity-25 transition-opacity duration-500`} />
                  
                  {/* Border gradient */}
                  <div className={`absolute inset-0 rounded-3xl p-px bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
