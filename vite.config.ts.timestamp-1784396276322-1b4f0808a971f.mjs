// vite.config.ts
import { resolve } from "node:path";
import { defineConfig } from "file:///C:/Users/devmt/shared-projects/alsaqr-core-web/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/devmt/shared-projects/alsaqr-core-web/node_modules/@vitejs/plugin-react/dist/index.js";
import tailwindcss from "file:///C:/Users/devmt/shared-projects/alsaqr-core-web/node_modules/@tailwindcss/vite/dist/index.mjs";
import dts from "file:///C:/Users/devmt/shared-projects/alsaqr-core-web/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\devmt\\shared-projects\\alsaqr-core-web";
var external = [
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
  "react-router-dom"
];
var vite_config_default = defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({ rollupTypes: true, tsconfigPath: "./tsconfig.json" })
  ],
  build: {
    // Minified by default in production builds.
    minify: "esbuild",
    sourcemap: true,
    cssCodeSplit: false,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "AlSaqrWebCore",
      formats: ["es", "umd"],
      fileName: (format) => format === "es" ? "alsaqr-web-core.js" : "alsaqr-web-core.umd.cjs"
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
          "react-router-dom": "ReactRouterDOM"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkZXZtdFxcXFxzaGFyZWQtcHJvamVjdHNcXFxcYWxzYXFyLWNvcmUtd2ViXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkZXZtdFxcXFxzaGFyZWQtcHJvamVjdHNcXFxcYWxzYXFyLWNvcmUtd2ViXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9kZXZtdC9zaGFyZWQtcHJvamVjdHMvYWxzYXFyLWNvcmUtd2ViL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJub2RlOnBhdGhcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcIkB0YWlsd2luZGNzcy92aXRlXCI7XHJcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xyXG5cclxuLy8gS2VlcCBiaWcgc2hhcmVkIGxpYnJhcmllcyBPVVQgb2YgdGhlIGJ1bmRsZSBzbyB0aGUgQ0ROIGZpbGUgc3RheXMgc21hbGwgYW5kXHJcbi8vIGZhc3QgKHNlZSBqc0RlbGl2ciBjb25zdHJhaW50cyBpbiBDTEFVREUubWQpLiBDb25zdW1lcnMgcHJvdmlkZSB0aGVzZS5cclxuY29uc3QgZXh0ZXJuYWwgPSBbXHJcbiAgXCJyZWFjdFwiLFxyXG4gIFwicmVhY3QtZG9tXCIsXHJcbiAgXCJyZWFjdC9qc3gtcnVudGltZVwiLFxyXG4gIFwibW9ieFwiLFxyXG4gIFwibW9ieC1yZWFjdC1saXRlXCIsXHJcbiAgXCJAZ3JhZGlvL2NsaWVudFwiLFxyXG4gIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCIsXHJcbiAgXCJheGlvc1wiLFxyXG4gIFwidW5pdmVyc2FsLWNvb2tpZVwiLFxyXG4gIC8vIENvbXBvbmVudCBsaWJzIHRoYXQgaG9sZCBSZWFjdCBjb250ZXh0IC8gYXJlIGxhcmdlIFx1MjAxNCBrZWVwIHNoYXJlZCwgbm90IGJ1bmRsZWQuXHJcbiAgLy8gKEBoZXJvaWNvbnMgaXMgYSB0aW55IGNvbnRleHQtZnJlZSBTVkcgc2V0IGFuZCBpcyBpbnRlbnRpb25hbGx5IGJ1bmRsZWQuKVxyXG4gIFwiZm9ybWlrXCIsXHJcbiAgXCJmcmFtZXItbW90aW9uXCIsXHJcbiAgXCJyZWFjdC1kYXRlcGlja2VyXCIsXHJcbiAgXCJyZWFjdC1yb3V0ZXItZG9tXCIsXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICB0YWlsd2luZGNzcygpLFxyXG4gICAgZHRzKHsgcm9sbHVwVHlwZXM6IHRydWUsIHRzY29uZmlnUGF0aDogXCIuL3RzY29uZmlnLmpzb25cIiB9KSxcclxuICBdLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICAvLyBNaW5pZmllZCBieSBkZWZhdWx0IGluIHByb2R1Y3Rpb24gYnVpbGRzLlxyXG4gICAgbWluaWZ5OiBcImVzYnVpbGRcIixcclxuICAgIHNvdXJjZW1hcDogdHJ1ZSxcclxuICAgIGNzc0NvZGVTcGxpdDogZmFsc2UsXHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9pbmRleC50c1wiKSxcclxuICAgICAgbmFtZTogXCJBbFNhcXJXZWJDb3JlXCIsXHJcbiAgICAgIGZvcm1hdHM6IFtcImVzXCIsIFwidW1kXCJdLFxyXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT5cclxuICAgICAgICBmb3JtYXQgPT09IFwiZXNcIiA/IFwiYWxzYXFyLXdlYi1jb3JlLmpzXCIgOiBcImFsc2Fxci13ZWItY29yZS51bWQuY2pzXCIsXHJcbiAgICB9LFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBleHRlcm5hbCxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgLy8gS2VlcCB0cmVlLXNoYWtpbmcgZnJpZW5kbHkgY2h1bmtpbmc7IGdsb2JhbHMgZm9yIFVNRCA8c2NyaXB0PiB1c2FnZS5cclxuICAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgICByZWFjdDogXCJSZWFjdFwiLFxyXG4gICAgICAgICAgXCJyZWFjdC1kb21cIjogXCJSZWFjdERPTVwiLFxyXG4gICAgICAgICAgXCJyZWFjdC9qc3gtcnVudGltZVwiOiBcImpzeFJ1bnRpbWVcIixcclxuICAgICAgICAgIG1vYng6IFwibW9ieFwiLFxyXG4gICAgICAgICAgXCJtb2J4LXJlYWN0LWxpdGVcIjogXCJtb2J4UmVhY3RMaXRlXCIsXHJcbiAgICAgICAgICBcIkBncmFkaW8vY2xpZW50XCI6IFwiR3JhZGlvQ2xpZW50XCIsXHJcbiAgICAgICAgICBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiOiBcInN1cGFiYXNlXCIsXHJcbiAgICAgICAgICBheGlvczogXCJheGlvc1wiLFxyXG4gICAgICAgICAgXCJ1bml2ZXJzYWwtY29va2llXCI6IFwiQ29va2llc1wiLFxyXG4gICAgICAgICAgZm9ybWlrOiBcIkZvcm1pa1wiLFxyXG4gICAgICAgICAgXCJmcmFtZXItbW90aW9uXCI6IFwiRnJhbWVyTW90aW9uXCIsXHJcbiAgICAgICAgICBcInJlYWN0LWRhdGVwaWNrZXJcIjogXCJEYXRlUGlja2VyXCIsXHJcbiAgICAgICAgICBcInJlYWN0LXJvdXRlci1kb21cIjogXCJSZWFjdFJvdXRlckRPTVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNVLFNBQVMsZUFBZTtBQUM5VixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxTQUFTO0FBSmhCLElBQU0sbUNBQW1DO0FBUXpDLElBQU0sV0FBVztBQUFBLEVBQ2Y7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBO0FBQUE7QUFBQSxFQUdBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0Y7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixJQUFJLEVBQUUsYUFBYSxNQUFNLGNBQWMsa0JBQWtCLENBQUM7QUFBQSxFQUM1RDtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBQUEsSUFFTCxRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsSUFDWCxjQUFjO0FBQUEsSUFDZCxLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ3hDLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVLENBQUMsV0FDVCxXQUFXLE9BQU8sdUJBQXVCO0FBQUEsSUFDN0M7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiO0FBQUEsTUFDQSxRQUFRO0FBQUE7QUFBQSxRQUVOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxVQUNiLHFCQUFxQjtBQUFBLFVBQ3JCLE1BQU07QUFBQSxVQUNOLG1CQUFtQjtBQUFBLFVBQ25CLGtCQUFrQjtBQUFBLFVBQ2xCLHlCQUF5QjtBQUFBLFVBQ3pCLE9BQU87QUFBQSxVQUNQLG9CQUFvQjtBQUFBLFVBQ3BCLFFBQVE7QUFBQSxVQUNSLGlCQUFpQjtBQUFBLFVBQ2pCLG9CQUFvQjtBQUFBLFVBQ3BCLG9CQUFvQjtBQUFBLFFBQ3RCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
