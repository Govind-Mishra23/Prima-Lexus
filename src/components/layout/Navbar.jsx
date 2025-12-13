// Navbar component with responsive mobile menu and consultation modal
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import Button from '../ui/Button';
import { useConsultation } from '../../context/ConsultationContext';
import { practiceAreas } from '../../data/practiceAreas';
import logoImage from '../../assets/logo.png';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about', hasDropdown: true, dropdownType: 'about' },
    { name: 'Practice Areas', path: '/practice-areas', hasDropdown: true, dropdownType: 'practice' },
    { name: 'Our Services', path: '/services', hasDropdown: true, dropdownType: 'services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
];

const aboutDropdownItems = [
    { name: 'About Our Firm', path: '/about' },
    { name: 'Our Team', path: '/team' },
];

const servicesDropdownItems = [
    { name: 'Child Custody Lawyer', path: '/services/child-custody' },
    { name: 'Legal Documentation', path: '/services/legal-documentation' },
    { name: 'Debt Recovery Tribunal', path: '/services/debt-recovery' },
    { name: 'Property Lawyer', path: '/services/property-lawyer' },
    { name: 'Delhi High Court Lawyer', path: '/services/delhi-high-court' },
    { name: 'Supreme Court Lawyer', path: '/services/supreme-court' },
    { name: 'RERA Matters', path: '/services/rera-matters' },
    { name: 'Consumer Disputes', path: '/services/consumer-disputes' },
    { name: 'Cyber Law Cases', path: '/services/cyber-law' },
    { name: 'Court Marriage Registration', path: '/services/court-marriage' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
    const { openModal } = useConsultation();
    const location = useLocation();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
        setMobileDropdownOpen(null);
    }, [location]);

    const isLinkActive = (link) => {
        if (link.dropdownType === 'about') {
            return location.pathname === '/about' || location.pathname === '/team';
        }
        if (link.dropdownType === 'practice') {
            return location.pathname.startsWith('/practice-areas');
        }
        if (link.dropdownType === 'services') {
            return location.pathname.startsWith('/services');
        }
        return location.pathname === link.path;
    };

    const renderDropdown = (link) => {
        if (link.dropdownType === 'about') {
            return (
                <div className={`
                    absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-2xl border border-olive-100 overflow-hidden
                    transition-all duration-200 origin-top
                    ${activeDropdown === 'about' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
                `}>
                    <div className="py-2">
                        {aboutDropdownItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="block px-4 py-2.5 text-olive-700 hover:text-gold-600 hover:bg-gold-50/50 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            );
        }

        if (link.dropdownType === 'practice') {
            return (
                <div className={`
                    absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-olive-100 overflow-hidden
                    transition-all duration-200 origin-top
                    ${activeDropdown === 'practice' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
                `}>
                    <div className="py-2 max-h-80 overflow-y-auto">
                        <Link
                            to="/practice-areas"
                            className="block px-4 py-2 text-gold-600 font-semibold hover:bg-gold-50 transition-colors border-b border-olive-100"
                        >
                            View All Practice Areas
                        </Link>
                        {practiceAreas.map((area) => (
                            <Link
                                key={area.id}
                                to={`/practice-areas/${area.slug}`}
                                className="block px-4 py-2.5 text-olive-700 hover:text-gold-600 hover:bg-gold-50/50 transition-colors"
                            >
                                {area.title}
                            </Link>
                        ))}
                    </div>
                </div>
            );
        }

        if (link.dropdownType === 'services') {
            return (
                <div className={`
                    absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-olive-100 overflow-hidden
                    transition-all duration-200 origin-top
                    ${activeDropdown === 'services' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
                `}>
                    <div className="py-2 max-h-80 overflow-y-auto">
                        {servicesDropdownItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="block px-4 py-2.5 text-olive-700 hover:text-gold-600 hover:bg-gold-50/50 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            );
        }

        return null;
    };

    const renderMobileDropdown = (link) => {
        if (link.dropdownType === 'about') {
            return (
                <div className={`overflow-hidden transition-all duration-300 ${mobileDropdownOpen === 'about' ? 'max-h-48' : 'max-h-0'}`}>
                    <div className="pl-4 py-2 space-y-1 border-l-2 border-gold-500 ml-4">
                        {aboutDropdownItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="block px-4 py-2 text-olive-600 hover:text-gold-600 hover:bg-gold-50/50 rounded-lg transition-colors text-sm"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            );
        }

        if (link.dropdownType === 'practice') {
            return (
                <div className={`overflow-hidden transition-all duration-300 ${mobileDropdownOpen === 'practice' ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="pl-4 py-2 space-y-1 border-l-2 border-gold-500 ml-4">
                        <Link to="/practice-areas" className="block px-4 py-2 text-gold-600 font-semibold hover:bg-gold-50 rounded-lg transition-colors">
                            View All
                        </Link>
                        {practiceAreas.slice(0, 6).map((area) => (
                            <Link
                                key={area.id}
                                to={`/practice-areas/${area.slug}`}
                                className="block px-4 py-2 text-olive-600 hover:text-gold-600 hover:bg-gold-50/50 rounded-lg transition-colors text-sm"
                            >
                                {area.title}
                            </Link>
                        ))}
                        <Link to="/practice-areas" className="block px-4 py-2 text-olive-500 hover:text-gold-600 text-sm">
                            + More...
                        </Link>
                    </div>
                </div>
            );
        }

        if (link.dropdownType === 'services') {
            return (
                <div className={`overflow-hidden transition-all duration-300 ${mobileDropdownOpen === 'services' ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="pl-4 py-2 space-y-1 border-l-2 border-gold-500 ml-4">
                        {servicesDropdownItems.slice(0, 6).map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="block px-4 py-2 text-olive-600 hover:text-gold-600 hover:bg-gold-50/50 rounded-lg transition-colors text-sm"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <span className="block px-4 py-2 text-olive-500 text-sm">
                            + More...
                        </span>
                    </div>
                </div>
            );
        }

        return null;
    };

    const handleBookConsultation = () => {
        setIsOpen(false); // Close mobile menu if open
        openModal();
    };

    return (
        <>
            {/* Top Bar */}
            <div className="bg-olive-800 text-white py-2 hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                    <div className="flex items-center gap-6">
                        <a href="tel:+918285858505" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                            <FaPhone className="w-3 h-3" />
                            +91 8285858505
                        </a>
                        <a href="mailto:primalexus@primalexus.com" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                            <FaEnvelope className="w-3 h-3" />
                            primalexus@primalexus.com
                        </a>
                    </div>
                    <div className="text-olive-300">
                        Full Service Law Firm | Delhi NCR | Pan India
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'}`}>
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3">
                            <img src={logoImage} alt="Prima Lexus Logo" className="w-12 h-12 rounded-lg object-cover" />
                            <div>
                                <h1 className="text-xl font-bold text-olive-800">Prima Lexus</h1>
                                <p className="text-xs text-gold-600">Advocates & Consultants</p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
                            {navLinks.map((link) => (
                                link.hasDropdown ? (
                                    <div
                                        key={link.path}
                                        className="relative"
                                        onMouseEnter={() => setActiveDropdown(link.dropdownType)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <button
                                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1
                                                ${isLinkActive(link) ? 'text-gold-600 bg-gold-50' : 'text-olive-700 hover:text-gold-600 hover:bg-olive-50'}`}
                                        >
                                            {link.name}
                                            <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === link.dropdownType ? 'rotate-180' : ''}`} />
                                        </button>
                                        {renderDropdown(link)}
                                    </div>
                                ) : (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200
                                            ${location.pathname === link.path ? 'text-gold-600 bg-gold-50' : 'text-olive-700 hover:text-gold-600 hover:bg-olive-50'}`}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            ))}
                        </div>

                        {/* CTA Button - Opens Modal */}
                        <div className="hidden lg:block">
                            <button
                                onClick={handleBookConsultation}
                                className="px-6 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                Book Consultation
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-olive-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <FaTimes className="w-6 h-6 text-olive-700" /> : <FaBars className="w-6 h-6 text-olive-700" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden fixed inset-x-0 top-20 bg-white shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="container mx-auto px-4 py-4 max-h-[70vh] overflow-y-auto">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                link.hasDropdown ? (
                                    <div key={link.path}>
                                        <button
                                            onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.dropdownType ? null : link.dropdownType)}
                                            className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-between
                                                ${isLinkActive(link) ? 'text-gold-600 bg-gold-50' : 'text-olive-700 hover:text-gold-600 hover:bg-olive-50'}`}
                                        >
                                            {link.name}
                                            <FaChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen === link.dropdownType ? 'rotate-180' : ''}`} />
                                        </button>
                                        {renderMobileDropdown(link)}
                                    </div>
                                ) : (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`px-4 py-3 rounded-lg font-medium transition-all duration-200
                                            ${location.pathname === link.path ? 'text-gold-600 bg-gold-50' : 'text-olive-700 hover:text-gold-600 hover:bg-olive-50'}`}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            ))}
                            <div className="pt-4 border-t border-olive-100 mt-2">
                                <button
                                    onClick={handleBookConsultation}
                                    className="w-full py-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold rounded-lg transition-all duration-200"
                                >
                                    Book Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
