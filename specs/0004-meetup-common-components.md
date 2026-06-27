# Spec 0004 — Meetup-Tenant Common Components (Component Batch 4)

Status: **Draft (not started)**
Source repo: https://github.com/AliA1997/alsaqr-meetup (`src/common`)

## Specify
Port the common components that exist in the **alsaqr-meetup** tenant app but are
**not** already in core-web and are **not** redundant with existing/specced
components. These widen the shared CDN surface for the meetup + zook tenants.

**Acceptance criteria**
- Each ported component renders standalone (or via documented props) and is
  exported from `src/components`.
- No coupling to feature stores other than `authStore`; no feature models
  (event/group/etc.) — decouple via props/render-props instead.
- `npm run build` stays green and within jsDelivr limits.
- Heavy deps follow the project rule: include only if the build stays green and
  the bundle doesn't bloat; otherwise drop/defer.

## In scope (new — not in core-web, not in specs 0001–0003)
Grouped by dependency / coupling footprint (verified from imports):

**Group A — self-contained (React only):**
- `Cards.tsx` — `Card`, `CardHeader`, `CardTitle`, `CardDescription`,
  `CardContent`, `CardFooter` (forwardRef primitives). Zero deps.
- `Buttons.tsx` — `InfoButton`, `AbsoluteSuccessButton`, `AbsoluteDangerButton`
  (+ box buttons). NOTE: the **meetup** `Buttons` is presentational (no store /
  formik / gradio coupling) unlike frontend-v2's — so it ports cleanly. Honor
  the constitution's button rule: `submitting` → show `ButtonLoader`.

**Group B — new third-party dep:**
- `Carousels.tsx` — needs `embla-carousel-react` (+ heroicons, already present).
- `UpsertBoxIconButtons.tsx` — needs `@emoji-mart/react` + `@emoji-mart/data`
  (HEAVY). Apply the heavy-dep rule; if it bloats the bundle, externalize or
  defer. (This also unblocks the deferred `EmojiPopover` from spec 0001.)

**Group C — heavy dep + feature-coupled (needs decoupling):**
- `Map.tsx` — `MapView`, `DraggableMap`. Needs `leaflet` (+ css). In meetup it
  imports `EventCard`/`GroupCard` and event/group models — **decouple**: accept a
  marker-render prop and a generic marker type instead of feature components.
- `LocationModal.tsx` — composes `Map` + `Modal` (spec 0003) + a `locationApiClient`.
  In meetup it reads `modalStore`; **decouple** to props (`isOpen`/`onClose`/
  `onSelect`) or add a small core-web store. Depends on spec 0003's `Modal`.

## Out of scope (reviewed — intentionally NOT added)
- **Already in core-web:** `Containers`, `CustomLoader`, `Image`, `Titles`.
- **Already specced:** `AuthModals` (0002); `IconButtons`, `Links`, `Modal`,
  `Tabs`, `PageContainer`, `Sidebar`, `SidebarRow`, `LoadingSpinner` (0003).
- **Too similar (excluded):** `Collapsible.tsx` — duplicates `Accordion`'s
  expand/collapse behavior; only adds responsive `useMediaQuery`. Prefer
  extending `Accordion` with a responsive prop over a second component.

## New dependencies introduced (externalize per the bundling rule)
- `embla-carousel-react` (Carousels)
- `leaflet` (Map)
- `@emoji-mart/react`, `@emoji-mart/data` (UpsertBoxIconButtons) — heavy

## Tasks
1. Port Group A (`Cards`, `Buttons`); export; build.
2. Port Group B (`Carousels`, then `UpsertBoxIconButtons`); measure bundle size
   after each — drop/externalize if it breaks the build or bloats.
3. Port Group C: decouple `Map` from feature cards/models (render-prop), then
   `LocationModal` (props-driven) — requires spec 0003's `Modal`.
4. `npm run build`; verify size; review against acceptance criteria.

## Constraints (from CLAUDE.md)
- Spec before code; reuse before rewrite; improve only if necessary.
- Only `authStore`; other state via props or a new core-web store.
- Keep code simple; respect jsDelivr/performance constraints.
