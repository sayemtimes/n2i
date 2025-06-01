"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Star, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Month3Page() {
  const [completedTasks, setCompletedTasks] = useState<{ [key: string]: boolean }>({})

  const monthData = {
    id: 3,
    title: "আত্মশুদ্ধি (Advanced Purification)",
    subtitle: "ইবাদতের গভীরতা - গভীর জ্ঞান ও ইখলাস",
    description: "মনের পরিশুদ্ধতা ও চরিত্র গঠন। উন্নত ইবাদত ও দাওয়াহ কার্যক্রম।",
    level: "Advanced",
    totalDays: 28,
    weeks: [
      {
        week: 1,
        title: "ইবাদতের গভীরতা ও নিয়মিত রুটিন",
        focus: "তাহাজ্জুদ ও উন্নত ইবাদতের অভ্যাস",
        hadith: "أَفْضَلُ الصَّلَاةِ بَعْدَ الْفَرِيضَةِ صَلَاةُ اللَّيْلِ - ফরজের পর সর্বোত্তম নামাজ রাতের নামাজ (সহিহ মুসলিম)",
        days: [
          {
            day: 1,
            title: "তাহাজ্জুদ নামাজের নিয়ম ও ফজিলত",
            task: "তাহাজ্জুদ নামাজের নিয়ম শিখুন এবং আদায় করার চেষ্টা করুন",
            quran: "وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ نَافِلَةً لَّكَ",
            translation: "রাতের কিছু অংশে তাহাজ্জুদ পড়ুন, এটি আপনার জন্য অতিরিক্ত।",
            amal: "রাত ১২টার পর ২ রাকাত তাহাজ্জুদ পড়ুন",
            dua: "اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ نُورُ السَّمَاوَاتِ وَالْأَرْضِ",
            duaTranslation: "হে আল্লাহ! আপনার জন্যই সব প্রশংসা। আপনি আসমান ও জমিনের নূর।",
            tafsir: "তাহাজ্জুদ হলো রাতের নফল নামাজ। এটি আল্লাহর নৈকট্য লাভের অন্যতম মাধ্যম।",
            spiritual: "রাতের নিস্তব্ধতায় আল্লাহর সাথে একান্ত কথোপকথনের সুযোগ।",
          },
          {
            day: 2,
            title: "কুরআন তিলাওয়াতের গভীরতা",
            task: "ধীরে ধীরে তারতিলের সাথে কুরআন তিলাওয়াত করুন",
            quran: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",
            translation: "কুরআন ধীরে ধীরে স্পষ্টভাবে পাঠ করুন।",
            amal: "প্রতিদিন ১ পারা কুরআন তারতিলের সাথে পড়ুন",
            dua: "اللَّهُمَّ اجْعَلْ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي",
            duaTranslation: "হে আল্লাহ! কুরআনকে আমার হৃদয়ের বসন্ত ও বুকের আলো বানিয়ে দিন।",
            tafsir: "তারতিল মানে ধীরে ধীরে, স্পষ্টভাবে ও অর্থ বুঝে কুরআন পড়া।",
            spiritual: "কুরআনের প্রতিটি শব্দে চিন্তা করুন এবং আল্লাহর বাণীর মাধুর্য অনুভব করুন।",
          },
          {
            day: 3,
            title: "নফল রোজার অভ্যাস",
            task: "সোমবার ও বৃহস্পতিবার নফল রোজা রাখুন",
            quran: "وَأَن تَصُومُوا خَيْرٌ لَّكُمْ إِن كُنتُمْ تَعْلَمُونَ",
            translation: "রোজা রাখা তোমাদের জন্য কল্যাণকর, যদি তোমরা জানতে।",
            amal: "সাপ্তাহে ২ দিন নফল রোজা রাখুন",
            dua: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
            duaTranslation: "হে আল্লাহ! আমাদের রিজিকে বরকত দিন এবং জাহান্নামের আজাব থেকে রক্ষা করুন।",
            tafsir: "নফল রোজা আত্মশুদ্ধি ও তাকওয়া বৃদ্ধির অন্যতম মাধ্যম।",
            spiritual: "রোজার মাধ্যমে নফসের উপর নিয়ন্ত্রণ প্রতিষ্ঠা করুন।",
          },
          {
            day: 4,
            title: "নামাজে খুশু আনয়ন",
            task: "নামাজে পূর্ণ মনোযোগ ও বিনয়ের সাথে দাঁড়ান",
            quran: "قَدْ أَفْلَحَ الْمُؤْمِنُونَ * الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ",
            translation: "মুমিনরা সফল হয়েছে, যারা তাদের নামাজে বিনয়ী।",
            amal: "নামাজে দোয়ার অর্থ বুঝে পড়ুন",
            dua: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
            duaTranslation: "হে আল্লাহ! আপনার যিকর, শুকর ও সুন্দর ইবাদতে আমাকে সাহায্য করুন।",
            tafsir: "খুশু হলো নামাজে অন্তরের উপস্থিতি ও আল্লাহর প্রতি পূর্ণ মনোযোগ।",
            spiritual: "নামাজে দুনিয়ার সব চিন্তা ভুলে শুধু আল্লাহর কথা ভাবুন।",
          },
          {
            day: 5,
            title: "দোয়ার আদব ও গভীরতা",
            task: "দোয়ার আদব শিখুন এবং অন্তর দিয়ে দোয়া করুন",
            quran: "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ",
            translation: "তোমাদের রব বলেছেন: আমাকে ডাকো, আমি তোমাদের ডাকে সাড়া দেবো।",
            amal: "প্রতিদিন ১৫ মিনিট একান্তে দোয়া করুন",
            dua: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
            duaTranslation: "হে আমাদের রব! দুনিয়াতে কল্যাণ দিন, আখিরাতেও কল্যাণ দিন এবং জাহান্নামের আজাব থেকে রক্ষা করুন।",
            tafsir: "দোয়া হলো ইবাদতের মূল। এটি আল্লাহর সাথে বান্দার সরাসরি কথোপকথন।",
            spiritual: "দোয়ায় কান্নাকাটি করুন এবং আল্লাহর কাছে বিনীতভাবে চান।",
          },
          {
            day: 6,
            title: "সেজদাহর আসল অনুভূতি",
            task: "সেজদায় আল্লাহর মহত্ত্ব অনুভব করুন",
            quran: "وَاسْجُدْ وَاقْتَرِب",
            translation: "সেজদা করুন এবং নিকটবর্তী হন।",
            amal: "সেজদায় বেশি বেশি তাসবিহ পড়ুন",
            dua: "سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ",
            duaTranslation: "আমার সর্বোচ্চ রবের পবিত্রতা ও প্রশংসা।",
            tafsir: "সেজদা হলো আল্লাহর নৈকট্য লাভের সর্বোচ্চ মাধ্যম।",
            spiritual: "সেজদায় নিজেকে সম্পূর্ণভাবে আল্লাহর কাছে সমর্পণ করুন।",
          },
          {
            day: 7,
            title: "রাতের ইবাদতের অগ্রগতি রিভিউ",
            task: "এই সপ্তাহের রাতের ইবাদতের অভিজ্ঞতা মূল্যায়ন করুন",
            quran: "تَتَجَافَىٰ جُنُوبُهُمْ عَنِ الْمَضَاجِعِ يَدْعُونَ رَبَّهُمْ خَوْفًا وَطَمَعًا",
            translation: "তাদের পার্শ্ব শয্যা থেকে আলাদা থাকে, তারা ভয় ও আশা নিয়ে তাদের রবকে ডাকে।",
            amal: "রাতের ইবাদতের একটি নিয়মিত রুটিন তৈরি করুন",
            dua: "اللَّهُمَّ أَعِنِّي عَلَى قِيَامِ اللَّيْلِ",
            duaTranslation: "হে আল্লাহ! রাতের নামাজে আমাকে সাহায্য করুন।",
            tafsir: "রাতের ইবাদতকারীরা আল্লাহর বিশেষ বান্দা।",
            spiritual: "রাতের নিস্তব্ধতায় আল্লাহর সাথে আপনার সম্পর্ক আরও গভীর করুন।",
          },
        ],
      },
      {
        week: 2,
        title: "গভীর জ্ঞান: তাফসির, হাদিস ও ফিকহ",
        focus: "ইসলামিক স্কলারশিপের ভিত্তি স্থাপন",
        hadith: "مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ - আল্লাহ যার কল্যাণ চান তাকে দ্বীনের গভীর জ্ঞান দান করেন (সহিহ বুখারী)",
        days: [
          {
            day: 8,
            title: "সূরা হুজুরাতের তাফসির (আখলাক)",
            task: "সূরা হুজুরাতের আখলাক সংক্রান্ত আয়াতগুলো অধ্যয়ন করুন",
            quran: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَسْخَرْ قَوْمٌ مِّن قَوْمٍ",
            translation: "হে মুমিনগণ! কোনো সম্প্রদায় যেন অন্য সম্প্রদায়কে উপহাস না করে।",
            amal: "কারো সাথে খারাপ আচরণ করবেন না",
            dua: "اللَّهُمَّ حَسِّنْ خُلُقِي",
            duaTranslation: "হে আল্লাহ! আমার চরিত্র সুন্দর করুন।",
            tafsir: "এই সূরায় মুসলিমদের পারস্পরিক আচার-আচরণের নীতিমালা দেওয়া হয়েছে।",
            spiritual: "অন্যদের সাথে ভালো ব্যবহার করা ইবাদতের অংশ।",
          },
          {
            day: 9,
            title: "সূরা লুকমান: হেকমতের শিক্ষা",
            task: "লুকমান হাকিমের উপদেশগুলো অধ্যয়ন ও অনুসরণ করুন",
            quran: "وَلَقَدْ آتَيْنَا لُقْمَانَ الْحِكْمَةَ أَنِ اشْكُرْ لِلَّهِ",
            translation: "আমি লুকমানকে হিকমত দিয়েছিলাম যে, আল্লাহর শুকরিয়া আদায় করো।",
            amal: "পিতা-মাতার সাথে সদ্ব্যবহার করুন",
            dua: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ",
            duaTranslation: "হে আমার রব! আমাকে আপনার নিয়ামতের শুকরিয়া আদায়ের তাওফিক দিন।",
            tafsir: "লুকমান হাকিমের উপদেশে তাওহিদ, আখলাক ও হিকমতের শিক্ষা রয়েছে।",
            spiritual: "প্রজ্ঞা ও হিকমত অর্জনের জন্য আল্লাহর কাছে দোয়া করুন।",
          },
          {
            day: 10,
            title: "হাদিস চর্চা: ১০টি গুরুত্বপূর্ণ হাদিস",
            task: "আরবাইন নববী থেকে ১০টি হাদিস মুখস্থ করুন",
            quran: "وَمَا يَنطِقُ عَنِ الْهَوَىٰ * إِنْ هُوَ إِلَّا وَحْيٌ يُوحَىٰ",
            translation: "তিনি মনগড়া কথা বলেন না। এটা তো কেবল ওহি যা প্রেরিত হয়।",
            amal: "একটি হাদিসের উপর আমল করুন",
            dua: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ",
            duaTranslation: "হে আল্লাহ! মুহাম্মদ ও তাঁর পরিবারের উপর সালাত পাঠান।",
            tafsir: "হাদিস হলো কুরআনের ব্যাখ্যা ও বাস্তব প্রয়োগ।",
            spiritual: "নবীজির হাদিস অনুসরণ করা আল্লাহর ভালোবাসা পাওয়ার মাধ্যম।",
          },
          {
            day: 11,
            title: "হালাল-হারামের গভীর ফিকহি আলোচনা",
            task: "ফিকহের মৌলিক বিষয়গুলো অধ্যয়ন করুন",
            quran: "وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا",
            translation: "আল্লাহ ব্যবসাকে হালাল করেছেন এবং সুদকে হারাম করেছেন।",
            amal: "একটি ফিকহি মাসআলা বিস্তারিত জানুন",
            dua: "اللَّهُمَّ فَقِّهْنِي فِي الدِّينِ",
            duaTranslation: "হে আল্লাহ! আমাকে দ্বীনের গভীর জ্ঞান দান করুন।",
            tafsir: "ফিকহ হলো ইসলামি আইনশাস্ত্র যা মানুষের দৈনন্দিন জীবনে ইসলামের প্রয়োগ শেখায়।",
            spiritual: "জ্ঞান অর্জন করা এবং সে অনুযায়ী আমল করা একসাথে করুন।",
          },
          {
            day: 12,
            title: "মুসলিমদের অর্থনীতি: জাকাত, ইনসাফ",
            task: "ইসলামিক অর্থনীতির মূলনীতি শিখুন",
            quran: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ",
            translation: "নামাজ কায়েম করো এবং যাকাত দাও।",
            amal: "আপনার সম্পদের যাকাত হিসাব করুন",
            dua: "اللَّهُمَّ বَارِকْ লِي ফِيمَا রَজাকْتَنِي",
            duaTranslation: "হে আল্লাহ! আপনি আমাকে যে রিজিক দিয়েছেন তাতে বরকত দিন।",
            tafsir: "যাকাত হলো ইসলামের অর্থনৈতিক ব্যবস্থার মূল স্তম্ভ যা সম্পদের সুষম বণ্টন নিশ্চিত করে।",
            spiritual: "সম্পদের প্রতি আসক্তি কমিয়ে আল্লাহর পথে ব্যয় করার মানসিকতা গড়ুন।",
          },
          {
            day: 13,
            title: "ইজতিহাদ ও তাকলিদের পরিচয়",
            task: "ইসলামিক আইনের উৎস ও পদ্ধতি সম্পর্কে জানুন",
            quran: "فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ",
            translation: "যদি তোমরা না জানো তবে জ্ঞানীদের জিজ্ঞাসা করো।",
            amal: "একটি ফিকহি মাসআলায় বিভিন্ন মতামত জানুন",
            dua: "রَبِّ জِدْنِي ইলْمًا",
            duaTranslation: "হে আমার রব! আমার জ্ঞান বৃদ্ধি করুন।",
            tafsir: "ইজতিহাদ হলো কুরআন ও সুন্নাহর আলোকে নতুন সমস্যার সমাধান বের করা, আর তাকলিদ হলো বিশেষজ্ঞ আলেমদের অনুসরণ করা।",
            spiritual: "জ্ঞানের প্রতি বিনয়ী হোন এবং নিজের সীমাবদ্ধতা স্বীকার করুন।",
          },
          {
            day: 14,
            title: "শিক্ষার বিষয়গুলো লিখে রাখা",
            task: "এই সপ্তাহে শেখা বিষয়গুলো সংক্ষেপে লিখে রাখুন",
            quran: "وَالْقَلَمِ وَمَا يَسْطُرُونَ",
            translation: "কলমের শপথ এবং যা তারা লিখে তার শপথ।",
            amal: "একটি জ্ঞান নোটবুক তৈরি করুন",
            dua: "اللَّهُمَّ عَلِّমْنِي مَا ইয়ানফাউনী ওয়াংফাউনী বিমা আল্লাম্তানী",
            duaTranslation: "হে আল্লাহ! আমাকে উপকারী জ্ঞান শিক্ষা দিন এবং যা শিখিয়েছেন তা দ্বারা উপকৃত করুন।",
            tafsir: "জ্ঞান লিখে রাখা এটি সংরক্ষণের সর্বোত্তম উপায়।",
            spiritual: "জ্ঞান অর্জন ও বিতরণ উভয়ই পুণ্যের কাজ।",
          },
        ],
      },
      {
        week: 3,
        title: "আত্মশুদ্ধি ও ইখলাস",
        focus: "অন্তরের পরিশুদ্ধতার চূড়ান্ত স্তর",
        hadith:
          "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا লিকুল্লি ইমরিইন মা নাওয়া - কাজের ফলাফল নিয়তের উপর নির্ভরশীল এবং প্রত্যেক ব্যক্তি তার নিয়ত অনুযায়ী ফল পাবে (সহিহ বুখারী)",
        days: [
          {
            day: 15,
            title: "ইখলাসের চূড়ান্ত স্তর অর্জন",
            task: "ইখলাস সম্পর্কে গভীর অধ্যয়ন ও অনুশীলন করুন",
            quran: "وَمَا উমিরু ইল্লা লিইয়াবুদু আল্লাহা মুখলিসিনা লাহুদ্দিন",
            translation: "তাদেরকে কেবল এই নির্দেশ দেওয়া হয়েছিল যে, তারা যেন আল্লাহর ইবাদত করে তাঁর জন্য দ্বীনকে একনিষ্ঠ করে।",
            amal: "প্রতিটি আমলে নিয়ত পরীক্ষা করুন",
            dua: "اللَّهُمَّ আজআল আমালী কুল্লাহু খালিসান লিওয়াজহিকাল কারীম",
            duaTranslation: "হে আল্লাহ! আমার সমস্ত আমল আপনার সম্মানিত সত্তার জন্য একনিষ্ঠ করুন।",
            tafsir: "ইখলাস হলো আল্লাহর সন্তুষ্টি ছাড়া অন্য কোনো উদ্দেশ্য না রাখা।",
            spiritual: "নিজের প্রতিটি কাজে লোক দেখানো ভাব আছে কিনা তা পরীক্ষা করুন।",
          },
          {
            day: 16,
            title: "কিবর ও আত্মম্ভরিতা দমন",
            task: "অহংকার ও আত্মম্ভরিতা দূর করার উপায় অনুশীলন করুন",
            quran: "ওয়ালা তুসা'ইর খাদ্দাকা লিন্নাসি ওয়ালা তামশি ফিল আরদি মারাহা",
            translation: "মানুষের প্রতি অবজ্ঞাভরে গাল ফিরিয়ে নিও না এবং পৃথিবীতে দম্ভভরে চলো না।",
            amal: "নিজের ত্রুটি-বিচ্যুতি স্বীকার করুন",
            dua: "اللَّهُمَّ আজআলনী মিনাল মুতাওয়াদিঈন",
            duaTranslation: "হে আল্লাহ! আমাকে বিনয়ীদের অন্তর্ভুক্ত করুন।",
            tafsir: "কিবর হলো সত্যকে অস্বীকার করা ও মানুষকে হেয় করা।",
            spiritual: "নিজেকে সবার চেয়ে নিচে মনে করার চেষ্টা করুন।",
          },
          {
            day: 17,
            title: "গিবত ও হসদ থেকে মুক্তি",
            task: "পরনিন্দা ও হিংসা থেকে মুক্ত থাকার উপায় অনুশীলন করুন",
            quran: "ওয়ালা ইয়াগতাব বা'দুকুম বা'দান আইয়ুহিব্বু আহাদুকুম আন ইয়াকুলা লাহমা আখিহি মাইতান",
            translation: "তোমরা একে অপরের গীবত করো না। তোমাদের কেউ কি তার মৃত ভাইয়ের গোশত খেতে পছন্দ করবে?",
            amal: "কারো সম্পর্কে খারাপ কথা বলবেন না",
            dua: "اللَّহুম্মা তাহ্হির কালবী মিনাল হাসাদ",
            duaTranslation: "হে আল্লাহ! আমার হৃদয়কে হিংসা থেকে পবিত্র করুন।",
            tafsir: "গীবত হলো কারো অনুপস্থিতিতে এমন কথা বলা যা সে শুনলে কষ্ট পায়, আর হাসাদ হলো অন্যের নিয়ামত দেখে কষ্ট পাওয়া।",
            spiritual: "অন্যের ভালো দেখে খুশি হওয়ার অভ্যাস গড়ুন।",
          },
          {
            day: 18,
            title: "দুনিয়ার মোহ ত্যাগ",
            task: "দুনিয়ার প্রতি আসক্তি কমানোর উপায় অনুশীলন করুন",
            quran: "ওয়াল হায়াতুদ দুনিয়া ইল্লা মাতাউল গুরুউর",
            translation: "দুনিয়ার জীবন প্রতারণার সামগ্রী ছাড়া কিছুই নয়।",
            amal: "অপ্রয়োজনীয় জিনিস দান করুন",
            dua: "اللَّহুম্মাজ আলিদ দুনিয়া ফী ইয়াদী ওয়ালা তাজআলহা ফী কালবী",
            duaTranslation: "হে আল্লাহ! দুনিয়াকে আমার হাতে রাখুন, হৃদয়ে নয়।",
            tafsir: "দুনিয়া হলো আখিরাতের শস্যক্ষেত্র, এখানে যা বপন করবেন সেখানে তাই কাটবেন।",
            spiritual: "প্রতিদিন মৃত্যুর কথা স্মরণ করুন।",
          },
          {
            day: 19,
            title: "চোখ ও হৃদয়ের তাকওয়া",
            task: "দৃষ্টি ও অন্তরকে হারাম থেকে রক্ষা করুন",
            quran: "কুল লিল মু'মিনীনা ইয়াগুদ্দু মিন আবসারিহিম ওয়া ইয়াহফাজু ফুরুজাহুম",
            translation: "মুমিন পুরুষদের বলুন, তারা যেন তাদের দৃষ্টি অবনত রাখে এবং তাদের লজ্জাস্থান হেফাজত করে।",
            amal: "অনর্থক দৃষ্টিপাত থেকে বিরত থাকুন",
            dua: "اللَّহুম্মাসরিফ আন্নিস সূআ ওয়াল ফাহশা",
            duaTranslation: "হে আল্লাহ! আমাকে মন্দ ও অশ্লীলতা থেকে দূরে রাখুন।",
            tafsir: "চোখ হলো হৃদয়ের জানালা, এটি দিয়ে অনেক গুনাহ প্রবেশ করে।",
            spiritual: "দৃষ্টি নিয়ন্ত্রণ করলে অন্তর পবিত্র থাকে।",
          },
          {
            day: 20,
            title: "অন্তরের রোগ নিরাময়",
            task: "অন্তরের বিভিন্ন রোগ চিহ্নিত করে তা দূর করুন",
            quran: "ফী কুলুবিহিম মারাদুন ফাযাদাহুমুল্লা-হু মারাদা",
            translation: "তাদের অন্তরে রোগ আছে, আল্লাহ তাদের রোগ বাড়িয়ে দিয়েছেন।",
            amal: "নিজের অন্তরের রোগ চিহ্নিত করুন",
            dua: "اللَّহুম্মাশফি কালবী মিন কুল্লি মারাদ",
            duaTranslation: "হে আল্লাহ! আমার হৃদয়কে সব রোগ থেকে নিরাময় করুন।",
            tafsir: "অন্তরের রোগ হলো হিংসা, বিদ্বেষ, লোভ, অহংকার ইত্যাদি।",
            spiritual: "অন্তরের রোগ দূর করতে আত্মসমালোচনা ও যিকির করুন।",
          },
          {
            day: 21,
            title: "আত্মবিশ্লেষণ ও কালের হিসাব",
            task: "দিনের শেষে নিজের কাজের হিসাব নিন",
            quran: "ইয়া আইয়ুহাল্লাযীনা আমানুত তাকুল্লাহা ওয়ালতানজুর নাফসুম মা কাদ্দামাত লিগাদ",
            translation: "হে মুমিনগণ! আল্লাহকে ভয় করো এবং প্রত্যেকে দেখুক সে আগামীকালের জন্য কী পাঠিয়েছে।",
            amal: "প্রতিদিন রাতে নিজের হিসাব নিন",
            dua: "اللَّহুম্মা হাসিবনী হিসাবাইয়াসীরা",
            duaTranslation: "হে আল্লাহ! আমার সহজ হিসাব নিন।",
            tafsir: "নিজের হিসাব নিজে নেওয়া আখিরাতের হিসাবকে সহজ করে।",
            spiritual: "প্রতিদিন নিজের ভালো-মন্দ কাজের তালিকা করুন।",
          },
        ],
      },
      {
        week: 4,
        title: "দাওয়াহ, উম্মতের দায়িত্ব ও নেতৃত্ব",
        focus: "সমাজ পরিবর্তনে সক্রিয় ভূমিকা",
        hadith: "খাইরুন নাসি আনফাউহুম লিন্নাস - সর্বোত্তম মানুষ সে যে মানুষের জন্য সবচেয়ে বেশি উপকারী (সহিহ বুখারী)",
        days: [
          {
            day: 22,
            title: "উম্মাহর অবস্থা ও দায়িত্ব বোঝা",
            task: "বর্তমান মুসলিম উম্মাহর অবস্থা ও চ্যালেঞ্জ সম্পর্কে জানুন",
            quran: "কুনতুম খাইরা উম্মাতিন উখরিজাত লিন্নাস",
            translation: "তোমরা সর্বোত্তম উম্মত যা মানবজাতির জন্য উত্থাপিত হয়েছে।",
            amal: "উম্মাহর সমস্যা নিয়ে আলোচনা করুন",
            dua: "اللَّহুম্মা আসলিহ উম্মাতা মুহাম্মাদ",
            duaTranslation: "হে আল্লাহ! মুহাম্মদের উম্মতকে সংশোধন করুন।",
            tafsir: "উম্মতে মুহাম্মদী হওয়া একটি বিশাল সম্মান ও দায়িত্ব।",
            spiritual: "উম্মাহর জন্য দোয়া ও চিন্তা করুন।",
          },
          {
            day: 23,
            title: "দাওয়াহর কৌশল: হিকমাহ, নরম কথা",
            task: "দাওয়াহর সঠিক পদ্ধতি ও কৌশল শিখুন",
            quran: "উদ'উ ইলা সাবিলি রাব্বিকা বিল হিকমাতি ওয়াল মাওইজাতিল হাসানা",
            translation: "আপনার রবের পথে আহ্বান করুন হিকমত ও সুন্দর উপদেশের মাধ্যমে।",
            amal: "একজনকে ইসলামের সৌন্দর্য বোঝান",
            dua: "اللَّহুম্মাজ আলনী হাদিয়াম মাহদিয়া",
            duaTranslation: "হে আল্লাহ! আমাকে হিদায়াতপ্রাপ্ত হিদায়াতকারী বানান।",
            tafsir: "দাওয়াহ দেওয়া প্রতিটি মুসলিমের দায়িত্ব।",
            spiritual: "দাওয়াহ দেওয়ার আগে নিজে আমল করুন।",
          },
          {
            day: 24,
            title: "সাহাবিদের দাওয়াহ জীবন অধ্যয়ন",
            task: "সাহাবিদের দাওয়াহ পদ্ধতি ও ত্যাগ সম্পর্কে জানুন",
            quran: "মুহাম্মাদুর রাসূলুল্লাহ ওয়াল্লাযীনা মাআহু আশিদ্দায়ু আলাল কুফফারি রুহামাউ বাইনাহুম",
            translation: "মুহাম্মদ আল্লাহর রাসূল এবং যারা তাঁর সাথে আছে তারা কাফিরদের প্রতি কঠোর, নিজেদের মধ্যে সদয়।",
            amal: "একজন সাহাবির জীবনী পড়ুন",
            dua: "اللَّহুম্মারজুকনী হুব্বা আসহাবি রাসূলিকা",
            duaTranslation: "হে আল্লাহ! আমাকে আপনার রাসূলের সাহাবিদের ভালোবাসা দান করুন।",
            tafsir: "সাহাবিরা ছিলেন সর্বকালের সর্বশ্রেষ্ঠ প্রজন্ম।",
            spiritual: "সাহাবিদের ত্যাগ ও সমর্পণ থেকে শিক্ষা নিন।",
          },
          {
            day: 25,
            title: "আজকের সমাজের ফিতনা চিহ্নিতকরণ",
            task: "বর্তমান সমাজের প্রধান ফিতনা ও চ্যালেঞ্জ চিহ্নিত করুন",
            quran: "ওয়াত্তাকু ফিতনাতাল লা তুসীবান্নাল্লাযীনা জালামু মিনকুম খাসসা",
            translation: "এমন ফিতনা থেকে বাঁচো যা শুধু তোমাদের মধ্যে যারা জালিম তাদের পর্যন্ত সীমাবদ্ধ থাকবে না।",
            amal: "একটি সামাজিক সমস্যার সমাধান চিন্তা করুন",
            dua: "اللَّহুম্মা ইন্নী আউযুবিকা মিনাল ফিতান",
            duaTranslation: "হে আল্লাহ! আমি আপনার কাছে ফিতনা থেকে আশ্রয় চাই।",
            tafsir: "ফিতনা হলো যে কোনো পরীক্ষা যা মানুষকে সত্য থেকে বিচ্যুত করে।",
            spiritual: "ফিতনা থেকে বাঁচতে আল্লাহর কাছে বেশি বেশি দোয়া করুন।",
          },
          {
            day: 26,
            title: "ইসলামী নেতৃত্ব ও আদর্শ",
            task: "ইসলামিক নেতৃত্বের গুণাবলী ও দায়িত্ব সম্পর্কে জানুন",
            quran: "ওয়াজআলনা মিনহুম আইম্মাতাই ইয়াহদুনা বিআমরিনা",
            translation: "আমি তাদের মধ্য থেকে নেতা বানিয়েছি যারা আমার নির্দেশে হিদায়াত দেয়।",
            amal: "নেতৃত্বের গুণাবলী অনুশীলন করুন",
            dua: "اللَّহুম্মাজ আলনী মিন আইম্মাতিল মুত্তাকীন",
            duaTranslation: "হে আল্লাহ! আমাকে মুত্তাকিদের নেতাদের অন্তর্ভুক্ত করুন।",
            tafsir: "ইসলামে নেতৃত্ব হলো সেবা, অহংকার নয়।",
            spiritual: "নেতৃত্বের আগে আত্মনিয়ন্ত্রণ শিখুন।",
          },
          {
            day: 27,
            title: "পরিবারের ইসলামী পরিবেশ গঠন",
            task: "পরিবারে ইসলামী পরিবেশ তৈরির উপায় শিখুন",
            quran: "ইয়া আইয়ুহাল্লাযীনা আমানু কুউ আনফুসাকুম ওয়া আহলীকুম নারা",
            translation: "হে মুমিনগণ! তোমরা নিজেদের ও তোমাদের পরিবারকে আগুন থেকে রক্ষা করো।",
            amal: "পরিবারে একটি ইসলামী অনুষ্ঠান করুন",
            dua: "রাব্বানা হাব লানা মিন আজওয়াজিনা ওয়া যুররিইয়াতিনা কুররাতা আ'ইউন",
            duaTranslation: "হে আমাদের রব! আমাদের স্ত্রী ও সন্তানদের আমাদের চোখের শীতলতা বানিয়ে দিন।",
            tafsir: "পরিবার হলো সমাজের মূল ইউনিট, এটি সংশোধন হলে সমাজ সংশোধন হবে।",
            spiritual: "পরিবারের প্রতি দায়িত্বশীল হোন ও ভালোবাসা দিন।",
          },
          {
            day: 28,
            title: "উম্মাহবোধ ও একতার চেতনা",
            task: "মাস ৩ এর সমাপনী ও পরবর্তী মাসের প্রস্তুতি",
            quran: "ওয়া'তাসিমু বিহাবলিল্লাহি জামিআও ওয়ালা তাফাররাকু",
            translation: "তোমরা সবাই আল্লাহর রজ্জুকে দৃঢ়ভাবে ধারণ করো এবং বিভক্ত হয়ো না।",
            amal: "উম্মাহর একতার জন্য দোয়া করুন",
            dua: "اللَّহুম্মা আল্লিফ বাইনা কুলুবিল মুসলিমীন",
            duaTranslation: "হে আল্লাহ! মুসলিমদের হৃদয়ের মধ্যে ঐক্য স্থাপন করুন।",
            tafsir: "মুসলিম উম্মাহ একটি দেহের মতো, একটি অঙ্গে ব্যথা পেলে সারা দেহ কষ্ট পায়।",
            spiritual: "সব মুসলিমকে নিজের ভাই মনে করুন।",
          },
        ],
      },
    ],
  }

  const handleTaskComplete = (taskId: string) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }))
  }

  const getCompletionPercentage = () => {
    const totalTasks = monthData.totalDays
    const completed = Object.values(completedTasks).filter(Boolean).length
    return Math.round((completed / totalTasks) * 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/monthly-plan/month-2">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              পূর্ববর্তী মাস
            </Button>
          </Link>
          <Link href="/monthly-plan/month-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center">
              পরবর্তী মাস
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Month Overview */}
        <Card className="mb-8 border-purple-200">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="secondary">মাস ৩</Badge>
                  <Badge variant="outline" className="text-purple-700">
                    Advanced
                  </Badge>
                </div>
                <CardTitle className="text-3xl font-bold text-purple-700 bengali-text">{monthData.title}</CardTitle>
                <p className="text-gray-600 bengali-text mt-2">{monthData.subtitle}</p>
                <p className="text-gray-700 bengali-text mt-1">{monthData.description}</p>
              </div>
              <div className="text-center">
                <Star className="h-16 w-16 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Advanced</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-bold text-2xl text-purple-700">{getCompletionPercentage()}%</h3>
                <p className="text-gray-600 bengali-text">সম্পন্ন</p>
                <Progress value={getCompletionPercentage()} className="mt-2" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-2xl text-blue-700">
                  {Object.values(completedTasks).filter(Boolean).length}
                </h3>
                <p className="text-gray-600 bengali-text">সম্পন্ন টাস্ক</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-2xl text-emerald-700">{monthData.totalDays}</h3>
                <p className="text-gray-600 bengali-text">মোট দিন</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Content - Similar structure as Month 2 */}
        <Tabs defaultValue="week-1" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            {monthData.weeks.map((_, index) => (
              <TabsTrigger key={index} value={`week-${index + 1}`} className="bengali-text">
                সপ্তাহ {index + 1}
              </TabsTrigger>
            ))}
          </TabsList>

          {monthData.weeks.map((week, weekIndex) => (
            <TabsContent key={weekIndex} value={`week-${weekIndex + 1}`}>
              <Card className="border-purple-200 mb-6">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-xl font-bold text-purple-700 bengali-text">{week.title}</CardTitle>
                  <p className="text-gray-700 bengali-text">{week.focus}</p>
                  <div className="p-3 bg-white rounded border-l-4 border-purple-500 mt-3">
                    <p className="text-sm font-medium text-gray-800 bengali-text">📖 {week.hadith}</p>
                  </div>
                </CardHeader>
              </Card>

              {/* Daily Tasks */}
              <div className="grid grid-cols-1 gap-6">
                {week.days.map((day, dayIndex) => {
                  const taskId = `week-${weekIndex + 1}-day-${dayIndex + 1}`
                  const isCompleted = completedTasks[taskId]

                  return (
                    <Card
                      key={dayIndex}
                      className={`border-2 transition-all ${isCompleted ? "border-purple-300 bg-purple-50" : "border-gray-200"}`}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                checked={isCompleted}
                                onCheckedChange={() => handleTaskComplete(taskId)}
                                className="h-5 w-5"
                              />
                              <Badge variant="outline">দিন {day.day}</Badge>
                            </div>
                            <CardTitle className="text-lg font-bold text-purple-700 bengali-text">
                              {day.title}
                            </CardTitle>
                          </div>
                          {isCompleted && <CheckCircle className="h-6 w-6 text-purple-600" />}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {/* Left Column */}
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-gray-800 bengali-text mb-2">📋 আজকের টাস্ক:</h4>
                              <p className="text-gray-700 bengali-text">{day.task}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold text-gray-800 bengali-text mb-2">🕌 আমল:</h4>
                              <p className="text-gray-700 bengali-text">{day.amal}</p>
                            </div>

                            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                              <h4 className="font-semibold text-amber-800 bengali-text mb-2">📚 তাফসির:</h4>
                              <p className="text-amber-700 bengali-text text-sm">{day.tafsir}</p>
                            </div>

                            {day.spiritual && (
                              <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                                <h4 className="font-semibold text-purple-800 bengali-text mb-2">✨ আধ্যাত্মিক:</h4>
                                <p className="text-purple-700 bengali-text text-sm">{day.spiritual}</p>
                              </div>
                            )}
                          </div>

                          {/* Right Column */}
                          <div className="space-y-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <h4 className="font-semibold text-blue-800 bengali-text mb-2">📖 আয়াত:</h4>
                              <p className="text-blue-900 arabic-text text-lg mb-2">{day.quran}</p>
                              <p className="text-blue-700 bengali-text text-sm">{day.translation}</p>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                              <h4 className="font-semibold text-green-800 bengali-text mb-2">🤲 দোয়া:</h4>
                              <p className="text-green-900 arabic-text text-lg mb-2">{day.dua}</p>
                              <p className="text-green-700 bengali-text text-sm">{day.duaTranslation}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <Link href="/monthly-plan/month-2">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              পূর্ববর্তী: আমল বৃদ্ধি
            </Button>
          </Link>
          <Link href="/monthly-plan/month-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center">
              পরবর্তী মাস: দাওয়াহ ও সেবা
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
