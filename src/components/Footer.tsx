"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const services = [
        { name: "Event Organizer", href: "/services/event-organizer" },
        { name: "Fashion Agency", href: "/services/naf-model-empire" },
        { name: "Film Production", href: "/services#film" },
        { name: "Artist Management", href: "/services#artists" },
        { name: "Empowering Her", href: "/services#empowering" },
    ];

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <footer className="bg-white border-t border-gray-200">
            {/* Main Footer */}
            <div className="container-custom py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src="/logo.png"
                                    alt="Ozone Entertainment"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-2xl text-[#00509E]">OZONE</span>
                                <span className="text-sm font-medium text-[#F39C12]">
                                    ENTERTAINMENTS
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Capturing moments, empowering dreams. Professional entertainment services for events, fashion, film, and artist management.
                        </p>
                        {/* Social Media */}
                        <div className="flex space-x-4 pt-2">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#F39C12] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#F39C12] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#F39C12] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#F39C12] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#00509E]">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-[#F39C12] transition-colors duration-300 text-sm inline-flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-[#F39C12] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#00509E]">Our Services</h3>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="text-gray-600 hover:text-[#F39C12] transition-colors duration-300 text-sm inline-flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-[#F39C12] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#00509E]">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 text-[#F39C12] flex-shrink-0 mt-0.5" />
                                <a
                                    href="tel:+250798287085"
                                    className="text-gray-600 hover:text-[#F39C12] transition-colors duration-300 text-sm"
                                >
                                    +250 798 287 085
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-[#F39C12] flex-shrink-0 mt-0.5" />
                                <a
                                    href="mailto:ozoneentertainments1@gmail.com"
                                    className="text-gray-600 hover:text-[#F39C12] transition-colors duration-300 text-sm break-all"
                                >
                                    ozoneentertainments1@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-[#F39C12] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm">
                                    Kimironko, Kigali
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200 bg-gray-50">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-600 text-sm text-center md:text-left">
                            © {currentYear} Ozone Entertainment. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link
                                href="/privacy"
                                className="text-gray-600 hover:text-[#F39C12] transition-colors duration-300"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-gray-600 hover:text-[#F39C12] transition-colors duration-300"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
