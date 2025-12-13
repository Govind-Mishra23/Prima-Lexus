// Team members data for Prima Lexus Law Firm

// Import images
import arunImage from '../assets/arun1.png';

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
    }
];

export const getFeaturedMember = () => teamMembers.find(member => member.isFeatured);

export default teamMembers;
