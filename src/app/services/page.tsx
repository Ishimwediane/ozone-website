"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Calendar, Users, Film, Briefcase, Heart,
    ArrowRight, Sparkles, Star, Rocket,
    ArrowUpRight
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ServicesPage() {
    const services = [
        {
            icon: <Briefcase className="w-10 h-10" />,
            title: "NAF Model Empire",
            slug: "naf-model-empire",
            tagline: "Fashion Iconography",
            description: "Rwanda's leading fashion powerhouse. We don't just find models; we craft icons through elite training, portfolio curation, and global agency placement.",
            features: ["Elite Scouting", "Runway Mastery", "Brand Strategy", "Agency Placement"],
            image: "/images/photo2.jpg",
            highlighted: true,
            accent: "orange"
        },
        {
            icon: <Film className="w-10 h-10" />,
            title: "Film Production",
            slug: "film-production",
            tagline: "Visual Storytelling",
            description: "Cinematic quality that captures the soul of your narrative. We specialize in high-impact visual content from music videos to feature-length documentaries.",
            features: ["Cinematography", "Creative Scripting", "Master Editing", "Drone Artistry"],
            image: "/images/photo3.jpg",
            accent: "purple"
        },
        {
            icon: <Users className="w-10 h-10" />,
            title: "Artist Management",
            slug: "artist-management",
            tagline: "Talent Ascension",
            description: "Navigating the complexities of the industry for our artists. We build sustainable careers through strategic branding, booking, and mentorship.",
            features: ["360 Management", "Brand Synergy", "Global Booking", "Contractual Law"],
            image: "/images/photo4.jpg",
            accent: "pink"
        },
        {
            icon: <Calendar className="w-10 h-10" />,
            title: "Event Organizer",
            slug: "event-organizer",
            tagline: "Unforgettable Moments",
            description: "From concept to curtain call, we orchestrate seamless events that leave a lasting impression. Our expertise spans corporate galas to exclusive private celebrations.",
            features: ["Strategic Planning", "Venue Procurement", "Creative Direction", "Technical Production"],
            image: "/images/photo.jpg",
            accent: "blue"
        },
        {
            icon: <Heart className="w-10 h-10" />,
            title: "Empowering Her",
            slug: "empowering-her",
            tagline: "Future Leaders",
            description: "A visionary initiative dedicated to shattering glass ceilings. We provide the tools, network, and training for women to lead in the creative arts.",
            features: ["Leadership Lab", "Creative Mentorship", "Peer Networking", "Financial Literacy"],
            image: "/images/photo.jpg",
            accent: "rose"
        },
    ];

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] selection:bg-[#F39C12]/30 selection:text-[#F39C12]">
            {/* --- Hero Section (Premium) --- */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                {/* Background Video/Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/photo2.jpg"
                        alt="Services Hero"
                        fill
                        className="object-cover scale-105 animate-slow-zoom"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[var(--bg-primary)]"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F39C12]/20 blur-[120px] rounded-full mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00509E]/20 blur-[120px] rounded-full mix-blend-screen animate-pulse delay-700"></div>

                <div className="container-custom relative z-10 text-center">
                    <ScrollReveal animation="fadeInDown" className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8">
                        <Sparkles className="w-4 h-4 text-[#F39C12]" />
                        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white">Full-Spectrum Excellence</span>
                    </ScrollReveal>

                    <ScrollReveal animation="fadeInUp">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold text-white mb-6 leading-[0.9] tracking-tighter">
                            OZONE <br />
                            <span className="text-[var(--orange-accent)] opacity-90 text-[0.8em]">SERVICES</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal animation="fadeInUp" delay={0.2}>
                        <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto mb-10 font-medium leading-relaxed">
                            We engineere outcomes that resonate and inspire Rwandan culture.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="fadeInUp" delay={0.4}>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="#services-grid" className="group px-10 py-5 bg-[#F39C12] text-white rounded-full font-semibold flex items-center justify-center space-x-3 transition-all hover:bg-orange-500 hover:scale-105 shadow-xl hover:shadow-orange-500/10 tracking-widest uppercase text-[10px]">
                                <span>Explore Our World</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                </div>
            </section>


            {/* --- Services Grid section --- */}
            <section id="services-grid" className="section relative overflow-hidden">
                {/* Background Text Decal */}
                <div className="absolute top-0 right-0 text-[20vw] font-black text-[var(--border-color)] opacity-[0.03] select-none pointer-events-none translate-x-1/4 -translate-y-1/4">
                    SERVICES
                </div>

                <div className="container-custom relative z-10">
                    <ScrollReveal animation="fadeInDown" className="mini-header">
                        <h2>Our Core Ecosystem</h2>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ScrollReveal
                                key={service.slug}
                                animation="scaleIn"
                                delay={index * 0.1}
                                className="h-full"
                            >
                                <div className="group relative bg-[var(--bg-secondary)] rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-[var(--orange-accent)]/10 hover:-translate-y-2 h-full aspect-[16/11] border border-[var(--border-color)]">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    <div className="absolute inset-x-0 bottom-0 p-6 z-10">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <div className="h-px w-4 bg-[#F39C12]"></div>
                                            <span className="text-[#F39C12] font-semibold text-[8px] tracking-widest uppercase">{service.tagline}</span>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-[var(--orange-accent)] transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-[9px] md:text-[10px] text-white/80 font-medium leading-relaxed mb-4">
                                            {service.description}
                                        </p>
                                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                            <span className="text-[8px] font-semibold text-[#F39C12] uppercase tracking-tighter">View Details</span>
                                            <ArrowRight className="w-3 h-3 text-white/50 group-hover:text-white transition-all group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                    <Link href={`/services/${service.slug}`} className="absolute inset-0 z-20" />
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Why Choose Us (Visual Matrix) --- */}
            <section className="section bg-[var(--bg-secondary)] overflow-hidden">
                <div className="container-custom relative">
                    <ScrollReveal animation="fadeInDown" className="mini-header">
                        <h2>The Ozone Edge</h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-0 border border-[var(--border-color)] rounded-[3rem] overflow-hidden">
                        {[
                            {
                                title: "Expertise",
                                text: "Decades of collective experience scaling Rwandan culture to the global stage.",
                                icon: <Rocket className="w-10 h-10" />
                            },
                            {
                                title: "Innovation",
                                text: "We blend traditional craftsmanship with cutting-edge digital and event tech.",
                                icon: <Sparkles className="w-10 h-10" />
                            },
                            {
                                title: "Impact",
                                text: "Our results are measured in more than just numbers—they're measured in cultural resonance.",
                                icon: <Heart className="w-10 h-10" />
                            }
                        ].map((box, i) => (
                            <div key={i} className={`p-10 border-[var(--border-color)] transition-all hover:bg-[var(--bg-primary)] group ${i < 2 ? 'md:border-r' : ''}`}>
                                <div className="text-[#F39C12] mb-6 group-hover:scale-110 transition-transform origin-left w-8 h-8">{box.icon}</div>
                                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{box.title}</h3>
                                <p className="text-[9px] text-[var(--text-secondary)] font-medium leading-relaxed">{box.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Premium CTA --- */}
            <section className="relative py-12 md:py-16 overflow-hidden group">
                <div
                    className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
                    style={{ backgroundImage: "url('/images/photo.jpg')" }}
                ></div>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

                <div className="container-custom relative z-10 text-center py-4 md:py-8">
                    <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6">
                        Let's Construct <span className="text-[#F39C12]">Greatness</span> Together
                    </h2>
                    <p className="text-sm md:text-base text-gray-400 mb-10 font-medium">
                        Every masterpiece begins with a conversation.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            href="/contact"
                            className="bg-[--orange-accent] hover:bg-orange-600 text-white font-semibold px-12 py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-orange-500/10 tracking-widest uppercase text-[10px]"
                        >
                            Inquire Project
                        </Link>
                        <Link
                            href="/portfolio"
                            className="bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-semibold px-12 py-5 rounded-full border border-white/20 transition-all duration-300 tracking-widest uppercase text-[10px]"
                        >
                            Browse Works
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
