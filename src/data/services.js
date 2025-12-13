// Services data with comprehensive content for each service page
import {
    FaChild,
    FaFileContract,
    FaUniversity,
    FaHome,
    FaGavel,
    FaBalanceScale,
    FaBuilding,
    FaShieldAlt,
    FaLaptop,
    FaHeart
} from 'react-icons/fa';

export const servicesData = [
    {
        id: 'child-custody',
        slug: 'child-custody',
        title: 'Child Custody Lawyer',
        subtitle: 'Child Custody Lawyers in Delhi NCR',
        icon: FaChild,
        heroDescription: 'When it comes to child custody, the stakes are incredibly high. At Prima Lexus, we understand how important it is to protect your child\'s best interests while navigating the legal complexities with care and sensitivity.',
        description: 'Our experienced team provides services of the best child custody lawyers in Delhi NCR, offering compassionate yet strong representation for parents facing custody disputes, visitation challenges, or child maintenance issues. We believe every child deserves a safe and nurturing environment.',
        content: [
            {
                title: 'Understanding Child Custody Laws in India',
                text: 'Child custody matters in India are governed by various personal laws and the Guardians and Wards Act, 1890. The paramount consideration in any custody dispute is the welfare and best interests of the child. Our lawyers have extensive experience in navigating these complex legal frameworks to secure favorable outcomes for our clients.'
            },
            {
                title: 'Types of Child Custody',
                text: 'Indian courts recognize different types of custody arrangements including physical custody (where the child resides), legal custody (decision-making authority), sole custody, joint custody, and visitation rights. We help parents understand their options and fight for the arrangement that best serves their child\'s needs.'
            },
            {
                title: 'Our Approach',
                text: 'We approach every child custody case with sensitivity and dedication. Our team works closely with families to understand their unique circumstances, gather necessary evidence, and present compelling arguments in court. We prioritize amicable resolutions when possible but are fully prepared for litigation when necessary.'
            }
        ],
        services: [
            'Child Custody Disputes',
            'Visitation Rights',
            'Child Maintenance & Support',
            'Guardianship Matters',
            'Modification of Custody Orders',
            'Interstate Custody Disputes',
            'International Child Custody'
        ],
        whyChooseUs: [
            'Specialized expertise in family law matters',
            'Compassionate and child-focused approach',
            'Strong track record in custody cases',
            'Experienced in both litigation and mediation',
            'Pan-India legal representation'
        ]
    },
    {
        id: 'legal-documentation',
        slug: 'legal-documentation',
        title: 'Legal Documentation',
        subtitle: 'Professional Legal Documentation Services',
        icon: FaFileContract,
        heroDescription: 'Proper legal documentation is the foundation of any successful legal matter. Prima Lexus provides comprehensive documentation services ensuring your documents are legally sound, properly drafted, and fully compliant with applicable laws.',
        description: 'From contracts and agreements to property deeds and corporate documents, our experienced legal team ensures every document is meticulously prepared, reviewed, and executed to protect your interests and prevent future disputes.',
        content: [
            {
                title: 'Importance of Proper Legal Documentation',
                text: 'Well-drafted legal documents serve as the backbone of any transaction or agreement. They establish clear terms, protect the rights of all parties, and provide legal recourse in case of disputes. Our documentation services ensure your interests are fully protected.'
            },
            {
                title: 'Document Drafting & Review',
                text: 'Our team of experienced lawyers specializes in drafting and reviewing various legal documents including contracts, agreements, MOUs, partnership deeds, sale deeds, lease agreements, wills, trusts, and corporate documents. Each document is tailored to meet your specific requirements.'
            },
            {
                title: 'Due Diligence & Verification',
                text: 'We conduct thorough due diligence and verification of documents to ensure authenticity and legal validity. This includes title verification for properties, background checks for business transactions, and compliance verification for regulatory matters.'
            }
        ],
        services: [
            'Contract Drafting & Review',
            'Agreement Preparation',
            'Property Documentation',
            'Will & Testament Drafting',
            'Trust Formation Documents',
            'Power of Attorney',
            'Affidavit Preparation',
            'MOU & Partnership Deeds',
            'Corporate Documentation'
        ],
        whyChooseUs: [
            'Expert legal drafting team',
            'Attention to detail',
            'Quick turnaround time',
            'Affordable pricing',
            'Comprehensive review process'
        ]
    },
    {
        id: 'debt-recovery',
        slug: 'debt-recovery',
        title: 'Debt Recovery Tribunal',
        subtitle: 'Expert DRT & DRAT Lawyers',
        icon: FaUniversity,
        heroDescription: 'Navigating debt recovery proceedings requires specialized legal expertise. Prima Lexus offers comprehensive representation before Debt Recovery Tribunals (DRT) and Debt Recovery Appellate Tribunals (DRAT) across India.',
        description: 'Our team of experienced DRT lawyers assists banks, financial institutions, and creditors in recovering dues efficiently while also representing borrowers in defending against unjust claims and negotiating favorable settlements.',
        content: [
            {
                title: 'Debt Recovery Tribunals in India',
                text: 'Debt Recovery Tribunals (DRTs) were established under the Recovery of Debts Due to Banks and Financial Institutions Act, 1993 (RDDBFI Act) to provide a speedy mechanism for recovery of debts. These specialized tribunals handle cases involving debts of Rs. 20 lakhs and above.'
            },
            {
                title: 'SARFAESI Act Proceedings',
                text: 'We handle matters under the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act). This includes representing clients in possession proceedings, auction matters, and appeals against bank actions.'
            },
            {
                title: 'Our DRT Practice',
                text: 'Our comprehensive DRT practice includes filing Original Applications, defending against recovery proceedings, negotiating settlements, representing in asset possession matters, and handling appeals before DRAT. We have successfully represented clients in complex debt recovery matters.'
            }
        ],
        services: [
            'Original Application Filing',
            'Defense in DRT Proceedings',
            'SARFAESI Act Matters',
            'Asset Possession Cases',
            'Settlement Negotiations',
            'DRAT Appeals',
            'Securitization Matters',
            'One Time Settlement (OTS)'
        ],
        whyChooseUs: [
            'Specialized DRT expertise',
            'Pan-India DRT representation',
            'Strong negotiation skills',
            'High success rate',
            'Cost-effective solutions'
        ]
    },
    {
        id: 'property-lawyer',
        slug: 'property-lawyer',
        title: 'Property Lawyer',
        subtitle: 'Expert Property & Real Estate Lawyers',
        icon: FaHome,
        heroDescription: 'Property matters require meticulous attention to detail and comprehensive legal knowledge. Prima Lexus provides expert legal services for all property-related matters, from purchase and sale to dispute resolution.',
        description: 'Our property law experts handle everything from property registration and title verification to complex litigation involving land disputes, partition suits, and development agreements. We protect your property rights with diligence and expertise.',
        content: [
            {
                title: 'Property Law in India',
                text: 'Property law in India is governed by various statutes including the Transfer of Property Act, 1882, Registration Act, 1908, and state-specific laws. Understanding these complex legal frameworks is essential for any property transaction or dispute resolution.'
            },
            {
                title: 'Property Transactions',
                text: 'We assist clients in all aspects of property transactions including due diligence, title verification, drafting sale deeds and agreements, registration, and compliance with applicable regulations. Our thorough approach minimizes risks and ensures smooth transactions.'
            },
            {
                title: 'Property Disputes',
                text: 'Our litigation team has extensive experience in handling property disputes including title disputes, boundary disputes, partition suits, specific performance cases, and matters involving unauthorized construction or encroachment.'
            }
        ],
        services: [
            'Property Registration',
            'Title Verification & Search',
            'Sale Deed Drafting',
            'Builder-Buyer Agreements',
            'Property Dispute Resolution',
            'Partition Suits',
            'Landlord-Tenant Matters',
            'Property Due Diligence',
            'Development Agreements'
        ],
        whyChooseUs: [
            'Extensive property law expertise',
            'Thorough due diligence process',
            'Strong litigation support',
            'Pan-India property practice',
            'Comprehensive documentation'
        ]
    },
    {
        id: 'delhi-high-court',
        slug: 'delhi-high-court',
        title: 'Delhi High Court Lawyer',
        subtitle: 'Experienced Delhi High Court Advocates',
        icon: FaGavel,
        heroDescription: 'The Delhi High Court is one of India\'s most important courts with original and appellate jurisdiction over a wide range of matters. Prima Lexus has a dedicated team of advocates practicing before the Delhi High Court.',
        description: 'Our experienced High Court advocates handle civil, criminal, constitutional, and writ matters. We provide strategic legal representation backed by thorough research, compelling arguments, and a deep understanding of High Court procedures.',
        content: [
            {
                title: 'Delhi High Court Jurisdiction',
                text: 'The Delhi High Court has jurisdiction over the National Capital Territory of Delhi and hears appeals from subordinate courts, original suits of certain value, and writ petitions for enforcement of fundamental rights. It also exercises supervisory jurisdiction over lower courts.'
            },
            {
                title: 'Types of Matters We Handle',
                text: 'Our High Court practice encompasses civil appeals, criminal appeals, writ petitions (Article 226), company matters, arbitration appeals, matrimonial appeals, service matters, and constitutional challenges. We have successfully argued before various benches of the Delhi High Court.'
            },
            {
                title: 'Our High Court Practice',
                text: 'Our team includes senior advocates and experienced lawyers with decades of practice before the Delhi High Court. We combine legal acumen with strategic thinking to achieve favorable outcomes for our clients in complex litigation matters.'
            }
        ],
        services: [
            'Civil Appeals',
            'Criminal Appeals',
            'Writ Petitions',
            'Constitutional Matters',
            'Company Law Matters',
            'Arbitration Appeals',
            'Service Matters',
            'Matrimonial Appeals',
            'Bail Applications'
        ],
        whyChooseUs: [
            'Senior advocates on the team',
            'Extensive High Court experience',
            'Strong success record',
            'Thorough case preparation',
            'Strategic litigation approach'
        ]
    },
    {
        id: 'supreme-court',
        slug: 'supreme-court',
        title: 'Supreme Court Lawyer',
        subtitle: 'Advocates on Record - Supreme Court of India',
        icon: FaBalanceScale,
        heroDescription: 'The Supreme Court of India is the highest judicial forum and the final court of appeal. Prima Lexus has Advocates on Record (AoR) who are authorized to practice before the Supreme Court.',
        description: 'Our Supreme Court practice handles Special Leave Petitions, appeals, writ petitions under Article 32, and matters of constitutional importance. We provide expert representation in the apex court with meticulous preparation and compelling advocacy.',
        content: [
            {
                title: 'Supreme Court of India',
                text: 'The Supreme Court of India is the apex court with original, appellate, and advisory jurisdiction. It is the final interpreter of the Constitution and its decisions are binding on all courts in India. Only Advocates on Record (AoR) can file cases in the Supreme Court.'
            },
            {
                title: 'Special Leave Petitions',
                text: 'Article 136 of the Constitution empowers the Supreme Court to grant special leave to appeal against any judgment from any court or tribunal in India. Our team has extensive experience in drafting and arguing SLPs across various subject matters.'
            },
            {
                title: 'Constitutional Matters',
                text: 'We handle matters of constitutional significance including writ petitions under Article 32 for enforcement of fundamental rights, public interest litigations, and cases involving interpretation of constitutional provisions.'
            }
        ],
        services: [
            'Special Leave Petitions (SLP)',
            'Article 32 Writ Petitions',
            'Civil Appeals',
            'Criminal Appeals',
            'Public Interest Litigation',
            'Constitutional Matters',
            'Review Petitions',
            'Curative Petitions',
            'Transfer Petitions'
        ],
        whyChooseUs: [
            'Advocate on Record on the team',
            'Supreme Court specialization',
            'Constitutional law expertise',
            'Strategic litigation planning',
            'National presence'
        ]
    },
    {
        id: 'rera-matters',
        slug: 'rera-matters',
        title: 'RERA Matters',
        subtitle: 'Real Estate Regulatory Authority Lawyers',
        icon: FaBuilding,
        heroDescription: 'The Real Estate (Regulation and Development) Act, 2016 (RERA) has transformed the real estate sector. Prima Lexus provides expert legal services for all RERA-related matters for both homebuyers and developers.',
        description: 'Our RERA practice includes filing complaints, representing clients before RERA authorities and appellate tribunals, ensuring builder compliance, and helping developers with registration and regulatory requirements.',
        content: [
            {
                title: 'Understanding RERA',
                text: 'RERA was enacted to protect homebuyers and promote transparency in the real estate sector. It mandates project registration, disclosure requirements, and provides a fast-track dispute resolution mechanism. Each state has its own RERA authority.'
            },
            {
                title: 'Homebuyer Rights Under RERA',
                text: 'RERA provides significant protections to homebuyers including right to timely possession, right to claim interest for delays, right to information about projects, and right to seek compensation for defects. We help homebuyers enforce these rights effectively.'
            },
            {
                title: 'Developer Compliance',
                text: 'We assist developers with RERA registration, quarterly updates, compliance with disclosure requirements, and representation in RERA proceedings. Our proactive approach helps developers avoid penalties and maintain regulatory compliance.'
            }
        ],
        services: [
            'RERA Complaint Filing',
            'Builder-Buyer Disputes',
            'Delay Compensation Claims',
            'RERA Authority Representation',
            'Appellate Tribunal Matters',
            'Developer Registration',
            'Compliance Advisory',
            'Project Documentation'
        ],
        whyChooseUs: [
            'Specialized RERA expertise',
            'High success rate in complaints',
            'Both developer and buyer representation',
            'Quick resolution approach',
            'Pan-India RERA practice'
        ]
    },
    {
        id: 'consumer-disputes',
        slug: 'consumer-disputes',
        title: 'Consumer Disputes',
        subtitle: 'Consumer Forum & NCDRC Lawyers',
        icon: FaShieldAlt,
        heroDescription: 'Every consumer has the right to fair treatment and quality products/services. Prima Lexus provides expert representation in consumer disputes before District Forums, State Commissions, and the National Consumer Disputes Redressal Commission (NCDRC).',
        description: 'We handle all types of consumer complaints including defective products, deficient services, unfair trade practices, and misleading advertisements. Our consumer law experts fight for your rights and ensure you receive just compensation.',
        content: [
            {
                title: 'Consumer Protection Act, 2019',
                text: 'The Consumer Protection Act, 2019 provides a robust framework for consumer protection with provisions for product liability, unfair contracts, and e-commerce regulations. The three-tier redressal mechanism ensures accessible justice for consumers.'
            },
            {
                title: 'Types of Consumer Complaints',
                text: 'We handle complaints related to defective products, deficient services, overcharging, unfair trade practices, restrictive trade practices, and hazardous goods. Our team has experience across sectors including healthcare, banking, real estate, and e-commerce.'
            },
            {
                title: 'Consumer Forum Procedure',
                text: 'Consumer forums provide a simplified procedure for complaint resolution. We guide clients through the entire process from complaint filing to execution of orders, including appeals to higher forums when necessary.'
            }
        ],
        services: [
            'Consumer Complaint Filing',
            'Defective Product Claims',
            'Medical Negligence Cases',
            'Banking & Insurance Disputes',
            'E-commerce Complaints',
            'Unfair Trade Practice Cases',
            'Appeals to State Commission',
            'NCDRC Matters',
            'Execution of Consumer Orders'
        ],
        whyChooseUs: [
            'Consumer law specialists',
            'Experience across all forums',
            'No win no fee options',
            'Quick complaint resolution',
            'Maximum compensation focus'
        ]
    },
    {
        id: 'cyber-law',
        slug: 'cyber-law',
        title: 'Cyber Law Cases',
        subtitle: 'Cyber Crime & IT Law Lawyers',
        icon: FaLaptop,
        heroDescription: 'In today\'s digital age, cyber crimes and IT-related legal issues are increasingly common. Prima Lexus provides specialized legal services for all cyber law matters including cyber crimes, data protection, and IT Act cases.',
        description: 'Our cyber law practice handles cyber crime complaints, online fraud cases, defamation on social media, data breach matters, and compliance with IT regulations. We combine legal expertise with technical understanding to protect your digital rights.',
        content: [
            {
                title: 'Information Technology Act, 2000',
                text: 'The IT Act, 2000 provides the legal framework for electronic governance and cyber crimes in India. It covers offenses like hacking, identity theft, cyber terrorism, and provides for intermediary liability. Understanding this complex law is crucial for cyber law cases.'
            },
            {
                title: 'Types of Cyber Crimes',
                text: 'We handle various cyber crimes including hacking, phishing, online fraud, cyber stalking, defamation on social media, data theft, ransomware attacks, and online harassment. Our team works with cyber crime cells and forensic experts for effective case handling.'
            },
            {
                title: 'Data Protection & Privacy',
                text: 'With increasing focus on data privacy, we advise businesses on data protection compliance, draft privacy policies, and handle cases related to unauthorized data collection or misuse. We stay updated on evolving data protection regulations.'
            }
        ],
        services: [
            'Cyber Crime Complaints',
            'Online Fraud Cases',
            'Social Media Defamation',
            'Data Breach Matters',
            'IT Act Compliance',
            'Cyber Stalking Cases',
            'Identity Theft Cases',
            'E-commerce Disputes',
            'Digital Evidence Matters'
        ],
        whyChooseUs: [
            'Tech-savvy legal team',
            'Cyber crime cell liaison',
            'Digital evidence expertise',
            'Quick response to cyber crimes',
            'Corporate cyber law advisory'
        ]
    },
    {
        id: 'court-marriage',
        slug: 'court-marriage',
        title: 'Court Marriage Registration',
        subtitle: 'Legal Marriage Registration Services',
        icon: FaHeart,
        heroDescription: 'Court marriage provides a simple and legally recognized way to solemnize marriage regardless of religion or caste. Prima Lexus offers complete court marriage services including documentation, filing, and ceremony assistance.',
        description: 'We guide couples through the entire court marriage process under the Special Marriage Act, 1954 or Hindu Marriage Act, 1955. Our services include document preparation, notice publication, objection handling, and marriage certificate procurement.',
        content: [
            {
                title: 'Special Marriage Act, 1954',
                text: 'The Special Marriage Act enables marriage between persons of different religions, castes, or nationalities. It provides a civil form of marriage that is not governed by personal laws. The marriage is solemnized before the Marriage Registrar.'
            },
            {
                title: 'Court Marriage Procedure',
                text: 'The procedure involves giving notice to the Marriage Registrar, publication of notice for 30 days, handling any objections, and finally solemnization of marriage. We handle all procedural requirements and ensure a smooth process.'
            },
            {
                title: 'Documents Required',
                text: 'Essential documents include age proof, address proof, passport photographs, affidavit of marital status, and witnesses. We assist in preparing all required documents and affidavits in the prescribed format.'
            }
        ],
        services: [
            'Court Marriage Registration',
            'Document Preparation',
            'Marriage Notice Filing',
            'Objection Handling',
            'Marriage Certificate',
            'Tatkal Marriage Services',
            'NRI Marriage Registration',
            'Marriage Affidavits',
            'Witness Arrangement'
        ],
        whyChooseUs: [
            'Quick marriage registration',
            'Complete documentation support',
            'Experienced in inter-faith marriages',
            'NRI marriage expertise',
            'Hassle-free process'
        ]
    }
];

export const getServiceBySlug = (slug) => {
    return servicesData.find(service => service.slug === slug);
};

export default servicesData;
