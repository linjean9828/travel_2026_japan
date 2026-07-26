'use client';
import { japanItinerary } from '@/data/trips/japan';
import { DayItinerary, Attraction, Restaurant } from '@/data/types';
import { Download } from 'lucide-react';
import * as XLSX from 'xlsx';

const SKIP_TITLES = [
  '從飯店出發', '退房出發', '返回飯店', '返回溫泉旅館', 'Check-in',
  '出發返回', '出發花卷', '出發仙台', '出發前往', '返程出發',
  '前往Outlet', '前往仙台車站', '搭乘仙台空港', '加油、還車',
  '抵達仙台機場', '起飛賦歸',
];

function parseMinutes(time: string): number {
  const m = time.match(/^(\d{1,2}):(\d{2})/);
  if (!m) return -1;
  return parseInt(m[1]) * 60 + parseInt(m[2]);
}

function isSkip(a: Attraction): boolean {
  return SKIP_TITLES.some(k => a.title.includes(k));
}

function mapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function formatAttraction(a: Attraction): string {
  const lines = [`▸ ${a.time} ${a.title}`];
  if (a.address) lines.push(`  地址：${a.address}`);
  if (a.phone)   lines.push(`  電話：${a.phone}`);
  if (a.mapCode) lines.push(`  MapCode：${a.mapCode}`);
  const query = a.address ? a.address : `${a.title} 日本`;
  lines.push(`  Google Map：${mapsUrl(query)}`);
  return lines.join('\n');
}

function formatRestaurant(r: Restaurant): string {
  const lines = [`▸ ${r.name}（${r.cuisine}）`];
  if (r.address)  lines.push(`  地址：${r.address}`);
  if (r.phone)    lines.push(`  電話：${r.phone}`);
  if (r.hours)    lines.push(`  營業：${r.hours}`);
  if (r.priceRange) lines.push(`  價位：${r.priceRange}`);
  const query = r.address ? r.address : `${r.name} 日本`;
  lines.push(`  Google Map：${mapsUrl(query)}`);
  return lines.join('\n');
}

function getMorning(day: DayItinerary): string {
  return day.attractions
    .filter(a => {
      if (isSkip(a)) return false;
      if (a.title.includes('午餐')) return false;
      const t = parseMinutes(a.time);
      return t >= 0 && t < 12 * 60;
    })
    .map(formatAttraction)
    .join('\n\n');
}

function getAfternoon(day: DayItinerary): string {
  return day.attractions
    .filter(a => {
      if (isSkip(a)) return false;
      if (a.title.includes('午餐')) return false;
      const t = parseMinutes(a.time);
      return t >= 12 * 60;
    })
    .map(formatAttraction)
    .join('\n\n');
}

function getLunch(day: DayItinerary): string {
  if (day.lunchRecommendations && day.lunchRecommendations.length > 0) {
    return day.lunchRecommendations.map(formatRestaurant).join('\n\n');
  }
  const lunchAttr = day.attractions.find(a => a.title.includes('午餐'));
  return lunchAttr ? formatAttraction(lunchAttr) : '';
}

function getAccommodation(day: DayItinerary): string {
  if (day.accommodation === '-') return '返回台灣';
  const d = day.accommodationDetails;
  const lines = [`▸ ${day.accommodation}`];
  if (d?.address)  lines.push(`  地址：${d.address}`);
  if (d?.phone)    lines.push(`  電話：${d.phone}`);
  if (d?.mapCode)  lines.push(`  MapCode：${d.mapCode}`);
  const query = d?.address ?? day.accommodation;
  lines.push(`  Google Map：${mapsUrl(query)}`);
  return lines.join('\n');
}

export default function JapanExcelDownload() {
  const handleDownload = () => {
    const rows = japanItinerary.map(day => ({
      '日期': day.date,
      '星期': day.dayOfWeek,
      '上午行程': getMorning(day),
      '午餐推薦': getLunch(day),
      '下午景點': getAfternoon(day),
      '晚上住宿': getAccommodation(day),
    }));

    const ws = XLSX.utils.json_to_sheet(rows);
    ws['!cols'] = [
      { wch: 8 },
      { wch: 6 },
      { wch: 65 },
      { wch: 65 },
      { wch: 65 },
      { wch: 55 },
    ];

    // 全部儲存格：自動換行 + 頂端對齊
    const range = XLSX.utils.decode_range(ws['!ref'] ?? 'A1');
    for (let R = range.s.r; R <= range.e.r; R++) {
      for (let C = range.s.c; C <= range.e.c; C++) {
        const addr = XLSX.utils.encode_cell({ r: R, c: C });
        if (!ws[addr]) continue;
        ws[addr].s = { alignment: { wrapText: true, vertical: 'top' } };
      }
    }

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, '日本東北行程');
    XLSX.writeFile(wb, '2026日本東北行程.xlsx');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex justify-end">
      <button
        onClick={handleDownload}
        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
      >
        <Download className="w-5 h-5" />
        下載行程 Excel
      </button>
    </div>
  );
}
