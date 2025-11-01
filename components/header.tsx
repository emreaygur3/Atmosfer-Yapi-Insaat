"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Ürünlerimiz", href: "/services" },
  { name: "İletişim", href: "/contact" },
]

const serviceItems = [
  { name: "Güvenlikli İskele", href: "/services/guvenlikli-iskele" },
  { name: "Flanşlı İskele", href: "/services/flansli-iskele" },
  { name: "Mobil İskele", href: "/services/mobil-iskele" },
  { name: "Teleskobik İnşaat Direği", href: "/services/teleskobik-insaat-diregi" },
  { name: "Çiroz Asansör ve Playwood", href: "/services/ciroz-asansor-playwood" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/design-mode/LOGO.png"
              alt="Atmosfer Yapı İnşaat Logo"
              width={560}
              height={224}
              className="h-15 sm:h-20 lg:h-24 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navigation.map((item) => {
              if (item.name === "Ürünlerimiz") {
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 cursor-pointer ${
                        pathname.startsWith("/services") ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="w-64 bg-background border border-border rounded-lg shadow-lg py-2">
                        {serviceItems.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className={`block px-4 py-2 text-sm transition-colors cursor-pointer ${
                              pathname === service.href
                                ? "text-primary bg-muted/50"
                                : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                            }`}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
            <a
              href="https://wa.me/905330871948"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-3 lg:px-4 py-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-md transition-colors flex items-center gap-2"
              title="WhatsApp ile İletişime Geçin"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>

          {/* Mobile WhatsApp Button & Menu */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="https://wa.me/905330871948"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-md transition-colors flex items-center gap-2"
              title="WhatsApp ile İletişime Geçin"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
            <button className="p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => {
                if (item.name === "Ürünlerimiz") {
                  return (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className={`text-sm font-medium transition-colors hover:text-primary ${
                          pathname.startsWith("/services") ? "text-primary" : "text-muted-foreground"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="ml-4 mt-2 space-y-2">
                        {serviceItems.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      pathname === item.href ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
