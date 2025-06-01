import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Share2, Calendar, BookOpen, Heart, Users } from "lucide-react"

export default function DownloadsPage() {
  const downloads = [
    {
      id: 1,
      title: "সম্পূর্ণ ৪ মাসের গাইড",
      description: "পূর্ণাঙ্গ PDF ফাইল সহ সব মাসের বিস্তারিত পরিকল্পনা",
      type: "PDF",
      size: "2.5 MB",
      version: "v1.2",
      icon: FileText,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      id: 2,
      title: "মাস ১: ভিত্তি স্থাপন",
      description: "প্রথম মাসের সপ্তাহভিত্তিক গাইড",
      type: "PDF",
      size: "800 KB",
      version: "v1.1",
      icon: FileText,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      id: 3,
      title: "দৈনিক চেকলিস্ট",
      description: "প্রিন্ট করার জন্য দৈনিক আমলের চেকলিস্ট",
      type: "PDF",
      size: "500 KB",
      version: "v1.0",
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 4,
      title: "ইসলামিক কোট পোস্টার",
      description: "সোশ্যাল মিডিয়ার জন্য অনুপ্রেরণামূলক পোস্টার",
      type: "PNG",
      size: "1.2 MB",
      version: "v1.0",
      icon: FileText,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  const socialTemplates = [
    {
      title: "ফেসবুক পোস্ট টেমপ্লেট",
      description: "দাওয়াহর জন্য প্রস্তুত ফেসবুক পোস্ট",
      platform: "Facebook",
      count: 20,
    },
    {
      title: "ইনস্টাগ্রাম স্টোরি",
      description: "আকর্ষণীয় ইসলামিক স্টোরি টেমপ্লেট",
      platform: "Instagram",
      count: 15,
    },
    {
      title: "হোয়াটসঅ্যাপ স্ট্যাটাস",
      description: "দৈনিক শেয়ারের জন্য ছোট বার্তা",
      platform: "WhatsApp",
      count: 30,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bengali-text islamic-text-gradient">ডাউনলোড ও শেয়ার</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto bengali-text">
            বিনামূল্যে PDF, ইমেজ এবং সোশ্যাল মিডিয়া কন্টেন্ট ডাউনলোড করুন
          </p>
        </div>

        {/* Main Downloads */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 bengali-text text-emerald-700">মূল ডাউনলোড ফাইল</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloads.map((item) => (
              <Card key={item.id} className="border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${item.bgColor}`}>
                        <item.icon className={`h-6 w-6 ${item.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg bengali-text">{item.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary">{item.type}</Badge>
                          <Badge variant="outline">{item.size}</Badge>
                          <Badge variant="outline">{item.version}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 bengali-text">{item.description}</p>
                  <div className="flex space-x-2">
                    <Button className="islamic-gradient text-white flex-1">
                      <Download className="mr-2 h-4 w-4" />
                      ডাউনলোড
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Media Templates */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 bengali-text text-emerald-700">সোশ্যাল মিডিয়া টেমপ্লেট</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialTemplates.map((template, index) => (
              <Card key={index} className="border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg bengali-text">{template.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 bengali-text">{template.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{template.platform}</Badge>
                    <span className="text-sm text-gray-500">{template.count} টি টেমপ্লেট</span>
                  </div>
                  <Button className="w-full islamic-gradient text-white">
                    <Download className="mr-2 h-4 w-4" />
                    ডাউনলোড প্যাক
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 bengali-text text-emerald-700">বিষয়ভিত্তিক কন্টেন্ট</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2 bengali-text">ইলম (জ্ঞান)</h3>
                <p className="text-sm text-gray-600 mb-4 bengali-text">কুরআন ও হাদিসের জ্ঞান</p>
                <Button variant="outline" size="sm" className="w-full">
                  দেখুন
                </Button>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2 bengali-text">আমল (কর্ম)</h3>
                <p className="text-sm text-gray-600 mb-4 bengali-text">দৈনিক ইবাদত ও আমল</p>
                <Button variant="outline" size="sm" className="w-full">
                  দেখুন
                </Button>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2 bengali-text">তাযকিয়াহ</h3>
                <p className="text-sm text-gray-600 mb-4 bengali-text">আত্মশুদ্ধি ও চরিত্র গঠন</p>
                <Button variant="outline" size="sm" className="w-full">
                  দেখুন
                </Button>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2 bengali-text">দাওয়াহ</h3>
                <p className="text-sm text-gray-600 mb-4 bengali-text">ইসলাম প্রচার ও সেবা</p>
                <Button variant="outline" size="sm" className="w-full">
                  দেখুন
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <Card className="border-emerald-200 bg-gradient-to-r from-emerald-50 to-amber-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 bengali-text islamic-text-gradient">নিয়মিত আপডেট পান</h3>
            <p className="text-gray-600 mb-6 bengali-text">নতুন কন্টেন্ট ও আপডেটের জন্য আমাদের সাথে যুক্ত থাকুন</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="islamic-gradient text-white">নিউজলেটার সাবস্ক্রাইব</Button>
              <Button variant="outline" className="border-emerald-600 text-emerald-600">
                টেলিগ্রাম চ্যানেল
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
