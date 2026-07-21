import SplitText from "@/app/component/SplitText";
import RevealOnScroll from "@/app/component/RevealOnScroll";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    // 1. DIBUNGKUS DENGAN CONTAINER YANG KONSISTEN
    // Menggunakan max-w-6xl mx-auto px-4 md:px-8 agar jarak tepi kirinya SAMA PERSIS dengan komponen About yang baru.
    <section 
      id="home" 
      className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-3 items-center gap-12 pt-32 pb-20"
    >
      
      {/* KOLOM KIRI (Teks Utama) */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 w-full">
        <SplitText
  text="Hi, Saya Vindi"
  tag="p"
  className="font-sans text-base md:text-lg font-normal text-neutral-600 dark:text-brand-textSecondary mb-3"
  clip={false}
  immediate={true}
  onLetterAnimationComplete={() => {}}
/>

<h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-accentOnLight dark:text-brand-accent tracking-tight leading-normal py-2 flex flex-col gap-1">
  <span className="block h-auto py-1">
    <SplitText
      text="Informatics"
      tag="span"
      className="inline-block"
      clip={false}
      immediate={true}
      delay={0.06}
      onLetterAnimationComplete={() => {}}
    />
  </span>

  <span className="block h-auto py-1 text-neutral-900 dark:text-brand-textPrimary">
    <SplitText
      text="Graduate"
      tag="span"
      className="inline-block"
      clip={false}
      immediate={true}
      delay={0.12}
      onLetterAnimationComplete={() => {}}
    />
  </span>
</h1>

        <RevealOnScroll delay={0.4}>
          <p className="font-sans text-sm md:text-base font-normal text-neutral-500 dark:text-brand-textSecondary mt-4 max-w-sm leading-relaxed">
            Belajar, membangun, dan terus bertumbuh — satu baris kode di satu waktu.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.55}>
          <Link
            href="#about"
            className="group inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium text-sm hover:gap-3 transition-all"
          >
            Tentang Saya
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </RevealOnScroll>
      </div>

{/* KOLOM TENGAH (Foto Karakter) */}
<div className="flex justify-center order-1 lg:order-2 w-full">
  <RevealOnScroll delay={0.3}>
    <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] lg:w-[560px] lg:h-[560px]">
      <Image
        src="/assets/hero.png"
        alt="Foto Dwi Vindi Putri Maulana, Front-End Developer"
        fill
        className="object-contain"
        priority
      />
    </div>
  </RevealOnScroll>
</div>

      {/* KOLOM KANAN (Deskripsi & Sosial Media) */}
      {/* Perbaikan: Menghapus md:-mr-8 lg:-mr-16 agar posisi kanan mengunci aman di dalam container */}
      <div className="flex flex-col items-center lg:items-end text-center lg:text-right order-3 w-full">
        <RevealOnScroll delay={0.5}>
          <p className="font-sans text-sm md:text-base font-normal text-slate-600 dark:text-brand-textSecondary max-w-xs leading-relaxed">
           "Perjalanan saya di dunia IT baru saja dimulai. Saya bukan orang yang tahu segalanya, tapi saya sangat menikmati proses mencari jalan keluar saat kode sedang error. Portofolio ini adalah bukti bahwa keterbatasan ilmu bukan alasan untuk berhenti mencoba membangun sesuatu yang bermanfaat."
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.7}>
          <div className="flex gap-3 mt-5">
            <a 
              href="https://linkedin.com/in/username" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kunjungi profil LinkedIn saya"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-slate-300 hover:bg-brand-accentOnLight dark:hover:bg-brand-accent hover:text-white dark:hover:text-neutral-900 hover:border-brand-accentOnLight dark:hover:border-brand-accent transition-colors"
            >
              <FaLinkedin size={16} />
            </a>
            <a 
              href="https://github.com/username" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kunjungi profil GitHub saya"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-slate-300 hover:bg-brand-accentOnLight dark:hover:bg-brand-accent hover:text-white dark:hover:text-neutral-900 hover:border-brand-accentOnLight dark:hover:border-brand-accent transition-colors"
            >
              <FaGithub size={16} />
            </a>
            <a 
              href="mailto:vindiputri9-@gmail.com"
              aria-label="Kirim email ke saya"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-slate-300 hover:bg-brand-accentOnLight dark:hover:bg-brand-accent hover:text-white dark:hover:text-neutral-900 hover:border-brand-accentOnLight dark:hover:border-brand-accent transition-colors"
            >
              <HiOutlineMail size={16} />
            </a>
          </div>
        </RevealOnScroll>
      </div>

    </section>
  );
}