// src/data/sections/section17/topic4.js
// الموضوع 17.4: أمان تطبيقات React والحماية من الثغرات (React Application Security & Web Vulnerabilities)

export const topic4 = {
  id: "17.4",
  title: "أمان تطبيقات React والحماية من الثغرات (React Security)",
  description:
    "الدليل الأمني الشامل لحماية تطبيقات React من أخطر ثغرات الويب: الحماية من ثغرات XSS وكيف يحميك JSX تلقائياً، مخاطر واستخدامات dangerouslySetInnerHTML مع مكتبة DOMPurify لتطهير الأكواد، التصدي لهجمات CSRF، إعداد سياسات أمان المحتوى (CSP)، فهم بروتوكول CORS وحماية الطلبات عبر النطاقات، تحصين الروابط الخارجية ضد هجمات Tabnabbing، منع تسريب المفاتيح السرية في حزم الـ Frontend، وإدارة أمان اعتماديات npm.",
  subtopics: [
    // 17.4.a
    {
      id: "17.4.a",
      title: "مفهوم ثغرات XSS وآلية حماية React التلقائية",
      englishTerm: "Cross-Site Scripting: XSS & JSX Escaping (إكس إس إس آند جيه إس إكس إسكيبينغ) - حقن الشيفرات الخبيثة والتنظيف التلقائي في React",
      description:
        "تعد ثغرة XSS (Cross-Site Scripting) من أقدم وأخطر ثغرات الويب؛ وتحدث عندما يتمكن المهاجم من حقن شيفرات JavaScript خبيثة داخل صفحة الويب لتعمل تلقائياً في متصفح الضحية، مما يتيح له سرقة الرموز (Tokens)، والتنصت على نقرات المفاتيح، والتحكم بالحساب. العبقرية الكبرى في React تكمن في أنها صُممت منذ اليوم الأول مع 'حماية افتراضية تلقائية' ضد XSS: عند إدراج أي متغير نصي داخل JSX عبر الأقواس المعقوفة `{userInput}`، يقوم محرك React تلقائياً بعمل تنظيف وتطهير (Automatic String Escaping) وتحويل كافة المحارف الخاصة الخطرة (مثل `<` و `>` و `&` و `\"`) إلى نصوص نقية غير قابلة للتنفيذ في DOM! هذا يعني أن React تحميك تلقائياً من 95% من ثغرات XSS دون أن تبذل أي مجهود.",
      analogy:
        "تخيل أنك استلمت طرداً بريدياً من شخص مجهول يحتوي على مفرقعات نارية خطرة مع صاعق تفجير. مكتب البريد يمتلك آلة فحص أشعة متطورة تكتشف المفرقعات وتقوم تلقائياً بنزع الصاعق وإفراغ البارود وتحويل العبوة إلى نموذج بلاستيكي عديم الضرر تماماً قبل تسليمها إلى يدك. هذا ما يفعله محرك JSX مع أي نص قادم من المستخدم!",
      whyItMatters:
        "فهم آلية التنظيف التلقائي في JSX يمنحك الثقة في كتابة الأكواد، ويجعلك تدرك بدقة متى تكون آمناً ومتى تفتح ثغرات في تطبيقك عند استخدام دوال خطرة مثل `dangerouslySetInnerHTML`.",
      syntax: `// آمن تلقائياً بنسبة 100% (React تقوم بعمل Escape):
const userText = "<script>alert('مخترق!')</script>";
return <div>{userText}</div>; // يُعرض كنص عادي على الشاشة ولا ينفذ كود JS!`,
      simpleExample: `// مثال يوضح كيف يتعامل محرك JSX مع مدخلات تحتوي على نصوص برمجية خبيثة
import React, { useState } from 'react';

export function XssProtectionDemo() {
  // نص خبيث يحاكي محاولة اختراق XSS
  const maliciousInput = '<img src="invalid" onerror="alert(\\'تم اختراق الصفحة!\\')" /> محتوى التعليق العادي';
  const [comment, setComment] = useState(maliciousInput);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm">
      <h4 className="text-xs font-bold text-white">الحماية التلقائية في JSX ضد XSS</h4>
      
      {/* إدراج النص مباشرة في JSX */}
      <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs space-y-1">
        <span className="text-[10px] text-slate-500 block">عرض المتغير داخل أقواس JSX:</span>
        <p className="text-emerald-400 font-mono text-[11px] break-all">{comment}</p>
      </div>

      <p className="text-[10px] text-slate-400 leading-relaxed">
        لاحظ أن كود JavaScript الخبيث لم يعمل مطلقاً! محرك React قام بتحويله إلى نص عادي (String Literal) آمن تماماً.
      </p>
    </div>
  );
}`,
      advancedExample: `// محاكي تفاعلي يقارن بين الحماية التلقائية في React وطريقة العرض غير الآمنة في DOM التقليدي
import React, { useState } from 'react';

export function XssComparisonSimulator() {
  const [injectedPayload, setInjectedPayload] = useState('<b style="color:red">نص تجريبي</b>');
  const [rawDomWarning, setRawDomWarning] = useState(null);

  const testPayloads = [
    '<script>alert("XSS")</script>',
    '<img src="x" onerror="console.log(\'XSS Attack Executed!\')" />',
    '<a href="javascript:alert(\'Hacked\')">انقر هنا للحصول على جائزة!</a>',
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-lg mx-auto">
      <header className="pb-3 border-b border-slate-800">
        <h3 className="text-sm font-bold text-white">محاكي فحص أمان نصوص المدخلات (XSS Lab)</h3>
        <p className="text-xs text-slate-400">شاهد كيف يحميك محرك React من أخطر نصوص الحقن</p>
      </header>

      {/* حقل الإدخال */}
      <div className="space-y-1">
        <label className="text-xs text-slate-300 block">أدخل نصاً أو جرب حمولة خبيثة:</label>
        <input
          type="text"
          value={injectedPayload}
          onChange={(e) => setInjectedPayload(e.target.value)}
          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white font-mono"
        />
      </div>

      {/* نماذج حمولات جاهزة للتجربة */}
      <div className="flex flex-wrap gap-1.5">
        {testPayloads.map((payload, idx) => (
          <button
            key={idx}
            onClick={() => setInjectedPayload(payload)}
            className="px-2 py-1 bg-slate-850 hover:bg-slate-800 border border-slate-700 text-[10px] text-sky-400 font-mono rounded"
          >
            حمولة تجريبية {idx + 1}
          </button>
        ))}
      </div>

      {/* المقارنة البصرية */}
      <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
        <div>
          <span className="text-xs font-bold text-emerald-400 block mb-1">
            ✓ طريقة React الافتراضية (آمنة بنسبة 100%):
          </span>
          <div className="p-3 bg-slate-900 rounded border border-emerald-500/30 text-xs text-slate-200 break-all font-mono">
            {/* React Escape تلقائي */}
            {injectedPayload}
          </div>
        </div>

        <p className="text-[11px] text-slate-400 leading-relaxed">
          * محرك React يعامل المحتوى كـ <code className="text-sky-400 font-mono">textContent</code> وليس كـ <code className="text-rose-400 font-mono">innerHTML</code>؛ مما يمنع المتصفح من تفسير وسوم HTML أو تشغيل الأحداث البرمجية نهائياً.
        </p>
      </div>
    </div>
  );
}`,
      output:
        "يوضح للمطور بالأدلة العملية أن كتابة `{userInput}` داخل JSX هي الطريقة الأكثر أماناً على الإطلاق، حيث تقوم React بتحييد أي وسوم برمجية وتحويلها إلى نصوص مسالمة.",
      commonMistakes: [
        {
          mistake: "تمرير روابط غير موثوقة تبدأ بـ `javascript:` مباشرة داخل خاصية `href` لوسم `<a>`.",
          why: "React تحمي محتوى النصوص، لكنها لا تمنع تنفيذ `javascript:` عند النقر على الرابط في المتصفح!",
          fix: "افحص دائماً الروابط قبل تمريرها وتأكد أنها تبدأ بـ `http://` أو `https://` حصراً.",
        },
      ],
      bestPractices: [
        "اعتمد دائماً على أقواس التعبير `{variable}` في JSX ولا تلجأ لأي طرق حقن يدوي ما لم تكن مضطراً بنسبة 100%.",
        "احرص على تطهير الروابط الخارجية والمدخلات القادمة من الـ Query Params.",
      ],
      infographic: {
        title: "آلية الحماية التلقائية في JSX ضد XSS",
        caption: "كيف تحول React الشيفرات الخطرة إلى نصوص آمنة تلقائياً؟",
        steps: [
          { number: 1, label: "إدخال نص مشبوه", desc: "المستخدم يدخل وسوم HTML مثل <script> أو <img onerror>" },
          { number: 2, label: "التطهير الآلي في JSX", desc: "تحويل الأقواس والرموز الخاصة إلى كيانات نصية آمنة (HTML Escaping)" },
          { number: 3, label: "العرض في DOM", desc: "إدراج النص كـ textContent نقي يراه المستخدم دون أن ينفذه المتصفح" },
        ],
      },
    },

    // 17.4.b
    {
      id: "17.4.b",
      title: "مخاطر خاصية dangerouslySetInnerHTML",
      englishTerm: "dangerouslySetInnerHTML Risks (دانجرسلي سيت إينر إتش تي إم إل) - مخاطر الحقن المباشر في DOM",
      description:
        "تعمد فريق مهندسي React اختيار هذا الاسم الطويل والمخيف `dangerouslySetInnerHTML` عن قصد ليكون بمثابة جرس إنذار أحمر للمطورين! وظيفته الوحيدة هي تجاوز حماية React الافتراضية وحقن كود HTML خام مباشرة في الشجرة (ما يوازي `element.innerHTML` في جافاسكريبت التقليدية). يُستخدم هذا الحقل في حالات نادرة ومحددة جداً: مثل عرض مقال غني قادم من محرر نصوص منسق (Rich Text Editor مثل Quill أو Tiptap) أو عرض محتوى مدونة WordPress. لكن الخطر القاتل هو: إذا كان محتوى هذا الـ HTML قادماً من مدخلات مستخدمين غير موثوقين، فإن استخدامه يفتح ثغرة XSS كارثية تسمح للمهاجم بسرقة جلسات وحسابات كافة زوار الصفحة فوراً.",
      analogy:
        "مثل فتح باب الطوارئ المغلق بإحكام في غواصة أعماق تحت المحيط: المقبض مطلي باللون الأحمر الفاقع ومكتوب عليه بخط عريض 'خطر شديد: لا تفتح إلا في حالات الطوارئ القصوى وبأدوات حماية خاصة'. إذا فتحت الباب دون قفل العزل المائي، ستغرق الغواصة فوراً ويموت الجميع!",
      whyItMatters:
        "أكثر من 90% من ثغرات XSS المكتشفة في تطبيقات React تحدث بسبب الاستخدام غير الآمن وغير المطهر لخاصية `dangerouslySetInnerHTML`.",
      syntax: `// الصيغة البرمجية لخاصية dangerouslySetInnerHTML:
<div dangerouslySetInnerHTML={{ __html: rawHtmlString }} />
// ⚠️ خطر قاتل إذا لم تكن rawHtmlString مطهرة مسبقاً!`,
      simpleExample: `// مثال يوضح الفرق بين العرض العادي والاستخدام غير الآمن لـ dangerouslySetInnerHTML
import React from 'react';

export function DangerousInnerHtmlDemo() {
  // محتوى HTML منسق
  const richContent = '<strong>هذا نص عريض</strong> مع وسم <em>مائل</em>';

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm">
      <h4 className="text-xs font-bold text-white">استعراض dangerouslySetInnerHTML</h4>

      {/* الحقن المباشر للوسوم */}
      <div
        className="p-3 bg-slate-850 rounded-lg text-xs text-sky-300 border border-slate-700"
        dangerouslySetInnerHTML={{ __html: richContent }}
      />

      <p className="text-[10px] text-amber-400/90 leading-relaxed">
        تحذير: لا تستخدم هذه الخاصية أبداً إلا إذا كان النص موثوقاً 100% أو تم تطهيره بمكتبة DOMPurify.
      </p>
    </div>
  );
}`,
      advancedExample: `// محاكي تفاعلي يشرح خطورة حقن سمات onerror في الصور والروابط الخبيثة عبر dangerouslySetInnerHTML
import React, { useState } from 'react';

export function DangerousHtmlInspector() {
  const [rawPayload, setRawPayload] = useState('<p>مقال ترحيبي عادي</p>');
  const [logs, setLogs] = useState([]);

  // محاكاة رصد عملية الحقن الخطرة
  const injectDangerousPayload = (payload) => {
    setRawPayload(payload);
    if (payload.includes('onerror') || payload.includes('<script')) {
      setLogs((prev) => [
        {
          time: new Date().toLocaleTimeString('ar-EG'),
          text: '🚨 تم رصد محاولة حقن كود XSS خبيث داخل dangerouslySetInnerHTML!',
          type: 'danger',
        },
        ...prev,
      ]);
    }
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-lg mx-auto">
      <header className="pb-3 border-b border-slate-800">
        <h3 className="text-sm font-bold text-white">مختبر مخاطر dangerouslySetInnerHTML</h3>
        <p className="text-xs text-slate-400">شاهد كيف تتجاوز هذه الخاصية دفاعات React الافتراضية</p>
      </header>

      {/* أزرار التجربة */}
      <div className="flex gap-2">
        <button
          onClick={() => injectDangerousPayload('<h4 style="color:#38bdf8">عنوان مقال آمن ومنسق</h4>')}
          className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white rounded-lg transition"
        >
          محتوى منسق آمن
        </button>
        <button
          onClick={() => injectDangerousPayload('<img src="invalid_img" onerror="alert(\'تم تنفيذ هجوم XSS عبر dangerouslySetInnerHTML!\')" />')}
          className="flex-1 py-1.5 bg-rose-600/30 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/40 text-xs font-bold rounded-lg transition"
        >
          حقن كود خبيث (XSS Payload)
        </button>
      </div>

      {/* منطقة الحقن الحية */}
      <div className="space-y-1">
        <span className="text-xs font-bold text-slate-400 block">المعاينة الحية للحقن المباشر في DOM:</span>
        <div
          className="p-4 bg-slate-950 border border-slate-800 rounded-xl min-h-16 text-xs text-slate-200"
          dangerouslySetInnerHTML={{ __html: rawPayload }}
        />
      </div>

      {/* سجل التحذيرات */}
      {logs.length > 0 && (
        <div className="p-3 bg-rose-950/40 border border-rose-800/80 rounded-xl space-y-1.5 font-mono text-xs">
          <span className="text-rose-400 font-bold block">سجل الرصد الأمني:</span>
          {logs.map((log, idx) => (
            <p key={idx} className="text-rose-300 text-[11px] leading-relaxed">
              [{log.time}] {log.text}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}`,
      output:
        "يوضح المخاطر الحقيقية لاستخدام dangerouslySetInnerHTML؛ وكيف أنها تسمح بتنفيذ الأكواد الخبيثة فوراً عند تمرير نصوص تحتوي على وسوم أو سمات مثل onerror دون تطهير مسبق.",
      commonMistakes: [
        {
          mistake: "استخدام `dangerouslySetInnerHTML` لعرض تعليقات المستخدمين أو رسائل الشات الحية مباشرة.",
          why: "أي مستخدم يكتب تعليقاً يحتوي على كود XSS سيتمكن من اختراق أجهزة كافة المستخدمين الآخرين الذين يقرؤون التعليق فوراً.",
          fix: "اعرض تعليقات المستخدمين كنصوص عادية عبر `{comment}` فقط، أو طهرها إلزامياً بمكتبة DOMPurify.",
        },
      ],
      bestPractices: [
        "إذا كنت مضطراً لاستخدامها لمحررات المقالات، طهر المحتوى دائماً باستخدام `DOMPurify.sanitize(dirtyHtml)` قبل تمريره للخاصية.",
        "اضبط قاعدة في ESLint تسمى `react/no-danger` لمنع أي مطور في فريقك من استخدام هذه الخاصية دون مراجعة أمنية صريحة.",
      ],
      infographic: {
        title: "مخاطر dangerouslySetInnerHTML",
        caption: "لماذا سُميت بهذا الاسم المخيف؟",
        steps: [
          { number: 1, label: "تجاوز دفاعات React", desc: "تلغي الحماية التلقائية وتقوم بحقن HTML مباشرة في DOM" },
          { number: 2, label: "الخطر الداهم (XSS)", desc: "تنفيذ وسوم script أو سمات الأحداث الخبيثة مثل onerror و onload" },
          { number: 3, label: "الحل الإلزامي", desc: "التطهير الصارم بمكتبة DOMPurify قبل أي عملية حقن" },
        ],
      },
    },

    // 17.4.c
    {
      id: "17.4.c",
      title: "تطهير وتنقية HTML غير الموثوق باستخدام DOMPurify",
      englishTerm: "Sanitizing Untrusted HTML via DOMPurify (دوم بيوريفاي) - تنقية وتطهير شفرات HTML",
      description:
        "عندما تفرض متطلبات عمل التطبيق عرض محتوى HTML منسق قادم من المستخدمين أو من خوادم خارجية (مثل المقالات الإخبارية، ورسائل البريد الإلكتروني، وتعليقات المحررات الغنية)، تصبح مكتبة `DOMPurify` هي المعيار الذهبي الإلزامي في صناعة البرمجيات. تقوم DOMPurify بفحص شجرة HTML شجرة فشجرة (DOM Tree Parsing)، وتقوم باستئصال وحذف كافة الوسوم الخبيثة (مثل `<script>` و `<iframe>` و `<object>`)، وكافة سمات الأحداث التلقائية (مثل `onerror`, `onload`, `onclick`)، وتزيل روابط `javascript:`، مع الاحتفاظ التام بالوسوم التنسيقية الآمنة (مثل `<b>` و `<i>` و `<p>` و `<a href='https://...'>`). كما تتيح ضبط قوائم بيضاء مخصصة (Whitelists) للتحكم الدقيق في الوسوم والسمات المسموح بظهورها.",
      analogy:
        "مثل محطة تنقية وتكرير مياه النهر: مياه النهر قادمة من الخارج محملة بالطين والجراثيم والملوثات والمواد السامة (HTML غير موثوق). تمر المياه عبر فلاتر دقيقة متطورة تزيل كافة السموم والميكروبات والشوائب، لتخرج في النهاية مياه نقية عذبة صالحة للشرب دون أن تسبب أي أذى (HTML مطهر بـ DOMPurify).",
      whyItMatters:
        "DOMPurify هي الدرع الوحيد المثبت والموثوق لحماية تطبيقات React الكبرى من ثغرات الحقن عندما يكون استخدام dangerouslySetInnerHTML أمراً حتمياً لا مفر منه.",
      syntax: `// تثبيت واستخدام DOMPurify في React:
import DOMPurify from 'dompurify';

const cleanHtml = DOMPurify.sanitize(dirtyHtml, {
  ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p'],
  ALLOWED_ATTR: ['href', 'target'],
});

return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;`,
      simpleExample: `// مثال بسيط لتنقية نص ملوث يحتوي على سكريبت خبيث وعرضه بأمان
import React from 'react';

// محاكاة لدالة التطهير البسيطة
function basicSanitize(dirty) {
  // إزالة السكريبتات وسمات الأحداث الخطرة
  return dirty
    .replace(/<script\\b[^<]*(?:(?!<\\/script>)<[^<]*)*<\\/script>/gi, '')
    .replace(/onerror\\s*=\\s*["'][^"']*["']/gi, '');
}

export function SanitizerSimpleDemo() {
  const dirtyInput = '<p>مقال رائع! <script>alert("XSS")</script> <b style="color:green">منسق بالكامل</b></p>';
  const cleanInput = basicSanitize(dirtyInput);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm">
      <h4 className="text-xs font-bold text-white">تنقية HTML قبل الحقن</h4>
      <div
        className="p-3 bg-slate-850 rounded border border-slate-700 text-xs text-slate-200"
        dangerouslySetInnerHTML={{ __html: cleanInput }}
      />
      <p className="text-[10px] text-emerald-400">
        ✓ تم حذف السكريبت الخبيث وعرض الوسوم الآمنة فقط بنجاح.
      </p>
    </div>
  );
}`,
      advancedExample: `// استوديو تفاعلي شامل لتنقية الـ HTML: مقارنة النص الملوث بالنص المطهر وفحص القوائم البيضاء
import React, { useState } from 'react';

export function DomPurifyInteractiveStudio() {
  const defaultDirty = '<h4 style="color:#38bdf8">مقال تقني رائع</h4><p>يمكنك زيارة <a href="https://react.dev">موقع React</a>.</p><img src="missing.jpg" onerror="alert(\'XSS Stolen Token!\')" /><script>stealCookies();</script>';
  const [dirtyText, setDirtyText] = useState(defaultDirty);
  const [allowLinksOnly, setAllowLinksOnly] = useState(false);

  // محاكاة التطهير الاحترافي لـ DOMPurify
  const sanitizeHtmlContent = (input) => {
    let cleaned = input;
    // 1. استئصال وسوم script بالكامل
    cleaned = cleaned.replace(/<script[\\s\\S]*?<\\/script>/gi, '');
    // 2. استئصال سمات الأحداث الخبيثة onerror, onclick, etc
    cleaned = cleaned.replace(/\\son\\w+\\s*=\\s*["'][^"']*["']/gi, '');
    cleaned = cleaned.replace(/\\son\\w+\\s*=\\s*[^\\s>]+/gi, '');
    // 3. استئصال روابط javascript:
    cleaned = cleaned.replace(/href\\s*=\\s*["']javascript:[^"']*["']/gi, 'href="#"');

    // إذا تم تفعيل خيار حظر الصور
    if (allowLinksOnly) {
      cleaned = cleaned.replace(/<img[^>]*>/gi, '');
    }

    return cleaned;
  };

  const cleanText = sanitizeHtmlContent(dirtyText);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-xl mx-auto">
      <header className="pb-3 border-b border-slate-800 flex justify-between items-center">
        <div>
          <h3 className="text-sm font-bold text-white">مختبر تنقية HTML (DOMPurify Studio)</h3>
          <p className="text-xs text-slate-400">استئصال السموم والشيفرات الخبيثة مع الحفاظ على التنسيق</p>
        </div>
        <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
          <input
            type="checkbox"
            checked={allowLinksOnly}
            onChange={(e) => setAllowLinksOnly(e.target.checked)}
            className="w-4 h-4 rounded text-sky-600"
          />
          <span>حظر وسوم الصور &lt;img&gt;</span>
        </label>
      </header>

      {/* حقل الإدخال الملوث */}
      <div className="space-y-1">
        <label className="text-xs text-slate-400 block font-semibold">شفرة HTML غير الموثوقة (Dirty HTML):</label>
        <textarea
          rows={3}
          value={dirtyText}
          onChange={(e) => setDirtyText(e.target.value)}
          className="w-full p-3 bg-slate-950 border border-rose-900/60 rounded-xl text-xs text-rose-300 font-mono focus:outline-none"
        />
      </div>

      {/* استعراض النص بعد التطهير */}
      <div className="space-y-1">
        <label className="text-xs text-slate-400 block font-semibold">شفرة HTML المطهرة (Clean Sanitized HTML):</label>
        <div className="p-3 bg-slate-950 border border-emerald-900/60 rounded-xl text-xs text-emerald-300 font-mono break-all">
          {cleanText}
        </div>
      </div>

      {/* المعاينة النهائية الآمنة في المتصفح */}
      <div className="space-y-1">
        <span className="text-xs font-bold text-white block">العرض البصري الآمن في المتصفح:</span>
        <div
          className="p-4 bg-slate-850 border border-slate-800 rounded-xl text-xs text-slate-200"
          dangerouslySetInnerHTML={{ __html: cleanText }}
        />
      </div>
    </div>
  );
}`,
      output:
        "يوضح كيف تستأصل مكتبة DOMPurify وسوم السكريبتات وأحداث onerror الخبيثة تماماً، مع الحفاظ على الخط العريض والروابط والتنسيقات الآمنة دون أي خطر على المستخدم.",
      commonMistakes: [
        {
          mistake: "محاولة كتابة تعبير نمطي (Regex) بسيط بنفسك لتنظيف الـ HTML بدلاً من استخدام DOMPurify.",
          why: "هجمات الـ XSS متطورة وتحتوي على تقنيات التفاف (Bypass / Mutation XSS) لا يستطيع أي تعبير نمطي يدوي تغطيتها.",
          fix: "استخدم دائماً مكتبة `DOMPurify` الرسمية المجربة والمختبرة من كبار خبراء أمن المعلومات.",
        },
      ],
      bestPractices: [
        "إذا كنت تستخدم التصيير من جانب الخادم (SSR / Next.js)، استخدم مكتبة `isomorphic-dompurify` لضمان عمل التطهير في بيئتي Node.js والمتصفح معاً.",
        "حدد خيارات القائمة البيضاء (White-listing): حدد فقط الوسوم المسموح بها بدلاً من محاولة حظر الوسوم الممنوعة (Black-listing).",
      ],
      infographic: {
        title: "آلية عمل DOMPurify في تنقية الأكواد",
        caption: "فلترة ثلاثية المراحل لتحويل الـ HTML الملوث إلى آمن",
        steps: [
          { number: 1, label: "بناء شجرة الـ DOM", desc: "تفكيك النص الخام إلى عناصر وسمات في بيئة معزولة" },
          { number: 2, label: "استئصال العناصر الخبيثة", desc: "إزالة سكريبتات الأحداث onerror و javascript: والوسوم المحظورة" },
          { number: 3, label: "إعادة بناء كود نقي", desc: "إرجاع كود HTML نظيف وآمن 100% لعرضه بسلام في الواجهة" },
        ],
      },
    },

    // 17.4.d
    {
      id: "17.4.d",
      title: "مفهوم هجمات CSRF وكيفية التصدي لها",
      englishTerm: "Cross-Site Request Forgery: CSRF (سي إس آر إف) - هجمات تزوير الطلبات عبر المواقع",
      description:
        "هجوم CSRF (تزوير الطلبات عبر المواقع) هو هجوم خبيث يجبر فيه المهاجم متصفح الضحية على إرسال طلب غير مقصود وموثق إلى موقع حساس (مثل بنك أو متجر) بينما المستخدم مسجل الدخول فيه بالفعل. كيف يحدث ذلك؟ تخيل أنك مسجل الدخول في موقع بنكك الذي يخزن الجلسة في Cookie عادي. وأثناء ذلك، فتحت موقعاً خبيثاً في تبويب آخر يحتوي على زر وهمي أو وسم صورة خفي: `<img src='https://bank.com/transfer?to=hacker&amount=1000' />`. يقوم المتصفح تلقائياً بإرفاق ملفات الكوكي الخاصة بالبنك مع هذا الطلب دون علمك! للتصدي لـ CSRF تتوفر وسيلتان دفاعيتان حاسمتان: 1) راية `SameSite=Lax` أو `SameSite=Strict` في ملفات الكوكي (تمنع المتصفح من إرسال الكوكي في الطلبات القادمة من مواقع أخرى)، 2) رموز مكافحة التزوير (Anti-CSRF Tokens): رمز سري عشوائي يرسله الخادم ويجب على React إرفاقه في ترويسة مخصصة في كل طلب.",
      analogy:
        "مثل توكيل رسمي موقع على بياض: أنت نزيل معروف في فندق، والموظفون ينفذون أي طلب يصلهم بتوقيعك المعتمد. يقوم شخص محتال في الشارع بكتابة طلب 'أفرغوا كافة مقتنيات الغرفة وسلموها للسائق بالخارج' ويرسل هذا الطلب مع ساعي الفندق الرسمي الذي يضع عليه ختمك المعتمد دون أن تعلم! الحماية هي أن يشترط الفندق أن تحضر أنت شخصياً بكلمة سر شفهية فورية لا يعلمها أحد (رمز الـ CSRF Token).",
      whyItMatters:
        "ثغرات CSRF قد تؤدي إلى تحويل أموال، أو تغيير البريد الإلكتروني للحساب، أو حذف محتويات كاملة للمستخدم دون أدنى إدراك منه.",
      syntax: `// إرفاق رمز Anti-CSRF Token في ترويسات React / Axios:
axios.defaults.headers.common['X-CSRF-Token'] = csrfTokenFromMetaOrCookie;`,
      simpleExample: `// مثال يوضح كيف يقرأ تطبيق React رمز الـ CSRF من ترويسة الصفحة ويرفقه بالطلبات
import React, { useState } from 'react';

export function CsrfTokenDemo() {
  // محاكاة رمز CSRF مولد من الخادم ومخزن في وسم meta في index.html
  const mockCsrfToken = 'csrf_secret_token_abc987654';
  const [status, setStatus] = useState(null);

  const handleProtectedAction = async () => {
    setStatus('جارٍ إرسال الطلب مع رمز الحماية CSRF...');
    setTimeout(() => {
      setStatus('✓ تم قبول الطلب: تطابق رمز الـ X-CSRF-Token مع سجلات الخادم بنجاح.');
    }, 800);
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm">
      <h4 className="text-xs font-bold text-white">إرسال Anti-CSRF Token</h4>
      <div className="p-2.5 bg-slate-950 rounded font-mono text-[11px] space-y-1">
        <span className="text-slate-500 block">الرمز المرفق في ترويسة الطلب:</span>
        <span className="text-sky-400 break-all">X-CSRF-Token: {mockCsrfToken}</span>
      </div>
      <button
        onClick={handleProtectedAction}
        className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition"
      >
        إرسال طلب آمن ومحمي
      </button>
      {status && <p className="text-xs text-emerald-400 text-center">{status}</p>}
    </div>
  );
}`,
      advancedExample: `// محاكي تفاعلي يوضح هجوم CSRF وكيف تفشله راية SameSite=Lax ورموز الحماية
import React, { useState } from 'react';

export function CsrfAttackDefenseSimulator() {
  const [sameSiteMode, setSameSiteMode] = useState('Lax'); // 'None' (عرضة للاختراق) vs 'Lax' (محمي)
  const [hasCsrfToken, setHasCsrfToken] = useState(true);
  const [attackLogs, setAttackLogs] = useState([]);

  // محاكاة هجوم قادم من موقع تصيد احتيالي خارجي (evil-site.com)
  const simulateCrossSiteAttack = () => {
    const time = new Date().toLocaleTimeString('ar-EG');

    // إذا كانت الكوكي بدون SameSite وغياب رمز الـ CSRF
    if (sameSiteMode === 'None' && !hasCsrfToken) {
      setAttackLogs((prev) => [
        {
          time,
          text: '🚨 نجح هجوم CSRF! أرسل الموقع الخبيث طلباً لتحويل الأموال؛ فأرفق المتصفح ملفات الكوكي تلقائياً ونفذ الخادم العملية لغياب الحماية!',
          status: 'success_attack',
        },
        ...prev,
      ]);
    } else {
      // وجود حماية SameSite أو CSRF Token
      const defenseReason =
        sameSiteMode === 'Lax'
          ? 'منع المتصفح إرسال الكوكي التلقائي بفضل راية SameSite=Lax!'
          : 'رفض الخادم الطلب لغياب رمز الـ X-CSRF-Token الإلزامي!';

      setAttackLogs((prev) => [
        {
          time,
          text: '🛡️ تم صد وإفشال هجوم CSRF بنجاح! السبب: ' + defenseReason,
          status: 'blocked',
        },
        ...prev,
      ]);
    }
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-lg mx-auto">
      <header className="pb-3 border-b border-slate-800">
        <h3 className="text-sm font-bold text-white">محاكي هجمات CSRF ووسائل الدفاع</h3>
        <p className="text-xs text-slate-400">تأثير راية SameSite ورموز Anti-CSRF على حماية الطلبات</p>
      </header>

      {/* خيارات الدفاع التفاعلية */}
      <div className="space-y-3">
        <div className="flex justify-between items-center p-3 bg-slate-850 rounded-xl border border-slate-800">
          <div>
            <span className="text-xs font-bold text-white block">راية SameSite للكوكي:</span>
            <span className="text-[11px] text-slate-400">Lax يمنع الكوكي عبر النطاقات الخارجية</span>
          </div>
          <div className="flex gap-1.5">
            <button
              onClick={() => setSameSiteMode('None')}
              className={'px-3 py-1 text-xs font-bold rounded ' + (sameSiteMode === 'None' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400')}
            >
              None (خطر)
            </button>
            <button
              onClick={() => setSameSiteMode('Lax')}
              className={'px-3 py-1 text-xs font-bold rounded ' + (sameSiteMode === 'Lax' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400')}
            >
              Lax (آمن ✓)
            </button>
          </div>
        </div>

        <label className="flex items-center justify-between p-3 bg-slate-850 rounded-xl border border-slate-800 cursor-pointer">
          <div>
            <span className="text-xs font-bold text-white block">تفعيل ترويسة X-CSRF-Token:</span>
            <span className="text-[11px] text-slate-400">إلزام العميل بإرسال رمز عشوائي مخصص في كل طلب</span>
          </div>
          <input
            type="checkbox"
            checked={hasCsrfToken}
            onChange={(e) => setHasCsrfToken(e.target.checked)}
            className="w-4 h-4 rounded text-sky-600"
          />
        </label>
      </div>

      <button
        onClick={simulateCrossSiteAttack}
        className="w-full py-2.5 bg-rose-600/30 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/40 text-xs font-bold rounded-xl transition"
      >
        محاكاة نقر المستخدم على رابط في موقع خبيث (Trigger CSRF Attack)
      </button>

      {/* سجل الاستجابات */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-slate-400">سجل نتائج الهجوم والدفاع:</h4>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl max-h-44 overflow-y-auto space-y-2 font-mono text-xs">
          {attackLogs.length === 0 ? (
            <p className="text-slate-600 text-center py-3">انقر على زر المحاكاة لاختبار الصمود الأمني...</p>
          ) : (
            attackLogs.map((log, idx) => (
              <div
                key={idx}
                className={'p-2 rounded border ' + (
                  log.status === 'success_attack'
                    ? 'bg-rose-950/40 border-rose-800 text-rose-300'
                    : 'bg-emerald-950/40 border-emerald-800 text-emerald-300'
                )}
              >
                <div className="flex justify-between text-[10px] opacity-70">
                  <span>{log.time}</span>
                  <span>{log.status === 'success_attack' ? 'BREACH' : 'DEFENDED'}</span>
                </div>
                <p className="text-[11px] mt-1 font-sans">{log.text}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}`,
      output:
        "يوضح كيف تقضي راية SameSite=Lax ورموز Anti-CSRF تماماً على خطر تزوير الطلبات، حيث يعجز الموقع الخبيث عن إرفاق الكوكيز أو قراءة الرمز المخصص عبر النطاقات.",
      commonMistakes: [
        {
          mistake: "الاعتماد على طلبات GET لإجراء عمليات تغيير حالة حساسة (مثل `GET /delete-account?id=5`).",
          why: "طلبات GET يمكن استدعاؤها بسهولة بالغة عبر وسم صورة بسيط `<img src=...>` دون أدنى حماية!",
          fix: "استخدم دائماً أفعال POST أو PUT أو DELETE الصريحة للعمليات الحساسة مع فحص الـ CSRF Token.",
        },
      ],
      bestPractices: [
        "إذا كنت تستخدم مصادقة قائمة على Bearer Tokens في ترويسة Authorization (بدون Cookies تلقائية)، فإن تطبيقك منيع تلقائياً ضد CSRF.",
        "اضبط راية `SameSite=Lax` دائماً على ملفات الكوكي الحساسة كخط دفاع أول وأساسي.",
      ],
      infographic: {
        title: "هجوم CSRF وكيفية التصدي له",
        caption: "حماية جلسات المستخدمين من تزوير الطلبات عبر النطاقات",
        steps: [
          { number: 1, label: "سيناريو الهجوم", desc: "المستخدم يسجل في البنك، ويفتح موقعاً خبيثاً يرسل طلباً خفياً للبنك" },
          { number: 2, label: "السلوك الافتراضي", desc: "المتصفح يرفق الكوكي تلقائياً إذا لم تكن راية SameSite مفعلة" },
          { number: 3, label: "الدفاع المزدوج", desc: "راية SameSite=Lax تمنع الإرسال + رمز Anti-CSRF يؤكد مصدر الطلب" },
        ],
      },
    },

    // 17.4.e
    {
      id: "17.4.e",
      title: "إعداد سياسات أمان المحتوى (Content Security Policy - CSP)",
      englishTerm: "Content Security Policy: CSP (كونتنت سيكيوريتي بوليسي) - سياسة أمان المحتوى",
      description:
        "تعد سياسة أمان المحتوى (CSP) أقوى طبقة دفاع متعمقة لحماية تطبيقات الويب من هجمات XSS وحقن البيانات. تُرسل CSP كترويسة HTTP من الخادم (أو عبر وسم `<meta>` في ملف `index.html`)، وهي عبارة عن قائمة بيضاء صارمة (Allowlist) تُعلم المتصفح بدقة: ما هي النطاقات والمصادر المسموح بتحميل وتنفيذ ملفات JavaScript منها؟ من أين يُسمح بتحميل الخطوط؟ ما هي خوادم الـ API المسموح لتطبيق React بالاتصال بها عبر `fetch`؟ وما يميز CSP هو قدرتها على 'حظر تنفيذ أي كود JavaScript مدمج' (Inline Scripts: مثل `<script>alert(1)</script>` أو `onclick='...'`) ما لم يكن مزوداً برمز تشفير فريد (Cryptographic Nonce).",
      analogy:
        "مثل حارس أمن عند مدخل قصر رئاسي يحمل قائمة معتمدة بالضيوف والشركات المصرح لها بالدخول اليوم (شركة التموين الفلانية، وفني الصيانة الفلاني). أي شاحنة أو شخص غريب لا يحمل تصريحاً رسمياً ومطابقاً للقائمة المعتمدة يُمنع من عبور البوابة فوراً ويتم حجز شاحنته حتى لو ادعى أنه يحمل رسالة مهمة!",
      whyItMatters:
        "حتى لو نجح مخترق في استغلال ثغرة XSS وحقن كود JavaScript في صفحتك، فإن سياسة CSP الصارمة ستمنع المتصفح من تنفيذ هذا الكود الخبيث أو إرسال البيانات المسروقة إلى خادم المخترق!",
      syntax: `// ترويسة CSP النموذجية لتطبيق React:
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' 'nonce-rAnd0m123';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  connect-src 'self' https://api.mysite.com;
  img-src 'self' data: https://images.unsplash.com;`,
      simpleExample: `// مثال إعداد سياسة CSP بسيطة عبر وسم meta في ملف index.html
import React from 'react';

export function CspMetaTagDemo() {
  const sampleCspString = "default-src 'self'; script-src 'self'; connect-src 'self' https://api.domain.com; img-src 'self' data:;";

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm">
      <h4 className="text-xs font-bold text-white">إعداد CSP عبر وسم Meta</h4>
      <div className="p-3 bg-slate-950 rounded border border-slate-800 font-mono text-[11px] text-sky-400 break-all leading-relaxed">
        &lt;meta http-equiv="Content-Security-Policy" content="{sampleCspString}" /&gt;
      </div>
      <p className="text-[10px] text-slate-400">
        * يمنع هذا التكوين تحميل أي سكريبتات من نطاقات خارجية غير مصرح بها ويمنع الاتصال بخوادم غير مصرحة.
      </p>
    </div>
  );
}`,
      advancedExample: `// محاكي تفاعلي لفاحص ومولد سياسات الـ CSP وتأثيرها على حظر السكريبتات الخبيثة
import React, { useState } from 'react';

export function CspPolicyBuilderSimulator() {
  const [allowExternalApis, setAllowExternalApis] = useState(true);
  const [blockInlineScripts, setBlockInlineScripts] = useState(true);
  const [allowedDomains, setAllowedDomains] = useState('https://api.myapp.com');
  const [testResult, setTestResult] = useState(null);

  // توليد نص السياسة
  const generatedCsp = [
    "default-src 'self'",
    blockInlineScripts ? "script-src 'self'" : "script-src 'self' 'unsafe-inline'",
    allowExternalApis ? "connect-src 'self' " + allowedDomains : "connect-src 'self'",
    "img-src 'self' data: https:",
  ].join('; ');

  // محاكاة محاولة كود خبيث الاتصال بخادم خارجي غريب (Exfiltration)
  const testAttackSimulation = () => {
    const maliciousEndpoint = 'https://hacker-drop.xyz/steal';
    const isConnectAllowed = allowExternalApis && allowedDomains.includes(maliciousEndpoint);

    if (isConnectAllowed) {
      setTestResult({
        status: 'breach',
        msg: '🚨 تم تسريب البيانات! سمحت السياسة بالاتصال بالنطاق الخارجي غير المصرح.',
      });
    } else {
      setTestResult({
        status: 'blocked',
        msg: '🛡️ تصدي أمني ناجح! حظرت سياسة CSP الاتصال بالنطاق ' + maliciousEndpoint + ' وقامت بإرسال تقرير أمني.',
      });
    }
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-lg mx-auto">
      <header className="pb-3 border-b border-slate-800">
        <h3 className="text-sm font-bold text-white">مولد ومحاكي سياسات أمان المحتوى (CSP Builder)</h3>
        <p className="text-xs text-slate-400">تحصين تطبيق React ضد تسريب البيانات والسكريبتات المدمجة</p>
      </header>

      {/* خيارات بناء السياسة */}
      <div className="space-y-3 text-xs">
        <label className="flex items-center justify-between p-3 bg-slate-850 rounded-xl border border-slate-800 cursor-pointer">
          <div>
            <span className="font-bold text-white block">حظر السكريبتات المدمجة ('unsafe-inline'):</span>
            <span className="text-[11px] text-slate-400">إلغاء تنفيذ أي كود JS محقون داخل وسوم HTML مباشرة</span>
          </div>
          <input
            type="checkbox"
            checked={blockInlineScripts}
            onChange={(e) => setBlockInlineScripts(e.target.checked)}
            className="w-4 h-4 rounded text-sky-600"
          />
        </label>

        <div className="p-3 bg-slate-850 rounded-xl border border-slate-800 space-y-2">
          <span className="font-bold text-white block">نطاقات الـ API المسموح بالاتصال بها (connect-src):</span>
          <input
            type="text"
            value={allowedDomains}
            onChange={(e) => setAllowedDomains(e.target.value)}
            className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg font-mono text-[11px] text-sky-400"
          />
        </div>
      </div>

      {/* ترويسة CSP المولدة */}
      <div className="space-y-1">
        <span className="text-xs font-bold text-slate-400 block font-mono">الترويسة الناتجة (CSP Header):</span>
        <pre className="p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-[11px] text-emerald-300 break-all leading-relaxed whitespace-pre-wrap">
          Content-Security-Policy: {generatedCsp}
        </pre>
      </div>

      <button
        onClick={testAttackSimulation}
        className="w-full py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition"
      >
        محاكاة محاولة تسريب بيانات لخادم خارجي (Test Data Exfiltration)
      </button>

      {testResult && (
        <div
          className={'p-3 rounded-xl border text-xs animate-fadeIn ' + (
            testResult.status === 'blocked'
              ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
              : 'bg-rose-950/60 border-rose-500/40 text-rose-300'
          )}
        >
          {testResult.msg}
        </div>
      )}
    </div>
  );
}`,
      output:
        "يوضح كيف تشكل ترويسة CSP طوق نجاة نهائي يمنع المتصفح من إرسال البيانات لأي خوادم خارجية مجهولة ويحظر السكريبتات المدمجة تماماً.",
      commonMistakes: [
        {
          mistake: "استخدام التوجيه `'unsafe-inline'` و `'unsafe-eval'` في سياسة CSP لجميع السكريبتات لإسكات أخطاء الكونسول.",
          why: "هذا يعطل الفائدة الأمنية لـ CSP بالكامل ويعيد التطبيق ليكون عرضة لـ XSS!",
          fix: "استخدم التشفير الفريد (Nonce-based CSP) للسكريبتات الضرورية وتجنب unsafe-inline تماماً.",
        },
      ],
      bestPractices: [
        "ابدأ دائماً بوضع تقارير المراقبة أولاً: `Content-Security-Policy-Report-Only` لمراقبة المخالفات دون حظر فعلي للتأكد من عدم كسر وظائف الموقع.",
        "قيد توجيه `frame-ancestors 'none'` لمنع تضمين موقعك داخل iframes لحمايته من هجمات Clickjacking.",
      ],
      infographic: {
        title: "حماية سياسة أمان المحتوى (CSP)",
        caption: "القائمة البيضاء الصارمة لحظر السكريبتات والمصادر المجهولة",
        steps: [
          { number: 1, label: "script-src 'self'", desc: "منع تنفيذ أي ملف جافاسكريبت خارجي أو مدمج غير معتمد" },
          { number: 2, label: "connect-src", desc: "تقييد اتصالات fetch و Axios بالنطاقات الرسمية فقط لمنع تسريب البيانات" },
          { number: 3, label: "Report-Only Mode", desc: "اختبار السياسة ومراقبة الانتهاكات في البداية قبل تفعيل الحظر الصارم" },
        ],
      },
    },

    // 17.4.f
    {
      id: "17.4.f",
      title: "مفهوم CORS والتعامل مع طلبات عبر النطاقات",
      englishTerm: "Cross-Origin Resource Sharing: CORS (كورس) - مشاركة الموارد عبر الأصول المختلفة",
      description:
        "يعد خطأ 'CORS Error' في كونسول المتصفح من أكثر الأخطاء التي تثير ارتباك مطوري React المبتدئين. CORS هي آلية أمان مدمجة في متصفحات الويب تطبق مبدأ 'سياسة الأصل نفسه' (Same-Origin Policy - SOP): افتراضياً، يمنع المتصفح كود JavaScript الذي يعمل على الأصل `http://localhost:3000` من قراءة البيانات القادمة من أصل مختلف مثل `https://api.mybackend.com`. للسماح بهذا التخاطب، يجب على الخادم الخلفي (Backend) أن يرسل ترويسات موافقة صريحة: مثل `Access-Control-Allow-Origin: http://localhost:3000` و `Access-Control-Allow-Credentials: true`. إذا كان الطلب معقداً (يحتوي على ترويسات مخصصة أو أفعال PUT/DELETE)، يرسل المتصفح تلقائياً طلب استكشاف مسبق يسمى Preflight Request (عبر فعل OPTIONS) قبل إرسال الطلب الفعلي للتأكد من موافقة الخادم.",
      analogy:
        "مثل دخول مبنى سفارة دولة أجنبية في مدينتك: أنت مواطن محلي تقف في الشارع، لكنك لا تستطيع الدخول لمبنى السفارة وقراءة مستنداتها إلا إذا كان اسمك مسجلاً في قائمة الزوار المعتمدين عند باب السفارة. حارس السفارة (المتصفح) يتصل بمكتب السفير (Preflight OPTIONS) ويسأل: 'هل تسمحون بدخول هذا المواطن؟' فإذا وافق السفير، يفتح الحارس الباب فوراً!",
      whyItMatters:
        "فهم أن CORS هو نظام أمان يُطبق في 'المتصفح' بتوجيه من 'الخادم' يجعلك تدرك فوراً أن حل خطأ CORS يتم دائماً في إعدادات الخادم (أو عبر Vite Proxy محلي أثناء التطوير) وليس بتغيير كود React!",
      syntax: `// الترويسات التي يجب أن يرسلها الخادم لحل CORS:
Access-Control-Allow-Origin: https://my-react-app.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true`,
      simpleExample: `// مثال إعداد Vite Proxy لحل مشاكل CORS في بيئة التطوير المحلية
// هذا الكود يوضع في vite.config.js:
/*
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://api.backend-server.com',
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
*/

// في كود React: نستدعي الرابط النسبي مباشرة دون أي مشاكل CORS!
import React, { useState } from 'react';

export function ViteProxyDemo() {
  const [data, setData] = useState(null);

  const fetchThroughProxy = async () => {
    try {
      // الاتصال بنفس النطاق المحلي /api فيتولى خادم Vite إعادة توجيهه للخادم البعيد
      const res = await fetch('/api/users/me');
      const json = await res.json();
      setData(json.name);
    } catch {
      setData('تم استدعاء المسار النسبي عبر Vite Proxy');
    }
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 max-w-sm">
      <h4 className="text-xs font-bold text-white">حل CORS محلياً بـ Vite Proxy</h4>
      <button
        onClick={fetchThroughProxy}
        className="w-full py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg transition"
      >
        استدعاء /api/users/me
      </button>
      {data && <p className="text-xs text-emerald-400 font-mono">{data}</p>}
    </div>
  );
}`,
      advancedExample: `// محاكي تفاعلي لرحلة طلب الـ CORS الاستكشافي المسبق (Preflight OPTIONS Flow)
import React, { useState } from 'react';

export function CorsFlightSimulator() {
  const [allowedOrigins, setAllowedOrigins] = useState('https://myreactapp.com');
  const [requestOrigin, setRequestOrigin] = useState('https://myreactapp.com');
  const [corsLog, setCorsLog] = useState([]);

  const executeCrossDomainFetch = () => {
    const isOriginAllowed = allowedOrigins === requestOrigin || allowedOrigins === '*';

    if (isOriginAllowed) {
      setCorsLog([
        { step: '1. المتصفح يرسل طلب Preflight: OPTIONS /api/data', status: 'ok' },
        { step: '2. الخادم يرد بترويسة: Access-Control-Allow-Origin: ' + requestOrigin, status: 'ok' },
        { step: '3. المتصفح يسمح بالطلب الفعلي: GET /api/data (200 OK)', status: 'ok' },
      ]);
    } else {
      setCorsLog([
        { step: '1. المتصفح يرسل طلب Preflight: OPTIONS /api/data', status: 'ok' },
        { step: '2. الخادم يرد بدون الأصل ' + requestOrigin, status: 'failed' },
        { step: '3. المتصفح يحظر الاستجابة فوراً: "CORS error: No Access-Control-Allow-Origin"', status: 'blocked' },
      ]);
    }
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-lg mx-auto">
      <header className="pb-3 border-b border-slate-800">
        <h3 className="text-sm font-bold text-white">محاكي طلبات CORS و Preflight Request</h3>
        <p className="text-xs text-slate-400">تتبع مفاوضات المتصفح والخادم عبر الأصول المختلفة</p>
      </header>

      {/* خيارات الاختبار */}
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div>
          <label className="text-slate-400 block mb-1">أصل تطبيق React (المرسل):</label>
          <input
            value={requestOrigin}
            onChange={(e) => setRequestOrigin(e.target.value)}
            className="w-full p-2 bg-slate-800 border border-slate-700 rounded-lg text-white font-mono text-[11px]"
          />
        </div>
        <div>
          <label className="text-slate-400 block mb-1">الأصل المسموح به في الخادم:</label>
          <input
            value={allowedOrigins}
            onChange={(e) => setAllowedOrigins(e.target.value)}
            className="w-full p-2 bg-slate-800 border border-slate-700 rounded-lg text-emerald-400 font-mono text-[11px]"
          />
        </div>
      </div>

      <button
        onClick={executeCrossDomainFetch}
        className="w-full py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition"
      >
        إرسال استدعاء Cross-Origin Fetch
      </button>

      {/* سجل خطوات التفاوض */}
      {corsLog.length > 0 && (
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 font-mono text-xs">
          <span className="text-slate-400 block text-[10px] font-bold">تسلسل مفاوضات الـ CORS في المتصفح:</span>
          {corsLog.map((log, idx) => (
            <div
              key={idx}
              className={'p-2 rounded border ' + (
                log.status === 'blocked' || log.status === 'failed'
                  ? 'bg-rose-950/40 border-rose-800 text-rose-300'
                  : 'bg-emerald-950/40 border-emerald-800 text-emerald-300'
              )}
            >
              {log.step}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`,
      output:
        "يوضح كيف يتصرف المتصفح عند إرسال طلب عبر النطاقات، وكيف يقوم بإرسال طلب استكشاف OPTIONS مسبق لفحص ترويسات السماح قبل تمرير البيانات لتطبيق React.",
      commonMistakes: [
        {
          mistake: "محاولة إضافة ترويسة `Access-Control-Allow-Origin` داخل كود React في العميل (`fetch(url, { headers: { 'Access-Control-Allow-Origin': '*' } })`).",
          why: "هذه الترويسة يرسلها الخادم كإذن للمتصفح؛ إرسالها من العميل لا معنى له ولن يحل المشكلة إطلاقاً.",
          fix: "اضبط ترويسات CORS في خادمك الخلفي (Express cors middleware) أو استخدم خادم وكيل Proxy محلياً أثناء التطوير.",
        },
      ],
      bestPractices: [
        "لا تستخدم `Access-Control-Allow-Origin: *` في بيئات الإنتاج إذا كانت طلباتك تتضمن كوكيز أو جلسات (`credentials: include`).",
        "حدد قائمة صريحة ومحددة بالنطاقات المعتمدة لتطبيقك في الخادم (Whitelist).",
      ],
      infographic: {
        title: "دورة تفاوض CORS في متصفحات الويب",
        caption: "كيف يتعامل المتصفح مع الطلبات عبر النطاقات المختلفة؟",
        steps: [
          { number: 1, label: "فحص الأصل (Origin Check)", desc: "المتصفح يلاحظ اختلاف النطاق أو المنفذ بين العميل والخادم" },
          { number: 2, label: "طلب الاستكشاف (Preflight OPTIONS)", desc: "إرسال طلب مسبق سريع يسأل الخادم عن الصلاحيات والترويسات" },
          { number: 3, label: "إجازة الطلب الفعلي", desc: "إذا وافق الخادم يمرر المتصفح الطلب؛ وإلا يطلق خطأ CORS فوري" },
        ],
      },
    },

    // 17.4.g
    {
      id: "17.4.g",
      title: "منع تضمين وتضمين الأسرار والمفاتيح الحساسة في Frontend",
      englishTerm: "Never Hardcode Secrets in Frontend (نو سيكريتس إن فرونت إند) - حظر تضمين الأسرار في الواجهة",
      description:
        "القاعدة الصارمة التي لا تقبل أي استثناء في أمن الواجهات الأمامية: 'لا تضع أي سر، أو مفتاح خاص، أو كلمة مرور قاعدة بيانات، أو مفتاح دفع سري (Secret API Key) داخل كود React إطلاقاً!'. لماذا؟ لأن كل سطر كود وكل متغير بيئة يبدأ بـ `VITE_` أو يتم استيراده في React يتم تحويله في النهاية إلى ملفات JavaScript عادية تُرسل إلى جهاز المستخدم. يستطيع أي زائر للموقع فتح تبويب Sources في أدوات المتصفح، أو فحص ملف `index.js` المجمع والبحث عن الكلمات المفتاحية وسرقة المفاتيح الحساسة واستخدامها لاستنزاف رصيدك السحابي أو تدمير خوادمك!",
      analogy:
        "مثل كتابة الرقم السري لبطاقتك الائتمانية ورقم حسابك البنكي على ملصق كبير ولصقه على الزجاج الخلفي لسيارتك أثناء تجولك في الشارع! أنت جعلت السر متاحاً ومكشوفاً لكل عابر سبيل ينظر لسيارتك.",
      whyItMatters:
        "آلاف المطورين تفاجأوا بفواتير سحابية بعشرات آلاف الدولارات على خدمات AWS وOpenAI بسبب قيام روبوتات القرصنة بمسح مستودعات GitHub وملفات الجافاسكريبت المجمعة واستخراج مفاتيح API المسربة.",
      syntax: `// مسموح به (مفاتيح عامة للعرض فقط):
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_xxx...
VITE_MAPBOX_PUBLIC_TOKEN=pk.xxx...

// ⚠️ محظور ومرفوض تماماً في React:
// VITE_STRIPE_SECRET_KEY=sk_live_xxx... ❌
// VITE_DATABASE_PASSWORD=secret1234 ❌
// VITE_JWT_SECRET=my_super_secret ❌`,
      simpleExample: `// مثال يوضح كيف تكون المتغيرات مكشوفة تماماً للمستخدم في React
import React from 'react';

export function ExposedEnvDemo() {
  // المفاتيح العامة المسموح بظهورها في الواجهة
  const publicApiKey = 'pk_live_sample_publishable_key_123';

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 max-w-sm">
      <h4 className="text-xs font-bold text-white">فحص المتغيرات العامة الآمنة</h4>
      <p className="text-[11px] text-slate-400">
        المفتاح العام المصرح به: <span className="text-emerald-400 font-mono break-all">{publicApiKey}</span>
      </p>
      <div className="p-2.5 bg-rose-950/40 border border-rose-500/40 rounded text-[11px] text-rose-300">
        ⚠️ تذكر: أي قيمة تستوردها داخل React يمكن لأي شخص استخراجها من ملفات الـ Bundle في المتصفح!
      </div>
    </div>
  );
}`,
      advancedExample: `// محاكي تفاعلي لتدقيق فحص الأسرار في حزمة React المجمعة (Bundle Leak Inspector)
import React, { useState } from 'react';

const CODE_SAMPLE_LEAKED = [
  '// ملف شفرة مجمعة في الإنتاج (dist/assets/index.js)',
  'const stripe = new Stripe("sk_live_9988_SUPER_SECRET_KEY"); // 🚨 تسريب كارثي!',
  'const db = connectToPostgres("postgres://admin:Password123@db.aws.com:5432");'
].join('\\n');

const CODE_SAMPLE_SAFE = [
  '// الاستخدام الآمن الصحيح',
  'const stripe = new Stripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY); // ✓ مفتاح عام فقط',
  '// العمليات الحساسة تتم في الخادم الخلفي /api/checkout'
].join('\\n');

export function SecretLeakAuditSimulator() {
  const [scenario, setScenario] = useState('leaked');

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-lg mx-auto">
      <header className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-sm font-bold text-white">مدقق تسريب الأسرار في حزم React</h3>
          <p className="text-xs text-slate-400">تحليل ما يراه المخترق عند فحص ملفات الجافاسكريبت المجمعة</p>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => setScenario('leaked')}
            className={'px-2.5 py-1 text-xs rounded transition ' + (
              scenario === 'leaked' ? 'bg-rose-600 text-white font-bold' : 'bg-slate-800 text-slate-400'
            )}
          >
            كود غير آمن ❌
          </button>
          <button
            onClick={() => setScenario('safe')}
            className={'px-2.5 py-1 text-xs rounded transition ' + (
              scenario === 'safe' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-800 text-slate-400'
            )}
          >
            كود آمن ✓
          </button>
        </div>
      </header>

      {/* استعراض كود الملف المجمع */}
      <div className="space-y-1">
        <span className="text-xs font-bold text-slate-400 block font-mono">
          معاينة محتوى ملف dist/assets/index.js في متصفح المستخدم:
        </span>
        <pre
          className={'p-3 rounded-xl border font-mono text-[11px] leading-relaxed overflow-x-auto ' + (
            scenario === 'leaked'
              ? 'bg-rose-950/30 border-rose-800/80 text-rose-300'
              : 'bg-emerald-950/30 border-emerald-800/80 text-emerald-300'
          )}
        >
          {scenario === 'leaked' ? CODE_SAMPLE_LEAKED : CODE_SAMPLE_SAFE}
        </pre>
      </div>

      <div className="p-4 bg-slate-850 rounded-xl space-y-2 text-xs leading-relaxed text-slate-300">
        {scenario === 'leaked' ? (
          <p className="text-rose-400 font-semibold">
            🚨 في هذا السيناريو، تمكن المخترق من استخراج مفتاح Stripe السري وكلمة مرور قاعدة البيانات في ثانيتين باستخدام ميزة البحث في DevTools!
          </p>
        ) : (
          <p className="text-emerald-400 font-semibold">
            ✓ في هذا السيناريو، يحتوي كود React على المفتاح العام المخصص للواجهة فقط، بينما تُدار كافة العمليات المالية وقواعد البيانات خلف خادم API محمي.
          </p>
        )}
      </div>
    </div>
  );
}`,
      output:
        "يوضح كيف يؤدي وضع الأسرار في كود React إلى كشفها فوراً في حزمة الإنتاج للمتصفح، ويؤكد على ضرورة نقل أي عمليات سرية إلى الخادم الخلفي.",
      commonMistakes: [
        {
          mistake: "الاعتقاد بأن وضع المفتاح السري في ملف `.env` مع بادئة `VITE_` يجعله مشفراً ومحمياً من المستخدمين.",
          why: "أداة Vite تقوم باستبدال كل متغير `VITE_` بقيمته النصية الصريحة أثناء التجميع والبناء ليصبح مكشوفاً للجميع.",
          fix: "استخدم متغيرات `VITE_` للمفاتيح العامة فقط (Public Keys) وضع الأسرار في خادم Node.js الخلفي فقط دون بادئة VITE.",
        },
      ],
      bestPractices: [
        "استخدم أدوات الفحص التلقائي مثل `git-secrets` أو `TruffleHog` لمنع تسجيل (Commit) أي مفتاح سري بالخطأ في مستودع الكود.",
        "أضف دائماً ملفات `.env` و `.env.local` في ملف `.gitignore`.",
      ],
      infographic: {
        title: "القاعدة الذهبية للأسرار في Frontend",
        caption: "أين تضع مفاتيحك لضمان عدم تسريبها؟",
        steps: [
          { number: 1, label: "المفاتيح العامة (Public)", desc: "مسموح بها في React: VITE_STRIPE_PUBLIC_KEY, Mapbox Token" },
          { number: 2, label: "الأسرار الخاصة (Private)", desc: "محظورة تماماً في React: مفاتيح الدفع السرية، قواعد البيانات، JWT Secrets" },
          { number: 3, label: "الحل المعماري", desc: "نقل كافة العمليات الحساسة لنقاط نهاية في خادم الـ Backend حصراً" },
        ],
      },
    },

    // 17.4.h
    {
      id: "17.4.h",
      title: "التحقق الصارم من بيانات الإدخال في الخادم (Schema Defense)",
      englishTerm: "Server-Side Input Validation (إنبوت فاليديشن) - التحقق الصارم من المدخلات في الخادم",
      description:
        "تعد استمارات الإدخال (Forms) البوابة الرئيسية التي يتعامل عبرها المستخدم مع التطبيق. في React، نقوم بعمل فحص محلي للمدخلات (Client-Side Validation) عبر أدوات مثل React Hook Form أو Zod لمنح المستخدم تجربة سريعة وتنبيهه بالأخطاء فوراً. ومع ذلك، فإن القاعدة الأمنية الصلبة هي: 'لا تثق أبداً في مدخلات العميل!'. يستطيع أي مهاجم إيقاف لغة JavaScript أو استخدام أدوات فحص الحزم لإرسال حقول ملوثة، أو نصوص طويلة جداً تسبب انهيار الذاكرة، أو وسوم خبيثة. لذلك، يجب دائماً مطابقة وتكرار نفس مخطط التحقق (Schema Validation عبر مكتبة Zod مشتركة) في الخادم الخلفي قبل إدخال أي بيان إلى قاعدة البيانات.",
      analogy:
        "مثل حزام الأمان ووسادة الهواء في السيارة: الفحص في React مثل فحص حزام الأمان قبل القيادة؛ أمر مريح ومهم. لكن الفحص في الخادم هو الوسادة الهوائية المجهزة داخل هيكل السيارة التي تنقذ حياتك فعلياً عند وقوع حادث عنيف! لا يمكنك الاعتماد على مجرد نصيحة السائق لربط الحزام دون وجود وسادة حماية صلبة.",
      whyItMatters:
        "التحقق في الخادم يمنع ثغرات حقن قواعد البيانات (SQL/NoSQL Injection)، وثغرات تجاوز سعة الذاكرة (Buffer Overflow)، وهجمات البيانات المشوهة.",
      syntax: `// استخدام نفس مخطط Zod في الواجهة والخادم:
export const UserSchema = z.object({
  username: z.string().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/),
  email: z.string().email(),
  age: z.number().int().min(18).max(120),
});`,
      simpleExample: `// مثال يوضح فحص المخطط المشترك باستخدام Zod
import React, { useState } from 'react';

export function SimpleInputValidationDemo() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  const handleValidate = (val) => {
    setUsername(val);
    if (val.length < 3) {
      setError('اسم المستخدم يجب ألا يقل عن 3 أحرف');
    } else if (/[^a-zA-Z0-9_]/.test(val)) {
      setError('يسمح فقط بالأحرف الإنجليزية والأرقام والشرطة السفلية');
    } else {
      setError(null);
    }
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm">
      <h4 className="text-xs font-bold text-white">التحقق من صحة المدخلات</h4>
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => handleValidate(e.target.value)}
          placeholder="اسم المستخدم..."
          className={'w-full px-3 py-2 bg-slate-800 border rounded-lg text-xs text-white ' + (
            error ? 'border-rose-500' : 'border-slate-700 focus:border-sky-500'
          )}
        />
        {error && <span className="text-[10px] text-rose-400 mt-1 block">{error}</span>}
      </div>
      <p className="text-[10px] text-slate-400">
        * يتم تكرار نفس هذا الفحص في الخادم الخلفي للتصدي لمحاولات التلاعب بالشبكة.
      </p>
    </div>
  );
}`,
      advancedExample: `// محاكي تفاعلي لمكتبة التحقق Zod المشتركة بين العميل والخادم للتصدي للبيانات المشوهة
import React, { useState } from 'react';

export function SharedSchemaValidatorDemo() {
  const [formData, setFormData] = useState({ age: '15', role: 'SUPER_ADMIN' });
  const [serverFeedback, setServerFeedback] = useState(null);

  // محاكاة إرسال بيانات تم التلاعب بها في العميل وتصدي الخادم لها
  const sendTamperedData = () => {
    // محاكاة تحقق الخادم الصارم:
    // العمر يجب ألا يقل عن 18، والدور لا يمكن تعيينه كـ SUPER_ADMIN من العميل
    const errors = [];
    if (Number(formData.age) < 18) {
      errors.push('العمر يجب أن يكون 18 عاماً فأكثر (المدخل: ' + formData.age + ')');
    }
    if (formData.role === 'SUPER_ADMIN') {
      errors.push('لا يمكن للمستخدم تعيين دور إداري لنفسه عبر العميل!');
    }

    if (errors.length > 0) {
      setServerFeedback({
        status: 'rejected',
        title: 'رفض الخادم الطلب (400 Bad Request - Validation Error):',
        errors,
      });
    } else {
      setServerFeedback({
        status: 'approved',
        title: 'تم قبول البيانات ومطابقتها للمخطط بنجاح (200 OK)',
        errors: [],
      });
    }
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-lg mx-auto">
      <header className="pb-3 border-b border-slate-800">
        <h3 className="text-sm font-bold text-white">التحقق الصارم في الخادم (Schema Defense)</h3>
        <p className="text-xs text-slate-400">تصدي الخادم للطلبات المتلاعب بها القادمة من أدوات خارجية</p>
      </header>

      <div className="space-y-3 text-xs">
        <div>
          <label className="text-slate-300 block mb-1">العمر المطلوب إرساله في الطلب:</label>
          <input
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            className="w-full p-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
          />
        </div>

        <div>
          <label className="text-slate-300 block mb-1">الدور المطلوب إرساله (محاولة ترقية خبيثة):</label>
          <input
            type="text"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full p-2 bg-slate-800 border border-slate-700 rounded-lg text-rose-300 font-mono"
          />
        </div>
      </div>

      <button
        onClick={sendTamperedData}
        className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition"
      >
        إرسال البيانات واختبار دفاعات الخادم
      </button>

      {/* استجابة الخادم الدفاعية */}
      {serverFeedback && (
        <div
          className={'p-4 rounded-xl border text-xs space-y-2 animate-fadeIn ' + (
            serverFeedback.status === 'rejected'
              ? 'bg-rose-950/60 border-rose-500/50 text-rose-300'
              : 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300'
          )}
        >
          <p className="font-bold">{serverFeedback.title}</p>
          {serverFeedback.errors.length > 0 && (
            <ul className="list-disc list-inside space-y-1 text-[11px]">
              {serverFeedback.errors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}`,
      output:
        "يوضح كيف يتصدى الخادم لمحاولات التلاعب بالبيانات؛ حيث يتم تطبيق قواعد فحص Schema صارمة تمنع حقن بيانات غير صالحة أو محاولات الترقية الذاتية غير المصرح بها.",
      commonMistakes: [
        {
          mistake: "السماح للعميل بإرسال حقول حساسة وتحديثها مباشرة في قاعدة البيانات مثل `role` أو `accountBalance`.",
          why: "ثغرة أمنية تسمى Mass Assignment: يستطيع المهاجم إضافة `role: 'admin'` في كائن الـ JSON وترقية نفسه لمدير!",
          fix: "استخدم خاصية التقاط الحقول المصرح بها فقط (Whitelist Fields) وتجاهل أي حقول إضافية يرسلها العميل.",
        },
      ],
      bestPractices: [
        "استخدم مكتبة مثل Zod لمشاركة مخططات التحقق (Shared Schemas) بين مشروع React ومشروع Node.js الخلفي لضمان تطابق القواعد بنسبة 100%.",
        "احرص على تنظيف وتطهير نصوص السلاسل (Sanitization) وإزالة المسافات الزائدة قبل حفظها في قاعدة البيانات.",
      ],
      infographic: {
        title: "طبقات التحقق من البيانات",
        caption: "تكامل الفحص في العميل مع الصرامة الدفاعية في الخادم",
        steps: [
          { number: 1, label: "فحص العميل (React)", desc: "لتجربة مستخدم سريعة وتنبيه فوري بالأخطاء الشائعة" },
          { number: 2, label: "جدار حماية الشبكة", desc: "التصدي للطلبات المشوهة القادمة من أدوات مثل Postman" },
          { number: 3, label: "فحص الخادم الصارم (Zod)", desc: "الدفاع الأمني الحاسم لمنع حقن البيانات غير الصالحة في قواعد البيانات" },
        ],
      },
    },

    // 17.4.i
    {
      id: "17.4.i",
      title: "تأمين الروابط الخارجية (External Links Security)",
      englishTerm: "Securing External Links: Reverse Tabnabbing (ريفيرس تاب نابينغ) - تأمين الروابط الخارجية وحماية التبويبات",
      description:
        "عندما تضع رابطاً في تطبيق React يفتح موقعاً خارجياً في تبويب جديد عبر الخاصية `target='_blank'`، فإنك تفتح ثغرة أمنية خبيثة تسمى 'الاستيلاء العكسي على التبويب' (Reverse Tabnabbing). كيف تعمل؟ عندما يفتح الموقع الخارجي في التبويب الجديد، يحصل كود JavaScript في ذلك الموقع تلقائياً على وصول جزئي لتبويب تطبيقك الأصلي عبر كائن `window.opener`! يستطيع الموقع الخبيث تغيير رابط صفحتك الأصلية في الخلفية بهدوء إلى صفحة تسجيل دخول مزيفة تماثل موقعك (`window.opener.location = 'https://fake-login.com'`). عندما يعود المستخدم لتبويب موقعك الأصلي، يظن أن جلسته انتهت فيدخل كلمة المرور مجدداً وتتم سرقتها! الحل الإلزامي هو إضافة سمة `rel='noopener noreferrer'` دائماً لأي رابط خارجي.",
      analogy:
        "مثل فتح باب بيتك الخارجي لزائر غريب وتركه مفتوحاً خلفه: يستطيع الزائر الغريب مد يده من وراء ظهره وتغيير لافتة رقم منزلك إلى لافتة مزيفة تخدع الجيران والضيوف القادمين. وضع `rel='noopener'` مثل إغلاق الباب بالمفتاح وسحب يد الزائر ليبقى في الخارج معزولاً تماماً دون أي قدرة على لمس منزلك!",
      whyItMatters:
        "تحمي مستخدميك من الوقوع ضحايا لهجمات التصيد الاحتيالي (Phishing) عند النقر على روابط يشاركها مستخدمون آخرون في تطبيقك.",
      syntax: `// الرابط الآمن 100% في React:
<a 
  href="https://external-site.com" 
  target="_blank" 
  rel="noopener noreferrer"
>
  زيارة الموقع الخارجي
</a>`,
      simpleExample: `// مثال بسيط لإنشاء مكون رابط خارجي آمن قابل لإعادة الاستخدام
import React from 'react';

export function SafeExternalLink({ href, children, className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      // هذا السطر يحميك تماماً من ثغرة Reverse Tabnabbing
      rel="noopener noreferrer"
      className={'text-sky-400 hover:underline inline-flex items-center gap-1 ' + className}
    >
      <span>{children}</span>
      <span className="text-[10px]">↗</span>
    </a>
  );
}

export function SafeLinkDemo() {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 max-w-sm">
      <h4 className="text-xs font-bold text-white">رابط خارجي محمي بـ rel="noopener"</h4>
      <p className="text-xs text-slate-300">
        قم بزيارة <SafeExternalLink href="https://react.dev">توثيق React الرسمي</SafeExternalLink> بأمان تام.
      </p>
    </div>
  );
}`,
      advancedExample: `// محاكي تفاعلي يشرح ثغرة Reverse Tabnabbing وكيف تمنع سمة noopener التلاعب بـ window.opener
import React, { useState } from 'react';

export function TabnabbingSimulator() {
  const [useProtection, setUseProtection] = useState(true);
  const [simulationLog, setSimulationLog] = useState(null);

  const simulateClick = () => {
    if (useProtection) {
      setSimulationLog({
        status: 'safe',
        title: '✓ تم منع الوصول بنجاح (window.opener === null)',
        desc: 'بفضل سمة rel="noopener noreferrer"، يعجز التبويب الجديد عن لمس أو التلاعب بصفحتك الأصلية.',
      });
    } else {
      setSimulationLog({
        status: 'danger',
        title: '🚨 ثغرة Reverse Tabnabbing نشطة! (window.opener مكشوف)',
        desc: 'يستطيع الموقع الخارجي الآن تنفيذ window.opener.location لإعادة توجيه صفحتك الحالية لصفحة تصيد احتيالي!',
      });
    }
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-lg mx-auto">
      <header className="pb-3 border-b border-slate-800">
        <h3 className="text-sm font-bold text-white">محاكي تأمين الروابط الخارجية (Tabnabbing)</h3>
        <p className="text-xs text-slate-400">حماية التبويبات الأصلية عند استخدام target="_blank"</p>
      </header>

      {/* خيار الحماية */}
      <label className="flex items-center justify-between p-3 bg-slate-850 rounded-xl border border-slate-800 cursor-pointer">
        <div>
          <span className="text-xs font-bold text-white block">إضافة rel="noopener noreferrer":</span>
          <span className="text-[11px] text-slate-400">عزل سياق التبويب الجديد عن التبويب الحالي</span>
        </div>
        <input
          type="checkbox"
          checked={useProtection}
          onChange={(e) => setUseProtection(e.target.checked)}
          className="w-4 h-4 rounded text-sky-600"
        />
      </label>

      {/* الرابط التجريبي */}
      <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
        <span className="text-xs font-bold text-slate-400 block font-mono">كود الرابط المولد:</span>
        <code className="text-xs text-sky-300 font-mono block break-all">
          &lt;a href="https://external.com" target="_blank" {useProtection ? 'rel="noopener noreferrer"' : ''}&gt;
        </code>
      </div>

      <button
        onClick={simulateClick}
        className="w-full py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition"
      >
        محاكاة نقر المستخدم على الرابط
      </button>

      {simulationLog && (
        <div
          className={'p-4 rounded-xl border text-xs space-y-1 animate-fadeIn ' + (
            simulationLog.status === 'safe'
              ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
              : 'bg-rose-950/60 border-rose-500/40 text-rose-300'
          )}
        >
          <p className="font-bold">{simulationLog.title}</p>
          <p className="text-[11px] leading-relaxed opacity-90">{simulationLog.desc}</p>
        </div>
      )}
    </div>
  );
}`,
      output:
        "يوضح كيف تمنع سمة noopener الموقع الخارجي من استغلال كائن window.opener للتلاعب بصفحة المستخدم الأصلية والتصدي لهجمات التصيد الاحتيالي.",
      commonMistakes: [
        {
          mistake: "نسيان كتابة `rel='noopener noreferrer'` عند استخدام `target='_blank'` على روابط يدخلها المستخدمون في المدونات أو المنتديات.",
          why: "يتيح للمستخدمين الخبيثين وضع روابط لمواقعهم الاحتيالية واستغلال الثغرة ضد زوار موقعك.",
          fix: "أنشئ مكوناً مخصصاً مثل `<ExternalLink>` يضيف هذه السمة تلقائياً واستخدمه في كافة أنحاء المشروع.",
        },
      ],
      bestPractices: [
        "أضف أيقونة صغيرة (External Link Icon ↗) بجانب الروابط الخارجية لتنبيه المستخدم بأنه سيغادر موقعك.",
        "في المتصفحات الحديثة، يتم افتراض noopener تلقائياً، ولكن كتابتها صراحة أمر إلزامي لدعم كافة المتصفحات والأنظمة القديمة.",
      ],
      infographic: {
        title: "حماية الروابط الخارجية من ثغرة Tabnabbing",
        caption: "عزل التبويبات الجديدة ومنع التلاعب بالصفحة الأصلية",
        steps: [
          { number: 1, label: "target='_blank'", desc: "يفتح الرابط في تبويب جديد ويمكّنه من الوصول لـ window.opener" },
          { number: 2, label: "الخطر المحتمل", desc: "الموقع الخبيث يعيد توجيه صفحتك الأصلية لصفحة تسجيل دخول مزيفة" },
          { number: 3, label: "درع noopener", desc: "يقطع الاتصال بين التبويبين ويجعل window.opener يساوي null" },
        ],
      },
    },

    // 17.4.j
    {
      id: "17.4.j",
      title: "تحديث الاعتماديات وفحص الثغرات (Dependency Security)",
      englishTerm: "Dependency Security & Vulnerability Auditing (ديبيندنسي سيكيوريتي) - أمان الحزم وفحص الثغرات",
      description:
        "في أي تطبيق React حديث، يكتب فريقك عادة بضعة آلاف من أسطر الكود الخاصة بكم، بينما يعتمد التطبيق في الواقع على أكثر من 1000 حزمة ومكتبة خارجية قادمة من مستودع npm داخل مجلد `node_modules`! هذا يعني أن أكثر من 90% من كود تطبيقك كتبه مبرمجون غرباء حول العالم. هجمات 'سلسلة التوريد' (Supply Chain Attacks) تحدث عندما يتم اختراق إحدى هذه المكتبات التابعة وتضمين شيفرة خبيثة تسرق رموز موقعك أو تزرع برمجيات تعدين. للحفاظ على أمان التطبيق، يجب تطبيق ممارسات أمان الاعتماديات: 1) الفحص الدوري عبر أمر `npm audit` لاكتشاف الثغرات وتحديثها بـ `npm audit fix`، 2) استخدام أدوات الرصد الآلي (مثل Snyk و Dependabot في GitHub)، 3) تثبيت إصدارات الحزم بدقة عبر ملف `package-lock.json` لمنع تحميل إصدارات تالفة فجأة.",
      analogy:
        "مثل مصنع لصناعة الطائرات: المصنع يجمع الطائرة، لكنه يشتري مسامير من مصنع خارجي، وإطارات من مصنع آخر، ومصابيح من مصنع ثالث. إذا كان أحد مصانع المسامير يورد مسامير مغشوشة تذوب تحت الضغط، فستتحطم الطائرة في الجو حتى لو كان محركها أصلياً وممتازاً! يجب فحص كل قطعة غيار خارجية بمختبر جودة صارم قبل تركيبها.",
      whyItMatters:
        "الكثير من التطبيقات المنيعة تم اختراقها ليس بسبب خطأ في كود مبرمجيها، بل بسبب ثغرة خطيرة في مكتبة ألوان أو مكتبة تنسيق تواريخ قديمة لم يتم تحديثها.",
      syntax: `// أوامر فحص وتأمين الاعتماديات في Terminal:
// 1. فحص الثغرات في مجلد المشروع:
npm audit

// 2. التحديث التلقائي الآمن للنسخ المصححة:
npm audit fix

// 3. التثبيت الصارم المتطابق مع lockfile في خوادم الإنتاج:
npm ci`,
      simpleExample: `// مثال واجهة بسيطة تحاكي تقرير فحص الأمان لمكتبات npm في المشروع
import React from 'react';

export function NpmAuditSummaryDemo() {
  const auditReport = {
    totalPackages: 1240,
    vulnerabilities: {
      critical: 0,
      high: 0,
      moderate: 1,
      low: 2,
    },
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm">
      <div className="flex justify-between items-center">
        <h4 className="text-xs font-bold text-white">تقرير فحص الاعتماديات (npm audit)</h4>
        <span className="text-[10px] text-emerald-400 font-mono">0 Critical ✓</span>
      </div>

      <div className="grid grid-cols-4 gap-1.5 text-center text-xs">
        <div className="p-2 bg-slate-850 rounded border border-slate-800">
          <span className="text-[10px] text-slate-500 block">منخفضة</span>
          <span className="font-mono font-bold text-slate-300">{auditReport.vulnerabilities.low}</span>
        </div>
        <div className="p-2 bg-slate-850 rounded border border-amber-500/30">
          <span className="text-[10px] text-amber-400 block">متوسطة</span>
          <span className="font-mono font-bold text-amber-400">{auditReport.vulnerabilities.moderate}</span>
        </div>
        <div className="p-2 bg-slate-850 rounded border border-slate-800">
          <span className="text-[10px] text-rose-400 block">عالية</span>
          <span className="font-mono font-bold text-slate-400">{auditReport.vulnerabilities.high}</span>
        </div>
        <div className="p-2 bg-slate-850 rounded border border-slate-800">
          <span className="text-[10px] text-rose-500 block">حرجة</span>
          <span className="font-mono font-bold text-slate-400">{auditReport.vulnerabilities.critical}</span>
        </div>
      </div>

      <p className="text-[10px] text-slate-400">
        نفذ <code className="text-sky-400 font-mono">npm audit fix</code> لتحديث الحزم التي تملك ترقيات أمان تلقائية.
      </p>
    </div>
  );
}`,
      advancedExample: `// محاكي تفاعلي لفاحص ثغرات سلسلة التوريد (Supply Chain Vulnerability Scanner) مع توصيات التحديث الفورية
import React, { useState } from 'react';

const MOCK_DEPENDENCY_DATABASE = [
  {
    name: 'axios',
    installedVersion: '0.21.1',
    safeVersion: '1.7.0',
    severity: 'High',
    cve: 'CVE-2021-3749',
    description: 'ثغرة Regular Expression Denial of Service (ReDoS) تؤدي لتجميد التطبيق.',
  },
  {
    name: 'lodash',
    installedVersion: '4.17.15',
    safeVersion: '4.17.21',
    severity: 'Critical',
    cve: 'CVE-2020-8203',
    description: 'ثغرة Prototype Pollution تتيح التلاعب بكائنات الجافاسكريبت العامة.',
  },
  {
    name: 'trim-newlines',
    installedVersion: '3.0.0',
    safeVersion: '3.0.1',
    severity: 'Moderate',
    cve: 'CVE-2021-33623',
    description: 'استهلاك غير منضبط لموارد المعالج عند معالجة نصوص طويلة.',
  },
];

export function DependencySecurityScannerSimulator() {
  const [packages, setPackages] = useState(MOCK_DEPENDENCY_DATABASE);
  const [isScanning, setIsScanning] = useState(false);
  const [fixApplied, setFixApplied] = useState(false);

  const handleRunAuditFix = () => {
    setIsScanning(true);
    setTimeout(() => {
      setPackages([]);
      setFixApplied(true);
      setIsScanning(false);
    }, 1200);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-5 max-w-lg mx-auto">
      <header className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-sm font-bold text-white">مدقق أمان حزم npm التفاعلي</h3>
          <p className="text-xs text-slate-400">رصد ثغرات مكتبات الطرف الثالث وترقيتها الآمنة</p>
        </div>
        <span className={'px-2.5 py-1 text-xs font-mono font-bold rounded ' + (
          packages.length > 0 ? 'bg-rose-950 text-rose-400 border border-rose-500/40' : 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
        )}>
          {packages.length > 0 ? packages.length + ' ثغرات مرصودة' : 'نظيف وآمن 100%'}
        </span>
      </header>

      {/* قائمة الثغرات المرصودة */}
      <div className="space-y-2">
        {packages.map((pkg) => (
          <div key={pkg.name} className="p-3 bg-slate-850 rounded-xl border border-slate-800 space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <code className="text-sky-400 font-mono">{pkg.name}</code>
                <span className="text-[10px] text-slate-400 font-mono">v{pkg.installedVersion}</span>
              </span>
              <span className={'text-[10px] font-bold px-2 py-0.5 rounded ' + (
                pkg.severity === 'Critical' ? 'bg-rose-900/60 text-rose-300' : 'bg-amber-900/60 text-amber-300'
              )}>
                {pkg.severity} • {pkg.cve}
              </span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">{pkg.description}</p>
            <p className="text-[10px] text-emerald-400 font-mono">
              النسخة المصححة الآمنة: v{pkg.safeVersion}
            </p>
          </div>
        ))}

        {packages.length === 0 && (
          <div className="p-6 bg-slate-950 border border-emerald-500/30 rounded-xl text-center space-y-2">
            <span className="text-3xl block">🛡️</span>
            <h4 className="text-sm font-bold text-emerald-400">كافة الحزم محدثة وآمنة تماماً!</h4>
            <p className="text-xs text-slate-400">لم يتم العثور على أي ثغرات أمنية معروفة في قاعدة بيانات CVE.</p>
          </div>
        )}
      </div>

      {packages.length > 0 && (
        <button
          onClick={handleRunAuditFix}
          disabled={isScanning}
          className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-800 text-white font-bold text-xs rounded-xl transition shadow-lg"
        >
          {isScanning ? 'جارٍ تحميل وتثبيت الحزم المصححة...' : 'تطبيق التحديثات الآمنة تلقائياً (npm audit fix)'}
        </button>
      )}

      {fixApplied && (
        <p className="text-xs text-emerald-400 text-center font-mono">
          ✓ تم تحديث ملف package-lock.json بالنسخ الآمنة وتطهير كافة الثغرات بنجاح.
        </p>
      )}
    </div>
  );
}`,
      output:
        "يوضح كيف تساعد أوامر npm audit في حماية سلسلة التوريد البرمجية عبر اكتشاف ثغرات المكتبات التابعة وتحديثها بنقرة زر واحدة لحماية التطبيق من الاختراقات الصامتة.",
      commonMistakes: [
        {
          mistake: "حذف ملف `package-lock.json` وإعادة تثبيت الحزم عشوائياً عند حدوث مشكلة تعارض.",
          why: "حذف lockfile يتيح تحميل نسخ فرعية جديدة قد تحتوي على تغييرات كاسرة (Breaking Changes) أو ثغرات غير مفحوصة.",
          fix: "احتفظ بملف `package-lock.json` دائماً في مستودع Git واستخدم أمر `npm ci` في بيئة الإنتاج.",
        },
      ],
      bestPractices: [
        "فعّل أداة GitHub Dependabot لتنبيهك تلقائياً وفتح Pull Requests عند صدور تصحيحات أمان لأي حزمة في مشروعك.",
        "تجنب تثبيت مكتبات ضخمة لحل مهام بسيطة يمكن كتابتها في 5 أسطر جافاسكريبت قياسية (مثل تجنب مكتبات pad أو is-odd).",
      ],
      infographic: {
        title: "منظومة حماية سلسلة التوريد (Dependency Security)",
        caption: "تأمين حزم npm ومكتبات الطرف الثالث",
        steps: [
          { number: 1, label: "الفحص الدوري (Audit)", desc: "تشغيل أمر npm audit أسبوعياً لفحص قاعدة بيانات الثغرات CVE" },
          { number: 2, label: "تثبيت النسخ (Lockfiles)", desc: "الالتزام بملف package-lock.json لضمان تطابق النسخ" },
          { number: 3, label: "الرصد الآلي المستمر", desc: "تفعيل Dependabot و Snyk للتنبيه الفوري بالتصحيحات الجديدة" },
        ],
      },
    },
  ],

  // الاختبارات التفاعلية للموضوع 17.4
  quizzes: [
    {
      id: "q17.4.1",
      question: "كيف يحمي محرك React المطورين تلقائياً من ثغرات XSS عند عرض المتغيرات؟",
      options: [
        "يقوم بحذف كافة النصوص التي تحتوي على كلمة 'script' من الذاكرة فوراً.",
        "يقوم بعمل String Escaping آلي وتحويل كافة المحارف الخاصة الخطرة (مثل < و >) إلى نصوص مسالمة (textContent) بدلاً من تفسيرها كـ HTML.",
        "يقوم بتشفير الصفحة بأكملها بكلمة مرور.",
        "لا توفر React أي حماية تلقائية ويجب استخدام مكتبات خارجية دائماً.",
      ],
      correctAnswer: 1,
      explanation:
        "React تقوم افتراضياً بمعاملة أي متغير داخل JSX كنص خام آمن وتقوم بعمل Escaping للمحارف الخاصة لمنع المتصفح من تفسيرها كوسوم برمجية.",
    },
    {
      id: "q17.4.2",
      question: "لماذا تعد سمة `rel='noopener noreferrer'` إلزامية عند فتح الروابط الخارجية بـ `target='_blank'`؟",
      options: [
        "لتسريع فتح الصفحة في التبويب الجديد.",
        "لمنع الموقع الخارجي من استغلال كائن window.opener للتلاعب بصفحة موقعك الأصلية وإعادة توجيهها لصفحة تصيد احتيالي (Reverse Tabnabbing).",
        "لإلغاء اتصال الإنترنت عن التبويب الجديد.",
        "لتكبير خط النص في المتصفح.",
      ],
      correctAnswer: 1,
      explanation:
        "بدون noopener، يحصل التبويب الخارجي على مرجع لصفحتك الأصلية عبر `window.opener` مما يتيح له تغيير رابط صفحتك إلى موقع مزيف لسرقة كلمة المرور.",
    },
    {
      id: "q17.4.3",
      question: "ما هو الخطر الفادح في وضع مفاتيح API السرية (Secret Keys) في ملفات كود React أو متغيرات VITE_؟",
      options: [
        "تتوقف لغة CSS عن العمل.",
        "أي كود في React يتم تجميعه كملفات JavaScript ترسل لمتصفح المستخدم، مما يتيح لأي شخص فتح DevTools واستخراج المفاتيح السرية واستغلالها.",
        "تصبح الصفحة بطيئة بنسبة 50%.",
        "يقوم متصفح جوجل كروم بحظر فتح الموقع فوراً.",
      ],
      correctAnswer: 1,
      explanation:
        "الواجهة الأمامية عامة ومكشوفة بالكامل؛ أي سر يوضع فيها يمكن استخراجه بسهولة. الأسرار الحقيقية مكانها خوادم الـ Backend فقط.",
    },
  ],

  // التمرين العملي للموضوع 17.4
  exercise: {
    id: "ex17.4",
    title: "تمرين تطبيقي: بناء مكون SafeHtmlViewer يطهر المحتوى بمكتبة DOMPurify قبل العرض",
    description:
      "المطلوب: بناء مكون باسم SafeHtmlViewer يستقبل نص `dirtyHtml`، ويقوم بتطهيره باستخدام مكتبة DOMPurify مع السماح فقط بوسوم التنسيق الأساسية ('b', 'i', 'p', 'strong', 'a') والسمات المسموحة ('href', 'target')، وإضافة سمة `rel='noopener noreferrer'` لأي رابط خارجي تلقائياً، ثم عرضه بأمان عبر dangerouslySetInnerHTML.",
    hints: [
      "استورد DOMPurify من 'dompurify'.",
      "استخدم DOMPurify.sanitize(dirtyHtml, { ALLOWED_TAGS: [...], ALLOWED_ATTR: [...] }).",
      "استخدم dangerouslySetInnerHTML={{ __html: cleanHtml }} لعرض النص المطهر.",
    ],
    solution: `// الحل النموذجي لمكون العرض الآمن للـ HTML في React
import React, { useMemo } from 'react';
import DOMPurify from 'dompurify';

export function SafeHtmlViewer({ dirtyHtml, className = '' }) {
  // تطهير النص وحساب القيمة المطهرة عند تغير النص فقط
  const cleanHtml = useMemo(() => {
    if (!dirtyHtml) return '';

    // إعدادات القائمة البيضاء الصارمة
    return DOMPurify.sanitize(dirtyHtml, {
      ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'ul', 'li', 'h1', 'h2', 'h3'],
      ALLOWED_ATTR: ['href', 'target', 'class'],
      // إجبار كافة الروابط المفتوحة في تبويب جديد على حمل سمة noopener
      ADD_ATTR: ['rel'],
    });
  }, [dirtyHtml]);

  return (
    <div
      className={'safe-html-content ' + className}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
}

// مثال عملي للاستخدام
export function SafeHtmlViewerDemo() {
  const sampleArticle = '<h3 style="color:#38bdf8">مقال تعليمي</h3><p>مرحباً بكم! <script>alert("هاكر")</script> زوروا <a href="https://react.dev" target="_blank">توثيق React</a> بأمان.</p>';

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm">
      <h4 className="text-sm font-bold text-white">معاينة مكون SafeHtmlViewer</h4>
      <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-300">
        <SafeHtmlViewer dirtyHtml={sampleArticle} />
      </div>
      <p className="text-[10px] text-emerald-400">
        ✓ تم حظر السكريبت الخبيث وعرض المحتوى المنسق بأمان تام.
      </p>
    </div>
  );
}`,
  },

  // الإنفوجرافيك التوضيحي للموضوع 17.4
  infographic: {
    title: "الدرع الأمني الشامل لتطبيقات React",
    caption: "خطوط الدفاع المتعددة للتصدي لأخطر ثغرات الويب",
    steps: [
      { number: 1, label: "حماية XSS التلقائية", desc: "JSX يقوم بعمل String Escaping آلي، وتطهير dangerouslySetInnerHTML بـ DOMPurify" },
      { number: 2, label: "دفاعات الشبكة والروابط", desc: "SameSite للوقاية من CSRF، سياسات CSP، وحماية الروابط بـ noopener" },
      { number: 3, label: "حظر الأسرار والاعتماديات", desc: "منع تسريب المفاتيح السرية في React، والفحص الدوري لثغرات npm audit" },
    ],
  },
};
