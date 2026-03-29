import { trips } from "@/data";
import FeaturedTrip from "@/components/FeaturedTrip";
import ItineraryOverview from "@/components/ItineraryOverview";
import Link from "next/link";
import { ChevronRight, ArrowDown, MapPin, Calendar } from "lucide-react";

export default function GermanySwitzerland() {
  const { hero, itinerary } = trips.germanySwitzerland;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={hero.image}
            alt={hero.title}
            className="w-full h-full object-cover scale-105 animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pink-200/30 via-sky-100/20 to-purple-200/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/20 to-slate-900/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-16">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-sm font-semibold tracking-wide mb-8">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            2026 歐洲之巔巡禮
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8 drop-shadow-2xl leading-tight">
            {hero.title.split('・')[0]} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-blue-100 to-sky-100 drop-shadow-sm italic font-serif">{hero.title.split('・')[1]}</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-slate-100 drop-shadow-md leading-relaxed font-medium">
            {hero.description}
          </p>
          <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
             <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 text-white shadow-lg">
                <MapPin className="w-5 h-5 text-sky-300" />
                <span className="font-semibold">瑞士・德國</span>
             </div>
             <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 text-white shadow-lg">
                <Calendar className="w-5 h-5 text-sky-300" />
                <span className="font-semibold">{hero.date}</span>
             </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/itinerary/germanySwitzerland"
              className="px-10 py-4 border border-transparent text-lg font-bold rounded-2xl text-white bg-sky-600 hover:bg-sky-500 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center group"
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

      {/* Featured Trip Section */}
      <FeaturedTrip data={hero} href="/itinerary/germanySwitzerland" />

      {/* Details Table */}
      <ItineraryOverview 
        data={itinerary} 
        href="/itinerary/germanySwitzerland" 
        title={`${hero.days} 夢幻行程概覽`} 
      />

      {/* Info Banner */}
      <section className="bg-slate-900 py-20 mt-12">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">深度探索每一刻</h2>
            <p className="text-slate-400 text-lg mb-10">
               我們細心編排 2026 年德瑞行的每一個細節，包含自駕路線、阿爾卑斯景觀下午茶與世界遺產地標探訪。
            </p>
            <Link 
               href="/" 
               className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-bold transition-all border-b border-sky-400 pb-1"
            >
               先看看 2026 日本行 <ChevronRight className="w-5 h-5" />
            </Link>
         </div>
      </section>
    </div>
  );
}
