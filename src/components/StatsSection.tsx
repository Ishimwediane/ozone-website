export default function StatsSection() {
    const stats = [
        { number: "10+", label: "Projects Completed" },
        { number: "3+", label: "Major Events" },
        { number: "20+", label: "Models Trained" },
        { number: "100%", label: "Client Satisfaction" },
    ];

    return (
        <section className="section bg-gradient-hero text-white">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-5xl md:text-6xl font-semibold text-[--orange-accent] mb-2">
                                {stat.number}
                            </div>
                            <div className="text-lg text-gray-200">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
