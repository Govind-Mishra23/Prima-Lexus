// Services Grid section with premium styling and images
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { practiceAreas } from '../../data/practiceAreas';
import { FaArrowRight } from 'react-icons/fa';

// Import card images
import civilCard from '../../assets/civil_card.png';
import criminalCard from '../../assets/criminal_card.png';
import familyCard from '../../assets/family_card.png';
import propertyCard from '../../assets/property_card.png';
import corporateCard from '../../assets/corporate_card.png';
import consumerCard from '../../assets/consumer_card.png';
import cyberCard from '../../assets/cyber_card.png';
import ipCard from '../../assets/ip_card.png';

// Map practice area slugs to images
const cardImages = {
    'civil-laws': civilCard,
    'criminal-laws': criminalCard,
    'family-laws': familyCard,
    'property-matters': propertyCard,
    'corporate-laws': corporateCard,
    'consumer-laws': consumerCard,
    'cyber-laws': cyberCard,
    'intellectual-property': ipCard,
};

// Detailed descriptions for each practice area card
const cardDescriptions = {
    'civil-laws': 'Top civil litigation lawyers in Delhi/NCR — expert support for property disputes, contract matters, recovery suits, and civil appeals with trusted guidance.',
    'criminal-laws': 'Experienced criminal defense lawyer in Delhi & NCR providing dedicated legal help to protect your rights with bail applications and trial representation.',
    'family-laws': 'Trusted family law lawyer specializing in divorce, maintenance, child custody, and domestic violence cases — protecting your interests with care and professionalism.',
    'property-matters': 'Best property lawyers in Delhi NCR dedicated to title verification, property disputes, registration, and real estate documentation with expert precision.',
    'corporate-laws': 'Strategic corporate legal solutions for company formation, compliance, mergers & acquisitions, and corporate governance — helping businesses thrive legally.',
    'consumer-laws': 'Expert consumer protection lawyers fighting for your rights — handling complaints, compensation claims, and forum representation with high success rate.',
    'cyber-laws': 'Specialized cyber law experts handling online fraud, data protection, cyber crimes, and IT Act matters — safeguarding your digital rights and interests.',
    'intellectual-property': 'Comprehensive IP protection services including trademark registration, copyright, patent filing, and IP litigation — securing your innovations and brands.',
};

const PracticeAreaCard = ({ area }) => {
    const image = cardImages[area.slug];
    const description = cardDescriptions[area.slug] || area.description;

    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            {/* Image Section */}
            <div className="relative h-44 overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={area.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-olive-700 to-olive-900 flex items-center justify-center">
                        <area.icon className="w-14 h-14 text-gold-500/50" />
                    </div>
                )}
                {/* Icon badge */}
                <div className="absolute bottom-3 left-3 w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center shadow-lg">
                    <area.icon className="w-5 h-5 text-white" />
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5">
                <h3 className="text-lg font-bold text-olive-800 mb-3 group-hover:text-gold-600 transition-colors">
                    {area.title}
                </h3>
                <p className="text-olive-600 text-sm leading-relaxed mb-4 line-clamp-4">
                    {description}
                </p>

                {/* View Detail Link */}
                <Link
                    to={`/practice-areas/${area.slug}`}
                    className="inline-flex items-center gap-2 text-olive-800 font-semibold text-sm hover:text-gold-600 transition-colors group/link"
                >
                    View Detail
                    <FaArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

const ServicesGrid = ({ limit = 8, mobileLimit = null, showTitle = true, showCTA = true }) => {
    const displayedServices = practiceAreas.slice(0, limit);
    const mobileServices = mobileLimit ? practiceAreas.slice(0, mobileLimit) : displayedServices;

    return (
        <section className="py-20 bg-olive-50">
            <div className="container mx-auto px-4">
                {showTitle && (
                    <SectionTitle
                        title="Our Practice Areas"
                        subtitle="Comprehensive legal services delivered by our expert team of advocates."
                    />
                )}

                {/* Desktop: Show all cards */}
                <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayedServices.map((area) => (
                        <PracticeAreaCard key={area.id} area={area} />
                    ))}
                </div>

                {/* Mobile: Show limited cards */}
                <div className="grid grid-cols-1 gap-4 sm:hidden">
                    {mobileServices.map((area) => (
                        <PracticeAreaCard key={area.id} area={area} />
                    ))}
                </div>

                {showCTA && practiceAreas.length > limit && (
                    <div className="text-center mt-12">
                        <Button to="/practice-areas" variant="secondary">
                            View All Practice Areas
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ServicesGrid;
