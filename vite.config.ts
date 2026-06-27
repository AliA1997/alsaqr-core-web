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
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "AlSaqrWebCore",
      formats: ["es", "umd"],
      fileName: (format) =>
        format === "es" ? "alsaqr-web-core.js" : "alsaqr-web-core.umd.cjs",
    },
    rollupOptions: {
      external,
      output: {
        // Keep tree-shaking friendly chunking; globals for UMD <script> usage.
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
          mobx: "mobx",
          "mobx-react-lite": "mobxReactLite",
          "@gradio/client": "GradioClient",
          "@supabase/supabase-js": "supabase",
          axios: "axios",
          "universal-cookie": "Cookies",
          formik: "Formik",
          "framer-motion": "FramerMotion",
          "react-datepicker": "DatePicker",
          "react-router-dom": "ReactRouterDOM",
        },
      },
    },
  },
});
