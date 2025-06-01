import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Download, MessageCircle } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-500 to-amber-500 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bengali-text">আজই শুরু করুন আপনার ইসলামিক জার্নি</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto bengali-text">
            ইলম থেকে ইখলাসের পথে এগিয়ে চলুন। আল্লাহর সন্তুষ্টি অর্জনের জন্য আজই যুক্ত হন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-bold mb-2 bengali-text">প্রোগ্রাম শুরু করুন</h3>
              <p className="opacity-90 mb-4 bengali-text">৪ মাসের পূর্ণাঙ্গ গাইড অনুসরণ করুন</p>
              <Link href="/monthly-plan">
                <Button variant="secondary" className="w-full">
                  শুরু করুন
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <Download className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-bold mb-2 bengali-text">PDF ডাউনলোড</h3>
              <p className="opacity-90 mb-4 bengali-text">অফলাইনে পড়ার জন্য ডাউনলোড করুন</p>
              <Link href="/downloads">
                <Button variant="secondary" className="w-full">
                  ডাউনলোড করুন
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-bold mb-2 bengali-text">AI সহায়তা নিন</h3>
              <p className="opacity-90 mb-4 bengali-text">ইসলামিক প্রশ্নের উত্তর পান</p>
              <Link href="/ai-assistant">
                <Button variant="secondary" className="w-full">
                  প্রশ্ন করুন
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-lg opacity-90 mb-6 bengali-text">
            "যে ব্যক্তি মানুষের কল্যাণের পথ দেখায়, সে ঐ কাজের সমান সওয়াব পাবে।" - হাদিস
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/monthly-plan/month-1">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                <BookOpen className="mr-2 h-5 w-5" />
                এখনই শুরু করুন
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3"
            >
              আরও জানুন
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
