import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ServicesSection() {
    const services = [
        {
            image: "/images/photo1.jpg",
            title: "Photography",
            description: "Professional photography for events, weddings, studio sessions, fashion, and branding, capturing moments with precision.",
        },
        {
            image: "/images/videography.jpg",
            title: "Video & Film",
            description: "High-quality production for events, promotions, and music videos. We create compelling films from concept to delivery.",
        },
        {
            image: "/images/model.jpg",
            title: "Fashion & Model",
            description: "Representation, casting, and career development for models, connecting them with global brands and designers.",
        },
        {
            image: "/images/artist1.jpg",
            title: "Artist & Talent",
            description: "Managing and promoting creative artists through branding, bookings, media relations, and career strategy.",
        },
        {
            image: "/images/event.jpg",
            title: "Events",
            description: "Organizing fashion shows, launches, and special experiences with strong creative direction and execution.",
        },
    ];

    return (
        <section className="section bg-[var(--bg-primary)]">
            <div className="container-custom">
                {/* Section Header */}
                <ScrollReveal animation="fadeInDown" className="mini-header">
                    <h2>Our Services</h2>
                </ScrollReveal>

                {/* Services Rows */}
                <div className="space-y-8">
                    {/* Row 1: 3 Services */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.slice(0, 3).map((service, index) => (
                            <ScrollReveal
                                key={index}
                                animation="scaleIn"
                                delay={index * 0.1}
                                className="h-full"
                            >
                                <ServiceCard service={service} />
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Row 2: 2 Services + View More Slot */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.slice(3, 5).map((service, index) => (
                            <ScrollReveal
                                key={index + 3}
                                animation="scaleIn"
                                delay={(index + 3) * 0.1}
                                className="h-full"
                            >
                                <ServiceCard service={service} />
                            </ScrollReveal>
                        ))}

                        {/* View More Slot */}
                        <ScrollReveal
                            animation="scaleIn"
                            delay={0.5}
                            className="h-full"
                        >
                            <Link
                                href="/services"
                                className="group relative flex flex-col items-center justify-center p-8 bg-[var(--bg-secondary)] rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-[var(--orange-accent)]/10 hover:-translate-y-2 h-full text-center border border-[var(--border-color)] hover:border-[var(--orange-accent)]"
                            >
                                <div className="w-16 h-16 rounded-full border border-[var(--orange-accent)]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[var(--orange-accent)] transition-all duration-500">
                                    <ArrowRight className="w-8 h-8 text-[var(--orange-accent)]" />
                                </div>
                                <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">View All Services</h3>
                                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--orange-accent)] opacity-80">
                                    Full Expertise
                                </p>
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service }: { service: any }) {
    return (
        <div className="group relative bg-[var(--bg-secondary)] rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-[var(--orange-accent)]/10 hover:-translate-y-2 h-full aspect-[16/11]">
            {/* Background Image */}
            <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority
            />

            {/* Dark Overlay for Text Readability - Slightly stronger at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:via-black/30 transition-colors duration-500"></div>

            {/* Bottom-Aligned Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-start justify-end p-8 text-left z-10">
                {/* Title - Bold Serif */}
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 transform transition-all duration-700 group-hover:text-[var(--orange-accent)] tracking-tight">
                    {service.title}
                </h3>

                {/* Description - Always Visible, Left Aligned */}
                <p className="text-[10px] md:text-xs text-white/90 font-medium leading-[1.6] mb-1">
                    {service.description}
                </p>

                {/* Subtle Action Hint */}
                <div className="mt-4 w-8 h-[2px] bg-[var(--orange-accent)]/50 group-hover:w-16 group-hover:bg-[var(--orange-accent)] transition-all duration-700"></div>
            </div>

            <Link href="/services" className="absolute inset-0 z-20 cursor-pointer" aria-label={`View ${service.title} details`} />
        </div>
    );
}
