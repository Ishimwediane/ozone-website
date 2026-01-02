"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
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
                                Contact Us
                            </span>
                            <div className="w-12 h-1 bg-[--orange-accent]"></div>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Let's <span className="text-[--orange-accent]">Connect</span>
                        </h1>

                        <p className="text-xl text-gray-200 leading-relaxed">
                            Have a project in mind? Want to learn more about our services? We'd love to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8 animate-fadeInLeft">
                            <div>
                                <h2 className="text-3xl font-bold text-[--dark-navy] mb-6">
                                    Get in Touch
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Whether you're planning an event, need professional photography, looking for artist management,
                                    or interested in our Empowering Her program, we're here to help bring your vision to life.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[--orange-accent] to-[--orange-600] flex items-center justify-center text-white flex-shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[--dark-navy] mb-1">Phone</h3>
                                        <a
                                            href="tel:+250798287085"
                                            className="text-gray-700 hover:text-[--orange-accent] transition-colors duration-300"
                                        >
                                            +250 798 287 085
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[--orange-accent] to-[--orange-600] flex items-center justify-center text-white flex-shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[--dark-navy] mb-1">Email</h3>
                                        <a
                                            href="mailto:ozoneentertainments1@gmail.com"
                                            className="text-gray-700 hover:text-[--orange-accent] transition-colors duration-300 break-all"
                                        >
                                            ozoneentertainments1@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[--orange-accent] to-[--orange-600] flex items-center justify-center text-white flex-shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[--dark-navy] mb-1">Location</h3>
                                        <p className="text-gray-700">Kimironko, Kigali, Rwanda</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[--orange-accent] to-[--orange-600] flex items-center justify-center text-white flex-shrink-0">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[--dark-navy] mb-1">Business Hours</h3>
                                        <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
                                        <p className="text-gray-700">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="rounded-xl overflow-hidden border-2 border-[--orange-accent]/30 shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.377964878165!2d30.100291!3d-1.940893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca73d2df48ff7%3A0x5c6957621a18a4bb!2sKimironko%2C%20Kigali!5e0!3m2!1sen!2srw!4v1680000000000!5m2!1sen!2srw"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ozone Entertainment Location"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="animate-fadeInRight">
                            <form
                                onSubmit={handleSubmit}
                                className="card bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100"
                            >
                                <h3 className="text-2xl font-bold text-[--dark-navy] mb-6">
                                    Send Us a Message
                                </h3>

                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            disabled={loading}
                                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[--orange-accent] focus:outline-none transition-colors duration-300 disabled:opacity-60"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            disabled={loading}
                                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[--orange-accent] focus:outline-none transition-colors duration-300 disabled:opacity-60"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            disabled={loading}
                                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[--orange-accent] focus:outline-none transition-colors duration-300 disabled:opacity-60"
                                            placeholder="+250 XXX XXX XXX"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            disabled={loading}
                                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[--orange-accent] focus:outline-none transition-colors duration-300 disabled:opacity-60"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="Event Planning">Event Planning</option>
                                            <option value="Fashion Agency">Fashion Agency / NAF MODEL EMPIRE</option>
                                            <option value="Film Production">Film Production</option>
                                            <option value="Artist Management">Artist Management</option>
                                            <option value="Empowering Her">Empowering Her Program</option>
                                            <option value="Investment">Investment Opportunity</option>
                                            <option value="General Inquiry">General Inquiry</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            disabled={loading}
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[--orange-accent] focus:outline-none transition-colors duration-300 resize-none disabled:opacity-60"
                                            placeholder="Tell us about your project or inquiry..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn-primary w-full inline-flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        <span>{loading ? "Sending..." : "Send Message"}</span>
                                        <Send className="w-5 h-5" />
                                    </button>

                                    {success && (
                                        <div className="flex items-center space-x-2 p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-700">
                                            <CheckCircle className="w-5 h-5" />
                                            <span className="font-medium">Message sent successfully! We'll get back to you soon.</span>
                                        </div>
                                    )}

                                    {error && (
                                        <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700">
                                            <span className="font-medium">{error}</span>
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section section-light">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-[--dark-navy] mb-4">
                                Frequently Asked <span className="gradient-text">Questions</span>
                            </h2>
                            <p className="text-xl text-gray-600">
                                Quick answers to common questions
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    q: "What services do you offer?",
                                    a: "We offer event organizing, fashion agency (NAF MODEL EMPIRE), film production, artist management, and our Empowering Her program for women empowerment.",
                                },
                                {
                                    q: "How can I book your services?",
                                    a: "Simply fill out the contact form above or call us directly. We'll discuss your needs and provide a customized quote.",
                                },
                                {
                                    q: "Do you work with international clients?",
                                    a: "Yes! While we're based in Kigali, Rwanda, we work with clients both locally and internationally.",
                                },
                                {
                                    q: "What is the Empowering Her program?",
                                    a: "It's our dedicated initiative for empowering women through creativity, professional training, mentorship, and entrepreneurship support.",
                                },
                                {
                                    q: "How do I join NAF MODEL EMPIRE?",
                                    a: "Contact us through the form above selecting 'Fashion Agency' as your subject. We'll provide information about our recruitment and training process.",
                                },
                            ].map((faq, index) => (
                                <div key={index} className="card bg-white">
                                    <h3 className="text-lg font-bold text-[--dark-navy] mb-2">{faq.q}</h3>
                                    <p className="text-gray-700">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-gradient-to-r from-[--primary-blue] to-[--bright-blue] text-white">
                <div className="container-custom text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
                        We're excited to hear about your vision and help bring it to life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+250798287085" className="btn-primary inline-flex items-center justify-center space-x-2">
                            <Phone className="w-5 h-5" />
                            <span>Call Us Now</span>
                        </a>
                        <a href="mailto:ozoneentertainments1@gmail.com" className="bg-white text-[--primary-blue] hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2">
                            <Mail className="w-5 h-5" />
                            <span>Email Us</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
