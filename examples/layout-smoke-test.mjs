// Layout integration test: renders the app-typed Sidebar / PageContainer and a
// prop-driven Modal from the BUILT bundle, inside a router + theme provider.
// Run from project root:  node examples/layout-smoke-test.mjs
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import {
  configureAlSaqr,
  Sidebar,
  PageContainer,
  ThemeProvider,
  Modal,
  ModalBody,
  rootStore,
  StoreContext,
} from "../dist/alsaqr-web-core.js";

// A consuming app passes its own env here (kept in its private .env).
configureAlSaqr({
  supabaseUrl: "https://example.supabase.co",
  supabaseAnonKey: "anon",
  apiBaseUrl: "https://api.example.com",
  baseUrl: "https://alsaqr.app/",
  zookUrl: "https://zook.alsaqr.app/",
  meetupUrl: "https://meet.alsaqr.app/",
});

const h = React.createElement;
let failures = 0;
const check = (name, ok, extra) => {
  console.log(`${ok ? "✓" : "✗"} ${name}${ok ? "" : `\n   ${extra}`}`);
  if (!ok) failures++;
};

const wrap = (node) =>
  renderToStaticMarkup(
    h(StoreContext.Provider, { value: rootStore },
      h(ThemeProvider, null, h(MemoryRouter, null, node)))
  );

// Per-app sidebar link sets.
const def = wrap(h(Sidebar, { appType: "default" }));
check("default sidebar shows Explore + Marketplace + Meetups",
  def.includes("Explore") && def.includes("Marketplace") && def.includes("Meetups"), def.slice(0, 200));

const meetup = wrap(h(Sidebar, { appType: "meetup" }));
check("meetup sidebar shows My Groups + Events + Location group",
  meetup.includes("My Groups") && meetup.includes("Events") && meetup.includes("Location"), meetup.slice(0, 200));
check("meetup sidebar EXCLUDES default-only 'Marketplace'", !meetup.includes("Marketplace"));

const zook = wrap(h(Sidebar, { appType: "zook" }));
check("zook sidebar shows Buying + Selling + Categories",
  zook.includes("Buying") && zook.includes("Selling") && zook.includes("Categories"), zook.slice(0, 200));

// Prop-driven modal. NOTE: <Modal> is client-only (createPortal + mount gate),
// so its content is verified via the portal-free ModalBody; closed state is
// verified via <Modal isOpen={false}> rendering nothing.
const modalBody = wrap(h(ModalBody, { onClose: () => {} }, h("p", null, "modal body")));
check("ModalBody renders content + close affordance",
  modalBody.includes("modal body") && modalBody.includes("svg"), modalBody.slice(0, 200));
const closedModal = wrap(h(Modal, { isOpen: false, onClose: () => {} }, h("p", null, "hidden")));
check("Modal renders nothing when closed", !closedModal.includes("hidden"));

// Full page shell renders the sidebar + main content (modal mounts client-side).
const page = wrap(
  h(PageContainer, {
    appType: "zook",
    modal: { isOpen: true, content: h("span", null, "wired-modal"), onClose: () => {} },
  }, h("div", null, "main content"))
);
check("PageContainer renders sidebar + main content",
  page.includes("navlogo") && page.includes("main content"), page.slice(0, 200));

console.log(failures === 0 ? "\nALL PASS" : `\n${failures} FAILED`);
process.exit(failures === 0 ? 0 : 1);
