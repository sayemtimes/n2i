"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun, Globe } from "lucide-react"
import { useTheme } from "next-themes"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [language, setLanguage] = useState("bn")

  const navigation = [
    { name: "হোম", href: "/", nameEn: "Home" },
    { name: "মাসিক পরিকল্পনা", href: "/monthly-plan", nameEn: "Monthly Plan" },
    { name: "AI সহায়ক", href: "/ai-assistant", nameEn: "AI Assistant" },
    { name: "ডাউনলোড", href: "/downloads", nameEn: "Downloads" },
    { name: "ব্লগ", href: "/blog", nameEn: "Blog" },
    { name: "সম্পর্কে", href: "/about", nameEn: "About" },
  ]

  const toggleLanguage = () => {
    setLanguage(language === "bn" ? "en" : "bn")
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-gray-950/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full islamic-gradient flex items-center justify-center">
              <span className="text-white font-bold text-sm">ই</span>
            </div>
            <span className="font-bold text-lg bengali-text islamic-text-gradient">ইলম থেকে ইখলাস</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors bengali-text"
              >
                {language === "bn" ? item.name : item.nameEn}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleLanguage} className="h-9 w-9">
              <Globe className="h-4 w-4" />
              <span className="sr-only">Toggle language</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link href="/monthly-plan/month-1">
              <Button className="islamic-gradient text-white">{language === "bn" ? "শুরু করুন" : "Get Started"}</Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400 transition-colors bengali-text"
                    onClick={() => setIsOpen(false)}
                  >
                    {language === "bn" ? item.name : item.nameEn}
                  </Link>
                ))}
                <div className="flex items-center space-x-2 pt-4">
                  <Button variant="ghost" size="icon" onClick={toggleLanguage} className="h-9 w-9">
                    <Globe className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="h-9 w-9"
                  >
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  </Button>
                </div>
                <Link href="/monthly-plan/month-1" onClick={() => setIsOpen(false)}>
                  <Button className="islamic-gradient text-white w-full">
                    {language === "bn" ? "শুরু করুন" : "Get Started"}
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
