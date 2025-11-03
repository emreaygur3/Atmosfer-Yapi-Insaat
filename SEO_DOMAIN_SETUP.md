# 🚀 SEO ve Domain Kurulum Talimatları

## 🎯 HIZLI BAŞLANGIÇ - 3 Basit Adım

### 1️⃣ Vercel'den Domain Al (5 dakika)
```
1. Vercel Dashboard → Settings → Domains
2. "Buy" butonuna tıkla
3. "atmosferyapi.com" ara ve satın al ($15-20/yıl)
4. Otomatik kurulum tamamlanır ✅
```

### 2️⃣ Google'a Kaydet (10 dakika)
```
1. Google Search Console → Domain ekle
2. TXT record'u Vercel DNS'e ekle
3. Sitemap gönder: atmosferyapi.com/sitemap.xml
```

### 3️⃣ Google Maps'e Ekle (15 dakika)
```
1. Google Business Profile oluştur
2. Adres ve telefon bilgilerini gir
3. Posta ile doğrulama yap
```

**🎉 HAZIR! 1-2 hafta içinde Google aramalarında görünmeye başlarsınız.**

---

## ✅ Yapılan SEO Optimizasyonları

### 1. **Meta Tags (Tamamlandı)**
- ✅ Gelişmiş title ve description etiketleri
- ✅ Bitlis, Van, Muş, Siirt odaklı keywords
- ✅ Open Graph (Facebook/WhatsApp paylaşım) optimizasyonu
- ✅ Twitter Card meta tags
- ✅ Robots meta (index ve follow aktif)

### 2. **Structured Data - JSON-LD (Tamamlandı)**
- ✅ LocalBusiness schema
- ✅ Konum bilgileri (adres, koordinatlar)
- ✅ İletişim bilgileri
- ✅ Hizmet alanları (Bitlis, Van, Muş, Siirt)
- ✅ Hizmet katalog yapısı
- ✅ Sosyal medya profilleri

### 3. **Sitemap & Robots (Tamamlandı)**
- ✅ XML Sitemap otomatik oluşturuldu
- ✅ robots.txt yapılandırıldı
- ✅ Tüm servis sayfaları sitemap'e eklendi

### 4. **Hedef Keywords**
**Birincil:**
- iskele kiralama bitlis
- iskele satış bitlis
- güvenlikli iskele bitlis
- iskele firması bitlis

**İkincil:**
- iskele kiralama tatvan
- iskele kiralama van
- iskele kiralama muş
- iskele kiralama siirt
- flanşlı iskele
- mobil iskele
- teleskobik direk

**Uzun Kuyruklu:**
- bitlis iskele kiralama fiyatları
- tatvan iskele firması
- doğu anadolu iskele kiralama
- inşaat iskelesi bitlis

---

## 🌐 Vercel'den Domain Satın Alma ve Deployment

### Adım 1: Vercel Dashboard'a Giriş
1. **Vercel Dashboard'a gidin:**
   ```
   https://vercel.com/emres-projects-bd303733/atmosfer-yapi-insaat
   ```

2. **Settings → Domains** seçeneğine tıklayın

### Adım 2: Vercel'den Domain Satın Alma

**Önerilen Domain İsimleri:**
1. ✅ **atmosferyapi.com** (SEÇTINIZ - en iyi seçenek)
2. atmosferyapi.com
3. atmosferiskele.com
4. bitlisiskele.com

**ADIMLAR:**

1. **Domains sayfasında "Buy" butonuna tıklayın**

2. **Domain adını arayın:**
   - `atmosferyapi.com` yazın ve Search'e tıklayın
   - Müsaitse "Buy" butonu görünür

3. **Ödeme işlemi:**
   - **Fiyat:** ~$15-20/yıl (₺450-600 TL)
   - Kredi kartı bilgilerini girin
   - Auto-renew (otomatik yenileme) aktif olacak

4. **Domain otomatik yapılandırılır:**
   - ✅ DNS ayarları otomatik yapılır
   - ✅ SSL sertifikası otomatik eklenir
   - ✅ HTTPS otomatik aktif olur
   - ✅ www yönlendirmesi otomatik kurulur
   - ⚡ **Hiçbir manuel DNS ayarı gerekmez!**

5. **Aktifleşme:**
   - Ödeme sonrası 5-15 dakika içinde aktif olur
   - `atmosferyapi.com` adresiniz hazır!

### Adım 3: Domain Doğrulama (Otomatik)
- ✅ Vercel domain'i projeye otomatik bağlar
- ✅ SSL/HTTPS otomatik kurulur
- ✅ `www.atmosferyapi.com` → `atmosferyapi.com` yönlendirmesi otomatik
- ✅ Hiçbir ek işlem gerekmez

### 🎯 Vercel Domain'in Avantajları:
- ✅ **Kolay:** Tek tıkla satın alma
- ✅ **Hızlı:** 5-15 dakikada aktif
- ✅ **Otomatik:** DNS, SSL, yönlendirme kurulumu yok
- ✅ **Güvenli:** Otomatik SSL sertifikası
- ✅ **Entegre:** Vercel Dashboard'dan tek yerden yönetim

---

## 📊 Google Search Console Kurulumu

### 1. Google Search Console'a Kayıt
1. https://search.google.com/search-console/ adresine gidin
2. "Mülk ekle" → **"Domain"** seçeneğini seçin
3. Domain adınızı girin: `atmosferyapi.com`

### 2. Domain Doğrulama (Vercel Domain için KOLAY)

**Vercel'den aldığınız domain için:**

1. **Google size bir TXT kaydı verecek**, örnek:
   ```
   google-site-verification=abc123xyz789...
   ```

2. **Vercel Dashboard'a gidin:**
   - Settings → Domains
   - Domain'inize tıklayın
   - "DNS Records" sekmesine gidin

3. **TXT Record Ekleyin:**
   - Type: `TXT`
   - Name: `@` (veya boş bırakın)
   - Value: `google-site-verification=abc123xyz789...` (Google'dan aldığınız)
   - TTL: `Auto` veya `3600`
   - Save

4. **Google'da "Doğrula" butonuna tıklayın**
   - 5-10 dakika içinde doğrulama tamamlanır

### 3. Sitemap Gönderimi
```
https://atmosferyapi.com/sitemap.xml
```
Bu URL'yi Search Console'da "Sitemap" bölümüne ekleyin

### 4. Doğrulama Kodu Ekleme (Alternatif Yöntem)
`app/layout.tsx` dosyasında bu satırı bulun:
```typescript
verification: {
  google: "google-site-verification-code", // Buraya Google'dan aldığınız kodu yazın
}
```
Bu yöntemle TXT record'a gerek kalmaz (opsiyonel).

---

## 🎯 Google Business Profile (Google Maps)

### 1. İşletme Kaydı Oluşturun
1. https://business.google.com/ adresine gidin
2. "İşletme ekle" butonuna tıklayın
3. Bilgileri doldurun:
   - **İşletme Adı:** Atmosfer Yapı İnşaat
   - **Kategori:** İnşaat Şirketi / İnşaat Ekipmanları Tedarikçisi
   - **Adres:** Fatih Mah. Bitlis Yolu Cad. Zafer Petrol Yanı No:67-1, Tatvan/Bitlis
   - **Telefon:** 0533 087 19 48
   - **Website:** https://atmosferyapi.com

### 2. Doğrulama
- Google posta ile doğrulama kodu gönderecek
- Kodu girin ve doğrulayın

### 3. Profil Optimizasyonu
- ✅ Logo ve iskele fotoğrafları ekleyin
- ✅ Çalışma saatleri ekleyin (24/7)
- ✅ Hizmetleri listeleyin
- ✅ Müşteri yorumlarını teşvik edin

---

## 📱 Yerel SEO İpuçları

### 1. NAP Tutarlılığı
Her yerde aynı bilgileri kullanın:
```
Atmosfer Yapı İnşaat
Fatih Mah. Bitlis Yolu Cad. Zafer Petrol Yanı No:67-1
Tatvan / Bitlis
0533 087 19 48
```

### 2. Yerel Dizinlere Kayıt
- ✅ Google Business Profile
- ✅ Yandex Business
- ✅ Facebook Business
- ✅ Sahibinden.com (İlan ver)
- ✅ n11.com (Mağaza aç)
- ✅ BuildTurkey.com (İnşaat dizini)

### 3. İçerik Stratejisi
Blog yazıları ekleyin (opsiyonel):
- "Bitlis'te İskele Kiralama Fiyatları 2025"
- "Güvenlikli İskele Nedir? Kullanım Alanları"
- "İnşaat Projelerinde İskele Seçimi"

---

## ⚡ Hızlı Başlangıç Checklist

**Deploy Öncesi:**
- [x] SEO meta tags güncellendi
- [x] Sitemap oluşturuldu
- [x] Robots.txt yapılandırıldı
- [x] Structured data eklendi
- [x] Email ayarları (.env.local)

**Vercel'den Domain Alma (ŞİMDİ):**
1. [ ] Vercel Dashboard → Settings → Domains
2. [ ] "Buy" butonuna tıkla
3. [ ] `atmosferyapi.com` ara ve satın al (~$15-20/yıl)
4. [ ] 5-15 dakika bekle (otomatik yapılandırma)
5. [ ] Domain aktif! ✅

**Deploy Sonrası (Hemen Yapılacaklar):**
- [ ] Google Search Console kurulumu
- [ ] Google verification kodu ekle (layout.tsx)
- [ ] Sitemap'i Google'a gönder
- [ ] Google Business Profile oluştur (Google Maps için)
- [ ] Facebook Business sayfası güncelle

**İsteğe Bağlı (İlk Ay İçinde):**
- [ ] Google Analytics 4 kurulumu
- [ ] Yandex Webmaster Tools
- [ ] Social media profil linkleri güncelle

---

## 📞 Destek

**Environment Variables (Vercel'de eklenecek):**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=atmosferyapiinsaat@gmail.com
SMTP_PASSWORD=[Gmail uygulama şifresi]
CONTACT_EMAIL=atmosferyapiinsaat@gmail.com
```

**Next.js URL:** https://atmosferyapi.com
**Metabase URL:** https://atmosferyapi.com

---

## 🎉 Beklenen Sonuçlar

**1-2 Hafta İçinde:**
- Google'da site indekslenmeye başlar
- "Atmosfer Yapı İnşaat" aramasında çıkar

**1-2 Ay İçinde:**
- "iskele kiralama bitlis" gibi aramalarda görünür
- Google Maps'te listelenir

**3-6 Ay İçinde:**
- İlk sayfada yer alır
- Organik trafik artar
- Müşteri başvuruları gelmeye başlar

---

## 📈 Performans Takibi

**Kullanılacak Araçlar:**
1. **Google Search Console** - Arama performansı
2. **Google Analytics 4** - Ziyaretçi analizi (opsiyonel)
3. **Google Business Profile Insights** - Harita görüntülenmeleri
4. **Vercel Analytics** - Hız ve performans

**İzlenecek Metrikler:**
- Organik trafik
- Anahtar kelime sıralamaları
- Dönüşüm oranı (form gönderimi)
- WhatsApp tıklamaları
- Telefon aramaları
