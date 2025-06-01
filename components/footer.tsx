import Link from "next/link"
import { Facebook, Twitter, Youtube, Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full islamic-gradient flex items-center justify-center">
                <span className="text-white font-bold text-sm">ই</span>
              </div>
              <span className="font-bold text-xl bengali-text islamic-text-gradient">ইলম থেকে ইখলাস</span>
            </div>
            <p className="text-gray-300 mb-4 bengali-text leading-relaxed">
              একটি পূর্ণাঙ্গ ইসলামিক জীবনযাত্রা গড়ে তোলার জন্য ৪ মাসের বিনামূল্যে প্রোগ্রাম। কুরআন ও হাদিসের আলোকে আপনার জীবনকে সাজান।
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 bengali-text">দ্রুত লিংক</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors bengali-text">
                  হোম
                </Link>
              </li>
              <li>
                <Link
                  href="/monthly-plan"
                  className="text-gray-300 hover:text-emerald-400 transition-colors bengali-text"
                >
                  মাসিক পরিকল্পনা
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-assistant"
                  className="text-gray-300 hover:text-emerald-400 transition-colors bengali-text"
                >
                  AI সহায়ক
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="text-gray-300 hover:text-emerald-400 transition-colors bengali-text">
                  ডাউনলোড
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-emerald-400 transition-colors bengali-text">
                  ব্লগ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 bengali-text">যোগাযোগ</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">info@ilmtoikhlas.com</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+880 1XXX-XXXXXX</span>
              </li>
            </ul>
            <div className="mt-4">
              <Link href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors bengali-text">
                আমাদের সম্পর্কে
              </Link>
            </div>
            <div className="mt-2">
              <Link href="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors bengali-text">
                যোগাযোগ করুন
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm bengali-text">© {currentYear} ইলম থেকে ইখলাস। সর্বস্বত্ব সংরক্ষিত।</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors bengali-text"
              >
                গোপনীয়তা নীতি
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors bengali-text"
              >
                ব্যবহারের শর্তাবলী
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
