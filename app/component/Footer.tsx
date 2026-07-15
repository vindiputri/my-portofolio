import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


const socialLinks = [
  { icon: FaLinkedin, href: "https://linkedin.com/in/username-kamu", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/username-kamu", label: "GitHub" },
  { icon: HiOutlineMail, href: "mailto:email-kamu@gmail.com", label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Kiri: Nama & tagline singkat */}
        <div className="text-center md:text-left">
          <h3 className="font-heading font-semibold text-neutral-900 dark:text-brand-textPrimary">
            Dwi Vindi Putri Maulana
          </h3>
          {/* <p className="text-sm text-neutral-500 dark:text-brand-textSecondary mt-1">
            Front-End Developer
          </p> */}
        </div>

        {/* Kanan: Social links */}
        <div className="flex gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-slate-300 hover:bg-brand-accentOnLight dark:hover:bg-brand-accent hover:text-white dark:hover:text-neutral-900 hover:border-brand-accentOnLight dark:hover:border-brand-accent transition-colors"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Baris copyright paling bawah */}
      <div className="border-t border-neutral-200 dark:border-neutral-800 py-4">
        <p className="text-center text-xs text-neutral-400 dark:text-neutral-500">
          © {year} Dwi Vindi Putri Maulana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}