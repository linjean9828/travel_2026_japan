# Travel Site 專案說明

## 專案概述
2026 家庭旅遊紀錄網站，包含日本行、德瑞行與讀書筆記。
- **框架**：Next.js 14（App Router）
- **部署**：Zeabur + GitHub（linjean9828/travel_2026_japan）
- **正式網址**：https://japan-travel-2026.zeabur.app

## 部署
執行任何部署相關操作前，請先讀取並遵照 `skills/deploy/SKILL.md` 的流程：
1. `npm run build` 驗證
2. Docker 本地測試（選擇性）
3. `git push origin main`

## 資料結構
- 行程資料：`src/data/trips/japan.ts`、`src/data/trips/germany-switzerland.ts`
- 共用型別：`src/data/types.ts`
- 本地圖片：`public/images/itinerary/`

## 注意事項
- 禁止安裝 ESM-only 套件（react-markdown v10+、remark-gfm v4+ 等）
- 新增套件前先確認非 ESM-only
- 本地圖片優先使用，Unsplash ID 可能失效
