"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X, Play, ArrowRight, Filter } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function PortfolioPage() {
    const { theme } = useTheme();
    const [activeTab, setActiveTab] = useState<'photos' | 'film' | 'events' | 'artists' | 'fashion'>('photos');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const portfolioItems = {
        photos: [
            { src: "/images/photo.jpg", title: "Visual Narrative I", type: "image", size: "large" },
            { src: "/images/photo1.jpg", title: "Portrait Studies", type: "image", size: "small" },
            { src: "/images/photo2.jpg", title: "Event Chronology", type: "image", size: "medium" },
            { src: "/images/photo3.jpg", title: "Abstract Light", type: "image", size: "small" },
            { src: "/images/photo4.jpg", title: "Human Form", type: "image", size: "medium" },
            { src: "/images/photo5.jpg", title: "Studio Series", type: "image", size: "small" },
        ],
        film: [
            { src: "/images/filme2.jpg", title: "Cinematic Odyssey", type: "image", size: "large" },
            { src: "/images/filme.jpg", title: "The Frame", type: "image", size: "medium" },
            { src: "/images/filme3.jpg", title: "Motion Essence", type: "image", size: "small" },
            { src: "/images/videography.mp4", title: "Director's Reel", type: "video", size: "medium" },
        ],
        events: [
            { src: "/images/event.jpg", title: "Grand Scale", type: "image", size: "large" },
            { src: "/images/umurava.mp4", title: "Energy Capture", type: "video", size: "medium" },
            { src: "/images/Event-2024.mp4", title: "Legacy Events", type: "video", size: "small" },
        ],
        artists: [
            { src: "/images/artist1.jpg", title: "Creative Minds", type: "image", size: "medium" },
            { src: "/images/artist2.jpg", title: "Talent Spotlight", type: "image", size: "large" },
        ],
        fashion: [
            { src: "/images/fash.jpg", title: "Runway Aura", type: "image", size: "large" },
            { src: "/images/fash1.jpg", title: "High Gloss", type: "image", size: "small" },
            { src: "/images/fash2.jpg", title: "Editorial Edge", type: "image", size: "medium" },
            { src: "/images/video.mp4", title: "Fashion Motion", type: "video", size: "medium" },
            { src: "/images/fash.mp4", title: "Catwalk Story", type: "video", size: "small" },
        ],
    };

    const currentItems = portfolioItems[activeTab];

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-500 overflow-x-hidden">
            {/* --- Premium Hero Section --- */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/photo.jpg"
                        alt="Portfolio Aesthetic"
                        fill
                        className="object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[var(--bg-primary)]"></div>
                    <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 bg-repeat"></div>
                </div>

                <div className="container-custom relative z-10 text-center">
                    <span className="text-[10px] font-black tracking-[1.5em] text-[#F39C12] uppercase mb-8 block animate-fadeIn">CREATIVE JOURNAL</span>
                    <h1 className="text-5xl md:text-8xl font-semibold text-white leading-tight tracking-tighter mb-4 mix-blend-difference">
                        OUR <span className="text-[#F39C12]">LEGACY.</span>
                    </h1>
                </div>
            </section>

            {/* --- Filter & Navigation Section --- */}
            <section className="sticky top-20 z-40 bg-[var(--bg-primary)] border-y border-[var(--border-color)] py-8 backdrop-blur-md bg-opacity-80">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-4 text-[10px] font-black tracking-widest uppercase">
                            <Filter className="w-4 h-4 text-[#F39C12]" />
                            <span>Refine by Category</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                            {Object.keys(portfolioItems).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key as any)}
                                    className={`px-6 py-2 text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 border ${activeTab === key
                                        ? 'bg-[#F39C12] text-white border-[#F39C12]'
                                        : 'bg-transparent text-[var(--text-secondary)] border-[var(--border-color)] hover:border-[#F39C12] hover:text-[#F39C12]'
                                        }`}
                                >
                                    {key}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Asymmetrical Editorial Grid --- */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {currentItems.map((item, index) => (
                            <div
                                key={`${activeTab}-${index}`}
                                className={`relative group overflow-hidden bg-[var(--bg-secondary)] cursor-pointer break-inside-avoid animate-fadeInUp`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => openLightbox(index)}
                            >
                                <div className="relative overflow-hidden group">
                                    {item.type === 'image' ? (
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            width={800}
                                            height={item.size === 'large' ? 1200 : item.size === 'medium' ? 800 : 600}
                                            className="w-full h-auto object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="relative aspect-[9/16] bg-black">
                                            <video
                                                src={item.src}
                                                className="w-full h-full object-cover opacity-70"
                                                muted
                                                loop
                                                playsInline
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Play className="w-12 h-12 text-white/50 group-hover:text-white transition-colors" />
                                            </div>
                                        </div>
                                    )}

                                    {/* Subtle Editorial Labels */}
                                    <div className="absolute top-6 left-6 z-20">
                                        <span className="text-[8px] font-black text-white/40 tracking-[0.3em] uppercase block mb-1">PROJECT 0{index + 1}</span>
                                        <div className="h-px w-8 bg-[#F39C12] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                                    </div>

                                    {/* Overlay Content */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
                                        <h3 className="text-2xl font-semibold text-white uppercase tracking-tighter translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-[10px] font-semibold text-[#F39C12] mt-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-100 uppercase tracking-widest">
                                            <span>View Work</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Lightbox --- */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-10 right-10 z-[110] text-white hover:text-[#F39C12] transition-colors"
                    >
                        <X className="w-10 h-10 font-thin" />
                    </button>

                    <div className="container-custom h-[85vh] flex flex-col items-center justify-center gap-8">
                        <div className="relative w-full h-full flex items-center justify-center p-4">
                            {currentItems[lightboxIndex].type === 'image' ? (
                                <div className="relative w-full h-full">
                                    <Image
                                        src={currentItems[lightboxIndex].src}
                                        alt={currentItems[lightboxIndex].title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ) : (
                                <video
                                    src={currentItems[lightboxIndex].src}
                                    controls
                                    autoPlay
                                    className="max-h-full max-w-full"
                                />
                            )}
                        </div>

                        <div className="text-center w-full max-w-2xl">
                            <span className="text-[10px] font-black text-[#F39C12] tracking-[1em] uppercase block mb-4">GALLERY SELECTION</span>
                            <h3 className="text-4xl md:text-6xl font-semibold text-white uppercase tracking-tighter">
                                {currentItems[lightboxIndex].title}
                            </h3>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="absolute bottom-10 left-0 right-0 z-[110] flex justify-center gap-20">
                        <button
                            onClick={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : currentItems.length - 1))}
                            className="text-[10px] font-black text-white/50 hover:text-[#F39C12] uppercase tracking-[0.5em] transition-all"
                        >
                            PREVIOUS
                        </button>
                        <button
                            onClick={() => setLightboxIndex((prev) => (prev < currentItems.length - 1 ? prev + 1 : 0))}
                            className="text-[10px] font-black text-white/50 hover:text-[#F39C12] uppercase tracking-[0.5em] transition-all"
                        >
                            NEXT
                        </button>
                    </div>
                </div>
            )}

            {/* --- CTA Section --- */}
            <section className="section py-40 bg-black text-white text-center">
                <div className="container-custom">
                    <span className="text-[10px] font-black tracking-[1em] text-[#F39C12] uppercase mb-8 block">READY TO START?</span>
                    <h2 className="text-5xl md:text-8xl font-semibold mb-16 uppercase tracking-tighter leading-none">
                        Your vision, <br />
                        <span>our execution.</span>
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/contact"
                            className="group flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.5em] text-black bg-white px-12 py-6 hover:bg-[#F39C12] hover:text-white transition-all"
                        >
                            BOOK A PRODUCTION <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <Link
                            href="/services"
                            className="text-[10px] font-black uppercase tracking-[0.5em] border-b border-white pb-2 hover:border-[#F39C12] hover:text-[#F39C12] transition-all"
                        >
                            DISCOVER SERVICES
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
