"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Calendar, Briefcase, Film, Users, Heart,
    CheckCircle, ArrowRight, Star, Award
} from "lucide-react";

export default function ServicesPage() {
    const services = [
        {
            id: "events",
            icon: <Calendar className="w-12 h-12" />,
            title: "Event Organizer",
            tagline: "Creating Unforgettable Experiences",
            description: "Professional event planning and management services that bring your vision to life. From corporate events to private celebrations, we handle every detail with precision and creativity.",
            features: [
                "Corporate Events & Conferences",
                "Wedding Planning & Coordination",
                "Private Parties & Celebrations",
                "Product Launches & Promotions",
                "Full Event Management",
                "Vendor Coordination",
            ],
            color: "from-blue-500 to-blue-600",
            image: "/images/event.jpg",
        },
        {
            id: "fashion",
            icon: <Briefcase className="w-12 h-12" />,
            title: "Fashion Agency",
            tagline: "NAF MODEL EMPIRE",
            description: "We recruit, train, and empower aspiring models through our NAF MODEL EMPIRE program. Our comprehensive training prepares models for successful careers and connects them with top agencies.",
            features: [
                "Model Recruitment & Scouting",
                "Professional Training Programs",
                "Runway & Photo Shoot Coaching",
                "Agency Placement Services",
                "Portfolio Development",
                "Career Guidance & Mentorship",
            ],
            color: "from-orange-500 to-orange-600",
            image: "/images/fash.jpg",
        },
        {
            id: "film",
            icon: <Film className="w-12 h-12" />,
            title: "Film Production",
            tagline: "Bringing Stories to Life",
            description: "Creative film and video production services for all occasions. From concept to final cut, we deliver high-quality visual content that captures your message and engages your audience.",
            features: [
                "Music Video Production",
                "Corporate Video Content",
                "Event Videography",
                "Documentary Filming",
                "Post-Production & Editing",
                "Drone & Aerial Footage",
            ],
            color: "from-purple-500 to-purple-600",
            image: "/images/film.jpg",
        },
        {
            id: "artists",
            icon: <Users className="w-12 h-12" />,
            title: "Artist Management",
            tagline: "Nurturing Talent, Building Careers",
            description: "Supporting and promoting artists to reach their full potential. We provide comprehensive management services that help artists focus on their craft while we handle the business side.",
            features: [
                "Career Development & Planning",
                "Brand Building & Marketing",
                "Performance Booking",
                "Contract Negotiation",
                "Social Media Management",
                "Industry Connections",
            ],
            color: "from-pink-500 to-pink-600",
            image: "/images/artist1.jpg",
        },
        {
            id: "empowering",
            icon: <Heart className="w-12 h-12" />,
            title: "Empowering Her",
            tagline: "Women Empowerment Through Creativity",
            description: "Dedicated initiatives and programs for empowering women through creativity, professional development, and entrepreneurship. We believe in creating opportunities that transform lives.",
            features: [
                "Skills Training Workshops",
                "Mentorship Programs",
                "Entrepreneurship Support",
                "Creative Development",
                "Networking Opportunities",
                "Leadership Training",
            ],
            color: "from-rose-500 to-rose-600",
            image: "/images/model.jpg",
        },
    ];

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
                                Our Services
                            </span>
                            <div className="w-12 h-1 bg-[--orange-accent]"></div>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Comprehensive <span className="text-[--orange-accent]">Entertainment</span> Solutions
                        </h1>

                        <p className="text-xl text-gray-200 leading-relaxed">
                            From events to fashion, film to artist management, we provide professional services
                            that exceed expectations and deliver exceptional results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="space-y-24">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Image */}
                                <div className={`${index % 2 === 1 ? "lg:order-2" : ""} animate-fadeInUp`}>
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        <div className={`absolute top-6 left-6 w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} space-y-6 animate-fadeInUp`}>
                                    <div>
                                        <h2 className="text-4xl font-bold text-[--dark-navy] mb-2">
                                            {service.title}
                                        </h2>
                                        <p className="text-xl text-[--orange-accent] font-semibold">
                                            {service.tagline}
                                        </p>
                                    </div>

                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="space-y-3">
                                        <h3 className="text-lg font-bold text-[--dark-navy]">What We Offer:</h3>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start space-x-2">
                                                    <CheckCircle className="w-5 h-5 text-[--orange-accent] flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link
                                        href="/contact"
                                        className="btn-primary inline-flex items-center space-x-2"
                                    >
                                        <span>Get Started</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Our Services */}
            <section className="section section-light">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[--dark-navy] mb-4">
                            Why Choose <span className="gradient-text">Our Services</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Professional excellence and dedication in every project
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="card text-center">
                            <div className="w-16 h-16 rounded-full bg-[--orange-accent]/10 flex items-center justify-center text-[--orange-accent] mx-auto mb-4">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-[--dark-navy] mb-2">
                                Proven Expertise
                            </h3>
                            <p className="text-gray-600">
                                Years of experience delivering exceptional results across all our service areas.
                            </p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 rounded-full bg-[--orange-accent]/10 flex items-center justify-center text-[--orange-accent] mx-auto mb-4">
                                <Star className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-[--dark-navy] mb-2">
                                Quality Guaranteed
                            </h3>
                            <p className="text-gray-600">
                                We maintain the highest standards in every project, ensuring your complete satisfaction.
                            </p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 rounded-full bg-[--orange-accent]/10 flex items-center justify-center text-[--orange-accent] mx-auto mb-4">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-[--dark-navy] mb-2">
                                Passionate Team
                            </h3>
                            <p className="text-gray-600">
                                Our dedicated team brings creativity, professionalism, and passion to every project.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-gradient-to-r from-[--primary-blue] to-[--bright-blue] text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
                        Let's discuss how our services can help bring your vision to life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-primary inline-flex items-center justify-center space-x-2">
                            <span>Contact Us Today</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/portfolio" className="bg-white text-[--primary-blue] hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2">
                            <span>View Our Portfolio</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
