const testimonials = [
  {
    name: 'Ahmad Fadilah',
    role: 'Owner Tim Futsal Garuda FC',
    text: 'Hasil printing jersey dari CV. Cemerlang sangat memuaskan! Warnanya cerah, bahannya nyaman, dan pengerjaan tepat waktu. Tim kami bangga pakai jersey ini. Recommended banget!',
    rating: 5,
    initial: 'AF',
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'Siti Nurhaliza',
    role: 'HRD PT. Maju Bersama',
    text: 'Kami sudah 3 kali order seragam kantor di sini. Jahitannya rapi, bahan sesuai yang diminta, dan harganya sangat kompetitif. Pelayanannya juga ramah dan fast response.',
    rating: 5,
    initial: 'SN',
    color: 'from-purple-500 to-purple-700',
  },
  {
    name: 'Budi Santoso',
    role: 'Ketua Komunitas Rider Bandung',
    text: 'Sablon kaos komunitas kami hasilnya keren banget. Sablon manual berkualitas, nggak luntur setelah dicuci berkali-kali. Proses diskusi desain juga mudah. Pasti order lagi!',
    rating: 5,
    initial: 'BS',
    color: 'from-green-500 to-green-700',
  },
  {
    name: 'Diana Putri',
    role: 'Event Organizer',
    text: 'Pesan lanyard ID card untuk event perusahaan. Hasilnya bagus, warna full color sesuai desain. Pengerjaan cepat padahal deadline mepet. Thanks Cemerlang!',
    rating: 5,
    initial: 'DP',
    color: 'from-amber-500 to-amber-700',
  },
  {
    name: 'Rendi Pratama',
    role: 'Manager Tim E-Sport Phoenix',
    text: 'Jersey gaming tim kami dibuatkan desain yang keren dan berkualitas. Bahan jersey dry-fit yang nyaman dipakai berlama-lama saat turnamen. Top banget!',
    rating: 5,
    initial: 'RP',
    color: 'from-red-500 to-red-700',
  },
  {
    name: 'Indah Permatasari',
    role: 'Owner Butik Indah Fashion',
    text: 'Bordir logo di kemeja kantor hasilnya sangat rapi dan presisi. Detail bordir terlihat bagus. Harga juga bersahabat untuk jumlah banyak. Sangat merekomendasikan!',
    rating: 4,
    initial: 'IP',
    color: 'from-teal-500 to-teal-700',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-primary-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimoni() {
  return (
    <section id="testimoni" className="py-20 bg-white" aria-label="Testimoni Pelanggan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-secondary-900 mb-4">
            Apa Kata{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
              Pelanggan Kami
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami. Berikut testimoni dari pelanggan setia CV. Cemerlang Evolution.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <article
              key={i}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <svg className="w-8 h-8 text-primary-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "{item.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                  {item.initial}
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 text-sm">{item.name}</h4>
                  <p className="text-gray-500 text-xs">{item.role}</p>
                </div>
                <div className="ml-auto">
                  <StarRating rating={item.rating} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-secondary-800 to-secondary-900 rounded-3xl p-10 sm:p-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 bg-primary-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-secondary-500 rounded-full blur-3xl"></div>
            </div>
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Siap Menjadi Pelanggan Kami Selanjutnya?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                Bergabung dengan ratusan pelanggan puas kami. Hubungi kami sekarang untuk konsultasi gratis!
              </p>
              <a
                href="#form-order"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Pesan Sekarang
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
