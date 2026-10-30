// src/utils/codeHighlighter.jsx
// محرك تلوين وتمييز الأكواد النحوي (Syntax Highlighting) لـ JavaScript و JSX و HTML و CSS
// مع دعم تظليلات المستخدم التفاعلية (User Highlights) وحفظها ونقرها لإدارتها
import React from 'react';

const KEYWORDS = new Set([
  'import', 'export', 'from', 'default', 'const', 'let', 'var', 'function',
  'return', 'async', 'await', 'if', 'else', 'switch', 'case', 'break',
  'continue', 'try', 'catch', 'finally', 'throw', 'new', 'class', 'extends',
  'typeof', 'instanceof', 'for', 'while', 'do', 'in', 'of', 'yield'
]);

const BUILTINS_AND_HOOKS = new Set([
  'useState', 'useEffect', 'useContext', 'useRef', 'useReducer', 'useMemo',
  'useCallback', 'useLayoutEffect', 'useTransition', 'useDeferredValue',
  'useId', 'useActionState', 'useOptimistic', 'React', 'ReactDOM', 'console',
  'document', 'window', 'alert', 'prompt', 'confirm', 'Promise', 'fetch', 'setTimeout', 'clearTimeout',
  'setInterval', 'clearInterval', 'JSON', 'Object', 'Array', 'String', 'Number', 'Boolean', 'Map', 'Set'
]);

const COMMON_ATTRIBUTES = new Set([
  'classname', 'class', 'onclick', 'onchange', 'onsubmit', 'oninput', 'onkeydown',
  'style', 'key', 'ref', 'id', 'href', 'src', 'alt', 'type', 'value', 'name',
  'placeholder', 'disabled', 'checked', 'readonly', 'required', 'rows', 'cols',
  'width', 'height', 'target', 'rel', 'role', 'aria-label'
]);

const LITERALS = new Set(['true', 'false', 'null', 'undefined', 'NaN', 'Infinity']);

const HIGHLIGHT_COLOR_STYLES = {
  amber: "bg-amber-400/35 text-amber-100 border-b-2 border-amber-400 hover:bg-amber-400/50 shadow-sm",
  emerald: "bg-emerald-400/35 text-emerald-100 border-b-2 border-emerald-400 hover:bg-emerald-400/50 shadow-sm",
  cyan: "bg-cyan-400/35 text-cyan-100 border-b-2 border-cyan-400 hover:bg-cyan-400/50 shadow-sm",
  purple: "bg-purple-400/35 text-purple-100 border-b-2 border-purple-400 hover:bg-purple-400/50 shadow-sm"
};

/**
 * تحليل وتلوين مقطع نصي برمجي وتحويله إلى عناصر ملونة
 */
function tokenizeSnippet(snippet, baseKey = 'tok') {
  if (!snippet) return null;

  const tokenRegex = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->|`(?:\\.|[^`])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|<\/?[a-zA-Z0-9_\-]+(?:\s|>|\/)|[a-zA-Z_$][a-zA-Z0-9_$]*|\b\d+(?:\.\d+)?\b|[=+\-*/%&|^!<>?:;,.[\]{}()])/g;

  let lastIndex = 0;
  const elements = [];
  let match;

  while ((match = tokenRegex.exec(snippet)) !== null) {
    const token = match[0];
    const index = match.index;

    if (index > lastIndex) {
      elements.push(
        <span key={`${baseKey}-gap-${index}`} className="text-slate-300">
          {snippet.substring(lastIndex, index)}
        </span>
      );
    }
    lastIndex = index + token.length;

    if (token.startsWith('//') || token.startsWith('/*') || token.startsWith('<!--')) {
      elements.push(
        <span key={`${baseKey}-c-${index}`} className="text-emerald-400 font-medium italic">
          {token}
        </span>
      );
    } else if (token.startsWith('"') || token.startsWith("'") || token.startsWith('`')) {
      elements.push(
        <span key={`${baseKey}-s-${index}`} className="text-amber-300">
          {token}
        </span>
      );
    } else if (token.startsWith('<')) {
      elements.push(
        <span key={`${baseKey}-tag-${index}`} className="text-cyan-400 font-semibold">
          {token}
        </span>
      );
    } else if (KEYWORDS.has(token)) {
      elements.push(
        <span key={`${baseKey}-kw-${index}`} className="text-purple-400 font-bold">
          {token}
        </span>
      );
    } else if (BUILTINS_AND_HOOKS.has(token)) {
      elements.push(
        <span key={`${baseKey}-bi-${index}`} className="text-indigo-300 font-semibold">
          {token}
        </span>
      );
    } else if (LITERALS.has(token)) {
      elements.push(
        <span key={`${baseKey}-lit-${index}`} className="text-rose-400 font-semibold">
          {token}
        </span>
      );
    } else if (/^\d+(?:\.\d+)?$/.test(token)) {
      elements.push(
        <span key={`${baseKey}-num-${index}`} className="text-orange-400">
          {token}
        </span>
      );
    } else if (COMMON_ATTRIBUTES.has(token.toLowerCase()) || token.startsWith('data-') || token.startsWith('aria-')) {
      elements.push(
        <span key={`${baseKey}-attr-${index}`} className="text-teal-300 font-medium">
          {token}
        </span>
      );
    } else {
      elements.push(
        <span key={`${baseKey}-id-${index}`} className="text-slate-200">
          {token}
        </span>
      );
    }
  }

  if (lastIndex < snippet.length) {
    elements.push(
      <span key={`${baseKey}-tail-${lastIndex}`} className="text-slate-300">
        {snippet.substring(lastIndex)}
      </span>
    );
  }

  return <>{elements}</>;
}

/**
 * دالة تلوين سطر كود واحد مع دعم تظليلات المستخدم التفاعلية
 * @param {string} line سطر الكود
 * @param {Array} userHighlights مصفوفة التظليلات المسجلة للمستخدم
 * @param {Function} onHighlightClick دالة إدارة التظليل
 * @returns {React.ReactNode}
 */
export function highlightCodeLine(line, userHighlights = [], onHighlightClick = null) {
  if (!line) return <span>&nbsp;</span>;

  // 1. إذا كان السطر بالكامل تعليقاً وبدون تظليلات
  const trimmed = line.trim();
  const isFullComment = trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('<!--') || trimmed.startsWith('*');

  // 2. فحص ما إذا كان هناك تظليلات للمستخدم تنطبق على هذا السطر
  if (!userHighlights || userHighlights.length === 0) {
    if (isFullComment) {
      return <span className="text-emerald-400 font-semibold">{line}</span>;
    }
    return tokenizeSnippet(line, 'line');
  }

  // جمع كافة التطابقات للتظليلات في السطر
  const matches = [];
  userHighlights.forEach(hl => {
    const rawText = hl.text?.trim();
    if (!rawText || rawText.length < 2) return;

    // دعم التظليلات متعددة الأسطر أو أجزاء من الأسطر
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
      return <span className="text-emerald-400 font-semibold">{line}</span>;
    }
    return tokenizeSnippet(line, 'line');
  }

  // ترتيب التطابقات وإزالة التداخل
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
      fragments.push(
        <React.Fragment key={`unm-${cursor}-${i}`}>
          {isFullComment ? <span className="text-emerald-400 font-semibold">{unmatched}</span> : tokenizeSnippet(unmatched, `unm-${cursor}`)}
        </React.Fragment>
      );
    }

    const matchedStr = line.substring(m.start, m.end);
    const styleClass = HIGHLIGHT_COLOR_STYLES[m.highlight.color] || HIGHLIGHT_COLOR_STYLES.amber;

    fragments.push(
      <mark
        key={`code-hl-${m.highlight.id}-${m.start}-${i}`}
        onClick={(e) => {
          e.stopPropagation();
          if (onHighlightClick) onHighlightClick(m.highlight);
        }}
        className={`px-1 py-0.5 rounded cursor-pointer transition-all duration-150 select-text ${styleClass} font-mono`}
        title={m.highlight.note ? `الملاحظة: ${m.highlight.note}` : "انقر لإدارة هذا التظليل 🖍️"}
      >
        {isFullComment ? <span className="text-emerald-400 font-semibold">{matchedStr}</span> : tokenizeSnippet(matchedStr, `hl-${m.start}`)}
      </mark>
    );

    cursor = m.end;
  });

  if (cursor < line.length) {
    const tail = line.substring(cursor);
    fragments.push(
      <React.Fragment key={`tail-${cursor}`}>
        {isFullComment ? <span className="text-emerald-400 font-semibold">{tail}</span> : tokenizeSnippet(tail, `tail-${cursor}`)}
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
