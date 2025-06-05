"use client"

import { useState, useEffect } from "react"
import {
  Download,
  Share2,
  Search,
  Menu,
  Home,
  BookOpen,
  Calendar,
  User,
  Bell,
  Wifi,
  WifiOff,
  Star,
  Play,
  RotateCcw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"

interface DownloadItem {
  id: string
  title: string
  category: string
  size: string
  downloads: number
  rating: number
  thumbnail: string
  description: string
  isDownloaded: boolean
  progress?: number
  isDownloading?: boolean
}

interface AudioContent {
  id: string
  title: string
  duration: string
  isPlaying: boolean
}

export default function MobileApp() {
  const [activeTab, setActiveTab] = useState("home")
  const [isOnline, setIsOnline] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [downloads, setDownloads] = useState<DownloadItem[]>([
    {
      id: "1",
      title: "দৈনিক দুআ সংকলন",
      category: "দুআ",
      size: "2.5 MB",
      downloads: 1250,
      rating: 4.8,
      thumbnail: "/placeholder.svg?height=80&width=80",
      description: "প্রতিদিনের প্রয়োজনীয় দুআসমূহ",
      isDownloaded: true,
    },
    {
      id: "2",
      title: "নামাজের সময়সূচী",
      category: "নামাজ",
      size: "1.8 MB",
      downloads: 980,
      rating: 4.9,
      thumbnail: "/placeholder.svg?height=80&width=80",
      description: "সারা বছরের নামাজের সময়",
      isDownloaded: false,
      isDownloading: false,
    },
    {
      id: "3",
      title: "কুরআন তিলাওয়াত গাইড",
      category: "কুরআন",
      size: "15.2 MB",
      downloads: 2100,
      rating: 4.7,
      thumbnail: "/placeholder.svg?height=80&width=80",
      description: "সঠিক উচ্চারণ ও তাজবীদ",
      isDownloaded: false,
      isDownloading: false,
    },
  ])

  const [audioContent] = useState<AudioContent[]>([
    { id: "1", title: "সূরা আল-ফাতিহা", duration: "2:30", isPlaying: false },
    { id: "2", title: "আয়াতুল কুরসী", duration: "3:15", isPlaying: false },
    { id: "3", title: "সূরা ইখলাস", duration: "1:45", isPlaying: false },
  ])

  const [notifications] = useState([
    { id: "1", title: "নতুন কন্টেন্ট যোগ হয়েছে", time: "২ মিনিট আগে", unread: true },
    { id: "2", title: "আজকের হাদিস", time: "১ ঘন্টা আগে", unread: true },
    { id: "3", title: "নামাজের সময় হয়েছে", time: "৩ ঘন্টা আগে", unread: false },
  ])

  const [user] = useState({
    name: "আব্দুল্লাহ",
    email: "abdullah@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    totalDownloads: 25,
    favoriteCategory: "দুআ",
  })

  // Simulate network status
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(Math.random() > 0.1) // 90% online
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const handleDownload = (id: string) => {
    setDownloads((prev) => prev.map((item) => (item.id === id ? { ...item, isDownloading: true, progress: 0 } : item)))

    // Simulate download progress
    const interval = setInterval(() => {
      setDownloads((prev) =>
        prev.map((item) => {
          if (item.id === id && item.isDownloading) {
            const newProgress = (item.progress || 0) + Math.random() * 20
            if (newProgress >= 100) {
              clearInterval(interval)
              return { ...item, isDownloading: false, isDownloaded: true, progress: 100 }
            }
            return { ...item, progress: newProgress }
          }
          return item
        }),
      )
    }, 500)
  }

  const filteredDownloads = downloads.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg">
              <div>
                <h1 className="text-xl font-bold">আসসালামু আলাইকুম</h1>
                <p className="text-green-100">আজ {new Date().toLocaleDateString("bn-BD")} তারিখ</p>
              </div>
              <div className="flex items-center gap-2">
                {isOnline ? <Wifi className="h-5 w-5" /> : <WifiOff className="h-5 w-5 text-red-300" />}
                <Bell className="h-5 w-5" />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{user.totalDownloads}</div>
                  <div className="text-sm text-gray-600">ডাউনলোড</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">৫</div>
                  <div className="text-sm text-gray-600">অফলাইন কন্টেন্ট</div>
                </CardContent>
              </Card>
            </div>

            {/* Featured Content */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">আজকের বিশেষ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">আজকের হাদিস</h3>
                    <p className="text-sm text-gray-600">সততা ও বিশ্বস্ততার গুরুত্ব</p>
                    <Button size="sm" className="mt-2">
                      পড়ুন
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Audio Player */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">অডিও তিলাওয়াত</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {audioContent.map((audio) => (
                  <div key={audio.id} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                    <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                      <Play className="h-4 w-4" />
                    </Button>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{audio.title}</div>
                      <div className="text-xs text-gray-500">{audio.duration}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )

      case "downloads":
        return (
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="কন্টেন্ট খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Download Items */}
            <div className="space-y-3">
              {filteredDownloads.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <img
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm truncate">{item.title}</h3>
                        <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary" className="text-xs">
                            {item.category}
                          </Badge>
                          <span className="text-xs text-gray-500">{item.size}</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs">{item.rating}</span>
                          </div>
                        </div>

                        {item.isDownloading && (
                          <div className="mt-2">
                            <Progress value={item.progress} className="h-2" />
                            <p className="text-xs text-gray-500 mt-1">
                              ডাউনলোড হচ্ছে... {Math.round(item.progress || 0)}%
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        {item.isDownloaded ? (
                          <Badge className="bg-green-100 text-green-800">ডাউনলোড সম্পন্ন</Badge>
                        ) : (
                          <Button
                            size="sm"
                            onClick={() => handleDownload(item.id)}
                            disabled={item.isDownloading || !isOnline}
                            className="w-20"
                          >
                            {item.isDownloading ? (
                              <RotateCcw className="h-4 w-4 animate-spin" />
                            ) : (
                              <Download className="h-4 w-4" />
                            )}
                          </Button>
                        )}
                        <Button size="sm" variant="outline" className="w-20">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {!isOnline && (
              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="p-4 text-center">
                  <WifiOff className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <p className="text-orange-700">ইন্টারনেট সংযোগ নেই</p>
                  <p className="text-sm text-orange-600">অফলাইন কন্টেন্ট দেখুন</p>
                </CardContent>
              </Card>
            )}
          </div>
        )

      case "calendar":
        return (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>আজকের কার্যক্রম</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-8 bg-blue-500 rounded"></div>
                  <div>
                    <p className="font-medium">ফজর নামাজ</p>
                    <p className="text-sm text-gray-600">৫:১৫ AM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-8 bg-green-500 rounded"></div>
                  <div>
                    <p className="font-medium">কুরআন তিলাওয়াত</p>
                    <p className="text-sm text-gray-600">৬:০০ AM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-2 h-8 bg-purple-500 rounded"></div>
                  <div>
                    <p className="font-medium">যুহর নামাজ</p>
                    <p className="text-sm text-gray-600">১২:৩০ PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>এই সপ্তাহের লক্ষ্য</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>দৈনিক কুরআন পড়া</span>
                  <div className="flex items-center gap-2">
                    <Progress value={70} className="w-20 h-2" />
                    <span className="text-sm">৫/৭</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>হাদিস অধ্যয়ন</span>
                  <div className="flex items-center gap-2">
                    <Progress value={40} className="w-20 h-2" />
                    <span className="text-sm">২/৫</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>দুআ মুখস্থ করা</span>
                  <div className="flex items-center gap-2">
                    <Progress value={100} className="w-20 h-2" />
                    <span className="text-sm">৩/ৃ</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "profile":
        return (
          <div className="space-y-4">
            {/* User Profile */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} />
                    <AvatarFallback>আ</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-lg font-semibold">{user.name}</h2>
                    <p className="text-gray-600">{user.email}</p>
                    <Badge className="mt-1">{user.favoriteCategory} প্রেমী</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>বিজ্ঞপ্তি</span>
                  <Badge variant="secondary">{notifications.filter((n) => n.unread).length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 rounded-lg ${notification.unread ? "bg-blue-50" : "bg-gray-50"}`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-sm">{notification.title}</p>
                        <p className="text-xs text-gray-600">{notification.time}</p>
                      </div>
                      {notification.unread && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Settings */}
            <Card>
              <CardHeader>
                <CardTitle>সেটিংস</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>নামাজের সময় রিমাইন্ডার</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span>অটো ডাউনলোড</span>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span>ডার্ক মোড</span>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span>অফলাইন মোড</span>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            {/* Storage Info */}
            <Card>
              <CardHeader>
                <CardTitle>স্টোরেজ তথ্য</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>ব্যবহৃত স্থান</span>
                    <span>২৫.৮ MB / ১০০ MB</span>
                  </div>
                  <Progress value={26} className="h-2" />
                  <p className="text-xs text-gray-600">৭৪.২ MB খালি আছে</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Status Bar Simulation */}
      <div className="bg-black text-white text-xs p-2 flex justify-between items-center">
        <span>৯:৪১</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-white rounded"></div>
            <div className="w-1 h-3 bg-white rounded"></div>
            <div className="w-1 h-3 bg-gray-500 rounded"></div>
            <div className="w-1 h-3 bg-gray-500 rounded"></div>
          </div>
          <span>৮৫%</span>
        </div>
      </div>

      {/* App Header */}
      <div className="bg-green-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-green-600" />
          </div>
          <h1 className="text-lg font-bold">ইসলামিক দাওয়াহ</h1>
        </div>
        <Menu className="h-6 w-6" />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 pb-20">{renderTabContent()}</div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200">
        <div className="flex items-center justify-around p-2">
          <Button
            variant={activeTab === "home" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("home")}
            className="flex-col h-auto p-2"
          >
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">হোম</span>
          </Button>
          <Button
            variant={activeTab === "downloads" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("downloads")}
            className="flex-col h-auto p-2"
          >
            <Download className="h-5 w-5" />
            <span className="text-xs mt-1">ডাউনলোড</span>
          </Button>
          <Button
            variant={activeTab === "calendar" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("calendar")}
            className="flex-col h-auto p-2"
          >
            <Calendar className="h-5 w-5" />
            <span className="text-xs mt-1">ক্যালেন্ডার</span>
          </Button>
          <Button
            variant={activeTab === "profile" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("profile")}
            className="flex-col h-auto p-2"
          >
            <User className="h-5 w-5" />
            <span className="text-xs mt-1">প্রোফাইল</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
