import { BookOpen, Brain, AlertTriangle, Lightbulb, Megaphone, Shield, Wrench, GitBranch, FileCode, Database } from "lucide-react";

const sections = [
  {
    id: "basics",
    icon: Brain,
    color: "sky",
    title: "一、生成式 AI 基礎概念",
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-6">
          生成式 AI（Generative AI）是一種能根據使用者指令<strong>主動生成新內容</strong>的人工智慧技術。核心技術是<strong>大型語言模型（LLM）</strong>，搭配 <strong>Transformer 神經網路架構</strong>，能有效理解上下文並生成語意連貫的文字。
        </p>
        <h4 className="font-bold text-gray-800 mb-3">四大特性</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: "創造性", desc: "生成從未存在的內容" },
            { label: "互動性", desc: "根據提示詞即時回應" },
            { label: "適應性", desc: "靈活生成不同風格" },
            { label: "限制性", desc: "可能出現偏差或錯誤" },
          ].map((item) => (
            <div key={item.label} className="bg-sky-50 border border-sky-100 rounded-xl p-3 text-center">
              <p className="font-bold text-sky-700 text-sm">{item.label}</p>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
        <h4 className="font-bold text-gray-800 mb-3">傳統 AI vs 生成式 AI</h4>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-100">
              <tr>
                {["比較面向", "傳統 AI", "生成式 AI"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-semibold text-gray-700">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ["核心目標", "識別、分類、預測與分析", "創造全新內容（文字、圖像、音頻）"],
                ["輸出方式", "識別結果、分類標籤", "全新原創內容"],
                ["工作方式", "預定義規則或固定演算法", "從訓練資料學習模式"],
                ["訓練方式", "監督式學習（有標籤資料）", "非監督式或人類指引下微調"],
                ["應用領域", "詐騙偵測、圖像分類、自動駕駛", "藝術創作、文章生成、虛擬助理"],
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-gray-700" : "text-gray-600"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "hallucination",
    icon: AlertTriangle,
    color: "amber",
    title: "二、AI 幻覺（Hallucination）",
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-4">
          AI 幻覺是指 AI 生成<strong>不正確、虛構或無依據的內容</strong>，但表達方式看似合理。簡單來說：<strong>說得像真的，但其實是假的。</strong>
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-red-50 border border-red-100 rounded-xl p-4">
            <h5 className="font-bold text-red-700 mb-2">發生原因</h5>
            <ul className="text-sm text-red-800 space-y-1">
              <li>• 缺乏真實資料，AI 自行「補齊」答案</li>
              <li>• 提問模糊或超出模型知識範圍</li>
              <li>• AI 傾向生成「流暢」而非「正確」文字</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-100 rounded-xl p-4">
            <h5 className="font-bold text-green-700 mb-2">因應方式</h5>
            <ul className="text-sm text-green-800 space-y-1">
              <li>• <strong>交叉驗證</strong>：與官方資料比對</li>
              <li>• <strong>追問澄清</strong>：要求 AI 提供來源</li>
              <li>• <strong>使用輔助工具</strong>：搭配搜尋引擎</li>
              <li>• <strong>保持懷疑</strong>：對過於自信的回答警覺</li>
            </ul>
          </div>
        </div>
        <h4 className="font-bold text-gray-800 mb-3">🧪 實際案例</h4>
        <div className="space-y-3">
          <div className="bg-slate-900 rounded-xl p-4 text-sm font-mono">
            <p className="text-red-400 mb-1">❌ 幻覺示範</p>
            <p className="text-slate-300">問：「誰是2025年諾貝爾文學獎得主？」</p>
            <p className="text-slate-400">AI：「得主是某某作家，作品以描寫邊境人文著稱。」</p>
            <p className="text-amber-400 mt-2 text-xs">→ 資訊尚未公布，AI 自行捏造</p>
          </div>
          <div className="bg-slate-900 rounded-xl p-4 text-sm font-mono">
            <p className="text-green-400 mb-1">✅ 正確示範</p>
            <p className="text-slate-300">AI：「目前官方尚未公布，建議查看 nobelprize.org」</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "prompt",
    icon: Lightbulb,
    color: "violet",
    title: "三、Prompt Engineering 提示工程",
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-6">
          Prompt Engineering 是<strong>設計與調整提示詞的藝術</strong>，目的是讓生成式 AI 更精準理解需求並輸出理想結果。
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { label: "Role 角色", desc: "希望 AI 扮演的身份，決定語氣與知識角度", color: "bg-violet-50 border-violet-100 text-violet-700" },
            { label: "Task 任務", desc: "希望 AI 具體生成什麼內容，是提示詞核心", color: "bg-sky-50 border-sky-100 text-sky-700" },
            { label: "Format 格式", desc: "指定輸出格式：條列、表格、JSON、Markdown", color: "bg-emerald-50 border-emerald-100 text-emerald-700" },
          ].map((item) => (
            <div key={item.label} className={`border rounded-xl p-4 ${item.color}`}>
              <p className="font-bold mb-1">{item.label}</p>
              <p className="text-xs opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>
        <h4 className="font-bold text-gray-800 mb-3">ICREO 進階框架</h4>
        <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-slate-100">
              <tr>
                {["要素", "英文", "說明", "範例"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-semibold text-gray-700">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ["目的", "Intent", "明確告知任務核心與受眾", "「給保險從業人員看的說明」"],
                ["角色", "Role", "賦予 AI 角色身份", "「你是一位資深保險精算師」"],
                ["限制", "Constraint", "限制輸出範圍", "「不超過500字」「條列6點」"],
                ["範例", "Example", "以特定範例引導風格", "提供範本讓 AI 模仿"],
                ["格式", "Output Format", "明確指定最終呈現格式", "「輸出為 Markdown 表格」"],
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 ${j === 0 ? "font-bold text-violet-600" : j === 1 ? "font-mono text-xs text-slate-500" : "text-gray-600"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h4 className="font-bold text-gray-800 mb-3">🧪 Prompt 品質對比</h4>
        <div className="space-y-3">
          <div className="bg-slate-900 rounded-xl p-4 text-sm font-mono">
            <p className="text-red-400 mb-2">❌ 含糊模糊</p>
            <p className="text-slate-300">「幫我介紹健康險」</p>
            <p className="text-green-400 mt-4 mb-2">✅ 清楚明確</p>
            <p className="text-slate-300">Role：你是一位擁有10年經驗的壽險業務顧問</p>
            <p className="text-slate-300">Task：為45歲、有家庭負擔的上班族撰寫醫療實支實付保險說明</p>
            <p className="text-slate-300">Constraint：500字以內、條列三大優點、含一個實際理賠案例</p>
            <p className="text-slate-300">Format：繁體中文，段落之間空一行</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "marketing",
    icon: Megaphone,
    color: "orange",
    title: "四、行銷文案應用",
    content: (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          {[
            { label: "吸睛開頭", ex: "「你是否也遇過…？」" },
            { label: "價值主張", ex: "「節省 X% 的時間」" },
            { label: "情感共鳴", ex: "「不再為 ___ 煩惱」" },
            { label: "數據支持", ex: "「10,000+ 人已選擇」" },
            { label: "行動呼籲 CTA", ex: "「立即體驗」" },
            { label: "稀缺急迫感", ex: "「限量 20 名」" },
          ].map((item) => (
            <div key={item.label} className="bg-orange-50 border border-orange-100 rounded-xl p-3">
              <p className="font-bold text-orange-700 text-sm">{item.label}</p>
              <p className="text-xs text-gray-500 mt-1">{item.ex}</p>
            </div>
          ))}
        </div>
        <h4 className="font-bold text-gray-800 mb-3">🧪 IG 商品貼文範例</h4>
        <div className="bg-slate-900 rounded-xl p-4 text-sm font-mono mb-6">
          <p className="text-sky-400 mb-2"># Prompt</p>
          <p className="text-slate-300">「為全新專櫃等級護膚精華液撰寫上市描述。突出保濕、緊緻、透亮三大功效。針對重視品質的女性，100字以內，IG版本含emoji與hashtag。」</p>
          <p className="text-green-400 mt-4 mb-2"># AI 生成</p>
          <p className="text-slate-300">✨全新專櫃等級護膚精華液 ✨</p>
          <p className="text-slate-300">深層補水 💧・緊緻彈潤 ✨・透亮光澤 🌸</p>
          <p className="text-slate-300">#專櫃級保養 #新品上市 #質感生活</p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-100">
              <tr>
                {["比較面向", "行銷文案", "部落格文章"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-semibold text-gray-700">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ["核心目標", "促成立即行動（購買、報名）", "建立信任、提供價值"],
                ["內容形式", "短、精簡、強調優勢與CTA", "長、深入、提供知識"],
                ["語氣", "直接、有急迫感", "專業分析或故事化"],
                ["使用場景", "廣告、銷售頁、社群貼文", "品牌部落格、線上雜誌"],
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-gray-700" : "text-gray-600"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "copyright",
    icon: Shield,
    color: "rose",
    title: "五、AI 著作權重點",
    content: (
      <>
        <div className="space-y-3 mb-4">
          {[
            { label: "人類有創意投入（AI 為輔助工具）", result: "著作權歸人類使用者", color: "bg-green-50 border-green-200 text-green-800" },
            { label: "AI 獨立完成（無人類創意）", result: "可能無著作權保護", color: "bg-amber-50 border-amber-200 text-amber-800" },
            { label: "AI 生成內容侵害他人著作權", result: "責任歸屬於使用者（非 AI）", color: "bg-red-50 border-red-200 text-red-800" },
          ].map((item) => (
            <div key={item.label} className={`border rounded-xl p-4 flex items-center justify-between gap-4 ${item.color}`}>
              <span className="text-sm font-medium">{item.label}</span>
              <span className="text-sm font-bold shrink-0">→ {item.result}</span>
            </div>
          ))}
        </div>
        <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-sky-800 text-sm">
          💡 使用 AI 生成圖片、文字用於商業用途前，務必確認授權條款
        </div>
      </>
    ),
  },
  {
    id: "tools",
    icon: Wrench,
    color: "emerald",
    title: "六、好用軟體推薦",
    content: (
      <>
        {[
          {
            category: "🎨 AI 3D 模型 / 動畫",
            tools: [
              { name: "Meshy", desc: "文字或圖片轉 3D 模型，支援貼圖生成", url: "https://www.meshy.ai" },
              { name: "Tripo", desc: "AI 3D 模型生成，速度快，適合快速原型", url: "https://www.tripo3d.ai" },
              { name: "Krikey.ai", desc: "AI 角色動畫，可自訂動作", url: "https://www.krikey.ai" },
              { name: "MIXAMO", desc: "Adobe 免費動畫庫，上傳模型即可套動畫", url: "https://www.mixamo.com" },
            ],
          },
          {
            category: "🔍 AI 研究輔助",
            tools: [
              { name: "Perplexity AI", desc: "附引用來源的 AI 搜尋引擎", url: "https://www.perplexity.ai" },
              { name: "Google NotebookLM", desc: "上傳文件後做 AI 問答", url: "https://notebooklm.google.com" },
              { name: "Elicit", desc: "專為學術論文搜尋設計，可比較多篇研究", url: "https://elicit.com" },
            ],
          },
          {
            category: "📊 流程圖工具",
            tools: [
              { name: "draw.io", desc: "完全免費，功能最完整，可存 Google Drive", url: "https://draw.io" },
              { name: "Excalidraw", desc: "手繪風格，超輕量，適合白板腦力激盪", url: "https://excalidraw.com" },
              { name: "Mermaid Live", desc: "用文字語法生成流程圖，工程師最愛", url: "https://mermaid.live" },
              { name: "Whimsical", desc: "流程圖 + 心智圖 + 線框圖三合一", url: "https://whimsical.com" },
            ],
          },
        ].map((group) => (
          <div key={group.category} className="mb-6">
            <h4 className="font-bold text-gray-800 mb-3">{group.category}</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {group.tools.map((tool) => (
                <a key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-3 bg-white border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50 rounded-xl p-3 transition-colors group">
                  <div className="flex-1">
                    <p className="font-bold text-sm text-gray-900 group-hover:text-emerald-700">{tool.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{tool.desc}</p>
                  </div>
                  <span className="text-xs text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5">開啟 →</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </>
    ),
  },
  {
    id: "markdown",
    icon: FileCode,
    color: "indigo",
    title: "七、Markdown 格式說明",
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-4">
          Markdown 是一種<strong>輕量級標記語言</strong>，用純文字符號表達格式，設計理念是「易讀、易寫」。
        </p>
        <h4 className="font-bold text-gray-800 mb-3">常用語法速查</h4>
        <div className="bg-slate-900 rounded-xl p-4 text-sm font-mono mb-6 overflow-x-auto">
          <pre className="text-slate-300 whitespace-pre">{`# 一級標題  ## 二級標題  ### 三級標題

**粗體**   *斜體*   ~~刪除線~~   \`程式碼\`

- 無序列表       1. 有序列表

> 引用區塊

| 欄位A | 欄位B |     [連結](https://example.com)
|-------|-------|
| 資料1 | 資料2 |`}</pre>
        </div>
        <h4 className="font-bold text-gray-800 mb-3">SKILL.md 實際結構範例</h4>
        <div className="bg-slate-900 rounded-xl p-4 text-sm font-mono overflow-x-auto">
          <pre className="text-slate-300 whitespace-pre">{`---
name: insurance-regulation-compare
description: "比對保險內外規合規矩陣"
---

# 保險業內外規比對技能

## 三層儲存架構
1. 外規層（ext_regulations）：法規原文
2. 控制項層（control_items）：抽象化合規要求
3. 內規層（int_policies）：公司內部作業規範

## 輸出格式：DD.TT.NNN 三層編碼`}</pre>
        </div>
      </>
    ),
  },
  {
    id: "yaml",
    icon: Database,
    color: "teal",
    title: "八、YAML 格式說明",
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-4">
          YAML 是一種<strong>人類可讀的資料序列化格式</strong>，主要用於設定檔和資料交換，比 JSON 更易閱讀，比 XML 更精簡。
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-slate-100">
              <tr>
                {["特性", "YAML", "JSON", "XML"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-semibold text-gray-700">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ["人類可讀性", "⭐⭐⭐⭐⭐", "⭐⭐⭐", "⭐⭐"],
                ["支援注解", "✅ #", "❌", "✅"],
                ["主要用途", "設定檔、CI/CD", "API 資料交換", "企業系統整合"],
                ["常見場景", "GitHub Actions, Docker", "REST API, OpenAI", "保險業 XML 報文"],
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-gray-700" : "text-gray-600"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h4 className="font-bold text-gray-800 mb-3">🧪 AI Pipeline 設定檔範例</h4>
        <div className="bg-slate-900 rounded-xl p-4 text-sm font-mono overflow-x-auto">
          <pre className="text-slate-300 whitespace-pre">{`version: "1.0"
project: 內外規比對系統

llm:
  provider: anthropic
  model: claude-sonnet-4-20250514
  temperature: 0.3
  max_tokens: 2000

pipeline:
  steps:
    - id: "1A"
      name: 外規分群
      output: clustered_articles
    - id: "1B"
      name: 義務萃取
      output_format: json`}</pre>
        </div>
      </>
    ),
  },
];

const colorMap: Record<string, string> = {
  sky: "bg-sky-100 text-sky-600 border-sky-200",
  amber: "bg-amber-100 text-amber-600 border-amber-200",
  violet: "bg-violet-100 text-violet-600 border-violet-200",
  orange: "bg-orange-100 text-orange-600 border-orange-200",
  rose: "bg-rose-100 text-rose-600 border-rose-200",
  emerald: "bg-emerald-100 text-emerald-600 border-emerald-200",
  indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
  teal: "bg-teal-100 text-teal-600 border-teal-200",
};

export default function PromptPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4" /> 2026 讀書筆記
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">SSE AI Prompt Engineer</h1>
          <p className="text-sky-200 text-lg">完整筆記 × 實際案例 × 好用軟體 × MD / YAML 格式說明</p>
        </div>
      </div>

      {/* 目錄 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-8">
        <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-5">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">目錄</p>
          <div className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`}
                className="text-xs font-semibold bg-slate-100 hover:bg-sky-100 hover:text-sky-700 text-slate-600 px-3 py-1.5 rounded-full transition-colors">
                {s.title.split("、")[1] ?? s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 內容區塊 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-6">
        {sections.map((section) => {
          const Icon = section.icon;
          const iconClass = colorMap[section.color] ?? "bg-slate-100 text-slate-600";
          return (
            <div key={section.id} id={section.id} className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-100 bg-slate-50/50">
                <div className={`p-2 rounded-xl border ${iconClass}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">{section.title}</h2>
              </div>
              <div className="p-6">{section.content}</div>
            </div>
          );
        })}

        <p className="text-center text-xs text-slate-400 pt-4">
          製作：依據 SSE AI Prompt Engineer 課程簡報整理 × Claude AI 補充擴展 ・ 2026-03
        </p>
      </div>
    </div>
  );
}
