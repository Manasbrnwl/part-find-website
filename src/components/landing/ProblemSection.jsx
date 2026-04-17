
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { XCircle } from "lucide-react";

export const ProblemSection = ({ content }) => {
  const data = content?.problem || {};
  const issues = data.issues || [];

  return (
    <section
      className="relative bg-zinc-950 text-green-400 py-24 md:py-32 overflow-hidden"
      data-testid="problem-section"
    >
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00ff0012_1px,transparent_1px),linear-gradient(to_bottom,#00ff0012_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-mono text-xs uppercase tracking-wider text-green-600 mb-4">
            // ERROR_LOG.txt
          </div>

          <div className="border-2 border-green-800 bg-black/50 p-6 md:p-10">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-green-900">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="font-mono text-xs text-green-700 ml-3">
                student@reality:~$
              </span>
            </div>

            <h2
              className="font-syne text-3xl md:text-5xl font-bold tracking-tight text-green-300 mb-4"
              data-testid="problem-headline"
            >
              {data.headline || "Still searching in WhatsApp groups?"}
            </h2>

            <p className="font-mono text-sm text-green-600 mb-8">
              {data.subtext || "We know how chaotic it is."}
            </p>

            <div className="space-y-3">
              {issues.map((issue, i) => (
                <TerminalLine key={i} text={issue} delay={i * 0.15} index={i} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: issues.length * 0.15 + 0.3 }}
              className="mt-8 pt-6 border-t border-green-900"
            >
              <span className="font-mono text-sm text-green-400">
                <span className="text-green-700">$</span>{" "}
                {data.conclusion || "The event industry is unorganized. Part-find is fixing this."}
                <span className="animate-pulse">_</span>
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TerminalLine = ({ text, delay, index }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay * 1000 + 500);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-start gap-3 font-mono text-sm"
      data-testid={`problem-issue-${index}`}
    >
      <XCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
      <span className="text-green-300">{text}</span>
    </motion.div>
  );
};