// app/component/project.tsx
"use client"; // Wajib ditambahkan di paling atas jika menggunakan Next.js App Router dengan state

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import ShinyText from "@/app/component/ShinyText";
import { projects } from "@/lib/projects";

// Pindahkan data styling pastel ke map statis agar lib/projects tetap bersih dari class UI
const pastelBackgrounds: Record<string, string> = {
  "toko-kayu": "bg-emerald-50",
  "talky-app": "bg-pink-100",
  "bts-mapping-system": "bg-indigo-100",
  "jabal-rahmah": "bg-amber-100",
  // Tambahkan id proyek ke-4, 5, 6 dst di sini untuk warna background-nya:
  
};

export default function Projects() {
  // 1. Definisikan state untuk mengontrol status "Lihat Lebih Banyak"
  const [isExpanded, setIsExpanded] = useState(false);
  
  // 2. Batasi jumlah proyek yang tampil di awal (misalnya 4)
  const INITIAL_COUNT = 4;
  const visibleProjects = isExpanded ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="py-20 w-full flex flex-col items-center px-4 md:px-12 lg:px-16">
      
      {/* JUDUL UTAMA */}
      <div className="w-full text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-heading font-semibold tracking-tight">
          <ShinyText text="Featured Projects" speed={3} color="#A3E635" shineColor="#F4F4F5" spread={120} />
        </h2>
        <p className="text-neutral-500 dark:text-brand-textSecondary mt-3 text-sm md:text-base">
          Beberapa proyek terpilih yang telah saya bangun dan kembangkan.
        </p>
      </div>

      {/* GRID LAYOUT */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {visibleProjects.map((project) => {
          const bgClass = pastelBackgrounds[project.id] || "bg-neutral-100 dark:bg-neutral-900";

          return (
            <Link 
              key={project.id}
              href={`/Project/${project.id}`}
              className="group flex flex-col text-left focus:outline-none animate-fadeIn"
            >
              {/* KOTAK PASTEL aspect-[4/3] */}
              <div className={`w-full aspect-[4/3] ${bgClass} rounded-[32px] flex items-center justify-center p-8 md:p-14 relative overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300`}>
                
                {/* Gambar Mockup */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_50px_rgba(0,0,0,0.4)] transform group-hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Tombol Panah Hover */}
                <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-neutral-950/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* KONTEN BAWAH */}
              <div className="mt-5 px-2 flex flex-col gap-1.5">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-brand-accentOnLight dark:group-hover:text-brand-accent transition-colors duration-200">
                  {project.title}
                </h3>
                
                {project.tagline && (
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal line-clamp-2">
                    {project.tagline}
                  </p>
                )}
                
                <span className="text-xs font-medium text-neutral-400 dark:text-brand-textSecondary tracking-wide mt-0.5">
                  {project.year}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* TOMBOL "LIHAT LEBIH BANYAK" / "TAMPILKAN SEDIKIT" */}
      {projects.length > INITIAL_COUNT && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-200 shadow-sm"
          >
            {isExpanded ? (
              <>
                Tampilkan Sedikit <ChevronUp size={16} />
              </>
            ) : (
              <>
                Lihat Lebih Banyak <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      )}

    </section>
  );
}