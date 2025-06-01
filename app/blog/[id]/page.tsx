"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, User, Eye, Heart, MessageCircle, Share2, ArrowLeft, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock blog post data
const blogPosts = [
  {
    id: "1",
    title: "ইখলাস: ইবাদতের প্রাণশক্তি",
    excerpt: "ইখলাস ছাড়া কোনো আমল আল্লাহর কাছে গ্রহণযোগ্য নয়। জানুন কীভাবে আপনার ইবাদতে ইখলাস আনবেন।",
    content: `
      <p class="mb-4">ইখলাস হলো ইবাদতের প্রাণশক্তি। এটি ছাড়া যত বড় আমলই করা হোক না কেন, তা আল্লাহর কাছে গ্রহণযোগ্য হয় না। আল্লাহ তা'আলা বলেন:</p>
      
      <blockquote class="arabic-text text-xl my-6 text-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ</blockquote>
      
      <p class="mb-4 text-center italic text-gray-600">"তাদেরকে কেবল এই নির্দেশ দেওয়া হয়েছিল যে, তারা যেন আল্লাহর ইবাদত করে তাঁর জন্য দ্বীনকে একনিষ্ঠ করে।" (সূরা বাইয়্যিনাহ: ৫)</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">ইখলাস কী?</h2>
      
      <p class="mb-4">ইখলাস হলো আল্লাহর সন্তুষ্টি ছাড়া অন্য কোনো উদ্দেশ্য না রেখে কেবল তাঁর জন্যই আমল করা। এটি হলো অন্তরের এমন একটি অবস্থা যেখানে মানুষের প্রশংসা, সম্মান বা অন্য কোনো পার্থিব লাভের আশা না রেখে শুধুমাত্র আল্লাহর সন্তুষ্টির জন্য কাজ করা হয়।</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">ইখলাসের গুরুত্ব</h2>
      
      <p class="mb-4">রাসূলুল্লাহ (সা.) বলেছেন: "নিশ্চয়ই আমলসমূহ নিয়তের উপর নির্ভরশীল, আর প্রত্যেক ব্যক্তি তার নিয়ত অনুযায়ী ফল পাবে।" (বুখারী ও মুসলিম)</p>
      
      <p class="mb-4">এই হাদিস থেকে আমরা বুঝতে পারি যে, আমলের গ্রহণযোগ্যতা নির্ভর করে নিয়তের উপর। যদি নিয়ত শুদ্ধ না হয়, তবে আমল যত বড়ই হোক না কেন, তা আল্লাহর কাছে গ্রহণযোগ্য হবে না।</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">ইখলাস অর্জনের উপায়</h2>
      
      <ol class="list-decimal pl-6 space-y-3 mb-6">
        <li class="text-gray-700">আল্লাহর সর্বব্যাপী উপস্থিতি সম্পর্কে সচেতন থাকা</li>
        <li class="text-gray-700">আখিরাতের জবাবদিহিতা সম্পর্কে চিন্তা করা</li>
        <li class="text-gray-700">লোক দেখানো আমল থেকে বিরত থাকা</li>
        <li class="text-gray-700">নিজের আমলকে ছোট মনে করা</li>
        <li class="text-gray-700">আল্লাহর কাছে ইখলাসের জন্য দোয়া করা</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">রিয়া (লোক দেখানো) থেকে সাবধান</h2>
      
      <p class="mb-4">রিয়া হলো ইখলাসের বিপরীত। এটি হলো মানুষকে দেখানোর জন্য আমল করা। রাসূলুল্লাহ (সা.) এটিকে "ছোট শিরক" বলে আখ্যায়িত করেছেন। তিনি বলেছেন: "আমি তোমাদের জন্য যা সবচেয়ে বেশি ভয় করি তা হলো ছোট শিরক।" সাহাবীরা জিজ্ঞাসা করলেন, "হে আল্লাহর রাসূল, ছোট শিরক কী?" তিনি বললেন, "রিয়া (লোক দেখানো)।" (আহমাদ)</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">উপসংহার</h2>
      
      <p class="mb-4">ইখলাস অর্জন করা একটি চলমান প্রক্রিয়া। এটি একদিনে অর্জন করা যায় না। এর জন্য প্রয়োজন নিরন্তর চেষ্টা, আত্মসমালোচনা এবং আল্লাহর সাহায্য। আমাদের উচিত প্রতিদিন নিজেদের নিয়ত পরীক্ষা করা এবং আল্লাহর কাছে ইখলাসের জন্য দোয়া করা।</p>
      
      <p class="mb-4">আল্লাহ তা'আলা আমাদের সবাইকে ইখলাসের সাথে তাঁর ইবাদত করার তাওফিক দান করুন। আমীন।</p>
    `,
    author: "মুফতি আবদুল্লাহ",
    authorImage: "/placeholder.svg?height=50&width=50",
    date: "২০২৪-০১-১৫",
    readTime: "৮ মিনিট",
    category: "আত্মশুদ্ধি",
    tags: ["ইখলাস", "ইবাদত", "তাকওয়া"],
    image: "/placeholder.svg?height=600&width=1200",
    views: 1250,
    likes: 89,
    comments: 23,
    relatedPosts: ["2", "5", "7"],
  },
  // Add more blog posts here...
]

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(0)

  // Find the blog post by ID
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">পোস্ট পাওয়া যায়নি</h1>
          <p className="text-gray-600 mb-8">আপনি যে পোস্টটি খুঁজছেন তা পাওয়া যায়নি।</p>
          <Link href="/blog">
            <Button className="islamic-gradient text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              ব্লগে ফিরে যান
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  const relatedPosts = blogPosts.filter((p) => post.relatedPosts?.includes(p.id))

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/blog">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              ব্লগে ফিরে যান
            </Button>
          </Link>
        </div>

        {/* Main Article */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Featured Image */}
          <div className="relative h-64 md:h-96">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            <div className="absolute top-4 left-4">
              <Badge className="islamic-gradient text-white">{post.category}</Badge>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-8">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4 bengali-text leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span className="bengali-text">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span className="bengali-text">{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                <span>{post.views}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-emerald-600 border-emerald-600">
                  {tag}
                </Badge>
              ))}
            </div>

            <Separator className="mb-6" />

            {/* Article Body */}
            <div
              className="prose prose-lg max-w-none bengali-text leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <Separator className="my-8" />

            {/* Engagement Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  variant={isLiked ? "default" : "outline"}
                  onClick={handleLike}
                  className={isLiked ? "islamic-gradient text-white" : ""}
                >
                  <Heart className={`mr-2 h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                  {post.likes + likes}
                </Button>
                <Button variant="outline">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {post.comments}
                </Button>
              </div>
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                শেয়ার করুন
              </Button>
            </div>
          </div>
        </article>

        {/* Author Info */}
        <Card className="mt-8 border-emerald-200">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={post.authorImage || "/placeholder.svg"} alt={post.author} />
                <AvatarFallback className="islamic-gradient text-white text-lg">{post.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-bold text-emerald-700 bengali-text">{post.author}</h3>
                <p className="text-gray-600 bengali-text">ইসলামিক স্কলার ও লেখক</p>
                <p className="text-sm text-gray-500 mt-2 bengali-text">
                  ইসলামিক বিষয়ে গবেষণা ও লেখালেখিতে নিয়োজিত। কুরআন ও হাদিসের আলোকে জীবনযাত্রার বিভিন্ন দিক নিয়ে কাজ করেন।
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-emerald-700 mb-6 bengali-text">সম্পর্কিত পোস্ট</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="border-emerald-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-3 left-3 bg-emerald-600 text-white">{relatedPost.category}</Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-emerald-700 mb-2 bengali-text line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 bengali-text line-clamp-2">{relatedPost.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="bengali-text">{relatedPost.readTime}</span>
                      <Link href={`/blog/${relatedPost.id}`}>
                        <Button variant="outline" size="sm">
                          পড়ুন
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Comments Section */}
        <Card className="mt-12 border-emerald-200">
          <CardHeader>
            <CardTitle className="bengali-text text-emerald-700">মন্তব্য ({post.comments})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 bengali-text">মন্তব্য বিভাগ শীঘ্রই আসছে...</p>
            </div>
          </CardContent>
        </Card>

        {/* Newsletter CTA */}
        <Card className="mt-12 border-emerald-200 bg-gradient-to-r from-emerald-50 to-amber-50">
          <CardContent className="p-8 text-center">
            <BookOpen className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 bengali-text islamic-text-gradient">আরও ইসলামিক কন্টেন্ট পেতে চান?</h3>
            <p className="text-gray-600 mb-6 bengali-text">
              আমাদের নিউজলেটার সাবস্ক্রাইব করুন এবং নিয়মিত ইসলামিক প্রবন্ধ ও আপডেট পান।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="আপনার ইমেইল ঠিকানা"
                className="flex-1 px-4 py-2 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <Button className="islamic-gradient text-white">সাবস্ক্রাইব করুন</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
