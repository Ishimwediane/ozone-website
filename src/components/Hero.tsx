"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "/images/photo.jpg",
            message: "Creating Unforgettable Experiences"
        },
        {
            image: "/images/photo2-removebg-preview.png",
            message: "Fashion That Speaks Volumes"
        },
        {
            image: "/images/IGIHOZO-removebg-preview.png",
            message: "Empowering Dreams, Inspiring Success"
        }
    ];

    // Auto-slide every 8 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section className="relative flex pt-20 bg-black">
            {/* Image Slider */}
            <div className="absolute inset-0 bg-black overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={slide.image}
                        className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${index === currentSlide
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-110'
                            }`}
                    >
                        <Image
                            src={slide.image}
                            alt={`Ozone Entertainment ${index + 1}`}
                            fill
                            sizes="100vw"
                            className="object-contain object-center"
                            priority={index === 0}
                        />
                    </div>
                ))}
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content Overlay */}
            <div className="container-custom relative z-10">
                <div className="flex items-center justify-center py-8 md:py-12">
                    <div className="text-center px-4 max-w-4xl">
                        {/* Bold Typography - Scaled Down */}
                        <div className="relative inline-block animate-fadeInDown mb-6">
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold text-white leading-none tracking-tighter drop-shadow-2xl">
                                OZONE
                            </h1>
                            <p className="text-[10px] md:text-xs font-semibold text-[#F39C12] tracking-widest uppercase drop-shadow-lg absolute -bottom-4 right-0 opacity-80">
                                Entertainment
                            </p>
                        </div>

                        {/* Dynamic Message - Reduced Size */}
                        <p
                            key={currentSlide}
                            className="text-sm md:text-base text-white/70 font-medium mt-4 mb-8 drop-shadow-lg animate-fadeInUp tracking-wide max-w-xl mx-auto leading-relaxed"
                        >
                            {slides[currentSlide].message}
                        </p>

                        {/* CTA Buttons - Refined */}
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                            <Link
                                href="/portfolio"
                                className="bg-[--orange-accent] hover:bg-orange-600 text-white font-semibold px-12 py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-orange-500/10 tracking-widest uppercase text-[10px]"
                            >
                                View Our Work
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-semibold px-12 py-5 rounded-full border border-white/20 transition-all duration-300 tracking-widest uppercase text-[10px]"
                            >
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, index) => (
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
    );
}
