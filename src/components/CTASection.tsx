import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="section bg-[#1A1A1A]">
            <div className="container-custom text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Ready to Bring Your Vision to Life?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-400">
                    Whether you're planning an event, need professional photography, or looking for artist management, we're here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center space-x-2 bg-[#F39C12] hover:bg-[#E67E22] text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <span>Get in Touch</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-10 py-4 rounded-full border-2 border-white/30 transition-all duration-300 hover:scale-105"
                    >
                        <span>View Our Work</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
