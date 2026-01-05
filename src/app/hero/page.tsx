"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        "/images/photo.jpg",
        "/images/photo2.jpg",
        "/images/photo4.jpg",
        "/images/IGIHOZO.jpg"
    ];

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [images.length]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative  bg-white">
            {/* Hero Section - Image Carousel */}
            <section className="relative min-h-screen flex  pt-20">
                {/* Image Slider */}
                <div className="absolute inset-0 top-20">
                    {images.map((image, index) => (
                        <div
                            key={image}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <Image
                                src={image}
                                alt={`Ozone Entertainment ${index + 1}`}
                                fill
                                className="object-cover "
                                priority={index === 0}
                            />
                        </div>
                    ))}
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-black"></div>
                </div>

                {/* Content Overlay */}
                <div className="container-custom relative z-10">
                    <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] py-20">
                        <div className="text-center px-4">
                            {/* Bold Typography */}
                            <h1 className="text-[120px] md:text-[160px] lg:text-[200px] font-black text-white leading-none tracking-tight drop-shadow-2xl">
                                OZONE
                            </h1>

                            {/* Subtitle */}
                            <p className="text-lg md:text-xl text-white/90 mt-6 drop-shadow-lg">
                                Step Into Effortless Elegance With Passion
                            </p>

                            {/* CTA Button */}
                            <div className="mt-10">
                                <Link
                                    href="/portfolio"
                                    className="bg-[--orange-accent] hover:bg-[--primary-blue] text-white font-semibold px-12 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 tracking-wider uppercase text-sm"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-white w-8'
                                : 'bg-white/50 hover:bg-white/75'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
