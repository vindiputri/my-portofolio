"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ShinyText from "@/app/component/ShinyText";
import ScrollReveal from "@/app/component/ScrollReveal";
import Image from "next/image";
import ExperienceCard from "@/app/component/ExperienceCard";
import LogoLoop from "@/app/component/LogoLoop";
import { 
  SiHtml5, SiCss, SiJavascript, SiReact, 
  SiNextdotjs, SiLaravel, SiTailwindcss, SiGit, SiMysql 
} from "react-icons/si";

const skillLogos = [
  { node: <SiHtml5 size={20} color="#E34F26" />, title: "HTML5" },
  { node: <SiCss size={20} color="#1572B6" />, title: "CSS3" },
  { node: <SiJavascript size={20} color="#F7DF1E" />, title: "JavaScript" },
  // { node: <SiReact size={20} color="#61DAFB" />, title: "React" },
  { node: <SiNextdotjs size={20} color="currentColor" />, title: "Next.js" },
  { node: <SiLaravel size={20} color="#FF2D20" />, title: "Laravel" },
  { node: <SiTailwindcss size={20} color="#06B6D4" />, title: "Tailwind CSS" },
  { node: <SiGit size={20} color="#F05032" />, title: "Git" },
  { node: <SiMysql size={20} color="#4479A1" />, title: "MySQL" },
];

export default function About() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const aboutText = `Saya Vindi, lulusan Teknik Informatika dari Institut Teknologi Padang. Selama kuliah, saya berkesempatan mengembangkan sistem pemetaan BTS saat Kerja Praktek di Dinas Kominfotik Sumatera Barat, serta menyelesaikan tugas akhir berupa aplikasi speech recognition untuk membantu anak SD belajar Bahasa Inggris. Saat ini saya fokus mendalami front-end development, dengan minat pada pembangunan antarmuka web yang rapi dan mudah digunakan.`;

  const isDark = mounted && resolvedTheme === "dark";
  const baseColor = isDark ? "#262629" : "#a3a3a3";
  const revealColor = isDark ? "#F4F4F5" : "#171717";

  if (!mounted) return null;

  return (
    <section id="about" className="flex w-full flex-col items-center py-20 text-center">
      <h2 className="text-2xl font-heading font-semibold tracking-tight md:text-3xl">
        <ShinyText text="Tentang Saya" speed={3} color="#A3E635" shineColor="#F4F4F5" spread={120} />
      </h2>

      <div className="mt-10 w-full flex justify-center text-center">
        <ScrollReveal
          as="p"
          containerClassName="mt-10 w-full md:-ml-8 lg:-ml-16 md:-mr-8 lg:-mr-16 !text-center flex justify-center"
          textClassName="!font-heading !text-xl md:!text-2xl !leading-loose !font-normal !text-center mx-auto max-w-4xl"
          baseColor={baseColor}
          revealColor={revealColor}
          wordAnimationEnd="+=400"
          rotationEnd="+=300"
        >
          {aboutText}
        </ScrollReveal>
      </div>

      {/* ✅ Grid Pendidikan & Pengalaman — wrapper yang tadi hilang, ditambahkan lagi */}
      <div className="mt-28 w-full border-t border-neutral-200 pt-12 dark:border-neutral-800">
        <div className="grid w-full grid-cols-1 gap-10 px-4 text-left md:grid-cols-2 md:px-12 lg:px-24">
          
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
              Pendidikan
            </h3>
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 shrink-0 rounded-full overflow-hidden bg-white/5 border border-neutral-200 dark:border-neutral-800">
                <Image
                  src="/Assets/Logo_ITP.png"
                  alt="Logo Institut Teknologi Padang"
                  fill
                  className="object-contain p-1.5"
                />
              </div>
              <div>
                <p className="font-medium text-neutral-800 dark:text-brand-textPrimary">
                  Teknik Informatika
                </p>
                <p className="text-sm text-neutral-500 dark:text-brand-textSecondary">
                  Institut Teknologi Padang 
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
              Pengalaman
            </h3>
            <ExperienceCard />
          </div>

        </div>
      </div>

      <div className="mt-20 w-full border-t border-neutral-200 pt-12 dark:border-neutral-800">
        <div className="w-full">
          <LogoLoop logos={skillLogos} speed={30} gap={16} />
        </div>
      </div>
    </section>
  );
}