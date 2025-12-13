// Call to Action section with consultation modal integration
import { useConsultation } from '../../context/ConsultationContext';
import Button from '../ui/Button';
import { FaPhone, FaArrowRight } from 'react-icons/fa';

const CallToAction = () => {
    const { openModal } = useConsultation();

    return (
        <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#C89741' }}>
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Ready to Discuss Your Legal Matters?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get expert legal advice from our experienced team. Schedule your consultation today.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={openModal}
                            className="inline-flex items-center gap-2 bg-white text-gold-600 hover:bg-olive-900 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
                        >
                            Book Consultation
                            <FaArrowRight className="w-4 h-4" />
                        </button>
                        <Button href="tel:+918285858505" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gold-600">
                            <FaPhone className="w-4 h-4 mr-2" />
                            +91 8285858505
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
