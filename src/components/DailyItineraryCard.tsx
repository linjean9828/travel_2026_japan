import { DayItinerary } from "@/data/mockData";
import { BedDouble, CheckCircle2, Clock, MapPin, Phone, Map, UtensilsCrossed, Star } from "lucide-react";

export default function DailyItineraryCard({ data }: { data: DayItinerary }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden mb-12" id={`day-${data.day}`}>
      {/* 景點圖片橫幅 */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="bg-primary text-white font-bold px-4 py-1.5 rounded-full text-sm shadow-md">
            Day {data.day}
          </span>
          <span className="bg-white/90 backdrop-blur-sm text-gray-700 font-semibold px-3 py-1.5 rounded-full text-sm shadow-md border border-white/50">
            {data.date}（{data.dayOfWeek}）
          </span>
        </div>
        <div className="absolute bottom-4 left-5 right-5">
          <h3 className="text-xl font-bold text-white drop-shadow-md">{data.title}</h3>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-10 p-5 bg-gradient-to-br from-sky-50 to-white rounded-2xl border border-sky-100 flex items-start gap-4 shadow-sm">
          <div className="bg-white p-2.5 rounded-xl shadow text-primary shrink-0 mt-1">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">今日亮點</h4>
            <p className="text-gray-700 leading-relaxed font-medium">{data.highlight}</p>
          </div>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-4 mb-10">
          {data.attractions.map((attr, idx) => (
            <div key={idx} className="mb-8 pl-8 relative group">
              <div className="absolute w-4 h-4 bg-white border-2 border-slate-300 group-hover:border-primary transition-colors rounded-full -left-[9px] top-1"></div>
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
                <div className="flex items-center text-primary font-bold w-24 shrink-0 bg-sky-50 px-3 py-1.5 rounded-lg w-auto self-start">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{attr.time}</span>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex-1 shadow-sm group-hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{attr.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{attr.description}</p>
                  
                  {(attr.address || attr.phone || attr.mapCode) && (
                    <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-500 mt-3 pt-3 border-t border-slate-200/60">
                      {attr.address && (
                        <a 
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(attr.title + ' ' + attr.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 bg-white border border-slate-200 px-2 py-1 rounded shadow-sm hover:border-primary/30 transition-colors group/addr"
                        >
                          <MapPin className="w-3 h-3 text-rose-500" /> 
                          <span className="group-hover/addr:text-primary group-hover/addr:underline transition-colors">{attr.address}</span>
                        </a>
                      )}
                      {attr.phone && (
                        <span className="flex items-center gap-1 bg-white border border-slate-200 px-2 py-1 rounded shadow-sm">
                          <Phone className="w-3 h-3 text-sky-500" /> {attr.phone}
                        </span>
                      )}
                      {attr.mapCode && (
                        <span className="flex items-center gap-1 bg-white border border-slate-200 px-2 py-1 rounded shadow-sm">
                          <Map className="w-3 h-3 text-emerald-500" /> MapCode: {attr.mapCode}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {data.lunchRecommendations && data.lunchRecommendations.length > 0 && (
          <div className="mb-10">
            <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
              <div className="bg-orange-100 p-2 rounded-xl">
                <UtensilsCrossed className="w-5 h-5 text-orange-500" />
              </div>
              午餐推薦
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {data.lunchRecommendations.map((r, idx) => (
                <div key={idx} className="bg-orange-50 border border-orange-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h5 className="font-bold text-gray-900 text-sm leading-snug">{r.name}</h5>
                    {r.tabelogScore && (
                      <span className="flex items-center gap-1 bg-orange-400 text-white text-xs font-bold px-2 py-0.5 rounded-full shrink-0">
                        <Star className="w-3 h-3 fill-white" />
                        {r.tabelogScore}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-orange-700 font-medium mb-2">{r.cuisine}</p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">{r.recommendation}</p>
                  <div className="flex flex-wrap gap-1.5 text-xs text-gray-500 mb-3">
                    {r.priceRange && (
                      <span className="bg-white border border-orange-100 px-2 py-0.5 rounded-full">💴 {r.priceRange}</span>
                    )}
                    {r.hours && (
                      <span className="bg-white border border-orange-100 px-2 py-0.5 rounded-full">🕐 {r.hours}</span>
                    )}
                    {r.phone && (
                      <span className="flex items-center gap-1 bg-white border border-orange-100 px-2 py-0.5 rounded-full">
                        <Phone className="w-3 h-3 text-sky-500" />{r.phone}
                      </span>
                    )}
                  </div>
                  {r.address && (
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name + ' ' + r.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 w-full bg-white border border-slate-200 hover:bg-green-50 hover:border-green-400 hover:text-green-700 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-xl transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-green-500" />
                      在 Google Maps 查看
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-slate-100">
        <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 shadow-sm w-full">
          <h4 className="flex items-center text-lg font-bold text-gray-900 mb-3">
            <BedDouble className="w-5 h-5 text-primary mr-2" />
            住宿安排
          </h4>
          <p className="text-gray-700 font-medium">{data.accommodation}</p>
          
          {data.accommodationDetails && (
            <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-500 mt-3 pt-3 border-t border-slate-200/60">
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.accommodation + ' ' + data.accommodationDetails.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-white border border-slate-200 px-2 py-1 rounded shadow-sm hover:border-primary/30 transition-colors group/addr"
              >
                <MapPin className="w-3 h-3 text-rose-500" /> 
                <span className="group-hover/addr:text-primary group-hover/addr:underline transition-colors">{data.accommodationDetails.address}</span>
              </a>
              <span className="flex items-center gap-1 bg-white border border-slate-200 px-2 py-1 rounded shadow-sm">
                <Phone className="w-3 h-3 text-sky-500" /> {data.accommodationDetails.phone}
              </span>
              <span className="flex items-center gap-1 bg-white border border-slate-200 px-2 py-1 rounded shadow-sm">
                <Map className="w-3 h-3 text-emerald-500" /> MapCode: {data.accommodationDetails.mapCode}
              </span>
            </div>
          )}
        </div>

          {data.tips && data.tips.length > 0 && (
            <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100">
              <h4 className="font-bold text-amber-800 text-base mb-3 flex items-center">
                <span className="text-xl mr-2">💡</span> 溫馨提醒
              </h4>
              <ul className="list-disc pl-5 text-amber-800/90 space-y-1.5 font-medium text-sm">
                {data.tips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
