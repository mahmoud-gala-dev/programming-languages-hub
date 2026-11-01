// audit_tests.mjs
// Inspects all test files for trivial assertions or empty test bodies.

import fs from 'node:fs';
import path from 'node:path';

function walk(dir) {
  let files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== '.cache' && entry.name !== 'node_modules') files = files.concat(walk(full));
    } else if (entry.name.endsWith('.test.js')) {
      files.push(full);
    }
  }
  return files;
}

const tests = walk('e:/KD/lang/nodejs/tests');
console.log('Total test files found:', tests.length);
let emptyCount = 0;
let trivialAssertCount = 0;
let totalTestsFound = 0;

for (const f of tests) {
  const content = fs.readFileSync(f, 'utf8');
  const testMatches = content.match(/test\s*\(/g) || [];
  totalTestsFound += testMatches.length;

  // check for empty test
  const emptyMatches = content.match(/test\s*\([^,]+,\s*(?:async\s*)?\(\s*\)\s*=>\s*\{\s*\}\s*\)/g);
  if (emptyMatches) {
    console.log('Empty tests in', f, emptyMatches);
    emptyCount += emptyMatches.length;
  }
  // check for assert.ok(true) without conditions
  const trivialMatches = content.match(/assert\.ok\(\s*true\s*[,)]/g);
  if (trivialMatches) {
    console.log('Trivial assert.ok(true) in', f, trivialMatches.length);
    trivialAssertCount += trivialMatches.length;
  }
}
console.log(`Total tests registered in files: ${totalTestsFound}`);
console.log(`Empty tests count: ${emptyCount}`);
console.log(`Trivial assert count: ${trivialAssertCount}`);
