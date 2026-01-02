"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";

export default function AgaciroFashionGalaSection() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const galleryImages = [
        "/images/photo.jpg",
        "/images/photo2.jpg",
        "/images/photo3.jpg",
        "/images/photo4.jpg",
    ];

    return (
        <section className="section bg-[#1A1A1A]">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <div className="inline-block mb-4">
                        <span className="text-xs font-semibold tracking-[0.4em] uppercase text-[#F39C12]">
                            Featured Project
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                        Agaciro Fashion Gala
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        A spectacular celebration of fashion, culture, and creativity. Edition 1 was a resounding
                        success, bringing together designers, models, and fashion enthusiasts in an unforgettable evening.
                    </p>
                </div>

                {/* Video Section */}
                <div className="mb-16 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                    <div className="relative aspect-video rounded-3xl overflow-hidden bg-[#2D2D2D] border-2 border-gray-800 hover:border-[#F39C12] transition-all duration-500 group">
                        {!isVideoPlaying ? (
                            <>
                                {/* Video Thumbnail */}
                                <Image
                                    src="/images/photo2.jpg"
                                    alt="Agaciro Fashion Gala Video"
                                    fill
                                    className="object-cover"
                                />
                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                                {/* Play Button */}
                                <button
                                    onClick={() => setIsVideoPlaying(true)}
                                    className="absolute inset-0 flex items-center justify-center group"
                                >
                                    <div className="w-20 h-20 md:w-24 md:h-24 bg-[#F39C12] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                                        <Play className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" fill="white" />
                                    </div>
                                </button>
                                {/* Label */}
                                <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <span className="text-white font-semibold text-sm">Watch Highlights</span>
                                </div>
                            </>
                        ) : (
                            <video
                                controls
                                autoPlay
                                className="w-full h-full"
                                src="/videos/agaciro-gala.mp4"
                            >
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                </div>

                {/* Image Gallery */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#2D2D2D] border-2 border-gray-800 hover:border-[#F39C12] transition-all duration-500 group hover:-translate-y-2"
                        >
                            <Image
                                src={image}
                                alt={`Agaciro Fashion Gala ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-white font-semibold text-sm">Gallery {index + 1}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Event Stats */}
                <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                    <div className="text-center bg-[#2D2D2D] border-2 border-gray-800 rounded-2xl p-8 hover:border-[#F39C12] transition-all duration-300">
                        <div className="text-4xl md:text-5xl font-serif font-bold text-[#F39C12] mb-2">
                            500+
                        </div>
                        <div className="text-white font-medium mb-1">Attendees</div>
                        <div className="text-gray-400 text-sm">Fashion Enthusiasts</div>
                    </div>
                    <div className="text-center bg-[#2D2D2D] border-2 border-gray-800 rounded-2xl p-8 hover:border-[#F39C12] transition-all duration-300">
                        <div className="text-4xl md:text-5xl font-serif font-bold text-[#F39C12] mb-2">
                            20+
                        </div>
                        <div className="text-white font-medium mb-1">Designers</div>
                        <div className="text-gray-400 text-sm">Showcased Collections</div>
                    </div>
                    <div className="text-center bg-[#2D2D2D] border-2 border-gray-800 rounded-2xl p-8 hover:border-[#F39C12] transition-all duration-300">
                        <div className="text-4xl md:text-5xl font-serif font-bold text-[#F39C12] mb-2">
                            50+
                        </div>
                        <div className="text-white font-medium mb-1">Models</div>
                        <div className="text-gray-400 text-sm">On The Runway</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
