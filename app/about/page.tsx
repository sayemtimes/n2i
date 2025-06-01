import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Target, Users, BookOpen, Star, Globe, MessageCircle, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "মুফতি আবদুল্লাহ রহমান",
      role: "প্রধান উপদেষ্টা",
      education: "আল-আজহার বিশ্ববিদ্যালয়",
      specialization: "তাফসির ও হাদিস",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "ড. মুহাম্মদ ইউসুফ",
      role: "গবেষণা পরিচালক",
      education: "মদিনা ইসলামি বিশ্ববিদ্যালয়",
      specialization: "ফিকহ ও উসুল",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "হাফেজ আহমেদ হাসান",
      role: "কন্টেন্ট ডেভেলপার",
      education: "জামিয়া দারুল উলুম",
      specialization: "কুরআন ও তাজবিদ",
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  const milestones = [
    {
      year: "২০২৩",
      title: "প্রকল্প শুরু",
      description: "ইলম থেকে ইখলাস প্রকল্পের যাত্রা শুরু",
    },
    {
      year: "২০২৪",
      title: "AI সিস্টেম চালু",
      description: "ইসলামিক AI সহায়ক সিস্টেম চালু করা হয়",
    },
    {
      year: "২০২৪",
      title: "১০,০০০+ ব্যবহারকারী",
      description: "প্রথম ১০ হাজার ব্যবহারকারী অর্জন",
    },
    {
      year: "২০২৪",
      title: "বহুভাষিক সেবা",
      description: "বাংলা ও ইংরেজি ভাষায় সেবা সম্প্রসারণ",
    },
  ]

  const statistics = [
    {
      number: "১৫,০০০+",
      label: "সক্রিয় ব্যবহারকারী",
      icon: Users,
    },
    {
      number: "৫০০+",
      label: "ইসলামিক প্রবন্ধ",
      icon: BookOpen,
    },
    {
      number: "১০০+",
      label: "দৈনিক প্রশ্নোত্তর",
      icon: MessageCircle,
    },
    {
      number: "৯৮%",
      label: "সন্তুষ্ট ব্যবহারকারী",
      icon: Star,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bengali-text islamic-text-gradient">আমাদের সম্পর্কে</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto bengali-text leading-relaxed">
            "ইলম থেকে ইখলাস" একটি অলাভজনক ইসলামিক শিক্ষা প্ল্যাটফর্ম যার লক্ষ্য হলো কুরআন ও সহিহ হাদিসের আলোকে মুসলিম উম্মাহকে সঠিক
            ইসলামিক জীবনযাত্রায় পরিচালিত করা।
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border-emerald-200">
            <CardHeader className="bg-emerald-50">
              <CardTitle className="flex items-center bengali-text text-emerald-700">
                <Target className="mr-2 h-6 w-6" />
                আমাদের লক্ষ্য
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 bengali-text text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  কুরআন ও সহিহ হাদিসের আলোকে ইসলামিক জীবনযাত্রা প্রতিষ্ঠা
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  প্রযুক্তির মাধ্যমে ইসলামিক শিক্ষার সহজীকরণ
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  মুসলিম উম্মাহর মধ্যে ইলম ও আমলের সমন্বয়
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  বিশ্বব্যাপী দাওয়াহ কার্যক্রম পরিচালনা
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200">
            <CardHeader className="bg-amber-50">
              <CardTitle className="flex items-center bengali-text text-amber-700">
                <Heart className="mr-2 h-6 w-6" />
                আমাদের দৃষ্টিভঙ্গি
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="bengali-text text-gray-700 leading-relaxed mb-4">
                আমরা স্বপ্ন দেখি এমন একটি বিশ্বের যেখানে প্রতিটি মুসলিম কুরআন ও সুন্নাহর আলোকে জীবন যাপন করবে, যেখানে ইলম ও আমলের
                মধ্যে নিখুঁত সমন্বয় থাকবে।
              </p>
              <div className="space-y-2">
                <Badge variant="outline" className="mr-2">
                  ইখলাস
                </Badge>
                <Badge variant="outline" className="mr-2">
                  তাকওয়া
                </Badge>
                <Badge variant="outline" className="mr-2">
                  দাওয়াহ
                </Badge>
                <Badge variant="outline">উম্মাহ</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <Card className="mb-16 border-emerald-200 bg-gradient-to-r from-emerald-50 to-amber-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-8 bengali-text islamic-text-gradient">আমাদের অর্জন</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="p-4 rounded-full islamic-gradient w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-700 mb-1">{stat.number}</h3>
                  <p className="text-gray-600 bengali-text text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 bengali-text islamic-text-gradient">আমাদের টিম</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-emerald-200 text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-700 bengali-text mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-medium bengali-text mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm bengali-text mb-1">{member.education}</p>
                  <Badge variant="outline" className="text-xs">
                    {member.specialization}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 bengali-text islamic-text-gradient">আমাদের যাত্রা</h2>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="border-emerald-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full islamic-gradient flex items-center justify-center">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="secondary">{milestone.year}</Badge>
                        <h3 className="text-lg font-bold text-emerald-700 bengali-text">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-600 bengali-text">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <Card className="mb-16 border-emerald-200">
          <CardHeader className="bg-emerald-50">
            <CardTitle className="text-center bengali-text text-emerald-700">আমাদের মূল্যবোধ</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <BookOpen className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="font-bold bengali-text mb-2">ইলম</h3>
                <p className="text-sm text-gray-600 bengali-text">কুরআন ও হাদিসের জ্ঞান</p>
              </div>
              <div className="text-center">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-3" />
                <h3 className="font-bold bengali-text mb-2">ইখলাস</h3>
                <p className="text-sm text-gray-600 bengali-text">আল্লাহর জন্য একনিষ্ঠতা</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                <h3 className="font-bold bengali-text mb-2">উম্মাহ</h3>
                <p className="text-sm text-gray-600 bengali-text">মুসলিম ভ্রাতৃত্ব</p>
              </div>
              <div className="text-center">
                <Globe className="h-12 w-12 text-purple-500 mx-auto mb-3" />
                <h3 className="font-bold bengali-text mb-2">দাওয়াহ</h3>
                <p className="text-sm text-gray-600 bengali-text">ইসলামের বার্তা প্রচার</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="border-emerald-200 bg-gradient-to-r from-emerald-50 to-amber-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 bengali-text islamic-text-gradient">আমাদের সাথে যুক্ত হন</h3>
            <p className="text-gray-600 mb-6 bengali-text max-w-2xl mx-auto">
              ইসলামিক শিক্ষা ও দাওয়াহর এই মহান কাজে আমাদের সাথে অংশীদার হন। একসাথে আমরা উম্মাহর কল্যাণে কাজ করি।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="islamic-gradient text-white px-6 py-3">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  যোগাযোগ করুন
                </Button>
              </Link>
              <Link href="/monthly-plan">
                <Button variant="outline" className="border-emerald-600 text-emerald-600 px-6 py-3">
                  <BookOpen className="mr-2 h-4 w-4" />
                  প্রোগ্রাম শুরু করুন
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
