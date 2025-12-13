// Loading Skeleton Components
import React from 'react';

// Card Skeleton
export const CardSkeleton = ({ count = 1 }) => {
    return (
        <>
            {[...Array(count)].map((_, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                    <div className="h-44 bg-olive-200"></div>
                    <div className="p-5 space-y-3">
                        <div className="h-5 bg-olive-200 rounded w-3/4"></div>
                        <div className="h-4 bg-olive-100 rounded w-full"></div>
                        <div className="h-4 bg-olive-100 rounded w-2/3"></div>
                        <div className="h-4 bg-olive-200 rounded w-1/4 mt-4"></div>
                    </div>
                </div>
            ))}
        </>
    );
};

// Text Skeleton
export const TextSkeleton = ({ lines = 3, className = '' }) => {
    return (
        <div className={`animate-pulse space-y-2 ${className}`}>
            {[...Array(lines)].map((_, index) => (
                <div
                    key={index}
                    className="h-4 bg-olive-200 rounded"
                    style={{ width: `${Math.random() * 40 + 60}%` }}
                ></div>
            ))}
        </div>
    );
};

// Hero Skeleton
export const HeroSkeleton = () => {
    return (
        <div className="animate-pulse bg-olive-800 min-h-[60vh] flex items-center">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl space-y-4">
                    <div className="h-4 bg-olive-700 rounded w-32"></div>
                    <div className="h-12 bg-olive-700 rounded w-3/4"></div>
                    <div className="h-6 bg-olive-700/50 rounded w-full"></div>
                    <div className="h-6 bg-olive-700/50 rounded w-2/3"></div>
                    <div className="h-12 bg-gold-500/50 rounded w-40 mt-6"></div>
                </div>
            </div>
        </div>
    );
};

// Team Card Skeleton
export const TeamCardSkeleton = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
            <div className="h-64 bg-olive-200"></div>
            <div className="p-6 space-y-3 text-center">
                <div className="h-5 bg-olive-200 rounded w-3/4 mx-auto"></div>
                <div className="h-4 bg-gold-200 rounded w-1/2 mx-auto"></div>
                <div className="flex gap-2 justify-center mt-4">
                    <div className="h-6 w-16 bg-olive-100 rounded-full"></div>
                    <div className="h-6 w-16 bg-olive-100 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

// Page Loading Skeleton
export const PageLoadingSkeleton = () => {
    return (
        <div className="min-h-screen bg-white">
            <HeroSkeleton />
            <div className="container mx-auto px-4 py-12">
                <div className="animate-pulse space-y-4 max-w-3xl mx-auto">
                    <div className="h-8 bg-olive-200 rounded w-1/3 mx-auto"></div>
                    <div className="h-4 bg-olive-100 rounded w-2/3 mx-auto"></div>
                    <div className="grid grid-cols-3 gap-6 mt-8">
                        <CardSkeleton count={3} />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Inline Loading Spinner
export const LoadingSpinner = ({ size = 'md', className = '' }) => {
    const sizes = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    };

    return (
        <div className={`${sizes[size]} ${className}`}>
            <div className="w-full h-full border-3 border-olive-200 border-t-gold-500 rounded-full animate-spin"></div>
        </div>
    );
};

export default {
    CardSkeleton,
    TextSkeleton,
    HeroSkeleton,
    TeamCardSkeleton,
    PageLoadingSkeleton,
    LoadingSpinner
};
