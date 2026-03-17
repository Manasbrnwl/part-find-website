
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = ({ content }) => {
    const data = content?.faq || {};
    const items = data.questions || data.items || [];

    return (
        <section id="faq" className="py-24 md:py-32" data-testid="faq-section">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >

                    <h2
                        className="font-syne text-4xl md:text-6xl font-bold tracking-tight uppercase"
                        data-testid="faq-headline"
                    >
                        {data.title || data.headline || "Frequently Asked Questions"}
                    </h2>
                </motion.div>

                <Accordion type="single" collapsible className="w-full space-y-3" data-testid="faq-accordion">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.08 }}
                        >
                            <AccordionItem
                                value={`faq-${i}`}
                                className="border-2 border-border bg-card px-6 data-[state=open]:border-blue-600 dark:data-[state=open]:border-blue-400 transition-colors duration-200"
                                data-testid={`faq-item-${i}`}
                            >
                                <AccordionTrigger className="font-syne font-bold text-base md:text-lg text-left py-5 hover:no-underline" data-testid={`faq-trigger-${i}`}>
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="font-outfit text-muted-foreground pb-5" data-testid={`faq-answer-${i}`}>
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};