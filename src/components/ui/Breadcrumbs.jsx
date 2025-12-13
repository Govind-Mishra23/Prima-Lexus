// Breadcrumbs Component for interior pages
import { Link, useLocation } from 'react-router-dom';
import { FaChevronRight, FaHome } from 'react-icons/fa';

const routeLabels = {
    'about': 'About Us',
    'team': 'Our Team',
    'contact': 'Contact Us',
    'blog': 'Blog',
    'gallery': 'Gallery',
    'careers': 'Careers',
    'practice-areas': 'Practice Areas',
    'services': 'Services',
};

const Breadcrumbs = ({ customLabels = {} }) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    if (pathnames.length === 0) return null;

    return (
        <nav className="bg-olive-50 border-b border-olive-100">
            <div className="container mx-auto px-4 py-3">
                <ol className="flex items-center flex-wrap gap-2 text-sm">
                    <li>
                        <Link
                            to="/"
                            className="text-olive-600 hover:text-gold-600 transition-colors flex items-center gap-1"
                        >
                            <FaHome className="w-3.5 h-3.5" />
                            <span>Home</span>
                        </Link>
                    </li>
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;
                        const label = customLabels[name] || routeLabels[name] || name.split('-').map(word =>
                            word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ');

                        return (
                            <li key={name} className="flex items-center gap-2">
                                <FaChevronRight className="w-3 h-3 text-olive-400" />
                                {isLast ? (
                                    <span className="text-olive-800 font-medium">{label}</span>
                                ) : (
                                    <Link
                                        to={routeTo}
                                        className="text-olive-600 hover:text-gold-600 transition-colors"
                                    >
                                        {label}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumbs;
