# Spec 0003 — Common Router/Store Components (Component Batch 3)

Status: **Draft (not started)**
Scope note: layout components (Sidebar, PageContainer, Widgets, SidebarRow,
DarkSwitch) moved to **spec 0005**. This spec now covers only the *common*
components (from `src/common`) that need routing or a portal/store abstraction.

## Specify
Port the common navigation components that depend on routing and/or a
portal/store. Because the constitution copies **only** `authStore`, decide per
dependency whether to: (a) introduce a thin shared abstraction in core-web,
(b) accept an externalized peer dep, or (c) expose state via props.

**Acceptance criteria**
- `Modal`, `Links`, `IconButtons`, `Tabs` build and render.
- No hard dependency on feature stores. Store-driven bits are parameterized via
  props or backed by a new core-web store.
- `react-router` is a peer dependency (externalized), not bundled.
- Build stays green and within jsDelivr limits.

## Decisions to make (record answers before coding)
1. **Routing**: add `react-router-dom` as an externalized peer dep? (Components
   use `useLocation`/`useNavigate`/`react-router`.) Recommended: yes, external.
2. **Portal**: `Modal` uses `react-dom` portals + `useStore` (modalStore).
   Replace modalStore coupling with props (`isOpen`/`onClose`) or add a small
   core-web `modalStore` in `src/mobx`.
3. **Enums**: `IconButtons` imports `@enums` — replace with a local union/props.

## Plan (port from `src/common`)
**Group A — low coupling once routing is a peer dep:**
- `Links.tsx` (react-router + `OptimizedImage`), `IconButtons.tsx`
  (react-router + heroicons + `@enums` → replace enum with a local union/props),
  `Tabs.tsx` (composes Links/Titles/Image/Containers/CustomLoader).

**Group B — needs a new abstraction:**
- `Modal.tsx` (portal; decouple from modalStore via props or core-web store).

## Tasks
1. Confirm decisions 1–3 with the user.
2. Add `react-router-dom` peer dep + vite external (if approved).
3. Port `Modal` (props-driven).
4. Port `Links`, `IconButtons`, `Tabs`.
5. Export; `npm run build`; verify size; review.

## Constraints (from CLAUDE.md)
- Spec before code; reuse before rewrite; improve only if necessary.
- Only `authStore` copied; any other state = new core-web store or props.
- Keep code simple; respect jsDelivr/performance constraints.
