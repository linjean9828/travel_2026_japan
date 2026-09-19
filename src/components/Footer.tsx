export default function Footer() {
  return (
    <footer className="bg-[#2d241f] text-[#e9dcc8] py-12 mt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-[#fff2dc] mb-4">WangFamilyTravel 2027 泰國曼谷行</h2>
        <div className="border-t border-[#5f4c3d]/60 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} WangFamilyTravel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
