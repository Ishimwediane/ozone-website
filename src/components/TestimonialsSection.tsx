import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Event Organizer",
            content: "Ozone Entertainment made our corporate event absolutely spectacular. Professional, creative, and reliable!",
            rating: 5,
        },
        {
            name: "David Mugisha",
            role: "Film Producer",
            content: "Their film production quality is outstanding. They brought our vision to life perfectly.",
            rating: 5,
        },
        {
            name: "Grace Uwase",
            role: "Model",
            content: "The Empowering Her program changed my life. Professional training and amazing opportunities!",
            rating: 5,
        },
    ];

    return (
        <section className="section bg-[var(--bg-primary)]">
            <div className="container-custom">
                <ScrollReveal animation="fadeInDown" className="text-center mb-4">
                    {/* Section Header */}
                    <ScrollReveal animation="fadeInDown" className="mini-header">
                        <h2>Testimonials</h2>
                    </ScrollReveal>
                    <p className="text-sm text-[var(--text-secondary)] max-w-2xl mx-auto opacity-80 leading-relaxed">
                        Discover what industry leaders and creative professionals say about their experience with Ozone Entertainment.
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-12">
                    {testimonials.map((testimonial, index) => (
                        <ScrollReveal
                            key={index}
                            animation="fadeInUp"
                            delay={index * 0.1}
                            className="h-full"
                        >
                            <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-3xl p-8 transition-all duration-700 hover:border-[var(--orange-accent)] hover:shadow-2xl hover:shadow-[var(--orange-accent)]/5 hover:-translate-y-3 h-full">
                                <div className="flex space-x-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-[var(--orange-accent)] text-[var(--orange-accent)] opacity-80" />
                                    ))}
                                </div>
                                <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed opacity-90 h-16 overflow-hidden">"{testimonial.content}"</p>
                                <div className="border-t border-[var(--border-color)] pt-6">
                                    <div className="font-semibold text-base text-[var(--text-primary)] mb-1 lowercase tracking-wide">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--orange-accent)] opacity-70">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
