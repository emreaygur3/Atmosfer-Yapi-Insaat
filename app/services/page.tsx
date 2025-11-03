import Link from "next/link"
import { Building2, HardHat, Wrench, Cake as Crane, Boxes } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "İskele Sistemleri ve Hizmetlerimiz | Bitlis - Atmosfer Yapı İnşaat",
  description:
    "Bitlis'te iskele kiralama ve satış: Güvenlikli iskele, flanşlı iskele, mobil iskele, teleskobik direk, iskele kalıp aksesuarları. Van, Muş, Siirt'e teslimat. ☎️ 0533 087 19 48",
  keywords: "iskele kiralama bitlis, güvenlikli iskele bitlis, flanşlı iskele, mobil iskele, teleskobik direk bitlis, iskele kalıp aksesuarları, iskele satış bitlis, inşaat iskelesi, scaffolding bitlis, iskele firması",
  openGraph: {
    title: "İskele Sistemleri ve Hizmetlerimiz | Bitlis",
    description: "Bitlis ve çevresinde profesyonel iskele kiralama ve satış hizmetleri",
    url: "https://atmosferyapiinsaat.com/services",
  },
}

const services = [
  {
    title: "Güvenlikli İskele",
    description:
      "EN standartlarına uygun, yüksek güvenlik özelliklerine sahip iskele sistemleri. Projelerinizde maksimum güvenlik sağlar.",
    icon: Building2,
    image: "/safety-scaffolding-construction-site.jpg",
    href: "/services/guvenlikli-iskele",
  },
  {
    title: "Flanşlı İskele",
    description:
      "Hızlı montaj ve demontaj imkanı sunan, dayanıklı flanşlı iskele sistemleri. Büyük ölçekli projeler için ideal.",
    icon: HardHat,
    image: "/flanşlı_iskele.png",
    href: "/services/flansli-iskele",
  },
  {
    title: "Mobil İskele",
    description:
      "Kolay taşınabilir, pratik kullanım sunan mobil iskele sistemleri. İç mekan çalışmaları için mükemmel çözüm.",
    icon: Wrench,
    image: "/mobil-iskele.jpg",
    href: "/services/mobil-iskele",
  },
  {
    title: "Teleskopik İnşaat Direği",
    description: "Ayarlanabilir yükseklik özelliği ile farklı projelere uyum sağlayan teleskopik direk sistemleri.",
    icon: Crane,
    image: "/Teleskobik_direk.jpg",
    href: "/services/teleskobik-insaat-diregi",
  },
  {
    title: "İskele Kalıp Aksesuarları",
    description: "Yüksek katlı binalarda malzeme ve personel taşımacılığı için güvenli asansör sistemleri.",
    icon: Boxes,
    image: "/iskele-kalıp-aksesuarları.jpg",
    href: "/services/ciroz-asansor-playwood",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-12 sm:py-14 lg:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
                Ürünlerimiz ve Hizmetlerimiz
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                İnşaat projeleriniz için kapsamlı iskele ve kalıp sistemleri çözümleri sunuyoruz.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Grid: 1 kolon mobil, 2 kolon tablet, 3 kolon desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <ScrollReveal key={index} direction="up" delay={index * 150} duration={700}>
                  <Link
                    href={service.href}
                    className="bg-card rounded-xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 group cursor-pointer flex flex-col h-full shadow-sm hover:shadow-xl"
                  >
                    {/* Görsel Kısmı - Sabit Yükseklik */}
                    <div className="relative h-64 overflow-hidden flex-shrink-0">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${service.image})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-base transform scale-95 group-hover:scale-100 transition-transform duration-300">
                          Detayları Görüntüle →
                        </div>
                      </div>
                      
                      {/* Icon */}
                      <div className="absolute bottom-4 left-4 z-10">
                        <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-xl">
                          <Icon className="w-7 h-7 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                    
                    {/* İçerik Kısmı */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-foreground text-balance">
              Projeleriniz İçin Doğru Çözümü Birlikte Bulalım
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Uzman ekibimiz, ihtiyaçlarınıza özel çözümler sunmak için sizinle çalışmaya hazır.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
