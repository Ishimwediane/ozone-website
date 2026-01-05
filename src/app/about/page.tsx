"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Award, Heart, Target, Eye,
    ArrowRight, CheckCircle, Zap, ShieldCheck,
    Rocket, Globe, Briefcase, Star
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function AboutPage() {
    const { theme } = useTheme();

    const whyChooseUs = [
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Expertise & Innovation",
            description: "We blend years of industry experience with fresh, avant-garde concepts to deliver unique entertainment solutions."
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Empowerment Focus",
            description: "At our core is a commitment to social impact, creating pathways for women and youth in the creative industries."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Vast Network",
            description: "Our strong connections across fashion, film, and event sectors give our partners an unparalleled reach."
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Professional Excellence",
            description: "We uphold the highest standards of production and management, ensuring every project is a masterpiece."
        }
    ];

    const values = [
        { title: "Excellence", description: "Beyond the standard." },
        { title: "Inclusion", description: "Empowering every voice." },
        { title: "Integrity", description: "Transparency and trust." },
        { title: "Innovation", description: "Designing the future." }
    ];

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-500 overflow-x-hidden">
            {/* --- Premium Hero Section --- */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/photo3.jpg"
                        alt="Ozone Aesthetic"
                        fill
                        className="object-cover opacity-60 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[var(--bg-primary)]"></div>
                </div>

                <div className="container-custom relative z-10 text-center">
                    <span className="text-[10px] font-black tracking-[1.5em] text-[#F39C12] uppercase mb-8 block animate-fadeIn">THE OZONE STORY</span>
                    <h1 className="text-5xl md:text-8xl font-semibold text-white leading-[0.9] tracking-tighter mb-8 mix-blend-difference">
                        BEYOND <br />
                        <span className="text-[#F39C12]">POSSIBLE.</span>
                    </h1>
                </div>
            </section>

            {/* --- Narrative Intro --- */}
            <section className="section py-32 border-b border-[var(--border-color)]">
                <div className="container-custom">
                    <div className="max-w-5xl">
                        <span className="text-[10px] font-black tracking-widest text-[#F39C12] uppercase mb-4 block">OUR PHILOSOPHY</span>
                        <h2 className="text-4xl md:text-6xl font-semibold mb-12 leading-none uppercase tracking-tighter">
                            We don't just organize; we <span className="text-[#F39C12]">elevate.</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-16 items-start">
                            <p className="text-xl md:text-2xl font-light text-[var(--text-secondary)] leading-relaxed">
                                Ozone Entertainment was born from a vision to revolutionize Rwanda's creative landscape. We are a powerhouse of talent, strategy, and execution—bridging the gap between raw potential and global standards.
                            </p>
                            <p className="text-lg text-[var(--text-tertiary)] leading-relaxed">
                                Whether it's the high-stakes runway of the Agaciro Fashion Gala or the intricate production of a cinematic piece, we operate with a singular lens: excellence without compromise. Our journey is one of empowerment, specifically dedicated to carving spaces for women in the spotlight.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- WHY CHOOSE US --- */}
            <section className="section py-40 relative overflow-hidden bg-[var(--bg-secondary)]">
                <div className="container-custom relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-[10px] font-black tracking-[0.5em] text-[#F39C12] uppercase mb-4 block">THE OZONE ADVANTAGE</span>
                            <h2 className="text-5xl md:text-8xl font-semibold leading-[0.8] uppercase tracking-tighter">
                                Why <br /> <span>Choose Us.</span>
                            </h2>
                        </div>
                        <p className="max-w-md text-[var(--text-tertiary)] text-lg border-l border-[#F39C12] pl-8">
                            In a saturated market, we stand out through precision, vision, and a relentless focus on our partners' growth.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border-color)]">
                        {whyChooseUs.map((item, idx) => (
                            <div key={idx} className="bg-[var(--bg-primary)] p-12 transition-all duration-700 hover:bg-[#F39C12] group">
                                <div className="text-[#F39C12] group-hover:text-white mb-8 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors">{item.title}</h3>
                                <p className="text-[var(--text-secondary)] group-hover:text-white/80 transition-colors leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Values Grid (Editorial Style) --- */}
            <section className="section py-32">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {values.map((v, i) => (
                            <div key={i} className="border-t-2 border-[var(--text-primary)] pt-8 group">
                                <span className="text-[10px] font-black text-[#F39C12] block mb-4">0{i + 1}</span>
                                <h4 className="text-3xl font-semibold uppercase mb-2 group-hover:tracking-widest transition-all duration-700">{v.title}</h4>
                                <p className="text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">{v.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Mission & Vision (Asymmetrical) --- */}
            <section className="section py-40 bg-black text-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-24 items-center">
                        <div className="relative aspect-square border border-white/10 overflow-hidden">
                            <Image src="/images/photo2.jpg" alt="Mission" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                            <div className="absolute inset-0 bg-black/20"></div>
                        </div>
                        <div className="space-y-16">
                            <div>
                                <span className="text-[10px] font-black tracking-widest text-[#F39C12] uppercase mb-4 block">OUR MISSION</span>
                                <p className="text-3xl md:text-4xl font-semibold leading-snug">
                                    To provide <span className="text-[#F39C12]">world-class</span> entertainment that captures moments and empowers dreams.
                                </p>
                            </div>
                            <div>
                                <span className="text-[10px] font-black tracking-widest text-[#F39C12] uppercase mb-4 block">OUR VISION</span>
                                <p className="text-3xl md:text-4xl font-semibold leading-snug">
                                    To be the <span className="text-[#F39C12]">global benchmark</span> for creative excellence in Africa.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Final CTA --- */}
            <section className="section py-32 text-center">
                <div className="container-custom">
                    <h3 className="text-4xl md:text-5xl font-semibold mb-16 uppercase tracking-tighter">
                        Let's Create <br />
                        <span>The Extraordinary.</span>
                    </h3>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/contact"
                            className="group flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.5em] text-white bg-black px-12 py-6 hover:bg-[#F39C12] transition-all"
                        >
                            PARTNER WITH US <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <Link
                            href="/services"
                            className="text-[10px] font-black uppercase tracking-[0.5em] border-b border-[var(--text-primary)] pb-2 hover:border-[#F39C12] transition-all"
                        >
                            EXPLORE SERVICES
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
