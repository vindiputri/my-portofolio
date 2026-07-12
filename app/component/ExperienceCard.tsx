"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const tasks = [
  "Melakukan orientasi dan pendataan lokasi BTS di salah satu daerah Sumatera Barat menggunakan Google Earth Pro.",
  "Berinisiatif bersama tim membangun website pemetaan BTS menggunakan Laravel, dengan fokus pengerjaan di bagian front-end.",
  "Mengembangkan fitur guest view untuk publik dan admin panel (CRUD) untuk pengelolaan data BTS.",
  "Mempresentasikan hasil kerja praktek kepada pembimbing lapangan di akhir masa penempatan.",
];

export default function ExperienceCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="kp-detail-panel"
        className="w-full flex items-start md:items-center justify-between gap-4 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 shrink-0 rounded-full overflow-hidden bg-white/5 border border-neutral-200 dark:border-neutral-800">
            <Image
              src="/logo-komdigi.png"
              alt="Logo Kementerian Komunikasi dan Digital"
              fill
              className="object-contain p-1.5"
            />
          </div>
          <div>
            <h4 className="font-heading font-semibold text-neutral-900 dark:text-brand-textPrimary text-base md:text-lg">
              Kerja Praktek
            </h4>
            <p className="text-sm text-neutral-500 dark:text-brand-textSecondary">
              @ Dinas Kominfotik Provinsi Sumatera Barat
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-sm text-neutral-500 dark:text-brand-textSecondary whitespace-nowrap">
            Juli — September 2024
          </span>
          <ChevronDown
            size={18}
            className={`text-neutral-500 dark:text-brand-textSecondary transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* ✅ Detail tugas — tersembunyi default, muncul saat diklik */}
      <div
        id="kp-detail-panel"
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-3 pl-1">
            {tasks.map((task, index) => (
              <li key={index} className="flex gap-2 text-sm text-neutral-600 dark:text-brand-textSecondary leading-relaxed">
                <span className="text-brand-accentOnLight dark:text-brand-accent mt-1">•</span>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}