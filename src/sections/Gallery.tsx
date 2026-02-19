import { useState } from 'react';

const galleryItems = [
  {
    category: 'Jersey',
    title: 'Jersey Futsal Custom',
    desc: 'Full sublimation printing dengan desain eksklusif',
    image: '/images/gallery/futsal-custom.jpg',
  },
  {
    category: 'Sablon',
    title: 'Kaos Sablon Manual',
    desc: 'Sablon rubber berkualitas tinggi untuk komunitas',
    image: '/images/gallery/kaos-komunitas.jpg',
  },
  {
    category: 'Konveksi',
    title: 'Seragam Kantor',
    desc: 'Jahit konveksi seragam kantoran dengan bahan premium',
    image: '/images/gallery/seragam-kantor.jpg',
  },
  {
    category: 'Bordir',
    title: 'Bordir Logo Perusahaan',
    desc: 'Bordir komputer presisi tinggi untuk logo perusahaan',
    image: '/images/gallery/bordir-logo.jpg',
  },
  {
    category: 'Jersey',
    title: 'Jersey Basket Custom',
    desc: 'Desain jersey basket dengan sublimation print',
    image: '/images/gallery/basket-custom.jpg',
  },
  {
    category: 'Lanyard',
    title: 'Lanyard ID Card Custom',
    desc: 'Cetak lanyard tali ID card full color',
    image: '/images/gallery/lanyard-id.jpg',
  },
  {
    category: 'Sablon',
    title: 'Sablon Digital DTF',
    desc: 'Sablon DTF full color untuk desain yang kompleks',
    image: '/images/gallery/sablon-dtf.jpg',
  },
  {
    category: 'Konveksi',
    title: 'Jaket Custom',
    desc: 'Produksi jaket bomber dan hoodie custom design',
    image: '/images/gallery/jaket-bomber.jpg',
  },
];

const categories = ['Semua', 'Jersey', 'Sablon', 'Konveksi', 'Bordir', 'Lanyard'];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredItems = activeCategory === 'Semua'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50" aria-label="Gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-secondary-900 mb-4">
            Portofolio{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
              Karya Kami
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Lihat hasil karya terbaik kami yang telah kami kerjakan untuk berbagai klien dan perusahaan.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, i) => (
            <article
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-56 relative overflow-hidden bg-gray-200">
                {/* Image Portofolio */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                   <p className="text-white text-xs font-medium">Klik untuk Detail</p>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded-md">
                  {item.category}
                </span>
                <h3 className="font-bold text-secondary-900 mt-2 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}