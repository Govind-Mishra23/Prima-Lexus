// Section Title component with premium olive-gold styling
const SectionTitle = ({
    title,
    subtitle,
    centered = true,
    light = false,
    className = ''
}) => {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
            <h2 className={`
        text-3xl md:text-4xl lg:text-5xl font-bold mb-4
        ${light ? 'text-white' : 'text-olive-800'}
      `}>
                {title}
            </h2>

            {/* Decorative underline */}
            <div className={`flex items-center gap-2 ${centered ? 'justify-center' : ''} mb-4`}>
                <div className="w-12 h-1 bg-gold-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
                <div className="w-12 h-1 bg-gold-500 rounded-full"></div>
            </div>

            {subtitle && (
                <p className={`
          text-lg md:text-xl max-w-3xl mx-auto
          ${light ? 'text-olive-200' : 'text-olive-600'}
        `}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;
