# Express Mobil - Telefon ve Bilgisayar Tamir Hizmetleri Websitesi

Modern, responsive ve multidilinden (Türkçe, İngilizce, Arapça) telefon ve bilgisayar tamir hizmetleri sunmak için geliştirilmiş Next.js websitesi.

## 🚀 Özellikler

✅ **Responsive Tasarım** - Tüm cihazlarda mükemmel görünüm
✅ **Multidil Destek** - Türkçe, İngilizce ve Arapça
✅ **Modern UI** - Tailwind CSS ile tasarlanmış
✅ **Hızlı Performans** - Next.js 15 ile optimize edilmiş
✅ **İletişim Formu** - E-posta gönderme özelliği
✅ **WhatsApp Entegrasyonu** - Direkt WhatsApp mesajlaşması
✅ **Logo Özelleştirmesi** - Kendi logonuzu kullanın

## 📋 Güncellemeler

### Son Güncellemeler
- ✨ Express Mobil olarak yeniden adlandırıldı
- 📱 WhatsApp entegrasyonu eklendi (Telefon numaralarına tıkla ve direkt WhatsApp'a yönlendir)
- 📧 E-posta gönderme özellığı eklendi
- 🎨 Yeni logo desteği
- 📞 İki telefon numarası desteği (05539511770, 05019390627)
- 📧 E-posta: expresshizliservis@gmail.com

## 🛠️ Kurulum

### Gereksinimler
- Node.js 18.17.0 veya üzeri
- npm veya yarn

### Adım 1: Proje Kurulumu
```bash
npm install
```

### Adım 2: Ortam Değişkenleri
`.env.local` dosyası oluşturun:

```env
# E-posta Konfigürasyonu (Gmail)
GMAIL_USER=expresshizliservis@gmail.com
GMAIL_PASSWORD=your_app_password
RECIPIENT_EMAIL=expresshizliservis@gmail.com
```

**Gmail Uygulama Parolası Nasıl Oluşturulur:**
1. Google Hesabınıza gidin: https://myaccount.google.com
2. Güvenlik sekmesine gidin
3. "Uygulama Parolaları" seçeneğini seçin
4. İşletim Sistemi ve Tarayıcı seçin
5. Oluşturulan 16 karakterli parolayı kopyalayın
6. Bunu `GMAIL_PASSWORD` olarak `.env.local` dosyasına yapıştırın

### Adım 3: Geliştirme Sunucusu Çalıştırma
```bash
npm run dev
```

Tarayıcıda açın: http://localhost:3000

## 📱 Mobil Optimizasyon

Website tamamen mobil uyumlu olacak şekilde tasarlanmıştır:
- Dokunmatik butonlar
- Hızlı yükleme
- Mobil menü
- WhatsApp doğrudan entegrasyonu

## 🌐 Dil Seçimi

Başlıkta dil seçici bulunmaktadır:
- 🇹🇷 Türkçe (TR)
- 🇬🇧 İngilizce (EN)
- 🇸🇦 Arapça (AR)

## 📞 İletişim Bilgileri

- **Telefon 1:** 05539511770 (WhatsApp)
- **Telefon 2:** 05019390627 (WhatsApp)
- **E-posta:** expresshizliservis@gmail.com
- **Şehir:** Gaziantep, Türkiye

## 🎨 Logo Değiştirme

1. Yeni logo dosyasını `/public/logo.png` konumuna yerleştirin
2. Dosya PNG, JPG veya SVG olabilir
3. Önerilen boyut: 200x200px veya daha büyük

## 📧 E-posta Gönderimi

### Mevcut Sistem
Form gönderildiğinde:
1. Veriler sunucuya iletilir
2. Nodemailer kullanarak Gmail API'sine bağlanır
3. E-posta expresshizliservis@gmail.com adresine gönderilir

### Alternatif E-posta Hizmetleri
Aşağıdaki hizmetleri de kullanabilirsiniz:
- **SendGrid** - Ücretsiz 100 e-posta/gün
- **Mailgun** - Ücretsiz 5000 e-posta/ay
- **AWS SES** - Pay-as-you-go
- **Resend** - Modern e-posta hizmetleri

## 🚀 Production Dağıtımı

### Vercel (Önerilir)
```bash
npm install -g vercel
vercel
```

### Diğer Platformlar
- Netlify
- Heroku
- DigitalOcean
- AWS Amplify

**Not:** Ortam değişkenlerini her platformda `.env.local` dosyasına eklemeyi unutmayın.

## 📁 Proje Yapısı

```
src/
├── app/
│   ├── api/
│   │   └── send-email/
│   │       └── route.ts (E-posta gönderme API'si)
│   ├── components/
│   │   ├── Header.tsx (Başlık ve dil seçici)
│   │   ├── Hero.tsx (Ana başlık bölümü)
│   │   ├── Services.tsx (Hizmetler)
│   │   ├── Contact.tsx (İletişim formu ve WhatsApp)
│   │   └── Footer.tsx (Alt bilgiler)
│   ├── globals.css (Global stiller)
│   ├── layout.tsx (Ana layout)
│   └── page.tsx (Ana sayfa)
├── config/
│   └── translations.ts (Dil dosyaları - Türkçe, İngilizce, Arapça)
public/
├── logo.png (Express Mobil logosu)
```

## ✅ Kontrol Listesi

- [x] Logo değiştirildi
- [x] Şirket adı güncellendi (Express Mobil)
- [x] Telefon numaraları eklendi (05539511770, 05019390627)
- [x] WhatsApp entegrasyonu yapıldı
- [x] E-posta adresi güncellendi (expresshizliservis@gmail.com)
- [x] Dil değiştirme sorunu çözüldü
- [x] E-posta gönderme özelliği eklendi
- [x] Responsive tasarım
- [x] Multidil destek

## 🔧 Sorun Giderme

### E-posta gönderilmiyor
1. Gmail uygulama parolasının doğru olduğunu kontrol edin
2. `.env.local` dosyasının doğru konumda olduğunu kontrol edin
3. Gmail'de 2 adımlı doğrulamanın etkin olduğunu kontrol edin

### WhatsApp linki çalışmıyor
- Telefon numarası formatının doğru olduğunu kontrol edin
- WhatsApp'ın cihazda kurulu olduğunu kontrol edin

### Dil değişimi sorunları
- Sayfayı yenileyin (F5)
- Tarayıcı cache'ini temizleyin

## 📚 Kaynaklar

- [Next.js Dokumentasyonu](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Nodemailer](https://nodemailer.com)
- [Lucide Icons](https://lucide.dev)

## 📝 Lisans

Bu proje Express Mobil için özel olarak geliştirilmiştir.

## 👨‍💻 Geliştirici Notları

Herhangi bir soru veya özel istek için lütfen iletişime geçiniz:
- **Telefon:** 05539511770
- **WhatsApp:** [Tıkla](https://wa.me/905539511770)
- **E-posta:** expresshizliservis@gmail.com

---

**Son Güncelleme:** Haziran 2026
**Versiyon:** 2.0.0
