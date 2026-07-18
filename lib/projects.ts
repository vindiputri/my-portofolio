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
    id: "sulam-tenun",
    title: "Sulam Tenun",
    type: "web",
    tagline: "Katalog Digital Pelestarian Budaya dan Kerajinan Sulam Tenun.",
    overview: "Platform katalog interaktif berbasis web untuk melestarikan, mendokumentasikan, dan mempromosikan ragam motif kain sulam tenun tradisional kepada audiens global.",
    year: "2025",
    role: "UI/UX Designer & Developer",
    image: "/project-sulam-tenun.png",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    features: [
      "Katalog visual motif kain tradisional resolusi tinggi."
    ],
    keyFunctionalities: [
      "Interactive Gallery: Menampilkan detail jahitan kain dengan fitur pembesaran gambar."
    ],
    futureImprovements: [
      "Integrasi fitur e-commerce untuk pemesanan langsung."
    ],
    designScreens: [
      { src: "/project-sulam-tenun.png", alt: "Halaman Detail Motif" }
    ],
    mappingImage: { src: "/project-sulam-tenun-mapping.png", alt: "Peta Persebaran Motif" }
  },

  {
  id: "talky-app",
  title: "Talky App",
  type: "mobile",
  role: "UI/UX Designer & Developer",
  // Properti yang sebelumnya kurang:
  tagline: "Aplikasi Edukasi Pengucapan Bahasa Inggris Berbasis Offline untuk Anak-Anak",
  year: "2026", // Sesuaikan dengan tahun pembuatan
  image: "/assets/projek/talky-cover.webp", // Sampul utama proyek untuk halaman depan
  techStack: ["Unity", "C#", "Vosk AI", "Android SDK"], 
  
  // Properti yang sudah ada sebelumnya:
  overview: "Aplikasi mobile edukasi interaktif berbasis Android yang dirancang khusus dalam orientasi landscape untuk membantu anak-anak kelas 3 tingkat pemula dalam belajar pengucapan bahasa Inggris secara mandiri melalui model pengenalan suara (Speech Recognition) luring.",
  features: [
    "Kurikulum Berjenjang (Leveling System): Materi pembelajaran yang dibagi berdasarkan tingkat kesulitan (Basic, Intermediate, Advanced) untuk menyesuaikan ritme belajar anak.",
    "Modul Pelatihan Vokal Offline: Integrasi teknologi Vosk Speech Recognition yang memungkinkan anak mempraktikkan pengucapan kata dan kalimat secara langsung tanpa koneksi internet.",
    "Antarmuka Ramah Anak: Desain horizontal/landscape dengan visual kontras tinggi untuk memudahkan navigasi motorik anak usia dini."
  ],
  designScreens: [
    { 
      src: "/assets/projek/talky-awal.webp", 
      alt: "Halaman Awal: Gerbang utama aplikasi dengan visual menarik untuk menyambut anak-anak memulai belajar." 
    },
    { 
      src: "/assets/projek/talky-menu-utama.webp", 
      alt: "Halaman Menu Level: Pilihan 3 tingkat kompetensi utama yang terstruktur, yaitu level Basic, Intermediate, dan Advanced." 
    },
    { 
      src: "/assets/projek/talky-basic.webp", 
      alt: "Level Basic: Fokus pada pengenalan kosakata dasar di lingkungan sekitar anak, mencakup sub-menu School (Sekolah) dan Animals (Hewan)." 
    },
    { 
      src: "/assets/projek/talky-intermediate.webp", 
      alt: "Level Intermediate: Peningkatan materi ke tingkat menengah yang interaktif, mencakup sub-menu Activities (Aktivitas Harian) dan Foods (Makanan/Minuman)." 
    },
    { 
      src: "/assets/projek/talky-advanced.webp", 
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
 