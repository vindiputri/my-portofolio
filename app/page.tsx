"use client"; // tetap perlu client karena scrollspy pakai useState/useEffect

import PillNav from './component/PillNav'; // ✅ path diperbaiki: @/components, bukan ./component
import HomeSection from './component/Home'; // ✅ komponen Home diimport
import { useEffect, useState } from 'react';

export default function Page() { // ✅ nama function diganti "Page" biar ga bentrok sama nama komponen Home yang diimport
  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
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
    <main className="min-h-screen w-full bg-slate-50 dark:bg-black text-neutral-900 dark:text-slate-200 transition-colors duration-500 relative overflow-x-hidden">
      <PillNav 
        logo="/logo.png"
        logoAlt="Logo Dwi Vindi Putri Maulana"
        items={menuItems} 
        activeHref={activeHref}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* ✅ Section Home sekarang dipanggil sebagai komponen terpisah */}
        <HomeSection />

        {/* SECTION 2: ABOUT — placeholder, nanti diganti komponen About.tsx */}
        <section id="about" className="min-h-screen pt-24">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">About Section</h2>
        </section>

        {/* SECTION 3: PROJECTS — placeholder, nanti diganti komponen Projects.tsx */}
        <section id="projects" className="min-h-screen pt-24">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Projects Section</h2>
        </section>

        {/* SECTION 4: CONTACT — placeholder, nanti diganti komponen Contact.tsx */}
        <section id="contact" className="min-h-screen pt-24">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Contact Section</h2>
        </section>
      </div>
    </main>
  );
}