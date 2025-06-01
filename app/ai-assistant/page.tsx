"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Send, Bot, User, BookOpen, Heart, Clock, Lightbulb, Mic, Copy, ThumbsUp, ThumbsDown } from "lucide-react"

interface Message {
  id: number
  type: "user" | "bot"
  content: string
  timestamp: Date
  category?: string
  sources?: string[]
}

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      content:
        "আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহি ওয়া বারাকাতুহু! আমি আপনার ইসলামিক AI সহায়ক। আমি কুরআন ও সহিহ হাদিসের আলোকে আপনার প্রশ্নের উত্তর দিতে পারি। আপনার যেকোনো ইসলামিক প্রশ্ন করুন।",
      timestamp: new Date(),
      category: "greeting",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [language, setLanguage] = useState<"bn" | "en">("bn")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickQuestions = [
    {
      question: "নামাজের সময়সূচী কী?",
      category: "ইবাদত",
      icon: "🕌",
    },
    {
      question: "যাকাতের নিসাব কত?",
      category: "ইবাদত",
      icon: "💰",
    },
    {
      question: "রোজার নিয়ম কী?",
      category: "ইবাদত",
      icon: "🌙",
    },
    {
      question: "হজের ফরজ কয়টি?",
      category: "ইবাদত",
      icon: "🕋",
    },
    {
      question: "দোয়া কুনুত কী?",
      category: "দোয়া",
      icon: "🤲",
    },
    {
      question: "তওবার শর্ত কী?",
      category: "আত্মশুদ্ধি",
      icon: "💚",
    },
    {
      question: "ইসলামে ব্যবসার নিয়ম কী?",
      category: "মুয়ামালাত",
      icon: "🏪",
    },
    {
      question: "পিতা-মাতার হক কী?",
      category: "পারিবারিক",
      icon: "👨‍👩‍👧‍👦",
    },
  ]

  const islamicResponses = {
    "নামাজের সময়সূচী কী?": {
      content: `নামাজের সময়সূচী নিম্নরূপ:

**১. ফজর:** সুবহে সাদিক থেকে সূর্যোদয়ের আগ পর্যন্ত
**২. যোহর:** সূর্য পশ্চিমে ঢলে পড়ার পর থেকে আসর পর্যন্ত  
**৩. আসর:** যোহরের ওয়াক্ত শেষ হওয়ার পর থেকে সূর্যাস্ত পর্যন্ত
**৪. মাগরিব:** সূর্যাস্তের পর থেকে শফক (লাল আভা) অদৃশ্য হওয়া পর্যন্ত
**৫. ইশা:** মাগরিবের ওয়াক্ত শেষ হওয়ার পর থেকে সুবহে সাদিক পর্যন্ত

**হাদিস:** "নামাজ নির্দিষ্ট সময়ে মুমিনদের উপর ফরজ।" (সূরা নিসা: ১০৩)`,
      sources: ["সূরা নিসা: ১০৩", "সহিহ বুখারী", "সহিহ মুসলিম"],
      category: "ইবাদত",
    },
    "যাকাতের নিসাব কত?": {
      content: `যাকাতের নিসাব:

**স্বর্ণ:** ৮৭.৪৮ গ্রাম (৭.৫ তোলা)
**রৌপ্য:** ৬১২.৩৬ গ্রাম (৫২.৫ তোলা)  
**নগদ অর্থ:** রৌপ্যের নিসাব অনুযায়ী
**ব্যবসায়িক পণ্য:** রৌপ্যের নিসাব অনুযায়ী

**শর্তাবলী:**
- পূর্ণ এক বছর অতিক্রম করতে হবে
- নিসাব পরিমাণ সম্পদ থাকতে হবে
- মৌলিক প্রয়োজন মেটানোর পর অতিরিক্ত হতে হবে

**যাকাতের হার:** ২.৫% (৪০ ভাগের ১ ভাগ)

**আয়াত:** "আর তোমরা যাকাত প্রদান করো।" (সূরা বাকারা: ৪৩)`,
      sources: ["সূরা বাকারা: ৪৩", "সহিহ বুখারী", "আবু দাউদ"],
      category: "ইবাদত",
    },
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response with Islamic knowledge
    setTimeout(() => {
      const response = islamicResponses[input as keyof typeof islamicResponses]

      const botMessage: Message = {
        id: messages.length + 2,
        type: "bot",
        content: response
          ? response.content
          : `আপনার প্রশ্ন "${input}" এর উত্তর:

এটি একটি গুরুত্বপূর্ণ ইসলামিক বিষয়। কুরআন ও হাদিসের আলোকে এর বিস্তারিত ব্যাখ্যা রয়েছে। 

**সাধারণ নির্দেশনা:**
- কুরআন ও সহিহ হাদিস অনুসরণ করুন
- নির্ভরযোগ্য আলেমদের পরামর্শ নিন  
- নিয়মিত ইসলামিক জ্ঞান অর্জন করুন

**দোয়া:** رَبِّ زِدْنِي عِلْمًا (হে আমার রব! আমার জ্ঞান বৃদ্ধি করুন)

আরও নির্দিষ্ট তথ্যের জন্য অভিজ্ঞ আলেমদের সাথে পরামর্শ করুন।`,
        timestamp: new Date(),
        category: response?.category || "সাধারণ",
        sources: response?.sources || ["কুরআন", "সহিহ হাদিস"],
      }
      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleQuickQuestion = (question: string) => {
    setInput(question)
  }

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bengali-text islamic-text-gradient">ইসলামিক AI সহায়ক</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto bengali-text">
            কুরআন ও হাদিসের আলোকে আপনার প্রশ্নের উত্তর পান। ২৪/৭ উপলব্ধ ইসলামিক জ্ঞানের ভাণ্ডার।
          </p>
          <div className="flex justify-center mt-4">
            <div className="flex items-center space-x-2">
              <Button variant={language === "bn" ? "default" : "outline"} size="sm" onClick={() => setLanguage("bn")}>
                বাংলা
              </Button>
              <Button variant={language === "en" ? "default" : "outline"} size="sm" onClick={() => setLanguage("en")}>
                English
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="border-emerald-200 h-[700px] flex flex-col">
              <CardHeader className="border-b bg-gradient-to-r from-emerald-50 to-amber-50">
                <CardTitle className="flex items-center bengali-text">
                  <Bot className="mr-2 h-5 w-5 text-emerald-600" />
                  AI ইসলামিক চ্যাট
                  <Badge variant="secondary" className="ml-2">
                    অনলাইন
                  </Badge>
                </CardTitle>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`flex items-start space-x-2 max-w-[85%] ${message.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                    >
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarFallback
                          className={message.type === "user" ? "bg-blue-500 text-white" : "islamic-gradient text-white"}
                        >
                          {message.type === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`rounded-lg p-4 ${
                          message.type === "user"
                            ? "bg-blue-500 text-white"
                            : "bg-white border border-emerald-200 text-gray-800"
                        }`}
                      >
                        <div className="whitespace-pre-wrap text-sm bengali-text leading-relaxed">
                          {message.content}
                        </div>

                        {message.sources && (
                          <div className="mt-3 pt-3 border-t border-emerald-100">
                            <p className="text-xs text-emerald-600 font-medium mb-1">📚 সূত্র:</p>
                            <div className="flex flex-wrap gap-1">
                              {message.sources.map((source, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {source}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-between mt-3 pt-2 border-t border-emerald-100">
                          <p className="text-xs opacity-70">{message.timestamp.toLocaleTimeString("bn-BD")}</p>
                          {message.type === "bot" && (
                            <div className="flex items-center space-x-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyMessage(message.content)}
                                className="h-6 w-6 p-0"
                              >
                                <Copy className="h-3 w-3" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                <ThumbsUp className="h-3 w-3" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                <ThumbsDown className="h-3 w-3" />
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="islamic-gradient text-white">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-white border border-emerald-200 rounded-lg p-4">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>

              {/* Input */}
              <div className="border-t p-4 bg-gray-50">
                <div className="flex space-x-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="আপনার ইসলামিক প্রশ্ন লিখুন..."
                    className="flex-1 bengali-text"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button variant="outline" size="icon">
                    <Mic className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isLoading}
                    className="islamic-gradient text-white"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Questions */}
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center bengali-text">
                  <Lightbulb className="mr-2 h-5 w-5 text-amber-600" />
                  দ্রুত প্রশ্ন
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {quickQuestions.map((item, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full text-left justify-start h-auto p-3 bengali-text"
                    onClick={() => handleQuickQuestion(item.question)}
                  >
                    <span className="mr-2">{item.icon}</span>
                    <div className="text-left">
                      <div className="font-medium">{item.question}</div>
                      <div className="text-xs text-gray-500">{item.category}</div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle className="bengali-text">বৈশিষ্ট্য</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm bengali-text">কুরআন ও হাদিস ভিত্তিক</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span className="text-sm bengali-text">আধ্যাত্মিক গাইডেন্স</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span className="text-sm bengali-text">২৪/৭ উপলব্ধ</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lightbulb className="h-4 w-4 text-amber-500" />
                  <span className="text-sm bengali-text">স্মার্ট উত্তর</span>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle className="bengali-text">বিষয়সমূহ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { name: "ইবাদত", icon: "🕌", count: 45 },
                  { name: "আকিদা", icon: "💚", count: 32 },
                  { name: "মুয়ামালাত", icon: "🏪", count: 28 },
                  { name: "পারিবারিক", icon: "👨‍👩‍👧‍👦", count: 24 },
                  { name: "আত্মশুদ্ধি", icon: "✨", count: 38 },
                ].map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-emerald-50">
                    <div className="flex items-center space-x-2">
                      <span>{category.icon}</span>
                      <span className="text-sm bengali-text">{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="p-4">
                <p className="text-sm text-amber-800 bengali-text">
                  <strong>দ্রষ্টব্য:</strong> এই AI সহায়ক শুধুমাত্র প্রাথমিক গাইডেন্সের জন্য। গুরুত্বপূর্ণ ধর্মীয় বিষয়ে অভিজ্ঞ আলেমদের সাথে
                  পরামর্শ করুন।
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
