// components/Footer.tsx
"use client";

import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Smartphone } from "lucide-react";
import { TranslationKey } from "@/config/translations";

interface FooterProps {
  translations: TranslationKey;
}

export default function Footer({ translations }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
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
                <img src="/logo.png" alt="Express Mobil" className="w-10 h-10 object-contain" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Express Mobil
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
            &copy; {currentYear} Express Mobil. Tüm hakları saklıdır.
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
