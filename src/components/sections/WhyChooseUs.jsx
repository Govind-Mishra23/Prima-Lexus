// Why Choose Us section - Modern minimal design
import SectionTitle from '../ui/SectionTitle';
import { FaShieldAlt, FaUserTie, FaClock, FaHandshake, FaGavel, FaMapMarkerAlt } from 'react-icons/fa';

const reasons = [
    {
        icon: FaShieldAlt,
        title: "Proven Track Record",
        description: "1000+ cases successfully handled with consistent results."
    },
    {
        icon: FaUserTie,
        title: "Expert Legal Team",
        description: "Led by Standing Counsel to Government of India."
    },
    {
        icon: FaClock,
        title: "Swift Resolution",
        description: "Efficient case management, minimizing delays."
    },
    {
        icon: FaHandshake,
        title: "Client-First Approach",
        description: "Personalized attention at every step of your case."
    },
    {
        icon: FaGavel,
        title: "All Courts Covered",
        description: "District Courts to Supreme Court representation."
    },
    {
        icon: FaMapMarkerAlt,
        title: "Pan-India Presence",
        description: "7 offices across Delhi NCR, Mumbai & more."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-stone-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-olive-800 mb-3">
                        Why Choose Us
                    </h2>
                    <p className="text-olive-600 max-w-xl mx-auto">
                        Experience and integrity that makes the difference
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-white p-5 rounded-xl text-center hover:shadow-md transition-shadow duration-200"
                        >
                            <div className="w-11 h-11 bg-olive-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                                <reason.icon className="w-5 h-5 text-gold-400" />
                            </div>
                            <h3 className="text-sm font-semibold text-olive-800 mb-1.5">{reason.title}</h3>
                            <p className="text-xs text-olive-500 leading-relaxed">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
