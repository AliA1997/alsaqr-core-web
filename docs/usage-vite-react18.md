# Using alsaqr-web-core in a React 18 + Vite project

Two ways to consume it. Pick one:

- **Method A — npm install from the tagged GitHub repo** (recommended for any
  Vite/bundler app: one React copy, types, tree-shaking).
- **Method B — pure jsDelivr CDN via importmap** (no install; best for plain
  HTML or when you deliberately externalize shared deps).

Both run the *same* published bundle. Pin a tag (`@v0.0.1`) — never a branch.

> The CDN bundle contains **no secrets and no config** — the library does not
> read `import.meta.env`. Each app supplies its own values at runtime via
> `configureAlSaqr({...})` (below), sourced from the app's **own private `.env`**.
> Call it once, before rendering anything that uses Supabase/the API.

---

## Method A — install from GitHub tag (recommended)

```bash
# in your React 18 + Vite app
npm i github:AliA1997/alsaqr-core-web#v0.0.1
npm i react@18 react-dom@18 react-router-dom@6   # peers (singletons)
```

`mobx`, `formik`, `framer-motion`, `react-datepicker`, `axios`,
`@supabase/supabase-js`, etc. install automatically (they're the package's deps).

**`src/main.jsx`**
```jsx
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  configureAlSaqr, StoreContext, rootStore, ThemeProvider,
} from "alsaqr-web-core";
import "alsaqr-web-core/style.css";   // ships the components' styles
import App from "./App.jsx";

// Values come from THIS app's private .env (never committed).
configureAlSaqr({
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  apiBaseUrl: import.meta.env.VITE_PUBLIC_BASE_API_URL,
  baseUrl: import.meta.env.VITE_PUBLIC_BASE_URL,
  zookUrl: import.meta.env.VITE_PUBLIC_ZOOK_URL,
  meetupUrl: import.meta.env.VITE_PUBLIC_MEETUP_URL,
  // hfToken: prefer proxying NSFW checks via your API instead of shipping it.
});

createRoot(document.getElementById("root")).render(
  <StoreContext.Provider value={rootStore}>
    <ThemeProvider defaultTheme="system">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StoreContext.Provider>
);
```

**`src/App.jsx`** — the Sidebar/PageContainer are app-typed, and the Modal is
driven by *your* modal state (here a tiny `useState` "modalStore"):
```jsx
import { useState } from "react";
import { PageContainer } from "alsaqr-web-core";

export default function App() {
  const [modal, setModal] = useState({ isOpen: false, content: null });
  const close = () => setModal({ isOpen: false, content: null });
  const onShowModal = (key) => {
    if (key === "login") setModal({ isOpen: true, content: <p>Sign in…</p> });
    if (key === "location") setModal({ isOpen: true, content: <p>Pick location…</p> });
  };

  return (
    <PageContainer
      appType="meetup"                 // "default" | "meetup" | "zook"
      onShowModal={onShowModal}
      modal={{ ...modal, onClose: close }}
    >
      <h1 className="p-4 dark:text-gray-50">Home</h1>
    </PageContainer>
  );
}
```

Done. `npm run dev` works normally because everything is a real dependency.

---

## Method B — pure jsDelivr CDN via importmap (no install)

The browser resolves bare imports from an importmap, so **all shared libs
(including React 18) must come from the CDN** — otherwise you get two React
copies and broken hooks. `?deps=react@18.3.1` pins esm.sh peers to one React.

**`index.html`**
```html
<!-- styles from the CDN -->
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/AliA1997/alsaqr-core-web@v0.0.1/dist/style.css" />

<script type="importmap">
{
  "imports": {
    "react": "https://esm.sh/react@18.3.1",
    "react/jsx-runtime": "https://esm.sh/react@18.3.1/jsx-runtime",
    "react-dom": "https://esm.sh/react-dom@18.3.1",
    "react-dom/client": "https://esm.sh/react-dom@18.3.1/client",
    "react-router-dom": "https://esm.sh/react-router-dom@6?deps=react@18.3.1,react-dom@18.3.1",
    "mobx": "https://esm.sh/mobx@6",
    "mobx-react-lite": "https://esm.sh/mobx-react-lite@4?deps=react@18.3.1",
    "formik": "https://esm.sh/formik@2?deps=react@18.3.1",
    "framer-motion": "https://esm.sh/framer-motion@11?deps=react@18.3.1,react-dom@18.3.1",
    "react-datepicker": "https://esm.sh/react-datepicker@6?deps=react@18.3.1,react-dom@18.3.1",
    "axios": "https://esm.sh/axios@1",
    "universal-cookie": "https://esm.sh/universal-cookie@7",
    "@supabase/supabase-js": "https://esm.sh/@supabase/supabase-js@2",
    "@gradio/client": "https://esm.sh/@gradio/client@1",
    "alsaqr-web-core": "https://cdn.jsdelivr.net/gh/AliA1997/alsaqr-core-web@v0.0.1/dist/alsaqr-web-core.js"
  }
}
</script>
```

Your `main.jsx` / `App.jsx` are identical to Method A (including the
`configureAlSaqr({...})` call), **except** drop the
`import "alsaqr-web-core/style.css"` line (the `<link>` handles CSS).

**Tell Vite not to bundle the CDN libs** so the importmap wins —
**`vite.config.ts`**:
```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const cdn = [
  "react", "react-dom", "react-dom/client", "react/jsx-runtime",
  "react-router-dom", "mobx", "mobx-react-lite", "formik", "framer-motion",
  "react-datepicker", "axios", "universal-cookie",
  "@supabase/supabase-js", "@gradio/client", "alsaqr-web-core",
];

export default defineConfig({
  plugins: [react()],
  build: { rollupOptions: { external: cdn } },
});
```

Notes:
- This externals setup applies to `vite build`/`vite preview`. For `vite dev`,
  either install the peers locally (hybrid: dev bundles them, prod uses CDN) or
  add a dev externalize plugin. Plain static HTML needs no bundler at all.
- Use a CDN that serves ESM with resolved deps (esm.sh shown). jsDelivr's
  `/npm/` also works but you must pin peer deps yourself.

---

## Required public assets (`/icons`)

The `Sidebar`/`DarkSwitch` reference icons by absolute path, e.g.
`/icons/explore.svg`, `/icons/dark-mode.svg`. Place the matching SVGs in your
app's `public/icons/` folder (same names the source tenant apps use). Missing
icons just render as broken images — links still work.

## Security note
The CDN bundle no longer inlines any config, so **no secrets are committed**.
Each app injects its own values via `configureAlSaqr` from its private `.env`.
Still keep genuine secrets out of the browser entirely: the **HuggingFace token**
and **auth secret** belong server-side — proxy NSFW checks through your API. The
Supabase **anon key is fine** client-side (public by design, protected by RLS).
