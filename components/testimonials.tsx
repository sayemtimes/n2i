import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "আহমেদ হাসান",
      nameEn: "Ahmed Hasan",
      location: "ঢাকা, বাংলাদেশ",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      text: "এই প্রোগ্রামটি আমার জীবনে অসাধারণ পরিবর্তন এনেছে। আল্লাহর কাছে আরও নিবিড় হতে পেরেছি।",
      textEn: "This program has brought extraordinary changes to my life. I have been able to get closer to Allah.",
    },
    {
      name: "ফাতিমা খাতুন",
      nameEn: "Fatima Khatun",
      location: "চট্টগ্রাম, বাংলাদেশ",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      text: "প্রতিদিনের আমলগুলো এত সুন্দরভাবে সাজানো যে মনে রাখা ও অনুসরণ করা খুবই সহজ।",
      textEn: "The daily practices are so beautifully organized that they are very easy to remember and follow.",
    },
    {
      name: "মোহাম্মদ রহিম",
      nameEn: "Mohammad Rahim",
      location: "সিলেট, বাংলাদেশ",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      text: "AI সহায়কটি অসাধারণ! যেকোনো ইসলামিক প্রশ্নের সঠিক উত্তর পাই তাৎক্ষণিক।",
      textEn: "The AI assistant is amazing! I get correct answers to any Islamic question instantly.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bengali-text islamic-text-gradient">ব্যবহারকারীদের মতামত</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto bengali-text">যারা এই প্রোগ্রাম অনুসরণ করেছেন তাদের অভিজ্ঞতা</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-emerald-100 hover:border-emerald-300 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 bengali-text leading-relaxed">"{testimonial.text}"</p>

                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="islamic-gradient text-white">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-emerald-700 bengali-text">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 bengali-text">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
