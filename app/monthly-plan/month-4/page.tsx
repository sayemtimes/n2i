"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Crown, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Month4Page() {
  const [completedTasks, setCompletedTasks] = useState<{ [key: string]: boolean }>({})

  const monthData = {
    id: 4,
    title: "দাওয়াহ ও সেবা (Leadership & Service)",
    subtitle: "সর্বোচ্চ জ্ঞান ভিত্তিক - নেতৃত্ব ও আত্মনিবেদন",
    description: "ইসলামের বার্তা প্রচার ও মানুষের সেবা। উম্মাহর নেতৃত্ব ও সমাজ সংস্কার।",
    level: "Scholarship + Da'wah",
    totalDays: 30,
    weeks: [
      {
        week: 1,
        title: "ইলমের গভীরতা – তাফসির, হাদিস ও উসুল",
        focus: "ইসলামিক স্কলারশিপ ও গবেষণা",
        hadith: "مِدَادُ الْعُلَمَاءِ أَقْدَسُ مِنْ دَمِ الشُّهَدَاءِ - আলেমদের কলমের কালি শহীদদের রক্তের চেয়ে পবিত্র",
        days: [
          {
            day: 1,
            title: "তাফসির উলুম (উসুলুত তাফসির)",
            task: "তাফসিরের মূলনীতি ও পদ্ধতি সম্পর্কে জানুন",
            quran: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ",
            translation: "আমি কুরআনকে উপদেশ গ্রহণের জন্য সহজ করে দিয়েছি। অতএব, কোনো উপদেশ গ্রহণকারী আছে কি?",
            amal: "একটি তাফসির গ্রন্থ নিয়মিত অধ্যয়ন শুরু করুন",
            dua: "اللَّهُمَّ فَهِّمْنِي فِي الدِّينِ وَعَلِّمْنِي التَّأْوِيلَ",
            duaTranslation: "হে আল্লাহ! আমাকে দ্বীনের গভীর বুঝ দিন এবং তাফসির শিক্ষা দিন।",
            tafsir: "তাফসির উলুম হলো কুরআন বোঝার বৈজ্ঞানিক পদ্ধতি। এতে ভাষাতত্ত্ব, ইতিহাস ও শানে নুজুল অন্তর্ভুক্ত।",
            scholarship: "তাফসিরে তাবারি, ইবনে কাসির ও কুরতুবির মতো মৌলিক গ্রন্থ অধ্যয়ন করুন।",
          },
          {
            day: 2,
            title: "কুরআনের ভাষা ও বালাগাহ",
            task: "কুরআনের অলংকারশাস্ত্র ও ভাষাগত সৌন্দর্য অধ্যয়ন করুন",
            quran: "قُل لَّئِنِ اجْتَمَعَتِ الْإِنسُ وَالْجِنُّ عَلَىٰ أَن يَأْتُوا بِمِثْلِ هَٰذَا الْقُرْآنِ",
            translation: "বলুন, মানুষ ও জিন একত্রিত হয়ে এই কুরআনের অনুরূপ কিছু আনতে চাইলেও পারবে না।",
            amal: "কুরআনের একটি আয়াতের বালাগাত বিশ্লেষণ করুন",
            dua: "اللَّهُمَّ زَيِّنِّي بِزِينَةِ الْقُرْآنِ",
            duaTranslation: "হে আল্লাহ! আমাকে কুরআনের সৌন্দর্য দিয়ে সুশোভিত করুন।",
            tafsir: "কুরআনের ভাষাগত অলৌকিকত্ব (ইজাজুল কুরআন) এর অন্যতম প্রমাণ।",
            scholarship: "আরবি বালাগাত ও সাহিত্যের মৌলিক বিষয়গুলো শিখুন।",
          },
          {
            day: 3,
            title: "উসূলুল হাদিস পরিচয়",
            task: "হাদিসের সনদ ও মতন যাচাইয়ের নিয়ম শিখুন",
            quran: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا",
            translation: "হে মুমিনগণ! কোনো ফাসিক ব্যক্তি তোমাদের কাছে কোনো সংবাদ নিয়ে এলে তা যাচাই করো।",
            amal: "একটি হাদিসের সনদ ও মান যাচাই করুন",
            dua: "اللَّهُمَّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ",
            duaTranslation: "হে আল্লাহ! আমাকে সত্যকে সত্য হিসেবে দেখান এবং তা অনুসরণের তাওফিক দিন।",
            tafsir: "হাদিস যাচাইয়ের বৈজ্ঞানিক পদ্ধতি ইসলামের অনন্য অবদান।",
            scholarship: "সহিহ, হাসান, দাইফ হাদিসের পার্থক্য ও নিয়ম জানুন।",
          },
          {
            day: 4,
            title: "মাজহাব ও ফিকহি মতপার্থক্য",
            task: "চার মাজহাবের মূলনীতি ও পার্থক্য সম্পর্কে জানুন",
            quran: "وَمَا اخْتَلَفْتُمْ فِيهِ مِن شَيْءٍ فَحُكْمُهُ إِلَى اللَّهِ",
            translation: "তোমরা যে বিষয়ে মতভেদ করো, তার ফয়সালা আল্লাহর কাছে।",
            amal: "একটি ফিকহি মাসআলায় বিভিন্ন মতামত জানুন",
            dua: "اللَّهُمَّ أَلْهِمْنِي رُشْدِي",
            duaTranslation: "হে আল্লাহ! আমাকে সঠিক পথের ইলহাম দিন।",
            tafsir: "ইখতিলাফ (মতপার্থক্য) রহমত যখন তা সঠিক নিয়মে হয়।",
            scholarship: "ইমাম আবু হানিফা, মালিক, শাফেয়ি ও আহমদের মূলনীতি জানুন।",
          },
          {
            day: 5,
            title: "হাদিসের সূত্র বিশ্লেষণ",
            task: "একটি হাদিসের পূর্ণ সনদ ও রাবিদের জীবনী অধ্যয়ন করুন",
            quran: "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَا خَوْفٌ عَلَيْهِمْ",
            translation: "যারা ইমান এনেছে ও সৎকর্ম করেছে, তাদের কোনো ভয় নেই।",
            amal: "একজন হাদিস বর্ণনাকারীর জীবনী পড়ুন",
            dua: "اللَّهُمَّ اجْعَلْنِي مِنَ الصَّادِقِينَ",
            duaTranslation: "হে আল্লাহ! আমাকে সত্যবাদীদের অন্তর্ভুক্ত করুন।",
            tafsir: "হাদিসের সনদ যাচাই ইতিহাসের সবচেয়ে নির্ভুল পদ্ধতি।",
            scholarship: "তাবাকাতুর রুওয়াত ও রিজাল শাস্ত্রের পরিচয় নিন।",
          },
          {
            day: 6,
            title: "ইসলামী আকীদাহর স্তম্ভ",
            task: "আহলুস সুন্নাহ ওয়াল জামাআতের আকিদা অধ্যয়ন করুন",
            quran: "آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ",
            translation: "রাসূল তাঁর রবের পক্ষ থেকে যা নাযিল হয়েছে তাতে ইমান এনেছেন এবং মুমিনরাও।",
            amal: "আকিদার মৌলিক বিষয়গুলো পুনরায় দৃঢ় করুন",
            dua: "اللَّهُمَّ ثَبِّتْنِي عَلَى دِينِكَ",
            duaTranslation: "হে আল্লাহ! আমাকে আপনার দ্বীনের উপর অটল রাখুন।",
            tafsir: "সঠিক আকিদা ইসলামের ভিত্তি এবং সকল আমলের শর্ত।",
            scholarship: "আকিদাতুত তাহাবিয়া ও অন্যান্য মৌলিক গ্রন্থ অধ্যয়ন করুন।",
          },
          {
            day: 7,
            title: "জ্ঞান চর্চার রুটিন প্রতিষ্ঠা",
            task: "দৈনিক ইসলামিক জ্ঞান চর্চার একটি নিয়মিত রুটিন তৈরি করুন",
            quran: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
            translation: "বলুন, হে আমার রব! আমার জ্ঞান বৃদ্ধি করুন।",
            amal: "প্রতিদিন ১ ঘন্টা ইসলামিক জ্ঞান চর্চা করুন",
            dua: "اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي",
            duaTranslation: "হে আল্লাহ! আমাকে যা শিখিয়েছেন তা দিয়ে উপকৃত করুন।",
            tafsir: "জ্ঞান অর্জন প্রতিটি মুসলিমের উপর ফরজ।",
            scholarship: "একটি দীর্ঘমেয়াদী ইসলামিক শিক্ষা পরিকল্পনা তৈরি করুন।",
          },
        ],
      },
      {
        week: 2,
        title: "উসূল ও গবেষণা – গভীরতর গবেষণা ও ইজতিহাদ",
        focus: "সমসাময়িক ইস্যুতে ইসলামিক সমাধান",
        hadith: "مَنِ اجْتَهَدَ فَأَصَابَ فَلَهُ أَجْرَانِ - যে ইজতিহাদ করে সঠিক সিদ্ধান্তে পৌঁছায় তার দুটি সওয়াব",
        days: [
          {
            day: 8,
            title: "উসূলুল ফিকহ – মূলনীতি",
            task: "ইসলামি আইনশাস্ত্রের মূলনীতি অধ্যয়ন করুন",
            quran: "وَمَا كَانَ لِمُؤْمِنٍ وَلَا مُؤْمِنَةٍ إِذَا قَضَى اللَّهُ وَرَسُولُهُ أَمْرًا",
            translation: "আল্লাহ ও তাঁর রাসূল কোনো বিষয়ে ফয়সালা দিলে কোনো মুমিন পুরুষ বা নারীর সে বিষয়ে ভিন্ন মত পোষণের অধিকার নেই।",
            amal: "একটি ফিকহি মাসআলার দলিল খুঁজুন",
            dua: "اللَّهُمَّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ",
            duaTranslation: "হে আল্লাহ! সত্যকে সত্য হিসেবে দেখান এবং তা অনুসরণের তাওফিক দিন।",
            tafsir: "উসূলুল ফিকহ হলো ইসলামি আইন প্রণয়নের বৈজ্ঞানিক পদ্ধতি।",
            scholarship: "কিতাব, সুন্নাহ, ইজমা ও কিয়াসের প্রয়োগ পদ্ধতি জানুন।",
          },
          {
            day: 9,
            title: "কিয়াস ও ইজমার প্রয়োগ",
            task: "অনুমান ও ঐকমত্যের ভিত্তিতে সমাধান খোঁজার পদ্ধতি শিখুন",
            quran: "فَاعْتَبِرُوا يَا أُولِي الْأَبْصَارِ",
            translation: "হে চক্ষুষ্মানগণ! তোমরা শিক্ষা গ্রহণ করো।",
            amal: "একটি আধুনিক সমস্যার ইসলামিক সমাধান খুঁজুন",
            dua: "اللَّهُمَّ أَلْهِمْنِي الصَّوَابَ",
            duaTranslation: "হে আল্লাহ! আমাকে সঠিক সিদ্ধান্তের ইলহাম দিন।",
            tafsir: "কিয়াস ও ইজমা ইসলামি আইনের গুরুত্বপূর্ণ উৎস।",
            scholarship: "সমসাময়িক ফিকহি একাডেমির ফতোয়া অধ্যয়ন করুন।",
          },
          {
            day: 10,
            title: "মুসলিম ইতিহাস – উমাইয়া/আব্বাসীয়",
            task: "ইসলামি সভ্যতার স্বর্ণযুগের ইতিহাস অধ্যয়ন করুন",
            quran: "وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا",
            translation: "এভাবে আমি তোমাদের মধ্যপন্থী উম্মত বানিয়েছি।",
            amal: "ইসলামি সভ্যতার একটি অবদান নিয়ে গবেষণা করুন",
            dua: "اللَّهُمَّ أَعِزَّ الْإِسْلَامَ وَالْمُسْلِمِينَ",
            duaTranslation: "হে আল্লাহ! ইসলাম ও মুসলিমদের সম্মান বৃদ্ধি করুন।",
            tafsir: "মুসলিম উম্মাহর ইতিহাস থেকে শিক্ষা নেওয়া জরুরি।",
            scholarship: "তাবারি, ইবনে খালদুন ও অন্যান্য ঐতিহাসিকদের গ্রন্থ পড়ুন।",
          },
          // Continue with remaining days...
        ],
      },
      {
        week: 3,
        title: "আত্মশুদ্ধির চূড়ান্ত স্তর – ইহসান ও ফনা",
        focus: "আধ্যাত্মিক পূর্ণতা ও আল্লাহর নৈকট্য",
        hadith: "أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ - তুমি আল্লাহর ইবাদত করো যেন তুমি তাঁকে দেখছো",
        days: [
          {
            day: 15,
            title: "ইহসান – 'তুমি যেন আল্লাহকে দেখছো...'",
            task: "ইহসানের মর্ম বুঝুন এবং এই স্তরে ইবাদত করার চেষ্টা করুন",
            quran: "وَاعْبُدْ رَبَّكَ حَتَّىٰ يَأْتِيَكَ الْيَقِينُ",
            translation: "আপনার রবের ইবাদত করুন যতক্ষণ না আপনার কাছে নিশ্চয়তা আসে।",
            amal: "প্রতিটি ইবাদতে আল্লাহর উপস্থিতি অনুভব করুন",
            dua: "اللَّهُمَّ أَعِنِّي عَلَى مُرَاقَبَتِكَ فِي السِّرِّ وَالْعَلَانِيَةِ",
            duaTranslation: "হে আল্লাহ! গোপনে ও প্রকাশ্যে আপনার নিরীক্ষণে আমাকে সাহায্য করুন।",
            tafsir: "ইহসান হলো ইবাদতের সর্বোচ্চ স্তর যেখানে বান্দা আল্লাহকে দেখার মতো অনুভূতি নিয়ে ইবাদত করে।",
            scholarship: "ইহসান অর্জনের জন্য নিয়মিত মুরাকাবা (আত্মনিরীক্ষণ) ও যিকির করুন।",
          },
          {
            day: 16,
            title: "তাওয়াক্কুল – পূর্ণ নির্ভরতা",
            task: "আল্লাহর উপর পূর্ণ ভরসা ও নির্ভরতার অনুশীলন করুন",
            quran: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
            translation: "যে আল্লাহর উপর ভরসা করে, তিনি তার জন্য যথেষ্ট।",
            amal: "সব বিষয়ে আল্লাহর উপর ভরসা করুন",
            dua: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
            duaTranslation: "আল্লাহই আমাদের জন্য যথেষ্ট এবং তিনি উত্তম কর্মবিধায়ক।",
            tafsir: "তাওয়াক্কুল মানে কারণ অবলম্বন করে আল্লাহর উপর পূর্ণ নির্ভর করা।",
            scholarship: "তাওয়াক্কুল ও তাওয়াকুলের মধ্যে পার্থক্য বুঝুন - প্রথমটি ইসলামী, দ্বিতীয়টি অলসতা।",
          },
          {
            day: 17,
            title: "তাওবা ও আত্মার পরিশুদ্ধি",
            task: "গভীর তাওবা ও আত্মার সম্পূর্ণ পরিশুদ্ধির জন্য কাজ করুন",
            quran: "وَتُوبُوا إِلَى اللَّهِ جَمِيعًا أَيُّهَ الْمُؤْمِنُونَ لَعَلَّكُمْ تُفْلِحُونَ",
            translation: "হে মুমিনগণ! তোমরা সবাই আল্লাহর কাছে তাওবা করো যাতে তোমরা সফল হতে পারো।",
            amal: "প্রতিদিন ১০০ বার তাওবা ও ইস্তিগফার করুন",
            dua: "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي",
            duaTranslation: "হে আমার রব! আমি নিজের উপর জুলুম করেছি, আমাকে ক্ষমা করুন।",
            tafsir: "তাওবার শর্ত: অনুশোচনা, ক্ষমা প্রার্থনা, গুনাহ ছেড়ে দেওয়া ও পুনরায় না করার দৃঢ় সংকল্প।",
            scholarship: "তাওবাতুন নাসুহ (খাঁটি তাওবা) সম্পর্কে বিস্তারিত অধ্যয়ন করুন।",
          },
          {
            day: 18,
            title: "জুহদ – দুনিয়ার প্রতি উদাসীনতা",
            task: "দুনিয়ার প্রতি সুস্থ উদাসীনতা ও আখিরাতমুখিতা অর্জন করুন",
            quran: "وَمَا الْحَيَاةُ الدُّنْيَا فِي الْآخِرَةِ إِلَّا مَتَاعٌ",
            translation: "আখিরাতের তুলনায় দুনিয়ার জীবন সামান্য ভোগ-সামগ্রী মাত্র।",
            amal: "অপ্রয়োজনীয় বিলাসিতা ত্যাগ করুন",
            dua: "اللَّهُمَّ اجْعَلِ الدُّنْيَا فِي يَدِي وَلَا تَجْعَلْهَا فِي قَلْبِي",
            duaTranslation: "হে আল্লাহ! দুনিয়াকে আমার হাতে রাখুন, হৃদয়ে নয়।",
            tafsir: "জুহদ মানে দুনিয়া ত্যাগ নয়, বরং দুনিয়ার প্রতি অন্তরের আসক্তি ত্যাগ।",
            scholarship: "সালাফদের জুহদের ঘটনা অধ্যয়ন করুন এবং আধুনিক জীবনে এর প্রয়োগ বুঝুন।",
          },
          {
            day: 19,
            title: "ইখলাসের চূড়া অর্জন",
            task: "ইখলাসের সর্বোচ্চ স্তরে পৌঁছানোর চেষ্টা করুন",
            quran: "قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ",
            translation: "বলুন, আমার নামাজ, আমার কুরবানি, আমার জীবন ও আমার মৃত্যু সবকিছু বিশ্বজগতের রব আল্লাহর জন্য।",
            amal: "প্রতিটি কাজে শুধু আল্লাহর সন্তুষ্টি কামনা করুন",
            dua: "اللَّهُمَّ أَخْلِصْ دِينِي لَكَ",
            duaTranslation: "হে আল্লাহ! আমার দ্বীনকে আপনার জন্য একনিষ্ঠ করে দিন।",
            tafsir: "ইখলাসের চূড়া হলো জীবনের প্রতিটি মুহূর্ত আল্লাহর জন্য উৎসর্গ করা।",
            scholarship: "রিয়া (লোক দেখানো) এর সূক্ষ্ম রূপগুলো চিহ্নিত করুন ও তা থেকে বাঁচুন।",
          },
          {
            day: 20,
            title: "ফানা ফিল্লাহ – আত্মসমর্পণ",
            task: "আল্লাহর ইচ্ছায় নিজের ইচ্ছাকে বিলীন করার অনুশীলন করুন",
            quran: "وَمَا تَشَاءُونَ إِلَّا أَن يَشَاءَ اللَّهُ",
            translation: "তোমরা ইচ্ছা করতে পারো না, যদি না আল্লাহ ইচ্ছা করেন।",
            amal: "সব বিষয়ে 'ইনশাআল্লাহ' বলার অভ্যাস করুন",
            dua: "رَضِيتُ بِاللَّهِ رَبًّا وَبِالْإِسْلَامِ دِينًا وَبِمُحَمَّدٍ رَسُولًا",
            duaTranslation: "আমি আল্লাহকে রব, ইসলামকে দ্বীন এবং মুহাম্মদকে রাসূল হিসেবে সন্তুষ্টচিত্তে গ্রহণ করলাম।",
            tafsir: "ফানা ফিল্লাহ মানে নিজের অহংকার ও ইচ্ছাকে আল্লাহর ইচ্ছায় বিলীন করা।",
            scholarship: "সুফি তত্ত্বের ফানা ও বাকা সম্পর্কে সুন্নি দৃষ্টিভঙ্গি অধ্যয়ন করুন।",
          },
          {
            day: 21,
            title: "একান্ত আত্মবিশ্লেষণ",
            task: "গভীর আত্মবিশ্লেষণ ও আধ্যাত্মিক অগ্রগতি মূল্যায়ন করুন",
            quran: "بَلِ الْإِنسَانُ عَلَىٰ نَفْسِهِ بَصِيرَةٌ",
            translation: "বরং মানুষ নিজের ব্যাপারে সম্যক অবগত।",
            amal: "নিজের আধ্যাত্মিক অবস্থার গভীর পর্যালোচনা করুন",
            dua: "اللَّهُمَّ أَرِنِي عُيُوبِي وَلَا تَفْضَحْنِي بِهَا",
            duaTranslation: "হে আল্লাহ! আমার দোষত্রুটি আমাকে দেখান কিন্তু তা দিয়ে আমাকে লজ্জিত করবেন না।",
            tafsir: "আত্মবিশ্লেষণ আত্মশুদ্ধির প্রথম ও গুরুত্বপূর্ণ ধাপ।",
            scholarship: "ইমাম গাজালির 'ইহইয়াউ উলুমিদ্দিন' থেকে আত্মবিশ্লেষণের পদ্ধতি শিখুন।",
          },
        ],
      },
      {
        week: 4,
        title: "নেতৃত্ব, উম্মাহ ও আত্মনিবেদন",
        focus: "উম্মাহর সেবায় জীবন উৎসর্গ",
        hadith: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ - তোমাদের মধ্যে সেই উত্তম যে মানুষের সবচেয়ে বেশি উপকার করে",
        days: [
          {
            day: 22,
            title: "ইসলামী নেতৃত্বের বৈশিষ্ট্য",
            task: "ইসলামী নেতৃত্বের মূলনীতি ও গুণাবলী অধ্যয়ন করুন",
            quran: "وَجَعَلْنَا مِنْهُمْ أَئِمَّةً يَهْدُونَ بِأَمْرِنَا لَمَّا صَبَرُوا",
            translation: "যখন তারা ধৈর্য ধরল, তখন আমি তাদের মধ্য থেকে নেতা বানিয়েছি যারা আমার নির্দেশে হিদায়াত দেয়।",
            amal: "নেতৃত্বের গুণাবলী নিজের মধ্যে গড়ুন",
            dua: "اللَّهُمَّ اجْعَلْنِي إِمَامًا لِلْمُتَّقِينَ",
            duaTranslation: "হে আল্লাহ! আমাকে মুত্তাকিদের নেতা বানান।",
            tafsir: "ইসলামী নেতৃত্ব হলো সেবা, ক্ষমতা নয়। নেতা হলেন উম্মাহর খাদেম।",
            scholarship: "খুলাফায়ে রাশেদিনের নেতৃত্বের নীতিমালা অধ্যয়ন করুন।",
          },
          {
            day: 23,
            title: "উম্মাহর ভবিষ্যৎ ও ভূমিকা",
            task: "মুসলিম উম্মাহর ভবিষ্যৎ দিকনির্দেশনা ও আপনার ভূমিকা নির্ধারণ করুন",
            quran: "كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِالْمَعْرُوفِ وَتَنْهَوْنَ عَنِ الْمُنكَرِ",
            translation: "তোমরা সর্বোত্তম উম্মত যা মানবজাতির জন্য উত্থাপিত হয়েছে, তোমরা ভালো কাজের আদেশ দাও ও মন্দ কাজে নিষেধ করো।",
            amal: "উম্মাহর কল্যাণে একটি পরিকল্পনা তৈরি করুন",
            dua: "اللَّهُمَّ أَصْلِحْ أُمَّةَ مُحَمَّدٍ وَارْحَمْهَا",
            duaTranslation: "হে আল্লাহ! মুহাম্মদের উম্মতকে সংশোধন করুন ও তাদের প্রতি রহম করুন।",
            tafsir: "উম্মতে মুহাম্মদীর দায়িত্ব হলো সমগ্র মানবজাতির কল্যাণ সাধন।",
            scholarship: "ইকবালের 'পুনর্গঠন' ও আধুনিক ইসলামী চিন্তাবিদদের দৃষ্টিভঙ্গি অধ্যয়ন করুন।",
          },
          {
            day: 24,
            title: "মিডিয়ায় ইসলাম প্রচার",
            task: "আধুনিক মিডিয়ার মাধ্যমে ইসলাম প্রচারের কৌশল শিখুন",
            quran: "وَمَنْ أَحْسَنُ قَوْلًا مِّمَّن دَعَا إِلَى اللَّهِ وَعَمِلَ صَالِحًا",
            translation: "তার চেয়ে কার কথা সুন্দর যে আল্লাহর দিকে ডাকে এবং সৎকর্ম করে।",
            amal: "সোশ্যাল মিডিয়ায় ইসলামী কন্টেন্ট শেয়ার করুন",
            dua: "اللَّهُمَّ بَلِّغْ دِينَكَ عَلَى يَدِي",
            duaTranslation: "হে আল্লাহ! আমার হাতে আপনার দ্বীন পৌঁছে দিন।",
            tafsir: "আধুনিক যুগে দাওয়াহর মাধ্যম পরিবর্তিত হলেও মূল বার্তা অপরিবর্তিত।",
            scholarship: "ডিজিটাল দাওয়াহর নীতিমালা ও কার্যকর পদ্ধতি অধ্যয়ন করুন।",
          },
          {
            day: 25,
            title: "ইসলামিক ইনিশিয়েটিভ তৈরি",
            task: "সমাজের কল্যাণে একটি ইসলামিক উদ্যোগ/প্রকল্প পরিকল্পনা করুন",
            quran: "وَفِي أَمْوَالِهِمْ حَقٌّ لِّلسَّائِلِ وَالْمَحْرُومِ",
            translation: "তাদের সম্পদে প্রার্থনাকারী ও বঞ্চিতদের হক রয়েছে।",
            amal: "একটি সামাজিক সেবামূলক প্রকল্প শুরু করুন",
            dua: "اللَّهُمَّ اسْتَعْمِلْنِي وَلَا تَسْتَبْدِلْنِي",
            duaTranslation: "হে আল্লাহ! আমাকে কাজে লাগান, প্রতিস্থাপন করবেন না।",
            tafsir: "ইসলামে ব্যক্তিগত উন্নতির সাথে সামাজিক দায়বদ্ধতা অবিচ্ছেদ্য।",
            scholarship: "সমসাময়িক ইসলামী NGO ও সামাজিক উদ্যোগের মডেল অধ্যয়ন করুন।",
          },
          {
            day: 26,
            title: "ইসলামী লেখালেখি ও বক্তব্য",
            task: "ইসলামী বিষয়ে লেখালেখি ও বক্তৃতার দক্ষতা অর্জন করুন",
            quran: "ن وَالْقَلَمِ وَمَا يَسْطُرُونَ",
            translation: "নুন। কলমের শপথ এবং যা তারা লিখে তার শপথ।",
            amal: "ইসলামী বিষয়ে একটি প্রবন্ধ লিখুন",
            dua: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي",
            duaTranslation: "হে আমার রব! আমার বুক প্রশস্ত করুন, আমার কাজ সহজ করুন এবং আমার জিহ্বার জড়তা দূর করুন।",
            tafsir: "কলম হলো জ্ঞান প্রচারের শক্তিশালী মাধ্যম।",
            scholarship: "ইসলামী সাহিত্য ও বক্তৃতার শিল্প অধ্যয়ন করুন।",
          },
          {
            day: 27,
            title: "অন্যান্যদের তৈরি করা",
            task: "পরবর্তী প্রজন্মের ইসলামী নেতৃত্ব তৈরিতে ভূমিকা রাখুন",
            quran: "وَالَّذِينَ يَقُولُونَ رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
            translation: "যারা বলে: হে আমাদের রব! আমাদের স্ত্রী ও সন্তানদের আমাদের চোখের শীতলতা বানান এবং আমাদের মুত্তাকিদের নেতা বানান।",
            amal: "কাউকে ইসলামী শিক্ষা দিন বা পথ দেখান",
            dua: "اللَّهُمَّ اجْعَلْنِي مُبَارَكًا أَيْنَ مَا كُنْتُ",
            duaTranslation: "হে আল্লাহ! আমি যেখানেই থাকি আমাকে বরকতময় বানান।",
            tafsir: "সত্যিকারের নেতা তারা যারা অন্যদের নেতা বানাতে পারেন।",
            scholarship: "শিক্ষকতা ও মেন্টরিংয়ের ইসলামী পদ্ধতি অধ্যয়ন করুন।",
          },
          {
            day: 28,
            title: "দাওয়াহর ভবিষ্যৎ পরিকল্পনা",
            task: "আপনার জীবনের দাওয়াহ মিশনের দীর্ঘমেয়াদী পরিকল্পনা তৈরি করুন",
            quran: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ",
            translation: "আমি জিন ও মানুষকে কেবল আমার ইবাদতের জন্যই সৃষ্টি করেছি।",
            amal: "জীবনের লক্ষ্য ও দাওয়াহ পরিকল্পনা লিখুন",
            dua: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ وَتُبْ عَلَيْنَا إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ",
            duaTranslation:
              "হে আমাদের রব! আমাদের থেকে কবুল করুন। নিশ্চয়ই আপনি সর্বশ্রোতা, সর্বজ্ঞ। আমাদের তওবা কবুল করুন। নিশ্চয়ই আপনি তওবা কবুলকারী, দয়ালু।",
            tafsir: "মানুষের সৃষ্টির উদ্দেশ্য হলো আল্লাহর ইবাদত ও তাঁর দ্বীন প্রতিষ্ঠা।",
            scholarship: "৪ মাসের এই যাত্রার সামগ্রিক মূল্যায়ন করুন এবং ভবিষ্যৎ পথ নির্ধারণ করুন।",
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/monthly-plan/month-3">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              পূর্ববর্তী মাস
            </Button>
          </Link>
          <Link href="/monthly-plan">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white flex items-center">
              পরিকল্পনা সম্পূর্ণ
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Month Overview */}
        <Card className="mb-8 border-amber-200">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-emerald-50">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="secondary">মাস ৪</Badge>
                  <Badge variant="outline" className="text-amber-700">
                    Scholarship + Da'wah
                  </Badge>
                </div>
                <CardTitle className="text-3xl font-bold text-amber-700 bengali-text">{monthData.title}</CardTitle>
                <p className="text-gray-600 bengali-text mt-2">{monthData.subtitle}</p>
                <p className="text-gray-700 bengali-text mt-1">{monthData.description}</p>
              </div>
              <div className="text-center">
                <Crown className="h-16 w-16 text-amber-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Leadership</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-bold text-2xl text-amber-700">{getCompletionPercentage()}%</h3>
                <p className="text-gray-600 bengali-text">সম্পন্ন</p>
                <Progress value={getCompletionPercentage()} className="mt-2" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-2xl text-emerald-700">
                  {Object.values(completedTasks).filter(Boolean).length}
                </h3>
                <p className="text-gray-600 bengali-text">সম্পন্ন টাস্ক</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-2xl text-purple-700">{monthData.totalDays}</h3>
                <p className="text-gray-600 bengali-text">মোট দিন</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Content */}
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
              <Card className="border-amber-200 mb-6">
                <CardHeader className="bg-amber-50">
                  <CardTitle className="text-xl font-bold text-amber-700 bengali-text">{week.title}</CardTitle>
                  <p className="text-gray-700 bengali-text">{week.focus}</p>
                  <div className="p-3 bg-white rounded border-l-4 border-amber-500 mt-3">
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
                      className={`border-2 transition-all ${isCompleted ? "border-amber-300 bg-amber-50" : "border-gray-200"}`}
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
                            <CardTitle className="text-lg font-bold text-amber-700 bengali-text">{day.title}</CardTitle>
                          </div>
                          {isCompleted && <CheckCircle className="h-6 w-6 text-amber-600" />}
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

                            {day.tafsir && (
                              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                                <h4 className="font-semibold text-blue-800 bengali-text mb-2">📚 তাফসির:</h4>
                                <p className="text-blue-700 bengali-text text-sm">{day.tafsir}</p>
                              </div>
                            )}

                            {day.scholarship && (
                              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                                <h4 className="font-semibold text-amber-800 bengali-text mb-2">🎓 স্কলারশিপ:</h4>
                                <p className="text-amber-700 bengali-text text-sm">{day.scholarship}</p>
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

        {/* Completion Message */}
        <Card className="mt-12 border-emerald-200 bg-gradient-to-r from-emerald-50 to-amber-50">
          <CardContent className="p-8 text-center">
            <Crown className="h-16 w-16 text-amber-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 bengali-text islamic-text-gradient">
              অভিনন্দন! আপনি ৪ মাসের যাত্রা সম্পন্ন করেছেন
            </h3>
            <p className="text-gray-600 mb-6 bengali-text max-w-2xl mx-auto">
              আলহামদুলিল্লাহ! আপনি ইলম থেকে ইখলাসের পথে একটি গুরুত্বপূর্ণ মাইলফলক অর্জন করেছেন। এখন আপনি দাওয়াহ ও উম্মাহর সেবায় নিজেকে
              নিয়োজিত করুন।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-assistant">
                <Button className="islamic-gradient text-white px-6 py-3">AI সহায়ক ব্যবহার করুন</Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" className="border-emerald-600 text-emerald-600 px-6 py-3">
                  ব্লগ পড়ুন
                </Button>
              </Link>
              <Link href="/downloads">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">সার্টিফিকেট ডাউনলোড</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <Link href="/monthly-plan/month-3">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              পূর্ববর্তী: আত্মশুদ্ধি
            </Button>
          </Link>
          <Link href="/monthly-plan">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white flex items-center">
              সম্পূর্ণ পরিকল্পনা দেখুন
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
