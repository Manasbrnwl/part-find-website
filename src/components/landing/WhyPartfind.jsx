
import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Eye, Scale, UserCheck, Clock } from "lucide-react";

const trustIcons = [ShieldCheck, UserCheck, MapPin, Eye, Scale, Clock];

export const WhyPart-find = ({ content }) => {
  const data = content?.whyPart - find || {};
  const badges = data.badges || [];

  return (
    <section
      id="why-us"
      className="py-24 md:py-32 bg-muted/50"
      data-testid="whypart-find-section"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="inline-block bg-[#CCFF00] text-black px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-4">
            Trust
          </span>
          <h2
            className="font-syne text-4xl md:text-6xl font-bold tracking-tight uppercase"
            data-testid="whypart-find-headline"
          >
            {data.headline || "Built on Trust"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, i) => {
            const Icon = trustIcons[i] || ShieldCheck;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative border-2 border-border bg-card p-6 md:p-8 hover:border-[#CCFF00] transition-colors duration-300"
                data-testid={`trust-badge-${i}`}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#CCFF00]/10 group-hover:bg-[#CCFF00]/20 transition-colors duration-300" />
                <Icon className="h-8 w-8 mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="font-syne text-lg font-bold mb-2">{badge.title}</h3>
                <p className="font-outfit text-sm text-muted-foreground">{badge.desc}</p>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
};