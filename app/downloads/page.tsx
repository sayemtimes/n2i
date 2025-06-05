"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import {
  Download,
  FileText,
  Share2,
  Calendar,
  BookOpen,
  Heart,
  Users,
  Mail,
  Star,
  Eye,
  MessageCircle,
} from "lucide-react"

export default function DownloadsPage() {
  const [downloadCounts, setDownloadCounts] = useState<{ [key: number]: number }>({
    1: 1247,
    2: 892,
    3: 634,
    4: 445,
  })
  const [email, setEmail] = useState("")
  const [feedback, setFeedback] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const { toast } = useToast()

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
      downloadUrl: "/downloads/complete-4-month-guide.pdf",
      previewUrl: "/previews/complete-guide-preview.jpg",
      rating: 4.9,
      reviews: 156,
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
      downloadUrl: "/downloads/month-1-foundation.pdf",
      previewUrl: "/previews/month-1-preview.jpg",
      rating: 4.8,
      reviews: 89,
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
      downloadUrl: "/downloads/daily-checklist.pdf",
      previewUrl: "/previews/checklist-preview.jpg",
      rating: 4.7,
      reviews: 67,
    },
    {
      id: 4,
      title: "ইসলামিক কোট পোস্টার",
      description: "সোশ্যাল মিডিয়ার জন্য অনুপ্রেরণামূলক পোস্টার",
      type: "ZIP",
      size: "1.2 MB",
      version: "v1.0",
      icon: FileText,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      downloadUrl: "/downloads/islamic-quote-posters.zip",
      previewUrl: "/previews/posters-preview.jpg",
      rating: 4.6,
      reviews: 43,
    },
  ]

  const socialTemplates = [
    {
      title: "ফেসবুক পোস্ট টেমপ্লেট",
      description: "দাওয়াহর জন্য প্রস্তুত ফেসবুক পোস্ট",
      platform: "Facebook",
      count: 20,
      downloadUrl: "/downloads/facebook-templates.zip",
      previewImages: ["/previews/fb-1.jpg", "/previews/fb-2.jpg", "/previews/fb-3.jpg"],
    },
    {
      title: "ইনস্টাগ্রাম স্টোরি",
      description: "আকর্ষণীয় ইসলামিক স্টোরি টেমপ্লেট",
      platform: "Instagram",
      count: 15,
      downloadUrl: "/downloads/instagram-stories.zip",
      previewImages: ["/previews/ig-1.jpg", "/previews/ig-2.jpg", "/previews/ig-3.jpg"],
    },
    {
      title: "হোয়াটসঅ্যাপ স্ট্যাটাস",
      description: "দৈনিক শেয়ারের জন্য ছোট বার্তা",
      platform: "WhatsApp",
      count: 30,
      downloadUrl: "/downloads/whatsapp-status.zip",
      previewImages: ["/previews/wa-1.jpg", "/previews/wa-2.jpg", "/previews/wa-3.jpg"],
    },
  ]

  const categories = [
    {
      id: "ilm",
      title: "ইলম (জ্ঞান)",
      description: "কুরআন ও হাদিসের জ্ঞান",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      items: [
        { title: "কুরআন তিলাওয়াত গাইড", type: "PDF", size: "1.2 MB" },
        { title: "হাদিস সংকলন", type: "PDF", size: "3.1 MB" },
        { title: "ইসলামিক ইতিহাস", type: "PDF", size: "2.8 MB" },
        { title: "ফিকহ মাসায়েল", type: "PDF", size: "1.9 MB" },
      ],
    },
    {
      id: "amal",
      title: "আমল (কর্ম)",
      description: "দৈনিক ইবাদত ও আমল",
      icon: Calendar,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      items: [
        { title: "নামাজের দোয়া সমূহ", type: "PDF", size: "800 KB" },
        { title: "যিকির ও তাসবিহ", type: "PDF", size: "600 KB" },
        { title: "দৈনিক আমল চার্ট", type: "PDF", size: "400 KB" },
        { title: "রমজান গাইড", type: "PDF", size: "1.5 MB" },
      ],
    },
    {
      id: "tazkiyah",
      title: "তাযকিয়াহ",
      description: "আত্মশুদ্ধি ও চরিত্র গঠন",
      icon: Heart,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      items: [
        { title: "আত্মশুদ্ধির পথ", type: "PDF", size: "1.7 MB" },
        { title: "চরিত্র গঠন গাইড", type: "PDF", size: "1.3 MB" },
        { title: "তওবার আদব", type: "PDF", size: "900 KB" },
        { title: "আধ্যাত্মিক উন্নতি", type: "PDF", size: "2.1 MB" },
      ],
    },
    {
      id: "dawah",
      title: "দাওয়াহ",
      description: "ইসলাম প্রচার ও সেবা",
      icon: Users,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      items: [
        { title: "দাওয়াহর কৌশল", type: "PDF", size: "1.4 MB" },
        { title: "অমুসলিমদের সাথে কথোপকথন", type: "PDF", size: "1.8 MB" },
        { title: "সামাজিক সেবা গাইড", type: "PDF", size: "1.1 MB" },
        { title: "কমিউনিটি বিল্ডিং", type: "PDF", size: "1.6 MB" },
      ],
    },
  ]

  const handleDownload = async (item: any) => {
    try {
      // Simulate download process
      toast({
        title: "ডাউনলোড শুরু হয়েছে",
        description: `${item.title} ডাউনলোড হচ্ছে...`,
      })

      // Update download count
      setDownloadCounts((prev) => ({
        ...prev,
        [item.id]: (prev[item.id] || 0) + 1,
      }))

      // Simulate file download
      setTimeout(() => {
        const link = document.createElement("a")
        link.href = item.downloadUrl || "#"
        link.download = item.title
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        toast({
          title: "ডাউনলোড সম্পূর্ণ",
          description: `${item.title} সফলভাবে ডাউনলোড হয়েছে!`,
        })
      }, 2000)
    } catch (error) {
      toast({
        title: "ত্রুটি",
        description: "ডাউনলোড করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।",
        variant: "destructive",
      })
    }
  }

  const handleShare = async (item: any) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: item.title,
          text: item.description,
          url: window.location.href,
        })
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href)
        toast({
          title: "লিংক কপি হয়েছে",
          description: "লিংকটি ক্লিপবোর্ডে কপি করা হয়েছে।",
        })
      }
    } catch (error) {
      console.error("Error sharing:", error)
    }
  }

  const handleNewsletterSubscribe = async () => {
    if (!email) {
      toast({
        title: "ইমেইল প্রয়োজন",
        description: "অনুগ্রহ করে আপনার ইমেইল ঠিকানা দিন।",
        variant: "destructive",
      })
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "সাবস্ক্রিপশন সফল!",
        description: "আপনি সফলভাবে নিউজলেটার সাবস্ক্রাইব করেছেন।",
      })
      setEmail("")
    } catch (error) {
      toast({
        title: "ত্রুটি",
        description: "সাবস্ক্রিপশনে সমস্যা হয়েছে। আবার চেষ্টা করুন।",
        variant: "destructive",
      })
    }
  }

  const handleFeedbackSubmit = async () => {
    if (!feedback.trim()) {
      toast({
        title: "ফিডব্যাক প্রয়োজন",
        description: "অনুগ্রহ করে আপনার মতামত লিখুন।",
        variant: "destructive",
      })
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "ফিডব্যাক পাঠানো হয়েছে!",
        description: "আপনার মূল্যবান মতামতের জন্য ধন্যবাদ।",
      })
      setFeedback("")
    } catch (error) {
      toast({
        title: "ত্রুটি",
        description: "ফিডব্যাক পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bengali-text islamic-text-gradient">ডাউনলোড ও শেয়ার</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto bengali-text">
            বিনামূল্যে PDF, ইমেজ এবং সোশ্যাল মিডিয়া কন্টেন্ট ডাউনলোড করুন
          </p>
          <div className="mt-6 flex justify-center space-x-4 text-sm text-gray-500">
            <span>✅ সম্পূর্ণ বিনামূল্যে</span>
            <span>✅ নিয়মিত আপডেট</span>
            <span>✅ উচ্চ মানের কন্টেন্ট</span>
          </div>
        </div>

        {/* Main Downloads */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 bengali-text text-emerald-700">মূল ডাউনলোড ফাইল</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloads.map((item) => (
              <Card
                key={item.id}
                className="border-emerald-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
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
                        <div className="flex items-center space-x-2 mt-2">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600 ml-1">{item.rating}</span>
                          </div>
                          <span className="text-sm text-gray-500">({item.reviews} রিভিউ)</span>
                          <span className="text-sm text-gray-500">• {downloadCounts[item.id]} ডাউনলোড</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 bengali-text">{item.description}</p>

                  {/* Preview Button */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="mb-4 w-full">
                        <Eye className="mr-2 h-4 w-4" />
                        প্রিভিউ দেখুন
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="bengali-text">{item.title}</DialogTitle>
                        <DialogDescription className="bengali-text">{item.description}</DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <img
                          src={item.previewUrl || "/placeholder.svg"}
                          alt={`${item.title} preview`}
                          className="w-full h-64 object-cover rounded-lg bg-gray-100"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg?height=256&width=400"
                          }}
                        />
                      </div>
                    </DialogContent>
                  </Dialog>

                  <div className="flex space-x-2">
                    <Button className="islamic-gradient text-white flex-1" onClick={() => handleDownload(item)}>
                      <Download className="mr-2 h-4 w-4" />
                      ডাউনলোড
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => handleShare(item)}>
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
              <Card key={index} className="border-emerald-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg bengali-text">{template.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 bengali-text">{template.description}</p>

                  {/* Preview Images */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {template.previewImages.map((img, idx) => (
                      <img
                        key={idx}
                        src={img || "/placeholder.svg"}
                        alt={`${template.platform} template ${idx + 1}`}
                        className="w-full h-16 object-cover rounded bg-gray-100"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=64&width=64"
                        }}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{template.platform}</Badge>
                    <span className="text-sm text-gray-500">{template.count} টি টেমপ্লেট</span>
                  </div>

                  <Button
                    className="w-full islamic-gradient text-white"
                    onClick={() => handleDownload({ ...template, id: index + 100 })}
                  >
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
            {categories.map((category) => (
              <Dialog key={category.id}>
                <DialogTrigger asChild>
                  <Card
                    className={`border-${category.color.split("-")[1]}-200 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105`}
                  >
                    <CardContent className="p-6 text-center">
                      <category.icon className={`h-12 w-12 ${category.color} mx-auto mb-4`} />
                      <h3 className="font-bold mb-2 bengali-text">{category.title}</h3>
                      <p className="text-sm text-gray-600 mb-4 bengali-text">{category.description}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        দেখুন ({category.items.length} টি ফাইল)
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="bengali-text flex items-center">
                      <category.icon className={`h-5 w-5 ${category.color} mr-2`} />
                      {category.title}
                    </DialogTitle>
                    <DialogDescription className="bengali-text">{category.description}</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-3 mt-4">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium bengali-text text-sm">{item.title}</h4>
                          <div className="flex space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {item.type}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {item.size}
                            </Badge>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="islamic-gradient text-white"
                          onClick={() =>
                            handleDownload({
                              ...item,
                              id: `${category.id}-${idx}`,
                              downloadUrl: `/downloads/${category.id}/${item.title.toLowerCase().replace(/\s+/g, "-")}.pdf`,
                            })
                          }
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

        {/* Feedback Section */}
        <Card className="mb-12 border-emerald-200">
          <CardHeader>
            <CardTitle className="bengali-text text-emerald-700">আপনার মতামত জানান</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Textarea
                placeholder="আমাদের কন্টেন্ট সম্পর্কে আপনার মতামত লিখুন..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="bengali-text"
              />
              <Button onClick={handleFeedbackSubmit} className="islamic-gradient text-white">
                <MessageCircle className="mr-2 h-4 w-4" />
                ফিডব্যাক পাঠান
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Newsletter CTA */}
        <Card className="border-emerald-200 bg-gradient-to-r from-emerald-50 to-amber-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 bengali-text islamic-text-gradient">নিয়মিত আপডেট পান</h3>
            <p className="text-gray-600 mb-6 bengali-text">নতুন কন্টেন্ট ও আপডেটের জন্য আমাদের সাথে যুক্ত থাকুন</p>

            <div className="max-w-md mx-auto mb-6">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="আপনার ইমেইল ঠিকানা"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bengali-text"
                />
                <Button onClick={handleNewsletterSubscribe} className="islamic-gradient text-white">
                  <Mail className="mr-2 h-4 w-4" />
                  সাবস্ক্রাইব
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-emerald-600 text-emerald-600">
                টেলিগ্রাম চ্যানেল
              </Button>
              <Button variant="outline" className="border-emerald-600 text-emerald-600">
                ফেসবুক গ্রুপ
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-emerald-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">5,247</div>
                <div className="text-sm text-gray-600 bengali-text">মোট ডাউনলোড</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">1,892</div>
                <div className="text-sm text-gray-600 bengali-text">সক্রিয় ব্যবহারকারী</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">4.8</div>
                <div className="text-sm text-gray-600 bengali-text">গড় রেটিং</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
