"use client"; // Wajib karena kita menggunakan interaksi hover (CSS transition)

interface LongWebPreviewProps {
  src: string;
  alt: string;
}

export default function LongWebPreview({ src, alt }: LongWebPreviewProps) {
  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-lg group bg-neutral-50 dark:bg-neutral-900">
        <div className="absolute inset-x-0 top-0 w-full transition-transform duration-[5000ms] ease-in-out transform translate-y-0 group-hover:-translate-y-[calc(100%-300px)] group-hover:md:-translate-y-[calc(100%-500px)]">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto object-top block"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/5 to-transparent pointer-events-none dark:from-black/20" />
      </div>
      <p className="text-center text-xs text-neutral-400 mt-2 italic">
        Arahkan kursor (hover) untuk melihat seluruh halaman
      </p>
    </div>
  );
}