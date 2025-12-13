// Careers Page
import { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import CallToAction from '../components/sections/CallToAction';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/ui/SEO';
import { FaBriefcase, FaUsers, FaGraduationCap, FaHandshake, FaArrowRight } from 'react-icons/fa';

const benefits = [
    {
        icon: FaBriefcase,
        title: "Professional Growth",
        description: "Work on diverse cases across multiple practice areas and courts."
    },
    {
        icon: FaUsers,
        title: "Collaborative Environment",
        description: "Learn from experienced advocates in a supportive team setting."
    },
    {
        icon: FaGraduationCap,
        title: "Continuous Learning",
        description: "Regular training sessions and exposure to complex legal matters."
    },
    {
        icon: FaHandshake,
        title: "Work-Life Balance",
        description: "Flexible work environment with focus on employee wellbeing."
    }
];

const openings = [
    {
        title: "Associate Advocate",
        location: "Delhi NCR",
        type: "Full-time",
        experience: "2-5 years",
        description: "Looking for advocates with experience in Civil and Criminal litigation."
    },
    {
        title: "Legal Intern",
        location: "All Offices",
        type: "Internship",
        experience: "Law Students",
        description: "3-6 month internship program for law students seeking practical experience."
    },
    {
        title: "Para-legal Staff",
        location: "Kaushambi",
        type: "Full-time",
        experience: "1-3 years",
        description: "Support role for legal documentation and administrative tasks."
    }
];

const Careers = () => {
    const [activeOpening, setActiveOpening] = useState(null);

    return (
        <main>
            <SEO
                title="Careers"
                description="Join Prima Lexus - Build your legal career with India's trusted law firm. Current openings for advocates, interns, and legal professionals."
                keywords="legal jobs delhi, lawyer jobs, law firm careers, advocate openings, legal internship india"
            />
            <Breadcrumbs />
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h1>
                        <p className="text-xl text-slate-300">
                            Build your legal career with Prima Lexus - India's trusted law firm
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Why Work With Us"
                        subtitle="Be part of a team that values excellence, integrity, and professional growth."
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-amber-50 transition-colors">
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                                    <benefit.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{benefit.title}</h3>
                                <p className="text-slate-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Current Openings */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Current Openings"
                        subtitle="Explore opportunities to join our growing team."
                    />
                    <div className="max-w-4xl mx-auto space-y-6">
                        {openings.map((opening, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 mb-2">{opening.title}</h3>
                                        <div className="flex flex-wrap gap-3 text-sm">
                                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                                                📍 {opening.location}
                                            </span>
                                            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
                                                {opening.type}
                                            </span>
                                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                                                {opening.experience}
                                            </span>
                                        </div>
                                        <p className="text-slate-600 mt-3">{opening.description}</p>
                                    </div>
                                    <Button
                                        href={`mailto:primalexus@primalexus.com?subject=Application for ${opening.title}`}
                                        size="sm"
                                        className="flex-shrink-0"
                                    >
                                        Apply Now
                                        <FaArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* General Application */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                            Don't See a Perfect Match?
                        </h2>
                        <p className="text-slate-600 text-lg mb-8">
                            We're always looking for talented legal professionals. Send us your resume and we'll keep you in mind for future opportunities.
                        </p>
                        <Button
                            href="mailto:primalexus@primalexus.com?subject=General Career Inquiry"
                            size="lg"
                        >
                            Send Your Resume
                        </Button>
                    </div>
                </div>
            </section>

            <CallToAction />
        </main>
    );
};

export default Careers;
