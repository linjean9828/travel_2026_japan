# 🎌 日本東北夏日祭典與自然絕景 9日行 (Next.js App Router)

這是一個使用 **Next.js (App Router)** 與 **Tailwind CSS** 打造的精采旅遊行程介紹網站。
本專案為日本東北的 9天8夜 深度旅遊行程提供完整展示與聯絡表單功能。

## 🌟 專案特色

- **現代化設計**：使用 Tailwind CSS 構建現代、美觀且響應式的視覺體驗。
- **組件化架構**：包含首頁精選卡片、行程時間軸與互動聯絡表單。
- **SEO 友善**：利用 Next.js Metadata 提供優異的 SEO 結構。
- **完整數據驅動**：每日行程皆收錄於 `src/data/mockData.ts` 內，方便未來透過 CMS 或 API 管理內容。

## 📂 專案結構

- `src/app/page.tsx`: 全新設計抵達落頁 (Home)，包含 Hero Section、精選行程推薦、聯絡表單。
- `src/app/itinerary/page.tsx`: 詳細的每日行程頁面 (Itinerary Detail)，具備導航錨點與時間軸。
- `src/components/*`: 包含封裝良好的 UI 元件：
  - `Navigation.tsx`: 頂部導航列
  - `Footer.tsx`: 頁尾
  - `FeaturedTrip.tsx`: 首頁精選行程介紹卡片
  - `DailyItineraryCard.tsx`: 詳細每日的時間軸卡片
  - `ContactForm.tsx`: 動態回饋的預約諮詢表單
- `src/data/mockData.ts`: 9天8夜完整的 Mock Data 與住宿、行程介紹。

## 🚀 如何運行本專案

1. **安裝環境依賴** (如果尚未安裝)：
   ```bash
   npm install
   ```
2. **啟動開發伺服器**：
   ```bash
   npm run dev
   ```
3. 打開瀏覽器瀏覽 [http://localhost:3000](http://localhost:3000。
