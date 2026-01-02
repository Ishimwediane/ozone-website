"use client";

import Image from "next/image";
import { useState } from "react";
import { X, Play } from "lucide-react";

export default function PortfolioPage() {
    const [activeTab, setActiveTab] = useState<'photos' | 'film' | 'events' | 'artists' | 'fashion'>('photos');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const portfolioItems = {
        photos: [
            { src: "/images/photo.jpg", title: "Professional Photography", type: "image" },
            { src: "/images/photo1.jpg", title: "Portrait Session", type: "image" },
            { src: "/images/photo2.jpg", title: "Event Coverage", type: "image" },
            { src: "/images/photo3.jpg", title: "Creative Shoot", type: "image" },
            { src: "/images/photo4.jpg", title: "Professional Portraits", type: "image" },
            { src: "/images/photo5.jpg", title: "Studio Photography", type: "image" },
        ],
        film: [
            { src: "/images/filme2.jpg", title: "Film Production", type: "image" },
            { src: "/images/filme.jpg", title: "Video Production", type: "image" },
            { src: "/images/filme3.jpg", title: "Creative Filming", type: "image" },
            { src: "/images/videography.mp4", title: "Videography Reel", type: "video" },
        ],
        events: [
            { src: "/images/event.jpg", title: "Corporate Event", type: "image" },
            { src: "/images/umurava.mp4", title: "Event Highlights", type: "video" },
            { src: "/images/Event-2024.mp4", title: "2024 Event Coverage", type: "video" },
        ],
        artists: [
            { src: "/images/artist1.jpg", title: "Artist Management", type: "image" },
            { src: "/images/artist2.jpg", title: "Artist Promotion", type: "image" },
        ],
        fashion: [
            { src: "/images/fash.jpg", title: "Fashion Show", type: "image" },
            { src: "/images/fash1.jpg", title: "Runway Event", type: "image" },
            { src: "/images/fash2.jpg", title: "Model Portfolio", type: "image" },
            { src: "/images/video.mp4", title: "Fashion Reel", type: "video" },
            { src: "/images/fash.mp4", title: "Fashion Event", type: "video" },
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
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-hero text-white">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
                        <div className="flex items-center justify-center space-x-3 mb-6">
                            <div className="w-12 h-1 bg-[--orange-accent]"></div>
                            <span className="text-[--orange-accent] font-semibold tracking-wider uppercase">
                                Our Portfolio
                            </span>
                            <div className="w-12 h-1 bg-[--orange-accent]"></div>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Our <span className="text-[--orange-accent]">Creative</span> Work
                        </h1>

                        <p className="text-xl text-gray-200 leading-relaxed">
                            Explore our portfolio of events, photography, videography, fashion, and artist management projects.
                        </p>
                    </div>
                </div>
            </section>

            {/* Portfolio Gallery */}
            <section className="section bg-white">
                <div className="container-custom">
                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {[
                            { key: 'photos', label: 'Photos' },
                            { key: 'film', label: 'Film' },
                            { key: 'events', label: 'Events' },
                            { key: 'artists', label: 'Artists' },
                            { key: 'fashion', label: 'Fashion' },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key as any)}
                                className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 border-2 ${activeTab === tab.key
                                        ? 'bg-[--orange-accent] text-white border-[--orange-accent]'
                                        : 'bg-white text-gray-700 border-gray-300 hover:border-[--orange-accent] hover:text-[--orange-accent]'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentItems.map((item, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-scaleIn"
                                style={{ animationDelay: `${index * 0.05}s` }}
                                onClick={() => openLightbox(index)}
                            >
                                <div className="aspect-[4/3] relative">
                                    {item.type === 'image' ? (
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="relative w-full h-full">
                                            <video
                                                src={item.src}
                                                className="w-full h-full object-cover"
                                                muted
                                                loop
                                                playsInline
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                                <Play className="w-16 h-16 text-white" />
                                            </div>
                                        </div>
                                    )}

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h3 className="text-white font-bold text-xl">{item.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 bg-white/10 hover:bg-[--orange-accent] text-white rounded-full p-3 transition-all duration-300"
                        aria-label="Close"
                    >
                        <X className="w-7 h-7" />
                    </button>

                    <div className="max-w-6xl w-full">
                        {currentItems[lightboxIndex].type === 'image' ? (
                            <div className="relative w-full h-[80vh]">
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
                                className="w-full max-h-[80vh] rounded-lg"
                            />
                        )}
                        <div className="text-center mt-6">
                            <h3 className="text-white text-2xl font-bold">
                                {currentItems[lightboxIndex].title}
                            </h3>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
                        <button
                            onClick={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : currentItems.length - 1))}
                            className="bg-white/10 hover:bg-[--orange-accent] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => setLightboxIndex((prev) => (prev < currentItems.length - 1 ? prev + 1 : 0))}
                            className="bg-white/10 hover:bg-[--orange-accent] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <section className="section bg-gradient-to-r from-[--primary-blue] to-[--bright-blue] text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Let's Create Something Amazing Together
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
                        Ready to start your next project? Get in touch with us today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="btn-primary inline-flex items-center justify-center space-x-2">
                            <span>Contact Us</span>
                        </a>
                        <a href="/services" className="bg-white text-[--primary-blue] hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2">
                            <span>View Services</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
