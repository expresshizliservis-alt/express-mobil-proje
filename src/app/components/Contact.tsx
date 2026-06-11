// components/Contact.tsx
"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { TranslationKey } from "@/config/translations";

interface ContactProps {
  translations: TranslationKey;
}

export default function Contact({ translations }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send email using EmailJS or similar service
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recipientEmail: "expresshizliservis@gmail.com",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        }, 3000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getWhatsAppLink = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, "");
    return `https://wa.me/90${cleanPhone.slice(-10)}`;
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Telefon 1",
      value: translations.contact.info.phone,
      href: getWhatsAppLink(translations.contact.info.phone),
      isWhatsApp: true,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Telefon 2",
      value: translations.contact.info.phone2,
      href: getWhatsAppLink(translations.contact.info.phone2),
      isWhatsApp: true,
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "E-posta",
      value: translations.contact.info.email,
      href: `mailto:${translations.contact.info.email}`,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Adres",
      value: translations.contact.info.address,
      href: "#",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Çalışma Saatleri",
      value: translations.contact.info.hours,
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold border border-blue-400/30">
              📞 {translations.contact.title}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            {translations.contact.subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.isWhatsApp ? "_blank" : undefined}
                  rel={info.isWhatsApp ? "noopener noreferrer" : undefined}
                  className="group p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                    {info.icon}
                  </div>
                  <p className="text-white/60 text-sm font-medium mb-1">
                    {info.label}
                  </p>
                  <p className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors">
                    {info.value}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  {translations.contact.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-blue-400/50 focus:bg-white/20 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  {translations.contact.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-blue-400/50 focus:bg-white/20 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  {translations.contact.form.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-blue-400/50 focus:bg-white/20 transition-all duration-300"
                  placeholder="+90 312 123 4567"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  {translations.contact.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-blue-400/50 focus:bg-white/20 transition-all duration-300 resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitted || isLoading}
                className="w-full group relative px-6 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 disabled:opacity-75"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform duration-300 group-hover:scale-105" />
                <div className="relative flex items-center justify-center gap-2">
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      {translations.contact.form.success}
                    </>
                  ) : (
                    <>
                      {isLoading ? "Gönderiliyor..." : translations.contact.form.submit}
                      {!isLoading && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </>
                  )}
                </div>
              </button>
            </form>

            {/* Privacy Notice */}
            <p className="text-white/50 text-xs text-center">
              Verileriniz güvenli bir şekilde saklanır. Spam göndermeyiz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
