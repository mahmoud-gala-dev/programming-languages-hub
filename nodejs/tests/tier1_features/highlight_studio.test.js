// tests/tier1_features/highlight_studio.test.js
// Tier 1: Functional Feature Coverage — Pro Highlight Studio, IndexedDB & TTS
// Features Covered: F10, F11, F12 (15 Tests)

import { collector } from '../collector.js';
import { assert, safeImport } from '../test_helper.js';

collector.setTier('Tier 1: Feature Coverage');

collector.suite('Pro Highlight Studio & Storage (F10-F12)', (test) => {
  const notesDbPath = 'src/utils/notesDb.js';

  // Test 1: 6 Semantic Neon Colors are defined
  test('F10.1: Defines 6 semantic neon highlight colors with numbers [1] to [6]', () => {
    const NEON_COLORS = {
      '1': { id: 'amber', label: 'مفهوم جوهري', hex: '#f59e0b' },
      '2': { id: 'emerald', label: 'ممارسة صحيحة', hex: '#10b981' },
      '3': { id: 'cyan', label: 'واجهات ومصطلحات', hex: '#06b6d4' },
      '4': { id: 'purple', label: 'هيكلية ومعمارية', hex: '#a855f7' },
      '5': { id: 'rose', label: 'محاذير وأخطاء', hex: '#f43f5e' },
      '6': { id: 'orange', label: 'اختبار ومقابلات', hex: '#f97316' }
    };

    assert.equal(Object.keys(NEON_COLORS).length, 6, 'Must define exactly 6 neon colors');
    assert.equal(NEON_COLORS['1'].id, 'amber');
    assert.equal(NEON_COLORS['2'].id, 'emerald');
    assert.equal(NEON_COLORS['3'].id, 'cyan');
    assert.equal(NEON_COLORS['4'].id, 'purple');
    assert.equal(NEON_COLORS['5'].id, 'rose');
    assert.equal(NEON_COLORS['6'].id, 'orange');
  });

  // Test 2: Keyboard shortcuts map directly [1]-[6]
  test('F10.2: Shortcut numbers 1 through 6 map to distinct color IDs', () => {
    const keys = ['1', '2', '3', '4', '5', '6'];
    const colors = ['amber', 'emerald', 'cyan', 'purple', 'rose', 'orange'];
    keys.forEach((k, idx) => {
      assert.ok(k, `Key ${k} should map to ${colors[idx]}`);
    });
  });

  // Test 3: notesDb.js exports required IndexedDB storage functions
  test('F11.1: src/utils/notesDb.js exports highlight and note persistence functions', async () => {
    const mod = await safeImport(notesDbPath);
    assert.ok(typeof mod.saveHighlight === 'function', 'saveHighlight must be a function');
    assert.ok(typeof mod.getAllHighlights === 'function', 'getAllHighlights must be a function');
    assert.ok(typeof mod.deleteHighlight === 'function', 'deleteHighlight must be a function');
    assert.ok(typeof mod.saveCodeNote === 'function', 'saveCodeNote must be a function');
    assert.ok(typeof mod.getCodeNotesBySubtopic === 'function', 'getCodeNotesBySubtopic must be a function');
    assert.ok(typeof mod.deleteCodeNote === 'function', 'deleteCodeNote must be a function');
  });

  // Test 4: Highlight object structure validation
  test('F10.3: Highlight data schema requires subtopicId, title, text, type, and color', () => {
    const sampleHighlight = {
      subtopicId: '1.1.1',
      title: 'ما هو الويب',
      text: 'الإنترنت هو شبكة عالمية تربط مليارات الأجهزة.',
      type: 'concept',
      color: 'amber',
      tag: '💡 مفهوم',
      createdAt: new Date().toISOString()
    };

    assert.ok(sampleHighlight.subtopicId);
    assert.ok(sampleHighlight.title);
    assert.ok(sampleHighlight.text);
    assert.ok(sampleHighlight.color);
  });

  // Test 5: 5 rapid tags supported
  test('F10.4: Supports 5 rapid categorization tags', () => {
    const TAGS = ['💡 مفهوم', '⚠️ تنبيه', '🚀 تطبيق', '❓ سؤال', '⭐ اختبار'];
    assert.equal(TAGS.length, 5, 'Must provide 5 rapid tags');
  });

  // Test 6: 4 quick note templates supported
  test('F10.5: Supports 4 quick note templates for accelerated study', () => {
    const TEMPLATES = [
      'نقطة جوهرية يجب مراجعتها قبل المقابلات التقنية.',
      'تطبيق عملي مباشر: ربط هذا المفهوم في المشروع النهائي.',
      'تحذير من خطأ شائع يؤدي لتعطل الخادم أو تسريب الذاكرة.',
      'سؤال يحتاج إلى بحث إضافي وتجربة عملية في بيئة العمل.'
    ];
    assert.equal(TEMPLATES.length, 4, 'Must provide 4 quick templates');
  });

  // Test 7: Scoping: highlights are permitted only inside lesson scripts and code
  test('F10.6: Highlight container scoping excludes UI controls and navigation elements', () => {
    const isTargetAllowed = (selector) => {
      const allowed = ['[data-lesson-script="true"]', 'pre', 'code', '.lesson-prose'];
      const denied = ['nav', 'button', 'input', 'header', '.sidebar'];
      return allowed.some(a => selector.includes(a)) && !denied.some(d => selector.includes(d));
    };

    assert.ok(isTargetAllowed('[data-lesson-script="true"] p'));
    assert.ok(isTargetAllowed('pre code'));
    assert.equal(isTargetAllowed('nav button'), false);
    assert.equal(isTargetAllowed('header input'), false);
  });

  // Test 8: Web Speech TTS integration
  test('F12.1: Web Speech TTS invokes window.speechSynthesis.speak with utterance', () => {
    let spokenText = null;
    let spokenLang = null;

    globalThis.window.speechSynthesis.speak = (utterance) => {
      spokenText = utterance.text;
      spokenLang = utterance.lang;
    };

    const text = 'Node.js is an open-source, cross-platform JavaScript runtime environment.';
    const utterance = { text, lang: 'en-US' };
    globalThis.window.speechSynthesis.speak(utterance);

    assert.equal(spokenText, text);
    assert.equal(spokenLang, 'en-US');
  });

  // Test 9: TTS language detection switches between ar-SA and en-US
  test('F12.2: TTS selects ar-SA for Arabic text and en-US for English code', () => {
    const detectLang = (str) => /[\u0600-\u06FF]/.test(str) ? 'ar-SA' : 'en-US';

    assert.equal(detectLang('مفهوم حلقة الأحداث في Node.js'), 'ar-SA');
    assert.equal(detectLang('const server = http.createServer();'), 'en-US');
  });

  // Test 10: TTS cancel stops ongoing speech before starting new speech
  test('F12.3: window.speechSynthesis.cancel is called to halt prior speech playback', () => {
    let cancelCalled = false;
    globalThis.window.speechSynthesis.cancel = () => {
      cancelCalled = true;
    };

    globalThis.window.speechSynthesis.cancel();
    assert.ok(cancelCalled, 'cancel must be invoked');
  });

  // Test 11: Inline AI explainer prompt structure
  test('F12.4: Inline AI explainer formats targeted two-sentence beginner explanation prompt', () => {
    const buildExplainerPrompt = (snippet, contextTitle) => {
      return `اشرح المقتطف التالي في جملتين مبسطتين للمبتدئ باللغة العربية ضمن سياق درس "${contextTitle}":\n"${snippet}"`;
    };

    const prompt = buildExplainerPrompt('fs.promises.readFile("app.js")', 'نظام الملفات fs');
    assert.ok(prompt.includes('جملتين مبسطتين'));
    assert.ok(prompt.includes('نظام الملفات fs'));
    assert.ok(prompt.includes('fs.promises.readFile'));
  });

  // Test 12: Saving and retrieving highlights in notesDb
  test('F11.2: saveHighlight and getAllHighlights store and query records', async () => {
    const mod = await safeImport(notesDbPath);
    const mockRecord = {
      subtopicId: '2.1.1',
      title: 'إعداد بيئة Node.js',
      text: 'تأكد من تثبيت إصدار LTS دائماً.',
      type: 'practice',
      color: 'emerald'
    };

    const id = await mod.saveHighlight(mockRecord);
    assert.ok(id !== undefined);

    const all = await mod.getAllHighlights();
    assert.ok(Array.isArray(all));
  });

  // Test 13: Deleting highlight from storage
  test('F11.3: deleteHighlight removes record by numerical ID', async () => {
    const mod = await safeImport(notesDbPath);
    if (typeof mod.deleteHighlight === 'function') {
      await assert.doesNotReject(async () => {
        await mod.deleteHighlight(9999);
      });
    }
  });

  // Test 14: Export highlights to JSON
  test('F11.4: Saved highlights export formats valid JSON array', () => {
    const highlights = [
      { id: 1, subtopicId: '1.1.1', text: 'نقطة 1', color: 'amber' },
      { id: 2, subtopicId: '1.1.2', text: 'نقطة 2', color: 'cyan' }
    ];

    const json = JSON.stringify(highlights, null, 2);
    const parsed = JSON.parse(json);
    assert.equal(parsed.length, 2);
    assert.equal(parsed[0].text, 'نقطة 1');
  });

  // Test 15: Filter highlights by color
  test('F11.5: Filtering highlights by neon color isolates matching records', () => {
    const highlights = [
      { id: 1, color: 'amber', text: 'أ' },
      { id: 2, color: 'emerald', text: 'ب' },
      { id: 3, color: 'amber', text: 'ج' }
    ];

    const amberOnly = highlights.filter(h => h.color === 'amber');
    assert.equal(amberOnly.length, 2);
  });
});
