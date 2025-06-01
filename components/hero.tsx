import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Download, BookOpen, Heart } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
        <div className="absolute inset-0 bg-[url('/islamic-pattern.svg')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Bismillah */}
          <div className="mb-8">
            <p className="text-center md:text-center arabic-text text-emerald-700 mb-2">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</p>
            <p className="text-sm text-gray-600 bengali-text">পরম করুণাময় আল্লাহর নামে শুরু করছি</p>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bengali-text">
            <span className="islamic-text-gradient">ইলম থেকে ইখলাস</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">From Knowledge to Sincerity</h2>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto bengali-text leading-relaxed">
            ৪ মাসের একটি পূর্ণাঙ্গ ইসলামিক জীবনযাত্রা পরিবর্তন প্রোগ্রাম। কুরআন ও হাদিসের আলোকে আপনার জীবনকে সাজান এবং প্রকৃত ইখলাসের দিকে
            এগিয়ে চলুন।
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/monthly-plan/month-1">
              <Button size="lg" className="islamic-gradient text-white px-8 py-3 text-lg">
                <BookOpen className="mr-2 h-5 w-5" />
                এখনই শুরু করুন
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              ভিডিও দেখুন
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              PDF ডাউনলোড
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-emerald-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 rounded-full islamic-gradient flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-700 mb-2">৪ মাস</h3>
                <p className="text-gray-600 bengali-text">সম্পূর্ণ প্রোগ্রাম</p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 rounded-full islamic-gradient flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-700 mb-2">১০০+</h3>
                <p className="text-gray-600 bengali-text">দৈনিক আমল</p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 rounded-full islamic-gradient flex items-center justify-center mx-auto mb-4">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-700 mb-2">ফ্রি</h3>
                <p className="text-gray-600 bengali-text">সম্পূর্ণ বিনামূল্যে</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
