"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Facebook, Youtube, Instagram } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert("আপনার বার্তা সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।")
      setFormData({ name: "", email: "", subject: "", category: "", message: "" })
    }, 2000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bengali-text islamic-text-gradient">যোগাযোগ করুন</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto bengali-text">
            আপনার যেকোনো প্রশ্ন, পরামর্শ বা সহযোগিতার জন্য আমাদের সাথে যোগাযোগ করুন। আমরা আপনার সেবায় নিয়োজিত।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-emerald-200">
              <CardHeader className="bg-emerald-50">
                <CardTitle className="bengali-text text-emerald-700">বার্তা পাঠান</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="bengali-text">
                        নাম *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="আপনার পূর্ণ নাম"
                        className="bengali-text"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="bengali-text">
                        ইমেইল *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="আপনার ইমেইল ঠিকানা"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category" className="bengali-text">
                        বিষয়ের ধরন
                      </Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="বিষয় নির্বাচন করুন" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">সাধারণ প্রশ্ন</SelectItem>
                          <SelectItem value="technical">প্রযুক্তিগত সহায়তা</SelectItem>
                          <SelectItem value="content">কন্টেন্ট সংক্রান্ত</SelectItem>
                          <SelectItem value="collaboration">সহযোগিতার প্রস্তাব</SelectItem>
                          <SelectItem value="feedback">মতামত ও পরামর্শ</SelectItem>
                          <SelectItem value="islamic">ইসলামিক প্রশ্ন</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="subject" className="bengali-text">
                        বিষয় *
                      </Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="বার্তার বিষয়"
                        className="bengali-text"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="bengali-text">
                      বার্তা *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="আপনার বিস্তারিত বার্তা লিখুন..."
                      className="min-h-[120px] bengali-text"
                      required
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full islamic-gradient text-white">
                    {isSubmitting ? (
                      "পাঠানো হচ্ছে..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        বার্তা পাঠান
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="border-emerald-200">
              <CardHeader className="bg-emerald-50">
                <CardTitle className="bengali-text text-emerald-700">যোগাযোগের তথ্য</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium">ইমেইল</p>
                    <p className="text-sm text-gray-600">info@ilmtoikhlas.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium bengali-text">ফোন</p>
                    <p className="text-sm text-gray-600">+880 1XXX-XXXXXX</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium bengali-text">ঠিকানা</p>
                    <p className="text-sm text-gray-600 bengali-text">ঢাকা, বাংলাদেশ</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium bengali-text">কার্যসময়</p>
                    <p className="text-sm text-gray-600 bengali-text">রবি - বৃহস্পতি: ৯:০০ - ১৮:০০</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-emerald-200">
              <CardHeader className="bg-emerald-50">
                <CardTitle className="bengali-text text-emerald-700">সামাজিক মাধ্যম</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-blue-600" />
                    <span className="bengali-text">ফেসবুক পেজ</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors"
                  >
                    <Youtube className="h-5 w-5 text-red-600" />
                    <span className="bengali-text">ইউটিউব চ্যানেল</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-purple-600" />
                    <span className="bengali-text">ইনস্টাগ্রাম</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 text-green-600" />
                    <span className="bengali-text">টেলিগ্রাম চ্যানেল</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="bengali-text text-amber-700">প্রায়শই জিজ্ঞাসিত প্রশ্ন</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium bengali-text">প্রশ্ন: এই প্ল্যাটফর্ম কি বিনামূল্যে?</p>
                    <p className="text-gray-600 bengali-text">উত্তর: হ্যাঁ, সম্পূর্ণ বিনামূল্যে।</p>
                  </div>
                  <div>
                    <p className="font-medium bengali-text">প্রশ্ন: AI সহায়ক কতটা নির্ভরযোগ্য?</p>
                    <p className="text-gray-600 bengali-text">উত্তর: কুরআন ও হাদিস ভিত্তিক, তবে আলেমদের পরামর্শ নিন।</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
