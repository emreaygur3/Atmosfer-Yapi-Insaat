import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function MobilIskelePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Mobil İskele</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Kolay taşınabilir, pratik kullanım sunan mobil iskele sistemleri
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Main Image */}
            <div className="relative h-96 rounded-lg overflow-hidden mb-12">
              <Image src="/mobile-scaffolding-tower.jpg" alt="Mobil İskele Sistemi" fill className="object-cover" />
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Mobil iskele sistemlerimiz, iç mekan çalışmaları ve sık yer değiştirme gerektiren projeler için ideal
                çözümler sunar. Tekerlekli yapısı sayesinde kolayca hareket ettirilebilir ve farklı alanlarda
                kullanılabilir.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hafif ancak dayanıklı alüminyum alaşımdan üretilen mobil iskelelerimiz, kolay kurulum ve güvenli
                kullanım özellikleriyle öne çıkar. Ayarlanabilir yükseklik seçenekleri ile farklı tavan yüksekliklerine
                uyum sağlar.
              </p>
            </div>

            {/* Features */}
            <div className="bg-card p-8 rounded-lg border border-border mb-12">
              <h2 className="text-2xl font-bold mb-6 text-card-foreground">Özellikler</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Tekerlekli ve kolay taşınabilir</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Hafif alüminyum alaşım yapı</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Ayarlanabilir yükseklik</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Hızlı kurulum ve söküm</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">İç mekan çalışmaları için ideal</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Güvenli kilitleme sistemi</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Projeleriniz için teklif alın</h3>
              <p className="text-muted-foreground mb-6">
                Mobil iskele sistemlerimiz hakkında detaylı bilgi almak ve özel fiyat teklifi için bizimle iletişime
                geçin.
              </p>
              <Link href="/contact">
                <Button size="lg">Teklif Al</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
