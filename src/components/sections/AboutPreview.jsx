// About Preview section with premium olive-gold styling
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import aboutImage from '../../assets/image.png';

const features = [
    "Pan-India presence with 7 strategic office locations",
    "Supreme Court, High Courts & District Courts",
    "Expert team of Advocates & Consultants",
    "Holistic approach to all legal matters"
];

const AboutPreview = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image/Visual Side */}
                    <div className="relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-olive-800">
                            <img
                                src={aboutImage}
                                alt="Prima Lexus - Advocates & Consultants"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-500 rounded-2xl -z-10"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-olive-100 rounded-2xl -z-10"></div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <span className="inline-block text-gold-600 font-semibold mb-4">About Our Firm</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-olive-800 mb-6">
                            A Trusted Name in{' '}
                            <span className="text-gold-600">Legal Excellence</span>
                        </h2>
                        <p className="text-olive-600 text-lg leading-relaxed mb-6">
                            Prima Lexus is a foremost full service law firm practicing and providing legal assistance
                            and solutions to clients in all areas of practice. The firm is recommended for its legal
                            expertise and skill of its extremely professional team of specialists, attorneys & consultants.
                        </p>
                        <p className="text-olive-600 leading-relaxed mb-8">
                            Our well-coordinated team of professionals from diverse practice areas work in synchronization,
                            ensuring that each client receives the best and most comprehensive service with our dynamic
                            vision, insight, and foresight.
                        </p>

                        {/* Features list */}
                        <ul className="space-y-3 mb-8">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3 text-olive-700">
                                    <FaCheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Button to="/about">
                            Learn More About Us
                            <FaArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
