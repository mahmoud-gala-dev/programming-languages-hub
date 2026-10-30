// src/data/sections/section19/topic6.js

export const topic6 = {
  id: "19.6",
  title: "تصحيح الأخطاء Debugging",
  description: "الدليل الشامل لفنون وتقنيات تصحيح واستكشاف الأخطاء في تطبيقات React الحديثة؛ إتقان استخدام Console المتقدم، نقاط التوقف (Breakpoints) في Chrome DevTools، تتبع الـ Props والـ State، فحص طلبات الشبكة، تفسير تحذيرات React الكلاسيكية، بناء وتطويق الأخطاء بـ Error Boundaries، صيد تسريبات الذاكرة، وحل معضلات الـ Hydration في الرندرة الخادمة.",
  subtopics: [
    {
      id: "19.6.a",
      title: "استخدام Console",
      englishTerm: "Advanced Console Debugging (كونسول ديبوجينغ)",
      description: "تجاوز الاستخدام البدائي لـ console.log واستغلال الترسانة الكاملة لكائن Console في المتصفح؛ تشمل `console.table()` لعرض المصفوفات والكائنات في جداول منسقة وأنيقة، و `console.group()` و `console.groupCollapsed()` لتجميع السجلات المترابطة، و `console.time()` و `console.timeEnd()` لقياس سرعة العمليات، و `console.trace()` لمعرفة مكدس الاستدعاءات (Call Stack).",
      analogy: "يشبه استخدام أجهزة القياس والفحص المتطورة في ورشة الصيانة بدلاً من مجرد النظر بالعين المجردة؛ تعطيك قراءات رقمية وجداول مقارنة دقيقة تحدد العطل فوراً.",
      whyItMatters: "يوفر ساعات من التشتت في قراءة مئات السطور المتراكمة في نافذة المطور؛ التنسيق والتجميع الذكي للبيانات يوضح المشكلة في ثوانٍ.",
      syntax: "console.table(usersArray);\nconsole.group('Auth Flow');\nconsole.time('render-time');\nconsole.timeEnd('render-time');\nconsole.groupEnd();",
      simpleExample: `// استيراد React مع استخدام تقنيات Console المتقدمة
import React from 'react';

export default function ConsolePowerDemo() {
  const users = [
    { id: 1, name: 'أحمد السعيد', role: 'مشرف', active: true },
    { id: 2, name: 'سارة خالد', role: 'محررة', active: false },
    { id: 3, name: 'محمود حسن', role: 'مشاهد', active: true }
  ];

  function handleInspect() {
    // 1. عرض البيانات في جدول تفاعلي منظم
    console.table(users);

    // 2. تجميع السجلات في مجموعة قابلة للطي
    console.groupCollapsed('🔍 تفاصيل الجلسة الحالية');
    console.log('المتصفح:', navigator.userAgent);
    console.log('اللغة:', navigator.language);
    console.log('توقيت الفحص:', new Date().toLocaleTimeString('ar-SA'));
    console.groupEnd(); // إغلاق المجموعة
  }

  return (
    <div className="p-4 bg-slate-900 text-white rounded-lg">
      <button 
        onClick={handleInspect}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded text-sm font-bold"
      >
        طباعة تقرير Console الاحترافي (افتح DevTools)
      </button>
    </div>
  );
}`,
      advancedExample: [
        "// نظام تسجيل أخطاء وتشخيص متقدم (Custom Logger Utility) يجمع التنسيق والقياس الزمني ومكدس التتبع",
        "export const logger = {",
        "  // طباعة مصفوفات أو كائنات في جدول ملون",
        "  table(label, data) {",
        "    console.group('📊 ' + label);",
        "    console.table(data);",
        "    console.groupEnd();",
        "  },",
        "  ",
        "  // تسجيل العمليات مع قياس زمن التنفيذ بالألوان",
        "  time(taskName, callback) {",
        "    const timerLabel = '⏱️ [Timer] ' + taskName;",
        "    console.time(timerLabel);",
        "    try {",
        "      return callback();",
        "    } finally {",
        "      console.timeEnd(timerLabel);",
        "    }",
        "  },",
        "",
        "  // رصد نقطة الاستدعاء ومسار الدوال السابق (Call Stack Trace)",
        "  traceOrigin(reason) {",
        "    console.group('📍 تتبع مصدر الاستدعاء: ' + reason);",
        "    console.trace(); // يطبع المكدس البرمجي بالكامل من السطر الأول",
        "    console.groupEnd();",
        "  },",
        "",
        "  // طباعة رسائل مخصصة بألوان وتنسيقات CSS جذابة في الكونسول",
        "  badge(category, message, color = '#38bdf8') {",
        "    console.log(",
        "      '%c ' + category + ' %c ' + message,",
        "      'background: ' + color + '; color: #000; font-weight: bold; border-radius: 4px; padding: 2px 4px;',",
        "      'color: #f8fafc; font-weight: normal;'",
        "    );",
        "  }",
        "};"
      ].join('\n'),
      output: "يظهر في شاشة مطور المتصفح سجل غني ومنظم بالألوان والجداول؛ يتيح للمطور فتح وإغلاق المجموعات ومعرفة زمن العمليات بدون فوضى.",
      commonMistakes: "ترك مئات نصوص `console.log` المبعثرة في كود الإنتاج النهائي؛ هذا لا يثقل الذاكرة فقط، بل قد يسرب بيانات حساسة (مثل بيانات المستخدمين أو التوكن) لأي شخص يفتح أدوات المطور في المتصفح.",
      bestPractices: "استخدم إعدادات مجمع الحزم (مثل `drop: ['console', 'debugger']` في Terser أو Esbuild الخاص بـ Vite) لحذف كافة عبارات console تلقائياً أثناء بناء نسخة الإنتاج النهائية (Build).",
      visualDiagram: "Console Methods Toolkit:\nconsole.table() ──► Clean tabular view with sortable columns\nconsole.group() ──► Collapsible nested hierarchy\nconsole.time()  ──► High-resolution microsecond timer\nconsole.trace() ──► Complete caller stack trace"
    },
    {
      id: "19.6.b",
      title: "استخدام Breakpoints",
      englishTerm: "Debugging with Breakpoints (نقاط التوقف البرمجية)",
      description: "التوقف اللحظي لتنفيذ كود JavaScript عند سطر معين لفحص قيم المتغيرات ونطاق الذاكرة (Scope) في تلك اللحظة بالذات. يتم إما برمجياً بكتابة كلمة `debugger;` في الكود، أو يدوياً بالنقر على رقم السطر في تبويب Sources في أدوات المطور (Chrome DevTools).",
      analogy: "يشبه زر الإيقاف المؤقت (Pause) في جهاز الفيديو؛ يوقف المشهد في جزء من الثانية لتتمكن من فحص تفاصيل الغرفة وملامح الوجوه دون أن تفوتك أي حركة سريعة.",
      whyItMatters: "يتفوق بمراحل على console.log؛ فهو يتيح لك فحص الشجرة بالكامل، والتنقل خطوة بخطوة (Step Over, Step Into, Step Out)، وتعديل قيم المتغيرات أثناء التوقف لمعرفة كيفية استجابة التطبيق.",
      syntax: "// كلمة التوقف البرمجية المدمجة في JavaScript:\ndebugger;\n// أو استخدام Conditional Breakpoint في تبويب Sources بالمتصفح",
      simpleExample: `// استيراد React مع زر يفعل نقطة التوقف البرمجية
import React, { useState } from 'react';

export default function DebuggerDemo() {
  const [total, setTotal] = useState(0);

  function handleCalculate(price, taxRate) {
    // ⚠️ كلمة debugger توقف تنفيذ المتصفح فوراً إذا كانت نافذة DevTools مفتوحة!
    debugger;

    const tax = price * taxRate;
    const finalPrice = price + tax;
    setTotal(finalPrice);
  }

  return (
    <div className="p-4 bg-slate-900 text-white rounded-lg">
      <button 
        onClick={() => handleCalculate(200, 0.15)}
        className="px-3 py-1.5 bg-amber-600 rounded text-xs font-bold"
      >
        تشغيل الحساب وتفعيل Breakpoint (افتح F12 أولاً)
      </button>
      <p className="mt-2 text-sm">النتيجة: {total} ر.س</p>
    </div>
  );
}`,
      advancedExample: [
        "// استعراض أنواع نقاط التوقف المتقدمة في Chrome DevTools وطرق تفعيلها",
        "export const BREAKPOINT_TYPES_GUIDE = [",
        "  {",
        "    type: 'Line-of-code Breakpoint',",
        "    howTo: 'انقر مباشرة على رقم السطر داخل تبويب Sources في DevTools.',",
        "    bestFor: 'فحص تنفيذ دالة خطوة بخطوة عند الشك في معادلة حسابية.'" ,
        "  },",
        "  {",
        "    type: 'Conditional Breakpoint',",
        "    howTo: 'انقر بزر الفأرة الأيمن على السطر واختر \"Add conditional breakpoint\" وضع شرطاً مثل: user.id === 991.',",
        "    bestFor: 'إيقاف التنفيذ فقط عندما يحدث شرط شاذ أو عند تكرار حلقة 10,000 مرة وتريد فحص الدورة الأخيرة.'" ,
        "  },",
        "  {",
        "    type: 'XHR/fetch Breakpoint',",
        "    howTo: 'في قسم XHR Breakpoints، أضف جزءاً من الرابط مثل: /api/checkout.',",
        "    bestFor: 'إيقاف الكود فور إرسال طلب شبكة محدد لمعرفة من أين تم استدعاؤه.'" ,
        "  },",
        "  {",
        "    type: 'DOM Mutation Breakpoint',",
        "    howTo: 'انقر بزر الفأرة الأيمن على عنصر في تبويب Elements واختر \"Break on -> Subtree modifications\".',",
        "    bestFor: 'معرفة أي سطر كود JavaScript قام بحذف أو تعديل عنصر في الصفحة فجأة.'" ,
        "  }",
        "];",
        "",
        "export function logBreakpointGuide() {",
        "  console.table(BREAKPOINT_TYPES_GUIDE);",
        "}"
      ].join('\n'),
      output: "يتجمد المتصفح في اللحظة الدقيقة لتنفيذ السطر، وتتحول الشاشة إلى لوحة فحص توضح قيم المتغيرات ونطاق الدوال، مما يسمح بالتنقل خطوة بخطوة (F10 و F11).",
      commonMistakes: "نسيان كلمة `debugger;` في ملفات الكود ورفعها إلى بيئة الإنتاج؛ إذا فتح أحد المستخدمين أدوات المطور سيتجمد التطبيق أمامه فجأة!",
      bestPractices: "استخدم نقاط التوقف الشرطية (Conditional Breakpoints) وسجلات التتبع السريعة (Logpoints) في المتصفح نفسه بدلاً من تلويث الكود المصدري بكلمات debugger.",
      visualDiagram: "DevTools Stepping Controls:\n[F8: Resume] ──► Continues execution until next breakpoint\n[F10: Step Over] ──► Runs current line without entering into functions\n[F11: Step Into] ──► Jumps inside the called function implementation\n[Shift+F11: Step Out] ──► Finishes current function and returns to caller"
    },
    {
      id: "19.6.c",
      title: "تتبع Props و State",
      englishTerm: "Tracking Props & State with React DevTools (تتبع الخصائص والحالة)",
      description: "استخدام إضافة React Developer Tools الرسمية لفحص شجرة المكونات الحية في المتصفح؛ تتيح لك اختيار أي مكوّن في الشاشة، واستعراض وتعديل قيمه الحالية (State و Props و Context) في الزمن الفعلي ومراقبة كيف تتغير الواجهة، بالإضافة إلى تفعيل ميزة تسليط الضوء على المكونات التي تعيد التصيير (Highlight updates).",
      analogy: "يشبه ارتداء نظارة الأشعة السينية (X-Ray) التي تريك ما بداخل كل صندوق مغلق أمامك دون الحاجة لفتحه أو كسره بمطرقة.",
      whyItMatters: "يحسم الجدل فوراً حول سبب عدم ظهور البيانات: هل المشكلة أن الـ Props لم تصل من المكون الأب، أم أنها وصلت بنجاح ولكن المكون الابن لا يعرضها كما ينبغي؟",
      syntax: "// في كونسول المتصفح عند اختيار مكوّن في React DevTools:\n$r // كائن المكون المختار حالياً مع كامل الـ Props والـ State!",
      simpleExample: `// مكوّن يستقبل خصائص متعددة ويدير حالة لتجربة فحصها في React DevTools
import React, { useState } from 'react';

export default function UserInspectorDemo({ role = 'طالب', permissions = ['READ'] }) {
  const [points, setPoints] = useState(100);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white space-y-2">
      <h3 className="font-bold text-sky-400">كارت المستخدم (افحصني في React DevTools)</h3>
      <p className="text-xs">الدور: {role}</p>
      <p className="text-xs">النقاط الحالية: {points}</p>
      <button 
        onClick={() => setPoints(p => p + 10)}
        className="px-2 py-1 bg-emerald-600 rounded text-xs"
      >
        إضافة 10 نقاط
      </button>
    </div>
  );
}`,
      advancedExample: [
        "// خطاف مخصص فائق الذكاء لتسجيل تغيرات الـ Props والـ State في الكونسول أثناء التطوير",
        "import { useEffect, useRef } from 'react';",
        "",
        "export function usePropsTracker(componentName, props) {",
        "  const prevProps = useRef(props);",
        "",
        "  useEffect(() => {",
        "    // فحص الفروق فقط في بيئة التطوير",
        "    if (process.env.NODE_ENV !== 'production') {",
        "      const changedKeys = Object.keys(props).filter(",
        "        key => prevProps.current[key] !== props[key]",
        "      );",
        "",
        "      if (changedKeys.length > 0) {",
        "        console.group('🔄 [Props Change Detected]: ' + componentName);",
        "        changedKeys.forEach(key => {",
        "          console.log(",
        "            key + ':',",
        "            'القديمة:', prevProps.current[key],",
        "            '➔ الجديدة:', props[key]",
        "          );",
        "        });",
        "        console.groupEnd();",
        "      }",
        "    }",
        "    // حفظ الخصائص للدورة القادمة",
        "    prevProps.current = props;",
        "  });",
        "}"
      ].join('\n'),
      output: "يمكنك في تبويب Components في React DevTools النقر على المكون ورؤية كافة خصائصه، وتعديل قيمة النقاط من 100 إلى 500 مباشرة من اللوحة لتشاهد تحديث الشاشة فوراً.",
      commonMistakes: "الخلط بين شجرة عناصر HTML العادية في تبويب Elements وبين شجرة مكونات React في تبويب Components؛ تبويب Elements يريك فقط وسوم الـ div و span المترجمة، بينما تبويب Components يريك المكونات الحقيقية بأسمائها وخطافاتها.",
      bestPractices: "استخدم متغير `$r` في كونسول المتصفح فور تحديد أي مكوّن في شجرة React DevTools للوصول المباشر لخصائصه وحالته وتجربة استدعاء دواله برمجياً.",
      visualDiagram: "React DevTools Inspection Tree:\n<App>\n  ├── <Navbar user={...} />\n  └── <DashboardFeed>\n        └── <ProductCard title=\"React Book\" price={50} /> ◄ [Selected: $r]\n              ├── Props: { title: 'React Book', price: 50 }\n              └── Hooks: State = { isFavorited: false }"
    },
    {
      id: "19.6.d",
      title: "فحص Network Requests",
      englishTerm: "Inspecting Network Requests (فحص طلبات الشبكة)",
      description: "استخدام تبويب Network في أدوات المطور لمراقبة وتحليل كافة الاتصالات الصادرة والواردة بين تطبيق React وخوادم الـ API؛ تشمل فحص ترويسات الطلب (Headers مثل Authorization Bearer)، ورمز الاستجابة (Status Code 200, 401, 500)، وجسم الطلب والرد (Payload & Response)، وحجم الملفات وزمن التأخير (Waterfall).",
      analogy: "يشبه فتح مظروف الرسالة البرمجية وفحص أختام البريد وطوابع الجمارك ومطالعة الورقة الداخلية للتأكد من أن الرسالة أُرسلت للعنوان الصحيح وبالمحتوى المطلوب.",
      whyItMatters: "يحسم فوراً أي نزاع بين مطور الواجهة ومطور الخادم (Frontend vs Backend): هل المشكلة أن التطبيق لم يرسل التوكن، أم أن الخادم رد برمز 500 مع رسالة خطأ داخلية؟",
      syntax: "// تصفية التبويب بالنوع:\n// اختر Fetch/XHR لعزل طلبات الـ API عن الصور وملفات التنسيق",
      simpleExample: `// مكوّن يقوم باستدعاء API لاختبار مراقبته في تبويب Network
import React, { useState } from 'react';

export default function NetworkInspectionDemo() {
  const [data, setData] = useState(null);
  const [statusText, setStatusText] = useState('');

  async function handleSendRequest() {
    setStatusText('جاري الإرسال...');
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        headers: {
          'X-Client-Version': '2026.1',
          'Authorization': 'Bearer sample_token_123'
        }
      });
      const json = await res.json();
      setData(json);
      setStatusText('اكتمل الطلب بكود: ' + res.status);
    } catch (e) {
      setStatusText('فشل الاتصال بالشبكة');
    }
  }

  return (
    <div className="p-4 bg-slate-900 text-white rounded-lg space-y-2">
      <button onClick={handleSendRequest} className="px-3 py-1.5 bg-sky-600 rounded text-xs font-bold">
        إرسال طلب HTTP وتتبعه في تبويب Network
      </button>
      <p className="text-xs text-sky-400">{statusText}</p>
      {data && <p className="text-xs text-slate-300">العنوان المستلم: {data.title}</p>}
    </div>
  );
}`,
      advancedExample: [
        "// دليل مهندس الواجهات لفحص واستكشاف أشهر أخطاء الشبكة في تبويب Network",
        "export const NETWORK_ERROR_DIAGNOSIS = [",
        "  {",
        "    symptom: 'Status: (failed) net::ERR_FAILED أو CORS error',",
        "    cause: 'خادم الـ Backend لا يسمح بالنطاق الحالي في ترويسة Access-Control-Allow-Origin.',",
        "    fix: 'تكوين CORS في السيرفر أو استخدام Vite Proxy محلياً لتجاوز حظر المتصفح.'" ,
        "  },",
        "  {",
        "    symptom: 'Status: 401 Unauthorized',",
        "    cause: 'رمز الدخول (Bearer Token) مفقود، أو غير صالح، أو انتهت مدة صلاحيته.',",
        "    fix: 'فحص ترويسة Authorization في تبويب Headers وتأكيد إرسال التوكن السليم.'" ,
        "  },",
        "  {",
        "    symptom: 'Status: 400 Bad Request',",
        "    cause: 'جسم الطلب (Payload) يحتوي على حقول ناقصة أو أنواع بيانات خاطئة ترفضها validation السيرفر.',",
        "    fix: 'افحص تبويب Payload وقارن الحقول مع وثائق الـ API (Swagger/Postman).'" ,
        "  },",
        "  {",
        "    symptom: 'Status: 500 Internal Server Error',",
        "    cause: 'انهيار برمجي غير معالج داخل كود الخادم الخلفي أو قاعدة البيانات.',",
        "    fix: 'افحص تبويب Response لقراءة Stack Trace السيرفر وتواصل مع مطور الـ Backend.'" ,
        "  }",
        "];",
        "",
        "export function printNetworkGuide() {",
        "  console.table(NETWORK_ERROR_DIAGNOSIS);",
        "}"
      ].join('\n'),
      output: "في تبويب Network، يظهر شريط الطلب ملوناً بالأحمر عند الفشل، وتكشف تبويبات Headers و Payload و Response عن كافة التفاصيل الخفية للطلب.",
      commonMistakes: "الافتراض بأن الطلب فشل بسبب عطل في كود React، دون فتح تبويب Network ورؤية أن السيرفر رد بالفعل برسالة واضحة: 'Email already exists' أو خطأ في التحقق.",
      bestPractices: "استخدم ميزة 'Copy as cURL' بالنقر بالزر الأيمن على أي طلب في تبويب Network؛ لتتمكن من تشغيل نفس الطلب مباشرة في سطر الأوامر أو Postman لعزله عن المتصفح.",
      visualDiagram: "Network Tab Inspection Flow:\n[Fetch/XHR filter] ──► Select Request ──► [Headers: Verify Authorization & Status]\n                                     ──► [Payload: Verify sent JSON body]\n                                     ──► [Response: Read returned server error payload]"
    },
    {
      id: "19.6.e",
      title: "تفسير React Warnings",
      englishTerm: "Interpreting React Console Warnings (تحذيرات ري-آكت)",
      description: "فهم وحل أشهر رسائل التحذير والإنذارات البرمجية التي تطلقها React في وضع التطوير؛ مثل: تحذير المفاتيح المفقودة 'Each child in a list should have a unique \"key\" prop'، وتحذير المكونات غير المنضبطة 'A component is changing an uncontrolled input to be controlled'، وتحذير تحديث المكونات المفككة، ومخالفات قواعد الخطافات (Rules of Hooks).",
      analogy: "يشبه لمبات التحذير في لوحة عدادات السيارة (مثل لمبة تغيير الزيت أو لمبة ضغط الإطارات)؛ السيارة قد تستمر في السير، ولكن تجاهل اللمبة الصفراء سيؤدي حتماً إلى تعطل المحرك لاحقاً.",
      whyItMatters: "تحذيرات React ليست مجرد نصائح شكلية؛ بل هي تنبيهات مبكرة عن أخطاء ستتسبب في بطء فادح أو تشوهات بصرية أو تسريبات للذاكرة إذا تم تجاهلها.",
      syntax: "// 1. تحذير الـ Key المفقود في القوائم:\n// Warning: Each child in a list should have a unique \"key\" prop.\n// الحل: استخدام معرف فريد مستقر:\n{items.map(item => <li key={item.id}>{item.name}</li>)}",
      simpleExample: `// مثال يوضح خطأ Uncontrolled to Controlled الكلاسيكي وكيفية إصلاحه
import React, { useState } from 'react';

export default function ControlledInputFix() {
  // ❌ خطأ شائع: القيمة الابتدائية undefined تجعل الحقل Uncontrolled في البداية ثم يتحول لـ Controlled
  // const [name, setName] = useState(undefined);

  // ✅ الإصلاح الصحيح: وضع قيمة نصية فارغة مسبقاً لمنع تحذير React
  const [name, setName] = useState('');

  return (
    <div className="p-4 bg-slate-900 text-white rounded-lg">
      <label className="block text-xs mb-1">اسم المستخدم:</label>
      <input 
        type="text"
        value={name} // قيمة مضبوطة ومحمية من البداية
        onChange={e => setName(e.target.value)}
        className="p-2 bg-slate-800 rounded border border-slate-700 text-white text-sm"
      />
    </div>
  );
}`,
      advancedExample: [
        "// قاموس الحلول الهندسية لأشهر 4 تحذيرات شائعة في بيئة React",
        "export const REACT_WARNINGS_ENCYCLOPEDIA = [",
        "  {",
        "    warning: 'Each child in a list should have a unique \"key\" prop',",
        "    whyItHappens: 'تكرار عناصر داخل map() بدون خاصية key أو استخدام فهرس المصفوفة index مع قائمة تدعم الفرز والحذف.',",
        "    solution: 'مرر معرفاً فريداً ومستقراً من كائن البيانات: key={item.id}.'",
        "  },",
        "  {",
        "    warning: 'A component is changing an uncontrolled input to be controlled',",
        "    whyItHappens: 'بدء حالة الحقل بقيمة null أو undefined ثم تحديثها بنص لاحقاً.',",
        "    solution: 'اجعل القيمة الابتدائية نصاً فارغاً دائماً: useState(\"\") أو استخدم (value || \"\").'",
        "  },",
        "  {",
        "    warning: 'React has detected a change in the order of Hooks called',",
        "    whyItHappens: 'استدعاء useState أو useEffect داخل شرط if، أو داخل حلقة تكرارية، أو بعد عبارة return مبكرة.',",
        "    solution: 'استدعِ كافة الـ Hooks دائماً في المستوى الأعلى للمكون (Top-level) قبل أي شروط أو إرجاع.'",
        "  },",
        "  {",
        "    warning: 'Cannot update a component while rendering a different component',",
        "    whyItHappens: 'استدعاء دالة setState لأحد المكونات العليا مباشرة داخل جسم تصيير مكون ابن بدلاً من وضعها داخل useEffect أو معالج حدث.',",
        "    solution: 'انقل دالة التحديث لتعمل داخل خطاف useEffect أو داخل معالج حدث مثل onClick.'",
        "  }",
        "];",
        "",
        "export function logWarningsHelp() {",
        "  console.table(REACT_WARNINGS_ENCYCLOPEDIA);",
        "}"
      ].join('\n'),
      output: "فهم أسباب التحذيرات والتعامل معها بحزم يحافظ على كونسول المتصفح نظيفاً بنسبة 100% ويمنع المشاكل الخفية في الذاكرة والأداء.",
      commonMistakes: "تجاهل التحذيرات الصفراء في الكونسول بدعوى أنها 'ليست أخطاء حمراء' والتطبيق يعمل؛ في كثير من الأحيان تكون هذه التحذيرات هي السبب الخفي وراء اختفاء عناصر أو بطء التمرير.",
      bestPractices: "اجعل هدفك في كل مشروع هو 'Zero Console Warnings'؛ وفعل إضافة ESLint الرسمية `eslint-plugin-react-hooks` لتنبهك في محرر الكود قبل حتى تشغيل المتصفح.",
      visualDiagram: "Warning to Resolution Path:\nConsole Warning ──► Identify Rule Violation (e.g., Uncontrolled Input)\n                      │\n                      ▼\nFix at Source (Provide default empty string: useState('')) ──► Clean Console & Stable State!"
    },
    {
      id: "19.6.f",
      title: "التعامل مع Error Boundaries",
      englishTerm: "React Error Boundaries (حواجز صيد الأخطاء)",
      description: "آلية دفاعية مدمجة في React تقوم باصطياد أخطاء JavaScript غير المتوقعة في أي مكان داخل شجرة المكونات الفرعية، وتسجيل تلك الأخطاء، وعرض واجهة بديلة ودية (Fallback UI) بدلاً من انهيار التطبيق واختفائه وتحوله لشاشة بيضاء فارغة للمستخدم.",
      analogy: "يشبه قواطع الكهرباء الآلية (Circuit Breakers) في منزلك؛ إذا حدث قِصر كهربائي في فيش المطبخ، يفصل قاطع المطبخ فقط، بينما تستمر الإضاءة والثلاجة وغرفة الجلوس في العمل بأمان.",
      whyItMatters: "يحمي تجربة المستخدم؛ فإذا فشل مكوّن تعليقات صغير في أسفل الصفحة، لا يجب أن تنهار صفحة المنتج بأكملها، بل تظهر رسالة صغيرة تفيد بتعذر تحميل التعليقات مع بقاء زر الشراء يعمل بنجاح.",
      syntax: "class ErrorBoundary extends React.Component {\n  static getDerivedStateFromError(error) { return { hasError: true }; }\n  componentDidCatch(error, errorInfo) { logToSentry(error, errorInfo); }\n  render() { return this.state.hasError ? <Fallback /> : this.props.children; }\n}",
      simpleExample: `// استيراد React مع مكوّن صائد الأخطاء الكلاسيكي
import React, { Component } from 'react';

export class SimpleErrorBoundary extends Component {
  state = { hasError: false };

  // 1. تحديث الحالة لعرض واجهة الـ Fallback في الدورة القادمة
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // 2. تسجيل تفاصيل الخطأ ومكدس المكونات
  componentDidCatch(error, errorInfo) {
    console.error('تم اصطياد خطأ عبر Error Boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-rose-950 border border-rose-600 rounded text-rose-200 text-sm">
          ⚠️ عذراً، تعذر عرض هذا الجزء من الصفحة.
        </div>
      );
    }
    return this.props.children;
  }
}`,
      advancedExample: [
        "// مكوّن Error Boundary مؤسسي فائق المرونة مع دعم إعادة المحاولة وإرسال التقارير لخدمة Sentry السحابية",
        "import React, { Component } from 'react';",
        "",
        "export class EnterpriseErrorBoundary extends Component {",
        "  state = { hasError: false, error: null };",
        "",
        "  static getDerivedStateFromError(error) {",
        "    return { hasError: true, error };",
        "  }",
        "",
        "  componentDidCatch(error, errorInfo) {",
        "    // تسجيل الخطأ وإرساله لخوادم المراقبة والتحليلات (مثل Sentry / Datadog)",
        "    console.warn('[Telemetry Report Sent]:', error.message, errorInfo.componentStack);",
        "  }",
        "",
        "  handleReset = () => {",
        "    // إعادة ضبط الحالة لمنح المستخدم فرصة إعادة المحاولة بعد إصلاح الخلل",
        "    this.setState({ hasError: false, error: null });",
        "    if (this.props.onReset) this.props.onReset();",
        "  };",
        "",
        "  render() {",
        "    if (this.state.hasError) {",
        "      // إذا تم تمرير واجهة بديلة مخصصة كـ Prop يتم استخدامها",
        "      if (this.props.fallback) {",
        "        return this.props.fallback({ error: this.state.error, reset: this.handleReset });",
        "      }",
        "",
        "      // الواجهة البديلة الافتراضية الأنيقة",
        "      return (",
        "        <div className='p-6 bg-slate-900 border border-rose-500/40 rounded-2xl text-center space-y-4 shadow-xl'>",
        "          <div className='w-12 h-12 mx-auto rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xl font-bold'>",
        "            !",
        "          </div>",
        "          <div>",
        "            <h3 className='text-base font-bold text-white'>حدث خطأ غير متوقع في هذه النافذة</h3>",
        "            <p className='text-xs text-slate-400 mt-1'>",
        "              {this.state.error?.message || 'يرجى المحاولة مرة أخرى لاحقاً.'}",
        "            </p>",
        "          </div>",
        "          <button",
        "            onClick={this.handleReset}",
        "            className='px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold transition-colors'",
        "          >",
        "            إعادة محاولة العرض",
        "          </button>",
        "        </div>",
        "      );",
        "    }",
        "    return this.props.children;",
        "  }",
        "}"
      ].join('\n'),
      output: "بدلاً من أن يرى المستخدم شاشة بيضاء فارغة ومحبطة عند حدوث أي استثناء، يرى بطاقة خطأ أنيقة تشرح المشكلة مع زر لإعادة المحاولة ويبقى باقي الموقع يعمل بكفاءة.",
      commonMistakes: "الاعتقاد بأن Error Boundary تلتقط أخطاء معالجات الأحداث (Event Handlers مثل onClick)؛ Error Boundaries تلتقط فقط أخطاء مرحلة التصيير (Render Phase ودورة الحياة)، بينما أخطاء الأحداث يجب الإمساك بها بـ `try/catch` العادية.",
      bestPractices: "ضع حواجز الأخطاء في مستويات متعددة وذكية في التطبيق: حاجز عام أعلى التطبيق، وحواجز فرعية حول الميزات المستقلة (مثل الشات، والرسوم البيانية، والتعليقات).",
      visualDiagram: "Granular Error Boundary Isolation:\n<App>\n  ├── <Navbar /> (Works fine)\n  ├── <EnterpriseErrorBoundary>\n  │     └── <BrokenWidget /> ──► CRASHES! ──► Shows local Fallback card (Isolated!)\n  └── <Footer /> (Works fine)"
    },
    {
      id: "19.6.g",
      title: "تتبع Memory Leaks",
      englishTerm: "Hunting Memory Leaks with DevTools (صيد تسريبات الذاكرة)",
      description: "تقنيات اكتشاف وحل تسريبات الذاكرة المستعصية؛ استخدام لوحة الذاكرة (Memory Panel) في Chrome DevTools لأخذ لقطات من مكدس الذاكرة (Heap Snapshots)، وتسجيل تخصيص الذاكرة مع الوقت (Allocation Instrumentation on Timeline)، ورصد الكائنات المعلقة (Detached DOM Nodes) والمستمعين الذين لم يتم تحريرهم.",
      analogy: "يشبه استخدام جهاز الكشف عن تسرب الغاز في المنزل؛ تمرر الحساس على الأنابيب والوصلات حتى يصدر صوتاً في النقطة التي يتسرب منها الغاز بالضبط.",
      whyItMatters: "تسريب الذاكرة يجعل التطبيق يبدو سريعاً في الدقائق الأولى، ولكن بعد ساعة من الاستخدام يبدأ المتصفح في التباطؤ واستهلاك الرامات حتى يتجمد بالكامل.",
      syntax: "// الخطوات في DevTools:\n// Memory Panel ➔ Select 'Heap snapshot' ➔ Take Snapshot 1 ➔ Perform Action ➔ Take Snapshot 2 ➔ Filter by 'Objects allocated between snapshots'",
      simpleExample: `// مثال لمكون يحتوي على تسريب ذاكرة شهير (مستمع أحداث نافذة بدون دالة تنظيف)
import React, { useEffect, useState } from 'react';

// ❌ مكوّن يسرب الذاكرة
function LeakyComponent() {
  useEffect(() => {
    // إضافة مستمع حدث في كل مرة يُركب فيها المكون
    const onResize = () => console.log('نافذة المتصفح تغيرت');
    window.addEventListener('resize', onResize);

    // ⚠️ نسيان دالة التنظيف: المستمع سيظل معلقاً في الذاكرة للأبد حتى بعد حذف المكون!
  }, []);

  return <div>مكون يسرب الذاكرة</div>;
}

// ✅ الإصلاح الصحيح
export function CleanComponent() {
  useEffect(() => {
    const onResize = () => console.log('نافذة المتصفح تغيرت');
    window.addEventListener('resize', onResize);

    // إرجاع دالة التنظيف الإلزامية
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return <div>مكون نظيف محرر الموارد</div>;
}`,
      advancedExample: [
        "// دليل مهندس الواجهات لاكتشاف العقد المعلقة (Detached DOM Nodes) في لوحة Memory",
        "export const MEMORY_LEAK_CHECKLIST = [",
        "  {",
        "    step: 1,",
        "    action: 'أخذ اللقطة المرجعية الأساسية (Baseline Snapshot)',",
        "    detail: 'افتح DevTools ➔ تبويب Memory ➔ خذ Heap Snapshot 1 والتطبيق في حالته الأولية.'",
        "  },",
        "  {",
        "    step: 2,",
        "    action: 'محاكاة إجراء المستخدم المتكرر',",
        "    detail: 'افتح النافذة المنبثقة واغلقها 10 مرات متتالية (Modal Open/Close Cycle).'",
        "  },",
        "  {",
        "    step: 3,",
        "    action: 'تفعيل جمع القمامة القسري (Force Garbage Collection)',",
        "    detail: 'انقر على أيقونة سلة المهملات (Collect garbage) في أعلى لوحة الأداء أو الذاكرة ليتخلص المتصفح من الكائنات المؤقتة.'",
        "  },",
        "  {",
        "    step: 4,",
        "    action: 'أخذ اللقطة الثانية والمقارنة (Comparison Snapshot)',",
        "    detail: 'خذ Heap Snapshot 2، واختر وضع العرض Comparison، وابحث عن كلمة \"Detached\" في خانة الفلترة.'",
        "  },",
        "  {",
        "    step: 5,",
        "    action: 'تحليل شجرة الاحتفاظ (Retainer Tree)',",
        "    detail: 'إذا وجدت Detached HTMLDivElement، انظر لأسفل اللوحة لتعرف المتغير أو الـ Closure الذي لا يزال يحتفظ بمرجعه.'",
        "  }",
        "];",
        "",
        "export function printMemoryChecklist() {",
        "  console.table(MEMORY_LEAK_CHECKLIST);",
        "}"
      ].join('\n'),
      output: "تكشف لوحة الذاكرة عن الكائنات المحتجزة التي فشل محرك جمع القمامة (Garbage Collector) في تحريرها بسبب وجود مراجع نشطة تشير إليها.",
      commonMistakes: "تخزين مراجع لعناصر الـ DOM داخل مصفوفات عامة أو كائنات في النطاق الخارجي (Global Window Scope)؛ هذا يمنع المتصفح تماماً من تحريرها من الرام حتى لو حُذفت من شاشة العرض.",
      bestPractices: "تأكد من تنظيف كافة الاشتراكات، وإلغاء المؤقتات (clearInterval)، وفصل مستمعي الأحداث، وإلغاء طلبات الشبكة بـ AbortController في دالة الـ Cleanup لـ useEffect.",
      visualDiagram: "Detached DOM Node Detection:\nSnapshot 1 (Base: 12 MB) ──► User toggles Modal 10 times ──► Force GC ──► Snapshot 2 (18 MB ⚠️)\n                                                                           │\n                                                                           ▼\nRetainer Tree reveals: `window.activeModals` array still holding 10 detached <div> elements!"
    },
    {
      id: "19.6.h",
      title: "حل مشكلات Hydration",
      englishTerm: "Fixing Hydration Mismatches (مشكلات الهايدريشن)",
      description: "مشكلة عدم تطابق الـ Hydration (Hydration Error) تحدث في تطبيقات الرندرة في جانب الخادم (SSR / SSG مثل Next.js أو Remix أو Vite SSR)؛ عندما يكون كود الـ HTML الأولي الناتج عن السيرفر مختلفاً عن أول شجرة Virtual DOM ينتجها متصفح العميل (Client)، مما يتسبب في تحذير أحمر ووميض بصري وإعادة رسم كاملة للواجهة.",
      analogy: "يشبه استلام تمثال جبسي جاهز تم صبه في المصنع (Server HTML)، ولكن عندما يأتي النحات في المعرض ليضع اللمسات الأخيرة (Client Hydration)، يكتشف أن يد التمثال في المصنع كانت مرفوعة بينما رسمته الأصلية تطلب أن تكون اليد موضوعة في الجيب؛ فيضطر لتكسير اليد وبنائها من الصفر مجدداً.",
      whyItMatters: "تتسبب أخطاء الـ Hydration في تدمير أداء الصفحة وزيادة زمن التفاعل (INP) وفقدان مزايا الرندرة السريعة القادمة من السيرفر.",
      syntax: "// الحل الكلاسيكي لعدم التطابق: استخدام خطاف التأكد من التركيب على العميل\nconst [isMounted, setIsMounted] = useState(false);\nuseEffect(() => setIsMounted(true), []);\nif (!isMounted) return null;",
      simpleExample: `// مثال يوضح خطأ عدم التطابق بسبب استخدام التاريخ أو كائنات المتصفح
import React, { useState, useEffect } from 'react';

// ❌ مكوّن يسبب Hydration Error لأن ساعة السيرفر تختلف عن ساعة متصفح العميل!
// function BadHydrationTime() {
//   return <div>التوقيت: {new Date().toLocaleTimeString()}</div>;
// }

// ✅ الإصلاح الصحيح: تأجيل عرض البيانات الخاصة بالعميل لحين اكتمال مرحلة الـ Mount
export default function SafeHydrationComponent() {
  const [clientTime, setClientTime] = useState(null);

  useEffect(() => {
    // خطاف useEffect لا يُنفذ إلا على المتصفح (Client-only)
    setClientTime(new Date().toLocaleTimeString('ar-SA'));
  }, []);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      <h4 className="font-bold text-sky-400">توقيت متوافق مع معايير الـ Hydration</h4>
      <p className="text-sm text-slate-300">
        الوقت: {clientTime || 'جاري المزامنة مع جهازك...'}
      </p>
    </div>
  );
}`,
      advancedExample: [
        "// خطاف احترافي عام useIsMounted وحلول للأسباب الشائعة لعدم تطابق الـ Hydration",
        "import { useState, useEffect } from 'react';",
        "",
        "// خطاف مخصص للتأكد من اكتمال الـ Hydration في جانب العميل",
        "export function useIsClient() {",
        "  const [isClient, setIsClient] = useState(false);",
        "  useEffect(() => {",
        "    setIsClient(true);",
        "  }, []);",
        "  return isClient;",
        "}",
        "",
        "// قائمة بالأسباب الـ 3 الأكثر شيوعاً لأخطاء Hydration وحلولها الصارمة",
        "export const HYDRATION_CAUSES_AND_FIXES = [",
        "  {",
        "    cause: '1. استخدام كائنات نافذة المتصفح مثل window أو localStorage أثناء الـ Render الأولي',",
        "    error: 'Text content does not match server-rendered HTML',",
        "    fix: 'لا تقرأ من localStorage في القيمة الابتدائية لـ useState؛ انقل القراءة داخل useEffect أو استخدم useIsClient()'",
        "  },",
        "  {",
        "    cause: '2. خطأ في دلالات وسوم HTML غير الصالحة (Invalid HTML Nesting)',",
        "    error: 'Hydration failed because the initial UI does not match',",
        "    fix: 'تأكد من عدم وضع وسم <p> بداخل وسم <p> آخر، أو وضع وسم <div> داخل وسم <p>، أو وضع <tr> مباشرة بدون <tbody> لأن المتصفح يقوم بتصحيحها تلقائياً ويغير الشجرة!'" ,
        "  },",
        "  {",
        "    cause: '3. استخدام التواريخ أو العشوائية Math.random() في الرندر',",
        "    error: 'Prop href or text did not match between server and client',",
        "    fix: 'ثبت البذور العشوائية (Seed) أو استخدم خاصية suppressHydrationWarning={true} على العنصر النصي الحرج.'" ,
        "  }",
        "];"
      ].join('\n'),
      output: "يقوم التطبيق برسم الـ HTML القادم من الخادم بدون وميض، وعند تفعيل كود React على المتصفح تتطابق الشجرتان بنسبة 100% دون أي تحذير أحمر في الكونسول.",
      commonMistakes: "وضع وسوم غير متوافقة في الـ HTML مثل كتابة `<div>` داخل `<p>`؛ يقوم المتصفح تلقائياً بإغلاق فقرة الـ `<p>` وإخراج الـ `<div>` مما يجعل شجرة الـ DOM تختلف عن شجرة React ويتسبب في خطأ Hydration معقد!",
      bestPractices: "استخدم دائماً كود HTML صالحاً دلالياً، واستخدم `suppressHydrationWarning={true}` فقط للعناصر النصية الحتمية التغير مثل التاريخ والوقت الحقيقي.",
      visualDiagram: "Hydration Mismatch Lifecycle:\nServer renders:  <div>مرحباً بك (الوضع الفاتح)</div>\nClient evaluates: <div>مرحباً بك (الوضع الداكن من localStorage)</div>\n                     │\n                     ▼\nMISMATCH DETECTED! ──► Throws Hydration Error ──► Hard Re-render (Drops Performance!)"
    }
  ],
  quizzes: [
    {
      id: "q19.6.1",
      question: "ما الفرق الأساسي بين console.log() و console.table()؟",
      options: [
        "console.table تعمل فقط مع قواعد بيانات SQL.",
        "console.table تعرض المصفوفات والكائنات في جدول بصري منسق بأعمدة قابلة للترتيب، مما يجعل قراءة مئات السجلات أسهل بكثير من console.log العادية.",
        "console.log تقوم بحذف المتغيرات من الذاكرة.",
        "console.table تمنع حدوث الأخطاء في الكود."
      ],
      correctAnswer: 1,
      explanation: "توفر دالة console.table طريقة عرض جدولية شديدة الوضوح للمصفوفات والكائنات المعقدة مع أسماء الخصائص كأعمدة وفهارس مرتبة."
    },
    {
      id: "q19.6.2",
      question: "ما هي الأخطاء التي تستطيع حواجز الأخطاء (React Error Boundaries) اصطيادها ومعالجتها؟",
      options: [
        "أخطاء معالجات الأحداث مثل onClick.",
        "أخطاء استدعاءات الشبكة غير المتزامنة داخل fetch.",
        "الأخطاء غير المتوقعة التي تحدث أثناء مرحلة التصيير (Render Phase)، وفي دوال دورة حياة المكونات، وبناء شجرة المكونات الفرعية.",
        "أخطاء الخادم الخلفي (Backend)."
      ],
      correctAnswer: 2,
      explanation: "Error Boundaries صُممت خصيصاً لحماية شجرة المكونات البصرية واصطياد الأخطاء التي تحدث أثناء مرحلة الرندر ودورات الحياة، بينما لا تلتقط أخطاء الأحداث أو الـ async fetch."
    },
    {
      id: "q19.6.3",
      question: "ما هو السبب الأكثر شيوعاً لأخطاء عدم تطابق الـ Hydration (Hydration Mismatch) في تطبيقات SSR؟",
      options: [
        "استخدام ألوان CSS غير متناسقة.",
        "اختلاف محتوى الـ HTML الناتج عن الخادم عن أول محتوى ينتجه العميل؛ مثل قراءة localStorage فوراً أثناء الرندر، أو استخدام الوقت الحالي new Date()، أو وضع وسوم HTML غير متوافقة مثل <div> داخل <p>.",
        "تسمية ملفات المشروع بحروف كبيرة.",
        "استخدام لغة جافاسكربت بدلاً من بايثون."
      ],
      correctAnswer: 1,
      explanation: "تتطلب عملية الـ Hydration أن تكون شجرة الـ Virtual DOM الناتجة في أول دورة تصيير للعميل مطابقة 100% لكود الـ HTML القادم من السيرفر، وأي اختلاف بينهما يُفجر خطأ الـ Hydration."
    }
  ],
  exercise: {
    title: "تمرين عملي: بناء مكوّن صائد أخطاء مع واجهة مخصصة وزر إعادة المحاولة",
    description: "قم بإنشاء مكوّن SafeWidgetBoundary يرث من React.Component، يلتقط الأخطاء في المكونات الفرعية ويعرض كارت تنبيه أحمر أنيق يحتوي على نص رسالة الخطأ وزر 'إعادة محاولة العرض' يقوم بإعادة تعيين الحالة لتجربة الرندر مجدداً.",
    hints: [
      "طبق static getDerivedStateFromError لتحديث { hasError: true, error }.",
      "طبق componentDidCatch لتسجيل الخطأ.",
      "وفر دالة resetError تقوم بـ setState({ hasError: false, error: null })."
    ],
    solution: `import React, { Component } from 'react';

export class SafeWidgetBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('SafeWidgetBoundary caught:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-rose-950/80 border border-rose-600 rounded-xl text-rose-200 text-sm space-y-3">
          <p className="font-bold">⚠️ تعذر عرض هذا العنصر التفاعلي.</p>
          <p className="text-xs text-rose-400 font-mono">السبب: {this.state.error?.message}</p>
          <button
            onClick={this.handleReset}
            className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded text-xs font-semibold"
          >
            إعادة محاولة العرض
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}`
  },
  infographic: {
    title: "ترسانة تصحيح الأخطاء واستكشاف الأعطال في React",
    subtitle: "الدليل الشامل للسيطرة على الأخطاء من الكونسول وحتى حواجز الأمان",
    steps: [
      { step: "1", title: "Console & Breakpoints", desc: "استخدام console.table و console.group ونقاط التوقف الشرطية في DevTools لفحص السلوك خطوة بخطوة." },
      { step: "2", title: "React DevTools & Network", desc: "تتبع قيم الـ Props والـ State الحية وفحص ترويسات وجسم طلبات الـ API في تبويب Network." },
      { step: "3", title: "Error Boundaries", desc: "بناء حواجز دفاعية لحماية التطبيق من الانهيار للشاشة البيضاء وعرض واجهات بديلة مع زر المحاولة." },
      { step: "4", title: "Memory & Hydration", desc: "صيد تسريبات الذاكرة في الـ Heap وتحقيق التطابق الدلالي لمنع أخطاء الـ Hydration في الرندرة الخادمة." }
    ]
  }
};
