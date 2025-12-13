// Consultation Modal Context - Global state for opening modal from anywhere
import { createContext, useContext, useState } from 'react';
import ConsultationModal from '../components/ui/ConsultationModal';

const ConsultationContext = createContext();

export const useConsultation = () => {
    const context = useContext(ConsultationContext);
    if (!context) {
        throw new Error('useConsultation must be used within ConsultationProvider');
    }
    return context;
};

export const ConsultationProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <ConsultationContext.Provider value={{ openModal, closeModal, isModalOpen }}>
            {children}
            <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
        </ConsultationContext.Provider>
    );
};

export default ConsultationContext;
