"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Bell, BellOff, Settings, Clock, BookOpen, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

interface NotificationSetting {
  id: string
  title: string
  description: string
  enabled: boolean
  time?: string
  icon: React.ReactNode
}

export function PushNotifications() {
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>("default")
  const [settings, setSettings] = useState<NotificationSetting[]>([
    {
      id: "prayer",
      title: "নামাজের সময়",
      description: "প্রতিটি নামাজের ১০ মিনিট আগে রিমাইন্ডার",
      enabled: true,
      icon: <Clock className="h-5 w-5 text-blue-500" />,
    },
    {
      id: "daily-hadith",
      title: "দৈনিক হাদিস",
      description: "প্রতিদিন সকাল ৮টায় নতুন হাদিস",
      enabled: true,
      time: "৮:০০ AM",
      icon: <BookOpen className="h-5 w-5 text-green-500" />,
    },
    {
      id: "quran-reminder",
      title: "কুরআন তিলাওয়াত",
      description: "দৈনিক কুরআন পড়ার রিমাইন্ডার",
      enabled: false,
      time: "৯:০০ PM",
      icon: <BookOpen className="h-5 w-5 text-purple-500" />,
    },
    {
      id: "weekly-goals",
      title: "সাপ্তাহিক লক্ষ্য",
      description: "সপ্তাহের শুরুতে লক্ষ্য নির্ধারণের রিমাইন্ডার",
      enabled: true,
      time: "রবিবার ৬:০০ AM",
      icon: <Calendar className="h-5 w-5 text-orange-500" />,
    },
  ])

  useEffect(() => {
    if ("Notification" in window) {
      setNotificationPermission(Notification.permission)
    }
  }, [])

  const requestPermission = async () => {
    if ("Notification" in window) {
      const permission = await Notification.requestPermission()
      setNotificationPermission(permission)

      if (permission === "granted") {
        // Show a test notification
        new Notification("বিজ্ঞপ্তি সক্রিয় হয়েছে!", {
          body: "আপনি এখন ইসলামিক রিমাইন্ডার পাবেন",
          icon: "/icon-192.png",
        })
      }
    }
  }

  const toggleSetting = (id: string) => {
    setSettings((prev) =>
      prev.map((setting) => (setting.id === id ? { ...setting, enabled: !setting.enabled } : setting)),
    )
  }

  const sendTestNotification = (setting: NotificationSetting) => {
    if (notificationPermission === "granted") {
      new Notification(setting.title, {
        body: setting.description,
        icon: "/icon-192.png",
      })
    }
  }

  return (
    <div className="space-y-4">
      {/* Permission Status */}
      <Card
        className={
          notificationPermission === "granted" ? "border-green-200 bg-green-50" : "border-orange-200 bg-orange-50"
        }
      >
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            {notificationPermission === "granted" ? (
              <Bell className="h-6 w-6 text-green-600" />
            ) : (
              <BellOff className="h-6 w-6 text-orange-600" />
            )}
            <div className="flex-1">
              <h3
                className={`font-semibold ${notificationPermission === "granted" ? "text-green-800" : "text-orange-800"}`}
              >
                {notificationPermission === "granted" ? "বিজ্ঞপ্তি সক্রিয় আছে" : "বিজ্ঞপ্তি বন্ধ আছে"}
              </h3>
              <p className={`text-sm ${notificationPermission === "granted" ? "text-green-700" : "text-orange-700"}`}>
                {notificationPermission === "granted" ? "আপনি ইসলামিক রিমাইন্ডার পাবেন" : "রিমাইন্ডার পেতে অনুমতি দিন"}
              </p>
            </div>
            {notificationPermission !== "granted" && (
              <Button onClick={requestPermission} size="sm">
                সক্রিয় করুন
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            বিজ্ঞপ্তি সেটিংস
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {settings.map((setting) => (
            <div key={setting.id} className="flex items-start gap-3 p-3 border rounded-lg">
              <div className="mt-1">{setting.icon}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm">{setting.title}</h3>
                  <Switch
                    checked={setting.enabled}
                    onCheckedChange={() => toggleSetting(setting.id)}
                    disabled={notificationPermission !== "granted"}
                  />
                </div>
                <p className="text-xs text-gray-600 mt-1">{setting.description}</p>
                {setting.time && (
                  <Badge variant="outline" className="mt-2 text-xs">
                    {setting.time}
                  </Badge>
                )}
                {setting.enabled && notificationPermission === "granted" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => sendTestNotification(setting)}
                    className="mt-2 h-6 text-xs"
                  >
                    টেস্ট করুন
                  </Button>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>সাম্প্রতিক বিজ্ঞপ্তি</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
            <Clock className="h-5 w-5 text-blue-500 mt-1" />
            <div>
              <p className="font-medium text-sm">আসরের নামাজের সময় হয়েছে</p>
              <p className="text-xs text-gray-600">৫ মিনিট আগে</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
            <BookOpen className="h-5 w-5 text-green-500 mt-1" />
            <div>
              <p className="font-medium text-sm">আজকের হাদিস</p>
              <p className="text-xs text-gray-600">২ ঘন্টা আগে</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
            <Calendar className="h-5 w-5 text-purple-500 mt-1" />
            <div>
              <p className="font-medium text-sm">সাপ্তাহিক লক্ষ্য পর্যালোচনা</p>
              <p className="text-xs text-gray-600">১ দিন আগে</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>দ্রুত কার্যক্রম</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" className="w-full justify-start">
            <Bell className="h-4 w-4 mr-2" />
            সব বিজ্ঞপ্তি দেখুন
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Settings className="h-4 w-4 mr-2" />
            উন্নত সেটিংস
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <BellOff className="h-4 w-4 mr-2" />
            সব বিজ্ঞপ্তি বন্ধ করুন
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
