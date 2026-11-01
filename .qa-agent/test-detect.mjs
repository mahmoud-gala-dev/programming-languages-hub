import { SECTION_1 } from '../react/src/data/sections/section1/index.js';

function detectDiagramType(subtopic) {
  if (!subtopic) return 'universal-engine';

  const id = (subtopic.id || '').toLowerCase();
  const title = (subtopic.title || '').toLowerCase();
  const eng = (subtopic.englishTitle || '').toLowerCase();

  // 1. المقارنات الثنائية الصريحة (Comparison Diagrams)
  if (
    !title.includes('vs code') && !eng.includes('vs code') &&
    (
      title.includes('الفرق بين') || 
      title.includes('مقارنة') || 
      /\bvs\b/i.test(eng) || 
      eng.includes('difference between') ||
      (title.includes('frontend') && title.includes('backend')) ||
      (title.includes('http') && title.includes('https')) ||
      (title.includes('csr') && title.includes('ssr'))
    )
  ) {
    return 'comparison';
  }

  // 2. شبكة الاتصال والخادم والعميل (Client-Server & Network Protocols)
  if (
    id === '1.1.c' || id === '1.1.d' ||
    title.includes('عمل المتصفح والخادم') || 
    title.includes('http وhttps') ||
    title.includes('بروتوكول') ||
    (eng.includes('browser and server') || eng.includes('http'))
  ) {
    return 'client-server';
  }

  // 3. ثلاثي الويب (HTML / CSS / JavaScript)
  if (
    id.startsWith('1.2.') || 
    id.startsWith('1.3.') || 
    title.includes('html') || 
    title.includes('css') || 
    title.includes('javascript') || 
    title.includes('نموذج الصندوق') || 
    title.includes('flexbox') || 
    title.includes('grid') || 
    title.includes('العناصر الدلالية') ||
    title.includes('المحددات') ||
    title.includes('التموضع')
  ) {
    return 'web-trio';
  }

  // 4. شجرة الـ DOM والـ Virtual DOM
  if (
    title.includes('virtual dom') || 
    title.includes('vdom') || 
    title.includes('diffing') || 
    title.includes('reconciliation') || 
    title.includes('شجرة dom') ||
    eng.includes('dom')
  ) {
    return 'dom-tree';
  }

  // 5. المكونات، JSX، وتدفق البيانات
  if (
    title.includes('props') || 
    title.includes('مكون') || 
    title.includes('jsx') || 
    eng.includes('component') || 
    eng.includes('props') ||
    eng.includes('jsx')
  ) {
    return 'component-flow';
  }

  // 6. خطافات React ودورة الحياة
  if (
    title.includes('hook') || 
    title.includes('useeffect') || 
    title.includes('usestate') || 
    title.includes('دورة حياة') || 
    title.includes('حالة') || 
    eng.includes('hook') || 
    eng.includes('lifecycle') || 
    eng.includes('state')
  ) {
    return 'hooks-lifecycle';
  }

  // 7. مسار التدفق والتنفيذ المتسلسل
  if (
    subtopic.executionFlow && 
    (title.includes('مسار') || title.includes('تدفق') || title.includes('كيفية') || title.includes('rendering') || title.includes('csr') || title.includes('spa'))
  ) {
    return 'pipeline-flow';
  }

  // 8. المحرك المفهومي المداري الديناميكي الشامل
  return 'universal-engine';
}

const subs = SECTION_1.topics.flatMap(t => t.subtopics);
const counts = {};
subs.forEach(s => {
  const type = detectDiagramType(s);
  counts[type] = (counts[type] || 0) + 1;
  console.log(`${s.id} -> [${type.padEnd(16)}] | ${s.title}`);
});
console.log('\nSummary counts:', counts);
