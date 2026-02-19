export function ContactUs() {
  const waNumber = '6281806662983';
  const waMessage = encodeURIComponent('Halo CV. Cemerlang Bandung Creative, saya ingin bertanya tentang layanan konveksi Anda.');
  
  // URL Google Maps untuk alamat: Jl. Tubagus Ismail VIII No.60, Bandung
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.023247474146!2d107.61864117587424!3d-6.887823567399589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e0fdea894957%3A0xf5ff68ae2a40a5e8!2sJl.%20Tubagus%20Ismail%20VIII%20No.60%2C%20Sekeloa%2C%20Kec.%20Coblong%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040134!5e0!3m2!1sid!2sid!4v1707641234567!5m2!1sid!2sid";

  return (
    <section id="contact" className="py-20 bg-gray-50" aria-label="Hubungi Kami">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-secondary-900 mb-4">
            Hubungi{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
              Kami
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami atau datang langsung ke workshop kami di Dago.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Map Section */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[450px] lg:h-auto">
            <iframe
              title="Lokasi CV. Cemerlang Bandung Creative"
              src={googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '450px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-6">
            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${waNumber}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#25D366]/10 border-2 border-[#25D366]/20 rounded-2xl p-6 hover:shadow-lg hover:border-[#25D366]/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-secondary-900 text-lg">Chat via WhatsApp</h3>
                  <p className="text-gray-500 text-sm">+62 818-0666-2983</p>
                  <p className="text-[#25D366] text-sm font-medium mt-1">Klik untuk chat langsung →</p>
                </div>
              </div>
            </a>

            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center text-secondary-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-secondary-900">Alamat Workshop</h3>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                    Jl. Tubagus Ismail VIII No.60, Dago, Kecamatan Coblong, Kota Bandung, Jawa Barat 40135
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-secondary-900">Telepon</h3>
                  <p className="text-gray-500 text-sm mt-1">+62 818-0666-2983</p>
                </div>
              </div>
            </div>

            {/* Jam Operasional */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-secondary-900">Jam Operasional</h3>
                  <p className="text-gray-500 text-sm mt-1">Senin - Sabtu: 08.00 - 17.00 WIB</p>
                  <p className="text-gray-500 text-sm">Minggu: Libur / Perjanjian</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}