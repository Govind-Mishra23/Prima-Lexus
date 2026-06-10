// Careers Page with Premium Recruitment Redesign
import { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import CallToAction from '../components/sections/CallToAction';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/ui/SEO';
import { 
    FaBriefcase, 
    FaMapMarkerAlt, 
    FaEnvelope, 
    FaPhone, 
    FaBalanceScale, 
    FaGavel, 
    FaCheckCircle, 
    FaArrowRight, 
    FaGraduationCap, 
    FaTrophy,
    FaCopy,
    FaCheck
} from 'react-icons/fa';

const Careers = () => {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedAddress, setCopiedAddress] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("primalexus@primalexus.com");
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    const handleCopyAddress = () => {
        navigator.clipboard.writeText("Ch. no. D-239, Supreme court of India.");
        setCopiedAddress(true);
        setTimeout(() => setCopiedAddress(false), 2000);
    };

    return (
        <main className="bg-slate-50 min-h-screen text-slate-800">
            <SEO
                title="Careers - Advocates Required"
                description="Join Prima Lexus, a premium law firm valuing excellence and integrity. We are hiring enrolled advocates. Freshers can also apply."
                keywords="legal jobs, advocate hiring, law firm careers, prima lexus careers, freshers law jobs, delhi supreme court advocates"
            />
            
            <Breadcrumbs />

            {/* Premium Hero Banner Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-olive-950 to-slate-900 py-24 text-white">
                {/* Background decorative patterns */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl -translate-y-12 translate-x-12"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-olive-500 rounded-full filter blur-3xl translate-y-12 -translate-x-12"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                        {/* Left Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 rounded-full text-gold-400 text-sm font-semibold tracking-wider uppercase mb-6">
                                <FaBriefcase className="w-3.5 h-3.5" />
                                We Are Hiring
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
                                ADVOCATES <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">REQUIRED</span>
                            </h1>
                            <p className="text-xl md:text-2xl font-light text-slate-300 mb-8 max-w-2xl leading-relaxed">
                                Join a team that values excellence & integrity in practice.
                            </p>

                            {/* Locations Indicator */}
                            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 bg-slate-900/60 backdrop-blur-md border border-slate-800 p-4 rounded-2xl mb-8">
                                <div className="flex items-center gap-2 text-gold-400 font-semibold uppercase text-sm tracking-wider">
                                    <FaMapMarkerAlt className="w-5 h-5 animate-bounce" />
                                    <span>Locations:</span>
                                </div>
                                <div className="flex flex-wrap items-center justify-center gap-3 text-base font-medium text-slate-200">
                                    <span className="hover:text-gold-400 transition-colors">East Delhi</span>
                                    <span className="text-slate-700">|</span>
                                    <span className="hover:text-gold-400 transition-colors">Ghaziabad</span>
                                    <span className="text-slate-700">|</span>
                                    <span className="hover:text-gold-400 transition-colors">Noida</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Visual Banner Callout */}
                        <div className="w-full lg:w-96 flex-shrink-0">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-olive-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                                <div className="relative bg-slate-900/90 border border-slate-800 rounded-3xl p-8 text-center backdrop-blur-xl shadow-2xl">
                                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center shadow-lg shadow-gold-500/20">
                                        <FaBalanceScale className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Prima Lexus</h3>
                                    <p className="text-gold-400 font-medium text-sm tracking-wider uppercase mb-6">Premium Law Firm</p>
                                    
                                    {/* Freshers Can Apply Badge */}
                                    <div className="bg-gradient-to-r from-amber-500/15 via-gold-500/20 to-amber-500/15 border-2 border-gold-500/50 py-3.5 px-4 rounded-xl shadow-inner animate-pulse">
                                        <div className="flex items-center justify-center gap-2 text-gold-300 font-bold text-base md:text-lg uppercase tracking-wide">
                                            <FaGraduationCap className="w-5 h-5 flex-shrink-0" />
                                            <span>Freshers Can Also Apply</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Job Details Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Opportunities at Prima Lexus"
                        subtitle="Join our dynamic legal team. We welcome dedicated advocates and passionate law students ready to make a significant impact."
                    />

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        {/* Advocate Recruitment */}
                        <div className="bg-gradient-to-b from-slate-50 to-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 shadow-sm flex-shrink-0">
                                    <FaGavel className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-2.5 py-1 rounded-full">Practice Roles</span>
                                    <h2 className="text-2xl font-bold text-slate-800 mt-2">Advocate Recruitment</h2>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-450 mb-3">Who Can Apply?</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2.5 text-slate-600">
                                            <FaCheck className="w-3.5 h-3.5 text-gold-500 mt-1 flex-shrink-0" />
                                            <span>Enrolled Advocates (both Freshers & Experienced)</span>
                                        </li>
                                        <li className="flex items-start gap-2.5 text-slate-600">
                                            <FaCheck className="w-3.5 h-3.5 text-gold-500 mt-1 flex-shrink-0" />
                                            <span>Strong drafting & confident court appearance skills</span>
                                        </li>
                                        <li className="flex items-start gap-2.5 text-slate-600">
                                            <FaCheck className="w-3.5 h-3.5 text-gold-500 mt-1 flex-shrink-0" />
                                            <span>Committed, growth-oriented & highly ethical values</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-t border-slate-100 pt-6">
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-450 mb-3">What We Offer</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2.5 text-slate-600">
                                            <FaCheckCircle className="w-4 h-4 text-olive-650 mt-1 flex-shrink-0" />
                                            <span>Exposure to challenging litigation & high-profile cases</span>
                                        </li>
                                        <li className="flex items-start gap-2.5 text-slate-600">
                                            <FaCheckCircle className="w-4 h-4 text-olive-650 mt-1 flex-shrink-0" />
                                            <span>Active professional mentorship & continuous training</span>
                                        </li>
                                        <li className="flex items-start gap-2.5 text-slate-600">
                                            <FaCheckCircle className="w-4 h-4 text-olive-650 mt-1 flex-shrink-0" />
                                            <span>Collaborative workplace valuing integrity & excellence</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Legal Internship Program */}
                        <div className="bg-gradient-to-b from-slate-50 to-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 shadow-sm flex-shrink-0">
                                    <FaGraduationCap className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-olive-600 bg-olive-50 px-2.5 py-1 rounded-full">Academic Roles</span>
                                    <h2 className="text-2xl font-bold text-slate-800 mt-2">Legal Internship</h2>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-450 mb-3">Eligibility</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2.5 text-slate-600">
                                            <FaCheck className="w-3.5 h-3.5 text-gold-500 mt-1 flex-shrink-0" />
                                            <span>Students pursuing <strong>BA LLB</strong> or <strong>LLB (Three Years)</strong></span>
                                        </li>
                                        <li className="flex items-start gap-2.5 text-slate-600">
                                            <FaCheck className="w-3.5 h-3.5 text-gold-500 mt-1 flex-shrink-0" />
                                            <span>Students pursuing <strong>LLM</strong> or <strong>PhD</strong></span>
                                        </li>
                                        <li className="flex items-start gap-2.5 text-slate-600">
                                            <FaCheck className="w-3.5 h-3.5 text-gold-500 mt-1 flex-shrink-0" />
                                            <span>Enthusiasm for legal research, analysis & documentation</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-t border-slate-100 pt-6">
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-450 mb-3">Duration & Flexibility</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2.5 text-slate-600">
                                            <FaCheckCircle className="w-4 h-4 text-olive-650 mt-1 flex-shrink-0" />
                                            <span>Flexible durations: <strong>1 Month</strong> or <strong>2 Months</strong></span>
                                        </li>
                                        <li className="flex items-start gap-2.5 text-slate-600">
                                            <FaCheckCircle className="w-4 h-4 text-olive-650 mt-1 flex-shrink-0" />
                                            <span><strong>Custom extensions</strong> (as long as students wish to continue)</span>
                                        </li>
                                        <li className="flex items-start gap-2.5 text-slate-600">
                                            <FaCheckCircle className="w-4 h-4 text-olive-650 mt-1 flex-shrink-0" />
                                            <span>Practical litigation exposure & certificate upon completion</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Action Card: Apply & Contact */}
            <section className="pb-24 pt-4 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-olive-900 to-slate-900 text-white p-8 md:p-12 shadow-2xl">
                            {/* Visual background details */}
                            <div className="absolute top-0 right-0 w-80 h-80 bg-gold-600/10 rounded-full blur-3xl pointer-events-none"></div>
                            
                            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                                {/* Left column: Send CV */}
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-400 border border-gold-500/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                                        Easy Application
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-white">Send Your CV</h3>
                                    <p className="text-slate-350 leading-relaxed text-sm md:text-base">
                                        We invite qualified candidates to email their resume/CV directly to our recruitment team. Please mention your experience and practice interest.
                                    </p>
                                    
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Button
                                            href="mailto:primalexus@primalexus.com?subject=Application for Advocate Position - Prima Lexus"
                                            variant="primary"
                                            className="flex items-center justify-center gap-2 group w-full sm:w-auto"
                                        >
                                            <FaEnvelope className="w-4 h-4" />
                                            <span>Email Application</span>
                                            <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                        </Button>

                                        <button
                                            onClick={handleCopyEmail}
                                            className="flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 px-5 py-3 rounded-lg font-semibold transition-all duration-300"
                                            aria-label="Copy recruitment email address"
                                        >
                                            {copiedEmail ? <FaCheck className="w-4 h-4 text-emerald-500" /> : <FaCopy className="w-4 h-4 text-gold-400" />}
                                            <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
                                        </button>
                                    </div>
                                    <div className="text-xs text-slate-400">
                                        Recruitment Email: <span className="text-gold-400 underline font-mono select-all">primalexus@primalexus.com</span>
                                    </div>
                                </div>

                                {/* Right column: Contact details & Address */}
                                <div className="space-y-6 md:border-l md:border-slate-800 md:pl-12">
                                    <h3 className="text-2xl font-bold text-white">Contact & Office Details</h3>
                                    
                                    <div className="space-y-4 text-sm md:text-base">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center text-gold-400 flex-shrink-0 mt-1">
                                                <FaPhone className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <h4 className="text-xs text-slate-400 uppercase tracking-wider mb-1">Call for Inquiries</h4>
                                                <div className="flex flex-col gap-1 font-semibold text-slate-200">
                                                    <a href="tel:+918285858505" className="hover:text-gold-400 transition-colors">+91 8285858505</a>
                                                    <a href="tel:+919873964400" className="hover:text-gold-400 transition-colors">+91 9873964400</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center text-gold-400 flex-shrink-0 mt-1">
                                                <FaMapMarkerAlt className="w-4 h-4" />
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="text-xs text-slate-400 uppercase tracking-wider mb-1">Office Address</h4>
                                                <p className="text-slate-200 font-medium">Ch. no. D-239, Supreme court of India.</p>
                                                <button 
                                                    onClick={handleCopyAddress}
                                                    className="inline-flex items-center gap-1.5 text-xs text-gold-400 hover:text-gold-300 underline mt-1.5"
                                                >
                                                    {copiedAddress ? "Address Copied!" : "Copy Address"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slogan Banner */}
                            <div className="border-t border-slate-800 mt-12 pt-8 text-center flex flex-col items-center justify-center gap-3">
                                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center border border-gold-500/30 text-gold-400 shadow-md">
                                    <FaBalanceScale className="w-4 h-4" />
                                </div>
                                <p className="text-sm font-semibold tracking-widest uppercase text-slate-400">
                                    Excellence in Advocacy. Integrity in Practice.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CallToAction />
        </main>
    );
};

export default Careers;
