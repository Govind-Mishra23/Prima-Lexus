// Consultation Form Modal - Opens when clicking Book Consultation button
import { FaTimes } from 'react-icons/fa';
import ConsultationForm from '../sections/ConsultationForm';

const ConsultationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                <div
                    className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button - Inside modal */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 w-8 h-8 bg-olive-100 hover:bg-olive-200 rounded-full flex items-center justify-center transition-colors z-10"
                        aria-label="Close modal"
                    >
                        <FaTimes className="w-4 h-4 text-olive-600" />
                    </button>

                    {/* Form */}
                    <ConsultationForm />
                </div>
            </div>
        </>
    );
};

export default ConsultationModal;
