
import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";

export const WhatIsSection = ({ content }) => {
  const data = content?.whatIs || {};
  const cards = data.cards || [];

  return (
    <section
      className="py-24 md:py-32 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      data-testid="whatis-section"
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
            What is Part-find?
          </span>
          <h2
            className="font-syne text-4xl md:text-6xl font-bold tracking-tight uppercase"
            data-testid="whatis-headline"
          >
            {data.headline || "A Smarter Way to Find Event Work"}
          </h2>
          <p className="font-outfit text-base md:text-lg text-muted-foreground mt-4 max-w-xl">
            {data.description || "Part-find connects students and organizers."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative border-2 border-border bg-card overflow-hidden hover:border-blue-600 dark:hover:border-blue-400 transition-colors duration-300"
              data-testid={`whatis-card-${i}`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  {i === 0 ? (
                    <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  ) : (
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  )}
                  <h3 className="font-syne text-2xl md:text-3xl font-bold">
                    {card.title}
                  </h3>
                </div>
                <p className="font-outfit text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 font-mono text-sm uppercase tracking-wider text-center text-muted-foreground"
          data-testid="whatis-tagline"
        >
          {data.tagline || "Everything in one place."}
        </motion.p>
      </div>
    </section>
  );
};