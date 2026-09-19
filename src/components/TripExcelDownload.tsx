'use client';

import { DayItinerary, Attraction, Restaurant } from '@/data/types';
import { Download } from 'lucide-react';
import * as XLSX from 'xlsx';

const SKIP_TITLES = [
  '從飯店出發', '退房出發', '返回飯店', '返回溫泉旅館', 'Check-in',
  '出發返回', '出發花卷', '出發仙台', '出發前往', '返程出發',
  '前往Outlet', '前往仙台車站', '搭乘仙台空港', '加油、還車',
  '抵達仙台機場', '起飛賦歸', '返回青森市區', '前往花卷神社',
  '自由活動', '返回飯店', '前往機場', '飯店退房'
];

type TripExcelDownloadProps = {
  tripName: string;
  filename: string;
  data: DayItinerary[];
};

function parseMinutes(time: string): number {
  const match = time.match(/^(\d{1,2}):(\d{2})/);
  if (!match) return -1;
  return parseInt(match[1], 10) * 60 + parseInt(match[2], 10);
}

function isSkip(attraction: Attraction): boolean {
  return SKIP_TITLES.some((keyword) => attraction.title.includes(keyword));
}

function mapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function formatAttraction(attraction: Attraction, fallbackPlace: string): string {
  const lines = [`▸ ${attraction.time} ${attraction.title}`];
  if (attraction.address) lines.push(`  地址：${attraction.address}`);
  if (attraction.phone) lines.push(`  電話：${attraction.phone}`);
  if (attraction.mapCode) lines.push(`  MapCode：${attraction.mapCode}`);
  if (attraction.mustEat) lines.push(`  必吃美食：${attraction.mustEat}`);
  if (attraction.dessert) lines.push(`  特色甜點：${attraction.dessert}`);
  const query = attraction.address ? attraction.address : `${attraction.title} ${fallbackPlace}`;
  lines.push(`  Google Map：${mapsUrl(query)}`);
  return lines.join('\n');
}

function formatRestaurant(restaurant: Restaurant, fallbackPlace: string): string {
  const lines = [`▸ ${restaurant.name}（${restaurant.cuisine}）`];
  if (restaurant.address) lines.push(`  地址：${restaurant.address}`);
  if (restaurant.phone) lines.push(`  電話：${restaurant.phone}`);
  if (restaurant.hours) lines.push(`  營業：${restaurant.hours}`);
  if (restaurant.priceRange) lines.push(`  價位：${restaurant.priceRange}`);
  const query = restaurant.address ? restaurant.address : `${restaurant.name} ${fallbackPlace}`;
  lines.push(`  Google Map：${mapsUrl(query)}`);
  return lines.join('\n');
}

function getMorning(day: DayItinerary, fallbackPlace: string): string {
  return day.attractions
    .filter((attraction) => {
      if (isSkip(attraction)) return false;
      if (attraction.title.includes('午餐')) return false;
      const time = parseMinutes(attraction.time);
      return time >= 0 && time < 12 * 60;
    })
    .map((attraction) => formatAttraction(attraction, fallbackPlace))
    .join('\n\n');
}

function getAfternoon(day: DayItinerary, fallbackPlace: string): string {
  return day.attractions
    .filter((attraction) => {
      if (isSkip(attraction)) return false;
      if (attraction.title.includes('午餐')) return false;
      const time = parseMinutes(attraction.time);
      return time >= 12 * 60;
    })
    .map((attraction) => formatAttraction(attraction, fallbackPlace))
    .join('\n\n');
}

function getLunch(day: DayItinerary, fallbackPlace: string): string {
  if (day.lunchRecommendations && day.lunchRecommendations.length > 0) {
    return day.lunchRecommendations.map((restaurant) => formatRestaurant(restaurant, fallbackPlace)).join('\n\n');
  }
  const lunchAttraction = day.attractions.find((attraction) => attraction.title.includes('午餐'));
  return lunchAttraction ? formatAttraction(lunchAttraction, fallbackPlace) : '';
}

function getAccommodation(day: DayItinerary): string {
  if (day.accommodation === '-') return '返回台灣';
  const details = day.accommodationDetails;
  const lines = [`▸ ${day.accommodation}`];
  if (details?.address) lines.push(`  地址：${details.address}`);
  if (details?.phone) lines.push(`  電話：${details.phone}`);
  if (details?.mapCode) lines.push(`  MapCode：${details.mapCode}`);
  const query = details?.address ?? day.accommodation;
  lines.push(`  Google Map：${mapsUrl(query)}`);
  return lines.join('\n');
}

export default function TripExcelDownload({ tripName, filename, data }: TripExcelDownloadProps) {
  const handleDownload = () => {
    const rows = data.map((day) => ({
      日期: day.date,
      星期: day.dayOfWeek,
      上午行程: getMorning(day, tripName),
      午餐推薦: getLunch(day, tripName),
      下午景點: getAfternoon(day, tripName),
      晚上住宿: getAccommodation(day),
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

    const range = XLSX.utils.decode_range(ws['!ref'] ?? 'A1');
    for (let row = range.s.r; row <= range.e.r; row += 1) {
      for (let col = range.s.c; col <= range.e.c; col += 1) {
        const address = XLSX.utils.encode_cell({ r: row, c: col });
        if (!ws[address]) continue;
        ws[address].s = { alignment: { wrapText: true, vertical: 'top' } };
      }
    }

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, ws, tripName);
    XLSX.writeFile(workbook, filename);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex justify-end">
      <button
        type="button"
        onClick={handleDownload}
        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
      >
        <Download className="w-5 h-5" />
        下載行程 Excel
      </button>
    </div>
  );
}
