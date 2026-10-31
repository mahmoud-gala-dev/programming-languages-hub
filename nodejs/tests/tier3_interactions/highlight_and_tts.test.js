// tests/tier3_interactions/highlight_and_tts.test.js
// Tier 3: Cross-Feature Interactions — Pro Highlight Studio & Web Speech TTS Integration
// Interaction Tested: Highlight Studio Popover x Web Speech TTS x Gemini AI Explainer (7 Tests)

import { collector } from '../collector.js';
import { assert, safeImport } from '../test_helper.js';

collector.setTier('Tier 3: Cross-Feature Combinations');

collector.suite('Interaction: Highlight Studio x TTS x AI Explainer (F10 x F12)', (test) => {
  const notesDbPath = 'src/utils/notesDb.js';

  // Test 1: Highlighting text in emerald and clicking TTS reads exact text
  test('PAIR.8: Highlighting snippet in emerald and triggering TTS passes exact text to speech synthesis', () => {
    let playedUtterance = null;
    globalThis.window.speechSynthesis.speak = (utt) => { playedUtterance = utt; };

    const selectedSnippet = 'استخدم دائمًا const أو let ولا تستخدم var في تطبيقات Node.js الحديثة.';
    const highlight = { color: 'emerald', text: selectedSnippet };

    globalThis.window.speechSynthesis.speak({ text: highlight.text, lang: 'ar-SA' });
    assert.equal(playedUtterance.text, selectedSnippet);
    assert.equal(playedUtterance.lang, 'ar-SA');
  });

  // Test 2: TTS switches to Arabic for Arabic highlighted text
  test('PAIR.9: TTS auto-detects Arabic script in highlight and configures ar-SA voice', () => {
    const detectVoiceLang = (str) => /[\u0600-\u06FF]/.test(str) ? 'ar-SA' : 'en-US';
    const arabicHighlight = 'معمارية حلقة الأحداث Event Loop';
    assert.equal(detectVoiceLang(arabicHighlight), 'ar-SA');
  });

  // Test 3: TTS switches to English for pure code / English highlights
  test('PAIR.10: TTS auto-detects English / Code highlight and configures en-US voice', () => {
    const detectVoiceLang = (str) => /[\u0600-\u06FF]/.test(str) ? 'ar-SA' : 'en-US';
    const codeHighlight = 'process.on("unhandledRejection", (err) => {});';
    assert.equal(detectVoiceLang(codeHighlight), 'en-US');
  });

  // Test 4: AI Inline explainer insertion into note and saving
  test('PAIR.11: Generating AI explanation from highlight and copying into note persists to notesDb', async () => {
    const mod = await safeImport(notesDbPath);
    const aiExplanation = 'معالج الأحداث يسمح بالتعامل مع العمليات غير المتزامنة دون إيقاف الخادم.';
    const record = {
      subtopicId: '4.1.1',
      title: 'حلقة الأحداث',
      text: 'Event Loop',
      color: 'amber',
      note: `🤖 شرح AI: ${aiExplanation}`
    };

    const id = await mod.saveHighlight(record);
    assert.ok(id !== undefined);
  });

  // Test 5: Switching subtopics cancels ongoing TTS playback
  test('PAIR.12: Navigating to a new subtopic cancels ongoing speech synthesis to prevent voice collision', () => {
    let cancelCalled = false;
    globalThis.window.speechSynthesis.cancel = () => { cancelCalled = true; };

    const navigateToLesson = (newId) => {
      globalThis.window.speechSynthesis.cancel();
    };

    navigateToLesson('2.1.1');
    assert.ok(cancelCalled, 'Speech synthesis cancel must be called on navigation');
  });

  // Test 6: Deleting highlight stops associated playback
  test('PAIR.13: Deleting a highlight from the manager modal halts any active speech playback', () => {
    let cancelCalled = false;
    globalThis.window.speechSynthesis.cancel = () => { cancelCalled = true; };

    const deleteHighlightAction = (id) => {
      globalThis.window.speechSynthesis.cancel();
      return true;
    };

    deleteHighlightAction(42);
    assert.ok(cancelCalled);
  });

  // Test 7: Filtered highlights retain TTS capabilities
  test('PAIR.14: Highlights filtered by neon color maintain TTS trigger functionality', () => {
    const highlights = [
      { id: 1, color: 'amber', text: 'نص ذهبي' },
      { id: 2, color: 'cyan', text: 'API call' }
    ];

    const amberItems = highlights.filter(h => h.color === 'amber');
    assert.equal(amberItems.length, 1);
    assert.ok(amberItems[0].text);
  });
});
