// Team Highlight section - Featured team member spotlight with olive-gold theme
import Button from '../ui/Button';
import { getFeaturedMember } from '../../data/teamMembers';
import { FaQuoteLeft, FaArrowRight } from 'react-icons/fa';

const TeamHighlight = () => {
    const featured = getFeaturedMember();

    if (!featured) return null;

    return (
        <section className="py-20 bg-gradient-to-br from-olive-800 to-olive-900 text-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0">
                            {featured.image ? (
                                <img
                                    src={featured.image}
                                    alt={featured.name}
                                    className="w-full aspect-[3/4] object-cover"
                                />
                            ) : (
                                <div className="w-full aspect-[3/4] bg-gradient-to-br from-olive-700 to-olive-800 flex items-center justify-center">
                                    <div className="text-center">
                                        <span className="text-8xl font-bold text-white/20">
                                            {featured.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-500/30 rounded-2xl -z-10"></div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <span className="inline-block text-gold-400 font-semibold mb-4">Meet Our Founder</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">
                            Advocate A K Tiwari
                        </h2>
                        <p className="text-gold-400 text-lg mb-1">{featured.designation}</p>
                        <p className="text-olive-300 mb-6">Standing Counsel, Government of India</p>

                        {/* Founder Quote */}
                        <div className="relative mb-8 bg-olive-700/30 rounded-xl p-6 border border-gold-500/20">
                            <FaQuoteLeft className="absolute left-4 top-4 w-8 h-8 text-gold-500/30" />
                            <div className="pl-8">
                                <p className="text-olive-100 text-lg leading-relaxed italic">
                                    In a civilized society, law aims to maintain social order, protect rights of individuals and promote justice. We as Advocates in India, play a pivotal role in the country's Legal system, serving as a backbone of justice and Legal integrity.
                                </p>
                                <p className="text-gold-400 text-sm font-medium mt-4">
                                    — Advocate A K Tiwari
                                </p>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div>
                                <p className="text-olive-300 text-sm mb-1">Education</p>
                                <p className="text-white font-semibold">{featured.education}</p>
                            </div>
                            <div>
                                <p className="text-olive-300 text-sm mb-1">Experience</p>
                                <p className="text-white font-semibold">{featured.experience}</p>
                            </div>
                        </div>

                        {/* Expertise Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {featured.expertise.map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-olive-700/50 border border-gold-500/30 px-4 py-2 rounded-full text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <Button to="/team" variant="secondary">
                            Meet Our Team
                            <FaArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamHighlight;
