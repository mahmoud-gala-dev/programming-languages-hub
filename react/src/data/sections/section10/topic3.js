// src/data/sections/section10/topic3.js
// القسم 10: التعامل مع APIs والبيانات الخارجية - الموضوع 3: عمليات CRUD

export const topic3 = {
  id: "10.3",
  title: "عمليات CRUD",
  description: "دليل شامل لإتقان العمليات الأربع الأساسية لإدارة البيانات (Create, Read, Update, Delete) في تطبيقات React، وتحديث الواجهة بمرونة، وتأكيد الحذف، وإدارة الأخطاء، وإظهار إشعارات التنبيه (Toast Notifications).",
  subtopics: [
    {
      id: "10.3.a",
      title: "قراءة البيانات Read",
      englishTerm: "Read Operation (عَمَلِيَّةُ القِرَاءَة: استرجاع وعرض البيانات من الخادم)",
      description: "عملية القراءة (Read) هي الركيزة الأولى وأكثر عمليات CRUD تكراراً في الويب. ترتبط بطريقة HTTP المسمّاة `GET`، حيث يقوم تطبيق React بإرسال طلب لاسترجاع مجموعة موارد (مثل قائمة المنتجات) أو مورد مفرد بواسطة معرّفه (مثل تفاصيل المستخدم ID). تتميز عمليات القراءة بأنها آمنة (Safe) ولا تؤدي إلى أي تعديل في قاعدة البيانات على الإطلاق (Idempotent).",
      analogy: "مثل استعارة كتاب من المكتبة العامة لقراءته في الصالة: تقرأ الكلمات وتستمتع بها، ولكنك لا تكتب داخل الكتاب ولا تمزق منه صفحات؛ الكتاب يبقى سالماً في مكانه تماماً كما كان.",
      whyItMatters: "كل صفحة ويب تبدأ بقراءة البيانات لعرضها. إتقان استرجاع البيانات وفرزها وربطها بالواجهة هو الأساس الذي تبنى عليه كافة التفاعلات اللاحقة.",
      syntax: "GET /api/items -> List of items\nGET /api/items/:id -> Single item details",
      simpleExample: `import React, { useState, useEffect } from 'react';

// مكون بسيط لقراءة وعرض قائمة المستخدمين
function ReadUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // إرسال طلب GET لجلب الموارد
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h3>المستخدمون المسجلون:</h3>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name} - ({u.email})</li>
        ))}
      </ul>
    </div>
  );
}`,
      advancedExample: `import React, { useState, useEffect } from 'react';

// قراءة بيانات تفصيلية لمورد واحد بناءً على المعرف مع معالجة الحالات
function ReadSingleProduct({ productId }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // تفعيل التحميل عند كل تغيير للمعرف
    setLoading(true);
    setError(null);

    // إرسال طلب GET للمورد المحدد في المسار
    fetch('https://dummyjson.com/products/' + productId)
      .then((res) => {
        if (!res.ok) {
          throw new Error('المنتج رقم ' + productId + ' غير متوفر في المخزون');
        }
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading) return <p className="animate-pulse">جاري تحميل تفاصيل المنتج...</p>;
  if (error) return <p className="text-red-500 font-bold">{error}</p>;
  if (!product) return null;

  return (
    <div className="p-4 border rounded-xl shadow-sm bg-white">
      <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
      <p className="text-gray-600 mt-1">{product.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-emerald-600 font-bold text-lg">{product.price} $</span>
        <span className="text-sm bg-gray-100 px-2 py-1 rounded">القسم: {product.category}</span>
      </div>
    </div>
  );
}`,
      output: "عرض شاشة تحميل رشيقة، يليها إما ظهور بطاقة المنتج المفصلة أو رسالة تنبيه واضحة تفيد بعدم وجود المنتج.",
      commonMistakes: [
        {
          mistake: "محاولة إرسال بيانات حساسة أو نصوص ضخمة داخل رابط طلب GET.",
          fix: "تذكر أن طلبات GET تظهر بوضوح في سجلات المتصفح وخوادم البروكسي؛ استخدم POST للبيانات الحساسة.",
          explanation: "عناوين URL تحفظ في السجل (Browser History) وتظهر في ترويسات Referer."
        }
      ],
      bestPractices: [
        "استخدم معاملات الترقيم (limit & page) دائماً في طلبات قراءة المجموعات لتجنب جلب آلاف السجلات دفعة واحدة.",
        "احرص على تنظيف الـ State السابقة عند قراءة مورد جديد لمنع عرض بيانات العنصر القديم أثناء تحميل الجديد."
      ],
      infographic: {
        title: "خصائص عملية القراءة (Read / GET)",
        elements: [
          { label: "Idempotent & Safe", role: "لا تعدل أي بيانات في قاعدة البيانات مهما تكرر استدعاؤها", color: "blue" },
          { label: "قابلة للتخزين المؤقت", role: "يمكن للمتصفح والخوادم الوسيطة حفظ الرد لتسريع الزيارات القادمة", color: "emerald" },
          { label: "مجموعات ومفردات", role: "GET /items لقائمة كاملة، و GET /items/5 لمورد مفرد محدد", color: "purple" },
          { label: "خالية من الـ Body", role: "تعتمد كلياً على عنوان URL والترويسات لاسترجاع المطلوب", color: "amber" }
        ]
      }
    },
    {
      id: "10.3.b",
      title: "إضافة البيانات Create",
      englishTerm: "Create Operation (عَمَلِيَّةُ الإِنْشَاءِ: إضافة موارد جديدة عبر طلبات POST)",
      description: "عملية الإنشاء (Create) هي المسؤولة عن إضافة سجل جديد كلياً إلى قاعدة البيانات، وترتبط عادةً بطريقة HTTP المسماة `POST`. يقوم تطبيق React بجمع مدخلات المستخدم من نموذج (Form)، وتحويلها إلى كائن JSON في خاصية `body`، وإرسالها إلى الخادم. عند نجاح الإنشاء، يرجع الخادم عادةً رمز الحالة `201 Created` مصحوباً بالكائن المنشأ بعد إسناد معرّف فريد له (ID).",
      analogy: "مثل ملء استمارة تسجيل مولود جديد في مكتب الأحوال المدنية: تأخذ ورقة فارغة، تملأ الاسم وتاريخ الميلاد، وتقدمها للموظف؛ الموظف يدخلها في الحاسوب وينشئ لك شهادة ميلاد رسمية تحمل رقماً وطنياً فريداً (ID) لم يكن موجوداً من قبل.",
      whyItMatters: "الإنشاء هو جوهر التفاعل: إضافة تعليق، شراء منتج، فتح تذكرة دعم، أو تسجيل حساب جديد. بدونه تصبح المواقع جامدة للقراءة فقط.",
      syntax: "POST /api/items\nBody: { title: 'New Item', ... }\nResponse: 201 Created -> { id: 101, title: 'New Item' }",
      simpleExample: `import React, { useState } from 'react';

// مكون لإضافة مهمة جديدة بواسطة POST
function CreateTodo() {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // إرسال طلب POST للخادم
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        completed: false,
        userId: 1,
      }),
    })
      .then((res) => res.json())
      .then((newTodo) => {
        alert('تم إنشاء المهمة بنجاح مع المعرف: ' + newTodo.id);
        setTitle(''); // تفريغ الحقل بعد النجاح
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="عنوان المهمة الجديدة..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">إضافة</button>
    </form>
  );
}`,
      advancedExample: `import React, { useState } from 'react';

// إضافة مورد جديد مع إدارة حالة الإرسال وتحديث القائمة المحلية وإظهار تنبيهات
function CreateProductForm({ onProductCreated }) {
  const [formData, setFormData] = useState({ title: '', price: '', category: 'عام' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.title,
          price: Number(formData.price),
          category: formData.category,
        }),
      });

      if (!response.ok) {
        throw new Error('فشل الخادم في حفظ المنتج');
      }

      const createdItem = await response.json();
      // تمرير العنصر الجديد للمكون الأب لتحديث الواجهة فوراً
      onProductCreated(createdItem);

      // تصفير حقول النموذج
      setFormData({ title: '', price: '', category: 'عام' });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleCreate} className="p-4 bg-gray-50 rounded-xl space-y-3">
      <h4 className="font-bold text-gray-800">إضافة منتج جديد</h4>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      
      <input
        name="title"
        placeholder="اسم المنتج"
        value={formData.title}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        name="price"
        type="number"
        placeholder="السعر بالدولار"
        value={formData.price}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 bg-emerald-600 text-white font-medium rounded hover:bg-emerald-700 disabled:bg-gray-400"
      >
        {isSubmitting ? 'جاري الإضافة...' : '➕ حفظ المنتج'}
      </button>
    </form>
  );
}`,
      output: "إرسال البيانات للخادم، وتعطيل زر الحفظ أثناء العملية، ثم إدراج المنتج الجديد في قائمة العرض وتفريغ النموذج تلقائياً.",
      commonMistakes: [
        {
          mistake: "نسيان تحويل كائن البيانات إلى نص بواسطة JSON.stringify(data).",
          fix: "تأكد دائماً من تمرير body: JSON.stringify(object).",
          explanation: "إذا مررت كائن جافاسكريبت مباشرة، سيرسله المتصفح كنص '[object Object]' مما يتسبب في فشل فك التشفير بالخادم."
        },
        {
          mistake: "السماح للمستخدم بالنقر المتكرر على زر الإرسال قبل اكتمال الطلب الأول.",
          fix: "قم بتعطيل الزر دائماً بواسطة disabled={isSubmitting}.",
          explanation: "النقر المتكرر يؤدي لإرسال عدة طلبات POST متزامنة مما ينشئ سجلات مكررة (Duplicate Entries) في قاعدة البيانات."
        }
      ],
      bestPractices: [
        "أرفق ترويسة 'Content-Type': 'application/json' في كل طلب يحتوي على جسم JSON.",
        "أعد ضبط وتفريغ النموذج (Form Reset) بعد نجاح الإنشاء فقط وليس قبل ذلك."
      ],
      infographic: {
        title: "خطوات دورة حياة عملية الإنشاء (Create / POST)",
        elements: [
          { label: "1. تجميع المدخلات", role: "جمع قيم الحقول والتحقق من صحتها من جانب العميل", color: "blue" },
          { label: "2. إرسال الطلب", role: "POST مع Content-Type و JSON.stringify وتعطيل الزر", color: "amber" },
          { label: "3. استجابة 201", role: "الخادم يرجع الكائن الجديد مزوداً بمعرف قاعدة البيانات (id)", color: "purple" },
          { label: "4. تحديث الواجهة", role: "إلحاق العنصر في الـ State وتفريغ حقول النموذج وإظهار إشعار", color: "emerald" }
        ]
      }
    },
    {
      id: "10.3.c",
      title: "تحديث البيانات Update",
      englishTerm: "Update Operation (عَمَلِيَّةُ التَّحْدِيثِ: تعديل الموارد الحالية عبر PUT و PATCH)",
      description: "عملية التحديث (Update) هي تعديل بيانات سجل موجود مسبقاً في قاعدة البيانات. في معمارية REST نستخدم `PUT` لاستبدال المورد بالكامل، أو `PATCH` لتعديل حقول محددة فقط (مثل تغيير حالة المهمة من معلقة إلى مكتملة، أو تعديل البريد الإلكتروني للمستخدم). يتطلب مسار الطلب تحديد معرّف المورد في الـ URL، وتحديث الواجهة المحلية فور نجاح العملية.",
      analogy: "مثل تعديل بيانات رخصة القيادة: إذا نقلت سكنك لعنوان جديد، تذهب للمرور وتقول: 'رخصتي رقم 887، أريد تغيير حقل العنوان فقط إلى الحي الجديد' (PATCH)؛ دون الحاجة لإعادة اختبار القيادة من الصفر واستبدال بياناتك الطبية والشخصية.",
      whyItMatters: "تسمح للمستخدمين بتصحيح وتحديث معلوماتهم باستمرار دون الحاجة لحذف الكيان وإنشائه من جديد وفقدان تاريخه.",
      syntax: "PATCH /api/items/:id\nBody: { status: 'completed' }\nResponse: 200 OK -> Updated Item",
      simpleExample: `import React, { useState } from 'react';

// مكون لتبديل حالة إنجاز مهمة بواسطة PATCH
function TodoItemToggle({ todo }) {
  const [completed, setCompleted] = useState(todo.completed);

  const toggleStatus = () => {
    const nextStatus = !completed;
    // إرسال طلب PATCH لتعديل حقل completed فقط
    fetch('https://jsonplaceholder.typicode.com/todos/' + todo.id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: nextStatus }),
    })
      .then((res) => res.json())
      .then(() => {
        // تحديث الحالة المحلية بعد تأكيد الخادم
        setCompleted(nextStatus);
      });
  };

  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <input type="checkbox" checked={completed} onChange={toggleStatus} />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {todo.title}
      </span>
    </div>
  );
}`,
      advancedExample: `import React, { useState } from 'react';

// نموذج تحرير مكتمل (Inline Edit Form) لتعديل اسم وسعر المنتج
function EditableProductRow({ product, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdate = async () => {
    setIsUpdating(true);
    try {
      const response = await fetch('https://dummyjson.com/products/' + product.id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: title,
          price: Number(price),
        }),
      });

      if (!response.ok) throw new Error('تعذر تحديث المنتج');
      const updatedProduct = await response.json();

      // إشعار المكون الأب بالتعديل الجديد
      onSave(updatedProduct);
      setIsEditing(false);
    } catch (err) {
      alert('خطأ في التعديل: ' + err.message);
    } finally {
      setIsUpdating(false);
    }
  };

  if (!isEditing) {
    return (
      <div className="flex items-center justify-between p-3 border-b">
        <div>
          <span className="font-semibold">{product.title}</span>
          <span className="text-gray-500 mr-2">({product.price} $)</span>
        </div>
        <button
          onClick={() => setIsEditing(true)}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          ✏️ تعديل
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 p-3 bg-blue-50 border-b">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-1 border rounded text-sm flex-1"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="p-1 border rounded text-sm w-24"
      />
      <button
        onClick={handleUpdate}
        disabled={isUpdating}
        className="px-3 py-1 bg-green-600 text-white rounded text-sm disabled:opacity-50"
      >
        {isUpdating ? 'حفظ...' : 'حفظ'}
      </button>
      <button
        onClick={() => setIsEditing(false)}
        className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm"
      >
        إلغاء
      </button>
    </div>
  );
}`,
      output: "التبديل بين وضع العرض العادي ووضع التحرير المباشر في نفس السطر، وتحديث القائمة فور استلام رد الخادم.",
      commonMistakes: [
        {
          mistake: "استخدام PUT وإرسال حقل واحد فقط مما يسبب محو باقي بيانات السجل في بعض الخوادم الصارمة.",
          fix: "استخدم PATCH دائماً إذا كنت ترسل فقط الحقول المعدلة.",
          explanation: "PUT تعني استبدال الكائن بالكامل، والخادم قد يعتبر الحقول غير المرسلة null."
        }
      ],
      bestPractices: [
        "استخدم دالة .map() في الـ State لتحديث العنصر المعدل في مكانه بدقة: items.map(item => item.id === updated.id ? updated : item).",
        "قدم خيار 'إلغاء التعديل' لإعادة القيم الأصلية في حال غير المستخدم رأيه."
      ],
      infographic: {
        title: "أنماط تحديث السجلات في React",
        elements: [
          { label: "طريقة PUT", role: "استبدال كامل للمورد (إرسال الكائن بكل حقوله)", color: "amber" },
          { label: "طريقة PATCH", role: "تعديل جزئي (إرسال الحقول المتغيرة فقط مثل الحالة أو السعر)", color: "blue" },
          { label: "Inline Editing", role: "تحويل السطر لنموذج تعديل موضعي سريع ومريح للمستخدم", color: "purple" },
          { label: "State Mapping", role: "تحديث العنصر في المصفوفة فوراً بناءً على مطابقة المعرف id", color: "emerald" }
        ]
      }
    },
    {
      id: "10.3.d",
      title: "حذف البيانات Delete",
      englishTerm: "Delete Operation (عَمَلِيَّةُ الحَذْفِ: إزالة الموارد عبر طلبات DELETE)",
      description: "عملية الحذف (Delete) هي إزالة مورد نهائياً من قاعدة البيانات أو وضع علامة عليه كـ 'محذوف منطقياً' (Soft Delete). ترتبط بطريقة HTTP المسماة `DELETE` وتتطلب تمرير معرّف المورد في مسار الـ URL (مثل `/api/posts/42`). عند نجاح العملية، يرجع الخادم غالباً رمز `204 No Content` أو `200 OK`، ويجب على الواجهة تصفية العنصر المحذوف من مصفوفة الحالة المحلية فوراً ليختفي من الشاشة.",
      analogy: "مثل إلقاء ورقة قديمة في سلة المهملات: تشير إلى الورقة المحددة باسمها، وتضعها في سلة الإتلاف؛ الورقة تختفي من على مكتبك نهائياً ولا يمكنك استرجاعها إلا إذا كانت السلة تحتفظ بنسخة مؤقتة.",
      whyItMatters: "تطهير السجلات القديمة وإدارة المحتوى وتنظيف مساحات التخزين. نظراً لخطورة هذه العملية، تتطلب عناية برمجية بالغة لمنع الحذف العرضي أو الخاطئ.",
      syntax: "DELETE /api/items/:id\nResponse: 204 No Content -> Remove from state",
      simpleExample: `import React, { useState } from 'react';

// مكون لحذف عنصر من القائمة
function SimpleDeleteList() {
  const [items, setItems] = useState([
    { id: 1, name: 'مستند العقد' },
    { id: 2, name: 'صورة الهوية' },
  ]);

  const handleDelete = (id) => {
    // إرسال طلب الحذف للخادم
    fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
      method: 'DELETE',
    }).then((res) => {
      if (res.ok) {
        // تصفية المصفوفة وحذف العنصر من الواجهة
        setItems(items.filter((item) => item.id !== id));
      }
    });
  };

  return (
    <ul>
      {items.map((it) => (
        <li key={it.id}>
          {it.name}
          <button onClick={() => handleDelete(it.id)} style={{ color: 'red', marginLeft: '8px' }}>
            🗑️ حذف
          </button>
        </li>
      ))}
    </ul>
  );
}`,
      advancedExample: `import React, { useState } from 'react';

// حذف احترافي مع مؤشر تحميل فرعي لكل زر وعزل الحالات الخطرة
function RobustItemDeleter({ item, onDeleteSuccess }) {
  // حالة تدل على أن هذا العنصر بالذات قيد الحذف حالياً
  const [isDeleting, setIsDeleting] = useState(false);

  const executeDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch('https://dummyjson.com/products/' + item.id, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('رفض الخادم عملية الحذف');
      }

      // إشعار المكون الأب بنجاح الحذف لإزالته من الـ State
      onDeleteSuccess(item.id);
    } catch (err) {
      alert('تعذر حذف العنصر: ' + err.message);
      setIsDeleting(false); // إعادة تفعيل الزر في حال الفشل
    }
  };

  return (
    <div className="flex items-center justify-between p-3 bg-white border rounded-lg shadow-sm">
      <span className={isDeleting ? 'opacity-40 line-through text-gray-500' : 'font-medium'}>
        {item.title}
      </span>
      <button
        onClick={executeDelete}
        disabled={isDeleting}
        className="px-3 py-1 bg-red-50 text-red-600 border border-red-200 rounded-md text-sm hover:bg-red-600 hover:text-white transition disabled:opacity-50"
      >
        {isDeleting ? 'جاري الإزالة...' : '🗑️ حذف نهائي'}
      </button>
    </div>
  );
}`,
      output: "تلاشي وتظليل العنصر أثناء إرسال طلب الحذف، ثم اختفاؤه كلياً من القائمة عند تأكيد النجاح.",
      commonMistakes: [
        {
          mistake: "محاولة قراءة response.json() بعد الحذف عندما يرجع الخادم كود 204 No Content.",
          fix: "افحص response.ok مباشرة دون محاولة فك تشفير JSON إذا كانت الحالة 204.",
          explanation: "كود 204 يعني نجاح العملية بدون محتوى (No Content)؛ قراءة .json() ستقذف خطأ Unexpected end of JSON input."
        }
      ],
      bestPractices: [
        "استخدم دالة .filter() لتحديث الحالة المحلية: setItems(prev => prev.filter(i => i.id !== deletedId)).",
        "احرص دائماً على وجود تأكيد مسبق (Confirmation) قبل الحذف الحقيقي للبيانات الهامة."
      ],
      infographic: {
        title: "خطوات تنفيذ الحذف الآمن (Delete Flow)",
        elements: [
          { label: "1. النقر على الحذف", role: "طلب تأكيد من المستخدم أولاً", color: "amber" },
          { label: "2. طلب DELETE", role: "إرسال HTTP DELETE مع معرف المورد في المسار", color: "rose" },
          { label: "3. استجابة الخادم", role: "تأكيد الحذف برمز 204 No Content أو 200 OK", color: "purple" },
          { label: "4. تصفية الواجهة", role: "استبعاد العنصر فوراً عبر array.filter()", color: "emerald" }
        ]
      }
    },
    {
      id: "10.3.e",
      title: "تحديث الواجهة بعد العمليات",
      englishTerm: "UI Synchronization (مُزَامَنَةُ الوَاجِهَة: التحديث المتشائم مقابل التحديث المتفائل)",
      description: "بعد تنفيذ عمليات الإنشاء أو التعديل أو الحذف، هناك استراتيجيتان رئيسيتان لتحديث واجهة المستخدم: 1) التحديث المتشائم (Pessimistic Update): الانتظار حتى يؤكد الخادم نجاح العملية ثم تحديث الـ State؛ 2) التحديث المتفائل (Optimistic Update): افتراض نجاح العملية فوراً وتحديث الـ State محلياً في الصفر ثانية، وفي حال فشل الخادم لاحقاً يتم التراجع (Rollback) واسترجاع الحالة الأصلية مع إشعار المستخدم بالخطأ.",
      analogy: "مثل إرسال رسالة في واتساب: بمجرد ضغط زر الإرسال تظهر الفقاعة في المحادثة فوراً مع علامة ساعة (Optimistic) لتبدو التجربة فائقة السرعة؛ وإذا انقطع الإنترنت تظهر علامة تعجب حمراء بجانبها لتخبرك بأنها لم تصل.",
      whyItMatters: "التحديث المتفائل يجعل التطبيق يبدو فورياً وخالياً من أي بطء شبكي، وهو السر وراء سلاسة تطبيقات كبرى مثل تويتر وإنستغرام وفيسبوك.",
      syntax: "// Optimistic UI:\nconst previousItems = items;\nsetItems(optimisticNewItems);\ntry { await api.call(); } catch { setItems(previousItems); }",
      simpleExample: `import React, { useState } from 'react';

// مثال على التحديث المتشائم (Pessimistic Update)
function PessimisticList() {
  const [todos, setTodos] = useState([{ id: 1, text: 'شراء حليب' }]);
  const [loading, setLoading] = useState(false);

  const addPessimistic = async () => {
    setLoading(true);
    // ننتظر الخادم أولاً
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({ title: 'قراءة كتاب', completed: false }),
    });
    const newTodo = await res.json();
    // لا نحدث الواجهة إلا بعد انتهاء الخادم
    setTodos((prev) => [...prev, { id: newTodo.id, text: 'قراءة كتاب' }]);
    setLoading(false);
  };

  return (
    <div>
      <button onClick={addPessimistic} disabled={loading}>
        {loading ? 'جاري التأكيد...' : 'إضافة متأنية'}
      </button>
      <ul>{todos.map(t => <li key={t.id}>{t.text}</li>)}</ul>
    </div>
  );
}`,
      advancedExample: `import React, { useState } from 'react';

// مثال على التحديث المتفائل (Optimistic Update) لحذف عنصر فوراً مع إمكانية التراجع
function OptimisticDeleteDemo() {
  const [articles, setArticles] = useState([
    { id: 101, title: 'مقدمة في React 19' },
    { id: 102, title: 'أسرار الـ Hooks المتقدمة' },
    { id: 103, title: 'دليل بنية التطبيقات الكبيرة' },
  ]);
  const [errorMessage, setErrorMessage] = useState(null);

  const deleteArticleOptimistically = async (targetId) => {
    // 1. أخذ نسخة احتياطية من الحالة الحالية للتراجع في حال الفشل
    const previousArticles = articles;

    // 2. تحديث الواجهة فوراً في الصفر ثانية (تفاؤل بالنجاح)
    setArticles((prev) => prev.filter((item) => item.id !== targetId));
    setErrorMessage(null);

    try {
      // 3. محاكاة طلب حذف قد يفشل عمداً
      const response = await fetch('https://invalid-server-endpoint-fail.com/posts/' + targetId, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('تعذر إتمام الحذف على الخادم الرئيسي');
      }
    } catch (err) {
      // 4. في حال الفشل: التراجع الفوري واستعادة الحالة السابقة
      setArticles(previousArticles);
      setErrorMessage('فشل حذف المقال! تمت استعادة العنصر إلى القائمة.');
    }
  };

  return (
    <div className="p-4 border rounded-xl max-w-md bg-white">
      <h4 className="font-bold mb-3">حذف متفائل (استجابة فورية 0ms):</h4>
      {errorMessage && (
        <div className="mb-3 p-2 bg-red-100 text-red-700 text-sm rounded">
          ⚠️ {errorMessage}
        </div>
      )}
      <ul className="space-y-2">
        {articles.map((art) => (
          <li key={art.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
            <span>{art.title}</span>
            <button
              onClick={() => deleteArticleOptimistically(art.id)}
              className="text-red-500 hover:text-red-700 text-sm font-bold"
            >
              حذف
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      output: "اختفاء المقال المحذوف بلمح البصر دون أي تأخير، مع عودته التلقائية وظهور تنبيه أحمر في حال فشل الخادم.",
      commonMistakes: [
        {
          mistake: "استخدام التحديث المتفائل في العمليات المالية الحساسة مثل تحويل الأموال أو تأكيد الدفع.",
          fix: "استخدم دائماً التحديث المتشائم (Pessimistic) للعمليات المصرفية والتعاقدية الصارمة.",
          explanation: "إيهام المستخدم بنجاح عملية تحويل بنكي قبل تأكيد الخادم قد يسبب كارثة قانونية أو مالية إذا رفض البنك العملية."
        }
      ],
      bestPractices: [
        "احتفظ دائماً بنسخة سابقة (Snapshot / Rollback Reference) قبل تنفيذ أي تحديث متفائل.",
        "استخدم التحديث المتفائل لعمليات الإعجاب (Like)، والتبديل (Toggle)، وحفظ المسودات السريعة."
      ],
      infographic: {
        title: "مقارنة التحديث المتفائل مقابل المتشائم",
        elements: [
          { label: "Pessimistic (المتشائم)", role: "انقر -> انتظر رد الخادم (500ms) -> حدث الواجهة (أمان عالي / بطء إدراكي)", color: "amber" },
          { label: "Optimistic (المتفائل)", role: "انقر -> حدث الواجهة فوراً (0ms) -> أرسل للخادم -> تراجع عند الفشل", color: "emerald" },
          { label: "حالات الاستخدام", role: "المتفائل: إعجابات، دردشة، سحب وإفلات | المتشائم: مدفوعات، طلبات الشراء", color: "blue" },
          { label: "تجربة المستخدم UX", role: "التحديث المتفائل يمنح شعوراً بأن التطبيق يعمل محلياً بسرعة البرق", color: "purple" }
        ]
      }
    },
    {
      id: "10.3.f",
      title: "تأكيد عمليات الحذف",
      englishTerm: "Delete Confirmation Pattern (نَمَطُ تَأْكِيدِ الحَذْفِ: الوقاية من الحذف غير المقصود)",
      description: "نظراً لأن عمليات الحذف غير قابلة للتراجع وتؤدي إلى فقدان دائم للمعلومات، فإن معايير تجربة المستخدم (UX) وهندسة البرمجيات تمنع تنفيذ الحذف بضغطة زر واحدة غير مقصودة. تتراوح أنماط التأكيد من رسائل المتصفح البسيطة `window.confirm()`، إلى النوافذ المنبثقة التفاعلية (Confirmation Dialogs / Modals)، وحتى كتابة اسم العنصر للتأكيد في الحالات الخطيرة (Destructive Confirmation).",
      analogy: "مثل نظام إطلاق الصواريخ أو فرمتة الهاتف الذكي: لا يمكن أن تضغط زراً عابراً فتتدمر كل ملفاتك؛ بل يسألك الهاتف: 'هل أنت متأكد تماماً؟ أدخل رمز المرور لتأكيد مسح كافة البيانات'.",
      whyItMatters: "يحمي المستخدمين من الخسائر الكارثية الناتجة عن اللمسات العرضية على شاشات الهواتف أو النقر الخاطئ، ويعزز الثقة في أمان النظام.",
      syntax: "if (!window.confirm('هل أنت متأكد من رغبتك في حذف هذا السجل نهائياً؟')) return;\n// نفذ الحذف...",
      simpleExample: `import React from 'react';

// تأكيد بسيط باستخدام نافذة المتصفح المدمجة
function SimpleDeleteButton({ itemName, onDelete }) {
  const handleClick = () => {
    // فتح نافذة التأكيد القياسية للمتصفح
    const isConfirmed = window.confirm('هل أنت متأكد حقاً من حذف "' + itemName + '"؟ لا يمكن التراجع عن هذا الإجراء.');
    if (isConfirmed) {
      // تنفيذ الحذف فقط في حال موافقة المستخدم
      onDelete();
    }
  };

  return (
    <button onClick={handleClick} className="px-3 py-1 bg-red-600 text-white rounded text-sm">
      حذف {itemName}
    </button>
  );
}`,
      advancedExample: `import React, { useState } from 'react';

// نافذة تأكيد احترافية (Custom Modal Dialog) تتطلب كتابة كلمة DELETE للعناصر الحساسة
function DangerousDeleteModal({ isOpen, targetTitle, onConfirm, onCancel }) {
  const [typedConfirmation, setTypedConfirmation] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  if (!isOpen) return null;

  const handleFinalConfirm = async () => {
    setIsDeleting(true);
    await onConfirm();
    setIsDeleting(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-red-100 text-right">
        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
          ⚠️
        </div>
        <h3 className="text-xl font-bold text-gray-900 text-center mb-2">تأكيد الحذف النهائي</h3>
        <p className="text-gray-600 text-sm text-center mb-4">
          أنت على وشك حذف <strong>"{targetTitle}"</strong> بشكل لا رجعة فيه. سيتم حذف كافة الملفات المرتبطة به.
        </p>

        <div className="mb-4">
          <label className="block text-xs font-semibold text-gray-500 mb-1">
            لتأكيد العملية، اكتب كلمة <span className="text-red-600 font-mono">حذف</span> في المربع أدناه:
          </label>
          <input
            type="text"
            placeholder="اكتب كلمة: حذف"
            value={typedConfirmation}
            onChange={(e) => setTypedConfirmation(e.target.value)}
            className="w-full p-2 border rounded-lg text-center font-bold text-red-600"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            disabled={isDeleting}
            className="flex-1 py-2 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition"
          >
            تراجع وإلغاء
          </button>
          <button
            onClick={handleFinalConfirm}
            disabled={typedConfirmation !== 'حذف' || isDeleting}
            className="flex-1 py-2 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition disabled:opacity-40"
          >
            {isDeleting ? 'جاري الحذف...' : 'نعم، احذف نهائياً'}
          </button>
        </div>
      </div>
    </div>
  );
}`,
      output: "نافذة منبثقة غاية في الأمان والأناقة تعطل زر الحذف حتى يكتب المستخدم كلمة التأكيد بدقة، مما يمنع الأخطاء بنسبة 100%.",
      commonMistakes: [
        {
          mistake: "الاعتماد الدائم على window.confirm() في التطبيقات الكبيرة الموجهة للهواتف.",
          fix: "ابنِ مكون نافذة منبثقة مخصص (Custom Accessible Modal) يتناسب مع هوية التطبيق وتصميم الشاشات الصغيرة.",
          explanation: "نوافذ المتصفح الافتراضية قبيحة بصرياً، ولا تدعم التخصيص أو إضافة مؤشرات تحميل، ويمكن حظرها من المتصفحات."
        }
      ],
      bestPractices: [
        "اجعل زر 'الإلغاء والتراجع' هو الزر الافتراضي أو الأكثر بروزاً لتقليل التهور.",
        "استخدم نمط الكتابة المشروطة (Type to confirm) فقط للكيانات شديدة الخطورة مثل حذف الحساب أو قاعدة البيانات."
      ],
      infographic: {
        title: "مستويات تأكيد الحذف بحسب درجة الخطورة",
        elements: [
          { label: "المستوى 1: التراجع السريع (Undo Toast)", role: "تنفيذ فوري مع ظهور شريط إشعار يحوي زر 'تراجع' لمدة 5 ثوانٍ", color: "blue" },
          { label: "المستوى 2: النافذة البسيطة (Modal)", role: "نافذة منبثقة بزرين: تأكيد باللون الأحمر وإلغاء باللون الرمادي", color: "amber" },
          { label: "المستوى 3: الكتابة المشروطة (Strict)", role: "مطالبة المستخدم بكتابة اسم المورد للتأكيد الصارم قبل التفعيل", color: "rose" },
          { label: "المستوى 4: تأكيد بكلمة المرور/2FA", role: "طلب كلمة المرور أو رمز التحقق الثنائي لحذف الحسابات المصرفية", color: "purple" }
        ]
      }
    },
    {
      id: "10.3.g",
      title: "إدارة الأخطاء القادمة من API",
      englishTerm: "Handling API Errors (إِدَارَةُ أَعْطَالِ وَأَخْطَاءِ الـ API: فك تشفير رسائل الخادم)",
      description: "عند فشل عمليات CRUD، يرجع الخادم تفاصيل الخطأ عادةً ككائن JSON يحتوي على كود الحالة، ورسالة تفصيلية، وأحياناً مصفوفة بأخطاء حقول النموذج (Validation Errors برمز 422). إدارة الأخطاء الاحترافية تتطلب استخراج هذه الرسائل بدقة، وربط أخطاء الحقول بالمدخلات المقابلة لها في الواجهة، وتوفير رسائل بديلة واضحة في حال انقطاع الشبكة كلياً.",
      analogy: "مثل استلام تقرير فحص طبي: بدلاً من أن يقول الطبيب 'هناك عطل' ويتركك في حيرة، يحدد لك التقرير بدقة: 'نسبة السكر مرتفعة قليلاً، وضغط الدم طبيعي'، فتعرف بدقة ما هو العضو الذي يحتاج إلى علاج.",
      whyItMatters: "المستخدم يحتاج لمعرفة سبب الرفض بالضبط: هل اسم المستخدم مأخوذ؟ هل كلمة المرور قصيرة؟ هل انتهت صلاحية بطاقة الائتمان؟ الإبهام يقتل التفاعل.",
      syntax: "if (!res.ok) {\n  const errData = await res.json();\n  setFieldErrors(errData.errors);\n}",
      simpleExample: `import React, { useState } from 'react';

// استخراج رسالة الخطأ القادمة من الخادم
function RegisterUser() {
  const [errorMsg, setErrorMsg] = useState(null);

  const register = async () => {
    setErrorMsg(null);
    try {
      const res = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'sydney@fife' }), // كلمة المرور مفقودة عمداً
      });

      const data = await res.json();

      if (!res.ok) {
        // الخادم يرجع { error: 'Missing password' }
        throw new Error(data.error || 'حدث خطأ في التسجيل');
      }

      alert('تم التسجيل بنجاح!');
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <div>
      <button onClick={register}>تسجيل تجريبي</button>
      {errorMsg && <p style={{ color: 'red' }}>تنبيه: {errorMsg}</p>}
    </div>
  );
}`,
      advancedExample: `import React, { useState } from 'react';

// معالج متكامل يفكك أخطاء التحقق المتعددة (Field Validation Errors) برمز 422
function ProductEditorWithServerValidation() {
  const [title, setTitle] = useState('');
  const [sku, setSku] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [globalError, setGlobalError] = useState(null);

  const saveProduct = async (e) => {
    e.preventDefault();
    setFieldErrors({});
    setGlobalError(null);

    try {
      const response = await fetch('https://api.example.com/products/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, sku }),
      });

      if (!response.ok) {
        const errorBody = await response.json();

        // فحص هل هو خطأ تحقق من الحقول برمز 422
        if (response.status === 422 && errorBody.errors) {
          // الخادم يرجع: { errors: { title: 'الاسم قصير جداً', sku: 'رمز المنتج مستخدم مسبقاً' } }
          setFieldErrors(errorBody.errors);
          return;
        }

        // خطأ عام آخر
        throw new Error(errorBody.message || 'فشل حفظ المنتج برمز ' + response.status);
      }

      alert('تم الحفظ بنجاح!');
    } catch (err) {
      setGlobalError(err.message || 'تعذر الاتصال بالخادم، يرجى فحص الشبكة.');
    }
  };

  return (
    <form onSubmit={saveProduct} className="p-4 border rounded max-w-sm space-y-3">
      {globalError && <div className="p-2 bg-red-100 text-red-700 text-sm rounded">{globalError}</div>}
      
      <div>
        <label className="block text-sm font-medium">اسم المنتج:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={"w-full p-2 border rounded " + (fieldErrors.title ? "border-red-500 bg-red-50" : "border-gray-300")}
        />
        {fieldErrors.title && <span className="text-red-500 text-xs">{fieldErrors.title}</span>}
      </div>

      <div>
        <label className="block text-sm font-medium">رمز الـ SKU:</label>
        <input
          value={sku}
          onChange={(e) => setSku(e.target.value)}
          className={"w-full p-2 border rounded " + (fieldErrors.sku ? "border-red-500 bg-red-50" : "border-gray-300")}
        />
        {fieldErrors.sku && <span className="text-red-500 text-xs">{fieldErrors.sku}</span>}
      </div>

      <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded">
        حفظ البيانات
      </button>
    </form>
  );
}`,
      output: "إظهار حدود حمراء ورسائل خطأ مخصصة أسفل كل حقل بالاعتماد المباشر على رد الخادم المفصل.",
      commonMistakes: [
        {
          mistake: "الافتراض بأن الخادم سيرجع دائماً خطأ بصيغة { message: '...' } دون فحص الهيكل.",
          fix: "اكتب كوداً دفاعياً يفحص مفاتيح الخطأ المحتملة (error, message, errors, details).",
          explanation: "تختلف أطر العمل الخلفية (Laravel, Express, Django, Spring) في هيكلة كائنات الأخطاء."
        }
      ],
      bestPractices: [
        "امسح الأخطاء الخاصة بالحقل بمجرد أن يبدأ المستخدم في الكتابة والتصحيح (onFocus أو onChange).",
        "احرص على تسجيل الأخطاء غير المتوقعة في منصات مراقبة الأعطال مثل Sentry لتتبع مشاكل الإنتاج."
      ],
      infographic: {
        title: "تشريح كائن الخطأ القادم من الـ API",
        elements: [
          { label: "Status Code", role: "يحدد تصنيف الخطأ الأساسي: 400، 401، 403، 404، 422، 500", color: "rose" },
          { label: "Global Message", role: "رسالة إجمالية توضح سبب تعذر إتمام العملية", color: "amber" },
          { label: "Validation Map", role: "خريطة تفصيلية بأخطاء كل حقل على حدة لتلوين الحقول", color: "blue" },
          { label: "Network Fallback", role: "رسالة احتياطية في حال انقطاع الشبكة كلياً وعدم وصول الرد", color: "purple" }
        ]
      }
    },
    {
      id: "10.3.h",
      title: "إظهار إشعارات النجاح والفشل",
      englishTerm: "Toast Notifications (إِشْعَارَاتُ التَّوْسْت: رسائل التنبيه العائمة المؤقتة)",
      description: "إشعارات التوست (Toast Notifications) هي رسائل بصرية منبثقة عائمة تظهر لفترة وجيزة (عادة 3 إلى 5 ثوانٍ) في إحدى زوايا الشاشة لإعلام المستخدم بنتيجة العملية (مثل 'تم حفظ المنتج بنجاح' أو 'فشل الاتصال بالخادم') دون مقاطعة تدفق عمله أو إجباره على إغلاق نافذة منبثقة. تعتبر البديل الحديث والراقي لدوال `alert()` البدائية في المتصفح.",
      analogy: "مثل الإشعار المنبثق في هاتفك عندما تصلك رسالة واتساب: يظهر شريط ناعم أعلى الشاشة لمدة ثانيتين يخبرك بالرسالة، ثم يختفي تلقائياً دون أن يغلق التطبيق الذي تلعب به أو تقرأ منه.",
      whyItMatters: "تمنح تأكيداً فورياً ومطمئناً للمستخدم على نجاح العمليات الخلفية، وتبقي الواجهة منظمة دون تكديس نصوص التنبيهات في كل صفحة.",
      syntax: "toast.success('تمت العملية بنجاح');\ntoast.error('حدث خطأ أثناء الحفظ');",
      simpleExample: `import React, { useState } from 'react';

// نظام إشعار توست مدمج بسيط بدون مكتبات
function SimpleToastDemo() {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    // إخفاء الإشعار تلقائياً بعد 3 ثوانٍ
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <div className="p-4 relative">
      <button
        onClick={() => showToast('تم تحديث البيانات بنجاح! 🎉', 'success')}
        className="px-4 py-2 bg-emerald-600 text-white rounded-lg"
      >
        اختبار إشعار النجاح
      </button>

      {/* شريط الإشعار العائم */}
      {toast && (
        <div
          className={
            "fixed bottom-4 left-4 p-4 rounded-xl shadow-lg text-white font-medium transition-all animate-bounce " +
            (toast.type === 'success' ? 'bg-emerald-600' : 'bg-red-600')
          }
        >
          {toast.message}
        </div>
      )}
    </div>
  );
}`,
      advancedExample: `import React, { useState, createContext, useContext } from 'react';

// بناء نظام Toast Context احترافي متعدد الإشعارات قابل للاستخدام في أي مكان
const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  // إضافة إشعار جديد مع توليد معرف فريد ومؤقت إزالة
  const addToast = (message, type = 'info', duration = 4000) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, duration);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      {/* حاوية الإشعارات العائمة في أسفل يسار الشاشة */}
      <div className="fixed bottom-5 left-5 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={
              "pointer-events-auto flex items-center justify-between min-w-[280px] p-3 rounded-xl shadow-xl text-white text-sm font-medium transition-all transform translate-y-0 " +
              (toast.type === 'success' ? 'bg-emerald-600' : toast.type === 'error' ? 'bg-rose-600' : 'bg-blue-600')
            }
          >
            <span>{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="mr-3 text-white/80 hover:text-white font-bold"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

// خطاف مخصص لاستخدام التوست في أي مكون
export const useToast = () => useContext(ToastContext);`,
      output: "إشعارات أنيقة تتراكم في زاوية الشاشة وتختفي بنعومة بعد بضع ثوانٍ مع إمكانية إغلاقها يدوياً بنقرة زر.",
      commonMistakes: [
        {
          mistake: "استخدام window.alert() القديم المزعج في تطبيقات React الحديثة.",
          fix: "استخدم مكتبات توست حديثة مثل Sonner أو React Hot Toast أو ابنِ نظام Toast Context مخصص.",
          explanation: "دالة alert تجمد خيط جافاسكريبت بالكامل (Blocking) وتمنع التفاعل وتقدم واجهة نظام قديمة تفتقر للمظهر العصري."
        }
      ],
      bestPractices: [
        "حدد مهلة زمنية تتراوح بين 3 إلى 5 ثوانٍ للإشعارات العادية لتمنح المستخدم وقتاً كافياً للقراءة.",
        "اجعل إشعارات الأخطاء الفادحة تدوم لفترة أطول أو تتطلب نقراً يدوياً للإغلاق لضمان انتباه المستخدم لها."
      ],
      infographic: {
        title: "أنواع ومقومات إشعارات التوست الفعالة",
        elements: [
          { label: "Success Toast", role: "أخضر زمردي | أيقونة فحص ✔️ | إعلام بنجاح الحفظ أو الإرسال", color: "emerald" },
          { label: "Error Toast", role: "أحمر قاني | أيقونة تنبيه ⚠️ | إعلام بفشل الطلب أو انقطاع الشبكة", color: "rose" },
          { label: "Info / Warning", role: "أزرق أو كهرماني | إشعار بالتحديثات أو نصائح الاستخدام", color: "blue" },
          { label: "Action Button", role: "زر مدمج مثل 'تراجع عن الحذف' أو 'إعادة المحاولة' الفورية", color: "purple" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q10.3.1",
      question: "ما هو الفارق الجوهري بين التحديث المتشائم (Pessimistic) والتحديث المتفائل (Optimistic)؟",
      options: [
        "التحديث المتشائم يرسل البيانات للخادم والتحديث المتفائل لا يتصل بالخادم أبداً.",
        "التحديث المتشائم ينتظر رد وتأكيد الخادم قبل تعديل الشاشة، بينما المتفائل يعدل الشاشة فوراً في 0ms ويتراجع إذا فشل الخادم.",
        "التحديث المتفائل يعمل فقط مع طلبات GET بينما المتشائم يعمل مع DELETE.",
        "التحديث المتشائم يمسح قاعدة البيانات كلياً."
      ],
      correctAnswer: 1,
      explanation: "التحديث المتفائل يفترض النجاح مقدماً لتوفير تجربة استجابة فائقة السرعة للمستخدم (Zero Latency)، مع الاحتفاظ بنسخة احتياطية للعودة إليها إذا رفض الخادم الطلب."
    },
    {
      id: "q10.3.2",
      question: "عند حذف مورد بنجاح، ويرجع الخادم رمز الحالة 204 No Content، ماذا يحدث إذا استدعيت response.json()؟",
      options: [
        "ستحصل على كائن فارغ {}.",
        "ستحدث إعادة توجيه للصفحة الرئيسية تلقائياً.",
        "سيحدث استثناء برمجـي (SyntaxError: Unexpected end of JSON input) لأن استجابة الخادم خالية من أي جسم نصي.",
        "سيتم حذف العنصر من قاعدة البيانات للمرة الثانية."
      ],
      correctAnswer: 2,
      explanation: "رمز 204 يعني نجاح بلا محتوى؛ محاولة فك تشفير جسم خاوٍ كـ JSON تقذف خطأ لعدم وجود بيانات صالحة للتحليل."
    },
    {
      id: "q10.3.3",
      question: "لماذا نستخدم disabled={isSubmitting} على أزرار النماذج أثناء تنفيذ طلبات POST؟",
      options: [
        "لتغيير لون الزر إلى الرمادي فقط لتحسين المظهر.",
        "لحماية الخادم وقاعدة البيانات من إنشاء سجلات مكررة (Duplicate Entries) في حال ضغط المستخدم الزر عدة مرات متتالية بسرعة.",
        "لأن المتصفح يغلق الاتصال إذا بقي الزر مفعلاً.",
        "لإجبار المستخدم على ملء الحقول الإضافية."
      ],
      correctAnswer: 1,
      explanation: "تعطيل الزر يمنع النقرات المتعددة العرضية أثناء معالجة الطلب، مما يحمي النظام من إنشاء سجلات مكررة أو تكرار عمليات الدفع."
    }
  ],
  exercise: {
    id: "ex-10.3",
    title: "بناء نظام إدارة مهام متكامل مع التحديث المتفائل وحذف آمن (Optimistic CRUD Task Manager)",
    description: "قم بإنشاء مكون React متكامل يدير قائمة مهام CRUD: يدعم إضافة مهمة جديدة، وتبديل حالتها (Completed Toggle)، وحذفها بالتحديث المتفائل (Optimistic Delete) مع التراجع في حال الفشل وعرض رسائل التنبيه.",
    starterCode: `import React, { useState } from 'react';

export function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'دراسة REST APIs', completed: false },
    { id: 2, title: 'بناء تطبيق CRUD في React', completed: true },
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [notification, setNotification] = useState(null);

  // 1. إضافة مهمة جديدة
  const handleAdd = (e) => {
    e.preventDefault();
  };

  // 2. تبديل حالة الإنجاز
  const handleToggle = (id) => {
  };

  // 3. حذف متفائل مع التراجع
  const handleOptimisticDelete = async (id) => {
  };

  return (
    <div>
      {/* اكتب واجهتك هنا */}
    </div>
  );
}`,
    hints: [
      "في الحذف المتفائل، احفظ نسخة const backup = tasks قبل setTasks(tasks.filter(...)).",
      "استخدم كتلة try/catch لمحاكاة طلب fetch، وإذا فشل أعد الـ backup واعرض التنبيه.",
      "استخدم .map() لتحديث خاصية completed للمهمة المحددة."
    ],
    solution: `import React, { useState } from 'react';

export function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'دراسة REST APIs', completed: false },
    { id: 2, title: 'بناء تطبيق CRUD في React', completed: true },
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [notification, setNotification] = useState(null);

  // إظهار إشعار مؤقت
  const notify = (msg, isError = false) => {
    setNotification({ msg, isError });
    setTimeout(() => setNotification(null), 3000);
  };

  // 1. إضافة مهمة جديدة
  const handleAdd = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newTask = {
      id: Date.now(),
      title: newTitle.trim(),
      completed: false,
    };

    setTasks((prev) => [newTask, ...prev]);
    setNewTitle('');
    notify('تمت إضافة المهمة بنجاح!');
  };

  // 2. تبديل حالة الإنجاز
  const handleToggle = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
    notify('تم تحديث حالة المهمة');
  };

  // 3. حذف متفائل مع التراجع عند الفشل
  const handleOptimisticDelete = async (id) => {
    const backup = tasks;
    // التحديث الفوري للواجهة
    setTasks((prev) => prev.filter((t) => t.id !== id));

    try {
      // محاكاة استدعاء API (نصف فرصة نجاح ونصف فشل لاختبار التراجع)
      const shouldFail = Math.random() < 0.2; // 20% احتمال فشل
      if (shouldFail) throw new Error('فشل الخادم في تنفيذ أمر الحذف');

      notify('تم حذف المهمة بنجاح');
    } catch (err) {
      // التراجع واستعادة النسخة الأصلية
      setTasks(backup);
      notify(err.message + ' - تمت استعادة المهمة!', true);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg border">
      <h3 className="text-xl font-bold text-gray-800 mb-4">مدير المهام التفاعلي (CRUD)</h3>

      {notification && (
        <div
          className={"p-3 mb-4 rounded-xl text-sm font-medium " +
            (notification.isError ? "bg-red-50 text-red-700 border border-red-200" : "bg-emerald-50 text-emerald-700 border border-emerald-200")}
        >
          {notification.msg}
        </div>
      )}

      <form onSubmit={handleAdd} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="عنوان مهمة جديدة..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="flex-1 p-2 border rounded-xl focus:outline-blue-500"
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
          إضافة
        </button>
      </form>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
                className="w-5 h-5 accent-blue-600 cursor-pointer"
              />
              <span className={task.completed ? "line-through text-gray-400" : "text-gray-800 font-medium"}>
                {task.title}
              </span>
            </div>
            <button
              onClick={() => handleOptimisticDelete(task.id)}
              className="text-red-500 hover:text-red-700 text-sm font-bold p-1"
            >
              حذف 🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}`
  },
  infographic: {
    title: "خريطة عمليات CRUD الشاملة في React",
    description: "دليلك الكامل للربط بين أفعال HTTP وتحديثات الحالة والواجهة",
    steps: [
      { step: "C", title: "Create (POST)", desc: "إرسال كائن جديد بالكامل واستلام كود 201 مع المعرف وتحديث الواجهة" },
      { step: "R", title: "Read (GET)", desc: "جلب آمن للبيانات عبر المسار أو الاستعلام مع إدارة حالات التحميل والأخطاء" },
      { step: "U", title: "Update (PUT/PATCH)", desc: "تعديل المورد واستبداله أو تحديث حقوله وتطبيق التحديثات الموضعية" },
      { step: "D", title: "Delete (DELETE)", desc: "تأكيد الحذف أولاً ثم إرسال الطلب والتصفية الفورية عبر array.filter()" }
    ]
  }
};
