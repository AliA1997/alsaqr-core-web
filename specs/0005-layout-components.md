# Spec 0005 — Layout Components (Component Batch 5)

Status: **Done** — ThemeProvider, DarkSwitch, SidebarRow, Sidebar (app-typed),
Widgets, PageContainer, and prop-driven Modal implemented. Build green (ESM
51.9 kB / UMD 37.8 kB / CSS 21.3 kB); layout render test passes for all three
app types + the prop-driven modal. `react-router-dom` added as externalized peer.
ThemeProvider made SSR-safe (guarded `localStorage`).
Source repos: frontend-v2 (default), alsaqr-meetup, alsaqr-zook (`src/layout`).

## Specify
Port all layout components into `src/layout`. Two app-specific behaviors are
required:
1. **Sidebar** renders a **different set of navigation links per app type**
   (`default` | `meetup` | `zook`), **excluding user-related links** (the bottom
   profile block is not rendered by core-web). Sign In/Out/Settings remain as
   common auth controls.
2. **Modal** is **prop-driven**: the consuming app feeds its own `modalStore`
   state (`isOpen` / `content` / `onClose`) via props — core-web holds no modal
   store (constraint: only `authStore` is copied).

## Decisions (resolved)
1. **Routing** → `react-router-dom` is an externalized **peer dependency**.
2. **Theme** → port a small `ThemeProvider` (+ `useTheme`) into `src/layout`.
3. **Modal** → generic `<Modal isOpen onClose>{content}</Modal>` (portal). The
   app wires `modalStore` → props. No store coupling in core-web.
4. **Feature stores** → not copied. Sidebar reads only `authStore`; everything
   else (navigation, modal triggers) is data/props-driven.
5. **App type** → `AppType` union + `SIDEBAR_LINKS` data table in `src/constants`.

## Sidebar link sets (excluding user-related profile link)
- **default**: Explore, Notifications*, Messages*, Bookmarks*, Lists*,
  Communities*, Marketplace (→ZOOK_URL), Meetups (→MEETUP_URL).
- **meetup**: Notifications, Inbox, My Groups, My Events, Location (modal),
  Groups, Events, Online Events, Local Guides.
- **zook**: Notifications, Inbox, Buying, Selling, Location (modal), Categories
  group (Vehicles, Rentals, Clothing, Electronics, Office Supplies, Pet Supplies,
  Sporting Goods, Toys and Games).
  (* = requiresAuth → triggers the login modal when logged out.)

## Plan / files
- `src/constants` — `AppType`, `SidebarLink`, `SIDEBAR_LINKS`.
- `src/layout/ThemeProvider.tsx` — theme context + `useTheme`.
- `src/layout/DarkSwitch.tsx` — uses `useTheme` + framer-motion.
- `src/layout/SidebarRow.tsx` — presentational row (icon/title/active).
- `src/layout/Sidebar.tsx` — `appType` + `onShowModal` props; data-driven links;
  `authStore` for session; `react-router` `useNavigate`; More menu (Settings/
  Sign In/Sign Out). No useMemo/useCallback (React 19).
- `src/components/Modal.tsx` — `ModalBody`, `ModalPortal`, prop-driven `Modal`,
  prop-driven `ConfirmModal` (`submitting` → `ButtonLoader`).
- `src/layout/Widgets.tsx` — decoupled aside container (children/title).
- `src/layout/PageContainer.tsx` — shell wiring Sidebar + content + Widgets +
  prop-driven Modal.

## Constraints (from CLAUDE.md)
- Spec before code; reuse before rewrite; improve only if necessary.
- Only `authStore`; other state via props (modalStore fed in by the app).
- No `useMemo`/`useCallback` (React 19 auto-memoizes).
- Buttons show `ButtonLoader` when `submitting`.
- `react-router-dom` + `framer-motion` externalized; respect jsDelivr limits.
