"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Award, Users, Heart, Plus } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useState, useEffect } from "react";

export default function NAFModelEmpirePage() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [scrollPos, setScrollPos] = useState(0);

    const heroImages = [
        "/images/photo.jpg",
        "/images/photo2.jpg",
        "/images/photo3.jpg",
        "/images/photo4.jpg",
        "/images/photo.jpg",
        "/images/photo2.jpg",
    ];

    useEffect(() => {
        const handleScroll = () => setScrollPos(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const models = [
        {
            name: "Uwase Grace",
            image: "/images/photo.jpg",
            hoverImage: "/images/photo2.jpg",
            category: "High Fashion",
            height: "178cm",
            size: "large"
        },
        {
            name: "Mukamana Divine",
            image: "/images/photo2.jpg",
            hoverImage: "/images/photo3.jpg",
            category: "Commercial",
            height: "175cm",
            size: "small"
        },
        {
            name: "Kezia Mutoni",
            image: "/images/photo3.jpg",
            hoverImage: "/images/photo4.jpg",
            category: "Runway",
            height: "180cm",
            size: "medium"
        },
        {
            name: "Shilla Umutoni",
            image: "/images/photo4.jpg",
            hoverImage: "/images/photo.jpg",
            category: "Editorial",
            height: "177cm",
            size: "small"
        },
        {
            name: "Bella Uwera",
            image: "/images/photo.jpg",
            hoverImage: "/images/photo3.jpg",
            category: "Fitness",
            height: "174cm",
            size: "medium"
        },
        {
            name: "Sonia Gisa",
            image: "/images/photo2.jpg",
            hoverImage: "/images/photo4.jpg",
            category: "High Fashion",
            height: "179cm",
            size: "large"
        },
    ];

    const successStories = [
        {
            name: "Uwase Grace",
            achievement: "Signed with International Agency",
            quote: "NAF Model Empire transformed my career. The training was exceptional!",
            image: "/images/photo.jpg"
        },
        {
            name: "Divine Mukamana",
            achievement: "Featured in Major Fashion Show",
            quote: "The mentorship and guidance I received here was life-changing.",
            image: "/images/photo2.jpg"
        },
    ];

    const trainingPrograms = [
        {
            title: "Runway Mastery",
            description: "Elite catwalk training, posture correction, and signature walk development.",
            icon: <Users className="w-8 h-8" />
        },
        {
            title: "Visual Poise",
            description: "Advanced posing techniques for high-fashion and commercial photography.",
            icon: <Star className="w-8 h-8" />
        },
        {
            title: "Brand Strategy",
            description: "Developing a professional portfolio and personal brand for global markets.",
            icon: <Award className="w-8 h-8" />
        },
        {
            title: "Global Placement",
            description: "Direct connections to leading international agencies and fashion houses.",
            icon: <Heart className="w-8 h-8" />
        },
    ];

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden">
            {/* --- Autonomous Self-Moving Hero (Clean & Clear) --- */}
            {/* --- Autonomous Self-Moving Hero (High Contrast) --- */}
            <section className="relative h-[90vh] flex flex-col justify-center overflow-hidden bg-black">

                {/* Visual Canvas (Self-moving Marquee - No Overlays) */}
                <div className="absolute inset-0 z-0">
                    <div className="flex animate-marquee-slow whitespace-nowrap h-full items-center">
                        {[...heroImages, ...heroImages].map((img, i) => (
                            <div
                                key={i}
                                className={`inline-block relative w-[35vw] md:w-[28vw] h-[55vh] md:h-[75vh] mx-[1vw] transition-all duration-700 ${i % 2 === 0 ? '-translate-y-4' : 'translate-y-4'
                                    }`}
                            >
                                <Image
                                    src={img}
                                    alt={`Hero ${i}`}
                                    fill
                                    className="object-cover rounded-none grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-[0_0_40px_rgba(243,156,18,0.1)]"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Refined Minimal Overlay */}
                <div className="container-custom relative z-10 pointer-events-none">
                    <div className="max-w-4xl p-0">
                        <ScrollReveal animation="fadeInDown">
                            <span className="text-[10px] font-black tracking-[1.2em] text-[#F39C12] uppercase mb-10 block">NAF MODEL EMPIRE</span>
                        </ScrollReveal>
                        <ScrollReveal animation="fadeInUp">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-[0.75] tracking-tighter mb-12">
                                MODERN <br />
                                <span className="text-[var(--orange-accent)] opacity-90">ELEGANCE.</span>
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal animation="fadeInUp" delay={0.2} className="pointer-events-auto">
                            <Link
                                href="#board"
                                className="inline-flex items-center gap-6 text-[10px] font-semibold uppercase tracking-[0.5em] text-white border-b border-white/20 pb-3 transition-all hover:gap-10 hover:border-[#F39C12] hover:text-[#F39C12]"
                            >
                                EXPLORE THE BOARD <ArrowRight className="w-4 h-4" />
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>

                {/* CSS for Autonomous Marquee */}
                <style jsx>{`
                    @keyframes marquee-slow {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee-slow {
                        display: flex;
                        width: max-content;
                        animation: marquee-slow 60s linear infinite;
                    }
                    .animate-marquee-slow:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </section>

            {/* --- The Board (Sharp Masonry Grid) --- */}
            <section id="board" className="section relative py-32 bg-[var(--bg-secondary)]">
                <div className="container-custom">
                    <ScrollReveal animation="fadeInDown" className="mini-header">
                        <h2>Professional Board</h2>
                    </ScrollReveal>
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-8">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-semibold mt-2">The <span className="opacity-50">Talent</span></h2>
                        </div>
                        <div className="flex space-x-10 text-[10px] font-semibold tracking-[0.3em] uppercase opacity-60">
                            <button className="text-[#F39C12]">ALL</button>
                            <button className="hover:text-[#F39C12] transition-colors">EDITORIAL</button>
                            <button className="hover:text-[#F39C12] transition-colors">RUNWAY</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-0">
                        {models.map((model, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`group relative overflow-hidden transition-all duration-1000 bg-[var(--bg-primary)] border border-[var(--border-color)] ${model.size === 'large' ? 'lg:col-span-3 lg:row-span-2 aspect-square' :
                                    model.size === 'medium' ? 'lg:col-span-2 lg:row-span-2 aspect-[3/4]' :
                                        'lg:col-span-2 lg:row-span-1 aspect-video'
                                    }`}
                            >
                                <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                                    <Image
                                        src={model.image}
                                        alt={model.name}
                                        fill
                                        className={`object-cover rounded-none transition-all duration-1000 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                                            }`}
                                    />
                                    <Image
                                        src={model.hoverImage}
                                        alt={`${model.name} hover`}
                                        fill
                                        className={`object-cover rounded-none transition-all duration-1000 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    />
                                </div>

                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <p className="text-[7px] uppercase tracking-[0.4em] text-[#F39C12] mb-1">{model.category}</p>
                                        <h3 className="text-base font-semibold text-white uppercase">{model.name}</h3>
                                        <div className="mt-3 flex items-center justify-between">
                                            <span className="text-[9px] text-white/60 tracking-widest font-semibold">HT: {model.height}</span>
                                            <div className="w-8 h-8 border border-white/20 flex items-center justify-center text-white">
                                                <Plus className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Training Details (Sharp Cards) --- */}
            <section className="section bg-[var(--bg-primary)]">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="relative group">
                            <div className="relative h-[600px] w-full rounded-none overflow-hidden shadow-2xl">
                                <Image src="/images/photo.jpg" alt="Training" fill className="object-cover rounded-none group-hover:scale-105 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-black/10"></div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <ScrollReveal animation="fadeInDown" className="mini-header items-start">
                                <h2 className="!items-start">Discovery & Development</h2>
                            </ScrollReveal>
                            <ScrollReveal animation="fadeInUp">
                                <h2 className="text-3xl md:text-5xl font-semibold mb-10 leading-tight">Elevating <br /> <span className="opacity-50">Local</span> Talent</h2>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {trainingPrograms.map((prog, i) => (
                                    <div key={i} className="group p-6 border border-[var(--border-color)] transition-all hover:border-[#F39C12] rounded-none bg-[var(--bg-secondary)]/10">
                                        <div className="w-10 h-10 bg-[#F39C12] text-white flex items-center justify-center mb-6">
                                            <div className="scale-75">{prog.icon}</div>
                                        </div>
                                        <h4 className="text-base font-semibold mb-2">{prog.title}</h4>
                                        <p className="text-[9px] md:text-[10px] text-[var(--text-secondary)] font-medium leading-relaxed">{prog.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Final CTA (Sharp Magazine Style) --- */}
            <section className="section bg-[var(--bg-primary)]">
                <div className="container-custom">
                    <div className="relative bg-[#0a0a0a] rounded-none overflow-hidden flex flex-col lg:flex-row items-stretch border border-white/5">
                        <div className="lg:w-1/2 relative min-h-[500px]">
                            <Image src="/images/photo.jpg" alt="Join Us" fill className="object-cover rounded-none opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent"></div>
                        </div>
                        <div className="lg:w-1/2 p-16 md:p-32 flex flex-col justify-center items-start text-white">
                            <ScrollReveal animation="fadeInDown" className="mini-header items-start">
                                <h2 className="!items-start !text-white/60">Open Casting Call</h2>
                            </ScrollReveal>
                            <ScrollReveal animation="fadeInUp">
                                <h2 className="text-4xl md:text-7xl font-semibold mb-12 leading-[0.7] tracking-tighter">THE <br /> NEXT <br /> <span className="opacity-30">ICON.</span></h2>
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center gap-6 text-[10px] font-semibold uppercase tracking-[0.5em] text-white bg-transparent border border-white/20 px-12 py-5 rounded-full hover:bg-white hover:text-black transition-all"
                                >
                                    Apply Today
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-3" />
                                </Link>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
