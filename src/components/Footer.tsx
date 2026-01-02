"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const services = [
        { name: "Event Organizer", href: "/services#events" },
        { name: "Fashion Agency", href: "/services#fashion" },
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
        <footer className="bg-[--dark-navy] text-white">
            {/* Main Footer */}
            <div className="container-custom py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src="/logo.png"
                                    alt="Ozone Entertainment"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl text-white">OZONE</span>
                                <span className="text-sm font-medium text-[--orange-accent]">
                                    ENTERTAINMENTS
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Capturing moments, empowering dreams. Professional entertainment services for events, fashion, film, and artist management.
                        </p>
                        {/* Social Media */}
                        <div className="flex space-x-4 pt-2">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[--orange-accent] flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[--orange-accent] flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[--orange-accent] flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[--orange-accent] flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[--orange-accent]">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-[--orange-accent] transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[--orange-accent]">Our Services</h3>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="text-gray-300 hover:text-[--orange-accent] transition-colors duration-300 text-sm"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[--orange-accent]">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 text-[--orange-accent] flex-shrink-0 mt-0.5" />
                                <a
                                    href="tel:+250798287085"
                                    className="text-gray-300 hover:text-[--orange-accent] transition-colors duration-300 text-sm"
                                >
                                    +250 798 287 085
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-[--orange-accent] flex-shrink-0 mt-0.5" />
                                <a
                                    href="mailto:ozoneentertainments1@gmail.com"
                                    className="text-gray-300 hover:text-[--orange-accent] transition-colors duration-300 text-sm break-all"
                                >
                                    ozoneentertainments1@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-[--orange-accent] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300 text-sm">
                                    Kimironko, Kigali
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} Ozone Entertainment. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link
                                href="/privacy"
                                className="text-gray-400 hover:text-[--orange-accent] transition-colors duration-300"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-gray-400 hover:text-[--orange-accent] transition-colors duration-300"
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
