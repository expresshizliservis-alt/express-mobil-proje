// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechFix - Telefon ve Bilgisayar Tamir | Gaziantep",
  description:
    "Profesyonel telefon ve bilgisayar tamir hizmetleri. Hızlı, güvenilir ve uygun fiyatlı çözümler.",
  keywords: [
    "telefon tamir",
    "bilgisayar tamir",
    "teknik destek",
    "Gaziantep",
    "tamir hizmeti",
  ],
  authors: [{ name: "TechFix" }],
  creator: "TechFix",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://techfix.com",
    siteName: "TechFix",
    title: "TechFix - Telefon ve Bilgisayar Tamir",
    description:
      "Profesyonel teknoloji tamir hizmetleri Gaziantep'te",
    images: [
      {
        url: "https://techfix.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechFix - Teknoloji Tamir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechFix - Telefon ve Bilgisayar Tamir",
    description:
      "Profesyonel teknoloji tamir hizmetleri Gaziantep'te",
    images: ["https://techfix.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        {/* Additional meta tags */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        {/* Preconnect to optimize performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
