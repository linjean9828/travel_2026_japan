export default function IChingPage() {
  const trigrams = [
    { name: '乾', symbol: '☰', element: '天', nature: '剛健', description: '代表天、父、君，象徵剛健、創造、陽剛之氣。' },
    { name: '坤', symbol: '☷', element: '地', nature: '柔順', description: '代表地、母、臣，象徵柔順、承載、陰柔之氣。' },
    { name: '震', symbol: '☳', element: '雷', nature: '動', description: '代表雷、長男，象徵震動、啟發、行動力。' },
    { name: '巽', symbol: '☴', element: '風', nature: '入', description: '代表風、長女，象徵滲透、柔順、謙遜之德。' },
    { name: '坎', symbol: '☵', element: '水', nature: '陷', description: '代表水、中男，象徵險陷、智慧、流動之性。' },
    { name: '離', symbol: '☲', element: '火', nature: '麗', description: '代表火、中女，象徵光明、文明、依附之象。' },
    { name: '艮', symbol: '☶', element: '山', nature: '止', description: '代表山、少男，象徵靜止、篤實、守成之道。' },
    { name: '兌', symbol: '☱', element: '澤', nature: '悅', description: '代表澤、少女，象徵喜悅、溝通、和諧之氣。' },
  ];

  const concepts = [
    {
      title: '陰陽之道',
      icon: '☯',
      content: '易經的核心是陰（⚋）與陽（⚊）的對立統一。陽爻以「九」稱，陰爻以「六」稱。萬物皆由陰陽互動生成，剛柔相濟，動靜有別。',
    },
    {
      title: '三才之說',
      icon: '🌐',
      content: '六爻卦分上下兩部分，每部三爻各代表天、地、人三才。初爻、二爻為地，三爻、四爻為人，五爻、上爻為天，體現天人合一的宇宙觀。',
    },
    {
      title: '變爻之義',
      icon: '🔄',
      content: '老陽（九）變陰，老陰（六）變陽，稱為「變爻」。變爻所在爻位的爻辭，是解讀當下局勢最重要的線索，也是卦象動態變化的關鍵。',
    },
    {
      title: '卦序之理',
      icon: '📖',
      content: '六十四卦的排列並非隨機，而有深刻的哲學邏輯。《序卦傳》解釋各卦相生的道理——如「有天地然後有萬物，有萬物然後有男女」。',
    },
  ];

  const famousHexagrams = [
    { num: 1, name: '乾為天', fortune: '大吉', symbol: '☰☰', lesson: '自強不息，厚德載物。龍德而隱，待時而飛。' },
    { num: 11, name: '地天泰', fortune: '上上', symbol: '☷☰', lesson: '小往大來，陰陽和合。順勢而為，萬事通泰。' },
    { num: 15, name: '地山謙', fortune: '上上', symbol: '☷☶', lesson: '六十四卦唯一六爻皆吉。謙虛受益，滿招損。' },
    { num: 63, name: '水火既濟', fortune: '中上', symbol: '☵☲', lesson: '功德圓滿之後須防盛極而衰，居安思危。' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* 標題 */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">易經學習筆記</h1>
        <p className="text-gray-500 text-lg">
          易經，又稱《周易》，是中華文化的源頭智慧。透過陰陽、八卦、六十四卦，
          幫助我們理解宇宙規律與人生變化，做出更明智的選擇。
        </p>
      </div>

      {/* 核心概念 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2">
          <span>🔑</span> 核心概念
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {concepts.map((c) => (
            <div key={c.title} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{c.icon}</span>
                <h3 className="font-semibold text-gray-800">{c.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{c.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 八卦速覽 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2">
          <span>☯</span> 八卦速覽
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {trigrams.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm text-center hover:border-sky-300 hover:shadow-md transition-all"
            >
              <div className="text-4xl mb-1">{t.symbol}</div>
              <div className="text-lg font-bold text-gray-800">{t.name}</div>
              <div className="text-xs text-sky-600 font-medium mb-2">{t.element}・{t.nature}</div>
              <p className="text-xs text-gray-500 leading-relaxed text-left">{t.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 值得記住的卦 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2">
          <span>📌</span> 值得記住的卦象
        </h2>
        <div className="space-y-3">
          {famousHexagrams.map((h) => (
            <div key={h.num} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex items-start gap-4">
              <div className="text-center min-w-[64px]">
                <div className="text-2xl">{h.symbol}</div>
                <div className="text-xs text-gray-400 mt-1">第 {h.num} 卦</div>
                <div className={`text-xs font-medium mt-1 px-2 py-0.5 rounded-full ${
                  h.fortune === '上上' ? 'bg-yellow-100 text-yellow-700' :
                  h.fortune === '大吉' ? 'bg-green-100 text-green-700' :
                  'bg-sky-100 text-sky-700'
                }`}>{h.fortune}</div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{h.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{h.lesson}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 占卜入口 */}
      <section className="bg-gradient-to-br from-indigo-50 to-sky-50 rounded-2xl p-6 border border-indigo-100 text-center">
        <div className="text-4xl mb-3">🔮</div>
        <h2 className="text-lg font-bold text-gray-800 mb-2">實際體驗易經占卜</h2>
        <p className="text-sm text-gray-600 mb-4">
          由易經占卜陳老師（AI 分身）為您解卦，結合卦象與 AI 解讀，給出具體建議。
        </p>
        <a
          href="/divination/index.html"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2.5 rounded-xl transition-colors text-sm"
        >
          前往占卜室 →
        </a>
      </section>
    </div>
  );
}
