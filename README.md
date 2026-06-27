# alsaqr-web-core

Reusable CDN of common AlSaqr components, layout, stores, and clients (Gradio,
Supabase, MobX) shared across AlSaqr **social media**, **meetup**, and **zook**.

See [CLAUDE.md](CLAUDE.md) for the project constitution and SDD workflow.

## Build

```bash
npm install
npm run build   # outputs minified ESM + UMD + types to dist/
```

## Use via jsDelivr

Reference a **pinned tag** (cached ~1 year) — never a branch (12h) or `@latest` (7d):

```html
<!-- UMD build for direct <script> usage -->
<script src="https://cdn.jsdelivr.net/gh/AliA1997/alsaqr-core-web@<tag>/dist/alsaqr-web-core.umd.cjs"></script>
```

```js
// ESM build for bundlers / importmaps
import { /* ... */ } from "https://cdn.jsdelivr.net/gh/AliA1997/alsaqr-core-web@<tag>/dist/alsaqr-web-core.js";
```

`react`, `react-dom`, `mobx`, `mobx-react-lite`, `@gradio/client`, and
`@supabase/supabase-js` are **external** (not bundled) to keep the CDN file
small and fast — consumers must load them (e.g. via an importmap).

## jsDelivr constraints respected

- Single files < 20 MB, package < 150 MB.
- Minified, tree-shakeable ESM with `"sideEffects": false`.
- Built `dist/` is committed so jsDelivr can serve from tagged commits.
- Production references use pinned tags for ~1-year caching.
