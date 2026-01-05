import Link from "next/link";
import Image from "next/image";
import { Heart, ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function EmpoweringHerSection() {
    return (
        <section className="relative flex items-center overflow-hidden">
            {/* Background Image with Cinematic Overlay - Stable/Fixed */}
            <div
                className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/photo4.jpg)' }}
            >
                <div className="absolute inset-0 bg-black/70 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
            </div>

            <div className="container-custom relative z-10 py-12">
                {/* Section Header - Standardized Mini-Header (Left Aligned) */}
                <ScrollReveal animation="slideInLeft" className="mb-6">
                    <div className="flex flex-col items-start">
                        <h2 className="text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase text-[var(--orange-accent)] mb-2 inline-block relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[1px] after:bg-[var(--orange-accent)]/30 after:transition-all after:duration-500 hover:after:w-12 hover:after:bg-[var(--orange-accent)]">
                            Empowering Her
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="max-w-xl text-left">
                    <ScrollReveal animation="slideInLeft" delay={0.2}>
                        <p className="text-sm md:text-base text-white/90 font-medium mb-8 leading-relaxed tracking-tight">
                            "Dedicated to training and providing professional placement for female creative talents in photography and video production."
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="slideInLeft" delay={0.4}>
                        <div className="flex flex-col items-start">
                            <Link
                                href="/contact"
                                className="group relative bg-[var(--orange-accent)] hover:bg-white text-white hover:text-black font-semibold px-8 py-3 rounded-full transition-all duration-500 shadow-xl hover:shadow-[var(--orange-accent)]/20 tracking-[.3em] uppercase text-[9px] flex items-center gap-2"
                            >
                                <Heart className="w-3 h-3 transition-transform duration-500 group-hover:scale-110" />
                                SUPPORT
                            </Link>

                            <p className="mt-6 text-[9px] tracking-[.15em] uppercase text-white/40 font-medium">
                                Creating opportunities through digital storytelling
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
