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
  {
    id: "2",
    title: "নামাজে খুশু অর্জনের ১০টি উপায়",
    excerpt: "নামাজে মনোযোগ ও বিনয় আনার কার্যকর পদ্ধতি।",
    content: `
      <p class="mb-4">নামাজ ইসলামের দ্বিতীয় স্তম্ভ এবং একজন মুসলিমের জীবনে সবচেয়ে গুরুত্বপূর্ণ ইবাদত। কিন্তু অনেক সময় আমরা নামাজ পড়ি অথচ এর প্রকৃত স্বাদ ও আনন্দ অনুভব করতে পারি না। এর কারণ হলো নামাজে খুশু বা বিনয়ের অভাব।</p>
      
      <blockquote class="arabic-text text-xl my-6 text-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">قَدْ أَفْلَحَ الْمُؤْمِنُونَ * الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ</blockquote>
      
      <p class="mb-4 text-center italic text-gray-600">"মুমিনরা সফল হয়েছে, যারা তাদের নামাজে বিনয়ী।" (সূরা মুমিনুন: ১-২)</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">খুশু কী?</h2>
      
      <p class="mb-4">খুশু হলো অন্তরের এমন একটি অবস্থা যেখানে মানুষ আল্লাহর সামনে নিজের অসহায়ত্ব, দুর্বলতা ও বিনয় অনুভব করে। নামাজে খুশু মানে হলো নামাজে পূর্ণ মনোযোগ, বিনয় ও একাগ্রতা নিয়ে দাঁড়ানো।</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">নামাজে খুশু অর্জনের ১০টি উপায়</h2>
      
      <ol class="list-decimal pl-6 space-y-4 mb-6">
        <li class="text-gray-700"><strong>নামাজের আগে প্রস্তুতি নেওয়া:</strong> নামাজের আগে কিছু সময় নিয়ে মনকে প্রস্তুত করুন। দুনিয়াবি চিন্তা থেকে মনকে মুক্ত করুন।</li>
        
        <li class="text-gray-700"><strong>সময়মত নামাজ পড়া:</strong> নামাজের প্রথম ওয়াক্তে নামাজ আদায় করুন। এতে মনোযোগ বেশি থাকে।</li>
        
        <li class="text-gray-700"><strong>উত্তম ওযু করা:</strong> ভালোভাবে ওযু করুন এবং ওযুর সময় দোয়াগুলো পড়ুন।</li>
        
        <li class="text-gray-700"><strong>সুত্রা ব্যবহার করা:</strong> নামাজের সামনে সুত্রা রাখুন যাতে দৃষ্টি একাগ্র থাকে।</li>
        
        <li class="text-gray-700"><strong>নামাজের অর্থ বুঝে পড়া:</strong> নামাজে যা পড়ছেন তার অর্থ জানুন ও বুঝুন। এতে মনোযোগ বাড়বে।</li>
        
        <li class="text-gray-700"><strong>ধীরে ধীরে নামাজ পড়া:</strong> তাড়াহুড়া না করে ধীরে ধীরে নামাজ পড়ুন। রুকু, সিজদা ও অন্যান্য রুকনগুলো সঠিকভাবে আদায় করুন।</li>
        
        <li class="text-gray-700"><strong>সিজদায় বেশি দোয়া করা:</strong> সিজদা হলো বান্দা আল্লাহর সবচেয়ে নিকটবর্তী হওয়ার স্থান। সিজদায় বেশি বেশি দোয়া করুন।</li>
        
        <li class="text-gray-700"><strong>আল্লাহর উপস্থিতি অনুভব করা:</strong> নামাজে মনে করুন যে আপনি আল্লাহর সামনে দাঁড়িয়ে আছেন এবং তিনি আপনাকে দেখছেন।</li>
        
        <li class="text-gray-700"><strong>মৃত্যুর কথা স্মরণ করা:</strong> নামাজের আগে মৃত্যুর কথা স্মরণ করুন। এটি আপনার মনোযোগ বাড়াবে।</li>
        
        <li class="text-gray-700"><strong>শয়তানের কুমন্ত্রণা থেকে আল্লাহর কাছে আশ্রয় চাওয়া:</strong> নামাজে শয়তান বিভিন্নভাবে বিভ্রান্ত করার চেষ্টা করে। তাই নামাজ শুরুর আগে "আউযুবিল্লাহ" পড়ে শয়তান থেকে আল্লাহর কাছে আশ্রয় চান।</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">উপসংহার</h2>
      
      <p class="mb-4">নামাজে খুশু অর্জন করা একটি চলমান প্রক্রিয়া। এটি একদিনে অর্জন করা যায় না। নিয়মিত অনুশীলন ও আল্লাহর সাহায্য প্রার্থনা করে ধীরে ধীরে খুশু বাড়ানো সম্ভব। আল্লাহ তা'আলা আমাদের সবাইকে খুশু সহকারে নামাজ আদায় করার তাওফিক দান করুন। আমীন।</p>
    `,
    author: "ড. মুহাম্মদ রহিম",
    authorImage: "/placeholder.svg?height=50&width=50",
    date: "২০২৪-০১-১২",
    readTime: "৬ মিনিট",
    category: "ইবাদত",
    tags: ["নামাজ", "খুশু", "ইবাদত"],
    image: "/placeholder.svg?height=600&width=1200",
    views: 890,
    likes: 67,
    comments: 15,
    relatedPosts: ["1", "3", "6"],
  },
  {
    id: "3",
    title: "কুরআন বুঝে পড়ার গুরুত্ব",
    excerpt: "শুধু তিলাওয়াত নয়, কুরআনের অর্থ বোঝার প্রয়োজনীয়তা।",
    content: `
      <p class="mb-4">কুরআন হলো আল্লাহর বাণী, যা তিনি মানবজাতির হিদায়াতের জন্য নাযিল করেছেন। এটি শুধু পাঠ করার জন্য নয়, বরং বুঝে, চিন্তা করে এবং সে অনুযায়ী আমল করার জন্য। আল্লাহ তা'আলা বলেন:</p>
      
      <blockquote class="arabic-text text-xl my-6 text-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِّيَدَّبَّرُوا آيَاتِهِ</blockquote>
      
      <p class="mb-4 text-center italic text-gray-600">"এটি একটি বরকতময় কিতাব, যা আমি আপনার প্রতি নাযিল করেছি যাতে তারা এর আয়াতসমূহ নিয়ে গভীরভাবে চিন্তা করে।" (সূরা সাদ: ২৯)</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">কুরআন বুঝে পড়ার গুরুত্ব</h2>
      
      <p class="mb-4">কুরআন শুধু তিলাওয়াত করলেই যথেষ্ট নয়, বরং এর অর্থ বুঝে পড়া অত্যন্ত গুরুত্বপূর্ণ। কারণ:</p>
      
      <ol class="list-decimal pl-6 space-y-3 mb-6">
        <li class="text-gray-700"><strong>হিদায়াত লাভ:</strong> কুরআন হলো হিদায়াতের কিতাব। এর অর্থ না বুঝলে হিদায়াত লাভ করা কঠিন।</li>
        
        <li class="text-gray-700"><strong>আমল করা:</strong> কুরআনের নির্দেশনা অনুযায়ী আমল করতে হলে এর অর্থ জানা আবশ্যক।</li>
        
        <li class="text-gray-700"><strong>আল্লাহর সাথে সম্পর্ক:</strong> কুরআন বুঝে পড়লে আল্লাহর সাথে সম্পর্ক গভীর হয়।</li>
        
        <li class="text-gray-700"><strong>জীবন পরিবর্তন:</strong> কুরআনের অর্থ বুঝলে জীবনে পরিবর্তন আনা সহজ হয়।</li>
        
        <li class="text-gray-700"><strong>দাওয়াহ:</strong> অন্যদের কাছে ইসলামের বার্তা পৌঁছাতে কুরআনের অর্থ জানা প্রয়োজন।</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">কুরআন বুঝে পড়ার উপায়</h2>
      
      <ol class="list-decimal pl-6 space-y-3 mb-6">
        <li class="text-gray-700"><strong>অনুবাদ পড়া:</strong> নিজের ভাষায় কুরআনের অনুবাদ পড়ুন।</li>
        
        <li class="text-gray-700"><strong>তাফসির অধ্যয়ন:</strong> বিশ্বস্ত তাফসির গ্রন্থ অধ্যয়ন করুন।</li>
        
        <li class="text-gray-700"><strong>আরবি ভাষা শেখা:</strong> সম্ভব হলে আরবি ভাষা শিখুন, যাতে মূল ভাষায় কুরআন বুঝতে পারেন।</li>
        
        <li class="text-gray-700"><strong>কুরআন ক্লাসে যোগ দেওয়া:</strong> কুরআন শিক্ষার জন্য আয়োজিত ক্লাসে যোগ দিন।</li>
        
        <li class="text-gray-700"><strong>নিয়মিত অধ্যয়ন:</strong> প্রতিদিন কিছু সময় কুরআন অধ্যয়নের জন্য নির্ধারণ করুন।</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">সাহাবাদের কুরআন শিক্ষা</h2>
      
      <p class="mb-4">সাহাবায়ে কিরাম কুরআন শিক্ষার ব্যাপারে অত্যন্ত যত্নবান ছিলেন। আবদুল্লাহ ইবনে মাসউদ (রা.) বলেন: "আমরা রাসূলুল্লাহ (সা.) এর কাছ থেকে দশটি আয়াত শিখতাম, তারপর সেগুলো বুঝে ও আমল করে নিতাম, তারপর আবার পরবর্তী দশটি আয়াত শিখতাম।"</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">উপসংহার</h2>
      
      <p class="mb-4">কুরআন বুঝে পড়া একজন মুসলিমের জন্য অত্যন্ত গুরুত্বপূর্ণ। এটি আমাদের জীবনকে আল্লাহর নির্দেশনা অনুযায়ী গড়ে তুলতে সাহায্য করে। আল্লাহ তা'আলা আমাদের সবাইকে কুরআন বুঝে পড়ার এবং সে অনুযায়ী আমল করার তাওফিক দান করুন। আমীন।</p>
    `,
    author: "হাফেজ আহমেদ",
    authorImage: "/placeholder.svg?height=50&width=50",
    date: "২০২৪-০১-১০",
    readTime: "৫ মিনিট",
    category: "কুরআন",
    tags: ["কুরআন", "তাফসির", "ইলম"],
    image: "/placeholder.svg?height=600&width=1200",
    views: 1120,
    likes: 94,
    comments: 18,
    relatedPosts: ["2", "4", "7"],
  },
  {
    id: "4",
    title: "ইসলামে সময় ব্যবস্থাপনা",
    excerpt: "ইসলামিক দৃষ্টিভঙ্গিতে সময়ের সদ্ব্যবহার।",
    content: `
      <p class="mb-4">সময় হলো আল্লাহর অমূল্য নিয়ামত। ইসলাম সময়ের সদ্ব্যবহারের উপর অত্যন্ত গুরুত্ব আরোপ করেছে। আল্লাহ তা'আলা কুরআনে সময়ের শপথ করে বলেছেন:</p>
      
      <blockquote class="arabic-text text-xl my-6 text-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">وَالْعَصْرِ * إِنَّ الْإِنسَانَ لَفِي خُسْرٍ</blockquote>
      
      <p class="mb-4 text-center italic text-gray-600">"সময়ের শপথ। নিশ্চয়ই মানুষ ক্ষতিগ্রস্ত।" (সূরা আসর: ১-২)</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">সময়ের গুরুত্ব</h2>
      
      <p class="mb-4">ইসলামে সময়ের গুরুত্ব অপরিসীম। রাসূলুল্লাহ (সা.) বলেছেন: "দুটি নিয়ামত রয়েছে যার ব্যাপারে অনেক মানুষ ক্ষতিগ্রস্ত: স্বাস্থ্য ও অবসর সময়।" (বুখারী)</p>
      
      <p class="mb-4">এই হাদিস থেকে আমরা বুঝতে পারি যে, সময় একটি মূল্যবান সম্পদ যা অনেকেই সঠিকভাবে ব্যবহার করতে পারে না।</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">ইসলামিক সময় ব্যবস্থাপনার নীতিমালা</h2>
      
      <ol class="list-decimal pl-6 space-y-3 mb-6">
        <li class="text-gray-700"><strong>নামাজের মাধ্যমে দিন বিভাজন:</strong> ইসলামে পাঁচ ওয়াক্ত নামাজের মাধ্যমে দিনকে বিভক্ত করা হয়েছে। এটি সময় ব্যবস্থাপনার একটি চমৎকার পদ্ধতি।</li>
        
        <li class="text-gray-700"><strong>অগ্রাধিকার নির্ধারণ:</strong> ইসলাম শিক্ষা দেয় যে, প্রথমে আল্লাহর হক, তারপর নিজের হক এবং তারপর অন্যদের হক আদায় করতে হবে।</li>
        
        <li class="text-gray-700"><strong>সময়ের সদ্ব্যবহার:</strong> রাসূলুল্লাহ (সা.) বলেছেন: "পাঁচটি জিনিসের আগে পাঁচটি জিনিসকে গনিমত মনে করো: বার্ধক্যের আগে যৌবন, অসুস্থতার আগে সুস্থতা, দারিদ্র্যের আগে সম্পদ, ব্যস্ততার আগে অবসর এবং মৃত্যুর আগে জীবন।" (হাকিম)</li>
        
        <li class="text-gray-700"><strong>অপচয় না করা:</strong> ইসলাম অপচয় নিষেধ করেছে, এবং সময় অপচয়ও এর অন্তর্ভুক্ত।</li>
        
        <li class="text-gray-700"><strong>পরিকল্পনা করা:</strong> রাসূলুল্লাহ (সা.) তাঁর সময় পরিকল্পিতভাবে ব্যবহার করতেন।</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">সময় ব্যবস্থাপনার ব্যবহারিক টিপস</h2>
      
      <ol class="list-decimal pl-6 space-y-3 mb-6">
        <li class="text-gray-700"><strong>দৈনিক রুটিন তৈরি করুন:</strong> নামাজের সময়কে কেন্দ্র করে একটি দৈনিক রুটিন তৈরি করুন।</li>
        
        <li class="text-gray-700"><strong>অগ্রাধিকার তালিকা তৈরি করুন:</strong> প্রতিদিন করণীয় কাজের একটি তালিকা তৈরি করুন এবং সেগুলোকে অগ্রাধিকারের ভিত্তিতে সাজান।</li>
        
        <li class="text-gray-700"><strong>সময় নষ্টকারী কাজ এড়িয়ে চলুন:</strong> অনর্থক সোশ্যাল মিডিয়া ব্রাউজিং, টিভি দেখা ইত্যাদি কমিয়ে দিন।</li>
        
        <li class="text-gray-700"><strong>মূল্যবান সময়ে মূল্যবান কাজ করুন:</strong> যে সময়ে আপনি সবচেয়ে বেশি উৎপাদনশীল, সে সময়ে সবচেয়ে গুরুত্বপূর্ণ কাজগুলো করুন।</li>
        
        <li class="text-gray-700"><strong>বিরতি নিন:</strong> কাজের মাঝে বিরতি নিন, এতে মস্তিষ্ক সতেজ থাকে।</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">উপসংহার</h2>
      
      <p class="mb-4">সময় হলো আল্লাহর অমূল্য নিয়ামত যা একবার চলে গেলে আর ফিরে আসে না। তাই আমাদের উচিত সময়কে সঠিকভাবে ব্যবহার করা। আল্লাহ তা'আলা আমাদের সবাইকে সময়ের সদ্ব্যবহার করার তাওফিক দান করুন। আমীন।</p>
    `,
    author: "উস্তাদ ফারুক",
    authorImage: "/placeholder.svg?height=50&width=50",
    date: "২০২৪-০১-০৮",
    readTime: "৭ মিনিট",
    category: "জীবনযাত্রা",
    tags: ["সময়", "ব্যবস্থাপনা", "ইসলাম"],
    image: "/placeholder.svg?height=600&width=1200",
    views: 756,
    likes: 52,
    comments: 12,
    relatedPosts: ["1", "5", "6"],
  },
  {
    id: "5",
    title: "দাওয়াহর আদব ও কৌশল",
    excerpt: "কীভাবে হিকমাহর সাথে মানুষকে ইসলামের দিকে আহ্বান করবেন।",
    content: `
      <p class="mb-4">দাওয়াহ হলো আল্লাহর দিকে মানুষকে আহ্বান করা, যা প্রতিটি মুসলিমের দায়িত্ব। আল্লাহ তা'আলা বলেন:</p>
      
      <blockquote class="arabic-text text-xl my-6 text-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ</blockquote>
      
      <p class="mb-4 text-center italic text-gray-600">"আপনার রবের পথে আহ্বান করুন হিকমত ও সুন্দর উপদেশের মাধ্যমে।" (সূরা নাহল: ১২৫)</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">দাওয়াহর গুরুত্ব</h2>
      
      <p class="mb-4">দাওয়াহ হলো নবী-রাসূলদের মিশন। রাসূলুল্লাহ (সা.) বলেছেন: "তোমাদের মধ্যে যে ব্যক্তি কোনো অন্যায় দেখে, সে যেন তা হাত দিয়ে প্রতিরোধ করে। যদি তা না পারে, তবে মুখ দিয়ে (কথা বলে)। আর যদি তাও না পারে, তবে অন্তর দিয়ে (ঘৃণা করে)। আর এটি হলো ঈমানের সবচেয়ে দুর্বল স্তর।" (মুসলিম)</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">দাওয়াহর আদব</h2>
      
      <ol class="list-decimal pl-6 space-y-3 mb-6">
        <li class="text-gray-700"><strong>ইখলাস:</strong> দাওয়াহ শুধুমাত্র আল্লাহর সন্তুষ্টির জন্য হতে হবে।</li>
        
        <li class="text-gray-700"><strong>জ্ঞান:</strong> যে বিষয়ে দাওয়াহ দিচ্ছেন সে বিষয়ে পর্যাপ্ত জ্ঞান থাকতে হবে।</li>
        
        <li class="text-gray-700"><strong>ধৈর্য:</strong> দাওয়াহ দেওয়ার সময় ধৈর্য ধারণ করতে হবে।</li>
        
        <li class="text-gray-700"><strong>নম্রতা:</strong> কঠোরতা নয়, নম্রতার সাথে দাওয়াহ দিতে হবে।</li>
        
        <li class="text-gray-700"><strong>হিকমত:</strong> প্রজ্ঞা ও বিচক্ষণতার সাথে দাওয়াহ দিতে হবে।</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">দাওয়াহর কৌশল</h2>
      
      <ol class="list-decimal pl-6 space-y-3 mb-6">
        <li class="text-gray-700"><strong>শ্রোতা বুঝে কথা বলা:</strong> শ্রোতার বয়স, শিক্ষা, সামাজিক অবস্থান ইত্যাদি বিবেচনা করে কথা বলতে হবে।</li>
        
        <li class="text-gray-700"><strong>সহজ ভাষা ব্যবহার করা:</strong> জটিল শব্দ ও ধারণা এড়িয়ে সহজ ভাষায় বোঝাতে হবে।</li>
        
        <li class="text-gray-700"><strong>উদাহরণ দেওয়া:</strong> বিষয়কে সহজবোধ্য করতে উদাহরণ দিতে হবে।</li>
        
        <li class="text-gray-700"><strong>প্রশ্ন করা:</strong> শ্রোতাকে চিন্তা করতে উৎসাহিত করার জন্য প্রশ্ন করতে হবে।</li>
        
        <li class="text-gray-700"><strong>ধাপে ধাপে শেখানো:</strong> একসাথে সব কিছু না শিখিয়ে ধাপে ধাপে শেখাতে হবে।</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">দাওয়াহর ক্ষেত্রে সাবধানতা</h2>
      
      <ol class="list-decimal pl-6 space-y-3 mb-6">
        <li class="text-gray-700"><strong>অহংকার এড়ানো:</strong> দাওয়াহ দেওয়ার সময় অহংকার থেকে বিরত থাকতে হবে।</li>
        
        <li class="text-gray-700"><strong>বিতর্ক এড়ানো:</strong> অনর্থক বিতর্ক থেকে বিরত থাকতে হবে।</li>
        
        <li class="text-gray-700"><strong>বাড়াবাড়ি না করা:</strong> দাওয়াহ দেওয়ার সময় বাড়াবাড়ি করা যাবে না।</li>
        
        <li class="text-gray-700"><strong>নিজে আমল করা:</strong> যা বলবেন, নিজে তা আমল করতে হবে।</li>
        
        <li class="text-gray-700"><strong>দোয়া করা:</strong> যাদের দাওয়াহ দিচ্ছেন তাদের জন্য দোয়া করতে হবে।</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">উপসংহার</h2>
      
      <p class="mb-4">দাওয়াহ হলো একটি মহান ইবাদত যা আল্লাহর কাছে অত্যন্ত প্রিয়। সঠিক আদব ও কৌশল অবলম্বন করে দাওয়াহ দিলে তা অধিক ফলপ্রসূ হয়। আল্লাহ তা'আলা আমাদের সবাইকে সঠিকভাবে দাওয়াহ দেওয়ার তাওফিক দান করুন। আমীন।</p>
    `,
    author: "শাইখ আবু ইয়াহইয়া",
    authorImage: "/placeholder.svg?height=50&width=50",
    date: "২০২৪-০১-০৫",
    readTime: "৯ মিনিট",
    category: "দাওয়াহ",
    tags: ["দাওয়াহ", "হিকমাহ", "ইসলাম"],
    image: "/placeholder.svg?height=600&width=1200",
    views: 634,
    likes: 78,
    comments: 20,
    relatedPosts: ["1", "4", "7"],
  },
  {
    id: "6",
    title: "পরিবারে ইসলামিক পরিবেশ গঠন",
    excerpt: "ঘরে ইসলামিক মূল্যবোধ প্রতিষ্ঠার উপায়।",
    content: `
      <p class="mb-4">পরিবার হলো সমাজের মূল ইউনিট। একটি সুস্থ ও ইসলামিক পরিবার গঠন করা প্রতিটি মুসলিমের দায়িত্ব। আল্লাহ তা'আলা বলেন:</p>
      
      <blockquote class="arabic-text text-xl my-6 text-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًا</blockquote>
      
      <p class="mb-4 text-center italic text-gray-600">"হে মুমিনগণ! তোমরা নিজেদের ও তোমাদের পরিবারকে আগুন থেকে রক্ষা করো।" (সূরা তাহরীম: ৬)</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">ইসলামিক পরিবারের গুরুত্ব</h2>
      
      <p class="mb-4">ইসলামিক পরিবার হলো সমাজের ভিত্তি। রাসূলুল্লাহ (সা.) বলেছেন: "তোমরা সবাই দায়িত্বশীল এবং তোমাদের প্রত্যেককে তার দায়িত্ব সম্পর্কে জিজ্ঞাসা করা হবে। শাসক তার প্রজাদের ব্যাপারে দায়িত্বশীল, পুরুষ তার পরিবারের ব্যাপারে দায়িত্বশীল, নারী তার স্বামীর ঘর ও সন্তানদের ব্যাপারে দায়িত্বশীল।" (বুখারী ও মুসলিম)</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">ইসলামিক পরিবার গঠনের উপায়</h2>
      
      <ol class="list-decimal pl-6 space-y-3 mb-6">
        <li class="text-gray-700"><strong>পারিবারিক ইবাদত:</strong> পরিবারের সদস্যদের নিয়ে একসাথে নামাজ পড়া, কুরআন তিলাওয়াত করা, যিকির করা ইত্যাদি।</li>
        
        <li class="text-gray-700"><strong>ইসলামিক শিক্ষা:</strong> পরিবারের সদস্যদের ইসলামিক শিক্ষা দেওয়া, বিশেষ করে সন্তানদের।</li>
        
        <li class="text-gray-700"><strong>পারস্পরিক সম্মান:</strong> পরিবারের সদস্যদের মধ্যে পারস্পরিক সম্মান ও ভালোবাসা বজায় রাখা।</li>
        
        <li class="text-gray-700"><strong>হালাল রিজিক:</strong> পরিবারের জন্য হালাল উপার্জন করা।</li>
        
        <li class="text-gray-700"><strong>ইসলামিক আচার-আচরণ:</strong> পরিবারে ইসলামিক আচার-আচরণ অনুসরণ করা।</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">সন্তান লালন-পালন</h2>
      
      <p class="mb-4">সন্তান লালন-পালন ইসলামিক পরিবার গঠনের একটি গুরুত্বপূর্ণ দিক। রাসূলুল্লাহ (সা.) বলেছেন: "তোমাদের মধ্যে সেই উত্তম যে নিজের পরিবারের কাছে উত্তম।" (তিরমিযি)</p>
      
      <ol class="list-decimal pl-6 space-y-3 mb-6">
        <li class="text-gray-700"><strong>ইসলামিক শিক্ষা:</strong> সন্তানদের ইসলামিক শিক্ষা দেওয়া।</li>
        
        <li class="text-gray-700"><strong>আদর্শ হওয়া:</strong> সন্তানদের জন্য আদর্শ হিসেবে থাকা।</li>
        
        <li class="text-gray-700"><strong>ভালোবাসা ও যত্ন:</strong> সন্তানদের ভালোবাসা ও যত্ন দেওয়া।</li>
        
        <li class="text-gray-700"><strong>সঠিক পরিবেশ:</strong> সন্তানদের জন্য সঠিক পরিবেশ তৈরি করা।</li>
        
        <li class="text-gray-700"><strong>দোয়া করা:</strong> সন্তানদের জন্য নিয়মিত দোয়া করা।</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">স্বামী-স্ত্রীর সম্পর্ক</h2>
      
      <p class="mb-4">ইসলামিক পরিবারে স্বামী-স্ত্রীর সম্পর্ক অত্যন্ত গুরুত্বপূর্ণ। আল্লাহ তা'আলা বলেন:</p>
      
      <blockquote class="arabic-text text-xl my-6 text-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً</blockquote>
      
      <p class="mb-4 text-center italic text-gray-600">"তাঁর নিদর্শনাবলীর মধ্যে রয়েছে যে, তিনি তোমাদের জন্য তোমাদের মধ্য থেকে স্ত্রী সৃষ্টি করেছেন, যাতে তোমরা তাদের কাছে শান্তি পাও এবং তিনি তোমাদের মধ্যে ভালোবাসা ও দয়া সৃষ্টি করেছেন।" (সূরা রূম: ২১)</p>
      
      <ol class="list-decimal pl-6 space-y-3 mb-6">
        <li class="text-gray-700"><strong>পারস্পরিক সম্মান:</strong> স্বামী-স্ত্রী উভয়ের মধ্যে পারস্পরিক সম্মান থাকতে হবে।</li>
        
        <li class="text-gray-700"><strong>দায়িত্ব পালন:</strong> উভয়ে নিজ নিজ দায়িত্ব পালন করবেন।</li>
        
        <li class="text-gray-700"><strong>ধৈর্য ও সহনশীলতা:</strong> পারিবারিক জীবনে ধৈর্য ও সহনশীলতা অবলম্বন করতে হবে।</li>
        
        <li class="text-gray-700"><strong>পরামর্শ:</strong> গুরুত্বপূর্ণ বিষয়ে পরস্পরের সাথে পরামর্শ করতে হবে।</li>
        
        <li class="text-gray-700"><strong>ক্ষমা ও উদারতা:</strong> পরস্পরের প্রতি ক্ষমাশীল ও উদার হতে হবে।</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">উপসংহার</h2>
      
      <p class="mb-4">ইসলামিক পরিবার গঠন একটি চলমান প্রক্রিয়া। এটি একদিনে অর্জন করা যায় না। নিয়মিত চেষ্টা, ধৈর্য ও আল্লাহর সাহায্য প্রার্থনা করে ধীরে ধীরে একটি সুন্দর ইসলামিক পরিবার গঠন করা সম্ভব। আল্লাহ তা'আলা আমাদের সবাইকে সুন্দর ইসলামিক পরিবার গঠনের তাওফিক দান করুন। আমীন।</p>
    `,
    author: "উম্মে সালমা",
    authorImage: "/placeholder.svg?height=50&width=50",
    date: "২০২৪-০১-০৩",
    readTime: "৬ মিনিট",
    category: "পারিবারিক",
    tags: ["পরিবার", "ইসলাম", "সন্তান"],
    image: "/placeholder.svg?height=600&width=1200",
    views: 923,
    likes: 112,
    comments: 25,
    relatedPosts: ["1", "4", "5"],
  },
  {
    id: "7",
    title: "যুগের ফিতনা ও মুক্তির উপায়",
    excerpt: "আধুনিক যুগের চ্যালেঞ্জ মোকাবেলায় ইসলামিক সমাধান।",
    content: `
      <p class="mb-4">বর্তমান যুগে মুসলিমরা বিভিন্ন ধরনের ফিতনা ও চ্যালেঞ্জের সম্মুখীন। আল্লাহ তা'আলা বলেন:</p>
      
      <blockquote class="arabic-text text-xl my-6 text-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">وَاتَّقُوا فِتْنَةً لَّا تُصِيبَنَّ الَّذِينَ ظَلَمُوا مِنكُمْ خَاصَّةً</blockquote>
      
      <p class="mb-4 text-center italic text-gray-600">"এমন ফিতনা থেকে বাঁচো যা শুধু তোমাদের মধ্যে যারা জালিম তাদের পর্যন্ত সীমাবদ্ধ থাকবে না।" (সূরা আনফাল: ২৫)</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">আধুনিক যুগের ফিতনাসমূহ</h2>
      
      <ol class="list-decimal pl-6 space-y-3 mb-6">
        <li class="text-gray-700"><strong>ইন্টারনেট ও সোশ্যাল মিডিয়া:</strong> অশ্লীলতা, মিথ্যা তথ্য, সময় অপচয় ইত্যাদি।</li>
        
        <li class="text-gray-700"><strong>ভোগবাদী সংস্কৃতি:</strong> অতিরিক্ত ভোগবাদ ও বস্তুবাদী মনোভাব।</li>
        
        <li class="text-gray-700"><strong>ধর্মনিরপেক্ষতা:</strong> ধর্মকে ব্যক্তিগত বিষয় হিসেবে দেখা এবং জীবন থেকে আলাদা করা।</li>
        
        <li class="text-gray-700"><strong>পাশ্চাত্য সংস্কৃতির অন্ধ অনুকরণ:</strong> পাশ্চাত্য সংস্কৃতির অন্ধ অনুকরণ করা।</li>
        
        <li class="text-gray-700"><strong>ইসলাম সম্পর্কে ভুল ধারণা:</strong> ইসলাম সম্পর্কে বিভিন্ন ভুল ধারণা ও বিভ্রান্তি।</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">ফিতনা থেকে মুক্তির উপায়</h2>
      
      <ol class="list-decimal pl-6 space-y-3 mb-6">
        <li class="text-gray-700"><strong>কুরআন ও সুন্নাহ অনুসরণ:</strong> কুরআন ও সুন্নাহকে জীবনের সব ক্ষেত্রে অনুসরণ করা।</li>
        
        <li class="text-gray-700"><strong>সঠিক জ্ঞান অর্জন:</strong> ইসলাম সম্পর্কে সঠিক জ্ঞান অর্জন করা।</li>
        
        <li class="text-gray-700"><strong>সৎসঙ্গ:</strong> ধার্মিক ও জ্ঞানী লোকদের সাথে মেলামেশা করা।</li>
        
        <li class="text-gray-700"><strong>দোয়া:</strong> ফিতনা থেকে রক্ষার জন্য আল্লাহর কাছে দোয়া করা।</li>
        
        <li class="text-gray-700"><strong>সতর্কতা:</strong> সব বিষয়ে সতর্কতা অবলম্বন করা।</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">ইন্টারনেট ও সোশ্যাল মিডিয়া ব্যবহার</h2>
      
      <p class="mb-4">ইন্টারনেট ও সোশ্যাল মিডিয়া আধুনিক যুগের একটি বড় ফিতনা। এগুলো সঠিকভাবে ব্যবহার করতে হবে:</p>
      
      <ol class="list-decimal pl-6 space-y-3 mb-6">
        <li class="text-gray-700"><strong>সময় সীমিত করা:</strong> ইন্টারনেট ও সোশ্যাল মিডিয়া ব্যবহারের সময় সীমিত করা।</li>
        
        <li class="text-gray-700"><strong>উপকারী কন্টেন্ট দেখা:</strong> শুধু উপকারী কন্টেন্ট দেখা ও শেয়ার করা।</li>
        
        <li class="text-gray-700"><strong>অশ্লীলতা এড়ানো:</strong> অশ্লীল কন্টেন্ট থেকে দূরে থাকা।</li>
        
        <li class="text-gray-700"><strong>তথ্য যাচাই করা:</strong> যেকোনো তথ্য শেয়ার করার আগে যাচাই করা।</li>
        
        <li class="text-gray-700"><strong>ইসলামিক কন্টেন্ট শেয়ার করা:</strong> ইসলামিক কন্টেন্ট শেয়ার করে দাওয়াহ দেওয়া।</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">পারিবারিক মূল্যবোধ</h2>
      
      <p class="mb-4">পারিবারিক মূল্যবোধ রক্ষা করা ফিতনা থেকে বাঁচার একটি গুরুত্বপূর্ণ উপায়:</p>
      
      <ol class="list-decimal pl-6 space-y-3 mb-6">
        <li class="text-gray-700"><strong>পারিবারিক বন্ধন মজবুত করা:</strong> পরিবারের সদস্যদের সাথে সম্পর্ক মজবুত করা।</li>
        
        <li class="text-gray-700"><strong>সন্তানদের সঠিক শিক্ষা দেওয়া:</strong> সন্তানদের ইসলামিক শিক্ষা দেওয়া।</li>
		<li class="text-gray-700"><strong>নিয়মিত নসিহত করা:</strong> পরিবারকে নিয়মিত ভালো কাজের উপদেশ ও খারাপ কাজ থেকে নিষেধ করা।</li>
        
        <li class="text-gray-700"><strong>সময় দেওয়া:</strong> পরিবারকে পর্যাপ্ত সময় দেওয়া এবং তাদের সাথে গল্প করা।</li>
        
        <li class="text-gray-700"><strong>তাদের সমস্যা শোনা:</strong> তাদের সমস্যা মনোযোগ দিয়ে শোনা ও সমাধানের চেষ্টা করা।</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4 text-emerald-700">উপসংহার</h2>
      
      <p class="mb-4">যুগের ফিতনা থেকে বাঁচতে হলে কুরআন ও সুন্নাহকে আঁকড়ে ধরতে হবে এবং আল্লাহর কাছে সাহায্য চাইতে হবে। আল্লাহ তা'আলা আমাদের সবাইকে ফিতনা থেকে রক্ষা করুন। আমীন।</p>
    `,
    author: "ড. আব্দুল্লাহ আল-মাহমুদ",
    authorImage: "/placeholder.svg?height=50&width=50",
    date: "২০২৪-০১-০১",
    readTime: "৮ মিনিট",
    category: "ইসলামিক জীবন",
    tags: ["ফিতনা", "ইসলাম", "চ্যালেঞ্জ"],
    image: "/placeholder.svg?height=600&width=1200",
    views: 543,
    likes: 65,
    comments: 17,
    relatedPosts: ["2", "3", "5"],
  },
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

  const relatedPosts = blogPosts.filter((p) => post.relatedPosts.includes(p.id))

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
