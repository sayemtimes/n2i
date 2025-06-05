"use client"

import { useState } from "react"
import { WifiOff, BookOpen, Play, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface OfflineContent {
  id: string
  title: string
  type: "pdf" | "audio" | "video" | "text"
  size: string
  lastAccessed: string
  category: string
}

export function OfflineContent() {
  const [offlineItems] = useState<OfflineContent[]>([
    {
      id: "1",
      title: "দৈনিক দুআ সংকলন",
      type: "pdf",
      size: "2.5 MB",
      lastAccessed: "২ ঘন্টা আগে",
      category: "দুআ",
    },
    {
      id: "2",
      title: "সূরা আল-ফাতিহা তিলাওয়াত",
      type: "audio",
      size: "3.2 MB",
      lastAccessed: "১ দিন আগে",
      category: "তিলাওয়াত",
    },
    {
      id: "3",
      title: "নামাজের নিয়ম",
      type: "video",
      size: "12.8 MB",
      lastAccessed: "৩ দিন আগে",
      category: "নামাজ",
    },
    {
      id: "4",
      title: "আজকের হাদিস",
      type: "text",
      size: "0.5 MB",
      lastAccessed: "৫ ঘন্টা আগে",
      category: "হাদিস",
    },
  ])

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <BookOpen className="h-5 w-5 text-red-500" />
      case "audio":
        return <Play className="h-5 w-5 text-green-500" />
      case "video":
        return <Play className="h-5 w-5 text-blue-500" />
      case "text":
        return <BookOpen className="h-5 w-5 text-purple-500" />
      default:
        return <BookOpen className="h-5 w-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "pdf":
        return "bg-red-100 text-red-800"
      case "audio":
        return "bg-green-100 text-green-800"
      case "video":
        return "bg-blue-100 text-blue-800"
      case "text":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const groupedContent = offlineItems.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push(item)
      return acc
    },
    {} as Record<string, OfflineContent[]>,
  )

  return (
    <div className="space-y-4">
      {/* Offline Status */}
      <Card className="border-orange-200 bg-orange-50">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <WifiOff className="h-6 w-6 text-orange-600" />
            <div>
              <h3 className="font-semibold text-orange-800">অফলাইন মোড</h3>
              <p className="text-sm text-orange-700">ইন্টারনেট ছাড়াই কন্টেন্ট উপভোগ করুন</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content by Category */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">সব</TabsTrigger>
          <TabsTrigger value="recent">সাম্প্রতিক</TabsTrigger>
          <TabsTrigger value="favorites">পছন্দের</TabsTrigger>
          <TabsTrigger value="categories">বিভাগ</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-3 mt-4">
          {offlineItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1">{getTypeIcon(item.type)}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm truncate">{item.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className={getTypeColor(item.type)}>{item.type.toUpperCase()}</Badge>
                      <Badge variant="outline">{item.category}</Badge>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
                      <span>{item.size}</span>
                      <span>শেষ দেখা: {item.lastAccessed}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    খুলুন
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="recent" className="space-y-3 mt-4">
          {offlineItems
            .sort((a, b) => a.lastAccessed.localeCompare(b.lastAccessed))
            .slice(0, 3)
            .map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    {getTypeIcon(item.type)}
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{item.title}</h3>
                      <p className="text-xs text-gray-600">{item.lastAccessed}</p>
                    </div>
                    <Button size="sm">খুলুন</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="favorites" className="space-y-3 mt-4">
          <Card>
            <CardContent className="p-8 text-center">
              <Star className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600">কোনো পছন্দের কন্টেন্ট নেই</p>
              <p className="text-sm text-gray-500 mt-1">কন্টেন্ট পছন্দের তালিকায় যোগ করুন</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories" className="space-y-3 mt-4">
          {Object.entries(groupedContent).map(([category, items]) => (
            <Card key={category}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center justify-between">
                  {category}
                  <Badge variant="secondary">{items.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-2">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                    {getTypeIcon(item.type)}
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.title}</p>
                      <p className="text-xs text-gray-600">{item.size}</p>
                    </div>
                    <Button size="sm" variant="ghost">
                      খুলুন
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Storage Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">অফলাইন স্টোরেজ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>ব্যবহৃত স্থান</span>
              <span>১৮.৫ MB</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>মোট ফাইল</span>
              <span>{offlineItems.length}টি</span>
            </div>
            <Button variant="outline" className="w-full mt-3">
              ক্যাশ পরিষ্কার করুন
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
