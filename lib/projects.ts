// lib/project.ts

export interface Project {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  year: string;
  role: string;
  client: string;
  image: string;
  techStack: string[];
  features: string[];
  keyFunctionalities?: string[];
  futureImprovements?: string[];
  designScreens: { src: string; alt: string }[];
  projectUrl?: string;
}

export const projects: Project[] = [
    {
    id: "sulam-tenun",
    title: "Sulam Tenun",
    tagline: "Katalog Digital Pelestarian Budaya dan Kerajinan Sulam Tenun.",
    overview: "Platform katalog interaktif berbasis web untuk melestarikan, mendokumentasikan, dan mempromosikan ragam motif kain sulam tenun tradisional kepada audiens global.",
    year: "2025",
    role: "UI/UX Designer & Developer",
    client: "UMKM Kerajinan Lokal",
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
    ]
  },

  {
    id: "Talky-app",
    title: "Talky App",
    tagline: "Aplikasi Pembelajaran Interaktif untuk Siswa Kelas 3 SD",
    overview: "Aplikasi mobile offline berbasis Android yang dirancang khusus untuk membantu anak-anak kelas 3 SD yang baru mulai belajar bahasa Inggris. Aplikasi ini mengintegrasikan pengenalan suara otomatis (speech recognition) menggunakan Vosk untuk melatih pelafalan kata bahasa Inggris dasar secara mandiri, memberikan umpan balik instan dalam lingkungan belajar yang menyenangkan.",
    year: "2026",
    role: "Game & App Developer",
    client: "Tugas Akhir Akademik",
    image: "/project-speech.png",
    techStack: ["Unity", "Vosk Library", "C#", "Android SDK"],
    features: [
      "Sistem speech recognition offline menggunakan Vosk.",
      "Antarmuka pengguna (UI) landscape yang dioptimalkan untuk anak-anak.",
      "Umpan balik visual instan berdasarkan kecocokan suara.",
      "Modul pembelajaran interaktif (dengar, tiru, evaluasi)."
    ],
    keyFunctionalities: [
      "Voice Capture: Merekam suara pengguna secara real-time langsung di perangkat secara offline.",
      "Phonetic Analysis: Membandingkan ucapan pengguna dengan model bahasa yang telah ditentukan."
    ],
    futureImprovements: [
      "Menambahkan lebih banyak kosakata dan kategori tematik."
    ],
    designScreens: [
      { src: "/project-speech.png", alt: "Menu Utama Aplikasi" }
    ],
    projectUrl: "https://github.com/dwivindi/english-pronunciation-app"
  },
  {
    id: "bts-mapping-system",
    title: "Sistem Pemetaan BTS",
    tagline: "Sistem Pemetaan Infrastruktur Menara Base Transceiver Station.",
    overview: "Sistem Informasi Geografis (SIG) berbasis web yang dirancang untuk memetakan, mengelola, dan memvisualisasikan persebaran titik lokasi menara telekomunikasi (BTS) secara real-time.",
    year: "2024",
    role: "Web Developer",
    client: "Dinas Komunikasi dan Informatika",
    image: "/assets/projek/btsutama.png",
    techStack: ["NextJS", "Leaflet JS", "PostgreSQL", "Tailwind CSS"],
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
      { src: "/project-bts.png", alt: "Halaman Peta Persebaran" }
    ]
  },

];