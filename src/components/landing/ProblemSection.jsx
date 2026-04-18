import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export const ProblemSection = ({ content }) => {
  const data = content?.problem || {};
  const issues = data.issues || [];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-zinc-950 text-white">
      {/* Background Atmosphere: Event crowd silhouette / bokeh */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover grayscale brightness-50"
          alt="Event background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block border border-[#CCFF00] text-[#CCFF00] px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider mb-6">
              Industry Challenge
            </span>
            <h2 className="font-syne text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter uppercase mb-6 leading-[0.9]">
              {data.headline || "Still searching in WhatsApp groups?"}
            </h2>
            <p className="font-outfit text-lg md:text-xl text-zinc-400 mb-8 max-w-md leading-relaxed">
              {data.subtext || "We know how chaotic it is. The event industry deserves better organization and trust."}
            </p>
            
            <div className="relative p-8 border-2 border-zinc-800 bg-zinc-900/50 backdrop-blur-sm shadow-[8px_8px_0px_0px_rgba(204,255,0,0.1)]">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#CCFF00] flex items-center justify-center rotate-3 border-2 border-black">
                <AlertCircle className="text-black h-6 w-6 -rotate-3" />
              </div>
              <p className="font-syne font-bold text-xl lg:text-2xl text-white italic leading-tight">
                "{data.conclusion || "The event industry is unorganized. Part-find is fixing this."}"
              </p>
            </div>
          </motion.div>

          <div className="space-y-4">
            {issues.map((issue, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 md:p-8 border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm group hover:border-[#CCFF00] transition-all duration-300"
              >
                <div className="font-mono text-3xl md:text-4xl font-black text-zinc-800 group-hover:text-[#CCFF00] transition-colors leading-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="font-syne font-bold text-lg md:text-xl uppercase tracking-tight text-zinc-300 group-hover:text-white transition-colors">
                  {issue}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};