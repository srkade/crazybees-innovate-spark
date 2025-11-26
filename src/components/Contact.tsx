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
    { icon: Mail, title: "Email Us", content: "crazybeesinnovationhub@gmail.com", href: "mailto:crazybeesinnovationhub@gmail.com" },
    { icon: Phone, title: "Call Us", content: "+91 915667982", href: "tel:+91 915667982" },
    { icon: MapPin, title: "Visit Us", content: "Kharadi Pune", href: "#" },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 px-4 relative bg-white">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <motion.span className="inline-block px-4 py-1.5 bg-primary/10 text-secondary text-sm font-semibold rounded-full mb-6 border border-primary/20">
            Get In Touch
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-secondary">Let's </span>
            <span className="gradient-text">Build Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Partner with CrazyBees to build intelligent, sustainable, and scalable innovations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}}>
            <div className="p-8 bg-white rounded-2xl card-modern">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Send us a message</h3>
              <form className="space-y-5">
                <Input placeholder="Your Name" className="h-12 rounded-xl border-border focus:border-primary" />
                <Input type="email" placeholder="Your Email" className="h-12 rounded-xl border-border focus:border-primary" />
                <Input placeholder="Subject" className="h-12 rounded-xl border-border focus:border-primary" />
                <Textarea placeholder="Your Message" rows={5} className="rounded-xl border-border focus:border-primary resize-none" />
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full h-12 btn-honey rounded-xl group" size="lg">
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}}>
            <div className="p-8 bg-white rounded-2xl card-modern h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-8 text-secondary">Get in touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      whileHover={{ x: 8 }}
                      className="flex items-start gap-4 group cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary mb-1 group-hover:text-primary transition-colors">{info.title}</h4>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-10 p-6 bg-primary/10 rounded-2xl border border-primary/20">
                <p className="text-muted-foreground">
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
