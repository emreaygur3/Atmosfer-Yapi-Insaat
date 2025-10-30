import Link from "next/link"
import { Building2, HardHat, Wrench, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Atmosfer Yapı İnşaat | İskele ve Kalıp Sistemleri",
  description:
    "Bitlis merkezli iskele ve kalıp sistemleri imalatı, kiralama ve satış hizmeti. Güvenlikli iskele, flanşlı iskele, mobil iskele ve teleskobik direk çözümleri.",
  keywords:
    "iskele, kalıp sistemleri, güvenlikli iskele, flanşlı iskele, mobil iskele, teleskobik direk, inşaat, Bitlis",
  openGraph: {
    title: "Atmosfer Yapı İnşaat | İskele ve Kalıp Sistemleri",
    description: "Kiralık ve Satılık İskele – Kalıp Sistemleri Alanında Güvenilir Çözüm Ortağınız",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[70vh] sm:h-[80vh] lg:h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/guvenlikli-iskele-sistemleri-160VFA6NXK97Q2cmsTK9L6wjTjUIq7.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-balance animate-fade-in-up">
            ATMOSFER YAPI İNŞAAT
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto text-balance leading-relaxed px-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Kiralık ve Satılık İskele – Kalıp Sistemleri Alanında Güvenilir Çözüm Ortağınız
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <Link href="/services" className="inline-block cursor-pointer">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 cursor-pointer"
              >
                Hizmetlerimizi Keşfedin
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-foreground">Hakkımızda</h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Atmosfer Yapı İnşaat, Bitlis merkezli olarak iskele ve kalıp sistemlerinde kiralama, satış ve imalat
                hizmetleri sunmaktadır.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Şirketimiz; güvenlikli iskele, flanşlı iskele, mobil iskele, teleskobik inşaat direği ve çiroz
                sistemleri gibi yüksek kaliteye sahip ürünlerin imalatını ve satışını gerçekleştirmektedir.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Uzman ekibimizle, güvenilir çözümlerimizle ve mühendislik yaklaşımımızla projelerinize değer katmayı
                hedefliyoruz.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-foreground">
              Hizmetlerimiz
            </h2>
          </ScrollReveal>

          {/* Grid: 1 kolon mobil, 2 kolon tablet, 4 kolon desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
            <ScrollReveal direction="up" delay={150} duration={700}>
              <div className="bg-card p-6 sm:p-8 rounded-xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl h-full flex flex-col cursor-pointer group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-card-foreground group-hover:text-primary transition-colors">İskele İmalatı</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-grow">
                  Yüksek kaliteli malzemelerle üretilmiş, güvenli ve dayanıklı iskele sistemleri.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300} duration={700}>
              <div className="bg-card p-6 sm:p-8 rounded-xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl h-full flex flex-col cursor-pointer group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <HardHat className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-card-foreground group-hover:text-primary transition-colors">İskele Kiralama</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-grow">
                  Projeleriniz için esnek kiralama seçenekleri ve hızlı teslimat hizmeti.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={450} duration={700}>
              <div className="bg-card p-6 sm:p-8 rounded-xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl h-full flex flex-col cursor-pointer group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Wrench className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-card-foreground group-hover:text-primary transition-colors">
                  Teleskopik Direk Satışı
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-grow">
                  İnşaat projeleriniz için yüksek kaliteli teleskopik direk sistemleri.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={600} duration={700}>
              <div className="bg-card p-6 sm:p-8 rounded-xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl h-full flex flex-col cursor-pointer group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-card-foreground group-hover:text-primary transition-colors">
                  Teleskopik Direk Kiralama
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-grow">
                  Esnek kiralama seçenekleri ile ekonomik ve hızlı teleskopik direk çözümleri.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={400}>
            <div className="flex justify-center mt-8 sm:mt-10">
              <Link href="/services" className="inline-block cursor-pointer">
                <button className="px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-all duration-200 ease-in-out font-medium text-sm sm:text-base cursor-pointer">
                  Tüm Hizmetleri Görüntüle →
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Projeleriniz İçin Bizimle İletişime Geçin
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Profesyonel ekibimiz size en uygun çözümü sunmak için hazır.
          </p>
          <Link href="/contact" className="inline-block cursor-pointer">
            <Button size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 cursor-pointer">
              İletişim
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
