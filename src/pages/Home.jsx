// Home Page
import Hero from '../components/sections/Hero';
import AboutPreview from '../components/sections/AboutPreview';
import ServicesGrid from '../components/sections/ServicesGrid';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import TeamHighlight from '../components/sections/TeamHighlight';
import CallToAction from '../components/sections/CallToAction';
import StatsCounter from '../components/sections/StatsCounter';
import SEO from '../components/ui/SEO';

const Home = () => {
    return (
        <main>
            <SEO
                title="Prima Lexus"
                description="Prima Lexus - Leading law firm in Delhi NCR with 15+ years of excellence. Expert advocates for civil, criminal, family, property & corporate matters. Book consultation today."
                keywords="prima lexus, law firm delhi, advocate delhi ncr, legal services india, best lawyer delhi, supreme court lawyer"
            />
            <Hero />
            <AboutPreview />
            <TeamHighlight />
            <ServicesGrid limit={8} />
            <StatsCounter />
            <WhyChooseUs />
            <CallToAction />
        </main>
    );
};

export default Home;
