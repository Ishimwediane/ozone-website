import Link from "next/link";
import { Calendar, Users, Film, Heart, Briefcase, ArrowRight } from "lucide-react";

export default function ServicesSection() {
    const services = [
        {
            icon: <Calendar className="w-10 h-10" />,
            title: "Event Organizer",
            description: "Professional event planning and management for unforgettable experiences.",
        },
        {
            icon: <Briefcase className="w-10 h-10" />,
            title: "Fashion Agency",
            description: "NAF MODEL EMPIRE: Model recruitment, training, and agency placement.",
        },
        {
            icon: <Film className="w-10 h-10" />,
            title: "Film Production",
            description: "Creative film and video production services for all occasions.",
        },
        {
            icon: <Users className="w-10 h-10" />,
            title: "Artist Management",
            description: "Supporting and promoting artists to reach their full potential.",
        },
    ];

    return (
        <section className="section bg-[var(--bg-primary)]">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                        Our <span className="text-[#F39C12]">Services</span>
                    </h2>
                    <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Comprehensive entertainment solutions for all your creative needs
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-8 transition-all duration-500 hover:border-[#F39C12] hover:shadow-xl hover:shadow-[#F39C12]/10 hover:-translate-y-2 animate-scaleIn"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Icon - Monochrome with hover effect */}
                            <div className="mb-6 text-[var(--text-secondary)] group-hover:text-[#F39C12] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[#F39C12] transition-colors duration-300">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Learn More Link */}
                            <Link
                                href="/services"
                                className="inline-flex items-center space-x-2 text-[#F39C12] font-semibold group-hover:space-x-3 transition-all duration-300"
                            >
                                <span>Learn More</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>

                            {/* Decorative corner element */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#F39C12]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
