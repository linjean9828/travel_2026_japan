---
name: deploy
description: "Use this skill when deploying the travel-site project to GitHub and Zeabur. Triggers: 部署, deploy, push to github, zeabur, 502, container crash, build error."
---

# Travel Site 部署技能

## 專案基本資訊

- **框架**：Next.js 14.2.35（App Router）
- **部署平台**：Zeabur（buildpack，非 Docker）
- **GitHub Repo**：linjean9828/travel_2026_japan
- **正式網址**：https://japan-travel-2026.zeabur.app
- **本地前端**：`npm run dev`（localhost:3000）
- **本地後端**：`python3.13 src/backend/app.py`（localhost:5000）

---

## 標準部署流程

### Step 1 — 本地 Build 驗證
```bash
npm run build
```
- 必須通過才能繼續
- 確認所有頁面無 TypeScript 錯誤

### Step 2 — Commit & Push（不含 env）
```bash
git add <changed files>   # 不要 git add etc/
git commit -m "feat/fix: 說明變更內容"
git push origin main
```
- Zeabur 偵測到 push 後自動重新部署
- `etc/secrets/.env` 已被 `.gitignore` 規則 `.env` 排除，不會上傳

---

## 架構說明

### Next.js（前端）
- Zeabur buildpack 自動偵測 Next.js，無需 Dockerfile
- `public/` 靜態資源（含 `public/divination/`）隨 build 一起部署

### Flask（後端）- `src/backend/`
- Blueprint 架構，單一入口 `app.py`
- 目前啟用：`blueprints/divination/api.py`（易經占卜，使用 OpenAI）
- 選擇性啟用：`blueprints/astro/`、`blueprints/tarot/`（try/except 保護）
- **本地啟動**：
  ```powershell
  # 先殺舊程序
  Get-Process python* -ErrorAction SilentlyContinue | Stop-Process -Force
  # 啟動
  Start-Process "python3.13" -ArgumentList "src/backend/app.py" -WorkingDirectory "src/backend"
  ```
- 健康檢查：`GET http://localhost:5000/health`

### 環境變數
- 檔案位置：`etc/secrets/.env`（gitignored）
- 載入方式：`load_dotenv(Path(__file__).resolve().parent... / 'etc' / 'secrets' / '.env')`
- 必要的 key：`OPENAI_API_KEY`

### Windows SSL 問題（本地開發）
- OpenAI / httpx 在 Windows 上可能出現 `CERTIFICATE_VERIFY_FAILED`
- 解法：`api.py` 頂部已加入 `truststore.inject_into_ssl()`，使用 Windows 憑證庫

---

## 常見錯誤與解法

### BackOff: Back-off restarting failed container
**原因**：ESM-only 套件（如 react-markdown v10、remark-gfm v4）在 standalone 模式下無法載入

**解法**：移除套件或降版；安裝新套件前確認是否為 ESM-only（package.json 有 `"type": "module"`）

### Flask 啟動失敗：ModuleNotFoundError
**原因**：`app.py` 直接 import 不存在的 blueprint（astro、tarot）

**解法**：確認 `app.py` 中 astro/tarot 的 import 包在 `try/except ImportError: pass` 內；divination 是必要 import。

### Flask port 佔用（多個舊 python3.13 程序）
```powershell
netstat -ano | Select-String ":5000 " | ForEach-Object {
  $pid = ($_ -split "\s+")[-1]
  Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
}
```

### Windows CP950 UnicodeEncodeError
**原因**：`print()` 含 emoji，Windows console 編碼不支援

**解法**：移除 print 中的 emoji，改用純 ASCII 文字

---

## 套件注意事項

### 禁止安裝（ESM-only，會造成崩潰）
- `react-markdown` v10+
- `remark-gfm` v4+
- 其他 `"type": "module"` 的套件

---

## 靜態資源

### 行程圖片 `public/images/itinerary/`
```
bmw.png, heidelberg.png, jungfraujoch.png
lucerne.png, neuschwanstein.png, oberammergau.png
rothenburg.png, strasbourg.png, wieskirche.png
```

### 占卜室前端 `public/divination/`
- `index.html` — 占卜室主頁（"回首頁" 連結已改為 `/`）
- `style.css`, `divination.css`, `divination.js`, `script.js`
- 存取路徑：`/divination/index.html`

---

## 頁面路由結構

```
/                          首頁（德瑞行）
/japan                     日本行首頁
/germany-switzerland       德瑞行（同首頁，保留舊路由）
/itinerary/[tripId]        行程詳細頁（japan / germanySwitzerland）
/notes/prompt              提示詞功能
/notes/investment          投資論文
/notes/iching              易經學習（含「前往占卜室」連結）
/divination/index.html     占卜室（靜態 HTML，Next.js public/ 服務）
```

API 路由（Flask localhost:5000）：
```
GET  /health
GET  /api/divination/health
POST /api/divination/cast
GET  /api/divination/hexagram/<number>
```

---

*最後更新：2026-05-29*
