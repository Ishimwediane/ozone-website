"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Award, Users, CheckCircle, Heart } from "lucide-react";

export default function NAFModelEmpirePage() {
    const models = [
        { name: "Model 1", image: "/images/photo.jpg" },
        { name: "Model 2", image: "/images/photo2.jpg" },
        { name: "Model 3", image: "/images/photo3.jpg" },
        { name: "Model 4", image: "/images/photo4.jpg" },
    ];

    const trainingPrograms = [
        {
            title: "Runway Training",
            description: "Master the art of walking the runway with confidence and poise",
            icon: <Users className="w-8 h-8" />
        },
        {
            title: "Photo Shoot Techniques",
            description: "Learn professional posing and expression for camera work",
            icon: <Star className="w-8 h-8" />
        },
        {
            title: "Personal Branding",
            description: "Build your unique identity and marketability in the industry",
            icon: <Award className="w-8 h-8" />
        },
        {
            title: "Industry Networking",
            description: "Connect with agencies, designers, and industry professionals",
            icon: <Heart className="w-8 h-8" />
        },
    ];

    const successStories = [
        {
            name: "Grace Uwase",
            achievement: "Signed with International Agency",
            quote: "NAF Model Empire transformed my career. The training was exceptional!",
            image: "/images/photo.jpg"
        },
        {
            name: "Divine Mukamana",
            achievement: "Featured in Major Fashion Show",
            quote: "The mentorship and guidance I received here was life-changing.",
            image: "/images/photo2.jpg"
        },
    ];

    return (
        <div className="min-h-screen bg-[var(--bg-primary)]">
            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/photo2.jpg"
                    alt="NAF Model Empire"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50"></div>

                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-block mb-4">
                            <span className="text-xs font-semibold tracking-[0.4em] uppercase text-[#F39C12]">
                                Fashion Agency
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 animate-fadeInDown">
                            NAF Model Empire
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-fadeInUp">
                            Empowering the next generation of modeling talent through professional training, mentorship, and agency placement.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                            <Link
                                href="#apply"
                                className="inline-flex items-center justify-center space-x-2 bg-[#F39C12] hover:bg-[#E67E22] text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                <span>Apply Now</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#programs"
                                className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-10 py-4 rounded-full border-2 border-white/30 transition-all duration-300 hover:scale-105"
                            >
                                <span>View Programs</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About NAF Section */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fadeInLeft">
                            <div className="inline-block mb-4">
                                <span className="text-xs font-semibold tracking-[0.4em] uppercase text-[#F39C12]">
                                    About Us
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--text-primary)] mb-6">
                                Building Modeling Careers
                            </h2>
                            <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                                NAF Model Empire is more than just a modeling agency—we're a comprehensive training and development program dedicated to discovering and nurturing Rwanda's modeling talent.
                            </p>
                            <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
                                Our experienced team provides professional training, portfolio development, and direct connections to top modeling agencies, ensuring our models are fully prepared for successful careers in the fashion industry.
                            </p>
                            <div className="grid grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-4xl font-serif font-bold text-[#F39C12] mb-2">100+</div>
                                    <div className="text-sm text-[var(--text-tertiary)]">Models Trained</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-serif font-bold text-[#F39C12] mb-2">50+</div>
                                    <div className="text-sm text-[var(--text-tertiary)]">Agency Placements</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-serif font-bold text-[#F39C12] mb-2">5+</div>
                                    <div className="text-sm text-[var(--text-tertiary)]">Years Experience</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-3xl overflow-hidden animate-fadeInRight">
                            <Image
                                src="/images/photo3.jpg"
                                alt="NAF Model Training"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Training Programs */}
            <section id="programs" className="section bg-[var(--bg-secondary)]">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="text-xs font-semibold tracking-[0.4em] uppercase text-[#F39C12]">
                                What We Offer
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--text-primary)] mb-4">
                            Training Programs
                        </h2>
                        <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                            Comprehensive training to prepare you for a successful modeling career
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {trainingPrograms.map((program, index) => (
                            <div
                                key={index}
                                className="bg-[var(--bg-primary)] border-2 border-[var(--border-color)] rounded-2xl p-8 transition-all duration-500 hover:border-[#F39C12] hover:shadow-xl hover:shadow-[#F39C12]/10 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 bg-[#F39C12] rounded-full flex items-center justify-center text-white mb-6">
                                    {program.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                                    {program.title}
                                </h3>
                                <p className="text-[var(--text-secondary)]">
                                    {program.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Model Showcase */}
            <section className="section">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="text-xs font-semibold tracking-[0.4em] uppercase text-[#F39C12]">
                                Our Models
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--text-primary)] mb-4">
                            Meet Our Talent
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {models.map((model, index) => (
                            <div
                                key={index}
                                className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] hover:border-[#F39C12] transition-all duration-500"
                            >
                                <Image
                                    src={model.image}
                                    alt={model.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <p className="text-white font-semibold">{model.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="section bg-[var(--bg-secondary)]">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="text-xs font-semibold tracking-[0.4em] uppercase text-[#F39C12]">
                                Success Stories
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--text-primary)] mb-4">
                            Our Alumni
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {successStories.map((story, index) => (
                            <div
                                key={index}
                                className="bg-[var(--bg-primary)] border-2 border-[var(--border-color)] rounded-2xl p-8 hover:border-[#F39C12] transition-all duration-300"
                            >
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="relative w-20 h-20 rounded-full overflow-hidden">
                                        <Image
                                            src={story.image}
                                            alt={story.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[var(--text-primary)]">{story.name}</h3>
                                        <p className="text-[#F39C12] font-semibold">{story.achievement}</p>
                                    </div>
                                </div>
                                <p className="text-[var(--text-secondary)] italic">"{story.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application CTA */}
            <section id="apply" className="section">
                <div className="container-custom">
                    <div className="bg-gradient-to-r from-[#F39C12] to-[#E67E22] rounded-3xl p-12 md:p-16 text-center text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Start Your Modeling Career?
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                            Join NAF Model Empire and take the first step towards becoming a professional model
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center space-x-2 bg-white text-[#F39C12] hover:bg-gray-100 font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            <span>Apply Today</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
