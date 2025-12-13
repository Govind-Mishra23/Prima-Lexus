// Dynamic Practice Area Page Component
import { useParams, Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { getPracticeAreaBySlug, practiceAreas } from '../data/practiceAreas';
import Button from '../components/ui/Button';
import { primaryContact } from '../data/offices';
import practiceAreaHeroBg from '../assets/practice_area_hero_bg.png';

const PracticeAreaPage = () => {
    const { slug } = useParams();
    const practiceArea = getPracticeAreaBySlug(slug);

    // 404 handling
    if (!practiceArea) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-olive-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-olive-800 mb-4">Practice Area Not Found</h1>
                    <p className="text-olive-600 mb-8">The practice area you're looking for doesn't exist.</p>
                    <Button to="/practice-areas">View All Practice Areas</Button>
                </div>
            </main>
        );
    }

    const Icon = practiceArea.icon;

    return (
        <main>
            {/* Hero Section with Premium Background */}
            <section
                className="relative py-20 overflow-hidden"
                style={{
                    backgroundImage: `url(${practiceAreaHeroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-olive-900/90 via-olive-900/80 to-olive-900/60"></div>

                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-72 h-72 bg-gold-500 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-400 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-gold-400 mb-4">
                            <Link to="/" className="hover:text-gold-300 transition-colors">Home</Link>
                            <span>/</span>
                            <Link to="/practice-areas" className="hover:text-gold-300 transition-colors">Practice Areas</Link>
                            <span>/</span>
                            <span>{practiceArea.title}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {practiceArea.subtitle}
                        </h1>
                        <p className="text-xl text-olive-200 leading-relaxed">
                            {practiceArea.heroDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content Column */}
                        <div className="lg:col-span-2">
                            {/* Practice Area Icon & Intro */}
                            <div className="flex items-start gap-6 mb-10">
                                <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <Icon className="w-10 h-10 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-olive-800 mb-3">{practiceArea.title}</h2>
                                    <p className="text-olive-600 leading-relaxed">{practiceArea.description}</p>
                                </div>
                            </div>

                            {/* Content Sections */}
                            <div className="space-y-8">
                                {practiceArea.content.map((section, index) => (
                                    <div key={index} className="border-l-4 border-gold-500 pl-6">
                                        <h3 className="text-xl font-bold text-olive-800 mb-3">{section.title}</h3>
                                        <p className="text-olive-600 leading-relaxed">{section.text}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Full Services List */}
                            <div className="mt-12 bg-olive-50 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-olive-800 mb-6">{practiceArea.title} Services</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {practiceArea.fullServices.map((service, index) => (
                                        <div key={index} className="flex items-center gap-3 text-olive-700">
                                            <FaCheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                            {service}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Why Choose Us */}
                            <div className="mt-12">
                                <h3 className="text-xl font-bold text-olive-800 mb-6">Why Choose Prima Lexus for {practiceArea.title}?</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {practiceArea.whyChooseUs.map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 bg-white border border-olive-200 rounded-xl p-4 hover:border-gold-400 transition-colors">
                                            <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <span className="text-gold-600 font-bold text-sm">{index + 1}</span>
                                            </div>
                                            <span className="text-olive-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Contact Form Card */}
                            <div className="bg-white border border-olive-200 rounded-2xl p-6 shadow-lg sticky top-24">
                                <h3 className="text-xl font-bold text-olive-800 mb-6">Get In Touch</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-olive-700 mb-1">Your Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full px-4 py-3 bg-olive-50 border border-olive-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-olive-700 mb-1">Your Email</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full px-4 py-3 bg-olive-50 border border-olive-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-olive-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="Enter your number"
                                            className="w-full px-4 py-3 bg-olive-50 border border-olive-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-olive-700 mb-1">Subject</label>
                                        <input
                                            type="text"
                                            placeholder={practiceArea.title}
                                            defaultValue={practiceArea.title}
                                            className="w-full px-4 py-3 bg-olive-50 border border-olive-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-olive-700 mb-1">Query / Message</label>
                                        <textarea
                                            placeholder="Write your message here..."
                                            rows={4}
                                            className="w-full px-4 py-3 bg-olive-50 border border-olive-200 rounded-lg focus:outline-none focus:border-gold-500 transition-colors resize-none"
                                        ></textarea>
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Send Message
                                        <FaArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </form>

                                {/* Need Legal Help Card */}
                                <div className="mt-6 pt-6 border-t border-olive-200">
                                    <div className="bg-gradient-to-br from-olive-800 to-olive-900 rounded-xl p-5 text-white">
                                        <h4 className="font-bold mb-2">Need any legal help?</h4>
                                        <p className="text-olive-300 text-sm mb-4">Call us 24/7 for legal support</p>
                                        <div className="space-y-3">
                                            <a
                                                href={`tel:${primaryContact.phone[0].replace(/[^0-9+]/g, '')}`}
                                                className="flex items-center gap-3 text-olive-200 hover:text-gold-400 transition-colors"
                                            >
                                                <FaPhone className="w-4 h-4 text-gold-500" />
                                                {primaryContact.phone[0]}
                                            </a>
                                            <a
                                                href={`mailto:${primaryContact.email}`}
                                                className="flex items-center gap-3 text-olive-200 hover:text-gold-400 transition-colors"
                                            >
                                                <FaEnvelope className="w-4 h-4 text-gold-500" />
                                                {primaryContact.email}
                                            </a>
                                            <div className="flex items-center gap-3 text-olive-200">
                                                <FaMapMarkerAlt className="w-4 h-4 text-gold-500" />
                                                Delhi NCR
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Practice Areas */}
            <section className="py-16 bg-olive-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-olive-800 mb-8 text-center">Explore Other Practice Areas</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {practiceAreas
                            .filter(area => area.id !== practiceArea.id)
                            .slice(0, 4)
                            .map((area) => {
                                const AreaIcon = area.icon;
                                return (
                                    <Link
                                        key={area.id}
                                        to={`/practice-areas/${area.slug}`}
                                        className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-br from-olive-700 to-olive-800 rounded-lg flex items-center justify-center mb-4 group-hover:from-gold-500 group-hover:to-gold-600 transition-all">
                                            <AreaIcon className="w-6 h-6 text-gold-400 group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="font-bold text-olive-800 mb-2">{area.title}</h3>
                                        <p className="text-sm text-olive-600 line-clamp-2">{area.description}</p>
                                    </Link>
                                );
                            })}
                    </div>
                    <div className="text-center mt-8">
                        <Button to="/practice-areas" variant="secondary">
                            View All Practice Areas
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-gold-500 to-gold-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Need Expert Legal Assistance?</h2>
                    <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                        Our experienced {practiceArea.title.toLowerCase()} lawyers are ready to help you.
                        Schedule a consultation today.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button to="/contact" variant="white">
                            Book Book Consultation
                        </Button>
                        <a
                            href={`tel:${primaryContact.phone[0].replace(/[^0-9+]/g, '')}`}
                            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                            <FaPhone className="w-4 h-4" />
                            Call Now
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PracticeAreaPage;
