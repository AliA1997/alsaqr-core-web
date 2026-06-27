# CLAUDE constitution for AlSaqr Core Web which is reusable cdn for all common components in AlSaqr used throughout social media, meetup, and zook.

## Overview
- Purpose of this project to be implemented across multiple React 18 projects, not have it backwards compatible.

## Tech Stack
- React 18
- TailwindCSS +4
- Gradio Client 
- Supabase Client
- MobX

## Architectural Principles
- All common components stored in components folder
- Components responsible for layout are found in the layout folder
- Common constants are found in the constants folder.
- Gradio client configuration is in the gradio folder
- Supabase client configuration is in the supabase folder
- Mobx configuration is in the mobx folder.
- Typescript models that are commonly used throughout 3 projects is in the typings.d.ts file.
- Regard performance on how it's bundled.
- Will be deployed on a cdn in jsdelivr
- Do NOT read `import.meta.env` inside the library and do NOT bake env/secrets into the build. A jsDelivr static bundle has no runtime env, so any inlined value ends up committed in `dist/` (public) — which is why the old "deployed .env not on github" model cannot work for a CDN.
- Configuration is supplied at runtime by each consuming app via `configureAlSaqr({...})` (see `src/config.ts`), sourced from that app's own private `.env`. The CDN bundle ships code only — no secrets are committed.
- Keep real secrets out of the browser entirely (e.g. HuggingFace token, auth secret) — proxy them through a backend. Only public-by-design values (Supabase anon key protected by RLS, public URLs) may be passed to the client.

### jsDelivr CDN Constraints
- Keep every single output file under 20 MB and the whole package under 150 MB (GitHub limits). Keep bundles far below this for performance.
- Build minified, tree-shakeable ESM with `"sideEffects": false`; externalize peer deps (react, react-dom) so the CDN bundle stays small.
- Ship pre-minified `.min.js` files and set the `jsdelivr`/`unpkg` field in package.json to the minified entry.
- Pin a version/tag for production usage — pinned versions and commits are cached ~1 year; branches are only cached 12 hours and `@latest`/aliases for 7 days.
- Reference files by tagged version (e.g. `cdn.jsdelivr.net/gh/<org>/alsaqr-core-web@<tag>/...`), never by branch, for best caching.
- HTML files are served as `text/plain` by jsDelivr — do not rely on serving HTML from the CDN.

## Reference Repository
Use the existing AlSaqr frontend as the source of truth for common components and functionality. Port and adapt from these files/folders:
- Main repo: https://github.com/AliA1997/alsaqr-frontend-v2
- Gradio & Supabase client config: https://github.com/AliA1997/alsaqr-frontend-v2/tree/main/src/utils/infrastructure
- Common components: https://github.com/AliA1997/alsaqr-frontend-v2/tree/main/src/common
- Layout components: https://github.com/AliA1997/alsaqr-frontend-v2/tree/main/src/layout
- authStore: https://github.com/AliA1997/alsaqr-frontend-v2/blob/main/src/stores/authStore.ts
- Common models: https://github.com/AliA1997/alsaqr-frontend-v2/blob/main/src/models/common.ts
- Other auth-related models(auth-related only — do not disregard any auth model): https://github.com/AliA1997/alsaqr-frontend-v2/blob/main/typings.d.ts

### Constraints
- In regards to the mobx store, define a new new one that is used throughout all projects. 
- The only store to copy over is the authStore. 

## Code Patterns
- Don't use useMemo, useCallback since React 19 automatically uses it.
- Use new hooks from React 19 to improve performance.
- Take in perceived performance into account. 
- For commonly used buttons take a submitting prop, if submitting is true. Display the button loader component to indicate that an action is happening.
### Constraints
- Don't make code too complicated, follow proper practices in regards to length of code. 
- Improve components from referenced repository, only if necessary.

## SDD Workflow
Spec-Driven Development. Follow these steps in order for every feature. Keep each step short and clear.

1. **Specify** — Write down what we are building and why. Describe the behavior and the acceptance criteria. No code yet.
2. **Plan** — Decide which referenced files/folders to port from the reference repository, and list the components, models, and stores involved.
3. **Tasks** — Break the plan into small, ordered tasks. Each task should be one focused change.
4. **Implement** — Build the tasks in order. Reuse from the reference repository first; only write new code when nothing reusable exists.
5. **Review** — Check the result against the spec and the constraints below before considering it done.

### Constraints
- The spec comes before the code. Do not start implementing until the spec and plan exist.
- Reuse before rewrite: prefer porting from the reference repository over writing from scratch.
- Keep specs and plans simple and readable — short bullet points, not long documents.
- Every feature must respect the Architectural and Code Pattern constraints in this file.