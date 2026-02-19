import { useState, useEffect } from 'react';
import { useNavigation } from '../App';

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'Layanan', href: '#layanan', hasSubmenu: true },
  { label: 'Form Order', href: '#form-order' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Contact Us', href: '#contact' },
];

const layananSubmenu = [
  { label: 'Jasa Jahit', href: '#page-jasa-jahit', isPage: true, page: 'jasa-jahit' as const },
  { label: 'Jasa Sablon', href: '#page-jasa-sablon', isPage: true, page: 'jasa-sablon' as const },
  { label: 'Jasa Printing Jersey', href: '#jasa-printing-jersey', isPage: false },
  { label: 'Jasa Bordir', href: '#jasa-bordir', isPage: false },
  { label: 'Jasa Cetak Lanyard', href: '#jasa-cetak-lanyard', isPage: false },
  { label: 'Jasa Digital Printing', href: '#jasa-digital-printing', isPage: false },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLayananOpen, setIsLayananOpen] = useState(false);
  const [isMobileLayananOpen, setIsMobileLayananOpen] = useState(false);
  const { currentPage, navigateTo } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    setIsMobileLayananOpen(false);
    setIsLayananOpen(false);

    if (currentPage !== 'home' && !href.startsWith('#page-')) {
      e.preventDefault();
      navigateTo('home');
      setTimeout(() => {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleSubmenuClick = (e: React.MouseEvent<HTMLAnchorElement>, sub: typeof layananSubmenu[0]) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsMobileLayananOpen(false);
    setIsLayananOpen(false);

    if (sub.isPage && sub.page) {
      window.location.hash = sub.href.replace('#', '');
      navigateTo(sub.page);
    } else {
      if (currentPage !== 'home') {
        navigateTo('home');
        setTimeout(() => {
          const targetId = sub.href.replace('#', '');
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const targetId = sub.href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (currentPage !== 'home') {
      window.location.hash = '';
      navigateTo('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const showScrolledStyle = isScrolled || currentPage !== 'home';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showScrolledStyle
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between" aria-label="Navigasi utama">
        {/* Logo & Company Name */}
        <a href="#home" onClick={handleLogoClick} className="flex items-center gap-2 sm:gap-3 group" aria-label="CV. Cemerlang Evolution - Beranda">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300 ${
            showScrolledStyle 
              ? 'bg-white shadow-lg' 
              : 'bg-white/20 backdrop-blur-sm border border-white/30'
          }`}>
            <img 
              src="/images/logo/cemerlang_logo.png" 
              alt="Logo CV. Cemerlang" 
              className="w-full h-full object-contain p-1"
            />
          </div>
          <div className="flex flex-col">
            <h1 className={`text-[10px] sm:text-sm font-bold leading-tight transition-colors duration-300 ${
              showScrolledStyle ? 'text-secondary-900' : 'text-white'
            }`}>
              CV. CEMERLANG
            </h1>
            <p className={`text-[8px] sm:text-xs font-medium transition-colors duration-300 ${
              showScrolledStyle ? 'text-primary-600' : 'text-primary-300'
            }`}>
              EVOLUTION
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.hasSubmenu && setIsLayananOpen(true)}
              onMouseLeave={() => item.hasSubmenu && setIsLayananOpen(false)}
            >
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary-500/20 ${
                  showScrolledStyle
                    ? 'text-secondary-800 hover:text-primary-600'
                    : 'text-white/90 hover:text-white'
                } flex items-center gap-1`}
              >
                {item.label}
                {item.hasSubmenu && (
                  <svg className={`w-4 h-4 transition-transform ${isLayananOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
              {item.hasSubmenu && isLayananOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                  {layananSubmenu.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      onClick={(e) => handleSubmenuClick(e, sub)}
                      className={`block px-4 py-2.5 text-sm hover:bg-primary-50 hover:text-primary-700 transition-colors ${
                        sub.isPage && sub.page && currentPage === sub.page
                          ? 'text-primary-700 bg-primary-50 font-semibold' 
                          : 'text-gray-700'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {sub.label}
                        {sub.isPage && (
                          <svg className="w-3.5 h-3.5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        )}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              showScrolledStyle ? 'bg-secondary-900' : 'bg-white'
            } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              showScrolledStyle ? 'bg-secondary-900' : 'bg-white'
            } ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              showScrolledStyle ? 'bg-secondary-900' : 'bg-white'
            } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 px-4 py-4 space-y-1">
          {menuItems.map((item) => (
            <div key={item.label}>
              {item.hasSubmenu ? (
                <>
                  <button
                    onClick={() => setIsMobileLayananOpen(!isMobileLayananOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-secondary-800 hover:bg-primary-50 rounded-lg transition-colors"
                  >
                    {item.label}
                    <svg className={`w-4 h-4 transition-transform ${isMobileLayananOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isMobileLayananOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="pl-4 space-y-1">
                      {layananSubmenu.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={(e) => handleSubmenuClick(e, sub)}
                          className={`block px-4 py-2 text-sm hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors ${
                            sub.isPage && sub.page && currentPage === sub.page
                              ? 'text-primary-700 bg-primary-50 font-semibold'
                              : 'text-gray-600'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {sub.label}
                            {sub.isPage && (
                              <span className="text-[10px] bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded font-medium">Detail</span>
                            )}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-4 py-3 text-sm font-medium text-secondary-800 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}