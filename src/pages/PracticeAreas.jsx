// Practice Areas Page
import SectionTitle from '../components/ui/SectionTitle';
import { ServiceCard } from '../components/ui/Card';
import CallToAction from '../components/sections/CallToAction';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/ui/SEO';
import { practiceAreas } from '../data/practiceAreas';

const PracticeAreas = () => {
    return (
        <main>
            <SEO
                title="Practice Areas"
                description="Prima Lexus offers 12+ practice areas including Civil, Criminal, Family, Property, Corporate, Consumer, Cyber Laws & more. Expert legal services across India."
                keywords="legal practice areas, civil lawyer, criminal lawyer, family lawyer, property lawyer, corporate lawyer delhi"
            />
            <Breadcrumbs />
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Practice Areas</h1>
                        <p className="text-xl text-slate-300">
                            Comprehensive legal services across all major areas of law, delivered by our expert team of advocates and consultants.
                        </p>
                    </div>
                </div>
            </section>

            {/* Practice Areas Grid */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {practiceAreas.map((area) => (
                            <ServiceCard
                                key={area.id}
                                icon={area.icon}
                                title={area.title}
                                description={area.description}
                                services={area.services}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Documentation Services Highlight */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <SectionTitle
                            title="Documentation Services"
                            subtitle="We also render services in legal drafting and documentation."
                        />
                        <div className="bg-slate-50 rounded-2xl p-8">
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Our documentation services include drafting of contracts, reports, MOUs, deeds, affidavits,
                                sale deed of property and rent/lease deeds & Registration of property, Will, Trust, Society,
                                Marriage, Partnership Firms, Sole Proprietorship Firms & other documentation works.
                            </p>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    "Contract Drafting",
                                    "MOUs & Agreements",
                                    "Deed Preparation",
                                    "Affidavits",
                                    "Property Registration",
                                    "Will & Trust",
                                    "Society Registration",
                                    "Partnership Deeds",
                                    "N.G.O Registration"
                                ].map((service, index) => (
                                    <div key={index} className="flex items-center gap-2 text-slate-700">
                                        <span className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></span>
                                        {service}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CallToAction />
        </main>
    );
};

export default PracticeAreas;
