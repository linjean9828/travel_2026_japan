export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-white mb-4">WangFamilyTravel 2026年夏季旅遊</h2>
        <div className="border-t border-slate-700/50 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} WangFamilyTravel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
