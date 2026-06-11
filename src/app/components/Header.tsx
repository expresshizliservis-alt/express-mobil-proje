// components/Header.tsx
"use client";

import React, { useState } from "react";
import { Menu, X, Smartphone, Globe } from "lucide-react";
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

  const languages: { code: Language; name: string }[] = [
    { code: "tr", name: "TR" },
    { code: "en", name: "EN" },
    { code: "ar", name: "AR" },
  ];

  return (
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
              <img src="/logo.png" alt="Express Mobil" className="w-12 h-12 object-contain" />
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
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
            >
              {translations.header.computer}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
            </a>
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
              href="#services"
              className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white rounded-lg transition-all"
            >
              {translations.header.phone}
            </a>
            <a
              href="#services"
              className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white rounded-lg transition-all"
            >
              {translations.header.computer}
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white rounded-lg transition-all"
            >
              {translations.header.contact}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
