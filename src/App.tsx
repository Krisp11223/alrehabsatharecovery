import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import StickyEmergencyBar from './components/StickyEmergencyBar';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Coverage from './pages/Coverage';
import CityPage from './pages/CityPage';
import About from './pages/About';
import Reviews from './pages/Reviews';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Emergency from './pages/Emergency';
import Gallery from './pages/Gallery';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);
  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/coverage" element={<Coverage />} />
          <Route path="/coverage/:id" element={<CityPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
      <StickyEmergencyBar />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}
