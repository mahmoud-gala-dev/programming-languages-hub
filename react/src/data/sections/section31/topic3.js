// src/data/sections/section31/topic3.js
// القسم 31: مشاريع تطبيقية للمبتدئين
// الموضوع 3: مشروع تطبيق الطقس (Weather Application)

export const topic3 = {
  id: "31.3",
  title: "مشروع تطبيق الطقس (Weather App)",
  description: "دليل شامل وتطبيقي لبناء تطبيق طقس متكامل في React؛ يغطي استدعاء واجهات البرمجة الخارجية (Weather API)، آليات الـ Debounce المتقدمة للبحث، إدارة حالات التحميل والأخطاء، وتصميم بطاقات التوقعات الجوية بتنسيق جذاب وسلس.",
  subtopics: [
    {
      id: "31.3.a",
      title: "فكرة المشروع والمتطلبات (Project Scope & Requirements)",
      englishTerm: {
        term: "Project Scope & Functional Specifications",
        pronunciation: "بروجيكت سكوب آند فانكشنال سبيسيفيكيشنز",
        meaning: "نطاق المشروع والمواصفات الوظيفية للتطبيق"
      },
      description: "تطبيق الطقس (Weather App) هو أحد أهم المشاريع المفصلية للمطور المبتدئ؛ لأنه ينقل المتعلم من مرحلة إدارة الحالة المحلية البسيطة المتزامنة إلى عالم التعامل مع واجهات برمجة التطبيقات الخارجية (REST APIs)، ومعالجة البيانات غير المتزامنة (Asynchronous Data)، وإدارة حالات الشبكة المعقدة (الانتظار، انقطاع الاتصال، والبيانات غير الصالحة). يهدف المشروع إلى تزويد المستخدم بإمكانية البحث عن أي مدينة عالمية، وعرض درجة الحرارة الحالية، وسرعة الرياح، ومستوى الرطوبة، والضغط الجوي، بالإضافة إلى توقعات الطقس لخمسة أيام قادمة، مع حفظ آخر مدينة تم البحث عنها محلياً لتجربة استخدام فورية وسلسة.",
      analogy: "يشبه تطبيق الطقس شاشة العرض الرقمية في محطات الأرصاد الجوية؛ لا تقوم المحطة بتوليد الطقس ذاتياً، بل تستقبل إشارات الرادار والأقمار الاصطناعية (API)، وتفرز البيانات الواردة، وتعرضها للمسافرين بتنسيق بصري واضح يسهل فهمه بلمحة واحدة.",
      whyItMatters: "يعد هذا المشروع الاختبار الحقيقي لقدرة المطور على ربط مكونات React بالعالم الخارجي عبر HTTP Requests، وفهم كيفية منع الطلبات المفرطة (Rate Limiting) عبر تقنيات Debouncing، ومعالجة أخطاء الشبكة بأناقة لمنع انهيار الواجهة.",
      syntax: `// هيكلية الحالة العامة لتطبيق الطقس المتكامل
interface WeatherState {
  currentCity: string;
  weatherData: CurrentWeather | null;
  forecast: ForecastDay[];
  isLoading: boolean;
  error: string | null;
  searchHistory: string[];
}`,
      simpleExample: {
        title: "تعريف مواصفات ونطاق المشروع عبر كائن ضبط إعدادات مركزي",
        code: `// تعريف كائن المتطلبات الأساسية لتطبيق الطقس
const WEATHER_APP_SPECS = {
  // اسم المشروع
  appName: "React Weather Radar",
  // الإصدار
  version: "1.0.0",
  // الميزات الوظيفية الإلزامية للمشروع
  coreFeatures: [
    // البحث بالاسم مع ميزة الـ Debounce
    "Realtime Debounced Search",
    // عرض الطقس اللحظي بالتفصيل
    "Current Weather Conditions",
    // توقعات خمسة أيام قادمة
    "5-Day Forecast Grid",
    // حفظ آخر مدينة تم البحث عنها في LocalStorage
    "Persistent City History"
  ],
  // وحدات القياس المعتمدة
  units: "metric", // درجة مئوية وكم/ساعة
  // الحد الأقصى لمدن السجل المحفوظة
  maxHistoryItems: 5
};

// دالة التحقق من استيفاء المتطلبات الأساسية قبل التشغيل
function validateAppReadiness(specs) {
  // التأكد من توفر الميزات الأساسية الأربعة
  const isComplete = specs.coreFeatures.length >= 4;
  // إرجاع رسالة الجاهزية
  return isComplete ? "المشروع جاهز لبدء التطوير الهندسي" : "المتطلبات غير مكتملة";
}

// استدعاء دالة الفحص
console.log(validateAppReadiness(WEATHER_APP_SPECS));`
      },
      advancedExample: {
        title: "هندسة معمارية المكونات وتخطيط تدفق البيانات لمشروع الطقس",
        code: `// مخطط هيكل المكونات والعلاقات بينها
// WeatherApp (Root Provider)
//  ├── SearchBar (Debounced Input & History Dropdown)
//  ├── StatusBanner (Loading Skeletons & Network Error Alerts)
//  ├── CurrentWeatherCard (City, Temp, Conditions, Metrics)
//  └── ForecastCarousel (5-Day Cards & Temperature Trend)

// تعريف نوع العقد البرمجي لبيانات الطقس المجمعة
class WeatherProjectBlueprint {
  // المشيد لتسجيل المكونات الأساسية
  constructor() {
    // مصفوفة أسماء المكونات المسجلة
    this.components = [];
  }

  // تسجيل مكون جديد مع تحديد مسؤوليته
  registerComponent(name, responsibility) {
    // إضافة المكون إلى القائمة الهيكلية
    this.components.push({
      // اسم المكون
      name,
      // المسؤولية المحددة بدقة
      responsibility,
      // وقت التسجيل
      timestamp: Date.now()
    });
  }

  // توليد تقرير بنية التطبيق
  generateArchitectureReport() {
    // تحويل المصفوفة إلى تقرير مقروء
    return this.components.map(comp => \`[المكون \${comp.name}]: \${comp.responsibility}\`);
  }
}

// إنشاء نسخة من المخطط المعماري
const blueprint = new WeatherProjectBlueprint();
// تسجيل شريط البحث
blueprint.registerComponent("SearchBar", "التقاط مدخلات المستخدم مع كبح الطلبات المتكررة");
// تسجيل بطاقة الطقس اللحظي
blueprint.registerComponent("CurrentWeatherCard", "عرض درجات الحرارة والرياح والرطوبة الحالية");
// تسجيل شريط التوقعات
blueprint.registerComponent("ForecastSection", "عرض توقعات الأيام الخمسة القادمة ببطاقات متجاوبة");

// طباعة التقرير المعماري
console.log(blueprint.generateArchitectureReport().join("\\n"));`
      },
      outputExplanation: "يوضح هذا التأسيس النطاق الهندسي للمشروع؛ حيث يتحدد مسبقاً توزيع المكونات وتدفق البيانات من المكون الأب إلى المكونات الفرعية، وتحديد العقود البرمجية التي تضمن خلو المشروع من التخبط أثناء التنفيذ.",
      commonMistakes: [
        {
          wrong: "// البدء بكتابة كود واجهات برمجة التطبيقات واستدعاء Fetch عشوائياً داخل المكونات دون تخطيط للحالات أو فصل للمسؤوليات",
          correct: "// وضع مخطط متكامل للبيانات (Types/Interfaces)، وتحديد حالات التحميل والأخطاء، وتخطيط المكونات كشجرة واضحة ومستقلة"
        }
      ],
      bestPractices: [
        "تحديد واجهة برمجة التطبيقات (API) ومراجعة هيكل الـ JSON الذي تعيده قبل البدء ببناء واجهة المستخدم",
        "تخطيط حالات الواجهة الأربعة لكل استدعاء شبكي: (Initial, Loading, Success, Error)",
        "اعتماد بنية مجلدات معيارية تفصل بين منطق الجلب (Services/Hooks) وعرض المكونات (UI Components)"
      ],
      infographic: {
        title: "خارطة متطلبات وهندسة تطبيق الطقس",
        nodes: [
          { label: "مدخلات المستخدم (Search)", detail: "بحث فوري مع كبح زمني Debounce" },
          { label: "واجهة الطقس (Weather API)", detail: "OpenWeather / WeatherAPI / Mock REST" },
          { label: "منطق إدارة الحالة (State Hooks)", detail: "بيانات، تحميل، أخطاء، وسجل تاريخي" },
          { label: "المكونات البصرية (UI Cards)", detail: "الطقس اللحظي وشبكة التوقعات الخماسية" }
        ]
      }
    },
    {
      id: "31.3.b",
      title: "التعامل مع واجهة برمجة تطبيقات الطقس (Weather API Integration)",
      englishTerm: {
        term: "Weather API Integration & Service Layer",
        pronunciation: "ويذر إيه بي آي إنتيجريشن آند سيرفيس لاير",
        meaning: "دمج واجهة برمجة تطبيقات الطقس وبناء طبقة الخدمات"
      },
      description: "يتطلب التعامل الاحترافي مع واجهات برمجة تطبيقات الطقس (مثل OpenWeatherMap أو WeatherAPI) عزل منطق استدعاء الشبكة بالكامل داخل طبقة خدمات منفصلة (Service Layer). يمنع هذا التصميم انتشار مفاتيح الواجهات وعناوين الـ URLs المشفرة داخل مكونات React، ويتيح إمكانية توحيد شكل البيانات الواردة (Data Normalization)، والتعامل مع رموز الاستجابة المختلفة (مثل 404 عند عدم العثور على المدينة، أو 401 عند خطأ مفتاح API)، بالإضافة إلى توفير بيئة استجابة تجريبية (Mock API) لتفادي نفاذ حصص الاستدعاء المجانية أثناء التطوير.",
      analogy: "تشبه طبقة الخدمات (Service Layer) المترجم الفوري بين سفارتين؛ يتحدث مع الخادم الخارجي بلغته الخاصة، ثم ينظف الرسالة ويزيل الحشو الزائد، ويسلمها لمكونات React بصيغة واضحة ونظيفة وجاهزة للعرض الفوري.",
      whyItMatters: "يحمي المكونات البصرية من التغيرات المفاجئة في بنية بيانات الخادم (Breaking Changes)؛ فإذا تغير اسم حقل قادم من الـ API، يكفي تعديل دالة التحويل في طبقة الخدمة دون لمس أي سطر كود في مكونات العرض.",
      syntax: `// طبقة خدمة الطقس النموذجية
const fetchWeatherData = async (city, apiKey) => {
  const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${encodeURIComponent(city)}&appid=\${apiKey}&units=metric\`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
  return await response.json();
};`,
      simpleExample: {
        title: "بناء دالة خدمة لجلب بيانات الطقس مع معالجة الأخطاء وتنظيف البيانات",
        code: `// محاكي بيانات الطقس في حال عدم توفر مفتاح خارجي
const MOCK_WEATHER_DATABASE = {
  "cairo": { temp: 28, humidity: 45, windSpeed: 18, condition: "Sunny", city: "Cairo", country: "EG" },
  "riyadh": { temp: 36, humidity: 15, windSpeed: 22, condition: "Clear", city: "Riyadh", country: "SA" },
  "dubai": { temp: 33, humidity: 60, windSpeed: 14, condition: "Partly Cloudy", city: "Dubai", country: "AE" }
};

// دالة خدمة جلب الطقس مع محاكاة التأخير الشبكي
async function getWeatherDataByCity(cityName) {
  // تحويل اسم المدينة إلى أحرف صغيرة لتفادي حساسية الأحرف
  const normalizedCity = cityName.trim().toLowerCase();
  
  // محاكاة تأخير الشبكة بمقدار 500 ميلي ثانية
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // البحث في قاعدة البيانات التجريبية
  const record = MOCK_WEATHER_DATABASE[normalizedCity];
  
  // التحقق من العثور على المدينة
  if (!record) {
    // رمي خطأ في حال عدم وجود المدينة
    throw new Error(\`لم يتم العثور على بيانات الطقس للمدينة: \${cityName}\`);
  }
  
  // إرجاع كائن بيانات منسق وموحد
  return {
    // اسم المدينة الرسمي
    cityName: record.city,
    // رمز الدولة
    countryCode: record.country,
    // درجة الحرارة مقربة
    temperature: Math.round(record.temp),
    // نسبة الرطوبة
    humidityPercentage: record.humidity,
    // سرعة الرياح
    windSpeedKmH: record.windSpeed,
    // الحالة الجوية
    weatherCondition: record.condition
  };
}

// تجربة استدعاء دالة الخدمة بنجاح
getWeatherDataByCity("cairo")
  // طباعة النتيجة عند النجاح
  .then(data => console.log("البيانات المستلمة بنجاح:", data))
  // التقاط الأخطاء إن وجدت
  .catch(err => console.error("فشل الجلب:", err.message));`
      },
      advancedExample: {
        title: "طبقة خدمة احترافية تدعم واجهة حقيقية مع آلية Fallback ذكية وتوحيد البيانات",
        code: `// فئة خدمة الطقس المتقدمة مع دعم التخزين المؤقت ومعالجة الأخطاء
class WeatherApiService {
  // المشيد يستقبل مفتاح الواجهة البرمجية وعنوان الخادم
  constructor(apiKey = "DEMO_KEY", baseUrl = "https://api.openweathermap.org/data/2.5") {
    // تعيين مفتاح الـ API
    this.apiKey = apiKey;
    // تعيين الرابط الأساسي
    this.baseUrl = baseUrl;
    // ذاكرة تخزين مؤقت للطلبات لتوفير الحصص
    this.cache = new Map();
  }

  // دالة موحدة لاستخراج وتوحيد كائن الطقس (Adapter Pattern)
  #normalizeRawWeather(raw) {
    // إرجاع كائن نقي جاهز لاستهلاك مكونات React
    return {
      // معرف المدينة
      id: raw.id || Date.now(),
      // اسم المدينة
      cityName: raw.name,
      // كود الدولة
      country: raw.sys?.country || "N/A",
      // درجة الحرارة المئوية الحالية
      temp: Math.round(raw.main?.temp ?? 25),
      // درجة الحرارة المحسوسة
      feelsLike: Math.round(raw.main?.feels_like ?? 25),
      // النسبة المئوية للرطوبة
      humidity: raw.main?.humidity ?? 50,
      // سرعة الرياح بوحدة كم/ساعة
      windSpeed: Math.round((raw.wind?.speed ?? 3.5) * 3.6),
      // الوصف النصي للحالة الجوية
      conditionText: raw.weather?.[0]?.description || "صافٍ",
      // أيقونة الطقس الرسمية
      iconCode: raw.weather?.[0]?.icon || "01d",
      // توقيت جلب البيانات
      fetchedAt: new Date().toLocaleTimeString("ar-SA")
    };
  }

  // دالة جلب الطقس بالمدينة مع دعم الإلغاء عبر AbortSignal
  async fetchCityWeather(city, signal = null) {
    // تنظيف اسم المدينة
    const query = city.trim();
    // التحقق من وجود نتيجة حديثة في الذاكرة المؤقتة (صالحة لمدة 5 دقائق)
    const cachedEntry = this.cache.get(query.toLowerCase());
    // إذا كانت البيانات مخزنة ولم ينقضِ وقت صلاحيتها (300,000 ميلي ثانية)
    if (cachedEntry && Date.now() - cachedEntry.timestamp < 300000) {
      // إرجاع النتيجة من الذاكرة المؤقتة دون استدعاء الشبكة
      return cachedEntry.data;
    }

    // بناء رابط الاستدعاء بالمعايير المئوية واللغة العربية
    const endpoint = \`\${this.baseUrl}/weather?q=\${encodeURIComponent(query)}&units=metric&lang=ar&appid=\${this.apiKey}\`;

    try {
      // استدعاء واجهة الـ API بواسطة Fetch
      const response = await fetch(endpoint, { signal });
      
      // معالجة استجابة الخادم غير الناجحة
      if (!response.ok) {
        // خطأ 404 يعني المدينة غير موجودة
        if (response.status === 404) {
          // رمي خطأ عدم وجود المدينة
          throw new Error(\`عذراً، لم نتمكن من العثور على المدينة "\${query}". يرجى التحقق من الاسم.\`);
        }
        // خطأ 401 يعني مشكلة في مفتاح الواجهة
        if (response.status === 401) {
          // رمي خطأ تصريح الدخول
          throw new Error("مفتاح واجهة برمجة تطبيقات الطقس غير صالح أو منتهي الصلاحية.");
        }
        // رمي خطأ عام لأي رمز استجابة آخر
        throw new Error(\`حدث خطأ في الاتصال بالخادم (رمز: \${response.status})\`);
      }

      // تحويل الرد إلى JSON
      const rawData = await response.json();
      // تنظيف وهيكلة البيانات الواردة
      const normalizedData = this.#normalizeRawWeather(rawData);
      
      // حفظ النتيجة في الذاكرة المؤقتة
      this.cache.set(query.toLowerCase(), {
        // البيانات المنظفة
        data: normalizedData,
        // الطابع الزمني للحفظ
        timestamp: Date.now()
      });

      // إرجاع النتيجة المنقحة
      return normalizedData;
    } catch (error) {
      // التحقق مما إذا كان الإلغاء مقصوداً عبر AbortController
      if (error.name === "AbortError") {
        // رمي خطأ الإلغاء ليتم تجاهله بلطف
        throw error;
      }
      // إعادة رمي أي خطأ شبكي آخر
      throw error;
    }
  }
}

// تصدير نسخة وحيدة من الخدمة لمشاركتها عبر التطبيق
const weatherService = new WeatherApiService();
export { weatherService, WeatherApiService };`
      },
      outputExplanation: "توضح الخدمة المتقدمة تطبيق نمط المحول (Adapter Pattern) والذاكرة المؤقتة (In-Memory Cache)؛ حيث تعزل تفاصيل الـ API تماماً عن واجهة React، وتمنع تكرار طلب البيانات لنفس المدينة خلال خمس دقائق، مما يحسن الأداء ويوفر استهلاك البيانات.",
      commonMistakes: [
        {
          wrong: "// استخدام fetch مباشرة داخل useEffect بدون دالة مساعدة، واستخدام البيانات الخام القادمة من الـ API مباشرة في JSX",
          correct: "// إنشاء ملف مخصص للخدمات (weatherService.js)، وتوحيد أسماء الحقول قبل تسليمها إلى الحالة (State) الخاصة بـ React"
        }
      ],
      bestPractices: [
        "حفظ مفتاح واجهة الـ API داخل متغيرات البيئة `.env` عبر بادئة `VITE_WEATHER_API_KEY`",
        "تمرير كائن `AbortSignal` دائماً مع كل طلب Fetch لإلغاء الطلبات المعلقة عند إلغاء تركيب المكون",
        "اعتماد ذاكرة تخزين مؤقت بسيطة (Client-side Cache) لتفادي استنزاف معدل الطلبات المسموح به"
      ],
      infographic: {
        title: "طبقة خدمة الطقس ونمط تحويل البيانات",
        nodes: [
          { label: "مكون React", detail: "يطلب: fetchCityWeather('Riyadh')" },
          { label: "الذاكرة المؤقتة (Cache)", detail: "فحص الصلاحية (أقل من 5 دقائق)" },
          { label: "واجهة الشبكة الخارجية", detail: "طلب HTTP آمن مع معالجة الأخطاء" },
          { label: "المحول (Normalizer)", detail: "توحيد بنية البيانات إلى كائن منسق ونظيف" }
        ]
      }
    },
    {
      id: "31.3.c",
      title: "بناء حقل البحث عن المدن والـ Debounce (Debounced Search Field)",
      englishTerm: {
        term: "Debounced Search & Input Handling",
        pronunciation: "دي باونسد سيرتش آند إنبوت هاندلينج",
        meaning: "حقل البحث المقيد زمنياً والتعامل مع المدخلات"
      },
      description: "تقنية الكبح الزمني (Debouncing) هي آلية حيوية في بناء حقول البحث التفاعلية؛ فبدون الـ Debounce، يؤدي كتابة المستخدم لكلمة مكونة من 6 أحرف مثل 'London' إلى إطلاق 6 طلبات HTTP متتالية في أجزاء من الثانية، مما يؤدي إلى استنزاف حصة الـ API وبطء استجابة المتصفح، واحتمال حدوث ظاهرة تعارض الاستجابات (Race Conditions). من خلال بناء Custom Hook مخصص للـ Debounce (مثل `useDebounce`)، نضمن تأجيل إطلاق طلب البحث حتى يتوقف المستخدم تماماً عن الكتابة لمهلة محددة (عادة بين 300 إلى 500 ميلي ثانية).",
      analogy: "يشبه الـ Debounce زر إغلاق مصعد الفندق؛ إذا دخل شخص وضغط الزر، ينتظر المصعد 3 ثوانٍ قبل التحرك، وإذا دخل شخص آخر خلال هذه المهلة، يُعاد ضبط المؤقت للبدء من جديد حتى يكتمل دخول الركاب دون إغلاق الباب وفتحه عدة مرات متتالية.",
      whyItMatters: "يحمي خادم التطبيق ومفتاح الواجهة البرمجية من الحظر نتيجة الاستدعاءات المفرطة (Rate Limiting)، ويوفر تجربة كتابة سلسة دون تقطيع أو وميض متكرر لحالات التحميل في الشاشة.",
      syntax: `// استخدام هوك useDebounce المخصص
const debouncedSearchTerm = useDebounce(searchTerm, 500);

useEffect(() => {
  if (debouncedSearchTerm) {
    executeSearch(debouncedSearchTerm);
  }
}, [debouncedSearchTerm]);`,
      simpleExample: {
        title: "إنشاء هوك useDebounce واستخدامه لمراقبة مدخلات البحث",
        code: `import React, { useState, useEffect } from "react";

// هوك مخصص لكبح تحديث القيمة لمهلة زمنية محددة
function useDebounce(value, delay = 500) {
  // حالة حفظ القيمة المكبحة
  const [debouncedValue, setDebouncedValue] = useState(value);

  // مراقبة تغير القيمة المدخلة أو المهلة
  useEffect(() => {
    // إنشاء مؤقت زمني لتحديث القيمة بعد انتهاء المهلة
    const timerId = setTimeout(() => {
      // تحديث الحالة بالقيمة الأخيرة
      setDebouncedValue(value);
    }, delay);

    // دالة التنظيف لإلغاء المؤقت عند كتابة حرف جديد قبل انتهاء المهلة
    return () => {
      // إلغاء المؤقت السابق
      clearTimeout(timerId);
    };
  }, [value, delay]);

  // إرجاع القيمة المكبحة
  return debouncedValue;
}

// مكون حقل البحث التوضيحي
function CitySearchDemo() {
  // حالة النص المكتوب في الحقل
  const [query, setQuery] = useState("");
  // استخدام الهوك لتأخير تنفيذ البحث بمهلة 400 ميلي ثانية
  const debouncedQuery = useDebounce(query, 400);

  // مراقبة القيمة المكبحة لتنفيذ البحث الفعلي
  useEffect(() => {
    // التحقق من وجود نص للبحث
    if (debouncedQuery.trim()) {
      // طباعة الاستدعاء الفعلي في وحدة التحكم
      console.log(\`جاري إرسال طلب البحث للشبكة عن: "\${debouncedQuery}"\`);
    }
  }, [debouncedQuery]);

  // واجهة العرض
  return (
    <div style={{ padding: "16px", fontFamily: "sans-serif" }}>
      {/* حقل إدخال النص */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="اكتب اسم المدينة (مثل: Alexandria)..."
        style={{ padding: "8px 12px", width: "100%", borderRadius: "6px", border: "1px solid #ccc" }}
      />
      {/* مؤشر القيمة الحالية والمكبحة */}
      <p style={{ marginTop: "8px", fontSize: "14px", color: "#666" }}>
        النص اللحظي: <strong>{query || "(فارغ)"}</strong> | القيمة المعتمدة للبحث: <strong>{debouncedQuery || "(في الانتظار)"}</strong>
      </p>
    </div>
  );
}

export default CitySearchDemo;`
      },
      advancedExample: {
        title: "مكون بحث متكامل بالـ Debounce مع سجل البحث التاريخي وتجاوز الإدخال السريع",
        code: `import React, { useState, useEffect, useRef } from "react";

// هوك useDebounce الاحترافي
function useDebounceValue(val, delayMs = 450) {
  // حالة القيمة المتأخرة
  const [debounced, setDebounced] = useState(val);
  // تأثير ضبط المؤقت
  useEffect(() => {
    // تعيين المؤقت
    const handler = setTimeout(() => setDebounced(val), delayMs);
    // إلغاء المؤقت فورياً عند حدوث إدخال جديد
    return () => clearTimeout(handler);
  }, [val, delayMs]);
  // إرجاع القيمة المستقرة
  return debounced;
}

// مكون شريط البحث المتطور مع سجل المدن السابقة
export function AdvancedCitySearchBar({ onSelectCity, recentCities = [] }) {
  // حالة نص البحث
  const [searchTerm, setSearchTerm] = useState("");
  // حالة فتح قائمة الاقتراحات السابقة
  const [isOpen, setIsOpen] = useState(false);
  // القيمة المكبحة
  const debouncedTerm = useDebounceValue(searchTerm, 400);
  // مرجع لحاوية البحث لاكتشاف النقر الخارجي
  const containerRef = useRef(null);

  // إطلاق حدث البحث عند استقرار القيمة المكبحة وتجاوز الحد الأدنى للأحرف
  useEffect(() => {
    // التحقق من تجاوز طول الكلمة حرفين
    if (debouncedTerm.trim().length >= 3) {
      // إرسال المدينة إلى المكون الأب
      onSelectCity(debouncedTerm.trim());
      // إغلاق القائمة المنسدلة
      setIsOpen(false);
    }
  }, [debouncedTerm, onSelectCity]);

  // إغلاق القائمة المنسدلة عند النقر خارج المكون
  useEffect(() => {
    // معالج النقر الخارجي
    const handleOutsideClick = (e) => {
      // التحقق من وجود النقر خارج الحاوية
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        // إغلاق القائمة
        setIsOpen(false);
      }
    };
    // إضافة مستمع الأحداث
    document.addEventListener("mousedown", handleOutsideClick);
    // التنظيف عند إلغاء التركيب
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // معالجة اختيار مدينة من السجل التاريخي
  const handlePickHistory = (city) => {
    // تحديث نص الحقل
    setSearchTerm(city);
    // إرسال الاختيار فورياً دون انتظار الـ Debounce
    onSelectCity(city);
    // إغلاق القائمة
    setIsOpen(false);
  };

  // تقديم النموذج فورياً عند الضغط على Enter
  const handleSubmit = (e) => {
    // منع السلوك الافتراضي لإعادة تحميل الصفحة
    e.preventDefault();
    // التحقق من وجود نص صالح
    if (searchTerm.trim().length >= 2) {
      // إطلاق البحث فوراً
      onSelectCity(searchTerm.trim());
      // إغلاق القائمة
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-lg mx-auto">
      {/* نموذج البحث */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        {/* حاوية الحقل مع أيقونة البحث */}
        <div className="relative flex-1">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsOpen(true)}
            placeholder="ابحث عن مدينة (مثلاً: دبي، القاهرة، الرياض)..."
            className="w-full pl-4 pr-10 py-3 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          {/* زر مسح الحقل في حال وجود نص */}
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs px-1"
            >
              ✕
            </button>
          )}
        </div>
        {/* زر الإرسال المباشر */}
        <button
          type="submit"
          className="px-5 py-3 text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow transition"
        >
          بحث
        </button>
      </form>

      {/* قائمة السجل التاريخي المنبثقة */}
      {isOpen && recentCities.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-2 z-20">
          <div className="text-xs font-semibold text-slate-400 px-3 py-1">
            عمليات البحث الأخيرة:
          </div>
          {/* تكرار المدن المحفوظة */}
          {recentCities.map((city, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handlePickHistory(city)}
              className="w-full text-right px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg flex items-center justify-between"
            >
              <span>{city}</span>
              <span className="text-xs text-slate-400">↺ اختيار</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}`
      },
      outputExplanation: "يوفر هذا المكون حلاً مزدوجاً: يتيح البحث التلقائي السلس عند التوقف عن الكتابة عبر useDebounce، ويتيح للمستخدم الضغط الفوري على Enter أو النقر على اقتراح من السجل لتجاوز فترة الانتظار.",
      commonMistakes: [
        {
          wrong: "// وضع دالة setTimeout داخل معالج onChange مباشرة دون دالة إلغاء clearTimeout، مما يتسبب في إطلاق كل المؤقتات بالتتابع",
          correct: "// استخدام دالة تنظيف (Cleanup Function) داخل useEffect لإلغاء المؤقت السابق بمجرد حدوث أي ضغطة مفتاح جديدة"
        }
      ],
      bestPractices: [
        "اختيار مهلة زمنية متوازنة بين 350 و500 ميلي ثانية (أقل من ذلك يضغط الشبكة، وأكثر من ذلك يشعر المستخدم بالبطء)",
        "اشتراط حد أدنى لعدد الحروف (مثل 3 أحرف) قبل إرسال طلب البحث لمنع إرسال طلبات مبهمة بحرف واحد",
        "توفير زر مسح سريع لحقل البحث لإعادة ضبط الواجهة بنقرة واحدة"
      ],
      infographic: {
        title: "آلية عمل الكبح الزمني (Debounce Mechanism)",
        nodes: [
          { label: "كتابة الحرف الأول 'C'", detail: "بدء مؤقت 400ms" },
          { label: "كتابة الحرف الثاني 'a'", detail: "إلغاء المؤقت الأول وبدء مؤقت جديد" },
          { label: "كتابة بقية الكلمة 'Cairo'", detail: "إلغاء المؤقتات السابقة وتعيين مؤقت أخير" },
          { label: "توقف المستخدم (400ms)", detail: "إطلاق طلب الشبكة الفعلي مرة واحدة فقط" }
        ]
      }
    },
    {
      id: "31.3.d",
      title: "عرض بيانات الطقس الحالية والحرارة والرطوبة (Current Weather Display)",
      englishTerm: {
        term: "Current Weather Presentation & Metrics",
        pronunciation: "كارنت ويذر بريزنتيشن آند ميتريكس",
        meaning: "عرض حالة الطقس الحالية والمقاييس البيئية"
      },
      description: "تمثل بطاقة الطقس الحالية (Current Weather Card) العنصر البصري المحوري في التطبيق. تتطلب هذه البطاقة تنظيماً محكماً للمعلومات البصرية وفق تسلسل هرمي واضح (Visual Hierarchy): إبراز درجة الحرارة الحالية بخط عريض وواضح، وعرض أيقونة تعبيرية توضح حالة السماء (مشمس، غائم، ممطر)، وإبراز المؤشرات البيئية المصاحبة في شبكة إحصائية متناسقة تشمل: درجة الحرارة المحسوسة (Feels Like)، نسبة الرطوبة، سرعة واتجاه الرياح، ومستوى الضغط الجوي، مع مراعاة التجاوب التام مع مختلف أحجام الشاشات.",
      analogy: "تشبه لوحة عدادات السيارة الرقمية المتطورة؛ تعرض السرعة بوضوح فائق في المنتصف، وتحيط بها المؤشرات الحيوية كحرارة المحرك ومستوى الوقود في وحدات قياس جانبية سهلة الملاحظة.",
      whyItMatters: "العرض البصري الجذاب للمعلومات المعقدة هو ما يصنع الفارق بين تطبيق يبدو كواجهة بدائية وتطبيق احترافي عالي الجودة؛ حيث يتيح للمستخدم فهم الوضع الجوي الشامل في أقل من ثانيتين.",
      syntax: `// هيكل بطاقة الطقس الحالية
<div className="weather-card">
  <Header city={data.cityName} country={data.country} />
  <MainTemp temp={data.temp} condition={data.conditionText} icon={data.icon} />
  <MetricsGrid humidity={data.humidity} wind={data.windSpeed} feelsLike={data.feelsLike} />
</div>`,
      simpleExample: {
        title: "مكون بطاقة طقس بسيطة تعرض درجة الحرارة والمؤشرات الأساسية",
        code: `import React from "react";

// مكون عرض بطاقة الطقس البسيطة
function SimpleWeatherCard({ weather }) {
  // التحقق من وجود بيانات
  if (!weather) return null;

  return (
    <div style={{
      maxWidth: "350px",
      margin: "20px auto",
      padding: "24px",
      borderRadius: "16px",
      background: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
      color: "#ffffff",
      boxShadow: "0 10px 25px -5px rgba(2, 132, 199, 0.4)",
      textAlign: "center",
      fontFamily: "system-ui, sans-serif"
    }}>
      {/* اسم المدينة والبلد */}
      <h2 style={{ margin: "0", fontSize: "24px" }}>
        {weather.cityName}، <span style={{ opacity: 0.8 }}>{weather.country}</span>
      </h2>
      
      {/* وصف الحالة الجوية */}
      <p style={{ margin: "4px 0 16px", fontSize: "14px", textTransform: "capitalize" }}>
        {weather.conditionText}
      </p>

      {/* درجة الحرارة الكبيرة */}
      <div style={{ fontSize: "56px", fontWeight: "bold", margin: "10px 0" }}>
        {weather.temp}°
      </div>

      {/* شريط الإحصائيات السفلية */}
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px",
        paddingTop: "16px",
        borderTop: "1px solid rgba(255, 255, 255, 0.2)"
      }}>
        {/* عنصر الرطوبة */}
        <div>
          <div style={{ fontSize: "12px", opacity: 0.8 }}>الرطوبة</div>
          <div style={{ fontSize: "16px", fontWeight: "bold" }}>{weather.humidity}%</div>
        </div>
        {/* عنصر الرياح */}
        <div>
          <div style={{ fontSize: "12px", opacity: 0.8 }}>الرياح</div>
          <div style={{ fontSize: "16px", fontWeight: "bold" }}>{weather.windSpeed} كم/س</div>
        </div>
        {/* درجة الحرارة المحسوسة */}
        <div>
          <div style={{ fontSize: "12px", opacity: 0.8 }}>المحسوسة</div>
          <div style={{ fontSize: "16px", fontWeight: "bold" }}>{weather.feelsLike}°</div>
        </div>
      </div>
    </div>
  );
}

export default SimpleWeatherCard;`
      },
      advancedExample: {
        title: "مكون بطاقة طقس احترافية مع خلفيات ديناميكية وتأثيرات زجاجية وشبكة مقاييس تفاعلية",
        code: `import React from "react";

// خريطة أيقونات الطقس وخلفيات التدرج بحسب الحالة الجوية
const WEATHER_THEMES = {
  clear: {
    bgGradient: "from-amber-400 via-orange-500 to-sky-600",
    badgeColor: "bg-amber-100 text-amber-800",
    iconSymbol: "☀️",
    mood: "أجواء صافية ومشمسة"
  },
  clouds: {
    bgGradient: "from-slate-500 via-sky-600 to-indigo-800",
    badgeColor: "bg-slate-100 text-slate-800",
    iconSymbol: "☁️",
    mood: "سحب متفرقة وأجواء غائمة"
  },
  rain: {
    bgGradient: "from-blue-600 via-indigo-700 to-slate-900",
    badgeColor: "bg-blue-100 text-blue-800",
    iconSymbol: "🌧️",
    mood: "هطول أمطار رعدية"
  },
  snow: {
    bgGradient: "from-cyan-400 via-blue-500 to-slate-700",
    badgeColor: "bg-cyan-100 text-cyan-800",
    iconSymbol: "❄️",
    mood: "ثلوج وأجواء قارسة البرودة"
  }
};

// مكون عنصر القياس الفردي داخل الشبكة
const MetricTile = ({ label, value, unit, icon, subtext }) => (
  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex flex-col justify-between transition hover:bg-white/15">
    {/* رأس الخلية مع الأيقونة */}
    <div className="flex items-center justify-between text-white/80 text-xs">
      <span>{label}</span>
      <span className="text-base">{icon}</span>
    </div>
    {/* القيمة الرئيسية والوحدة */}
    <div className="my-2">
      <span className="text-2xl font-black text-white">{value}</span>
      {unit && <span className="text-xs text-white/80 mr-1">{unit}</span>}
    </div>
    {/* نص توضيحي إضافي */}
    {subtext && <div className="text-[11px] text-white/60">{subtext}</div>}
  </div>
);

// المكون الرئيسي لبطاقة الطقس المتطورة
export function DetailedWeatherHero({ weatherData }) {
  // التحقق من اكتمال البيانات
  if (!weatherData) return null;

  // تحديد الطابع اللوني بحسب الحالة (افتراضياً سحب إذا لم يتطابق)
  const themeKey = (weatherData.conditionText || "").toLowerCase().includes("rain")
    ? "rain"
    : (weatherData.conditionText || "").toLowerCase().includes("sun") || weatherData.temp > 30
    ? "clear"
    : "clouds";

  // استخراج تفاصيل الطابع اللوني
  const activeTheme = WEATHER_THEMES[themeKey] || WEATHER_THEMES.clouds;

  return (
    <div className={\`w-full max-w-2xl mx-auto rounded-3xl bg-gradient-to-br \${activeTheme.bgGradient} p-6 sm:p-8 text-white shadow-2xl transition-all duration-500\`}>
      {/* القسم العلوي: المدينة والوقت والوسام */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {weatherData.cityName}
            </h1>
            <span className="text-sm font-semibold bg-white/20 px-2 py-0.5 rounded-md">
              {weatherData.country}
            </span>
          </div>
          <p className="text-xs text-white/70 mt-1">
            آخر تحديث: {weatherData.fetchedAt || "الآن"}
          </p>
        </div>

        {/* وسام الحالة */}
        <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium">
          <span>{activeTheme.iconSymbol}</span>
          <span>{weatherData.conditionText}</span>
        </div>
      </div>

      {/* القسم الأوسط: درجة الحرارة الرئيسية */}
      <div className="my-8 flex items-baseline justify-center sm:justify-start gap-4">
        <span className="text-7xl sm:text-8xl font-black tracking-tighter drop-shadow-md">
          {weatherData.temp}°
        </span>
        <div className="text-sm text-white/80">
          <p className="font-semibold">{activeTheme.mood}</p>
          <p className="text-xs text-white/60">درجة الحرارة المحسوسة {weatherData.feelsLike}°</p>
        </div>
      </div>

      {/* القسم السفلي: شبكة المقاييس البيئية المتكاملة */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6">
        {/* مقياس الرطوبة */}
        <MetricTile
          label="الرطوبة الجوية"
          value={weatherData.humidity}
          unit="%"
          icon="💧"
          subtext={weatherData.humidity > 70 ? "رطوبة مرتفعة" : "مستوى مريح"}
        />
        {/* مقياس سرعة الرياح */}
        <MetricTile
          label="سرعة الرياح"
          value={weatherData.windSpeed}
          unit="كم/س"
          icon="💨"
          subtext="اتجاه شمالي غربي"
        />
        {/* مقياس درجة الحرارة المحسوسة */}
        <MetricTile
          label="الحرارة المحسوسة"
          value={weatherData.feelsLike}
          unit="°م"
          icon="🌡️"
          subtext="تأثير الرياح والرطوبة"
        />
        {/* مقياس نقاء الجو */}
        <MetricTile
          label="الرؤية الأفقية"
          value="10"
          unit="كم"
          icon="👁️"
          subtext="رؤية ممتازة"
        />
      </div>
    </div>
  );
}`
      },
      outputExplanation: "يعتمد هذا المكون على تأثيرات الزجاج (Glassmorphism) وشبكة مقاييس رباعية، مع تحديد التدرج اللوني بصورة ديناميكية تتناغم مع حالة الطقس الفعلية (مشمس، ممطر، أو غائم)، مما يعزز انغماس المستخدم.",
      commonMistakes: [
        {
          wrong: "// استخدام كتل صلبة ذات ألوان ثابتة ومتباينة بشدة تجعل قراءة الأرقام مرهقة للمستخدم في ظروف الإضاءة المختلفة",
          correct: "// استخدام تقنيات التباين العالي مع طبقات الشفافية والخلفيات المتدرجة المتوافقة مع وضع الشاشة والظرف الجوي"
        }
      ],
      bestPractices: [
        "عرض وحدات القياس (كم/س، %، °) دائماً بجانب الأرقام منعاً لأي لبس لدى المستخدم",
        "توفير خيار تحويل سريع بين الدرجة المئوية (Celsius) والفهرنهايت (Fahrenheit)",
        "استخدام أرقام مقربة (Math.round) لدرجات الحرارة لتفادي الأرقام العشرية الطويلة غير المريحة بصرياً"
      ],
      infographic: {
        title: "التسلسل البصري لبطاقة الطقس الحالية",
        nodes: [
          { label: "الرأس (Header)", detail: "اسم المدينة، كود الدولة، ووقت التحديث" },
          { label: "البؤرة الرئيسية (Hero)", detail: "الحرارة الكبرى (7xl Font) والأيقونة المعبرة" },
          { label: "المؤشرات الفرعية (Grid)", detail: "الرطوبة، سرعة الرياح، والحرارة المحسوسة" },
          { label: "الخلفية المتكيفة (Dynamic)", detail: "تدرج لوني يتغير تلقائياً حسب الحالة الجوية" }
        ]
      }
    },
    {
      id: "31.3.e",
      title: "عرض التوقعات للأيام القادمة (5-Day Forecast Grid)",
      englishTerm: {
        term: "Multi-Day Forecast Grid & Projections",
        pronunciation: "مالتي داي فوركاست جريد آند بروجيكشنز",
        meaning: "شبكة توقعات الطقس لعدة أيام والتنبؤات المستقبلية"
      },
      description: "تمثل توقعات الأيام الخمسة القادمة (5-Day Forecast) الميزة الأكثر طلباً من قبل مستخدمي تطبيقات الطقس. يعيد خادم الطقس الخارجي عادة قائمة ممتدة من القراءات (مثلاً قراءة كل 3 ساعات لمدة 5 أيام بمجموع 40 سجلاً). يتطلب التعامل مع هذا التدفق من البيانات إجراء معالجة مسبقة (Data Aggregation) لتصفية السجلات واستخراج قراءة واحدة ممثلة لكل يوم (عادة في منتصف النهار الساعة 12:00 ظهراً)، ثم حساب درجات الحرارة العظمى والصغرى (Max/Min Temps)، وعرضها في بطاقات مصفوفة أفقياً أو عمودياً بطريقة سهلة المقارنة.",
      analogy: "تشبه شبكة التوقعات جدول مواعيد القطارات الأسبوعي؛ بدلاً من إغراق المسافر بجميع حركات القطار اللحظية في كل محطة فرعية، يركز الجدول على الرحلة الرئيسية اليومية لتسهيل التخطيط للأسبوع بأكمله.",
      whyItMatters: "يعلم المطور كيفية فلترة وتجميع مصفوفات البيانات الكبيرة (Data Aggregation) في JavaScript باستخدام دوال مثل `reduce` و `filter` قبل تمريرها لمكونات العرض في React.",
      syntax: `// تجميع بيانات 40 قراءة إلى 5 أيام محددة
const dailyForecast = forecastList.filter(item => item.dt_txt.includes("12:00:00"));`,
      simpleExample: {
        title: "تصفية مصفوفة توقعات الطقس وعرضها كقائمة للأيام الخمسة",
        code: `import React from "react";

// بيانات تجريبية لتوقعات 5 أيام
const SAMPLE_FORECAST = [
  { day: "الأحد", tempMax: 29, tempMin: 18, condition: "مشمس", icon: "☀️" },
  { day: "الإثنين", tempMax: 27, tempMin: 17, condition: "غائم جزئياً", icon: "⛅" },
  { day: "الثلاثاء", tempMax: 24, tempMin: 15, condition: "أمطار خفيفة", icon: "🌦️" },
  { day: "الأربعاء", tempMax: 26, tempMin: 16, condition: "صافٍ", icon: "☀️" },
  { day: "الخميس", tempMax: 30, tempMin: 19, condition: "رياح حارة", icon: "🌤️" }
];

// مكون عرض التوقعات الأسبوعية المبسط
function SimpleForecastList({ forecast = SAMPLE_FORECAST }) {
  return (
    <div style={{ maxWidth: "450px", margin: "20px auto", fontFamily: "sans-serif" }}>
      {/* عنوان القسم */}
      <h3 style={{ fontSize: "18px", color: "#334155", marginBottom: "12px" }}>
        توقعات الأيام القادمة:
      </h3>
      {/* قائمة الأيام */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {forecast.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 16px",
              backgroundColor: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "10px"
            }}
          >
            {/* اليوم والأيقونة */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "120px" }}>
              <span style={{ fontSize: "20px" }}>{item.icon}</span>
              <span style={{ fontWeight: "600", fontSize: "14px" }}>{item.day}</span>
            </div>

            {/* حالة الطقس */}
            <span style={{ fontSize: "13px", color: "#64748b" }}>{item.condition}</span>

            {/* درجات الحرارة العظمى والصغرى */}
            <div style={{ fontSize: "14px" }}>
              <span style={{ fontWeight: "bold", color: "#0f172a" }}>{item.tempMax}°</span>
              <span style={{ color: "#94a3b8", marginRight: "6px" }}>/ {item.tempMin}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimpleForecastList;`
      },
      advancedExample: {
        title: "معالجة متقدمة لبيانات 40 قراءة خام وحساب العظمى والصغرى وعرض شريط بياني متجاوب",
        code: `import React, { useMemo } from "react";

// دالة نقية لتجميع قراءات التوقعات الخام وحساب العظمى والصغرى لكل يوم
export function processRawForecastData(rawList = []) {
  // تجميع القراءات في قاموس مفاتيحه هي تاريخ اليوم (YYYY-MM-DD)
  const groupedByDate = rawList.reduce((acc, entry) => {
    // استخراج التاريخ فقط من النص "2026-10-30 15:00:00"
    const dateKey = entry.dt_txt ? entry.dt_txt.split(" ")[0] : new Date(entry.dt * 1000).toISOString().split("T")[0];
    
    // إنشاء مصفوفة لليوم إذا لم تكن موجودة
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    // إضافة القراءة
    acc[dateKey].push(entry);
    return acc;
  }, {});

  // تحويل القاموس إلى مصفوفة أيام معالجة ومحددة بخمسة أيام فقط
  const processedDays = Object.keys(groupedByDate).slice(0, 5).map(dateKey => {
    // قراءات هذا اليوم
    const dayReadings = groupedByDate[dateKey];
    // حساب أعلى درجة حرارة في اليوم
    const maxTemp = Math.round(Math.max(...dayReadings.map(r => r.main?.temp_max ?? r.main?.temp ?? 20)));
    // حساب أدنى درجة حرارة في اليوم
    const minTemp = Math.round(Math.min(...dayReadings.map(r => r.main?.temp_min ?? r.main?.temp ?? 15)));
    // اختيار القراءة الأقرب لمنتصف النهار (12:00 ظهراً) لتمثيل أيقونة اليوم
    const midDayItem = dayReadings.find(r => r.dt_txt?.includes("12:00:00")) || dayReadings[0];
    
    // استخراج اسم اليوم باللغة العربية
    const dayName = new Intl.DateTimeFormat("ar-EG", { weekday: "long" }).format(new Date(dateKey));

    return {
      date: dateKey,
      dayName,
      maxTemp,
      minTemp,
      condition: midDayItem?.weather?.[0]?.description || "معتدل",
      iconCode: midDayItem?.weather?.[0]?.icon || "02d",
      rainProbability: Math.round((midDayItem?.pop ?? 0) * 100)
    };
  });

  return processedDays;
}

// مكون شبكة التوقعات الاحترافية
export function FiveDayForecastGrid({ rawForecastList = [] }) {
  // معالجة البيانات الخام مع حفظ النتيجة التذكيرية عبر useMemo
  const forecastDays = useMemo(() => {
    // التحقق من وجود بيانات
    if (!rawForecastList || rawForecastList.length === 0) return [];
    // معالجة وتلخيص الأيام الخمسة
    return processRawForecastData(rawForecastList);
  }, [rawForecastList]);

  // إخفاء المكون في حال عدم توفر توقعات
  if (forecastDays.length === 0) return null;

  return (
    <div className="w-full max-w-2xl mx-auto mt-6 bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
      {/* عنوان القسم ومؤشر الأيام الخمسة */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span>📅</span> توقعات الـ 5 أيام القادمة
        </h3>
        <span className="text-xs text-slate-400">تحديث منتصف النهار</span>
      </div>

      {/* شبكة البطاقات المتجاوبة */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {forecastDays.map((dayItem, idx) => (
          <div
            key={dayItem.date}
            className="flex flex-col items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-center transition hover:scale-[1.02] hover:shadow-md"
          >
            {/* اسم اليوم وتاريخه */}
            <div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                {idx === 0 ? "اليوم" : dayItem.dayName}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                {dayItem.date.slice(5)}
              </div>
            </div>

            {/* الأيقونة المعبرة */}
            <div className="my-3 text-3xl">
              {dayItem.condition.includes("مطر") ? "🌧️" : dayItem.condition.includes("سحاب") ? "⛅" : "☀️"}
            </div>

            {/* حالة الطقس باختصار */}
            <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400 truncate w-full mb-2">
              {dayItem.condition}
            </div>

            {/* شريط درجات الحرارة (العظمى والصغرى) */}
            <div className="w-full pt-2 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-around text-xs">
              <span className="font-extrabold text-slate-900 dark:text-white">
                {dayItem.maxTemp}°
              </span>
              <span className="text-slate-400 font-medium">
                {dayItem.minTemp}°
              </span>
            </div>

            {/* نسبة احتمالية هطول الأمطار إن وجدت */}
            {dayItem.rainProbability > 0 && (
              <div className="mt-1 text-[10px] text-sky-500 font-semibold flex items-center gap-0.5">
                <span>💧</span> {dayItem.rainProbability}%
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}`
      },
      outputExplanation: "يوضح هذا المثال كيفية استخدام useMemo لتحويل مصفوفة ضخمة وغير مهيأة قادمة من الـ API إلى 5 كائنات يومية دقيقة مع حساب درجات الحرارة العظمى والصغرى، وتنسيق أسماء الأيام باللغة العربية عبر Intl.DateTimeFormat.",
      commonMistakes: [
        {
          wrong: "// عمل map على مصفوفة الـ 40 قراءة كاملة كما هي بدون فلترة، مما يعرض 40 بطاقة متكدسة بنفس التاريخ",
          correct: "// تجميع البيانات بناءً على تاريخ اليوم الفرعي (Grouping by Date) واختيار قراءة موحدة لكل يوم لحساب درجات الحرارة بدقة"
        }
      ],
      bestPractices: [
        "استخدام useMemo لتنفيذ خوارزميات التجميع والتصفية لحماية واجهة React من إعادة المعالجة الثقيلة مع كل رندر",
        "استخدام مكتبة المعايير الدولية Intl.DateTimeFormat لتعريب أسماء الأيام بطريقة قياسية متوافقة مع متصفح المستخدم",
        "عرض نسبة احتمالية المطر (Probability of Precipitation - POP) بجانب درجات الحرارة لتوفير قيمة مضافة حقيقية"
      ],
      infographic: {
        title: "دورة تجميع بيانات التوقعات الخماسية",
        nodes: [
          { label: "بيانات خام (40 قراءة)", detail: "قراءة كل 3 ساعات لمدة 5 أيام متتالية" },
          { label: "التجميع حسب التاريخ (Grouping)", detail: "تقسيم القراءات إلى 5 مجموعات يومية" },
          { label: "حساب المؤشرات (Math.max / min)", detail: "استخراج أعلى وأدنى درجة حرارة لكل يوم" },
          { label: "عرض الشبكة (5-Day Grid)", detail: "5 بطاقات متجاوبة بتصميم واضح ومبسط" }
        ]
      }
    },
    {
      id: "31.3.f",
      title: "التعامل مع حالات التحميل والأخطاء وشبكة الإنترنت (Loading, Errors & Offline UX)",
      englishTerm: {
        term: "Loading States, Error Boundaries & Offline Resiliency",
        pronunciation: "لودينج ستيتس، إيرور باوندريز آند أوفلاين ريزيلينسي",
        meaning: "حالات التحميل وحدود الأخطاء والمرونة في غياب الاتصال"
      },
      description: "تعتمد موثوقية تطبيق الطقس بشكل قاطع على كيفية إدارته للمواقف غير المثالية: بطء سرعة الاتصال، انقطاع الإنترنت التام، إدخال أسماء مدن وهمية، أو وصول مفتاح الـ API للحد الأقصى من الاستعلامات. يجب ألا تترك واجهة المستخدم فارغة أو متجمدة في أي لحظة؛ بل يلزم عرض هياكل عظمية رمادية نابضة (Skeleton Loaders) أثناء انتظار الاستجابة، وتنبيهات خطأ صريحة وودية تمنح المستخدم اقتراحات للإصلاح، بالإضافة إلى رصد حالة اتصال المتصفح بالإنترنت عبر أحداث `navigator.onLine` لتنبيه المستخدم فور انقطاع الاتصال.",
      analogy: "يشبه وجود مضيف طيران ودود في الطائرة؛ إذا واجهت الرحلة مطبات هوائية أو تأخر الإقلاع، يشرح المضيف للركاب سبب التأخير بكل هدوء ويقدم لهم المشروبات، بدلاً من تركهم في مقصورة مظلمة دون أي معلومة عما يجري.",
      whyItMatters: "التعامل السليم مع حالات الفشل يبني ثقة المستخدم في التطبيق، ويمنع تجربة الاستخدام المحبطة التي تدفعه لمغادرة الصفحة فور ظهور أي استثناء غير معالج.",
      syntax: `// نمط معالجة حالات الواجهة الثلاثية
if (isLoading) return <WeatherSkeleton />;
if (error) return <ErrorBanner message={error} onRetry={refetch} />;
return <WeatherDisplay data={weather} />;`,
      simpleExample: {
        title: "عرض مؤشر تحميل عظمي (Skeleton) وتنبيه خطأ مع زر إعادة المحاولة",
        code: `import React from "react";

// مكون التحميل العظمي (Skeleton Loader)
export function WeatherSkeletonCard() {
  return (
    <div style={{
      maxWidth: "360px",
      margin: "20px auto",
      padding: "24px",
      borderRadius: "16px",
      backgroundColor: "#f1f5f9",
      border: "1px solid #e2e8f0"
    }}>
      {/* هيكل عظمي لعنوان المدينة */}
      <div style={{ height: "24px", width: "60%", backgroundColor: "#cbd5e1", borderRadius: "6px", margin: "0 auto 12px" }} />
      {/* هيكل عظمي لدرجة الحرارة الكبيرة */}
      <div style={{ height: "60px", width: "40%", backgroundColor: "#cbd5e1", borderRadius: "10px", margin: "16px auto" }} />
      {/* هيكل عظمي للمؤشرات السفلية */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px" }}>
        <div style={{ height: "30px", width: "25%", backgroundColor: "#cbd5e1", borderRadius: "6px" }} />
        <div style={{ height: "30px", width: "25%", backgroundColor: "#cbd5e1", borderRadius: "6px" }} />
        <div style={{ height: "30px", width: "25%", backgroundColor: "#cbd5e1", borderRadius: "6px" }} />
      </div>
    </div>
  );
}

// مكون رسالة الخطأ مع زر إعادة المحاولة
export function WeatherErrorBanner({ message, onRetry }) {
  return (
    <div style={{
      maxWidth: "360px",
      margin: "20px auto",
      padding: "16px",
      borderRadius: "12px",
      backgroundColor: "#fef2f2",
      border: "1px solid #fecaca",
      color: "#991b1b",
      textAlign: "center"
    }}>
      <div style={{ fontSize: "24px", marginBottom: "8px" }}>⚠️</div>
      <p style={{ margin: "0 0 12px", fontSize: "14px", fontWeight: "500" }}>{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          style={{
            padding: "6px 16px",
            backgroundColor: "#dc2626",
            color: "#ffffff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600"
          }}
        >
          إعادة المحاولة
        </button>
      )}
    </div>
  );
}`
      },
      advancedExample: {
        title: "نظام متكامل لإدارة الصمود الشبكي (Network Resiliency) ورصد حالة Offline وتنبيهات الأخطاء",
        code: `import React, { useState, useEffect } from "react";

// هوك مخصص لرصد حالة اتصال المتصفح بالإنترنت (Online/Offline)
export function useNetworkStatus() {
  // حالة الاتصال اللحظية
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true
  );

  useEffect(() => {
    // دالة تحديث الحالة عند عودة الاتصال
    const handleOnline = () => setIsOnline(true);
    // دالة تحديث الحالة عند انقطاع الاتصال
    const handleOffline = () => setIsOnline(false);

    // الاستماع لأحداث المتصفح العالمية
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // تنظيف المستمعات عند إلغاء التركيب
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}

// مكون شريط الطوارئ لانقطاع الإنترنت
export function OfflineStatusBar() {
  const isOnline = useNetworkStatus();

  // إذا كان الاتصال نشطاً لا نعرض شيئاً
  if (isOnline) return null;

  return (
    <div className="w-full bg-amber-500 text-slate-900 px-4 py-2 text-xs font-bold text-center flex items-center justify-center gap-2 sticky top-0 z-50 shadow-md">
      <span>⚡</span>
      <span>أنت غير متصل بالإنترنت حالياً. يتم عرض آخر بيانات طقس تم حفظها محلياً.</span>
    </div>
  );
}

// مكون الهيكل العظمي المتحرك المتقدم (Animated Tailwind Skeleton)
export function AdvancedWeatherSkeleton() {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-3xl bg-slate-100 dark:bg-slate-800 p-8 border border-slate-200 dark:border-slate-700 animate-pulse">
      {/* رأس الهيكل: اسم المدينة والتاريخ */}
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <div className="h-8 w-48 bg-slate-300 dark:bg-slate-700 rounded-lg" />
          <div className="h-4 w-28 bg-slate-200 dark:bg-slate-700/60 rounded" />
        </div>
        <div className="h-8 w-24 bg-slate-300 dark:bg-slate-700 rounded-full" />
      </div>

      {/* المنتصف: درجة الحرارة العظمى */}
      <div className="my-8 flex items-center gap-4">
        <div className="h-20 w-32 bg-slate-300 dark:bg-slate-700 rounded-2xl" />
        <div className="space-y-2">
          <div className="h-5 w-36 bg-slate-200 dark:bg-slate-700 rounded" />
          <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700/60 rounded" />
        </div>
      </div>

      {/* الشبكة السفلية: 4 بطاقات مقاييس */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[1, 2, 3, 4].map(idx => (
          <div key={idx} className="h-24 bg-slate-200 dark:bg-slate-700 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}

// مكون التنبيه الذكي عند حدوث خطأ مع رسائل تشخيصية
export function SmartErrorCard({ error, onRetry, onReset }) {
  // تصنيف نوع الخطأ لتقديم نصيحة مناسبة
  const isNotFound = error?.toLowerCase().includes("عثور") || error?.toLowerCase().includes("not found");
  const isAuthError = error?.toLowerCase().includes("مفتاح") || error?.toLowerCase().includes("401");

  return (
    <div className="w-full max-w-md mx-auto my-6 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-rose-200 dark:border-rose-900/40 shadow-xl text-center">
      {/* رمز الخطأ */}
      <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-rose-50 dark:bg-rose-950/50 flex items-center justify-center text-2xl text-rose-500">
        {isNotFound ? "🔍" : isAuthError ? "🔑" : "⚠️"}
      </div>

      {/* عنوان الخطأ */}
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
        {isNotFound ? "المدينة غير موجودة" : isAuthError ? "خطأ في صلاحية الـ API" : "تعذر تحميل بيانات الطقس"}
      </h3>

      {/* تفاصيل الرسالة */}
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
        {error || "حدث خطأ غير متوقع أثناء الاتصال بالخادم. يرجى التحقق من الشبكة والمحاولة مرة أخرى."}
      </p>

      {/* أزرار الإجراءات */}
      <div className="flex items-center justify-center gap-3">
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-md transition"
          >
            إعادة المحاولة 🔄
          </button>
        )}
        {onReset && (
          <button
            onClick={onReset}
            className="px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition"
          >
            مسح والبحث عن مدينة أخرى
          </button>
        )}
      </div>
    </div>
  );
}`
      },
      outputExplanation: "يوضح هذا التصميم التعامل مع سيناريوهات الفشل المختلفة؛ حيث يستمع النظام لحالة اتصال المتصفح بالإنترنت، ويوفر هياكل عظمية أثناء التحميل، ويصنف رسائل الأخطاء بدقة ليقترح على المستخدم الإجراء التصحيحي المناسب.",
      commonMistakes: [
        {
          wrong: "// الاكتفاء بعرض شاشة بيضاء أو نص مبهم مثل 'Error' بدون زر لإعادة المحاولة أو توضيح لسبب العطل",
          correct: "// تقديم رسائل خطأ إنسانية مفهومة تشرح سبب المشكلة (مثلاً: 'لم نتمكن من العثور على اسم هذه المدينة') مع توفير أزرار إصلاح مباشرة"
        }
      ],
      bestPractices: [
        "استخدام Skeleton Loaders بدلاً من أيقونات الدوران (Spinners) التقليدية لأنها تمنح انطباعاً بسرعة التحميل وتجهز ذهن المستخدم لشكل المحتوى",
        "تخزين آخر استجابة ناجحة في LocalStorage لعرضها فورياً في حال انقطاع اتصال الإنترنت المفاجئ (Offline-First Approach)",
        "تعطيل زر البحث وحقل الإدخال أثناء مرحلة التحميل لمنع إرسال طلبات مكررة لنفس المدينة"
      ],
      infographic: {
        title: "مصفوفة حالات الشبكة والمرونة",
        nodes: [
          { label: "حالة التحميل (Loading)", detail: "عرض Skeleton يحاكي بطاقة الطقس" },
          { label: "حالة الخطأ 404 (Not Found)", detail: "رسالة ودية تطلب مراجعة اسم المدينة" },
          { label: "حالة انقطاع الشبكة (Offline)", detail: "شريط تحذيري وعرض البيانات المخزنة محلياً" },
          { label: "حالة النجاح (Success)", detail: "عرض بطاقة الطقس وشبكة التوقعات كاملة" }
        ]
      }
    },
    {
      id: "31.3.g",
      title: "تحسين التصميم وتجربة المستخدم والرسوم التفاعلية (UX Polish & Interactive Enhancements)",
      englishTerm: {
        term: "UX Polish, Micro-interactions & Theme Switching",
        pronunciation: "يو إكس بوليش، مايكرو إنترآكشنز آند ثيم سويتشينج",
        meaning: "صقل تجربة المستخدم والتفاعلات الدقيقة وتبديل السمات"
      },
      description: "تمثل المرحلة الختامية في بناء مشروع تطبيق الطقس نقلة نوعية من مجرد واجهة وظيفية تعمل إلى منتج رقمي ممتع ومصقول بأعلى درجات الاحترافية. يشمل ذلك: إضافة مفتاح تبديل وحدات القياس (الدرجة المئوية °C مقابل الفهرنهايت °F) مع تحويل فوري للقيم دون إعادة طلب البيانات من الخادم، وإضافة مؤثرات حركية دقيقة (Micro-interactions) عند تمرير الفأرة فوق بطاقات التوقعات، وتوفير سجل تفاعلي لآخر 5 مدن تم البحث عنها مع إمكانية مسحها، بالإضافة إلى دعم الوضع المظلم (Dark Mode) التلقائي.",
      analogy: "تشبه عملية تلميع طلاء السيارة بعد تصنيعها وإضافة المعطرات الداخلية؛ لم تغير من قوة المحرك، لكنها جعلت تجربة الجلوس بداخلها ممتعة ومريحة إلى أقصى حد.",
      whyItMatters: "التفاصيل الصغيرة مثل تذكر آخر مدينة بحث، والتحويل اللحظي لوحدات الحرارة، والتحريكات السلسة هي التي تمنح واجهة المستخدم لمسة الشركات الكبرى وتجعل المشروع مؤهلاً ليكون قطعة رئيسية في ملف أعمالك (Portfolio).",
      syntax: `// دالة التحويل اللحظي لدرجات الحرارة
const convertTemp = (celsius, unit) => {
  if (unit === "F") return Math.round((celsius * 9/5) + 32);
  return Math.round(celsius);
};`,
      simpleExample: {
        title: "مكون تبديل وحدات القياس بين الدرجة المئوية والفهرنهايت",
        code: `import React, { useState } from "react";

// مكون محول درجات الحرارة التفاعلي
function UnitToggleDemo() {
  // درجة الحرارة المرجعية بالمئوية
  const baseCelsius = 25;
  // وحدة القياس الحالية (C أو F)
  const [unit, setUnit] = useState("C");

  // دالة حساب القيمة المعروضة بناءً على الوحدة
  const displayTemp = unit === "C" ? baseCelsius : Math.round((baseCelsius * 9) / 5 + 32);

  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "sans-serif" }}>
      {/* عرض درجة الحرارة مع الوحدة */}
      <h2 style={{ fontSize: "48px", margin: "10px 0" }}>
        {displayTemp}°{unit}
      </h2>
      
      {/* أزرار التبديل */}
      <div style={{ display: "inline-flex", borderRadius: "8px", border: "1px solid #0284c7", overflow: "hidden" }}>
        <button
          onClick={() => setUnit("C")}
          style={{
            padding: "8px 16px",
            backgroundColor: unit === "C" ? "#0284c7" : "#ffffff",
            color: unit === "C" ? "#ffffff" : "#0284c7",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          مئوية (°C)
        </button>
        <button
          onClick={() => setUnit("F")}
          style={{
            padding: "8px 16px",
            backgroundColor: unit === "F" ? "#0284c7" : "#ffffff",
            color: unit === "F" ? "#ffffff" : "#0284c7",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          فهرنهايت (°F)
        </button>
      </div>
    </div>
  );
}

export default UnitToggleDemo;`
      },
      advancedExample: {
        title: "تطبيق طقس متكامل وصغير (Self-Contained) يجمع البحث والتحويل والمدن السابقة",
        code: `import React, { useState, useEffect } from "react";

// قاعدة بيانات محلية مصغرة للتجربة الفورية
const LOCAL_WEATHER_DB = {
  "القاهرة": { city: "القاهرة", country: "EG", tempC: 28, humidity: 45, wind: 18, condition: "مشمس ☀️" },
  "الرياض": { city: "الرياض", country: "SA", tempC: 36, humidity: 15, wind: 24, condition: "صافٍ 🌤️" },
  "دبي": { city: "دبي", country: "AE", tempC: 33, humidity: 62, wind: 14, condition: "غائم جزئياً ⛅" },
  "بيروت": { city: "بيروت", country: "LB", tempC: 24, humidity: 65, wind: 12, condition: "معتدل 🌤️" }
};

export function InteractiveWeatherMiniApp() {
  // حالة المدينة المحددة
  const [cityInput, setCityInput] = useState("");
  // حالة وحدة القياس (C أو F)
  const [tempUnit, setTempUnit] = useState("C");
  // بيانات الطقس المعروضة
  const [currentWeather, setCurrentWeather] = useState(LOCAL_WEATHER_DB["القاهرة"]);
  // قائمة المدن السابقة
  const [history, setHistory] = useState(["القاهرة", "الرياض"]);
  // حالة التحميل
  const [isSearching, setIsSearching] = useState(false);
  // حالة الخطأ
  const [errorMsg, setErrorMsg] = useState("");

  // دالة تحويل درجات الحرارة
  const getDisplayTemperature = (celsius) => {
    if (tempUnit === "F") return Math.round((celsius * 9) / 5 + 32);
    return celsius;
  };

  // معالجة البحث عن مدينة
  const handleSearch = (cityName) => {
    const target = cityName.trim();
    if (!target) return;

    setIsSearching(true);
    setErrorMsg("");

    // محاكاة تأخير استجابة الشبكة
    setTimeout(() => {
      const match = LOCAL_WEATHER_DB[target];
      if (match) {
        setCurrentWeather(match);
        // تحديث السجل التاريخي دون تكرار
        setHistory(prev => [target, ...prev.filter(c => c !== target)].slice(0, 4));
        setCityInput("");
      } else {
        setErrorMsg(\`لم يتم العثور على "\${target}". جرب: القاهرة، الرياض، دبي، أو بيروت.\`);
      }
      setIsSearching(false);
    }, 400);
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl font-sans">
      {/* شريط التحكم العلوي: البحث وتبديل الوحدات */}
      <div className="flex items-center gap-3 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch(cityInput)}
            placeholder="ابحث عن مدينة (مثال: دبي)..."
            className="w-full px-4 py-2.5 text-sm rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
        <button
          onClick={() => handleSearch(cityInput)}
          disabled={isSearching}
          className="px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-sm font-semibold transition disabled:opacity-50"
        >
          {isSearching ? "جاري..." : "بحث"}
        </button>

        {/* زر تبديل الوحدة */}
        <button
          onClick={() => setTempUnit(u => u === "C" ? "F" : "C")}
          className="px-3 py-2.5 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold hover:bg-slate-300 transition"
          title="تبديل وحدة القياس"
        >
          °{tempUnit}
        </button>
      </div>

      {/* رسالة الخطأ إن وجدت */}
      {errorMsg && (
        <div className="mb-4 p-3 bg-rose-50 text-rose-700 text-xs rounded-xl border border-rose-200">
          ⚠️ {errorMsg}
        </div>
      )}

      {/* بطاقة الطقس النشطة */}
      {currentWeather && (
        <div className="bg-gradient-to-br from-sky-500 to-indigo-600 text-white rounded-2xl p-6 shadow-lg relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-black">{currentWeather.city}</h2>
              <span className="text-xs text-sky-100 font-semibold">{currentWeather.country}</span>
            </div>
            <span className="text-2xl">{currentWeather.condition}</span>
          </div>

          <div className="my-6">
            <span className="text-6xl font-extrabold tracking-tight">
              {getDisplayTemperature(currentWeather.tempC)}°{tempUnit}
            </span>
          </div>

          <div className="flex gap-6 text-xs text-sky-100 border-t border-white/20 pt-4">
            <div>💧 الرطوبة: <strong className="text-white">{currentWeather.humidity}%</strong></div>
            <div>💨 الرياح: <strong className="text-white">{currentWeather.wind} كم/س</strong></div>
          </div>
        </div>
      )}

      {/* سجل المدن السابقة (Pills) */}
      {history.length > 0 && (
        <div className="mt-5 flex items-center gap-2 flex-wrap">
          <span className="text-xs text-slate-400 font-medium">المدن الأخيرة:</span>
          {history.map((c) => (
            <button
              key={c}
              onClick={() => handleSearch(c)}
              className="text-xs px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-700 transition"
            >
              {c}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}`
      },
      outputExplanation: "يقدم هذا التطبيق الصغير نموذجاً مثالياً لكيفية دمج الميزات الإضافية (تبديل الوحدات السلس، شريط المدن الأخيرة السريع، والتحقق من الأخطاء) في واجهة مستخدم متناسقة وأنيقة.",
      commonMistakes: [
        {
          wrong: "// إعادة إرسال طلب جديد إلى خادم الـ API في كل مرة يضغط فيها المستخدم على زر تحويل الوحدة (°C إلى °F)",
          correct: "// حساب التحويل الحسابي محلياً في المتصفح فورياً؛ فالتحويل الرياضي بين Celsius و Fahrenheit لا يستلزم أي استدعاء شبكي"
        }
      ],
      bestPractices: [
        "إجراء جميع التحويلات الحسابية (مثل تغيير وحدات القياس) محلياً على العميل (Client-side) لتحقيق استجابة فورية بدون تأخير شبكي",
        "تخزين خيار وحدة القياس المفضل للمستخدم في LocalStorage لفتحه تلقائياً في الزيارات القادمة",
        "الاهتمام بالتفاعلات الدقيقة (Hover Effects و Button Active States) لتعزيز حس الاستجابة والحيوية في التطبيق"
      ],
      infographic: {
        title: "عناصر صقل وتطوير تجربة تطبيق الطقس",
        nodes: [
          { label: "تبديل الوحدات (°C / °F)", detail: "تحويل رياضي فوري في الواجهة دون استدعاء شبكي" },
          { label: "سجل المدن السابقة (History Pills)", detail: "الوصول السريع لآخر المدن بنقرة واحدة" },
          { label: "المؤثرات الحركية (Micro-animations)", detail: "حركات تمرير سلسة واستجابات بصرية سريعة" },
          { label: "الوضع المظلم (Dark Mode)", detail: "تكيف تلقائي مع تفضيلات نظام تشغيل المستخدم" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-31.3-1",
      question: "لماذا تعد تقنية الكبح الزمني (Debounce) ضرورية في حقل البحث عن المدن في تطبيقات الطقس؟",
      options: [
        "لتشفير اسم المدينة قبل إرساله في رابط الـ URL لحماية الخصوصية",
        "لتأجيل إرسال طلب الشبكة حتى يتوقف المستخدم عن الكتابة لمهلة زمنية، مما يوفر استهلاك الـ API ويمنع الضغط المفرط",
        "لتحويل الحروف العربية إلى اللغة الإنجليزية تلقائياً",
        "لتجاوز الحاجة إلى استخدام خطاف useEffect في مكونات React"
      ],
      correctAnswer: 1,
      explanation: "الكبح الزمني (Debouncing) يضمن عدم إرسال طلب HTTP مع كل ضغطة مفتاح، بل ينتظر توقف المستخدم عن الكتابة لمدة معينة (مثل 400ms)، مما يحمي حصة الـ API ويمنع بطء التطبيق."
    },
    {
      id: "quiz-31.3-2",
      question: "ما هو أفضل أسلوب لتنفيذ ميزة تبديل درجة الحرارة بين المئوية (°C) والفهرنهايت (°F)؟",
      options: [
        "إرسال طلب HTTP جديد إلى الخادم الخارجي مع تمرير معامل units=imperial",
        "إعادة تحميل الصفحة بالكامل لتغيير الإعدادات العامة للمتصفح",
        "حساب التحويل محلياً داخل المكون الرياضي في المتصفح فورياً دون الحاجة لأي استدعاء شبكي",
        "حذف بيانات الطقس وإجبار المستخدم على كتابة اسم المدينة مجدداً"
      ],
      correctAnswer: 2,
      explanation: "التحويل بين المئوية والفهرنهايت هو معادلة رياضية بسيطة (F = C * 9/5 + 32)؛ حسابها محلياً يوفر استجابة فورية للمستخدم دون استهلاك حصص الشبكة وبدون أي تأخير."
    },
    {
      id: "quiz-31.3-3",
      question: "عند تلقي مصفوفة من 40 قراءة لتوقعات 5 أيام (قراءة كل 3 ساعات)، كيف نستخرج توقعات يومية دقيقة؟",
      options: [
        "عرض أول 5 قراءات من المصفوفة فقط وتجاهل الـ 35 قراءة المتبقية",
        "تجميع القراءات حسب تاريخ اليوم، ثم اختيار قراءة موحدة (مثل منتصف النهار) وحساب درجات الحرارة العظمى والصغرى لكل يوم",
        "حساب المتوسط الحسابي لجميع الـ 40 قراءة وعرض بطاقة واحدة فقط للأسبوع كله",
        "إلغاء البيانات والطلب من خادم الـ API إرسال بيانات جاهزة دون معالجة"
      ],
      correctAnswer: 1,
      explanation: "التجميع حسب التاريخ (Grouping by Date) واختيار قراءة ممثلة (الساعة 12:00 ظهراً) مع حساب Max و Min لدرجات حرارة اليوم يمنح المستخدم أدق صورة ملخصة للتوقعات القادمة."
    }
  ],
  exercise: {
    id: "exercise-31.3",
    title: "تمرين عملي: بناء مصغر لخدمة فحص الطقس مع الكبح الزمني والذاكرة المؤقتة",
    description: "قم بإنشاء مكون React متكامل يحتوي على حقل بحث لكتابة اسم المدينة، مع استخدام هوك useDebounce بمهلة 400 ميلي ثانية، وجلب بيانات الطقس من كائن محاكي، وحفظ آخر 3 مدن تم البحث عنها مع إمكانية النقر عليها لتفعيلها فورياً.",
    hints: [
      "استخدم useState لإدارة نص البحث، وحالة التحميل، وبيانات الطقس الحالية، وسجل المدن",
      "ابنِ هوك useDebounce معتمداً على setTimeout و clearTimeout داخل useEffect",
      "أضف زراً صغيراً بجانب كل مدينة في السجل التاريخي لحذفها أو إعادة استعراضها"
    ],
    solution: `import React, { useState, useEffect } from "react";

// هوك الكبح الزمني المخصص
function useDebounce(value, delay = 400) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

// قاعدة بيانات تجريبية
const CITIES_DATA = {
  "alexandria": { name: "الإسكندرية", temp: 24, status: "معتدل ولطيف 🌊", humidity: 65 },
  "amman": { name: "عمّان", temp: 22, status: "صافٍ ورياح خفيفة 🍃", humidity: 40 },
  "kuwait": { name: "الكويت", temp: 37, status: "حار وجاف ☀️", humidity: 18 }
};

export default function WeatherLab() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState(["alexandria"]);
  const debouncedQuery = useDebounce(query, 400);

  // جلب البيانات عند تغير القيمة المكبحة
  useEffect(() => {
    const key = debouncedQuery.trim().toLowerCase();
    if (!key) return;

    setLoading(true);
    const timer = setTimeout(() => {
      const result = CITIES_DATA[key];
      if (result) {
        setWeather(result);
        setHistory(prev => [key, ...prev.filter(c => c !== key)].slice(0, 3));
      } else {
        setWeather(null);
      }
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [debouncedQuery]);

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", fontFamily: "sans-serif" }}>
      <h3>مختبر الطقس التفاعلي</h3>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="جرب: alexandria, amman, kuwait"
        style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
      />
      {loading && <p style={{ color: "#64748b" }}>جاري جلب البيانات...</p>}
      {weather && (
        <div style={{ marginTop: "16px", padding: "16px", background: "#e0f2fe", borderRadius: "10px" }}>
          <h4>{weather.name}</h4>
          <p style={{ fontSize: "28px", margin: "5px 0", fontWeight: "bold" }}>{weather.temp}°م</p>
          <p>{weather.status}</p>
          <small>الرطوبة: {weather.humidity}%</small>
        </div>
      )}
      <div style={{ marginTop: "16px" }}>
        <small>سجل البحث: </small>
        {history.map(c => (
          <button key={c} onClick={() => setQuery(c)} style={{ margin: "0 4px", fontSize: "11px" }}>
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "المخطط الهيكلي لمشروع تطبيق الطقس (Weather Application Architecture)",
    nodes: [
      { label: "1. Search & Debounce", detail: "حقل البحث الذكي المزود بكبح زمني 400ms وسجل للمدن السابقة" },
      { label: "2. API Service Layer", detail: "طبقة استدعاء موحدة لعزل مفاتيح الـ API وتوحيد بنية البيانات وتخزينها مؤقتاً" },
      { label: "3. Current Weather Hero", detail: "عرض درجة الحرارة الكبرى والحالة الجوية والمقاييس البيئية الحيوية" },
      { label: "4. 5-Day Forecast Grid", detail: "تصفية وتجميع قراءات الـ 40 فترة إلى 5 بطاقات يومية مع العظمى والصغرى" },
      { label: "5. Resiliency & Polish", detail: "هياكل عظمية Skeleton، رصد حالة Offline، وتبديل وحدات القياس °C/°F" }
    ]
  }
};

