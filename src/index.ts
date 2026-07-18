// alsaqr-web-core — public CDN entry point.
// Re-exports the full surface so a single jsDelivr file serves every project.
// Tailwind utilities for the shipped components. Must come first so consumer
// styles can still override ours. Emits dist/style.css.
import "./styles.css";

export * from "./config";
export type * from "./typings";
export * from "./components";
export * from "./hooks";
export * from "./layout";
export * from "./constants";
export * from "./gradio";
export * from "./supabase";
export * from "./mobx";
export * from "./models/common";
export * from "./models/enums";
export type * from "./models/users";
export { default as Auth } from "./auth";
export { default as commonAgent } from "./api/agent";
