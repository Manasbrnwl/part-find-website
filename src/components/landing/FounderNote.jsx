
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const FounderNote = ({ content }) => {
  const data = content?.founderNote || {};

  return (
    <section className="py-24 md:py-32 bg-muted/50" data-testid="founder-section">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block bg-[#CCFF00] text-black px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-6">
            Founder Note
          </span>
          <h2
            className="font-syne text-3xl md:text-5xl font-bold tracking-tight uppercase mb-12"
            data-testid="founder-headline"
          >
            {data.headline || "Why We Built Partfind"}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative border-2 border-border bg-card p-8 md:p-12"
        >
          <Quote className="absolute top-6 left-6 h-10 w-10 text-[#CCFF00]/30" />

          <blockquote className="relative z-10">
            <p
              className="font-outfit text-lg md:text-xl leading-relaxed text-foreground/90 italic pl-8 md:pl-12"
              data-testid="founder-quote"
            >
              &ldquo;{data.quote || "As students ourselves, we saw how unorganized the event industry is."}&rdquo;
            </p>
            <footer className="mt-8 pl-8 md:pl-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-syne font-bold text-lg">
                  P
                </div>
                <div>
                  <div className="font-syne font-bold" data-testid="founder-attribution">
                    {data.attribution || "Co-Founder, Partfind"}
                  </div>
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    Partfind Team
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};