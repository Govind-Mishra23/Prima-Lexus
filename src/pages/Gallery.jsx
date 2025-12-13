// Gallery Page
import { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import CallToAction from '../components/sections/CallToAction';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/ui/SEO';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Placeholder gallery data - replace with actual images
const galleryCategories = ['All', 'Office', 'Events', 'Team', 'Achievements'];

const galleryItems = [
    { id: 1, category: 'Office', title: 'Kaushambi Head Office', image: null },
    { id: 2, category: 'Office', title: 'Conference Room', image: null },
    { id: 3, category: 'Team', title: 'Legal Team Meeting', image: null },
    { id: 4, category: 'Events', title: 'Annual Conference 2024', image: null },
    { id: 5, category: 'Achievements', title: 'Award Ceremony', image: null },
    { id: 6, category: 'Office', title: 'Mumbai Office', image: null },
    { id: 7, category: 'Team', title: 'Advocacy Workshop', image: null },
    { id: 8, category: 'Events', title: 'Client Meet', image: null },
    { id: 9, category: 'Office', title: 'Noida Branch', image: null },
];

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredItems = activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    const handlePrev = () => {
        const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
        setSelectedImage(filteredItems[prevIndex]);
    };

    const handleNext = () => {
        const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
        const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
        setSelectedImage(filteredItems[nextIndex]);
    };

    return (
        <main>
            <SEO
                title="Gallery"
                description="View photos of Prima Lexus offices, events, team activities and achievements. A glimpse into our professional legal practice."
                keywords="prima lexus gallery, law firm photos, office images, legal events delhi"
            />
            <Breadcrumbs />
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Gallery</h1>
                        <p className="text-xl text-slate-300">
                            A glimpse into our offices, events, and achievements
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {galleryCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`
                  px-6 py-2 rounded-full font-medium transition-all
                  ${activeCategory === category
                                        ? 'bg-amber-500 text-white shadow-lg'
                                        : 'bg-white text-slate-600 hover:bg-slate-100'
                                    }
                `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setSelectedImage(item)}
                                className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                            >
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full aspect-[4/3] bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                                        <span className="text-4xl font-bold text-white/20">
                                            {item.category[0]}
                                        </span>
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <span className="text-xs bg-amber-500 text-white px-2 py-1 rounded-full mb-2 inline-block">
                                                {item.category}
                                            </span>
                                            <h3 className="text-white font-semibold">{item.title}</h3>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Placeholder Notice */}
                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-6 py-3 rounded-full">
                            <span>📷</span>
                            <span>Gallery images will be updated soon</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <FaTimes className="w-6 h-6" />
                    </button>

                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    >
                        <FaChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    >
                        <FaChevronRight className="w-6 h-6" />
                    </button>

                    <div
                        className="max-w-4xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {selectedImage.image ? (
                            <img
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                className="w-full rounded-lg"
                            />
                        ) : (
                            <div className="w-full aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <span className="text-6xl font-bold text-white/20 block mb-4">
                                        {selectedImage.category[0]}
                                    </span>
                                    <h3 className="text-2xl text-white font-semibold">{selectedImage.title}</h3>
                                    <p className="text-slate-400 mt-2">{selectedImage.category}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <CallToAction />
        </main>
    );
};

export default Gallery;
