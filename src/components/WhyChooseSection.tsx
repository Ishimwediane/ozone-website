import { Award, Heart, TrendingUp, CheckCircle } from "lucide-react";

export default function WhyChooseSection() {
    const whyChooseUs = [
        {
            icon: <Award className="w-6 h-6" />,
            title: "Professional Excellence",
            description: "Years of experience delivering top-tier entertainment services.",
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Empowering Her",
            description: "Dedicated programs for women empowerment through creativity.",
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Growth Focused",
            description: "We help artists and models reach their full potential.",
        },
        {
            icon: <CheckCircle className="w-6 h-6" />,
            title: "Proven Track Record",
            description: "Successful events, films, and artist placements.",
        },
    ];

    return (
        <section className="section bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold text-[--dark-navy] mb-4">
                        Why Choose <span className="gradient-text">Ozone</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Excellence, creativity, and empowerment in everything we do
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyChooseUs.map((item, index) => (
                        <div
                            key={index}
                            className="text-center space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-full bg-[--orange-accent]/10 flex items-center justify-center text-[--orange-accent] mx-auto">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-[--dark-navy]">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
