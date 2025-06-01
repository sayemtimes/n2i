import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, BookOpen, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "ইখলাস: ইবাদতের প্রাণশক্তি",
    excerpt: "ইখলাস ছাড়া কোনো আমল আল্লাহর কাছে গ্রহণযোগ্য নয়। জানুন কীভাবে আপনার ইবাদতে ইখলাস আনবেন।",
    content: "ইখলাস হলো ইবাদতের প্রাণশক্তি। এটি ছাড়া যত বড় আমলই করা হোক না কেন, তা আল্লাহর কাছে গ্রহণযোগ্য হয় না...",
    author: "মুফতি আবদুল্লাহ",
    date: "২০২৪-০১-১৫",
    readTime: "৮ মিনিট",
    category: "আত্মশুদ্ধি",
    tags: ["ইখলাস", "ইবাদত", "তাকওয়া"],
    image: "/placeholder.svg?height=400&width=800",
    views: 1250,
    likes: 89,
  }

  const blogPosts = [
    {
      id: 2,
      title: "নামাজে খুশু অর্জনের ১০টি উপায়",
      excerpt: "নামাজে মনোযোগ ও বিনয় আনার কার্যকর পদ্ধতি।",
      author: "ড. মুহাম্মদ রহিম",
      date: "২০২৪-০১-১২",
      readTime: "৬ মিনিট",
      category: "ইবাদত",
      image: "/placeholder.svg?height=200&width=400",
      views: 890,
      likes: 67,
    },
    {
      id: 3,
      title: "কুরআন বুঝে পড়ার গুরুত্ব",
      excerpt: "শুধু তিলাওয়াত নয়, কুরআনের অর্থ বোঝার প্রয়োজনীয়তা।",
      author: "হাফেজ আহমেদ",
      date: "২০২৪-০১-১০",
      readTime: "৫ মিনিট",
      category: "কুরআন",
      image: "/placeholder.svg?height=200&width=400",
      views: 1120,
      likes: 94,
    },
    {
      id: 4,
      title: "ইসলামে সময় ব্যবস্থাপনা",
      excerpt: "ইসলামিক দৃষ্টিভঙ্গিতে সময়ের সদ্ব্যবহার।",
      author: "উস্তাদ ফারুক",
      date: "২০২৪-০১-০৮",
      readTime: "৭ মিনিট",
      category: "জীবনযাত্রা",
      image: "/placeholder.svg?height=200&width=400",
      views: 756,
      likes: 52,
    },
    {
      id: 5,
      title: "দাওয়াহর আদব ও কৌশল",
      excerpt: "কীভাবে হিকমাহর সাথে মানুষকে ইসলামের দিকে আহ্বান করবেন।",
      author: "শাইখ আবু ইয়াহইয়া",
      date: "২০২৪-০১-০৫",
      readTime: "৯ মিনিট",
      category: "দাওয়াহ",
      image: "/placeholder.svg?height=200&width=400",
      views: 634,
      likes: 78,
    },
    {
      id: 6,
      title: "পরিবারে ইসলামিক পরিবেশ গঠন",
      excerpt: "ঘরে ইসলামিক মূল্যবোধ প্রতিষ্ঠার উপায়।",
      author: "উম্মে সালমা",
      date: "২০২৪-০১-০৩",
      readTime: "৬ মিনিট",
      category: "পারিবারিক",
      image: "/placeholder.svg?height=200&width=400",
      views: 923,
      likes: 112,
    },
    {
      id: 7,
      title: "যুগের ফিতনা ও মুক্তির উপায়",
      excerpt: "আধুনিক যুগের চ্যালেঞ্জ মোকাবেলায় ইসলামিক সমাধান।",
      author: "মাওলানা তারিক",
      date: "২০২৪-০১-০১",
      readTime: "১০ মিনিট",
      category: "সমসাময়িক",
      image: "/placeholder.svg?height=200&width=400",
      views: 1456,
      likes: 156,
    },
  ]

  const categories = [
    { name: "সকল পোস্ট", count: 45, active: true },
    { name: "ইবাদত", count: 12, active: false },
    { name: "আত্মশুদ্ধি", count: 8, active: false },
    { name: "কুরআন", count: 10, active: false },
    { name: "দাওয়াহ", count: 6, active: false },
    { name: "পারিবারিক", count: 5, active: false },
    { name: "সমসাময়িক", count: 4, active: false },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bengali-text islamic-text-gradient">ইসলামিক ব্লগ</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto bengali-text">
            কুরআন ও হাদিসের আলোকে জীবনযাত্রা, আত্মশুদ্ধি ও দাওয়াহ বিষয়ক প্রবন্ধ ও গবেষণা।
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="প্রবন্ধ খুঁজুন..." className="pl-10 bengali-text" />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                size="sm"
                className={`bengali-text ${category.active ? "islamic-gradient text-white" : ""}`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <Card className="mb-12 border-emerald-200 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <Badge className="mb-3 islamic-gradient text-white">ফিচার্ড পোস্ট</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bengali-text text-emerald-700">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 mb-4 bengali-text leading-relaxed">{featuredPost.excerpt}</p>

              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span className="bengali-text">{featuredPost.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="bengali-text">{featuredPost.readTime}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {featuredPost.views}
                  </span>
                  <span className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    {featuredPost.likes}
                  </span>
                </div>
                <Link href={`/blog/${featuredPost.id}`}>
                  <Button className="islamic-gradient text-white">পড়ুন</Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="border-emerald-200 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-emerald-600 text-white">{post.category}</Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3 bengali-text text-emerald-700 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 bengali-text line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center space-x-3 text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    <span className="bengali-text">{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <span className="flex items-center">
                      <BookOpen className="h-3 w-3 mr-1" />
                      {post.views}
                    </span>
                    <span className="flex items-center">
                      <Heart className="h-3 w-3 mr-1" />
                      {post.likes}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span className="bengali-text">{post.readTime}</span>
                    </span>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="outline" size="sm">
                      পড়ুন
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-emerald-600 text-emerald-600">
            আরও পোস্ট লোড করুন
          </Button>
        </div>

        {/* Newsletter Subscription */}
        <Card className="mt-12 border-emerald-200 bg-gradient-to-r from-emerald-50 to-amber-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 bengali-text islamic-text-gradient">নিয়মিত আপডেট পান</h3>
            <p className="text-gray-600 mb-6 bengali-text">
              নতুন প্রবন্ধ ও ইসলামিক কন্টেন্টের আপডেট পেতে আমাদের নিউজলেটার সাবস্ক্রাইব করুন।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input placeholder="আপনার ইমেইল ঠিকানা" className="flex-1" />
              <Button className="islamic-gradient text-white">সাবস্ক্রাইব করুন</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
