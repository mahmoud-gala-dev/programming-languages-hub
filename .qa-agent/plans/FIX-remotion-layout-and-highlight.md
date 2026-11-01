# Bug-Fixer Plan: Remotion Layout, Syntax Highlighting & SVG Overflow Fix

## Defect ID
BUG-REMOTION-LAYOUT-HIGHLIGHT-OVERFLOW

## Identified Problems
1. Bidi inversion on code inside SVG: `useState(...)` rendered as `(... )const [data, setData] = useState` and `<Child />` rendered as `</ Child>`.
2. SVG text overflow in `dom-tree`: Circle `r=22` too small for component tags causing text spilling.
3. SVG text overflow in `comparison`: Bottom summary bar rendered as single un-truncated `<text>` line spanning over 1400px and overflowing the 800px canvas; duplicated card content; flipped numbers (`.1` and `.2`).
4. Golden Code in `ReactLessonComposition.jsx` lacked syntax highlighting (rendered in monochrome `<pre><code>`).
5. Spacing and component margins needed professional breathing room per `baseline-ui`.

## Target Files
- `react/src/components/motion/compositions/SvgMotionDiagram.jsx`
- `react/src/components/motion/compositions/ReactLessonComposition.jsx`

## Planned Fixes
- Add explicit `direction="ltr"` and `unicodeBidi="embed"` to code elements in SVG.
- Upgrade DOM tree nodes from fixed small circles to auto-fitting rounded capsules.
- Fix comparison summary bar to fit neatly inside the card boundary, separate numbers into dedicated badge badges.
- Integrate `tokenizeSnippet` in `ReactLessonComposition.jsx` with line numbers and IDE-style header.
- Refine spacing and padding across Remotion player.

