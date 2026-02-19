import { useEffect } from 'react';

const jenisSablon = [
  {
    title: 'Sablon Manual / Rubber',
    desc: 'Teknik sablon tradisional menggunakan screen dan rakel. Hasil sablon tebal, timbul, dan tahan lama. Cocok untuk desain dengan warna solid dan jumlah warna terbatas.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    features: ['Warna solid & tebal', 'Tahan 50+ kali cuci', 'Cocok untuk logo & teks', 'Harga ekonomis untuk partai besar'],
    color: 'from-purple-500 to-purple-700',
  },
  {
    title: 'Sablon Plastisol',
    desc: 'Sablon dengan tinta berbasis PVC yang menghasilkan warna cerah dan tajam. Permukaan halus dan elastis, tidak mudah pecah saat ditarik. Ideal untuk desain detail.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    features: ['Warna cerah & tajam', 'Tekstur halus & elastis', 'Tidak mudah pecah', 'Detail desain presisi'],
    color: 'from-indigo-500 to-indigo-700',
  },
  {
    title: 'Sablon Discharge',
    desc: 'Teknik sablon yang menghilangkan warna dasar kain dan menggantinya dengan warna baru. Menghasilkan efek sablon yang menyatu dengan kain, nyaman dan tidak terasa tebal.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    features: ['Menyatu dengan kain', 'Tidak terasa tebal', 'Warna soft & vintage', 'Nyaman saat dipakai'],
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    title: 'Sablon Digital DTF',
    desc: 'Sablon modern menggunakan teknologi Direct to Film. Bisa mencetak desain full color dengan gradasi warna yang halus. Cocok untuk desain kompleks dan foto.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
    features: ['Full color & gradasi', 'Detail foto terjaga', 'Cepat & praktis', 'Cocok pesanan kecil/besar'],
    color: 'from-pink-500 to-pink-700',
  },
  {
    title: 'Sablon Foil / Metalik',
    desc: 'Sablon dengan efek metalik mengkilap seperti emas, perak, atau warna metalik lainnya. Memberikan kesan premium dan mewah pada produk Anda.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    features: ['Efek metalik premium', 'Gold, silver, rosegold', 'Kesan mewah & elegan', 'Cocok untuk event khusus'],
    color: 'from-amber-500 to-amber-700',
  },
  {
    title: 'Sablon Glow in The Dark',
    desc: 'Sablon unik yang bisa menyala dalam gelap. Tinta khusus yang menyerap cahaya dan memancarkannya di tempat gelap. Cocok untuk kaos event, komunitas, dan merchandise unik.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    features: ['Menyala dalam gelap', 'Efek unik & menarik', 'Tahan lama', 'Cocok untuk merchandise'],
    color: 'from-cyan-500 to-cyan-700',
  },
];

const keunggulanSablon = [
  {
    title: 'Operator Berpengalaman',
    desc: 'Tim sablon kami memiliki jam terbang tinggi dan terlatih untuk menghasilkan sablon berkualitas premium.',
    icon: '👨‍🎨',
  },
  {
    title: 'Peralatan Modern',
    desc: 'Menggunakan mesin sablon dan printer DTF terbaru untuk hasil yang optimal dan konsisten.',
    icon: '🖨️',
  },
  {
    title: 'Tinta Berkualitas',
    desc: 'Hanya menggunakan tinta sablon grade premium yang aman, tidak mudah luntur, dan ramah lingkungan.',
    icon: '🎨',
  },
  {
    title: 'Warna Akurat',
    desc: 'Sistem color matching yang presisi untuk memastikan warna sablon sesuai dengan desain Anda.',
    icon: '🎯',
  },
  {
    title: 'Tahan Lama',
    desc: 'Hasil sablon tahan 50+ kali pencucian tanpa luntur, pecah, atau mengelupas.',
    icon: '💪',
  },
  {
    title: 'Garansi Hasil',
    desc: 'Garansi hasil sablon. Jika tidak sesuai standar, kami akan melakukan pengerjaan ulang tanpa biaya tambahan.',
    icon: '✅',
  },
];

const prosesKerjaSablon = [
  {
    step: '01',
    title: 'Konsultasi Desain',
    desc: 'Kirimkan desain Anda atau diskusikan konsep yang diinginkan. Tim kami siap membantu menyempurnakan desain.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Pilih Jenis Sablon',
    desc: 'Tentukan jenis sablon yang sesuai kebutuhan. Tim kami akan memberikan rekomendasi terbaik berdasarkan desain dan budget.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Pembuatan Film / Screen',
    desc: 'Untuk sablon manual, kami membuat film separasi dan screen afdruk. Untuk DTF, desain langsung dicetak ke film.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2h-2" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Proses Sablon',
    desc: 'Tim operator melakukan proses sablon dengan teliti. Setiap helai diperiksa untuk memastikan kualitas cetakan.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    step: '05',
    title: 'Curing & Pengeringan',
    desc: 'Proses pengeringan dan curing menggunakan heat press/oven untuk memastikan tinta menempel sempurna dan tahan lama.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
  },
  {
    step: '06',
    title: 'QC & Packing',
    desc: 'Quality control ketat sebelum packing. Produk dikemas rapi dan siap dikirim ke alamat Anda.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const produkSablon = [
  {
    title: 'Kaos Komunitas & Event',
    desc: 'Sablon kaos untuk komunitas, gathering, event, reuni, dan acara perusahaan. Desain bebas sesuai kebutuhan.',
    items: ['Kaos Reuni', 'Kaos Event', 'Kaos Gathering', 'Kaos Anniversary'],
  },
  {
    title: 'Merchandise & Promosi',
    desc: 'Sablon untuk kebutuhan promosi bisnis seperti kaos merchandise, goodie bag, dan souvenir perusahaan.',
    items: ['Kaos Merchandise', 'Tote Bag Sablon', 'Souvenir Event', 'Goodie Bag'],
  },
  {
    title: 'Seragam & Workwear',
    desc: 'Sablon logo dan identitas perusahaan pada seragam kerja, PDH, dan workwear custom.',
    items: ['Seragam Kerja', 'PDH & PDL', 'Baju Safety', 'Wearpack'],
  },
  {
    title: 'Fashion & Streetwear',
    desc: 'Sablon untuk brand fashion dan clothing line. Desain eksklusif dengan teknik sablon premium.',
    items: ['T-Shirt Brand', 'Hoodie Sablon', 'Topi Sablon', 'Jacket Print'],
  },
];

const perbandinganSablon = [
  {
    jenis: 'Rubber / Manual',
    warna: '1-6 Warna',
    detail: 'Sedang',
    ketahanan: '★★★★★',
    harga: '$$',
    moq: '24 pcs',
    cocok: 'Logo, Teks, Desain Solid',
  },
  {
    jenis: 'Plastisol',
    warna: '1-8 Warna',
    detail: 'Tinggi',
    ketahanan: '★★★★★',
    harga: '$$$',
    moq: '24 pcs',
    cocok: 'Desain Detail, Foto',
  },
  {
    jenis: 'Discharge',
    warna: '1-4 Warna',
    detail: 'Sedang',
    ketahanan: '★★★★☆',
    harga: '$$$',
    moq: '24 pcs',
    cocok: 'Kaos Gelap, Vintage',
  },
  {
    jenis: 'DTF Digital',
    warna: 'Full Color',
    detail: 'Sangat Tinggi',
    ketahanan: '★★★★☆',
    harga: '$$',
    moq: '12 pcs',
    cocok: 'Desain Kompleks, Foto',
  },
  {
    jenis: 'Foil / Metalik',
    warna: 'Gold/Silver',
    detail: 'Sedang',
    ketahanan: '★★★★☆',
    harga: '$$$$',
    moq: '24 pcs',
    cocok: 'Premium, Event Khusus',
  },
  {
    jenis: 'Glow in The Dark',
    warna: '1-2 Warna',
    detail: 'Rendah',
    ketahanan: '★★★☆☆',
    harga: '$$$$',
    moq: '24 pcs',
    cocok: 'Merchandise Unik',
  },
];

interface JasaSablonProps {
  onNavigateHome: () => void;
}

export function JasaSablon({ onNavigateHome }: JasaSablonProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const waNumber = '6281806662983';
  const waMessage = encodeURIComponent('Halo CV. Cemerlang Bandung Creative, saya tertarik dengan jasa sablon Anda. Bisa info lebih lanjut?');

  return (
    <div className="min-h-screen">
      {/* ====== HERO SECTION ====== */}
      <section className="relative pt-24 pb-20 overflow-hidden" aria-label="Jasa Sablon Profesional">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-dark">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"></div>
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
            <span className="text-primary-400 font-medium">Jasa Sablon</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                <span className="text-purple-300 text-sm font-medium">Sablon Manual & Digital</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Jasa{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  Sablon
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                  Berkualitas Tinggi
                </span>
              </h1>

              <p className="text-gray-300 text-lg max-w-xl leading-relaxed mb-8">
                CV. Cemerlang Bandung Creative menyediakan layanan sablon manual dan digital premium. 
                Dari sablon rubber, plastisol, discharge hingga DTF digital — semua dikerjakan oleh tim ahli
                dengan peralatan modern untuk hasil sablon yang sempurna dan tahan lama.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/${waNumber}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-300"
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
                <div className="w-80 h-80 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-3xl rotate-6 backdrop-blur-sm border border-white/10"></div>
                <div className="absolute inset-0 w-80 h-80 bg-gradient-to-br from-purple-500/30 to-primary-500/10 rounded-3xl -rotate-6 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">Jasa Sablon</h3>
                    <p className="text-gray-300 text-sm">Manual & Digital Terpercaya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mini stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '5+', label: 'Tahun Pengalaman' },
              { num: '6+', label: 'Jenis Sablon' },
              { num: '2000+', label: 'Proyek Sablon' },
              { num: '100%', label: 'Garansi Kualitas' },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
                <div className="text-2xl sm:text-3xl font-black text-purple-400 mb-1">{s.num}</div>
                <p className="text-gray-400 text-xs sm:text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== KEUNGGULAN SECTION ====== */}
      <section className="py-20 bg-white" aria-label="Keunggulan Jasa Sablon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Mengapa Memilih Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-secondary-900 mb-4">
              Keunggulan{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700">
                Jasa Sablon Kami
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Kami menghadirkan layanan sablon terbaik dengan standar kualitas tinggi dan harga yang kompetitif.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keunggulanSablon.map((item, i) => (
              <div key={i} className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 hover:bg-white transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-secondary-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== JENIS SABLON SECTION ====== */}
      <section className="py-20 bg-gray-50" aria-label="Jenis-jenis Sablon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Jenis Sablon
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-secondary-900 mb-4">
              Pilihan{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                Jenis Sablon Kami
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Kami menyediakan berbagai teknik sablon untuk memenuhi setiap kebutuhan desain dan budget Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jenisSablon.map((item, i) => (
              <article key={i} className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-purple-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* ====== PRODUK SABLON SECTION ====== */}
      <section className="py-20 bg-white" aria-label="Produk Sablon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Produk Sablon
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-secondary-900 mb-4">
              Apa Saja yang Bisa{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700">
                Kami Sablon?
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Beragam produk yang bisa kami sablon sesuai kebutuhan personal, perusahaan, komunitas, dan brand fashion Anda.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {produkSablon.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-white mb-4 text-lg font-bold">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-bold text-secondary-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{item.desc}</p>
                <ul className="space-y-1.5">
                  {item.items.map((sub, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full shrink-0"></span>
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PROSES KERJA SECTION ====== */}
      <section className="py-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-dark" aria-label="Proses Kerja Sablon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Proses Kerja
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Alur Pengerjaan{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary-400">
                Jasa Sablon Kami
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Proses sablon kami terstruktur dan transparan untuk memastikan kualitas terbaik di setiap tahapan.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {prosesKerjaSablon.map((p, i) => (
              <div key={i} className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  <div>
                    <span className="text-purple-400 text-xs font-bold tracking-wider">STEP {p.step}</span>
                    <h3 className="font-bold text-white text-lg mt-1 mb-2">{p.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TABEL PERBANDINGAN SECTION ====== */}
      <section className="py-20 bg-white" aria-label="Perbandingan Jenis Sablon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Perbandingan
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-secondary-900 mb-4">
              Tabel Perbandingan{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                Jenis Sablon
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Bandingkan jenis sablon yang kami tawarkan untuk menemukan yang paling sesuai dengan kebutuhan Anda.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-gradient-to-r from-purple-500 to-purple-700 text-white">
                  <th className="py-4 px-4 text-left rounded-tl-xl font-semibold">Jenis Sablon</th>
                  <th className="py-4 px-4 text-center font-semibold">Warna</th>
                  <th className="py-4 px-4 text-center font-semibold">Detail</th>
                  <th className="py-4 px-4 text-center font-semibold">Ketahanan</th>
                  <th className="py-4 px-4 text-center font-semibold">Harga</th>
                  <th className="py-4 px-4 text-center font-semibold">MOQ</th>
                  <th className="py-4 px-4 text-center rounded-tr-xl font-semibold">Cocok Untuk</th>
                </tr>
              </thead>
              <tbody>
                {perbandinganSablon.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-purple-50 transition-colors`}>
                    <td className="py-4 px-4 font-bold text-secondary-900">{row.jenis}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.warna}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.detail}</td>
                    <td className="py-4 px-4 text-center text-amber-500">{row.ketahanan}</td>
                    <td className="py-4 px-4 text-center text-gray-600 font-medium">{row.harga}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.moq}</td>
                    <td className="py-4 px-4 text-center text-gray-600 text-xs">{row.cocok}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs text-center mt-4">
            * Harga dan MOQ dapat berubah tergantung tingkat kesulitan desain. Hubungi kami untuk penawaran terbaik.
          </p>
        </div>
      </section>

      {/* ====== FAQ SECTION ====== */}
      <section className="py-20 bg-gray-50" aria-label="FAQ Jasa Sablon">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-secondary-900 mb-4">
              Pertanyaan{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700">
                Seputar Jasa Sablon
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Jenis sablon apa yang paling cocok untuk desain saya?',
                a: 'Tergantung pada desain Anda. Untuk desain dengan warna solid dan terbatas (1-6 warna), sablon rubber/manual cocok. Untuk desain full color atau foto, kami rekomendasikan sablon DTF digital. Tim kami akan membantu merekomendasikan jenis sablon yang paling sesuai.',
              },
              {
                q: 'Berapa minimum order untuk jasa sablon?',
                a: 'Minimum order untuk sablon manual adalah 24 pcs (2 lusin) per desain. Untuk sablon DTF digital, minimum order 12 pcs. Kami juga menyediakan paket satuan untuk kebutuhan sampel dengan harga khusus.',
              },
              {
                q: 'Berapa lama waktu pengerjaan sablon?',
                a: 'Waktu pengerjaan standar 5-10 hari kerja tergantung jumlah pesanan dan jenis sablon. Untuk pesanan urgent/express, kami bisa akomodasi 3-5 hari kerja dengan biaya tambahan.',
              },
              {
                q: 'Apakah warna sablon bisa custom sesuai Pantone?',
                a: 'Ya, kami bisa melakukan color matching sesuai Pantone atau referensi warna yang Anda berikan. Untuk hasil terbaik, kami sarankan untuk melakukan proof/sampel terlebih dahulu.',
              },
              {
                q: 'Apakah sablon tahan cuci dan tidak luntur?',
                a: 'Ya, semua jenis sablon kami melalui proses curing yang benar sehingga tahan 50+ kali pencucian. Kami sarankan cuci dengan suhu air dingin-sedang dan hindari penggunaan pemutih untuk menjaga ketahanan sablon.',
              },
              {
                q: 'Apakah bisa sablon di bahan selain kaos?',
                a: 'Tentu! Kami bisa sablon di berbagai media seperti tote bag, hoodie, jaket, kemeja, tas, dan lainnya. Jenis sablon akan disesuaikan dengan material yang digunakan.',
              },
              {
                q: 'Bagaimana format file desain yang harus dikirim?',
                a: 'Kami menerima file dalam format AI, CDR, PSD, PDF, atau PNG dengan resolusi minimal 300 DPI. Untuk sablon manual, desain perlu dipisahkan per warna (separasi). Tim desain kami bisa membantu proses separasi jika diperlukan.',
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

      {/* ====== CTA SECTION ====== */}
      <section className="py-20 bg-white" aria-label="CTA Jasa Sablon">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl p-10 sm:p-16 relative overflow-hidden">
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
                Siap Order Jasa Sablon?
              </h2>
              <p className="text-purple-100 text-lg mb-8 max-w-xl mx-auto">
                Konsultasikan kebutuhan sablon Anda sekarang. Dari desain hingga produksi, tim kami siap membantu!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${waNumber}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
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
