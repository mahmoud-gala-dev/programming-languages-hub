// src/components/ai/GeminiKeyPoolModal.jsx
import React, { useState, useEffect } from 'react';
import { X, Key, Plus, Trash2, CheckCircle2, AlertCircle, RefreshCw, Zap } from 'lucide-react';
import { getGeminiKeysPool, saveGeminiKeysPool, testGeminiKeysInParallel } from '../../api/gemini.js';
import { useToast } from '../../context/UiFeedbackContext.jsx';

export default function GeminiKeyPoolModal({ isOpen, onClose }) {
  const [keys, setKeys] = useState([]);
  const [newKey, setNewKey] = useState('');
  const [testResults, setTestResults] = useState({});
  const [isTesting, setIsTesting] = useState(false);
  const showToast = useToast();

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn" dir="rtl">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative text-slate-100">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">إدارة مجمع مفاتيح Gemini API (Key Pool)</h3>
              <p className="text-xs text-slate-400">يدعم المجمع التبديل التلقائي عند انتهاء الحصة اليومية</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* إضافة مفتاح جديد */}
        <div className="flex items-center gap-2 mb-5">
          <input
            type="text"
            value={newKey}
            onChange={(e) => setNewKey(e.target.value)}
            placeholder="أدخل مفتاح Gemini API جديد (AIzaSy...)"
            className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 font-mono"
          />
          <button
            onClick={handleAddKey}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition-all shadow-md shadow-amber-500/20 cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>إضافة</span>
          </button>
        </div>

        {/* قائمة المفاتيح */}
        <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1 mb-5">
          {keys.map((k, idx) => {
            const res = testResults[k];
            return (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800/80 rounded-xl p-3 flex items-center justify-between gap-3 text-xs"
              >
                <div className="overflow-hidden">
                  <div className="font-mono text-slate-300 truncate max-w-xs text-[11px]" dir="ltr">
                    {k.substring(0, 14)}••••••••{k.substring(k.length - 6)}
                  </div>
                  {res && (
                    <div className="flex items-center gap-1.5 mt-1 text-[10px]">
                      {res.status === 'active' ? (
                        <span className="text-emerald-400 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          {res.message} ({res.latency}ms)
                        </span>
                      ) : (
                        <span className="text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {res.message}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {idx === 0 && (
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">
                      النشط
                    </span>
                  )}
                  <button
                    onClick={() => handleRemoveKey(k)}
                    className="text-slate-500 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                    title="حذف المفتاح"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* زر الفحص الموازي */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <button
            onClick={handleTestAll}
            disabled={isTesting || keys.length === 0}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-all cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isTesting ? "animate-spin text-amber-400" : ""}`} />
            <span>{isTesting ? "جاري فحص المفاتيح..." : "فحص سرعة المفاتيح بالتوازي"}</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-xl transition-all cursor-pointer"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
}
