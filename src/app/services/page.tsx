"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Calendar, Users, Film, Briefcase, Heart,
    ArrowRight, CheckCircle, Sparkles, Star, Rocket,
    ArrowUpRight
} from "lucide-react";

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
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8 animate-fadeInDown">
                        <Sparkles className="w-4 h-4 text-[#F39C12]" />
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-white">Full-Spectrum Excellence</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-8 leading-[0.9] tracking-tighter animate-fadeInUp">
                        Beyond <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F39C12] via-orange-400 to-[#F39C12]">Entertainment</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 animate-fadeInUp delay-300 font-light leading-relaxed">
                        We don't just provide services. We engineer experiences that resonate, inspire, and define the cultural landscape of Rwanda.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp delay-500">
                        <Link href="#services-grid" className="group px-10 py-5 bg-[#F39C12] text-white rounded-full font-bold flex items-center justify-center space-x-3 transition-all hover:bg-orange-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(243,156,18,0.4)]">
                            <span>Explore Our World</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                </div>
            </section>

            {/* --- Stats / Trust Bar --- */}
            <div className="relative -mt-16 z-20">
                <div className="container-custom">
                    <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] backdrop-blur-xl rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-8 p-10 shadow-2xl">
                        {[
                            { label: "Active Project", value: "150+" },
                            { label: "Global Partner", value: "45+" },
                            { label: "Success Rate", value: "99%" },
                            { label: "Awards Won", value: "12" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center group">
                                <p className="text-[#F39C12] text-3xl md:text-4xl font-serif font-bold mb-1">{stat.value}</p>
                                <p className="text-[var(--text-tertiary)] text-xs uppercase tracking-widest font-bold group-hover:text-[var(--text-primary)] transition-colors">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- Services Grid section --- */}
            <section id="services-grid" className="section relative overflow-hidden">
                {/* Background Text Decal */}
                <div className="absolute top-0 right-0 text-[20vw] font-black text-[var(--border-color)] opacity-[0.03] select-none pointer-events-none translate-x-1/4 -translate-y-1/4">
                    SERVICES
                </div>

                <div className="container-custom relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                            <div className="inline-block mb-4">
                                <span className="text-xs font-bold tracking-[0.4em] uppercase text-[#F39C12]">Precision & Passion</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-serif font-bold text-[var(--text-primary)] leading-tight">
                                Our Core <br />
                                <span className="italic font-light">Ecosystem</span>
                            </h2>
                        </div>
                        <p className="text-[var(--text-secondary)] text-xl max-w-sm font-light">
                            Each vertical is built on a foundation of excellence, designed to work in synergy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {services.map((service, index) => (
                            <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className={`group relative h-full flex flex-col bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:border-[#F39C12]/50 hover:shadow-[0_20px_80px_rgba(0,0,0,0.15)] ${service.highlighted ? 'md:col-span-2' : ''
                                    }`}
                            >
                                {/* card Content Split */}
                                <div className={`flex flex-col ${service.highlighted ? 'lg:flex-row' : ''} h-full`}>

                                    {/* Visual Side */}
                                    <div className={`relative overflow-hidden ${service.highlighted ? 'lg:w-1/2 h-[400px] lg:h-auto' : 'h-[300px]'}`}>
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)]/90 via-transparent to-transparent"></div>

                                        {/* Dynamic Icon Badge */}
                                        <div className="absolute top-8 left-8 p-6 bg-[var(--bg-primary)]/80 backdrop-blur-md border border-white/20 rounded-2xl text-[#F39C12] shadow-xl group-hover:bg-[#F39C12] group-hover:text-white transition-all duration-500 hover:rotate-6">
                                            {service.icon}
                                        </div>

                                        {service.highlighted && (
                                            <div className="absolute top-8 right-8 flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-bold border border-white/20">
                                                <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
                                                <span>PREMIUM SERVICE</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Info Side */}
                                    <div className={`p-10 md:p-14 flex flex-col justify-between ${service.highlighted ? 'lg:w-1/2' : ''}`}>
                                        <div>
                                            <div className="flex items-center space-x-3 mb-6">
                                                <div className="h-px w-8 bg-[#F39C12]"></div>
                                                <span className="text-[#F39C12] font-bold text-sm tracking-widest uppercase">{service.tagline}</span>
                                            </div>

                                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-[var(--text-primary)] mb-6 group-hover:translate-x-2 transition-transform duration-500">
                                                {service.title}
                                            </h3>

                                            <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed font-light">
                                                {service.description}
                                            </p>

                                            <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-12">
                                                {service.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center space-x-3 group/item">
                                                        <div className="w-2 h-2 rounded-full bg-[#F39C12]/40 group-hover/item:bg-[#F39C12] transition-colors"></div>
                                                        <span className="text-sm text-[var(--text-tertiary)] font-medium group-hover/item:text-[var(--text-primary)]">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between mt-auto pt-8 border-t border-[var(--border-color)]">
                                            <div className="flex items-center space-x-2 text-[#F39C12] font-black italic tracking-tighter text-sm uppercase">
                                                <span>Perspective</span>
                                                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
                                            </div>
                                            <div className="w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center group-hover:bg-[#F39C12] group-hover:border-[#F39C12] transition-all">
                                                <ArrowRight className="w-5 h-5 text-[var(--text-tertiary)] group-hover:text-white transition-colors" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Why Choose Us (Visual Matrix) --- */}
            <section className="section bg-[var(--bg-secondary)] overflow-hidden">
                <div className="container-custom relative">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-7xl font-serif font-bold text-[var(--text-primary)] mb-6">
                            The <span className="gradient-text">Ozone</span> Edge
                        </h2>
                    </div>

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
                            <div key={i} className={`p-16 border-[var(--border-color)] transition-all hover:bg-[var(--bg-primary)] group ${i < 2 ? 'md:border-r' : ''}`}>
                                <div className="text-[#F39C12] mb-8 group-hover:scale-110 transition-transform origin-left">{box.icon}</div>
                                <h3 className="text-3xl font-serif font-bold text-[var(--text-primary)] mb-4">{box.title}</h3>
                                <p className="text-[var(--text-secondary)] font-light leading-relaxed">{box.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Premium CTA --- */}
            <section className="relative py-32 overflow-hidden group">
                <div
                    className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
                    style={{ backgroundImage: "url('/images/photo.jpg')" }}
                ></div>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

                <div className="container-custom relative z-10 text-center py-16 md:py-24">
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
                        Let's Construct <br /> <span className="text-[#F39C12]">Greatness</span> Together
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 font-light">
                        Every masterpiece begins with a conversation. Are you ready to define the future with us?
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            href="/contact"
                            className="px-12 py-6 bg-[#F39C12] text-white font-black uppercase tracking-widest text-sm rounded-full transition-all hover:bg-orange-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(243,156,18,0.3)] shadow-xl"
                        >
                            Inquire Project
                        </Link>
                        <Link
                            href="/portfolio"
                            className="px-12 py-6 bg-white/10 text-white font-black uppercase tracking-widest text-sm rounded-full border border-white/20 transition-all hover:bg-white/20 hover:scale-105"
                        >
                            Browse Works
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
