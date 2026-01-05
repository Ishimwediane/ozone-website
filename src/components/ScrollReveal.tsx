"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: "fadeInUp" | "fadeInDown" | "scaleIn" | "slideInLeft" | "slideInRight";
    delay?: number;
    duration?: number;
    threshold?: number;
    once?: boolean;
    className?: string;
}

export default function ScrollReveal({
    children,
    animation = "fadeInUp",
    delay = 0,
    duration = 0.8,
    threshold = 0.1,
    once = true,
    className = "",
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once && ref.current) {
                        observer.unobserve(ref.current);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold, once]);

    const animationClass = isVisible ? `animate-${animation}` : "opacity-0";

    return (
        <div
            ref={ref}
            className={`${animationClass} ${className}`}
            style={{
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                animationFillMode: "both",
            }}
        >
            {children}
        </div>
    );
}
