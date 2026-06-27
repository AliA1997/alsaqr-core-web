# Spec 0002 — Auth Components (Component Batch 2)

Status: **Draft (not started)**

## Specify
Port the authentication/registration components from the reference repo's
`src/common` into `src/components`. These compose the Batch 1 primitives and the
already-ported `authStore` — so they fit the "only authStore" constraint without
pulling in other feature stores.

**Acceptance criteria**
- `AuthModals` (LoginModal, RegisterModal), `RegisterForm`, `ReviewForm`, and
  `SelectUsersForm` render and drive registration through `authStore`.
- Submit buttons take a `submitting` prop and show `ButtonLoader` while busy.
- `npm run build` stays green; bundle stays within jsDelivr limits.
- No imports of feature stores other than `authStore`; no `react-router`
  (modals are router-free) — if a piece truly needs routing, defer it to Batch 3.

## Plan (port from `src/common`)
- `AuthModals.tsx` → LoginModal / RegisterModal. Likely depends on a base
  `Modal` (Batch 3) → port a router-free `Modal` variant first, or inline a
  lightweight modal shell here.
- `RegisterForm.tsx` → multi-step form using `MyInput`, `Select`, `MultiSelect`,
  `RadioCard`, `MyDatePicker` (all Batch 1) + `authStore.currentRegistrationForm`
  / `setCurrentStepInUserRegistration` / `completeRegistration`.
- `ReviewForm.tsx` → read-only review step of the registration form.
- `SelectUsersForm.tsx` → "users to follow" step; uses
  `userApiClient.getUsersToAdd` (already ported) + `OptimizedImage`.

**Dependencies expected:** `formik` (already added). Possibly `supabase.auth`
OAuth calls (already available). Confirm no new heavy deps; if one appears,
apply the "include only if it doesn't break the build/size" rule.

## Tasks
1. Fetch the four source files; map their exact imports.
2. Resolve the `Modal` dependency (port router-free `Modal` or inline shell).
3. Port `RegisterForm` + `ReviewForm` + `SelectUsersForm`, rewiring imports to
   core-web paths (`./...`, `../mobx`, `../api`, `typings`).
4. Port `AuthModals`, wiring LoginModal (supabase OAuth) + RegisterModal.
5. Export from `src/components`; `npm run build`; verify size.
6. Review against acceptance criteria.

## Constraints (from CLAUDE.md)
- Spec before code; reuse before rewrite; improve only if necessary.
- Only `authStore`; define new stores in `src/mobx` if state is needed.
- Keep code simple; respect jsDelivr/performance constraints.
- Buttons show `ButtonLoader` when `submitting`.
