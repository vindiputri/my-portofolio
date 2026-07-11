import ShinyText from "@/app/component/ShinyText";
import ScrollReveal from "@/app/component/ScrollReveal";

export default function About() {
  // Menyimpan teks panjang dalam variabel agar rapi dan tidak merusak selector animasi kata
  const aboutText = `Saya percaya proses belajar tidak pernah benar-benar selesai. Dari memetakan BTS di Sumatera Barat hingga membangun aplikasi pengucapan Bahasa Inggris untuk anak SD, setiap project mengajarkan saya sesuatu yang baru — dan saya senang menghadapi tantangan itu satu per satu. Perjalanan akademik saya di bidang teknologi membuka mata saya bagaimana kode bisa menjadi solusi nyata untuk masalah di sekitar kita. Selama masa kuliah, saya aktif mengeksplorasi software engineering dan analisis data, yang kemudian membawa saya ke kesempatan Kerja Praktek (KP). Di sana, saya belajar berkolaborasi dalam tim profesional, memahami alur industri yang dinamis, serta menerapkan teori kelas ke dalam sistem yang digunakan oleh pengguna nyata. Tidak hanya fokus pada hard skill, saya juga aktif di beberapa organisasi mahasiswa. Melalui organisasi, saya mengasah kemampuan komunikasi, manajemen waktu, dan kepemimpinan yang sangat membantu saya dalam mengelola project-project kompleks saat ini.`;

  return (
    <section id="about" className="min-h-screen pt-24 pb-32">
      <h2 className="text-xl md:text-2xl font-heading font-semibold tracking-tight">
        <ShinyText
          text="About Me"
          speed={3}
          color="#A3E635"
          shineColor="#F4F4F5"
          spread={120} 
        />
      </h2>

      {/* Gunakan variabel aboutText di dalam sini */}
      <ScrollReveal
        as="p"
        containerClassName="mt-6 max-w-4xl"
        textClassName="!text-base md:!text-lg !leading-relaxed !font-normal text-neutral-700 dark:text-brand-textSecondary text-justify"
        baseOpacity={0.15} // Diturunkan sedikit agar kontras teks yang belum aktif lebih terlihat
        enableBlur={true}
        blurStrength={2}
        wordAnimationEnd="+=800" // Ditambah nilainya karena teks lebih panjang agar scroll berasa pas
        rotationEnd="+=100"
      >
        {aboutText}
      </ScrollReveal>

      {/* Tambahan space di bawah agar halaman bisa di-scroll dan memicu animasi */}
      <div className="mt-20 border-t border-neutral-200 dark:border-neutral-800 pt-10">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">Pengalaman & Organisasi</h3>
        {/* Konten tambahan kamu di sini */}
      </div>
    </section>
  );
}