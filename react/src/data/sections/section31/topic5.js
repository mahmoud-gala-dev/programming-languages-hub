// src/data/sections/section31/topic5.js
// القسم 31: مشاريع تطبيقية للمبتدئين
// الموضوع 5: مشروع تطبيق الاختبارات القصيرة (Quiz Application)

export const topic5 = {
  id: "31.5",
  title: "مشروع تطبيق الاختبارات القصيرة (Quiz App)",
  description: "دليل معماري وتطبيقي شامل لبناء تطبيق اختبارات تفاعلي متقدم في React؛ يغطي نمذجة بيانات الأسئلة، إدارة خطوات الانتقال (Step-by-step Wizard Flow)، مؤقت العد التنازلي التلقائي، حساب النقاط الفوري، شاشة عرض النتيجة مع شارات التقييم، ونمط مراجعة الإجابات النموذجية (Review Mode).",
  subtopics: [
    {
      id: "31.5.a",
      title: "فكرة المشروع والمتطلبات (Project Scope & Requirements)",
      englishTerm: {
        term: "Project Scope & State Machine Concept",
        pronunciation: "بروجيكت سكوب آند ستيت ماشين كونسيبت",
        meaning: "نطاق المشروع ومفهوم آلة الحالة للاختبارات"
      },
      description: "تطبيق الاختبارات القصيرة (Quiz App) هو أحد أرقى وأمتع المشاريع التطبيقية للمبتدئين في React؛ لأنه يمثل محاكاة نموذجية لآلة الحالة المنتهية (Finite State Machine - FSM). ينتقل المستخدم خلال تجربة محكمة تبدأ بشاشة الترحيب واختيار الصعوبة (Idle/Start)، ثم مرحلة الإجابة النشطة المتتابعة (In-Progress) حيث يعرض سؤال واحد في كل خطوة مع مؤقت تنازلي، وصولاً إلى شاشة النتيجة النهائية (Finished) وشاشة مراجعة الإجابات (Review). يتطلب المشروع إدارة دقيقة لحالة الإجابات المختارة، ومنع الرجوع أو التعديل بعد تثبيت الإجابة، وحساب النسبة المئوية الدقيقة للإنجاز.",
      analogy: "يشبه قاعة الامتحانات الرسمية أو مسابقات المسرح التلفزيونية مثل 'من سيربح المليون'؛ يظهر السؤال على الشاشة الكبرى مع عداد ثوانٍ تنازلي، بمجرد تثبيت الإجابة يُغلق الخيار ولا يمكن الرجوع عنه، وفي النهاية تعرض الشاشة الكبرى النتيجة النهائية مع تصفيق أو تشجيع.",
      whyItMatters: "يعلم المطور كيفية تنظيم التطبيقات التي تتبع تدفق الخطوات المتسلسلة (Multi-step Wizards)، وفصل منطق الاختبار والحسابات عن مكونات العرض البصرية لضمان تجربة مستخدم سلسة وموثوقة.",
      syntax: `// حالات آلة حالة الاختبار (Quiz State Machine)
type QuizStatus = "IDLE" | "ACTIVE" | "COMPLETED" | "REVIEW";

interface QuizSessionState {
  status: QuizStatus;
  currentQuestionIndex: number;
  selectedAnswers: Record<string, number>;
  timeRemainingSeconds: number;
  score: number;
}`,
      simpleExample: {
        title: "تعريف كائن حالات دورة حياة جلسة الاختبار",
        code: `// تعريف الحالات الأساسية لاختبار بسيط
const QUIZ_STAGES = {
  START: "START",
  RUNNING: "RUNNING",
  RESULTS: "RESULTS"
};

// كائن الجلسة الابتدائية
function createInitialQuizSession(totalQuestions) {
  // إرجاع كائن الحالة النظيف
  return {
    // الحالة الحالية
    stage: QUIZ_STAGES.START,
    // فهرس السؤال النشط
    currentIndex: 0,
    // إجمالي الأسئلة
    total: totalQuestions,
    // إجابات المستخدم المسجلة
    answers: {},
    // مجموع النقاط
    score: 0
  };
}

// إنشاء جلسة اختبار تجريبية تحتوي على 5 أسئلة
const session = createInitialQuizSession(5);
console.log("حالة الجلسة عند الإنشاء:", session.stage); // START`
      },
      advancedExample: {
        title: "هيكل آلة حالة متكامل لإدارة انتقال مراحل الاختبار (State Reducer Pattern)",
        code: `// أنواع الأحداث التي يمكن أن تطرأ على جلسة الاختبار
const QUIZ_ACTIONS = {
  START_QUIZ: "START_QUIZ",
  SUBMIT_ANSWER: "SUBMIT_ANSWER",
  TIME_OUT: "TIME_OUT",
  NEXT_QUESTION: "NEXT_QUESTION",
  FINISH_QUIZ: "FINISH_QUIZ",
  RESTART: "RESTART"
};

// دالة المخفض (Reducer) لإدارة انتقالات الحالة المحددة
function quizStateReducer(state, action) {
  switch (action.type) {
    // بدء الاختبار
    case QUIZ_ACTIONS.START_QUIZ:
      return {
        ...state,
        status: "ACTIVE",
        currentQuestionIndex: 0,
        selectedAnswers: {},
        score: 0,
        timeRemaining: action.payload.questionDuration
      };

    // تسجيل إجابة السؤال النشط
    case QUIZ_ACTIONS.SUBMIT_ANSWER: {
      const { questionId, optionIndex, isCorrect } = action.payload;
      return {
        ...state,
        selectedAnswers: {
          ...state.selectedAnswers,
          [questionId]: optionIndex
        },
        score: isCorrect ? state.score + 1 : state.score
      };
    }

    // الانتقال للسؤال التالي
    case QUIZ_ACTIONS.NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        timeRemaining: action.payload.questionDuration
      };

    // إنهاء الاختبار وعرض النتائج
    case QUIZ_ACTIONS.FINISH_QUIZ:
      return {
        ...state,
        status: "COMPLETED"
      };

    // إعادة ضبط الاختبار من البداية
    case QUIZ_ACTIONS.RESTART:
      return {
        status: "IDLE",
        currentQuestionIndex: 0,
        selectedAnswers: {},
        score: 0,
        timeRemaining: 0
      };

    default:
      return state;
  }
}

// اختبار محاكاة لدورة حياة الاختبار
let currentSession = { status: "IDLE", currentQuestionIndex: 0, selectedAnswers: {}, score: 0 };
// بدء الاختبار
currentSession = quizStateReducer(currentSession, { type: QUIZ_ACTIONS.START_QUIZ, payload: { questionDuration: 20 } });
console.log("الحالة بعد البدء:", currentSession.status); // ACTIVE
// إجابة صحيحة على السؤال الأول
currentSession = quizStateReducer(currentSession, {
  type: QUIZ_ACTIONS.SUBMIT_ANSWER,
  payload: { questionId: "q1", optionIndex: 2, isCorrect: true }
});
console.log("النقاط بعد الإجابة الأولى:", currentSession.score); // 1`
      },
      outputExplanation: "يوضح هذا التأسيس تطبيق نمط آلة الحالة (State Machine)؛ حيث لا يمكن الانتقال إلى شاشة النتائج إلا بعد اكتمال جميع الأسئلة أو نفاد الوقت، مما يمنع حدوث حالات واجهة غير متوقعة أو ثغرات في تتبع النقاط.",
      commonMistakes: [
        {
          wrong: "// استخدام متغيرات حالة مبعثرة (useState لكل مؤشر وكل شاشة) دون منظم مركزي، مما يؤدي لتعارض الشاشات أثناء الانتقال",
          correct: "// استخدام حالة موحدة أو آلة حالة محددة (FSM: Idle -> Active -> Completed) تضمن عدم تداخل الشاشات نهائياً"
        }
      ],
      bestPractices: [
        "تحديد جميع مراحل الاختبار بوضوح (بداية، سؤال نشط، تقييم، مراجعة) قبل كتابة كود الواجهة",
        "تخزين إجابات المستخدم مفهرسة بمعرف السؤال (Key-Value) لتسهيل استرجاعها أثناء مرحلة المراجعة",
        "حساب شريط تقدم الاختبار (Progress Bar) بناءً على النسبة المئوية للأسئلة المنجزة لتشجيع المستخدم"
      ],
      infographic: {
        title: "مخطط آلة حالة جلسة الاختبار (Quiz State Machine)",
        nodes: [
          { label: "1. البداية (Idle)", detail: "شاشة الترحيب، اختيار التصنيف، وزر بدء التحدي" },
          { label: "2. الجلسة النشطة (Active)", detail: "عرض السؤال + عداد الثواني + تسجيل الإجابة الفورية" },
          { label: "3. التدفق الخطي (Progress)", detail: "الانتقال للسؤال التالي وتحديث شريط النسبة المئوية" },
          { label: "4. النتيجة والتقييم (Completed)", detail: "عرض النسبة المئوية، الشارة التقديرية، وزر المراجعة" }
        ]
      }
    },
    {
      id: "31.5.b",
      title: "هيكلة بيانات الأسئلة والخيارات (Question Schema & Dataset Design)",
      englishTerm: {
        term: "Question Schema & Dataset Normalization",
        pronunciation: "كويستشن سكيما آند داتاسيت نورمالايزيشن",
        meaning: "مخطط بيانات الأسئلة وتوحيد هيكل بنك الأسئلة"
      },
      description: "يعتمد نجاح تطبيق الاختبارات على جودة ومرونة بنك الأسئلة (Question Bank). يتطلب تصميم هيكل البيانات دعماً لمعرف فريد لكل سؤال، ونص السؤال الواضح، ومصفوفة من الخيارات (Options) المتكافئة، وفهرس الإجابة الصحيحة (Correct Index)، ومستوى الصعوبة (Easy, Medium, Hard)، بالإضافة إلى شرح توضيحي لسبب صحة الخيار (Explanation) لعرضه في شاشة المراجعة. كما يحتاج النظام إلى دالة لخلط الخيارات عشوائياً (Shuffle) دون تغيير الإشارة للإجابة الصحيحة.",
      analogy: "يشبه تصميم نموذج بنك الأسئلة بطاقة المعلم في المسابقات؛ تحتوي البطاقة على السؤال في الواجهة، وأربعة خيارات مرقمة، وفي الأسفل يوجد الختم السري للإجابة الصحيحة مع تعليل علمي يشرح سبب اختيارها.",
      whyItMatters: "التصميم السليم يتيح توسيع بنك الأسئلة بسهولة، وإمكانية جلبها لاحقاً من ملف JSON محلي أو واجهة برمجة خارجية (مثل Open Trivia DB) دون تغيير سطر واحد في مكونات واجهة العرض.",
      syntax: `// نموذج بنك الأسئلة المعياري
interface QuestionItem {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  category?: string;
  difficulty?: "easy" | "medium" | "hard";
}`,
      simpleExample: {
        title: "تعريف بنك أسئلة صغير في مفاهيم React الأساسية",
        code: `// بنك أسئلة تجريبي حول مكتبة React
const REACT_QUIZ_DATASET = [
  {
    id: "q1",
    question: "ما هو الهوك الأساسي لإدارة الحالة المحلية في المكونات الوظيفية؟",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correctAnswerIndex: 1,
    explanation: "هوك useState هو الخطاف المعياري المخصص لإنشاء وإدارة الحالة المحلية داخل المكونات الوظيفية."
  },
  {
    id: "q2",
    question: "ما الغرض الرئيسي من استخدام React Fragment (<>...</>)؟",
    options: [
      "تسريع تحميل صور التطبيق",
      "تجميع عناصر متجاورة دون إضافة عقدة إضافية للـ DOM",
      "إيقاف إعادة تصيير المكونات نهائياً",
      "التعامل مع طلبات الـ HTTP"
    ],
    correctAnswerIndex: 1,
    explanation: "تتيح React Fragments إرجاع عدة عناصر متجاورة دون الحاجة لتغليفها بوسم <div> غير ضروري في شجرة الـ DOM."
  }
];

// طباعة عدد أسئلة البنك
console.log("إجمالي الأسئلة في البنك:", REACT_QUIZ_DATASET.length);`
      },
      advancedExample: {
        title: "خوارزمية خلط الأسئلة والخيارات عشوائياً مع الحفاظ الدقيق على مؤشر الإجابة الصحيحة (Fisher-Yates Shuffle)",
        code: `// خوارزمية فيشر-يتس (Fisher-Yates) لخلط المصفوفات عشوائياً بطريقة عادلة
function shuffleArray(array) {
  const cloned = [...array];
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

// دالة متقدمة لخلط خيارات السؤال مع إعادة ضبط مؤشر الإجابة الصحيحة تلقائياً
function prepareShuffledQuestion(questionItem) {
  // استخراج الإجابة الصحيحة كنص
  const correctOptionText = questionItem.options[questionItem.correctAnswerIndex];
  
  // خلط مصفوفة الخيارات
  const shuffledOptions = shuffleArray(questionItem.options);
  
  // العثور على الفهرس الجديد للإجابة الصحيحة بعد الخلط
  const newCorrectIndex = shuffledOptions.indexOf(correctOptionText);

  return {
    ...questionItem,
    // الخيارات بعد التوزيع العشوائي
    options: shuffledOptions,
    // الفهرس الصحيح المحدث
    correctAnswerIndex: newCorrectIndex
  };
}

// دالة تجهيز جلسة اختبار كاملة بأسئلة وخيارات مخلخلة
export function generateRandomizedQuiz(questionBank, questionCount = 5) {
  // أولاً: خلط الأسئلة واختيار العدد المطلوب
  const selectedQuestions = shuffleArray(questionBank).slice(0, questionCount);
  
  // ثانياً: خلط خيارات كل سؤال مع تحديث مؤشرات الإجابة
  return selectedQuestions.map(q => prepareShuffledQuestion(q));
}

// اختبار الخوارزمية
const rawQuestion = {
  id: "test-1",
  question: "ما هي عاصمة اليابان؟",
  options: ["سول", "طوكيو", "بكين", "بانكوك"],
  correctAnswerIndex: 1, // طوكيو
  explanation: "طوكيو هي عاصمة اليابان."
};

const prepared = prepareShuffledQuestion(rawQuestion);
console.log("الخيارات بعد الخلط:", prepared.options);
console.log("نص الإجابة الصحيحة المؤكدة:", prepared.options[prepared.correctAnswerIndex]); // دائماً 'طوكيو'`
      },
      outputExplanation: "تضمن دالة prepareShuffledQuestion خلط الخيارات عشوائياً في كل مرة يبدأ فيها المستخدم اختباراً جديداً، مع إعادة حساب correctAnswerIndex بدقة متناهية؛ بحيث لا يحفظ المستخدم مواقع الإجابات (أ، ب، ج) بل يتعلم المفهوم ذاته.",
      commonMistakes: [
        {
          wrong: "// خلط مصفوفة options دون تحديث correctAnswerIndex، مما يؤدي لاعتبار إجابة خاطئة صحيحة بعد إعادة ترتيب المصفوفة",
          correct: "// دائماً استخرج نص الإجابة الصحيحة أولاً، ثم اخلط الخيارات، ثم استخدم indexOf لتحديث المؤشر الصحيح الجديد بدقة"
        }
      ],
      bestPractices: [
        "إرفاق حقل explanation مع كل سؤال لتقديم تغذية راجعة تعليمية قيّمة للمستخدم بعد الإجابة",
        "فصل بنك الأسئلة في ملف منفصل (questionsData.js) لتسهيل تعديل أو إضافة أسئلة دون لمس الكود البرمجي",
        "توفير 4 خيارات متوازنة في الطول والصياغة لكل سؤال لتفادي التلميحات غير المقصودة"
      ],
      infographic: {
        title: "هندسة بنك الأسئلة وخوارزمية الخلط",
        nodes: [
          { label: "بنك الأسئلة الخام", detail: "سؤال، 4 خيارات، ومؤشر الإجابة الصحيحة" },
          { label: "حفظ الإجابة الصحيحة", detail: "استخراج القيمة النصية الأصلية للإجابة" },
          { label: "خلط Fisher-Yates", detail: "إعادة توزيع الخيارات بترتيب عشوائي عادل" },
          { label: "إعادة تعيين المؤشر", detail: "تحديد موقع الإجابة الصحيحة في الترتيب الجديد" }
        ]
      }
    },
    {
      id: "31.5.c",
      title: "عرض الأسئلة والخيارات مع الحساب الفوري (Question Presenter & Selection State)",
      englishTerm: {
        term: "Question Presenter & Immediate Feedback",
        pronunciation: "كويستشن بريزنتر آند إيميديات فيدباك",
        meaning: "مكون عرض السؤال وتغذية الاختيار الفورية"
      },
      description: "يمثل مكون عرض السؤال (Question Card) النواة التفاعلية لتطبيق الاختبار. يتطلب هذا المكون صياغة بصرية راقية تعرض رقم السؤال الحالي نسبة لإجمالي الأسئلة (مثال: السؤال 3 من 10)، ونص السؤال بخط عريض، وشبكة الخيارات التفاعلية. تدعم الخيارات حالتين رئيسيتين: (1) التغذية الراجعة الفورية (Immediate Feedback): حيث يتلون الخيار فور النقر بالأخضر إذا كان صحيحاً أو بالأحمر إذا كان خاطئاً مع إظهار الخيار الصحيح تلقائياً وتعطيل بقية الخيارات، أو (2) وضع الاختبار الصامت الذي يسجل الإجابة وينتقل للسؤال التالي مباشرة.",
      analogy: "يشبه قلم التظليل الفوري في الامتحانات الإلكترونية؛ بمجرد تظليل الدائرة المختارة، يصدر النظام نغمة هادئة ويضيء المصباح الأخضر للتحقق من أن اختيارك قد سُجل في قاعدة البيانات.",
      whyItMatters: "يمنح المستخدم وضوحاً تاماً حول حالة تقدمه، ويمنع النقرات المزدوجة العرضية عبر تجميد الأزرار فور تأكيد الاختيار.",
      syntax: `// تحديد لون الخيار بناءً على التقييم اللحظي
const getOptionStyle = (index) => {
  if (selectedOption === null) return "bg-white hover:bg-slate-50";
  if (index === question.correctAnswerIndex) return "bg-emerald-500 text-white";
  if (index === selectedOption) return "bg-rose-500 text-white";
  return "bg-slate-100 opacity-50";
};`,
      simpleExample: {
        title: "مكون عرض سؤال بسيط مع تحديد الخيار المختار",
        code: `import React, { useState } from "react";

// مكون عرض سؤال فردي مبسط
function SimpleQuestionCard({ questionData, onAnswerSelected }) {
  // حالة الخيار المختار
  const [pickedIndex, setPickedIndex] = useState(null);

  // معالجة النقر على أحد الخيارات
  const handleSelect = (idx) => {
    // منع التعديل إذا تم الاختيار بالفعل
    if (pickedIndex !== null) return;
    setPickedIndex(idx);
    // إخطار المكون الأب بالإجابة بعد نصف ثانية
    setTimeout(() => {
      onAnswerSelected(idx === questionData.correctAnswerIndex);
      setPickedIndex(null); // إعادة الضبط للسؤال التالي
    }, 600);
  };

  return (
    <div style={{ maxWidth: "450px", margin: "20px auto", padding: "20px", border: "1px solid #e2e8f0", borderRadius: "12px", fontFamily: "sans-serif" }}>
      {/* نص السؤال */}
      <h3 style={{ fontSize: "16px", color: "#1e293b", marginBottom: "16px" }}>
        {questionData.question}
      </h3>

      {/* قائمة الخيارات */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {questionData.options.map((opt, idx) => {
          let bg = "#f8fafc";
          if (pickedIndex !== null) {
            if (idx === questionData.correctAnswerIndex) bg = "#dcfce7"; // أخضر للصحيح
            else if (idx === pickedIndex) bg = "#fee2e2"; // أحمر للخاطئ
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              style={{
                padding: "10px 14px",
                textAlign: "right",
                backgroundColor: bg,
                border: "1px solid #cbd5e1",
                borderRadius: "8px",
                cursor: pickedIndex === null ? "pointer" : "default",
                fontSize: "14px"
              }}
            >
              {idx + 1}. {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SimpleQuestionCard;`
      },
      advancedExample: {
        title: "مكون بطاقة سؤال احترافي مع شريط التقدم، وأصوات وتأثيرات التغذية الراجعة، والشرح التوضيحي",
        code: `import React, { useState } from "react";

// مكون بطاقة السؤال التفاعلية الاحترافية
export function AdvancedQuestionCard({
  question,
  currentIndex,
  totalQuestions,
  onNextQuestion
}) {
  // حالة الخيار المختار حالياً
  const [selectedIdx, setSelectedIdx] = useState(null);
  // حالة تثبيت الإجابة وإظهار التقييم
  const [isLocked, setIsLocked] = useState(false);

  // معالجة اختيار أحد الخيارات
  const handleSelectOption = (idx) => {
    if (isLocked) return;
    setSelectedIdx(idx);
    setIsLocked(true);
  };

  // تأكيد الانتقال للسؤال التالي
  const handleConfirmNext = () => {
    const isCorrect = selectedIdx === question.correctAnswerIndex;
    onNextQuestion(selectedIdx, isCorrect);
    // إعادة ضبط الحالات للسؤال التالي
    setSelectedIdx(null);
    setIsLocked(false);
  };

  // نسبة تقدم الاختبار الحالية
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="w-full max-w-xl mx-auto bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-xl">
      {/* شريط التقدم العلوي ورقم السؤال */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">
          <span>السؤال {currentIndex + 1} من {totalQuestions}</span>
          <span>{progressPercent}% مكتمل</span>
        </div>
        {/* شريط التقدم المرئي */}
        <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-sky-500 rounded-full transition-all duration-300"
            style={{ width: \`\${progressPercent}%\` }}
          />
        </div>
      </div>

      {/* نص السؤال الرئيسي */}
      <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-snug mb-6">
        {question.question}
      </h2>

      {/* شبكة الخيارات الأربعة */}
      <div className="space-y-3">
        {question.options.map((optionText, idx) => {
          // حساب الألوان بناءً على حالة التثبيت
          let containerClasses = "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 hover:border-sky-500";
          let badgeClasses = "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300";

          if (isLocked) {
            if (idx === question.correctAnswerIndex) {
              containerClasses = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 font-bold";
              badgeClasses = "bg-emerald-500 text-white";
            } else if (idx === selectedIdx) {
              containerClasses = "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100 font-bold";
              badgeClasses = "bg-rose-500 text-white";
            } else {
              containerClasses = "opacity-40 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/20";
            }
          }

          return (
            <button
              key={idx}
              type="button"
              disabled={isLocked}
              onClick={() => handleSelectOption(idx)}
              className={\`w-full p-4 rounded-2xl border-2 text-right text-sm flex items-center justify-between transition-all duration-200 \${containerClasses}\`}
            >
              <div className="flex items-center gap-3">
                <span className={\`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold transition \${badgeClasses}\`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span>{optionText}</span>
              </div>
              {/* أيقونة الحالة عند القفل */}
              {isLocked && idx === question.correctAnswerIndex && (
                <span className="text-emerald-600 text-base">✓</span>
              )}
              {isLocked && idx === selectedIdx && idx !== question.correctAnswerIndex && (
                <span className="text-rose-600 text-base">✕</span>
              )}
            </button>
          );
        })}
      </div>

      {/* مربع الشرح التوضيحي يظهر بعد تثبيت الإجابة */}
      {isLocked && (
        <div className="mt-6 p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-xs text-sky-900 dark:text-sky-200">
          <div className="font-bold flex items-center gap-1.5 mb-1 text-sky-800 dark:text-sky-300">
            <span>💡</span> توضيح الإجابة النموذجية:
          </div>
          <p className="leading-relaxed">{question.explanation}</p>
        </div>
      )}

      {/* زر المتابعة إلى السؤال التالي */}
      {isLocked && (
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={handleConfirmNext}
            className="px-6 py-3 rounded-2xl bg-slate-900 text-white dark:bg-sky-600 font-bold text-sm shadow-lg hover:opacity-90 transition flex items-center gap-2"
          >
            <span>{currentIndex + 1 === totalQuestions ? "عرض النتيجة النهائية" : "السؤال التالي"}</span>
            <span>←</span>
          </button>
        </div>
      )}
    </div>
  );
}`
      },
      outputExplanation: "يوضح هذا المكون نمط التغذية الراجعة الفورية (Immediate Feedback Pattern)؛ بمجرد نقر المستخدم يُقفل السؤال لمنع التلاعب، وتُبرز الإجابة الصحيحة باللون الأخضر والخاطئة بالأحمر، مع إظهار صندوق الشرح وزر الانتقال للسؤال التالي.",
      commonMistakes: [
        {
          wrong: "// السماح للمستخدم بتغيير إجابته بعد رؤية التلميح الأخضر للإجابة الصحيحة قبل الانتقال",
          correct: "// تجميد وتفعيل خاصية disabled لجميع الخيارات فور أول نقرة لحماية نزاهة النتيجة"
        }
      ],
      bestPractices: [
        "عرض حروف خيارات واضحة (A, B, C, D) بجانب نص الخيار لسهولة الإشارة والمتابعة",
        "توفير زر صريح للمتابعة بعد إظهار التغذية الراجعة حتى يتمكن المستخدم من قراءة الشرح براحته دون إجباره على وتيرة متسارعة",
        "تحديث شريط التقدم بسلاسة (CSS Transition) لتعزيز شعور الإنجاز المستمر"
      ],
      infographic: {
        title: "حالات بطاقة السؤال والتغذية الراجعة",
        nodes: [
          { label: "1. الحالة التفاعلية (Active)", detail: "أزرار الخيارات مفعلة وجاهزة للنقر" },
          { label: "2. تثبيت الإجابة (Locked)", detail: "تعطيل الأزرار فورياً لمنع تكرار النقر" },
          { label: "3. التغذية اللونية (Feedback)", detail: "أخضر للصحيح وأحمر للخاطئ مع أيقونات ✓ و ✕" },
          { label: "4. صندوق التوضيح والمتابعة", detail: "قراءة التعليل العلمي والنقر للمتابعة للسؤال التالي" }
        ]
      }
    },
    {
      id: "31.5.d",
      title: "حساب النتيجة وتتبع الإجابات الصحيحة والخاطئة (Score Tracking & Result Evaluation)",
      englishTerm: {
        term: "Score Evaluation & Metrics Calculation",
        pronunciation: "سكور إيفالويشن آند ميتريكس كالكوليشن",
        meaning: "تقييم النقاط وحساب المقاييس والإحصائيات"
      },
      description: "لا يقتصر تقييم جلسة الاختبار على مجرد عد الإجابات الصحيحة، بل يتطلب حساب مؤشرات إحصائية ثرية تمنح المستخدم تحليلاً شاملاً لأدائه؛ يشمل ذلك: حساب النسبة المئوية الموزونة الدقيقة (Percentage Score)، وتتبع عدد الإجابات الصحيحة والخاطئة والأسئلة التي انتهى وقتها دون إجابة (Timed-out Questions)، وتحديد متوسط الوقت المستغرق في الإجابة، وتصنيف مستوى المستخدم (مبتدئ، متوسط، خبير) بناءً على معايير محددة سلفاً.",
      analogy: "يشبه التقرير الفصلي للطالب الجامعي؛ لا يكتفي بعرض درجات المواد، بل يوضح المعدل التراكمي (GPA)، والنسبة المئوية العامة، ومرتبة الشرف، ونقاط القوة والضعف في مختلف المحاور.",
      whyItMatters: "يحول النتيجة الرقمية الجافة إلى تجربة تحفيزية ذات مغزى تزيد من رغبة المستخدم في التعلم وإعادة المحاولة لتحسين تقييمه.",
      syntax: `// دوال حساب النسبة المئوية والتصنيف
const calculatePercentage = (score, total) => Math.round((score / total) * 100);
const getRankBadge = (percent) => percent >= 80 ? "خبير 🏆" : percent >= 60 ? "جيد جداً ⭐" : "يحتاج للمزيد 📚";`,
      simpleExample: {
        title: "دالة حساب تقرير أداء جلسة الاختبار",
        code: `// دالة استخراج التقرير الإحصائي للاختبار
function evaluateQuizPerformance(totalQuestions, correctCount, timeSpentSeconds) {
  // حساب النسبة المئوية
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  // عدد الإجابات الخاطئة
  const incorrectCount = totalQuestions - correctCount;
  // تحديد شارة النجاح
  const isPassed = percentage >= 60;

  return {
    total: totalQuestions,
    correct: correctCount,
    incorrect: incorrectCount,
    percentage: percentage,
    isPassed: isPassed,
    averageTimePerQuestion: Math.round(timeSpentSeconds / totalQuestions)
  };
}

// تجربة حساب أداء اختبار من 10 أسئلة أجاب على 8 منها في 120 ثانية
const report = evaluateQuizPerformance(10, 8, 120);
console.log("تقرير الاختبار:", report);`
      },
      advancedExample: {
        title: "فئة إدارة التقييم المتقدمة مع حساب الإحصائيات التفصيلية وتوزيع الأداء",
        code: `// فئة متقدمة لتقييم وتحليل جلسة الاختبار
export class QuizEvaluator {
  // المشيد يستقبل الأسئلة وإجابات المستخدم
  constructor(questions = [], userAnswers = {}, totalElapsedSeconds = 0) {
    this.questions = questions;
    this.userAnswers = userAnswers;
    this.totalElapsedSeconds = totalElapsedSeconds;
  }

  // حساب التقرير النهائي الشامل
  generateComprehensiveReport() {
    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;
    const itemizedReview = [];

    this.questions.forEach((q) => {
      const selectedIndex = this.userAnswers[q.id];
      const isUnanswered = selectedIndex === undefined || selectedIndex === null;
      const isCorrect = !isUnanswered && selectedIndex === q.correctAnswerIndex;

      if (isUnanswered) {
        unansweredCount++;
      } else if (isCorrect) {
        correctCount++;
      } else {
        incorrectCount++;
      }

      // إضافة تفاصيل السؤال للمراجعة
      itemizedReview.push({
        questionId: q.id,
        questionText: q.question,
        userAnswerIndex: selectedIndex,
        userAnswerText: isUnanswered ? "لم تجب" : q.options[selectedIndex],
        correctAnswerIndex: q.correctAnswerIndex,
        correctAnswerText: q.options[q.correctAnswerIndex],
        isCorrect: isCorrect,
        explanation: q.explanation
      });
    });

    const totalQuestions = this.questions.length;
    const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    // تحديد الشارة والرسالة التقديرية
    let tier = "مبتدئ";
    let badgeEmoji = "🌱";
    let summaryMessage = "بداية جيدة! استمر في التعلم وراجع المفاهيم الأساسية.";

    if (percentage >= 90) {
      tier = "أسطوري (Master)";
      badgeEmoji = "👑";
      summaryMessage = "أداء استثنائي ومتقن للغاية! لديك إلمام كامل بالموضوع.";
    } else if (percentage >= 75) {
      tier = "متقدم (Advanced)";
      badgeEmoji = "🥇";
      summaryMessage = "أداء رائع جداً! استيعابك للمفاهيم ممتاز وتفصلك خطوات بسيطة عن القمة.";
    } else if (percentage >= 50) {
      tier = "جيد (Intermediate)";
      badgeEmoji = "🎯";
      summaryMessage = "مستوى جيد! لديك أساسيات متينة ولكن تحتاج إلى مراجعة بعض النقاط.";
    }

    return {
      totalQuestions,
      correctCount,
      incorrectCount,
      unansweredCount,
      percentage,
      tier,
      badgeEmoji,
      summaryMessage,
      timeSpentFormatted: \`\${Math.floor(this.totalElapsedSeconds / 60)} دقيقة و \${this.totalElapsedSeconds % 60} ثانية\`,
      itemizedReview
    };
  }
}

// اختبار الفئة
const evaluator = new QuizEvaluator(
  [{ id: "q1", question: "س1", options: ["أ", "ب"], correctAnswerIndex: 0, explanation: "..." }],
  { q1: 0 },
  45
);
console.log("النتيجة المحسوبة:", evaluator.generateComprehensiveReport().percentage + "%");`
      },
      outputExplanation: "توضح فئة QuizEvaluator كيفية بناء تقرير تعليمي شامل يفرز الإجابات إلى (صحيحة، خاطئة، ومتروكة)، ويصنف المستوى إلى درجات تقديرية ملهمة، ويجهز هيكل المراجعة المفصلة لكل سؤال.",
      commonMistakes: [
        {
          wrong: "// حساب النسبة المئوية عبر القسمة على الصفر في حال كانت مصفوفة الأسئلة فارغة",
          correct: "// فحص طول مصفوفة الأسئلة (totalQuestions > 0) قبل إجراء أي عملية قسمة لتفادي أخطاء NaN"
        }
      ],
      bestPractices: [
        "عرض النسبة المئوية الموزونة بجانب عدد الإجابات الصحيحة (مثال: 80% - 8 من 10) لمنح دلالة رقمية فورية",
        "التمييز بين الإجابة الخاطئة صراحة وبين السؤال الذي لم يُجب عليه بسبب نفاد الوقت",
        "توليد رسائل تقديرية دافئة تتغير ديناميكياً مع مستوى أداء المستخدم لتشجيعه على التطور"
      ],
      infographic: {
        title: "منظومة معايير تقييم الاختبار",
        nodes: [
          { label: "الأسئلة الصحيحة (Correct)", detail: "إضافة نقطة كاملة وتحديث شارة التفوق" },
          { label: "الأسئلة الخاطئة (Wrong)", detail: "تسجيل الخطأ مع إبراز الإجابة النموذجية" },
          { label: "الوقت المنقضي (Time)", detail: "حساب سرعة البديهة ومتوسط الإجابة" },
          { label: "الشارة والتقدير (Tier)", detail: "من مبتدئ 🌱 إلى متقدم 🥇 إلى أسطوري 👑" }
        ]
      }
    },
    {
      id: "31.5.e",
      title: "مؤقت زمني تنازلي لكل سؤال (Per-Question Countdown Timer)",
      englishTerm: {
        term: "Per-Question Countdown Timer & Expiration Handling",
        pronunciation: "بير كويستشن كاونت داون تايمر آند إكسبايريشن هاندلينج",
        meaning: "عداد تنازلي لكل سؤال وإدارة انتهاء الوقت المخصص"
      },
      description: "يضفي المؤقت الزمني التنازلي (Countdown Timer) طابع التحدي والإثارة على تطبيق الاختبارات، ويحاكي بيئة الاختبارات الحقيقية المقيدة بالزمن. يتطلب بناء المؤقت استخدام `useEffect` مع `setInterval` بمهلة ثانية واحدة، مع اتخاذ الاحتياطات الهندسية لمنع تسرب الذاكرة (Memory Leaks) عبر دالة التنظيف `clearInterval`. وعند وصول العداد إلى الصفر (0 ثانية)، يتم قفل السؤال تلقائياً، واعتبار إجابة المستخدم فارغة أو خاطئة، ثم الانتقال التلقائي للسؤال التالي مع تغيير لون شريط المؤقت إلى اللون الأحمر في الثواني الخمس الأخيرة.",
      analogy: "يشبه عداد الثواني في لعبة الشطرنج الخاطف أو قنبلة التحدي؛ تدق عقارب الساعة بهدوء، وعندما تقترب من الصفر تصبح الدقات أسرع ويتحول الضوء للأحمر لتنبيه اللاعب بسرعة اتخاذ قراره.",
      whyItMatters: "يعلم المطور كيفية التعامل الآمن مع المؤقتات الزمنية في دورة حياة مكونات React، وفهم دقة دالة التنظيف (Cleanup Function) لضمان عدم استمرار تشغيل المؤقت في الخلفية بعد مغادرة الصفحة.",
      syntax: `// نمط المؤقت الزمني التنازلي الآمن في React
useEffect(() => {
  if (timeLeft <= 0) {
    onTimeOut();
    return;
  }
  const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
  return () => clearInterval(timer);
}, [timeLeft, onTimeOut]);`,
      simpleExample: {
        title: "مكون عداد ثوانٍ تنازلي بسيط مع تنبيه الانتهاء",
        code: `import React, { useState, useEffect } from "react";

// مكون عداد ثوانٍ تنازلي
function SimpleCountdown({ initialSeconds = 15, onExpire }) {
  // حالة الثواني المتبقية
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    // التحقق من انتهاء الوقت
    if (seconds <= 0) {
      onExpire();
      return;
    }

    // إعداد المؤقت لتخفيض ثانية واحدة كل 1000 ميلي ثانية
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    // دالة التنظيف لحذف المؤقت عند تفكيك المكون
    return () => clearInterval(intervalId);
  }, [seconds, onExpire]);

  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "6px 12px",
      borderRadius: "20px",
      backgroundColor: seconds <= 5 ? "#fee2e2" : "#f1f5f9",
      color: seconds <= 5 ? "#b91c1c" : "#334155",
      fontWeight: "bold",
      fontSize: "14px"
    }}>
      <span>⏱️</span>
      <span>{seconds} ثانية</span>
    </div>
  );
}

export default SimpleCountdown;`
      },
      advancedExample: {
        title: "مؤقت تنازلي دائري متقدم (Circular SVG Progress Timer) مع تغيير ديناميكي للألوان ونبضات التحذير",
        code: `import React, { useState, useEffect, useRef } from "react";

// مكون مؤقت دائري ذكي يعتمد على رسوميات SVG المتحركة
export function CircularCountdownTimer({
  durationSeconds = 20,
  questionId,
  isPaused = false,
  onTimeExpired
}) {
  // حالة الثواني المتبقية
  const [timeLeft, setTimeLeft] = useState(durationSeconds);
  // مرجع لتخزين أحدث نسخة من دالة انتهاء الوقت لمنع إعادة الرندر غير الضرورية
  const expireCallbackRef = useRef(onTimeExpired);

  // تحديث المرجع دائماً
  useEffect(() => {
    expireCallbackRef.current = onTimeExpired;
  }, [onTimeExpired]);

  // إعادة ضبط المؤقت كلما تغير السؤال (تغير questionId)
  useEffect(() => {
    setTimeLeft(durationSeconds);
  }, [questionId, durationSeconds]);

  // تشغيل المؤقت التنازلي
  useEffect(() => {
    // إذا كان المؤقت متوقفاً مؤقتاً لا نفعل شيئاً
    if (isPaused) return;

    // التحقق من وصول العداد إلى الصفر
    if (timeLeft <= 0) {
      if (expireCallbackRef.current) {
        expireCallbackRef.current();
      }
      return;
    }

    // إنشاء المؤقت
    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    // تنظيف المؤقت
    return () => clearInterval(interval);
  }, [timeLeft, isPaused]);

  // حساب محيط الدائرة لنسبة التقدم
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (timeLeft / durationSeconds) * circumference;

  // تحديد اللون والنبض في الثواني الأخيرة
  const isUrgent = timeLeft <= 5;
  const strokeColor = isUrgent ? "#ef4444" : timeLeft <= 10 ? "#f59e0b" : "#0ea5e9";

  return (
    <div className={\`relative inline-flex items-center justify-center \${isUrgent ? "animate-pulse" : ""}\`}>
      <svg className="w-14 h-14 -rotate-90 transform" viewBox="0 0 52 52">
        {/* الدائرة الخلفية الرمادية */}
        <circle
          cx="26"
          cy="26"
          r={radius}
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          className="text-slate-100 dark:text-slate-700"
        />
        {/* الدائرة الأمامية الملونة المتحركة */}
        <circle
          cx="26"
          cy="26"
          r={radius}
          stroke={strokeColor}
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          className="transition-all duration-1000 ease-linear"
        />
      </svg>
      {/* رقم الثواني في منتصف الدائرة */}
      <span className={\`absolute text-xs font-black \${isUrgent ? "text-rose-500 scale-110" : "text-slate-700 dark:text-slate-200"}\`}>
        {timeLeft}s
      </span>
    </div>
  );
}`
      },
      outputExplanation: "يقدم هذا المؤقت تجربة بصرية فائقة عبر SVG دائري ينقص محيطه بسلاسة كل ثانية، ويتحول لونه إلى الأحمر مع حركة نبض تحذيرية (Pulse Animation) في الثواني الخمس الأخيرة، ويعيد ضبط نفسه تلقائياً عند الانتقال لسؤال جديد عبر مراقبة questionId.",
      commonMistakes: [
        {
          wrong: "// نسيان ربط إعادة ضبط المؤقت بتغير questionId، مما يجعل المؤقت يستمر في التناقص من قيمة السؤال السابق عند الانتقال",
          correct: "// استخدام useEffect يراقب questionId لإعادة تعيين الحالة (setTimeLeft(duration)) فور تغير السؤال"
        }
      ],
      bestPractices: [
        "استخدام مرجع useRef لتخزين دالة onTimeExpired لتفادي إعادة تشغيل المؤقت بسبب تغيير مرجع الدالة",
        "إيقاف المؤقت فورياً (Pause) بمجرد قيام المستخدم باختيار إجابته لمنحه وقتاً لقراءة الشرح دون ضغط زمني",
        "تطبيق حركة نبض أو صوت دقات ناعم في الثواني الأخيرة لجذب انتباه المستخدم دون إثارة توتر مفرط"
      ],
      infographic: {
        title: "دورة حياة المؤقت التنازلي لكل سؤال",
        nodes: [
          { label: "1. إعادة الضبط (Reset)", detail: "تصفير العداد إلى 20 ثانية مع كل سؤال جديد" },
          { label: "2. التناقص المستمر (Tick)", detail: "إنقاص ثانية كل 1000ms عبر setInterval الآمن" },
          { label: "3. منطقة التحذير (Urgent)", detail: "تحول اللون للأحمر والنبض في آخر 5 ثوانٍ" },
          { label: "4. نفاد الوقت (Expiry)", detail: "قفل السؤال تلقائياً والانتقال مع تسجيل خطأ" }
        ]
      }
    },
    {
      id: "31.5.f",
      title: "شاشة عرض النتيجة النهائية مع شارة التقييم (Final Score Screen & Badges)",
      englishTerm: {
        term: "Final Score Presentation & Achievement Badges",
        pronunciation: "فاينال سكور بريزنتيشن آند أتشيفمنت بادجز",
        meaning: "شاشة النتيجة النهائية وشارات الإنجاز والتقدير"
      },
      description: "تمثل شاشة النتيجة النهائية (Score Summary Screen) قمة الرحلة التحفيزية للمستخدم. تتطلب هذه الشاشة تصميماً احتفالياً ومبهجاً يعرض النسبة المئوية داخل دائرة تقييم بارزة، مع إظهار شارة الإنجاز التقديرية (مثل كأس التميز، أو وسام الإتقان)، وعرض بطاقات المقاييس الإحصائية التفصيلية (الإجابات الصحيحة، الخاطئة، والوقت الإجمالي المستغرق)، بالإضافة إلى أزرار واضحة تتيح: (1) مراجعة الإجابات خطوة بخطوة للتعلم من الأخطاء، أو (2) إعادة الاختبار من البداية لتحقيق نتيجة أفضل.",
      analogy: "تشبه منصة التتويج في السباقات الرياضية؛ يقف المتسابق وسط الهتاف، ويُعلق على صدره الميدالية المستحقة، وتُعرض أرقامه القياسية وزمنه الإجمالي على الشاشات الكبرى لتحفيزه على تحطيم رقمه في السباق القادم.",
      whyItMatters: "الخاتمة الإيجابية والمكافآت الرمزية (Gamification Badges) هي العامل الأساسي الذي يحول الاختبار من تجربة تقييم جافة إلى تجربة ألعاب تفاعلية تجعل المتعلم يرغب في تكرارها ومشاركتها مع أصدقائه.",
      syntax: `// مكون شاشة النتيجة
<div className="results-container">
  <ScoreCircle percentage={report.percentage} />
  <BadgeCard tier={report.tier} emoji={report.badgeEmoji} />
  <ActionButtons onReview={startReview} onRestart={restartQuiz} />
</div>`,
      simpleExample: {
        title: "مكون شاشة نتيجة مبسط يعرض الدرجة والنسبة وزر الإعادة",
        code: `import React from "react";

// مكون شاشة النتيجة البسيطة
function SimpleScoreScreen({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);
  const isPassed = percentage >= 60;

  return (
    <div style={{
      maxWidth: "400px",
      margin: "30px auto",
      padding: "24px",
      borderRadius: "16px",
      textAlign: "center",
      backgroundColor: "#ffffff",
      border: "1px solid #e2e8f0",
      boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
      fontFamily: "sans-serif"
    }}>
      <div style={{ fontSize: "48px", marginBottom: "8px" }}>
        {isPassed ? "🎉" : "📚"}
      </div>
      <h2 style={{ fontSize: "22px", color: "#0f172a", margin: "0 0 8px" }}>
        {isPassed ? "تهانينا! لقد اجتزت الاختبار" : "حاول مرة أخرى لتحسين نتيجتك"}
      </h2>
      <p style={{ color: "#64748b", fontSize: "14px", margin: "0 0 16px" }}>
        لقد أجبت على {score} من أصل {total} أسئلة بشكل صحيح.
      </p>
      <div style={{ fontSize: "36px", fontWeight: "bold", color: isPassed ? "#16a34a" : "#dc2626", marginBottom: "20px" }}>
        {percentage}%
      </div>
      <button
        onClick={onRestart}
        style={{
          padding: "10px 24px",
          backgroundColor: "#0284c7",
          color: "#ffffff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "14px"
        }}
      >
        إعادة الاختبار ↺
      </button>
    </div>
  );
}

export default SimpleScoreScreen;`
      },
      advancedExample: {
        title: "شاشة نتائج احترافية غنية بالرسوم الدائرية، والتحليلات الإحصائية، وشارات التميز التفاعلية",
        code: `import React from "react";

// مكون شاشة النتائج النهائية المتطورة
export function DetailedResultsScreen({ report, onReviewAnswers, onRestartQuiz }) {
  const { percentage, correctCount, incorrectCount, totalQuestions, tier, badgeEmoji, summaryMessage } = report;

  return (
    <div className="w-full max-w-xl mx-auto bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 shadow-2xl text-center">
      {/* الشارة والرمز التعبيري */}
      <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-4xl shadow-inner">
        {badgeEmoji}
      </div>

      {/* الرتبة التقديرية */}
      <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 mb-2">
        المستوى: {tier}
      </div>

      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2">
        اكتمل الاختبار بنجاح!
      </h2>

      {/* الرسالة التوجيهية */}
      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-8 leading-relaxed">
        {summaryMessage}
      </p>

      {/* الدائرة البيانية الكبرى للنسبة المئوية */}
      <div className="relative w-36 h-36 mx-auto mb-8 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-slate-100 dark:text-slate-700"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke={percentage >= 60 ? "#10b981" : "#f43f5e"}
            strokeWidth="8"
            strokeDasharray={264}
            strokeDashoffset={264 - (percentage / 100) * 264}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-3xl font-black text-slate-900 dark:text-white">{percentage}%</span>
          <span className="text-[10px] text-slate-400 font-semibold">الدرجة النهائية</span>
        </div>
      </div>

      {/* شبكة الإحصائيات الثلاثية */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {/* الإجابات الصحيحة */}
        <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60">
          <div className="text-xs text-emerald-700 dark:text-emerald-300 font-semibold">صحيحة</div>
          <div className="text-xl font-black text-emerald-900 dark:text-emerald-100 mt-1">{correctCount}</div>
        </div>
        {/* الإجابات الخاطئة */}
        <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60">
          <div className="text-xs text-rose-700 dark:text-rose-300 font-semibold">خاطئة</div>
          <div className="text-xl font-black text-rose-900 dark:text-rose-100 mt-1">{incorrectCount}</div>
        </div>
        {/* إجمالي الأسئلة */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 font-semibold">الإجمالي</div>
          <div className="text-xl font-black text-slate-900 dark:text-white mt-1">{totalQuestions}</div>
        </div>
      </div>

      {/* أزرار الإجراءات الرئيسية */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          type="button"
          onClick={onReviewAnswers}
          className="w-full sm:w-auto px-6 py-3 rounded-2xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition"
        >
          مراجعة الإجابات بالتفصيل 🔍
        </button>
        <button
          type="button"
          onClick={onRestartQuiz}
          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-lg transition"
        >
          إعادة المحاولة ↺
        </button>
      </div>
    </div>
  );
}`
      },
      outputExplanation: "تدمج هذه الشاشة بين التصميم الجمالي المريح والبيانات الإحصائية الدقيقة؛ حيث توفر للمستخدم مخططاً دائرياً لنسبته، وتفصيلاً بالأرقام لخياراته، مع زرين واضحين للمراجعة أو الإعادة.",
      commonMistakes: [
        {
          wrong: "// الاكتفاء بعرض رقم مجرد مثل 'نتيجتك 7' دون توضيح كم كان العدد الكلي للأسئلة أو النسبة المئوية",
          correct: "// دائماً اذكر النسبة المئوية، والعدد الكلي، والرتبة التقديرية، لتوفير معنى سياقي كامل للرقم"
        }
      ],
      bestPractices: [
        "استخدام ألوان ذات دلالة سيكولوجية إيجابية للنجاح (الأخضر والذهبي) دون إشعار المتعلم بالإحباط عند الخطأ",
        "تضمين زر 'مراجعة الإجابات' كخيار رئيسي لتحقيق الفائدة التعليمية القصوى من الأخطاء المرتكبة",
        "توفير إمكانية مشاركة النتيجة أو حفظها في السجل المحلي"
      ],
      infographic: {
        title: "تشريح شاشة النتائج والتتويج",
        nodes: [
          { label: "رمز الشارة (Badge)", detail: "أيقونة تعبيرية تمنح تقديراً شرفياً للمستخدم" },
          { label: "الدائرة البيانية (Score Radial)", detail: "مؤشر بصري بالنسبة المئوية الكلية" },
          { label: "شبكة الإحصاءات (Metrics)", detail: "الصحيحة، الخاطئة، والوقت المستغرق" },
          { label: "أزرار الحسم (Actions)", detail: "مراجعة بنك الأسئلة أو بدء دورة جديدة" }
        ]
      }
    },
    {
      id: "31.5.g",
      title: "إعادة الاختبار ومراجعة الإجابات النموذجية (Review Mode & Quiz Restart)",
      englishTerm: {
        term: "Review Mode & State Reinitialization",
        pronunciation: "ريفيو مود آند ستيت ري إنيشالايزيشن",
        meaning: "وضع المراجعة الشاملة وإعادة تهيئة الحالة الأولية"
      },
      description: "وضع المراجعة (Review Mode) هو المحطة التعليمية الأهم في تطبيقات الاختبارات؛ حيث ينتقل المستخدم إلى شاشة تستعرض جميع الأسئلة التي مر بها، موضحاً بجانب كل سؤال: الخيار الذي اختاره المستخدم (سواء كان صواباً أو خطأ)، والإجابة النموذجية الصحيحة، مع صندوق الشرح المعرفي لكل سؤال. كما تتطلب إعادة الاختبار (Quiz Restart) إعادة تهيئة الحالة الأولية (State Re-initialization) بشكل نظيف؛ متضمناً ذلك إعادة تصفير النقاط والمؤقتات، وإعادة خلط الأسئلة والخيارات لضمان عدم تكرار النمط ذاته.",
      analogy: "يشبه جلسة تصحيح أوراق الامتحان في الفصل الدراسي مع المعلم؛ حيث يستلم الطالب ورقته المصححة باللونين الأخضر والأحمر، ويستمع لشرح المعلم حول أسباب الخطأ في كل مسألة ليتجنبها في المرة القادمة.",
      whyItMatters: "بدون وضع المراجعة يفقد الاختبار نصف قيمته التعليمية؛ لأن المتعلم يظل جاهلاً بالسبب الحقيقي لخطئه، بينما المراجعة تحول الخطأ إلى لحظة تعلم حقيقية وراسخة.",
      syntax: `// تصفير الجلسة وبدء اختبار جديد
const handleRestart = () => {
  setQuestions(generateRandomizedQuiz(RAW_BANK));
  setSessionState(INITIAL_SESSION_STATE);
};`,
      simpleExample: {
        title: "مكون مراجعة إجابات مبسط يعرض الإجابات المختارة والصحيحة",
        code: `import React from "react";

// مكون مراجعة بسيط للأسئلة بعد انتهاء الاختبار
function SimpleReviewList({ questions, userAnswers, onBackToResults }) {
  return (
    <div style={{ maxWidth: "500px", margin: "20px auto", fontFamily: "sans-serif" }}>
      <button onClick={onBackToResults} style={{ marginBottom: "16px", cursor: "pointer" }}>
        ← العودة للنتيجة
      </button>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {questions.map((q, idx) => {
          const userChoice = userAnswers[q.id];
          const isCorrect = userChoice === q.correctAnswerIndex;

          return (
            <div
              key={q.id}
              style={{
                padding: "14px",
                borderRadius: "10px",
                border: \`2px solid \${isCorrect ? "#86efac" : "#fca5a5"}\`,
                backgroundColor: isCorrect ? "#f0fdf4" : "#fef2f2"
              }}
            >
              <div style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "6px" }}>
                {idx + 1}. {q.question}
              </div>
              <div style={{ fontSize: "12px", color: isCorrect ? "#15803d" : "#b91c1c" }}>
                إجابتك: {userChoice !== undefined ? q.options[userChoice] : "لم تجب"} {isCorrect ? "✓" : "✕"}
              </div>
              {!isCorrect && (
                <div style={{ fontSize: "12px", color: "#15803d", marginTop: "4px" }}>
                  الإجابة الصحيحة: {q.options[q.correctAnswerIndex]}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SimpleReviewList;`
      },
      advancedExample: {
        title: "تطبيق اختبار متكامل ومستقل بذاته (Self-Contained Quiz Engine) يجمع كافة مراحل الاختبار من البداية وحتى المراجعة",
        code: `import React, { useState, useEffect } from "react";

// بنك الأسئلة المدمج للاختبار التجريبي
const MINI_QUIZ_BANK = [
  {
    id: "q1",
    question: "أي من الهوكس التالية تستخدم لتخزين قيمة لا تسبب إعادة رندر عند تغيرها؟",
    options: ["useState", "useRef", "useMemo", "useCallback"],
    correctAnswerIndex: 1,
    explanation: "هوك useRef يعيد كائناً يحتوي خاصية current قابلة للتعديل دون إطلاق إعادة تصيير للمكون."
  },
  {
    id: "q2",
    question: "ما هي الفائدة الأساسية من المفتاح key عند تكرار القوائم في React؟",
    options: [
      "تلوين عناصر القائمة تلقائياً",
      "مساعدة خوارزمية المطابقة (Reconciliation) على تمييز العناصر بدقة",
      "تشفير بيانات العناصر في الذاكرة",
      "تسريع الاتصال بالخادم الخلفي"
    ],
    correctAnswerIndex: 1,
    explanation: "المفتاح key يمنح كل عنصر هوية فريدة ومستقرة تمكن React من معرفة أي العناصر أضيف أو حُذف أو عُدل بكفاءة."
  },
  {
    id: "q3",
    question: "متى يتم تنفيذ دالة التنظيف (Cleanup Function) الخاصة بـ useEffect؟",
    options: [
      "قبل تنفيذ التأثير التالي مباشرة وعند إلغاء تركيب المكون",
      "عند النقر على زر الفأرة فقط",
      "مرة واحدة فقط عند فتح المتصفح لأول مرة",
      "لا يتم تنفيذها إلا في حال حدوث خطأ برمجي"
    ],
    correctAnswerIndex: 0,
    explanation: "تُستدعى دالة التنظيف قبل إعادة تشغيل التأثير بقيم جديدة وأيضاً عند إزالة المكون من شجرة الـ DOM."
  }
];

// المحرك المتكامل للاختبار
export function SelfContainedQuizApp() {
  // مراحل التطبيق: START, RUNNING, RESULTS, REVIEW
  const [stage, setStage] = useState("START");
  // فهرس السؤال النشط
  const [currentIdx, setCurrentIdx] = useState(0);
  // إجابات المستخدم
  const [answers, setAnswers] = useState({});
  // عداد الثواني
  const [timer, setTimer] = useState(15);
  // قفل الخيار المحدد
  const [isLocked, setIsLocked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const currentQuestion = MINI_QUIZ_BANK[currentIdx];

  // تشغيل المؤقت التنازلي أثناء المرحلة RUNNING
  useEffect(() => {
    if (stage !== "RUNNING" || isLocked) return;

    if (timer <= 0) {
      // نفاد الوقت: تسجيل عدم الإجابة والانتقال
      handleLockAndProceed(null);
      return;
    }

    const interval = setInterval(() => setTimer(t => t - 1), 1000);
    return () => clearInterval(interval);
  }, [stage, isLocked, timer]);

  // بدء الاختبار من الصفر
  const handleStart = () => {
    setAnswers({});
    setCurrentIdx(0);
    setTimer(15);
    setIsLocked(false);
    setSelectedOption(null);
    setStage("RUNNING");
  };

  // قفل الإجابة
  const handlePickOption = (idx) => {
    if (isLocked) return;
    setSelectedOption(idx);
    setIsLocked(true);
  };

  // الانتقال للسؤال التالي أو إنهاء الاختبار
  const handleProceedNext = () => {
    const updatedAnswers = { ...answers, [currentQuestion.id]: selectedOption };
    setAnswers(updatedAnswers);

    if (currentIdx + 1 < MINI_QUIZ_BANK.length) {
      setCurrentIdx(i => i + 1);
      setTimer(15);
      setIsLocked(false);
      setSelectedOption(null);
    } else {
      setStage("RESULTS");
    }
  };

  // في حال انتهاء الوقت دون اختيار
  const handleLockAndProceed = (opt) => {
    setSelectedOption(opt);
    setIsLocked(true);
  };

  // حساب النتيجة
  const calculateScore = () => {
    let score = 0;
    MINI_QUIZ_BANK.forEach(q => {
      if (answers[q.id] === q.correctAnswerIndex) score++;
    });
    return score;
  };

  // 1. شاشة البداية
  if (stage === "START") {
    return (
      <div className="w-full max-w-lg mx-auto p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 text-center shadow-xl font-sans">
        <div className="text-5xl mb-4">🚀</div>
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">تحدي اختبار React السريع</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
          اختبر معرفتك في 3 أسئلة مفصلية حول خطافات ومفاهيم React. لديك 15 ثانية لكل سؤال!
        </p>
        <button
          onClick={handleStart}
          className="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-2xl shadow-lg transition"
        >
          ابدأ التحدي الآن
        </button>
      </div>
    );
  }

  // 2. شاشة السؤال النشط
  if (stage === "RUNNING") {
    return (
      <div className="w-full max-w-xl mx-auto p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl font-sans">
        <div className="flex justify-between items-center mb-4 text-xs font-bold text-slate-400">
          <span>السؤال {currentIdx + 1} من {MINI_QUIZ_BANK.length}</span>
          <span className={\`px-2.5 py-1 rounded-full \${timer <= 5 ? "bg-rose-100 text-rose-600 font-black animate-pulse" : "bg-slate-100 text-slate-700"}\`}>
            ⏱️ {timer} ثانية
          </span>
        </div>

        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-6">
          {currentQuestion.question}
        </h3>

        <div className="space-y-2 mb-6">
          {currentQuestion.options.map((opt, idx) => {
            let btnStyle = "border-slate-200 bg-slate-50 text-slate-700 hover:border-sky-500";
            if (isLocked) {
              if (idx === currentQuestion.correctAnswerIndex) btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-800 font-bold";
              else if (idx === selectedOption) btnStyle = "border-rose-500 bg-rose-50 text-rose-800 font-bold";
              else btnStyle = "opacity-40 border-slate-200 bg-slate-50";
            }
            return (
              <button
                key={idx}
                disabled={isLocked}
                onClick={() => handlePickOption(idx)}
                className={\`w-full p-3 text-right rounded-xl border text-xs flex justify-between items-center transition \${btnStyle}\`}
              >
                <span>{opt}</span>
                {isLocked && idx === currentQuestion.correctAnswerIndex && <span>✓</span>}
              </button>
            );
          })}
        </div>

        {isLocked && (
          <div className="flex justify-end">
            <button
              onClick={handleProceedNext}
              className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold shadow hover:bg-slate-800 transition"
            >
              {currentIdx + 1 === MINI_QUIZ_BANK.length ? "عرض النتيجة" : "التالي ←"}
            </button>
          </div>
        )}
      </div>
    );
  }

  // 3. شاشة النتيجة النهائية
  if (stage === "RESULTS") {
    const finalScore = calculateScore();
    const percent = Math.round((finalScore / MINI_QUIZ_BANK.length) * 100);

    return (
      <div className="w-full max-w-lg mx-auto p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 text-center shadow-xl font-sans">
        <div className="text-4xl mb-2">{percent >= 66 ? "🏆" : "📖"}</div>
        <h2 className="text-xl font-black text-slate-900 dark:text-white mb-2">النتيجة النهائية</h2>
        <div className="text-4xl font-extrabold text-sky-600 my-4">{percent}%</div>
        <p className="text-xs text-slate-500 mb-6">أجبت على {finalScore} من أصل {MINI_QUIZ_BANK.length} أسئلة صحيحة.</p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setStage("REVIEW")}
            className="px-4 py-2 border border-slate-300 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-50"
          >
            مراجعة الإجابات 🔍
          </button>
          <button
            onClick={handleStart}
            className="px-4 py-2 bg-sky-600 text-white rounded-xl text-xs font-bold hover:bg-sky-700"
          >
            إعادة الاختبار ↺
          </button>
        </div>
      </div>
    );
  }

  // 4. شاشة مراجعة الإجابات
  if (stage === "REVIEW") {
    return (
      <div className="w-full max-w-xl mx-auto p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl font-sans">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-black text-base text-slate-900 dark:text-white">مراجعة الإجابات النموذجية</h3>
          <button onClick={() => setStage("RESULTS")} className="text-xs text-sky-600 hover:underline">
            ← العودة للنتيجة
          </button>
        </div>

        <div className="space-y-4">
          {MINI_QUIZ_BANK.map((q, idx) => {
            const userPick = answers[q.id];
            const isCorrect = userPick === q.correctAnswerIndex;
            return (
              <div key={q.id} className={\`p-4 rounded-2xl border text-xs \${isCorrect ? "bg-emerald-50/60 border-emerald-200" : "bg-rose-50/60 border-rose-200"}\`}>
                <div className="font-bold text-slate-900 mb-2">{idx + 1}. {q.question}</div>
                <div className="mb-1">
                  إجابتك: <span className={\`font-bold \${isCorrect ? "text-emerald-700" : "text-rose-700"}\`}>
                    {userPick !== undefined && userPick !== null ? q.options[userPick] : "انتهى الوقت دون إجابة"}
                  </span>
                </div>
                {!isCorrect && (
                  <div className="text-emerald-700 font-bold mb-2">
                    الإجابة الصحيحة: {q.options[q.correctAnswerIndex]}
                  </div>
                )}
                <div className="text-[11px] text-slate-500 bg-white/70 p-2 rounded-lg mt-2">
                  💡 {q.explanation}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}`
      },
      outputExplanation: "يقدم هذا النموذج المستقل تجربة تطبيق كاملة وشاملة لجميع مراحل الاختبار: البداية التمهيدية، السؤال النشط مع عداد الثواني وتغذية الألوان، شاشة النتيجة الدائرية، وشاشة مراجعة الإجابات التفصيلية مع التغذية المعرفية.",
      commonMistakes: [
        {
          wrong: "// إعادة تشغيل الاختبار دون تصفير مصفوفة الإجابات answers أو فهرس السؤال currentIdx، مما يؤدي لبدء الاختبار من شاشة النتائج مجدداً",
          correct: "// تصفير جميع متغيرات الحالة (Answers, Index, Timer, Locked) بشكل شامل عند النقر على زر إعادة الاختبار"
        }
      ],
      bestPractices: [
        "عرض الشرح التوضيحي (Explanation) في وضع المراجعة لمساعدة المستخدم على استيعاب المفهوم وتصحيح المفهوم الخاطئ",
        "تمييز الأسئلة التي أجاب عليها المستخدم بشكل صحيح باللون الأخضر وتلك الخاطئة باللون الأحمر لسرعة المقارنة البصرية",
        "إتاحة زر سريع للعودة من شاشة المراجعة إلى شاشة النتائج في أي وقت"
      ],
      infographic: {
        title: "دورة المراجعة وإعادة التهيئة النظيفة",
        nodes: [
          { label: "شاشة النتيجة (Results)", detail: "عرض النسبة المئوية وخيار المراجعة" },
          { label: "وضع المراجعة (Review Mode)", detail: "استعراض الإجابات المختارة مقابل النموذجية مع الشرح" },
          { label: "إعادة التهيئة (Reset State)", detail: "تصفير المؤقت والنقاط والإجابات" },
          { label: "جلسة جديدة (Fresh Quiz)", detail: "خلط الأسئلة والخيارات لبدء تجربة جديدة عادلة" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-31.5-1",
      question: "لماذا نستخدم نمط آلة الحالة المنتهية (Finite State Machine) في بناء تطبيقات الاختبارات؟",
      options: [
        "لتشفير بيانات الأسئلة في خادم خارجي",
        "لضمان الانتقال المنظم والصارم بين شاشات الاختبار (بداية -> سؤال نشط -> نتائج -> مراجعة) ومنع تعارض الحالات",
        "لإلغاء الحاجة إلى استخدام CSS في تنسيق أزرار الخيارات",
        "لتقليل عدد مكونات React إلى مكون واحد فقط"
      ],
      correctAnswer: 1,
      explanation: "آلة الحالة (State Machine) تحدد الحالات المسموح بها للتطبيق وقواعد الانتقال بينها بدقة، مما يمنع حدوث أخطاء مثل ظهور شاشة النتائج قبل إكمال الأسئلة أو العبث بالإجابات بعد تأكيدها."
    },
    {
      id: "quiz-31.5-2",
      question: "ما هو الإجراء الضروري عند خلط خيارات السؤال عشوائياً (Shuffle Options)؟",
      options: [
        "تغيير نص السؤال الرئيسي ليطابق الترتيب الجديد",
        "حذف خيارين عشوائيين لتسهيل السؤال على المستخدم",
        "تحديث مؤشر الإجابة الصحيحة (correctAnswerIndex) ليعكس الموقع الجديد للإجابة الصحيحة بعد إعادة الترتيب",
        "تجميد مصفوفة الخيارات ومنع خلطها إطلاقاً في React"
      ],
      correctAnswer: 2,
      explanation: "بما أن الخلط يغير مواقع الخيارات في المصفوفة، يجب تحديث correctAnswerIndex لكي يشير إلى الموضع الجديد لنفس الإجابة الصحيحة دون تشويه نظام التقييم."
    },
    {
      id: "quiz-31.5-3",
      question: "لماذا يجب إعادة ضبط مؤقت الثواني عند تغير questionId في هوك useEffect؟",
      options: [
        "لكي يبدأ العداد التنازلي من مدته الكاملة (مثلاً 20 ثانية) مع كل سؤال جديد بدلاً من استكمال الثواني المتبقية من السؤال السابق",
        "لإجبار المتصفح على تنزيل بيانات الأسئلة من الإنترنت",
        "لأن React تمنع استخدام setInterval أكثر من مرة واحدة في الجلسة",
        "لتسريع سرعة معالج الحاسوب"
      ],
      correctAnswer: 0,
      explanation: "ربط إعادة تعيين المؤقت بـ questionId يضمن حصول كل سؤال على وقته الزمني المخصص كاملاً، بدلاً من تناقص الوقت بشكل تراكمي جائر."
    }
  ],
  exercise: {
    id: "exercise-31.5",
    title: "تمرين عملي: بناء محرك اختبار مصغر مع مؤقت تنازلي وحساب فوري للنقاط",
    description: "قم ببناء مكون React يحتوي على سؤالين، مع مؤقت تنازلي مدته 10 ثوانٍ لكل سؤال، وحساب فوري للإجابات الصحيحة، وعرض النتيجة كنسبة مئوية عند انتهاء الأسئلة مع زر لإعادة الاختبار.",
    hints: [
      "استخدم useState لفهرس السؤال، والنقاط، والوقت المتبقي، ومرحلة الاختبار",
      "استخدم useEffect مع setInterval لإدارة عداد الثواني مع دالة clearInterval",
      "عند وصول العداد إلى 0، انقل المستخدم للسؤال التالي تلقائياً"
    ],
    solution: `import React, { useState, useEffect } from "react";

const DEMO_QUESTIONS = [
  { q: "ما هي عاصمة مصر؟", opts: ["القاهرة", "الإسكندرية", "أسوان"], correct: 0 },
  { q: "كم عدد ألوان قوس قزح؟", opts: ["5", "7", "9"], correct: 1 }
];

export default function MiniQuizChallenge() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) return;
    if (timer <= 0) {
      handleNext(false);
      return;
    }
    const id = setInterval(() => setTimer(t => t - 1), 1000);
    return () => clearInterval(id);
  }, [timer, finished]);

  const handleNext = (isCorrect) => {
    if (isCorrect) setScore(s => s + 1);
    if (index + 1 < DEMO_QUESTIONS.length) {
      setIndex(i => i + 1);
      setTimer(10);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    const pct = Math.round((score / DEMO_QUESTIONS.length) * 100);
    return (
      <div style={{ padding: "20px", textAlign: "center", fontFamily: "sans-serif" }}>
        <h3>اكتمل التحدي!</h3>
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>النتيجة: {pct}%</p>
        <button onClick={() => { setIndex(0); setScore(0); setTimer(10); setFinished(false); }}>إعادة ↺</button>
      </div>
    );
  }

  const current = DEMO_QUESTIONS[index];
  return (
    <div style={{ maxWidth: "350px", margin: "auto", padding: "16px", border: "1px solid #ccc", borderRadius: "8px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <small>سؤال {index + 1} من {DEMO_QUESTIONS.length}</small>
        <small style={{ color: timer <= 3 ? "red" : "black" }}>⏱️ {timer}s</small>
      </div>
      <h4>{current.q}</h4>
      {current.opts.map((opt, i) => (
        <button
          key={i}
          onClick={() => handleNext(i === current.correct)}
          style={{ display: "block", width: "100%", margin: "6px 0", padding: "8px", textAlign: "right" }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}`
  },
  infographic: {
    title: "المخطط الهيكلي لمشروع تطبيق الاختبارات (Quiz Application Architecture)",
    nodes: [
      { label: "1. State Machine", detail: "آلة حالة محكمة: Start -> Question Runner -> Result Screen -> Review Mode" },
      { label: "2. Dataset & Shuffle", detail: "بنك أسئلة معياري مع خوارزمية Fisher-Yates لخلط الأسئلة والخيارات" },
      { label: "3. Countdown Timer", detail: "مؤقت SVG تنازلي لكل سؤال مع إعادة ضبط ذكية وتنبيه نبضي" },
      { label: "4. Immediate Feedback", detail: "تلوين أخضر/أحمر فوري مع تجميد الخيارات وشرح توضيحي" },
      { label: "5. Score & Review", detail: "حساب النسبة المئوية والرتب التقديرية ومراجعة مفصلة لكل سؤال" }
    ]
  }
};

