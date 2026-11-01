# Bug-Fixer Plan: Dynamic Content-Driven Remotion Motion Engine

## Defect ID
BUG-REMOTION-STATIC-GRAPHICS

## Root Cause
- In `SvgMotionDiagram.jsx`, `detectDiagramType` checked `text.includes('واجهة')` against a string containing the lesson definition, causing almost all lessons to evaluate to `'client-server'`.
- The SVG markup in `SvgMotionDiagram.jsx` contained hardcoded static mock texts and cards ("متصفح المستخدم", "الخادم السحابي", "Database") instead of binding to the active `subtopic` data (`subtopic.infographic.steps`, `subtopic.terms`, `subtopic.title`, `subtopic.simpleCode`).

## Target Files
- `react/src/components/motion/compositions/SvgMotionDiagram.jsx`
- `react/src/components/motion/compositions/ReactLessonComposition.jsx`

## Planned Changes
1. Refactor `detectDiagramType` to prioritize distinct structural archetypes (Comparison, Pipeline, WebTrio, ClientServer, DomTree, ComponentFlow, UniversalEngine) based on `subtopic.id` and explicit title matchers.
2. Re-architect SVG diagrams to dynamically render the active lesson's real steps (`steps[0..2]`), terms (`terms[0..2]`), code snippet, and execution pipeline.
3. Maintain 16:9 responsive viewport (`viewBox="0 0 800 450"`, `preserveAspectRatio="xMidYMid meet"`), centered alignment (`margin: 0 auto`), and calm spring physics.

## Verification
- Unit test script checking diagram type distribution across lessons.
- DevTools browser verification across consecutive lessons (`1.1.a`, `1.1.b`, `1.1.c`, `1.2.a`).
- Full production build and Vercel deployment with HTTP 200 checks.

