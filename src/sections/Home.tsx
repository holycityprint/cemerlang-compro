import { useEffect, useState } from 'react';

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return <>{count}{suffix}</>;
}

export function Home() {
  // Data gambar untuk slider
  const slides = [
    { url: '/images/hero-production.jpg', title: 'Quality First', desc: 'Kualitas prioritas utama kami' },
    { url: '/images/hero-sablon.jpg', title: 'Professional Screen Printing', desc: 'Sablon manual & digital presisi' },
    { url: '/images/hero-jersey.jpg', title: 'Premium Jersey', desc: 'Produksi jersey olahraga custom' }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Logika Animasi Slider Otomatis
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Berganti setiap 5 detik
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" aria-label="Beranda">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-dark">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
              <span className="text-primary-300 text-sm font-medium">Berbadan Hukum &bull; 5+ Tahun Pengalaman</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Solusi{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                Konveksi
              </span>
              <br />
              Terpercaya di
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-500">
                Bandung
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              CV. Cemerlang Evolution hadir sebagai mitra konveksi garmen Anda. 
              Dari sablon manual hingga printing jersey, kami mengerjakan dengan kualitas premium.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#form-order" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:-translate-y-0.5 transition-all">
                Pesan Sekarang
              </a>
              <a href="#layanan" className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all">
                Lihat Layanan
              </a>
            </div>
          </div>

          {/* Right Content - Animated Image Slider */}
          <div className="hidden lg:flex justify-center animate-float">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="w-80 h-80 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl rotate-6 backdrop-blur-sm border border-white/10"></div>
              
              {/* Slider Container - Menggunakan rounded-3xl untuk semua sisi */}
              <div className="absolute inset-0 w-80 h-80 bg-secondary-900 rounded-3xl -rotate-6 overflow-hidden border border-white/10 shadow-2xl">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 rounded-3xl overflow-hidden transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                    }`}
                  >
                    <img 
                      src={slide.url} 
                      alt={slide.title} 
                      className="w-full h-full object-cover opacity-80 rounded-3xl"
                    />
                    
                    {/* Caption Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-transparent to-transparent flex flex-col justify-end p-6">
                      <div className="backdrop-blur-md bg-white/10 p-4 rounded-2xl border border-white/10">
                        <h3 className="text-white font-bold text-lg mb-0.5">{slide.title}</h3>
                        <p className="text-gray-300 text-[10px] uppercase tracking-wider">{slide.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Slider Indicators */}
                <div className="absolute bottom-4 right-6 flex gap-1.5">
                  {slides.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-6 bg-primary-500' : 'w-2 bg-white/30'}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: 5, suffix: '+', label: 'Tahun Pengalaman' },
            { number: 1000, suffix: '+', label: 'Proyek Selesai' },
            { number: 500, suffix: '+', label: 'Klien Puas' },
            { number: 6, suffix: '', label: 'Layanan Utama' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
              <div className="text-3xl sm:text-4xl font-black text-primary-400 mb-1">
                <CountUp target={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}