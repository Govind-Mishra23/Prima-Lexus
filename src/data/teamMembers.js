// Team members data for Prima Lexus Law Firm

// Import images
import arunImage from '../assets/arun1.png';
import akDubeyImage from '../assets/ak_dubey.png';
import anikeshTiwariImage from '../assets/AnikeshTiwari.png';
import mukundImage from '../assets/Mukund.png';
import panchamKumarImage from '../assets/PanchamKumar.png';
import preetiTiwariImage from '../assets/PreetiTiwari.png';
import PratimaTiwari from '../assets/PratimaTiwari.png' ; 

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
    },
    {
        id: 3,
        name: "Adv Pancham Kumar",
        designation: "Counsel Govt. of India\nSupreme Court of India",
        image: panchamKumarImage,
        imagePosition: "center 20%",
        bio: "A committed legal professional at Prima Lexus.",
        expertise: ["Legal Consultation", "Case Strategy"],
        education: "LL.B",
        experience: "Experienced",
        isFeatured: false
    },
    {
        id: 4,
        name: "Adv Pratima Tiwari",
        designation: "Advocate supreme court of India ",
        image: PratimaTiwari,
        imagePosition: "center 18%",
        bio: "A dedicated Advocate at the Supreme Court of India.",
        expertise: ["Supreme Court Litigation", "Constitutional Law"],
        education: "LL.B",
        experience: "Experienced",
        isFeatured: false
    },
    {
        id: 5,
        name: "Adv Anikesh Tiwari",
        designation: "Advocate ",
        image: anikeshTiwariImage,
        bio: "A dedicated Advocate at the Supreme Court of India.",
        expertise: ["Supreme Court Litigation", "Constitutional Law"],
        education: "LL.B",
        experience: "Experienced",
        isFeatured: false
    },
      {
        id: 6,
        name: "Preeti Tiwari",
        designation: "Advocate",
        image: preetiTiwariImage,
        bio: "A dedicated legal professional at Prima Lexus.",
        expertise: ["Legal Consultation", "Client Representation"],
        education: "LL.B",
        experience: "Experienced",
        isFeatured: false
    },
    {
        id: 7,
        name: "Mukund Sharan",
        designation: "Advocate",
        image: mukundImage,
        bio: "A dedicated legal professional at Prima Lexus.",
        expertise: ["Legal Consultation", "Case Strategy"],
        education: "LL.B",
        experience: "Experienced",
        isFeatured: false
    }
  
];

export const getFeaturedMember = () => teamMembers.find(member => member.isFeatured);

export default teamMembers;
