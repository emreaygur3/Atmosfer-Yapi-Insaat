import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, MessageCircle, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground border-t border-border">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 flex-wrap">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-block">
              <Image
                src="/images/design-mode/LOGO.png"
                alt="Atmosfer Yapı İnşaat Logo"
                width={960}
                height={384}
                className="h-24 sm:h-32 lg:h-36 w-auto"
              />
            </Link>
          </div>

          {/* Quick Links - Centered */}
          <div className="flex gap-4 sm:gap-6 items-center flex-wrap justify-center">
            <Link href="/" className="text-sm hover:text-primary transition-colors duration-300 cursor-pointer">
              Ana Sayfa
            </Link>
            <Link href="/services" className="text-sm hover:text-primary transition-colors duration-300 cursor-pointer">
              Hizmetler
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary transition-colors duration-300 cursor-pointer">
              İletişim
            </Link>
          </div>

          {/* Social Media Icons - Right */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/905330871948"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-[#3B82F6] hover:scale-110 hover:text-white transition-all duration-250 cursor-pointer"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/icen.orhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-[#3B82F6] hover:scale-110 hover:text-white transition-all duration-250 cursor-pointer"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/orhan.icen"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-[#3B82F6] hover:scale-110 hover:text-white transition-all duration-250 cursor-pointer"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright - Centered below on all screens */}
        <div className="text-center mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border/50">
          <p className="text-xs sm:text-sm text-muted-foreground">© 2025 Atmosfer Yapı İnşaat. Tüm hakları saklıdır.</p>
          <p className="text-xs text-muted-foreground mt-2 flex items-center justify-center gap-1">
            Designed by{" "}
            <a
              href="https://github.com/emreaygur3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary hover:underline transition-colors duration-300 cursor-pointer inline-flex items-center gap-1"
            >
              emreaygur3
              <Github className="w-3 h-3" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
