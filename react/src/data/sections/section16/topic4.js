// src/data/sections/section16/topic4.js
// الموضوع 16.4: مفاهيم React القديمة واستراتيجيات الترحيل (Legacy React Concepts & Migration)

export const topic4 = {
  id: "16.4",
  title: "مفاهيم React القديمة (Legacy React Concepts & Migration)",
  description:
    "دليل مهندس البرمجيات للتعامل مع الشيفرات البرمجية القديمة (Legacy Codebases) في React: فهم عميق لمكونات الفئات (Class Components)، ودورة حياة المكون (Lifecycle Methods)، والفروق الجوهرية مع خطافات الدوال الحديثة، واستراتيجيات الترحيل الآمن (Safe Migration)، وتفكيك الأنماط المهجورة (Deprecated Patterns) مثل findDOMNode وUNSAFE_ methods بثقة تامة.",
  subtopics: [
    // 16.4.a
    {
      id: "16.4.a",
      title: "فهم Class Components وهيكلها الأساسي",
      englishTerm: "Class Components (كلاس كومبونانتس) - المكونات الفئوية",
      description:
        "قبل إطلاق React 16.8 والخطافات (Hooks)، كانت المكونات الفئوية (Class Components) هي الطريقة الوحيدة لامتلاك حالة محلية (State) أو تنفيذ تأثيرات دورة الحياة في React. يعتمد المكون الفئوي على فئات ES6 التي ترث من `React.Component`. يحتوي المكون عادة على دالة بناء `constructor` لتهيئة الحالة المبدئية وربط الدوال (Binding)، ويجب أن يحتوي إلزامياً على دالة `render()` التي ترجع واجهة الـ JSX. على عكس المكونات الدالية التي تنفذ كامل الدالة في كل تصيير، يحتفظ المكون الفئوي بنسخة كائن حية مستمرة في الذاكرة (Instance)، ويتم تحديث حالته حصراً عبر `this.setState()` المدمجة.",
      analogy:
        "تخيل الفرق بين مصنع سيارات قديم به مدير دائم يقف في مكتبه طوال اليوم ويتذكر كل ما حدث في المصنع (Class Component به كائن this وذاكرة حية)، وبين خط إنتاج روبوتي فائق السرعة ينفذ طلباً محدداً ثم يعيد التهيئة لكل دفعة إنتاج جديدة بخفة ورشاقة (Functional Component).",
      whyItMatters:
        "ملايين أسطر الكود في الشركات الكبرى (مثل بنوك وأنظمة تجارة إلكترونية قائمة منذ 2015) ما زالت مبنية بـ Class Components. كمهندس محترف، يجب أن تفهمها بعمق لتقرأها وتصلح أخطاءها وترحلها بنجاح دون شلل برمجي.",
      syntax: `// الهيكل الأساسي لمكون فئوي قديم:
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prev) => ({ count: prev.count + 1 }));
  }
  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}`,
      simpleExample: `// مثال تطبيقي أصيل لمكون فئوي كلاسيكي يدير عداداً
import React from 'react';

// تعريف المكون كفئة ترث من فئة المكون الأساسية في ريمارك
export class LegacyCounter extends React.Component {
  // دالة البناء لتهيئة المكون واستقبال الخصائص
  constructor(props) {
    // استدعاء دالة بناء الفئة الأب إلزامياً
    super(props);
    // تهيئة كائن الحالة المبدئي
    this.state = {
      count: 0,
    };
    // ربط مؤشر this بالدالة لضمان عملها عند استدعائها كحدث
    this.increment = this.increment.bind(this);
  }

  // دالة زيادة العداد
  increment() {
    // تحديث الحالة بالاعتماد على الحالة السابقة
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  // دالة التصيير الإلزامية التي ترجع كود JSX
  render() {
    return (
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-center space-y-3">
        <h3 className="text-sm font-bold text-slate-300">عداد فئوي كلاسيكي (Class)</h3>
        <p className="text-2xl font-mono text-sky-400 font-bold">{this.state.count}</p>
        <button
          onClick={this.increment}
          className="px-4 py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg transition"
        >
          زيادة العداد +
        </button>
      </div>
    );
  }
}`,
      advancedExample: `// مكون فئوي متقدم يوضح إدارة النماذج، والخصائص الافتراضية، وربط الأحداث المتعددة
import React from 'react';

export class LegacyUserProfileEditor extends React.Component {
  // تعريف الخصائص الافتراضية بنمط Static
  static defaultProps = {
    initialName: 'مستخدم جديد',
    initialRole: 'عضو',
  };

  // تهيئة الحالة باستخدام حقول الفئات الحديثة (Class Fields Syntax دون constructor صريح)
  state = {
    username: this.props.initialName,
    role: this.props.initialRole,
    isEditing: false,
    saveCount: 0,
  };

  // دوال سهمية تلقائية الربط التلقائي بـ this
  handleInputChange = (event) => {
    const { name, value } = event.target;
    // تحديث ديناميكي للمفتاح المطابق
    this.setState({
      [name]: value,
    });
  };

  // تبديل وضع التحرير
  toggleEditMode = () => {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
    }));
  };

  // حفظ التعديلات
  handleSave = () => {
    this.setState((prevState) => ({
      isEditing: false,
      saveCount: prevState.saveCount + 1,
    }));
    // إخطار الأب بالتعديل إن وجد
    this.props.onSave?.({
      username: this.state.username,
      role: this.state.role,
    });
  };

  render() {
    const { username, role, isEditing, saveCount } = this.state;

    return (
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4 max-w-sm">
        <header className="flex justify-between items-center pb-2 border-b border-slate-800">
          <h4 className="text-sm font-bold text-white">الملف الشخصي (Class Editor)</h4>
          <span className="text-[10px] text-slate-500 font-mono">حفظ: {saveCount} مرة</span>
        </header>

        {isEditing ? (
          <div className="space-y-3">
            <div>
              <label className="text-xs text-slate-400 block mb-1">الاسم</label>
              <input
                name="username"
                value={username}
                onChange={this.handleInputChange}
                className="w-full px-3 py-1.5 bg-slate-800 border border-slate-700 rounded text-xs text-white"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">الدور</label>
              <input
                name="role"
                value={role}
                onChange={this.handleInputChange}
                className="w-full px-3 py-1.5 bg-slate-800 border border-slate-700 rounded text-xs text-white"
              />
            </div>
            <div className="flex gap-2 justify-end pt-2">
              <button
                onClick={this.toggleEditMode}
                className="px-3 py-1 bg-slate-700 text-xs text-slate-300 rounded"
              >
                إلغاء
              </button>
              <button
                onClick={this.handleSave}
                className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white rounded"
              >
                حفظ
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-sm font-semibold text-white">{username}</p>
            <p className="text-xs text-sky-400">{role}</p>
            <button
              onClick={this.toggleEditMode}
              className="mt-2 w-full py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 rounded border border-slate-700 transition"
            >
              تعديل البيانات
            </button>
          </div>
        )}
      </div>
    );
  }
}`,
      output:
        "مكون فئوي كلاسيكي يعمل بكفاءة تامة، موضحاً استخدام constructor وClass Fields وthis.setState وdefaultProps بالطرق القياسية المتبعة في المشاريع القديمة.",
      commonMistakes: [
        {
          mistake: "نسيان ربط `this.handleClick = this.handleClick.bind(this)` أو عدم استخدام الدوال السهمية في دوال الأحداث.",
          why: "يؤدي ذلك إلى أن تكون قيمة `this` غير معرفة (undefined) عند النقر على الزر مما يسبب خطأ TypeError: Cannot read properties of undefined (reading 'setState').",
          fix: "استخدم دوال الحقول السهمية الحديثة مثل `handleClick = () => { ... }` أو اربط الدالة صراحة داخل دالة البناء constructor.",
        },
      ],
      bestPractices: [
        "لا تستخدم المكونات الفئوية في أي كود جديد؛ استخدم دائماً المكونات الدالية (Functional Components) والخطافات (Hooks).",
        "عند صيانة كود فئوي قديم، لا تخلط بينه وبين الخطافات، إذ لا يمكنك استدعاء أي React Hook (مثل useState) داخل Class Component أبداً.",
      ],
      infographic: {
        title: "تشريح المكون الفئوي (Class Component)",
        caption: "الأركان الأربعة التي يتألف منها المكون الكلاسيكي",
        steps: [
          { number: 1, label: "constructor(props)", desc: "تهيئة كائن this.state الأولي وربط معالجات الأحداث" },
          { number: 2, label: "Methods & Bindings", desc: "دوال تعديل الحالة والعمليات الحسابية المرتبطة بـ this" },
          { number: 3, label: "render()", desc: "الدالة الإلزامية الوحيدة التي ترجع شجرة عناصر JSX" },
        ],
      },
    },

    // 16.4.b
    {
      id: "16.4.b",
      title: "مفهوم Lifecycle Methods (دورة حياة المكون الكلاسيكي)",
      englishTerm: "Lifecycle Methods (لايف سايكل ميثودز) - توابع دورة حياة المكون",
      description:
        "يمر كل مكون في React بدورة حياة بيولوجية تشبه الكائن الحي، تتكون من ثلاث مراحل رئيسية: 1) مرحلة التركيب والولادة (Mounting): عندما يُنشأ المكون ويوضع في شجرة DOM لأول مرة، 2) مرحلة التحديث (Updating): عندما تتغير الـ Props أو الحالة فيعاد تصييره ليعكس البيانات الجديدة، 3) مرحلة التفكيك والإنهاء (Unmounting): عندما يُحذف المكون من شجرة DOM ويختفي عن الشاشة. في المكونات الفئوية القديمة، كانت React توفر دوال مخصصة تُستدعى تلقائياً في لحظات محددة من هذه المراحل (مثل componentDidMount وcomponentDidUpdate وcomponentWillUnmount). فهم هذه المراحل أساسي لفهم كيف وحّد خطاف `useEffect` هذه الدوال المنفصلة في واجهة موحدة واحدة.",
      analogy:
        "مثل مراحل مسرحية على خشبة المسرح: مرحلة فتح الستار وتركيب الديكور ودخول الممثلين (Mounting)، ومرحلة تبديل الملابس وتغيير الإضاءة بحسب مجريات الفصول (Updating)، وأخيراً إسدال الستار وجمع الأدوات وتنظيف المسرح لمغادرة الجمهور (Unmounting).",
      whyItMatters:
        "معرفة دورة الحياة الكلاسيكية يمنحك الرؤية العميقة لفهم كيفية إدارة الموارد: متى تبدأ مؤقتات setInterval، ومتى تلغي الاشتراكات في WebSockets لمنع تسريبات الذاكرة الكارثية.",
      syntax: `// المراحل الثلاث لدورة الحياة:
class LifecycleTracker extends React.Component {
  // 1. التركيب (Mounting)
  componentDidMount() { ... }

  // 2. التحديث (Updating)
  componentDidUpdate(prevProps, prevState) { ... }

  // 3. التفكيك (Unmounting)
  componentWillUnmount() { ... }
}`,
      simpleExample: `// مثال عملي يوضح تتبع مراحل دورة الحياة في الكونسول
import React from 'react';

export class LifecycleLogger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { log: 'تمت التهيئة في constructor' };
  }

  // تُستدعى مرة واحدة فقط فور ظهور المكون في الشاشة
  componentDidMount() {
    console.log('[Mounting]: المكون ظهر الآن على الشاشة بنجاح!');
  }

  // تُستدعى كلما تغيرت props أو state
  componentDidUpdate(prevProps, prevState) {
    console.log('[Updating]: تم تحديث المكون للتو!');
  }

  // تُستدعى قبيل إزالة المكون من DOM مباشرة
  componentWillUnmount() {
    console.log('[Unmounting]: المكون سيغادر الشاشة ويتم حذفه الآن!');
  }

  render() {
    return (
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-center">
        <p className="text-xs text-sky-400 font-mono">افحص الكونسول لمتابعة دورة الحياة</p>
      </div>
    );
  }
}`,
      advancedExample: `// محاكي تفاعلي حي يعرض شريط حالة دورة حياة المكون الكلاسيكي
import React from 'react';

export class LifecycleVisualizer extends React.Component {
  state = {
    stepName: 'Mounting (التركيب)',
    colorClass: 'text-emerald-400',
    cycleCount: 0,
  };

  componentDidMount() {
    // تحديث الحالة عند اكتمال التركيب
    this.setState({
      stepName: 'تم التركيب بنجاح (componentDidMount)',
      colorClass: 'text-emerald-400',
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // التأكد من عدم الدخول في حلقة تكرار لانهائية
    if (prevState.cycleCount !== this.state.cycleCount) {
      console.log('حدث تحديث رقم:', this.state.cycleCount);
    }
  }

  componentWillUnmount() {
    // تنظيف الموارد قبيل الإزالة
    alert('componentWillUnmount: يتم الآن تنظيف موارد المكون قبل مغادرة DOM!');
  }

  triggerUpdate = () => {
    this.setState((prev) => ({
      stepName: 'تم التحديث (componentDidUpdate)',
      colorClass: 'text-sky-400',
      cycleCount: prev.cycleCount + 1,
    }));
  };

  render() {
    return (
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
        <h4 className="text-sm font-bold text-white">محاكي دورة حياة المكون (Lifecycle Simulation)</h4>
        
        <div className="p-3 bg-slate-850 rounded-lg flex justify-between items-center">
          <span className="text-xs text-slate-300">المرحلة الحالية:</span>
          <span className={'text-xs font-bold font-mono ' + this.state.colorClass}>
            {this.state.stepName}
          </span>
        </div>

        <div className="p-3 bg-slate-850 rounded-lg flex justify-between items-center">
          <span className="text-xs text-slate-300">مرات التحديث (Updating):</span>
          <span className="text-xs font-bold font-mono text-amber-400">
            {this.state.cycleCount}
          </span>
        </div>

        <button
          onClick={this.triggerUpdate}
          className="w-full py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg transition"
        >
          تحفيز التحديث (Trigger Update)
        </button>
      </div>
    );
  }
}`,
      output:
        "يوضح للمطور بدقة متى يتم استدعاء كل تابع من توابع دورة الحياة، مع ربطها بتغيرات الواجهة وحماية المطور من استدعاءات setState المتكررة غير المنضبطة.",
      commonMistakes: [
        {
          mistake: "استدعاء `this.setState()` داخل `componentDidUpdate` دون وضع شرط مقارنة مع `prevProps` أو `prevState`.",
          why: "يسبب حلقة تصيير لانهائية (Infinite Loop) تؤدي إلى تجميد المتصفح واستهلاك 100% من المعالج.",
          fix: "ضع دائماً شرط تحقق: `if (prevProps.userId !== this.props.userId) { this.setState(...) }`.",
        },
      ],
      bestPractices: [
        "افهم دائماً المقابل العصري: `useEffect(() => {}, [])` يوازي `componentDidMount`، وتمرير مصفوفة تبعيات يوازي `componentDidUpdate`، وإرجاع دالة تنظيف يوازي `componentWillUnmount`.",
        "تجنب تنفيذ تأثيرات جانبية (Side Effects) ثقيلة داخل دالة render() نفسها؛ مكانها الحصري هو توابع دورة الحياة.",
      ],
      infographic: {
        title: "المراحل الكبرى لدورة حياة المكون في React",
        caption: "رحلة المكون من الظهور الأولي وحتى الإزالة التامة من الشاشة",
        steps: [
          { number: 1, label: "Mounting (التركيب)", desc: "constructor → render → componentDidMount" },
          { number: 2, label: "Updating (التحديث)", desc: "New Props/State → render → componentDidUpdate" },
          { number: 3, label: "Unmounting (التفكيك)", desc: "componentWillUnmount (تنظيف المؤقتات والاشتراكات)" },
        ],
      },
    },

    // 16.4.c
    {
      id: "16.4.c",
      title: "تابع componentDidMount و componentDidUpdate بالتفصيل",
      englishTerm: "componentDidMount & componentDidUpdate (كومبونانت ديد ماونت آند ديد أبدت)",
      description:
        "يعد `componentDidMount` التابع الأكثر شهرة واستخداماً في المكونات الفئوية: يُستدعى مرة واحدة فقط فور إدراج المكون في DOM الحقيقي. هنا يتم وضع استدعاءات الشبكة (API calls)، وتهيئة مكتبات الرسوميات الخارجية (مثل D3 أو Leaflet)، والاشتراك في الأحداث العامة للنافذة. أما `componentDidUpdate(prevProps, prevState, snapshot)` فيُستدعى فور اكتمال إعادة التصيير الناتجة عن تغير الخصائص أو الحالة. يستقبل هذا التابع قيماً سابقة لـ Props وState، مما يتيح لك مقارنة البيانات القديمة بالجديدة لتنفيذ عمليات محددة (مثل إعادة جلب بيانات مستخدم جديد عند تغير معرفه props.id).",
      analogy:
        "مثل استلام شقة جديدة: `componentDidMount` هو يوم استلام المفاتيح؛ تقوم فيه بتوصيل عداد الكهرباء وشبكة الإنترنت لأول مرة. بينما `componentDidUpdate` هو التفتيش الدوري: تقارن فاتورة الشهر الحالي بالشهر السابق لترى هل تغير استهلاك الكهرباء لتقوم بتسديد الفارق!",
      whyItMatters:
        "بدون فهم دقيق لكيفية مقارنة `prevProps` مع `this.props` في `componentDidUpdate`، ستفشل في صيانة الأكواد القديمة وتتسبب في استدعاءات متكررة وفائضة للخوادم.",
      syntax: `class DataFetcher extends React.Component {
  componentDidMount() {
    // استدعاء البيانات لأول مرة
    this.fetchData(this.props.id);
  }

  componentDidUpdate(prevProps) {
    // شرط المقارنة الإلزامي لمنع الحلقات اللانهائية
    if (prevProps.id !== this.props.id) {
      this.fetchData(this.props.id);
    }
  }
}`,
      simpleExample: `// مثال واقعي لجلب بيانات مستخدم باستخدام componentDidMount
import React from 'react';

export class UserProfileFetcherLegacy extends React.Component {
  state = {
    user: null,
    loading: true,
  };

  // جلب البيانات فور تركيب المكون في الشاشة
  componentDidMount() {
    // محاكاة استدعاء شبكة
    setTimeout(() => {
      this.setState({
        user: { name: 'سارة خالد', role: 'مهندسة برمجيات' },
        loading: false,
      });
    }, 1000);
  }

  render() {
    const { user, loading } = this.state;

    if (loading) {
      return <p className="text-xs text-slate-400 p-4 animate-pulse">جارٍ تحميل البيانات (Mounting)...</p>;
    }

    return (
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
        <h4 className="text-sm font-bold text-white">{user.name}</h4>
        <p className="text-xs text-emerald-400 font-medium">{user.role}</p>
      </div>
    );
  }
}`,
      advancedExample: `// مكون فئوي متكامل يوضح التنسيق الدقيق بين componentDidMount وcomponentDidUpdate
import React from 'react';

export class RepositoryDetailsLegacy extends React.Component {
  state = {
    repoData: null,
    loading: false,
    error: null,
  };

  // 1. الجلب الأولي عند فتح الصفحة
  componentDidMount() {
    this.loadRepoDetails(this.props.repoName);
  }

  // 2. الجلب الشرطي عند تغيير المستودع المختار من القائمة
  componentDidUpdate(prevProps) {
    // فحص صارم: هل تغير اسم المستودع في الـ Props؟
    if (prevProps.repoName !== this.props.repoName) {
      this.loadRepoDetails(this.props.repoName);
    }
  }

  loadRepoDetails = (name) => {
    this.setState({ loading: true, error: null });

    // محاكاة استدعاء الخادم
    setTimeout(() => {
      if (name === 'react') {
        this.setState({
          repoData: { stars: 220000, forks: 45000, language: 'JavaScript' },
          loading: false,
        });
      } else if (name === 'vue') {
        this.setState({
          repoData: { stars: 207000, forks: 34000, language: 'TypeScript' },
          loading: false,
        });
      } else {
        this.setState({
          repoData: null,
          loading: false,
          error: 'المستودع غير موجود',
        });
      }
    }, 700);
  };

  render() {
    const { repoName } = this.props;
    const { repoData, loading, error } = this.state;

    return (
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
        <h3 className="text-base font-bold text-white">تفاصيل المستودع: {repoName}</h3>

        {loading && <p className="text-xs text-sky-400 animate-pulse">جارٍ الاستعلام من خادم GitHub...</p>}
        {error && <p className="text-xs text-rose-400 font-semibold">{error}</p>}

        {repoData && !loading && (
          <div className="grid grid-cols-3 gap-2 pt-2 text-center">
            <div className="p-3 bg-slate-800/80 rounded-lg">
              <span className="text-[10px] text-slate-400 block">النجوم</span>
              <span className="text-sm font-bold font-mono text-amber-400">★ {repoData.stars.toLocaleString()}</span>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-lg">
              <span className="text-[10px] text-slate-400 block">التفريعات</span>
              <span className="text-sm font-bold font-mono text-sky-400">⑂ {repoData.forks.toLocaleString()}</span>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-lg">
              <span className="text-[10px] text-slate-400 block">اللغة</span>
              <span className="text-sm font-bold font-mono text-emerald-400">{repoData.language}</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}`,
      output:
        "مكون فئوي نموذجي يستجيب بسلاسة لتغيرات الـ Props الخارجية دون الوقوع في أخطاء الحلقات اللانهائية، موضحاً الفارق الدقيق بين لحظة التركيب الأولي ولحظات التحديث المتعاقبة.",
      commonMistakes: [
        {
          mistake: "إهمال كتابة كود المقارنة في `componentDidUpdate`: نسيان `if (prevProps.id !== this.props.id)`.",
          why: "سيؤدي تحديث الحالة بداخل التابع إلى إطلاق componentDidUpdate مجدداً إلى ما لا نهاية.",
          fix: "قارن دائماً القيم السابقة بالقيم الحالية قبل اتخاذ أي قرار باستدعاء setState أو طلب الشبكة.",
        },
      ],
      bestPractices: [
        "إذا كنت مضطراً لكتابة نفس المنطق في componentDidMount وcomponentDidUpdate، استخرجه إلى دالة مستقلة واستدعها من الاثنين.",
        "تذكر أن المعادل الحديث لكلا التابعين معاً هو ببساطة: `useEffect(() => { load(id); }, [id]);`.",
      ],
      infographic: {
        title: "المقارنة بين componentDidMount و componentDidUpdate",
        caption: "الاستجابة لظهور المكون مقابل الاستجابة لتغير بياناته",
        steps: [
          { number: 1, label: "componentDidMount", desc: "ينفذ مرة واحدة عند الولادة؛ لتهيئة الشبكة والاشتراكات" },
          { number: 2, label: "Props/State Change", desc: "تغير البيانات يؤدي لإعادة استدعاء render() ثم التحديث" },
          { number: 3, label: "componentDidUpdate", desc: "يقارن prevProps بالحالية لتحديث البيانات عند الحاجة فقط" },
        ],
      },
    },

    // 16.4.d
    {
      id: "16.4.d",
      title: "تابع componentWillUnmount وتنظيف الموارد",
      englishTerm: "componentWillUnmount & Resource Cleanup (كومبونانت ويل آنماونت)",
      description:
        "يُستدعى تابع `componentWillUnmount()` مباشرة قبل إزالة المكون الفئوي نهائياً من شجرة الـ DOM وتدميره. وظيفته الحصرية والحرجة هي أداء عمليات التنظيف (Cleanup Operations): إلغاء المؤقتات الزمنية (clearInterval وclearTimeout)، وإلغاء الاشتراكات في قنوات WebSockets وEvent Listeners، وإلغاء طلبات الشبكة المعلقة (AbortController). إذا أهمل المطور تنظيف هذه الموارد في `componentWillUnmount`، فستظل تلك الدوال تعمل في الخلفية وتبحث عن كائن المكون المدمر، مما يؤدي إلى 'تسريب الذاكرة' (Memory Leak) وانهيار أداء التطبيق تدريجياً.",
      analogy:
        "مثل مغادرة غرفة في فندق عند انتهاء إجازتك: قبل تسليم المفتاح والمغادرة، يجب عليك إطفاء المصابيح، وإغلاق صنبور المياه، وإرجاع المكواة إلى مكانها. إذا غادرت وتركت الماء يتدفق، ستغرق الغرفة وتكبد الفندق خسائر جسيمة!",
      whyItMatters:
        "تسريبات الذاكرة الناتجة عن إهمال التنظيف تسبب بطء الهواتف المحمولة وظهور تحذيرات المتصفح الشهيرة: 'Can't perform a React state update on an unmounted component'.",
      syntax: `class TimerWidget extends React.Component {
  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    // التنظيف الإلزامي لمنع تسريب الذاكرة
    clearInterval(this.timerId);
  }
}`,
      simpleExample: `// مثال كلاسيكي لتنظيف مستمع أحداث النافذة (Window Resize Listener)
import React from 'react';

export class WindowResizeTrackerLegacy extends React.Component {
  state = {
    windowWidth: window.innerWidth,
  };

  componentDidMount() {
    // الاستماع لحدث تغيير أبعاد الشاشة
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    // إزالة المستمع فور مغادرة المكون للواجهة
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  render() {
    return (
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-center">
        <span className="text-xs text-slate-400 block mb-1">عرض النافذة الحالي:</span>
        <span className="text-lg font-mono font-bold text-sky-400">{this.state.windowWidth}px</span>
      </div>
    );
  }
}`,
      advancedExample: `// تطبيق ساعة إيقاف فئوية متقدمة مع تنظيف مؤقتات متداخلة واشتراكات شبكية
import React from 'react';

export class LiveStopwatchLegacy extends React.Component {
  state = {
    elapsedSeconds: 0,
    isRunning: false,
  };

  // مرجع لتخزين معرف المؤقت
  timerIntervalId = null;

  componentDidMount() {
    // بدء المؤقت تلقائياً
    this.startTimer();
  }

  componentWillUnmount() {
    // تنظيف الموارد الحرج: إيقاف المؤقت عند إغلاق أو مغادرة الشاشة
    this.stopTimer();
    console.log('[Cleanup]: تم تفكيك المكون LiveStopwatchLegacy وإيقاف المؤقت بنجاح لمنع تسريب الذاكرة.');
  }

  startTimer = () => {
    if (this.timerIntervalId) return;

    this.setState({ isRunning: true });
    this.timerIntervalId = setInterval(() => {
      this.setState((prev) => ({ elapsedSeconds: prev.elapsedSeconds + 1 }));
    }, 1000);
  };

  stopTimer = () => {
    if (this.timerIntervalId) {
      clearInterval(this.timerIntervalId);
      this.timerIntervalId = null;
      this.setState({ isRunning: false });
    }
  };

  resetTimer = () => {
    this.stopTimer();
    this.setState({ elapsedSeconds: 0 });
  };

  render() {
    const { elapsedSeconds, isRunning } = this.state;

    return (
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4 max-w-sm">
        <h4 className="text-sm font-bold text-white text-center">ساعة إيقاف كلاسيكية مع حماية الذاكرة</h4>
        
        <div className="p-4 bg-slate-950 rounded-xl text-center border border-slate-800">
          <span className="text-3xl font-mono font-bold text-emerald-400">
            {new Date(elapsedSeconds * 1000).toISOString().substring(14, 19)}
          </span>
        </div>

        <div className="flex gap-2">
          {isRunning ? (
            <button
              onClick={this.stopTimer}
              className="flex-1 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-lg transition"
            >
              إيقاف مؤقت
            </button>
          ) : (
            <button
              onClick={this.startTimer}
              className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition"
            >
              تشغيل
            </button>
          )}
          <button
            onClick={this.resetTimer}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-lg transition"
          >
            تصفير
          </button>
        </div>
      </div>
    );
  }
}`,
      output:
        "مكون فئوي آمن يضمن عدم بقاء أي مؤقت زمني يعمل في الخلفية بعد اختفاء المكون، مما يمنع الأخطاء الشائعة وتسريبات الذاكرة في المتصفح.",
      commonMistakes: [
        {
          mistake: "استدعاء `this.setState()` داخل `componentWillUnmount()`.",
          why: "المكون في طور التفكيك والزوال ولن يعاد تصييره أبداً، لذلك استدعاء setState هنا بلا معنى وسيتجاهله React تماماً.",
          fix: "استخدم componentWillUnmount لإلغاء المؤقتات والاشتراكات فقط دون أي تعديل على الحالة.",
        },
      ],
      bestPractices: [
        "كلما كتبت كوداً في componentDidMount ينشئ اشتراكاً أو مؤقتاً، اكتب فوراً كود الإلغاء المقابل له داخل componentWillUnmount.",
        "في React الحديث، يقابل هذا إرجاع دالة تنظيف (Cleanup Function) من داخل خطاف `useEffect`.",
      ],
      infographic: {
        title: "أهمية التنظيف في componentWillUnmount",
        caption: "حماية التطبيق من تسريبات الذاكرة وتدهور الأداء",
        steps: [
          { number: 1, label: "المؤقتات الزمنية", desc: "إلغاء clearInterval وclearTimeout" },
          { number: 2, label: "مستمعات الأحداث", desc: "إزالة window.removeEventListener" },
          { number: 3, label: "اتصالات الشبكة", desc: "إغلاق WebSockets وإلغاء طلبات AbortController" },
        ],
      },
    },

    // 16.4.e
    {
      id: "16.4.e",
      title: "الانتقال من Class إلى Functional Components (Migration Strategies)",
      englishTerm: "Migration from Class to Functional Components (مايجريشن فروم كلاس تو فنكشنال)",
      description:
        "يعد ترحيل المكونات الفئوية القديمة إلى مكونات دالية حديثة خطوة استراتيجية في تحديث وتطوير أنظمة React. العملية لا تتم عشوائياً، بل تتبع جدول مطابقة هندسي محكم: 1) تحويل `this.state` إلى خطافات `useState` مستقلة أو `useReducer` للحالات المعقدة، 2) استبدال `componentDidMount` و`componentDidUpdate` و`componentWillUnmount` بخطاف `useEffect` واحد أو أكثر، 3) استبدال `this.props` بمعاملات دالة مفككة (Destructured Props)، 4) استبدال متغيرات الكائن الفئوي `this.variable` بخطاف `useRef`، 5) إزالة كلمات `this` وربط الدوال `bind(this)` بالكامل.",
      analogy:
        "مثل تحويل سيارة كلاسيكية تعمل بمحرك بخاري ضخم إلى سيارة كهربائية ذكية: أنت تحتفظ بنفس الهيكل الخارجي وعجلة القيادة والمقاعد (نفس الـ Props ونفس واجهة الـ UI للمستخدم)، ولكنك تستبدل المحرك البخاري المعقد بمحرك كهربائي فائق الكفاءة والهدوء (Functional Components & Hooks).",
      whyItMatters:
        "المكونات الدالية تقلل حجم الكود بنسبة تصل إلى 40%، وتتيح الاستفادة من ميزات React الحديثة مثل React Compiler وServer Components وتسهل مشاركة المنطق عبر Custom Hooks.",
      syntax: `// جدول مطابقة الترحيل:
// Class Component               ---> Functional Component
// this.state = { count: 0 }     ---> const [count, setCount] = useState(0)
// componentDidMount()           ---> useEffect(() => { ... }, [])
// componentDidUpdate(prev)      ---> useEffect(() => { ... }, [dep])
// componentWillUnmount()        ---> useEffect(() => () => { cleanup() }, [])
// this.myRef = React.createRef()---> const myRef = useRef()`,
      simpleExample: `// مقارنة فورية جنباً إلى جنب: ترحيل بطاقة ترحيب بسيطة
// النسخة القديمة (Class Component):
/*
class WelcomeClass extends React.Component {
  state = { open: false };
  render() {
    return <button onClick={() => this.setState({ open: !this.state.open })}>تبديل</button>;
  }
}
*/

// النسخة الحديثة بعد الترحيل النظيف (Functional Component):
import React, { useState } from 'react';

export function WelcomeFunctional() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg transition"
      >
        {isOpen ? 'إخفاء الرسالة' : 'إظهار الرسالة'}
      </button>
      {isOpen && <p className="text-xs text-emerald-400">أهلاً بك في عالم React الحديث الخالي من الفئات!</p>}
    </div>
  );
}`,
      advancedExample: `// دراسة حالة ترحيل واقعية لمكون مؤقت وجلب بيانات معقد
// 1. الكود الحديث المعاد كتابته بالكامل بعد الترحيل من Class Component قديم
import React, { useState, useEffect, useRef } from 'react';

export function ModernMigratedUserDashboard({ userId }) {
  // ترحيل this.state المتفرقة إلى حالات مستقلة
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [liveSeconds, setLiveSeconds] = useState(0);

  // ترحيل متغير الفئة this.intervalId إلى useRef مستقر
  const timerRef = useRef(null);

  // ترحيل componentDidMount + componentWillUnmount الخاص بالمؤقت الزمني
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setLiveSeconds((prev) => prev + 1);
    }, 1000);

    // دالة التنظيف المقابلة لـ componentWillUnmount
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []); // تشغيل مرة واحدة عند التركيب

  // ترحيل componentDidMount + componentDidUpdate الخاص بجلب البيانات عند تغير userId
  useEffect(() => {
    let isCancelled = false;
    setIsLoading(true);

    // محاكاة استدعاء الخادم
    const timer = setTimeout(() => {
      if (!isCancelled) {
        setUserData({
          id: userId,
          name: 'المستخدم رقم ' + userId,
          status: 'نشط الآن',
        });
        setIsLoading(false);
      }
    }, 600);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [userId]); // إعادة التشغيل فقط عند تغير userId (مقابل prevProps.userId !== this.props.userId)

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4 max-w-sm">
      <header className="flex justify-between items-center border-b border-slate-800 pb-3">
        <h4 className="text-sm font-bold text-white">لوحة التحكم بعد الترحيل الكامل</h4>
        <span className="text-xs font-mono text-amber-400 font-bold">{liveSeconds} ثانية</span>
      </header>

      {isLoading ? (
        <p className="text-xs text-slate-400 animate-pulse">جارٍ مزامنة بيانات الحساب...</p>
      ) : (
        <div className="space-y-1">
          <p className="text-sm font-bold text-white">{userData?.name}</p>
          <p className="text-xs text-emerald-400">{userData?.status}</p>
        </div>
      )}
    </div>
  );
}`,
      output:
        "اختصار أكثر من 50 سطر كود فئوي مليء بـ bind وthis وconstructor إلى 30 سطر دالي نقي فائق الوضوح وأسهل في القراءة والصيانة.",
      commonMistakes: [
        {
          mistake: "محاولة جمع كل حالات الكلاس القديم في `useState({ ...allClassState })` دفعة واحدة.",
          why: "يلغي ميزة التفكيك الدقيق للحالة ويجبرك على دمج الكائنات يدوياً في كل تحديث لأن useState لا تدمج الكائنات تلقائياً مثل this.setState.",
          fix: "فكك الحالات غير المترابطة إلى استدعاءات `useState` منفصلة لكل متغير على حدة.",
        },
      ],
      bestPractices: [
        "رحّل المكونات تدريجياً: ابدأ بالمكونات الورقية الصغيرة (Leaf Components) في شجرة المكونات، ثم تحرك تدريجياً نحو المكونات الحاوية الكبرى.",
        "احرص على كتابة أو مراجعة اختبارات الوحدة (Unit Tests) للمكون قبل البدء في ترحيله لضمان تطابق السلوك بنسبة 100%.",
      ],
      infographic: {
        title: "خارطة طريق ترحيل المكون الفئوي إلى دالي",
        caption: "خمس خطوات هندسية لترحيل آمن وخالٍ من الانتكاسات",
        steps: [
          { number: 1, label: "استبدال الحالة", desc: "تحويل this.state إلى خطافات useState مخصصة" },
          { number: 2, label: "دمج دورة الحياة", desc: "استبدال DidMount وDidUpdate وWillUnmount بـ useEffect" },
          { number: 3, label: "تطهير الكود", desc: "حذف كلمات this وbind وconstructor تماماً من الملف" },
        ],
      },
    },

    // 16.4.f
    {
      id: "16.4.f",
      title: "قراءة وفهم أنماط المشاريع القديمة (Reading Legacy Codebases)",
      englishTerm: "Reading Legacy Codebases (ريدينغ ليغاسي كود بيسز) - قراءة وتحليل الأكواد القديمة",
      description:
        "عند انضمامك إلى شركة تملك نظاماً مبنياً منذ سنوات، ستواجه أنماطاً قديمة ومربكة لم تعد تُدرس في الدورات الحديثة. من أبرز هذه الأنماط: 1) مراجع رد النداء القديمة (Callback Refs): مثل `ref={el => this.myElement = el}` بدلاً من `useRef`، 2) نمط المكونات النقية القديم `React.PureComponent` الذي يقوم بعمل مقارنة سطحية (Shallow Compare) لمنع التصيير الزائد تلقائياً، 3) ربط الدوال اليدوي في الـ constructor، 4) استخدام Mixins (في الأكواد شديدة القدم عبر createReactClass). امتلاك القدرة على قراءة هذه الأنماط وفهم دوافع استخدامها يجعلك مهندساً قادراً على تفكيك الشيفرات المعقدة دون خوف.",
      analogy:
        "مثل عالم الآثار اللغوي الذي يستطيع قراءة النصوص اللاتينية القديمة: الناس اليوم يتحدثون لغات حديثة، ولكن قراءة النصوص القديمة هي السبيل الوحيد لفهم تاريخ القوانين والوثائق التأسيسية للمدينة!",
      whyItMatters:
        "أكثر من 70% من وقت مهندس البرمجيات يُقضى في قراءة وفهم أكواد كتبها آخرون قبل كتابة سطر كود واحد. إتقان قراءة الأنماط القديمة يمنع ارتكاب أخطاء كارثية عند الصيانة.",
      syntax: `// أنماط كلاسيكية ستراها في المشاريع القديمة:
// 1. PureComponent
class FastCard extends React.PureComponent { ... }

// 2. Callback Ref
<div ref={(el) => { this.containerNode = el; }} />

// 3. React.createRef()
this.inputRef = React.createRef();`,
      simpleExample: `// استعراض نمط React.PureComponent القديم
import React from 'react';

// فئة PureComponent تنفذ تلقائياً shouldComponentUpdate بمقارنة سطحية للـ Props
export class LegacyPureBadge extends React.PureComponent {
  render() {
    console.log('[LegacyPureBadge]: تم التصيير');
    return (
      <span className="px-2.5 py-1 bg-slate-800 text-sky-400 border border-slate-700 rounded-full text-xs font-mono">
        {this.props.label}
      </span>
    );
  }
}`,
      advancedExample: `// قراءة وتحليل ملف قديم يجمع بين Callback Refs و PureComponent و Bindings المتعددة
import React from 'react';

export class LegacyRichToolbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };

    // ربط يدوي قديم لمعالجات الأحداث
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.focusInput = this.focusInput.bind(this);
  }

  // تخزين مرجع العنصر القديم بنمط Callback Ref
  textInputRef = null;

  setTextInputRef = (element) => {
    // تعيين العنصر المباشر من DOM
    this.textInputRef = element;
  };

  focusInput() {
    // التركيز اليدوي على حقل الإدخال عبر المرجع القديم
    if (this.textInputRef) {
      this.textInputRef.focus();
    }
  }

  handleFocus() {
    this.setState({ isFocused: true });
  }

  handleBlur() {
    this.setState({ isFocused: false });
  }

  render() {
    return (
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-4 max-w-sm">
        <h4 className="text-sm font-bold text-white">شريط أدوات كلاسيكي (PureComponent + Callback Ref)</h4>
        
        <div className="flex gap-2">
          {/* استخدام نمط Callback Ref القديم */}
          <input
            ref={this.setTextInputRef}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            placeholder="اكتب هنا..."
            className={'flex-1 px-3 py-1.5 bg-slate-800 border rounded-lg text-xs text-white transition ' + (
              this.state.isFocused ? 'border-sky-500' : 'border-slate-700'
            )}
          />
          <button
            onClick={this.focusInput}
            className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg transition"
          >
            تركيز
          </button>
        </div>

        <p className="text-[11px] text-slate-400">
          هذا المكون يرث من PureComponent ويستخدم Callback Refs القديمة لتركيز المؤشر.
        </p>
      </div>
    );
  }
}`,
      output:
        "يوضح للمطور كيفية قراءة وتحليل ملف مكتوب بالكامل بأنماط 2016 القديمة، وكيف تعمل كل قطعة فيه بسلاسة ودون مفاجآت.",
      commonMistakes: [
        {
          mistake: "تعديل كائن معقد في props وتمريره إلى PureComponent وتوقع إعادة التصيير.",
          why: "لأن PureComponent يقوم بمقارنة سطحية (Shallow Comparison: prevProps === nextProps) فإذا تغيرت خاصية داخلية لن يشعر المكون بالتعديل مطلقاً.",
          fix: "استخدم دائماً كائنات ومصفوفات غير قابلة للتعديل المباشر (Immutable Objects) لإنشاء مراجع ذاكرة جديدة.",
        },
      ],
      bestPractices: [
        "المقابل الحديث لـ `React.PureComponent` في المكونات الدالية هو `React.memo(MyComponent)`.",
        "المقابل الحديث لـ `Callback Ref` أو `createRef` هو ببساطة خطاف `useRef()`.",
      ],
      infographic: {
        title: "القاموس القديم والحديث في React",
        caption: "كيف تترجم الأنماط القديمة إلى تقنيات معاصرة",
        steps: [
          { number: 1, label: "PureComponent", desc: "يقابله اليوم: React.memo() للمكونات الدالية" },
          { number: 2, label: "Callback / createRef", desc: "يقابله اليوم: const ref = useRef(null)" },
          { number: 3, label: "bind(this) في constructor", desc: "يقابله اليوم: دوال عادية داخل المكون دون أي this" },
        ],
      },
    },

    // 16.4.g
    {
      id: "16.4.g",
      title: "التعامل مع الأنماط المهجورة (Deprecated Patterns)",
      englishTerm: "Deprecated Patterns (ديبريكيتد باتيرنز) - الأنماط المهجورة والمحظورة",
      description:
        "على مدار إصداراتها من React 16 وصولاً إلى React 19، قامت React بحظر وإلغاء عدة أنماط ودوال قديمة كانت تسبب مشاكل أمان وأداء وتعيق ميزات التصيير المتزامن الحديث (Concurrent Mode). من أخطر هذه الأنماط المهجورة: 1) دوال دورة الحياة غير الآمنة: `UNSAFE_componentWillMount` و`UNSAFE_componentWillReceiveProps` و`UNSAFE_componentWillUpdate`، 2) دالة الوصول المباشر للـ DOM المهجورة `ReactDOM.findDOMNode()` التي تم حذفها نهائياً، 3) نمط السياق القديم (Legacy Context API عبر childContextTypes)، 4) مراجع السلاسل النصية المهجورة (String Refs: `ref='myInput'`). التعرف على هذه الأنماط وتطهيرها أمر إلزامي لترقية المشاريع بنجاح.",
      analogy:
        "مثل لوائح البناء المعمارية الحديثة: في الماضي، كانت بعض المباني تستخدم أنابيب رصاص أو مواد عازلة خطرة. اليوم، تعتبر تلك المواد محظورة رسمياً وممنوعة قانوناً؛ وعند تجديد أي مبنى قديم، يجب إزالة هذه المواد واستبدالها بمواد عصرية آمنة تماماً للمحافظة على سلامة السكان.",
      whyItMatters:
        "المشاريع التي تحتوي على هذه الأنماط المهجورة لا يمكن ترقيتها إلى React 18 أو 19، وتفشل في بيئة StrictMode وتتوقف عن العمل في ميزات SSR والتصيير المتزامن.",
      syntax: `// الأنماط المهجورة وبدائلها الحديثة:
// 1. findDOMNode(this)  ---> استخدم ref عادي
// 2. UNSAFE_componentWillReceiveProps ---> استخدم componentDidUpdate أو الحالة المشتقة
// 3. String refs (ref='box') ---> استخدم React.createRef() أو useRef()
// 4. legacy context (childContextTypes) ---> استخدم React.createContext()`,
      simpleExample: `// مثال يوضح استبدال findDOMNode الخطرة بـ Ref نظيف وآمن
import React, { useRef } from 'react';

// الطريقة الحديثة والآمنة 100%: استخدام useRef مباشرة
export function SafeDomNodeAccess() {
  const boxRef = useRef(null);

  const highlightBox = () => {
    if (boxRef.current) {
      boxRef.current.style.borderColor = '#38bdf8';
    }
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 text-center">
      <div
        ref={boxRef}
        className="p-3 bg-slate-800 border-2 border-slate-700 rounded-lg text-xs text-slate-300 transition-colors"
      >
        مربع يتم التحكم فيه بمرجع مباشر آمن (Modern Ref)
      </div>
      <button
        onClick={highlightBox}
        className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg transition"
      >
        تمييز الإطار
      </button>
    </div>
  );
}`,
      advancedExample: `// دراسة حالة لإصلاح نمط UNSAFE_componentWillReceiveProps واستبداله بالحالة المشتقة أو componentDidUpdate
import React from 'react';

// قبل الإصلاح: كان المكون يستخدم UNSAFE_componentWillReceiveProps لمزامنة قيمة الفلتر
// بعد الإصلاح الحديث: استخدام componentDidUpdate النظيف أو تحويله إلى مكون دالي
export class SafeFilterSynchronizer extends React.Component {
  state = {
    currentFilter: this.props.selectedFilter,
    history: [],
  };

  // البديل الآمن والحديث لـ UNSAFE_componentWillReceiveProps
  componentDidUpdate(prevProps) {
    // التحقق من تغير الخاصية القادمة من الأب بأمان تام
    if (prevProps.selectedFilter !== this.props.selectedFilter) {
      this.setState((prevState) => ({
        currentFilter: this.props.selectedFilter,
        history: [...prevState.history, this.props.selectedFilter],
      }));
    }
  }

  render() {
    const { currentFilter, history } = this.state;

    return (
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm">
        <h4 className="text-sm font-bold text-white">مزامنة آمنة خالية من الدوال المهجورة</h4>
        
        <div className="p-3 bg-slate-850 rounded-lg flex justify-between items-center">
          <span className="text-xs text-slate-400">الفلتر الفعال:</span>
          <span className="text-xs font-bold font-mono text-emerald-400">{currentFilter}</span>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] text-slate-500 block">سجل التغييرات الآمن:</span>
          <div className="flex flex-wrap gap-1">
            {history.map((h, i) => (
              <span key={i} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}`,
      output:
        "كود نظيف تماماً وخالٍ من أي تحذيرات أمان أو تحذيرات React StrictMode، متوافق بنسبة 100% مع أحدث إصدارات React.",
      commonMistakes: [
        {
          mistake: "محاولة استخدام `ReactDOM.findDOMNode(this)` في مشاريع React 18 أو 19 الحديثة.",
          why: "تم إيقاف هذه الدالة نهائياً لأنها تكسر التغليف (Breaks Encapsulation) وتمنع تحسينات الأداء لشجرة المكونات.",
          fix: "مرر مراجع مباشرة باستخدام `useRef()` أو `React.forwardRef()` للمكونات المخصصة.",
        },
      ],
      bestPractices: [
        "فعّل دائماً `<React.StrictMode>` في بيئة التطوير؛ حيث سيقوم تلقائياً بتنبيهك إلى أي نمط مهجور في الكونسول.",
        "استخدم أداة React Codemod الرسمية لأتمتة استبدال الأنماط المهجورة ببدائلها الحديثة عبر آلاف الملفات بضغطة زر.",
      ],
      infographic: {
        title: "جدول التخلص من الأنماط المهجورة",
        caption: "البدائل الحديثة الموصى بها في الإصدارات الأخيرة",
        steps: [
          { number: 1, label: "findDOMNode", desc: "استبدلها بـ Refs مباشرة عبر useRef أو forwardRef" },
          { number: 2, label: "UNSAFE_ Lifecycle", desc: "استبدلها بـ componentDidUpdate أو دمجها في useEffect" },
          { number: 3, label: "String Refs", desc: "استبدلها بـ React.createRef() أو useRef() حصراً" },
        ],
      },
    },
  ],

  // الاختبارات التفاعلية للموضوع
  quizzes: [
    {
      id: "q16.4.1",
      question: "ما هو التابع المقابل لـ componentDidMount في المكونات الدالية الحديثة؟",
      options: [
        "خطاف useLayoutEffect مع مصفوفة تبعيات ممتلئة.",
        "خطاف useEffect مع مصفوفة تبعيات فارغة `[]`.",
        "دالة useState مع دالة تهيئة كائنية.",
        "خطاف useMemo بدون أي معاملات إطلاقاً.",
      ],
      correctAnswer: 1,
      explanation:
        "استدعاء `useEffect(() => { ... }, [])` بمصفوفة تبعيات فارغة يماثل تماماً سلوك `componentDidMount`، حيث يُنفذ مرة واحدة فقط فور تركيب المكون.",
    },
    {
      id: "q16.4.2",
      question: "لماذا يعد تنظيف الموارد في componentWillUnmount (أو دالة تنظيف useEffect) أمراً بالغ الأهمية؟",
      options: [
        "لمنع تسريبات الذاكرة (Memory Leaks) وإلغاء المؤقتات والاشتراكات المعلقة بعد اختفاء المكون.",
        "لتسريع تحميل الخطوط والصور في متصفح المستخدم.",
        "لإعادة تحميل الصفحة تلقائياً عند النقر على الأزرار.",
        "لحفظ بيانات المستخدم في قاعدة بيانات Firebase تلقائياً.",
      ],
      correctAnswer: 0,
      explanation:
        "إهمال تنظيف الموارد يترك مؤقتات مثل setInterval تعمل في الخلفية وتبحث عن مكون تم تدميره، مما يسبب تسريبات الذاكرة واستنزاف المعالج.",
    },
    {
      id: "q16.4.3",
      question: "لماذا تم إلغاء وحظر دالة `ReactDOM.findDOMNode()` في إصدارات React الحديثة؟",
      options: [
        "لأنها تكسر التغليف المعماري وتمنع تحسينات التصيير المتزامن للمتصفح.",
        "لأنها لا تدعم لغة CSS الحديثة.",
        "لأنها تعمل في متصفح جوجل كروم فقط ولا تدعم سفاري.",
        "لأنها تجبر المطور على استخدام مكتبة jQuery.",
      ],
      correctAnswer: 0,
      explanation:
        "findDOMNode تكسر التغليف الداخلي للمكونات وتبحث في الشجرة بطريقة غير متوافقة مع محرك التصيير المتزامن (Concurrent Mode) في React الحديثة.",
    },
  ],

  // التمرين العملي للموضوع
  exercise: {
    id: "ex16.4",
    title: "تمرين تطبيقي: ترحيل مكون فئوي معقد بالكامل إلى دالي",
    description:
      "لديك المكون الفئوي القديم التالي الذي يدير مؤقت فحص للشبكة وتحديثاً عند تغير الخصائص. المطلوب: إعادة كتابته بالكامل كمكون دالي حديث (Functional Component) مع استخدام خطافات useState وuseEffect وuseRef وتنظيف الموارد بدقة.",
    hints: [
      "استبدل this.state بحالات useState مستقلة.",
      "استخدم useEffect واحد لإدارة مؤقت الفحص الدوري مع دالة تنظيف return clearInterval.",
      "استخدم useEffect آخر لإعادة ضبط الحالة عند تغير الخاصية pingUrl.",
    ],
    solution: `// الحل النموذجي لترحيل المكون الفئوي إلى مكون دالي حديث ونظيف
import React, { useState, useEffect, useRef } from 'react';

export function ModernNetworkPinger({ pingUrl = 'https://api.github.com' }) {
  // 1. ترحيل الحالة إلى useState
  const [pingCount, setPingCount] = useState(0);
  const [lastPingTime, setLastPingTime] = useState(null);
  const [isHealthy, setIsHealthy] = useState(true);

  // 2. مرجع مستقر لتخزين المؤقت
  const intervalRef = useRef(null);

  // 3. تأثير إدارة دورة حياة المؤقت وتنظيفه (يوازي Mount + Unmount)
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPingCount((prev) => prev + 1);
      setLastPingTime(new Date().toLocaleTimeString('ar-EG'));
    }, 2000);

    // دالة التنظيف المقابلة لـ componentWillUnmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // 4. تأثير الاستجابة لتغير العنوان (يوازي componentDidUpdate)
  useEffect(() => {
    // تصفير العداد عند تغير رابط الفحص
    setPingCount(0);
    setLastPingTime(null);
  }, [pingUrl]);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm space-y-4">
      <header className="flex justify-between items-center">
        <h4 className="text-sm font-bold text-white">فاحص الشبكة (ترحيل كامل)</h4>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
      </header>

      <div className="space-y-2 text-xs">
        <p className="text-slate-400">الهدف: <span className="text-sky-400 font-mono">{pingUrl}</span></p>
        <p className="text-slate-400">عدد النبضات: <span className="text-amber-400 font-mono font-bold">{pingCount}</span></p>
        <p className="text-slate-400">آخر استجابة: <span className="text-slate-200 font-mono">{lastPingTime || 'في الانتظار...'}</span></p>
      </div>

      <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-center">
        <span className="text-xs text-emerald-300 font-bold">الحالة: الخدمة تعمل بكفاءة عالية</span>
      </div>
    </div>
  );
}`,
  },

  // الإنفوجرافيك التوضيحي للموضوع
  infographic: {
    title: "مقارنة شاملة: المكون الفئوي القديم مقابل المكون الدالي الحديث",
    caption: "التطور الهيكلي في طريقة كتابة وتفكير React عبر السنوات",
    steps: [
      { number: 1, label: "الحالة (State)", desc: "كائن this.state المدمج ← خطافات useState وuseReducer المستقلة" },
      { number: 2, label: "دورة الحياة (Lifecycle)", desc: "توابع منفصلة (Mount, Update, Unmount) ← خطاف useEffect موحد" },
      { number: 3, label: "المراجع والإدارة", desc: "Callback Refs وPureComponent ← useRef وReact.memo" },
    ],
  },
};
