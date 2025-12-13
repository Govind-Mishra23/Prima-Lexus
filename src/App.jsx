// Main App component with routing
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Context
import { ConsultationProvider } from './context/ConsultationContext';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import DisclaimerModal from './components/ui/DisclaimerModal';
import ScrollToTopButton from './components/ui/ScrollToTop';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import FloatingConsultButton from './components/ui/FloatingConsultButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import PracticeAreaPage from './pages/PracticeAreaPage';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import ServicePage from './pages/ServicePage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Layout wrapper
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
      <ScrollToTopButton />
      <FloatingWhatsApp />
      <FloatingConsultButton />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ConsultationProvider>
        <DisclaimerModal />
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/practice-areas/:slug" element={<PracticeAreaPage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services/:slug" element={<ServicePage />} />
          </Routes>
        </Layout>
      </ConsultationProvider>
    </Router>
  );
}

export default App;
