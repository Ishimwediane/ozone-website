"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Calendar, MapPin, Users, CheckCircle, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { AgaciroEdition } from "@/data/editions";

interface EditionClientProps {
    edition: AgaciroEdition;
}

export default function EditionClient({ edition }: EditionClientProps) {
    const [activeVideoIndex, setActiveVideoIndex] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    return (
        <div className="min-h-screen bg-[var(--bg-primary)]">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <Image
                    src={edition.videos[0].thumbnail}
                    alt={edition.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50"></div>

                <div className="container-custom relative z-10">
                    <Link
                        href="/events/agaciro-fashion-gala"
                        className="inline-flex items-center space-x-2 text-white hover:text-[#F39C12] transition-colors duration-300 mb-6"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to All Editions</span>
                    </Link>

                    <div className="inline-block mb-4">
                        <span className="text-xs font-semibold tracking-[0.4em] uppercase text-[#F39C12]">
                            Edition {edition.edition}
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 animate-fadeInDown">
                        {edition.theme}
                    </h1>
                    <div className="flex flex-wrap gap-6 text-gray-200 animate-fadeInUp">
                        <div className="flex items-center space-x-2">
                            <Calendar className="w-5 h-5 text-[#F39C12]" />
                            <span>{edition.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin className="w-5 h-5 text-[#F39C12]" />
                            <span>{edition.venue}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Users className="w-5 h-5 text-[#F39C12]" />
                            <span>{edition.stats.attendees}+ Attendees</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* About the Edition */}
            <section className="section">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-6">
                            About This Edition
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                            {edition.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-3">
                            <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">Event Highlights</h3>
                            {edition.highlights.map((highlight: string, index: number) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-[#F39C12] flex-shrink-0 mt-0.5" />
                                    <span className="text-[var(--text-secondary)]">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Showcase (Multiple Support) */}
            <section className="section bg-[var(--bg-secondary)] overflow-hidden">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="text-xs font-semibold tracking-[0.4em] uppercase text-[#F39C12] block mb-4">CINEMATIC EXPERIENCE</span>
                        <h2 className="text-4xl md:text-6xl font-semibold text-[var(--text-primary)]">
                            Video Highlights
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        {/* Video Player */}
                        <div className="lg:col-span-2">
                            <div className="relative aspect-video rounded-3xl overflow-hidden bg-black border-2 border-[var(--border-color)] hover:border-[#F39C12] transition-all duration-500 group shadow-2xl">
                                {!isVideoPlaying ? (
                                    <>
                                        <Image
                                            src={edition.videos[activeVideoIndex].thumbnail}
                                            alt={edition.videos[activeVideoIndex].title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                                        <button
                                            onClick={() => setIsVideoPlaying(true)}
                                            className="absolute inset-0 flex items-center justify-center group/btn"
                                        >
                                            <div className="w-24 h-24 bg-[#F39C12] rounded-full flex items-center justify-center group-hover/btn:scale-110 transition-transform duration-300 shadow-2xl">
                                                <Play className="w-10 h-10 text-white ml-1" fill="white" />
                                            </div>
                                        </button>
                                        <div className="absolute bottom-8 left-8 bg-black/70 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                                            <span className="text-white font-semibold text-sm tracking-widest uppercase">{edition.videos[activeVideoIndex].title}</span>
                                        </div>
                                    </>
                                ) : (
                                    <video
                                        controls
                                        autoPlay
                                        className="w-full h-full"
                                        src={edition.videos[activeVideoIndex].url}
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>
                        </div>

                        {/* Video Playlist */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold uppercase tracking-widest text-[#F39C12] border-b border-[var(--border-color)] pb-4">Playlists</h3>
                            {edition.videos.map((video, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setActiveVideoIndex(idx);
                                        setIsVideoPlaying(false);
                                    }}
                                    className={`w-full flex gap-4 p-4 rounded-2xl transition-all text-left border ${activeVideoIndex === idx
                                        ? 'bg-[var(--bg-primary)] border-[#F39C12] shadow-lg translate-x-2'
                                        : 'bg-transparent border-transparent hover:bg-[var(--bg-primary)]'}`}
                                >
                                    <div className="relative w-24 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                                        <Image src={video.thumbnail} alt={video.title} fill className="object-cover" />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                            <Play className="w-4 h-4 text-white" fill="white" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className={`font-semibold text-sm mb-1 ${activeVideoIndex === idx ? 'text-[#F39C12]' : 'text-[var(--text-primary)]'}`}>{video.title}</p>
                                        <p className="text-[10px] uppercase tracking-widest text-[var(--text-tertiary)] font-black">Official Media</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Image Albums */}
            <section className="section">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="text-xs font-semibold tracking-[0.4em] uppercase text-[#F39C12] block mb-4">PHOTO ALBUMS</span>
                        <h2 className="text-4xl md:text-6xl font-semibold text-[var(--text-primary)]">
                            Visual Legacy
                        </h2>
                    </div>

                    <div className="space-y-24">
                        {edition.albums.map((album, albumIdx) => (
                            <div key={albumIdx} className="space-y-8">
                                <div className="flex items-center gap-6">
                                    <h3 className="text-2xl font-semibold text-[var(--text-primary)] uppercase tracking-tighter">{album.name}</h3>
                                    <div className="h-px flex-1 bg-[var(--border-color)]"></div>
                                    <span className="text-[10px] font-black text-[var(--text-tertiary)] uppercase tracking-widest">{album.images.length} Photos</span>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                                    {album.images.map((image: string, index: number) => (
                                        <div
                                            key={index}
                                            className="relative aspect-[4/5] overflow-hidden bg-[var(--bg-secondary)] group hover:-translate-y-2 transition-all duration-500"
                                        >
                                            <Image
                                                src={image}
                                                alt={`${album.name} ${index + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                            />
                                            <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-500"></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-6 left-6 right-6">
                                                    <p className="text-white text-[10px] font-black uppercase tracking-widest">Gala Session {index + 1}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Event Stats */}
            <section className="section bg-[var(--bg-secondary)]">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4">
                            By the Numbers
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center bg-[var(--bg-primary)] border-2 border-[var(--border-color)] rounded-2xl p-8 hover:border-[#F39C12] transition-all duration-300">
                            <div className="text-4xl md:text-5xl font-semibold text-[#F39C12] mb-2">
                                {edition.stats.attendees}+
                            </div>
                            <div className="text-[var(--text-primary)] font-medium mb-1">Attendees</div>
                            <div className="text-[var(--text-tertiary)] text-sm">Fashion Enthusiasts</div>
                        </div>
                        <div className="text-center bg-[var(--bg-primary)] border-2 border-[var(--border-color)] rounded-2xl p-8 hover:border-[#F39C12] transition-all duration-300">
                            <div className="text-4xl md:text-5xl font-semibold text-[#F39C12] mb-2">
                                {edition.stats.designers}+
                            </div>
                            <div className="text-[var(--text-primary)] font-medium mb-1">Designers</div>
                            <div className="text-[var(--text-tertiary)] text-sm">Showcased Collections</div>
                        </div>
                        <div className="text-center bg-[var(--bg-primary)] border-2 border-[var(--border-color)] rounded-2xl p-8 hover:border-[#F39C12] transition-all duration-300">
                            <div className="text-4xl md:text-5xl font-semibold text-[#F39C12] mb-2">
                                {edition.stats.models}+
                            </div>
                            <div className="text-[var(--text-primary)] font-medium mb-1">Models</div>
                            <div className="text-[var(--text-tertiary)] text-sm">On The Runway</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container-custom">
                    <div className="bg-gradient-to-r from-[#F39C12] to-[#E67E22] rounded-3xl p-12 md:p-16 text-center text-white">
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                            Interested in Participating?
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                            Whether you're a designer, model, or sponsor, we'd love to have you be part of our next edition
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center space-x-2 bg-white text-[#F39C12] hover:bg-gray-100 font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            <span>Get in Touch</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
