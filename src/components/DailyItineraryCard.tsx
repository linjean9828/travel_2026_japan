"use client";

import { useState } from "react";
import { DayItinerary, Attraction } from "@/data";
import { BedDouble, CheckCircle2, Clock, MapPin, Phone, Map, UtensilsCrossed, Star, PlusCircle, MinusCircle, BookOpen, User, Film, ScrollText } from "lucide-react";

function AttractionItem({ attr }: { attr: Attraction }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="mb-10 pl-8 relative group/item">
      <div className="absolute w-4 h-4 bg-white border-2 border-slate-300 group-hover/item:border-primary transition-colors rounded-full -left-[9px] top-1"></div>
      
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
        <div className="flex items-center text-primary font-bold w-full md:w-24 shrink-0 bg-sky-50 px-3 py-1.5 rounded-lg self-start">
          <Clock className="w-4 h-4 mr-2" />
          <span>{attr.time}</span>
        </div>
        
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex-1 shadow-sm group-hover/item:shadow-md transition-all duration-300">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center flex-wrap gap-2 mb-1">
                <h4 className="font-bold text-lg text-gray-900 group-hover/item:text-primary transition-colors">{attr.title}</h4>
                {attr.foundedYear && (
                  <span className="bg-slate-900 text-white text-[10px] font-black px-2 py-0.5 rounded italic tracking-widest shadow-sm">
                    EST {attr.foundedYear}
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">{attr.description}</p>
              
              {/* 景點專屬圖片 */}
              {attr.image && (
                <div className="mt-4 relative rounded-xl overflow-hidden group/img aspect-[21/9] max-h-40 border border-slate-200/50 shadow-sm">
                  <img 
                    src={attr.image} 
                    alt={attr.title} 
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              )}
            </div>
            {attr.guideNote && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${
                  isExpanded 
                  ? "bg-primary text-white shadow-lg" 
                  : "bg-white text-primary border border-primary/20 hover:border-primary/50 hover:bg-sky-50 shadow-sm"
                }`}
              >
                {isExpanded ? <MinusCircle className="w-3.5 h-3.5" /> : <PlusCircle className="w-3.5 h-3.5" />}
                {isExpanded ? "收合筆記" : "導遊小故事"}
              </button>
            )}
          </div>
          
          {/* 互動式導遊筆記區域 */}
          {attr.guideNote && (
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? "max-h-[800px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
            }`}>
              <div className="bg-gradient-to-br from-amber-50/80 to-sky-50/50 border border-amber-100/60 rounded-2xl p-5 shadow-inner">
                <div className="flex items-center gap-2 mb-4 text-amber-800 font-bold border-b border-amber-200 pb-2">
                  <ScrollText className="w-4 h-4" />
                  <span className="tracking-wide">資深導遊悄悄話</span>
                </div>
                
                <div className="space-y-4">
                  {attr.guideNote.story && (
                    <div className="text-slate-700 text-sm leading-relaxed italic bg-white/40 p-3 rounded-xl border border-white/60">
                      「{attr.guideNote.story}」
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {attr.guideNote.celebrity && (
                      <div className="flex items-start gap-2 bg-white/60 p-3 rounded-xl border border-white/80 shadow-sm">
                        <User className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-tighter">歷史名人/重要人物</p>
                          <p className="text-sm font-semibold text-slate-800">{attr.guideNote.celebrity}</p>
                        </div>
                      </div>
                    )}
                    {attr.guideNote.movie && (
                      <div className="flex items-start gap-2 bg-white/60 p-3 rounded-xl border border-white/80 shadow-sm">
                        <Film className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[10px] font-bold text-rose-400 uppercase tracking-tighter">推薦影視/電影連結</p>
                          <p className="text-sm font-semibold text-slate-800">{attr.guideNote.movie}</p>
                        </div>
                      </div>
                    )}
                    {attr.guideNote.novel && (
                      <div className="flex items-start gap-2 bg-white/60 p-3 rounded-xl border border-white/80 shadow-sm">
                        <BookOpen className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-tighter">相關文學/經典小說</p>
                          <p className="text-sm font-semibold text-slate-800">{attr.guideNote.novel}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {(attr.address || attr.phone || attr.mapCode || attr.keyPerson || attr.souvenir || attr.mustEat) && (
            <div className="flex flex-wrap gap-2 text-[10px] font-medium text-gray-400 mt-4 pt-4 border-t border-slate-200/40">
              {attr.keyPerson && (
                <div className="flex items-center gap-1 bg-indigo-50/50 border border-indigo-100/50 px-2 py-1 rounded shadow-sm text-indigo-600 font-bold tracking-tight">
                  <User className="w-3 h-3 text-indigo-400" />
                  重要人物: {attr.keyPerson}
                  {attr.keyPersonDeeds && (
                    <span className="ml-1 pl-1 border-l border-indigo-200 text-[9px] font-medium text-indigo-400/80">
                      {attr.keyPersonDeeds}
                    </span>
                  )}
                </div>
              )}
              {attr.mustEat && (
                attr.mustEatLink ? (
                  <a 
                    href={attr.mustEatLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-rose-50/50 border border-rose-100/50 px-2 py-1 rounded shadow-sm text-rose-600 font-bold tracking-tight hover:bg-rose-100/50 transition-colors"
                  >
                    <UtensilsCrossed className="w-3 h-3 text-rose-400" />
                    必吃美食: {attr.mustEat}
                  </a>
                ) : (
                  <div className="flex items-center gap-1 bg-rose-50/50 border border-rose-100/50 px-2 py-1 rounded shadow-sm text-rose-600 font-bold tracking-tight">
                    <UtensilsCrossed className="w-3 h-3 text-rose-400" />
                    必吃美食: {attr.mustEat}
                  </div>
                )
              )}
              {attr.souvenir && (
                <div className="flex items-center gap-1 bg-emerald-50/50 border border-emerald-100/50 px-2 py-1 rounded shadow-sm text-emerald-600 font-bold tracking-tight">
                  <Star className="w-3 h-3 text-emerald-400" />
                  必買伴手禮: {attr.souvenir}
                </div>
              )}
              {attr.address && (
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(attr.title + ' ' + attr.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-white border border-slate-200 px-2 py-1 rounded shadow-sm hover:border-primary/30 transition-colors group/addr"
                >
                  <MapPin className="w-3 h-3 text-rose-400" /> 
                  <span className="group-hover/addr:text-primary group-hover/addr:underline transition-colors">{attr.address}</span>
                </a>
              )}
              {attr.phone && (
                <span className="flex items-center gap-1 bg-white border border-slate-200 px-2 py-1 rounded shadow-sm">
                  <Phone className="w-3 h-3 text-sky-400" /> {attr.phone}
                </span>
              )}
              {attr.mapCode && (
                <span className="flex items-center gap-1 bg-white border border-slate-200 px-2 py-1 rounded shadow-sm">
                  <Map className="w-3 h-3 text-emerald-400" /> MapCode: {attr.mapCode}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

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
            <AttractionItem key={idx} attr={attr} />
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
