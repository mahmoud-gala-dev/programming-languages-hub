// src/components/views/SummaryView.jsx
import React from 'react';
import { Award, CheckCircle, Sparkles, Compass, Lightbulb, BookOpen } from 'lucide-react';

export default function SummaryView({ sectionData, onBackToLessons }) {
  if (!sectionData) return null;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fadeIn text-slate-100" dir="rtl">
      
      {/* الترويسة */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
        <div>
          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
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

      {/* القواعد الذهبية للقسم */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {[
          {
            title: "فهم دورة حياة Node.js وEvent Loop",
            desc: "لا تقم أبداً بحظر المسار الرئيسي (Single Thread) بعمليات حسابية ثقيلة تستهلك الـ CPU، بل استخدم Worker Threads أو Streams."
          },
          {
            title: "البرمجة غير المتزامنة الآمنة",
            desc: "اعتمد دائماً على async/await مع كتل try/catch محكمة، وتجنب الوعود المعلقة (Unhandled Rejections)."
          },
          {
            title: "الأمان أولاً (Security by Design)",
            desc: "طهّر كافة المدخلات باستخدام مكتبات التحقق مثل Zod، واحمِ التطبيق من هجمات الحقن وXSS واستخدم Helmet."
          },
          {
            title: "هيكلة المشروع وفصل المسؤوليات",
            desc: "افصل طبقة المسارات (Routes) عن طبقة التحكم (Controllers) وعن منطق الأعمال (Services) وقواعد البيانات."
          },
          {
            title: "التعامل الفعال مع الذاكرة وStreams",
            desc: "عند التعامل مع ملفات كبيرة أو تدفق بيانات ضخم، استخدم Streams بدلاً من تحميل كامل الملف في الذاكرة عبر Buffers."
          },
          {
            title: "التسجيل والمراقبة المهنية",
            desc: "استخدم مكتبات تسجيل مهيكلة مثل Pino لإنتاج JSON logs وRequest IDs لتتبع الطلبات بسهولة في بيئة الإنتاج."
          },
          {
            title: "إدارة الاتصالات وقواعد البيانات",
            desc: "استخدم Connection Pooling دائماً، وتجنب مشكلة N+1 Queries، وطبق الفهارس (Indexes) على الحقول الأكثر بحثاً."
          },
          {
            title: "الإغلاق السلس للتطبيق (Graceful Shutdown)",
            desc: "استمع لإشارات SIGTERM وSIGINT لإغلاق اتصالات قاعدة البيانات والخوادم دون فقدان بيانات العملاء قيد المعالجة."
          }
        ].map((rule, idx) => (
          <div
            key={idx}
            className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/40 transition-all flex items-start gap-3.5"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-xs">
              {idx + 1}
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1.5">{rule.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{rule.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* بطاقة التهنئة */}
      <div className="bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 text-center space-y-3">
        <Award className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
        <h3 className="text-xl font-black text-white">أحسنت صنعاً في استيعاب هذا القسم!</h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
          أنت الآن تملك أساساً هندسياً متيناً للانتقال للمستوى التالي، وتطبيق هذه المفاهيم في مشروعات حقيقية قابلة للتوسع والإنتاج.
        </p>
      </div>

    </div>
  );
}
