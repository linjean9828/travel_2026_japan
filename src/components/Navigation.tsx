"use client";

import Link from "next/link";
import { MapPin, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [tripDropdownOpen, setTripDropdownOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleTripMenu = () => {
    setTripDropdownOpen((current) => !current);
    setDropdownOpen(false);
  };

  const toggleNotesMenu = () => {
    setDropdownOpen((current) => !current);
    setTripDropdownOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-sky-200/80 bg-white/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-sky-600" />
            <span className="font-bold text-xl tracking-tight text-slate-800">
              WangFamilyTravel
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-sky-600 transition-colors font-medium underline underline-offset-8 decoration-2 decoration-transparent hover:decoration-sky-600">
              2027 泰國行
            </Link>

            <div className="relative">
              <button
                type="button"
                aria-expanded={tripDropdownOpen}
                aria-haspopup="menu"
                onClick={toggleTripMenu}
                className="flex items-center gap-1 text-slate-700 hover:text-sky-600 transition-colors font-medium"
              >
                2026 家庭旅遊
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${tripDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {tripDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 rounded-2xl border border-sky-100 bg-white/95 shadow-xl backdrop-blur-md overflow-hidden z-50">
                  <Link
                    href="/germany-switzerland"
                    className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                    onClick={() => setTripDropdownOpen(false)}
                  >
                    2026德瑞行
                  </Link>
                  <Link
                    href="/japan"
                    className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors border-t border-sky-100"
                    onClick={() => setTripDropdownOpen(false)}
                  >
                    2026日本行
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                aria-expanded={dropdownOpen}
                aria-haspopup="menu"
                onClick={toggleNotesMenu}
                className="flex items-center gap-1 text-slate-700 hover:text-sky-600 transition-colors font-medium"
              >
                2026 讀書筆記
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 rounded-2xl border border-sky-100 bg-white/95 shadow-xl backdrop-blur-md overflow-hidden z-50">
                  <Link
                    href="/notes/prompt"
                    className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    提示詞功能
                  </Link>
                  <Link
                    href="/notes/investment"
                    className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors border-t border-sky-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    投資論文
                  </Link>
                  <Link
                    href="/notes/iching"
                    className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors border-t border-sky-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    易經學習
                  </Link>
                </div>
              )}
            </div>
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-sky-600 hover:bg-sky-50 transition-colors"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label={mobileOpen ? "關閉選單" : "開啟選單"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden bg-white/95 border-t border-sky-100 shadow-lg backdrop-blur-md">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-sky-50 hover:text-sky-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              2027 泰國行
            </Link>
            <div className="px-3 py-1 text-xs font-semibold text-sky-600 uppercase tracking-wider">
              2026 家庭旅遊
            </div>
            <Link
              href="/germany-switzerland"
              className="block px-3 py-2.5 pl-6 rounded-lg text-slate-700 font-medium hover:bg-sky-50 hover:text-sky-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              2026德瑞行
            </Link>
            <Link
              href="/japan"
              className="block px-3 py-2.5 pl-6 rounded-lg text-slate-700 font-medium hover:bg-sky-50 hover:text-sky-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              2026日本行
            </Link>
            <div className="px-3 py-1 text-xs font-semibold text-sky-600 uppercase tracking-wider">
              2026 讀書筆記
            </div>
            <Link
              href="/notes/prompt"
              className="block px-3 py-2.5 pl-6 rounded-lg text-slate-700 font-medium hover:bg-sky-50 hover:text-sky-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              提示詞功能
            </Link>
            <Link
              href="/notes/investment"
              className="block px-3 py-2.5 pl-6 rounded-lg text-slate-700 font-medium hover:bg-sky-50 hover:text-sky-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              投資論文
            </Link>
            <Link
              href="/notes/iching"
              className="block px-3 py-2.5 pl-6 rounded-lg text-slate-700 font-medium hover:bg-sky-50 hover:text-sky-600 transition-colors"
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
