// Team members data for Prima Lexus Law Firm

// Import images
import arunImage from '../assets/arun1.png';
import akDubeyImage from '../assets/ak_dubey.png';

export const teamMembers = [
    {
        id: 1,
        name: "Advocate Arun Tiwari",
        designation: "Founder & Senior Advocate",
        image: arunImage,
        bio: "A distinguished legal professional with extensive experience in Civil, Criminal, Family, and Corporate law. Advocate Arun Tiwari leads Prima Lexus with a vision to provide exceptional legal services across India.",
        expertise: ["Civil Laws", "Criminal Laws", "Family Laws", "Corporate Laws"],
        education: "LL.B, LL.M",
        experience: "15+ Years",
        isFeatured: true
    },
    {
        id: 2,
        name: "Adv A K Dubey",
        designation: "Advocate Supreme Court of India",
        image: akDubeyImage,
        bio: "A distinguished Advocate at the Supreme Court of India.",
        expertise: ["Supreme Court Litigation", "Constitutional Law"],
        education: "LL.B",
        experience: "Experienced",
        isFeatured: false
    }
];

export const getFeaturedMember = () => teamMembers.find(member => member.isFeatured);

export default teamMembers;
