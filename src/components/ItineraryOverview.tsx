import { DayItinerary } from "@/data";
import { List } from "lucide-react";
import Link from "next/link";

interface ItineraryOverviewProps {
  data: DayItinerary[];
  href?: string;
  title?: string;
}

export default function ItineraryOverview({ data, href = "/itinerary", title }: ItineraryOverviewProps) {
  const displayTitle = title || `${data.length}天${data.length - 1}夜 行程總覽`;
  
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
        <div className="bg-slate-50 px-6 py-5 border-b border-slate-100 flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <List className="w-6 h-6 text-primary" />
            {displayTitle}
          </h2>
          <Link href={href} className="text-sm font-semibold text-primary hover:text-sky-700 hover:underline transition-colors">
            查看詳細圖文版 &rarr;
          </Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 text-slate-600 text-sm border-b border-slate-100">
                <th className="py-4 px-6 font-semibold whitespace-nowrap w-24">Day</th>
                <th className="py-4 px-6 font-semibold whitespace-nowrap w-24">相片</th>
                <th className="py-4 px-6 font-semibold whitespace-nowrap w-32">日期</th>
                <th className="py-4 px-6 font-semibold">主要行程</th>
                <th className="py-4 px-6 font-semibold w-56">住宿地點</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100/80">
              {data.map((day) => (
                <tr key={day.day} className="hover:bg-sky-50/30 transition-colors group">
                  <td className="py-4 px-6 font-bold text-slate-700 whitespace-nowrap">
                    Day {day.day}
                  </td>
                  <td className="py-2 px-6">
                    <img src={day.image} alt={`Day ${day.day}`} className="w-16 h-12 object-cover rounded shadow-sm group-hover:scale-105 transition-transform" />
                  </td>
                  <td className="py-4 px-6 font-medium text-slate-600 whitespace-nowrap">
                    {day.date} ({day.dayOfWeek})
                  </td>
                  <td className="py-4 px-6 text-slate-900 font-medium">
                    {day.highlight}
                  </td>
                  <td className="py-4 px-6 text-slate-600 font-medium">
                    {day.accommodation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
