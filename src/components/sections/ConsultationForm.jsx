// Modern Consultation Booking Form - Using Getform.io
import { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaGavel, FaCheckCircle } from 'react-icons/fa';

// Formspree endpoint - Replace YOUR_FORM_ID with your Formspree form ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkgdyyjv';

const ConsultationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        practiceArea: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const practiceAreas = [
        'Civil Laws',
        'Criminal Laws',
        'Family Laws',
        'Property Matters',
        'Corporate Laws',
        'Consumer Laws',
        'Cyber Laws',
        'Other'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (submitStatus === 'error') {
            setSubmitStatus(null);
            setErrorMessage('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    'legal_matter': formData.practiceArea,
                    message: formData.message || 'Consultation request',
                    '_subject': `New Consultation Request - ${formData.practiceArea}`,
                }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    practiceArea: '',
                    message: ''
                });
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage('Something went wrong. Please try again or call us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Success State
    if (submitStatus === 'success') {
        return (
            <div className="p-6 text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaCheckCircle className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-olive-800 mb-2">Thank You!</h3>
                <p className="text-olive-600 text-sm mb-4">
                    We'll contact you within 24 hours.
                </p>
                <button
                    onClick={() => setSubmitStatus(null)}
                    className="text-gold-600 font-medium hover:text-gold-700 text-sm"
                >
                    Submit another request
                </button>
            </div>
        );
    }

    return (
        <div className="p-5">
            <h3 className="text-lg font-bold text-olive-800 mb-4">Book Consultation</h3>

            <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name Field */}
                <div>
                    <label className="block text-sm font-medium text-olive-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-olive-400" />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                            className="w-full pl-10 pr-3 py-2.5 bg-olive-50 border-0 rounded-lg focus:ring-2 focus:ring-gold-500 focus:bg-white transition-all text-olive-800 placeholder:text-olive-400 text-sm"
                        />
                    </div>
                </div>

                {/* Phone Field */}
                <div>
                    <label className="block text-sm font-medium text-olive-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-olive-400" />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full pl-10 pr-3 py-2.5 bg-olive-50 border-0 rounded-lg focus:ring-2 focus:ring-gold-500 focus:bg-white transition-all text-olive-800 placeholder:text-olive-400 text-sm"
                        />
                    </div>
                </div>

                {/* Email Field */}
                <div>
                    <label className="block text-sm font-medium text-olive-700 mb-1">
                        Email Address
                    </label>
                    <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-olive-400" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            className="w-full pl-10 pr-3 py-2.5 bg-olive-50 border-0 rounded-lg focus:ring-2 focus:ring-gold-500 focus:bg-white transition-all text-olive-800 placeholder:text-olive-400 text-sm"
                        />
                    </div>
                </div>

                {/* Practice Area */}
                <div>
                    <label className="block text-sm font-medium text-olive-700 mb-1">
                        Legal Matter <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <FaGavel className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-olive-400" />
                        <select
                            name="practiceArea"
                            value={formData.practiceArea}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-8 py-2.5 bg-olive-50 border-0 rounded-lg focus:ring-2 focus:ring-gold-500 focus:bg-white transition-all text-olive-800 appearance-none cursor-pointer text-sm"
                        >
                            <option value="">Choose your legal matter</option>
                            {practiceAreas.map(area => (
                                <option key={area} value={area}>{area}</option>
                            ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg className="w-4 h-4 text-olive-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Message Field */}
                <div>
                    <label className="block text-sm font-medium text-olive-700 mb-1">
                        Brief Description <span className="text-olive-400">(Optional)</span>
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={2}
                        placeholder="Describe your legal matter briefly..."
                        className="w-full px-3 py-2.5 bg-olive-50 border-0 rounded-lg focus:ring-2 focus:ring-gold-500 focus:bg-white transition-all text-olive-800 placeholder:text-olive-400 resize-none text-sm"
                    />
                </div>

                {/* Error Message */}
                {submitStatus === 'error' && (
                    <div className="p-2.5 bg-red-50 border border-red-200 rounded-lg text-red-600 text-xs">
                        {errorMessage}
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                >
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Submitting...</span>
                        </>
                    ) : (
                        <span>Book Consultation</span>
                    )}
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-olive-400 text-center">
                    Your information is secure and confidential.
                </p>
            </form>
        </div>
    );
};

export default ConsultationForm;
