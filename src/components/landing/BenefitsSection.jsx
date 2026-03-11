import { motion } from "framer-motion";
import { Check, GraduationCap, Briefcase } from "lucide-react";

export const BenefitsSection = ({ content }) => {
  const data = content?.benefits || {};

  return (
    <section className="py-24 md:py-32" data-testid="benefits-section">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="inline-block bg-[#CCFF00] text-black px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-4">
            Perks
          </span>
          <h2
            className="font-syne text-4xl md:text-6xl font-bold tracking-tight uppercase"
            data-testid="benefits-headline"
          >
            {data.headline || "Benefits"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-2 border-border bg-card p-8 md:p-10"
            data-testid="benefits-students"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="font-syne text-2xl font-bold uppercase">
                {data.students?.title || "For Students"}
              </h3>
            </div>
            <ul className="space-y-4">
              {(data.students?.items || []).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 flex items-center justify-center bg-[#CCFF00] shrink-0">
                    <Check className="h-3 w-3 text-black" />
                  </div>
                  <span className="font-outfit text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-2 border-border bg-card p-8 md:p-10"
            data-testid="benefits-organizers"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="font-syne text-2xl font-bold uppercase">
                {data.organizers?.title || "For Organizers"}
              </h3>
            </div>
            <ul className="space-y-4">
              {(data.organizers?.items || []).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 flex items-center justify-center bg-blue-600 dark:bg-blue-500 shrink-0">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="font-outfit text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};