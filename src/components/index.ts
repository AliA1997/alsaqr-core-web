// Common, reusable components shared across all AlSaqr projects.
// Ported and adapted from the reference repo's src/common (see CLAUDE.md).
export {
  default as CustomPageLoader,
  ModalLoader,
  ButtonLoader,
  SuspenseLoader,
  SkeletonLoader,
} from "./CustomLoader";

// Batch 1 — presentational primitives (spec 0001).
export * from "./Titles";
export * from "./Alerts";
export { Accordion, default as AccordionDefault } from "./Accordion";
export type { AccordionItem } from "./Accordion";
export * from "./Select";
export * from "./RadioBoxes";
export { default as CheckboxCard } from "./CheckboxCard";
export * from "./MultiSelect";
export * from "./Inputs";
export * from "./Image";
export * from "./Containers";

// Batch 3 — prop-driven Modal (spec 0003).
export * from "./Modal";
