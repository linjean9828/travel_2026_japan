"use client";

import Link from "next/link";
import { MapPin, ChevronDown, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dropdownOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

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

          {/* 桌機選單 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors font-medium underline underline-offset-8 decoration-2 decoration-transparent hover:decoration-primary">
              2026德瑞行
            </Link>
            <Link href="/japan" className="text-gray-600 hover:text-primary transition-colors font-medium underline underline-offset-8 decoration-2 decoration-transparent hover:decoration-primary">
              2026日本行
            </Link>
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors font-medium"
              >
                2026讀書筆記
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden z-50">
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
                  <Link
                    href="/notes/iching"
                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-sky-50 hover:text-primary transition-colors border-t border-slate-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    易經學習
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* 手機漢堡按鈕 */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="開啟選單"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* 手機下拉選單 */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2.5 rounded-lg text-gray-700 font-medium hover:bg-sky-50 hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              2026德瑞行
            </Link>
            <Link
              href="/japan"
              className="block px-3 py-2.5 rounded-lg text-gray-700 font-medium hover:bg-sky-50 hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              2026日本行
            </Link>
            <div className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              2026讀書筆記
            </div>
            <Link
              href="/notes/prompt"
              className="block px-3 py-2.5 pl-6 rounded-lg text-gray-700 font-medium hover:bg-sky-50 hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              提示詞功能
            </Link>
            <Link
              href="/notes/investment"
              className="block px-3 py-2.5 pl-6 rounded-lg text-gray-700 font-medium hover:bg-sky-50 hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              投資論文
            </Link>
            <Link
              href="/notes/iching"
              className="block px-3 py-2.5 pl-6 rounded-lg text-gray-700 font-medium hover:bg-sky-50 hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              易經學習
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
