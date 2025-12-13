// Modern Blog Page with Progressive Image Loading
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, categories, getFeaturedPosts } from '../data/blogPosts';
import { FaCalendarAlt, FaClock, FaUser, FaArrowRight, FaSearch } from 'react-icons/fa';
import Button from '../components/ui/Button';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/ui/SEO';
import blogHeroBg from '../assets/blog_hero_bg.png';

// Progressive Image Component with lazy loading and blur-up effect
const ProgressiveImage = ({ src, thumbnail, alt, className }) => {
    const [imageSrc, setImageSrc] = useState(thumbnail || src);
    const [isLoading, setIsLoading] = useState(true);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        // Intersection Observer for lazy loading
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '100px' }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isInView || !src) return;

        // Load full image
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImageSrc(src);
            setIsLoading(false);
        };
    }, [isInView, src]);

    return (
        <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
            {/* Skeleton loader */}
            {isLoading && (
                <div className="absolute inset-0 bg-gradient-to-r from-olive-200 via-olive-100 to-olive-200 animate-shimmer bg-[length:200%_100%]"></div>
            )}
            <img
                src={imageSrc}
                alt={alt}
                className={`w-full h-full object-cover transition-all duration-700 ${isLoading ? 'blur-sm scale-105' : 'blur-0 scale-100'
                    }`}
            />
        </div>
    );
};

// Blog Card Component with hover animations
const BlogCard = ({ post, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Stagger animation based on index
                    setTimeout(() => setIsVisible(true), index * 100);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, [index]);

    return (
        <article
            ref={cardRef}
            className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
        >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
                <ProgressiveImage
                    src={post.image}
                    thumbnail={post.thumbnail}
                    alt={post.title}
                    className="h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-gold-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                </span>

                {/* Hover Read More */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-flex items-center gap-2 text-white font-medium">
                        Read Article <FaArrowRight className="w-4 h-4" />
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-olive-500 mb-3">
                    <span className="flex items-center gap-1">
                        <FaCalendarAlt className="w-3 h-3" />
                        {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                        <FaClock className="w-3 h-3" />
                        {post.readTime}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-olive-800 mb-3 line-clamp-2 group-hover:text-gold-600 transition-colors">
                    {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-olive-600 text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center gap-2 text-sm text-olive-500">
                    <FaUser className="w-3 h-3 text-gold-500" />
                    {post.author}
                </div>
            </div>
        </article>
    );
};

// Featured Post Component
const FeaturedPost = ({ post }) => {
    return (
        <article className="bg-white rounded-3xl shadow-xl overflow-hidden group">
            <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-full overflow-hidden">
                    <ProgressiveImage
                        src={post.image}
                        thumbnail={post.thumbnail}
                        alt={post.title}
                        className="h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-olive-900/30 group-hover:to-olive-900/50 transition-all duration-500"></div>
                    <span className="absolute top-6 left-6 bg-gold-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
                        Featured
                    </span>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="text-gold-600 font-semibold mb-3">{post.category}</span>
                    <h2 className="text-2xl lg:text-3xl font-bold text-olive-800 mb-4 group-hover:text-gold-600 transition-colors">
                        {post.title}
                    </h2>
                    <p className="text-olive-600 leading-relaxed mb-6">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-olive-500 mb-6">
                        <span className="flex items-center gap-2">
                            <FaCalendarAlt className="w-4 h-4 text-gold-500" />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <FaClock className="w-4 h-4 text-gold-500" />
                            {post.readTime}
                        </span>
                    </div>

                    <Button className="self-start">
                        Read Full Article
                        <FaArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </article>
    );
};

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const featuredPosts = getFeaturedPosts();

    // Filter posts based on category and search
    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Simulate initial loading
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main>
            <SEO
                title="Legal Blog"
                description="Read legal insights, updates and articles from Prima Lexus experts. Stay informed about Indian law, court judgments, and legal developments."
                keywords="legal blog, law articles india, legal news, court updates, lawyer insights delhi"
            />
            <Breadcrumbs />
            {/* Hero Section with Premium Background */}
            <section
                className="relative py-20 overflow-hidden"
                style={{
                    backgroundImage: `url(${blogHeroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-olive-900/90 via-olive-900/80 to-olive-900/60"></div>

                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-72 h-72 bg-gold-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Legal Insights & Updates
                        </h1>
                        <p className="text-xl text-olive-200 mb-8">
                            Stay informed with the latest legal news, insights, and updates from Prima Lexus
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-xl mx-auto relative">
                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-olive-400" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-olive-300 focus:outline-none focus:border-gold-400 transition-colors"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && activeCategory === 'All' && !searchQuery && (
                <section className="py-16 bg-olive-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold text-olive-800 mb-8">Featured Articles</h2>
                        <div className="grid lg:grid-cols-2 gap-8">
                            {featuredPosts.map(post => (
                                <FeaturedPost key={post.id} post={post} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Categories Filter */}
            <section className="py-8 bg-white border-b border-olive-100 sticky top-20 z-40">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${activeCategory === category
                                    ? 'bg-gold-500 text-white shadow-lg shadow-gold-500/30'
                                    : 'bg-olive-100 text-olive-700 hover:bg-olive-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    {isLoading ? (
                        // Loading Skeleton
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="bg-olive-50 rounded-2xl overflow-hidden animate-pulse">
                                    <div className="h-56 bg-olive-200"></div>
                                    <div className="p-6 space-y-4">
                                        <div className="h-4 bg-olive-200 rounded w-1/3"></div>
                                        <div className="h-6 bg-olive-200 rounded"></div>
                                        <div className="h-4 bg-olive-200 rounded w-2/3"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : filteredPosts.length > 0 ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post, index) => (
                                <BlogCard key={post.id} post={post} index={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">📝</div>
                            <h3 className="text-2xl font-bold text-olive-800 mb-2">No articles found</h3>
                            <p className="text-olive-600 mb-6">Try adjusting your search or filter criteria</p>
                            <Button onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}>
                                View All Articles
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16" style={{ backgroundColor: '#C89741' }}>
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
                        <p className="text-white/90 mb-8">
                            Subscribe to our newsletter for the latest legal insights and updates
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <Button variant="white" type="submit">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Blog;
