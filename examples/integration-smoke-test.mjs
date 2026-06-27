// Smoke test: proves the BUILT bundle (dist/) renders inside React.
// Run from the project root:  node examples/integration-smoke-test.mjs
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Formik, Form } from "formik";

import {
  ButtonLoader,
  PageTitle,
  MyInput,
  rootStore,
  StoreContext,
} from "../dist/alsaqr-web-core.js";

const h = React.createElement;
let failures = 0;
const check = (name, ok, html) => {
  console.log(`${ok ? "✓" : "✗"} ${name}${ok ? "" : `  -> ${html}`}`);
  if (!ok) failures++;
};

// 1) Pure presentational component.
const loader = renderToStaticMarkup(h(ButtonLoader));
check("ButtonLoader renders an SVG", loader.includes("<svg"), loader);

// 2) Title component.
const title = renderToStaticMarkup(h(PageTitle, null, "Hello AlSaqr"));
check("PageTitle renders text", title.includes("Hello AlSaqr"), title);

// 3) Formik-bound input wrapped in the MobX StoreContext provider.
const form = renderToStaticMarkup(
  h(
    StoreContext.Provider,
    { value: rootStore },
    h(
      Formik,
      { initialValues: { username: "" }, onSubmit: () => {} },
      () => h(Form, null, h(MyInput, { name: "username", label: "Username" }))
    )
  )
);
check("MyInput renders inside Formik+StoreContext", form.includes("usernameinput"), form);

// 4) The store is wired and the authStore exists.
check("rootStore.authStore is present", !!rootStore?.authStore, String(rootStore));

console.log(failures === 0 ? "\nALL PASS" : `\n${failures} FAILED`);
process.exit(failures === 0 ? 0 : 1);
