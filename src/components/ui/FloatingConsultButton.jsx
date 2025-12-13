// Floating Consultation Button - Circle design matching WhatsApp with hover tooltip
import { useConsultation } from '../../context/ConsultationContext';
import { FaCalendarAlt } from 'react-icons/fa';

const FloatingConsultButton = () => {
    const { openModal } = useConsultation();

    return (
        <button
            onClick={openModal}
            className="fixed right-6 bottom-24 z-50 group"
            aria-label="Book Consultation"
        >
            {/* Tooltip - shows on hover */}
            <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-olive-800 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Consult Now
            </span>

            {/* Button */}
            <div className="w-14 h-14 bg-gradient-to-br from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200">
                <FaCalendarAlt className="w-6 h-6 text-white" />
            </div>
        </button>
    );
};

export default FloatingConsultButton;
