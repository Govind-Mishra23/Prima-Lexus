// Contact Page - Premium Design
import SectionTitle from '../components/ui/SectionTitle';
import { LocationCard, ContactInfoCard } from '../components/ui/Card';
import ConsultationForm from '../components/sections/ConsultationForm';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/ui/SEO';
import { offices, primaryContact } from '../data/offices';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import heroBackground from '../assets/contact_hero_bg.png';

const Contact = () => {
    const headOffice = offices.find(o => o.isHeadOffice);
    const otherOffices = offices.filter(o => !o.isHeadOffice);

    return (
        <main>
            <SEO
                title="Contact Us"
                description="Contact Prima Lexus for legal consultation. Visit our offices in Delhi NCR, Mumbai, Patna, Dehradun. Call +91-8285858505 or email primalexus@primalexus.com"
                keywords="contact prima lexus, book consultation, lawyer phone number delhi, legal help india"
            />
            <Breadcrumbs />
            {/* Hero Section with Premium Background */}
            <section
                className="relative py-32 min-h-[400px] flex items-center"
                style={{
                    backgroundImage: `url(${heroBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-gold-400 text-sm md:text-base font-medium mb-4 tracking-wide">
                            Welcome to Prima Lexus
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
                            Contact Us
                        </h1>
                        <p className="text-lg md:text-xl text-stone-200">
                            Get in touch with our legal experts for a consultation
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Contact Bar */}
            <section className="py-12 bg-gradient-to-r from-gold-500 to-gold-600">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex items-center justify-center gap-4 text-white">
                            <FaPhone className="w-8 h-8" />
                            <div>
                                <p className="text-sm text-white/80">Call Us</p>
                                <a href={`tel:${primaryContact.phone[0].replace(/[^0-9+]/g, '')}`} className="text-lg font-semibold hover:underline">
                                    {primaryContact.phone[0]}
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-4 text-white">
                            <FaEnvelope className="w-8 h-8" />
                            <div>
                                <p className="text-sm text-white/80">Email Us</p>
                                <a href={`mailto:${primaryContact.email}`} className="text-lg font-semibold hover:underline">
                                    {primaryContact.email}
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-4 text-white">
                            <FaClock className="w-8 h-8" />
                            <div>
                                <p className="text-sm text-white/80">Working Hours</p>
                                <p className="text-lg font-semibold">Mon - Sat: 10AM - 7PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Head Office */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Consultation Form */}
                        <div className="bg-olive-50 rounded-2xl p-2">
                            <ConsultationForm />
                        </div>

                        {/* Head Office Info */}
                        <div>
                            <h3 className="text-2xl font-bold text-olive-800 mb-6">Head Office</h3>
                            {headOffice && (
                                <div className="bg-gradient-to-br from-olive-800 to-olive-900 text-white rounded-2xl p-8 mb-8">
                                    <span className="inline-block bg-gold-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                                        Headquarters
                                    </span>
                                    <h4 className="text-xl font-bold mb-4">{headOffice.name}</h4>
                                    <p className="text-olive-200 mb-6 leading-relaxed">{headOffice.address}</p>

                                    <div className="space-y-3">
                                        {headOffice.phone.map((num, index) => (
                                            <a
                                                key={index}
                                                href={`tel:${num.replace(/[^0-9+]/g, '')}`}
                                                className="flex items-center gap-3 text-olive-200 hover:text-gold-400 transition-colors"
                                            >
                                                <FaPhone className="w-4 h-4 text-gold-500" />
                                                {num}
                                            </a>
                                        ))}
                                        <a
                                            href={`mailto:${headOffice.email}`}
                                            className="flex items-center gap-3 text-olive-200 hover:text-gold-400 transition-colors"
                                        >
                                            <FaEnvelope className="w-4 h-4 text-gold-500" />
                                            {headOffice.email}
                                        </a>
                                    </div>
                                </div>
                            )}

                            {/* Google Map */}
                            <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2!2d77.3248151!3d28.6417644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb305ac70c29%3A0x49ea6c374cf3f52e!2sPrima%20Lexus!5e0!3m2!1sen!2sin!4v1702200000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Prima Lexus Head Office Location"
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Locations Section */}
            <section className="py-20 bg-stone-100">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="mb-12">
                        <p className="text-gold-600 font-medium mb-2">Connect With Us, Wherever You Are</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-olive-800">
                            View all our office locations with contact details.
                        </h2>
                    </div>

                    {/* Office Cards Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {offices.map((office) => (
                            <LocationCard
                                key={office.id}
                                name={office.name}
                                address={office.address}
                                phone={office.phone}
                                email={office.email}
                                isHeadOffice={office.isHeadOffice}
                            />
                        ))}
                    </div>

                    {/* Contact Info Cards */}
                    <div className="grid sm:grid-cols-3 gap-6">
                        <ContactInfoCard icon={FaPhone} title="Phone">
                            <a href={`tel:${primaryContact.phone[0].replace(/[^0-9+]/g, '')}`} className="block hover:text-gold-600 transition-colors">
                                {primaryContact.phone[0]}
                            </a>
                            {primaryContact.phone[1] && (
                                <a href={`tel:${primaryContact.phone[1].replace(/[^0-9+]/g, '')}`} className="block hover:text-gold-600 transition-colors">
                                    {primaryContact.phone[1]}
                                </a>
                            )}
                        </ContactInfoCard>

                        <ContactInfoCard icon={FaEnvelope} title="Email">
                            <a href={`mailto:${primaryContact.email}`} className="hover:text-gold-600 transition-colors">
                                {primaryContact.email}
                            </a>
                        </ContactInfoCard>

                        <ContactInfoCard icon={FaClock} title="Schedule">
                            <p>9:00 AM To 6:00 PM</p>
                            <p className="text-olive-500 text-xs mt-1">On Sunday and Holidays on Prior Appointment Only</p>
                        </ContactInfoCard>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
