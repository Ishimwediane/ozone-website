import Link from "next/link";
import { Calendar, Users, Film, Heart, Briefcase, ArrowRight } from "lucide-react";

export default function ServicesSection() {
    const services = [
        {
            icon: <Calendar className="w-8 h-8" />,
            title: "Event Organizer",
            description: "Professional event planning and management for unforgettable experiences.",
            color: "from-blue-500 to-blue-600",
        },
        {
            icon: <Briefcase className="w-8 h-8" />,
            title: "Fashion Agency",
            description: "NAF MODEL EMPIRE: Model recruitment, training, and agency placement.",
            color: "from-orange-500 to-orange-600",
        },
        {
            icon: <Film className="w-8 h-8" />,
            title: "Film Production",
            description: "Creative film and video production services for all occasions.",
            color: "from-purple-500 to-purple-600",
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Artist Management",
            description: "Supporting and promoting artists to reach their full potential.",
            color: "from-pink-500 to-pink-600",
        },
    ];

    return (
        <section className="section section-light">
            <div className="container-custom">
                <div className="text-center mb-16 animate-fadeInUp">
                    <h2 className="text-4xl md:text-5xl font-bold text-[--dark-navy] mb-4">
                        Our <span className="gradient-text">Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive entertainment solutions for all your creative needs
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group card hover:shadow-2xl animate-scaleIn"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[--dark-navy] mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {service.description}
                            </p>
                            <Link
                                href="/services"
                                className="text-[--orange-accent] font-semibold inline-flex items-center space-x-2 hover:space-x-3 transition-all duration-300"
                            >
                                <span>Learn More</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Empowering Her Highlight */}
                <div className="mt-12 bg-gradient-to-r from-[--orange-accent] to-[--orange-600] rounded-2xl p-8 md:p-12 text-white text-center animate-fadeInUp">
                    <Heart className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-4">Empowering Her</h3>
                    <p className="text-lg mb-6 max-w-2xl mx-auto">
                        Dedicated initiatives and programs for empowering women through creativity, training, and professional opportunities.
                    </p>
                    <Link href="/about" className="btn-secondary inline-flex items-center space-x-2">
                        <span>Learn About Our Mission</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
