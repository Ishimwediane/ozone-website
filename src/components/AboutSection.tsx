import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
            <div className="w-full">
                <div className="grid lg:grid-cols-2 gap-0 items-center">
                    {/* Left Side - Image (No padding, extends to edge) */}
                    <div className="relative h-[500px] lg:h-[700px] animate-fadeInLeft">
                        <div className="relative h-full overflow-hidden">
                            <Image
                                src="/images/photo3.jpg"
                                alt="Ozone Entertainment"
                                fill
                                className="object-cover"
                            />
                            {/* Dark overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30"></div>
                        </div>
                    </div>

                    {/* Right Side - Content with dark background */}
                    <div className="bg-[#2D2D2D] h-[500px] lg:h-[700px] flex items-center px-8 md:px-12 lg:px-16 animate-fadeInRight">
                        <div className="w-full">
                            {/* Section Label */}
                            <div className="inline-block mb-4">
                                <span className="text-xs font-semibold tracking-[0.4em] uppercase text-gray-400">
                                    FUN FACTS
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                                Ozone In Big Record <br />
                                Of Success.
                            </h2>

                            {/* Description */}
                            <p className="text-base text-gray-300 mb-12 leading-relaxed max-w-lg">
                                We are a leading entertainment company dedicated to creating unforgettable experiences.
                                From event organization to fashion, film production, and artist management, we bring
                                creativity and passion to every project.
                            </p>

                            {/* Statistics - Creative Staggered Layout */}
                            <div className="space-y-4">
                                {/* First Stat - Left aligned */}
                                <div
                                    className="animate-scaleIn"
                                    style={{ animationDelay: '0s' }}
                                >
                                    <div className="text-5xl md:text-6xl font-serif font-bold text-[#F39C12] mb-2">
                                        500+
                                    </div>
                                    <div className="text-sm font-medium text-white">
                                        Projects
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        Successfully Completed
                                    </div>
                                </div>

                                {/* Second Stat - Center/Right aligned */}
                                <div
                                    className="ml-auto max-w-[200px] animate-scaleIn"
                                    style={{ animationDelay: '0.1s' }}
                                >
                                    <div className="text-5xl md:text-6xl font-serif font-bold text-[#F39C12] mb-2">
                                        10k+
                                    </div>
                                    <div className="text-sm font-medium text-white">
                                        Happy Clients
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        Across Industries
                                    </div>
                                </div>

                                {/* Third Stat - Left aligned */}
                                <div
                                    className="animate-scaleIn"
                                    style={{ animationDelay: '0.2s' }}
                                >
                                    <div className="text-5xl md:text-6xl font-serif font-bold text-[#F39C12] mb-2">
                                        15+
                                    </div>
                                    <div className="text-sm font-medium text-white">
                                        Years
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        Of Excellence
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
