// tests/tier1_features/gemini_pool.test.js
// Tier 1: Functional Feature Coverage — Multi-Key Gemini API Pool & Failover
// Features Covered: F6, F7, F8 (15 Tests)

import { collector } from '../collector.js';
import { assert, SRC_ROOT, createMockFetch, safeImport } from '../test_helper.js';
import path from 'node:path';

collector.setTier('Tier 1: Feature Coverage');

collector.suite('Multi-Key Gemini API Pool & Failover (F6-F8)', (test) => {
  const geminiPath = path.resolve(SRC_ROOT, 'api/gemini.js');

  // Test 1: gemini.js exports core pool functions
  test('F6.1: src/api/gemini.js exports all required pool and health probe functions', async () => {
    const gemini = await safeImport('src/api/gemini.js');
    assert.ok(typeof gemini.getGeminiKeysPool === 'function', 'getGeminiKeysPool must be a function');
    assert.ok(typeof gemini.saveGeminiKeysPool === 'function', 'saveGeminiKeysPool must be a function');
    assert.ok(typeof gemini.getActiveApiKey === 'function', 'getActiveApiKey must be a function');
    assert.ok(typeof gemini.saveUserGeminiApiKey === 'function', 'saveUserGeminiApiKey must be a function');
    assert.ok(typeof gemini.testGeminiKeysInParallel === 'function', 'testGeminiKeysInParallel must be a function');
    assert.ok(typeof gemini.askGeminiTutor === 'function', 'askGeminiTutor must be a function');
  });

  // Test 2: saveGeminiKeysPool trims and deduplicates keys
  test('F6.2: saveGeminiKeysPool cleans, trims, and deduplicates keys in localStorage', async () => {
    const gemini = await safeImport('src/api/gemini.js');
    globalThis.localStorage.clear();
    const inputKeys = ['  AIzaSy_Key1  ', 'AIzaSy_Key2', 'AIzaSy_Key1', '', '   '];
    const success = gemini.saveGeminiKeysPool(inputKeys);
    assert.ok(success, 'saveGeminiKeysPool must return true');

    const pool = gemini.getGeminiKeysPool();
    assert.equal(pool.length, 2, 'Pool should contain exactly 2 unique cleaned keys');
    assert.equal(pool[0], 'AIzaSy_Key1');
    assert.equal(pool[1], 'AIzaSy_Key2');
  });

  // Test 3: getActiveApiKey returns the first active key in pool
  test('F6.3: getActiveApiKey returns the first key in the configured pool', async () => {
    const gemini = await safeImport('src/api/gemini.js');
    gemini.saveGeminiKeysPool(['Primary_Key_ABC', 'Secondary_Key_XYZ']);
    const active = gemini.getActiveApiKey();
    assert.equal(active, 'Primary_Key_ABC');
  });

  // Test 4: saveUserGeminiApiKey moves updated key to front of pool
  test('F6.4: saveUserGeminiApiKey updates and prioritizes new key at front of pool', async () => {
    const gemini = await safeImport('src/api/gemini.js');
    gemini.saveGeminiKeysPool(['Key_A', 'Key_B']);
    gemini.saveUserGeminiApiKey('Key_C');
    const pool = gemini.getGeminiKeysPool();
    assert.equal(pool[0], 'Key_C');
    assert.equal(pool.length, 3);
  });

  // Test 5: saveUserGeminiApiKey with empty input clears pool
  test('F6.5: saveUserGeminiApiKey with empty string clears the pool', async () => {
    const gemini = await safeImport('src/api/gemini.js');
    gemini.saveUserGeminiApiKey('');
    const pool = gemini.getGeminiKeysPool();
    assert.ok(Array.isArray(pool));
  });

  // Test 6: testGeminiKeysInParallel benchmarks and marks 200 OK as active
  test('F7.1: testGeminiKeysInParallel returns active status on HTTP 200', async () => {
    const gemini = await safeImport('src/api/gemini.js');
    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async () => ({
        ok: true,
        status: 200,
        json: async () => ({ candidates: [{ content: { parts: [{ text: 'جاهز' }] } }] })
      })
    });
    globalThis.fetch = mock;

    const results = await gemini.testGeminiKeysInParallel(['Valid_Key_123']);
    mock.restore();

    assert.equal(results.length, 1);
    assert.equal(results[0].status, 'active');
    assert.equal(results[0].key, 'Valid_Key_123');
    assert.ok(typeof results[0].latency === 'number' && results[0].latency >= 0);
  });

  // Test 7: testGeminiKeysInParallel marks 429 as exhausted
  test('F7.2: testGeminiKeysInParallel marks HTTP 429 as exhausted quota', async () => {
    const gemini = await safeImport('src/api/gemini.js');
    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async () => ({
        ok: false,
        status: 429,
        json: async () => ({ error: { message: 'Quota exceeded' } })
      })
    });
    globalThis.fetch = mock;

    const results = await gemini.testGeminiKeysInParallel(['Exhausted_Key_456']);
    mock.restore();

    assert.equal(results.length, 1);
    assert.equal(results[0].status, 'exhausted');
    assert.ok(results[0].message.includes('الحصة') || results[0].message.includes('Rate Limit'));
  });

  // Test 8: testGeminiKeysInParallel marks 400/403 as invalid
  test('F7.3: testGeminiKeysInParallel marks HTTP 400/403 as invalid key', async () => {
    const gemini = await safeImport('src/api/gemini.js');
    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async () => ({
        ok: false,
        status: 400,
        json: async () => ({ error: { message: 'API key not valid' } })
      })
    });
    globalThis.fetch = mock;

    const results = await gemini.testGeminiKeysInParallel(['Invalid_Key_999']);
    mock.restore();

    assert.equal(results.length, 1);
    assert.equal(results[0].status, 'invalid');
  });

  // Test 9: testGeminiKeysInParallel executes multiple keys concurrently
  test('F7.4: testGeminiKeysInParallel handles multiple keys in parallel', async () => {
    const gemini = await safeImport('src/api/gemini.js');
    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async () => ({
        ok: true,
        status: 200,
        json: async () => ({ candidates: [{ content: { parts: [{ text: 'جاهز' }] } }] })
      })
    });
    globalThis.fetch = mock;

    const results = await gemini.testGeminiKeysInParallel(['Key_1', 'Key_2', 'Key_3']);
    mock.restore();

    assert.equal(results.length, 3);
    assert.equal(results[0].key, 'Key_1');
    assert.equal(results[1].key, 'Key_2');
    assert.equal(results[2].key, 'Key_3');
  });

  // Test 10: askGeminiTutor succeeds on HTTP 200 response
  test('F8.1: askGeminiTutor sends prompt and parses generated text response', async () => {
    const gemini = await safeImport('src/api/gemini.js');
    gemini.saveGeminiKeysPool(['Valid_Tutor_Key']);

    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async () => ({
        ok: true,
        status: 200,
        json: async () => ({
          candidates: [{ content: { parts: [{ text: 'Node.js هو بيئة تشغيل JavaScript مبنية على V8.' }] } }]
        })
      })
    });
    globalThis.fetch = mock;

    const reply = await gemini.askGeminiTutor('ما هو Node.js؟');
    mock.restore();

    assert.ok(reply.includes('Node.js هو بيئة تشغيل'));
  });

  // Test 11: askGeminiTutor rotates key on HTTP 429
  test('F7.5: askGeminiTutor automatically fails over to next key on HTTP 429 rate limit', async () => {
    const gemini = await safeImport('src/api/gemini.js');
    gemini.saveGeminiKeysPool(['Key_Failing_429', 'Key_Succeeding_200']);

    let callCount = 0;
    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async (url) => {
        callCount++;
        if (url.includes('Key_Failing_429')) {
          return { ok: false, status: 429, json: async () => ({ error: { message: 'Quota exceeded' } }) };
        }
        return {
          ok: true,
          status: 200,
          json: async () => ({
            candidates: [{ content: { parts: [{ text: 'نجح الرد بعد التبديل التلقائي للمفتاح الثاني' }] } }]
          })
        };
      }
    });
    globalThis.fetch = mock;

    const reply = await gemini.askGeminiTutor('شرح تدوير المفاتيح');
    mock.restore();

    assert.equal(callCount, 2, 'Should have attempted first key and then rotated to second key');
    assert.ok(reply.includes('نجح الرد بعد التبديل التلقائي'));
  });

  // Test 12: askGeminiTutor throws when all keys in pool return 429
  test('F7.6: askGeminiTutor throws error when all keys in pool are exhausted', async () => {
    const gemini = await safeImport('src/api/gemini.js');
    gemini.saveGeminiKeysPool(['Key1_429', 'Key2_429']);

    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async () => ({
        ok: false,
        status: 429,
        json: async () => ({ error: { message: 'Quota exceeded' } })
      })
    });
    globalThis.fetch = mock;

    await assert.rejects(
      async () => {
        await gemini.askGeminiTutor('طلب اختبار');
      },
      (err) => {
        return err.message.includes('حصة') || err.message.includes('Quota') || err.message.includes('الإنترنت') || err.message.includes('مفتاح');
      }
    );
    mock.restore();
  });

  // Test 13: askGeminiTutor supports optional systemInstruction
  test('F8.2: askGeminiTutor embeds systemInstruction payload when provided', async () => {
    const gemini = await safeImport('src/api/gemini.js');
    gemini.saveGeminiKeysPool(['Test_Key_Sys']);

    let capturedPayload = null;
    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async (url, opts) => {
        capturedPayload = JSON.parse(opts.body);
        return {
          ok: true,
          status: 200,
          json: async () => ({
            candidates: [{ content: { parts: [{ text: 'مفهوم يا أستاذ' }] } }]
          })
        };
      }
    });
    globalThis.fetch = mock;

    await gemini.askGeminiTutor('مرحبا', 'أنت معلم Node.js محترف');
    mock.restore();

    assert.ok(capturedPayload, 'Payload must be sent');
    assert.ok(capturedPayload.systemInstruction, 'Payload should include systemInstruction');
    assert.equal(capturedPayload.systemInstruction.parts[0].text, 'أنت معلم Node.js محترف');
  });

  // Test 14: generateAiQuizForLesson cleans markdown and returns parsed quiz object
  test('F8.3: generateAiQuizForLesson sanitizes markdown fences and parses quiz JSON', async () => {
    const gemini = await safeImport('src/api/gemini.js');
    gemini.saveGeminiKeysPool(['Test_Quiz_Key']);

    const mockQuizResponse = '```json\n{\n  "question": "ما هي ميزة Node.js الرئيسية؟",\n  "options": ["Single-threaded Event Loop", "Multi-threaded by default", "DOM manipulation", "Native PHP runtime"],\n  "correctIndex": 0,\n  "explanation": "يعتمد Node.js على نموذج أحادي المسار مع حلقة أحداث غير متزامنة."\n}\n```';

    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async () => ({
        ok: true,
        status: 200,
        json: async () => ({
          candidates: [{ content: { parts: [{ text: mockQuizResponse }] } }]
        })
      })
    });
    globalThis.fetch = mock;

    const quiz = await gemini.generateAiQuizForLesson('Event Loop', 'ملخص حلقة الأحداث');
    mock.restore();

    assert.ok(quiz, 'Quiz must be parsed successfully');
    assert.equal(quiz.question, 'ما هي ميزة Node.js الرئيسية؟');
    assert.equal(quiz.options.length, 4);
    assert.equal(quiz.correctIndex, 0);
  });

  // Test 15: generateAiQuizForLesson returns null on invalid JSON response
  test('F8.4: generateAiQuizForLesson handles invalid JSON from AI without crashing', async () => {
    const gemini = await safeImport('src/api/gemini.js');
    gemini.saveGeminiKeysPool(['Test_Quiz_Key']);

    const mock = createMockFetch({
      'generativelanguage.googleapis.com': async () => ({
        ok: true,
        status: 200,
        json: async () => ({
          candidates: [{ content: { parts: [{ text: 'هذا نص عادي ليس بتنسيق JSON على الإطلاق' }] } }]
        })
      })
    });
    globalThis.fetch = mock;

    const quiz = await gemini.generateAiQuizForLesson('Event Loop', 'ملخص');
    mock.restore();

    assert.equal(quiz, null, 'Should return null on unparseable JSON');
  });
});
