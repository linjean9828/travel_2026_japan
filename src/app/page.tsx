import FeaturedTrip from "@/components/FeaturedTrip";
import ItineraryOverview from "@/components/ItineraryOverview";
import Link from "next/link";
import { ChevronRight, ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop"
            alt="Japan Tohoku Summer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-16">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-sm font-semibold tracking-wide mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            2026 家庭旅遊紀錄
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8 drop-shadow-2xl leading-tight">
            2026年青森仙台 <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-200 to-sky-100 drop-shadow-sm">9天8夜旅行規劃</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-slate-100 drop-shadow-md leading-relaxed font-medium">
            9天8夜深度體驗青森睡魔祭、奧入瀨溪流與世界遺產，享受頂級溫泉與在地美食。
          </p>
          <div className="mt-12 flex justify-center">
            <Link
              href="/itinerary"
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

      {/* Featured Trip Section */}
      <FeaturedTrip />

      {/* Overview Table Section */}
      <ItineraryOverview />

    </>
  );
}
