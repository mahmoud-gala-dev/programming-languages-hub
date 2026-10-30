// src/components/ai/GeminiTutorModal.jsx
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Sparkles, Bot, User, Key, RotateCcw, AlertCircle, Copy, Check } from 'lucide-react';
import { askGeminiTutor, getActiveApiKey } from '../../api/gemini.js';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function GeminiTutorModal({ isOpen, onClose, currentLessonTitle = "", onOpenKeyPool }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: `مرحباً بك! أنا معلمك الذكي المتخصص في مسار Node.js وهندسة الـ Backend 🟢. يسعدني مساعدتك في شرح أي كود، تبسيط أي مفهوم، أو تقديم أمثلة متقدمة من واقع سوق العمل. كيف أساعدك اليوم؟`
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState(null);
  const messagesEndRef = useRef(null);
  const showToast = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // إرسال رسالة
  const handleSend = async (textToSend) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const userMsg = { role: 'user', text: query };
    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    const systemInstruction = `أنت معلم ومهندس برمجيات محترف وخبير في Node.js، Express، JavaScript، TypeScript، هندسة الـ Backend، قواعد البيانات، والتطبيقات القابلة للتوسع. 
تشرح بأسلوب عربي فصيح وواضح وممتع، وتعتمد التشبيهات الحياتية، وتقدم أكواداً برمجية مشروحة ونظيفة Clean Code مع مراعاة أفضل الممارسات الأمنية (Security Best Practices).
الدرس الحالي الذي يدرسه الطالب هو: "${currentLessonTitle || 'Node.js Fundamentals'}".`;

    try {
      const reply = await askGeminiTutor(query, systemInstruction);
      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
    } catch (err) {
      setMessages(prev => [
        ...prev, 
        { 
          role: 'assistant', 
          text: `عذراً، حدث خطأ أثناء الاتصال: ${err.message}. يمكنك فحص مفاتيح الـ API أو التأكد من اتصال الإنترنت.` 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    showToast("تم نسخ الرد بنجاح! 📋", "success", 2000);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const quickPrompts = [
    `اشرح لي درس "${currentLessonTitle}" بتشبيه واقعي بسيط`,
    `أعطني مثالاً عملياً معقداً من الشركات لدرس "${currentLessonTitle}"`,
    `ما هي أشهر الأخطاء الأمنية في درس "${currentLessonTitle}"؟`,
    `اختبرني بسؤال اختياري ذكي لتثبيت فهم "${currentLessonTitle}"`
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn" dir="rtl">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-2xl w-full h-[85vh] flex flex-col shadow-2xl relative overflow-hidden text-slate-100">
        
        {/* الترويسة العلوية */}
        <div className="px-5 py-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/20">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-white flex items-center gap-2">
                المعلم الذكي المساعد (Gemini AI Tutor)
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-normal">
                  Google Gemini 1.5 Flash
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                مساعدتك المباشرة لدرس: {currentLessonTitle || "Node.js Roadmap"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenKeyPool}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="إدارة مفاتيح Gemini API"
            >
              <Key className="w-4 h-4 text-amber-400" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* جسم الرسائل والمحادثة */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 font-sans text-xs sm:text-sm">
          {messages.map((msg, idx) => {
            const isUser = msg.role === 'user';
            return (
              <div key={idx} className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                  isUser ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-emerald-400 border border-emerald-500/30'
                }`}>
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div className={`max-w-[82%] rounded-2xl p-4 leading-relaxed whitespace-pre-wrap ${
                  isUser 
                    ? 'bg-emerald-600 text-white rounded-tr-none' 
                    : 'bg-slate-950/80 border border-slate-800 text-slate-200 rounded-tl-none shadow-md'
                }`}>
                  <div>{msg.text}</div>
                  {!isUser && (
                    <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-end">
                      <button
                        onClick={() => handleCopy(msg.text, idx)}
                        className="text-[11px] text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        {copiedIdx === idx ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedIdx === idx ? "تم النسخ" : "نسخ الرد"}</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-xl bg-slate-800 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                <Sparkles className="w-4 h-4 animate-spin" />
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 rounded-tl-none text-slate-400 text-xs flex items-center gap-2">
                <span>جاري صياغة الإجابة بدقة بواسطة Gemini...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* الاقتراحات السريعة */}
        <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800/60 overflow-x-auto flex gap-2 no-scrollbar">
          {quickPrompts.map((qp, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(qp)}
              disabled={isLoading}
              className="text-[11px] whitespace-nowrap bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-emerald-500/20 px-3 py-1.5 rounded-full transition-colors cursor-pointer disabled:opacity-50"
            >
              {qp}
            </button>
          ))}
        </div>

        {/* حقل الإدخال السفلي */}
        <div className="p-3 sm:p-4 bg-slate-950 border-t border-slate-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="اكتب سؤالك أو استفسارك هنا..."
              className="flex-1 bg-slate-900 border border-slate-700/80 rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-sans"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-10 h-10 rounded-2xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 flex items-center justify-center transition-all shadow-md shadow-emerald-500/20 cursor-pointer shrink-0"
            >
              <Send className="w-4 h-4 fill-current rotate-180" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
