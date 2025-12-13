// Contact Form section
import { useState } from 'react';
import Button from '../ui/Button';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = ({ showTitle = true }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setSubmitStatus('success');
        setIsSubmitting(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });

        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
    };

    const inputClasses = `
    w-full px-4 py-3 rounded-lg border border-slate-200
    focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none
    transition-all duration-200
    placeholder:text-slate-400
  `;

    return (
        <div>
            {showTitle && (
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Send Us a Message</h3>
                    <p className="text-slate-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                            className={inputClasses}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                            className={inputClasses}
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            className={inputClasses}
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                            Subject *
                        </label>
                        <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className={inputClasses}
                        >
                            <option value="">Select a subject</option>
                            <option value="Civil Laws">Civil Laws</option>
                            <option value="Criminal Laws">Criminal Laws</option>
                            <option value="Family Laws">Family Laws</option>
                            <option value="Property Matters">Property Matters</option>
                            <option value="Corporate Laws">Corporate Laws</option>
                            <option value="Consumer Laws">Consumer Laws</option>
                            <option value="Other">Other Legal Matter</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Your Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Briefly describe your legal matter..."
                        className={inputClasses}
                    />
                </div>

                {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                        Thank you for your message! We'll get back to you within 24 hours.
                    </div>
                )}

                <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                    {isSubmitting ? (
                        <span className="flex items-center gap-2">
                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                        </span>
                    ) : (
                        <span className="flex items-center gap-2">
                            <FaPaperPlane className="w-4 h-4" />
                            Send Message
                        </span>
                    )}
                </Button>
            </form>
        </div>
    );
};

export default ContactForm;
