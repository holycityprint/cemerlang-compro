import { useState, useEffect, createContext, useContext } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './sections/Home';
import { Layanan } from './sections/Layanan';
import { FormOrder } from './sections/FormOrder';
import { Gallery } from './sections/Gallery';
import { Testimoni } from './sections/Testimoni';
import { ContactUs } from './sections/ContactUs';
import { JasaJahit } from './pages/JasaJahit';
import { JasaSablon } from './pages/JasaSablon';

// Navigation context
type PageType = 'home' | 'jasa-jahit' | 'jasa-sablon';

interface NavigationContextType {
  currentPage: PageType;
  navigateTo: (page: PageType) => void;
}

export const NavigationContext = createContext<NavigationContextType>({
  currentPage: 'home',
  navigateTo: () => {},
});

export const useNavigation = () => useContext(NavigationContext);

export function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Handle hash-based navigation for submenu links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#page-jasa-jahit') {
        setCurrentPage('jasa-jahit');
        window.scrollTo(0, 0);
      } else if (hash === '#page-jasa-sablon') {
        setCurrentPage('jasa-sablon');
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Check on initial load
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title based on page
  useEffect(() => {
    if (currentPage === 'jasa-jahit') {
      document.title = 'Jasa Jahit Konveksi Profesional | CV. Cemerlang Bandung Creative';
    } else if (currentPage === 'jasa-sablon') {
      document.title = 'Jasa Sablon Manual & Digital Berkualitas | CV. Cemerlang Bandung Creative';
    } else {
      document.title = 'CV. Cemerlang Bandung Creative | Konveksi & Garmen Terpercaya di Bandung';
    }
  }, [currentPage]);

  const handleNavigateHome = () => {
    window.location.hash = '';
    navigateTo('home');
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo }}>
      <div className="font-poppins min-h-screen bg-white">
        <Header />
        <main>
          {currentPage === 'home' && (
            <>
              <Home />
              <Layanan />
              <FormOrder />
              <Gallery />
              <Testimoni />
              <ContactUs />
            </>
          )}
          {currentPage === 'jasa-jahit' && (
            <JasaJahit onNavigateHome={handleNavigateHome} />
          )}
          {currentPage === 'jasa-sablon' && (
            <JasaSablon onNavigateHome={handleNavigateHome} />
          )}
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </NavigationContext.Provider>
  );
}
