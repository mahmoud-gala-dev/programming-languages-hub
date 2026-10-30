// src/data/sections/section13/topic3.js

export const topic3 = {
  id: "13-3",
  title: "تعديل بيانات الخادم وإدارة الطفرات في TanStack Query",
  englishTitle: "Server Mutations, Cache Invalidation & Optimistic Updates",
  description:
    "دليل شامل ومتعمق لإدارة وتعديل بيانات الخادم باستخدام خطاف useMutation في TanStack Query. يغطي هذا القسم تنفيذ عمليات الإرسال والتحديث والحذف (POST, PUT, DELETE)، إبطال الكاش الذكي عبر invalidateQueries لإجبار الاستعلامات على جلب أحدث البيانات تلقائياً، التعديل المباشر في الذاكرة عبر setQueryData، بناء التحديثات التفاؤلية (Optimistic Updates) التي تعكس التعديلات في واجهة المستخدم فورياً بزمن 0 مللي ثانية مع خطة تراجع دقيقة (Rollback) عند فشل الطلب، ومعالجة أخطاء الطفرات وإطلاق التأثيرات الجانبية المتسلسلة (onMutate, onSuccess, onError, onSettled).",
  subtopics: [
    {
      id: "13-3-a",
      title: "استخدام useMutation وإدارة دورة حياة الطفرات",
      englishTitle: "Using useMutation & Mutation Lifecycle Management",
      pronunciation: "يوزنج يوز ميوتيشن آند ميوتيشن لايف سايكل مانيجمنت",
      meaning: "الخطاف المخصص لتنفيذ عمليات الإنشاء والتعديل والحذف على الخادم",
      description:
        "بينما يُستخدم `useQuery` لجلب واسترجاع البيانات التقريرية (Declarative Read Operations)، يُستخدم `useMutation` لتنفيذ كافة العمليات الإجرائية التي تحدث تغييراً أو طفرة في بيانات الخادم (Imperative Write / Side-effect Operations) مثل إنشاء حساب، إرسال طلب، أو حذف منشور. على خلاف useQuery، لا تنطلق الطفرة تلقائياً عند تركيب المكون، بل توفر دالة تسمى `mutate` أو `mutateAsync` يستدعيها المطور يدوياً عند وقوع حدث معين (مثل النقر على زر الإرسال أو تسليم نموذج). يوفر `useMutation` حالات دقيقة لتتبع دورة الحياة: 1) `isPending`: يشير إلى أن عملية التعديل جارية حالياً على الخادم لتعطيل الأزرار وعرض مؤشرات التحميل، 2) `isSuccess`: نجاح العملية، 3) `isError` و `error`: فشل العملية والتقاط الخطأ، 4) `reset`: دالة لتنظيف حالة الطفرة وإعادتها للوضع الأولي، 5) خطافات الأحداث الجانبية: `onMutate`, `onSuccess`, `onError`, و `onSettled`.",
      analogy:
        "useQuery يشبه قراءة قائمة الطعام المعلقة على جدار المطعم؛ بمجرد دخولك تقرأ ما هو معروض فوراً. أما useMutation فيشبه تقديم طلب الوجبة للنادل ودفع الحساب؛ لن يذهب النادل للمطبخ إلا عندما تضغط على زر 'تأكيد الطلب' في يدك.",
      whyItMatters:
        "يوفر useMutation تتبعاً دقيقاً لحالات إرسال النماذج والعمليات الحرجة، ويقضي على الحاجة لتعريف عشرات الـ useState اليدوية لإدارة isSubmitting وأخطاء الإرسال في كل شاشة.",
      syntax: `// بنية useMutation في الإصدار v5:
import { useMutation } from '@tanstack/react-query';

const { mutate, isPending, isError, error, isSuccess } = useMutation({
  mutationFn: async (newTodo) => {
    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    });
    if (!res.ok) throw new Error('فشلت الإضافة');
    return res.json();
  },
  onSuccess: (data) => {
    console.log('تمت العملية بنجاح:', data);
  }
});

// استدعاء الطفرة:
mutate({ title: 'مهمة جديدة' });`,
      simpleExample: `// مثال بسيط لإنشاء منشور جديد باستخدام useMutation
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

export function CreatePostSimple() {
  const [title, setTitle] = useState('');

  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: async (postTitle) => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: postTitle, userId: 1 })
      });
      if (!res.ok) throw new Error('تعذر إرسال المنشور');
      return res.json();
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    // استدعاء دالة الطفرة
    mutate(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-xl max-w-sm">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="عنوان المنشور الجديد..."
        className="w-full p-2 border rounded mb-2 text-sm"
      />
      <button
        type="submit"
        disabled={isPending}
        className="w-full py-2 bg-indigo-600 disabled:opacity-50 text-white rounded text-xs font-bold"
      >
        {isPending ? 'جارٍ النشر على الخادم...' : 'نشر المنشور'}
      </button>

      {isSuccess && <p className="text-emerald-500 text-xs mt-2">تم نشر المقال بنجاح!</p>}
      {isError && <p className="text-rose-500 text-xs mt-2">خطأ: {error.message}</p>}
    </form>
  );
}`,
      advancedExample: `// استدعاء غير متزامن متقدم عبر mutateAsync مع اعتراض الخطأ محلياً بـ try/catch
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

export function AsyncOrderProcessor() {
  const [orderStatus, setOrderStatus] = useState('');

  // تعريف الطفرة مع سياق الأحداث الجانبية
  const checkoutMutation = useMutation({
    mutationFn: async (orderPayload) => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload)
      });
      if (!res.ok) throw new Error('فشلت معالجة بطاقة الدفع (500)');
      return res.json();
    },
    // إمكانية معالجة النجاح والخطأ في مستوى الطفرة العامة
    onSuccess: (data) => {
      console.log('سجل العملية:', data);
    }
  });

  // معالج النقر غير المتزامن الذي يستفيد من الوعد البرمجي بـ mutateAsync
  const handleCheckout = async () => {
    setOrderStatus('جارٍ الاتصال ببوابة الدفع...');
    try {
      // mutateAsync تُرجع Promise يمكن استخدام await معه ومعالجة النتيجة محلياً
      const result = await checkoutMutation.mutateAsync({
        items: ['كتاب React', 'سماعات'],
        total: 450
      });
      setOrderStatus(\`تم الدفع بنجاح! رقم الفاتورة: #\${result.id}\`);
    } catch (err) {
      setOrderStatus(\`فشلت العملية: \${err.message}\`);
    }
  };

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white">
      <h4 className="font-bold text-sm mb-3">معالج الدفع بـ mutateAsync</h4>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 mb-4 text-xs space-y-1">
        <p className="text-slate-400">إجمالي السلة: <strong className="text-white">450 ر.س</strong></p>
        <p className="text-slate-400">حالة العملية: <span className="font-mono text-cyan-400">{orderStatus || 'في الانتظار'}</span></p>
      </div>

      <button
        onClick={handleCheckout}
        disabled={checkoutMutation.isPending}
        className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-lg transition-all"
      >
        {checkoutMutation.isPending ? 'جارٍ معالجة الدفع السحابي...' : 'تأكيد ودفع 450 ر.س 💳'}
      </button>
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم الفارق بين `mutate` العادية (التي تعتمد على الـ callbacks) و `mutateAsync` (التي تُرجع وعداً حقيقياً Promise يتيح كتابة كود تسلسلي بـ `await` والتقاط الاستثناءات داخل بلوك `try...catch` مألوف).",
      commonMistakes: [
        {
          mistake: "استخدام mutateAsync بدون وضعها داخل try...catch، مما يؤدي إلى Unhandled Promise Rejection عند فشل الطلب.",
          fix: "إذا كنت لا تحتاج لانتظار النتيجة برمجياً، استخدم mutate العادية؛ فهي تتعامل مع الأخطاء داخلياً عبر onError دون كسر التطبيق."
        },
        {
          mistake: "محاولة تمرير معلمات متعددة لدالة mutate مثل: mutate(title, content, tags).",
          fix: "دالة mutate تقبل معاملاً واحداً فقط (variables)؛ مرر دائماً كائناً يحتوي على كل المعاملات: mutate({ title, content, tags })."
        }
      ],
      bestPractices: [
        "استخدم mutate لمعظم عمليات واجهة المستخدم واربط الأحداث بـ onSuccess و onError.",
        "عطل دائماً زر الإرسال بواسطة disabled={isPending} لمنع المستخدم من النقر المزدوج المتكرر وإرسال طلبات مضاعفة.",
        "استغل دالة reset() لمسح رسائل الخطأ أو النجاح عند إعادة فتح النموذج أو تعديل الحقول."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "الفارق بين useQuery و useMutation",
        items: [
          {
            title: "useQuery (جلب واسترجاع)",
            points: [
              "النمط: تقريري (Declarative)",
              "الانطلاق: تلقائي فور تركيب المكون على الشاشة",
              "الهدف: قراءة البيانات واستعارتها من الخادم (GET)",
              "إعادة المحاولة: 3 مرات تلقائياً عند الفشل"
            ]
          },
          {
            title: "useMutation (تعديل وتغيير)",
            points: [
              "النمط: إجرائي (Imperative)",
              "الانطلاق: يدوي استجابة لنقرة مستخدم (mutate())",
              "الهدف: تعديل حالة الخادم (POST, PUT, DELETE)",
              "إعادة المحاولة: معطلة افتراضياً لتفادي تكرار العمليات"
            ]
          }
        ]
      }
    },
    {
      id: "13-3-b",
      title: "تنفيذ عمليات POST وPUT وDELETE المعيارية",
      englishTitle: "Executing Standard RESTful CRUD Operations",
      pronunciation: "إكسيكيوتينج ستاندرد ريست فول كرود أوبريشنز",
      meaning: "التطبيق العملي للإنشاء والتعديل والحذف وفق معايير بروتوكول HTTP",
      description:
        "تعديل بيانات الخادم يتبع عادة المعايير العالمية لـ RESTful APIs، حيث يُستخدم `POST` لإنشاء موارد جديدة، و`PUT` لاستبدال المورد بالكامل، و`PATCH` لتعديل حقول محددة جزئياً، و`DELETE` لحذف المورد نهائياً. داخل `mutationFn` في TanStack Query، يُكتب استدعاء الشبكة بصورة نظيفة ومستقلة تماماً. من الأنماط الاحترافية الشائعة تجميع دوال الـ API في طبقة خدمات مستقلة (API Service Module) وتمريرها مباشرة كـ `mutationFn`. يتيح TanStack Query تمرير أي كائن كمتغيرات (Variables) إلى دالة `mutate({ id, data })`، ويتم استقبال هذه المتغيرات تلقائياً كمعامل أول في `mutationFn`، مما يحافظ على نظافة الكود وفصل الواجهة عن منطق الشبكة.",
      analogy:
        "عمليات HTTP تشبه إدارة الملفات في أرشيف ورقي: POST هي إضافة ملف جديد للدرج، PUT هي استبدال الملف القديم بملف جديد تماماً، PATCH هي تعديل رقم هاتف داخل الصفحة الأولى من الملف، و DELETE هي تمزيق الملف ورميه في سلة المهملات.",
      whyItMatters:
        "توحيد معمارية استدعاءات CRUD يسهل إضافة معالجات التوثيق والرموز المميزة (Bearer Tokens) وتوحيد معالجة الأخطاء لكل العمليات في مكان واحد.",
      syntax: `// 1. طفرة إنشاء (POST):
const createMutation = useMutation({
  mutationFn: (newRecord) => api.post('/users', newRecord)
});

// 2. طفرة تعديل (PUT / PATCH):
const updateMutation = useMutation({
  mutationFn: ({ id, updates }) => api.patch(\`/users/\${id}\`, updates)
});

// 3. طفرة حذف (DELETE):
const deleteMutation = useMutation({
  mutationFn: (id) => api.delete(\`/users/\${id}\`)
});`,
      simpleExample: `// مثال على طفرة حذف مورد محدد
import React from 'react';
import { useMutation } from '@tanstack/react-query';

export function DeleteItemButton({ itemId, onItemDeleted }) {
  const { mutate, isPending } = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id}\`, {
        method: 'DELETE'
      });
      if (!res.ok) throw new Error('فشل الحذف');
      return true;
    },
    onSuccess: () => {
      // إبلاغ المكون الأب بإزالة العنصر من القائمة المحلية
      onItemDeleted(itemId);
    }
  });

  return (
    <button
      onClick={() => mutate(itemId)}
      disabled={isPending}
      className="px-3 py-1 bg-rose-600 hover:bg-rose-500 disabled:opacity-50 text-white rounded text-xs"
    >
      {isPending ? 'جارٍ الحذف...' : 'حذف العنصر 🗑️'}
    </button>
  );
}`,
      advancedExample: `// لوحة تحكم متكاملة تدير عمليات الإنشاء والتعديل والحذف في واجهة واحدة
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

export function CrudMutationStudio() {
  const [items, setItems] = useState([
    { id: 1, title: 'تصميم واجهة لوحة التحكم', priority: 'high' },
    { id: 2, title: 'ربط قاعدة بيانات PostgreSQL', priority: 'normal' }
  ]);
  const [titleInput, setTitleInput] = useState('');

  // 1. طفرة الإنشاء (POST)
  const createMutation = useMutation({
    mutationFn: async (newTitle) => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle })
      });
      return res.json();
    },
    onSuccess: (newItem) => {
      setItems((prev) => [...prev, { id: Date.now(), title: titleInput, priority: 'normal' }]);
      setTitleInput('');
    }
  });

  // 2. طفرة التعديل (PATCH)
  const updateMutation = useMutation({
    mutationFn: async ({ id, newPriority }) => {
      const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id}\`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priority: newPriority })
      });
      return res.json();
    },
    onSuccess: (_, variables) => {
      setItems((prev) =>
        prev.map((it) => (it.id === variables.id ? { ...it, priority: variables.newPriority } : it))
      );
    }
  });

  // 3. طفرة الحذف (DELETE)
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id}\`, { method: 'DELETE' });
      return id;
    },
    onSuccess: (deletedId) => {
      setItems((prev) => prev.filter((it) => it.id !== deletedId));
    }
  });

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white">
      <h4 className="font-bold text-sm mb-3">استوديو عمليات CRUD المعيارية</h4>

      {/* نموذج الإنشاء */}
      <div className="flex gap-2 mb-4">
        <input
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          placeholder="عنوان مهمة جديدة..."
          className="flex-1 p-2 bg-slate-950 border border-slate-800 rounded-lg text-xs"
        />
        <button
          onClick={() => titleInput.trim() && createMutation.mutate(titleInput)}
          disabled={createMutation.isPending}
          className="px-4 py-2 bg-indigo-600 disabled:opacity-50 text-xs font-bold rounded-lg"
        >
          {createMutation.isPending ? 'إضافة...' : '➕ إنشاء'}
        </button>
      </div>

      {/* قائمة العناصر مع أزرار التعديل والحذف */}
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
            <div>
              <p className="text-xs font-bold text-slate-200">{item.title}</p>
              <span className={\`text-[10px] px-1.5 py-0.5 rounded font-mono \${
                item.priority === 'urgent' ? 'bg-rose-950 text-rose-300' : 'bg-slate-800 text-slate-400'
              }\`}>
                الأولوية: {item.priority}
              </span>
            </div>

            <div className="flex gap-1.5">
              <button
                onClick={() => updateMutation.mutate({ id: item.id, newPriority: 'urgent' })}
                disabled={updateMutation.isPending}
                className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-[10px] rounded"
              >
                ترقية عاجلة
              </button>
              <button
                onClick={() => deleteMutation.mutate(item.id)}
                disabled={deleteMutation.isPending}
                className="px-2 py-1 bg-rose-950 hover:bg-rose-900 text-rose-300 text-[10px] rounded"
              >
                حذف 🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم نموذجاً معمارياً يجمع الطفرات الثلاث في مكان واحد مع استغلال كائن `variables` في أحداث `onSuccess` لمعرفة المعرف الذي تم حذفه أو تعديله وتحديث الواجهة مباشرة.",
      commonMistakes: [
        {
          mistake: "عدم إرجاع res.json() من دالة mutationFn، مما يحرم onSuccess من استقبال رد الخادم واستغلال بياناته.",
          fix: "احرص دائماً على إرجاع نتيجة الاستدعاء return res.json() لتتمكن من استخدام الرد في تحديث الكاش."
        },
        {
          mistake: "نسيان فحص if (!res.ok) عند استخدام fetch، مما يجعل الطفرة تظن أن خطأ 500 هو عملية ناجحة.",
          fix: "تأكد دائماً من التحقق الصريح من res.ok وإطلاق throw new Error(...) لكي يدخل useMutation في حالة isError."
        }
      ],
      bestPractices: [
        "استخدم كائناً موحداً للمتغيرات { id, data } عند تنفيذ عمليات التعديل لتفادي تشتت المعاملات.",
        "نظم دوال الاتصال بالشبكة في ملف apiServices.js منفصل لكي لا يختلط كود JSX باستدعاءات fetch المباشرة.",
        "عطل الأزرار التفاعلية أثناء إرسال الطفرات لتفادي إرسال طلبات متعددة بالخطأ."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "أنواع الطفرات المعيارية في TanStack Query",
        items: [
          {
            title: "POST (إنشاء مورد جديد)",
            points: [
              "الهدف: إضافة سجل جديد لقاعدة البيانات",
              "المتغيرات: كائن السجل الجديد { name, email }",
              "الإجراء اللاحق: إبطال كاش القوائم لجلب العنصر الجديد"
            ]
          },
          {
            title: "PUT / PATCH (تعديل مورد)",
            points: [
              "الهدف: تحديث حقول مورد قائم بالفعل",
              "المتغيرات: { id, updates }",
              "الإجراء اللاحق: تحديث تفاصيل العنصر وقائمته في الكاش"
            ]
          },
          {
            title: "DELETE (حذف مورد)",
            points: [
              "الهدف: مسح السجل نهائياً من الخادم",
              "المتغيرات: معرف العنصر id",
              "الإجراء اللاحق: إزالة السجل من الكاش أو إعادة جلب القائمة"
            ]
          }
        ]
      }
    },
    {
      id: "13-3-c",
      title: "إبطال الاستعلامات باستخدام invalidateQueries",
      englishTitle: "Smart Cache Invalidation with invalidateQueries",
      pronunciation: "سمارت كاش إنفاليديشن وذ إنفاليديت كويريز",
      meaning: "إعلان تقادم استعلامات محددة وإجبارها على إعادة الجلب التلقائي الفوري",
      description:
        "`queryClient.invalidateQueries` هي الميزة الأكثر قوة وتكاملاً في فلسفة TanStack Query. في التطبيقات التقليدية، عندما ينشئ المستخدم منشوراً جديداً، كان المطور يضطر يدوياً لجلب قائمة المنشورات مجدداً وتحديث حالتها في كل شاشة. أما في TanStack Query، فبمجرد نجاح عملية الإنشاء (في حدث `onSuccess` الخاص بـ `useMutation`)، يكفي أن تستدعي: `queryClient.invalidateQueries({ queryKey: ['todos'] })`. هذا السطر السحري يقوم بأمرين حاسمين فوراً: 1) يضع علامة على كافة الاستعلامات التي تطابق المفتاح بأنها 'متقادمة' (`isStale: true`)، 2) إذا كانت أي من هذه الاستعلامات نشطة حالياً ومعروضة على الشاشة (Active Observers)، يقوم المحرك فوراً بإعادة جلب بياناتها في الخلفية من الخادم، فتتحدث الشاشة بأحدث السجلات في ثوانٍ معدودة وبشكل تلقائي تماماً دون أي كود إضافي.",
      analogy:
        "إبطال الكاش يشبه تشغيل جرس إنذار التحديث في صالة البورصة؛ بمجرد أن تعلن الإدارة عن توفر أرقام جديدة (invalidateQueries)، تلتفت كل الشاشات المعروضة في الصالة فوراً نحو السيرفر لجلب وتحديث الأرقام المعروضة دون أن يضطر موظف للصعود وتغيير كل شاشة بيده.",
      whyItMatters:
        "يقضي إبطال الكاش على مشكلة تباين البيانات وتشتت مصدر الحقيقة؛ إذ يضمن أن إنشاء أو تعديل أي سجل في أي جزء من التطبيق سيؤدي تلقائياً لتحديث كافة القوائم والجداول والعدادات في باقي الشاشات فوراً.",
      syntax: `// إبطال كافة الاستعلامات التي تبدأ بمفتاح 'todos':
queryClient.invalidateQueries({ queryKey: ['todos'] });

// إبطال مطابق للمفتاح بالكامل فقط (Exact Match):
queryClient.invalidateQueries({
  queryKey: ['todos', 'detail', todoId],
  exact: true
});

// إبطال شرطي للاستعلامات النشطة فقط:
queryClient.invalidateQueries({
  queryKey: ['todos'],
  type: 'active'
});`,
      simpleExample: `// مثال على إبطال كاش القائمة بعد إضافة عنصر جديد
import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function AddTodoQuick() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (newTitle) => fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify({ title: newTitle })
    }),
    onSuccess: () => {
      // إبطال كاش قائمة المهام مما يدفع useQuery(['todos']) لجلب القائمة المحدثة فوراً!
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });

  return <button onClick={() => mutate('تعلم إبطال الكاش')} className="btn-primary">إضافة مهمة</button>;
}`,
      advancedExample: `// تطبيق متكامل يوضح التطابق الهرمي الجزئي مقابل الدقيق عند إبطال المفاتيح
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export function InvalidationHierarchyStudio() {
  const queryClient = useQueryClient();
  const [invalidationLog, setInvalidationLog] = useState('');

  // 1. استعلام القائمة العامة
  const { data: generalList = [], dataUpdatedAt: listTime } = useQuery({
    queryKey: ['projects', 'list'],
    queryFn: async () => [{ id: 1, name: 'بوابة الدفع' }, { id: 2, name: 'محرك البحث' }],
    staleTime: 1000 * 60
  });

  // 2. استعلام تفاصيل المشروع رقم 1
  const { data: detailData, dataUpdatedAt: detailTime } = useQuery({
    queryKey: ['projects', 'detail', 1],
    queryFn: async () => ({ id: 1, name: 'بوابة الدفع الإلكترونية الموحدة', budget: '50k' }),
    staleTime: 1000 * 60
  });

  // أ. إبطال شامل لكافة مشاريع النظام (الهرم الجذري: ['projects'])
  const handleInvalidateAll = () => {
    queryClient.invalidateQueries({ queryKey: ['projects'] });
    setInvalidationLog("تم إبطال المفتاح الجذري ['projects'] -> سيتم تحديث القائمة والتفاصيل معاً!");
  };

  // ب. إبطال دقيق للتفاصيل فقط (['projects', 'detail', 1])
  const handleInvalidateDetailOnly = () => {
    queryClient.invalidateQueries({
      queryKey: ['projects', 'detail', 1],
      exact: true
    });
    setInvalidationLog("تم إبطال تفاصيل المشروع #1 بدقة (exact: true) -> القائمة تظل دون مساس!");
  };

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-lg mx-auto text-white">
      <h4 className="font-bold text-sm mb-2 text-emerald-400">استوديو الإبطال الهرمي (Invalidation Hierarchy)</h4>
      <p className="text-xs text-slate-400 mb-4">
        لاحظ كيف يؤثر إبطال المفتاح العام على كافة الفروع التابعة له:
      </p>

      {/* عرض حالتي الكاش */}
      <div className="grid grid-cols-2 gap-3 mb-4 text-xs font-mono">
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
          <p className="text-cyan-400 font-bold mb-1">['projects', 'list']</p>
          <p className="text-slate-300">عناصر: {generalList.length}</p>
          <span className="text-[10px] text-slate-500">محدث: {new Date(listTime).toLocaleTimeString()}</span>
        </div>

        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
          <p className="text-purple-400 font-bold mb-1">['projects', 'detail', 1]</p>
          <p className="text-slate-300">{detailData?.name}</p>
          <span className="text-[10px] text-slate-500">محدث: {new Date(detailTime).toLocaleTimeString()}</span>
        </div>
      </div>

      {/* أزرار الإبطال المختلفة */}
      <div className="flex gap-2 mb-3">
        <button
          onClick={handleInvalidateAll}
          className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-xs font-bold rounded-lg transition-all"
        >
          إبطال جذري ['projects']
        </button>
        <button
          onClick={handleInvalidateDetailOnly}
          className="flex-1 py-2 bg-purple-600 hover:bg-purple-500 text-xs font-bold rounded-lg transition-all"
        >
          إبطال دقيق للتفاصيل فقط
        </button>
      </div>

      {invalidationLog && (
        <div className="p-2.5 bg-slate-950 border border-emerald-900/50 rounded-lg text-emerald-300 text-xs font-mono">
          ⚡ {invalidationLog}
        </div>
      )}
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم خاصية 'التطابق الهرمي البادئ' (Prefix Matching)؛ فاستدعاء `invalidateQueries({ queryKey: ['projects'] })` يبطل تلقائياً كل من `['projects', 'list']` و `['projects', 'detail', 1]` لأنهما يبدآن بنفس البادئة، بينما خاصية `exact: true` تضمن قصر الإبطال على المفتاح المطابق تماماً.",
      commonMistakes: [
        {
          mistake: "استدعاء invalidateQueries بدون تمرير كائن (مثل كتابة invalidateQueries(['todos']) في v5).",
          fix: "في الإصدار v5، يجب دائماً تمرير كائن يحتوي على خاصية queryKey: invalidateQueries({ queryKey: ['todos'] })."
        },
        {
          mistake: "إبطال الكاش بشكل أعمى لكافة استعلامات التطبيق بـ invalidateQueries() دون تحديد مفتاح، مما يثقل الخادم بعشرات الطلبات المتزامنة.",
          fix: "حدد دائماً أضيق مفتاح ممكن لتوجيه التحديث فقط للشاشات المعنية بتغيير البيانات."
        }
      ],
      bestPractices: [
        "ضع استدعاء invalidateQueries دائماً داخل onSuccess أو onSettled في دالة useMutation.",
        "استغل المطابقة الجزئية (Fuzzy Matching) لإبطال كافة الفروع التابعة لمجال معين (مثل إبطال ['users'] لتحديث القوائم والتفاصيل معاً).",
        "استخدم exact: true عندما ترغب في تحديث عنصر فردي محدد فقط دون التأثير على القائمة العامة."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "أنماط مطابقة المفاتيح في invalidateQueries",
        items: [
          {
            title: "المطابقة البادئة (Prefix Default)",
            points: [
              "المفتاح: ['todos']",
              "يطابق: ['todos'], ['todos', 'list'], ['todos', 5]",
              "الأثر: تحديث هرمي شامل لجميع الفروع المرتبطة"
            ]
          },
          {
            title: "المطابقة الصارمة (Exact Match)",
            points: [
              "المفتاح: ['todos', 'detail', 5], exact: true",
              "يطابق: هذا المفتاح المتطابق بحذافيره فقط",
              "الأثر: تحديث عنصر فردي دون إزعاج باقي القوائم"
            ]
          },
          {
            title: "الفلترة حسب النوع (Active Only)",
            points: [
              "الخيار: type: 'active'",
              "الأثر: تحديث الاستعلامات المعروضة على الشاشة فقط",
              "الفائدة: توفير موارد الشبكة بتأجيل الاستعلامات الخاملة"
            ]
          }
        ]
      }
    },
    {
      id: "13-3-d",
      title: "تحديث الكاش المباشر باستخدام setQueryData",
      englishTitle: "Direct In-Memory Cache Updates with setQueryData",
      pronunciation: "دايركت إن ميموري كاش أبديتس وذ سيت كويري داتا",
      meaning: "حقن وتعديل البيانات في الكاش مباشرة وبشكل متزامن دون انتظار استجابة الخادم",
      description:
        "بينما تقوم `invalidateQueries` بإرسال طلب شبكة جديد لجلب أحدث البيانات من الخادم، توفر دالة `queryClient.setQueryData` نهجاً مختلفاً تماماً: 'التعديل المتزامن المباشر في الذاكرة' (Synchronous Cache Mutation). تتيح لك هذه الدالة الوصول إلى محتوى الكاش لمفتاح معين وتعديله فوراً دون إرسال أي طلب شبكة إضافي. تستقبل `setQueryData(queryKey, updater)` إما القيمة الجديدة مباشرة أو دالة تحديثية `(oldData) => newData` تستقبل البيانات القديمة وتُرجع النسخة المحدثة مع الحفاظ على عدم التعديل المباشر (Immutability). يُعد هذا الأسلوب ممتازاً بعد عمليات التعديل (PUT/PATCH)؛ حيث يرجع الخادم عادة الكائن المحدث كاملاً في الرد، فيمكنك حقنه مباشرة في الكاش دون الحاجة لإعادة طلب القائمة بالكامل عبر الشبكة.",
      analogy:
        "invalidateQueries تشبه أن تتصل بالمورد ليرسل لك كشف حساب جديد ومطبوع عبر البريد (طلب شبكة). أما setQueryData فتشبه أن تأخذ القلم بنفسك وتصحح الرقم في كشف الحساب الموجود أمامك على المكتب فوراً (تعديل مباشر في الذاكرة).",
      whyItMatters:
        "يوفر setQueryData استدعاءات شبكة كاملة، ويجعل التحديث يظهر في واجهة المستخدم في 0 مللي ثانية، وهو الركيزة الأساسية لتنفيذ التحديثات التفاؤلية (Optimistic Updates).",
      syntax: `// 1. تحديث مباشر بقيمة جديدة:
queryClient.setQueryData(['user', userId], newUserObject);

// 2. تحديث يعتمد على البيانات القديمة (Updater Function):
queryClient.setQueryData(['todos'], (oldTodos = []) => {
  return [...oldTodos, newTodo];
});`,
      simpleExample: `// تحديث اسم المستخدم في الكاش مباشرة بعد التعديل
import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function UpdateUserNameButton({ userId }) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (newName) => fetch(\`/api/users/\${userId}\`, {
      method: 'PATCH',
      body: JSON.stringify({ name: newName })
    }).then((r) => r.json()),
    onSuccess: (updatedUser) => {
      // حقن كائن المستخدم المحدث في الكاش مباشرة بزمن 0ms
      queryClient.setQueryData(['user', userId], updatedUser);
    }
  });

  return (
    <button onClick={() => mutate('أحمد المهندس')} className="btn-secondary">
      تحديث الاسم فورياً
    </button>
  );
}`,
      advancedExample: `// تعديل عنصر داخل مصفوفة في الكاش بأسلوب Immutable صارم وآمن
import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function ToggleTodoDirect({ todoId }) {
  const queryClient = useQueryClient();

  const toggleMutation = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: true })
      });
      return res.json();
    },
    // عند نجاح التعديل على الخادم، نعدل العنصر في كاش القائمة العامة دون إعادة جلبها بالكامل
    onSuccess: (serverUpdatedTodo) => {
      queryClient.setQueryData(['todos-list'], (oldList) => {
        // إذا كان الكاش فارغاً نعيد مصفوفة فارغة بأمان
        if (!oldList) return [];

        // استبدال العنصر المحدد بالنسخة العائدة من الخادم
        return oldList.map((item) =>
          item.id === todoId ? { ...item, ...serverUpdatedTodo } : item
        );
      });
    }
  });

  return (
    <button
      onClick={() => toggleMutation.mutate(todoId)}
      disabled={toggleMutation.isPending}
      className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded text-xs font-bold"
    >
      {toggleMutation.isPending ? 'تعديل...' : 'إكمال المهمة فوراً ✔️'}
    </button>
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم كيف تسمح دالة `queryClient.setQueryData(['todos-list'], (oldList) => ...)` بالوصول الآمن للقائمة في الذاكرة وتعديل حالة العنصر المحدد دون الحاجة لإعادة تحميل كامل مصفوفة المهام من الخادم، مما يوفر وقت الاستجابة ويمنح سرعة فائقة.",
      commonMistakes: [
        {
          mistake: "تعديل oldData مباشرة عبر التحويل المتحول مثل: oldList.push(newItem) وإرجاعها.",
          fix: "تذكر دائماً مبدأ Immutability؛ أنشئ مصفوفة جديدة [...oldList, newItem] ولا تعدل الأصلية مباشرة."
        },
        {
          mistake: "استخدام setQueryData مع مفتاح كاش لم يتم تحميله أو تعريفه مسبقاً، مما قد يسبب undefined في المكونات.",
          fix: "احرص على التحقق دائماً if (!oldData) return ... داخل دالة الـ updater لضمان استقرار التطبيق."
        }
      ],
      bestPractices: [
        "استخدم setQueryData لتحديث الكاش فورياً بالبيانات العائدة من رد الخادم في طفرات POST و PATCH.",
        "استخدم دالة التحديث التراجعية (old) => new بدلاً من تمرير القيمة المباشرة لضمان التعامل مع أحدث لقطة في الذاكرة.",
        "إذا كانت بنية البيانات معقدة أو متداخلة جداً، فضل استخدام invalidateQueries لضمان تطابق البيانات التام مع الخادم."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "مقارنة استراتيجيات تحديث الكاش بعد الطفرات",
        items: [
          {
            title: "invalidateQueries (إعادة الجلب من الخادم)",
            points: [
              "الآلية: إبطال الكاش وإطلاق طلب شبكة جديد فوراً",
              "الميزة: ضمان التطابق بنسبة 100% مع قاعدة البيانات",
              "العيب: استهلاك طلب شبكة إضافي وباندويث",
              "الملاءمة: مثالي لعمليات الحذف والبيانات المعقدة"
            ]
          },
          {
            title: "setQueryData (الحقن المباشر في الذاكرة)",
            points: [
              "الآلية: تعديل بيانات الكاش يدوياً في الذاكرة فوراً",
              "الميزة: سرعة خارقة (0ms) وصفر طلبات شبكة إضافية",
              "العيب: يتطلب كتابة كود تعديل غير متحول بدقة",
              "الملاءمة: مثالي عند إرجاع الخادم للكائن المحدث كاملاً"
            ]
          }
        ]
      }
    },
    {
      id: "13-3-e",
      title: "تنفيذ التحديثات التفاؤلية (Optimistic Updates)",
      englishTitle: "Engineering Zero-Latency Optimistic Updates",
      pronunciation: "إنجينيرينج زيرو ليتنسي أوبتيميستيك أبديتس",
      meaning: "تحديث واجهة المستخدم فوراً بنقرة الزر بافتراض نجاح العملية قبل وصول رد الخادم",
      description:
        "`Optimistic Updates` (التحديثات التفاؤلية) هي قمة الإتقان الهندسي في تجربة المستخدم لتطبيقات الويب الحديثة؛ حيث يفترض التطبيق أن العملية ستنجح بنسبة 99%، فيقوم بتحديث واجهة المستخدم والكاش فور نقر المستخدم في '0 مللي ثانية'، بينما يسافر الطلب الفعلي إلى الخادم في الخلفية بهدوء. في TanStack Query، يتم بناء هذا النمط عبر ثلاث خطوات متكاملة داخل `useMutation`: 1) `onMutate`: خطاف ينطلق قبل إرسال الطلب، وفيه يتم إلغاء أي استعلامات جارية لنفس المفتاح بـ `cancelQueries`، وأخذ 'لقطة احتياطية' من البيانات الحالية (`previousData`)، وتعديل الكاش فورياً بـ `setQueryData`، وإرجاع سياق يحتوي على اللقطة، 2) `onError`: إذا فشلت العملية على الخادم، يتم استعادة اللقطة الاحتياطية فوراً (Rollback) لتعود الواجهة لما كانت عليه مع إشعار المستخدم، 3) `onSettled`: إبطال الكاش في النهاية لضمان التزامن المطلق.",
      analogy:
        "التحديث التفاؤلي يشبه زر 'الإعجاب' في إنستغرام أو تويتر؛ بمجرد أن تنقر عليه، يتحول القلب فوراً إلى اللون الأحمر في جزء من الثانية (0ms) وتشعر بالرضا، بينما يقوم التطبيق بمزامنة هذا الإعجاب مع خوادمه في الخلفية؛ ونادراً إذا انقطع الإنترنت، يعود القلب للونه الرمادي مع تنبيهك.",
      whyItMatters:
        "يقضي على شعور المستخدم بالبطء أو الانتظار، ويجعل تطبيق الويب سريعاً وفورياً تماماً كأسرع التطبيقات المبرمجة بلغات النظام الأصلية.",
      syntax: `// الهيكل المعماري للتحديث التفاؤلي الكامل:
const mutation = useMutation({
  mutationFn: updateTodoOnServer,
  // 1. قبل إرسال الطلب:
  onMutate: async (newTodo) => {
    await queryClient.cancelQueries({ queryKey: ['todos'] });
    const previousTodos = queryClient.getQueryData(['todos']);
    queryClient.setQueryData(['todos'], (old) => [...old, newTodo]);
    return { previousTodos }; // حفظ لقطة التراجع
  },
  // 2. عند حدوث خطأ:
  onError: (err, newTodo, context) => {
    queryClient.setQueryData(['todos'], context.previousTodos); // التراجع الفوري
  },
  // 3. في الختام (سواء نجح أو فشل):
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] });
  }
});`,
      simpleExample: `// مثال تفاؤلي لزر تبديل الإعجاب (Like Toggle)
import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function OptimisticLikeButton({ postId, isLiked, likesCount }) {
  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    mutationFn: () => fetch(\`/api/posts/\${postId}/like\`, { method: 'POST' }),
    onMutate: async () => {
      // إلغاء أي جلب جارٍ لمنع مسح تعديلنا
      await queryClient.cancelQueries({ queryKey: ['post', postId] });
      // أخذ لقطة سابقة للكاش للتراجع عند الفشل
      const previousPost = queryClient.getQueryData(['post', postId]);
      // تعديل الواجهة فورياً في 0ms
      queryClient.setQueryData(['post', postId], (old) => ({
        ...old,
        isLiked: !isLiked,
        likesCount: isLiked ? likesCount - 1 : likesCount + 1
      }));
      return { previousPost };
    },
    onError: (err, variables, context) => {
      // استعادة الحالة السابقة عند الفشل
      queryClient.setQueryData(['post', postId], context.previousPost);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['post', postId] });
    }
  });

  return (
    <button
      onClick={() => likeMutation.mutate()}
      className={\`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 transition-all \${
        isLiked ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-300'
      }\`}
    >
      <span>{isLiked ? '❤️' : '🤍'}</span>
      <span>{likesCount}</span>
    </button>
  );
}`,
      advancedExample: `// استوديو تفاعلي حي لاختبار التحديث التفاؤلي مع محاكاة لفشل الخادم والتراجع (Rollback)
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export function OptimisticStudioSimulator() {
  const queryClient = useQueryClient();
  const [simulateServerError, setSimulateServerError] = useState(false);
  const [todoTitle, setTodoTitle] = useState('');
  const [rollbackAlert, setRollbackAlert] = useState('');

  // استعلام جلب قائمة المهام
  const { data: todos = [] } = useQuery({
    queryKey: ['optimistic-todos'],
    queryFn: async () => [
      { id: 1, title: 'دراسة التحديثات التفاؤلية بتمعن', completed: true },
      { id: 2, title: 'بناء استراتيجية التراجع الآلي Rollback', completed: false }
    ],
    staleTime: 1000 * 60
  });

  // طفرة الإضافة التفاؤلية الفورية
  const addMutation = useMutation({
    mutationFn: async (newTodo) => {
      // محاكاة تأخير شبكة مدته 1.2 ثانية
      await new Promise((r) => setTimeout(r, 1200));

      if (simulateServerError) {
        throw new Error('تعذر الحفظ في قاعدة البيانات السحابية (500 Error)');
      }
      return { ...newTodo, id: Date.now() };
    },

    // 1. التنفيذ الفوري قبل إرسال الطلب (onMutate)
    onMutate: async (newTodo) => {
      setRollbackAlert('');
      // إيقاف أي استعلامات قيد التنفيذ
      await queryClient.cancelQueries({ queryKey: ['optimistic-todos'] });

      // التقاط لقطة الكاش الحالية قبل التعديل
      const previousTodos = queryClient.getQueryData(['optimistic-todos']) || [];

      // تحديث الكاش محلياً فوراً بعنصر مؤقت
      queryClient.setQueryData(['optimistic-todos'], (old = []) => [
        ...old,
        { ...newTodo, id: 'temp-' + Date.now(), isOptimistic: true }
      ]);

      // إرجاع سياق التراجع
      return { previousTodos };
    },

    // 2. التراجع الذكي الفوري عند الخطأ (onError)
    onError: (err, newTodo, context) => {
      // استعادة اللقطة السابقة فوراً ومسح العنصر التفاؤلي
      if (context?.previousTodos) {
        queryClient.setQueryData(['optimistic-todos'], context.previousTodos);
      }
      setRollbackAlert(\`⚠️ حدث خطأ: \${err.message} تم التراجع عن الإضافة فوراً!\`);
    },

    // 3. المزامنة النهائية (onSettled)
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['optimistic-todos'] });
    }
  });

  const handleAdd = (e) => {
    e.preventDefault();
    if (!todoTitle.trim()) return;
    addMutation.mutate({ title: todoTitle, completed: false });
    setTodoTitle('');
  };

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-sm text-emerald-400">مختبر التحديث التفاؤلي (Optimistic Updates)</h4>
        <span className="text-[10px] text-slate-400 font-mono">0ms Latency</span>
      </div>

      {/* خيار محاكاة الخطأ لاختبار التراجع */}
      <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 mb-3 flex items-center justify-between">
        <span className="text-xs text-slate-300">محاكاة فشل الخادم:</span>
        <button
          onClick={() => setSimulateServerError(!simulateServerError)}
          className={\`px-2.5 py-1 text-xs font-bold rounded transition-all \${
            simulateServerError ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400'
          }\`}
        >
          {simulateServerError ? 'الخادم سيعطل الطلب ❌' : 'الخادم سيعمل بنجاح ✅'}
        </button>
      </div>

      {/* نموذج الإضافة */}
      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          placeholder="أدخل عنوان المهمة..."
          className="flex-1 p-2 bg-slate-950 border border-slate-800 rounded-lg text-xs"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 font-bold text-xs rounded-lg shadow"
        >
          ➕ إضافة
        </button>
      </form>

      {/* تنبيه التراجع عند الفشل */}
      {rollbackAlert && (
        <div className="p-2.5 bg-rose-950/50 border border-rose-800 rounded-lg text-rose-300 text-xs mb-3 font-mono">
          {rollbackAlert}
        </div>
      )}

      {/* قائمة المهام مع تمييز العناصر التفاؤلية */}
      <div className="space-y-1.5">
        {todos.map((t) => (
          <div
            key={t.id}
            className={\`p-2.5 rounded-lg border text-xs flex justify-between items-center transition-all \${
              t.isOptimistic
                ? 'bg-amber-950/30 border-amber-500/50 text-amber-200 animate-pulse'
                : 'bg-slate-950 border-slate-800 text-slate-200'
            }\`}
          >
            <span>{t.title}</span>
            {t.isOptimistic && (
              <span className="text-[10px] text-amber-400 font-mono">⚡ جارٍ التثبيت...</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال العملي كيف تظهر المهمة الجديدة في القائمة فور النقر على زر الإضافة في `0 مللي ثانية`؛ وإذا تم تفعيل خيار 'فشل الخادم'، يفشل الطلب في الخلفية ويقوم كود `onError` باستعادة اللقطة السابقة ومسح العنصر من الواجهة فوراً (Rollback) مع تنبيه المستخدم بلطف.",
      commonMistakes: [
        {
          mistake: "نسيان إلغاء الاستعلامات الجارية عبر await queryClient.cancelQueries() في بداية onMutate.",
          fix: "استدعاء cancelQueries إلزامي؛ لأنه لو وصل رد استعلام قديم أثناء التعديل التفاؤلي سيمسح العنصر التفاؤلي قبل اكتمال الطلب."
        },
        {
          mistake: "نسيان إرجاع كائن اللقطة { previousData } من دالة onMutate، مما يجعل context في دالة onError فارغاً ويعطل التراجع.",
          fix: "تأكد دائماً من كتابة return { previousData } في نهاية دالة onMutate لتمريرها إلى onError."
        }
      ],
      bestPractices: [
        "استخدم التحديثات التفاؤلية للأفعال عالية التكرار وذات نسبة النجاح العالية مثل: الإعجابات، التصويت، المفضلة، وتبديل حالات المهام.",
        "ميز العناصر التفاؤلية بصرياً (مثل شفافية خفيفة opacity-70 أو أيقونة ساعة صغيرة) لطمأنة المستخدم بأنها قيد المزامنة.",
        "استدعِ دائماً queryClient.invalidateQueries داخل onSettled لضمان مزامنة المعرفات الحقيقية المتولدة من قاعدة البيانات."
      ],
      visualInfographic: {
        type: "flowchart",
        title: "دورة حياة التحديث التفاؤلي الكاملة (Optimistic Lifecycle)",
        nodes: [
          { id: "1", label: "نقر المستخدم على الزر\nmutate(newTodo)", shape: "box", highlight: "purple" },
          { id: "2", label: "onMutate:\n1. cancelQueries\n2. أخذ لقطة previousData\n3. setQueryData وتحديث الشاشة فوراً (0ms)", shape: "box", highlight: "emerald" },
          { id: "3", label: "هل نجح طلب الشبكة على الخادم؟", shape: "diamond" },
          { id: "4", label: "onSuccess:\nتثبيت البيانات واستقبال المعرف الحقيقي", shape: "pill", highlight: "green" },
          { id: "5", label: "onError:\nاستعادة previousData فوراً (Rollback)\n+ عرض رسالة الخطأ", shape: "pill", highlight: "rose" },
          { id: "6", label: "onSettled:\ninvalidateQueries للمزامنة النهائية", shape: "box", highlight: "blue" }
        ],
        connections: [
          { from: "1", to: "2" },
          { from: "2", to: "3" },
          { from: "3", to: "4", label: "نعم نجح" },
          { from: "3", to: "5", label: "لا فشل" },
          { from: "4", to: "6" },
          { from: "5", to: "6" }
        ]
      }
    },
    {
      id: "13-3-f",
      title: "استراتيجية التراجع الآمن عند الفشل (Rollback)",
      englishTitle: "Safe Rollback Mechanisms & Error Recovery",
      pronunciation: "سيف رول باك ميكانيزمز آند إيرور ريكافري",
      meaning: "إعادة بناء واسترجاع الحالة السابقة للواجهة بدقة متناهية عند تعثر الخادم",
      description:
        "التراجع (Rollback) هو شبكة الأمان التي تجعل التحديثات التفاؤلية قابلة للاستخدام الآمن في بيئات الإنتاج. بدون استراتيجية تراجع صلبة، إذا فشل طلب الخادم بعد أن تم تعديل الواجهة تفاؤلياً، ستعرض الشاشة بيانات وهمية لا وجود لها على الخادم، مما يفقد المستخدم الثقة في موثوقية التطبيق. تعتمد استراتيجية التراجع في TanStack Query على 'سياق الطفرة' (Mutation Context)؛ حيث تقوم دالة `onMutate` بحفظ لقطة سابقة كاملة من الكاش كقيمة مرتجعة، وفي حال حدوث أي استثناء، تستقبل دالة `onError(err, newVariables, context)` هذا السياق وتقوم بإعادة كتابته في الكاش عبر `queryClient.setQueryData(key, context.previousData)`. الأهم من ذلك: يجب إشعار المستخدم فورياً عبر إشعار عائم (Toast Notification) يوضح فشل العملية وسبب إلغاء التغيير لضمان الشفافية المطلقة.",
      analogy:
        "التراجع يشبه نظام نقاط الاستعادة (Restore Points) في أنظمة التشغيل؛ قبل أن تجرب تثبيت برنامج غير مضمون، ينشئ النظام نسخة احتياطية من ملفات النظام، فإذا حدث عطل أثناء التثبيت يعيدك النظام بضغطة زر إلى الحالة المستقرة السابقة كما كانت دون أي أثر للضرر.",
      whyItMatters:
        "حماية واجهة المستخدم من التجمد أو عرض بيانات غير متزامنة مع السيرفر، وضمان ثقة المستخدم بأن ما يراه على الشاشة يمثل الحقيقة الحالية بدقة.",
      syntax: `// دالة التراجع الدقيقة في onError:
onError: (err, newTodo, context) => {
  if (context?.previousData) {
    queryClient.setQueryData(['todos'], context.previousData);
  }
  toast.error('تعذر حفظ التغييرات، تم التراجع تلقائياً.');
}`,
      simpleExample: `// مثال مصغر للتراجع عن تعديل حالة مفتاح تفعيل
import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function SafeToggleSwitch({ settingKey, isEnabled }) {
  const queryClient = useQueryClient();

  const toggleMutation = useMutation({
    mutationFn: (nextVal) => fetch('/api/settings', {
      method: 'POST',
      body: JSON.stringify({ [settingKey]: nextVal })
    }),
    onMutate: async (nextVal) => {
      await queryClient.cancelQueries({ queryKey: ['settings'] });
      const previousSettings = queryClient.getQueryData(['settings']);
      queryClient.setQueryData(['settings'], (old) => ({ ...old, [settingKey]: nextVal }));
      return { previousSettings };
    },
    onError: (err, nextVal, context) => {
      // استعادة الحالة السابقة فوراً
      queryClient.setQueryData(['settings'], context.previousSettings);
      alert('فشل حفظ الإعداد على الخادم!');
    }
  });

  return (
    <input
      type="checkbox"
      checked={isEnabled}
      onChange={(e) => toggleMutation.mutate(e.target.checked)}
      className="toggle-checkbox"
    />
  );
}`,
      advancedExample: `// محاكي متقدم لعمليات التراجع المتعددة مع سجل بصري لاستعادة البيانات
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export function AdvancedRollbackStudio() {
  const queryClient = useQueryClient();
  const [historyTrail, setHistoryTrail] = useState([]);

  // استعلام إعدادات التنبيهات
  const { data: notificationsEnabled = false } = useQuery({
    queryKey: ['notification-setting'],
    queryFn: async () => false,
    staleTime: Infinity
  });

  const mutation = useMutation({
    mutationFn: async (targetState) => {
      await new Promise((r) => setTimeout(r, 800));
      // دائماً يفشل لمحاكاة خطأ التراجع
      throw new Error('خطأ أمني: الجلسة منتهية الصلاحية (403)');
    },
    onMutate: async (targetState) => {
      await queryClient.cancelQueries({ queryKey: ['notification-setting'] });
      const snapshot = queryClient.getQueryData(['notification-setting']);

      // تعديل تفاؤلي
      queryClient.setQueryData(['notification-setting'], targetState);

      setHistoryTrail((prev) => [
        { id: Date.now(), text: \`تم التعديل تفاؤلياً إلى: \${targetState ? 'مفعل' : 'معطل'}\`, type: 'opt' },
        ...prev
      ]);

      return { snapshot };
    },
    onError: (err, targetState, context) => {
      // استعادة اللقطة
      queryClient.setQueryData(['notification-setting'], context.snapshot);

      setHistoryTrail((prev) => [
        { id: Date.now(), text: \`⚠️ تعثر الخادم! تم تنفيذ Rollback واستعادة الحالة الأصلية (\${context.snapshot ? 'مفعل' : 'معطل'}).\`, type: 'rollback' },
        ...prev
      ]);
    }
  });

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white">
      <h4 className="font-bold text-sm mb-3 text-cyan-400">محاكي آلية التراجع الآلي (Safe Rollback)</h4>

      {/* زر التبديل التفاعلي */}
      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center mb-4">
        <div>
          <span className="text-xs font-bold text-slate-200">تفعيل الإشعارات اللحظية</span>
          <p className="text-[10px] text-slate-500">سيفشل الطلب عمداً لاختبار التراجع</p>
        </div>
        <button
          onClick={() => mutation.mutate(!notificationsEnabled)}
          disabled={mutation.isPending}
          className={\`px-3 py-1.5 text-xs font-bold rounded-lg transition-all \${
            notificationsEnabled ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
          }\`}
        >
          {notificationsEnabled ? 'مفعل ✅' : 'معطل ❌'}
        </button>
      </div>

      {/* سجل أحداث التراجع */}
      <div className="space-y-1.5 max-h-40 overflow-y-auto">
        {historyTrail.map((h) => (
          <div
            key={h.id}
            className={\`p-2 rounded text-[11px] font-mono border \${
              h.type === 'rollback'
                ? 'bg-rose-950/40 border-rose-800 text-rose-300'
                : 'bg-slate-950 border-slate-800 text-cyan-300'
            }\`}
          >
            {h.text}
          </div>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم كيف تعود الواجهة بسلاسة وأمان تام إلى حالتها الأصلية عند حدوث خطأ، مع تسجيل الحدث في السجل البصري؛ مما يثبت أن الواجهة التفاؤلية محمية بنظام استعادة كامل يمنع بقاء أي بيانات كاذبة.",
      commonMistakes: [
        {
          mistake: "إهمال معالجة دالة onError والاعتقاد بأن invalidateQueries وحدها كافية لإصلاح الكاش بعد الفشل.",
          fix: "إذا كان الخادم معطلاً فإن invalidateQueries ستفشل أيضاً؛ لذا فإن استعادة context.previousData في onError هو طوق النجاة الوحيد."
        },
        {
          mistake: "كتمان الخطأ عن المستخدم وعدم إخباره بأن التعديل التفاؤلي قد فشل وتم التراجع عنه.",
          fix: "أبلغ المستخدم دائماً برسالة واضحة (Toast/Alert) توضح سبب التراجع لكي يعلم أن طلبه لم يُحفظ على الخادم."
        }
      ],
      bestPractices: [
        "احرص دائماً على فحص وجود context?.previousData قبل كتابته في setQueryData لتفادي حقن undefined.",
        "ادمج مكتبات الإشعارات السريعة مثل sonner أو react-hot-toast في دالة onError لتقديم تغذية راجعة فورية للمستخدم.",
        "احتفظ بهيكل البيانات الأصلي كاملاً في دالة onMutate لتكون عملية التراجع مطابقة بنسبة 100%."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "الركائز الثلاث لاستراتيجية التراجع الآمن (Rollback Pillars)",
        items: [
          {
            title: "1. اللقطة الاحتياطية (Snapshot)",
            points: [
              "تؤخذ داخل onMutate قبل أي تعديل للكاش",
              "تُخزن في كائن context المرتجع",
              "تمثل الحالة الموثوقة الأخيرة قبل الشروع في الطفرة"
            ]
          },
          {
            title: "2. استعادة الحالة (Restoration)",
            points: [
              "تُنفذ داخل onError فور تعثر الخادم",
              "تُحقن مباشرة بـ setQueryData(key, context.snapshot)",
              "تعيد الواجهة لحالتها السليمة السابقة فوراً"
            ]
          },
          {
            title: "3. الشفافية والإشعار (Transparency)",
            points: [
              "إطلاق إشعار توست يوضح سبب الإلغاء",
              "توفير خيار 'إعادة المحاولة' للمستخدم",
              "منع ترك الواجهة في حالة غير متطابقة مع السيرفر"
            ]
          }
        ]
      }
    },
    {
      id: "13-3-g",
      title: "إدارة أخطاء الطفرات والآثار الجانبية المتسلسلة",
      englishTitle: "Mutation Error Handling & Side Effects Chaining",
      pronunciation: "ميوتيشن إيرور هاندلينج آند سايد إيفكتس تشينينج",
      meaning: "الهندسة الشاملة لمعالجة أخطاء الـ API وتنسيق الأحداث المتسلسلة",
      description:
        "في التطبيقات الكبيرة، لا تقتصر معالجة الطفرات على مجرد إرسال طلب؛ بل تتطلب 'تنسيقاً متسلسلاً للآثار الجانبية' (Side Effects Chaining): إغلاق نافذة منبثقة، وتوجيه المستخدم لصفحة أخرى عبر الراوتر، وعرض إشعار نجاح أو فشل، وتحديث كاش استعلامات أخرى. يوفر TanStack Query مستويين لتسجيل هذه الأحداث: 1) مستوى تعريف الطفرة (Mutation Options Level): داخل كائن `useMutation({ onSuccess, onError, onSettled })`، وتُنفذ هذه الدوال دائماً في كل استدعاء، 2) مستوى الاستدعاء المباشر (Mutate Call Level): تمرير دوال الـ callbacks مباشرة لأمر `mutate(payload, { onSuccess, onError })`، وتُنفذ فقط إذا كان المكون لا يزال مركباً على الشاشة. فهم هذا الفارق المعماري يتيح للمطور وضع منطق الكاش العام في خيارات الطفرة، ووضع منطق التنقل والواجهة في دالة الاستدعاء المباشرة.",
      analogy:
        "يشبه الفارق بين الإجراءات العامة لشركة الشحن (تحديث قاعدة البيانات وإرسال الفاتورة - دائم)، وبين استجابة العميل المستلم (فتح الطرد وتجربته - خاص باللحظة)؛ الإجراءات العامة تحدث دائماً، بينما استجابة العميل تعتمد على وجوده في منزله عند وصول الطرد.",
      whyItMatters:
        "الفصل بين الآثار الجانبية العامة والخاصة يمنع أخطاء 'تسرب الذاكرة ومحاولة تحديث مكونات ملغاة' (Memory Leaks) ويجعل الكود قابلاً لإعادة الاستخدام في عدة شاشات.",
      syntax: `// 1. الآثار الجانبية العامة (تحدث دائماً):
const mutation = useMutation({
  mutationFn: updateProfile,
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ['profile'] })
});

// 2. الآثار الجانبية الموضعية (تحدث فقط إذا كان المكون حياً):
mutation.mutate(newProfile, {
  onSuccess: () => {
    navigate('/dashboard');
    toast.success('تم التحديث بنجاح!');
  }
});`,
      simpleExample: `// مثال يعكس التوجيه البرمجي بعد نجاح الطفرة
import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function CreateArticleForm({ onCloseModal }) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (article) => fetch('/api/articles', {
      method: 'POST',
      body: JSON.stringify(article)
    }),
    onSuccess: () => {
      // منطق الكاش العام
      queryClient.invalidateQueries({ queryKey: ['articles'] });
      // إغلاق النافذة المنبثقة
      onCloseModal();
    }
  });

  return (
    <button onClick={() => mutate({ title: 'مقال جديد' })} disabled={isPending} className="btn-primary">
      حفظ ونشر
    </button>
  );
}`,
      advancedExample: `// نظام متكامل ينسق الأخطاء مع تصنيف أخطاء التحقق 422 وأخطاء الخادم 500
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

export function RobustMutationErrorHandler() {
  const [formData, setFormData] = useState({ email: '', age: '' });
  const [fieldErrors, setFieldErrors] = useState({});
  const [globalError, setGlobalError] = useState('');

  const registerMutation = useMutation({
    mutationFn: async (payload) => {
      // محاكاة استجابة خطأ تحقق 422 Unprocessable Entity
      if (payload.age < 18) {
        const validationErr = new Error('فشل التحقق من صحة البيانات');
        validationErr.status = 422;
        validationErr.validationErrors = { age: 'يجب أن يكون العمر 18 عاماً فما فوق للتسجيل.' };
        throw validationErr;
      }

      if (!payload.email.includes('@')) {
        const validationErr = new Error('فشل التحقق من صحة البيانات');
        validationErr.status = 422;
        validationErr.validationErrors = { email: 'صيغة البريد الإلكتروني غير صالحة.' };
        throw validationErr;
      }

      return { success: true, userId: 104 };
    },

    // معالجة الأخطاء الذكية حسب نوعها ورمز HTTP
    onError: (err) => {
      if (err.status === 422) {
        // توزيع أخطاء الحقول على النموذج
        setFieldErrors(err.validationErrors || {});
        setGlobalError('');
      } else {
        // خطأ عام بالخادم
        setGlobalError(err.message || 'حدث خطأ غير متوقع بالخادم.');
        setFieldErrors({});
      }
    },

    // تنظيف الأخطاء عند النجاح
    onSuccess: () => {
      setFieldErrors({});
      setGlobalError('');
      alert('تم التسجيل بنجاح كامل!');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerMutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white space-y-3">
      <h4 className="font-bold text-sm text-purple-400">نموذج التسجيل مع معالجة أخطاء 422</h4>

      {globalError && (
        <div className="p-2.5 bg-rose-950/60 border border-rose-800 text-rose-300 text-xs rounded-lg">
          ⚠️ {globalError}
        </div>
      )}

      <div>
        <label className="text-xs text-slate-400 block mb-1">البريد الإلكتروني:</label>
        <input
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 bg-slate-950 border border-slate-800 rounded-lg text-xs"
          placeholder="user@domain.com"
        />
        {fieldErrors.email && (
          <span className="text-[10px] text-rose-400 mt-1 block">{fieldErrors.email}</span>
        )}
      </div>

      <div>
        <label className="text-xs text-slate-400 block mb-1">العمر:</label>
        <input
          type="number"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          className="w-full p-2 bg-slate-950 border border-slate-800 rounded-lg text-xs"
          placeholder="18+"
        />
        {fieldErrors.age && (
          <span className="text-[10px] text-rose-400 mt-1 block">{fieldErrors.age}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={registerMutation.isPending}
        className="w-full py-2.5 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-bold text-xs rounded-xl transition-all"
      >
        {registerMutation.isPending ? 'جارٍ التحقق...' : 'إرسال واستكمال التسجيل'}
      </button>
    </form>
  );
}`,
      outputExplanation:
        "يوضح المثال المتقدم كيفية تصميم خطاف `onError` ليفحص خصائص الاستثناء المرتجع؛ فعند استقبال أخطاء التحقق 422، يفرز الأخطاء ويوزعها على كل حقل إدخال بعينه بدقة، بينما يظهر أخطاء الشبكة العامة في تنبيه عريض أعلى النموذج.",
      commonMistakes: [
        {
          mistake: "وضع دوال التوجيه الملاحي (navigate) داخل useMutation العامة بدلاً من تمريرها لـ mutate الموضعية، مما يجعل الخطاف غير قابل لإعادة الاستخدام في شاشات أخرى.",
          fix: "ضع منطق الكاش المشترك (invalidateQueries) في مستوى useMutation، وضع منطق التنقل والواجهة في استدعاء mutate الموضعي."
        },
        {
          mistake: "نسيان تنظيف أخطاء الحقول السابقة عند إعادة الإرسال، مما يترك رسائل خطأ قديمة معروضة أمام المستخدم.",
          fix: "احرص على مسح الأخطاء السابقة فور نقر المستخدم على زر الإرسال أو في حدث onMutate."
        }
      ],
      bestPractices: [
        "افحص دائماً رموز أخطاء الـ API وميز بين أخطاء الإدخال 422 وأخطاء الصلاحيات 401/403 وأخطاء الخادم 500.",
        "استغل حدث onSettled الذي ينطلق دائماً (سواء نجحت العملية أو فشلت) لإعادة ضبط مؤشرات التحميل وإخفاء النوافذ المنبثقة.",
        "اعتمد على كائنات أخطاء مخصصة (Custom Error Classes) لحمل تفاصيل وحقول الأخطاء القادمة من الباك إند."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "تسلسل الأحداث الجانبية في دورة حياة الطفرة",
        items: [
          {
            title: "1. onMutate (قبل الإرسال)",
            points: [
              "ينطلق فور استدعاء دالة mutate()",
              "الوظيفة: إلغاء الاستعلامات الجارية، أخذ لقطة التراجع، وتحديث الواجهة تفاؤلياً",
              "يُرجع كائن context المحتوي على اللقطة"
            ]
          },
          {
            title: "2. onSuccess أو onError (النتيجة)",
            points: [
              "onSuccess: ينطلق عند نجاح الرد لتحديث وإبطال الكاش وإشعار المستخدم",
              "onError: ينطلق عند الفشل لتنفيذ Rollback وتوزيع رسائل الأخطاء"
            ]
          },
          {
            title: "3. onSettled (الختام الحتمي)",
            points: [
              "ينطلق دائماً بغض النظر عن النتيجة (نجاح أو فشل)",
              "يكافئ بلوك finally في البرمجة القياسية",
              "الوظيفة: إعادة التحقق الشامل وإغلاق مؤشرات التحميل"
            ]
          }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q13-3-1",
      question: "ما هو الفارق الجوهري بين mutate و mutateAsync في خطاف useMutation؟",
      options: [
        "mutateAsync تعمل فقط على الهواتف الذكية",
        "mutate تُدار بالكامل عبر الـ callbacks ولا تعطل تدفق الكود، بينما mutateAsync تُرجع وعداً (Promise) حقيقياً يمكن انتظاره بـ await ومعالجة أخطائه بـ try/catch",
        "mutate تُستخدم لعمليات POST فقط بينما mutateAsync لعمليات DELETE",
        "لا يوجد فرق جوهري بينهما إطلاقاً"
      ],
      correctAnswer: 1,
      explanation:
        "mutateAsync تُرجع Promise يمكنك استخدام await معه ومعالجة الأخطاء يدوياً بـ try/catch محلياً، بينما mutate العادية لا ترمي استثناءات غير متوقعة وتعتمد على خيارات onSuccess و onError."
    },
    {
      id: "q13-3-2",
      question: "ماذا تفعل دالة queryClient.invalidateQueries({ queryKey: ['todos'] }) بمجرد استدعائها؟",
      options: [
        "تحذف مكتبة TanStack Query من المشروع",
        "تمسح قاعدة البيانات على الخادم",
        "تضع علامة على استعلامات 'todos' بأنها متقادمة (Stale) وتعيد جلب بياناتها في الخلفية فورياً إذا كانت معروضة على الشاشة",
        "تمنع المستخدم من إضافة مهام جديدة"
      ],
      correctAnswer: 2,
      explanation:
        "invalidateQueries تعلن أن الاستعلامات المطابقة للمفتاح أصبحت Stale؛ وإذا كان هناك أي مكون معروض حالياً على الشاشة يستمع لهذا المفتاح، يُطلق فوراً طلب شبكة في الخلفية لتحديثه بأحدث البيانات."
    },
    {
      id: "q13-3-3",
      question: "في استراتيجية التحديث التفاؤلي (Optimistic Updates)، أين يتم تخزين اللقطة الاحتياطية اللازمة للتراجع (Rollback) عند فشل الطلب؟",
      options: [
        "في ملف نصي على القرص الصلب",
        "تُرجع كقيمة من دالة onMutate ويتم استقبالها عبر المعامل context في دالة onError",
        "في سجلات المتصفح History API",
        "في كائن الـ DOM الخاص بالشاشة"
      ],
      correctAnswer: 1,
      explanation:
        "دالة onMutate تأخذ لقطة سابقة للكاش وتُرجعها في كائن (مثلاً return { previousData })؛ هذا الكائن يُمرر تلقائياً بواسطة TanStack Query إلى دالة onError كمعامل ثالث (context) لاستخدامه في استعادة البيانات الأصلية فورياً."
    }
  ],
  exercise: {
    title: "تمرين تطبيقي: بناء قائمة مهام سريعة مع التحديث التفاؤلي وإبطال الكاش",
    instruction:
      "قم ببناء مكون إضافة مهام تفاعلي يطبق التحديث التفاؤلي الكامل: عند كتابة عنوان المهمة والضغط على إضافة، تظهر المهمة في القائمة فوراً في 0 ثانية مع علامة 'تفاؤلية'، وإذا حدث خطأ يتم التراجع ومسحها، مع إبطال الكاش في النهاية.",
    starterCode: `import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export function OptimisticTodoListExercise() {
  const [title, setTitle] = useState('');
  const queryClient = useQueryClient();

  // استعلام جلب المهام
  const { data: todos = [] } = useQuery({
    queryKey: ['exercise-todos'],
    queryFn: async () => [
      { id: 1, title: 'إتقان React Query' }
    ]
  });

  // TODO: قم ببناء طفرة addMutation مع onMutate و onError و onSettled
  // لإضافة المهمة تفاؤلياً في الكاش وإلغاء أي استعلامات سابقة

  return (
    <div className="p-4 border rounded-xl max-w-md mx-auto">
      <h3 className="font-bold text-lg mb-2">قائمة المهام التفاؤلية</h3>
      {/* نموذج الإدخال وعرض المهام */}
    </div>
  );
}`,
    hints: [
      "في onMutate: استدعِ await queryClient.cancelQueries({ queryKey: ['exercise-todos'] }).",
      "احفظ اللقطة: const previousTodos = queryClient.getQueryData(['exercise-todos']).",
      "حدث الكاش فوراً: queryClient.setQueryData(['exercise-todos'], old => [...old, { id: Date.now(), title, isOptimistic: true }]).",
      "في onError: استعد الكاش: queryClient.setQueryData(['exercise-todos'], context.previousTodos)."
    ],
    solutionCode: `import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export function OptimisticTodoListExercise() {
  const [title, setTitle] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const queryClient = useQueryClient();

  // 1. استعلام جلب المهام
  const { data: todos = [] } = useQuery({
    queryKey: ['exercise-todos'],
    queryFn: async () => [
      { id: 1, title: 'إتقان React Query بالتفصيل' },
      { id: 2, title: 'بناء معمارية التحديث التفاؤلي' }
    ],
    staleTime: 1000 * 60
  });

  // 2. طفرة الإضافة التفاؤلية المعمارية
  const addMutation = useMutation({
    mutationFn: async (newTodoTitle) => {
      // محاكاة طلب خادم يستغرق ثانية
      await new Promise((r) => setTimeout(r, 1000));
      return { id: Date.now(), title: newTodoTitle };
    },

    // أ. التنفيذ التفاؤلي الفوري في 0ms
    onMutate: async (newTodoTitle) => {
      setErrorMsg('');
      // إلغاء أي طلبات شبكة جارية لهذا المفتاح
      await queryClient.cancelQueries({ queryKey: ['exercise-todos'] });

      // التقاط لقطة الكاش الحالية للتراجع عند الطوارئ
      const previousTodos = queryClient.getQueryData(['exercise-todos']) || [];

      // تحديث الكاش فوراً بالعنصر الجديد مع وسم تفاؤلي
      queryClient.setQueryData(['exercise-todos'], (old = []) => [
        ...old,
        { id: 'temp-' + Date.now(), title: newTodoTitle, isOptimistic: true }
      ]);

      // إرجاع اللقطة الاحتياطية في كائن السياق
      return { previousTodos };
    },

    // ب. التراجع الآلي عند فشل الخادم
    onError: (err, newTodoTitle, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(['exercise-todos'], context.previousTodos);
      }
      setErrorMsg('تعذر حفظ المهمة على الخادم، تم التراجع عن الإضافة.');
    },

    // ج. المزامنة النهائية الحتمية
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['exercise-todos'] });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addMutation.mutate(title);
    setTitle('');
  };

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-base text-emerald-400">قائمة المهام التفاؤلية الفورية</h3>
        <span className="text-[10px] text-slate-400 font-mono">0ms Latency</span>
      </div>

      {/* نموذج الإدخال */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="أدخل عنوان مهمة جديدة..."
          className="flex-1 p-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-emerald-500"
        />
        <button
          type="submit"
          disabled={addMutation.isPending}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs rounded-lg shadow transition-all active:scale-95"
        >
          ➕ إضافة تفاؤلية
        </button>
      </form>

      {errorMsg && (
        <div className="p-2.5 bg-rose-950/60 border border-rose-800 text-rose-300 text-xs rounded-lg mb-3">
          ⚠️ {errorMsg}
        </div>
      )}

      {/* عرض قائمة المهام مع تمييز الحالة التفاؤلية */}
      <div className="space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={\`p-3 rounded-xl border text-xs flex justify-between items-center transition-all \${
              todo.isOptimistic
                ? 'bg-amber-950/40 border-amber-500/60 text-amber-200 animate-pulse'
                : 'bg-slate-950 border-slate-800 text-slate-200'
            }\`}
          >
            <span className="font-medium">{todo.title}</span>
            {todo.isOptimistic ? (
              <span className="text-[10px] text-amber-400 font-mono">⚡ جارٍ الحفظ بالسيرفر...</span>
            ) : (
              <span className="text-[10px] text-emerald-400 font-mono">محفوظ في الكاش ✔️</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة تعديل بيانات الخادم والطفرات في TanStack Query",
    description: "الدليل الشامل للتحكم في طفرات useMutation والتحديثات التفاؤلية وإبطال الكاش بدقة.",
    elements: [
      {
        title: "1. محرك الطفرات (useMutation)",
        subtitle: "Imperative Write Operations",
        badge: "التعديل الإجرائي",
        color: "purple",
        details: [
          "mutate vs mutateAsync: الاستدعاء المباشر مقابل الوعد البرمجي",
          "مؤشرات الحالة: isPending لتعطيل الأزرار، isError، و isSuccess",
          "دعم عمليات RESTful: POST للإنشاء، PATCH للتعديل، DELETE للحذف"
        ]
      },
      {
        title: "2. المزامنة بإبطال الكاش (Invalidation)",
        subtitle: "invalidateQueries",
        badge: "تحديث شجري",
        color: "emerald",
        details: [
          "Prefix Matching: إبطال المفاتيح الهرمية العامة يمتد لكافة الفروع",
          "exact: true: إبطال دقيق لعنصر محدد دون المساس بالقوائم",
          "إعادة الجلب التلقائي: تحديث فوري لكافة المكونات المعروضة على الشاشة"
        ]
      },
      {
        title: "3. التحديث التفاؤلي (Optimistic Updates)",
        subtitle: "Zero-Latency UI",
        badge: "السرعة الفورية 0ms",
        color: "blue",
        details: [
          "onMutate: إلغاء الجلب الجاري وحفظ لقطة previousData وتحديث الكاش",
          "onError: استعادة الكاش فوراً (Rollback) عند فشل الطلب",
          "onSettled: إبطال الكاش لضمان التطابق النهائي مع قاعدة البيانات"
        ]
      },
      {
        title: "4. هندسة الآثار الجانبية (Side Effects)",
        subtitle: "Callbacks & Error Handling",
        badge: "الأمان والموثوقية",
        color: "amber",
        details: [
          "مستوى الخيارات: منطق الكاش العام المشترك في useMutation",
          "مستوى الاستدعاء: منطق التوجيه والنوافذ في mutate(vars, callbacks)",
          "معالجة أخطاء 422: توزيع أخطاء التحقق على حقول النموذج بدقة"
        ]
      }
    ]
  }
};
