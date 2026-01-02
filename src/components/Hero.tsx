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
        <section className="relative min-h-screen flex pt-20 bg-black">
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
                <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] py-20">
                    <div className="text-center px-4">
                        {/* Bold Typography */}
                        <div className="relative inline-block animate-fadeInDown">
                            <h1 className="font-serif text-[120px] md:text-[160px] lg:text-[200px] font-black text-white leading-none tracking-tight drop-shadow-2xl">
                                OZONE
                            </h1>
                            <p className="text-sm md:text-base lg:text-lg font-semibold text-[#F39C12] tracking-[0.3em] uppercase drop-shadow-lg absolute -bottom-2 right-0">
                                Entertainment
                            </p>
                        </div>

                        {/* Dynamic Message */}
                        <p
                            key={currentSlide}
                            className="text-lg md:text-2xl text-white/90 font-medium mt-6 drop-shadow-lg animate-fadeInUp"
                        >
                            {slides[currentSlide].message}
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/portfolio"
                                className="bg-[--orange-accent] hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 tracking-wider uppercase text-sm"
                            >
                                View Our Work
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-[--primary-blue] hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 tracking-wider uppercase text-sm"
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
