import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: "Atmosfer Yapı İnşaat - İskele Kiralama ve Satış | Doğu Anadolu, Türkiye Geneli",
  description:
    "Türkiye geneli ve Doğu Anadolu bölgesinde profesyonel iskele kiralama, satış ve imalat. Bitlis, Van, Muş, Siirt, Diyarbakır, Elazığ, Batman, Erzurum. Güvenlikli iskele, flanşlı iskele, mobil iskele, teleskobik direk. 7/24 hizmet, hızlı teslimat. ☎️ 0533 087 19 48",
  keywords: [
    // Doğu Anadolu İlleri
    "iskele kiralama bitlis",
    "iskele kiralama tatvan",
    "iskele kiralama van",
    "iskele kiralama muş",
    "iskele kiralama siirt",
    "iskele kiralama diyarbakır",
    "iskele kiralama elazığ",
    "iskele kiralama batman",
    "iskele kiralama erzurum",
    "iskele kiralama ağrı",
    "iskele kiralama bingöl",
    "iskele kiralama hakkari",
    "iskele kiralama mardin",
    "iskele kiralama şırnak",
    // Genel Arama Terimleri
    "iskele kiralama türkiye",
    "iskele kiralama doğu anadolu",
    "güvenlikli iskele kiralama",
    "flanşlı iskele satış",
    "mobil iskele fiyatları",
    "teleskobik direk kiralama",
    "iskele kalıp aksesuarları",
    "inşaat iskelesi",
    "scaffolding turkey",
    "iskele sistemi",
    "kalıp sistemleri",
    "iskele firması",
    "iskele malzemeleri",
    "inşaat ekipmanları",
    "çatı iskelesi",
    "cephe iskelesi",
    // Bölgesel + Ürün Kombinasyonları
    "güvenlikli iskele bitlis",
    "flanşlı iskele van",
    "mobil iskele muş",
    "teleskobik direk siirt",
    "iskele satış bitlis",
    "iskele satış tatvan",
    "iskele imalat doğu anadolu"
  ],
  authors: [{ name: "Atmosfer Yapı İnşaat" }],
  generator: "Next.js",
  applicationName: "Atmosfer Yapı İnşaat",
  referrer: "origin-when-cross-origin",
  creator: "Atmosfer Yapı İnşaat",
  publisher: "Atmosfer Yapı İnşaat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://atmosferyapi.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/design-mode/LOGO.png", sizes: "32x32", type: "image/png" },
      { url: "/images/design-mode/LOGO.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/images/design-mode/LOGO.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Atmosfer Yapı İnşaat - İskele Kiralama ve Satış | Doğu Anadolu & Türkiye",
    description:
      "Türkiye geneli ve Doğu Anadolu bölgesinde profesyonel iskele kiralama, satış ve imalat hizmetleri. Bitlis, Van, Muş, Siirt, Diyarbakır, Elazığ, Batman, Erzurum ve tüm iller. Güvenilir, hızlı teslimat, 7/24 hizmet.",
    url: "https://atmosferyapi.com",
    siteName: "Atmosfer Yapı İnşaat",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/design-mode/LOGO.png",
        width: 1200,
        height: 630,
        alt: "Atmosfer Yapı İnşaat Logo",
      },
      {
        url: "/main-page.jpg",
        width: 1200,
        height: 630,
        alt: "Atmosfer Yapı İnşaat - İskele Sistemleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atmosfer Yapı İnşaat - İskele Kiralama | Doğu Anadolu & Türkiye",
    description: "Türkiye geneli ve Doğu Anadolu'da profesyonel iskele kiralama, satış ve imalat hizmetleri. 7/24 destek, hızlı teslimat.",
    images: ["/main-page.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Google Search Console'dan alınacak
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Atmosfer Yapı İnşaat",
    image: "https://atmosferyapi.com/main-page.jpg",
    "@id": "https://atmosferyapi.com",
    url: "https://atmosferyapi.com",
    telephone: "+905330871948",
    email: "atmosferyapiinsaat@gmail.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fatih Mah. Bitlis Yolu Cad. Zafer Petrol Yanı No:67-1",
      addressLocality: "Tatvan",
      addressRegion: "Bitlis",
      postalCode: "13200",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.5182,
      longitude: 42.2526,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://www.facebook.com/orhan.icen",
      "https://www.instagram.com/icen.orhan/",
      "https://wa.me/905330871948",
    ],
    description:
      "Türkiye geneli ve Doğu Anadolu bölgesinde iskele kiralama, satış ve imalat hizmetleri. Bitlis, Van, Muş, Siirt, Diyarbakır, Elazığ, Batman, Erzurum. Güvenlikli iskele, flanşlı iskele, mobil iskele sistemleri. 7/24 hizmet, hızlı teslimat.",
    areaServed: [
      {
        "@type": "City",
        name: "Bitlis",
      },
      {
        "@type": "City",
        name: "Van",
      },
      {
        "@type": "City",
        name: "Muş",
      },
      {
        "@type": "City",
        name: "Siirt",
      },
      {
        "@type": "City",
        name: "Tatvan",
      },
      {
        "@type": "City",
        name: "Diyarbakır",
      },
      {
        "@type": "City",
        name: "Elazığ",
      },
      {
        "@type": "City",
        name: "Batman",
      },
      {
        "@type": "City",
        name: "Erzurum",
      },
      {
        "@type": "City",
        name: "Ağrı",
      },
      {
        "@type": "City",
        name: "Bingöl",
      },
      {
        "@type": "City",
        name: "Hakkari",
      },
      {
        "@type": "City",
        name: "Mardin",
      },
      {
        "@type": "City",
        name: "Şırnak",
      },
      {
        "@type": "State",
        name: "Doğu Anadolu Bölgesi",
      },
      {
        "@type": "Country",
        name: "Türkiye",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "İskele ve Kalıp Sistemleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Güvenlikli İskele Kiralama",
            description: "EN standartlarına uygun güvenlikli iskele sistemleri kiralama ve satış",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flanşlı İskele",
            description: "Hızlı montaj ve demontaj imkanı sunan flanşlı iskele sistemleri",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobil İskele",
            description: "Kolay taşınabilir mobil iskele sistemleri kiralama",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Teleskobik İnşaat Direği",
            description: "Ayarlanabilir yükseklik özelliği ile teleskopik direk sistemleri",
          },
        },
      ],
    },
  }

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="pt-16 sm:pt-20 lg:pt-24 animate-fade-in">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
