import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Target, BookOpen, Heart, MessageCircle, Star, Crown } from "lucide-react"
import Link from "next/link"

export default function MonthlyPlanPage() {
  const months = [
    {
      id: 1,
      title: "ভিত্তি স্থাপন (Foundation Building)",
      subtitle: "নিয়ত ও সংশোধন - জ্ঞান অর্জনের ধারাবাহিকতা",
      description: "ইসলামিক জীবনযাত্রার মূল ভিত্তি তৈরি করুন। নামাজ, কুরআন ও মৌলিক ইসলামিক জ্ঞান অর্জন।",
      level: "Beginner",
      icon: BookOpen,
      color: "emerald",
      weeks: [
        {
          week: 1,
          title: "নামাজ, পবিত্রতা ও নিয়ত",
          focus: "আল্লাহর সন্তুষ্টির উদ্দেশ্যে জীবন গঠনের নিয়ত",
          dailyTasks: [
            "নিয়ত সংশোধন: আল্লাহর সন্তুষ্টির জন্য ইসলাম শিখা",
            "ওযু শেখা (সহিহভাবে)",
            "নামাজের ফজিলত জানা",
            "তায়াম্মুম শেখা",
            "নামাজের ফরজ, ওয়াজিব, সুন্নত জানা",
            "ছোট সূরা মুখস্থ (সূরা ফিল, কাওসার)",
            "সপ্তাহ রিভিউ ও অগ্রগতি মূল্যায়ন",
          ],
          hadith: "إنما الأعمال بالنيات - কাজের ফলাফল নিয়তের উপর নির্ভরশীল",
        },
        {
          week: 2,
          title: "কুরআন পাঠ, দোয়া ও যিকর",
          focus: "কুরআনের সাথে দৈনিক সম্পর্ক স্থাপন",
          dailyTasks: [
            "প্রতিদিন কুরআনের ৫ আয়াত পাঠ শুরু",
            "সকাল-সন্ধ্যার যিকর শেখা",
            "আয়াতুল কুরসী মুখস্থ",
            "দোয়া শেখা: ঘুম, খাবার, বের হওয়া",
            "সকাল ও সন্ধ্যার যিকর কার্ড তৈরি",
            "ক্ষমা প্রার্থনার দোয়া: رَبِّ اغْفِرْ لِي",
            "রিভিউ ও বাস্তব অনুশীলন",
          ],
          hadith: "আল্লাহর যিকর হৃদয়ের প্রশান্তি - সূরা রা'দ: ২৮",
        },
        {
          week: 3,
          title: "চরিত্র গঠন ও সমাজে ইসলাম",
          focus: "ইসলামিক আখলাক ও সামাজিক দায়বদ্ধতা",
          dailyTasks: [
            "সত্যবাদিতা অনুশীলন",
            "গীবত থেকে বিরত থাকা",
            "ভালো আচরণ ও হাস্যোজ্জ্বলতা",
            "প্রতিবেশীর হক আদায়",
            "আত্মীয়তা রক্ষা",
            "মিথ্যা প্রতিশ্রুতি না দেওয়া",
            "রিভিউ ও আত্মসমালোচনা",
          ],
          hadith: "তোমার ভাইয়ের প্রতি হাসি – সদকা",
        },
        {
          week: 4,
          title: "হালাল-হারাম, রিজিক ও দুনিয়া",
          focus: "ইসলামিক জীবনযাত্রার বাস্তব প্রয়োগ",
          dailyTasks: [
            "হালাল রিজিকের গুরুত্ব বোঝা",
            "সুদের ভয়াবহতা জানা",
            "অশ্লীলতা থেকে বাঁচার উপায়",
            "সময়ের হেফাজত ও ব্যবস্থাপনা",
            "ইসলামী পোশাক-আশাক",
            "গুনাহ পরিত্যাগ ও তাওবা",
            "ইখলাস ও তাকওয়ার চর্চা",
          ],
          hadith: "হালাল স্পষ্ট এবং হারামও স্পষ্ট",
        },
      ],
    },
    {
      id: 2,
      title: "আমল বৃদ্ধি (Intermediate Practice)",
      subtitle: "কুরআন ও হাদিস অধ্যয়ন - সীরাহ ও সাহাবা",
      description: "দৈনিক আমলের পরিমাণ ও গুণগত মান বৃদ্ধি। গভীর ইসলামিক জ্ঞান অর্জন।",
      level: "Intermediate",
      icon: Heart,
      color: "blue",
      weeks: [
        {
          week: 1,
          title: "কুরআন ও হাদিস অধ্যয়ন গভীরভাবে",
          focus: "সূরা ফাতিহার তাফসির ও হাদিস চর্চা",
          dailyTasks: [
            "সূরা ফাতিহার তাফসির বুঝা",
            "সূরা বাকারা ১-৫ আয়াতের তাফসির",
            "হাদিস অধ্যয়ন (রিয়াদুস সালেহীন)",
            "ইসলাম, ঈমান ও ইহসানের পার্থক্য",
            "কুরআনের ভাষা বুঝার চেষ্টা",
            "আয়াত মুখস্থ: সূরা মুলক ১-৫",
            "রিভিউ ও পুনরাবৃত্তি",
          ],
          hadith: "নিয়তের হাদিস - সহিহ বুখারী",
        },
        {
          week: 2,
          title: "সীরাহ, সাহাবা ও আদর্শ চরিত্র",
          focus: "রাসূল (সা.) ও সাহাবাদের জীবন থেকে শিক্ষা",
          dailyTasks: [
            "রাসূল (সা.)-এর বাল্যকাল অধ্যয়ন",
            "হিজরতের কাহিনি ও শিক্ষা",
            "আবু বকর (রা.)-এর জীবনী",
            "ওমর (রা.)-এর ইনসাফ",
            "উসমান (রা.)-এর দানশীলতা",
            "আলী (রা.)-এর জ্ঞান ও বিচার",
            "নবীজি (সা.)-এর আখলাক অনুসরণ",
          ],
          hadith: "তোমাদের মধ্যে সেই উত্তম যে কুরআন শেখে ও শেখায়",
        },
        {
          week: 3,
          title: "আত্মশুদ্ধি, তাকওয়া ও আল্লাহভীতি",
          focus: "অন্তরের পরিশুদ্ধতা ও আধ্যাত্মিক উন্নতি",
          dailyTasks: [
            "নিয়ত ও রিয়ার পার্থক্য বোঝা",
            "গুনাহকে গুনাহ মনে করা",
            "কান্না করে দোয়া করা",
            "আত্মসমালোচনা ও মুজাহাদা",
            "কৃতজ্ঞতা ও শোকর আদায়",
            "মৃত্যুর স্মরণ",
            "রিভিউ ও নতুন চিন্তাভাবনা",
          ],
          hadith: "দোয়া করো কাঁদো বা কান্নার মতো করো",
        },
        {
          week: 4,
          title: "সমাজ, পরিবার ও দায়িত্ব",
          focus: "ইসলামিক সমাজ গঠনে ব্যক্তিগত ভূমিকা",
          dailyTasks: [
            "পরিবারের দায়িত্ব পালন",
            "সন্তানের ইসলামি লালন-পালন",
            "স্ত্রী/স্বামীর হক আদায়",
            "প্রতিবেশী ও সমাজসেবা",
            "সমাজে ইনসাফ ও দয়া",
            "অসুস্থ/দুর্বলদের পাশে থাকা",
            "দাওয়াত ও দ্বীনের কথা বলা",
          ],
          hadith: "তোমরা সবাই দায়িত্বশীল",
        },
      ],
    },
    {
      id: 3,
      title: "আত্মশুদ্ধি (Advanced Purification)",
      subtitle: "ইবাদতের গভীরতা - গভীর জ্ঞান ও ইখলাস",
      description: "মনের পরিশুদ্ধতা ও চরিত্র গঠন। উন্নত ইবাদত ও দাওয়াহ কার্যক্রম।",
      level: "Advanced",
      icon: Star,
      color: "purple",
      weeks: [
        {
          week: 1,
          title: "ইবাদতের গভীরতা ও নিয়মিত রুটিন",
          focus: "তাহাজ্জুদ ও উন্নত ইবাদতের অভ্যাস",
          dailyTasks: [
            "তাহাজ্জুদ নামাজের নিয়ম ও ফজিলত",
            "কুরআন তিলাওয়াতের গভীরতা",
            "নফল রোজার অভ্যাস",
            "নামাজে খুশু আনয়ন",
            "দোয়ার আদব ও গভীরতা",
            "সেজদাহর আসল অনুভূতি",
            "রাতের ইবাদতের অগ্রগতি রিভিউ",
          ],
          hadith: "সর্বোত্তম নামাজ তাহাজ্জুদ",
        },
        {
          week: 2,
          title: "গভীর জ্ঞান: তাফসির, হাদিস ও ফিকহ",
          focus: "ইসলামিক স্কলারশিপের ভিত্তি স্থাপন",
          dailyTasks: [
            "সূরা হুজুরাতের তাফসির (আখলাক)",
            "সূরা লুকমান: হেকমতের শিক্ষা",
            "হাদিস চর্চা: ১০টি গুরুত্বপূর্ণ হাদিস",
            "হালাল-হারামের গভীর ফিকহি আলোচনা",
            "মুসলিমদের অর্থনীতি: জাকাত, ইনসাফ",
            "ইজতিহাদ ও তাকলিদের পরিচয়",
            "শিক্ষার বিষয়গুলো লিখে রাখা",
          ],
          hadith: "জ্ঞান অর্জন করো, চীন দেশে গেলেও",
        },
        {
          week: 3,
          title: "আত্মশুদ্ধি ও ইখলাস",
          focus: "অন্তরের পরিশুদ্ধতার চূড়ান্ত স্তর",
          dailyTasks: [
            "ইখলাসের চূড়ান্ত স্তর অর্জন",
            "কিবর ও আত্মম্ভরিতা দমন",
            "গিবত ও হসদ থেকে মুক্তি",
            "দুনিয়ার মোহ ত্যাগ",
            "চোখ ও হৃদয়ের তাকওয়া",
            "অন্তরের রোগ নিরাময়",
            "আত্মবিশ্লেষণ ও কালের হিসাব",
          ],
          hadith: "আল্লাহ কেবল ইখলাস কবুল করেন",
        },
        {
          week: 4,
          title: "দাওয়াহ, উম্মতের দায়িত্ব ও নেতৃত্ব",
          focus: "সমাজ পরিবর্তনে সক্রিয় ভূমিকা",
          dailyTasks: [
            "উম্মাহর অবস্থা ও দায়িত্ব বোঝা",
            "দাওয়াহর কৌশল: হিকমাহ, নরম কথা",
            "সাহাবিদের দাওয়াহ জীবন অধ্যয়ন",
            "আজকের সমাজের ফিতনা চিহ্নিতকরণ",
            "ইসলামী নেতৃত্ব ও আদর্শ",
            "পরিবারের ইসলামী পরিবেশ গঠন",
            "উম্মাহবোধ ও একতার চেতনা",
          ],
          hadith: "তোমাদের মধ্যে যে সবচেয়ে ভালো সে মানুষের উপকার করে",
        },
      ],
    },
    {
      id: 4,
      title: "দাওয়াহ ও সেবা (Leadership & Service)",
      subtitle: "সর্বোচ্চ জ্ঞান ভিত্তিক - নেতৃত্ব ও আত্মনিবেদন",
      description: "ইসলামের বার্তা প্রচার ও মানুষের সেবা। উম্মাহর নেতৃত্ব ও সমাজ সংস্কার।",
      level: "Scholarship + Da'wah",
      icon: Crown,
      color: "amber",
      weeks: [
        {
          week: 1,
          title: "ইলমের গভীরতা – তাফসির, হাদিস ও উসুল",
          focus: "ইসলামিক স্কলারশিপ ও গবেষণা",
          dailyTasks: [
            "তাফসির উলুম (উসুলুত তাফসির)",
            "কুরআনের ভাষা ও বালাগাহ",
            "উসূলুল হাদিস পরিচয়",
            "মাজহাব ও ফিকহি মতপার্থক্য",
            "হাদিসের সূত্র বিশ্লেষণ",
            "ইসলামী আকীদাহর স্তম্ভ",
            "জ্ঞান চর্চার রুটিন প্রতিষ্ঠা",
          ],
          hadith: "আলেমদের কলমের কালি শহীদদের রক্তের চেয়ে পবিত্র",
        },
        {
          week: 2,
          title: "উসূল ও গবেষণা – গভীরতর গবেষণা ও ইজতিহাদ",
          focus: "সমসাময়িক ইস্যুতে ইসলামিক সমাধান",
          dailyTasks: [
            "উসূলুল ফিকহ – মূলনীতি",
            "কিয়াস ও ইজমার প্রয়োগ",
            "মুসলিম ইতিহাস – উমাইয়া/আব্বাসীয়",
            "আধুনিক ফিতনা বিশ্লেষণ",
            "ইসলামি রাজনীতি ও রাষ্ট্রনীতি",
            "ইসলামি অর্থনীতি ও সিস্টেম",
            "গবেষণামূলক লেখালেখি শুরু",
          ],
          hadith: "যে ইলম অর্জন করে কিন্তু আমল করে না...",
        },
        {
          week: 3,
          title: "আত্মশুদ্ধির চূড়ান্ত স্তর – ইহসান ও ফনা",
          focus: "আধ্যাত্মিক পূর্ণতা ও আল্লাহর নৈকট্য",
          dailyTasks: [
            "ইহসান – 'তুমি যেন আল্লাহকে দেখছো...'",
            "তাওয়াক্কুল – পূর্ণ নির্ভরতা",
            "তাওবা ও আত্মার পরিশুদ্ধি",
            "জুহদ – দুনিয়ার প্রতি উদাসীনতা",
            "ইখলাসের চূড়া অর্জন",
            "ফানা ফিল্লাহ – আত্মসমর্পণ",
            "একান্ত আত্মবিশ্লেষণ",
          ],
          hadith: "তুমি আল্লাহর ইবাদত করো যেন তুমি তাঁকে দেখছো",
        },
        {
          week: 4,
          title: "নেতৃত্ব, উম্মাহ ও আত্মনিবেদন",
          focus: "উম্মাহর সেবায় জীবন উৎসর্গ",
          dailyTasks: [
            "ইসলামী নেতৃত্বের বৈশিষ্ট্য",
            "উম্মাহর ভবিষ্যৎ ও ভূমিকা",
            "মিডিয়ায় ইসলাম প্রচার",
            "ইসলামিক ইনিশিয়েটিভ তৈরি",
            "ইসলামী লেখালেখি ও বক্তব্য",
            "অন্যান্যদের তৈরি করা",
            "দাওয়াহর ভবিষ্যৎ পরিকল্পনা",
          ],
          hadith: "তোমাদের মধ্যে সেই উত্তম যে মানুষের সবচেয়ে বেশি উপকার করে",
        },
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        text: "text-emerald-700",
        button: "bg-emerald-600 hover:bg-emerald-700",
      },
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-700",
        button: "bg-blue-600 hover:bg-blue-700",
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-700",
        button: "bg-purple-600 hover:bg-purple-700",
      },
      amber: {
        bg: "bg-amber-50",
        border: "border-amber-200",
        text: "text-amber-700",
        button: "bg-amber-600 hover:bg-amber-700",
      },
    }
    return colors[color as keyof typeof colors] || colors.emerald
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bengali-text islamic-text-gradient">
            ৪ মাসের বিস্তারিত পরিকল্পনা
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto bengali-text leading-relaxed">
            কুরআন ও সহিহ হাদিসের আলোকে ধাপে ধাপে ইসলামিক জীবনযাত্রা গড়ে তুলুন। বেসিক থেকে শুরু করে উন্নত দাওয়াহ ও নেতৃত্বের স্তর পর্যন্ত।
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8 border-emerald-200">
          <CardHeader>
            <CardTitle className="flex items-center bengali-text">
              <Target className="mr-2 h-5 w-5 text-emerald-600" />
              সামগ্রিক অগ্রগতি ও স্তরসমূহ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {months.map((month, index) => {
                const colors = getColorClasses(month.color)
                const progress = index === 0 ? 100 : index === 1 ? 75 : index === 2 ? 50 : 25
                return (
                  <div key={month.id} className={`p-4 rounded-lg ${colors.bg} ${colors.border} border`}>
                    <div className="flex items-center justify-between mb-2">
                      <month.icon className={`h-6 w-6 ${colors.text}`} />
                      <Badge variant="secondary" className="text-xs">
                        {month.level}
                      </Badge>
                    </div>
                    <h3 className="font-semibold mb-1 bengali-text text-sm">{month.title}</h3>
                    <Progress value={progress} className="mb-2 h-2" />
                    <p className="text-xs text-gray-600">{progress}% সম্পন্ন</p>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Plans */}
        <div className="space-y-8">
          {months.map((month) => {
            const colors = getColorClasses(month.color)
            return (
              <Card key={month.id} className={`${colors.border} border-2`}>
                <CardHeader className={colors.bg}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full bg-white shadow-sm`}>
                        <month.icon className={`h-8 w-8 ${colors.text}`} />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="secondary">মাস {month.id}</Badge>
                          <Badge variant="outline" className={colors.text}>
                            {month.level}
                          </Badge>
                        </div>
                        <CardTitle className={`text-2xl font-bold ${colors.text} bengali-text`}>
                          {month.title}
                        </CardTitle>
                        <p className="text-sm text-gray-600 bengali-text mt-1">{month.subtitle}</p>
                        <p className="text-gray-700 bengali-text mt-2">{month.description}</p>
                      </div>
                    </div>
                    <Link href={`/monthly-plan/month-${month.id}`}>
                      <Button className={`${colors.button} text-white`}>বিস্তারিত দেখুন</Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Tabs defaultValue="week-1" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-6">
                      {month.weeks.map((_, index) => (
                        <TabsTrigger key={index} value={`week-${index + 1}`} className="bengali-text">
                          সপ্তাহ {index + 1}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {month.weeks.map((week, weekIndex) => (
                      <TabsContent key={weekIndex} value={`week-${weekIndex + 1}`} className="mt-6">
                        <div className="space-y-6">
                          {/* Week Header */}
                          <div className={`p-4 rounded-lg ${colors.bg} border ${colors.border}`}>
                            <h3 className={`text-xl font-bold ${colors.text} bengali-text mb-2`}>{week.title}</h3>
                            <p className="text-gray-700 bengali-text mb-3">{week.focus}</p>
                            <div className={`p-3 bg-white rounded border-l-4 ${colors.border}`}>
                              <p className="text-sm font-medium text-gray-800 bengali-text">
                                📖 হাদিস/আয়াত: {week.hadith}
                              </p>
                            </div>
                          </div>

                          {/* Daily Tasks */}
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {week.dailyTasks.map((task, taskIndex) => (
                              <Card key={taskIndex} className="border-gray-200 hover:shadow-md transition-shadow">
                                <CardContent className="p-4">
                                  <div className="flex items-start space-x-3">
                                    <div className={`p-1 rounded-full ${colors.bg} mt-1`}>
                                      <CheckCircle className={`h-4 w-4 ${colors.text}`} />
                                    </div>
                                    <div className="flex-1">
                                      <p className="text-sm font-medium text-gray-800 bengali-text leading-relaxed">
                                        দিন {taskIndex + 1}: {task}
                                      </p>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Card className="border-emerald-200 bg-gradient-to-r from-emerald-50 to-amber-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 bengali-text islamic-text-gradient">
                আজই শুরু করুন আপনার ইসলামিক জার্নি
              </h3>
              <p className="text-gray-600 mb-6 bengali-text max-w-2xl mx-auto">
                এই ৪ মাসের পরিকল্পনা অনুসরণ করে আপনি একজন পূর্ণাঙ্গ মুসলিম হিসেবে গড়ে উঠতে পারবেন। AI সহায়কের মাধ্যমে ব্যক্তিগত গাইডেন্স
                নিন এবং আপনার অগ্রগতি ট্র্যাক করুন।
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/ai-assistant">
                  <Button className="islamic-gradient text-white px-6 py-3">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    AI সহায়ক ব্যবহার করুন
                  </Button>
                </Link>
                <Link href="/downloads">
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 px-6 py-3">
                    <BookOpen className="mr-2 h-4 w-4" />
                    PDF ডাউনলোড করুন
                  </Button>
                </Link>
                <Link href="/monthly-plan/month-1">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
                    <Target className="mr-2 h-4 w-4" />
                    এখনই শুরু করুন
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
