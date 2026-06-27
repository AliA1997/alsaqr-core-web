# Spec 0001 — Presentational Primitives (Component Batch 1)

Status: **Done** — ported Titles, Alerts, Accordion, Select, RadioBoxes,
CheckboxCard, MultiSelect, Inputs (incl. react-datepicker), Image, Containers.
Build green; ESM 35.3 kB / UMD 25.9 kB / CSS 21.3 kB. `SearchInput` was skipped
(empty in the reference repo).

## Specify
Port the self-contained presentational components from the reference repo's
`src/common` into `src/components`. These are the building blocks that the
auth/layout batches will compose later. Batch 1 is scoped to components that do
**not** depend on any MobX store (other than authStore), `react-router`, or
`react-dom` portals — so they stay aligned with the "only authStore" constraint.

**Acceptance criteria**
- Each component renders standalone and is exported from `src/components`.
- `npm run build` stays green; bundle stays small (jsDelivr constraints).
- No imports of non-auth stores, `react-router`, or app-specific `@enums`.
- Buttons that take a `submitting` prop show `ButtonLoader` while submitting.

## Plan (port from `src/common`)
Grouped by dependency footprint (verified from imports):

**Group A — zero / react-only deps (port as-is):**
- `Titles.tsx`, `SearchInput.tsx`, `Alerts.tsx`

**Group B — form deps (`formik`):**
- `Select.tsx`, `RadioBoxes.tsx`, `CheckboxCard.tsx`, `MultiSelect.tsx`
  (`MultiSelect` also needs `@heroicons/react`)

**Group C — animation dep (`framer-motion`):**
- `Accordion.tsx`

**Group D — internal-only deps (compose Group A/this batch):**
- `Image.tsx` (needs one constant from `@utils/constants` — port that constant)
- `Containers.tsx` (uses `framer-motion`, `typings`, `Image`)

**Deferred from this batch (need a perf/scope decision):**
- `Inputs.tsx` — pulls `react-datepicker` (+css). Moderate weight.
- `EmojiPopover.tsx` — pulls `@emoji-mart/react` + data. Heavy for a CDN.
- `Tabs.tsx` — depends on `Links` (which needs `react-router`) → router batch.

**New dependencies introduced:** `formik`, `framer-motion`, `@heroicons/react`
(all externalized in `vite.config.ts`, not bundled).

## Tasks
1. Add `formik`, `framer-motion`, `@heroicons/react` to deps + vite externals.
2. Port Group A (3 files) → `src/components`, export each.
3. Port Group B (4 files), export each.
4. Port Group C (`Accordion`), export.
5. Port the constant `Image` needs into `src/constants`, then port `Image` + `Containers`.
6. `npm run build`; confirm green + bundle size.
7. Review against acceptance criteria.

## Constraints (from CLAUDE.md)
- Spec before code; reuse before rewrite; improve only if necessary.
- Keep code simple and reasonably short.
- Respect jsDelivr/performance constraints — avoid heavy deps without a decision
  (why `Inputs`/`EmojiPopover` are deferred).
