# 🚀 TechFix Web Sitesi - Kurulum ve Çalıştırma Rehberi

## ⚙️ Ön Gereksinimler

Bilgisayarınızda aşağıdakiler yüklü olması gereklidir:

### 1. Node.js ve npm
- **Windows/Mac**: https://nodejs.org/en/ adresinden indir (LTS versiyonu)
- **Linux**: `sudo apt-get install nodejs npm`

Versiyonları kontrol et:
```bash
node --version  # v18.17.0 veya daha yüksek
npm --version   # 9.0.0 veya daha yüksek
```

### 2. Git (İsteğe bağlı)
```bash
git --version
```

### 3. Code Editor
Önerilen: VS Code
- İndir: https://code.visualstudio.com/

## 📦 Adım 1: Projeyi İndir/Klonla

### Seçenek A: GitHub'dan klonla
```bash
git clone https://github.com/yourusername/techfix-website.git
cd techfix-website
```

### Seçenek B: ZIP dosyasını indir
1. GitHub'da "Code" → "Download ZIP" tıkla
2. İndirilen ZIP'i çıkar
3. Terminal/CMD açıp dizine gir:
```bash
cd path/to/techfix-website
```

## 🔧 Adım 2: Bağımlılıkları Yükle

Proje dizininde terminal/CMD açarak:

```bash
npm install
```

**Bekleme süresi**: 1-5 dakika (internet hızınıza bağlı)

Kurulum bittiğinde:
```
added XXX packages in XXXs
```

Mesajı görülmelidir.

## 🌍 Adım 3: Environment Variables Hazırlığı (İsteğe Bağlı)

```bash
# .env.example'yi .env.local olarak kopyala
cp .env.example .env.local
```

Windows CMD kullanıyorsanız:
```cmd
copy .env.example .env.local
```

## 🚀 Adım 4: Development Sunucusunu Başlat

```bash
npm run dev
```

Konsol çıktısı:
```
➜  Local:   http://localhost:3000
➜  press h + enter to show help
```

## 🌐 Adım 5: Web Sitesini Aç

Tarayıcını aç ve şu adreslere git:
- http://localhost:3000 (Önerilen)
- http://127.0.0.1:3000

Sayfayı görmeli ve aşağıdaki öğeleri kontrol etmeli:
- ✅ Header (Logo, Menü, Dil seçimi)
- ✅ Hero Section (Başlık, Butonlar)
- ✅ Services (Hizmet kartları)
- ✅ Contact Form
- ✅ Footer

## ✏️ Adım 6: Düzenlemeler Yap

### Dosyaları Değiştir
VS Code'da dosyaları aç ve düzenle. Değişiklikler otomatik olarak tarayıcıda görülecektir.

Örnek: `app/page.tsx` dosyasını düzenle
```typescript
// Sayfanın bileşen sırasını değiştirebilirsin
<Hero />
<Contact />      {/* ← Sırası değişti */}
<Services />
```

### Çeviriler Düzenle
`config/translations.ts` dosyasını aç:
```typescript
export const translations = {
  tr: {
    header: {
      logo: "TechFix",  // ← Bunu değiştir
      // ...
    }
  }
}
```

### Renkler Değiştir
`tailwind.config.ts` dosyasını aç:
```typescript
colors: {
  primary: "#FF0000",   // Kırmızı
  secondary: "#00FF00", // Yeşil
}
```

## 📦 Adım 7: Production Build

Web sitesini canlıya almaya hazırlan:

```bash
npm run build
```

Build başarılıysa:
```
Route (app)                              Size
○ /(root layout)                         XXX kB
  ○ /                                    XXX kB
✓ Built in XXs
```

Built dosyaları `.next` klasöründe bulunur.

### Production'da Başlat
```bash
npm start
```

Sunucu çalışacak:
```
> next start
  ready - started server on 0.0.0.0:3000
```

## 🐛 Yaygın Sorunlar ve Çözümleri

### Problem: "npm command not found"
**Çözüm**: Node.js kuruldunu kontrol et
```bash
node --version
npm --version
```

### Problem: "Port 3000 already in use"
**Çözüm**: Port'u değiştir
```bash
npm run dev -- -p 3001
# http://localhost:3001'de açılacak
```

### Problem: "Module not found: @/config/translations"
**Çözüm**: Dosya adlarını kontrol et
```bash
# translations.ts dosyası config/ klasöründe olmalı
ls config/
```

### Problem: Stil yüklenmiyor
**Çözüm**: Tailwind'i yeniden build et
```bash
npm run build
npm run dev
```

### Problem: TypeScript hataları
**Çözüm**: Type check et
```bash
npm run type-check
```

### Problem: "next: command not found"
**Çözüm**: node_modules'ü yeniden yükle
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📊 Kod Kalitesi Kontrolleri

### TypeScript Type Check
```bash
npm run type-check
```

### ESLint Kontrolü
```bash
npm run lint
```

### Kod Formatı (Prettier)
```bash
npm run format      # Tüm dosyaları formatla
npm run format:check # Formatı kontrol et
```

## 🌐 Diğer Ülkelerin Dili Ekleme Adımları

Örnek: İspanyolca (es) ekleme

### 1. Çeviriler Dosyasını Güncelle
`config/translations.ts`'ye ekle:

```typescript
export const translations = {
  // ... var olanlar
  es: {
    header: {
      logo: "TechFix",
      phone: "Reparación de teléfonos",
      computer: "Reparación de computadoras",
      contact: "Contacto",
    },
    // Tüm diğer bölümlerini de çevir...
  },
};

export type Language = "tr" | "en" | "ar" | "es"; // ← es ekle
```

### 2. Header'da Dil Seçenekleri Güncelle
`components/Header.tsx`'de:

```typescript
const languages: { code: Language; name: string }[] = [
  { code: "tr", name: "TR" },
  { code: "en", name: "EN" },
  { code: "ar", name: "AR" },
  { code: "es", name: "ES" },  // ← Yeni dil
];
```

## 🚢 Deployment (Canlıya Alma)

### Vercel'e Deploy Et (Önerilen)

1. https://vercel.com adresine git
2. GitHub hesabıyla giriş yap
3. "New Project" tıkla
4. Repo seç ve import et
5. Deploy et

```bash
# CLI ile deploy
npm install -g vercel
vercel
```

### Netlify'ye Deploy Et

1. https://netlify.com adresine git
2. "New site from Git" tıkla
3. Repo bağla
4. Build command: `npm run build`
5. Publish directory: `.next`

### Docker ile Deploy Et

```dockerfile
# Dockerfile oluştur
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Build et
docker build -t techfix .

# Çalıştır
docker run -p 3000:3000 techfix
```

## 🔒 Güvenlik Checklist

Deployment öncesi:

- [ ] `.env.local` dosyası deploy edilmiyor mu? (.gitignore kontrol et)
- [ ] Gizli API keyler var mı? (environment variables'a taşı)
- [ ] Contact formu çalışıyor mu? (backend entegrasyonu yap)
- [ ] HTTPS kullanıyor mu?
- [ ] HTTP Security Headers ayarlanmış mı?

## 📚 Dosya Referans Hızlı Bağlantısı

| Dosya | Değişiklik | Komut |
|-------|-----------|-------|
| Renk | `tailwind.config.ts` | Düzenle ve dev sunucusu otomatik yenilenir |
| Çeviriler | `config/translations.ts` | Düzenle ve tarayıcıda yenile |
| Component sırası | `app/page.tsx` | Düzenle ve tarayıcıda yenile |
| Globals stil | `app/globals.css` | Düzenle ve otomatik yüklenir |
| Responsive | `tailwind.config.ts` breakpoints | Tailwind breakpoint sistemini öğren |

## 💡 İpuçları

1. **Hot Reload**: Dosya değiştirince tarayıcı otomatik yenilenir
2. **Konsol Hataları**: F12 → Console sekmesinde TypeScript hataları görülür
3. **Network**: F12 → Network sekmesinde sayfa yüklemesini görebilirsin
4. **Responsive Test**: F12 → Toggle device toolbar (Ctrl+Shift+M)
5. **Git Kullan**: Her önemli değişiklikten sonra commit et

## 🎯 Sonraki Adımlar

1. ✅ Projeyi başlat
2. ✅ Dosya yapısını öğren
3. ✅ Temel özelleştirmeler yap
4. ✅ İletişim formunu entegre et
5. ✅ Domain satın al
6. ✅ SSL sertifikası al
7. ✅ Canlıya al (deploy)
8. ✅ İzleme ve analitik ekle

## 📞 Yardım Al

Sorun yaşıyorsan:

1. Hata mesajını oku (console'daki hata)
2. Google'da ara
3. GitHub Issues'ında ara
4. Stack Overflow'da sor

## ✨ Gratülasyonlar! 🎉

Projeyi başarıyla kurup çalıştırdığın için tebrikler!

Şimdi özelleştirmeler yapabilir ve canlıya alabilirsin.

**İyi kodlamalar!** 🚀
