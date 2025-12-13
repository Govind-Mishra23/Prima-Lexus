// Team Page
import SectionTitle from '../components/ui/SectionTitle';
import { TeamCard } from '../components/ui/Card';
import CallToAction from '../components/sections/CallToAction';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/ui/SEO';
import { teamMembers, getFeaturedMember } from '../data/teamMembers';
import { FaQuoteLeft } from 'react-icons/fa';
import teamHeroBg from '../assets/team_hero_bg.png';

const Team = () => {
    const featured = getFeaturedMember();
    const otherMembers = teamMembers.filter(m => !m.isFeatured);

    return (
        <main>
            <SEO
                title="Our Team"
                description="Meet the legal experts at Prima Lexus. Led by Advocate A K Tiwari, Standing Counsel to Government of India with 15+ years of experience in all courts."
                keywords="prima lexus team, advocate a k tiwari, senior advocate delhi, legal experts india"
            />
            <Breadcrumbs />
            {/* Hero Section with Premium Background */}
            <section
                className="relative py-24 overflow-hidden"
                style={{
                    backgroundImage: `url(${teamHeroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-olive-900/90 via-olive-900/80 to-olive-900/60"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Team</h1>
                        <p className="text-xl text-olive-200">
                            Meet our experienced team of advocates and legal consultants dedicated to your success.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Member */}
            {featured && (
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Image */}
                            <div className="relative">
                                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                                    {featured.image ? (
                                        <img
                                            src={featured.image}
                                            alt={featured.name}
                                            className="w-full aspect-[3/4] object-cover max-w-md mx-auto"
                                        />
                                    ) : (
                                        <div className="w-full aspect-[3/4] max-w-md mx-auto bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                                            <span className="text-9xl font-bold text-white/20">
                                                {featured.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-500 rounded-2xl -z-10"></div>
                            </div>

                            {/* Content */}
                            <div>
                                <span className="inline-block text-gold-600 font-semibold mb-4">Founder & Lead Advocate</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-olive-800 mb-2">Advocate A K Tiwari</h2>
                                <p className="text-gold-600 text-xl mb-1">{featured.designation}</p>
                                <p className="text-olive-600 mb-6">Standing Counsel, Government of India</p>

                                <div className="relative mb-8 bg-olive-50 rounded-xl p-6 border-l-4 border-gold-500">
                                    <FaQuoteLeft className="absolute left-4 top-4 w-6 h-6 text-gold-500/30" />
                                    <div className="pl-6">
                                        <p className="text-olive-700 text-lg leading-relaxed italic">
                                            In a civilized society, law aims to maintain social order, protect rights of individuals and promote justice. We as Advocates in India, play a pivotal role in the country's Legal system, serving as a backbone of justice and Legal integrity.
                                        </p>
                                        <p className="text-gold-600 text-sm font-medium mt-4">
                                            — Advocate A K Tiwari
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    <div className="bg-olive-50 p-4 rounded-lg border border-olive-200">
                                        <p className="text-olive-500 text-sm mb-1">Education</p>
                                        <p className="text-olive-800 font-semibold">{featured.education}</p>
                                    </div>
                                    <div className="bg-olive-50 p-4 rounded-lg border border-olive-200">
                                        <p className="text-olive-500 text-sm mb-1">Experience</p>
                                        <p className="text-olive-800 font-semibold">{featured.experience}</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-olive-500 text-sm mb-3">Areas of Expertise</p>
                                    <div className="flex flex-wrap gap-2">
                                        {featured.expertise.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="bg-gold-100 text-gold-700 px-4 py-2 rounded-full text-sm font-medium border border-gold-200"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Other Team Members - Only show if there are other members */}
            {otherMembers.length > 0 && (
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <SectionTitle
                            title="Our Legal Team"
                            subtitle="Experienced professionals committed to providing exceptional legal services."
                        />
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {otherMembers.map((member) => (
                                <TeamCard
                                    key={member.id}
                                    name={member.name}
                                    designation={member.designation}
                                    image={member.image}
                                    expertise={member.expertise}
                                    bio={member.bio}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CallToAction />
        </main>
    );
};

export default Team;
