# 部署說明

## 快速部署

只需要三步驟，推送到 GitHub 後 Render 會**自動部署**：

```bash
# 1. 驗證建置
npm run build

# 2. 提交變更
git add .
git commit -m "feat: 說明這次改了什麼"

# 3. 推送到 GitHub → 自動觸發 Render 部署
git push origin main
```

部署完成後約 1–3 分鐘，即可在正式網站查看：
**https://travel-2026-japan.onrender.com**

---

## 部署流程圖

```
本地修改
   ↓
npm run build   ← 必須通過，有錯誤禁止推送
   ↓
git push origin main
   ↓
GitHub（linjean9828/travel_2026_japan）
   ↓  autoDeploy: true（自動偵測）
Render 重新建置並部署
   ↓
https://travel-2026-japan.onrender.com ✅
```

---

## Render 設定（render.yaml）

專案根目錄已有 `render.yaml`，首次使用請至 Render 後台：

1. 登入 [https://render.com](https://render.com)
2. New → **Blueprint**（會自動讀取 `render.yaml`）
3. 連結 GitHub repo：`linjean9828/travel_2026_japan`
4. 確認設定後點 **Apply**

之後每次 `git push origin main` 都會自動部署。

| 設定項目 | 值 |
|----------|----|
| Runtime | Node.js |
| Build Command | `npm ci && npm run build` |
| Start Command | `npm start` |
| 自動部署 | 是（main 分支） |

---

## 注意事項

| 項目 | 說明 |
|------|------|
| `npm run build` 必須先跑 | 有 TypeScript 錯誤就不要推 |
| 禁止安裝 ESM-only 套件 | react-markdown v10+、remark-gfm v4+ 會造成崩潰 |
| 本地圖片放 `public/images/itinerary/` | 路徑格式：`/images/itinerary/xxx.png` |
| Unsplash 圖片 ID 可能失效 | 優先使用本地圖片 |
| Render 免費方案 | 閒置 15 分鐘後會休眠，第一次存取較慢 |

---

## 頁面路由

| 路徑 | 說明 |
|------|------|
| `/` | 首頁（德瑞行） |
| `/japan` | 日本行首頁 |
| `/germany-switzerland` | 德瑞行（同首頁，保留舊路由） |
| `/itinerary/germanySwitzerland` | 德瑞行詳細行程 |
| `/itinerary/japan` | 日本行詳細行程 |
| `/notes/prompt` | 提示詞功能筆記 |
| `/notes/investment` | 投資論文筆記 |

---

## 本地開發

```bash
npm run dev
# 開啟 http://localhost:3000
```

---

*專案：Next.js 14 · 部署：Render · 最後更新：2026-05*
