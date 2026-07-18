import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";

// Keep big shared libraries OUT of the bundle so the CDN file stays small and
// fast (see jsDelivr constraints in CLAUDE.md). Consumers provide these.
const external = [
  "react",
  "react-dom",
  "react/jsx-runtime",
  "mobx",
  "mobx-react-lite",
  "@gradio/client",
  "@supabase/supabase-js",
  "axios",
  "universal-cookie",
  // Component libs that hold React context / are large — keep shared, not bundled.
  // (@heroicons is a tiny context-free SVG set and is intentionally bundled.)
  "formik",
  "framer-motion",
  "react-datepicker",
  "react-router-dom",
];

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({ rollupTypes: true, tsconfigPath: "./tsconfig.json" }),
  ],
  build: {
    // Minified by default in production builds.
    minify: "esbuild",
    sourcemap: true,
    cssCodeSplit: false,
    // ESM only. A UMD build is pointless here: every heavy dep below is
    // externalized, so a <script> tag consumer would have to hand-load 12
    // globals (React, mobx, formik, framer-motion, ...) before ours evaluates.
    // Consumers import the ESM entry — via a bundler or jsDelivr's `/+esm`.
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: () => "alsaqr-web-core.js",
    },
    rollupOptions: {
      external,
    },
  },
});
