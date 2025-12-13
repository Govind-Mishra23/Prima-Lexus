// Practice areas data with comprehensive content for each practice area page
import {
    FaBalanceScale,
    FaGavel,
    FaUsers,
    FaHome,
    FaBuilding,
    FaShieldAlt,
    FaLaptop,
    FaLightbulb,
    FaHandshake,
    FaFileContract,
    FaUniversity,
    FaGlobe
} from 'react-icons/fa';

export const practiceAreas = [
    {
        id: 1,
        slug: 'civil-laws',
        title: "Civil Laws",
        subtitle: "Expert Civil Litigation Lawyers in Delhi NCR",
        icon: FaBalanceScale,
        description: "Comprehensive civil litigation services including property disputes, contract matters, recovery suits, and civil appeals across all courts.",
        heroDescription: "Civil disputes can be complex and emotionally draining. At Prima Lexus, our experienced civil lawyers provide strategic representation to protect your rights and interests in all civil matters before District Courts, High Courts, and the Supreme Court.",
        services: ["Civil Suits", "Recovery Cases", "Injunction Matters", "Appeals & Revisions"],
        content: [
            {
                title: "Understanding Civil Law in India",
                text: "Civil law in India governs disputes between individuals, organizations, or between the two, wherein compensation is awarded to the victim. Unlike criminal law, civil law does not involve imprisonment. Our civil litigation practice covers a wide range of matters including contracts, property, torts, and family disputes."
            },
            {
                title: "Types of Civil Cases We Handle",
                text: "Our civil litigation team handles diverse matters including breach of contract cases, property disputes, partition suits, specific performance cases, recovery of money, declaratory suits, permanent and temporary injunctions, and appeals in civil matters. We represent clients at all levels of the judiciary."
            },
            {
                title: "Our Civil Litigation Approach",
                text: "We believe in thorough case preparation, meticulous documentation, and strategic litigation. Our team analyzes each case's merits, advises on the best course of action, and provides zealous representation. We also encourage alternative dispute resolution when it serves our client's best interests."
            }
        ],
        fullServices: [
            "Civil Suit Filing & Defense",
            "Money Recovery Suits",
            "Property Dispute Litigation",
            "Contract Enforcement",
            "Injunction Applications",
            "Partition Suits",
            "Specific Performance Cases",
            "Civil Appeals & Revisions",
            "Execution of Decrees",
            "Declaration Suits"
        ],
        whyChooseUs: [
            "Decades of civil litigation experience",
            "Strong track record of success",
            "Pan-India court representation",
            "Cost-effective legal solutions",
            "Personalized case strategy"
        ]
    },
    {
        id: 2,
        slug: 'criminal-laws',
        title: "Criminal Laws",
        subtitle: "Expert Criminal Defense Lawyers in Delhi NCR",
        icon: FaGavel,
        description: "Expert criminal defense including bail matters (Regular/Anticipatory), CRPC proceedings, trial representation, and criminal appeals.",
        heroDescription: "Facing criminal charges can be life-altering. At Prima Lexus, our criminal defense lawyers are committed to protecting your rights, freedom, and reputation. We provide aggressive yet strategic defense in all criminal matters.",
        services: ["Bail Applications", "Criminal Trials", "498A Cases", "CRPC Matters", "Criminal Appeals"],
        content: [
            {
                title: "Criminal Defense in India",
                text: "Criminal law in India is governed primarily by the Indian Penal Code (IPC), Code of Criminal Procedure (CrPC), and various special laws. Every accused person has the right to a fair trial and competent legal representation. Our criminal defense team ensures these rights are protected."
            },
            {
                title: "Bail Matters - Regular & Anticipatory",
                text: "We have extensive experience in securing bail for our clients. Whether it's regular bail after arrest, anticipatory bail to prevent arrest, or interim bail, our lawyers present compelling arguments to secure our clients' liberty while ensuring they comply with all legal requirements."
            },
            {
                title: "Criminal Trial Representation",
                text: "Our trial lawyers are skilled in cross-examination, evidence presentation, and legal arguments. We leave no stone unturned in building a strong defense, challenging prosecution evidence, and presenting our client's case in the most favorable light."
            }
        ],
        fullServices: [
            "Anticipatory Bail Applications",
            "Regular Bail Applications",
            "Criminal Trial Defense",
            "498A/Dowry Case Defense",
            "White Collar Crime Defense",
            "NDPS Act Cases",
            "Cheating & Fraud Cases",
            "Criminal Appeals",
            "Quashing of FIR",
            "Compounding of Offenses"
        ],
        whyChooseUs: [
            "Aggressive criminal defense",
            "High success rate in bail matters",
            "24/7 availability for arrests",
            "Experience in complex criminal cases",
            "Discreet and confidential handling"
        ]
    },
    {
        id: 3,
        slug: 'family-laws',
        title: "Family Laws",
        subtitle: "Compassionate Family Law Attorneys in Delhi NCR",
        icon: FaUsers,
        description: "Sensitive handling of family matters including divorce, maintenance, child custody, domestic violence cases, and matrimonial disputes.",
        heroDescription: "Family disputes require a delicate balance of legal expertise and emotional sensitivity. At Prima Lexus, we understand the personal nature of family matters and provide compassionate yet effective legal representation to protect your interests and those of your loved ones.",
        services: ["Divorce Proceedings", "Child Custody", "Maintenance Cases", "Domestic Violence", "Marriage Registration"],
        content: [
            {
                title: "Family Law in India",
                text: "Family law in India is governed by personal laws based on religion as well as secular laws like the Special Marriage Act. Our family law practice covers all aspects including marriage, divorce, maintenance, custody, adoption, and succession. We handle matters under Hindu Marriage Act, Muslim Personal Law, Christian Marriage Act, and Special Marriage Act."
            },
            {
                title: "Divorce & Separation",
                text: "Whether you're seeking a mutual consent divorce or contested divorce, our lawyers guide you through every step. We handle grounds for divorce, settlement negotiations, property division, and ensure fair outcomes. We also assist in obtaining annulment when marriages are void or voidable."
            },
            {
                title: "Child Custody & Support",
                text: "The welfare of the child is paramount in custody matters. We help parents understand their rights, prepare strong custody petitions, and present compelling cases for custody or visitation. We also handle child support and maintenance matters to ensure children's needs are met."
            }
        ],
        fullServices: [
            "Mutual Consent Divorce",
            "Contested Divorce",
            "Child Custody Matters",
            "Maintenance & Alimony",
            "Domestic Violence Cases",
            "Restitution of Conjugal Rights",
            "Judicial Separation",
            "Marriage Registration",
            "Annulment Proceedings",
            "Guardianship Matters"
        ],
        whyChooseUs: [
            "Sensitive handling of family matters",
            "Experience in all personal laws",
            "Focus on amicable resolutions",
            "Strong litigation when needed",
            "Child-centric approach in custody"
        ]
    },
    {
        id: 4,
        slug: 'property-matters',
        title: "Property Matters",
        subtitle: "Expert Property Lawyers in Delhi NCR",
        icon: FaHome,
        description: "Complete property law services covering registration, title verification, property disputes, and real estate documentation.",
        heroDescription: "Property transactions and disputes require meticulous attention to detail and comprehensive legal knowledge. Prima Lexus provides expert legal services for all property-related matters, ensuring your investment and rights are fully protected.",
        services: ["Property Registration", "Title Verification", "Property Disputes", "Partition Suits"],
        content: [
            {
                title: "Property Law Framework",
                text: "Property law in India is governed by the Transfer of Property Act, 1882, Registration Act, 1908, Indian Easements Act, 1882, and various state-specific laws. Understanding these complex legal frameworks is essential for any property transaction or dispute resolution."
            },
            {
                title: "Property Transactions",
                text: "We assist clients in all aspects of property transactions including due diligence, title search and verification, drafting and reviewing sale deeds and agreements, completing registration formalities, and ensuring compliance with applicable regulations like RERA."
            },
            {
                title: "Property Dispute Resolution",
                text: "Our litigation team handles all types of property disputes including title disputes, boundary disputes, possession matters, partition suits, specific performance cases, landlord-tenant disputes, and matters involving unauthorized construction or encroachment."
            }
        ],
        fullServices: [
            "Property Title Verification",
            "Sale Deed Drafting & Review",
            "Property Registration",
            "Property Dispute Litigation",
            "Partition Suits",
            "Landlord-Tenant Matters",
            "Builder-Buyer Disputes",
            "Property Due Diligence",
            "Lease & License Agreements",
            "Gift Deed & Will Drafting"
        ],
        whyChooseUs: [
            "Thorough due diligence process",
            "Expert documentation",
            "Strong litigation support",
            "RERA compliance expertise",
            "Pan-India property practice"
        ]
    },
    {
        id: 5,
        slug: 'corporate-laws',
        title: "Corporate Laws",
        subtitle: "Comprehensive Corporate Legal Services",
        icon: FaBuilding,
        description: "Business legal solutions including company formation, compliance, contracts, mergers & acquisitions, and corporate governance.",
        heroDescription: "In today's complex business environment, sound legal advice is crucial for success. Prima Lexus provides comprehensive corporate legal services to businesses of all sizes, from startups to established corporations, ensuring legal compliance and strategic growth.",
        services: ["Company Formation", "Corporate Compliance", "M&A", "Corporate Governance"],
        content: [
            {
                title: "Corporate Law in India",
                text: "Corporate law in India is primarily governed by the Companies Act, 2013, LLP Act, 2008, and various regulations by SEBI, RBI, and other authorities. Our corporate practice covers the entire lifecycle of businesses from incorporation to dissolution, including all regulatory compliance requirements."
            },
            {
                title: "Business Formation & Structure",
                text: "Choosing the right business structure is crucial. We advise clients on the optimal structure - whether private limited company, LLP, partnership, or sole proprietorship - based on their business needs, liability concerns, tax implications, and growth plans."
            },
            {
                title: "Mergers, Acquisitions & Restructuring",
                text: "Our M&A practice covers due diligence, deal structuring, documentation, regulatory approvals, and post-merger integration. We also handle corporate restructuring including demergers, amalgamations, and schemes of arrangement."
            }
        ],
        fullServices: [
            "Company Incorporation",
            "LLP Formation",
            "Annual Compliance",
            "Corporate Restructuring",
            "Mergers & Acquisitions",
            "Joint Ventures",
            "Shareholder Agreements",
            "Board Advisory",
            "SEBI/RBI Compliance",
            "Winding Up & Dissolution"
        ],
        whyChooseUs: [
            "Comprehensive corporate expertise",
            "Practical business-oriented advice",
            "Strong regulatory network",
            "M&A transaction experience",
            "Ongoing compliance support"
        ]
    },
    {
        id: 6,
        slug: 'consumer-laws',
        title: "Consumer Laws",
        subtitle: "Consumer Protection Lawyers in Delhi NCR",
        icon: FaShieldAlt,
        description: "Consumer protection services including complaints, compensation claims, and representation before Consumer Forums.",
        heroDescription: "Every consumer deserves fair treatment and quality products and services. Prima Lexus provides expert representation in consumer disputes, fighting for your rights and ensuring you receive just compensation for any deficiency or defect.",
        services: ["Consumer Complaints", "Compensation Claims", "Forum Representation"],
        content: [
            {
                title: "Consumer Protection Act, 2019",
                text: "The Consumer Protection Act, 2019 provides a robust framework for consumer rights with provisions for product liability, unfair contracts, and e-commerce regulations. The three-tier redressal mechanism - District Forum, State Commission, and National Commission - ensures accessible justice."
            },
            {
                title: "Types of Consumer Grievances",
                text: "We handle all types of consumer complaints including defective products, deficient services, overcharging, unfair trade practices, misleading advertisements, and hazardous goods. Our experience spans sectors including healthcare, banking, insurance, real estate, automobiles, and e-commerce."
            },
            {
                title: "Consumer Forum Procedure",
                text: "Consumer forums provide a simplified, speedy, and inexpensive procedure for complaint resolution. We guide clients through filing, evidence presentation, arguments, and execution of orders, including appeals to higher forums when necessary."
            }
        ],
        fullServices: [
            "Consumer Complaint Drafting",
            "District Forum Representation",
            "State Commission Matters",
            "National Commission Cases",
            "Product Liability Claims",
            "Service Deficiency Cases",
            "Medical Negligence Claims",
            "Insurance Disputes",
            "E-commerce Complaints",
            "Execution of Consumer Orders"
        ],
        whyChooseUs: [
            "Consumer law specialists",
            "All-India forum representation",
            "High success rate",
            "Maximum compensation focus",
            "Contingency fee options"
        ]
    },
    {
        id: 7,
        slug: 'cyber-laws',
        title: "Cyber Laws",
        subtitle: "Cyber Crime & IT Law Specialists",
        icon: FaLaptop,
        description: "Digital age legal services covering cyber crimes, data protection, online fraud, and IT Act matters.",
        heroDescription: "In today's digital world, cyber crimes and IT-related legal issues are increasingly common. Prima Lexus provides specialized legal services combining legal expertise with technical understanding to protect your digital rights and interests.",
        services: ["Cyber Crime Cases", "Data Protection", "Online Fraud", "IT Act Matters"],
        content: [
            {
                title: "Information Technology Act, 2000",
                text: "The IT Act, 2000 and its amendments provide the legal framework for electronic governance and cyber crimes in India. It covers offenses like hacking, identity theft, phishing, cyber stalking, cyber terrorism, and provides for intermediary liability and data protection."
            },
            {
                title: "Cyber Crime Investigation & Prosecution",
                text: "We handle cyber crime matters from complaint filing to investigation coordination with cyber cells, evidence preservation, prosecution or defense in trial, and appeals. Our team works with digital forensic experts to build strong cases."
            },
            {
                title: "Data Protection & Privacy",
                text: "With the Digital Personal Data Protection Act, 2023, data privacy compliance is crucial. We advise businesses on data protection policies, consent mechanisms, data breach protocols, and handle cases of unauthorized data collection or misuse."
            }
        ],
        fullServices: [
            "Cyber Crime Complaints",
            "Online Fraud Cases",
            "Social Media Defamation",
            "Data Breach Response",
            "IT Act Compliance",
            "Cyber Stalking Cases",
            "Identity Theft Matters",
            "Privacy Policy Drafting",
            "DPDP Act Compliance",
            "Digital Evidence Matters"
        ],
        whyChooseUs: [
            "Tech-savvy legal team",
            "Cyber cell coordination",
            "Digital forensics network",
            "Quick response to cyber crimes",
            "Corporate IT compliance advisory"
        ]
    },
    {
        id: 8,
        slug: 'intellectual-property',
        title: "Intellectual Property",
        subtitle: "IP Protection & Litigation Lawyers",
        icon: FaLightbulb,
        description: "IP protection services including trademark registration, copyright, patent filing, and IP litigation.",
        heroDescription: "Your intellectual property is a valuable business asset. Prima Lexus provides comprehensive IP services from registration to enforcement, ensuring your creative works, brands, and inventions are fully protected.",
        services: ["Trademark Registration", "Copyright", "Patent Filing", "IP Litigation"],
        content: [
            {
                title: "Intellectual Property Rights in India",
                text: "India has a robust IP framework governed by the Trade Marks Act, Copyright Act, Patents Act, and Designs Act. Strong IP protection is essential for businesses to protect their brands, creative works, and innovations from infringement and unfair competition."
            },
            {
                title: "IP Registration & Protection",
                text: "We assist clients in registering and protecting all forms of intellectual property - trademarks for brands and logos, copyrights for creative works, patents for inventions, and designs for product aesthetics. Our thorough search and filing process minimizes rejection risks."
            },
            {
                title: "IP Enforcement & Litigation",
                text: "When your IP rights are infringed, we take swift action. Our IP litigation practice handles cease and desist notices, infringement suits, passing off actions, and domain name disputes. We also defend clients against baseless IP claims."
            }
        ],
        fullServices: [
            "Trademark Registration",
            "Trademark Opposition",
            "Copyright Registration",
            "Patent Filing & Prosecution",
            "Design Registration",
            "IP Due Diligence",
            "IP Licensing Agreements",
            "Infringement Litigation",
            "Domain Name Disputes",
            "IP Portfolio Management"
        ],
        whyChooseUs: [
            "Specialized IP expertise",
            "End-to-end IP services",
            "Strong enforcement track record",
            "International IP coordination",
            "Industry-specific experience"
        ]
    },
    {
        id: 9,
        slug: 'arbitration-mediation',
        title: "Arbitration & Mediation",
        subtitle: "Alternative Dispute Resolution Specialists",
        icon: FaHandshake,
        description: "Alternative dispute resolution through arbitration and mediation for efficient conflict resolution.",
        heroDescription: "Not all disputes need courtroom battles. Prima Lexus offers expert alternative dispute resolution services through arbitration and mediation, providing faster, cost-effective, and confidential solutions to complex disputes.",
        services: ["Commercial Arbitration", "Mediation Services", "Conciliation", "ADR Counseling"],
        content: [
            {
                title: "Alternative Dispute Resolution in India",
                text: "ADR mechanisms like arbitration, mediation, and conciliation are governed by the Arbitration and Conciliation Act, 1996. These procedures offer advantages like speed, confidentiality, flexibility, and party autonomy compared to traditional litigation."
            },
            {
                title: "Arbitration Practice",
                text: "We represent clients in domestic and international commercial arbitrations under various institutional rules (ICC, SIAC, LCIA, DIAC) and ad-hoc arbitrations. Our team handles arbitration from clause drafting to award enforcement, including setting aside proceedings."
            },
            {
                title: "Mediation & Conciliation",
                text: "Our trained mediators help parties reach mutually acceptable solutions without adversarial proceedings. We handle commercial disputes, family matters, and employment issues through mediation, preserving relationships while resolving conflicts."
            }
        ],
        fullServices: [
            "Domestic Arbitration",
            "International Arbitration",
            "Institutional Arbitration",
            "Ad-hoc Arbitration",
            "Mediation Services",
            "Conciliation Proceedings",
            "Arbitration Clause Drafting",
            "Award Enforcement",
            "Section 34 Applications",
            "Pre-institution Mediation"
        ],
        whyChooseUs: [
            "Trained arbitrators on team",
            "International arbitration experience",
            "Certified mediators",
            "Quick dispute resolution",
            "Cost-effective solutions"
        ]
    },
    {
        id: 10,
        slug: 'documentation-services',
        title: "Documentation Services",
        subtitle: "Professional Legal Documentation",
        icon: FaFileContract,
        description: "Legal drafting and documentation including contracts, MOUs, deeds, wills, trusts, and agreements.",
        heroDescription: "Proper legal documentation is the foundation of any successful transaction or relationship. Prima Lexus provides expert drafting and review services, ensuring your documents are legally sound, clear, and fully protect your interests.",
        services: ["Contract Drafting", "Deed Preparation", "Will & Trust", "Agreement Drafting"],
        content: [
            {
                title: "Importance of Legal Documentation",
                text: "Well-drafted legal documents prevent disputes, establish clear rights and obligations, and provide legal recourse when needed. Our documentation services cover personal, business, and property matters, tailored to each client's specific needs."
            },
            {
                title: "Contract & Agreement Drafting",
                text: "We draft and review all types of contracts and agreements - employment contracts, service agreements, NDAs, MOUs, joint venture agreements, franchise agreements, and more. Each document is crafted to protect your interests while being commercially practical."
            },
            {
                title: "Property & Succession Documents",
                text: "Our documentation practice includes sale deeds, gift deeds, lease agreements, power of attorney, wills, trusts, and succession-related documents. We ensure proper execution and registration where required."
            }
        ],
        fullServices: [
            "Contract Drafting & Review",
            "Sale Deed Preparation",
            "Lease & License Deeds",
            "Will Drafting",
            "Trust Deed Preparation",
            "Power of Attorney",
            "Affidavit Preparation",
            "MOU & LOI Drafting",
            "Partnership Deeds",
            "Employment Contracts"
        ],
        whyChooseUs: [
            "Expert drafting team",
            "Clear, precise language",
            "Quick turnaround",
            "Registered deed assistance",
            "Affordable pricing"
        ]
    },
    {
        id: 11,
        slug: 'ngo-society',
        title: "NGO & Society",
        subtitle: "NGO & Trust Registration Experts",
        icon: FaUniversity,
        description: "Registration and compliance services for NGOs, trusts, societies, and partnership firms.",
        heroDescription: "Setting up a non-profit organization requires navigating complex regulations. Prima Lexus provides comprehensive services for NGO, trust, and society registration, along with ongoing compliance support to ensure your organization operates smoothly.",
        services: ["NGO Registration", "Trust Formation", "Society Registration", "Compliance"],
        content: [
            {
                title: "Non-Profit Structures in India",
                text: "Non-profit organizations in India can be structured as trusts (under Indian Trusts Act or state-specific laws), societies (under Societies Registration Act, 1860), or Section 8 companies (under Companies Act, 2013). Each structure has its own advantages, governance requirements, and compliance obligations."
            },
            {
                title: "Registration Process",
                text: "We handle the entire registration process including drafting trust deeds or memoranda, preparing required documents, liaison with registering authorities, and obtaining registration certificates. We also assist with FCRA registration for organizations receiving foreign contributions."
            },
            {
                title: "Compliance & Governance",
                text: "Ongoing compliance is crucial for non-profits. We assist with annual filings, board meetings, 80G and 12A registrations for tax benefits, FCRA compliance, and governance advisory to ensure your organization remains in good standing."
            }
        ],
        fullServices: [
            "Trust Registration",
            "Society Registration",
            "Section 8 Company Formation",
            "NGO Compliance Advisory",
            "80G & 12A Registration",
            "FCRA Registration",
            "Annual Compliance Filings",
            "Amendment of Trust Deeds",
            "Board Governance Advisory",
            "CSR Compliance"
        ],
        whyChooseUs: [
            "Specialized NGO expertise",
            "End-to-end registration support",
            "Ongoing compliance assistance",
            "Tax benefit optimization",
            "FCRA specialization"
        ]
    },
    {
        id: 12,
        slug: 'international-trade',
        title: "International Trade",
        subtitle: "Cross-Border Trade & Commerce Lawyers",
        icon: FaGlobe,
        description: "International business law including trade agreements, cross-border transactions, and commercial arbitration.",
        heroDescription: "Global business requires understanding of international trade laws, cross-border regulations, and dispute resolution mechanisms. Prima Lexus provides expert guidance for businesses engaged in international commerce and trade.",
        services: ["Trade Agreements", "Cross-border Transactions", "International Arbitration"],
        content: [
            {
                title: "International Trade Law",
                text: "International trade is governed by WTO agreements, bilateral trade treaties, FEMA regulations, customs laws, and various export-import policies. Navigating this complex regulatory landscape requires specialized expertise that our international trade practice provides."
            },
            {
                title: "Cross-Border Transactions",
                text: "We assist clients with structuring cross-border transactions, foreign investment compliance (FEMA/RBI), international contracts, trade finance documentation, customs matters, and regulatory approvals. Our goal is to facilitate smooth international business operations."
            },
            {
                title: "International Dispute Resolution",
                text: "When cross-border disputes arise, we represent clients in international commercial arbitration under ICC, SIAC, LCIA, and other institutional rules. We also handle enforcement of foreign awards and judgments in India."
            }
        ],
        fullServices: [
            "International Contracts",
            "FEMA & RBI Compliance",
            "Export-Import Advisory",
            "Foreign Investment Structuring",
            "Trade Finance Documentation",
            "Customs & Trade Remedies",
            "International Joint Ventures",
            "Technology Transfer Agreements",
            "International Arbitration",
            "Foreign Judgment Enforcement"
        ],
        whyChooseUs: [
            "International trade expertise",
            "Cross-border transaction experience",
            "FEMA/RBI compliance specialists",
            "Global arbitration network",
            "Multi-jurisdictional coordination"
        ]
    }
];

export const getPracticeAreaBySlug = (slug) => {
    return practiceAreas.find(area => area.slug === slug);
};

export default practiceAreas;
