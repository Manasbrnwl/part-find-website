
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Tent } from "lucide-react";

export const CTASection = ({ content }) => {
  const data = content?.cta || {};

  return (
    <section
      className="relative py-24 md:py-32 bg-zinc-950 text-white overflow-hidden"
      data-testid="cta-section"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-syne text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter uppercase mb-6"
            data-testid="cta-headline"
          >
            {data.headline || "Stop Searching. Start Finding."}
          </h2>
          <p
            className="font-outfit text-lg md:text-xl text-zinc-400 mb-12"
            data-testid="cta-subtext"
          >
            {data.subtext || "Your next opportunity is one click away."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href={data.primaryCTA?.href || "#"} target="_blank" rel="noopener noreferrer">
            <Button
              className="bg-[#CCFF00] text-black hover:bg-[#b8e600] h-14 px-10 rounded-none border-2 border-[#CCFF00] font-bold text-base tracking-wider uppercase active:translate-y-1 transition-transform duration-100"
              data-testid="cta-primary"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              {data.primaryCTA?.label || "Join Partfind Today"}
            </Button>
          </a>
          <a href={data.secondaryCTA?.href || "#"} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="h-14 px-10 rounded-none border-2 border-zinc-500 text-zinc-300 hover:bg-zinc-800 hover:text-white font-bold text-base tracking-wider uppercase active:translate-y-1 transition-transform duration-100"
              data-testid="cta-secondary"
            >
              <Tent className="mr-2 h-5 w-5" />
              {data.secondaryCTA?.label || "Post Your Requirement"}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};