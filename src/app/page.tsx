// src/app/page.tsx
"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { getTranslation, Language } from "../config/translations";

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
    <div className={currentLanguage === "ar" ? "rtl" : "ltr"} dir={currentLanguage === "ar" ? "rtl" : "ltr"}>
      <Header translations={currentTranslations} currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange} />
      <Hero translations={currentTranslations} onContactClick={scrollToContact} />
      <Services translations={currentTranslations} />

      <Gallery />
      <Contact translations={currentTranslations} />
      <Footer translations={currentTranslations} />
    </div>
  );
}
