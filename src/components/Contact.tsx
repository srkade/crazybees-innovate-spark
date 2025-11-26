import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "crazybeesinnovationhub@gmail.com",
      href: "mailto:crazybeesinnovationhub@gmail.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 915667982",
      href: "tel:+91 915667982",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Kharadi Pune",
      href: "#",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 honeycomb-bg opacity-15" />
        
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(42 95% 50% / 0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(28 95% 55% / 0.1) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
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
            Get In Touch
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display">
            <span className="gradient-text">Let's Build Together</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Partner with CrazyBees to build intelligent, sustainable, and scalable innovations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="p-8 glass rounded-3xl relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
              
              <h3 className="text-2xl font-bold mb-6 text-foreground font-display relative z-10">Send us a message</h3>
              
              <form className="space-y-5 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <Input 
                    placeholder="Your Name" 
                    className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/30 h-12 rounded-xl transition-all"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/30 h-12 rounded-xl transition-all"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <Input 
                    placeholder="Subject" 
                    className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/30 h-12 rounded-xl transition-all"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <Textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/30 rounded-xl transition-all resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className="w-full h-12 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] hover:bg-right text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-500 group"
                    size="lg"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="p-8 glass rounded-3xl h-full flex flex-col justify-center relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/20 to-primary/20 blur-3xl" />
              
              <h3 className="text-2xl font-bold mb-8 text-foreground font-display relative z-10">Get in touch</h3>
              
              <div className="space-y-6 relative z-10">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.15 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 group cursor-pointer"
                    >
                      <motion.div 
                        className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-primary/30 transition-all"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </motion.div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors font-display">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {info.content}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              <motion.div 
                className="mt-10 p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-primary font-semibold">Why choose us?</span> We combine cutting-edge AI technology with operational excellence to deliver sustainable, cost-effective solutions that drive real business growth.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
