"use client";

import React from "react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl?: string;
  videoUrl?: string;
  type: "image" | "video";
}

export default function Gallery() {
  const photos: GalleryItem[] = [
    {
      id: 1,
      title: "Express Mobil Kurumsal Logomuz",
      category: "Kurumsal",
      imageUrl: "https://res.cloudinary.com/dtsotmmun/image/upload/q_auto/f_auto/v1781802954/pexels-tima-miroshnichenko-6755063_uu4bnb.jpg",
      type: "image",
    },
    {
      id: 2,
      title: "Teknik Servis Canlı Tamir Aşaması", // Videonun altındaki yazı
      category: "Canlı Tamir / Video", // Üstteki küçük mavi etiket
      // İŞTE SENİN CLOUDINARY VİDEO LİNKİN BURASI:
      videoUrl: "https://res.cloudinary.com/dtsotmmun/video/upload/f_auto,q_auto/VID_20260612_002844_863_jgktb3.mp4", 
      type: "video",
    },
    {
      id: 3,
      title: "Ekran Değişimi ve Test Süreci",
      category: "Telefon Tamiri",
      imageUrl: "https://res.cloudinary.com/dtsotmmun/image/upload/q_auto/f_auto/v1781802954/pexels-tima-miroshnichenko-6755075_cfodyy.jpg", 
      type: "image",
    }
  ];

  return (
    <section id="galeri" className="py-20 relative overflow-hidden bg-slate-900">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl tracking-tight">
            Dükkandan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Kareler & Videolar</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
            Telefon ve bilgisayar tamir süreçlerimiz, teknik servisimiz ve dükkanımızdan canlı görüntüler.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
            >
              <div className="aspect-video w-full overflow-hidden bg-slate-800 relative">
                {photo.type === "video" ? (
                  <video
                    src={photo.videoUrl}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls // İstersen müşteri videoyu durdurup oynatabilsin diye kontrol paneli ekledim
                  />
                ) : (
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80 pointer-events-none" />
              </div>
              
              <div className="p-6 relative">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 bg-blue-500/10 rounded-full mb-3 border border-blue-500/20">
                  {photo.category}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
