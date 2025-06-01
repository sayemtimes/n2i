import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, CheckCircle, Clock, Target, BookOpen, Heart, Star, Crown } from "lucide-react"
import Link from "next/link"

export function MonthlyPlan() {
  const months = [
    {
      month: 1,
      title: "ভিত্তি স্থাপন",
      titleEn: "Foundation Building",
      description: "নিয়ত ও সংশোধন, জ্ঞান অর্জনের ধারাবাহিকতা তৈরি",
      focus: ["নামাজ নিয়মিত করা", "কুরআন তিলাওয়াত", "দোয়া শেখা", "হালাল-হারাম জানা"],
      color: "bg-emerald-500",
      progress: 100,
      level: "Beginner",
      icon: BookOpen,
      weeks: 4,
      dailyTasks: 28,
    },
    {
      month: 2,
      title: "আমল বৃদ্ধি",
      titleEn: "Intermediate Practice",
      description: "কুরআন ও হাদিস অধ্যয়ন, সীরাহ ও সাহাবা জীবন",
      focus: ["সুন্নাহ নামাজ", "যিকির-আযকার", "কুরআন বুঝে পড়া", "সদকা করা"],
      color: "bg-blue-600",
      progress: 75,
      level: "Intermediate",
      icon: Heart,
      weeks: 4,
      dailyTasks: 28,
    },
    {
      month: 3,
      title: "আত্মশুদ্ধি",
      titleEn: "Advanced Purification",
      description: "ইবাদতের গভীরতা, গভীর জ্ঞান ও ইখলাস অর্জন",
      focus: ["তওবা-ইস্তিগফার", "ধৈর্য অনুশীলন", "ক্ষমা করা", "বিনয় অর্জন"],
      color: "bg-purple-500",
      progress: 50,
      level: "Advanced",
      icon: Star,
      weeks: 4,
      dailyTasks: 28,
    },
    {
      month: 4,
      title: "দাওয়াহ ও সেবা",
      titleEn: "Leadership & Service",
      description: "সর্বোচ্চ জ্ঞান ভিত্তিক, নেতৃত্ব ও আত্মনিবেদন",
      focus: ["দাওয়াহ দেওয়া", "সমাজসেবা", "জ্ঞান বিতরণ", "উদাহরণ স্থাপন"],
      color: "bg-amber-600",
      progress: 25,
      level: "Scholarship + Da'wah",
      icon: Crown,
      weeks: 4,
      dailyTasks: 30,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bengali-text islamic-text-gradient">৪ মাসের পরিকল্পনা</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto bengali-text">
            কুরআন ও সহিহ হাদিসের আলোকে ধাপে ধাপে ইসলামিক জীবনযাত্রা গড়ে তুলুন। বেসিক থেকে শুরু করে উন্নত দাওয়াহ ও নেতৃত্বের স্তর পর্যন্ত।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {months.map((month, index) => (
            <Card key={index} className="border-emerald-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-sm">
                    মাস {month.month}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {month.dailyTasks} দিন
                  </div>
                </div>

                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-100 to-amber-100">
                    <month.icon className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-emerald-700 bengali-text">{month.title}</CardTitle>
                    <Badge variant="outline" className="text-xs mt-1">
                      {month.level}
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-600 text-sm bengali-text leading-relaxed">{month.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {month.focus.map((item, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                      <span className="bengali-text">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">অগ্রগতি</span>
                    <span className="text-emerald-600 font-medium">{month.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${month.color} transition-all duration-500`}
                      style={{ width: `${month.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {month.weeks} সপ্তাহ
                  </div>
                  <div className="flex items-center">
                    <Target className="h-3 w-3 mr-1" />
                    {month.dailyTasks} টাস্ক
                  </div>
                </div>

                <Link href={`/monthly-plan/month-${month.month}`}>
                  <Button className="w-full islamic-gradient text-white group-hover:scale-105 transition-transform">
                    <Target className="h-4 w-4 mr-2" />
                    বিস্তারিত দেখুন
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/monthly-plan">
            <Button size="lg" className="islamic-gradient text-white px-8 py-3">
              <Calendar className="mr-2 h-5 w-5" />
              সম্পূর্ণ পরিকল্পনা দেখুন
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
