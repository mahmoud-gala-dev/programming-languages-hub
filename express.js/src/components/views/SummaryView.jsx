// src/components/views/SummaryView.jsx
import React from 'react';
import { Award, CheckCircle, Sparkles, Compass } from 'lucide-react';

export default function SummaryView({ sectionData, onBackToLessons }) {
  if (!sectionData) return null;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fadeIn text-slate-100" dir="rtl">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
        <div>
          <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            ملخص ختامي شامل
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-2">
            خلاصة وقواعد الذهب: {sectionData.title}
          </h1>
          <p className="text-xs text-slate-400 mt-1">{sectionData.englishTitle}</p>
        </div>

        <button
          onClick={onBackToLessons}
          className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all cursor-pointer shrink-0"
        >
          العودة للدروس ↩
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {[
          {
            title: "فهم دورة حياة الطلب (Request-Response Cycle)",
            desc: "كل طلب يدخل عبر الوسائط (Middleware) بالترتيب، ويجب إما إرسال استجابة عبر res.json/res.send أو استدعاء next() لتجنب تعليق الطلب."
          },
          {
            title: "استخدام Express.Router لتقسيم المسارات",
            desc: "لا تجمع كل المسارات في app.js، بل قسّمها إلى ملفات مستقلة في مجلد routes/ واربطها ببادئات واضحة مثل /api/v1/users."
          },
          {
            title: "المعالجة المركزية للأخطاء (Global Error Handler)",
            desc: "عرّف دائماً وسيط أخطاء يمتلك 4 معاملات (err, req, res, next) في نهاية مسارات التطبيق لتصيد كل الأخطاء وإخفاء التفاصيل الحساسة."
          },
          {
            title: "التحقق الصارم من صحة المدخلات (Zod / Validation)",
            desc: "لا تثق بأي مدخلات تأتي من req.body أو req.query؛ تحقق من أنواعها وأطوالها وطهرها قبل تمريرها لقواعد البيانات."
          },
          {
            title: "فصل منطق الأعمال عن المسارات (Clean Architecture)",
            desc: "اجعل الـ Controllers تستقبل الطلبات فقط، بينما يُنفذ منطق الأعمال داخل Services والتعامل مع البيانات في Repositories."
          },
          {
            title: "الأمان أولاً (Security Hardening)",
            desc: "استخدم مكتبة Helmet، واضبط CORS بدقة، وطبق Rate Limiting على مسارات الدخول لمنع هجمات Brute Force."
          },
          {
            title: "إدارة الاتصالات وقواعد البيانات بحكمة",
            desc: "اعتمد على Connection Pooling مع PostgreSQL أو MongoDB، وتجنب استعلامات N+1، واستخدم المعاملات Transactions للعمليات المترابطة."
          },
          {
            title: "الإغلاق السلس (Graceful Shutdown)",
            desc: "استمع لإشارات SIGTERM وSIGINT لإيقاف استقبال الطلبات الجديدة وإنهاء العمليات الجارية وإغلاق الاتصالات بأمان."
          }
        ].map((rule, idx) => (
          <div
            key={idx}
            className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 hover:border-amber-500/40 transition-all flex items-start gap-3.5"
          >
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs">
              {idx + 1}
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1.5">{rule.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{rule.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-amber-950/60 to-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 text-center space-y-3">
        <Award className="w-12 h-12 text-amber-400 mx-auto animate-bounce" />
        <h3 className="text-xl font-black text-white">إنجاز رائع في إتقان مفاهيم هذا القسم!</h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
          أنت الآن تملك معرفة تطبيقية عميقة تؤهلك لكتابة خوادم Express.js نظيفة، آمنة، وعالية الأداء.
        </p>
      </div>

    </div>
  );
}
