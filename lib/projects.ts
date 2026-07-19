export interface Project {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  year: string;
  role: string;
  image: string;
  techStack: string[];
  features: string[];
  keyFunctionalities?: string[];
  futureImprovements?: string[];
  designScreens: { src: string; alt: string }[];
  mappingImage?: { src: string; alt: string };
  projectUrl?: string;
  type: "web" | "mobile";
}

export const projects: Project[] = [
{
  id: "toko-kayu", // ID ini biarkan tetap seperti ini agar routing halaman [id] kamu tidak error
  title: "WoodFlow",
  type: "web",
  tagline: "Sistem Informasi Manajemen Mebel & Kayu: Katalog Komoditas, Inventaris Bahan Baku, dan Grafik Tren Transaksi.",
  overview: "Web ini adalah sistem manajemen operasional internal terintegrasi sekaligus katalog online untuk bisnis mebel custom dan penyedia bahan kayu solid. Dibuat untuk menggantikan pencatatan manual, sistem ini mendata komoditas menjadi dua tipe utama (Pre-Order Mebel dan Penjualan Bahan Ready), mendeteksi otomatis peringatan stok kritis di bawah ambang batas aman, serta memetakan riwayat omzet penjualan ke dalam grafik tren penjualan harian yang dinamis.",
  year: "2026",
  role: "Front-End Developer",
  image: "/assets/projek/kayu.webp", 
  techStack: ["Laravel", "Tailwind CSS", "Chart.js", "MySQL"],
  features: [
    "Halaman Katalog Pelanggan Publik: Halaman etalase responsif yang memisahkan status produk secara otomatis berdasarkan harga dan tipe produk, menampilkan opsi 'Pre-Order Mebel' untuk furnitur jadi atau 'Bahan Ready' untuk material kayu olahan tanpa akses login.",
    "Dashboard Pantauan Ringkasan Real-Time: Halaman utama admin dengan widget metrik instan untuk memantau Total Transaksi Hari Ini, grafik interaktif tren omzet 30 hari terakhir, serta indikator visual berbasis data relasional.",
    "Sistem Peringatan Stok Kritis (Low-Stock Alert): Modul inventaris pintar yang otomatis memfilter data bahan baku kayu dan memunculkannya ke dalam daftar peringatan 'Hampir Habis' jika kuantitas stok menyentuh angka di bawah 10 unit.",
    "Pencatatan Riwayat Transaksi Multistatus: Sistem pembukuan yang mencatat setiap nota masuk berdasarkan kategori item belanja (Preorder vs Penjualan Bahan) guna menghasilkan komparasi grafik pendapatan yang akurat."
  ],
  keyFunctionalities: [
    "Integrasi Relasi 3 Tabel Utama: Logika penarikan data dinamis yang menghubungkan entitas Kategori, Produk/Bahan, dan Transaksi, memungkinkan admin menyaring serta melihat akumulasi total harga penjualan secara langsung sesuai waktu transaksi.",
    "Tombol Interaktif Konsultasi Spesifikasi: Integrasi tautan langsung dari katalog produk menuju WhatsApp bisnis, memudahkan calon pelanggan menanyakan detail kustomisasi ukuran mebel atau stok balok kayu secara instan."
  ],
  futureImprovements: [
    "Pengembangan Grafik Prediktif: Menambahkan algoritma peramalan sederhana pada Chart.js untuk memprediksi jenis kayu atau model mebel yang akan paling banyak dicari pada bulan berikutnya berdasarkan data histori transaksi."
  ],
  designScreens: [
    { 
      src: "/assets/projek/katalog.webp", 
      alt: "Tampilan Katalog Depan : Integrasi halaman etalase publik " 
    },

     { 
      src: "/assets/projek/dashboard.webp", 
      alt: "Tampilan Dashboard Admin : Ringkasan metrik instan, grafik tren omzet, dan daftar peringatan stok kritis. " 
    }
  ],
},

  {
  id: "talky-app",
  title: "Talky App",
  type: "mobile",
  role: "UI/UX Designer & Developer",
  // Properti yang sebelumnya kurang:
  tagline: "Aplikasi Edukasi Pengucapan Bahasa Inggris Berbasis Offline untuk Anak-Anak",
  year: "2026", // Sesuaikan dengan tahun pembuatan
  image: "/assets/projek/utamaapk.webp", // Sampul utama proyek untuk halaman depan
  techStack: ["Unity", "C#", "Vosk", "Android SDK"], 
  
  // Properti yang sudah ada sebelumnya:
  overview: "Aplikasi mobile edukasi interaktif berbasis Android yang dirancang khusus dalam orientasi landscape untuk membantu anak-anak kelas 3 tingkat pemula dalam belajar pengucapan bahasa Inggris secara mandiri melalui model pengenalan suara (Speech Recognition) luring.",
  features: [
    "Kurikulum Berjenjang (Leveling System): Materi pembelajaran yang dibagi berdasarkan tingkat kesulitan (Basic, Intermediate, Advanced) untuk menyesuaikan ritme belajar anak.",
    "Modul Pelatihan Vokal Offline: Integrasi teknologi Vosk Speech Recognition yang memungkinkan anak mempraktikkan pengucapan kata dan kalimat secara langsung tanpa koneksi internet.",
    "Antarmuka Ramah Anak: Desain horizontal/landscape dengan visual kontras tinggi untuk memudahkan navigasi motorik anak usia dini."
  ],
  designScreens: [
    { 
      src: "/assets/projek/utamaapk.webp", 
      alt: "Halaman Awal: Gerbang utama aplikasi dengan visual menarik untuk menyambut anak-anak memulai belajar." 
    },
    { 
      src: "/assets/projek/menuapk.webp", 
      alt: "Halaman Menu Level: Pilihan 3 tingkat kompetensi utama yang terstruktur, yaitu level Basic, Intermediate, dan Advanced." 
    },
    { 
      src: "/assets/projek/basic.webp", 
      alt: "Level Basic: Fokus pada pengenalan kosakata dasar di lingkungan sekitar anak, mencakup sub-menu School (Sekolah) dan Animals (Hewan)." 
    },
    { 
      src: "/assets/projek/inter.webp", 
      alt: "Level Intermediate: Peningkatan materi ke tingkat menengah yang interaktif, mencakup sub-menu Activities (Aktivitas Harian) dan Foods (Makanan/Minuman)." 
    },
    { 
      src: "/assets/projek/advanced.webp", 
      alt: "Level Advanced: Tahap akhir pelatihan di mana anak ditantang untuk mengucapkan konstruksi Kalimat Sederhana secara utuh." 
    }
  ]
},

  {
    id: "bts-mapping-system",
    title: "Sistem Pemetaan BTS",
    type: "web",
    tagline: "Sistem Pemetaan Infrastruktur Menara Base Transceiver Station.",
    overview: "Sistem Informasi Geografis (SIG) berbasis web yang dirancang untuk memetakan, mengelola, dan memvisualisasikan persebaran titik lokasi menara telekomunikasi (BTS) secara real-time.",
    year: "2024",
    role: "Front End Developer",
    image: "/assets/projek/btsutama.webp",
    techStack: ["Laravel", "Boostrap", "MySQL", "JS"],
    features: [
      "Visualisasi peta interaktif menggunakan framework Leaflet JS.",
      "Pencarian dan pemfilteran lokasi BTS berdasarkan wilayah administratif."
    ],
    keyFunctionalities: [
      "Geomapping View: Menampilkan titik koordinat presisi menara telekomunikasi pada peta digital."
    ],
    futureImprovements: [
      "Integrasi deteksi jangkauan sinyal radius secara otomatis."
    ],
    designScreens: [
      { src: "/assets/projek/uibts.webp", alt: "Halaman Beranda" },
      { 
        src: "/assets/projek/mapbts.webp", 
        alt: "Halaman Peta: Tampilan peta pada suatu wilayah yang memuat informasi jangkauan dan radius BTS." 
      },
            { 
        src: "/assets/projek/mapbts2.webp", 
        alt: "Halaman Peta: Tampilan peta interaktif pada suatu wilayah yang memuat informasi jangkauan dan radius BTS." 
      },
            { 
        src: "/assets/projek/addbts.webp", 
        alt: "Halaman Tambah Data BTS untuk Admin." 
      },
      
    ],
  },

      {
  id: "jabal-rahmah",
  title: "Web Pesantren Jabal Rahmah",
  type: "web",
  tagline: "Platform Informasi Digital Berbasis Web untuk Pesantren Jabal Rahmah.",
  overview: "Platform web profil  yang dirancang  untuk mengenalkan institusi dan mempublikasikan prestasi santri",
  year: "2023",
  role: "Web Developer",
  image: "/assets/projek/jabal.webp",
  techStack: ["HTML", "CSS", "JS"],
  features: [
    "Sistem navigasi  dengan menu utama: Home, Sejarah, Profil, Prestasi, dan Contact.",
    "Halaman Profil & Sejarah interaktif untuk mengenalkan latar belakang dan visi-misi pesantren.",
    "Galeri publikasi digital untuk memamerkan pencapaian dan prestasi akademik maupun non-akademik santri.",
    "Formulir kontak terintegrasi untuk mempermudah komunikasi dan layanan informasi publik."
  ],
  keyFunctionalities: [
    "Information Architecture (Struktur Menu): Pembagian konten yang rapi ke dalam 5 bagian utama (Home, Sejarah, Profil, Prestasi, Contact) untuk mempermudah pengunjung menemukan informasi terkait pesantren.",
    "Responsive Layout: Optimalisasi tampilan web agar dapat diakses dengan nyaman melalui perangkat komputer (desktop) maupun ponsel pintar (mobile)."
  ],
  // Antarmuka dan Penjelasannya (Menggunakan kontainer bergaya premium & terarah)
  designScreens: [
    { 
      src: "/assets/projek/webpesantren.webp", 
      alt: "Halaman Utama & Profil: Desain antarmuka web profil Pesantren Jabal Rahmah yang memuat arsitektur menu terstruktur mulai dari Beranda (Home), Sejarah pendirian, Profil lembaga, daftar Prestasi santri, hingga informasi Kontak resmi." 
    }
  ],
}
];
 