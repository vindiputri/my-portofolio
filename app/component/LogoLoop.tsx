"use client";

import { ReactNode } from "react";

interface LogoLoopProps {
  logos: { node: ReactNode; title: string; href?: string }[];
  speed?: number;
  direction?: "left" | "right";
  gap?: number;
  logoHeight?: number;
  pauseOnHover?: boolean;
  fadeEdges?: boolean;
}

export default function LogoLoop({
  logos,
  speed = 25,
  direction = "left",
  gap = 16,
  logoHeight = 40,
  pauseOnHover = true,
  fadeEdges = true,
}: LogoLoopProps) {
  return (
    <div
      className="relative w-full overflow-hidden"
      role="list"
      aria-label="Daftar teknologi yang dikuasai"
    >
      {/* CSS Keyframes Langsung di Dalam Komponen */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left var(--speed) linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right var(--speed) linear infinite;
        }
      `}</style>

      {fadeEdges && (
        <>
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-slate-50 dark:from-brand-dark to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-slate-50 dark:from-brand-dark to-transparent pointer-events-none" />
        </>
      )}

      <div
        className={`flex w-max ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""} animate-scroll-${direction}`}
        style={{
          gap: `${gap}px`,
          // Menggunakan CSS Variable agar speed-nya tetap dinamis dari props
          ["--speed" as any]: `${speed}s`,
        }}
      >
        {/* Menggandakan logo agar loop tidak patah */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            role="listitem"
            className="flex items-center gap-2.5 shrink-0 px-5 py-3 rounded-full bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            style={{ height: logoHeight }}
            title={logo.title}
          >
            {logo.node}
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 whitespace-nowrap">
              {logo.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}