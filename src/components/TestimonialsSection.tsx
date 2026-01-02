import { Star } from "lucide-react";

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
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                        Client <span className="text-[#F39C12]">Testimonials</span>
                    </h2>
                    <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Hear what our clients say about working with us
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-8 transition-all duration-500 hover:border-[#F39C12] hover:shadow-xl hover:shadow-[#F39C12]/10 hover:-translate-y-2"
                        >
                            <div className="flex space-x-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-[#F39C12] text-[#F39C12]" />
                                ))}
                            </div>
                            <p className="text-[var(--text-secondary)] mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                            <div>
                                <div className="font-bold text-[var(--text-primary)]">{testimonial.name}</div>
                                <div className="text-sm text-[var(--text-tertiary)]">{testimonial.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
