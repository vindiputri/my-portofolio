"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

interface PillNavProps {
  logo?: string;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
}

// Inline SVGs to avoid loading heavy icons or extra bundles
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
);

const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

export default function PillNav({ logo, logoAlt = "Logo", items, activeHref, className = '' }: PillNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  // Close mobile menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] w-[90%] max-w-sm md:w-auto md:max-w-none transition-all duration-300">
      
      {/* CSS Animation Keyframes for smooth mobile menu expansion */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <nav
        aria-label="Navigasi utama"
        className={`
          flex flex-col md:flex-row md:items-center gap-3 md:gap-5 rounded-[24px] md:rounded-full px-4 md:px-6 py-2 transition-all duration-500 ease-in-out border text-sm
          ${isScrolled 
            ? 'bg-white/80 dark:bg-black/50 backdrop-blur-md border-neutral-200/80 dark:border-white/10 shadow-md dark:shadow-lg' 
            : 'bg-white dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 shadow-xl dark:shadow-2xl'
          }
          ${className}
        `}
      >
        
        {/* Header Row (Always visible; shows Logo and actions on mobile) */}
        <div className="flex items-center justify-between w-full md:w-auto h-9">
          {/* LOGO */}
          {logo && (
            <Link 
              href="#home" 
              className="relative w-8 h-8 shrink-0 overflow-hidden rounded-full cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src={logo}
                alt={logoAlt}
                fill
                className="object-contain"
                priority
              />
            </Link>
          )}

          {/* Mobile Actions: Dark/Light Mode & Sandwich Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex items-center justify-center w-8 h-8 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300 cursor-pointer"
                aria-label={theme === 'dark' ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
              >
                {theme === 'dark' ? (
                  <SunIcon className="w-4 h-4 text-amber-400" />
                ) : (
                  <MoonIcon className="w-4 h-4 text-indigo-500" />
                )}
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-8 h-8 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300 cursor-pointer"
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            >
              {isOpen ? (
                <XIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Links (Hidden on mobile) */}
        <ul className="hidden md:flex items-center m-0 p-0 list-none relative gap-0.5">
          {items.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <li key={item.href} className="relative flex items-center h-full">
                <Link
                  href={item.href}
                  className="group relative overflow-hidden inline-flex items-center justify-center px-4 py-2 rounded-full box-border whitespace-nowrap cursor-pointer text-sm font-medium capitalize tracking-normal no-underline z-10 h-8 gap-2"
                  aria-label={item.ariaLabel || item.label}
                  aria-current={isActive ? "page" : undefined}
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

        {/* Desktop Separator & Theme Toggle (Hidden on mobile) */}
        <div className="hidden md:block h-4 w-[1px] bg-neutral-200 dark:bg-neutral-800 shrink-0" />

        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hidden md:flex items-center justify-center w-7 h-7 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300 cursor-pointer"
            aria-label={theme === 'dark' ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
          >
            {theme === 'dark' ? (
              <SunIcon className="w-4 h-4 text-amber-400" />
            ) : (
              <MoonIcon className="w-4 h-4 text-indigo-500" />
            )}
          </button>
        )}

        {/* Mobile Dropdown Menu (Expands down from the pill) */}
        {isOpen && (
          <div className="w-full md:hidden flex flex-col items-center gap-1 mt-1 border-t border-neutral-100 dark:border-neutral-800 pt-3 pb-2 animate-slideDown">
            <ul className="flex flex-col items-center w-full gap-2 list-none p-0 m-0">
              {items.map((item) => {
                const isActive = activeHref === item.href;

                return (
                  <li key={item.href} className="w-full flex justify-center">
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`w-full text-center py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-200
                        ${isActive 
                          ? 'text-[#A3E635] bg-neutral-100/50 dark:bg-neutral-900/50 font-semibold' 
                          : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900/30'
                        }
                      `}
                      aria-label={item.ariaLabel || item.label}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

      </nav>
    </div>
  );
}