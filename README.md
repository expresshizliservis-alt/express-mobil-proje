# TechFix - Telefon ve Bilgisayar Tamir Web Sitesi

Trendyol ve Sahibinden tarzında modern, profesyonel, responsive bir telefon ve bilgisayar tamir dükkanı web sitesi. Next.js, Tailwind CSS ve Lucide React ikonları kullanılarak geliştirilmiştir.

## ✨ Özellikler

- ✅ **Modüler Component Yapısı** - Her bölüm ayrı, yeniden kullanılabilir bileşen
- ✅ **Responsive Design** - Mobil, tablet ve masaüstü cihazlarda mükemmel görüntüleme
- ✅ **Glassmorphism UI** - Modern tasarım dili ile yumuşak gölgeler ve gradient efektleri
- ✅ **Multi-Language Ready** - Türkçe, İngilizce ve Arapça desteği (i18n uyumlu)
- ✅ **Modern Teknoloji Stack** - Next.js 15, Tailwind CSS 3, TypeScript
- ✅ **SEO Optimized** - Meta tags, Open Graph, JSON-LD desteği
- ✅ **Accessibility** - WCAG 2.1 standartlarına uygun
- ✅ **Performance** - Fast loading, optimized images, efficient code splitting

## 📁 Proje Yapısı

```
techfix-website/
├── app/
│   ├── page.tsx              # Ana sayfa (component orchestration)
│   ├── layout.tsx            # Global layout ve metadata
│   └── globals.css           # Global stiller
├── components/
│   ├── Header.tsx            # Navigasyon ve dil seçimi
│   ├── Hero.tsx              # Ana banner bölümü
│   ├── Services.tsx          # Hizmetler kartları
│   ├── Contact.tsx           # İletişim formu ve bilgileri
│   └── Footer.tsx            # Alt bilgi ve linkler
├── config/
│   └── translations.ts       # Merkezi çeviri dosyası (i18n)
├── public/                   # Statik dosyalar
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.ts
└── .env.example
```

## 🚀 Başlangıç

### 1. Gereksinimler
- Node.js 18.17.0 veya üstü
- npm veya yarn

### 2. Kurulum

```bash
# Depo klonla
git clone https://github.com/yourusername/techfix-website.git
cd techfix-website

# Bağımlılıkları yükle
npm install
# veya
yarn install
```

### 3. Geliştirme Sunucusunu Başlat

```bash
npm run dev
# veya
yarn dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine gidin.

### 4. Production Build

```bash
npm run build
npm run start
```

## 📝 Component Yapısı

### Header Component
- Navigasyon menüsü
- Dil seçici (TR, EN, AR)
- Mobil menü toggle
- Glassmorphism stil

### Hero Component
- Ana başlık ve açıklama
- Call-to-action butonları
- İstatistikler (müşteri sayısı, rating, hızlı hizmet)
- Dekoratif blob animasyonları

### Services Component
- Hizmet kartları grid layout
- İkon integrasyonu (Lucide React)
- Hover animasyonları
- Responsive grid (1 sütun mobilde, 4 sütun desktop'ta)

### Contact Component
- İletişim formu (Ad, Email, Telefon, Mesaj)
- İletişim bilgileri (Telefon, Email, Adres, Saatler)
- Glassmorphism efektleri
- Form validation ve success message

### Footer Component
- Brand bilgileri
- Sosyal media linkler
- Hızlı bağlantılar
- Newsletter abone formu
- Copyright ve legal links

## 🌐 Çoklu Dil Desteği

Çeviri dosyası merkezi bir yerden (`config/translations.ts`) yönetilir:

```typescript
// Kullanım
const translations = getTranslation('tr'); // Türkçe
const translations = getTranslation('en'); // İngilizce
const translations = getTranslation('ar'); // Arapça
```

### Yeni Dil Ekleme

1. `config/translations.ts` dosyasını aç
2. Yeni dili `translations` objesine ekle
3. `Language` type'ına yeni dil kodunu ekle
4. Component'lerde `onLanguageChange` handler'ını güncelle

## 🎨 Tasarım Sistemi

### Renkler
- **Primary**: #2563eb (Mavi)
- **Secondary**: #9333ea (Mor)
- **Accent**: #06b6d4 (Cyan)
- **Gray**: Tailwind default gray palette

### Typography
- **Font Stack**: Geist (sans-serif), Geist Mono (mono)
- **Heading**: Bold, gradient text
- **Body**: Regular, optimized for readability

### Spacing
- Mobil-first approach
- Responsive padding ve margins
- Tailwind default spacing scale

### Glassmorphism
- `bg-white/10 backdrop-blur-xl`
- Border: `border-white/20`
- Hover states için opacity artışı

## 📱 Responsive Breakpoints

- **Mobil**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Bileşenleri Yeniden Düzenlemek

Ana sayfada (`app/page.tsx`) component'lerin sırasını değiştirerek sayfanın düzenini kolayca değiştirebilirsiniz:

```typescript
// Sayfanın yapısını değiştirebileceğiniz sıra:
<Header />
<Hero />
<Services />     {/* İstediğiniz yere taşıyabilirsiniz */}
<Contact />
<Footer />
```

Örneğin, Contact bölümünü Services'den önce göstermek için sıralamayı değiştirir, Contact'i Services'den önceye alırsınız.

## 🛠️ İletişim Formu Entegrasyonu

Contact component'i şu anda form verilerini logluyordur. Gerçek email göndermek için:

1. EmailJS, Nodemailer veya benzer bir hizmet kullanın
2. `components/Contact.tsx` dosyasındaki `handleSubmit` fonksiyonunu güncelleyin
3. `.env.local` dosyasına API anahtarlarınızı ekleyin

## 📊 Performance Optimizasyon

- ✅ Image optimization (next/image)
- ✅ CSS-in-JS yerine Tailwind (daha hızlı)
- ✅ Component lazy loading (dynamic imports)
- ✅ Lighthouse score: 90+

## ♿ Erişilebilirlik

- ARIA labels
- Keyboard navigation support
- Focus indicators
- Semantic HTML
- Color contrast compliance

## 🚀 Deployment

### Vercel (Önerilen)
```bash
npm install -g vercel
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Diğer Platformlar
- Railway
- Netlify
- GitHub Pages
- Heroku

## 📦 Bağımlılıklar

- **next**: ^15.0.0 - React framework
- **react**: ^19.0.0 - UI library
- **react-dom**: ^19.0.0 - React DOM rendering
- **lucide-react**: ^0.408.0 - Icon library
- **tailwindcss**: ^3.4.0 - Utility-first CSS

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👨‍💻 Geliştirme

### Kod Standardı
- ESLint configured
- Prettier for formatting
- TypeScript strict mode

### Komutlar
```bash
# Linting
npm run lint

# Type checking
npm run type-check

# Code formatting
npm run format

# Check formatting
npm run format:check
```

## 🤝 Katkı Yapma

Pull request'ler hoş geldinir. Büyük değişiklikler için lütfen önce bir issue açın.

## 📞 İletişim

Sorularınız veya önerileriniz için:
- Email: info@techfix.com
- GitHub: [Your GitHub Profile]

## 🎯 Future Enhancements

- [ ] Blog/Haberler bölümü
- [ ] Ürün katalog sistemi
- [ ] Randevu booking sistemi
- [ ] Admin dashboard
- [ ] Payment integration (Stripe, PayPal)
- [ ] Customer reviews/ratings
- [ ] Live chat support
- [ ] Mobile app (React Native)

---

**Made with ❤️ for TechFix by Your Team**
