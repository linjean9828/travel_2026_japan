'use client';
import { japanItinerary } from '@/data/trips/japan';
import { DayItinerary, Attraction } from '@/data/types';
import { Download } from 'lucide-react';
import * as XLSX from 'xlsx';

const SKIP_TITLES = ['從飯店出發', '退房出發', '返回飯店', '返回溫泉', 'Check-in', '出發返回', '出發花卷', '出發仙台', '出發前往', '返程出發', '返回飯店', '前往Outlet', '前往仙台車站', '搭乘仙台空港'];

function parseMinutes(time: string): number {
  const m = time.match(/^(\d{1,2}):(\d{2})/);
  if (!m) return -1;
  return parseInt(m[1]) * 60 + parseInt(m[2]);
}

function isSkip(a: Attraction): boolean {
  return SKIP_TITLES.some(k => a.title.includes(k));
}

function formatAttraction(a: Attraction): string {
  const parts = [`${a.time} ${a.title}`];
  if (a.address) parts.push(`地址：${a.address}`);
  if (a.mapCode) parts.push(`MapCode：${a.mapCode}`);
  return parts.join('\n');
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
  const r = day.lunchRecommendations?.[0];
  if (r) {
    const parts = [r.name, r.cuisine];
    if (r.address) parts.push(r.address);
    if (r.hours) parts.push(r.hours);
    return parts.join('\n');
  }
  const lunchAttr = day.attractions.find(a => a.title.includes('午餐'));
  return lunchAttr ? lunchAttr.description.replace(/【.*?】\s*/, '') : '';
}

function getAccommodation(day: DayItinerary): string {
  if (day.accommodation === '-') return '返回台灣';
  const parts = [day.accommodation];
  if (day.accommodationDetails?.address) parts.push(day.accommodationDetails.address);
  if (day.accommodationDetails?.mapCode) parts.push(`MapCode：${day.accommodationDetails.mapCode}`);
  return parts.join('\n');
}

export default function JapanExcelDownload() {
  const handleDownload = () => {
    const rows = japanItinerary.map(day => ({
      '日期': day.date,
      '星期': day.dayOfWeek,
      '上午行程': getMorning(day),
      '午餐': getLunch(day),
      '下午景點': getAfternoon(day),
      '晚上住宿': getAccommodation(day),
    }));

    const ws = XLSX.utils.json_to_sheet(rows);
    ws['!cols'] = [
      { wch: 8 },
      { wch: 6 },
      { wch: 55 },
      { wch: 45 },
      { wch: 55 },
      { wch: 45 },
    ];

    // 設定所有儲存格自動換行
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
