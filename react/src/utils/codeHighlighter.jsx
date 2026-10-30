// src/utils/codeHighlighter.jsx
// محرك تلوين وتمييز الأكواد النحوي (Syntax Highlighting) لـ JavaScript و JSX و HTML و CSS
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

/**
 * دالة تلوين سطر كود واحد عبر تحليله إلى رموز مميزة (Tokens)
 * @param {string} line سطر الكود
 * @returns {React.ReactNode} عناصر React ملونة
 */
export function highlightCodeLine(line) {
  if (!line) return <span>&nbsp;</span>;

  const trimmed = line.trim();

  // 1. فحص التعليقات الكاملة (عربية أو إنجليزية)
  if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('<!--') || trimmed.startsWith('*')) {
    return <span className="text-emerald-400 font-semibold">{line}</span>;
  }

  // 2. تحليل السطر إلى أجزاء (Regex Lexer)
  // يطابق: التعليقات، السلاسل النصية، وسوم HTML/JSX، الكلمات، والأرقام
  const tokenRegex = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->|`(?:\\.|[^`])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|<\/?[a-zA-Z0-9_\-]+(?:\s|>|\/)|[a-zA-Z_$][a-zA-Z0-9_$]*|\b\d+(?:\.\d+)?\b|[=+\-*/%&|^!<>?:;,.[\]{}()])/g;

  let lastIndex = 0;
  const elements = [];
  let match;

  while ((match = tokenRegex.exec(line)) !== null) {
    const token = match[0];
    const index = match.index;

    // إضافة المسافات أو المحارف البينية التي لم تطابق
    if (index > lastIndex) {
      elements.push(
        <span key={`gap-${index}`} className="text-slate-300">
          {line.substring(lastIndex, index)}
        </span>
      );
    }
    lastIndex = index + token.length;

    // تصنيف الرمز وتلوينه
    if (token.startsWith('//') || token.startsWith('/*') || token.startsWith('<!--')) {
      // تعليق في نهاية السطر
      elements.push(
        <span key={`tok-${index}`} className="text-emerald-400 font-medium italic">
          {token}
        </span>
      );
    } else if (token.startsWith('"') || token.startsWith("'") || token.startsWith('`')) {
      // نصوص
      elements.push(
        <span key={`tok-${index}`} className="text-amber-300">
          {token}
        </span>
      );
    } else if (token.startsWith('<')) {
      // وسم JSX أو HTML
      elements.push(
        <span key={`tok-${index}`} className="text-cyan-400 font-semibold">
          {token}
        </span>
      );
    } else if (KEYWORDS.has(token)) {
      // كلمات محجوزة
      elements.push(
        <span key={`tok-${index}`} className="text-purple-400 font-bold">
          {token}
        </span>
      );
    } else if (BUILTINS_AND_HOOKS.has(token)) {
      // خطافات React ودوال أساسية
      elements.push(
        <span key={`tok-${index}`} className="text-indigo-300 font-semibold">
          {token}
        </span>
      );
    } else if (LITERALS.has(token)) {
      // قيم ثابتة (true, false, null...)
      elements.push(
        <span key={`tok-${index}`} className="text-rose-400 font-semibold">
          {token}
        </span>
      );
    } else if (/^\d+(?:\.\d+)?$/.test(token)) {
      // أرقام
      elements.push(
        <span key={`tok-${index}`} className="text-orange-400">
          {token}
        </span>
      );
    } else if (COMMON_ATTRIBUTES.has(token.toLowerCase()) || token.startsWith('data-') || token.startsWith('aria-')) {
      // خصائص HTML و JSX الشهيرة
      elements.push(
        <span key={`tok-${index}`} className="text-teal-300 font-medium">
          {token}
        </span>
      );
    } else {
      // أسماء متغيرات ومعاملات
      elements.push(
        <span key={`tok-${index}`} className="text-slate-200">
          {token}
        </span>
      );
    }
  }

  // إضافة الجزء المتبقي من السطر بعد آخر تطابق
  if (lastIndex < line.length) {
    elements.push(
      <span key={`tail-${lastIndex}`} className="text-slate-300">
        {line.substring(lastIndex)}
      </span>
    );
  }

  return <>{elements}</>;
}

/**
 * دالة مساعدة لتلوين مقطع كود كامل مع ترقيم الأسطر والتفاف منسق
 * @param {string} code شفرة الكود الكاملة
 * @returns {React.ReactNode}
 */
export function HighlightedCodeView({ code = "", maxLines = null }) {
  if (!code || typeof code !== 'string') return null;

  const lines = code.trim().split('\n');
  const displayLines = maxLines ? lines.slice(0, maxLines) : lines;

  return (
    <div className="font-mono text-xs leading-relaxed overflow-x-auto select-text text-left" dir="ltr">
      {displayLines.map((line, idx) => (
        <div 
          key={idx} 
          className="flex items-start gap-3 hover:bg-white/[0.04] px-2 py-0.5 rounded transition-colors group"
        >
          <span className="text-[10px] text-slate-500/70 select-none w-5 text-right shrink-0 group-hover:text-slate-400 font-mono pt-0.5">
            {idx + 1}
          </span>
          <span className="text-left whitespace-pre break-normal flex-1">
            {highlightCodeLine(line)}
          </span>
        </div>
      ))}
    </div>
  );
}

