"use client"

import type React from "react"

import { MapPin, Phone, Mail, User, Instagram, Facebook, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    alert("Mesajınız alındı! En kısa sürede size dönüş yapacağız.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-14 lg:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
                İletişim
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Projeleriniz için bizimle iletişime geçin. Size en kısa sürede dönüş yapalım.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-[1400px] mx-auto">
            {/* Contact Information */}
            <ScrollReveal direction="up">
              <div className="space-y-6 lg:space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-foreground">İletişim Bilgileri</h2>

                  <div className="space-y-5">
                    {/* Adres */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg mb-1.5 text-foreground">Adres</h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Fatih Mah. Bitlis Yolu Cad. Zafer Petrol Yanı No:95/A
                          <br />
                          Tatvan / Bitlis
                        </p>
                      </div>
                    </div>

                    {/* Telefon */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg mb-1.5 text-foreground">Telefon</h3>
                        <a
                          href="tel:+905330871948"
                          className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors inline-block cursor-pointer hover:underline"
                        >
                          0533 087 19 48
                        </a>
                      </div>
                    </div>

                    {/* E-posta */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg mb-1.5 text-foreground">E-posta</h3>
                        <a
                          href="mailto:orhanicen305@gmail.com"
                          className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors break-all inline-block cursor-pointer hover:underline"
                        >
                          orhanicen305@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* İletişim Kişisi */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg mb-1.5 text-foreground">İletişim Kişisi</h3>
                        <p className="text-sm sm:text-base text-muted-foreground">Orhan İçen</p>
                      </div>
                    </div>

                    {/* Sosyal Medya */}
                    <div className="pt-4 border-t border-border">
                      <h3 className="font-semibold text-lg mb-4 text-foreground">Sosyal Medya</h3>
                      <div className="flex items-center gap-3">
                        <a
                          href="https://wa.me/905330871948"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 cursor-pointer"
                          aria-label="WhatsApp"
                        >
                          <MessageCircle className="w-6 h-6" />
                        </a>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 cursor-pointer"
                          aria-label="Instagram"
                        >
                          <Instagram className="w-6 h-6" />
                        </a>
                        <a
                          href="https://www.facebook.com/profile.php?id=100050840426995"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 cursor-pointer"
                          aria-label="Facebook"
                        >
                          <Facebook className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden border-2 border-border shadow-lg">
                  <div className="h-72 sm:h-80 lg:h-96 w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.8234567890123!2d42.28123!3d38.49876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDI5JzU1LjUiTiA0MsKwMTYnNTIuNCJF!5e0!3m2!1str!2str!4v1234567890!5m2!1str!2str"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Atmosfer Yapı İnşaat Konumu"
                    />
                  </div>
                  {/* Yol Tarifi Butonu */}
                  <div className="p-4 bg-card border-t border-border">
                    <a
                      href="https://www.google.com/maps/dir//Fatih+Mah.+Bitlis+Yolu+Cad.+Zafer+Petrol+Yanı+No:95%2FA+Tatvan+Bitlis/@38.49876,42.28123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-300 font-semibold text-sm sm:text-base cursor-pointer group"
                    >
                      <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>Yol Tarifi Al</span>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-card p-6 sm:p-8 rounded-xl border-2 border-border shadow-lg lg:sticky lg:top-24">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-card-foreground">Bize Ulaşın</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Adınız Soyadınız
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Adınız ve soyadınız"
                      className="text-base h-11"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      E-posta Adresiniz
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ornek@email.com"
                      className="text-base h-11"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Mesajınız
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mesajınızı buraya yazın..."
                      className="text-base resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-base font-semibold h-12 cursor-pointer">
                    Mesaj Gönder
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
