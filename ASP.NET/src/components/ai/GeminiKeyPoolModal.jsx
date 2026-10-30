// src/components/ai/GeminiKeyPoolModal.jsx
import React, { useState, useEffect } from 'react';
import { X, Key, Plus, Trash2, CheckCircle2, AlertCircle, RefreshCw, Zap, ExternalLink } from 'lucide-react';
import { getGeminiKeysPool, saveGeminiKeysPool, testGeminiKeysInParallel } from '../../api/gemini.js';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function GeminiKeyPoolModal({ isOpen, onClose }) {
  const [keys, setKeys] = useState([]);
  const [newKey, setNewKey] = useState('');
  const [testResults, setTestResults] = useState({});
  const [isTesting, setIsTesting] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    if (isOpen) {
      setKeys(getGeminiKeysPool());
    }
  }, [isOpen]);

  const handleAddKey = () => {
    if (!newKey.trim()) return;
    if (keys.includes(newKey.trim())) {
      showToast("هذا المفتاح مضاف مسبقاً في المجمع", "warning");
      return;
    }
    const updated = [newKey.trim(), ...keys];
    setKeys(updated);
    saveGeminiKeysPool(updated);
    setNewKey('');
    showToast("تمت إضافة المفتاح إلى المجمع بنجاح! 🔑", "success");
  };

  const handleRemoveKey = (keyToRemove) => {
    const updated = keys.filter(k => k !== keyToRemove);
    setKeys(updated);
    saveGeminiKeysPool(updated);
    showToast("تم حذف المفتاح من المجمع", "info");
  };

  const handleTestAll = async () => {
    setIsTesting(true);
    try {
      const results = await testGeminiKeysInParallel(keys);
      const resMap = {};
      results.forEach(r => {
        resMap[r.key] = r;
      });
      setTestResults(resMap);
      showToast("اكتمل فحص كافة المفاتيح بالتوازي! ✓", "success");
    } catch {
      showToast("حدث خطأ أثناء فحص المفاتيح", "error");
    } finally {
      setIsTesting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" dir="rtl">
      <div className="bg-[#0b0f24] border border-purple-500/30 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative text-slate-100 animate-in fade-in zoom-in-95 duration-200">
        
        <div className="flex items-center justify-between pb-4 border-b border-purple-500/15 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white font-sans">إدارة مجمع مفاتيح Gemini API (Key Pool)</h3>
              <p className="text-xs text-slate-400 font-sans">يدعم المجمع التدوير التلقائي عند انتهاء الحصة (429 Failover)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* إدخال مفتاح جديد */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newKey}
            onChange={(e) => setNewKey(e.target.value)}
            placeholder="أدخل مفتاح Gemini API جديد (AIzaSy...)"
            className="flex-1 bg-[#080b18] border border-purple-500/20 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 font-mono"
          />
          <button
            onClick={handleAddKey}
            className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-lg shadow-purple-600/30"
          >
            <Plus className="w-4 h-4" />
            <span>إضافة</span>
          </button>
        </div>

        {/* زر الفحص ورابط إنشاء المفاتيح */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <button
            onClick={handleTestAll}
            disabled={isTesting || keys.length === 0}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0f1430] hover:bg-purple-900/30 border border-purple-500/20 text-slate-200 text-xs font-bold transition-all cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isTesting ? 'animate-spin text-purple-400' : ''}`} />
            <span>{isTesting ? "جاري الفحص المتوازي..." : "فحص صحة المفاتيح الآن"}</span>
          </button>

          <a
            href="https://aistudio.google.com/app/apikey"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] text-cyan-400 hover:underline flex items-center gap-1 font-sans"
          >
            <span>إنشاء مفاتيح مجانية</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* قائمة المفاتيح وحالتها */}
        <div className="max-h-60 overflow-y-auto space-y-2 mb-4">
          {keys.map((k, idx) => {
            const res = testResults[k];
            const isFirst = idx === 0;

            return (
              <div
                key={k}
                className="p-3 rounded-xl bg-[#080b18] border border-purple-500/15 flex items-center justify-between gap-3 text-xs"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="w-5 h-5 rounded-md bg-purple-500/15 text-purple-400 font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <div className="overflow-hidden">
                    <span className="font-mono text-slate-300 block truncate" dir="ltr">
                      {k.slice(0, 10)}...{k.slice(-6)}
                    </span>
                    {res && (
                      <span className={`text-[10px] block font-sans ${
                        res.status === 'active' ? 'text-emerald-400' : 'text-rose-400'
                      }`}>
                        {res.message} ({res.latency}ms)
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {isFirst && (
                    <span className="text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded font-mono">
                      النشط الآن
                    </span>
                  )}
                  {keys.length > 1 && (
                    <button
                      onClick={() => handleRemoveKey(k)}
                      className="p-1 rounded-lg text-slate-500 hover:text-rose-400 transition-colors cursor-pointer"
                      title="حذف المفتاح"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-3 border-t border-purple-500/15 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#0f1430] hover:bg-slate-800 transition-colors border border-purple-500/20 cursor-pointer"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
}
