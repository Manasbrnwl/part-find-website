import { useState, useEffect } from "react";
import { getContent } from "@/lib/content";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { WhatIsSection } from "@/components/landing/WhatIsSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { OpportunitiesSection } from "@/components/landing/OpportunitiesSection";
import { WhyPartfind } from "@/components/landing/WhyPartfind";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { FounderNote } from "@/components/landing/FounderNote";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  const [content, setContent] = useState(getContent);

  useEffect(() => {
    setContent(getContent());
    const handleStorage = () => setContent(getContent());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="landing-page">
      <Navbar content={content} />
      <HeroSection content={content} />
      <ProblemSection content={content} />
      <WhatIsSection content={content} />
      <HowItWorks content={content} />
      <OpportunitiesSection content={content} />
      <WhyPartfind content={content} />
      <BenefitsSection content={content} />
      <FounderNote content={content} />
      <FAQSection content={content} />
      <CTASection content={content} />
      <Footer content={content} />
    </div>
  );
}