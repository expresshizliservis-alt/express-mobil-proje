// components/Services.tsx
"use client";

import React from "react";
import {
  Smartphone,
  Laptop,
  HardDrive,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { TranslationKey } from "@/config/translations";

interface ServicesProps {
  translations: TranslationKey;
}

export default function Services({ translations }: ServicesProps) {
  // Icon mapping - dinamik olarak lucide ikonlarını seç
  const iconMap: { [key: string]: React.ReactNode } = {
    smartphone: <Smartphone className="w-8 h-8" />,
    laptop: <Laptop className="w-8 h-8" />,
    "hard-drive": <HardDrive className="w-8 h-8" />,
    wrench: <Wrench className="w-8 h-8" />,
  };

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
              ⚙️ {translations.services.title}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">
              {translations.services.subtitle}
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {translations.services.items.map((service: { title: string; description: string; icon: string }, index: number) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={iconMap[service.icon]}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
            Tüm Hizmetleri Görüntüle
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

// Service Card Component
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

function ServiceCard({
  title,
import Link from "next/link"; // Sayfanın en üstüne bu importu eklemeyi unutma
import { ArrowRight } from "lucide-react"; // İkonun importu sende zaten vardır

// Props arayüzüne (varsa) href eklemen gerekebilir:
// interface ServiceCardProps { title: string, description: string, icon: any, index: number, href?: string }

export default function ServiceCard({
  title, // title parametresi kodun içinde kullanılıyor, onu da ekledim
  description,
  icon,
  index,
  href = "#" // Tıklanınca gidilecek adres için href parametresini ekledik
}: ServiceCardProps) {
  return (
    <div
      className="group h-full relative"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Outer Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />

      {/* Card Container */}
      <div className="relative h-full p-8 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:bg-white/80 hover:border-blue-200/60 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-2xl" />

        {/* Icon Container */}
        <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 group-hover:from-blue-200 group-hover:to-purple-200 group-hover:text-blue-700 transition-all duration-300 shadow-md">
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* DÜZELTİLEN KISIM: <button> yerine <Link> kullanıyoruz */}
        <Link 
          href={href}
          className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-purple-600 transition-colors group-hover:gap-3"
        >
          Detaylı Bilgi
          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
        </Link>

        {/* Bottom Border Animation */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500" />
      </div>
    </div>
  );
}
