import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";

import { ThemeProvider } from './component/ThemeProvider'; // ✅ path pakai alias @/ dan folder "components" (plural)
import "./globals.css";

// Mengatur font sesuai rekomendasi UX
const jakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });



// Ganti dengan domain asli kamu setelah deploy
const siteUrl = "https://dwivindi.com"; 
const siteName = "Dwi Vindi Putri Maulana | Informatics Engineer Portfolio";
const siteDescription = "Portofolio profesional Dwi Vindi Putri Maulana, lulusan Teknik Informatika yang berfokus pada web & mobile software development dan manajemen data.";

export const metadata: Metadata = {
  // ✅ WAJIB: base URL biar Open Graph image & canonical URL ke-resolve dengan benar
  metadataBase: new URL(siteUrl),

  title: {
    default: siteName,
    template: "%s | Dwi Vindi Putri Maulana", // biar halaman detail project otomatis format "Judul Project | Dwi Vindi..."
  },
  description: siteDescription,
  keywords: ["Dwi Vindi", "Portofolio Informatika", "Web Developer Padang", "Next.js Portfolio", "Software Engineer Indonesia"],
  authors: [{ name: "Dwi Vindi Putri Maulana", url: siteUrl }],
  creator: "Dwi Vindi Putri Maulana",

  // ✅ Open Graph — biar preview bagus pas link di-share ke LinkedIn/WhatsApp
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    siteName: siteName,
    images: [
      {
        url: "/og-image.jpg", // taruh file ini di folder public/, ukuran ideal 1200x630px
        width: 1200,
        height: 630,
        alt: "Dwi Vindi Putri Maulana Portfolio",
      },
    ],
  },

  // ✅ Twitter Card — sama fungsinya kayak OG tapi khusus X/Twitter
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/og-image.jpg"],
  },

  // ✅ Favicon & icon
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // ✅ Kasih tau Google ini boleh diindex & di-follow (default sebenarnya sudah true, tapi eksplisit lebih aman)
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // ✅ suppressHydrationWarning mencegah warning/flash karena next-themes ubah class html di client
    <html lang="id" suppressHydrationWarning className={`${jakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-slate-50 dark:bg-black text-neutral-900 dark:text-slate-200 transition-colors duration-500">
        <ThemeProvider>
          {children}
        </ThemeProvider>

        {/* ✅ JSON-LD Structured Data — bantu Google paham ini adalah halaman personal/portfolio */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dwi Vindi Putri Maulana",
              jobTitle: "Informatics Engineer",
              url: siteUrl,
              description: siteDescription,
              alumniOf: "Institut Teknologi Padang",
              sameAs: [
                "https://linkedin.com/in/username-kamu", // ganti sesuai link asli
                "https://github.com/username-kamu",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}