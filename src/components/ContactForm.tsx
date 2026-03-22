"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="bg-slate-50 border-t border-slate-200 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">專人為您服務</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">有任何想了解的細節？對行程有特殊需求？留下您的聯絡方式，我們的旅遊專員將盡快為您解答。</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
          {status === "success" ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 transform scale-110">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-3">送出成功！</h3>
              <p className="text-slate-600 text-lg">感謝您的來信，我們已收到您的需求，專員會盡快與您聯繫。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">姓名 *</label>
                  <input type="text" id="name" required className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="例：王大明" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">聯絡電話 *</label>
                  <input type="tel" id="phone" required className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="例：0912-345-678" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">電子郵件 *</label>
                <input type="email" id="email" required className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="例：example@email.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">需求備註 / 行程提問</label>
                <textarea id="message" rows={4} className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="請問可否協助代訂機票？有素食需求..."></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="w-full bg-primary hover:bg-sky-700 text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed text-lg hover:-translate-y-0.5 flex justify-center items-center"
                >
                  {status === "submitting" ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      處理中...
                    </>
                  ) : "確認送出諮詢"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
