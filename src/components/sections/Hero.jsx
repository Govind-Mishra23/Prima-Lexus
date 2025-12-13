// Hero section with consultation modal integration
import { useConsultation } from '../../context/ConsultationContext';
import Button from '../ui/Button';
import heroImage from '../../assets/premium_hero_bg.png';

const Hero = () => {
    const { openModal } = useConsultation();

    return (
        <section
            className="relative min-h-[85vh] flex items-center overflow-hidden"
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-olive-900/95 via-olive-900/85 to-olive-900/70"></div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl">
                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Justice.{' '}
                        <span className="text-gold-500">
                            Integrity.
                        </span>{' '}
                        Excellence.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-olive-200 mb-8 max-w-2xl leading-relaxed">
                        Prima Lexus is a foremost full service law firm practicing and providing legal assistance across India.
                        Our extremely professional team of specialists, attorneys & consultants delivers comprehensive legal solutions.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 mb-12">
                        <button
                            onClick={openModal}
                            className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
                        >
                            Book Consultation
                        </button>
                        <Button to="/practice-areas" variant="outline" size="lg">
                            Our Services
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                        <div>
                            <p className="text-3xl md:text-4xl font-bold text-gold-500">15+</p>
                            <p className="text-olive-300 text-sm">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold text-gold-500">7</p>
                            <p className="text-olive-300 text-sm">Office Locations</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold text-gold-500">1000+</p>
                            <p className="text-olive-300 text-sm">Cases Handled</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold text-gold-500">12+</p>
                            <p className="text-olive-300 text-sm">Practice Areas</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
