import React from "react";
import ShinyText from "@/app/component/ShinyText";
import Lanyard from "@/app/component/Lanyard"; 
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="py-20 w-full flex flex-col items-center px-4 md:px-12 lg:px-16"
    >
      
      {/* 1. JUDUL UTAMA */}
      <div className="w-full text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-heading font-semibold tracking-tight">
          <ShinyText text="Get In Touch" speed={3} color="#A3E635" shineColor="#F4F4F5" spread={120} />
        </h2>
        <p className="text-neutral-500 dark:text-brand-textSecondary mt-3 text-sm md:text-base">
          Mari terhubung! Silakan kunjungi sosial media saya atau hubungi lewat email.
        </p>
      </div> 

      {/* 2. LAYOUT KONTEN: 2 kolom di Desktop */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* KOLOM KIRI: Teks Ajakan & Kontak/Sosmed */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Let's Collaborate
          </h3>
          <p className="text-base text-neutral-600 dark:text-brand-textSecondary max-w-md leading-loose mb-8">
            Saya selalu terbuka untuk mendiskusikan proyek baru, peluang kerja, 
            atau sekadar berbagi insight seputar front-end development.
          </p>

          <div className="flex flex-col gap-4 w-full max-w-sm">
            <a 
              href="mailto:email-kamu@gmail.com"
              className="flex items-center gap-4 px-5 py-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/30 hover:border-brand-accentOnLight dark:hover:border-brand-accent transition-all group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 group-hover:bg-brand-accentOnLight dark:group-hover:bg-brand-accent group-hover:text-white dark:group-hover:text-neutral-900 transition-colors">
                <HiOutlineMail size={20} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-medium text-neutral-400">Email</span>
                <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">email-kamu@gmail.com</span>
              </div>
            </a>

            <a 
              href="https://linkedin.com/in/username-kamu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-5 py-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/30 hover:border-brand-accentOnLight dark:hover:border-brand-accent transition-all group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 group-hover:bg-brand-accentOnLight dark:group-hover:bg-brand-accent group-hover:text-white dark:hover:text-neutral-900 transition-colors">
                <FaLinkedin size={18} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-medium text-neutral-400">LinkedIn</span>
                <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">Dwi Vindi Putri Maulana</span>
              </div>
            </a>

            <a 
              href="https://github.com/username-kamu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-5 py-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/30 hover:border-brand-accentOnLight dark:hover:border-brand-accent transition-all group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 group-hover:bg-brand-accentOnLight dark:group-hover:bg-brand-accent group-hover:text-white dark:hover:text-neutral-900 transition-colors">
                <FaGithub size={18} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-medium text-neutral-400">GitHub</span>
                <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">username-kamu</span>
              </div>
            </a>
          </div>
        </div>

        {/* ✅ KOLOM KANAN: Lanyard */}
        <div className="flex justify-center items-center order-1 lg:order-2 w-full position={[0, 0, 15]} gravity={[0, -40, 0]}">
          <Lanyard />
        </div>

      </div>

    </section>
  );
}