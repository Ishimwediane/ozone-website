"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function AgaciroFashionGalaSection() {
    return (
        <section className="section bg-[var(--bg-primary)]">
            <div className="container-custom">
                {/* Section Header */}
                <ScrollReveal animation="fadeInDown" className="mini-header">
                    <h2>Flagship Event</h2>
                </ScrollReveal>

                {/* Edition Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    {/* Edition 1 Card - Hosted */}
                    <ScrollReveal animation="fadeInUp" delay={0.1} className="h-full">
                        <div className="group relative bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-3xl overflow-hidden transition-all duration-700 hover:border-[var(--orange-accent)] hover:shadow-2xl hover:shadow-black/10 h-full">
                            <div className="relative aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9] overflow-hidden">
                                <Image
                                    src="/images/photo.jpg"
                                    alt="Agaciro Fashion Gala Edition 1"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 flex items-center space-x-3">
                                    <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                        <span className="text-white text-[8px] font-semibold tracking-widest uppercase">HOSTED</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-primary)] mb-1 tracking-tight">
                                            Edition 01
                                        </h3>
                                        <p className="text-[10px] text-[var(--text-tertiary)] font-semibold tracking-widest uppercase">The Inaugural Showcase</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[8px] text-[var(--orange-accent)] font-semibold tracking-widest uppercase mb-1">Impact</p>
                                        <p className="text-sm font-semibold text-[var(--text-primary)] tracking-tighter">500+ Attendees</p>
                                    </div>
                                </div>
                                <p className="text-xs text-[var(--text-secondary)] mb-8 leading-relaxed opacity-80 h-10 overflow-hidden">
                                    A groundbreaking night of fashion and culture that set the standard for entertainment in the region.
                                </p>
                                <Link
                                    href="/portfolio"
                                    className="inline-flex items-center space-x-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--orange-accent)] group-hover:space-x-4 transition-all duration-300"
                                >
                                    <span>VIEW HIGHLIGHTS</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Edition 2 Card - Current Focus */}
                    <ScrollReveal animation="fadeInUp" delay={0.2} className="h-full">
                        <div className="group relative bg-black border border-[var(--orange-accent)]/30 rounded-3xl overflow-hidden transition-all duration-700 hover:border-[var(--orange-accent)] hover:shadow-2xl hover:shadow-[var(--orange-accent)]/10 h-full">
                            <div className="relative aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9] overflow-hidden">
                                <Image
                                    src="/images/photo2.jpg"
                                    alt="Agaciro Fashion Gala Edition 2"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                                <div className="absolute top-6 right-6">
                                    <div className="bg-[var(--orange-accent)] px-4 py-2 rounded-full shadow-lg">
                                        <span className="text-white text-[8px] font-semibold tracking-widest uppercase">PRIMARY FOCUS</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-6 left-6 flex items-center space-x-3">
                                    <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                        <span className="text-white text-[8px] font-semibold tracking-widest uppercase">COMING SOON</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-1 tracking-tight">
                                            Edition 02
                                        </h3>
                                        <p className="text-[10px] text-[var(--orange-accent)] font-semibold tracking-widest uppercase">The Next Chapter</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[8px] text-white/50 font-semibold tracking-widest uppercase mb-1">Expectation</p>
                                        <p className="text-sm font-semibold text-white tracking-tighter">1000+ Guests</p>
                                    </div>
                                </div>
                                <p className="text-xs text-white/60 mb-8 leading-relaxed h-10 overflow-hidden">
                                    Elevating the experience with international designers, tech-integrated runways, and refined artistic direction.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center space-x-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--orange-accent)] group-hover:space-x-4 transition-all duration-300"
                                >
                                    <span>PARTNER WITH US</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
