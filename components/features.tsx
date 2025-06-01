import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Brain, Users, Download, MessageCircle, Calendar } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: BookOpen,
      title: "ইলম (জ্ঞান)",
      titleEn: "Knowledge",
      description: "কুরআন ও হাদিসের আলোকে প্রতিদিন নতুন জ্ঞান অর্জন করুন",
      descriptionEn: "Gain new knowledge daily from Quran and Hadith",
    },
    {
      icon: Calendar,
      title: "আমল (কর্ম)",
      titleEn: "Practice",
      description: "ব্যবহারিক ইসলামিক জীবনযাত্রার জন্য দৈনিক আমলের তালিকা",
      descriptionEn: "Daily practice list for practical Islamic lifestyle",
    },
    {
      icon: Brain,
      title: "তাযকিয়াহ (আত্মশুদ্ধি)",
      titleEn: "Self-Purification",
      description: "আত্মার পরিশুদ্ধতা ও আধ্যাত্মিক উন্নতির জন্য গাইডলাইন",
      descriptionEn: "Guidelines for spiritual purification and development",
    },
    {
      icon: Users,
      title: "দাওয়াহ (প্রচার)",
      titleEn: "Dawah",
      description: "ইসলামের সুন্দর বার্তা অন্যদের কাছে পৌঁছে দেওয়ার উপায়",
      descriptionEn: "Ways to share the beautiful message of Islam with others",
    },
    {
      icon: MessageCircle,
      title: "AI সহায়ক",
      titleEn: "AI Assistant",
      description: "ইসলামিক প্রশ্নের উত্তর ও ব্যক্তিগত গাইডেন্স পান",
      descriptionEn: "Get answers to Islamic questions and personal guidance",
    },
    {
      icon: Download,
      title: "ডাউনলোড ও শেয়ার",
      titleEn: "Download & Share",
      description: "PDF, ইমেজ ও সোশ্যাল মিডিয়া কন্টেন্ট ডাউনলোড করুন",
      descriptionEn: "Download PDFs, images and social media content",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bengali-text islamic-text-gradient">প্রোগ্রামের বৈশিষ্ট্য</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto bengali-text">
            একটি সম্পূর্ণ ইসলামিক জীবনযাত্রা গড়ে তোলার জন্য প্রয়োজনীয় সব কিছু
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-emerald-100 hover:border-emerald-300 transition-colors group hover:shadow-lg"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg islamic-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-emerald-700 bengali-text">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 bengali-text leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
