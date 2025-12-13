// About Page
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import CallToAction from '../components/sections/CallToAction';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/ui/SEO';
import { FaCheckCircle, FaBalanceScale, FaEye, FaHeart, FaLightbulb, FaUsers } from 'react-icons/fa';
import aboutVisionBg from '../assets/about_vision_bg.png';
import aboutHeroBg from '../assets/about_hero_bg.png';

const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '1000+', label: 'Cases Handled' },
    { value: '7', label: 'Office Locations' },
    { value: '12+', label: 'Practice Areas' },
];

const values = [
    { icon: FaBalanceScale, title: 'Justice', description: 'Committed to fair and just outcomes for all our clients.' },
    { icon: FaHeart, title: 'Integrity', description: 'Upholding the highest ethical standards in all our dealings.' },
    { icon: FaLightbulb, title: 'Excellence', description: 'Delivering exceptional legal services with expertise.' },
    { icon: FaUsers, title: 'Client Focus', description: 'Your success is our priority throughout the legal process.' },
];

const About = () => {
    return (
        <main>
            <SEO
                title="About Us"
                description="Learn about Prima Lexus - A foremost full service law firm with 15+ years of excellence. Led by Advocate A K Tiwari, Standing Counsel to Government of India."
                keywords="about prima lexus, law firm history, advocate a k tiwari, legal expertise delhi"
            />
            <Breadcrumbs />
            {/* Hero Section with Premium Background */}
            <section
                className="relative py-24 overflow-hidden"
                style={{
                    backgroundImage: `url(${aboutHeroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-olive-900/90 via-olive-900/80 to-olive-900/60"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Prima Lexus</h1>
                        <p className="text-xl text-olive-200">
                            A foremost full service law firm providing comprehensive legal solutions across India
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image Side */}
                        <div className="relative">
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                                <div
                                    className="aspect-square relative flex items-center justify-center"
                                    style={{
                                        backgroundImage: `url(${aboutVisionBg})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                >
                                    {/* Dark overlay for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-olive-900/70 via-olive-900/60 to-olive-900/80"></div>

                                    <div className="text-center p-8 relative z-10">
                                        <FaEye className="w-20 h-20 mx-auto mb-6 text-gold-500" />
                                        <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
                                        <p className="text-olive-200 text-lg">
                                            To provide the best legal service across all courts in India with dynamic vision, insight and foresight.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-500 rounded-2xl -z-10"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-olive-100 rounded-2xl -z-10"></div>
                        </div>

                        {/* Content Side */}
                        <div>
                            <span className="inline-block text-amber-600 font-semibold mb-4">Who We Are</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                                Legal Excellence Since Establishment
                            </h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    Prima Lexus is a foremost full service law firm practicing and providing legal assistance
                                    and solutions to clients in all areas of practice. The firm is recommended for its legal
                                    expertise and skill of its extremely professional team of specialists, attorneys & consultants.
                                </p>
                                <p>
                                    A well team of professionals from diverse practice areas work in synchronization and ensures
                                    that each and every client is provided the best and most comprehensive service. Prima Lexus
                                    has been established with a vision to provide best Service in various Session & District
                                    courts at Delhi & NCR, Supreme Court of India and all High Courts of India.
                                </p>
                                <p>
                                    It provides assistance in Arbitration cases and Mediation cases. Our Law Firm has holistic
                                    approach towards our clients with respect of any law related queries. Prima Lexus have
                                    dynamic vision, insight and foresight. Our Law Firm always has an advisory board -
                                    a "Think Tank" for our client's queries and for cases.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <p className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">{stat.value}</p>
                                <p className="text-slate-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Our Core Values"
                        subtitle="The principles that guide our practice and define our commitment to clients."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-amber-50 transition-colors">
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{value.title}</h3>
                                <p className="text-slate-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Legal Services</h2>
                        <p className="text-slate-300 text-lg">
                            We provide consultancy for all types of Legal Matters & Consultancy including:
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {[
                            "Civil & Criminal Cases",
                            "Divorce & Family Disputes",
                            "Property & Real Estate",
                            "Corporate & Business Law",
                            "Consumer Protection",
                            "Cyber Laws",
                            "Intellectual Property",
                            "Arbitration & Mediation",
                            "Documentation Services"
                        ].map((service, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-lg">
                                <FaCheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                                <span>{service}</span>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Button to="/practice-areas" variant="white">
                            View All Practice Areas
                        </Button>
                    </div>
                </div>
            </section>

            <CallToAction />
        </main>
    );
};

export default About;
