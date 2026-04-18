
import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Tent } from "lucide-react";

export const HeroSection = ({ content }) => {
  const data = content?.hero || {};
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set((e.clientX - rect.left - rect.width / 2) / 20);
      mouseY.set((e.clientY - rect.top - rect.height / 2) / 20);
    }
  };

  const cards = data.floatingCards || [];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      data-testid="hero-section"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-24 md:py-32">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1
              className="font-syne text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter leading-none uppercase pt-6"
              data-testid="hero-headline"
            >
              {data.headline || "Find Trusted Event Gigs"}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-outfit text-base md:text-lg leading-relaxed text-muted-foreground max-w-lg"
            data-testid="hero-subheadline"
          >
            {data.subheadline || "Discover verified opportunities."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href={data.primaryCTA?.href || "#"} target="_blank" rel="noopener noreferrer">
              <Button
                className="bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 h-12 px-8 rounded-none border-2 border-transparent font-bold tracking-wide uppercase active:translate-y-1 transition-transform duration-100"
                data-testid="hero-primary-cta"
              >
                <ArrowRight className="mr-2 h-4 w-4" />
                {data.primaryCTA?.label || "Join as Student"}
              </Button>
            </a>
            <a href={data.secondaryCTA?.href || "#"} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="h-12 px-8 rounded-none border-2 border-current font-bold tracking-wide uppercase hover:bg-foreground hover:text-background active:translate-y-1 transition-transform duration-100"
                data-testid="hero-secondary-cta"
              >
                <Tent className="mr-2 h-4 w-4" />
                {data.secondaryCTA?.label || "Post Requirement"}
              </Button>
            </a>
          </motion.div>
        </div>

        <div className="relative h-80 lg:h-[500px] hidden lg:block">
          {cards.map((card, i) => {
            const rotations = [-6, 3, -2];
            const offsets = [
              { x: 0, y: 0 },
              { x: 60, y: 80 },
              { x: -30, y: 180 },
            ];
            return (
              <FloatingCard
                key={i}
                card={card}
                index={i}
                rotation={rotations[i] || 0}
                offset={offsets[i] || { x: 0, y: 0 }}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
};

const FloatingCard = ({ card, index, rotation, offset, mouseX, mouseY }) => {
  const x = useTransform(mouseX, (v) => v * (index + 1) * 0.5 + offset.x);
  const y = useTransform(mouseY, (v) => v * (index + 1) * 0.5 + offset.y);

  return (
    <motion.div
      style={{ x, y, rotate: rotation }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
      className="absolute bg-card border-2 border-border p-6 w-64 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
      data-testid={`floating-card-${index}`}
    >
      <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
        GIG #{String(index + 1).padStart(3, "0")}
      </div>
      <div className="font-syne font-bold text-lg">{card.title}</div>
      <div className="flex justify-between items-center mt-3">
        <span className="font-mono text-sm text-[#CCFF00] dark:text-[#CCFF00] font-bold">
          {card.pay}
        </span>
        <span className="font-outfit text-xs text-muted-foreground">{card.location}</span>
      </div>
    </motion.div>
  );
};