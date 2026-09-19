import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "2027泰國曼谷家庭輕旅行 | WangFamilyTravel",
  description: "2027年2月5日(五) - 2月10日(三) 6天5夜 泰國曼谷家庭輕旅行",
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
