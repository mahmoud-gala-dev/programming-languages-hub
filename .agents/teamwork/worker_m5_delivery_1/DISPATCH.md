# Dispatch — Milestone 5 Implementation Worker

## 2026-10-30T21:25:00Z

### Mandatory Integrity Warning
> DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

---

### Mission
Implement and deploy all components and enhancements for **Milestone 5: Infographics Studio, Universal Gallery & Complete PDF Book Generator**, wire them globally into the platform, and resolve the 4 pre-existing test gaps so that **274/274 tests pass (100.0%)** and `npm run build` succeeds cleanly.

---

### Reference & Source Material
Subagents have completed thorough investigations and generated complete proposed drop-in code. You MUST read and utilize:
1. `e:\KD\lang\.agents\teamwork\ORIGINAL_REQUEST.md` (Mandatory user specification)
2. `e:\KD\lang\PROJECT.md` (Global architecture, contracts, and layout)
3. `e:\KD\lang\.agents\teamwork\explorer_m5_infographics_1\handoff.md` (Infographics & Gallery design)
4. `e:\KD\lang\.agents\teamwork\explorer_m5_infographics_1\proposed_InfographicCard.jsx` (Ready component)
5. `e:\KD\lang\.agents\teamwork\explorer_m5_infographics_1\proposed_InfographicGalleryModal.jsx` (Ready component)
6. `e:\KD\lang\.agents\teamwork\explorer_m5_book_pdf_1\handoff.md` (PDF Book design & Node 24 ESM fix)
7. `e:\KD\lang\.agents\teamwork\explorer_m5_book_pdf_1\proposed_BookViewModal.jsx` (Ready component)
8. `e:\KD\lang\.agents\teamwork\explorer_m5_section_views_tests_1\handoff.md` (Section views & test fixes)

---

### Detailed Tasks

#### 1. Deploy InfographicCard (`src/components/infographic/InfographicCard.jsx`)
- Deploy using `e:\KD\lang\.agents\teamwork\explorer_m5_infographics_1\proposed_InfographicCard.jsx`.
- Features: 5 switchable neon themes (`cyber`, `emerald`, `sunset`, `cosmic`, `ruby`), SVG backend architecture diagrams (`renderSvgArchitectureDiagram`), golden code with Arabic comments (`HighlightedCodeView`), real-life analogy, 3-step execution flow, golden rule & deadly pitfalls (`ShieldAlert`), 4K PNG export (`exportImage.js`), and open gallery launcher (`onOpenGallery`).

#### 2. Deploy InfographicGalleryModal (`src/components/gallery/InfographicGalleryModal.jsx`)
- Create directory `src/components/gallery` if not existing.
- Deploy using `e:\KD\lang\.agents\teamwork\explorer_m5_infographics_1\proposed_InfographicGalleryModal.jsx`.
- Features: React Portal to `document.body` (`z-[99999]`), universal navigation across all 981 lessons / 23 sections, dual filters (23 sections + 5 themes), search across titles/analogies, Grid and Carousel view modes, active infographic 4K PNG export.

#### 3. Expand Infographic Registry (`src/utils/infographicRegistry.js`)
- Add `loadAllInfographics()`, `getAllInfographics()`, `getInfographicsBySectionId()`, and `searchInfographics()` as specified in Explorer 1 handoff. Ensure in-memory caching of all 981 subtopics for zero lag.

#### 4. Update Image Export Utility (`src/utils/exportImage.js`)
- Ensure `export const exportToImage = downloadElementAsPng;` is exported.
- Include SVG ForeignObject fallback if canvas fails, and return boolean status.

#### 5. Deploy Complete 23-Section PDF Educational Book Generator (`src/components/book/BookViewModal.jsx`)
- Deploy using `e:\KD\lang\.agents\teamwork\explorer_m5_book_pdf_1\proposed_BookViewModal.jsx`.
- Features: React Portal to `document.body` (`z-[99999]`), async compilation of all 23 sections, 126 topics, and 981 subtopics via `fetchSectionData`, Table of Contents with section/topic page references, smooth anchor jumping, dark cyberpunk screen view + high-contrast print CSS, A4 page breaks (`page-break-after: always`), vector printing via `window.print()`.

#### 6. Section Views Dynamic Data Integration (`src/components/views/`)
- Update `SummaryView.jsx`: dynamically bind to `sectionData.summary` (`overview`, `goldenRules`, `keyTakeaways`).
- Update `CheatSheetView.jsx`: accept `sectionData` prop, dynamically bind to `sectionData.cheatSheet` (`title`, `entries`/`items`), category filter, search.
- Update `ProjectView.jsx`: accept `sectionData` prop, dynamically bind to `sectionData.miniProject` and `sectionData.project` (`scenario`, `techStack`, `directoryStructure`, `codeFiles`, `requirements`, `completeSolution`), tabbed code files, one-click solution download.

#### 7. Global Wiring in `src/App.jsx`, `src/components/layout/Navbar.jsx`, `src/components/lesson/LessonViewer.jsx`
- In `App.jsx`:
  - Manage state for `isGalleryOpen` and `isBookOpen`.
  - Pass `onOpenInfographicGallery={() => setIsGalleryOpen(true)}` to `Navbar` and `LessonViewer`.
  - Pass `onOpenBook={() => setIsBookOpen(true)}` to `Navbar`.
  - Pass `sectionData={currentSection}` to `SummaryView`, `CheatSheetView`, and `ProjectView`.
  - Mount `<InfographicGalleryModal>` and `<BookViewModal>`.
- In `Navbar.jsx`: Ensure both buttons trigger the respective callbacks.
- In `LessonViewer.jsx`: Pass `onOpenGallery` to `InfographicCard`. Allow rendering of infographic card dynamically for all lessons.

#### 8. Resolve Pre-Existing Test Failures (Target: 274/274 tests pass - 100.0%)
- **`MEM.2`**: In `src/data/sections/section22.js`, optimize repetitive boilerplate in code examples across subtopics per Explorer 3 handoff so the file size drops below 950 KB (currently 1147.3 KB). Preserve all 99 subtopics and required properties!
- **`MEM.4` & `MEM.5`**: In `src/data/roadmapRaw.json`, ensure the JSON root is an Array of 23 sections with `topics` and `subtopics` containing `id`, `title`, and `englishTitle` matching the curriculum structure (fixes both tests).
- **`E2E.WORKLOAD.4`**: In `tests/test_helper.js`, in `safeImport`, add `{ with: { type: 'json' } }` when importing `.json` files in Node 24 ESM.

---

### Verification Protocol
1. Run `npm run build` in `nodejs/` — MUST succeed in < 4s with 0 errors.
2. Run `node tests/runner.js` in `nodejs/` — MUST achieve **274/274 tests passing (100.0%)**!
3. Document all actions, files touched, verification commands, and results in `.agents/teamwork/worker_m5_delivery_1/handoff.md`.
