import { useEffect } from 'react';

const produkJahit = [
  {
    title: 'Seragam Kantor & Instansi',
    desc: 'Kemeja, blazer, dan seragam kerja dengan bahan berkualitas. Tersedia berbagai pilihan model dan warna sesuai identitas perusahaan Anda.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: ['Kemeja Formal Pria & Wanita', 'Blazer & Jas', 'Seragam Dinas', 'Custom Logo & Bordir'],
  },
  {
    title: 'Seragam Sekolah & Kampus',
    desc: 'Seragam siswa dan mahasiswa dengan jahitan kuat dan tahan lama. Bahan adem dan nyaman untuk aktivitas harian.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    features: ['Seragam SD/SMP/SMA', 'Almamater Kampus', 'Baju Olahraga Sekolah', 'Rok & Celana Seragam'],
  },
  {
    title: 'Kaos & Polo Shirt',
    desc: 'Produksi kaos oblong, polo shirt, dan kaos kerah untuk kebutuhan event, komunitas, promosi, dan seragam casual perusahaan.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    features: ['Kaos Oblong / T-Shirt', 'Polo Shirt Kerah', 'Kaos Raglan', 'Kaos Event & Promosi'],
  },
  {
    title: 'Jaket & Hoodie',
    desc: 'Jaket bomber, hoodie, sweater, dan windbreaker custom. Berbagai pilihan bahan dari fleece, parasut, hingga baby terry.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
    features: ['Jaket Bomber', 'Hoodie & Sweater', 'Windbreaker', 'Varsity Jacket'],
  },
  {
    title: 'Celana & Rok',
    desc: 'Produksi celana panjang, celana pendek, rok, dan training pants untuk berbagai kebutuhan formal maupun casual.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    features: ['Celana Formal', 'Celana Chino', 'Training Pants', 'Rok Kerja & Sekolah'],
  },
  {
    title: 'Pakaian Olahraga & Komunitas',
    desc: 'Seragam tim olahraga, kaos komunitas, dan pakaian organisasi. Bahan dry-fit dan jersey yang nyaman untuk aktivitas.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: ['Baju Tim Olahraga', 'Kaos Komunitas', 'Seragam Organisasi', 'Wearpack & Coverall'],
  },
];

const prosesKerja = [
  {
    step: '01',
    title: 'Konsultasi & Desain',
    desc: 'Diskusikan kebutuhan Anda dengan tim kami. Kami bantu buat desain atau sesuaikan desain Anda.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Pemilihan Bahan',
    desc: 'Pilih bahan terbaik dari koleksi kami. Tersedia contoh bahan untuk Anda periksa kualitasnya.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Pembuatan Pola & Sampel',
    desc: 'Tim kami membuat pola dan sampel produk untuk approval Anda sebelum masuk ke produksi massal.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Produksi & Jahit',
    desc: 'Proses cutting dan jahit oleh penjahit berpengalaman menggunakan mesin jahit industri modern.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    step: '05',
    title: 'Quality Control',
    desc: 'Setiap produk melewati proses QC ketat untuk memastikan jahitan rapi, ukuran presisi, dan kualitas terjaga.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: '06',
    title: 'Finishing & Pengiriman',
    desc: 'Proses finishing (packing, label, hangtag) dan pengiriman ke alamat Anda dengan aman.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
];

const keunggulan = [
  {
    title: 'Penjahit Berpengalaman',
    desc: 'Tim penjahit kami memiliki pengalaman lebih dari 5 tahun di bidang konveksi garmen.',
    icon: '👥',
  },
  {
    title: 'Mesin Jahit Modern',
    desc: 'Menggunakan mesin jahit industri terbaru untuk hasil jahitan yang rapi dan konsisten.',
    icon: '⚙️',
  },
  {
    title: 'Bahan Berkualitas',
    desc: 'Hanya menggunakan bahan terbaik yang sudah teruji ketahanan dan kenyamanannya.',
    icon: '🧵',
  },
  {
    title: 'Harga Kompetitif',
    desc: 'Harga terjangkau tanpa mengorbankan kualitas. Diskon khusus untuk pemesanan partai besar.',
    icon: '💰',
  },
  {
    title: 'Tepat Waktu',
    desc: 'Komitmen penyelesaian pesanan sesuai deadline yang telah disepakati bersama.',
    icon: '⏰',
  },
  {
    title: 'Garansi Kualitas',
    desc: 'Garansi perbaikan jika terdapat cacat jahitan pada produk yang kami kirim.',
    icon: '🛡️',
  },
];

const bahanPopuler = [
  { name: 'Cotton Combed 20s/24s/30s', desc: 'Ideal untuk kaos oblong, lembut & adem', category: 'Kaos' },
  { name: 'Lacoste CVC / Cotton', desc: 'Cocok untuk polo shirt, bertekstur waffle', category: 'Polo' },
  { name: 'American Drill', desc: 'Untuk seragam, tebal & tahan lama', category: 'Seragam' },
  { name: 'Oxford', desc: 'Kemeja formal, tampilan elegan', category: 'Kemeja' },
  { name: 'Fleece / Baby Terry', desc: 'Jaket & hoodie, hangat & nyaman', category: 'Jaket' },
  { name: 'Diadora / Dry-fit', desc: 'Pakaian olahraga, cepat kering', category: 'Olahraga' },
  { name: 'Parasut Taslan', desc: 'Jaket outdoor, anti air & ringan', category: 'Jaket' },
  { name: 'Twill Stretch', desc: 'Celana, elastis & nyaman dipakai', category: 'Celana' },
];

interface JasaJahitProps {
  onNavigateHome: () => void;
}

export function JasaJahit({ onNavigateHome }: JasaJahitProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const waNumber = '6281806662983';
  const waMessage = encodeURIComponent('Halo CV. Cemerlang Evolution, saya tertarik dengan jasa jahit konveksi Anda. Bisa info lebih lanjut?');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden" aria-label="Jasa Jahit Konveksi">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-dark">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
            <button onClick={onNavigateHome} className="hover:text-white transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </button>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-400">Layanan</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-primary-400 font-medium">Jasa Jahit</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                <span className="text-blue-300 text-sm font-medium">Layanan Unggulan</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Jasa Jahit{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Konveksi
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                  Profesional
                </span>
              </h1>

              <p className="text-gray-300 text-lg max-w-xl leading-relaxed mb-8">
                CV. Cemerlang Evolution menyediakan jasa jahit konveksi profesional untuk berbagai kebutuhan garmen. 
                Dari seragam, kaos, jaket, hingga pakaian olahraga — semua dikerjakan dengan kualitas terbaik oleh tim penjahit berpengalaman.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/${waNumber}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Konsultasi Gratis
                </a>
                <button
                  onClick={onNavigateHome}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Kembali
                </button>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="hidden lg:flex justify-center animate-float">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-3xl rotate-6 backdrop-blur-sm border border-white/10"></div>
                <div className="absolute inset-0 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-primary-500/10 rounded-3xl -rotate-6 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">Jasa Jahit</h3>
                    <p className="text-gray-300 text-sm">Konveksi profesional & berkualitas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mini stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '5+', label: 'Tahun Pengalaman' },
              { num: '50+', label: 'Mesin Jahit' },
              { num: '1000+', label: 'Proyek Jahit' },
              { num: '100%', label: 'Garansi Kualitas' },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
                <div className="text-2xl sm:text-3xl font-black text-blue-400 mb-1">{s.num}</div>
                <p className="text-gray-400 text-xs sm:text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section className="py-20 bg-white" aria-label="Keunggulan Jasa Jahit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Mengapa Memilih Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-secondary-900 mb-4">
              Keunggulan{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                Jasa Jahit Kami
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Kami berkomitmen memberikan layanan jahit konveksi terbaik dengan berbagai keunggulan yang menjadi pembeda kami.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keunggulan.map((item, i) => (
              <div key={i} className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 hover:bg-white transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-secondary-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produk Jahit Section */}
      <section className="py-20 bg-gray-50" aria-label="Produk Jasa Jahit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Produk Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-secondary-900 mb-4">
              Apa Saja yang Bisa{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                Kami Jahit?
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Kami melayani jahit konveksi berbagai jenis pakaian untuk kebutuhan personal, perusahaan, organisasi, dan komunitas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produkJahit.map((item, i) => (
              <article key={i} className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pilihan Bahan Section */}
      <section className="py-20 bg-white" aria-label="Pilihan Bahan Jahit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Pilihan Bahan
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-secondary-900 mb-4">
              Bahan Kain{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                Berkualitas
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Kami menyediakan berbagai pilihan bahan kain terbaik untuk setiap kebutuhan garmen Anda.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {bahanPopuler.map((b, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-md mb-3">
                  {b.category}
                </span>
                <h4 className="font-bold text-secondary-900 text-sm mb-1">{b.name}</h4>
                <p className="text-gray-500 text-xs">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proses Kerja Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-dark" aria-label="Proses Kerja Jasa Jahit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Proses Kerja
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Alur Pengerjaan{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary-400">
                Jasa Jahit Kami
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Kami memiliki alur kerja yang terstruktur untuk memastikan setiap pesanan dikerjakan dengan optimal.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {prosesKerja.map((p, i) => (
              <div key={i} className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  <div>
                    <span className="text-blue-400 text-xs font-bold tracking-wider">STEP {p.step}</span>
                    <h3 className="font-bold text-white text-lg mt-1 mb-2">{p.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Chart Section */}
      <section className="py-20 bg-white" aria-label="Tabel Ukuran">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Ukuran
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-secondary-900 mb-4">
              Panduan{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                Ukuran / Size Chart
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Berikut panduan umum ukuran kaos & kemeja. Untuk custom ukuran, silakan konsultasi dengan tim kami.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                  <th className="py-4 px-6 text-left rounded-tl-xl font-semibold">Ukuran</th>
                  <th className="py-4 px-6 text-center font-semibold">Lebar Dada (cm)</th>
                  <th className="py-4 px-6 text-center font-semibold">Panjang Baju (cm)</th>
                  <th className="py-4 px-6 text-center font-semibold">Panjang Lengan (cm)</th>
                  <th className="py-4 px-6 text-center rounded-tr-xl font-semibold">Lebar Bahu (cm)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: 'S', dada: '47-49', panjang: '66-68', lengan: '19-20', bahu: '42-44' },
                  { size: 'M', dada: '50-52', panjang: '69-71', lengan: '20-21', bahu: '45-47' },
                  { size: 'L', dada: '53-55', panjang: '72-74', lengan: '21-22', bahu: '48-50' },
                  { size: 'XL', dada: '56-58', panjang: '75-77', lengan: '22-23', bahu: '51-53' },
                  { size: 'XXL', dada: '59-61', panjang: '78-80', lengan: '23-24', bahu: '54-56' },
                  { size: 'XXXL', dada: '62-64', panjang: '81-83', lengan: '24-25', bahu: '57-59' },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                    <td className="py-4 px-6 font-bold text-secondary-900">{row.size}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{row.dada}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{row.panjang}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{row.lengan}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{row.bahu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-400 text-xs text-center mt-4">
            * Ukuran di atas adalah panduan umum. Toleransi ukuran ±1-2 cm. Custom ukuran tersedia sesuai permintaan.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50" aria-label="FAQ Jasa Jahit">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-secondary-900 mb-4">
              Pertanyaan{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                yang Sering Diajukan
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Berapa minimum order untuk jasa jahit konveksi?',
                a: 'Minimum order kami adalah 24 pcs (2 lusin) untuk setiap jenis produk. Untuk pemesanan di bawah itu, silakan konsultasi terlebih dahulu dengan tim kami.',
              },
              {
                q: 'Berapa lama waktu pengerjaan?',
                a: 'Waktu pengerjaan bervariasi tergantung jumlah pesanan dan tingkat kesulitan. Rata-rata 7-14 hari kerja untuk pesanan standar. Untuk pesanan urgent, kami bisa akomodasi dengan biaya tambahan.',
              },
              {
                q: 'Apakah bisa request custom desain dan ukuran?',
                a: 'Tentu! Kami menerima custom desain dan ukuran sesuai kebutuhan Anda. Tim desain kami juga bisa membantu membuatkan desain jika Anda belum memilikinya.',
              },
              {
                q: 'Apakah ada garansi kualitas?',
                a: 'Ya, kami memberikan garansi kualitas untuk setiap produk. Jika terdapat cacat jahitan atau ketidaksesuaian ukuran, kami akan melakukan perbaikan tanpa biaya tambahan.',
              },
              {
                q: 'Apakah bisa kirim ke luar kota/luar pulau?',
                a: 'Ya, kami melayani pengiriman ke seluruh Indonesia melalui ekspedisi terpercaya (JNE, J&T, SiCepat, dll). Biaya kirim ditanggung pembeli.',
              },
              {
                q: 'Bahan kain disediakan atau harus bawa sendiri?',
                a: 'Kami menyediakan berbagai pilihan bahan kain berkualitas. Namun, jika Anda ingin menggunakan bahan sendiri (makloon), kami juga menerimanya.',
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-secondary-900 text-sm sm:text-base pr-4">{faq.q}</h3>
                  <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white" aria-label="CTA Jasa Jahit">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 sm:p-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary-500 rounded-full blur-3xl"></div>
            </div>
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>

            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Siap Memesan Jasa Jahit?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
                Konsultasikan kebutuhan jahit konveksi Anda sekarang. Tim kami siap membantu dari desain hingga produksi!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${waNumber}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Hubungi via WhatsApp
                </a>
                <button
                  onClick={onNavigateHome}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Lihat Layanan Lainnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
