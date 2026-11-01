// src/components/lesson/components/OutputExplanationSection.jsx
// محطة 8: شرح المخرجات: ماذا يرى المستخدم ولماذا؟ مع إنفوجرافيك SVG تفاعلي للمتصفح
import React, { useState } from 'react';
import { 
  Eye, 
  Monitor, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  Layers, 
  ArrowLeftRight,
  MousePointerClick,
  Code2,
  Cpu
} from 'lucide-react';

export default function OutputExplanationSection({ 
  subtopic, 
  readingFontSize = 17,
  renderHighlightedContent 
}) {
  const [activeTab, setActiveTab] = useState('visual'); // 'visual' | 'why' | 'interactive'

  if (!subtopic) return null;

  const rawOutput = subtopic.outputExplanation || subtopic.output || '';
  
  // استخلاص البيانات أو استخدام النصوص المعمارية الذكية
  const visualWhat = subtopic.outputVisual || rawOutput || 'يرى المستخدم واجهة مستخدم تفاعلية نظيفة، مبنية من مكونات مهيأة بدقة، تعرض البيانات الحالية وتستجيب فوراً لنقرات المستخدم دون وميض أو إعادة تحميل للصفحة.';
  const whyReason = subtopic.outputWhy || subtopic.why || 'تظهر المخرجات بهذا الشكل لأن React تتبع نمط البرمجة التصريحية (Declarative UI)؛ حيث تقوم دالة المكون بتحويل الحالة (State) والخصائص (Props) إلى شجرة JSX في الذاكرة، ثم يقوم المحرك بمطابقتها وتحديث العناصر الضرورية فقط في المتصفح.';
  const interactiveBehavior = subtopic.outputInteractive || 'عند تفاعل المستخدم (مثل الضغط على زر أو إدخال نص)، يُطلق الحدث دالة تحديث الحالة، مما يدفع React لإعادة استدعاء المكون وحساب الفروقات وتحديث الجزء المتأثر فقط في أقل من 16 جزءاً من الثانية (60FPS).';

  const safeRender = (text) => {
    if (typeof renderHighlightedContent === 'function') {
      return renderHighlightedContent(text);
    }
    return text;
  };

  return (
    <div 
      id="lesson-section-output" 
      data-lesson-section="output" 
      className="scroll-mt-24 sm:scroll-mt-28 bg-slate-900/95 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden transition-all duration-300"
    >
      {/* توهج خلفي ناعم */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* ترويسة القسم والشارة المعمارية */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-3">
          <span className="size-8 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center justify-center text-sm font-mono font-black shadow-inner">
            8
          </span>
          <div>
            <h3 className="text-base sm:text-lg font-black text-cyan-300 flex items-center gap-2">
              <Eye className="size-5 text-cyan-400" />
              <span>شرح المخرجات: ماذا يرى المستخدم ولماذا؟ (Output Explanation):</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              تحليل بصري معماري يربط بين كود الـ JSX وما يظهر على شاشة المتصفح للمستخدم النهائي
            </p>
          </div>
        </div>

        <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/50 flex items-center gap-1.5 shrink-0">
          <Monitor className="size-3.5" />
          <span>UX & Visual Feedback</span>
        </span>
      </div>

      {/* إنفوجرافيك SVG التفاعلي: نافذة المتصفح ومسار تدفق المخرجات */}
      <div className="bg-slate-950/90 border border-slate-800/90 rounded-2xl p-4 sm:p-5 shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between mb-3 border-b border-slate-800/70 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
              <Sparkles className="size-3.5 text-cyan-400" />
              <span>مخطط المحاكاة البصرية للمخرجات (Render Output Trace)</span>
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">Browser Viewport 1080p</span>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <svg 
            viewBox="0 0 840 320" 
            className="w-full h-auto drop-shadow-xl select-none"
            style={{ direction: 'ltr' }}
          >
            <defs>
              <linearGradient id="browserBarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="outputCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
              <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* إطار نافذة المتصفح */}
            <rect x="10" y="10" width="820" height="300" rx="16" fill="#030712" stroke="#334155" strokeWidth="2" />
            
            {/* شريط أدوات المتصفح العلوي */}
            <rect x="10" y="10" width="820" height="42" rx="16" fill="url(#browserBarGrad)" />
            <rect x="10" y="40" width="820" height="12" fill="url(#browserBarGrad)" />
            
            {/* أزرار تحكم نافذة المتصفح (macOS Style) */}
            <circle cx="36" cy="31" r="6" fill="#ef4444" />
            <circle cx="56" cy="31" r="6" fill="#f59e0b" />
            <circle cx="76" cy="31" r="6" fill="#10b981" />

            {/* شريط العنوان URL */}
            <rect x="105" y="20" width="460" height="22" rx="7" fill="#020617" stroke="#1e293b" />
            <text x="120" y="35" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">🔒 https://localhost:5173/react-app</text>
            <text x="540" y="35" fill="#64748b" fontSize="10" textAnchor="end">React 19 Live</text>

            {/* شارة حالة الاتصال */}
            <rect x="580" y="20" width="90" height="22" rx="7" fill="#065f46" stroke="#10b981" strokeWidth="1" />
            <circle cx="595" cy="31" r="3.5" fill="#34d399" />
            <text x="635" y="35" fill="#a7f3d0" fontSize="10" fontWeight="bold" textAnchor="middle">200 OK</text>

            <rect x="680" y="20" width="140" height="22" rx="7" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1" />
            <text x="750" y="35" fill="#c7d2fe" fontSize="10" fontWeight="bold" textAnchor="middle">60 FPS Render</text>

            {/* منطقة العرض الداخلية: تقسيم ثلاثي (المدخلات ➔ محرك React ➔ شاشة المخرجات) */}
            
            {/* 1. عمود المدخلات (State & Props) */}
            <g transform="translate(30, 70)">
              <rect width="210" height="220" rx="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 3" />
              <rect width="210" height="32" rx="12" fill="#0284c7" />
              <rect y="22" width="210" height="10" fill="#0284c7" />
              <text x="105" y="21" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">1. مدخلات الحالة (State / Props)</text>
              
              <rect x="15" y="45" width="180" height="42" rx="8" fill="#020617" stroke="#1e293b" />
              <text x="25" y="62" fill="#94a3b8" fontSize="10" fontFamily="monospace">const [data, setData] =</text>
              <text x="25" y="78" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">useState(initialState);</text>

              <rect x="15" y="95" width="180" height="42" rx="8" fill="#020617" stroke="#1e293b" />
              <text x="25" y="112" fill="#94a3b8" fontSize="10" fontFamily="monospace">props: {`{ title, theme }`}</text>
              <text x="25" y="128" fill="#a855f7" fontSize="10" fontFamily="monospace">Read-only immutable</text>

              <rect x="15" y="145" width="180" height="58" rx="8" fill="#1e1b4b" stroke="#4338ca" />
              <text x="25" y="163" fill="#818cf8" fontSize="10" fontWeight="bold">معادلة React الذهبية:</text>
              <text x="105" y="188" fill="#a5b4fc" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="monospace">UI = f(State)</text>
            </g>

            {/* سهم تدفق 1 */}
            <g transform="translate(245, 170)">
              <line x1="0" y1="0" x2="35" y2="0" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrow)" />
              <circle cx="17" cy="0" r="10" fill="#0369a1" />
              <text x="17" y="4" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">➔</text>
            </g>

            {/* 2. عمود معالجة React (Virtual DOM Diffing) */}
            <g transform="translate(285, 70)">
              <rect width="230" height="220" rx="12" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
              <rect width="230" height="32" rx="12" fill="#7e22ce" />
              <rect y="22" width="230" height="10" fill="#7e22ce" />
              <text x="115" y="21" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">2. معالجة وتوفيق المحرك</text>

              {/* شجرة الـ Virtual DOM المصغرة */}
              <circle cx="115" cy="65" r="14" fill="#6b21a8" stroke="#c084fc" strokeWidth="1.5" />
              <text x="115" y="69" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">&lt;App /&gt;</text>

              <line x1="105" y1="78" x2="65" y2="105" stroke="#9333ea" strokeWidth="2" />
              <line x1="125" y1="78" x2="165" y2="105" stroke="#9333ea" strokeWidth="2" />

              <circle cx="65" cy="115" r="13" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5" />
              <text x="65" y="119" fill="#e0e7ff" fontSize="8" textAnchor="middle">&lt;Nav&gt;</text>

              <rect x="135" y="103" width="60" height="24" rx="6" fill="#065f46" stroke="#34d399" strokeWidth="2" filter="url(#cyanGlow)" />
              <text x="165" y="118" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Diffing ✓</text>

              <rect x="15" y="145" width="200" height="58" rx="8" fill="#020617" stroke="#1e293b" />
              <text x="115" y="165" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">حساب التعديل الصافي</text>
              <text x="115" y="184" fill="#a7f3d0" fontSize="10" textAnchor="middle">تحديث العقدة المغيرة فقط</text>
              <text x="115" y="196" fill="#94a3b8" fontSize="9" textAnchor="middle">No full page re-render</text>
            </g>

            {/* سهم تدفق 2 */}
            <g transform="translate(520, 170)">
              <line x1="0" y1="0" x2="35" y2="0" stroke="#10b981" strokeWidth="3" />
              <circle cx="17" cy="0" r="10" fill="#047857" />
              <text x="17" y="4" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">➔</text>
            </g>

            {/* 3. عمود شاشة المخرجات النهائية (ما يراه المستخدم في المتصفح) */}
            <g transform="translate(560, 70)">
              <rect width="250" height="220" rx="12" fill="#030712" stroke="#10b981" strokeWidth="2" />
              <rect width="250" height="32" rx="12" fill="#059669" />
              <rect y="22" width="250" height="10" fill="#059669" />
              <text x="125" y="21" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">3. المخرجات المرئية للمستخدم</text>

              {/* بطاقة الواجهة التفاعلية المحاكاة */}
              <rect x="15" y="45" width="220" height="90" rx="10" fill="#0f172a" stroke="#334155" />
              <circle cx="35" cy="70" r="12" fill="#0284c7" />
              <text x="35" y="74" fill="#ffffff" fontSize="11" textAnchor="middle">⚛️</text>
              <text x="56" y="67" fill="#ffffff" fontSize="11" fontWeight="bold">{subtopic.title.length > 20 ? subtopic.title.slice(0, 18) + '..' : subtopic.title}</text>
              <text x="56" y="82" fill="#38bdf8" fontSize="9">Active Render Component</text>

              {/* زر تفاعلي محاكى داخل الشاشة */}
              <rect x="30" y="95" width="90" height="26" rx="6" fill="#0284c7" />
              <text x="75" y="112" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">تفاعل حي 🖱️</text>

              <rect x="130" y="95" width="90" height="26" rx="6" fill="#1e293b" stroke="#475569" />
              <text x="175" y="112" fill="#a7f3d0" fontSize="10" textAnchor="middle">محدث الآن ✓</text>

              {/* شارة التغذية الراجعة */}
              <rect x="15" y="145" width="220" height="58" rx="8" fill="#064e3b" stroke="#059669" />
              <text x="125" y="165" fill="#6ee7b7" fontSize="10" fontWeight="bold" textAnchor="middle">استجابة بصرية فورية (Zero Lag)</text>
              <text x="125" y="184" fill="#ecfdf5" fontSize="10" textAnchor="middle">تغيير الشاشة يتطابق بدقة مع الحالة</text>
            </g>
          </svg>
        </div>
      </div>

      {/* أزرار التبويب الثلاثية لاكتشاف تفاصيل المخرجات */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('visual')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'visual'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
              : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Monitor className="size-4" />
          <span>1. ماذا يرى المستخدم على الشاشة؟</span>
        </button>

        <button
          onClick={() => setActiveTab('why')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'why'
              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm'
              : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <HelpCircle className="size-4" />
          <span>2. لماذا ظهرت المخرجات بهذا الشكل؟ (السبب المعماري)</span>
        </button>

        <button
          onClick={() => setActiveTab('interactive')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'interactive'
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
              : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <MousePointerClick className="size-4" />
          <span>3. سلوك التفاعل والاستجابة الحية</span>
        </button>
      </div>

      {/* محتوى التبويب المختار مع تباعد رحب وخط مريح */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
        {/* الكبسولة 1: ماذا يرى المستخدم */}
        <div className={`p-5 rounded-2xl border transition-all duration-300 space-y-2.5 ${
          activeTab === 'visual'
            ? 'bg-cyan-950/30 border-cyan-500/50 ring-1 ring-cyan-500/20 shadow-lg'
            : 'bg-slate-950/60 border-slate-800/80'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
              <Monitor className="size-4" />
              <span>ماذا يرى المستخدم؟</span>
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300">
              Visual UI
            </span>
          </div>
          <p 
            className="text-slate-200 leading-relaxed font-sans text-pretty"
            style={{ fontSize: `${readingFontSize}px`, lineHeight: `${Math.round(readingFontSize * 1.65)}px` }}
          >
            {safeRender(visualWhat)}
          </p>
        </div>

        {/* الكبسولة 2: لماذا ظهرت بهذا الشكل */}
        <div className={`p-5 rounded-2xl border transition-all duration-300 space-y-2.5 ${
          activeTab === 'why'
            ? 'bg-purple-950/30 border-purple-500/50 ring-1 ring-purple-500/20 shadow-lg'
            : 'bg-slate-950/60 border-slate-800/80'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-purple-400 flex items-center gap-1.5">
              <HelpCircle className="size-4" />
              <span>لماذا ظهرت المخرجات هكذا؟</span>
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300">
              The Architectural Why
            </span>
          </div>
          <p 
            className="text-slate-200 leading-relaxed font-sans text-pretty"
            style={{ fontSize: `${readingFontSize}px`, lineHeight: `${Math.round(readingFontSize * 1.65)}px` }}
          >
            {safeRender(whyReason)}
          </p>
        </div>

        {/* الكبسولة 3: سلوك التفاعل */}
        <div className={`p-5 rounded-2xl border transition-all duration-300 space-y-2.5 ${
          activeTab === 'interactive'
            ? 'bg-emerald-950/30 border-emerald-500/50 ring-1 ring-emerald-500/20 shadow-lg'
            : 'bg-slate-950/60 border-slate-800/80'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <MousePointerClick className="size-4" />
              <span>سلوك التفاعل والاستجابة</span>
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300">
              Live Interaction
            </span>
          </div>
          <p 
            className="text-slate-200 leading-relaxed font-sans text-pretty"
            style={{ fontSize: `${readingFontSize}px`, lineHeight: `${Math.round(readingFontSize * 1.65)}px` }}
          >
            {safeRender(interactiveBehavior)}
          </p>
        </div>
      </div>

      {/* نصيحة المحترفين المعمارية للمخرجات */}
      <div className="bg-slate-950/80 border border-slate-800/90 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="text-base">💡</span>
          <span className="font-semibold">
            قاعدة الأداء للمخرجات: حافظ على بقاء دالة التصيير نقية (Pure Render)؛ أي تغيير في الشاشة يجب أن يكون نتيجة مباشرة لتغير الحالة أو الخصائص فقط.
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400 shrink-0">
          <CheckCircle2 className="size-3.5 text-emerald-400" />
          <span>React 19 Verified Output</span>
        </div>
      </div>
    </div>
  );
}
