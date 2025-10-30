import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: "Atmosfer Yapı İnşaat - İskele ve Kalıp Sistemleri",
  description:
    "Bitlis merkezli iskele ve kalıp sistemlerinde kiralama, satış ve imalat hizmetleri. Güvenilir çözüm ortağınız.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main className="pt-16 sm:pt-20 lg:pt-24 animate-fade-in">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
