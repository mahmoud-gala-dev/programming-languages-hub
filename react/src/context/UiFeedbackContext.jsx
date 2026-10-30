// src/context/UiFeedbackContext.jsx
// سياق موحد لإدارة إشعارات Toast ونوافذ الرسائل والتأكيد التفاعلية (Swal Alternative)
import React, { createContext, useContext, useState, useCallback } from 'react';
import ToastContainer from '../components/common/ToastContainer.jsx';
import SwalModal from '../components/common/SwalModal.jsx';

const UiFeedbackContext = createContext(null);

export function UiFeedbackProvider({ children }) {
  // حالة الإشعارات العائمة (Toasts)
  const [toasts, setToasts] = useState([]);

  // حالة النافذة التفاعلية (Swal)
  const [swalConfig, setSwalConfig] = useState(null);
  const [swalResolver, setSwalResolver] = useState(null);

  /**
   * إظهار إشعار Toast عائم
   * @param {string} message نص الإشعار
   * @param {'success' | 'error' | 'info' | 'warning'} type نوع الإشعار
   * @param {number} duration مدة الظهور بالملي ثانية
   */
  const showToast = useCallback((message, type = 'info', duration = 3500) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type, duration }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  /**
   * إظهار نافذة حوارية تفاعلية تحاكي SweetAlert (Swal)
   * @param {Object} options خيارات النافذة
   * @returns {Promise<{ isConfirmed: boolean, isDismissed: boolean, value?: string }>}
   */
  const showSwal = useCallback((options) => {
    return new Promise((resolve) => {
      setSwalResolver(() => resolve);
      setSwalConfig({
        title: options.title || "تنبيه",
        text: options.text || "",
        icon: options.icon || "info", // 'success' | 'warning' | 'error' | 'info' | 'question'
        showCancelButton: options.showCancelButton || false,
        confirmButtonText: options.confirmButtonText || "موافق",
        cancelButtonText: options.cancelButtonText || "إلغاء",
        input: options.input || null, // 'text' | 'textarea'
        inputPlaceholder: options.inputPlaceholder || "",
        inputValue: options.inputValue || "",
        confirmButtonColor: options.confirmButtonColor || "bg-cyan-500 hover:bg-cyan-400 text-slate-950"
      });
    });
  }, []);

  const handleSwalConfirm = (value) => {
    if (swalResolver) {
      swalResolver({ isConfirmed: true, isDismissed: false, value });
    }
    setSwalConfig(null);
    setSwalResolver(null);
  };

  const handleSwalDismiss = () => {
    if (swalResolver) {
      swalResolver({ isConfirmed: false, isDismissed: true });
    }
    setSwalConfig(null);
    setSwalResolver(null);
  };

  return (
    <UiFeedbackContext.Provider value={{ showToast, showSwal }}>
      {children}
      {/* حاوية الإشعارات العائمة */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
      {/* النافذة الحوارية التفاعلية */}
      {swalConfig && (
        <SwalModal
          config={swalConfig}
          onConfirm={handleSwalConfirm}
          onDismiss={handleSwalDismiss}
        />
      )}
    </UiFeedbackContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(UiFeedbackContext);
  if (!ctx) throw new Error("useToast must be used within UiFeedbackProvider");
  return ctx.showToast;
}

export function useSwal() {
  const ctx = useContext(UiFeedbackContext);
  if (!ctx) throw new Error("useSwal must be used within UiFeedbackProvider");
  return ctx.showSwal;
}

