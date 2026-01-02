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
        <section className="section section-light">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[--dark-navy] mb-4">
                        Client <span className="gradient-text">Testimonials</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Hear what our clients say about working with us
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="card bg-white"
                        >
                            <div className="flex space-x-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-[--orange-accent] text-[--orange-accent]" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                            <div>
                                <div className="font-bold text-[--dark-navy]">{testimonial.name}</div>
                                <div className="text-sm text-gray-500">{testimonial.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
