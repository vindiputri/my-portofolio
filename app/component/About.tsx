import ShinyText from "@/app/component/ShinyText";
import ScrollReveal from "@/app/component/ScrollReveal";
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
  { node: <SiReact size={20} color="#61DAFB" />, title: "React" },
  { node: <SiNextdotjs size={20} color="currentColor" />, title: "Next.js" },
  { node: <SiLaravel size={20} color="#FF2D20" />, title: "Laravel" },
  { node: <SiTailwindcss size={20} color="#06B6D4" />, title: "Tailwind CSS" },
  { node: <SiGit size={20} color="#F05032" />, title: "Git" },
  { node: <SiMysql size={20} color="#4479A1" />, title: "MySQL" },
];

export default function About() {
  const aboutText = `Lulusan Teknik Informatika dengan fokus pada front-end development. Pengalaman meliputi Kerja Praktek membangun sistem pemetaan BTS, serta tugas akhir aplikasi speech recognition untuk anak SD. Aktif berorganisasi, kini fokus membangun antarmuka web yang rapi dan fungsional.`;

  return (
    <section id="about" className="flex w-full flex-col items-center py-20 text-center">
      <h2 className="text-2xl font-heading font-semibold tracking-tight md:text-3xl">
        <ShinyText text="About Me" speed={3} color="#A3E635" shineColor="#F4F4F5" spread={120} />
      </h2>

      <div className="mt-10 w-full">
        <ScrollReveal
          as="p"
          containerClassName="w-full"
          textClassName="!text-xl md:!text-2xl !leading-loose !font-normal text-neutral-700 dark:text-brand-textSecondary text-center"
          baseOpacity={0.15}
          enableBlur={true}
          blurStrength={2}
          wordAnimationEnd="+=800"
          rotationEnd="+=100"
        >
          {aboutText}
        </ScrollReveal>
      </div>

      {/* 3. PENDIDIKAN & PENGALAMAN: Garis pembatas dibuat full width, namun grid di dalamnya menggunakan px-4/px-8 agar teks tidak terlalu menempel ke layar saat di-resize */}
      <div className="mt-28 w-full border-t border-neutral-200 pt-12 dark:border-neutral-800">
        <div className="grid w-full grid-cols-1 gap-10 px-4 text-left md:grid-cols-2 md:px-12 lg:px-24">
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
              Pendidikan
            </h3>
            <p className="text-neutral-700 dark:text-brand-textSecondary">
              Teknik Informatika, Institut Teknologi Padang — IPK 3.75
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
              Pengalaman
            </h3>
            <ExperienceCard />
          </div>
        </div>
      </div>

      {/* 4. SECTION SKILLS (LOGOLOOP): Benar-benar full horizontal dari ujung kiri ke ujung kanan layar */}
      <div className="mt-20 w-full border-t border-neutral-200 pt-12 dark:border-neutral-800">
        <div className="w-full">
          <LogoLoop logos={skillLogos} speed={30} gap={16} />
        </div>
      </div>

    </section>
  );
}