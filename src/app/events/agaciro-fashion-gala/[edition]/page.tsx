"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Calendar, MapPin, Users, CheckCircle, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { agaciroEditions, getAllEditionIds } from "@/data/editions";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return getAllEditionIds().map((id) => ({
        edition: id,
    }));
}

export default function EditionPage({ params }: { params: { edition: string } }) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const edition = agaciroEditions.find(e => e.id === params.edition);

    if (!edition) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[var(--bg-primary)]">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <Image
                    src={edition.videoThumbnail}
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
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 animate-fadeInDown">
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
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--text-primary)] mb-6">
                            About This Edition
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                            {edition.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Event Highlights</h3>
                            {edition.highlights.map((highlight, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-[#F39C12] flex-shrink-0 mt-0.5" />
                                    <span className="text-[var(--text-secondary)]">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="section bg-[var(--bg-secondary)]">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--text-primary)] mb-4">
                            Event Highlights Video
                        </h2>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="relative aspect-video rounded-3xl overflow-hidden bg-[var(--bg-primary)] border-2 border-[var(--border-color)] hover:border-[#F39C12] transition-all duration-500 group">
                            {!isVideoPlaying ? (
                                <>
                                    <Image
                                        src={edition.videoThumbnail}
                                        alt="Video Thumbnail"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                                    <button
                                        onClick={() => setIsVideoPlaying(true)}
                                        className="absolute inset-0 flex items-center justify-center group"
                                    >
                                        <div className="w-20 h-20 md:w-24 md:h-24 bg-[#F39C12] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                                            <Play className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" fill="white" />
                                        </div>
                                    </button>
                                    <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full">
                                        <span className="text-white font-semibold text-sm">Watch Highlights</span>
                                    </div>
                                </>
                            ) : (
                                <video
                                    controls
                                    autoPlay
                                    className="w-full h-full"
                                    src={edition.videoUrl}
                                >
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="section">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--text-primary)] mb-4">
                            Event Gallery
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {edition.images.map((image, index) => (
                            <div
                                key={index}
                                className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] hover:border-[#F39C12] transition-all duration-500 group hover:-translate-y-2"
                            >
                                <Image
                                    src={image}
                                    alt={`Gallery Image ${index + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <p className="text-white font-semibold text-sm">Gallery {index + 1}</p>
                                    </div>
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
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--text-primary)] mb-4">
                            By the Numbers
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center bg-[var(--bg-primary)] border-2 border-[var(--border-color)] rounded-2xl p-8 hover:border-[#F39C12] transition-all duration-300">
                            <div className="text-4xl md:text-5xl font-serif font-bold text-[#F39C12] mb-2">
                                {edition.stats.attendees}+
                            </div>
                            <div className="text-[var(--text-primary)] font-medium mb-1">Attendees</div>
                            <div className="text-[var(--text-tertiary)] text-sm">Fashion Enthusiasts</div>
                        </div>
                        <div className="text-center bg-[var(--bg-primary)] border-2 border-[var(--border-color)] rounded-2xl p-8 hover:border-[#F39C12] transition-all duration-300">
                            <div className="text-4xl md:text-5xl font-serif font-bold text-[#F39C12] mb-2">
                                {edition.stats.designers}+
                            </div>
                            <div className="text-[var(--text-primary)] font-medium mb-1">Designers</div>
                            <div className="text-[var(--text-tertiary)] text-sm">Showcased Collections</div>
                        </div>
                        <div className="text-center bg-[var(--bg-primary)] border-2 border-[var(--border-color)] rounded-2xl p-8 hover:border-[#F39C12] transition-all duration-300">
                            <div className="text-4xl md:text-5xl font-serif font-bold text-[#F39C12] mb-2">
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
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
