"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Heart, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Month2Page() {
  const [completedTasks, setCompletedTasks] = useState<{ [key: string]: boolean }>({})

  const monthData = {
    id: 2,
    title: "আমল বৃদ্ধি (Intermediate Practice)",
    subtitle: "কুরআন ও হাদিস অধ্যয়ন - সীরাহ ও সাহাবা",
    description: "দৈনিক আমলের পরিমাণ ও গুণগত মান বৃদ্ধি। গভীর ইসলামিক জ্ঞান অর্জন।",
    level: "Intermediate",
    totalDays: 28,
    weeks: [
      {
        week: 1,
        title: "কুরআন ও হাদিস অধ্যয়ন গভীরভাবে",
        focus: "সূরা ফাতিহার তাফসির ও হাদিস চর্চা",
        hadith: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ - তোমাদের মধ্যে সেই উত্তম যে কুরআন শেখে ও শেখায় (সহিহ বুখারী)",
        days: [
          {
            day: 1,
            title: "সূরা ফাতিহার তাফসির",
            task: "সূরা ফাতিহার প্রতিটি আয়াতের অর্থ ও তাৎপর্য বুঝুন",
            quran: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
            translation: "সমস্ত প্রশংসা আল্লাহর জন্য যিনি সকল জগতের রব।",
            amal: "নামাজে সূরা ফাতিহা অর্থ বুঝে পড়ুন",
            dua: "اللَّهُمَّ فَهِّمْنِي دِينِي",
            duaTranslation: "হে আল্লাহ! আমাকে আমার দ্বীন বুঝিয়ে দিন।",
            tafsir: "আল-হামদু লিল্লাহ - এটি আল্লাহর প্রশংসার সর্বোচ্চ রূপ। রব্বিল আলামিন - তিনি সকল সৃষ্টির প্রতিপালক ও লালনকর্তা।",
          },
          {
            day: 2,
            title: "সূরা বাকারার প্রথম ৫ আয়াত",
            task: "সূরা বাকারার ১-৫ আয়াতের তাফসির অধ্যয়ন করুন",
            quran: "الم * ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ",
            translation: "আলিফ-লাম-মিম। এই কিতাবে কোনো সন্দেহ নেই, এটি মুত্তাকিদের জন্য হিদায়াত।",
            amal: "প্রতিদিন ১০ আয়াত কুরআন অর্থসহ পড়ুন",
            dua: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً",
            duaTranslation: "হে আমাদের রব! আমাদের দুনিয়াতে কল্যাণ দিন এবং আখিরাতেও কল্যাণ দিন।",
            tafsir: "কুরআন সন্দেহমুক্ত গ্রন্থ। এটি তাকওয়াবানদের জন্য পথপ্রদর্শক। মুত্তাকি তারা যারা আল্লাহকে ভয় করে চলে।",
          },
          {
            day: 3,
            title: "হাদিস অধ্যয়ন - রিয়াদুস সালেহীন",
            task: "রিয়াদুস সালেহীন থেকে ৫টি হাদিস অধ্যয়ন করুন",
            quran: "وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ فَانتَهُوا",
            translation: "রাসূল তোমাদের যা দিয়েছেন তা গ্রহণ করো, আর যা থেকে নিষেধ করেছেন তা থেকে বিরত থাকো।",
            amal: "একটি হাদিস মুখস্থ করুন ও আমল করুন",
            dua: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ",
            duaTranslation: "হে আল্লাহ! মুহাম্মদ ও তাঁর পরিবারের উপর রহমত বর্ষণ করুন।",
            tafsir: "হাদিস হলো রাসূল (সা.)-এর বাণী, কর্ম ও সমর্থন। এটি কুরআনের ব্যাখ্যা ও বাস্তব প্রয়োগ।",
          },
          {
            day: 4,
            title: "ইসলাম, ঈমান ও ইহসান",
            task: "জিবরিলের হাদিস থেকে ইসলাম, ঈমান ও ইহসানের পার্থক্য জানুন",
            quran: "إِنَّ الدِّينَ عِندَ اللَّهِ الْإِسْلَامُ",
            translation: "নিশ্চয়ই আল্লাহর কাছে দ্বীন হলো ইসলাম।",
            amal: "ইহসানের স্তরে ইবাদত করার চেষ্টা করুন",
            dua: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
            duaTranslation: "হে আল্লাহ! আপনার যিকর, শুকর ও সুন্দর ইবাদতে আমাকে সাহায্য করুন।",
            tafsir: "ইসলাম: বাহ্যিক আমল। ঈমান: অন্তরের বিশ্বাস। ইহসান: আল্লাহকে দেখার মতো করে ইবাদত।",
          },
          {
            day: 5,
            title: "কুরআনের ভাষা বোঝা",
            task: "আরবি ভাষার মৌলিক শব্দভাণ্ডার শিখুন",
            quran: "إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَّعَلَّكُمْ تَعْقِلُونَ",
            translation: "আমি এটি আরবি কুরআন হিসেবে নাযিল করেছি যাতে তোমরা বুঝতে পারো।",
            amal: "১০টি আরবি শব্দের অর্থ শিখুন",
            dua: "رَبِّ زِدْنِي عِلْمًا",
            duaTranslation: "হে আমার রব! আমার জ্ঞান বৃদ্ধি করুন।",
            tafsir: "কুরআন আরবি ভাষায় নাযিল হয়েছে। এর ভাষা বোঝা কুরআন বোঝার জন্য অত্যন্ত গুরুত্বপূর্ণ।",
          },
          {
            day: 6,
            title: "সূরা মুলক ১-৫ আয়াত মুখস্থ",
            task: "সূরা মুলকের প্রথম ৫ আয়াত মুখস্থ করুন",
            quran: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
            translation: "বরকতময় তিনি যাঁর হাতে রাজত্ব এবং তিনি সব কিছুর উপর ক্ষমতাবান।",
            amal: "রাতে ঘুমানোর আগে সূরা মুলক পড়ুন",
            dua: "اللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا",
            duaTranslation: "হে আল্লাহ! আপনার নামেই আমি মরি এবং বাঁচি।",
            tafsir: "সূরা মুলক কবরের আজাব থেকে রক্ষাকারী। এটি নিয়মিত পাঠ করা অত্যন্ত ফজিলতপূর্ণ।",
          },
          {
            day: 7,
            title: "সপ্তাহ রিভিউ ও পুনরাবৃত্তি",
            task: "এই সপ্তাহের শেখা বিষয়গুলো পুনরাবৃত্তি করুন",
            quran: "وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنفَعُ الْمُؤْمِنِينَ",
            translation: "আর স্মরণ করিয়ে দাও, কারণ স্মরণ করানো মুমিনদের উপকার করে।",
            amal: "শেখা হাদিসগুলো পুনরায় পড়ুন",
            dua: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا",
            duaTranslation: "হে আমাদের রব! আমাদের হিদায়াত দেওয়ার পর আমাদের হৃদয় বক্র করবেন না।",
            tafsir: "জ্ঞান অর্জনের পর তা পুনরাবৃত্তি ও অনুশীলন করা অত্যন্ত গুরুত্বপূর্ণ।",
          },
        ],
      },
      {
        week: 2,
        title: "সীরাহ, সাহাবা ও আদর্শ চরিত্র",
        focus: "রাসূল (সা.) ও সাহাবাদের জীবন থেকে শিক্ষা",
        hadith: "خَيْرُ النَّاسِ قَرْنِي - সর্বোত্তম মানুষ আমার যুগের মানুষ (সহিহ বুখারী)",
        days: [
          {
            day: 8,
            title: "রাসূল (সা.)-এর বাল্যকাল",
            task: "নবীজি (সা.)-এর জন্ম থেকে নবুওয়াত পর্যন্ত জীবন অধ্যয়ন করুন",
            quran: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ",
            translation: "আমি আপনাকে সমগ্র বিশ্বের জন্য রহমতস্বরূপ প্রেরণ করেছি।",
            amal: "নবীজির আখলাক অনুসরণ করুন",
            dua: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
            duaTranslation: "হে আল্লাহ! আমাদের নবী মুহাম্মদের উপর সালাত ও সালাম বর্ষণ করুন।",
            tafsir: "নবীজি (সা.) ছোটবেলা থেকেই সত্যবাদী ও আমানতদার হিসেবে পরিচিত ছিলেন।",
          },
          {
            day: 9,
            title: "হিজরতের কাহিনি ও শিক্ষা",
            task: "হিজরতের ঘটনা ও এর শিক্ষা নিয়ে চিন্তা করুন",
            quran: "إِلَّا تَنصُرُوهُ فَقَدْ نَصَرَهُ اللَّهُ",
            translation: "তোমরা তাঁকে সাহায্য না করলেও আল্লাহ তাঁকে সাহায্য করেছেন।",
            amal: "আল্লাহর উপর তাওয়াক্কুল করুন",
            dua: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
            duaTranslation: "আল্লাহই আমাদের জন্য যথেষ্ট এবং তিনি উত্তম কর্মবিধায়ক।",
            tafsir: "হিজরত আমাদের শেখায় যে আল্লাহর পথে ত্যাগ স্বীকার করতে হয়।",
          },
          {
            day: 10,
            title: "আবু বকর (রা.)-এর জীবনী",
            task: "আবু বকর (রা.)-এর ঈমান ও আত্মত্যাগের ঘটনা পড়ুন",
            quran: "وَالَّذِي جَاءَ بِالصِّدْقِ وَصَدَّقَ بِهِ",
            translation: "যিনি সত্য নিয়ে এসেছেন এবং যিনি তা সত্য বলে স্বীকার করেছেন।",
            amal: "সত্যের পক্ষে দৃঢ় থাকুন",
            dua: "اللَّهُمَّ أَعِنِّي عَلَى الْحَقِّ",
            duaTranslation: "হে আল্লাহ! সত্যের উপর আমাকে সাহায্য করুন।",
            tafsir: "আবু বকর (রা.) ছিলেন সিদ্দিক - যিনি সর্বদা সত্যকে সত্য বলে মেনে নিতেন।",
          },
          {
            day: 11,
            title: "ওমর (রা.)-এর ইনসাফ",
            task: "ওমর (রা.)-এর ন্যায়বিচার ও শাসনব্যবস্থা অধ্যয়ন করুন",
            quran: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ",
            translation: "হে মুমিনগণ! তোমরা ন্যায়ের উপর প্রতিষ্ঠিত থাকো।",
            amal: "সব ক্ষেত্রে ন্যায়বিচার করুন",
            dua: "اللَّهُمَّ أَرِنِي الْحَقَّ حَقًّا وَارْزُقْنِي اتِّبَاعَهُ",
            duaTranslation: "হে আল্লাহ! আমাকে সত্যকে সত্য হিসেবে দেখান এবং তা অনুসরণের তাওফিক দিন।",
            tafsir: "ওমর (রা.) ছিলেন ফারুক - যিনি সত্য ও মিথ্যার মধ্যে পার্থক্য করতেন।",
          },
          {
            day: 12,
            title: "উসমান (রা.)-এর দানশীলতা",
            task: "উসমান (রা.)-এর দানশীলতা ও কুরআন সংকলনের কাহিনি পড়ুন",
            quran: "مَّن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا",
            translation: "কে আছে যে আল্লাহকে উত্তম ঋণ দেবে?",
            amal: "আল্লাহর পথে দান করুন",
            dua: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا",
            duaTranslation: "হে আল্লাহ! আপনি আমাদের যা রিজিক দিয়েছেন তাতে বরকত দিন।",
            tafsir: "উসমান (রা.) ছিলেন যুন-নুরাইন - দুই নূরের অধিকারী।",
          },
          {
            day: 13,
            title: "আলী (রা.)-এর জ্ঞান ও বিচার",
            task: "আলী (রা.)-এর জ্ঞান ও ন্যায়বিচারের ঘটনা অধ্যয়ন করুন",
            quran: "وَتِلْكَ الْأَمْثَالُ نَضْرِبُهَا لِلنَّاসِ وَمَا يَعْقِلُهَا إِلَّا الْعَالِمُونَ",
            translation: "এসব দৃষ্টান্ত আমি মানুষের জন্য পেশ করি, কিন্তু জ্ঞানীরাই কেবল তা বুঝে।",
            amal: "জ্ঞান অর্জনে মনোযোগী হন",
            dua: "رَبِّ زِدْنِي عِلْمًا وَفَهْمًا",
            duaTranslation: "হে আমার রব! আমার জ্ঞান ও বুঝ বৃদ্ধি করুন।",
            tafsir: "আলী (রা.) ছিলেন বাবুল ইলম - জ্ঞানের দরজা।",
          },
          {
            day: 14,
            title: "নবীজি (সা.)-এর আখলাক অনুসরণ",
            task: "নবীজির চরিত্রের বিভিন্ন দিক অনুশীলন করুন",
            quran: "وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ",
            translation: "নিশ্চয়ই আপনি মহান চরিত্রের অধিকারী।",
            amal: "নবীজির একটি গুণ নিজের মধ্যে আনুন",
            dua: "اللَّهُمَّ حَسِّنْ خُلُقِي كَمَا حَسَّنْتَ خَلْقِي",
            duaTranslation: "হে আল্লাহ! আমার চরিত্র সুন্দর করুন যেমন আমার আকৃতি সুন্দর করেছেন।",
            tafsir: "নবীজি (সা.) ছিলেন চলমান কুরআন। তাঁর চরিত্রই ছিল কুরআনের বাস্তব রূপ।",
          },
        ],
      },
      {
        week: 3,
        title: "আত্মশুদ্ধি, তাকওয়া ও আল্লাহভীতি",
        focus: "অন্তরের পরিশুদ্ধতা ও আধ্যাত্মিক উন্নতি",
        hadith: "أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً إِذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ - শরীরে একটি গোশতের টুকরা আছে, তা ঠিক থাকলে সারা শরীর ঠিক থাকে",
        days: [
          {
            day: 15,
            title: "নিয়ত ও রিয়ার পার্থক্য",
            task: "ইখলাস ও রিয়ার মধ্যে পার্থক্য বুঝুন",
            quran: "وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ",
            translation: "তাদেরকে কেবল এই নির্দেশ দেওয়া হয়েছিল যে, তারা যেন আল্লাহর ইবাদত করে তাঁর জন্য দ্বীনকে একনিষ্ঠ করে।",
            amal: "প্রতিটি আমলে নিয়ত ঠিক করুন",
            dua: "اللَّهُمَّ أَخْلِصْ دِينِي لَكَ",
            duaTranslation: "হে আল্লাহ! আমার দ্বীনকে আপনার জন্য একনিষ্ঠ করে দিন।",
            tafsir: "ইখলাস হলো আল্লাহর জন্য একনিষ্ঠতা। রিয়া হলো মানুষ দেখানোর জন্য আমল করা।",
          },
          {
            day: 16,
            title: "গুনাহকে গুনাহ মনে করা",
            task: "ছোট গুনাহকেও গুরুত্ব সহকারে দেখুন",
            quran: "وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ",
            translation: "যে অণু পরিমাণ মন্দ কাজ করবে সে তা দেখতে পাবে।",
            amal: "ছোট গুনাহ থেকেও বেঁচে থাকুন",
            dua: "اللَّهُمَّ جَنِّبْنِي الْمَعَاصِي",
            duaTranslation: "হে আল্লাহ! আমাকে গুনাহ থেকে দূরে রাখুন।",
            tafsir: "ছোট গুনাহের পুনরাবৃত্তি বড় গুনাহে পরিণত হয়।",
          },
          {
            day: 17,
            title: "কান্না করে দোয়া করা",
            task: "আল্লাহর কাছে কেঁদে কেঁদে দোয়া করুন",
            quran: "ادْعُوا رَبَّكُمْ تَضَرُّعًا وَخُفْيَةً",
            translation: "তোমাদের রবকে ডাকো কাকুতি-মিনতি ও গোপনে।",
            amal: "রাতে একাকী কেঁদে দোয়া করুন",
            dua: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
            duaTranslation: "হে আমার রব! আপনি আমার প্রতি যে কল্যাণ নাযিল করেন আমি তার মুখাপেক্ষী।",
            tafsir: "কান্নাকাটি করে দোয়া আল্লাহর কাছে অধিক প্রিয়।",
          },
          {
            day: 18,
            title: "আত্মসমালোচনা ও মুজাহাদা",
            task: "নিজের ভুল-ত্রুটি খুঁজে বের করুন",
            quran: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنظُرْ نَفْسٌ مَّا قَدَّمَتْ لِغَدٍ",
            translation: "হে মুমিনগণ! আল্লাহকে ভয় করো এবং প্রত্যেকে দেখুক সে আগামীকালের জন্য কী পাঠিয়েছে।",
            amal: "প্রতিদিন নিজের হিসাব নিন",
            dua: "اللَّهُمَّ أَعِنِّي عَلَى نَفْسِي",
            duaTranslation: "হে আল্লাহ! আমার নফসের বিরুদ্ধে আমাকে সাহায্য করুন।",
            tafsir: "আত্মসমালোচনা আত্মশুদ্ধির প্রথম ধাপ।",
          },
          {
            day: 19,
            title: "কৃতজ্ঞতা ও শোকর আদায়",
            task: "আল্লাহর নিয়ামতের জন্য কৃতজ্ঞতা প্রকাশ করুন",
            quran: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
            translation: "যদি তোমরা কৃতজ্ঞতা প্রকাশ করো তাহলে আমি অবশ্যই তোমাদের বৃদ্ধি করে দেবো।",
            amal: "প্রতিদিন ১০০ বার আলহামদুলিল্লাহ বলুন",
            dua: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
            duaTranslation: "হে আল্লাহ! আপনার যিকর, শুকর ও সুন্দর ইবাদতে আমাকে সাহায্য করুন।",
            tafsir: "কৃতজ্ঞতা নিয়ামত বৃদ্ধির কারণ।",
          },
          {
            day: 20,
            title: "মৃত্যুর স্মরণ",
            task: "মৃত্যু ও আখিরাতের কথা বেশি বেশি স্মরণ করুন",
            quran: "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ",
            translation: "প্রতিটি প্রাণী মৃত্যুর স্বাদ গ্রহণ করবে।",
            amal: "কবর জিয়ারত করুন",
            dua: "اللَّهُمَّ أَعِنِّي عَلَى الْمَوْتِ وَسَكَرَاتِهِ",
            duaTranslation: "হে আল্লাহ! মৃত্যু ও তার কষ্টে আমাকে সাহায্য করুন।",
            tafsir: "মৃত্যুর স্মরণ গুনাহ থেকে বিরত রাখে।",
          },
          {
            day: 21,
            title: "রিভিউ ও নতুন চিন্তাভাবনা",
            task: "এই সপ্তাহের আত্মশুদ্ধির অভিজ্ঞতা মূল্যায়ন করুন",
            quran: "وَنَفْسٍ وَمَا سَوَّاهَا * فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا",
            translation: "নফস ও যিনি তাকে সুবিন্যস্ত করেছেন তার শপথ। অতঃপর তাকে তার অসৎকর্ম ও তাকওয়ার জ্ঞান দান করেছেন।",
            amal: "আত্মশুদ্ধির একটি দীর্ঘমেয়াদী পরিকল্পনা করুন",
            dua: "رَبِّ اشْرَحْ لِي صَدْرِي",
            duaTranslation: "হে আমার রব! আমার বুক প্রশস্ত করে দিন।",
            tafsir: "আত্মশুদ্ধি একটি চলমান প্রক্রিয়া যা সারাজীবন চালিয়ে যেতে হয়।",
          },
        ],
      },
      {
        week: 4,
        title: "সমাজ, পরিবার ও দায়িত্ব",
        focus: "ইসলামিক সমাজ গঠনে ব্যক্তিগত ভূমিকা",
        hadith: "كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ - তোমরা সবাই দায়িত্বশীল এবং তোমাদের দায়িত্বাধীনদের সম্পর্কে জিজ্ঞাসিত হবে",
        days: [
          {
            day: 22,
            title: "পরিবারের দায়িত্ব পালন",
            task: "পরিবারের সদস্যদের প্রতি দায়িত্ব সঠিকভাবে পালন করুন",
            quran: "وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ",
            translation: "তাদের (পিতা-মাতার) সামনে ভালোবাসার সাথে নম্রতার ডানা বিছিয়ে দাও।",
            amal: "পিতা-মাতার খেদমত করুন",
            dua: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ",
            duaTranslation: "হে আমার রব! আমাকে ও আমার পিতা-মাতাকে ক্ষমা করুন।",
            tafsir: "পরিবারের প্রতি দায়িত্ব পালন ইবাদতের অংশ।",
          },
          {
            day: 23,
            title: "সন্তানের ইসলামি লালন-পালন",
            task: "সন্তানদের ইসলামি শিক্ষা ও আদব শেখান",
            quran: "يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًا",
            translation: "হে মুমিনগণ! তোমরা নিজেদের ও তোমাদের পরিবারকে আগুন থেকে রক্ষা করো।",
            amal: "সন্তানদের নামাজ শেখান",
            dua: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ",
            duaTranslation: "হে আমার রব! আমাকে আপনার নিয়ামতের শুকরিয়া আদায়ের তাওফিক দিন।",
            tafsir: "সন্তানের ইসলামি শিক্ষা পিতা-মাতার গুরুত্বপূর্ণ দায়িত্ব।",
          },
          {
            day: 24,
            title: "স্ত্রী/স্বামীর হক আদায়",
            task: "দাম্পত্য জীবনে ইসলামি নীতি অনুসরণ করুন",
            quran: "وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ",
            translation: "তাদের সাথে সদ্ভাবে জীবনযাপন করো।",
            amal: "স্ত্রী/স্বামীর সাথে ভালো ব্যবহার করুন",
            dua: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
            duaTranslation: "হে আমাদের রব! আমাদের স্ত্রী ও সন্তানদের আমাদের চোখের শীতলতা বানিয়ে দিন।",
            tafsir: "দাম্পত্য জীবনে পারস্পরিক সম্মান ও ভালোবাসা জরুরি।",
          },
          {
            day: 25,
            title: "প্রতিবেশী ও সমাজসেবা",
            task: "প্রতিবেশীদের খোঁজখবর নিন ও সাহায্য করুন",
            quran: "وَالْجَارِ ذِي الْقُرْبَىٰ وَالْجَارِ الْجُنُبِ",
            translation: "নিকটবর্তী প্রতিবেশী ও দূরবর্তী প্রতিবেশী।",
            amal: "প্রতিবেশীদের সাথে ভালো সম্পর্ক রাখুন",
            dua: "اللَّهُمَّ أَصْلِحْ لِي دِينِي وَدُنْيَايَ",
            duaTranslation: "হে আল্লাহ! আমার দ্বীন ও দুনিয়া সংশোধন করে দিন।",
            tafsir: "প্রতিবেশীর হক ইসলামে অত্যন্ত গুরুত্বপূর্ণ।",
          },
          {
            day: 26,
            title: "সমাজে ইনসাফ ও দয়া",
            task: "সমাজে ন্যায়বিচার ও দয়া প্রতিষ্ঠায় ভূমিকা রাখুন",
            quran: "إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ",
            translation: "নিশ্চয়ই আল্লাহ ন্যায়বিচার ও ইহসানের নির্দেশ দেন।",
            amal: "অন্যায়ের বিরুদ্ধে কথা বলুন",
            dua: "رَبَّنَا أَتْمِمْ لَنَا نُورَنَا",
            duaTranslation: "হে আমাদের রব! আমাদের নূর পূর্ণ করে দিন।",
            tafsir: "ইনসাফ ও দয়া ইসলামি সমাজের ভিত্তি।",
          },
          {
            day: 27,
            title: "অসুস্থ/দুর্বলদের পাশে থাকা",
            task: "অসুস্থ ও দুর্বলদের সেবা করুন",
            quran: "وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ",
            translation: "তোমরা নিজেদের জন্য যে কল্যাণ অগ্রিম পাঠাবে তা আল্লাহর কাছে পাবে।",
            amal: "একজন অসুস্থ ব্যক্তির সেবা করুন",
            dua: "اللَّهُمَّ اشْفِ مَرْضَانَا وَمَرْضَى الْمُسْلِمِينَ",
            duaTranslation: "হে আল্লাহ! আমাদের ও মুসলিমদের রোগীদের শিফা দিন।",
            tafsir: "অসুস্থদের সেবা করা সওয়াবের কাজ।",
          },
          {
            day: 28,
            title: "দাওয়াত ও দ্বীনের কথা বলা",
            task: "মানুষকে ইসলামের সুন্দর বার্তা পৌঁছে দিন",
            quran: "وَمَنْ أَحْسَنُ قَوْلًا مِّمَّن دَعَا إِلَى اللَّهِ",
            translation: "তার চেয়ে কার কথা সুন্দর যে আল্লাহর দিকে ডাকে।",
            amal: "একজনকে ইসলামের কথা বলুন",
            dua: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
            duaTranslation: "হে আমার রব! আমার বুক প্রশস্ত করুন ও আমার কাজ সহজ করুন।",
            tafsir: "দাওয়াত দেওয়া প্রতিটি মুসলিমের দায়িত্ব।",
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/monthly-plan/month-1">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              পূর্ববর্তী মাস
            </Button>
          </Link>
          <Link href="/monthly-plan/month-3">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center">
              পরবর্তী মাস
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Month Overview */}
        <Card className="mb-8 border-blue-200">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-emerald-50">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="secondary">মাস ২</Badge>
                  <Badge variant="outline" className="text-blue-700">
                    Intermediate
                  </Badge>
                </div>
                <CardTitle className="text-3xl font-bold text-blue-700 bengali-text">{monthData.title}</CardTitle>
                <p className="text-gray-600 bengali-text mt-2">{monthData.subtitle}</p>
                <p className="text-gray-700 bengali-text mt-1">{monthData.description}</p>
              </div>
              <div className="text-center">
                <Heart className="h-16 w-16 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Intermediate</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-bold text-2xl text-blue-700">{getCompletionPercentage()}%</h3>
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
              <Card className="border-blue-200 mb-6">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-xl font-bold text-blue-700 bengali-text">{week.title}</CardTitle>
                  <p className="text-gray-700 bengali-text">{week.focus}</p>
                  <div className="p-3 bg-white rounded border-l-4 border-blue-500 mt-3">
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
                      className={`border-2 transition-all ${isCompleted ? "border-blue-300 bg-blue-50" : "border-gray-200"}`}
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
                            <CardTitle className="text-lg font-bold text-blue-700 bengali-text">{day.title}</CardTitle>
                          </div>
                          {isCompleted && <CheckCircle className="h-6 w-6 text-blue-600" />}
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
                              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                                <h4 className="font-semibold text-amber-800 bengali-text mb-2">📚 তাফসির:</h4>
                                <p className="text-amber-700 bengali-text text-sm">{day.tafsir}</p>
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
          <Link href="/monthly-plan/month-1">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              পূর্ববর্তী: ভিত্তি স্থাপন
            </Button>
          </Link>
          <Link href="/monthly-plan/month-3">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center">
              পরবর্তী মাস: আত্মশুদ্ধি
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
