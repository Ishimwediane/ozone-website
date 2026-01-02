"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Heart, Target, Eye, Award, Users, TrendingUp,
    ArrowRight, CheckCircle, Lightbulb, Handshake
} from "lucide-react";

export default function AboutPage() {
    const values = [
        {
            icon: <Award className="w-8 h-8" />,
            title: "Excellence",
            description: "We strive for excellence in every project, delivering quality that exceeds expectations.",
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Empowerment",
            description: "We believe in empowering individuals, especially women, through creativity and opportunity.",
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Innovation",
            description: "We embrace creativity and innovation to deliver fresh, impactful solutions.",
        },
        {
            icon: <Handshake className="w-8 h-8" />,
            title: "Integrity",
            description: "We operate with honesty, transparency, and professionalism in all our dealings.",
        },
    ];

    const stats = [
        { number: "10+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
        { number: "3+", label: "Major Events", icon: <Award className="w-6 h-6" /> },
        { number: "20+", label: "Models Trained", icon: <Users className="w-6 h-6" /> },
        { number: "100%", label: "Client Satisfaction", icon: <TrendingUp className="w-6 h-6" /> },
    ];

    const milestones = [
        {
            year: "2020",
            title: "Company Founded",
            description: "Ozone Entertainment was established with a vision to transform the entertainment industry in Rwanda.",
        },
        {
            year: "2021",
            title: "NAF MODEL EMPIRE Launched",
            description: "Started our fashion agency program, training and placing aspiring models with top agencies.",
        },
        {
            year: "2022",
            title: "Empowering Her Initiative",
            description: "Launched dedicated women empowerment programs focused on creativity and entrepreneurship.",
        },
        {
            year: "2023",
            title: "Major Event Success",
            description: "Successfully organized and managed multiple high-profile events and productions.",
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
                                About Us
                            </span>
                            <div className="w-12 h-1 bg-[--orange-accent]"></div>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Capturing <span className="text-[--orange-accent]">Moments</span>,<br />
                            Empowering <span className="text-[--orange-accent]">Dreams</span>
                        </h1>

                        <p className="text-xl text-gray-200 leading-relaxed">
                            We are a professional entertainment company dedicated to delivering exceptional services
                            while empowering individuals through creativity and opportunity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="animate-fadeInLeft">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/model.jpg"
                                    alt="Ozone Entertainment Team"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-8 animate-fadeInRight">
                            <div>
                                <div className="flex items-center space-x-3 mb-4">
                                    <Target className="w-8 h-8 text-[--orange-accent]" />
                                    <h2 className="text-3xl font-bold text-[--dark-navy]">Our Mission</h2>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    To provide world-class entertainment services that capture unforgettable moments while
                                    empowering individuals, especially women, through creative opportunities and professional development.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center space-x-3 mb-4">
                                    <Eye className="w-8 h-8 text-[--orange-accent]" />
                                    <h2 className="text-3xl font-bold text-[--dark-navy]">Our Vision</h2>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    To be the leading entertainment company in Rwanda, recognized for excellence, innovation,
                                    and our commitment to empowering the next generation of creative professionals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section section-light">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[--dark-navy] mb-4">
                            Our <span className="gradient-text">Values</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="card text-center hover:shadow-2xl"
                            >
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[--orange-accent] to-[--orange-600] flex items-center justify-center text-white mx-auto mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[--dark-navy] mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Empowering Her Section */}
            <section className="section bg-gradient-to-r from-[--orange-accent] to-[--orange-600] text-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 animate-fadeInLeft">
                            <div className="flex items-center space-x-3">
                                <Heart className="w-12 h-12" />
                                <h2 className="text-4xl md:text-5xl font-bold">Empowering Her</h2>
                            </div>

                            <p className="text-xl leading-relaxed">
                                Our flagship women empowerment program is dedicated to creating opportunities for women
                                to thrive in the creative and entertainment industry.
                            </p>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">What We Offer:</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Professional skills training and development",
                                        "Mentorship from industry leaders",
                                        "Entrepreneurship support and guidance",
                                        "Networking and collaboration opportunities",
                                        "Career advancement resources",
                                        "Leadership development programs",
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                                            <span className="text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href="/contact"
                                className="btn-secondary inline-flex items-center space-x-2 bg-white text-[--orange-accent] hover:bg-gray-100"
                            >
                                <span>Join Our Program</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                        <div className="animate-fadeInRight">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/fash.jpg"
                                    alt="Empowering Her Program"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section bg-[--dark-navy] text-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Our <span className="text-[--orange-accent]">Impact</span>
                        </h2>
                        <p className="text-xl text-gray-300">
                            Numbers that showcase our commitment to excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="flex justify-center mb-4 text-[--orange-accent]">
                                    {stat.icon}
                                </div>
                                <div className="text-5xl font-bold text-[--orange-accent] mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-lg text-gray-300">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Milestones */}
            <section className="section section-light">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[--dark-navy] mb-4">
                            Our <span className="gradient-text">Journey</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Key milestones in our growth and development
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    className="flex gap-6 animate-fadeInUp"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[--orange-accent] to-[--orange-600] flex items-center justify-center text-white font-bold text-lg">
                                            {milestone.year}
                                        </div>
                                    </div>
                                    <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6 -ml-10 mt-10">
                                        <h3 className="text-2xl font-bold text-[--dark-navy] mb-2">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* For Investors */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-[--dark-navy] mb-4">
                                Investment <span className="gradient-text">Opportunities</span>
                            </h2>
                            <p className="text-xl text-gray-600">
                                Partner with us to create impact and drive growth
                            </p>
                        </div>

                        <div className="card bg-gradient-to-br from-[--primary-blue] to-[--bright-blue] text-white">
                            <div className="space-y-6">
                                <p className="text-lg leading-relaxed">
                                    Ozone Entertainment is actively seeking strategic partners and investors who share our vision
                                    of transforming the entertainment industry while creating meaningful social impact through our
                                    Empowering Her program.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-xl font-bold mb-3">Why Invest in Ozone?</h3>
                                        <ul className="space-y-2">
                                            {[
                                                "Growing market demand",
                                                "Proven track record",
                                                "Social impact focus",
                                                "Experienced team",
                                                "Scalable business model",
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-center space-x-2">
                                                    <CheckCircle className="w-5 h-5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold mb-3">Investment Areas:</h3>
                                        <ul className="space-y-2">
                                            {[
                                                "Program expansion",
                                                "Equipment & technology",
                                                "Training facilities",
                                                "Marketing & outreach",
                                                "Team development",
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-center space-x-2">
                                                    <CheckCircle className="w-5 h-5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Link
                                        href="/contact"
                                        className="btn-primary inline-flex items-center space-x-2 bg-[--orange-accent] hover:bg-[--orange-600]"
                                    >
                                        <span>Contact Us for Investment Opportunities</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-gradient-to-r from-[--primary-blue] to-[--bright-blue] text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Join Us on Our Journey
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
                        Whether you're looking for our services or interested in partnering with us, we'd love to hear from you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-primary inline-flex items-center justify-center space-x-2">
                            <span>Get in Touch</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/services" className="bg-white text-[--primary-blue] hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2">
                            <span>Explore Our Services</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
