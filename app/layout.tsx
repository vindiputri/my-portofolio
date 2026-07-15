import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";

import { ThemeProvider } from './component/ThemeProvider';
import "./globals.css";

// ✅ Poppins untuk heading
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600"],
  variable: "--font-heading" 
});

// ✅ Poppins juga untuk body — variable beda, tapi font sama
const poppinsBody = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "500"],
  variable: "--font-body" 
});

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const siteUrl = "https://dwivindi.com"; 
const siteName = "Dwi Vindi Putri Maulana | Informatics Engineer Portfolio";
const siteDescription = "Portofolio profesional Dwi Vindi Putri Maulana, lulusan Teknik Informatika yang berfokus pada web & mobile software development dan manajemen data.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteName,
    template: "%s | Dwi Vindi Putri Maulana",
  },
  description: siteDescription,
  keywords: ["Dwi Vindi", "Portofolio Informatika", "Web Developer Padang", "Next.js Portfolio", "Software Engineer Indonesia"],
  authors: [{ name: "Dwi Vindi Putri Maulana", url: siteUrl }],
  creator: "Dwi Vindi Putri Maulana",

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    siteName: siteName,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dwi Vindi Putri Maulana Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning className={`${poppins.variable} ${poppinsBody.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#F7F8F5] dark:bg-brand-dark text-neutral-900 dark:text-slate-200 transition-colors duration-500">
        <ThemeProvider>
          {children}
        </ThemeProvider>

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
                "https://linkedin.com/in/username-kamu",
                "https://github.com/username-kamu",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}