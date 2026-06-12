// components/Footer.tsx
"use client";

import React from "react";
import { Facebook, Twitter, Instagram, Smartphone } from "lucide-react";
import { TranslationKey } from "@/config/translations";

// TikTok SVG İkonu
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

interface FooterProps {
  translations: TranslationKey;
}

export default function Footer({ translations }: FooterProps) {
  const currentYear = new Date().getFullYear();

  // SENİN SOSYAL MEDYA LİNKLERİN BURADA
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/share/1GbEtasAsc/", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/Expressmobil___", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/ekspresteknoservis", label: "Instagram" },
    { icon: <TikTokIcon className="w-5 h-5" />, href: "https://www.tiktok.com/@express.mobil5", label: "TikTok" },
  ];

  const quickLinks = [
    { label: "Ana Sayfa", href: "#" },
    { label: "Hizmetler", href: "#services" },
    { label: "Hakkında", href: "#" },
    { label: "İletişim", href: "#contact" },
    { label: "Gizlilik Politikası", href: "#" },
    { label: "Şartlar", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16 border-b border-white/10">
          {/* Brand Section */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg">
                <img src="/logo.png" alt="Express mobil" className="w-10 h-10 object-contain" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Express mobil
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {translations.footer.about}
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-white/10 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 text-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">
              {translations.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Hizmetler</h3>
            <ul className="space-y-2">
              {[
                "Telefon Tamir",
                "Bilgisayar Bakımı",
                "Veri Kurtarma",
                "Yazılım Kurulumu",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Bize Abone Olun</h3>
            <p className="text-gray-400 text-sm">
              En son haberler ve teklifler için abone olun.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 text-sm"
              />
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all duration-300">
                Gönder
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Express mobil. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              Gizlilik
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              Şartlar
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              Çerezler
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
