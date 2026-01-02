"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight, MessageSquare, Globe } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ContactPage() {
    const { theme } = useTheme();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setError("");

        try {
            const res = await fetch("https://ozone-backend-jpmo.onrender.com/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setSuccess(true);
                setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
            } else {
                setError(data.message || "Failed to send message. Please try again.");
            }
        } catch (err) {
            setError("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-500 overflow-x-hidden">
            {/* --- Editorial Hero Section --- */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/photo3.jpg"
                        alt="Contact Hero"
                        fill
                        className="object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[var(--bg-primary)]"></div>
                    <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 bg-repeat"></div>
                </div>

                <div className="container-custom relative z-10 text-center">
                    <span className="text-[10px] font-black tracking-[1.5em] text-[#F39C12] uppercase mb-8 block animate-fadeIn">GET IN TOUCH</span>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight tracking-tighter mb-4 mix-blend-difference">
                        LET'S <span className="italic font-light text-[#F39C12]">CONNECT.</span>
                    </h1>
                </div>
            </section>

            {/* --- Asymmetrical Contact Section --- */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-24 items-start">
                        {/* Info Column */}
                        <div className="space-y-16 animate-fadeInLeft">
                            <div>
                                <span className="text-[10px] font-black tracking-widest text-[#F39C12] uppercase mb-4 block">OUR OFFICES</span>
                                <h2 className="text-4xl md:text-6xl font-serif font-bold leading-none uppercase tracking-tighter mb-8">
                                    Global Vision <br />
                                    <span className="italic font-light">Local Presence.</span>
                                </h2>
                                <p className="text-lg text-[var(--text-secondary)] max-w-md leading-relaxed">
                                    We're strategically located in the heart of Kigali's creative scene, ready to collaborate on your next vision.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <span className="text-[10px] font-black tracking-widest text-[#F39C12] uppercase block">Phone</span>
                                    <a href="tel:+250798287085" className="text-2xl font-serif font-bold hover:text-[#F39C12] transition-colors">
                                        +250 798 287 085
                                    </a>
                                </div>
                                <div className="space-y-4">
                                    <span className="text-[10px] font-black tracking-widest text-[#F39C12] uppercase block">Email</span>
                                    <a href="mailto:ozoneentertainments1@gmail.com" className="text-xl font-serif font-bold hover:text-[#F39C12] transition-colors break-all">
                                        ozoneentertainments1@gmail.com
                                    </a>
                                </div>
                                <div className="space-y-4">
                                    <span className="text-[10px] font-black tracking-widest text-[#F39C12] uppercase block">Location</span>
                                    <p className="text-xl font-serif font-bold">
                                        Kimironko, Kigali, <br /> Rwanda
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <span className="text-[10px] font-black tracking-widest text-[#F39C12] uppercase block">Hours</span>
                                    <p className="font-bold text-[var(--text-secondary)]">
                                        Mon - Fri: 9:00 - 18:00 <br />
                                        Sat: 10:00 - 16:00
                                    </p>
                                </div>
                            </div>

                            {/* Minimalist Map Container */}
                            <div className="relative aspect-video rounded-none overflow-hidden grayscale border border-[var(--border-color)] group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.377964878165!2d30.100291!3d-1.940893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca73d2df48ff7%3A0x5c6957621a18a4bb!2sKimironko%2C%20Kigali!5e0!3m2!1sen!2srw!4v1680000000000!5m2!1sen!2srw"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ozone Entertainment Location"
                                    className="opacity-70 group-hover:opacity-100 transition-opacity duration-700 hover:grayscale-0"
                                ></iframe>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="bg-[var(--bg-secondary)] p-8 md:p-16 border border-[var(--border-color)] animate-fadeInRight">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-2">
                                    <span className="text-[10px] font-black tracking-widest text-[#F39C12] uppercase block">INQUIRY TYPE</span>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        disabled={loading}
                                        className="w-full bg-transparent border-b border-[var(--border-color)] py-4 font-serif text-2xl focus:border-[#F39C12] outline-none transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="" className="bg-[var(--bg-secondary)]">Select Category</option>
                                        <option value="Event Planning" className="bg-[var(--bg-secondary)]">Event Planning</option>
                                        <option value="Fashion Agency" className="bg-[var(--bg-secondary)]">NAF Model Empire</option>
                                        <option value="Film Production" className="bg-[var(--bg-secondary)]">Film Production</option>
                                        <option value="Artist Management" className="bg-[var(--bg-secondary)]">Artist Management</option>
                                        <option value="Empowering Her" className="bg-[var(--bg-secondary)]">Empowering Her</option>
                                        <option value="General" className="bg-[var(--bg-secondary)]">General Inquiry</option>
                                    </select>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-black tracking-widest text-[#F39C12] uppercase block">YOUR NAME</span>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ex. John Doe"
                                            className="w-full bg-transparent border-b border-[var(--border-color)] py-4 font-serif text-xl focus:border-[#F39C12] outline-none transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-black tracking-widest text-[#F39C12] uppercase block">YOUR EMAIL</span>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ex. john@example.com"
                                            className="w-full bg-transparent border-b border-[var(--border-color)] py-4 font-serif text-xl focus:border-[#F39C12] outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <span className="text-[10px] font-black tracking-widest text-[#F39C12] uppercase block">TELL US MORE</span>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        placeholder="Briefly describe your vision..."
                                        className="w-full bg-transparent border-b border-[var(--border-color)] py-4 font-serif text-xl focus:border-[#F39C12] outline-none transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full group flex items-center justify-between text-[10px] font-black uppercase tracking-[0.5em] text-black bg-white px-12 py-6 hover:bg-[#F39C12] hover:text-white transition-all disabled:opacity-50"
                                >
                                    <span>{loading ? "SENDING..." : "SUBMIT REQUEST"}</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </button>

                                {success && (
                                    <div className="flex items-center gap-4 text-[#F39C12] font-bold tracking-widest text-[10px] uppercase animate-fadeIn">
                                        <CheckCircle className="w-4 h-4" />
                                        <span>Message Sent Successfully</span>
                                    </div>
                                )}

                                {error && (
                                    <div className="text-red-500 font-bold tracking-widest text-[10px] uppercase animate-fadeIn">
                                        {error}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FAQ Section --- */}
            <section className="py-24 border-t border-[var(--border-color)]">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-16">
                            <span className="text-[10px] font-black tracking-widest text-[#F39C12] uppercase mb-4 block">ESSENTIALS</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-none uppercase tracking-tighter">
                                Frequently Asked <br />
                                <span className="italic font-light">Questions.</span>
                            </h2>
                        </div>

                        <div className="grid gap-12">
                            {[
                                {
                                    q: "What is the typical turnaround for a project?",
                                    a: "Each project is unique. For event planning, we recommend 3-6 months lead time. For media productions, it varies from 2 to 8 weeks depending on scope.",
                                },
                                {
                                    q: "Do you handle international events?",
                                    a: "Yes. While we are based in Kigali, we have a global network that allows us to execute high-caliber events across the continent and beyond.",
                                },
                                {
                                    q: "How can models apply to NAF Model Empire?",
                                    a: "You can use this contact form and select 'Fashion Agency'. Please include a link to your digital portfolio or social media handles.",
                                },
                            ].map((faq, index) => (
                                <div key={index} className="group cursor-default">
                                    <h3 className="text-2xl font-serif font-bold uppercase tracking-tighter mb-4 group-hover:text-[#F39C12] transition-colors flex gap-4">
                                        <span className="text-[#F39C12] font-sans text-sm">0{index + 1}</span>
                                        {faq.q}
                                    </h3>
                                    <p className="text-[var(--text-secondary)] leading-relaxed pl-8">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Global Support Footer --- */}
            <section className="section py-32 bg-black text-white text-center">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <MessageSquare className="w-8 h-8 text-[#F39C12] mx-auto mb-4" />
                            <h4 className="font-bold uppercase tracking-widest">Chat with us</h4>
                            <p className="text-white/50 text-sm">Response within 24 hours</p>
                        </div>
                        <div className="space-y-4">
                            <Globe className="w-8 h-8 text-[#F39C12] mx-auto mb-4" />
                            <h4 className="font-bold uppercase tracking-widest">Global Reach</h4>
                            <p className="text-white/50 text-sm">Operating across Africa</p>
                        </div>
                        <div className="space-y-4">
                            <ArrowRight className="w-8 h-8 text-[#F39C12] mx-auto mb-4" />
                            <h4 className="font-bold uppercase tracking-widest">Start Now</h4>
                            <p className="text-white/50 text-sm">Let’s begin the journey</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
