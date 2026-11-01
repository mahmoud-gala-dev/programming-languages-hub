# E2E Test Infra: Node.js Educational Roadmap Platform

## Test Philosophy
- **Opaque-box & Requirement-driven**: Testing is strictly derived from user requirements in `ORIGINAL_REQUEST.md` and `MASTER_FEATURES_PROMPT.md`, independent of internal implementation details.
- **Methodology**: Systematic 4-Tier Approach:
  - Category-Partition Testing
  - Boundary Value Analysis (BVA)
  - Pairwise Combinatorial Testing
  - Real-World End-to-End Workload Testing

---

## Feature Inventory Coverage Matrix

| # | Feature | Requirement Source | Tier 1 (Feature) | Tier 2 (Boundary) | Tier 3 (Cross-Feature) | Tier 4 (Real-World) |
|---|---------|-------------------|:----------------:|:-----------------:|:----------------------:|:-------------------:|
| 1 | 23-Section Curriculum Completeness | ORIGINAL_REQUEST §R1 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 2 | Dynamic Chunking & Lazy Loading | ORIGINAL_REQUEST §R1, R2 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 3 | 10 Pedagogical Points per Subtopic | ORIGINAL_REQUEST §R1 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 4 | Topic Quizzes (3) & Exercises (1) | ORIGINAL_REQUEST §R1 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 5 | Section Summaries, Cheatsheets & Projects | ORIGINAL_REQUEST §R1 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 6 | Gemini API Multi-Key Pool | MASTER_FEATURES §2.1 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 7 | Parallel Key Health Probe & 429 Failover | MASTER_FEATURES §2.1 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 8 | Model Fallback Chain & Mock Tutor | MASTER_FEATURES §2.1 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 9 | 7 Programming Fonts Studio | MASTER_FEATURES §2.2 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 10 | Pro Highlight Studio (6 Neon Colors) | MASTER_FEATURES §2.3 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 11 | IndexedDB Storage & JSON Export | MASTER_FEATURES §2.3 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 12 | Inline AI Explainer & Web Speech TTS | MASTER_FEATURES §2.3 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 13 | Strict LTR Engine & Cairo Isolation | MASTER_FEATURES §2.4 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 14 | Real Fullscreen Code Studio (Portal) | MASTER_FEATURES §2.5 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 15 | Fullscreen Line Notes & IDE Telemetry | MASTER_FEATURES §2.5 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 16 | Secure Dark Sandbox Code Preview | MASTER_FEATURES §2.6 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 17 | 5-Theme Infographic Studio | ORIGINAL_REQUEST §R3 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 18 | SVG Architecture Concept Diagrams | ORIGINAL_REQUEST §R3 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 19 | 4K PNG Infographic Export | ORIGINAL_REQUEST §R3 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 20 | Complete 23-Section PDF Book Export | ORIGINAL_REQUEST §R4 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 21 | Responsive Mobile Drawer (320px-1920px) | ORIGINAL_REQUEST §R2 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 22 | Scroll Reading Progress & Confetti FAB | MASTER_FEATURES §2.8 | ≥5 cases | ≥5 cases | ✓ | ✓ |
| 23 | Egyptian AI Shortcuts Encyclopedia | MASTER_FEATURES §2.10 | ≥5 cases | ≥5 cases | ✓ | ✓ |

---

## Test Architecture

### 1. Test Harness & Runner
- **Runner Location**: `e:\KD\lang\nodejs\tests\runner.js`
- **Invocation**: `node tests/runner.js` or `npm test` inside `e:\KD\lang\nodejs`
- **Execution Mode**: Fast, deterministic, zero-external-network dependency (mocks Gemini endpoints when testing failovers, verifies actual DOM, styles, and bundle artifacts).
- **Pass/Fail Semantics**: 
  - Exit code `0` on 100% pass.
  - Non-zero exit code on any failure, with exact assertion diffs and tier breakdown.

### 2. Test Directory Layout
```
e:\KD\lang\nodejs/tests/
├── runner.js                      # Central test orchestrator & reporter
├── tier1_features/                # Tier 1: Functional tests per feature in isolation
│   ├── curriculum_coverage.test.js
│   ├── gemini_pool.test.js
│   ├── code_fonts.test.js
│   ├── highlight_studio.test.js
│   ├── ltr_engine.test.js
│   ├── fullscreen_studio.test.js
│   ├── sandbox_preview.test.js
│   ├── infographic_studio.test.js
│   ├── pdf_export.test.js
│   └── responsive_layout.test.js
├── tier2_boundaries/              # Tier 2: Boundary, corner cases, empty inputs, extremes
│   ├── boundary_inputs.test.js
│   ├── rate_limit_and_timeouts.test.js
│   ├── memory_and_chunking.test.js
│   └── dom_color_sanitization.test.js
├── tier3_interactions/            # Tier 3: Pairwise feature combinations
│   ├── font_and_fullscreen.test.js
│   ├── highlight_and_tts.test.js
│   ├── theme_and_infographic_export.test.js
│   └── drawer_and_navigation.test.js
└── tier4_real_world/              # Tier 4: Complete user journey workloads
    ├── beginner_student_journey.test.js
    ├── full_curriculum_audit.test.js
    ├── pdf_book_compilation.test.js
    └── shortcuts_and_ai_study.test.js
```

---

## Real-World Application Scenarios (Tier 4)

| # | Scenario | Features Exercised | Complexity |
|---|----------|--------------------|------------|
| 1 | **Beginner Student Journey**: Complete onboarding, navigate Section 1, customize Fira Code font, highlight a concept in amber, read via TTS, take quiz, and celebrate with confetti. | F1, F3, F4, F9, F10, F12, F22 | High |
| 2 | **Full Curriculum Audit**: Verify that all 23 sections, 126 topics, and 981 subtopics can be lazy-loaded, contain 10 pedagogical points, Arabic line comments, and complete quizzes/exercises. | F1, F2, F3, F4, F5 | High |
| 3 | **Pro Code Study Session**: Open Section 8 (Express.js), expand CodeBlock to 100vw × 100vh Portal, add line notes in IndexedDB, toggle line wrap, test in sandbox, switch to JetBrains Mono. | F9, F11, F14, F15, F16 | High |
| 4 | **Universal Infographic Exploration & 4K Export**: Open Infographic Gallery, search for "Event Loop", switch theme to `cosmic`, verify SVG architecture diagram, and export 4K PNG. | F17, F18, F19 | High |
| 5 | **Complete 23-Section PDF Book Compilation**: Open Book modal, switch to full curriculum mode, verify table of contents, check print CSS page breaks, verify DOM color sanitization. | F1, F20 | High |
| 6 | **Mobile Responsive Audit**: Emulate 320px viewport, open slide-over drawer, select lesson, verify auto-close, verify zero horizontal overflow, and test Egyptian shortcuts modal. | F21, F23 | Medium |

---

## Coverage Thresholds
- **Tier 1 (Feature Coverage)**: ≥5 test cases per feature (≥ 115 tests).
- **Tier 2 (Boundary & Corner Cases)**: ≥5 boundary conditions per feature (≥ 115 tests).
- **Tier 3 (Cross-Feature Combinations)**: ≥25 pairwise interaction tests.
- **Tier 4 (Real-World Workloads)**: ≥6 comprehensive end-to-end user workflows.
- **Total Minimum Target**: ≥ 261 automated tests.
