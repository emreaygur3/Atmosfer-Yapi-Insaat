import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function GuvenlikliIskelePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Güvenlikli İskele</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              EN standartlarına uygun, yüksek güvenlik özelliklerine sahip iskele sistemleri
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
              <Image
                src="/safety-scaffolding-construction-site.jpg"
                alt="Güvenlikli İskele Sistemi"
                fill
                className="object-cover"
              />
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Güvenlikli iskele sistemlerimiz, inşaat projelerinizde maksimum güvenlik ve verimlilik sağlar. Avrupa
                standartlarına uygun olarak üretilen sistemlerimiz, yüksek kaliteli malzemeler ve modern mühendislik
                teknikleriyle tasarlanmıştır.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Korkuluk sistemleri, güvenlik ağları ve anti-kayma platformları ile donatılmış iskele sistemlerimiz,
                işçi güvenliğini ön planda tutar. Kolay montaj ve demontaj özellikleri sayesinde zaman ve maliyet
                tasarrufu sağlar.
              </p>
            </div>

            {/* Features */}
            <div className="bg-card p-8 rounded-lg border border-border mb-12">
              <h2 className="text-2xl font-bold mb-6 text-card-foreground">Özellikler</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">EN 12810 ve EN 12811 standartlarına uygun</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Yüksek dayanıklılık ve güvenlik</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Kolay montaj ve demontaj</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Korkuluk ve güvenlik ağı sistemi</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Anti-kayma platform yüzeyi</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Kiralama ve satış seçenekleri</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Projeleriniz için teklif alın</h3>
              <p className="text-muted-foreground mb-6">
                Güvenlikli iskele sistemlerimiz hakkında detaylı bilgi almak ve özel fiyat teklifi için bizimle
                iletişime geçin.
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
