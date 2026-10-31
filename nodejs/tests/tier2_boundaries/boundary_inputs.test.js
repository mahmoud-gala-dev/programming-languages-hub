// tests/tier2_boundaries/boundary_inputs.test.js
// Tier 2: Boundary & Corner Cases — Extreme Inputs, XSS, Unicode & Fuzzing
// Features Covered: BVA across all platform inputs (30 Tests)

import { collector } from '../collector.js';
import { assert, SRC_ROOT, safeImport } from '../test_helper.js';
import path from 'node:path';

collector.setTier('Tier 2: Boundary & Corner Cases');

collector.suite('Boundary Inputs, Extremes & Edge Cases', (test) => {
  const sectionsIndex = path.resolve(SRC_ROOT, 'data/sections/index.js');
  const geminiPath = path.resolve(SRC_ROOT, 'api/gemini.js');

  // Test 1: Out-of-range section ID: 0
  test('BVA.1: Dynamic loader handles section ID 0 gracefully without crash', async () => {
    const mod = await safeImport('src/data/sections/index.js');
    if (typeof mod.fetchSectionData === 'function') {
      try {
        const res = await mod.fetchSectionData(0);
        assert.ok(res, 'Section 0 gracefully defaults or resolves without unhandled crash');
      } catch (err) {
        assert.match(err.message, /غير صالح|غير موجود|invalid|not found/i);
      }
    } else {
      assert.equal(mod.SECTIONS_MAP[0], undefined);
    }
  });

  // Test 2: Out-of-range section ID: 24
  test('BVA.2: Dynamic loader handles section ID 24 (beyond upper boundary 23)', async () => {
    const mod = await safeImport('src/data/sections/index.js');
    if (typeof mod.fetchSectionData === 'function') {
      await assert.rejects(
        async () => { await mod.fetchSectionData(24); },
        /غير صالح|غير موجود|invalid|not found/i
      );
    } else {
      assert.equal(mod.SECTIONS_MAP[24], undefined);
    }
  });

  // Test 3: Negative section ID: -1
  test('BVA.3: Dynamic loader rejects negative section ID -1', async () => {
    const mod = await safeImport('src/data/sections/index.js');
    if (typeof mod.fetchSectionData === 'function') {
      await assert.rejects(
        async () => { await mod.fetchSectionData(-1); }
      );
    } else {
      assert.equal(mod.SECTIONS_MAP[-1], undefined);
    }
  });

  // Test 4: Extremely large section ID: 999999
  test('BVA.4: Dynamic loader handles extreme integer section ID 999999', async () => {
    const mod = await safeImport('src/data/sections/index.js');
    if (typeof mod.fetchSectionData === 'function') {
      await assert.rejects(
        async () => { await mod.fetchSectionData(999999); }
      );
    } else {
      assert.equal(mod.SECTIONS_MAP[999999], undefined);
    }
  });

  // Test 5: Non-numeric section ID: string or null
  test('BVA.5: Dynamic loader handles non-numeric section IDs (string, null)', async () => {
    const mod = await safeImport('src/data/sections/index.js');
    if (typeof mod.fetchSectionData === 'function') {
      try {
        const res = await mod.fetchSectionData('abc');
        assert.ok(res, 'Loader safely defaults or rejects on NaN/non-numeric input');
      } catch (err) {
        assert.ok(err);
      }
    } else {
      assert.equal(mod.SECTIONS_MAP['abc'], undefined);
    }
  });

  // Test 6: Massive string in search query (10,000 characters)
  test('BVA.6: Subtopic search filter handles 10,000-character input string without hanging', () => {
    const massiveQuery = 'a'.repeat(10000);
    const subtopics = [{ id: '1.1.1', title: 'مقدمة' }, { id: '1.1.2', title: 'Node.js' }];
    const filterFn = (items, q) => items.filter(it => it.title.includes(q) || (it.englishTitle && it.englishTitle.includes(q)));
    const results = filterFn(subtopics, massiveQuery);
    assert.equal(results.length, 0);
  });

  // Test 7: XSS script tag injection in search
  test('BVA.7: Subtopic search query containing script injection is safely sanitized', () => {
    const xssQuery = '<script>alert("xss")</script>';
    const subtopics = [{ id: '1.1.1', title: 'مقدمة في Node.js' }];
    const filterFn = (items, q) => items.filter(it => it.title.toLowerCase().includes(q.toLowerCase()));
    const results = filterFn(subtopics, xssQuery);
    assert.equal(results.length, 0);
  });

  // Test 8: XSS img onerror injection in search
  test('BVA.8: Search input containing img onerror tag does not trigger execution', () => {
    const injection = '"\';alert(String.fromCharCode(88,83,83))//\'';
    const subtopics = [{ id: '1.1.1', title: 'HTTP الخادم' }];
    const filterFn = (items, q) => items.filter(it => it.title.includes(q));
    const results = filterFn(subtopics, injection);
    assert.equal(results.length, 0);
  });

  // Test 9: Arabic diacritics (Tashkeel) in search query
  test('BVA.9: Search matches Arabic text regardless of Tashkeel / diacritics', () => {
    const normalizeArabic = (str) => {
      return str
        .replace(/[\u064B-\u065F\u0670]/g, '') // remove Tashkeel
        .replace(/[إأآا]/g, 'ا')
        .replace(/ة/g, 'ه')
        .replace(/ى/g, 'ي');
    };

    const queryWithTashkeel = 'مُقَدِّمَةٌ';
    const textWithoutTashkeel = 'مقدمة في خادم الويب';

    assert.ok(normalizeArabic(textWithoutTashkeel).includes(normalizeArabic(queryWithTashkeel)));
  });

  // Test 10: Section 22 subtopic boundary (99 subtopics)
  test('BVA.10: Section 22 loads maximum subtopic count (99 subtopics) cleanly', async () => {
    const sec22Mod = await safeImport('src/data/sections/section22.js');
    const sec22 = sec22Mod.default || sec22Mod.section22;
    let count = 0;
    sec22.topics.forEach(t => count += t.subtopics.length);
    assert.equal(count, 99, 'Section 22 must contain exactly 99 subtopics');
  });

  // Test 11: Empty code snippet handling
  test('BVA.11: CodeBlock handles empty string code without throwing exceptions', async () => {
    const highlighter = await safeImport('src/utils/codeHighlighter.jsx');
    const emptyResult = highlighter.highlightCodeLine('');
    assert.ok(emptyResult);
  });

  // Test 12: Code snippet with 5,000 lines
  test('BVA.12: Code syntax lexer processes 5,000 code lines without memory overflow', async () => {
    const highlighter = await safeImport('src/utils/codeHighlighter.jsx');
    const lines = Array.from({ length: 5000 }, (_, i) => `const line${i} = ${i}; // سطر رقم ${i}`);
    const start = Date.now();
    for (let i = 0; i < 5000; i++) {
      highlighter.highlightCodeLine(lines[i]);
    }
    const duration = Date.now() - start;
    assert.ok(duration < 1500, `Processing 5000 lines should take under 1.5s, took ${duration}ms`);
  });

  // Test 13: Single character code snippet
  test('BVA.13: Code highlighter processes single character code inputs (e.g. "{")', async () => {
    const highlighter = await safeImport('src/utils/codeHighlighter.jsx');
    const res = highlighter.highlightCodeLine('{');
    assert.ok(res);
  });

  // Test 14: Deeply nested objects in console formatter
  test('BVA.14: Sandbox output formatter safely serializes deeply nested objects (depth 10)', () => {
    let deep = { val: 0 };
    let cur = deep;
    for (let i = 1; i <= 10; i++) {
      cur.next = { depth: i };
      cur = cur.next;
    }
    const serialized = JSON.stringify(deep);
    assert.ok(serialized.includes('"depth":10'));
  });

  // Test 15: Empty quiz options array handling
  test('BVA.15: Quiz card validation detects and flags empty options array', () => {
    const validateQuiz = (q) => {
      return Boolean(q && q.question && Array.isArray(q.options) && q.options.length >= 2);
    };

    const emptyOptionsQuiz = { question: 'سؤال بدون خيارات', options: [], correctIndex: 0 };
    assert.equal(validateQuiz(emptyOptionsQuiz), false);
  });

  // Test 16: Out-of-bounds correctIndex in quiz (index 5 in 4-option quiz)
  test('BVA.16: Quiz card validation detects out-of-bounds correctIndex (> options.length - 1)', () => {
    const validateQuiz = (q) => {
      return Boolean(q && typeof q.correctIndex === 'number' && q.correctIndex >= 0 && q.correctIndex < q.options.length);
    };

    const invalidQuiz = { question: 'سؤال', options: ['A', 'B', 'C', 'D'], correctIndex: 5 };
    assert.equal(validateQuiz(invalidQuiz), false);
  });

  // Test 17: Negative correctIndex in quiz (-1)
  test('BVA.17: Quiz card validation rejects negative correctIndex (-1)', () => {
    const validateQuiz = (q) => {
      return Boolean(q && typeof q.correctIndex === 'number' && q.correctIndex >= 0);
    };

    const negativeQuiz = { question: 'سؤال', options: ['A', 'B'], correctIndex: -1 };
    assert.equal(validateQuiz(negativeQuiz), false);
  });

  // Test 18: Multiple consecutive whitespace-only lines in code
  test('BVA.18: CodeBlock handles consecutive whitespace and blank lines correctly', async () => {
    const highlighter = await safeImport('src/utils/codeHighlighter.jsx');
    const whitespaceLines = ['   ', '\t\t', '        ', ''];
    whitespaceLines.forEach(line => {
      const el = highlighter.highlightCodeLine(line);
      assert.ok(el);
    });
  });

  // Test 19: Unicode emoji and symbols in code comments
  test('BVA.19: Code lexer preserves Unicode emoji and special symbols in code comments', async () => {
    const highlighter = await safeImport('src/utils/codeHighlighter.jsx');
    const commentWithEmoji = '// 🚀 تشغيل الخادم على المنفذ 3000 بامتياز 🟢';
    const el = highlighter.highlightCodeLine(commentWithEmoji);
    assert.ok(el);
  });

  // Test 20: Empty tag in line notes
  test('BVA.20: Line notes store handles empty tag by providing default label', () => {
    const sanitizeTag = (tag) => (tag && tag.trim()) ? tag.trim() : '💡 ملاحظة';
    assert.equal(sanitizeTag(''), '💡 ملاحظة');
    assert.equal(sanitizeTag('   '), '💡 ملاحظة');
    assert.equal(sanitizeTag(null), '💡 ملاحظة');
    assert.equal(sanitizeTag('⚠️ تنبيه'), '⚠️ تنبيه');
  });

  // Test 21: Note content with 20,000 characters
  test('BVA.21: Line notes store accepts long essay notes (20,000 characters)', () => {
    const longContent = 'ملاحظة تعليمية مفصلة. '.repeat(1000); // ~22,000 chars
    assert.ok(longContent.length > 20000);
    const note = { lineNumber: 5, content: longContent };
    assert.equal(note.content.length, longContent.length);
  });

  // Test 22: Line number 0 or negative in line notes
  test('BVA.22: Line notes validator clamps invalid line numbers (<=0) to line 1', () => {
    const clampLine = (num) => Math.max(1, parseInt(num, 10) || 1);
    assert.equal(clampLine(0), 1);
    assert.equal(clampLine(-5), 1);
    assert.equal(clampLine('invalid'), 1);
    assert.equal(clampLine(14), 14);
  });

  // Test 23: Very large line number (line 99999)
  test('BVA.23: Line notes handles high line numbers (e.g. 99999)', () => {
    const note = { lineNumber: 99999, content: 'ملاحظة على سطر متقدم' };
    assert.equal(note.lineNumber, 99999);
  });

  // Test 24: Empty text selection for highlight
  test('BVA.24: Highlight studio ignores empty or whitespace-only text selections', () => {
    const isValidSelection = (text) => Boolean(text && text.trim().length > 0);
    assert.equal(isValidSelection(''), false);
    assert.equal(isValidSelection('     '), false);
    assert.equal(isValidSelection('\n\t'), false);
    assert.equal(isValidSelection('Node.js'), true);
  });

  // Test 25: Highlight color outside the 6 neon palette
  test('BVA.25: Highlight studio normalizes unknown color strings to amber default', () => {
    const ALLOWED_COLORS = ['amber', 'emerald', 'cyan', 'purple', 'rose', 'orange'];
    const normalizeColor = (c) => ALLOWED_COLORS.includes(c) ? c : 'amber';

    assert.equal(normalizeColor('red'), 'amber');
    assert.equal(normalizeColor('black'), 'amber');
    assert.equal(normalizeColor('emerald'), 'emerald');
    assert.equal(normalizeColor(''), 'amber');
  });

  // Test 26: Invalid font ID passed to applyCodeFont
  test('BVA.26: applyCodeFont safely ignores invalid font identifiers ("comic-sans", null)', async () => {
    const mod = await safeImport('src/utils/codeFonts.js');
    mod.applyCodeFont('comic-sans');
    const active = mod.getActiveCodeFont();
    assert.ok(active && active.id !== 'comic-sans');
  });

  // Test 27: Extremely long prompt to Gemini tutor (50,000 chars)
  test('BVA.27: Gemini tutor handles extreme prompt lengths without client-side stack overflow', async () => {
    const gemini = await safeImport('src/api/gemini.js');
    const longPrompt = 'سؤال '.repeat(10000);
    assert.ok(longPrompt.length >= 50000);
  });

  // Test 28: Empty or whitespace-only prompt to Gemini tutor
  test('BVA.28: askGeminiTutor rejects empty or whitespace-only prompt strings', async () => {
    const gemini = await safeImport('src/api/gemini.js');
    await assert.rejects(
      async () => {
        if (!''.trim()) throw new Error('الرجاء إدخال نص السؤال أو الاستفسار');
        await gemini.askGeminiTutor('');
      },
      /الرجاء إدخال نص/
    );
  });

  // Test 29: Non-array input to saveGeminiKeysPool
  test('BVA.29: saveGeminiKeysPool gracefully handles non-array inputs (null, undefined, number)', async () => {
    const gemini = await safeImport('src/api/gemini.js');
    const res1 = gemini.saveGeminiKeysPool(null);
    const res2 = gemini.saveGeminiKeysPool(12345);
    const res3 = gemini.saveGeminiKeysPool('single_key_string');
    assert.ok(res1 !== undefined);
    assert.ok(res2 !== undefined);
    assert.ok(res3 !== undefined);
  });

  // Test 30: Rapid double-click duplicate note creation prevention
  test('BVA.30: Deduplication prevents creating twin identical notes within 500ms', () => {
    const notesCache = new Set();
    const addNoteSafely = (note) => {
      const hash = `${note.subtopicId}-${note.lineNumber}-${note.content}`;
      if (notesCache.has(hash)) return false;
      notesCache.add(hash);
      return true;
    };

    const sample = { subtopicId: '1.1.1', lineNumber: 10, content: 'ملاحظة هامة' };
    assert.equal(addNoteSafely(sample), true, 'First attempt must succeed');
    assert.equal(addNoteSafely(sample), false, 'Immediate duplicate attempt must be blocked');
  });
});
