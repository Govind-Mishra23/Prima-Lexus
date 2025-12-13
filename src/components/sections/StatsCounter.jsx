// Statistics Counter Section with animated numbers
import { useState, useEffect, useRef } from 'react';
import { FaCalendarAlt, FaFileAlt, FaBuilding, FaBalanceScale } from 'react-icons/fa';

const stats = [
    {
        icon: FaCalendarAlt,
        value: 15,
        suffix: '+',
        label: 'Years of Excellence',
        description: 'Trusted legal expertise'
    },
    {
        icon: FaFileAlt,
        value: 1000,
        suffix: '+',
        label: 'Cases Handled',
        description: 'Successful outcomes'
    },
    {
        icon: FaBuilding,
        value: 7,
        suffix: '',
        label: 'Office Locations',
        description: 'Pan-India presence'
    },
    {
        icon: FaBalanceScale,
        value: 12,
        suffix: '+',
        label: 'Practice Areas',
        description: 'Comprehensive services'
    }
];

const useCountUp = (end, duration = 2000, trigger = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) return;

        let startTime = null;
        const step = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }, [end, duration, trigger]);

    return count;
};

const StatCard = ({ stat, isVisible }) => {
    const count = useCountUp(stat.value, 2000, isVisible);

    return (
        <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-gold-400 group-hover:text-white transition-colors" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {count}{stat.suffix}
            </div>
            <div className="text-gold-400 font-semibold mb-1">{stat.label}</div>
            <div className="text-olive-300 text-sm">{stat.description}</div>
        </div>
    );
};

const StatsCounter = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-16 bg-gradient-to-br from-olive-800 to-olive-900"
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <StatCard key={index} stat={stat} isVisible={isVisible} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;
