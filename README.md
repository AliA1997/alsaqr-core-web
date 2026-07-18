# alsaqr-web-core

Reusable CDN of common AlSaqr components, layout, stores, and clients (Gradio,
Supabase, MobX) shared across AlSaqr **social media**, **meetup**, and **zook**.

See [CLAUDE.md](CLAUDE.md) for the project constitution and SDD workflow.

## Build

```bash
npm install
npm run build   # outputs minified ESM + types + style.css to dist/
```

## Use via jsDelivr

Reference a **pinned tag** (cached ~1 year) — never a branch (12h) or `@latest` (7d).

The build is **ESM only**. There is no UMD/`<script>` build: every heavy
dependency is externalized, so a plain `<script>` tag would require hand-loading
a dozen globals before ours evaluates. Import it instead:

```js
import { /* ... */ } from "https://cdn.jsdelivr.net/gh/AliA1997/alsaqr-core-web@<tag>/dist/alsaqr-web-core.js";
```

### The stylesheet is required

Components are styled with Tailwind utilities that ship in a **separate CSS
file**. Without it the components render unstyled:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/AliA1997/alsaqr-core-web@<tag>/dist/style.css">
```

or, from a bundler: `import "alsaqr-web-core/style.css";`

That stylesheet intentionally ships **no Tailwind Preflight**, so it will not
reset or otherwise interfere with the host app's own base styles. It contains
only the `theme` and `utilities` layers plus the datepicker CSS.

`react`, `react-dom`, `mobx`, `mobx-react-lite`, `@gradio/client`,
`@supabase/supabase-js`, `axios`, `formik`, `framer-motion`, `react-datepicker`,
`react-router-dom`, and `universal-cookie` are **external** (not bundled) to keep
the CDN file small and to avoid duplicate React/context instances — consumers
must provide them (via their bundler or an importmap).

## jsDelivr constraints respected

- Single files < 20 MB, package < 150 MB.
- Minified, tree-shakeable ESM. `"sideEffects"` is `["**/*.css"]` — not `false` —
  so the stylesheet import survives consumer tree-shaking.
- Built `dist/` is committed so jsDelivr can serve from tagged commits.
- Production references use pinned tags for ~1-year caching.
