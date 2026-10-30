// src/context/UiFeedbackContext.jsx
// سياق التغذية الراجعة التفاعلية (Toasts، Modal Alerts، واحتفالات Confetti)
import React, { createContext, useContext, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import ToastContainer from '../components/common/ToastContainer.jsx';
import SwalModal from '../components/common/SwalModal.jsx';

const UiFeedbackContext = createContext(null);

export function UiFeedbackProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const [swalConfig, setSwalConfig] = useState(null);
  const [swalResolver, setSwalResolver] = useState(null);

  // إطلاق إشعار Toast
  const showToast = useCallback((message, type = 'info', duration = 3500) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  // إزالة إشعار يدوي
  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // نافذة حوارية تأكيدية Swal
  const showSwal = useCallback((options) => {
    return new Promise((resolve) => {
      setSwalResolver(() => resolve);
      setSwalConfig(options);
    });
  }, []);

  const handleSwalClose = useCallback((result) => {
    if (swalResolver) {
      swalResolver(result);
    }
    setSwalConfig(null);
    setSwalResolver(null);
  }, [swalResolver]);

  // إطلاق مؤثرات Confetti الاحتفالية
  const triggerConfetti = useCallback(() => {
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b']
      });
    } catch {
      // تجاهل أخطاء المؤثر
    }
  }, []);

  return (
    <UiFeedbackContext.Provider value={{ showToast, showSwal, triggerConfetti }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
      {swalConfig && <SwalModal config={swalConfig} onClose={handleSwalClose} />}
    </UiFeedbackContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(UiFeedbackContext);
  if (!ctx) throw new Error("useToast must be used within UiFeedbackProvider");
  return { showToast: ctx.showToast, triggerConfetti: ctx.triggerConfetti };
}

export function useSwal() {
  const ctx = useContext(UiFeedbackContext);
  if (!ctx) throw new Error("useSwal must be used within UiFeedbackProvider");
  return { showSwal: ctx.showSwal };
}
