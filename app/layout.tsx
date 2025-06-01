import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans_Bengali } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-bengali",
})

export const metadata: Metadata = {
  title: "ইলম থেকে ইখলাস - From Knowledge to Sincerity",
  description:
    "A comprehensive 4-month Islamic lifestyle transformation program. Guide Muslims from basic to advanced Islamic practices with AI-powered assistance.",
  keywords: "Islam, Da'wah, Islamic lifestyle, Quran, Hadith, Bengali Islam, Islamic education",
  authors: [{ name: "ইলম থেকে ইখলাস Team" }],
  openGraph: {
    title: "ইলম থেকে ইখলাস - From Knowledge to Sincerity",
    description: "Transform your Islamic lifestyle with our comprehensive 4-month guided program",
    type: "website",
    locale: "bn_BD",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ইলম থেকে ইখলাস - From Knowledge to Sincerity",
    description: "Transform your Islamic lifestyle with our comprehensive 4-month guided program",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSansBengali.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
