// components/Hero.tsx
"use client";

import React from "react";
import { ArrowRight, Zap } from "lucide-react";
import { TranslationKey } from "@/config/translations";

interface HeroProps {
  translations: TranslationKey;
  onContactClick: () => void;
}

export default function Hero({ translations, onContactClick }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-blue-200/50 shadow-sm hover:shadow-md transition-shadow">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {translations.hero.badge}
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
                  {translations.hero.title}
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                {translations.hero.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onContactClick}
                className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-2">
                  {translations.hero.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              <button className="group px-8 py-4 rounded-xl font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                Hizmetleri Keşfet
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200/50">
              <div>
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  500+
                </p>
                <p className="text-sm text-gray-600">Mutlu Müşteri</p>
              </div>
              <div>
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  4.9★
                </p>
                <p className="text-sm text-gray-600">Ortalama Rating</p>
              </div>
              <div>
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  24h
                </p>
                <p className="text-sm text-gray-600">Hızlı Hizmet</p>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration Box */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md h-96">
              {/* Glassmorphism Card */}
              <div className="absolute inset-0 bg-white/30 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl" />

              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 mx-auto flex items-center justify-center shadow-lg">
                    <span className="text-5xl">📱</span>
                  </div>
                  <h3 className="text-xl font-bold">Profesyonel Tamir</h3>
                  <p className="text-sm text-white/80">
                    Uzman teknisyenlerimiz her sorunu çözer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Keyframes Animation */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
