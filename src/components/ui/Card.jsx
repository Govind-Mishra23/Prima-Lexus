// Flexible Card component with premium olive-gold styling
const Card = ({
    children,
    className = '',
    hover = true,
    padding = 'md',
    ...props
}) => {
    const paddings = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8'
    };

    return (
        <div
            className={`
        bg-white rounded-2xl shadow-lg
        ${hover ? 'hover:shadow-2xl hover:-translate-y-1 transition-all duration-300' : ''}
        ${paddings[padding]}
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
};

// Service Card variant with premium gold accent
export const ServiceCard = ({ icon: Icon, title, description, services = [] }) => {
    return (
        <Card className="h-full group">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-olive-800 mb-3">{title}</h3>
            <p className="text-olive-600 mb-4 leading-relaxed">{description}</p>
            {services.length > 0 && (
                <ul className="space-y-1">
                    {services.slice(0, 3).map((service, index) => (
                        <li key={index} className="text-sm text-olive-500 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                            {service}
                        </li>
                    ))}
                </ul>
            )}
        </Card>
    );
};

// Team Card variant with premium styling
import cardIcon from '../../assets/card_icon.png';

export const TeamCard = ({ name, designation, image }) => {
    return (
        <div className="relative group w-full max-w-[280px] mx-auto overflow-hidden rounded-xl shadow-xl transition-all duration-300 hover:shadow-gold-500/20 hover:-translate-y-1">
            {/* Background - Olive to match website */}
            <div className="absolute inset-0 bg-gradient-to-b from-olive-800 to-olive-900 z-0"></div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center pt-6 pb-6 px-3 h-full">

                {/* Header: Logo/Icon & Text */}
                <div className="w-full flex justify-between items-center mb-4 pl-1 pr-1">
                    {/* Scales Icon (Image) */}
                    <div className="relative w-12 h-12 -ml-1">
                        <img src={cardIcon} alt="Scales of Justice" className="w-full h-full object-contain drop-shadow-md" />
                    </div>

                    {/* LAW FIRM Text */}
                    <div className="flex flex-col items-end">
                        <h3 className="text-gold-200 font-serif font-bold tracking-[0.15em] text-xs uppercase">Law Firm</h3>
                        <div className="w-full h-0.5 bg-gradient-to-l from-gold-400 to-transparent mt-0.5"></div>
                    </div>
                </div>

                {/* Decorative Gold Line */}
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mb-6 opacity-60"></div>

                {/* Profile Image */}
                <div className="relative mb-5 group-hover:scale-105 transition-transform duration-500">
                    <div className="w-32 h-32 rounded-full border-2 border-white/80 shadow-2xl overflow-hidden relative z-10 bg-olive-100">
                        {image ? (
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-olive-200 text-olive-600 text-3xl font-serif">
                                {name.charAt(0)}
                            </div>
                        )}
                    </div>
                    {/* Glow behind head */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-white/5 blur-xl rounded-full -z-0"></div>
                </div>

                {/* Name */}
                <h2 className="text-xl font-serif font-bold text-white tracking-widest uppercase mb-1 text-center drop-shadow-md">
                    {name}
                </h2>

                {/* Designation */}
                <p className="text-gold-400 font-serif text-sm italic mb-4 tracking-wide text-center">
                    {designation}
                </p>

                {/* Bottom Separator */}
                <div className="w-16 h-0.5 bg-gold-600/50 mt-auto"></div>
            </div>

            {/* Shine effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        </div>
    );
};

// Premium Location Card - Modern minimal design
export const LocationCard = ({ name, address, phone = [], email, isHeadOffice }) => {
    return (
        <div className={`group bg-white rounded-xl border border-olive-100 hover:border-gold-300 hover:shadow-xl transition-all duration-300 overflow-hidden ${isHeadOffice ? 'border-gold-400 shadow-lg' : ''}`}>
            {/* Card Content */}
            <div className="p-5">
                {/* Header with icon and badge */}
                <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-olive-800 group-hover:bg-gold-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                        <svg className="w-5 h-5 text-gold-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    {isHeadOffice && (
                        <span className="bg-gold-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                            Head Office
                        </span>
                    )}
                </div>

                {/* Office Name */}
                <h3 className="text-base font-bold text-olive-800 mb-2 group-hover:text-gold-600 transition-colors">
                    {name}
                </h3>

                {/* Address */}
                <p className="text-olive-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {address}
                </p>

                {/* Contact Info */}
                <div className="space-y-2 pt-3 border-t border-olive-100">
                    {phone.length > 0 && (
                        <a
                            href={`tel:${phone[0]}`}
                            className="flex items-center gap-2 text-sm text-olive-600 hover:text-gold-600 transition-colors"
                        >
                            <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span>{phone[0]}</span>
                        </a>
                    )}
                    {email && (
                        <a
                            href={`mailto:${email}`}
                            className="flex items-center gap-2 text-sm text-olive-600 hover:text-gold-600 transition-colors"
                        >
                            <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span className="truncate">{email}</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

// Contact Info Card - For Phone, Email, Schedule sections
export const ContactInfoCard = ({ icon: Icon, title, children }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
            {/* Top section with icon - cream/gray background */}
            <div className="bg-gradient-to-br from-stone-100 to-stone-200 p-6">
                <div className="w-12 h-12 border-2 border-gold-500 rounded-full flex items-center justify-center bg-white">
                    <Icon className="w-5 h-5 text-gold-600" />
                </div>
            </div>

            {/* Bottom section with content */}
            <div className="p-6">
                <h3 className="text-lg font-bold text-olive-800 mb-2">{title}</h3>
                <div className="text-olive-600 text-sm">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Card;
