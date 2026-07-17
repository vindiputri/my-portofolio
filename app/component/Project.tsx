// app/component/project.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ShinyText from "@/app/component/ShinyText";
import { projects } from "@/lib/projects";

const projectsData = [
    {
    id: "sulam-tenun",
    title: "Sulam Tenun",
    image: "/project-sulam-tenun.png", 
    pastelBg: "bg-emerald-50",
  },
  {
    id: "Talky-app",
    title: "Talky App",
    image: "/project-speech.png", 
    pastelBg: "bg-pink-100", 
  },
  {
    id: "bts-mapping-system",
    title: "Sistem Pemetaan BTS",
    image: "/assets/projek/btsutama.png", 
    pastelBg: "bg-indigo-100",
  },

];

export default function Projects() {
  return (
    <section id="projects" className="py-20 w-full flex flex-col items-center px-4 md:px-12 lg:px-16">
      
      {/* JUDUL UTAMA DENGAN KALIMAT PENJELAS DI BAWAHNYA */}
      <div className="w-full text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-heading font-semibold tracking-tight">
          <ShinyText text="Featured Projects" speed={3} color="#A3E635" shineColor="#F4F4F5" spread={120} />
        </h2>
        {/* Kalimat penjelas di bawah judul utama */}
        <p className="text-neutral-500 dark:text-brand-textSecondary mt-3 text-sm md:text-base">
          Beberapa proyek terpilih yang telah saya bangun dan kembangkan.
        </p>
      </div>

      {/* GRID LAYOUT: 2 Kolom dengan Ukuran Kotak aspect-[4/3] */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {projectsData.map((project) => {
          // ✅ Mencari data tahun dari file @/lib/projects berdasarkan id proyek
          const dynamicProjectData = projects.find((p) => p.id === project.id);
          const projectYear = dynamicProjectData?.year || "2026"; // Fallback ke 2026 jika tidak ditemukan

          return (
            <Link 
              key={project.id}
              href={`/Project/${project.id}`}
              className="group flex flex-col text-left focus:outline-none"
            >
              {/* KOTAK PASTEL aspect-[4/3] */}
              <div className={`w-full aspect-[4/3] ${project.pastelBg} rounded-[32px] flex items-center justify-center p-8 md:p-14 relative overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300`}>
                
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

              {/* KONTEN BAWAH: Judul Proyek dan Tahun Pembuatan */}
              <div className="mt-5 px-2 flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-brand-accentOnLight dark:group-hover:text-brand-accent transition-colors duration-200">
                  {project.title}
                </h3>
                {/* ✅ Menampilkan komponen tahun dengan gaya teks muted */}
                <span className="text-sm font-medium text-neutral-400 dark:text-brand-textSecondary tracking-wide">
                  {projectYear}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

    </section>
  );
}