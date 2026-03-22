import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "2026年夏季旅遊 | WangFamilyTravel",
  description: "2026年8月22日(六) - 8月30日(日) 9天8夜 日本深度旅遊",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen pb-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
