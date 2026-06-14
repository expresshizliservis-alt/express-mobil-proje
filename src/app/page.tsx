// app/page.tsx
"use client";

import DeviceTracker from "@/components/DeviceTracker";
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery"; // EKSİK OLAN SATIRI BURAYA EKLEDİM
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getTranslation, Language } from "@/config/translations";

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("tr");

  const currentTranslations = getTranslation(currentLanguage);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={currentLanguage === "ar" ? "rtl" : "ltr"}
      dir={currentLanguage === "ar" ? "rtl" : "ltr"}
    >
      {/* Header */}
      <Header
        translations={currentTranslations}
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />

      {/* Hero Section */}
      <Hero
        translations={currentTranslations}
        onContactClick={scrollToContact}
      />

      {/* Services Section */}
      <Services translations={currentTranslations} />
<div className="py-12 bg-slate-50">
  <DeviceTracker />
</div>
      {/* Galeri Bölümü */}
      <Gallery />

      {/* Contact Section */}
      <Contact translations={currentTranslations} />

      {/* Footer */}
      <Footer translations={currentTranslations} />
    </div>
  );
}
