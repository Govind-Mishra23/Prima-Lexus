// Disclaimer Modal component - Shows on first visit
import { useState, useEffect } from 'react';

const DisclaimerModal = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already agreed to disclaimer
        const hasAgreed = localStorage.getItem('disclaimerAgreed');
        if (!hasAgreed) {
            setIsVisible(true);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }
    }, []);

    const handleAgree = () => {
        localStorage.setItem('disclaimerAgreed', 'true');
        setIsVisible(false);
        document.body.style.overflow = 'auto';
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-olive-800 to-olive-900 text-white px-6 py-4">
                    <h2 className="text-2xl font-bold text-center">Disclaimer</h2>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[60vh] text-olive-700 leading-relaxed space-y-4">
                    <p className="font-semibold text-olive-800">
                        The Bar Council of India does not permit Advocates to create websites for the purpose of advertising legal services. By selecting the option indicating agreement, the user confirms the following terms.
                    </p>

                    <p>
                        This website is intended solely for informational use. It does not serve the purpose of advertising, personal communication, solicitation, invitation or encouragement to engage professional services from us or from any member associated with us.
                    </p>

                    <p>
                        If you require additional information or wish to communicate with <span className="font-semibold text-gold-600">Prima Lexus</span>, you may contact us through our official email address provided on this site.
                    </p>

                    <p>
                        According to the rules of the Bar Council of India, Advocates are prohibited from soliciting or advertising their services. By selecting the agreement option, the user acknowledges that there has been no form of advertisement, solicitation, personal communication or inducement of any nature offered by us and we are not requesting professional engagement.
                    </p>

                    <p>
                        Any information that may be accessed is provided only upon the voluntary request of the user. Any information viewed, downloaded or retained from this website is entirely at the discretion of the user and does not create any lawyer and client relationship in any manner.
                    </p>

                    <p>
                        The information available on this website is offered strictly on request for informational purposes and must not be considered as solicitation or advertisement. We are not responsible for any action taken by a user based on the content of this website. Users who require legal assistance are encouraged to obtain independent legal advice.
                    </p>

                    <p className="font-medium text-olive-800 border-t border-olive-200 pt-4">
                        Access to the website is granted only after the user confirms having read and agreed to these terms.
                    </p>
                </div>

                {/* Footer with Button */}
                <div className="px-6 py-4 bg-olive-50 border-t border-olive-200">
                    <button
                        onClick={handleAgree}
                        className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        I Agree
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DisclaimerModal;
