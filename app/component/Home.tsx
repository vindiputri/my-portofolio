import SplitText from "@/app/component/SplitText";
import RevealOnScroll from "@/app/component/RevealOnScroll";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section 
      id="home" 
      className="min-h-screen grid grid-cols-1 md:grid-cols-3 items-start gap-8 pt-44 pb-32"
    >
      {/* KOLOM KIRI */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left order-1 md:-ml-8 lg:-ml-16">
        <SplitText
          text="Hi, it's Vindi"
          tag="p"
          className="font-sans text-base md:text-lg font-normal text-neutral-600 dark:text-brand-textSecondary mb-2"
          onLetterAnimationComplete={() => {}}
        />

        <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-900 dark:text-brand-textPrimary tracking-normal leading-relaxed">
          <SplitText
            text="Front-End"
            tag="span"
            className="block"
            delay={0.06}
            onLetterAnimationComplete={() => {}}
          />
          <SplitText
            text="Developer"
            tag="span"
            className="block text-brand-accentOnLight dark:text-brand-accent"
            delay={0.08}
            onLetterAnimationComplete={() => {}}
          />
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
            Kenali Saya Lebih Jauh
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </RevealOnScroll>
      </div>

      {/* KOLOM TENGAH: foto karakter */}
      <div className="flex justify-center order-2 md:order-2">
        <RevealOnScroll delay={0.3}>
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-brand-accentBorderOnLight dark:border-brand-accentBorder">
            <Image
              src="/foto-vindi.png"
              alt="Foto Dwi Vindi Putri Maulana, Front-End Developer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </RevealOnScroll>
      </div>

      {/* KOLOM KANAN */}
      <div className="flex flex-col items-center md:items-end text-center md:text-right order-3 md:-mr-8 lg:-mr-16">
        <RevealOnScroll delay={0.5}>
          <p className="font-sans text-sm md:text-base font-normal text-slate-600 dark:text-brand-textSecondary max-w-xs leading-relaxed">
            Saya percaya proses belajar tidak pernah benar-benar selesai. 
            Dari memetakan BTS di Sumatera Barat hingga membangun aplikasi 
            pengucapan Bahasa Inggris untuk anak SD, setiap project 
            mengajarkan saya sesuatu yang baru.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.7}>
          <div className="flex gap-3 mt-5">
            <a 
              href="https://linkedin.com/in/username-kamu" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kunjungi profil LinkedIn saya"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-slate-300 hover:bg-brand-accentOnLight dark:hover:bg-brand-accent hover:text-white dark:hover:text-neutral-900 hover:border-brand-accentOnLight dark:hover:border-brand-accent transition-colors"
            >
              <FaLinkedin size={16} />
            </a>
            <a 
              href="https://github.com/username-kamu" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kunjungi profil GitHub saya"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-slate-300 hover:bg-brand-accentOnLight dark:hover:bg-brand-accent hover:text-white dark:hover:text-neutral-900 hover:border-brand-accentOnLight dark:hover:border-brand-accent transition-colors"
            >
              <FaGithub size={16} />
            </a>
            <a 
              href="mailto:email-kamu@gmail.com"
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