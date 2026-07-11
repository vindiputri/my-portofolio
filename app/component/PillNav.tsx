"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // ✅ buat render logo sebagai gambar
import { useTheme } from 'next-themes';

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

interface PillNavProps {
  logo?: string;
  logoAlt?: string; // ✅ ditambahkan, wajib untuk accessibility & SEO gambar
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
}

export default function PillNav({ logo, logoAlt = "Logo", items, activeHref, className = '' }: PillNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] w-auto transition-all duration-300">

      {/* ✅ ganti <nav> tetap dipakai, ini sudah benar secara semantic HTML — cuma tambahin aria-label */}
      <nav
        aria-label="Navigasi utama"
        className={`
          flex items-center gap-5 rounded-full px-6 py-2 transition-all duration-500 ease-in-out border text-sm h-11
          ${isScrolled 
            ? 'bg-white/70 dark:bg-black/40 backdrop-blur-md border-neutral-200/80 dark:border-white/10 shadow-md dark:shadow-lg' 
            : 'bg-white dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 shadow-xl dark:shadow-2xl'
          }
          ${className}
        `}
      >
        {/* LOGO */}
{logo && (
  <div className="relative w-8 h-8 shrink-0 overflow-hidden rounded-full">
    <Image
      src={logo}
      alt={logoAlt}
      fill
      className="object-contain"
      priority
    />
  </div>
)}

        <ul className="flex items-center m-0 p-0 list-none relative gap-0.5">
          {items.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <li key={item.href} className="relative flex items-center h-full">
                <Link
                  href={item.href}
                  className="group relative overflow-hidden inline-flex items-center justify-center px-4 py-2 rounded-full box-border whitespace-nowrap cursor-pointer text-sm font-medium capitalize tracking-normal no-underline z-10 h-8 gap-2"                  aria-label={item.ariaLabel || item.label}
                  aria-current={isActive ? "page" : undefined} // ✅ accessibility: kasih tau screen reader ini halaman/section aktif
                >
                  <span className="relative z-10 pointer-events-none block h-4 overflow-hidden">
                    <span className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
                      <span className="h-4 flex items-center justify-center text-neutral-800 dark:text-white">
                        {item.label}
                      </span>
                      <span className="h-4 flex items-center justify-center text-neutral-800 dark:text-white" aria-hidden="true">
                        {item.label}
                      </span>
                    </span>
                  </span>

                  {isActive && (
                    <span 
                      className="w-1.5 h-1.5 rounded-full shrink-0 bg-[#A3E635] shadow-[0_0_6px_#F9D923] animate-pulse transition-all duration-300" 
                      aria-hidden="true" 
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="h-4 w-[1px] bg-neutral-200 dark:bg-neutral-800 shrink-0" />

        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex items-center justify-center w-7 h-7 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300 cursor-pointer"
            aria-label={theme === 'dark' ? "Ganti ke mode terang" : "Ganti ke mode gelap"} // ✅ lebih deskriptif daripada cuma "Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        )}

      </nav>
    </div>
  );
}