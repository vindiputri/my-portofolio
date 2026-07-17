// app/Project/[id]/page.tsx
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Home as HomeIcon, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import PillNav from "@/app/component/PillNav"; 

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
    openGraph: {
      title: project.title,
      description: project.overview,
      url: `${siteUrl}/Project/${project.id}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `Sampul proyek ${project.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.overview,
      images: [project.image],
    },
  };
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const projectIndex = projects.findIndex((p) => p.id === params.id);

  if (projectIndex === -1) return notFound();

  const project = projects[projectIndex];
  
  // LOGIKA NAVIGASI SEBELUMNYA & SELANJUTNYA BERPUTAR (LOOP)
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-brand-dark text-neutral-900 dark:text-slate-200 pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description: project.overview,
            creator: {
              "@type": "Person",
              name: "Dwi Vindi Putri Maulana",
            },
            dateCreated: project.year,
            image: `${siteUrl}${project.image}`,
            keywords: project.techStack.join(", "),
          }),
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Breadcrumb / Jejak Halaman */}
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

        {/* PENEMPATAN NAV MENU (PILLNAV) */}
        <div className="mb-10">
          <PillNav items={[
            { label: "Beranda", href: "/" },
            { label: "Proyek", href: "/#projects" },
            { label: "Tentang", href: "/#about" },
            { label: "Kontak", href: "/#contact" }
          ]} />
        </div>

        {/* Gambar Sampul */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-neutral-900 mb-12 border border-neutral-200 dark:border-neutral-800">
          <Image
            src={project.image}
            alt={`Sampul proyek ${project.title}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 dark:bg-neutral-900/90 text-xs font-medium border border-neutral-200/50 dark:border-neutral-800/40">
            {project.year}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-10">{project.title}</h1>

        {/* Ringkasan Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-3">
            <h2 className="text-lg font-heading font-semibold">Deskripsi Proyek</h2>
            <p className="text-neutral-600 dark:text-brand-textSecondary leading-relaxed">
              {project.overview}
            </p>
          </div>
          <div className="space-y-3 bg-neutral-100/50 dark:bg-neutral-900/20 p-5 rounded-xl border border-neutral-200/40 dark:border-neutral-800/60 h-fit">
            <div>
              <span className="text-sm font-semibold text-neutral-800 dark:text-brand-textPrimary">Peran: </span>
              <span className="text-sm text-neutral-600 dark:text-brand-textSecondary">{project.role}</span>
            </div>
            <div className="border-t border-neutral-200 dark:border-neutral-800/50 pt-2 mt-2">
              <span className="text-sm font-semibold text-neutral-800 dark:text-brand-textPrimary">Klien: </span>
              <span className="text-sm text-neutral-600 dark:text-brand-textSecondary">{project.client}</span>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
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

        {/* Fitur */}
        {project.features && project.features.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl font-heading font-semibold mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-2">
              Fitur Utama
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex gap-3 text-neutral-600 dark:text-brand-textSecondary items-start">
                  <span className="text-brand-accentOnLight dark:text-brand-accent font-bold mt-0.5">•</span>
                  <span className="text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Fungsionalitas Utama */}
        {project.keyFunctionalities && project.keyFunctionalities.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl font-heading font-semibold mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-2">
              Fungsionalitas Utama
            </h2>
            <div className="space-y-4">
              {project.keyFunctionalities.map((func, index) => {
                const [headline, ...rest] = func.split(":");
                const desc = rest.join(":");
                return (
                  <div key={index} className="bg-white dark:bg-neutral-900/30 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
                    <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-1">{headline}</h3>
                    {desc && <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{desc.trim()}</p>}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Pengembangan Mendatang */}
        {project.futureImprovements && project.futureImprovements.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl font-heading font-semibold mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-2">
              Rencana Pengembangan
            </h2>
            <ul className="space-y-3">
              {project.futureImprovements.map((improvement, index) => (
                <li key={index} className="flex gap-3 text-neutral-600 dark:text-brand-textSecondary items-start">
                  <span className="text-brand-accentOnLight dark:text-brand-accent mt-1">→</span>
                  <span className="text-sm leading-relaxed">{improvement}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Pratinjau Desain / Preview */}
        {project.designScreens && project.designScreens.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl font-heading font-semibold mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-2">
              Pratinjau Antarmuka
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.designScreens.map((screen, index) => (
                <div key={index} className="relative aspect-video rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* NAVIGASI TOMBOL SEBELUMNYA & SELANJUTNYA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
          {/* Tombol Sebelumnya (Prev Project) */}
          <Link
            href={`/Project/${prevProject.id}`}
            className="group flex items-center justify-between p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-brand-accentOnLight dark:hover:border-brand-accent bg-white dark:bg-neutral-900/10 transition-colors shadow-sm text-left"
            aria-label={`Lihat proyek sebelumnya: ${prevProject.title}`}
          >
            <div className="flex items-center gap-4">
              <ArrowLeft
                size={20}
                className="text-neutral-400 group-hover:-translate-x-1.5 group-hover:text-brand-accentOnLight dark:group-hover:text-brand-accent transition-all"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs text-neutral-500 dark:text-brand-textSecondary mb-1 uppercase tracking-wider">Proyek Sebelumnya</p>
                <p className="font-heading font-semibold text-base text-neutral-800 dark:text-white">{prevProject.title}</p>
              </div>
            </div>
          </Link>

          {/* Tombol Selanjutnya (Next Project) */}
          <Link
            href={`/Project/${nextProject.id}`}
            className="group flex items-center justify-between p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-brand-accentOnLight dark:hover:border-brand-accent bg-white dark:bg-neutral-900/10 transition-colors shadow-sm text-right"
            aria-label={`Lihat proyek berikutnya: ${nextProject.title}`}
          >
            <div className="ml-auto flex items-center justify-end gap-4 w-full">
              <div>
                <p className="text-xs text-neutral-500 dark:text-brand-textSecondary mb-1 uppercase tracking-wider">Proyek Selanjutnya</p>
                <p className="font-heading font-semibold text-base text-neutral-800 dark:text-white">{nextProject.title}</p>
              </div>
              <ArrowRight
                size={20}
                className="text-neutral-400 group-hover:translate-x-1.5 group-hover:text-brand-accentOnLight dark:group-hover:text-brand-accent transition-all"
                aria-hidden="true"
              />
            </div>
          </Link>
        </div>

      </div>
    </main>
  );
}