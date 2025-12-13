// Footer component with modern premium olive-gold styling
import { Link } from 'react-router-dom';
import { useConsultation } from '../../context/ConsultationContext';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaArrowRight, FaBalanceScale } from 'react-icons/fa';
import { primaryContact } from '../../data/offices';
import logoImage from '../../assets/logo.png';

const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Our Team', path: '/team' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
];

const practiceLinks = [
    { name: 'Civil Laws', path: '/practice-areas/civil-laws' },
    { name: 'Criminal Laws', path: '/practice-areas/criminal-laws' },
    { name: 'Family Laws', path: '/practice-areas/family-laws' },
    { name: 'Property Matters', path: '/practice-areas/property-lawyer' },
    { name: 'Corporate Laws', path: '/practice-areas/corporate-law' },
    { name: 'Court Marriage', path: '/services/court-marriage' },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { openModal } = useConsultation();

    return (
        <footer className="relative overflow-hidden">
            {/* Top CTA Section */}
            <div className="bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                                <FaBalanceScale className="w-7 h-7 text-white" />
                            </div>
                            <div className="text-white">
                                <h3 className="text-xl md:text-2xl font-bold">Need Legal Assistance?</h3>
                                <p className="text-white/90">Get a consultation with our expert lawyers</p>
                            </div>
                        </div>
                        <button
                            onClick={openModal}
                            className="inline-flex items-center gap-2 bg-white text-gold-600 px-8 py-3 rounded-full font-semibold hover:bg-olive-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Book Consultation
                            <FaArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="bg-gradient-to-b from-olive-900 to-olive-950 text-white relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-gold-500/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

                <div className="container mx-auto px-4 py-16 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
                        {/* Company Info - 4 columns */}
                        <div className="lg:col-span-4">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center shadow-lg shadow-gold-500/20">
                                    <img src={logoImage} alt="Prima Lexus Logo" className="w-10 h-10 object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gold-300 bg-clip-text text-transparent">Prima Lexus</h3>
                                    <p className="text-sm text-gold-400">Advocates & Consultants</p>
                                </div>
                            </div>
                            <p className="text-olive-300 leading-relaxed mb-8">
                                A foremost full service law firm providing legal assistance and solutions across India with expertise in all areas of practice. Justice, Integrity, Excellence.
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-3">
                                {[
                                    { icon: FaFacebook, href: '#', label: 'Facebook' },
                                    { icon: FaTwitter, href: '#', label: 'Twitter' },
                                    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
                                    { icon: FaInstagram, href: '#', label: 'Instagram' },
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-11 h-11 bg-olive-800/50 backdrop-blur-sm border border-olive-700 rounded-xl flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all duration-300 group"
                                    >
                                        <social.icon className="w-5 h-5 text-olive-300 group-hover:text-white transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links - 2 columns */}
                        <div className="lg:col-span-2">
                            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <span className="w-2 h-6 bg-gold-500 rounded-full"></span>
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className="text-olive-300 hover:text-gold-400 transition-colors flex items-center gap-2 group"
                                        >
                                            <FaArrowRight className="w-3 h-3 text-gold-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Practice Areas - 3 columns */}
                        <div className="lg:col-span-3">
                            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <span className="w-2 h-6 bg-gold-500 rounded-full"></span>
                                Practice Areas
                            </h4>
                            <ul className="space-y-3">
                                {practiceLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.path}
                                            className="text-olive-300 hover:text-gold-400 transition-colors flex items-center gap-2 group"
                                        >
                                            <FaArrowRight className="w-3 h-3 text-gold-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info - 3 columns */}
                        <div className="lg:col-span-3">
                            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <span className="w-2 h-6 bg-gold-500 rounded-full"></span>
                                Get In Touch
                            </h4>
                            <ul className="space-y-5">
                                <li>
                                    <a
                                        href={`tel:${primaryContact.phone[0].replace(/[^0-9+]/g, '')}`}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 transition-colors">
                                            <FaPhone className="w-4 h-4 text-gold-500 group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="text-olive-300 group-hover:text-gold-400 transition-colors">
                                            <p className="font-semibold">{primaryContact.phone[0]}</p>
                                            {primaryContact.phone[1] && <p className="text-sm">{primaryContact.phone[1]}</p>}
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`mailto:${primaryContact.email}`}
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 transition-colors">
                                            <FaEnvelope className="w-4 h-4 text-gold-500 group-hover:text-white transition-colors" />
                                        </div>
                                        <p className="text-olive-300 group-hover:text-gold-400 transition-colors">{primaryContact.email}</p>
                                    </a>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaMapMarkerAlt className="w-4 h-4 text-gold-500" />
                                    </div>
                                    <p className="text-olive-300 text-sm leading-relaxed">{primaryContact.address}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-olive-800/50">
                    <div className="container mx-auto px-4 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                            <p className="text-olive-400">
                                © {currentYear} <span className="text-gold-400 font-medium">Prima Lexus</span>. All rights reserved.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 text-olive-400">
                                <Link to="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
                                <span className="hidden md:inline text-olive-700">•</span>
                                <Link to="/terms" className="hover:text-gold-400 transition-colors">Terms of Service</Link>
                                <span className="hidden md:inline text-olive-700">•</span>
                                <Link to="/disclaimer" className="hover:text-gold-400 transition-colors">Disclaimer</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
