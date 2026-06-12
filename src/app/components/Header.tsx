// components/Header.tsx
"use client";

import React, { useState } from "react";
import { Menu, X, Smartphone, Globe, Laptop } from "lucide-react";
import { TranslationKey, Language } from "@/config/translations";

interface HeaderProps {
  translations: TranslationKey;
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Header({
  translations,
  currentLanguage,
  onLanguageChange,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Bilgisayar Tamir açılır penceresi (Modal) için State
  const [isModalOpen, setIsModalOpen] = useState(false);

  const languages: { code: Language; name: string }[] = [
    { code: "tr", name: "TR" },
    { code: "en", name: "EN" },
    { code: "ar", name: "AR" },
  ];

  // Dile göre açılır pencere (modal) metinleri
  const getModalContent = (lang: Language) => {
    switch (lang) {
      case "en":
        return {
          title: "Computer Repair Details",
          content: "We offer expert hardware assembly, software optimization, system cleanup, and component upgrades. Bring your computer to our shop for a free diagnostic.",
        };
      case "ar":
        return {
          title: "تفاصيل إصلاح الحاسوب",
          content: "نقدم خدمة تجميع الأجهزة، تحسين البرامج، تنظيف النظام، وترقية المكونات. أحضر حاسوبك إلى متجرنا لفحص مجاني.",
        };
      default:
        return {
          title: "Bilgisayar Tamir Detayları",
          content: "Uzman donanım montajı, yazılım optimizasyonu, sistem temizliği ve parça yükseltme hizmetleri sunuyoruz. Ücretsiz arıza tespiti için bilgisayarınızı Express mobil servisimize getirebilirsiniz.",
        };
    }
  };

  const modalText = getModalContent(currentLanguage);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isMenuOpen
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/80 backdrop-blur-md shadow-md"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="p-2 rounded-lg group-hover:shadow-lg transition-shadow">
                <img
                  src="/logo.png"
                  alt="Express mobil"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                {translations.header.logo}
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
              >
                {translations.header.phone}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
              </a>
              
              {/* Bilgisayar Tamir Butonu (Modal'ı açar) */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
              >
                {translations.header.computer}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
              </button>

              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
              >
                {translations.header.contact}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
              </a>
            </div>

            {/* Language Selector & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              {/* Language Dropdown */}
              <div className="relative group">
                <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center gap-2">
                  <Globe className="w-5 h-5 text-gray-700" />
                  <span className="text-sm font-semibold text-gray-700">
                    {currentLanguage.toUpperCase()}
                  </span>
                </button>
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 p-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => onLanguageChange(lang.code)}
                      className={`w-full text-left px-4 py-2 rounded-md font-medium transition-colors ${
                        currentLanguage === lang.code
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
              <a
                onClick={() => setIsMenuOpen(false)}
                href="#services"
                className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white rounded-lg transition-all"
              >
                {translations.header.phone}
              </a>
              
              {/* Mobil Menü - Bilgisayar Tamir Butonu */}
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMenuOpen(false); // Modal açılınca menüyü kapat
                }}
                className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white rounded-lg transition-all"
              >
                {translations.header.computer}
              </button>

              <a
                onClick={() => setIsMenuOpen(false)}
                href="#contact"
                className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white rounded-lg transition-all"
              >
                {translations.header.contact}
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* --- BİLGİSAYAR TAMİR AÇILIR PENCERESİ (MODAL) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          {/* Arka planı beyaz ve net modal çerçevesi */}
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in zoom-in-95 duration-300 border border-gray-100">
            {/* Kapat Butonu */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>

            {/* İçerik */}
            <div className="text-center mt-2">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Laptop className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {modalText.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8 font-medium">
                {modalText.content}
              </p>
              
              {/* İletişim Butonu (İletişim Formuna Kaydırır) */}
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  window.location.href = "#contact";
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                {translations.hero.cta}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
