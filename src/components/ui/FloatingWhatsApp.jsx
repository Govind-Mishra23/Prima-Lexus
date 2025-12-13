// Floating WhatsApp Button Component - Simple, no animation
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
    const phoneNumber = '918285858505'; // Prima Lexus phone number
    const message = 'Hello! I would like to inquire about legal services.';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50"
            aria-label="Contact us on WhatsApp"
        >
            <div className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200">
                <FaWhatsapp className="w-7 h-7 text-white" />
            </div>
        </a>
    );
};

export default FloatingWhatsApp;
