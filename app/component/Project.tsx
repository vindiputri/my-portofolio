import ShinyText from "@/app/component/ShinyText";

export default function Project() {
  return (
    <section id="projects" className="flex w-full flex-col items-start py-20 text-left">
      <h2 className="text-2xl font-heading font-semibold tracking-tight md:text-3xl">
        <ShinyText text="Projects" speed={3} color="#A3E635" shineColor="#F4F4F5" spread={120} />
      </h2>

      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-brand-textSecondary md:text-base">
        Beberapa karya yang saya bangun dengan fokus pada pengalaman pengguna, performa, dan desain yang bersih.
      </p>
    </section>
  );
}