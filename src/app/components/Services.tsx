"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Smartphone,
  Laptop,
  HardDrive,
  Wrench,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { TranslationKey } from "@/config/translations";

interface ServicesProps {
  translations: TranslationKey;
}

export default function Services({ translations }: ServicesProps) {
  // Icon mapping
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
          {translations.services.items.map((service: any, index: number) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={iconMap[service.icon]}
              index={index}
              // Eğer dil dosyasında 'details' yoksa varsayılan şu maddeler çıkacak:
              details={service.details || [
                "Ücretsiz ve hızlı arıza tespiti",
                "Orijinal ve garantili parça kullanımı",
                "Express mobil kalite güvencesi"
              ]}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link 
            href="https://wa.me/905539511770?text=Merhaba, Express mobil hizmetlerinizin tümü hakkında bilgi almak istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            Tüm Hizmetleri Görüntüle
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
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
  details?: string[];
}

function ServiceCard({
  title,
  description,
  icon,
  index,
  details = [],
}: ServiceCardProps) {
  // Kartın açık/kapalı durumunu tutan State
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="group h-full relative"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />

      {/* Card Container - Arka planı beyaz ve okunaklı */}
      <div className="relative h-full p-8 rounded-2xl bg-white backdrop-blur-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
        
        <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 shadow-md">
          {icon}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Genişleyen Detay Listesi Alanı */}
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-64 opacity-100 mb-6" : "max-h-0 opacity-0 mb-0"
          }`}
        >
          <ul className="space-y-3 pt-4 border-t border-gray-100">
            {details.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Spacer - Butonu her zaman en alta iter */}
        <div className="mt-auto pt-4">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:text-purple-700 transition-colors"
          >
            {isExpanded ? "Daha Az Göster" : "Detaylı Bilgi"}
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`} 
            />
          </button>
        </div>

      </div>
    </div>
  );
}
