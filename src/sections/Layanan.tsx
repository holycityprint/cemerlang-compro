import { useNavigation } from '../App';

const services = [
  {
    id: 'jasa-jahit',
    title: 'Jasa Jahit',
    description: 'Layanan jahit konveksi profesional untuk berbagai jenis pakaian. Dari seragam kantor, kaos, kemeja, jaket, hingga pakaian olahraga. Dikerjakan oleh penjahit berpengalaman dengan mesin modern.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    features: ['Seragam Kantor & Sekolah', 'Kaos & Polo Shirt', 'Jaket & Hoodie', 'Celana & Rok'],
    color: 'from-blue-500 to-blue-700',
    bgLight: 'bg-blue-50',
    textColor: 'text-blue-600',
    hasDetailPage: true,
    detailPage: 'jasa-jahit' as const,
  },
  {
    id: 'jasa-sablon',
    title: 'Jasa Sablon',
    description: 'Layanan sablon manual dan sablon digital berkualitas tinggi. Hasil sablon tajam, warna cerah, dan tahan lama. Cocok untuk kaos komunitas, merchandise, dan kebutuhan promosi.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    features: ['Sablon Manual / Rubber', 'Sablon Plastisol', 'Sablon Discharge', 'Sablon Digital DTF'],
    color: 'from-purple-500 to-purple-700',
    bgLight: 'bg-purple-50',
    textColor: 'text-purple-600',
    hasDetailPage: true,
    detailPage: 'jasa-sablon' as const,
  },
  {
    id: 'jasa-printing-jersey',
    title: 'Jasa Printing Jersey',
    description: 'Spesialis produksi dan printing jersey olahraga custom. Full sublimation printing dengan warna yang cerah dan tidak luntur. Jersey futsal, sepak bola, basket, badminton, dan e-sport.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: ['Jersey Futsal & Sepak Bola', 'Jersey Basket', 'Jersey Badminton', 'Jersey E-Sport / Gaming'],
    color: 'from-green-500 to-green-700',
    bgLight: 'bg-green-50',
    textColor: 'text-green-600',
    hasDetailPage: false,
  },
  {
    id: 'jasa-bordir',
    title: 'Jasa Bordir',
    description: 'Layanan bordir komputer dengan hasil rapi dan presisi. Cocok untuk logo perusahaan, emblem, badge, dan aksesoris pakaian. Tersedia bordir flat dan bordir timbul.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    features: ['Bordir Logo Perusahaan', 'Bordir Nama & Emblem', 'Bordir Timbul', 'Bordir Badge / Patch'],
    color: 'from-amber-500 to-amber-700',
    bgLight: 'bg-amber-50',
    textColor: 'text-amber-600',
    hasDetailPage: false,
  },
  {
    id: 'jasa-cetak-lanyard',
    title: 'Jasa Cetak Lanyard',
    description: 'Produksi lanyard / tali ID card custom berkualitas. Berbagai pilihan bahan seperti polyester, nylon, dan tissue. Cetak full color dengan desain sesuai kebutuhan perusahaan Anda.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
    features: ['Lanyard Polyester', 'Lanyard Nylon', 'Lanyard Tissue', 'Cetak Full Color'],
    color: 'from-red-500 to-red-700',
    bgLight: 'bg-red-50',
    textColor: 'text-red-600',
    hasDetailPage: false,
  },
  {
    id: 'jasa-digital-printing',
    title: 'Jasa Digital Printing',
    description: 'Layanan digital printing untuk berbagai kebutuhan cetak. Dari banner, spanduk, stiker, hingga cetak kain. Menggunakan mesin printing modern dengan resolusi tinggi.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
    features: ['Banner & Spanduk', 'Stiker Custom', 'Cetak Kain / Textile', 'X-Banner & Roll Banner'],
    color: 'from-teal-500 to-teal-700',
    bgLight: 'bg-teal-50',
    textColor: 'text-teal-600',
    hasDetailPage: false,
  },
];

export function Layanan() {
  const { navigateTo } = useNavigation();

  const handleDetailClick = (e: React.MouseEvent, service: typeof services[0]) => {
    if (service.hasDetailPage && service.detailPage) {
      e.preventDefault();
      window.location.hash = `page-${service.detailPage}`;
      navigateTo(service.detailPage);
    }
  };

  return (
    <section id="layanan" className="py-20 bg-gray-50" aria-label="Layanan Kami">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-secondary-900 mb-4">
            Solusi Lengkap untuk Kebutuhan{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
              Konveksi Anda
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan konveksi dan garmen dengan kualitas terbaik, 
            harga bersaing, dan proses pengerjaan yang cepat.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className={`w-4 h-4 ${service.textColor} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                <a
                  href="#form-order"
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${service.textColor} hover:gap-3 transition-all duration-200`}
                >
                  Order Sekarang
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                {service.hasDetailPage && (
                  <button
                    onClick={(e) => handleDetailClick(e, service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-1.5 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Lihat Detail
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
