# Handoff Report: Milestone 5 (Complete PDF Book Generator & Test Failure Resolution)

**Agent**: Explorer 2 (`teamwork_explorer`)  
**Working Directory**: `e:\KD\lang\.agents\teamwork\explorer_m5_book_pdf_1`  
**Milestone**: Milestone 5 — Complete PDF Educational Book Generator & E2E Test Hardening  
**Target Files**:
- `e:\KD\lang\nodejs\src\components\book\BookViewModal.jsx`
- `e:\KD\lang\nodejs\tests\tier4_real_world\pdf_book_compilation.test.js`
- `e:\KD\lang\nodejs\tests\test_helper.js`
- `e:\KD\lang\nodejs\src\index.css`

---

## 1. Observation

### Direct Code and Runtime Observations

1. **`nodejs/src/components/book/BookViewModal.jsx` (Lines 9–14, 35–37, 54–57)**:
   ```javascript
   export default function BookViewModal({ isOpen, onClose, currentSection }) {
     ...
     if (!isOpen || !currentSection) return null;
     ...
     const allSubtopics = currentSection.topics ? currentSection.topics.flatMap(t => t.subtopics || []) : [];
     ...
     <p className="text-xs text-slate-400">
       {currentSection.title} • {allSubtopics.length} درساً تفصيلياً مع الإنفوجرافيك
     </p>
   ```
   *Finding*: The existing modal only renders the single `currentSection` passed as a prop. It does not compile all 23 sections, 126 topics, or 981 subtopics. It also mounts inline instead of using `createPortal(..., document.body)`, which leaves it vulnerable to clipping by parent overflow containers during print.

2. **`nodejs/tests/runner.js` Execution Output (Task-82)**:
   When running `node nodejs/tests/runner.js`:
   ```
   ======================================================================
    📊 E2E Test Suite Execution Summary
   ======================================================================
   Tier Name                              |  Total |  Passed |  Failed |  Pass %
   ---------------------------------------+--------+---------+---------+--------
   Tier 1: Feature Coverage               |    125 |     125 |       0 | 100.0%
   Tier 2: Boundary & Corner Cases        |    115 |     112 |       3 | 97.4%
   Tier 3: Cross-Feature Combinations     |     28 |      28 |       0 | 100.0%
   Tier 4: Real-World Scenarios           |      6 |       5 |       1 | 83.3%
   ---------------------------------------+--------+---------+---------+--------
   TOTAL                                  |    274 |     270 |       4 | 98.5%
   ```
   *Verbatim Error in `pdf_book_compilation.test.js`*:
   ```
   4. [Tier 4: Real-World Scenarios] Scenarios 4 & 5: Universal Infographics & PDF Book Compilation -> E2E.WORKLOAD.4: Universal infographic exploration, theme customization, and 4K PNG export pipeline
      Module "file:///E:/KD/lang/nodejs/src/data/roadmapRaw.json" needs an import attribute of "type: json"
   ```

3. **Node 24 JSON Import Behavior (`node -e "import('file:///e:/KD/lang/nodejs/src/data/roadmapRaw.json')"`):**
   ```
   TypeError [ERR_IMPORT_ATTRIBUTE_MISSING]: Module "file:///e:/KD/lang/nodejs/src/data/roadmapRaw.json" needs an import attribute of "type: json"
       at validateAttributes (node:internal/modules/esm/assert:110:15)
       at defaultLoadSync (node:internal/modules/esm/load:163:3)
       code: 'ERR_IMPORT_ATTRIBUTE_MISSING'
   ```

4. **`nodejs/tests/test_helper.js` (`safeImport`, Lines 227–254)**:
   ```javascript
   export async function safeImport(srcPath) {
     const fullPath = path.isAbsolute(srcPath) ? srcPath : path.resolve(PROJECT_ROOT, srcPath);
     if (!fs.existsSync(fullPath)) { ... }
     if (fullPath.endsWith('.jsx')) { ... }
     return import(pathToFileURL(fullPath).href);
   }
   ```
   *Finding*: Line 253 executes standard ESM dynamic import `import(pathToFileURL(fullPath).href)` without the required Node 24 `{ with: { type: 'json' } }` attribute.

5. **`nodejs/src/data/roadmapRaw.json` Structure vs Test Assumptions**:
   `src/data/roadmapRaw.json` has schema:
   ```json
   {
     "title": "خريطة الطريق الشاملة لتعلم Node.js من الصفر إلى الاحتراف",
     "description": "...",
     "sections": [
       {
         "id": 1,
         "title": "القسم الأول: أساسيات البرمجة وتطوير الويب",
         "englishTitle": "Web Development Fundamentals",
         "mainIndices": [
           {
             "title": "مقدمة في تطوير الويب",
             "subIndices": [ { "title": "ما هو تطوير الويب؟" }, ... ]
           }
         ]
       }
     ]
   }
   ```
   *Finding*: Root is an object with a `.sections` array (not a direct array). Sections contain `mainIndices` and `subIndices`, whereas in `src/data/sections/section1.js` to `section23.js`, the generated chunks contain `topics` and `subtopics`. `E2E.WORKLOAD.4` does:
   ```javascript
   const rawMod = await safeImport('src/data/roadmapRaw.json');
   const sections = rawMod.default || rawMod;
   assert.equal(sections.length, 23);
   sections.forEach(s => s.topics.forEach(t => t.subtopics.forEach(sub => ...)));
   ```
   This assumes `sections` is an array and contains `s.topics` and `t.subtopics`.

6. **All 23 Section Chunks Benchmark**:
   Tested loading all 23 section modules (`src/data/sections/section1.js` .. `section23.js`):
   - Loading all 23 sections via `Promise.all` executes in **151 ms**.
   - Curriculum totals: Exactly **23 sections**, **126 topics**, and **981 subtopics**.
   - `npm.cmd --prefix nodejs run build` compiles with code 0 (`✓ built in 3.49s`).

---

## 2. Logic Chain

1. **Why `E2E.WORKLOAD.4` in `pdf_book_compilation.test.js` fails**:
   - `pdf_book_compilation.test.js` imports `src/data/roadmapRaw.json` using `safeImport('src/data/roadmapRaw.json')`.
   - In Node 24 (v24.21.0), dynamic ESM imports of JSON files require an explicit import attribute: `import(url, { with: { type: "json" } })`.
   - Because `safeImport` in `nodejs/tests/test_helper.js` does not intercept `.json` files and lacks the `with: { type: 'json' }` attribute, Node 24 throws `TypeError [ERR_IMPORT_ATTRIBUTE_MISSING]`.
   - Additionally, once JSON is parsed, `roadmapRaw.json` has `{ title, description, sections: [...] }`. `rawMod.default` is the root object, so `(rawMod.default || rawMod).length` evaluates to `undefined`, and `sections.forEach` fails unless extracted from `rawMod.default.sections`.
   - Furthermore, `roadmapRaw.json` sections contain `mainIndices` / `subIndices`, not `topics` / `subtopics`.

2. **Why `BookViewModal.jsx` needs a multi-section compilation architecture**:
   - Milestone 5 and Requirement R4 specify: "توليد وتوفير كتاب PDF متكامل وعالي الجودة يجمع كافة أقسام المنهاج الـ 23 مع بطاقات الإنفوجرافيك التوضيحية والشروحات التفصيلية والجداول المرجعية، مع تنسيق صفحات احترافي باللغة العربية ودعم فهرس المحتويات وإمكانية تنزيله بنقرة واحدة من لوحة التحكم."
   - The current `BookViewModal.jsx` accepts only `currentSection` and renders only that single section (~4–7 topics, 25–40 subtopics).
   - In `src/data/sections/index.js`, `fetchSectionData(sectionId)` dynamically loads and in-memory caches all 23 sections in ~151 ms.
   - Therefore, `BookViewModal.jsx` must asynchronously compile all 23 sections upon open, offering:
     a) Dual scope toggle: "📚 المنهاج الكامل (23 قسماً • 981 درساً)" (default) and "📖 القسم الحالي" ({currentSection?.title}).
     b) Complete Table of Contents (فهرس المحتويات الشامل) indexing all 23 sections and 126 topics with page numbers and smooth anchor navigation (`#section-${sec.id}`).
     c) Cover Page with dark cyberpunk styling on screen and clean high-contrast black-on-white on print.
     d) Section chapters with Section Summary, Golden Rules, Cheat Sheet table, Mini-Project, and all Topics/Subtopics (definitions, analogies, why, CodeBlock, InfographicCard, common mistakes, best practices).
     e) A4 page breaks: `page-break-after: always;` / `break-after: page;` for covers, TOC, and section dividers, with `page-break-inside: avoid;` for subtopics.
     f) Fallback and vector printing: dedicated `Printer` button invoking `window.print()` and `Download` button calling `downloadBookAsPdf`.

---

## 3. Caveats

1. **DOM Size during Full 23-Section Render**:
   - Compiling all 981 lessons simultaneously into the DOM is memory-intensive for `html2canvas` (a canvas over 30,000px high will hit browser memory ceilings).
   - The implementation must cleanly provide browser vector printing (`window.print()`) which does not rasterize the DOM to a giant bitmap and produces crisp, vector-sharp PDF text.
2. **Backward Compatibility**:
   - `App.jsx` passes `currentSection` to `BookViewModal`. The component must continue to accept `currentSection` and maintain full backward compatibility while loading all 23 sections in the background.

---

## 4. Conclusion & Surgical Implementation Plan

### Fix Part 1: Resolve Node 24 Test Failure

#### 1. Update `nodejs/tests/test_helper.js`
In `safeImport` (lines 236–254), intercept `.json` files:
```javascript
  if (fullPath.endsWith('.json')) {
    const raw = fs.readFileSync(fullPath, 'utf-8');
    const parsed = JSON.parse(raw);
    const rawSections = Array.isArray(parsed) ? parsed : (parsed.sections || []);
    const normalizedSections = rawSections.map(s => ({
      ...s,
      topics: (s.topics || s.mainIndices || []).map(t => ({
        ...t,
        subtopics: (t.subtopics || t.subIndices || []).map(sub => typeof sub === 'string' ? { title: sub } : sub)
      }))
    }));
    return {
      default: normalizedSections,
      sections: normalizedSections,
      raw: parsed,
      ...parsed
    };
  }
```

#### 2. Update `nodejs/tests/tier4_real_world/pdf_book_compilation.test.js`
In `E2E.WORKLOAD.4` (lines 14–30), handle both `.json` import attributes and normalize topics/mainIndices:
```javascript
    // 1. Open Infographic Gallery, query 981 lessons
    let rawData;
    try {
      const rawMod = await safeImport('src/data/roadmapRaw.json');
      rawData = rawMod.default || rawMod;
    } catch {
      const rawFile = path.resolve(SRC_ROOT, 'data/roadmapRaw.json');
      rawData = JSON.parse(fs.readFileSync(rawFile, 'utf-8'));
    }
    const sections = Array.isArray(rawData) ? rawData : (rawData.sections || []);
    assert.equal(sections.length, 23);

    // 2. Search for "Event Loop" in gallery
    const searchQuery = 'Event Loop';
    let matchedCard = null;
    sections.forEach(s => {
      const topics = s.topics || s.mainIndices || [];
      topics.forEach(t => {
        const subtopics = t.subtopics || t.subIndices || [];
        subtopics.forEach(sub => {
          if (sub.title.includes(searchQuery) || (sub.englishTitle && sub.englishTitle.includes(searchQuery))) {
            matchedCard = sub;
          }
        });
      });
    });
    assert.ok(matchedCard, 'Should locate Event Loop lesson card in gallery');
```

---

### Fix Part 2: Surgical Replacement for `BookViewModal.jsx`

File: `nodejs/src/components/book/BookViewModal.jsx`

#### Complete Component Code Specification:
```jsx
// src/components/book/BookViewModal.jsx
// كتاب خريطة طريق Node.js التعليمي الشامل (23 قسماً • 126 موضوعاً • 981 درساً)
// متوافق مع نظام الطباعة الورقية A4 وVector PDF والتصفح الداكن في الشاشة (Dark Cyberpunk)

import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  Download, 
  Printer, 
  BookOpen, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  Search, 
  FileText, 
  Terminal, 
  ShieldCheck, 
  Code2, 
  BookmarkCheck,
  Compass
} from 'lucide-react';
import { downloadBookAsPdf } from '../../utils/exportPdf.js';
import { useToast } from '../../context/UiFeedbackContext.jsx';
import { fetchSectionData, ROADMAP_SECTIONS } from '../../data/sections/index.js';
import InfographicCard from '../infographic/InfographicCard.jsx';
import CodeBlock from '../lesson/CodeBlock.jsx';

export default function BookViewModal({ isOpen, onClose, currentSection }) {
  const bookRef = useRef(null);
  const showToast = useToast();

  const [downloading, setDownloading] = useState(false);
  const [scope, setScope] = useState('all'); // 'all' (23 sections) | 'current' (single section)
  const [allSections, setAllSections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [searchFilter, setSearchFilter] = useState('');
  const [activeSectionId, setActiveSectionId] = useState(1);

  // تحميل جميع الأقسام الـ 23 بشكل متوازي عند فتح النافذة
  useEffect(() => {
    let isMounted = true;
    if (isOpen && allSections.length === 0) {
      setLoading(true);
      setLoadedCount(0);
      const total = ROADMAP_SECTIONS.length;
      
      Promise.all(
        ROADMAP_SECTIONS.map(async (sec) => {
          try {
            const data = await fetchSectionData(sec.id);
            if (isMounted) {
              setLoadedCount(prev => prev + 1);
            }
            return data;
          } catch (err) {
            console.error(`Error loading section ${sec.id}:`, err);
            return null;
          }
        })
      ).then(results => {
        if (isMounted) {
          const valid = results.filter(Boolean).sort((a, b) => a.id - b.id);
          setAllSections(valid);
          setLoading(false);
        }
      });
    }
    return () => { isMounted = false; };
  }, [isOpen]);

  if (!isOpen) return null;

  // تحديد مصفوفة الأقسام المعروضة حسب النطاق المختار
  const sectionsToRender = scope === 'current' && currentSection 
    ? [currentSection] 
    : (allSections.length > 0 ? allSections : (currentSection ? [currentSection] : []));

  // إحصائيات المحتوى المعروض
  const totalTopicsCount = sectionsToRender.reduce((sum, s) => sum + (s.topics?.length || 0), 0);
  const totalSubtopicsCount = sectionsToRender.reduce((sum, s) => {
    return sum + (s.topics ? s.topics.reduce((tSum, t) => tSum + (t.subtopics?.length || 0), 0) : 0);
  }, 0);

  // إجراء تنزيل ملف PDF
  const handleDownloadPdf = async () => {
    setDownloading(true);
    showToast("جاري تجهيز وتوليد كتاب الـ PDF...", "info", 4000);
    try {
      const scopeLabel = scope === 'all' ? 'المنهاج_الكامل_23_قسما' : `القسم_${currentSection?.id || 'المحدد'}`;
      const fileName = `كتاب_خريطة_طريق_Nodejs_${scopeLabel}.pdf`;
      await downloadBookAsPdf(bookRef.current, fileName);
      showToast("تم توليد وتحميل كتاب الـ PDF بنجاح! 📚", "success");
    } catch {
      showToast("تعذر التصدير المباشر عبر المحاكي، جاري فتح نافذة الطباعة المتجهية كبديل فائق الجودة", "warning");
      window.print();
    } finally {
      setDownloading(false);
    }
  };

  // إجراء الطباعة المتجهية المباشرة عبر المتصفح
  const handlePrint = () => {
    window.print();
  };

  // التمرير السلس إلى قسم محدد
  const scrollToSection = (secId) => {
    setActiveSectionId(secId);
    const targetEl = document.getElementById(`book-sec-${secId}`);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const modalContent = (
    <div 
      className="fixed inset-0 z-[99998] w-screen h-screen min-h-screen bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto print:fixed print:inset-0 print:w-full print:h-auto print:bg-white print:overflow-visible print:p-0 print:m-0 print:z-auto"
      dir="rtl"
    >
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-6xl h-[94vh] sm:h-[92vh] flex flex-col shadow-2xl overflow-hidden print:bg-white print:border-none print:shadow-none print:w-full print:max-w-none print:h-auto print:rounded-none print:overflow-visible text-slate-100">
        
        {/* ======================================================== */}
        {/* شريط الإجراءات والتحكم العلوي للنافذة (مخفي أثناء الطباعة) */}
        {/* ======================================================== */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 bg-slate-950 border-b border-slate-800 no-print shrink-0 gap-3">
          
          {/* عنوان ومعلومات الكتاب */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-slate-950 flex items-center justify-center font-bold shadow-lg shadow-emerald-500/20 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-extrabold text-sm sm:text-base text-white flex items-center gap-2 truncate">
                كتاب Node.js التعليمي الشامل
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-normal hidden sm:inline">
                  2026 Edition • A4 Print
                </span>
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-400 truncate">
                {scope === 'all' 
                  ? `المنهاج المتكامل: 23 قسماً • ${totalTopicsCount} موضوعاً • ${totalSubtopicsCount} درساً مع الأكواد والإنفوجرافيك`
                  : `${currentSection?.title || 'القسم المحدد'} • ${totalSubtopicsCount} درساً تفصيلياً`
                }
              </p>
            </div>
          </div>

          {/* تبديل النطاق وأزرار التصدير */}
          <div className="flex items-center flex-wrap gap-2">
            
            {/* محدد نطاق الكتاب */}
            <div className="flex items-center bg-slate-800/80 p-0.5 rounded-xl border border-slate-700 text-xs">
              <button
                onClick={() => setScope('all')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  scope === 'all' 
                    ? 'bg-emerald-500 text-slate-950 shadow-sm' 
                    : 'text-slate-300 hover:text-white'
                }`}
                title="تجميع وطباعة المنهاج كاملاً بكافة أقسامه الـ 23"
              >
                📚 المنهاج الكامل (23)
              </button>
              {currentSection && (
                <button
                  onClick={() => setScope('current')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    scope === 'current' 
                      ? 'bg-emerald-500 text-slate-950 shadow-sm' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                  title="عرض وطباعة محتوى القسم الحالي فقط"
                >
                  📖 القسم الحالي
                </button>
              )}
            </div>

            {/* قائمة الانتقال السريع للأقسام */}
            {scope === 'all' && (
              <select
                value={activeSectionId}
                onChange={(e) => scrollToSection(Number(e.target.value))}
                className="bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold px-2.5 py-1.5 rounded-xl cursor-pointer focus:outline-none focus:border-emerald-500 hidden md:block"
                title="الانتقال المباشر لأي قسم"
              >
                {ROADMAP_SECTIONS.map((s) => (
                  <option key={s.id} value={s.id}>
                    قسم {s.id}: {s.title.slice(0, 28)}...
                  </option>
                ))}
              </select>
            )}

            {/* زر الطباعة المتجهية */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold px-3 py-1.5 sm:py-2 rounded-xl border border-slate-700 transition-all cursor-pointer"
              title="طباعة متجهية عالية الدقة للمستند أو حفظه كـ PDF عبر المتصفح"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">طباعة</span>
            </button>

            {/* زر تحميل PDF */}
            <button
              onClick={handleDownloadPdf}
              disabled={downloading || loading}
              className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-lg shadow-emerald-600/20 transition-all cursor-pointer disabled:opacity-50"
              title="توليد وتحميل ملف PDF متكامل"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloading ? "جاري التوليد..." : "تحميل PDF"}</span>
            </button>

            {/* زر إغلاق النافذة */}
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer mr-1"
              title="إغلاق النافذة"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* مؤشر حالة التحميل التراكمي في حال جاري تجميع الأقسام */}
        {loading && (
          <div className="bg-emerald-950/40 border-b border-emerald-500/20 px-6 py-2 flex items-center justify-between text-xs text-emerald-300 no-print">
            <span className="flex items-center gap-2">
              <span className="animate-spin">⏳</span>
              جاري تجهيز وتجميع فصول الكتاب الـ 23 في الذاكرة... ({loadedCount} من 23 قسماً)
            </span>
            <div className="w-36 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 transition-all duration-300"
                style={{ width: `${(loadedCount / 23) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* جسم ومحتوى الكتاب القابل للتمرير والطباعة والتصدير       */}
        {/* ======================================================== */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-10 bg-slate-950 font-sans print:p-0 print:m-0 print:overflow-visible print:bg-white text-slate-900 print:text-slate-950">
          <div 
            ref={bookRef}
            className="max-w-4xl mx-auto space-y-12 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-12 shadow-2xl text-slate-100 print:bg-white print:border-none print:shadow-none print:p-0 print:m-0 print:text-slate-900"
          >
            
            {/* ---------------------------------------------------- */}
            {/* 1. صفحة غلاف الكتاب الفخمة (Page 1)                   */}
            {/* ---------------------------------------------------- */}
            <div className="min-h-[580px] flex flex-col justify-between p-8 sm:p-12 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white rounded-3xl border border-slate-800 text-center print-page-break print:bg-white print:text-slate-900 print:border-none shadow-2xl">
              <div className="pt-4 space-y-4">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-extrabold px-4 py-1.5 rounded-full mb-3 shadow-inner">
                  <span>🟢</span>
                  <span>خريطة طريق Node.js الشاملة • الإصدار الاحترافي المعتمد 2026</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black leading-tight text-white print:text-slate-950">
                  كتاب Node.js الشامل وهندسة الباك إند
                </h1>
                
                <h2 className="text-lg sm:text-2xl font-bold text-emerald-400 print:text-emerald-700 font-mono">
                  من الصفر إلى الاحتراف (From Zero to Production Architecture)
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 print:text-slate-700 max-w-2xl mx-auto leading-relaxed pt-2">
                  مرجع تعليمي هندسي متكامل يغطي 23 قسماً تخصصياً، 126 موضوعاً رئيسياً، و981 درساً مشروحاً خطوة بخطوة باللغة العربية، مع أمثلة وتشبيهات من الحياة اليومية، أكواد برمجية مع تعليق على كل سطر، بطاقات إنفوجرافيك معمارية، جداول مرجعية سريعة، ومشاريع تطبيقية حقيقية.
                </p>

                {/* شارات إحصائيات المنهاج */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-2xl mx-auto text-xs">
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 print:border-slate-300 print:bg-slate-50">
                    <div className="text-xl font-black text-emerald-400 font-mono">23</div>
                    <div className="text-slate-400 text-[11px]">قسماً تخصصياً</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 print:border-slate-300 print:bg-slate-50">
                    <div className="text-xl font-black text-teal-400 font-mono">126</div>
                    <div className="text-slate-400 text-[11px]">موضوعاً محورياً</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 print:border-slate-300 print:bg-slate-50">
                    <div className="text-xl font-black text-cyan-400 font-mono">981</div>
                    <div className="text-slate-400 text-[11px]">درساً بيداغوجياً</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 print:border-slate-300 print:bg-slate-50">
                    <div className="text-xl font-black text-amber-400 font-mono">100%</div>
                    <div className="text-slate-400 text-[11px]">عربي مشروح بالكامل</div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-800/80 print:border-slate-300 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 print:text-slate-600 gap-2">
                <span>إعداد: منصة خريطة طريق Node.js التفاعلية الاحترافية</span>
                <span>تاريخ التصدير: {new Date().toLocaleDateString('ar-EG')}</span>
              </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* 2. فهرس المحتويات الشامل (Table of Contents)          */}
            {/* ---------------------------------------------------- */}
            <div className="print-page-break space-y-6 pt-4">
              <div className="flex items-center justify-between border-b-2 border-emerald-500 pb-3">
                <h2 className="text-xl sm:text-2xl font-black text-white print:text-slate-950 flex items-center gap-2">
                  <Layers className="w-6 h-6 text-emerald-400" />
                  فهرس محتويات المنهاج التعليمي
                </h2>
                <span className="text-xs text-slate-400 print:text-slate-600 font-mono">
                  {sectionsToRender.length} فصول معتمدة
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sectionsToRender.map((sec, idx) => (
                  <div 
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/70 hover:bg-slate-800/50 print:bg-white print:border-slate-300 transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-mono text-emerald-400 font-bold">فصل {sec.id}</span>
                        <span className="text-[10px] text-slate-500 font-mono">صفحة {idx + 2}</span>
                      </div>
                      <h4 className="font-bold text-sm text-slate-100 print:text-slate-900 leading-snug">
                        {sec.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 print:text-slate-600 font-mono mt-0.5">
                        {sec.englishTitle}
                      </p>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-slate-800/80 print:border-slate-200 flex items-center justify-between text-[11px] text-slate-400">
                      <span>{sec.topics?.length || 0} موضوعات</span>
                      <span className="text-emerald-400 font-mono font-semibold">
                        {sec.topics ? sec.topics.reduce((sum, t) => sum + (t.subtopics?.length || 0), 0) : 0} درساً
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* 3. سرد كافة الأقسام والدروس والإنفوجرافيكس          */}
            {/* ---------------------------------------------------- */}
            {sectionsToRender.map((sec) => (
              <div 
                key={sec.id} 
                id={`book-sec-${sec.id}`}
                className="print-page-break space-y-8 pt-8"
              >
                {/* ترويسة وبانر بداية القسم */}
                <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 border border-emerald-500/30 p-6 rounded-3xl text-white print:bg-slate-100 print:text-slate-900 print:border-slate-300">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full font-bold">
                      الفصل {sec.number || sec.id} • {sec.badge || 'تخصصي'}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{sec.englishTitle}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black mt-1 text-white print:text-slate-950">
                    {sec.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 print:text-slate-700 mt-2 leading-relaxed">
                    {sec.description}
                  </p>
                </div>

                {/* ملخص القسم والقواعد الذهبية */}
                {sec.summary && (
                  <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/80 print:bg-white print:border-slate-300 space-y-4 print-avoid-break">
                    <h3 className="text-base font-extrabold text-emerald-400 print:text-emerald-800 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      ملخص الفصل والقواعد الذهبية:
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 print:text-slate-700 leading-relaxed">
                      {sec.summary.overview}
                    </p>
                    
                    {sec.summary.goldenRules && sec.summary.goldenRules.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {sec.summary.goldenRules.map((gr, grIdx) => (
                          <div key={grIdx} className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 print:bg-slate-50 print:border-slate-200 text-xs">
                            <b className="text-emerald-300 print:text-emerald-900 block mb-1">
                              ✓ {gr.title}
                            </b>
                            <p className="text-slate-400 print:text-slate-600 text-[11px] leading-relaxed">
                              {gr.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* البطاقة المرجعية السريعة (Cheat Sheet) */}
                {sec.cheatSheet && (sec.cheatSheet.entries || sec.cheatSheet.items) && (
                  <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/80 print:bg-white print:border-slate-300 space-y-3 print-avoid-break">
                    <h3 className="text-sm font-bold text-teal-400 print:text-teal-800 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      {sec.cheatSheet.title || `البطاقة المرجعية السريعة (Cheat Sheet)`}
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-right text-xs border border-slate-800 print:border-slate-300 border-collapse">
                        <thead>
                          <tr className="bg-slate-900 print:bg-slate-100 text-slate-200 print:text-slate-900">
                            <th className="p-2.5 border border-slate-800 print:border-slate-300 font-bold w-1/4">التصنيف</th>
                            <th className="p-2.5 border border-slate-800 print:border-slate-300 font-bold w-1/3">الأمر / الصيغة البرمجية</th>
                            <th className="p-2.5 border border-slate-800 print:border-slate-300 font-bold">الوظيفة والشرح</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(sec.cheatSheet.entries || sec.cheatSheet.items || []).map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-slate-950 print:bg-white" : "bg-slate-900/60 print:bg-slate-50"}>
                              <td className="p-2 border border-slate-800 print:border-slate-300 font-bold text-emerald-400 print:text-emerald-800">{row.category}</td>
                              <td className="p-2 border border-slate-800 print:border-slate-300 font-mono text-cyan-300 print:text-cyan-800" dir="ltr">{row.commandOrSyntax || row.syntax || row.command}</td>
                              <td className="p-2 border border-slate-800 print:border-slate-300 text-slate-300 print:text-slate-700">{row.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* سرد موضوعات ودروس القسم */}
                {sec.topics && sec.topics.map((topic, tIdx) => (
                  <div key={topic.id || tIdx} className="space-y-6 pt-4">
                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                      <span className="text-[11px] font-mono text-emerald-400 font-bold">
                        الموضوع {topic.id}
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-white print:text-slate-950 mt-0.5">
                        {topic.title}
                      </h3>
                      <p className="text-xs text-slate-400 print:text-slate-600 mt-1">
                        {topic.description}
                      </p>
                    </div>

                    {/* دروس ومفاهيم الموضوع */}
                    {topic.subtopics && topic.subtopics.map((sub, sIdx) => (
                      <div 
                        key={sub.id || sIdx}
                        className="p-6 rounded-2xl border border-slate-800/80 bg-slate-950/70 print:bg-white print:border-slate-300 print-avoid-break space-y-4 shadow-sm"
                      >
                        <div className="flex items-center justify-between border-b border-slate-800/60 print:border-slate-200 pb-3">
                          <div>
                            <span className="text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                              الدرس {sub.id}
                            </span>
                            <h4 className="text-lg font-bold text-white print:text-slate-950 mt-1">
                              {sub.title}
                            </h4>
                          </div>
                          <span className="text-xs text-slate-500 font-mono">
                            {sub.englishTitle}
                          </span>
                        </div>

                        {/* التعريف المبسط */}
                        {sub.definition && (
                          <div className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
                            <b className="text-emerald-400 print:text-emerald-800">📖 التعريف الأساسي: </b>
                            {sub.definition}
                          </div>
                        )}

                        {/* التشبيه الحياتي */}
                        {sub.analogy && (
                          <div className="p-4 rounded-xl bg-amber-950/20 border-r-4 border-amber-500 text-xs sm:text-sm text-amber-200 print:bg-amber-50 print:text-amber-950 leading-relaxed">
                            <b className="text-amber-400 print:text-amber-800">💡 مثال وتشبيه من الحياة اليومية: </b>
                            {sub.analogy}
                          </div>
                        )}

                        {/* لماذا نحتاجه */}
                        {sub.why && (
                          <div className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
                            <b className="text-teal-400 print:text-teal-800">❓ لماذا نحتاجه والمشكلة التي يحلها: </b>
                            {sub.why}
                          </div>
                        )}

                        {/* كود عملي نموذجي مشروح باللغة العربية فوق كل سطر */}
                        {sub.simpleCode && (
                          <div className="my-3">
                            <div className="text-xs font-bold text-slate-300 print:text-slate-800 mb-1 flex items-center gap-1.5">
                              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                              <span>الكود العملي المشروح (مع تعليق عربي فوق كل سطر):</span>
                            </div>
                            <CodeBlock 
                              code={sub.simpleCode} 
                              title={`شفرة: ${sub.title}`} 
                              language="javascript" 
                            />
                          </div>
                        )}

                        {/* بطاقة الإنفوجرافيك المرجعية */}
                        {sub.infographic && (
                          <div className="my-4">
                            <InfographicCard subtopic={sub} />
                          </div>
                        )}

                        {/* الأخطاء الشائعة */}
                        {sub.commonMistakes && sub.commonMistakes.length > 0 && (
                          <div className="bg-rose-950/20 border border-rose-500/20 print:bg-rose-50 print:border-rose-200 p-4 rounded-xl my-2 text-xs">
                            <h5 className="font-bold text-rose-400 print:text-rose-800 mb-2">تنبيهات وأخطاء شائعة:</h5>
                            {sub.commonMistakes.map((cm, cIdx) => (
                              <p key={cIdx} className="text-slate-300 print:text-slate-700 leading-relaxed mb-1">
                                <span className="text-rose-400 print:text-rose-700 font-semibold">✕ الخطأ: </span>{cm.wrong} — <span className="text-emerald-400 print:text-emerald-700 font-semibold">✓ الصواب: </span>{cm.right}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}

            {/* ---------------------------------------------------- */}
            {/* 4. خاتمة الكتاب وحقوق الملكية                       */}
            {/* ---------------------------------------------------- */}
            <div className="text-center pt-10 border-t-2 border-slate-800 print:border-slate-300 text-xs text-slate-400 print:text-slate-600 print-page-break space-y-2">
              <p className="font-bold text-emerald-400 print:text-emerald-800 text-sm">
                تم بحمد الله اكتمال منهاج خريطة طريق Node.js الاحترافية الشاملة.
              </p>
              <p>23 قسماً • 126 موضوعاً رئيسياً • 981 درساً تفصيلياً مع الإنفوجرافيك وكود البرمجة.</p>
              <p className="mt-2 text-slate-500 print:text-slate-400">
                منصة خريطة طريق Node.js © 2026 - جميع الحقوق محفوظة للمتعلمين والمطورين.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
```

---

### Fix Part 3: Print CSS Enhancement in `nodejs/src/index.css`

Add to `nodejs/src/index.css` (inside or around line 154 `@media print`):
```css
/* تنسيقات الطباعة لتوليد كتاب الـ PDF فائق الجودة */
@media print {
  body {
    background-color: #ffffff !important;
    color: #0f172a !important;
  }
  
  .no-print, button {
    display: none !important;
  }

  .print-page-break,
  .page-break,
  .page-break-after {
    page-break-after: always;
    break-after: page;
  }

  .print-avoid-break {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  @page {
    size: A4 portrait;
    margin: 12mm 15mm;
  }
}
```

---

## 5. Verification Method

To independently verify the implementation:

1. **Verify E2E Test Suite Pass**:
   Run from project root or `nodejs`:
   ```powershell
   node nodejs/tests/runner.js
   ```
   *Expected Result*: All 274 tests pass, including:
   - `Tier 4: Scenarios 4 & 5: Universal Infographics & PDF Book Compilation` (E2E.WORKLOAD.4 and E2E.WORKLOAD.5).
   - Exit code: 0 (or only remaining non-milestone memory test tolerances).

2. **Verify Target Milestone 5 Test**:
   Run:
   ```powershell
   node -e "import('./nodejs/tests/runner.js').then(() => import('./nodejs/tests/tier4_real_world/pdf_book_compilation.test.js'))"
   ```
   *Expected Result*: Scenario 4 & 5 pass with 0 errors.

3. **Verify Clean Production Build**:
   Run:
   ```powershell
   npm.cmd --prefix nodejs run build
   ```
   *Expected Result*: `vite build` completes with 0 errors (`✓ built in ~3.5s`), outputting clean AOT chunks for all 23 sections.
