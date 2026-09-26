import { trips } from "@/data";
import FeaturedTrip from "@/components/FeaturedTrip";
import ItineraryOverview from "@/components/ItineraryOverview";
import TripExcelDownload from "@/components/TripExcelDownload";
import Link from "next/link";
import { ChevronRight, ArrowDown, MapPin, Calendar } from "lucide-react";

export default function Home() {
  const { hero, itinerary } = trips.thailand;

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={hero.image}
            alt={hero.title}
            className="w-full h-full object-cover animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/55 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-16">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-sm font-semibold tracking-wide mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            2027 曼谷家庭輕旅行
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8 drop-shadow-2xl leading-tight">
            {hero.title.split('・')[0]} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-200 to-sky-100 drop-shadow-sm">{hero.days}旅行規劃</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-slate-100 drop-shadow-md leading-relaxed font-medium">
            {hero.description}
          </p>

          <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20 text-white shadow-lg">
              <MapPin className="w-5 h-5 text-sky-300" />
              <span className="font-semibold">泰國・曼谷</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20 text-white shadow-lg">
              <Calendar className="w-5 h-5 text-sky-300" />
              <span className="font-semibold">{hero.date}</span>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/itinerary/thailand"
              className="px-10 py-4 border border-transparent text-lg font-bold rounded-2xl text-white bg-primary hover:bg-sky-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center group"
            >
              查看完整行程
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
          <ArrowDown className="w-8 h-8" />
        </div>
      </section>

      <FeaturedTrip data={hero} href="/itinerary/thailand" />

      <ItineraryOverview
        data={itinerary}
        href="/itinerary/thailand"
        title={`${hero.days} 行程概覽`}
      />

      <TripExcelDownload
        tripName="泰國曼谷行程"
        filename="2027泰國曼谷行程.xlsx"
        data={itinerary}
      />

      <section className="bg-slate-900 py-20 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">深度探索每一刻</h2>
          <p className="text-slate-300 text-lg mb-10">
            我們細心編排 2027 年曼谷行的每一個細節，包含洽圖洽假日市集、班塔通路朱拉隆功夜市必吃美食、王朗市場在地小吃與鄭王廟泰服體驗、昭披耶河遊船晚餐、Talad Noi街藝巷弄與Rajadamnern Stadium泰拳觀賽。
          </p>
          <Link
            href="/japan"
            className="inline-flex items-center gap-2 text-sky-300 hover:text-sky-200 font-bold transition-all border-b border-sky-300 pb-1"
          >
            查看 2026 日本行 <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
