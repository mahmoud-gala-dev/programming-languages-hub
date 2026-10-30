// src/components/ai/GeminiTutorModal.jsx
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Sparkles, Bot, User, Key, RotateCcw, Copy, Check } from 'lucide-react';
import { askGeminiTutor } from '../../api/gemini.js';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function GeminiTutorModal({ isOpen, onClose, currentLessonTitle = "", currentLesson, onOpenKeyPool }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: `مرحباً بك! أنا معلمك ومساعدك الذكي المتخصص في مسار ASP.NET Core MVC ولغة C# 🟣. يسعدني مساعدتك في شرح أي كود، تبسيط أي مفهوم، أو كتابة أمثلة متقدمة من بيئات العمل الحقيقية. كيف يمكنني دعمك في هذا الدرس؟`
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState(null);
  const messagesEndRef = useRef(null);
  const { showToast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const userMsg = { role: 'user', text: query };
    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const response = await askGeminiTutor(query, currentLesson || { title: currentLessonTitle });
      if (response.success && response.text) {
        setMessages(prev => [...prev, { role: 'assistant', text: response.text }]);
      } else {
        setMessages(prev => [
          ...prev, 
          { 
            role: 'assistant', 
            text: `عذراً، حدث خطأ: ${response.error || "تعذر الاتصال"}. يرجى التحقق من مفاتيح Gemini API في المجمع.` 
          }
        ]);
      }
    } catch (err) {
      setMessages(prev => [
        ...prev, 
        { 
          role: 'assistant', 
          text: `فشل الاتصال: ${err.message}. تأكد من اتصال الإنترنت أو حدث مفاتيح الـ API.` 
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
    `اشرح لي درس "${currentLessonTitle || 'هذا المفهوم'}" بتشبيه واقعي بسيط`,
    `اكتب لي مثال C# عملي متقدم لـ "${currentLessonTitle || 'هذا المفهوم'}" مع تعليقات على كل سطر`,
    `ما هي أشهر الأخطاء الشائعة في "${currentLessonTitle || 'هذا المفهوم'}" وكيف أتفاداها؟`,
    `اختبرني بسؤال اختياري ذكي لتثبيت فهم "${currentLessonTitle || 'هذا المفهوم'}"`
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md" dir="rtl">
      <div className="bg-[#0b0f24] border border-purple-500/30 rounded-3xl max-w-2xl w-full h-[85vh] flex flex-col shadow-2xl relative overflow-hidden text-slate-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* الترويسة العلوية */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-500/15 bg-[#080b18]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/30">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white flex items-center gap-2 font-sans">
                معلم C# و ASP.NET Core الذكي
                <span className="text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded-full font-mono">
                  Gemini Flash
                </span>
              </h3>
              <p className="text-xs text-slate-400 font-sans truncate max-w-xs">
                الدرس الحالي: {currentLessonTitle || "أساسيات البرمجة"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onOpenKeyPool && (
              <button
                onClick={onOpenKeyPool}
                className="p-2 rounded-xl bg-[#0f1430] hover:bg-purple-900/30 border border-purple-500/20 text-purple-300 transition-colors cursor-pointer"
                title="إدارة المفاتيح"
              >
                <Key className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* الأسئلة السريعة المقترحة */}
        <div className="px-6 py-2 bg-[#060814] border-b border-purple-500/10 flex gap-2 overflow-x-auto scrollbar-none">
          {quickPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(p)}
              disabled={isLoading}
              className="text-[11px] px-3 py-1.5 rounded-full bg-[#0f1430] hover:bg-purple-600/30 text-purple-200 border border-purple-500/20 whitespace-nowrap transition-colors cursor-pointer shrink-0 disabled:opacity-50 font-sans"
            >
              {p}
            </button>
          ))}
        </div>

        {/* سجل المحادثة */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((m, idx) => {
            const isUser = m.role === 'user';
            return (
              <div
                key={idx}
                className={`flex gap-3 text-xs sm:text-sm leading-relaxed ${
                  isUser ? 'justify-end' : 'justify-start'
                }`}
              >
                {!isUser && (
                  <div className="w-7 h-7 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`p-4 rounded-2xl max-w-[85%] relative group ${
                    isUser
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-br-xs shadow-md shadow-purple-600/20 font-sans'
                      : 'bg-[#0f1430] border border-purple-500/20 text-slate-200 rounded-bl-xs shadow-md'
                  }`}
                >
                  <div className="whitespace-pre-wrap font-sans">{m.text}</div>
                  {!isUser && (
                    <button
                      onClick={() => handleCopy(m.text, idx)}
                      className="absolute top-2 left-2 p-1 rounded-md bg-[#080b18] text-slate-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      title="نسخ الرد"
                    >
                      {copiedIdx === idx ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    </button>
                  )}
                </div>
                {isUser && (
                  <div className="w-7 h-7 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 text-xs text-purple-300 items-center animate-pulse">
              <div className="w-7 h-7 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-purple-400 animate-spin" />
              </div>
              <span className="font-sans">المعلم الذكي يفكر ويصيغ لك أفضل شرح باللغة العربية...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* حقل الإدخال وزر الإرسال */}
        <div className="p-4 border-t border-purple-500/15 bg-[#080b18]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="اكتب سؤالك أو اطلب شرح كود أو تمرين في الدرس الحالي..."
              disabled={isLoading}
              className="flex-1 bg-[#0b0f24] border border-purple-500/20 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 font-sans"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50 shadow-lg shadow-purple-600/30"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline font-sans">إرسال</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
