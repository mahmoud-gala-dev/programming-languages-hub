// src/components/lesson/components/TermsDictionarySection.jsx
// معجم المصطلحات التقنية المتقدم مع النطق الصوتي التفاعلي ورسومات SVG المعمارية
import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Languages, Check, Copy } from 'lucide-react';
import { useToast } from '../../../context/UiFeedbackContext.jsx';

export default function TermsDictionarySection({ subtopic, readingFontSize = 15 }) {
  const showToast = useToast();
  const [playingTerm, setPlayingTerm] = useState(null);
  const [copiedTerm, setCopiedTerm] = useState(null);

  // جمع كافة المصطلحات المتاحة في الدرس
  const termsList = [];
  if (subtopic?.technicalTerm) {
    termsList.push({
      term: subtopic.technicalTerm.english,
      pronunciation: subtopic.technicalTerm.pronunciation,
      meaning: subtopic.technicalTerm.arabicMeaning,
      isCore: true
    });
  } else if (subtopic?.englishTerm) {
    termsList.push({
      term: subtopic.englishTerm,
      pronunciation: "",
      meaning: subtopic.title || "",
      isCore: true
    });
  }
  if (subtopic?.terms && Array.isArray(subtopic.terms)) {
    subtopic.terms.forEach(t => {
      // تفادي التكرار
      if (!termsList.some(item => item.term?.toLowerCase() === t.term?.toLowerCase())) {
        termsList.push(t);
      }
    });
  }

  // إذا لم يتوفر أي مصطلح في الدرس
  if (termsList.length === 0) return null;

  // تشغيل النطق الصوتي للمصطلح عبر Web Speech API
  const handlePronounce = (termText) => {
    if (typeof window === 'undefined') return;

    if (!('speechSynthesis' in window)) {
      showToast("متصفحك لا يدعم خاصية تحويل النص إلى صوت (Speech Synthesis)", "error");
      return;
    }

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(termText);
      utterance.lang = 'en-US';
      utterance.rate = 0.85; // سرعة هادئة وواضحة للمتعلم
      utterance.pitch = 1.0;

      utterance.onstart = () => setPlayingTerm(termText);
      utterance.onend = () => setPlayingTerm(null);
      utterance.onerror = () => setPlayingTerm(null);

      window.speechSynthesis.speak(utterance);
    } catch {
      setPlayingTerm(null);
    }
  };

  const handleCopyTerm = (termText) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(termText);
      setCopiedTerm(termText);
      showToast(`تم نسخ المصطلح (${termText}) إلى الحافظة! 📋`, "success");
      setTimeout(() => setCopiedTerm(null), 2000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-850 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-6">
      
      {/* لمعان نيون أزرق وسماوي في الخلفية */}
      <div className="absolute top-0 right-0 size-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 size-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* رأس السكشن مع رسم SVG توضيحي متقدم للمصطلحات والترددات الصوتية */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-cyan-500/20 shrink-0">
            <Languages className="size-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                Tech Dictionary &amp; Audio
              </span>
              <span className="text-xs text-slate-400">نطق بريطاني/أمريكي معتمد</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white font-sans mt-0.5 text-balance">
              4. المصطلحات الإنجليزية والنطق الصوتي المباشر والمعنى
            </h3>
          </div>
        </div>

        {/* رسم SVG تفاعلي للموجات الصوتية (Sound Waves SVG) */}
        <div className="flex items-center gap-2 bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-2xl self-start md:self-auto shadow-inner">
          <svg className="w-24 h-6 text-cyan-400" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12C8 6 12 18 16 12C20 6 24 18 28 12C32 4 36 20 40 12C44 4 48 20 52 12C56 7 60 17 64 12C68 7 72 17 76 12C80 9 84 15 88 12C92 9 96 15 100 12" 
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[11px] font-mono text-cyan-300 font-bold tabular-nums">
            {termsList.length} مصطلحات
          </span>
        </div>
      </div>

      {/* شبكة كروت المصطلحات التفاعلية الفخمة */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {termsList.map((item, idx) => {
          const isPlaying = playingTerm === item.term;
          const isCopied = copiedTerm === item.term;

          return (
            <div 
              key={idx}
              className={`group bg-slate-950/90 border rounded-2xl p-4 sm:p-5 transition-all duration-200 flex flex-col justify-between shadow-lg hover:shadow-cyan-500/10 ${
                item.isCore 
                  ? 'border-cyan-500/40 hover:border-cyan-400 ring-1 ring-cyan-500/20' 
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                {/* رأس كرت المصطلح */}
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span 
                        className="text-base sm:text-lg font-black font-mono tracking-tight text-white group-hover:text-cyan-300 transition-colors"
                        dir="ltr"
                      >
                        {item.term}
                      </span>
                      {item.isCore && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-sans">
                          جوهر الدرس
                        </span>
                      )}
                    </div>

                    {/* النطق الصوتي بالعربية */}
                    <div className="flex items-center gap-2 mt-1.5 text-xs text-amber-300">
                      <span className="bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 rounded-lg font-medium inline-flex items-center gap-1 font-sans">
                        <span>🎙️ النطق:</span>
                        <strong className="text-amber-200">{item.pronunciation || "انقر للاستماع"}</strong>
                      </span>
                    </div>
                  </div>

                  {/* أزرار الإجراءات: الاستماع الصوتي + النسخ */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handlePronounce(item.term)}
                      aria-label={`استمع لنطق مصطلح ${item.term}`}
                      className={`size-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                        isPlaying 
                          ? 'bg-cyan-500 text-slate-950 scale-105 shadow-md shadow-cyan-500/40 animate-pulse' 
                          : 'bg-slate-850 hover:bg-slate-750 text-cyan-300 hover:text-white border border-slate-750'
                      }`}
                      title="استمع إلى النطق الصوتي الإنجليزي السليم"
                    >
                      {isPlaying ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
                    </button>

                    <button
                      onClick={() => handleCopyTerm(item.term)}
                      aria-label={`نسخ مصطلح ${item.term}`}
                      className="size-9 rounded-xl bg-slate-850 hover:bg-slate-750 text-slate-400 hover:text-white border border-slate-750 flex items-center justify-center transition-colors cursor-pointer"
                      title="نسخ المصطلح الإنجليزي"
                    >
                      {isCopied ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
                    </button>
                  </div>
                </div>

                {/* المعنى العربي الدقيق وتطبيقه العملي */}
                <p 
                  className="text-slate-300 font-sans leading-relaxed text-pretty mt-2 pt-2 border-t border-slate-900"
                  style={{ fontSize: `${Math.max(readingFontSize - 1, 13)}px` }}
                >
                  <strong className="text-blue-400 ml-1">📖 المعنى:</strong>
                  {item.meaning}
                </p>
              </div>

              {/* شريط توجيهي مصغر في قاع الكرت */}
              <div className="mt-3 pt-2 flex items-center justify-between text-[11px] text-slate-500 font-sans border-t border-slate-900/60">
                <span className="flex items-center gap-1">
                  <span>💡</span>
                  <span>متداول في المقابلات وسوق العمل</span>
                </span>
                <span className="font-mono text-slate-600 text-[10px]">#Term_{idx + 1}</span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
