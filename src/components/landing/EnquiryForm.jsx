import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const EnquiryForm = ({ content }) => {
  const data = content?.enquiry || {};
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://api.part-find.org/api/v1/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Keep submitted state to show success message
      } else {
        setSubmitted(false);
        alert("Failed to send enquiry. Please try again.");
      }
    } catch (error) {
      setSubmitted(false);
      alert("Network error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-[#CCFF00] text-black px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-6">
            Get in Touch
          </span>
          <h2 className="font-syne text-4xl md:text-6xl font-bold tracking-tight uppercase mb-6 leading-none">
            {data.headline || "Business Enquiries"}
          </h2>
          <p className="font-outfit text-lg text-muted-foreground mb-12 max-w-md">
            {data.subtitle || "Tell us your event requirements and we'll handle the rest."}
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white dark:bg-zinc-800 border-2 border-border flex items-center justify-center group-hover:border-[#CCFF00] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email Us</div>
                <div className="font-syne font-bold text-lg">{data.email}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white dark:bg-zinc-800 border-2 border-border flex items-center justify-center group-hover:border-[#CCFF00] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Phone className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Call Us</div>
                <div className="font-syne font-bold text-lg">{data.phone}</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border-2 border-border p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)]"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle className="h-16 w-16 text-[#CCFF00] mb-6" />
              <h3 className="font-syne text-2xl font-bold uppercase mb-2">Message Sent!</h3>
              <p className="text-muted-foreground font-outfit text-sm">We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground px-1">Full Name</label>
                <input
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full h-12 px-4 bg-muted/50 border-2 border-border focus:border-[#CCFF00] outline-none font-outfit text-sm transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground px-1">Email Address</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full h-12 px-4 bg-muted/50 border-2 border-border focus:border-[#CCFF00] outline-none font-outfit text-sm transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground px-1">Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell us about your event staffing needs..."
                  className="w-full min-h-[120px] p-4 bg-muted/50 border-2 border-border focus:border-[#CCFF00] outline-none font-outfit text-sm transition-colors resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#CCFF00] text-black hover:bg-[#b8e600] h-14 rounded-none font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-3 border-2 border-black active:translate-y-1 transition-all"
              >
                Send Enquiry <Send className="h-4 w-4" />
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
