"use client";

import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import EmpoweringHerSection from "@/components/EmpoweringHerSection";
import AgaciroFashionGalaSection from "@/components/AgaciroFashionGalaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section Component */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* All Other Sections as Components */}
      <ServicesSection />
      <EmpoweringHerSection />
      <AgaciroFashionGalaSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
