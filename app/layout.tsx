import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  weight: "400",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  // ===== Dasar =====
  title: "Untuk Cintaku 💐",
  description: "Sebuah kejutan kecil untukmu",
  metadataBase: new URL("https://untuk-istri.vercel.app"), // ganti dengan domain Vercel kamu nanti

  // ===== Open Graph (WhatsApp, Facebook, LinkedIn, dll) =====
  openGraph: {
    title: "Untuk Cintaku 💐",
    description: "Sebuah kejutan kecil untukmu",
    url: "https://untuk-istri.vercel.app", // ganti dengan URL deploy
    siteName: "Untuk Cintaku",
    images: [
      {
        url: "/og-image.jpg", // taruh di public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Kejutan ulang tahun",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  // ===== Twitter Card =====
  twitter: {
    card: "summary_large_image",
    title: "Untuk Cintaku 💐",
    description: "Sebuah kejutan kecil untukmu",
    images: ["/og-image.jpg"],
  },

  // ===== Tambahan =====
  icons: {
    icon: "/og-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body
        className={`${playfair.variable} ${greatVibes.variable} ${cormorant.variable} font-serif-bloom bg-[#FDF6F0] text-[#4A3F3A] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}