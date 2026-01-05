import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
    return (
        <section className="section bg-[var(--bg-primary)]">
            <div className="container-custom text-center py-4 md:py-8">
                <ScrollReveal animation="fadeInUp">
                    <div className="inline-block mb-2">
                        <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[var(--orange-accent)] opacity-80">
                            NEXT STEPS
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-[var(--text-primary)] leading-tight tracking-tighter">
                        Ready to Bring Your <br />
                        <span className="text-[var(--orange-accent)]">Vision to Life?</span>
                    </h2>
                </ScrollReveal>

                <ScrollReveal animation="fadeInUp" delay={0.2}>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center space-x-3 bg-[var(--orange-accent)] hover:bg-orange-600 text-white font-semibold px-12 py-5 rounded-full transition-all duration-300 shadow-xl tracking-[0.2em] uppercase text-[10px]"
                        >
                            <span>Get in Touch</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-md hover:bg-white/10 text-[var(--text-primary)] font-semibold px-12 py-5 rounded-full border border-[var(--border-color)] transition-all duration-300 tracking-[0.2em] uppercase text-[10px]"
                        >
                            <span>View Our Work</span>
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
