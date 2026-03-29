import { HeroItinerary } from "@/data";
import { Calendar, Map, Clock, Plane } from "lucide-react";
import Link from "next/link";

interface FeaturedTripProps {
  data: HeroItinerary;
  href?: string;
}

export default function FeaturedTrip({ data, href = "/itinerary" }: FeaturedTripProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">行程總覽</h2>
        <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
      </div>
      
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col lg:flex-row group border border-gray-100">
        <div className="relative w-full lg:w-5/12 h-64 lg:h-auto overflow-hidden">
          <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur text-primary font-bold px-4 py-1.5 rounded-full text-sm shadow-sm">
            熱門行程
          </div>
        </div>
        
        <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{data.title}</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center text-gray-700 bg-sky-50 p-4 rounded-xl">
                <div className="bg-white p-2 rounded-lg mr-4 shadow-sm">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold">{data.days}</span>
              </div>
              <div className="flex items-center text-gray-700 bg-sky-50 p-4 rounded-xl">
                <div className="bg-white p-2 rounded-lg mr-4 shadow-sm">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold text-sm">{data.date}</span>
              </div>
              <Link href={`${href}#route-map`} className="flex items-center text-gray-700 bg-sky-50 p-4 rounded-xl cursor-pointer hover:bg-sky-100 transition-colors group/map">
                <div className="bg-white p-2 rounded-lg mr-4 shadow-sm group-hover/map:bg-primary group-hover/map:text-white transition-colors">
                  <Map className="w-5 h-5 text-inherit" />
                </div>
                <span className="font-semibold group-hover/map:text-primary transition-colors">路線地圖</span>
              </Link>
              <div className="flex items-center text-gray-700 bg-sky-50 p-4 rounded-xl">
                <div className="bg-white p-2 rounded-lg mr-4 shadow-sm">
                  <Plane className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold">自駕探索・絕佳體驗</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end border-t border-gray-100 pt-6 mt-2">
            <Link 
              href={href} 
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-bold rounded-xl text-white bg-primary hover:bg-sky-700 transition-all shadow hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
            >
              查看每日詳細行程
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
