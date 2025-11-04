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
    <section id="contact" ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Let's Build Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with CrazyBees to build intelligent, sustainable, and scalable innovations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="p-8 bg-card rounded-3xl tech-border card-glow">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h3>
              
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-background border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-background border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <Input 
                    placeholder="Subject" 
                    className="bg-background border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={6}
                    className="bg-background border-border focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="p-8 bg-card rounded-3xl tech-border card-glow h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-8 text-foreground">Get in touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 group cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
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

              <div className="mt-12 p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-primary font-semibold">Why choose us?</span> We combine cutting-edge AI technology with operational excellence to deliver sustainable, cost-effective solutions that drive real business growth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
