// src/components/ai/GeminiTutorModal.jsx
// نافذة المعلم الذكي التفاعلي مع دعم Gemini API وتخصيص المفتاح والبديل الذكي المدمج
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Sparkles, Send, Bot, User, Loader2, Key } from 'lucide-react';
import { askGeminiTutor, getActiveApiKey, saveUserGeminiApiKey } from '../../api/gemini.js';
import { useSwal, useToast } from '../../context/UiFeedbackContext.jsx';

export default function GeminiTutorModal({ currentSubtopic, isOpen, onClose, onOpenKeyPool }) {
  const showSwal = useSwal();
  const showToast = useToast();

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: `أهلاً بك يا بطل! أنا "المعلم الذكي لـ React.js" 🤖✨.
أنا هنا لمساعدتك في فهم كل تفاصيل درس: "${currentSubtopic?.title || 'أساسيات الويب'}".
يمكنك سؤالي عن أي مفهوم غامض، أو طلب تشبيه من الحياة اليومية، أو فحص كود كتبته بنفسك!`
    }
  ]);
  const [inputPrompt, setInputPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const currentContext = currentSubtopic
    ? `${subtopicTitle(currentSubtopic)}: ${currentSubtopic.definition || ''}. التشبيه: ${currentSubtopic.analogy || ''}`
    : "أساسيات تطوير الويب";

  function subtopicTitle(sub) {
    return `${sub.title} (${sub.englishTitle || sub.technicalTerm?.english || ''})`;
  }

  const handleSendMessage = async (textToSend) => {
    const text = textToSend || inputPrompt;
    if (!text.trim() || loading) return;

    // إضافة رسالة المستخدم
    const newMessages = [...messages, { sender: "user", text }];
    setMessages(newMessages);
    setInputPrompt("");
    setLoading(true);

    // استدعاء Gemini API
    const botReply = await askGeminiTutor(text, currentContext);
    setMessages([...newMessages, { sender: "bot", text: botReply }]);
    setLoading(false);
  };

  const handleConfigureApiKey = async () => {
    const activeKey = getActiveApiKey();
    const result = await showSwal({
      title: "تخصيص مفتاح Gemini API",
      text: "أدخل مفتاح Google Gemini API الخاص بك لتفعيل الاتصال السحابي الحقيقي، أو احذف القيمة للعودة للوضع المدمج:",
      icon: "question",
      input: "text",
      inputValue: activeKey.startsWith("AQ.") ? "" : activeKey,
      inputPlaceholder: "الصق المفتاح هنا (يبدأ عادة بـ AIzaSy...)",
      showCancelButton: true,
      confirmButtonText: "حفظ المفتاح",
      cancelButtonText: "إلغاء"
    });

    if (result.isConfirmed) {
      saveUserGeminiApiKey(result.value);
      showToast(result.value ? "تم حفظ مفتاح Gemini بنجاح! 🔑" : "تمت استعادة الوضع المدمج", "success");
    }
  };

  const quickChips = [
    "💡 اشرح لي هذا المفهوم بمثال واقعي جديد ومبسط جداً",
    "❓ اختبرني بسؤال تطبيقي ذكي في هذا الدرس مع تصحيح إجابتي",
    "⚠️ ما هي أكبر الأخطاء التي يقع فيها المبتدئون في هذا الجزء؟",
    "🚀 كيف أستخدم هذا المفهوم عند بناء متجر إلكتروني حقيقي؟"
  ];

  return typeof document !== 'undefined' ? createPortal(
    <div className="fixed inset-0 z-50 w-screen h-dvh min-h-dvh bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-hidden" dir="rtl">
      <div className="bg-slate-900 border border-purple-500/40 rounded-2xl w-full max-w-2xl h-[85dvh] flex flex-col shadow-2xl overflow-hidden animate-slideUp">

        {/* رأس نافذة المعلم الذكي */}
        <div className="px-5 py-3.5 bg-gradient-to-r from-purple-950 via-slate-900 to-slate-950 border-b border-purple-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="size-9 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center justify-center shadow-lg">
              <Bot className="size-5 text-amber-300" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-white flex items-center gap-1.5 font-sans text-balance">
                المعلم الذكي (Gemini AI Tutor)
                <span className="text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/40 px-2 py-0.5 rounded-full font-normal">
                  Google Gemini Flash
                </span>
              </h3>
              <p className="text-[11px] text-slate-400 font-sans text-pretty">
                الدرس الحالي: <span className="text-cyan-400 font-semibold">{currentSubtopic?.title || "أساسيات الويب"}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenKeyPool || handleConfigureApiKey}
              aria-label="إدارة مجمع مفاتيح Gemini API"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 transition-colors cursor-pointer"
              title="إدارة مجمع مفاتيح Gemini API"
            >
              <Key className="size-4" />
            </button>

            <button
              onClick={onClose}
              aria-label="إغلاق نافذة المعلم الذكي"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* صندوق المحادثة القابل للتمرير */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs sm:text-sm font-sans">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}
            >
              {msg.sender === 'user' && (
                <div className="size-7 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 mt-1">
                  <User className="size-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed whitespace-pre-wrap text-pretty ${msg.sender === 'user'
                  ? 'bg-blue-600/90 text-white rounded-tr-none'
                  : 'bg-slate-800/90 text-slate-100 rounded-tl-none border border-slate-700/60 shadow-md'
                  }`}
              >
                {msg.text}
              </div>

              {msg.sender === 'bot' && (
                <div className="size-7 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-white shrink-0 mt-1 shadow-md">
                  <Sparkles className="size-3.5 text-amber-200" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-2.5 justify-end">
              <div className="bg-slate-800/90 border border-slate-700/60 rounded-2xl rounded-tl-none p-3 text-xs text-purple-300 flex items-center gap-2">
                <Loader2 className="size-4 animate-spin text-purple-400" />
                <span className="text-pretty">المعلم الذكي يجهز لك شرحاً مبسطاً الآن...</span>
              </div>
              <div className="size-7 rounded-full bg-purple-600 flex items-center justify-center text-white shrink-0">
                <Bot className="size-4" />
              </div>
            </div>
          )}
        </div>

        {/* رقاقات الأسئلة السريعة المقترحة (Quick Chips) */}
        <div className="p-2.5 bg-slate-950/80 border-t border-slate-800/80 overflow-x-auto flex gap-1.5 no-scrollbar">
          {quickChips.map((chip, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(chip)}
              disabled={loading}
              className="whitespace-nowrap text-[11px] bg-slate-800/80 hover:bg-purple-900/40 hover:text-purple-200 hover:border-purple-500/40 text-slate-300 px-3 py-1.5 rounded-full border border-slate-700/60 transition-all cursor-pointer shrink-0 font-sans"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* حقل إدخال الرسالة */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="اكتب سؤالك هنا للمعلم الذكي... (مثال: اشرح لي بمثال بسيط)"
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 font-sans"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputPrompt.trim() || loading}
            aria-label="إرسال السؤال إلى المعلم الذكي"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white p-2.5 rounded-xl transition-all disabled:opacity-50 cursor-pointer shadow-md shadow-purple-600/30"
          >
            <Send className="size-4" />
          </button>
        </div>

      </div>
    </div>,
    document.body
  ) : null;
}
