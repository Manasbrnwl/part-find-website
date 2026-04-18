import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export const BlogSection = ({ content }) => {
  const data = content?.blogs || {};
  const items = data.items || [];

  return (
    <section id="blogs" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative lens flare to reduce 'tech' look */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="inline-block bg-[#CCFF00] text-black px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-4">
            Insights
          </span>
          <h2 className="font-syne text-4xl md:text-6xl font-bold tracking-tight uppercase">
            {data.headline || "Latest Updates"}
          </h2>
          <p className="font-outfit text-base md:text-lg text-muted-foreground mt-4 max-w-2xl">
            {data.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/9] overflow-hidden mb-6 border-2 border-border group-hover:border-[#CCFF00] transition-colors duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs uppercase tracking-widest mb-3">
                <Calendar className="h-3 w-3" />
                {blog.date}
              </div>
              <h3 className="font-syne text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                {blog.title}
              </h3>
              <p className="font-outfit text-sm text-muted-foreground leading-relaxed mb-4">
                {blog.excerpt}
              </p>
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                Read More <ArrowRight className="h-4 w-4 text-[#CCFF00]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
