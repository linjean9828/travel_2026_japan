import FeaturedTrip from "@/components/FeaturedTrip";
import ItineraryOverview from "@/components/ItineraryOverview";
import Link from "next/link";
import { ChevronRight, ArrowDown } from "lucide-react";
import { trips } from "@/data";

export default function Home() {
  const { hero, itinerary } = trips.japan;

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={hero.image}
            alt={hero.title}
            className="w-full h-full object-cover animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-16">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-sm font-semibold tracking-wide mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            2026 家庭旅遊紀錄
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8 drop-shadow-2xl leading-tight">
            {hero.title.split('・')[0]} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-200 to-sky-100 drop-shadow-sm">{hero.days}旅行規劃</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-slate-100 drop-shadow-md leading-relaxed font-medium">
            {hero.description}
          </p>
          <div className="mt-12 flex justify-center">
            <Link
              href="/itinerary/japan"
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
      <FeaturedTrip data={hero} href="/itinerary/japan" />

      {/* Overview Table Section */}
      <ItineraryOverview data={itinerary} href="/itinerary/japan" />

    </>
  );
}
