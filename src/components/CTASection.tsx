import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="section bg-gradient-to-r from-[--primary-blue] to-[--bright-blue] text-white">
            <div className="container-custom text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready to Bring Your Vision to Life?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
                    Whether you're planning an event, need professional photography, or looking for artist management, we're here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="btn-primary inline-flex items-center justify-center space-x-2">
                        <span>Get in Touch</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link href="/portfolio" className="bg-white text-[--primary-blue] hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2">
                        <span>View Our Work</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
