import { useNavigation } from '../App';

export function Footer() {
  const { navigateTo } = useNavigation();

  const handleJasaJahitClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = 'page-jasa-jahit';
    navigateTo('jasa-jahit');
  };

  const handleJasaSablonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = 'page-jasa-sablon';
    navigateTo('jasa-sablon');
  };

  return (
    <footer className="bg-secondary-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {/* Logo menggunakan gambar yang sama dengan Header */}
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/logo/cemerlang_logo.png" 
                  alt="Logo CV Cemerlang" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight text-white">CV. CEMERLANG</h3>
                <p className="text-primary-400 text-sm font-medium">EVOLUTION</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Perusahaan konveksi garmen terpercaya di Bandung yang telah berpengalaman selama 5 tahun. 
              Berbadan hukum dan berkomitmen memberikan kualitas terbaik untuk setiap produk.
            </p>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-semibold text-primary-400 mb-4">Layanan Kami</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#page-jasa-jahit" onClick={handleJasaJahitClick} className="hover:text-white transition-colors">Jasa Jahit</a></li>
              <li><a href="#page-jasa-sablon" onClick={handleJasaSablonClick} className="hover:text-white transition-colors">Jasa Sablon</a></li>
              <li><a href="#jasa-printing-jersey" className="hover:text-white transition-colors">Jasa Printing Jersey</a></li>
              <li><a href="#jasa-bordir" className="hover:text-white transition-colors">Jasa Bordir</a></li>
              <li><a href="#jasa-cetak-lanyard" className="hover:text-white transition-colors">Jasa Cetak Lanyard</a></li>
              <li><a href="#jasa-digital-printing" className="hover:text-white transition-colors">Jasa Digital Printing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-400 mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jl. Tubagus Ismail VIII No.60, Dago, Kecamatan Coblong, Kota Bandung, Jawa Barat 40135</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+62 818-0666-2983</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@cemerlangbdg.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} CV. Cemerlang Evolution. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Berbadan Hukum | Berpengalaman 5+ Tahun
          </p>
        </div>
      </div>
    </footer>
  );
}
