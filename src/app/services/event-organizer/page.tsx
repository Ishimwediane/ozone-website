"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Users, CheckCircle, Sparkles, Megaphone, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

export default function EventOrganizerPage() {
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollPos(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const eventTypes = [
        {
            title: "Fashion Shows",
            description: "From concept to runway, we manage high-end fashion productions that leave a lasting impact.",
            image: "/images/photo2.jpg",
            icon: <Sparkles className="w-8 h-8" />
        },
        {
            title: "Corporate Events",
            description: "Product launches, conferences, and gala dinners tailored to represent your brand excellence.",
            image: "/images/photo3.jpg",
            icon: <ShieldCheck className="w-8 h-8" />
        },
        {
            title: "Brand Activations",
            description: "Creating immersive experiences that connect your brand directly with your target audience.",
            image: "/images/photo4.jpg",
            icon: <Megaphone className="w-8 h-8" />
        },
        {
            title: "Private Galas",
            description: "Exclusive celebrations executed with ultimate discretion and sophisticated luxury.",
            image: "/images/photo.jpg",
            icon: <Users className="w-8 h-8" />
        }
    ];

    const processSteps = [
        {
            number: "01",
            title: "Conceptualization",
            description: "We work with you to define the vision, theme, and objectives of your event."
        },
        {
            number: "02",
            title: "Strategic Planning",
            description: "Meticulous logistics, vendor selection, and budget management to ensure a seamless foundation."
        },
        {
            number: "03",
            title: "Production",
            description: "Technical setup, stage design, and lighting that transform spaces into experiences."
        },
        {
            number: "04",
            title: "Execution",
            description: "Flawless on-site management, ensuring every second of the event runs to perfection."
        }
    ];

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden">
            {/* --- Elegant Hero Section with Video --- */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover object-top opacity-70 transition-all duration-1000 scale-105"
                    >
                        <source src="/images/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
                </div>

                <div className="container-custom relative z-10 text-center">
                    <span className="text-[10px] font-black tracking-[1.2em] text-[#F39C12] uppercase mb-8 block animate-fadeIn">SIGNATURE EVENTS</span>
                    <h1 className="text-6xl md:text-[12rem] font-serif font-bold text-white leading-[0.8] tracking-tighter mb-12 mix-blend-difference">
                        WE CRAFT <br />
                        <span className="italic font-light">EXPERIENCES.</span>
                    </h1>
                    <div className="flex justify-center">
                        <Link
                            href="#agaciro"
                            className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-white border border-white/30 px-10 py-5 hover:bg-white hover:text-black transition-all"
                        >
                            FEATURING AGACIRO GALA <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- Signature Project Section (Agaciro Fashion Gala) --- */}
            <section id="agaciro" className="section relative bg-black py-40 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="/images/photo2.jpg" alt="Agaciro Background" fill className="object-cover grayscale" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="relative group overflow-hidden border border-white/10">
                            <div className="relative aspect-video w-full scale-110 group-hover:scale-100 transition-transform duration-1000">
                                <Image src="/images/photo2.jpg" alt="Agaciro Fashion Gala" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                            </div>
                            <div className="absolute bottom-8 left-8">
                                <span className="inline-block bg-[#F39C12] text-white text-[10px] font-black tracking-widest px-4 py-2 uppercase">Signature Case Study</span>
                            </div>
                        </div>

                        <div className="text-white">
                            <span className="text-[10px] font-black tracking-[0.5em] text-[#F39C12] uppercase font-bold mb-6 block">PROUDLY ORGANIZED BY OZONE</span>
                            <h2 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight">Agaciro <br /> <span className="italic font-light text-[#F39C12]">Fashion Gala.</span></h2>
                            <p className="text-gray-400 text-xl font-light leading-relaxed mb-12">
                                Rwanda's most prestigious annual fashion event. We handle everything from the conceptual theme to the high-stakes execution, bringing together the nation's elite talent on one stage.
                            </p>
                            <Link
                                href="/events/agaciro-fashion-gala"
                                className="inline-flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.5em] text-white border-b border-[#F39C12] pb-3 hover:gap-10 transition-all"
                            >
                                EXPLORE THE EDITION DETAILS <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Philosophy Section (Minimalist) --- */}
            <section className="section py-32 border-b border-[var(--border-color)]">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-10">
                            <span className="text-[10px] font-black tracking-[0.5em] text-[#F39C12] uppercase font-bold">OUR PHILOSOPHY</span>
                            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-none">Detail is not a luxury. <br /> <span className="italic font-light opacity-50">It's a necessity.</span></h2>
                            <p className="text-xl text-[var(--text-secondary)] font-light leading-relaxed max-w-xl">
                                At Ozone, we believe that every event is a story waiting to be told. We don't just organize logistics; we curate atmosphere, emotion, and memory. Our precision is matched only by our imagination.
                            </p>
                            <div className="flex gap-12 pt-6">
                                <div>
                                    <p className="text-4xl font-serif font-bold text-[#F39C12]">100+</p>
                                    <p className="text-[10px] uppercase tracking-widest font-black opacity-40">Events Executed</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-serif font-bold text-[#F39C12]">10K+</p>
                                    <p className="text-[10px] uppercase tracking-widest font-black opacity-40">Guest Impact</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] bg-gray-200">
                            <Image src="/images/photo.jpg" alt="Philosophy" fill className="object-cover grayscale" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#F39C12] flex items-center justify-center p-8 text-white hidden md:flex">
                                <p className="text-xs font-black uppercase tracking-widest text-center">Excellence Guaranteed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Event Services Grid (Sharp Cards) --- */}
            <section id="services" className="section py-32 bg-[var(--bg-secondary)]">
                <div className="container-custom">
                    <div className="text-center mb-24">
                        <span className="text-[10px] font-black tracking-[0.5em] text-[#F39C12] uppercase font-bold">CORE SERVICES</span>
                        <h2 className="text-5xl md:text-8xl font-serif font-bold mt-4">Tailored Solutions</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border-color)] border border-[var(--border-color)]">
                        {eventTypes.map((event, i) => (
                            <div key={i} className="group relative bg-[var(--bg-primary)] p-12 md:p-20 overflow-hidden min-h-[500px] flex flex-col justify-end">
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                                    <Image src={event.image} alt={event.title} fill className="object-cover grayscale" />
                                </div>
                                <div className="relative z-10">
                                    <div className="text-[#F39C12] mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                                        {event.icon}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 uppercase tracking-tighter">{event.title}</h3>
                                    <p className="text-[var(--text-secondary)] font-light leading-relaxed max-w-sm mb-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        {event.description}
                                    </p>
                                    <Link href="/contact" className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] border-b border-transparent hover:border-[#F39C12] hover:text-[#F39C12] transition-all">
                                        Start Planning <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- The Process (Horizontal Flow) --- */}
            <section className="section py-32 bg-black text-white">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
                        <h2 className="text-5xl md:text-8xl font-serif font-bold">The <span className="italic font-light opacity-50">Method</span></h2>
                        <p className="max-w-xs text-white/50 text-sm font-light">From the first meeting to the final applause, our process is designed for absolute transparency and success.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {processSteps.map((step, i) => (
                            <div key={i} className="relative group">
                                <div className="text-6xl md:text-8xl font-serif font-black text-white/5 mb-8 group-hover:text-[#F39C12]/20 transition-colors">
                                    {step.number}
                                </div>
                                <div className="absolute top-8 left-0">
                                    <h4 className="text-xl font-bold uppercase tracking-widest mb-4">{step.title}</h4>
                                    <p className="text-white/40 text-sm font-light leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Call to Action --- */}
            <section className="section py-40 bg-[var(--bg-primary)]">
                <div className="container-custom text-center">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <h2 className="text-6xl md:text-[10rem] font-serif font-bold leading-[0.8] tracking-tighter">READY TO <br /> <span className="italic font-light text-[#F39C12]">IMPACT?</span></h2>
                        <p className="text-xl text-[var(--text-secondary)] font-light max-w-2xl mx-auto">
                            Whether it's an intimate gala or a massive brand activation, we have the team, the tech, and the talent to make it happen.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 pt-8">
                            <Link
                                href="/contact"
                                className="bg-[#F39C12] text-white text-[10px] font-black uppercase tracking-[0.5em] px-16 py-8 hover:bg-black transition-all shadow-xl shadow-[#F39C12]/20"
                            >
                                Get a Quote
                            </Link>
                            <Link
                                href="/events/agaciro-fashion-gala"
                                className="border border-[var(--border-color)] text-[var(--text-primary)] text-[10px] font-black uppercase tracking-[0.5em] px-16 py-8 hover:border-[#F39C12] transition-all"
                            >
                                View Case Study
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
