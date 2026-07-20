// app/Project/[id]/page.tsx
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Home as HomeIcon, ChevronRight, Map } from "lucide-react";
import type { Metadata } from "next";
import PillNav from "@/app/component/PillNav"; 
import Footer from '@/app/component/Footer';

const siteUrl = "https://dwivindi.com";

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return {};

  return {
    title: project.title,
    description: project.overview,
    alternates: {
      canonical: `${siteUrl}/Project/${project.id}`,
    },
  };
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const projectIndex = projects.findIndex((p) => p.id === params.id);

  if (projectIndex === -1) return notFound();

  const project = projects[projectIndex];
  
  // FIX: Logika dibalik karena indeks 0 adalah proyek paling baru/paling atas
  const prevProject = projects[(projectIndex + 1) % projects.length];
  const nextProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  const isMobile = project.type === "mobile";

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-brand-dark text-neutral-900 dark:text-slate-200 pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-neutral-500 dark:text-brand-textSecondary mb-8">
          <Link href="/" className="hover:text-brand-accentOnLight dark:hover:text-brand-accent">
            <HomeIcon size={16} />
          </Link>
          <ChevronRight size={14} aria-hidden="true" />
          <Link href="/#projects" className="hover:text-brand-accentOnLight dark:hover:text-brand-accent">
            Proyek
          </Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span className="text-neutral-800 dark:text-brand-textPrimary font-medium" aria-current="page">
            {project.title}
          </span>
        </nav>

        {/* NAVIGATION PILL */}
        <div className="mb-10">
          <PillNav 
          logo="/assets/projek/logo.png"
          logoAlt="Logo V - Dwi Vindi Putri Maulana"
          items={[
            { label: "Beranda", href: "/" },
            { label: "Tentang", href: "/#about" },
            { label: "Proyek", href: "/#projects" },
            { label: "Kontak", href: "/#contact" }
          ]} />
        </div>

        {/* SAMPUL UTAMA */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative w-full aspect-[21/9] sm:aspect-[3/1] max-h-[250px] md:max-h-[300px] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
            <Image
              src={project.image}
              alt={`Sampul utama untuk proyek ${project.title}`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
            />
            <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 dark:bg-neutral-900/90 text-xs font-medium border border-neutral-200/50 dark:border-neutral-800/40">
              {project.year}
            </span>
          </div>
        </div>

        {/* JUDUL PROYEK */}
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-10">{project.title}</h1>

        {/* DETAIL RINGKASAN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-3">
            <h2 className="text-lg font-heading font-semibold">Deskripsi Proyek</h2>
            <p className="text-neutral-600 dark:text-brand-textSecondary leading-relaxed text-sm md:text-base">
              {project.overview}
            </p>
          </div>
          <div className="space-y-3 bg-neutral-100/50 dark:bg-neutral-900/20 p-5 rounded-xl border border-neutral-200/40 dark:border-neutral-800/60 h-fit">
            <div>
              <span className="text-sm font-semibold text-neutral-800 dark:text-brand-textPrimary">Peran: </span>
              <span className="text-sm text-neutral-600 dark:text-brand-textSecondary">{project.role}</span>
            </div>
            {project.projectUrl && (
              <div className="border-t border-neutral-200 dark:border-neutral-800/50 pt-2 mt-2">
                <span className="text-sm font-semibold text-neutral-800 dark:text-brand-textPrimary">Tautan: </span>
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-accentOnLight dark:text-brand-accent hover:underline break-all">
                  Lihat Repositori
                </a>
              </div>
            )}
          </div>
        </div>

        {/* TECH STACK */}
        <div className="mb-16">
          <h2 className="text-lg font-heading font-semibold mb-4">Teknologi yang Digunakan</h2>
          <ul className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="text-sm px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/50 font-medium"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* FITUR UTAMA */}
        {project.features && project.features.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl font-heading font-semibold mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-2">
              Fitur Utama
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex gap-3 text-neutral-600 dark:text-brand-textSecondary items-start">
                  <span className="text-brand-accentOnLight dark:text-brand-accent font-bold mt-0.5">•</span>
                  <span className="text-sm md:text-base leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* PRATINJAU ANTARMUKA */}
        {project.designScreens && project.designScreens.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl font-heading font-semibold mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-2">
              Pratinjau Antarmuka
            </h2>
            
            {isMobile ? (
              <div className="flex flex-col gap-12 max-w-3xl mx-auto">
                {project.designScreens.map((screen, index) => (
                  <div key={index} className="w-full flex flex-col gap-3">
                    <div className="w-full p-6 sm:p-10 md:p-14 bg-neutral-100 dark:bg-neutral-900/60 rounded-3xl border border-neutral-200 dark:border-neutral-800/80 shadow-inner flex justify-center items-center">
                      <div className="relative w-full aspect-[16/9] max-w-2xl rounded-xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-950">
                        <Image
                          src={screen.src}
                          alt={screen.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 650px"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                    <p className="text-xs text-center text-neutral-400 dark:text-neutral-500 italic">
                      {screen.alt}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-12 max-w-4xl mx-auto">
                {project.designScreens.map((screen, index) => (
                  <div key={index} className="w-full flex flex-col gap-3">
                    <div className="w-full p-4 sm:p-8 md:p-12 bg-neutral-100 dark:bg-neutral-900/60 rounded-3xl border border-neutral-200 dark:border-neutral-800/80 shadow-inner">
                      <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
                        <img
                          src={screen.src}
                          alt={screen.alt}
                          className="w-full h-auto block object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-center text-neutral-400 dark:text-neutral-500 italic">
                      {screen.alt}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* PEMETAAN SISTEM */}
        {project.mappingImage && (
          <section className="mb-16">
            <h2 className="text-xl font-heading font-semibold mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-2 flex items-center gap-2">
              <Map size={20} className="text-brand-accentOnLight dark:text-brand-accent" />
              Pemetaan & Struktur Informasi
            </h2>
            <div className="w-full flex flex-col gap-3 max-w-4xl mx-auto">
              <div className="w-full p-4 sm:p-8 bg-neutral-100 dark:bg-neutral-900/40 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
                <div className="w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-2 sm:p-4">
                  <img
                    src={project.mappingImage.src}
                    alt={project.mappingImage.alt || "Pemetaan Sistem"}
                    className="w-full h-auto block object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-xs text-center text-neutral-400 dark:text-neutral-500 italic">
                {project.mappingImage.alt || "Diagram Pemetaan Alur Struktur Aplikasi"}
              </p>
            </div>
          </section>
        )}

        {/* TOMBOL NAVIGASI PROYEK LAIN (SUDAH DIPERBAIKI) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
          <Link
            href={`/Project/${prevProject.id}`}
            className="group flex items-center justify-between p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-brand-accentOnLight dark:hover:border-brand-accent bg-white dark:bg-neutral-900/10 transition-colors shadow-sm"
          >
            <div className="flex items-center gap-4">
              <ArrowLeft size={20} className="text-neutral-400 group-hover:-translate-x-1.5 transition-all" />
              <div>
                <p className="text-xs text-neutral-500 mb-1 uppercase tracking-wider">Proyek Sebelumnya</p>
                <p className="font-heading font-semibold text-base text-neutral-800 dark:text-white">{prevProject.title}</p>
              </div>
            </div>
          </Link>

          <Link
            href={`/Project/${nextProject.id}`}
            className="group flex items-center justify-between p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-brand-accentOnLight dark:hover:border-brand-accent bg-white dark:bg-neutral-900/10 transition-colors shadow-sm"
          >
            <div className="ml-auto flex items-center justify-end gap-4 w-full text-right">
              <div>
                <p className="text-xs text-neutral-500 mb-1 uppercase tracking-wider">Proyek Selanjutnya</p>
                <p className="font-heading font-semibold text-base text-neutral-800 dark:text-white">{nextProject.title}</p>
              </div>
              <ArrowRight size={20} className="text-neutral-400 group-hover:translate-x-1.5 transition-all" />
            </div>
          </Link>
        </div>

      </div>
      <Footer />
    </main>
  );
}