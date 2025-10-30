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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Çiroz Asansör ve Playwood</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Yüksek katlı binalarda malzeme ve personel taşımacılığı için güvenli asansör sistemleri
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
                src="/construction-elevator-hoist.jpg"
                alt="Çiroz Asansör ve Playwood"
                fill
                className="object-cover"
              />
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Çiroz asansör sistemlerimiz, yüksek katlı bina inşaatlarında malzeme ve personel taşımacılığını güvenli
                ve verimli bir şekilde gerçekleştirmenizi sağlar. Modern güvenlik sistemleri ve yüksek taşıma kapasitesi
                ile projelerinizde zaman tasarrufu sağlar.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Playwood (kontrplak) ürünlerimiz ise kalıp sistemlerinde ve beton döküm işlemlerinde kullanılmak üzere
                yüksek kaliteli malzemelerden üretilmiştir. Farklı kalınlık ve boyut seçenekleri ile her türlü proje
                ihtiyacına cevap verir.
              </p>
            </div>

            {/* Features */}
            <div className="bg-card p-8 rounded-lg border border-border mb-12">
              <h2 className="text-2xl font-bold mb-6 text-card-foreground">Özellikler</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Yüksek taşıma kapasitesi</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Modern güvenlik sistemleri</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Hızlı ve güvenli taşıma</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Yüksek kaliteli playwood</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Farklı boyut seçenekleri</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Kiralama ve satış imkanı</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Projeleriniz için teklif alın</h3>
              <p className="text-muted-foreground mb-6">
                Çiroz asansör ve playwood ürünlerimiz hakkında detaylı bilgi almak ve özel fiyat teklifi için bizimle
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
