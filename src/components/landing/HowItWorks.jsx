
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const HowItWorks = ({ content }) => {
  const data = content?.howItWorks || {};

  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 bg-muted/50"
      data-testid="howitworks-section"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="inline-block bg-[#CCFF00] text-black px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-4">
            Process
          </span>
          <h2
            className="font-syne text-4xl md:text-6xl font-bold tracking-tight uppercase"
            data-testid="howitworks-headline"
          >
            {data.headline || "How It Works"}
          </h2>
        </motion.div>

        <Tabs defaultValue="students" className="w-full">
          <TabsList className="w-full max-w-md rounded-none border-2 border-border bg-transparent h-auto p-0 mb-12" data-testid="howitworks-tabs">
            <TabsTrigger
              value="students"
              className="flex-1 rounded-none font-syne font-bold uppercase tracking-wide text-sm py-3 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:dark:bg-blue-500"
              data-testid="tab-students"
            >
              {data.students?.title || "For Students"}
            </TabsTrigger>
            <TabsTrigger
              value="organizers"
              className="flex-1 rounded-none font-syne font-bold uppercase tracking-wide text-sm py-3 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:dark:bg-blue-500"
              data-testid="tab-organizers"
            >
              {data.organizers?.title || "For Organizers"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="students" data-testid="students-steps">
            <Pipeline steps={data.students?.steps || []} />
          </TabsContent>
          <TabsContent value="organizers" data-testid="organizers-steps">
            <Pipeline steps={data.organizers?.steps || []} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const Pipeline = ({ steps }) => {
  return (
    <div className="relative">
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative flex items-start gap-6 md:gap-8"
            data-testid={`step-${i}`}
          >
            <div className="relative z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 border-2 border-border bg-background shrink-0">
              <span className="font-mono text-sm md:text-base font-bold text-blue-600 dark:text-blue-400">
                {step.step}
              </span>
            </div>

            <div className="pt-2 md:pt-3">
              <h3 className="font-syne text-lg md:text-xl font-bold mb-1">
                {step.title}
              </h3>
              <p className="font-outfit text-sm text-muted-foreground">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};