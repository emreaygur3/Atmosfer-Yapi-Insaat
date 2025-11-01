import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function CirozAsansorPlaywoodPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">İskele Kalıp Aksesuarları</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              İnşaat projeleriniz için kaliteli ve güvenilir iskele kalıp aksesuarları
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
                src="/iskele-kalıp-aksesuarları.jpg"
                alt="İskele Kalıp Aksesuarları"
                fill
                className="object-cover"
              />
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                İskele kalıp aksesuarlarımız, inşaat projelerinizde güvenli ve verimli çalışma ortamı sağlamak için
                tasarlanmıştır. Yüksek kaliteli malzemelerden üretilen aksesuarlarımız, EN standartlarına uygun olup
                uzun ömürlü kullanım sunar.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Geniş ürün yelpazemiz ile her türlü iskele ve kalıp sistemine uyumlu çözümler sunuyoruz. Bağlantı
                elemanları, güvenlik ekipmanları ve taşıma aksesuarları ile projelerinizde maksimum verimlilik elde
                edin.
              </p>
            </div>

            {/* Features */}
            <div className="bg-card p-8 rounded-lg border border-border mb-12">
              <h2 className="text-2xl font-bold mb-6 text-card-foreground">Özellikler</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">EN standartlarına uygun üretim</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Yüksek kaliteli malzeme</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Uzun ömürlü kullanım</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Geniş ürün yelpazesi</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Kolay montaj ve demontaj</span>
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
                İskele kalıp aksesuarlarımız hakkında detaylı bilgi almak ve özel fiyat teklifi için bizimle
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
