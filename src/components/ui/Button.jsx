// Reusable Button component with premium olive-gold styling
import { Link } from 'react-router-dom';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    to,
    onClick,
    className = '',
    ...props
}) => {
    const baseStyles = `
    inline-flex items-center justify-center font-semibold rounded-lg
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

    const variants = {
        primary: `
      bg-gradient-to-r from-gold-500 to-gold-600 text-white
      hover:from-gold-600 hover:to-gold-700
      focus:ring-gold-500 shadow-lg hover:shadow-xl
      hover:-translate-y-0.5
    `,
        secondary: `
      bg-gradient-to-r from-olive-700 to-olive-800 text-white
      hover:from-olive-800 hover:to-olive-900
      focus:ring-olive-500 shadow-lg hover:shadow-xl
      hover:-translate-y-0.5
    `,
        outline: `
      border-2 border-gold-500 text-gold-500
      hover:bg-gold-500 hover:text-white
      focus:ring-gold-500
    `,
        ghost: `
      text-olive-700 hover:bg-olive-100
      focus:ring-olive-500
    `,
        white: `
      bg-white text-olive-900
      hover:bg-olive-50
      focus:ring-white shadow-lg hover:shadow-xl
      hover:-translate-y-0.5
    `
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    // External link
    if (href) {
        return (
            <a href={href} className={combinedStyles} {...props}>
                {children}
            </a>
        );
    }

    // Internal link (React Router)
    if (to) {
        return (
            <Link to={to} className={combinedStyles} {...props}>
                {children}
            </Link>
        );
    }

    // Regular button
    return (
        <button onClick={onClick} className={combinedStyles} {...props}>
            {children}
        </button>
    );
};

export default Button;
