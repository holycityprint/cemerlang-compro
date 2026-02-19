# 📸 PANDUAN GAMBAR - CV. Cemerlang Evolution

## Struktur Folder Gambar

Semua gambar diletakkan di folder `public/images/` agar mudah diakses.
Setelah menambahkan gambar, referensikan di kode dengan path `/images/nama-file.jpg`.

> **Format yang direkomendasikan:** `.webp` (ukuran kecil, kualitas tinggi) atau `.jpg`
> **Resolusi yang direkomendasikan:** Minimal 800x600px untuk thumbnail, 1920x1080px untuk hero/banner

---

## 📁 Struktur Folder

```
public/
└── images/
    ├── logo/
    │   ├── logo-cemerlang.png              ← Logo utama perusahaan (transparan, PNG)
    │   ├── logo-cemerlang-white.png        ← Logo putih untuk header gelap
    │   ├── logo-cemerlang-square.png       ← Logo kotak untuk favicon/WA
    │   └── favicon.ico                     ← Favicon website
    │
    ├── hero/
    │   ├── hero-home-banner.webp           ← Banner utama homepage (1920x1080)
    │   ├── hero-jasa-jahit.webp            ← Banner halaman jasa jahit (1920x800)
    │   └── hero-jasa-sablon.webp           ← Banner halaman jasa sablon (1920x800)
    │
    ├── layanan/
    │   ├── layanan-jasa-jahit.webp         ← Thumbnail layanan jasa jahit (800x600)
    │   ├── layanan-jasa-sablon.webp        ← Thumbnail layanan jasa sablon (800x600)
    │   ├── layanan-printing-jersey.webp    ← Thumbnail layanan printing jersey (800x600)
    │   ├── layanan-jasa-bordir.webp        ← Thumbnail layanan jasa bordir (800x600)
    │   ├── layanan-cetak-lanyard.webp      ← Thumbnail layanan cetak lanyard (800x600)
    │   └── layanan-digital-printing.webp   ← Thumbnail layanan digital printing (800x600)
    │
    ├── gallery/
    │   ├── gallery-jersey-futsal-01.webp       ← Foto hasil jersey futsal custom
    │   ├── gallery-jersey-futsal-02.webp       ← Foto hasil jersey futsal custom (2)
    │   ├── gallery-jersey-basket-01.webp       ← Foto hasil jersey basket
    │   ├── gallery-jersey-basket-02.webp       ← Foto hasil jersey basket (2)
    │   ├── gallery-sablon-manual-01.webp       ← Foto hasil sablon manual/rubber
    │   ├── gallery-sablon-manual-02.webp       ← Foto hasil sablon manual (2)
    │   ├── gallery-sablon-digital-01.webp      ← Foto hasil sablon digital DTF
    │   ├── gallery-sablon-digital-02.webp      ← Foto hasil sablon digital (2)
    │   ├── gallery-konveksi-seragam-01.webp    ← Foto hasil seragam kantor
    │   ├── gallery-konveksi-seragam-02.webp    ← Foto hasil seragam kantor (2)
    │   ├── gallery-konveksi-jaket-01.webp      ← Foto hasil jaket custom
    │   ├── gallery-konveksi-jaket-02.webp      ← Foto hasil jaket custom (2)
    │   ├── gallery-bordir-logo-01.webp         ← Foto hasil bordir logo
    │   ├── gallery-bordir-logo-02.webp         ← Foto hasil bordir logo (2)
    │   ├── gallery-lanyard-01.webp             ← Foto hasil cetak lanyard
    │   └── gallery-lanyard-02.webp             ← Foto hasil cetak lanyard (2)
    │
    ├── produk/
    │   ├── produk-seragam-kantor.webp      ← Foto produk seragam kantor
    │   ├── produk-seragam-sekolah.webp     ← Foto produk seragam sekolah
    │   ├── produk-kaos-polo.webp           ← Foto produk kaos & polo shirt
    │   ├── produk-jaket-hoodie.webp        ← Foto produk jaket & hoodie
    │   ├── produk-celana-rok.webp          ← Foto produk celana & rok
    │   ├── produk-pakaian-olahraga.webp    ← Foto produk pakaian olahraga
    │   ├── produk-jersey-futsal.webp       ← Foto produk jersey futsal
    │   ├── produk-jersey-basket.webp       ← Foto produk jersey basket
    │   ├── produk-jersey-badminton.webp    ← Foto produk jersey badminton
    │   └── produk-jersey-esport.webp       ← Foto produk jersey e-sport
    │
    ├── sablon/
    │   ├── sablon-rubber-manual.webp       ← Contoh hasil sablon rubber/manual
    │   ├── sablon-plastisol.webp           ← Contoh hasil sablon plastisol
    │   ├── sablon-discharge.webp           ← Contoh hasil sablon discharge
    │   ├── sablon-digital-dtf.webp         ← Contoh hasil sablon digital DTF
    │   ├── sablon-foil-metalik.webp        ← Contoh hasil sablon foil/metalik
    │   └── sablon-glow-in-the-dark.webp    ← Contoh hasil sablon glow in the dark
    │
    ├── bahan/
    │   ├── bahan-cotton-combed.webp        ← Foto bahan cotton combed
    │   ├── bahan-lacoste.webp              ← Foto bahan lacoste CVC
    │   ├── bahan-american-drill.webp       ← Foto bahan american drill
    │   ├── bahan-oxford.webp               ← Foto bahan oxford
    │   ├── bahan-fleece.webp               ← Foto bahan fleece/baby terry
    │   ├── bahan-diadora-dryfit.webp       ← Foto bahan diadora/dry-fit
    │   ├── bahan-parasut-taslan.webp       ← Foto bahan parasut taslan
    │   └── bahan-twill-stretch.webp        ← Foto bahan twill stretch
    │
    ├── testimoni/
    │   ├── testimoni-ahmad-fadilah.webp    ← Foto profil Ahmad Fadilah
    │   ├── testimoni-siti-nurhaliza.webp   ← Foto profil Siti Nurhaliza
    │   ├── testimoni-budi-santoso.webp     ← Foto profil Budi Santoso
    │   ├── testimoni-diana-putri.webp      ← Foto profil Diana Putri
    │   ├── testimoni-rendi-pratama.webp    ← Foto profil Rendi Pratama
    │   └── testimoni-indah-permatasari.webp ← Foto profil Indah Permatasari
    │
    ├── proses/
    │   ├── proses-konsultasi.webp          ← Foto proses konsultasi desain
    │   ├── proses-pemilihan-bahan.webp     ← Foto proses pemilihan bahan kain
    │   ├── proses-pola-sampel.webp         ← Foto proses pembuatan pola & sampel
    │   ├── proses-produksi-jahit.webp      ← Foto proses produksi jahit
    │   ├── proses-quality-control.webp     ← Foto proses quality control
    │   ├── proses-finishing-packing.webp   ← Foto proses finishing & packing
    │   ├── proses-sablon-screen.webp       ← Foto proses pembuatan screen sablon
    │   ├── proses-sablon-cetak.webp        ← Foto proses sablon cetak
    │   └── proses-sablon-curing.webp       ← Foto proses curing/pengeringan
    │
    ├── about/
    │   ├── about-workshop-01.webp          ← Foto workshop/pabrik (depan)
    │   ├── about-workshop-02.webp          ← Foto workshop/pabrik (dalam)
    │   ├── about-team.webp                 ← Foto tim/karyawan
    │   ├── about-mesin-jahit.webp          ← Foto mesin jahit industri
    │   └── about-mesin-sablon.webp         ← Foto mesin sablon/printer
    │
    └── og/
        ├── og-image-home.jpg              ← Open Graph image homepage (1200x630)
        ├── og-image-jasa-jahit.jpg        ← Open Graph image jasa jahit (1200x630)
        └── og-image-jasa-sablon.jpg       ← Open Graph image jasa sablon (1200x630)
```

---

## 📋 Detail Penamaan Gambar per Halaman

### 1. HOMEPAGE (`/`)

| Nama File | Lokasi di Web | Ukuran | Keterangan |
|---|---|---|---|
| `logo-cemerlang.png` | Header (semua halaman) | 200x200px | Logo transparan PNG |
| `hero-home-banner.webp` | Hero section background | 1920x1080px | Banner utama |
| `gallery-*.webp` | Gallery section | 800x600px | Foto portofolio |
| `testimoni-*.webp` | Testimoni section | 200x200px | Foto profil bulat |

### 2. HALAMAN JASA JAHIT (`/#page-jasa-jahit`)

| Nama File | Lokasi di Web | Ukuran | Keterangan |
|---|---|---|---|
| `hero-jasa-jahit.webp` | Hero section | 1920x800px | Banner hero |
| `produk-seragam-kantor.webp` | Produk card | 800x600px | Foto seragam kantor |
| `produk-seragam-sekolah.webp` | Produk card | 800x600px | Foto seragam sekolah |
| `produk-kaos-polo.webp` | Produk card | 800x600px | Foto kaos & polo |
| `produk-jaket-hoodie.webp` | Produk card | 800x600px | Foto jaket & hoodie |
| `produk-celana-rok.webp` | Produk card | 800x600px | Foto celana & rok |
| `produk-pakaian-olahraga.webp` | Produk card | 800x600px | Foto pakaian olahraga |
| `bahan-*.webp` | Bahan section | 400x400px | Foto contoh bahan kain |
| `proses-*.webp` | Proses kerja | 600x400px | Foto proses kerja |

### 3. HALAMAN JASA SABLON (`/#page-jasa-sablon`)

| Nama File | Lokasi di Web | Ukuran | Keterangan |
|---|---|---|---|
| `hero-jasa-sablon.webp` | Hero section | 1920x800px | Banner hero |
| `sablon-rubber-manual.webp` | Jenis sablon card | 800x600px | Contoh sablon rubber |
| `sablon-plastisol.webp` | Jenis sablon card | 800x600px | Contoh sablon plastisol |
| `sablon-discharge.webp` | Jenis sablon card | 800x600px | Contoh sablon discharge |
| `sablon-digital-dtf.webp` | Jenis sablon card | 800x600px | Contoh sablon DTF |
| `sablon-foil-metalik.webp` | Jenis sablon card | 800x600px | Contoh sablon foil |
| `sablon-glow-in-the-dark.webp` | Jenis sablon card | 800x600px | Contoh glow in dark |
| `proses-sablon-*.webp` | Proses kerja | 600x400px | Foto proses sablon |

---

## 🔧 Cara Mengganti Gambar

### Langkah 1: Siapkan Gambar
- Siapkan foto-foto sesuai nama file di atas
- Pastikan format `.webp` atau `.jpg`
- Kompres gambar agar ukuran file kecil (gunakan https://tinypng.com)

### Langkah 2: Letakkan di Folder
- Copy gambar ke folder `public/images/` sesuai subfolder
- Pastikan nama file PERSIS sama dengan panduan di atas

### Langkah 3: Update Kode (jika perlu)
- Gambar bisa dipanggil di kode dengan `<img src="/images/folder/nama-file.webp" />`
- Untuk logo di header, update di `src/components/Header.tsx`
- Untuk gallery, update di `src/sections/Gallery.tsx`

---

## 💡 Tips Optimasi Gambar untuk SEO

1. **Gunakan format WebP** — ukuran 25-35% lebih kecil dari JPEG
2. **Kompres gambar** — target di bawah 200KB per gambar
3. **Tambahkan alt text** — deskripsi gambar dalam bahasa Indonesia
4. **Gunakan lazy loading** — tambahkan `loading="lazy"` pada tag `<img>`
5. **Resolusi yang tepat** — jangan gunakan gambar terlalu besar
6. **Nama file SEO-friendly** — gunakan kata kunci dalam nama file (sudah diterapkan)

---

## 📱 Kontak & WhatsApp

Nomor WhatsApp yang digunakan di seluruh website:
- **Nomor:** +62 818-0666-2983
- **Format untuk wa.me:** 6281806662983
- **Link:** https://wa.me/6281806662983

---

*Dokumen ini dibuat untuk memudahkan pengelolaan gambar website CV. Cemerlang Evolution.*
