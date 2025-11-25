import { motion } from "framer-motion";
import { ShoppingCart, Smartphone, BarChart3, Lock, Zap, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: ShoppingCart,
    title: "Seamless Checkout",
    description: "Lightning-fast checkout experience that converts browsers into buyers with minimal friction.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Optimized for mobile commerce with responsive design that works perfectly on any device.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track performance, monitor sales, and make data-driven decisions with powerful insights.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "Bank-grade security with PCI compliance ensuring your customers' data is always protected.",
  },
  {
    icon: Zap,
    title: "Instant Integration",
    description: "Connect with your existing systems in minutes, not months. Start selling immediately.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Multi-currency support and international shipping to help you sell anywhere in the world.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful tools designed to help your retail business thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full gradient-card shadow-card border-border/50 hover:shadow-glow transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
