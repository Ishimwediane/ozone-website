import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

export default function EmpoweringHerSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Fixed Background Image with Parallax Effect */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: "url('/images/photo4.jpg')",
                }}
            >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 py-24">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Icon */}
                    <div className="inline-block p-6 bg-[#F39C12] rounded-full shadow-2xl mb-8 animate-fadeInDown">
                        <Heart className="w-16 h-16 text-white" />
                    </div>

                    {/* Section Label */}
                    <div className="mb-4">
                        <span className="text-xs font-semibold tracking-[0.4em] uppercase text-[#F39C12]">
                            Special Initiative
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight animate-fadeInUp">
                        Empowering Her
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                        Dedicated initiatives and programs for empowering women through creativity, training,
                        and professional opportunities. We believe in nurturing talent and providing platforms
                        for women to shine in the entertainment industry.
                    </p>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                            <div className="text-3xl font-bold text-[#F39C12] mb-2">100+</div>
                            <div className="text-sm text-white font-medium">Women Trained</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                            <div className="text-3xl font-bold text-[#F39C12] mb-2">50+</div>
                            <div className="text-sm text-white font-medium">Success Stories</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                            <div className="text-3xl font-bold text-[#F39C12] mb-2">5+</div>
                            <div className="text-sm text-white font-medium">Years Impact</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center space-x-2 bg-[#F39C12] hover:bg-[#E67E22] text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            <span>Learn About Our Mission</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-10 py-4 rounded-full border-2 border-white/30 transition-all duration-300 hover:scale-105"
                        >
                            <span>Get Involved</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
        </section>
    );
}
