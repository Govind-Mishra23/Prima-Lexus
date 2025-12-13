// Blog data with images from assets
// Full-size images with thumbnail versions for progressive loading

// Import all blog images
import img2Full from '../assets/vlog/2.jpg';
import img2Thumb from '../assets/vlog/2-288x288h.jpg';
import img3 from '../assets/vlog/3.jpg';
import imgDSCN1186Full from '../assets/vlog/DSCN1186.jpeg';
import imgDSCN1186Thumb from '../assets/vlog/DSCN1186-288x288h.jpeg';
import imgDSCN1188Full from '../assets/vlog/DSCN1188.jpeg';
import imgDSCN1188Thumb from '../assets/vlog/DSCN1188-288x288h.jpeg';
import imgDSCN1189Full from '../assets/vlog/DSCN1189.jpg';
import imgDSCN1189Thumb from '../assets/vlog/DSCN1189-288x288h.jpg';
import imgDSCN1190 from '../assets/vlog/DSCN1190.jpeg';
import imgDSCN1196 from '../assets/vlog/DSCN1196.jpeg';
import imgDSCN1199 from '../assets/vlog/DSCN1199.jpeg';
import imgDSCN1432 from '../assets/vlog/DSCN1432.jpeg';
import imgDSCN1435Full from '../assets/vlog/DSCN1435.jpeg';
import imgDSCN1435Thumb from '../assets/vlog/DSCN1435-288x288h.jpeg';
import imgDSCN1449Full from '../assets/vlog/DSCN1449.jpeg';
import imgDSCN1449Thumb from '../assets/vlog/DSCN1449-288x288h.jpeg';
import imgDSCN1450Full from '../assets/vlog/DSCN1450.jpeg';
import imgDSCN1450Thumb from '../assets/vlog/DSCN1450-288x288h.jpeg';
import imgDSCN1454Full from '../assets/vlog/DSCN1454.jpeg';
import imgDSCN1454Thumb from '../assets/vlog/DSCN1454-288x288h.jpeg';
import imgDSC2035Full from '../assets/vlog/DSC_2035.jpg';
import imgDSC2035Thumb from '../assets/vlog/DSC_2035-288x288h.jpg';
import imgDSC2313Full from '../assets/vlog/DSC_2313.jpg';
import imgDSC2313Thumb from '../assets/vlog/DSC_2313-288x288h.jpg';
import imgDSC2318 from '../assets/vlog/DSC_2318.jpg';
import imgDSC2319Full from '../assets/vlog/DSC_2319.jpg';
import imgDSC2319Thumb from '../assets/vlog/DSC_2319-288x288w.jpg';
import imgLawyersProtestFull from '../assets/vlog/lawyers-protest_759.jpg';
import imgLawyersProtestThumb from '../assets/vlog/lawyers-protest_759-288x288h.jpg';
import img20150919 from '../assets/vlog/20150919_2108551.jpg';
import img20150922_1 from '../assets/vlog/20150922_112910.jpg';
import img20150922_2 from '../assets/vlog/20150922_113123.jpg';

export const blogPosts = [
    {
        id: 1,
        title: "Understanding Your Rights in Property Disputes",
        excerpt: "Property disputes are among the most common legal issues in India. Learn about your rights and how to protect your property interests.",
        category: "Property Law",
        date: "December 5, 2024",
        author: "Advocate Arun Tiwari",
        image: imgDSC2035Full,
        thumbnail: imgDSC2035Thumb,
        readTime: "5 min read",
        featured: true
    },
    {
        id: 2,
        title: "Lawyers Conference 2024: Key Takeaways",
        excerpt: "Highlights from the annual lawyers conference discussing important legal reforms and developments in the Indian judiciary.",
        category: "Legal News",
        date: "November 28, 2024",
        author: "Prima Lexus Team",
        image: imgLawyersProtestFull,
        thumbnail: imgLawyersProtestThumb,
        readTime: "4 min read",
        featured: true
    },
    {
        id: 3,
        title: "Court Proceedings: What to Expect",
        excerpt: "First time in court? Here's a comprehensive guide on what to expect during legal proceedings in Indian courts.",
        category: "Legal Guide",
        date: "November 20, 2024",
        author: "Advocate Arun Tiwari",
        image: imgDSCN1186Full,
        thumbnail: imgDSCN1186Thumb,
        readTime: "6 min read",
        featured: false
    },
    {
        id: 4,
        title: "Family Law Updates 2024",
        excerpt: "Recent amendments and supreme court judgments that have shaped family law in India this year.",
        category: "Family Law",
        date: "November 15, 2024",
        author: "Prima Lexus Team",
        image: imgDSCN1188Full,
        thumbnail: imgDSCN1188Thumb,
        readTime: "7 min read",
        featured: false
    },
    {
        id: 5,
        title: "Legal Advocacy Workshop",
        excerpt: "Our team conducted a successful advocacy workshop for young lawyers focusing on courtroom skills and ethics.",
        category: "Events",
        date: "November 10, 2024",
        author: "Prima Lexus Team",
        image: imgDSCN1189Full,
        thumbnail: imgDSCN1189Thumb,
        readTime: "3 min read",
        featured: false
    },
    {
        id: 6,
        title: "Corporate Compliance Essentials",
        excerpt: "A guide to understanding corporate compliance requirements under the Companies Act 2013.",
        category: "Corporate Law",
        date: "November 5, 2024",
        author: "Advocate Arun Tiwari",
        image: imgDSCN1435Full,
        thumbnail: imgDSCN1435Thumb,
        readTime: "8 min read",
        featured: false
    },
    {
        id: 7,
        title: "Consumer Rights: Know Before You Buy",
        excerpt: "Understanding the Consumer Protection Act 2019 and how it empowers buyers against unfair trade practices.",
        category: "Consumer Law",
        date: "October 28, 2024",
        author: "Prima Lexus Team",
        image: imgDSCN1449Full,
        thumbnail: imgDSCN1449Thumb,
        readTime: "5 min read",
        featured: false
    },
    {
        id: 8,
        title: "Office Inauguration Ceremony",
        excerpt: "Prima Lexus expands its presence with a new office to better serve clients in the region.",
        category: "Events",
        date: "October 20, 2024",
        author: "Prima Lexus Team",
        image: imgDSCN1450Full,
        thumbnail: imgDSCN1450Thumb,
        readTime: "2 min read",
        featured: false
    },
    {
        id: 9,
        title: "Cyber Crime Prevention Tips",
        excerpt: "Protect yourself from online fraud and cyber crimes with these essential security practices.",
        category: "Cyber Law",
        date: "October 15, 2024",
        author: "Advocate Arun Tiwari",
        image: imgDSCN1454Full,
        thumbnail: imgDSCN1454Thumb,
        readTime: "6 min read",
        featured: false
    },
    {
        id: 10,
        title: "Legal Aid Camp Success",
        excerpt: "Our legal aid camp provided free consultations to over 100 individuals in need of legal assistance.",
        category: "Events",
        date: "October 10, 2024",
        author: "Prima Lexus Team",
        image: imgDSC2313Full,
        thumbnail: imgDSC2313Thumb,
        readTime: "3 min read",
        featured: false
    },
    {
        id: 11,
        title: "Supreme Court Landmark Judgments 2024",
        excerpt: "A review of the most impactful Supreme Court decisions that have shaped Indian law this year.",
        category: "Legal News",
        date: "October 5, 2024",
        author: "Advocate Arun Tiwari",
        image: imgDSC2319Full,
        thumbnail: imgDSC2319Thumb,
        readTime: "10 min read",
        featured: false
    },
    {
        id: 12,
        title: "Team Building & Training",
        excerpt: "Investing in our team's growth with regular training sessions and professional development programs.",
        category: "Events",
        date: "September 28, 2024",
        author: "Prima Lexus Team",
        image: img2Full,
        thumbnail: img2Thumb,
        readTime: "4 min read",
        featured: false
    }
];

export const categories = [
    "All",
    "Legal News",
    "Property Law",
    "Family Law",
    "Corporate Law",
    "Consumer Law",
    "Cyber Law",
    "Legal Guide",
    "Events"
];

export const getBlogById = (id) => blogPosts.find(post => post.id === parseInt(id));
export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);
export const getPostsByCategory = (category) =>
    category === "All" ? blogPosts : blogPosts.filter(post => post.category === category);

export default blogPosts;
