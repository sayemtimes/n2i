"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, BookOpen, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Month1Page() {
  const [completedTasks, setCompletedTasks] = useState<{ [key: string]: boolean }>({})

  const monthData = {
    id: 1,
    title: "ভিত্তি স্থাপন (Foundation Building)",
    subtitle: "নিয়ত ও সংশোধন - জ্ঞান অর্জনের ধারাবাহিকতা",
    description: "ইসলামিক জীবনযাত্রার মূল ভিত্তি তৈরি করুন। নামাজ, কুরআন ও মৌলিক ইসলামিক জ্ঞান অর্জন।",
    level: "Beginner",
    totalDays: 28,
    weeks: [
      {
        week: 1,
        title: "নামাজ, পবিত্রতা ও নিয়ত",
        focus: "আল্লাহর সন্তুষ্টির উদ্দেশ্যে জীবন গঠনের নিয়ত",
        hadith: "إنما الأعمال بالنيات - কাজের ফলাফল নিয়তের উপর নির্ভরশীল (সহিহ বুখারী)",
        days: [
          {
            day: 1,
            title: "নিয়ত সংশোধন",
            task: "আল্লাহর সন্তুষ্টির জন্য ইসলাম শিখার দৃঢ় নিয়ত করুন",
            quran: "وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ",
            translation: "তাদেরকে কেবল এই নির্দেশ দেওয়া হয়েছিল যে, তারা যেন আল্লাহর ইবাদত করে তাঁর জন্য দ্বীনকে একনিষ্ঠ করে।",
            amal: "৫ ওয়াক্ত নামাজ পড়ার নিয়ত করুন",
            dua: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
            duaTranslation: "হে আল্লাহ! আপনার যিকর, শুকর ও সুন্দর ইবাদতে আমাকে সাহায্য করুন।",
          },
          {
            day: 2,
            title: "ওযু শেখা",
            task: "সহিহভাবে ওযু করার নিয়ম শিখুন ও অনুশীলন করুন",
            quran: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ",
            translation: "হে মুমিনগণ! যখন তোমরা নামাজের জন্য দাঁড়াও, তখন তোমাদের মুখমণ্ডল ধৌত করো।",
            amal: "নিজ হাতে সহিহ নিয়মে ওযু করুন",
            dua: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ",
            duaTranslation: "আমি সাক্ষ্য দিচ্ছি যে, আল্লাহ ছাড়া কোনো ইলাহ নেই এবং মুহাম্মদ আল্লাহর রাসূল।",
          },
          {
            day: 3,
            title: "নামাজের ফজিলত",
            task: "নামাজের গুরুত্ব ও ফজিলত সম্পর্কে জানুন",
            quran: "إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ",
            translation: "নিশ্চয়ই নামাজ অশ্লীল ও মন্দ কাজ থেকে বিরত রাখে।",
            amal: "ফজরের নামাজ জামায়াতে পড়ার চেষ্টা করুন",
            dua: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا",
            duaTranslation: "হে আল্লাহ! আপনি আমাদের যা রিজিক দিয়েছেন তাতে বরকত দিন।",
          },
          {
            day: 4,
            title: "তায়াম্মুম শেখা",
            task: "পানি না পেলে তায়াম্মুমের নিয়ম শিখুন",
            quran: "فَلَمْ تَجِدُوا مَاءً فَتَيَمَّمُوا صَعِيدًا طَيِّبًا",
            translation: "যদি পানি না পাও, তাহলে পবিত্র মাটি দিয়ে তায়াম্মুম করো।",
            amal: "তায়াম্মুম করার অনুশীলন করুন",
            dua: "اللَّهُمَّ طَهِّرْ قَلْبِي مِنَ النِّفَاقِ",
            duaTranslation: "হে আল্লাহ! আমার হৃদয়কে মুনাফেকি থেকে পবিত্র করুন।",
          },
          {
            day: 5,
            title: "নামাজের ফরজ-সুন্নত",
            task: "নামাজের ফরজ, ওয়াজিব ও সুন্নত সম্পর্কে জানুন",
            quran: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ",
            translation: "নামাজ কায়েম করো এবং যাকাত দাও।",
            amal: "এক ওয়াক্ত নামাজ ধীরে ও শুদ্ধভাবে পড়ুন",
            dua: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
            duaTranslation: "হে আমাদের রব! আমাদের থেকে কবুল করুন। নিশ্চয়ই আপনি সর্বশ্রোতা, সর্বজ্ঞ।",
          },
          {
            day: 6,
            title: "ছোট সূরা মুখস্থ",
            task: "সূরা ফিল ও কাওসার মুখস্থ করুন",
            quran: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
            translation: "নিশ্চয়ই আমি আপনাকে কাওসার দিয়েছি।",
            amal: "সঠিক উচ্চারণে সূরা মুখস্থ করুন",
            dua: "اللَّهُمَّ اجْعَلْ الْقُرْآنَ رَبِيعَ قَلْبِي",
            duaTranslation: "হে আল্লাহ! কুরআনকে আমার হৃদয়ের বসন্ত বানিয়ে দিন।",
          },
          {
            day: 7,
            title: "সপ্তাহ রিভিউ",
            task: "এই সপ্তাহের অগ্রগতি মূল্যায়ন করুন",
            quran: "وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا",
            translation: "যারা আমার পথে সংগ্রাম করে, আমি অবশ্যই তাদের আমার পথসমূহ দেখাবো।",
            amal: "আপনার অগ্রগতি লিখে রাখুন",
            dua: "رَبِّ زِدْنِي عِلْمًا",
            duaTranslation: "হে আমার রব! আমার জ্ঞান বৃদ্ধি করুন।",
          },
        ],
      },
      {
        week: 2,
        title: "কুরআন পাঠ, দোয়া ও যিকর",
        focus: "কুরআনের সাথে দৈনিক সম্পর্ক স্থাপন",
        hadith: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ - তোমাদের মধ্যে সেই উত্তম যে কুরআন শেখে ও শেখায় (সহিহ বুখারী)",
        days: [
          {
            day: 8,
            title: "প্রতিদিন কুরআন পাঠ শুরু",
            task: "প্রতিদিন কমপক্ষে ৫ আয়াত কুরআন পাঠ করুন",
            quran: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا",
            translation: "কুরআন ধীরে ধীরে স্পষ্টভাবে পাঠ করুন।",
            amal: "ফজরের পর ৫ আয়াত কুরআন পড়ুন",
            dua: "اللَّهُمَّ اجْعَلْ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي",
            duaTranslation: "হে আল্লাহ! কুরআনকে আমার হৃদয়ের বসন্ত ও বুকের আলো বানিয়ে দিন।",
          },
          {
            day: 9,
            title: "সকাল-সন্ধ্যার যিকর",
            task: "সকাল ও সন্ধ্যার যিকরগুলো শিখুন ও পড়ুন",
            quran: "وَاذْكُر رَّبَّكَ فِي نَفْسِكَ تَضَرُّعًا وَخِيفَةً",
            translation: "আপনার রবকে স্মরণ করুন অন্তরে বিনয় ও ভয়ের সাথে।",
            amal: "সকালে ৩ বার আয়াতুল কুরসী পড়ুন",
            dua: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ",
            duaTranslation: "আমরা সকালে উপনীত হলাম এবং রাজত্ব আল্লাহর।",
          },
          {
            day: 10,
            title: "আয়াতুল কুরসী মুখস্থ",
            task: "আয়াতুল কুরসী সম্পূর্ণ মুখস্থ করুন",
            quran: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
            translation: "আল্লাহ, তিনি ছাড়া কোনো ইলাহ নেই। তিনি চিরঞ্জীব, সর্বসত্তার ধারক।",
            amal: "প্রতি নামাজের পর আয়াতুল কুরসী পড়ুন",
            dua: "اللَّهُمَّ أَعِنِّي عَلَى حِفْظِ كِتَابِكَ",
            duaTranslation: "হে আল্লাহ! আপনার কিতাব মুখস্থ করতে আমাকে সাহায্য করুন।",
          },
          {
            day: 11,
            title: "দৈনিক দোয়া শেখা",
            task: "ঘুম, খাবার ও বের হওয়ার দোয়া শিখুন",
            quran: "وَقُل رَّبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ",
            translation: "বলুন, হে আমার রব! আমাকে সত্যের সাথে প্রবেশ করান।",
            amal: "খাওয়ার আগে ও পরে দোয়া পড়ুন",
            dua: "بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ",
            duaTranslation: "আল্লাহর নামে এবং আল্লাহর বরকতের উপর।",
          },
          {
            day: 12,
            title: "তাসবিহ ও তাহলিল",
            task: "সুবহানাল্লাহ, আলহামদুলিল্লাহ, আল্লাহু আকবার পড়ুন",
            quran: "وَسَبِّحْ بِحَمْدِ رَبِّكَ بِالْعَشِيِّ وَالْإِبْكَارِ",
            translation: "সন্ধ্যায় ও সকালে আপনার রবের প্রশংসাসহ তাসবিহ পাঠ করুন।",
            amal: "প্রতিদিন ১০০ বার তাসবিহ পড়ুন",
            dua: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ",
            duaTranslation: "আল্লাহর পবিত্রতা ও প্রশংসা, মহান আল্লাহর পবিত্রতা।",
          },
          {
            day: 13,
            title: "ক্ষমা প্রার্থনার দোয়া",
            task: "ইস্তিগফার ও তওবার দোয়া শিখুন",
            quran: "وَاسْتَغْفِرُوا اللَّهَ إِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ",
            translation: "আল্লাহর কাছে ক্ষমা প্রার্থনা করো। নিশ্চয়ই আল্লাহ ক্ষমাশীল, দয়ালু।",
            amal: "প্রতিদিন ১০০ বার ইস্তিগফার পড়ুন",
            dua: "رَبِّ اغْفِرْ لِي ذَنْبِي وَخَطَئِي وَجَهْلِي",
            duaTranslation: "হে আমার রব! আমার গুনাহ, ভুল ও অজ্ঞতা ক্ষমা করুন।",
          },
          {
            day: 14,
            title: "সপ্তাহ রিভিউ ও অনুশীলন",
            task: "শেখা দোয়া ও যিকরগুলো পুনরাবৃত্তি করুন",
            quran: "وَاذْكُرُوا اللَّهَ كَثِيرًا لَّعَلَّكُمْ تُفْلِحُونَ",
            translation: "আল্লাহকে বেশি বেশি স্মরণ করো যাতে তোমরা সফল হতে পারো।",
            amal: "সারাদিন যিকরে মশগুল থাকুন",
            dua: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
            duaTranslation: "আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি একক, তাঁর কোনো শরিক নেই।",
          },
        ],
      },
      {
        week: 3,
        title: "চরিত্র গঠন ও সমাজে ইসলাম",
        focus: "ইসলামিক আখলাক ও সামাজিক দায়বদ্ধতা",
        hadith: "إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الْأَخْلَاقِ - আমি উত্তম চরিত্র পূর্ণ করার জন্য প্রেরিত হয়েছি (মুসনাদে আহমাদ)",
        days: [
          {
            day: 15,
            title: "সত্যবাদিতা অনুশীলন",
            task: "সব ক্ষেত্রে সত্য কথা বলার অভ্যাস করুন",
            quran: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ",
            translation: "হে মুমিনগণ! আল্লাহকে ভয় করো এবং সত্যবাদীদের সাথে থাকো।",
            amal: "আজ সারাদিন কোনো মিথ্যা কথা বলবেন না",
            dua: "اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الْأَخْلَاقِ",
            duaTranslation: "হে আল্লাহ! আমাকে উত্তম চরিত্রের দিকে পরিচালিত করুন।",
          },
          {
            day: 16,
            title: "গীবত থেকে বিরত থাকা",
            task: "কারো অনুপস্থিতিতে তার দোষ-ত্রুটি নিয়ে কথা বলবেন না",
            quran: "وَلَا يَغْتَب بَّعْضُكُم بَعْضًا",
            translation: "তোমরা একে অপরের গীবত করো না।",
            amal: "কারো সম্পর্কে ভালো কথা বলুন বা চুপ থাকুন",
            dua: "اللَّهُمَّ أَصْلِحْ لِي دِينِي وَخُلُقِي",
            duaTranslation: "হে আল্লাহ! আমার দ্বীন ও চরিত্র সংশোধন করুন।",
          },
          {
            day: 17,
            title: "ভালো আচরণ ও হাস্যোজ্জ্বলতা",
            task: "সবার সাথে ভালো ব্যবহার করুন ও হাসিমুখে কথা বলুন",
            quran: "وَقُولُوا لِلنَّاسِ حُسْنًا",
            translation: "মানুষের সাথে ভালো কথা বলো।",
            amal: "প্রতিটি মানুষের সাথে হাসিমুখে সাক্ষাৎ করুন",
            dua: "اللَّهُمَّ حَسِّنْ خُلُقِي كَمَا حَسَّنْتَ خَلْقِي",
            duaTranslation: "হে আল্লাহ! আমার চরিত্র সুন্দর করুন যেমন আমার আকৃতি সুন্দর করেছেন।",
          },
          {
            day: 18,
            title: "প্রতিবেশীর হক আদায়",
            task: "প্রতিবেশীদের খোঁজখবর নিন ও তাদের সাহায্য করুন",
            quran: "وَالْجَارِ ذِي الْقُرْبَىٰ وَالْجَارِ الْجُنُبِ",
            translation: "নিকটবর্তী প্রতিবেশী ও দূরবর্তী প্রতিবেশী।",
            amal: "একজন প্রতিবেশীর সাহায্য করুন",
            dua: "اللَّهُمَّ أَصْلِحْ لِي جِيرَانِي",
            duaTranslation: "হে আল্লাহ! আমার প্রতিবেশীদের সংশোধন করুন।",
          },
          {
            day: 19,
            title: "আত্মীয়তা রক্ষা",
            task: "আত্মীয়স্বজনের সাথে যোগাযোগ রাখুন ও তাদের হক আদায় করুন",
            quran: "وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ",
            translation: "আল্লাহকে ভয় করো যাঁর নামে তোমরা একে অপরের কাছে চাও এবং আত্মীয়তার বন্ধনকেও।",
            amal: "একজন আত্মীয়ের সাথে যোগাযোগ করুন",
            dua: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ",
            duaTranslation: "হে আমার রব! আমাকে আপনার নিয়ামতের শুকরিয়া আদায়ের তাওফিক দিন।",
          },
          {
            day: 20,
            title: "প্রতিশ্রুতি রক্ষা",
            task: "যে প্রতিশ্রুতি দেবেন তা অবশ্যই রক্ষা করুন",
            quran: "وَأَوْفُوا بِالْعَهْدِ إِنَّ الْعَهْدَ كَانَ مَسْئُولًا",
            translation: "প্রতিশ্রুতি পূর্ণ করো। নিশ্চয়ই প্রতিশ্রুতি সম্পর্কে জিজ্ঞাসা করা হবে।",
            amal: "কোনো মিথ্যা প্রতিশ্রুতি দেবেন না",
            dua: "اللَّهُمَّ أَعِنِّي عَلَى الْوَفَاءِ بِالْعَهْدِ",
            duaTranslation: "হে আল্লাহ! প্রতিশ্রুতি রক্ষায় আমাকে সাহায্য করুন।",
          },
          {
            day: 21,
            title: "সপ্তাহ রিভিউ ও আত্মসমালোচনা",
            task: "এই সপ্তাহের চরিত্র গঠনের অগ্রগতি মূল্যায়ন করুন",
            quran: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنظُرْ نَفْسٌ مَّا قَدَّمَتْ لِغَدٍ",
            translation: "হে মুমিনগণ! আল্লাহকে ভয় করো এবং প্রত্যেকে দেখুক সে আগামীকালের জন্য কী পাঠিয়েছে।",
            amal: "নিজের চরিত্রের হিসাব নিন",
            dua: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ",
            duaTranslation: "হে আমার রব! আমাকে ক্ষমা করুন এবং আমার তওবা কবুল করুন।",
          },
        ],
      },
      {
        week: 4,
        title: "হালাল-হারাম, রিজিক ও দুনিয়া",
        focus: "ইসলামিক জীবনযাত্রার বাস্তব প্রয়োগ",
        hadith: "الْحَلَالُ بَيِّنٌ وَالْحَرَامُ بَيِّنٌ - হালাল স্পষ্ট এবং হারামও স্পষ্ট (সহিহ বুখারী)",
        days: [
          {
            day: 22,
            title: "হালাল রিজিকের গুরুত্ব",
            task: "হালাল উপার্জনের গুরুত্ব ও পদ্ধতি সম্পর্কে জানুন",
            quran: "وَكُلُوا مِمَّا رَزَقَكُمُ اللَّهُ حَلَالًا طَيِّبًا",
            translation: "আল্লাহ তোমাদের যে রিজিক দিয়েছেন তা থেকে হালাল ও পবিত্র খাও।",
            amal: "আপনার আয়ের উৎস পরীক্ষা করুন",
            dua: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ",
            duaTranslation: "হে আল্লাহ! আপনার হালাল দিয়ে আমাকে হারাম থেকে অমুখাপেক্ষী করুন।",
          },
          {
            day: 23,
            title: "সুদের ভয়াবহতা",
            task: "সুদের ক্ষতি ও এর বিকল্প সম্পর্কে জানুন",
            quran: "وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا",
            translation: "আল্লাহ ব্যবসাকে হালাল করেছেন এবং সুদকে হারাম করেছেন।",
            amal: "সুদী লেনদেন থেকে বিরত থাকুন",
            dua: "اللَّهُمَّ بَارِكْ لَنَا فِي تِجَارَتِنَا",
            duaTranslation: "হে আল্লাহ! আমাদের ব্যবসায় বরকত দিন।",
          },
          {
            day: 24,
            title: "অশ্লীলতা থেকে বাঁচা",
            task: "চোখ, কান ও মনকে অশ্লীলতা থেকে রক্ষা করুন",
            quran: "قُل لِّلْمُؤْمِنِينَ يَغُضُّوا مِنْ أَبْصَارِهِمْ",
            translation: "মুমিন পুরুষদের বলুন, তারা যেন তাদের দৃষ্টি অবনত রাখে।",
            amal: "অনর্থক দৃষ্টিপাত থেকে বিরত থাকুন",
            dua: "اللَّهُمَّ طَهِّرْ قَلْبِي وَعَيْنِي",
            duaTranslation: "হে আল্লাহ! আমার হৃদয় ও চোখ পবিত্র করুন।",
          },
          {
            day: 25,
            title: "সময়ের হেফাজত",
            task: "সময়ের সদ্ব্যবহার করুন ও অপচয় থেকে বিরত থাকুন",
            quran: "وَالْعَصْرِ * إِنَّ الْإِنسَانَ لَفِي خُسْرٍ",
            translation: "সময়ের শপথ। নিশ্চয়ই মানুষ ক্ষতিগ্রস্ত।",
            amal: "দৈনিক রুটিন তৈরি করুন",
            dua: "اللَّهُمَّ بَارِكْ لَنَا فِي وَقْتِنَا",
            duaTranslation: "হে আল্লাহ! আমাদের সময়ে বরকত দিন।",
          },
          {
            day: 26,
            title: "ইসলামী পোশাক-আশাক",
            task: "শালীন ও ইসলামী পোশাক পরিধানের গুরুত্ব জানুন",
            quran: "يَا بَنِي آدَمَ خُذُوا زِينَتَكُمْ عِندَ كُلِّ مَسْجِدٍ",
            translation: "হে আদম সন্তান! প্রতিটি মসজিদে তোমাদের সাজসজ্জা গ্রহণ করো।",
            amal: "শালীন পোশাক পরিধান করুন",
            dua: "اللَّهُمَّ اسْتُرْ عَوْرَاتِنَا",
            duaTranslation: "হে আল্লাহ! আমাদের গোপনীয়তা ঢেকে রাখুন।",
          },
          {
            day: 27,
            title: "গুনাহ পরিত্যাগ ও তাওবা",
            task: "সব ধরনের গুনাহ থেকে তাওবা করুন",
            quran: "وَتُوبُوا إِلَى اللَّهِ جَمِيعًا أَيُّهَ الْمُؤْمِنُونَ",
            translation: "হে মুমিনগণ! তোমরা সবাই আল্লাহর কাছে তাওবা করো।",
            amal: "নিয়মিত তাওবা ও ইস্তিগফার করুন",
            dua: "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي",
            duaTranslation: "হে আমার রব! আমি নিজের উপর জুলুম করেছি, আমাকে ক্ষমা করুন।",
          },
          {
            day: 28,
            title: "ইখলাস ও তাকওয়ার চর্চা",
            task: "প্রথম মাসের সমাপনী ও পরবর্তী মাসের প্রস্তুতি",
            quran: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
            translation: "যে আল্লাহকে ভয় করে, তিনি তার জন্য উত্তরণের পথ করে দেন।",
            amal: "এক মাসের অগ্রগতি মূল্যায়ন করুন",
            dua: "رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا",
            duaTranslation: "হে আমাদের রব! আমাদের নূর পূর্ণ করুন এবং আমাদের ক্ষমা করুন।",
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/monthly-plan">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              পরিকল্পনায় ফিরুন
            </Button>
          </Link>
          <Link href="/monthly-plan/month-2">
            <Button className="islamic-gradient text-white flex items-center">
              পরবর্তী মাস
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Month Overview */}
        <Card className="mb-8 border-emerald-200">
          <CardHeader className="bg-gradient-to-r from-emerald-50 to-amber-50">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="secondary">মাস ১</Badge>
                  <Badge variant="outline" className="text-emerald-700">
                    Beginner
                  </Badge>
                </div>
                <CardTitle className="text-3xl font-bold text-emerald-700 bengali-text">{monthData.title}</CardTitle>
                <p className="text-gray-600 bengali-text mt-2">{monthData.subtitle}</p>
                <p className="text-gray-700 bengali-text mt-1">{monthData.description}</p>
              </div>
              <div className="text-center">
                <BookOpen className="h-16 w-16 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Foundation</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-bold text-2xl text-emerald-700">{getCompletionPercentage()}%</h3>
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
              <Card className="border-emerald-200 mb-6">
                <CardHeader className="bg-emerald-50">
                  <CardTitle className="text-xl font-bold text-emerald-700 bengali-text">{week.title}</CardTitle>
                  <p className="text-gray-700 bengali-text">{week.focus}</p>
                  <div className="p-3 bg-white rounded border-l-4 border-emerald-500 mt-3">
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
                      className={`border-2 transition-all ${isCompleted ? "border-emerald-300 bg-emerald-50" : "border-gray-200"}`}
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
                            <CardTitle className="text-lg font-bold text-emerald-700 bengali-text">
                              {day.title}
                            </CardTitle>
                          </div>
                          {isCompleted && <CheckCircle className="h-6 w-6 text-emerald-600" />}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <Link href="/monthly-plan">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              পরিকল্পনায় ফিরুন
            </Button>
          </Link>
          <Link href="/monthly-plan/month-2">
            <Button className="islamic-gradient text-white flex items-center">
              পরবর্তী মাস: আমল বৃদ্ধি
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
