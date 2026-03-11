
import { motion } from "framer-motion";
import { Music, Trophy, GraduationCap, Megaphone, Building2, Sparkles } from "lucide-react";

const iconMap = {
  Music,
  Trophy,
  GraduationCap,
  Megaphone,
  Building2,
  Sparkles,
};

export const OpportunitiesSection = ({ content }) => {
  const data = content?.opportunities || {};
  const items = data.items || [];
  const doubled = [...items, ...items];

  return (
    <section
      id="opportunities"
      className="py-24 md:py-32 overflow-hidden"
      data-testid="opportunities-section"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-[#CCFF00] text-black px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-4">
            Gig Types
          </span>
          <h2
            className="font-syne text-4xl md:text-6xl font-bold tracking-tight uppercase"
            data-testid="opportunities-headline"
          >
            {data.headline || "Opportunities You Can Find"}
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee">
          {doubled.map((item, i) => {
            const IconComp = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={i}
                className="shrink-0 mx-3 w-64 border-2 border-border bg-card p-6 hover:border-blue-600 dark:hover:border-blue-400 transition-colors duration-300"
                data-testid={`opportunity-card-${i}`}
              >
                <IconComp className="h-8 w-8 mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="font-syne text-xl font-bold">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl mt-12">
        <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground" data-testid="opportunities-tagline">
          {data.tagline || "From volunteering to paid gigs."}
        </p>
      </div>
    </section>
  );
};