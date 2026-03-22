import { itineraryData } from "@/data/mockData";
import DailyItineraryCard from "@/components/DailyItineraryCard";
import { Calendar, MapPin } from "lucide-react";

export const metadata = {
  title: "詳細行程 | 2026年夏季旅遊",
  description: "9天8夜 日本東北深度旅遊 詳細每日行程表",
};

export default function ItineraryPage() {
  return (
    <>
      <div className="bg-slate-900 pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1490806840058-29bf8b5aadb5?q=80&w=2070&auto=format&fit=crop" alt="Background pattern" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 text-sky-200 border border-white/20 text-sm font-semibold tracking-wide mb-6">
            <Calendar className="w-4 h-4" />
            2026年8月22日(六) - 8月30日(日)
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-md">詳細行程總覽</h1>
          <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto">帶您深入了解這9天8夜的精彩規劃，每一站都是精心挑選的絕佳體驗。</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-xl rounded-2xl shadow-sm border border-slate-200 p-3 mb-12 overflow-x-auto custom-scrollbar">
          <div className="flex space-x-2 min-w-max">
            {itineraryData.map((day) => (
              <a
                key={day.day}
                href={`#day-${day.day}`}
                className="px-5 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-sky-50 hover:text-primary transition-colors whitespace-nowrap"
              >
                Day {day.day}
              </a>
            ))}
          </div>
        </div>

        {/* 自駕路線地圖 */}
        <div id="route-map" className="mb-12 bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-100">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              自駕路線總覽
            </h2>
            <div className="flex flex-wrap gap-2 mt-4 text-sm font-medium text-gray-600">
              {[
                { city: "青森", days: "Day 1-4", color: "bg-sky-100 text-sky-700" },
                { city: "花卷", days: "Day 5-6", color: "bg-emerald-100 text-emerald-700" },
                { city: "松島", days: "Day 7", color: "bg-violet-100 text-violet-700" },
                { city: "仙台", days: "Day 7-9", color: "bg-amber-100 text-amber-700" },
              ].map((stop) => (
                <span key={stop.city} className={`px-3 py-1.5 rounded-full font-semibold ${stop.color}`}>
                  📍 {stop.city} <span className="opacity-70 font-normal ml-1">{stop.days}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="relative w-full h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24320.123!2d140.8721!3d38.2682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1711100000000!5m2!1szh-TW!2stw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="日本東北自駕路線地圖"
              className="absolute inset-0"
            />
          </div>
        </div>

        <div className="space-y-12">
          {itineraryData.map((day) => (
            <DailyItineraryCard key={day.day} data={day} />
          ))}
        </div>
      </div>

    </>
  );
}
