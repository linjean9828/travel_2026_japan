---
name: deploy
description: "Use this skill when deploying the travel-site project to GitHub and Zeabur. Triggers: 部署, deploy, push to github, zeabur, 502, container crash, build error."
---

# Travel Site 部署技能

## 專案基本資訊

- **框架**：Next.js 14.2.3（App Router）
- **部署平台**：Zeabur（容器化部署）
- **GitHub Repo**：linjean9828/travel_2026_japan
- **正式網址**：https://japan-travel-2026.zeabur.app
- **本地開發**：`npm run dev`（通常在 localhost:3001）

---

## 標準部署流程

### Step 1 — 本地 Build 驗證
```bash
npm run build
```
- ✅ 必須通過才能繼續
- 確認所有頁面無 TypeScript 錯誤

### Step 2 — Docker 本地測試（完整驗證）
```bash
docker build -t travel-site .
docker run -d -p 3002:3000 -e PORT=3000 --name travel-test travel-site
# 瀏覽器確認 http://localhost:3002 正常後
docker stop travel-test && docker rm travel-test
```
- Port 3000 通常被 dev server 佔用，改用 3002 對應容器內 3000

### Step 3 — Commit & Push
```bash
git add <changed files>
git commit -m "feat/fix: 說明變更內容"
git push origin main
```
- Zeabur 偵測到 push 後自動重新部署

---

## 架構說明

### Next.js Standalone 模式
`next.config.mjs` 啟用 `output: "standalone"`，產生自包含的伺服器：
```
.next/standalone/server.js   ← 啟動入口
.next/static/                ← 靜態資源（需手動複製）
public/                      ← 本地圖片（需手動複製）
```

### Dockerfile 重點
```dockerfile
# 多階段建置：deps → builder → runner
COPY --from=builder /app/public ./public          # 本地圖片
COPY --from=builder /app/.next/standalone ./      # standalone server
COPY --from=builder /app/.next/static ./.next/static

CMD ["sh", "-c", "HOSTNAME=0.0.0.0 node server.js"]
```

**關鍵：**
- `public/` 必須手動複製，standalone 不會自動包含
- CMD 使用 shell 形式，確保 Zeabur 動態注入的 `PORT` 可正確讀取
- `HOSTNAME=0.0.0.0` 確保容器對外可連線

---

## 常見錯誤與解法

### 502 Bad Gateway
**原因**：Next.js 沒有監聽 Zeabur 指定的 PORT 或 HOSTNAME 綁定錯誤

**解法**：確認 Dockerfile CMD 為：
```dockerfile
CMD ["sh", "-c", "HOSTNAME=0.0.0.0 node server.js"]
```

### BackOff: Back-off restarting failed container（容器崩潰循環）
**原因一**：ESM-only 套件（如 react-markdown v10、remark-gfm v4）在 standalone 模式下無法載入

**解法**：移除套件或降版；安裝新套件前確認是否為 ESM-only（package.json 有 `"type": "module"`）

**原因二**：Build 時錯誤未被發現

**解法**：推送前先執行 `npm run build`

### 本地圖片不顯示（public/ 資料夾）
**原因**：standalone 模式不自動包含 `public/`

**解法**：Dockerfile 已處理（見上方 COPY 指令）；若仍有問題確認 Dockerfile 中的複製步驟

### npm error: Cannot find module 'promise-retry'
**原因**：Zeabur buildpack 嘗試執行 `npm update -g npm`，npm 環境損壞

**解法**：使用 Dockerfile 繞過 buildpack，或在 `package.json` 指定 engines：
```json
"engines": {
  "node": ">=20.0.0",
  "npm": ">=10.0.0"
}
```

---

## 套件注意事項

### 禁止安裝（ESM-only，會造成崩潰）
- `react-markdown` v10+
- `remark-gfm` v4+
- 其他 `"type": "module"` 的套件

### 已安裝套件
- `lucide-react` ^0.395.0
- `@tailwindcss/typography`（tailwind.config.ts 中以 `require()` 載入）

---

## 靜態圖片管理

本地圖片存放於 `public/images/itinerary/`：
```
bmw.png, heidelberg.png, jungfraujoch.png
lucerne.png, neuschwanstein.png, oberammergau.png
rothenburg.png, strasbourg.png, wieskirche.png
```

**使用規則**：
- 路徑格式：`/images/itinerary/xxx.png`
- 優先使用本地圖片（Unsplash 特定 ID 可能失效）
- 新增景點圖片時一併加入此資料夾

---

## 頁面路由結構

```
/                          首頁（日本行）
/germany-switzerland       德瑞行首頁
/itinerary/[tripId]        行程詳細頁（japan / germanySwitzerland）
/notes/prompt              提示詞功能
/notes/investment          投資論文
```

---

*最後更新：2026-03*
