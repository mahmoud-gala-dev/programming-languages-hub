// src/utils/codeHighlighter.jsx
// محرك تلوين وتمييز الأكواد النحوي (Syntax Highlighting) لـ Node.js و JavaScript و TypeScript
// مع دعم التظليلات النيون التفاعلية، وعزل النصوص والتعليقات العربية بخط Cairo دون كسر هندسة LTR للكود

import React from 'react';

const KEYWORDS = new Set([
  'import', 'export', 'from', 'default', 'const', 'let', 'var', 'function',
  'return', 'async', 'await', 'if', 'else', 'switch', 'case', 'break',
  'continue', 'try', 'catch', 'finally', 'throw', 'new', 'class', 'extends',
  'typeof', 'instanceof', 'for', 'while', 'do', 'in', 'of', 'yield',
  'type', 'interface', 'implements', 'declare', 'enum', 'public', 'private', 'protected'
]);

const NODE_BUILTINS = new Set([
  'require', 'module', 'exports', 'process', 'Buffer', '__dirname', '__filename',
  'global', 'setTimeout', 'clearTimeout', 'setInterval', 'clearInterval', 'setImmediate', 'clearImmediate',
  'console', 'Promise', 'fetch', 'JSON', 'Object', 'Array', 'String', 'Number', 'Boolean', 'Map', 'Set',
  'fs', 'path', 'http', 'https', 'os', 'events', 'stream', 'crypto', 'util', 'url', 'child_process', 'cluster'
]);

const LITERALS = new Set(['true', 'false', 'null', 'undefined', 'NaN', 'Infinity']);

// فحص وجود أحرف عربية لضمان سلامة اتصال الحروف وتطبيق خط القاهرة (Cairo)
const hasArabic = (str) => typeof str === 'string' && /[\u0600-\u06FF]/.test(str);

const HIGHLIGHT_COLOR_STYLES = {
  emerald: "bg-emerald-500/35 text-emerald-100 border-b-2 border-emerald-400 hover:bg-emerald-500/50 shadow-sm",
  cyan: "bg-cyan-500/35 text-cyan-100 border-b-2 border-cyan-400 hover:bg-cyan-500/50 shadow-sm",
  purple: "bg-purple-500/35 text-purple-100 border-b-2 border-purple-400 hover:bg-purple-500/50 shadow-sm",
  amber: "bg-amber-400/35 text-amber-100 border-b-2 border-amber-400 hover:bg-amber-400/50 shadow-sm",
  rose: "bg-rose-500/35 text-rose-100 border-b-2 border-rose-500 hover:bg-rose-500/50 shadow-sm",
  orange: "bg-pink-500/35 text-pink-100 border-b-2 border-pink-500 hover:bg-pink-500/50 shadow-sm"
};

/**
 * تحليل وتلوين مقطع نصي برمجي وتحويله إلى عناصر ملونة مع عزل الكلمات العربية
 */
function tokenizeSnippet(snippet, baseKey = 'tok') {
  if (!snippet) return null;

  const tokenRegex = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->|#(?:[^\n]*)|`(?:\\.|[^`])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|<\/?[a-zA-Z0-9_\-]+(?:\s|>|\/)|[a-zA-Z_$][a-zA-Z0-9_$]*|\b\d+(?:\.\d+)?\b|[=+\-*/%&|^!<>?:;,.[\]{}()])/g;

  let lastIndex = 0;
  const elements = [];
  let match;

  while ((match = tokenRegex.exec(snippet)) !== null) {
    const token = match[0];
    const index = match.index;
    const isAr = hasArabic(token);

    if (index > lastIndex) {
      const gap = snippet.substring(lastIndex, index);
      const isGapAr = hasArabic(gap);
      elements.push(
        <span 
          key={`${baseKey}-gap-${index}`} 
          data-arabic={isGapAr ? "true" : undefined}
          className={`text-slate-300 ${isGapAr ? 'token-arabic' : ''}`}
        >
          {gap}
        </span>
      );
    }
    lastIndex = index + token.length;

    if (token.startsWith('//') || token.startsWith('/*') || token.startsWith('<!--') || token.startsWith('#')) {
      elements.push(
        <span 
          key={`${baseKey}-c-${index}`} 
          data-arabic={isAr ? "true" : undefined}
          className={`text-emerald-400 font-medium ${isAr ? 'token-arabic not-italic' : 'italic'}`}
        >
          {token}
        </span>
      );
    } else if (token.startsWith('"') || token.startsWith("'") || token.startsWith('`')) {
      elements.push(
        <span 
          key={`${baseKey}-s-${index}`} 
          data-arabic={isAr ? "true" : undefined}
          className={`text-amber-300 ${isAr ? 'token-arabic' : ''}`}
        >
          {token}
        </span>
      );
    } else if (token.startsWith('<')) {
      elements.push(
        <span key={`${baseKey}-tag-${index}`} className="text-emerald-400 font-semibold">
          {token}
        </span>
      );
    } else if (KEYWORDS.has(token)) {
      elements.push(
        <span key={`${baseKey}-kw-${index}`} className="text-purple-400 font-bold">
          {token}
        </span>
      );
    } else if (NODE_BUILTINS.has(token)) {
      elements.push(
        <span key={`${baseKey}-nb-${index}`} className="text-emerald-300 font-semibold">
          {token}
        </span>
      );
    } else if (LITERALS.has(token)) {
      elements.push(
        <span key={`${baseKey}-lit-${index}`} className="text-rose-400 font-semibold">
          {token}
        </span>
      );
    } else if (/^\d+(\.\d+)?$/.test(token)) {
      elements.push(
        <span key={`${baseKey}-num-${index}`} className="text-orange-400">
          {token}
        </span>
      );
    } else if (/^[=+\-*/%&|^!<>?:;,.[\]{}()]$/.test(token)) {
      elements.push(
        <span key={`${baseKey}-op-${index}`} className="text-sky-300">
          {token}
        </span>
      );
    } else {
      elements.push(
        <span 
          key={`${baseKey}-id-${index}`} 
          data-arabic={isAr ? "true" : undefined}
          className={`text-slate-100 ${isAr ? 'token-arabic' : ''}`}
        >
          {token}
        </span>
      );
    }
  }

  if (lastIndex < snippet.length) {
    const tail = snippet.substring(lastIndex);
    const isTailAr = hasArabic(tail);
    elements.push(
      <span 
        key={`${baseKey}-tail-${lastIndex}`} 
        data-arabic={isTailAr ? "true" : undefined}
        className={`text-slate-300 ${isTailAr ? 'token-arabic' : ''}`}
      >
        {tail}
      </span>
    );
  }

  return <>{elements}</>;
}

/**
 * دالة تلوين سطر كود واحد مع دعم تظليلات المستخدم وعزل التعليقات العربية
 * @param {string} line سطر الكود
 * @param {Array} userHighlights مصفوفة التظليلات المسجلة
 * @param {Function} onHighlightClick دالة إدارة التظليل عند النقر
 */
export function highlightCodeLine(line, userHighlights = [], onHighlightClick = null) {
  if (!line) return <span>&nbsp;</span>;

  const trimmed = line.trim();
  const isFullComment = trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('<!--') || trimmed.startsWith('*') || trimmed.startsWith('#');
  const isFullAr = hasArabic(line);

  if (!userHighlights || userHighlights.length === 0) {
    if (isFullComment) {
      return (
        <span 
          data-arabic={isFullAr ? "true" : undefined}
          className={`text-emerald-400 font-semibold ${isFullAr ? 'token-arabic not-italic' : 'italic'}`}
        >
          {line}
        </span>
      );
    }
    return tokenizeSnippet(line, 'line');
  }

  // جمع تطابقات التظليلات المسجلة
  const matches = [];
  userHighlights.forEach(hl => {
    const rawText = hl.text?.trim();
    if (!rawText || rawText.length < 2) return;

    const searchTargets = rawText.includes('\n')
      ? rawText.split('\n').map(s => s.trim()).filter(s => s.length >= 2)
      : [rawText];

    searchTargets.forEach(target => {
      let idx = 0;
      while ((idx = line.indexOf(target, idx)) !== -1) {
        matches.push({
          start: idx,
          end: idx + target.length,
          highlight: hl
        });
        idx += target.length;
      }
    });
  });

  if (matches.length === 0) {
    if (isFullComment) {
      return (
        <span 
          data-arabic={isFullAr ? "true" : undefined}
          className={`text-emerald-400 font-semibold ${isFullAr ? 'token-arabic not-italic' : 'italic'}`}
        >
          {line}
        </span>
      );
    }
    return tokenizeSnippet(line, 'line');
  }

  matches.sort((a, b) => a.start - b.start);
  const nonOverlapping = [];
  let lastEnd = 0;
  matches.forEach(m => {
    if (m.start >= lastEnd) {
      nonOverlapping.push(m);
      lastEnd = m.end;
    }
  });

  const fragments = [];
  let cursor = 0;

  nonOverlapping.forEach((m, i) => {
    if (m.start > cursor) {
      const unmatched = line.substring(cursor, m.start);
      const isUnmatchedAr = hasArabic(unmatched);
      fragments.push(
        <React.Fragment key={`unm-${cursor}-${i}`}>
          {isFullComment ? (
            <span 
              data-arabic={isUnmatchedAr ? "true" : undefined}
              className={`text-emerald-400 font-semibold ${isUnmatchedAr ? 'token-arabic not-italic' : 'italic'}`}
            >
              {unmatched}
            </span>
          ) : tokenizeSnippet(unmatched, `unm-${cursor}`)}
        </React.Fragment>
      );
    }

    const matchedStr = line.substring(m.start, m.end);
    const styleClass = HIGHLIGHT_COLOR_STYLES[m.highlight.color] || HIGHLIGHT_COLOR_STYLES.amber;
    const isMatchedAr = hasArabic(matchedStr);

    fragments.push(
      <mark
        key={`code-hl-${m.highlight.id}-${m.start}-${i}`}
        onClick={(e) => {
          e.stopPropagation();
          if (onHighlightClick) onHighlightClick(m.highlight);
        }}
        dir="ltr"
        className={`px-1 py-0.5 rounded cursor-pointer transition-all duration-150 select-text ${styleClass} font-mono`}
        title={m.highlight.note ? `الملاحظة: ${m.highlight.note}` : "انقر لإدارة هذا التظليل 🖍️"}
      >
        {isFullComment ? (
          <span 
            data-arabic={isMatchedAr ? "true" : undefined}
            className={`text-emerald-400 font-semibold ${isMatchedAr ? 'token-arabic not-italic' : 'italic'}`}
          >
            {matchedStr}
          </span>
        ) : tokenizeSnippet(matchedStr, `hl-${m.start}`)}
      </mark>
    );

    cursor = m.end;
  });

  if (cursor < line.length) {
    const tail = line.substring(cursor);
    const isTailAr = hasArabic(tail);
    fragments.push(
      <React.Fragment key={`tail-${cursor}`}>
        {isFullComment ? (
          <span 
            data-arabic={isTailAr ? "true" : undefined}
            className={`text-emerald-400 font-semibold ${isTailAr ? 'token-arabic not-italic' : 'italic'}`}
          >
            {tail}
          </span>
        ) : tokenizeSnippet(tail, `tail-${cursor}`)}
      </React.Fragment>
    );
  }

  return <>{fragments}</>;
}

/**
 * دالة مساعدة لتلوين مقطع كود كامل مع ترقيم الأسطر والتفاف منسق ودعم التظليلات
 */
export function HighlightedCodeView({ 
  code = "", 
  maxLines = null, 
  highlights = [], 
  onHighlightClick = null 
}) {
  if (!code || typeof code !== 'string') return null;

  const lines = code.trim().split('\n');
  const displayLines = maxLines ? lines.slice(0, maxLines) : lines;

  return (
    <div 
      data-code-block="true" 
      data-lesson-script="true" 
      className="font-mono text-xs leading-relaxed overflow-x-auto select-text text-left" 
      dir="ltr"
    >
      {displayLines.map((line, idx) => (
        <div 
          key={idx} 
          className="flex items-start gap-3 hover:bg-white/[0.04] px-2 py-0.5 rounded transition-colors group"
        >
          <span className="text-[10px] text-slate-500/70 select-none w-5 text-right shrink-0 group-hover:text-slate-400 font-mono pt-0.5">
            {idx + 1}
          </span>
          <span className="text-left whitespace-pre break-normal flex-1">
            {highlightCodeLine(line, highlights, onHighlightClick)}
          </span>
        </div>
      ))}
    </div>
  );
}
