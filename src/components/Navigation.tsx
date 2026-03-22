import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-white/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl tracking-tight text-gray-900">
              WangFamilyTravel
            </span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors font-medium">
              首頁
            </Link>
            <Link href="/itinerary" className="text-gray-600 hover:text-primary transition-colors font-medium">
              詳細行程
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
