"use client";

import PillNav from './component/PillNav';
import Home from './component/Home';
import About from './component/About'; 
import Project from './component/Project'; 
import Contact from './component/Contact';
import Footer from '@/app/component/Footer';

import { useEffect, useState } from 'react';

export default function Page() {
  const menuItems = [
    { label: 'Beranda', href: '#home' },
    { label: 'Tentang', href: '#about' },
    { label: 'Proyek', href: '#projects' },
    { label: 'Kontak', href: '#contact' },
  ];

  const [activeHref, setActiveHref] = useState('#home');

  useEffect(() => {
    const sections = menuItems.map((item) => document.querySelector(item.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    sections.forEach((section) => section && observer.observe(section));
    return () => sections.forEach((section) => section && observer.unobserve(section));
  }, []);

  return (
    <main className="min-h-screen w-full bg-slate-50 dark:bg-neutral-950 text-neutral-900 dark:text-slate-200 transition-colors duration-500 relative overflow-x-hidden">
      <PillNav 
        logo="/assets/projek/logo.png"
        logoAlt="Logo Dwi Vindi Putri Maulana"
        items={menuItems} 
        activeHref={activeHref}
      />

      <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 transition-all duration-300">
        <Home />
        <About /> {/* ✅ menggantikan placeholder <section id="about"> yang lama */}

        <Project />

        <Contact />
      </div>
      <Footer />
    </main>
  );
}