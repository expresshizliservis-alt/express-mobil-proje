📦 TechFix Web Sitesi - Proje Yapısı Kılavuzu
═════════════════════════════════════════════════════════

## 📂 Tam Proje Dizin Yapısı

```
techfix-website/
│
├── 📁 app/                          # Next.js App Router dizini
│   ├── page.tsx                     # Ana sayfa (root route)
│   ├── layout.tsx                   # Global layout, metadata
│   └── globals.css                  # Global stiller ve animasyonlar
│
├── 📁 components/                   # React bileşenleri
│   ├── Header.tsx                   # Navigasyon, dil seçimi, mobil menu
│   ├── Hero.tsx                     # Ana banner bölümü
│   ├── Services.tsx                 # Hizmet kartları grid'i
│   ├── Contact.tsx                  # İletişim formu ve info
│   └── Footer.tsx                   # Alt bilgi, sosyal linkler, newsletter
│
├── 📁 config/                       # Konfigürasyon dosyaları
│   └── translations.ts              # 🌐 Çeviri dosyası (TR, EN, AR)
│
├── 📁 public/                       # Statik dosyalar (images, icons, etc.)
│   └── [buraya images/favicon koyabilirsiniz]
│
├── 📄 package.json                  # Proje bağımlılıkları ve scripts
├── 📄 tsconfig.json                 # TypeScript yapılandırması
├── 📄 tailwind.config.ts            # Tailwind CSS theme yapılandırması
├── 📄 postcss.config.js             # PostCSS pluginleri (Tailwind, Autoprefixer)
├── 📄 next.config.ts                # Next.js yapılandırması
├── 📄 .env.example                  # Environment variables template
├── 📄 .gitignore                    # Git'ten hariç dosyalar
└── 📄 README.md                     # Proje dokümantasyonu

```

## 🎯 Component Akışı (Page.tsx'de Sıra)

```
1️⃣  Header
     ├── Navigasyon menüsü
     ├── Logo
     ├── Dil seçimi (TR/EN/AR)
     └── Mobil hamburger menüsü

2️⃣  Hero
     ├── Ana başlık
     ├── Alt başlık
     ├── CTA Butonları
     ├── İstatistikler
     └── Dekoratif görseller

3️⃣  Services
     ├── Section başlığı
     └── 4 adet Hizmet Kartı
         ├── İkon
         ├── Başlık
         ├── Açıklama
         └── "Detaylı Bilgi" linki

4️⃣  Contact
     ├── İletişim formu
     │   ├── Ad Soyad input
     │   ├── Email input
     │   ├── Telefon input
     │   ├── Mesaj textarea
     │   └── Gönder button
     └── İletişim bilgileri
         ├── Telefon
         ├── Email
         ├── Adres
         └── Çalışma Saatleri

5️⃣  Footer
     ├── Brand bilgileri
     ├── Sosyal media linkler
     ├── Hızlı bağlantılar
     ├── Hizmetler listesi
     ├── Newsletter formu
     └── Copyright

```

## 📝 Dosya Açıklamaları

### 🔧 Konfigürasyon Dosyaları

| Dosya | Amaç |
|-------|------|
| `package.json` | Proje bağımlılıkları, npm scripts |
| `tsconfig.json` | TypeScript derleyici ayarları |
| `tailwind.config.ts` | Tailwind CSS özelleştirmeler |
| `next.config.ts` | Next.js özelleştirmeler |
| `postcss.config.js` | CSS post-processing ayarları |

### 🎨 Tasarım ve Stil

| Dosya | İçerik |
|-------|--------|
| `globals.css` | Genel stiller, animasyonlar, özel CSS |
| `tailwind.config.ts` | Renkler, typography, breakpoints |

### 🌍 Çeviri (i18n)

| Dosya | İçerik |
|-------|--------|
| `translations.ts` | Türkçe, İngilizce, Arapça çeviriler |

### 🧩 React Bileşenleri

| Dosya | Sorumluluk |
|-------|-----------|
| `Header.tsx` | Navigasyon ve dil seçimi |
| `Hero.tsx` | Ana banner bölümü |
| `Services.tsx` | Hizmetler grid'i |
| `Contact.tsx` | İletişim formu |
| `Footer.tsx` | Alt bilgiler |

### 📄 Sayfalar

| Dosya | Amaç |
|-------|------|
| `page.tsx` | Ana sayfa - tüm component'leri çağırır |
| `layout.tsx` | Sayfa layout'u, metadata, global providers |

## 🚀 Hızlı Başlangıç

### 1. Projeyi Hazırla
```bash
# Dosyaları doğru yerlere koy
src/
  ├── app/
  │   ├── page.tsx
  │   ├── layout.tsx
  │   └── globals.css
  ├── components/
  │   ├── Header.tsx
  │   ├── Hero.tsx
  │   ├── Services.tsx
  │   ├── Contact.tsx
  │   └── Footer.tsx
  └── config/
      └── translations.ts

# Tüm config dosyaları proje root'una koy
```

### 2. Bağımlılıkları Yükle
```bash
npm install
```

### 3. Dev Sunucusunu Başlat
```bash
npm run dev
# http://localhost:3000
```

## 🎨 Özelleştirme Rehberi

### 1. Renkler Değiştirmek
```typescript
// tailwind.config.ts
colors: {
  primary: "#YENİRENK",    // Mavi yerine kendi rengi
  secondary: "#YENİRENK",  // Mor yerine kendi rengi
}
```

### 2. Çeviriler Eklemek
```typescript
// translations.ts
export const translations = {
  ar: { ... },  // Arapça var
  en: { ... },  // İngilizce var
  fr: { ... },  // Yeni dil: Fransızca
}
```

### 3. Hizmetler Ekleme
```typescript
// translations.ts
services: {
  items: [
    // Var olanlar
    {
      title: "Yeni Hizmet",
      description: "Açıklama",
      icon: "icon-name"
    }
  ]
}
```

### 4. Component Sırası Değiştirme
```typescript
// app/page.tsx - Component render sırası
<>
  <Header />
  <Hero />
  <Services />    {/* ← İstediğiniz yere taşıyın */}
  <Contact />
  <Footer />
</>
```

## 📱 Responsive Tasarım

Tailwind breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Kullanım örneği:
```jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive metin
</div>
```

## 🔐 Environment Variables

`.env.local` dosyasını `.env.example`'den kopyalayın:

```bash
cp .env.example .env.local
```

İçerik:
```
# Gelecekte API keyleri buraya gelecek
NEXT_PUBLIC_API_URL=
EMAILJS_SERVICE_ID=
```

## 🎯 Sık Görevler

### Yeni Sayfa Ekleme
```bash
# app/about/page.tsx
# Otomatik olarak /about route'unu oluşturur
```

### Yeni Component Oluşturma
```typescript
// components/NewComponent.tsx
"use client";

export default function NewComponent() {
  return <div>Yeni Component</div>;
}
```

### Stil Ekleme
```css
/* globals.css'e ekle veya component'te inline Tailwind kullan */
@layer components {
  .custom-button {
    @apply px-4 py-2 rounded-lg bg-blue-600 text-white;
  }
}
```

## 🐛 Hata Giderme

### "Styles not loading"
→ `npm install` çalıştırın ve `npm run dev`'i yeniden başlatın

### "Type errors"
→ `npm run type-check` ile kontrol edin

### "Build fails"
→ `.next` klasörünü silin ve `npm run build`'i çalıştırın

## 📚 Kaynaklar

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide React Icons](https://lucide.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## ✅ Checklist - Değişiklik Yapmadan Önce

- [ ] Dosya yapısını anladım
- [ ] Component'leri biliyor müyüm
- [ ] Çeviriler nerede olduğunu biliyorum
- [ ] Tailwind config'i nasıl değiştirebileceğimi biliyor müyüm
- [ ] Environment variables'ı biliyor müyüm

---

**💡 İpucu**: Yaptığınız her değişiklikten sonra `npm run type-check` 
çalıştırarak TypeScript hataları kontrol edin!
