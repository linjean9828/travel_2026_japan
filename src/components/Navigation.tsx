"use client";

import Link from "next/link";
import { MapPin, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors font-medium underline underline-offset-8 decoration-2 decoration-transparent hover:decoration-primary">
              2026日本行
            </Link>
            <Link href="/germany-switzerland" className="text-gray-600 hover:text-primary transition-colors font-medium underline underline-offset-8 decoration-2 decoration-transparent hover:decoration-primary">
              2026德瑞行
            </Link>
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors font-medium"
              >
                2026讀書筆記
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
                  <Link
                    href="/notes/prompt"
                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-sky-50 hover:text-primary transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    提示詞功能
                  </Link>
                  <Link
                    href="/notes/investment"
                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-sky-50 hover:text-primary transition-colors border-t border-slate-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    投資論文
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
