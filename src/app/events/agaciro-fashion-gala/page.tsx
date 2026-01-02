import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { agaciroEditions } from "@/data/editions";

export default function AgaciroFashionGalaPage() {
    return (
        <div className="min-h-screen bg-[var(--bg-primary)]">
            {/* Hero Section with Video */}
            <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover object-top opacity-70 transition-all duration-1000"
                    >
                        <source src="/images/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50"></div>
                </div>

                <div className="container-custom relative z-10 text-center">
                    <div className="inline-block mb-4">
                        <span className="text-xs font-semibold tracking-[0.4em] uppercase text-[#F39C12]">
                            Signature Event
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 animate-fadeInDown">
                        Agaciro Fashion Gala
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fadeInUp">
                        Rwanda's premier fashion event celebrating culture, creativity, and style
                    </p>
                </div>
            </section>

            {/* About the Event */}
            <section className="section">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="text-xs font-semibold tracking-[0.4em] uppercase text-[#F39C12]">
                                About the Gala
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--text-primary)] mb-6">
                            A Celebration of Fashion Excellence
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                            The Agaciro Fashion Gala is an annual celebration that brings together designers, models, fashion enthusiasts, and industry professionals for an unforgettable evening of style, culture, and creativity. Each edition showcases the best of Rwandan and African fashion, creating a platform for emerging talent and established designers alike.
                        </p>
                    </div>

                    {/* Overall Stats */}
                    <div className="grid md:grid-cols-4 gap-8 mb-16">
                        <div className="text-center bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-8 hover:border-[#F39C12] transition-all duration-300">
                            <div className="text-4xl md:text-5xl font-serif font-bold text-[#F39C12] mb-2">
                                {agaciroEditions.length}
                            </div>
                            <div className="text-[var(--text-primary)] font-medium mb-1">Editions</div>
                            <div className="text-[var(--text-tertiary)] text-sm">And Counting</div>
                        </div>
                        <div className="text-center bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-8 hover:border-[#F39C12] transition-all duration-300">
                            <div className="text-4xl md:text-5xl font-serif font-bold text-[#F39C12] mb-2">
                                1000+
                            </div>
                            <div className="text-[var(--text-primary)] font-medium mb-1">Total Attendees</div>
                            <div className="text-[var(--text-tertiary)] text-sm">Across All Editions</div>
                        </div>
                        <div className="text-center bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-8 hover:border-[#F39C12] transition-all duration-300">
                            <div className="text-4xl md:text-5xl font-serif font-bold text-[#F39C12] mb-2">
                                50+
                            </div>
                            <div className="text-[var(--text-primary)] font-medium mb-1">Designers</div>
                            <div className="text-[var(--text-tertiary)] text-sm">Featured</div>
                        </div>
                        <div className="text-center bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-8 hover:border-[#F39C12] transition-all duration-300">
                            <div className="text-4xl md:text-5xl font-serif font-bold text-[#F39C12] mb-2">
                                100+
                            </div>
                            <div className="text-[var(--text-primary)] font-medium mb-1">Models</div>
                            <div className="text-[var(--text-tertiary)] text-sm">On Runway</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Editions Timeline */}
            <section className="section bg-[var(--bg-secondary)]">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="text-xs font-semibold tracking-[0.4em] uppercase text-[#F39C12]">
                                Event History
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--text-primary)] mb-4">
                            Past & Upcoming Editions
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {agaciroEditions.map((edition, index) => (
                            <Link
                                key={edition.id}
                                href={`/events/agaciro-fashion-gala/${edition.id}`}
                                className="group block"
                            >
                                <div className="grid lg:grid-cols-2 gap-8 bg-[var(--bg-primary)] border-2 border-[var(--border-color)] rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#F39C12] hover:shadow-xl hover:shadow-[#F39C12]/10">
                                    {/* Image */}
                                    <div className={`relative h-[300px] lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                        <Image
                                            src={edition.videos[0].thumbnail}
                                            alt={edition.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        <div className="absolute top-6 left-6 bg-[#F39C12] text-white px-4 py-2 rounded-full font-semibold">
                                            Edition {edition.edition}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-[var(--text-primary)] mb-4 group-hover:text-[#F39C12] transition-colors duration-300">
                                            {edition.theme}
                                        </h3>

                                        <div className="flex flex-wrap gap-4 mb-6">
                                            <div className="flex items-center space-x-2 text-[var(--text-secondary)]">
                                                <Calendar className="w-5 h-5 text-[#F39C12]" />
                                                <span>{edition.date}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-[var(--text-secondary)]">
                                                <MapPin className="w-5 h-5 text-[#F39C12]" />
                                                <span>{edition.venue}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-[var(--text-secondary)]">
                                                <Users className="w-5 h-5 text-[#F39C12]" />
                                                <span>{edition.stats.attendees}+ Attendees</span>
                                            </div>
                                        </div>

                                        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                                            {edition.description}
                                        </p>

                                        <div className="inline-flex items-center space-x-2 text-[#F39C12] font-semibold group-hover:space-x-3 transition-all duration-300">
                                            <span>View Edition Details</span>
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container-custom">
                    <div className="bg-gradient-to-r from-[#F39C12] to-[#E67E22] rounded-3xl p-12 md:p-16 text-center text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Be Part of the Next Edition
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                            Stay updated on upcoming editions and be the first to know about tickets, designer applications, and event details
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center space-x-2 bg-white text-[#F39C12] hover:bg-gray-100 font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            <span>Get in Touch</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
