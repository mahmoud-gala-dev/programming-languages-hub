// src/components/ai/GeminiKeyPoolModal.jsx
// نافذة إدارة مجمع مفاتيح Gemini API المتعددة مع الفحص المتوازي، رابط Google AI Studio، واللصق الفوري
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  Key, 
  Plus, 
  Trash2, 
  Zap, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Loader2, 
  ExternalLink, 
  Sparkles, 
  Clipboard, 
  Copy, 
  Check 
} from 'lucide-react';
import { getGeminiKeysPool, saveGeminiKeysPool, testGeminiKeysInParallel } from '../../api/gemini.js';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function GeminiKeyPoolModal({ isOpen, onClose }) {
  const showToast = useToast();
  const [keys, setKeys] = useState([]);
  const [newKeyInput, setNewKeyInput] = useState("");
  const [testing, setTesting] = useState(false);
  const [testResults, setTestResults] = useState({});
  const [copiedKeyIndex, setCopiedKeyIndex] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setKeys(getGeminiKeysPool());
      setTestResults({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAddKey = () => {
    if (!newKeyInput.trim()) return;
    // دعم إضافة عدة مفاتيح مفصولة بفواصل، مسافات أو أسطر
    const added = newKeyInput.split(/[\n,\s]+/).map(k => k.trim()).filter(Boolean);
    const updated = Array.from(new Set([...keys, ...added]));
    setKeys(updated);
    saveGeminiKeysPool(updated);
    setNewKeyInput("");
    showToast(`تمت إضافة ${added.length} مفتاح إلى المجمع بنجاح! 🔑`, "success");
  };

  // لصق فوري مباشر من الحافظة وإضافة المفتاح بنقرة واحدة
  const handlePasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (!text || !text.trim()) {
        showToast("الحافظة فارغة! انسخ المفتاح أولاً من Google AI Studio", "info");
        return;
      }
      const clean = text.trim();
      const added = clean.split(/[\n,\s]+/).map(k => k.trim()).filter(k => k.length > 5);
      if (added.length === 0) {
        showToast("النص في الحافظة لا يبدو كمفتاح API صالح", "error");
        return;
      }
      const updated = Array.from(new Set([...keys, ...added]));
      setKeys(updated);
      saveGeminiKeysPool(updated);
      setNewKeyInput("");
      showToast(`تم استيراد ${added.length} مفتاح من الحافظة وإضافته فوراً! ⚡`, "success");
    } catch (err) {
      showToast("يرجى استخدام حقل الإدخال ولصق المفتاح يدوياً (Ctrl+V)", "info");
    }
  };

  const handleCopyKey = (keyText, index) => {
    navigator.clipboard.writeText(keyText);
    setCopiedKeyIndex(index);
    setTimeout(() => setCopiedKeyIndex(null), 2000);
    showToast("تم نسخ المفتاح إلى الحافظة 📋", "success");
  };

  const handleRemoveKey = (index) => {
    const updated = keys.filter((_, i) => i !== index);
    setKeys(updated);
    saveGeminiKeysPool(updated);
    showToast("تم حذف المفتاح من المجمع", "info");
  };

  const handleTestAllKeys = async () => {
    if (keys.length === 0) return;
    setTesting(true);
    showToast("جاري فحص جميع المفاتيح بالتوازي الآن... ⚡", "info");

    const results = await testGeminiKeysInParallel(keys);
    const map = {};
    results.forEach(r => {
      map[r.key] = r;
    });
    setTestResults(map);
    setTesting(false);
    showToast("اكتمل فحص كافة المفاتيح بنجاح!", "success");
  };

  return typeof document !== 'undefined' ? createPortal(
    <div className="fixed inset-0 z-[99998] w-screen h-screen min-h-screen bg-black/80 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-4 animate-fadeIn" dir="rtl">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl w-full max-w-xl p-3.5 sm:p-6 shadow-2xl relative flex flex-col max-h-[92vh] sm:max-h-[88vh] animate-slideUp">
        
        {/* رأس النافذة */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 sm:pb-4 mb-3 sm:mb-4">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shadow-md shrink-0">
              <Key className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white font-sans flex items-center gap-1.5 sm:gap-2">
                مجمع مفاتيح Gemini API
                <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-mono border border-cyan-500/30">
                  {keys.length} مفاتيح
                </span>
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-400 font-sans">
                يعمل المجمع بالتبديل التلقائي (Auto-Failover) عند انتهاء حصة أي مفتاح
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            title="إغلاق النافذة"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* بطاقة الوصول المباشر إلى Google AI Studio للحصول على المفاتيح بسرعة */}
        <div className="bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/70 border border-cyan-800/50 hover:border-cyan-500/60 rounded-2xl p-3.5 mb-4 shadow-md transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-white font-sans">
                    Google AI Studio (مفاتيح مجانية)
                  </h4>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.2 rounded-full font-mono border border-emerald-500/30">
                    رسمي ومجاني
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  احصل على مفاتيحك من Google AI Studio بضغطة زر لزيادة السرعة والحصة
                </p>
              </div>
            </div>

            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold px-3.5 py-1.5 rounded-xl text-xs transition-all shadow-md hover:shadow-cyan-500/20 shrink-0 cursor-pointer"
              title="فتح Google AI Studio لإنشاء مفتاح جديد"
            >
              <span>فتح Google AI Studio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* حقل إضافة مفاتيح جديدة مع زر اللصق الفوري */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-xs">
            <label className="font-semibold text-slate-300">
              إضافة مفتاح API جديد:
            </label>
            <span className="text-[11px] text-slate-500 font-mono">
              يمكنك لصق عدة مفاتيح معاً
            </span>
          </div>
          
          <div className="flex flex-wrap sm:flex-nowrap gap-1.5 sm:gap-2">
            <input
              type="text"
              value={newKeyInput}
              onChange={(e) => setNewKeyInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddKey()}
              placeholder="الصق مفتاح Google Gemini API هنا..."
              className="flex-1 min-w-0 w-full sm:w-auto bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono shadow-inner"
            />
            
            <div className="flex items-center gap-1.5 w-full sm:w-auto justify-end">
              {/* زر اللصق المباشر من الحافظة */}
              <button
                onClick={handlePasteFromClipboard}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-750 text-cyan-300 hover:text-white border border-slate-700 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0"
                title="قراءة المفتاح من الحافظة وإضافته فوراً بنقرة واحدة"
              >
                <Clipboard className="w-3.5 h-3.5" />
                <span>لصق</span>
              </button>

              {/* زر الإضافة اليدوية */}
              <button
                onClick={handleAddKey}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold px-3.5 sm:px-4 py-2 rounded-xl text-xs transition-colors cursor-pointer shrink-0 shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>إضافة</span>
              </button>
            </div>
          </div>
        </div>

        {/* زر الفحص المتوازي للسرعة والصلاحية */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80 mb-3.5 gap-2.5">
          <div className="text-[11px] sm:text-xs text-slate-300 leading-snug">
            اختبر سرعة وصلاحية كافة المفاتيح بالتوازي لتحديد المفاتيح النشطة:
          </div>
          <button
            onClick={handleTestAllKeys}
            disabled={testing || keys.length === 0}
            className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold px-3.5 py-1.5 rounded-xl text-xs transition-all cursor-pointer shadow-md disabled:opacity-50 shrink-0"
          >
            {testing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Zap className="w-3.5 h-3.5" />}
            <span>{testing ? "جاري الفحص..." : "فحص كافة المفاتيح"}</span>
          </button>
        </div>

        {/* قائمة المفاتيح الحالية مع شارات الحالة والنسخ والحذف */}
        <div className="flex-1 overflow-y-auto space-y-2 mb-4 pr-1">
          {keys.length === 0 ? (
            <div className="text-center py-8 text-slate-500 text-xs space-y-2">
              <Key className="w-8 h-8 mx-auto opacity-30 text-amber-400" />
              <p>لا توجد مفاتيح في المجمع حالياً.</p>
              <p className="text-[11px] text-slate-600">
                انقر على "فتح Google AI Studio" أعلاه لإنشاء مفتاح وإضافته في ثوانٍ.
              </p>
            </div>
          ) : (
            keys.map((key, idx) => {
              const res = testResults[key];
              const maskedKey = `${key.substring(0, 8)}••••••••${key.substring(key.length - 4)}`;
              const isCopied = copiedKeyIndex === idx;

              return (
                <div 
                  key={idx}
                  className="flex flex-wrap sm:flex-nowrap items-center justify-between p-2.5 sm:p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs hover:border-slate-700/80 transition-all gap-2"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-cyan-400 text-[11px] font-bold">
                      #{idx + 1}
                    </span>
                    <span className="font-mono text-slate-200 select-all" dir="ltr">
                      {maskedKey}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/* شارة نتيجة الفحص */}
                    {res && (
                      <div className="flex items-center gap-1.5 ml-1">
                        {res.status === 'active' && (
                          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-md text-[10px] font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            <span>نشط ({res.latency}ms)</span>
                          </span>
                        )}
                        {res.status === 'quota_exhausted' && (
                          <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-md text-[10px] font-bold flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3 text-amber-400" />
                            <span>استنفد الحصة (429)</span>
                          </span>
                        )}
                        {res.status === 'invalid' && (
                          <span className="bg-rose-500/20 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded-md text-[10px] font-bold flex items-center gap-1">
                            <XCircle className="w-3 h-3 text-rose-400" />
                            <span>غير صالح</span>
                          </span>
                        )}
                      </div>
                    )}

                    {/* زر نسخ المفتاح */}
                    <button
                      onClick={() => handleCopyKey(key, idx)}
                      className="p-1.5 text-slate-400 hover:text-cyan-300 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                      title="نسخ المفتاح بالكامل"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>

                    {/* زر حذف المفتاح */}
                    <button
                      onClick={() => handleRemoveKey(idx)}
                      className="p-1.5 text-slate-500 hover:text-rose-400 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                      title="حذف المفتاح"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* تذييل النافذة */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800">
          <span className="text-[11px] text-slate-500">
            تُحفظ المفاتيح محلياً ومشفرة في متصفحك
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
          >
            إغلاق وحفظ
          </button>
        </div>

      </div>
    </div>,
    document.body
  ) : null;
}


