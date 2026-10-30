// src/components/common/SwalModal.jsx
import React, { useState } from 'react';
import { HelpCircle, AlertCircle, CheckCircle, Info, X } from 'lucide-react';

export default function SwalModal({ config, onClose }) {
  const [inputValue, setInputValue] = useState(config.inputValue || '');

  if (!config) return null;

  const handleConfirm = () => {
    onClose({ isConfirmed: true, value: inputValue });
  };

  const handleCancel = () => {
    onClose({ isConfirmed: false, isDismissed: true });
  };

  let IconComp = Info;
  let iconColor = 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';

  if (config.icon === 'question') {
    IconComp = HelpCircle;
    iconColor = 'text-purple-400 bg-purple-500/10 border-purple-500/20';
  } else if (config.icon === 'success') {
    IconComp = CheckCircle;
    iconColor = 'text-purple-400 bg-purple-500/10 border-purple-500/20';
  } else if (config.icon === 'error') {
    IconComp = AlertCircle;
    iconColor = 'text-rose-400 bg-rose-500/10 border-rose-500/20';
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" dir="rtl">
      <div className="bg-[#0b0f24] border border-purple-500/30 rounded-2xl max-w-md w-full p-6 shadow-2xl relative text-slate-100 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={handleCancel}
          className="absolute top-4 left-4 text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3.5 mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${iconColor}`}>
            <IconComp className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white font-sans">{config.title}</h3>
            {config.text && <p className="text-xs text-slate-400 mt-1 leading-relaxed font-sans">{config.text}</p>}
          </div>
        </div>

        {config.input === 'text' && (
          <div className="my-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={config.inputPlaceholder || ''}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 font-mono"
              autoFocus
            />
          </div>
        )}

        <div className="flex items-center justify-end gap-2.5 mt-6">
          {config.showCancelButton && (
            <button
              onClick={handleCancel}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {config.cancelButtonText || 'إلغاء'}
            </button>
          )}
          <button
            onClick={handleConfirm}
            className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-600/30 cursor-pointer"
          >
            {config.confirmButtonText || 'موافق'}
          </button>
        </div>
      </div>
    </div>
  );
}
