import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Active Retailers" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "2M+", label: "Transactions/Month" },
  { value: "50+", label: "Countries Served" },
];

export const Stats = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 gradient-primary opacity-5" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
