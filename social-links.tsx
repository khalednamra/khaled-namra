"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Facebook,
  Youtube,
  MessageCircle,
  Send,
  Music,
  Instagram,
  Twitter,
  Camera,
  Headphones,
  MapPin,
  Linkedin,
  ExternalLink,
} from "lucide-react"

const socialLinks = [
  {
    name: "Facebook",
    nameAr: "فيسبوك",
    icon: Facebook,
    color: "bg-blue-600 hover:bg-blue-700",
    url: "https://www.facebook.com/khaledhub2",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    name: "YouTube",
    nameAr: "يوتيوب",
    icon: Youtube,
    color: "bg-red-600 hover:bg-red-700",
    url: "https://www.youtube.com/@el_3amed1",
    gradient: "from-red-600 to-red-800",
  },
  {
    name: "WhatsApp",
    nameAr: "واتساب",
    icon: MessageCircle,
    color: "bg-green-600 hover:bg-green-700",
    url: "https://wa.me/201012768346",
    gradient: "from-green-600 to-green-800",
  },
  {
    name: "Telegram",
    nameAr: "تيليجرام",
    icon: Send,
    color: "bg-sky-500 hover:bg-sky-600",
    url: "https://t.me/khaled_2007/",
    gradient: "from-sky-500 to-sky-700",
  },
  {
    name: "TikTok",
    nameAr: "تيك توك",
    icon: Music,
    color: "bg-black hover:bg-gray-800",
    url: "https://www.tiktok.com/@khaled_hub/",
    gradient: "from-black to-gray-800",
  },
  {
    name: "Instagram",
    nameAr: "انستجرام",
    icon: Instagram,
    color: "bg-pink-600 hover:bg-pink-700",
    url: "https://www.instagram.com/khaled__namra/",
    gradient: "from-pink-600 via-purple-600 to-orange-500",
  },
  {
    name: "X (Twitter)",
    nameAr: "تويتر",
    icon: Twitter,
    color: "bg-black hover:bg-blue-500",
    url: "https://x.com/khalednamra",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    name: "Threads",
    nameAr: "ثريدز",
    icon: MessageCircle,
    color: "bg-gray-800 hover:bg-gray-900",
    url: "https://www.threads.com/khaled__namra/",
    gradient: "from-gray-800 to-black",
  },
  {
    name: "Snapchat",
    nameAr: "سناب شات",
    icon: Camera,
    color: "bg-yellow-400 hover:bg-yellow-700",
    url: "https://www.snapchat.com/add/khaled-namra",
    gradient: "from-yellow-600 to-yellow-800",
  },
  {
    name: "SoundCloud",
    nameAr: "ساوند كلاود",
    icon: Headphones,
    color: "bg-orange-500 hover:bg-orange-600",
    url: "https://soundcloud.com/khalednamra",
    gradient: "from-orange-600 to-orange-800",
  },
  {
    name: "Pinterest",
    nameAr: "بينتريست",
    icon: MapPin,
    color: "bg-red-700 hover:bg-red-700",
    url: "https://www.pinterest.com/khalednamra898/",
    gradient: "from-red-600 to-red-900",
  },
]

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-700 to-indigo-700 p-4">
      <div className="max-w-md mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 pt-8">
          {/* Welcome Logo */}
          <div className="mb-6">
           
            <div className="text-white/80 text-sm font-medium">Welcome - مرحبا بكم</div>
          </div>

          {/* Name */}
          <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Khaled Namra</h1>
          <h2 className="text-3xl font-bold text-white/100 mb-4 drop-shadow-lg">خــا لــد نــمــرة</h2>

          {/* Bio */}
          <p className="text-white/100 text-lg mb-8 leading-relaxed">تابعني علي كل منصات التواصل الاجتماعي</p>
        </div>  
        {/* Social Links */}
        <div className="space-y-4">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <Card
                key={social.name}
                className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <Button
                    className={`w-full h-16 bg-gradient-to-r ${social.gradient} hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-xl`}
                    onClick={() => window.open(social.url, "_blank")}
                  >
                    <div className="flex items-center justify-between w-full px-1">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left rtl:text-right">
                          <div className="text-white font-semibold text-lg">{social.name}</div>
                          <div className="text-white/80 text-sm">{social.nameAr}</div>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-white/90" />
                    </div>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pb-8">
          <div className="text-white/100 text-sm">🌟 Stay Connected - ابقى متصـل🌟

          <div className="text-wight/60 text-sm">made with ❤️ by : khaled Namra </div>

© 2026 جــمـيـع الحـقـوق محـفوظـه

</div>
          <div className="text-white/80 text-xs mt-2">All social media platforms in one place</div>
        </div>
      </div>
    </div>
  )
}
