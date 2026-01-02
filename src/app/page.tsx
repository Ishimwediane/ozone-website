"use client";

import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section Component */}
      <Hero />

      {/* All Other Sections as Components */}
      <ServicesSection />
      <WhyChooseSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
