import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
    return (
        <section className="section bg-[var(--bg-secondary)] overflow-hidden">
            <div className="container-custom">
                {/* Section Header */}
                <ScrollReveal animation="fadeInDown" className="mini-header">
                    <h2>Company Statistics</h2>
                </ScrollReveal>

                <div className="max-w-4xl mx-auto">
                    {/* Statistics - Simplified Grid Centered */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
                        {/* First Stat */}
                        <ScrollReveal animation="scaleIn" delay={0}>
                            <div className="flex flex-col items-center text-center">
                                <div className="text-4xl md:text-6xl font-semibold text-[var(--orange-accent)] mb-2">
                                    500+
                                </div>
                                <div>
                                    <div className="text-[10px] font-semibold tracking-wider uppercase text-[var(--text-primary)] mb-1">
                                        Projects
                                    </div>
                                    <div className="text-[8px] tracking-wide uppercase text-[var(--text-tertiary)]">
                                        Successfully Completed
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Second Stat */}
                        <ScrollReveal animation="scaleIn" delay={0.1}>
                            <div className="flex flex-col items-center text-center">
                                <div className="text-4xl md:text-6xl font-semibold text-[var(--orange-accent)] mb-2">
                                    10k+
                                </div>
                                <div>
                                    <div className="text-[10px] font-semibold tracking-wider uppercase text-[var(--text-primary)] mb-1">
                                        Happy Clients
                                    </div>
                                    <div className="text-[8px] tracking-wide uppercase text-[var(--text-tertiary)]">
                                        Across Industries
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Third Stat */}
                        <ScrollReveal animation="scaleIn" delay={0.2}>
                            <div className="flex flex-col items-center text-center">
                                <div className="text-4xl md:text-6xl font-semibold text-[var(--orange-accent)] mb-2">
                                    15+
                                </div>
                                <div>
                                    <div className="text-[10px] font-semibold tracking-wider uppercase text-[var(--text-primary)] mb-1">
                                        Years
                                    </div>
                                    <div className="text-[8px] tracking-wide uppercase text-[var(--text-tertiary)]">
                                        Of Excellence
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
