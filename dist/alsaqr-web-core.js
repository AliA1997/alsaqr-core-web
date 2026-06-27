var Z = Object.defineProperty;
var H = (t, e, a) => e in t ? Z(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a;
var u = (t, e, a) => H(t, typeof e != "symbol" ? e + "" : e, a);
import { Client as V } from "@gradio/client";
import { createClient as J } from "@supabase/supabase-js";
import * as f from "react";
import $, { useState as w, useEffect as z, useContext as D, createContext as _, Fragment as Q } from "react";
import { makeAutoObservable as X, runInAction as Y } from "mobx";
import ee from "universal-cookie";
import p from "axios";
import { jsx as r, jsxs as l, Fragment as te } from "react/jsx-runtime";
import { motion as L } from "framer-motion";
import { useField as N } from "formik";
import { createPortal as re } from "react-dom";
import { observer as ae } from "mobx-react-lite";
import { useNavigate as oe } from "react-router-dom";
import ne from "react-datepicker";
let U;
function Ve(t) {
  U = t;
}
function T() {
  if (!U)
    throw new Error(
      "alsaqr-web-core: call configureAlSaqr({...}) before using its clients."
    );
  return U;
}
function S() {
  return U;
}
const Je = ({ title: t }) => /* @__PURE__ */ r("div", { id: "page-loader-container", children: /* @__PURE__ */ l("div", { className: "wave", children: [
  /* @__PURE__ */ r("h2", { children: t }),
  /* @__PURE__ */ r("h2", { children: t })
] }) }), O = ({ className: t }) => /* @__PURE__ */ l(
  "svg",
  {
    "aria-hidden": "true",
    className: t,
    viewBox: "0 0 100 101",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r(
        "path",
        {
          d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
          fill: "currentFill"
        }
      )
    ]
  }
), Qe = $.memo(function() {
  return /* @__PURE__ */ r(O, { className: "inline w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-[#55a8c2]" });
}), ie = $.memo(function() {
  return /* @__PURE__ */ r(O, { className: "inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-[#55a8c2]" });
}), Xe = $.memo(function() {
  return /* @__PURE__ */ l("div", { className: "flex flex-row justify-center items-center w-full h-full", children: [
    /* @__PURE__ */ r(
      "img",
      {
        "data-testid": "navlogo",
        src: "https://res.cloudinary.com/aa1997/image/upload/v1751518818/new-desktop-logo_ocwyft.svg",
        className: "m-0 h-42 md:h-48 lg:h-60 2xl:h-82 w-42 md:w-48 lg:w-60 2xl:w-82 transition-all duration-200 cursor-pointer",
        alt: "AlSaqr Logo",
        style: { maxWidth: "unset" }
      }
    ),
    /* @__PURE__ */ r(O, { className: "h-[5rem] w-[5rem] md:h-[8rem] md:w-[8rem] 2xl:h-[9.5rem] 2xl:w-[9.5rem] text-gray-200 animate-spin dark:text-gray-600 fill-[#55a8c2] mt-[2rem]" })
  ] });
}), Ye = $.memo(function({
  count: e = 1,
  className: a
}) {
  return /* @__PURE__ */ r("div", { className: "space-y-4 w-full", children: Array.from({ length: e }).map((o, n) => /* @__PURE__ */ l(
    "div",
    {
      className: `animate-pulse flex flex-col space-y-3 dark:bg-[#1d2a2e] bg-gray-100 p-4 rounded-md w-full ${a && a}`,
      children: [
        /* @__PURE__ */ r("div", { className: "h-6 dark:bg-[#0e1517] bg-gray-300 rounded w-3/4" }),
        /* @__PURE__ */ r("div", { className: "h-4 dark:bg-[#0e1517] bg-gray-300 rounded w-full" }),
        /* @__PURE__ */ r("div", { className: "h-4 dark:bg-[#0e1517] bg-gray-300 rounded w-5/6" })
      ]
    },
    n
  )) });
});
function et({ children: t, classNames: e }) {
  return /* @__PURE__ */ r(
    "h2",
    {
      className: `bg-gray-50 sticky top-0 z-[999] p-5 pb-0 text-xl dark:bg-[#0e1517] dark:text-gray-50 font-bold ${e || ""}`,
      children: t
    }
  );
}
function tt({
  children: t,
  classNames: e
}) {
  return /* @__PURE__ */ r(
    "h2",
    {
      className: `bg-gray-50 sticky top-0 z-[999] p-0 pb-0 text-xl dark:bg-[#0e1517] dark:text-gray-50 font-bold ${e || ""}`,
      children: t
    }
  );
}
function rt({ children: t }) {
  return /* @__PURE__ */ r("h3", { className: "pt-5 dark:text-gray-50", children: t });
}
function at({
  children: t,
  color: e = "primary",
  size: a = "md",
  rounded: o = !1,
  outlined: n = !1,
  className: i = "",
  testId: s,
  ...c
}) {
  const m = "inline-flex items-center font-medium whitespace-nowrap", h = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-1",
    lg: "text-base px-3 py-1.5"
  }, y = {
    primary: { bg: "bg-blue-100", text: "text-[#55a8c2]", border: "border-blue-300" },
    gold: { bg: "bg-yellow-400", text: "text-yellow-900", border: "border-yellow-500" },
    secondary: { bg: "bg-purple-100", text: "text-purple-800", border: "border-purple-300" },
    success: { bg: "bg-green-100", text: "text-green-800", border: "border-green-300" },
    danger: { bg: "bg-red-100", text: "text-red-800", border: "border-red-300" },
    warning: { bg: "bg-yellow-100", text: "text-yellow-800", border: "border-yellow-300" },
    info: { bg: "bg-cyan-100", text: "text-cyan-800", border: "border-cyan-300" },
    neutral: { bg: "bg-gray-100", text: "text-gray-800", border: "border-gray-300" },
    postGradient: {
      bg: "bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100",
      text: "text-indigo-800",
      border: "border-purple-300"
    },
    userGradient: {
      bg: "bg-gradient-to-br from-cyan-100 via-blue-50 to-purple-100",
      text: "text-blue-800",
      border: "border-blue-300"
    },
    commentGradient: {
      bg: "bg-gradient-to-r from-red-100 via-purple-100 to-pink-100",
      text: "text-purple-800",
      border: "border-rose-300"
    },
    communityGradient: {
      bg: "bg-gradient-to-tl from-emerald-100 via-teal-100 to-cyan-200",
      text: "text-teal-800",
      border: "border-teal-300"
    },
    communityDiscussionGradient: {
      bg: "bg-gradient-to-r from-amber-50 to-orange-100",
      text: "text-amber-800",
      border: "border-amber-300"
    },
    communityDiscussionMessageGradient: {
      bg: "bg-gradient-to-b from-lime-100 to-white",
      text: "text-lime-800",
      border: "border-lime-300"
    },
    defaultSavedItemGradient: {
      bg: "bg-gradient-to-r from-fuchsia-100 to-rose-100",
      text: "text-fuchsia-800",
      border: "border-fuchsia-300"
    }
  }[e], k = [
    m,
    h[a],
    o ? "rounded-full" : "rounded-md",
    n ? `border ${y.border} ${y.text} bg-transparent` : `${y.bg} ${y.text} border border-transparent`,
    i
  ].join(" ");
  return /* @__PURE__ */ r("span", { "data-testid": s ?? "tagorlabel", className: k, ...c, children: t });
}
function ot({
  title: t = "Error",
  message: e,
  onClose: a,
  actions: o,
  className: n = ""
}) {
  const [i, s] = w(!0);
  if (!i) return null;
  const c = () => {
    s(!1), a == null || a();
  };
  return /* @__PURE__ */ r(
    "div",
    {
      role: "alert",
      "aria-live": "assertive",
      className: `relative w-full rounded-lg border border-red-200 bg-red-50 text-red-900 shadow-sm ${n}`,
      children: /* @__PURE__ */ l("div", { className: "flex items-start gap-3 p-4", children: [
        /* @__PURE__ */ r("div", { className: "mt-0.5", children: /* @__PURE__ */ r(
          "svg",
          {
            className: "h-5 w-5 text-red-600",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true",
            children: /* @__PURE__ */ r(
              "path",
              {
                fillRule: "evenodd",
                d: "M10 2a1 1 0 0 1 .894.553l7 14A1 1 0 0 1 17 18H3a1 1 0 0 1-.894-1.447l7-14A1 1 0 0 1 10 2Zm0 5a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                clipRule: "evenodd"
              }
            )
          }
        ) }),
        /* @__PURE__ */ l("div", { className: "flex-1", children: [
          t && /* @__PURE__ */ r("h3", { className: "text-sm font-semibold", children: t }),
          /* @__PURE__ */ r("p", { className: "mt-1 text-sm", children: e }),
          o && /* @__PURE__ */ r("div", { className: "mt-3 flex flex-wrap gap-2", children: o })
        ] }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            onClick: c,
            className: "rounded-md p-1 text-red-700 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500",
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ r("svg", { className: "h-4 w-4", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ r(
              "path",
              {
                fillRule: "evenodd",
                d: "M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414Z",
                clipRule: "evenodd"
              }
            ) })
          }
        )
      ] })
    }
  );
}
const nt = ({
  items: t,
  defaultExpanded: e = [0],
  allowMultiple: a = !0,
  className: o = ""
}) => {
  const [n, i] = w(
    new Set(e)
  ), s = (m) => {
    i((h) => {
      const v = a ? new Set(h) : /* @__PURE__ */ new Set();
      return h.has(m) ? v.delete(m) : v.add(m), v;
    });
  }, c = (m) => n.has(m);
  return /* @__PURE__ */ r("div", { className: `w-full divide-y ${o}`, children: t.map((m, h) => /* @__PURE__ */ l("div", { className: "group", children: [
    /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        className: "w-full p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors",
        onClick: (v) => {
          v.stopPropagation(), s(h);
        },
        "aria-expanded": c(h),
        "aria-controls": `accordion-section-${h}`,
        children: [
          /* @__PURE__ */ r("h4", { className: "font-medium text-gray-700 dark:text-gray-50", children: m.title }),
          /* @__PURE__ */ r(
            L.div,
            {
              animate: { rotate: c(h) ? 180 : 0 },
              transition: { duration: 0.2 },
              children: /* @__PURE__ */ r(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 1.5,
                  stroke: "currentColor",
                  className: "size-5 text-gray-500",
                  children: /* @__PURE__ */ r(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                    }
                  )
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ r(
      L.div,
      {
        initial: !1,
        animate: {
          height: c(h) ? "auto" : 0,
          opacity: c(h) ? 1 : 0
        },
        transition: { duration: 0.2 },
        className: "overflow-hidden",
        children: /* @__PURE__ */ r("div", { id: `accordion-section-${h}`, className: "px-4 pb-4", children: m.jsx })
      }
    )
  ] }, h)) });
};
function it({ label: t, placeholder: e, options: a, ...o }) {
  const [n, i] = N(o);
  return /* @__PURE__ */ l("div", { className: "space-y-2 w-full", children: [
    t && /* @__PURE__ */ r("label", { htmlFor: o.name, className: "block mb-1 text-sm font-medium", children: t }),
    /* @__PURE__ */ l(
      "select",
      {
        name: n.name,
        onBlur: n.onBlur,
        onChange: n.onChange,
        value: n.value,
        className: `h-12 w-full text-lg outline-none placeholder:text-xl dark:bg-[#000000] border rounded-md px-3 ${o.className ?? ""} ${i.touched && i.error ? "border-red-500" : "dark:border-gray-700"}`,
        children: [
          e && /* @__PURE__ */ r("option", { value: "", disabled: !0, children: e }),
          a.map((s) => /* @__PURE__ */ r("option", { value: s.value, children: s.label }, s.value))
        ]
      }
    ),
    i.touched && i.error && /* @__PURE__ */ r("div", { className: "text-red-500 text-sm mt-1", children: i.error })
  ] });
}
const st = ({
  label: t,
  description: e,
  value: a,
  icon: o,
  testId: n,
  ...i
}) => {
  const [s] = N(i.name);
  return /* @__PURE__ */ l(
    "label",
    {
      className: `relative flex cursor-pointer rounded-xl border p-2 shadow-sm focus:outline-none ${s.value === a ? "border-blue-500 ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 bg-white dark:bg-gray-800"}`,
      children: [
        /* @__PURE__ */ r(
          "input",
          {
            type: "radio",
            ...s,
            value: a,
            checked: s.value === a,
            className: "sr-only",
            "aria-labelledby": `${i.name}-${a}-label`
          }
        ),
        /* @__PURE__ */ l("div", { className: "flex flex-1", children: [
          o && /* @__PURE__ */ r("div", { className: "mr-3 flex-shrink-0", children: o }),
          /* @__PURE__ */ l("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ r(
              "span",
              {
                id: `${i.name}-${a}-label`,
                className: `block text-sm font-medium ${s.value === a ? "text-blue-900 dark:text-blue-100" : "text-gray-900 dark:text-gray-100"}`,
                "data-testid": n ?? "",
                children: t
              }
            ),
            e && /* @__PURE__ */ r(
              "span",
              {
                className: `mt-1 flex items-center text-sm ${s.value === a ? "text-blue-700 dark:text-blue-300" : "text-gray-500 dark:text-gray-400"}`,
                children: e
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ r(
          "div",
          {
            className: `absolute -top-2 -right-2 h-5 w-5 rounded-full border flex items-center justify-center ${s.value === a ? "border-blue-500 bg-blue-500" : "border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700"}`,
            "aria-hidden": "true",
            children: s.value === a && /* @__PURE__ */ r("div", { className: "h-2 w-2 rounded-full bg-white" })
          }
        )
      ]
    }
  );
}, lt = ({
  label: t,
  description: e,
  icon: a,
  ...o
}) => {
  const [n] = N(o.name);
  return /* @__PURE__ */ l(
    "label",
    {
      className: `relative flex cursor-pointer rounded-xl border p-2 shadow-sm focus:outline-none ${n.value ? "border-blue-500 ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 bg-white dark:bg-gray-800"}`,
      children: [
        /* @__PURE__ */ r(
          "input",
          {
            type: "checkbox",
            ...n,
            value: n.value.toString(),
            checked: n.value,
            className: "sr-only cursor-pointer",
            "aria-labelledby": `${o.name}--label`
          }
        ),
        /* @__PURE__ */ l("div", { className: "flex flex-1", children: [
          a && /* @__PURE__ */ r("div", { className: "mr-3 flex-shrink-0", children: a }),
          /* @__PURE__ */ l("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ r(
              "span",
              {
                id: `${o.name}-${n.value}-label`,
                className: `block text-sm font-medium ${n.value ? "text-blue-900 dark:text-blue-100" : "text-gray-900 dark:text-gray-100"}`,
                children: t
              }
            ),
            e && /* @__PURE__ */ r(
              "span",
              {
                className: `mt-1 flex items-center text-sm ${n.value ? "text-blue-700 dark:text-blue-300" : "text-gray-500 dark:text-gray-400"}`,
                children: e
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ r(
          "div",
          {
            className: `absolute -top-2 cursor-pointer -right-2 h-5 w-5 rounded-md border flex items-center justify-center ${n.value ? "border-blue-500 bg-blue-500" : "border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700"}`,
            "aria-hidden": "true",
            children: n.value && /* @__PURE__ */ r("svg", { className: "h-3 w-3 text-white", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ r(
              "path",
              {
                fillRule: "evenodd",
                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                clipRule: "evenodd"
              }
            ) })
          }
        )
      ]
    }
  );
};
function se(t, e) {
  return /* @__PURE__ */ f.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: e
  }, t), /* @__PURE__ */ f.createElement("path", {
    fillRule: "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}
const le = f.forwardRef(se);
function ct({
  label: t,
  placeholder: e,
  options: a,
  ...o
}) {
  var g;
  const [n, i, s] = N(o.name), [c, m] = w(""), h = (d) => {
    m(d.target.value);
  }, v = (d) => {
    if (d.key === "Enter" && c.trim()) {
      d.preventDefault();
      const b = { value: c };
      n.value.some((R) => R === b.value) || s.setValue([...n.value, b.value]), m("");
    }
    d.key === "Backspace" && !c && n.value.length > 0 && s.setValue(n.value.slice(0, -1));
  }, y = (d) => {
    s.setValue(n.value.filter((b) => b !== d));
  }, k = a.filter(
    (d) => {
      var b;
      return d.label.toLowerCase().includes(c.toLowerCase()) && !((b = n == null ? void 0 : n.value) != null && b.includes(d.value));
    }
  );
  return /* @__PURE__ */ l("div", { className: "space-y-2 relative", children: [
    t && /* @__PURE__ */ r(
      "label",
      {
        htmlFor: o.name,
        className: "block text-md font-medium text-gray-700 dark:text-gray-100",
        children: t
      }
    ),
    /* @__PURE__ */ l("div", { className: "flex flex-wrap gap-2 p-2 min-h-8 w-full border rounded-md dark:bg-[#000000] dark:border-gray-700", children: [
      (g = n == null ? void 0 : n.value) == null ? void 0 : g.map((d) => {
        const b = a.find((R) => R.value === d) || {
          label: d
        };
        return /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onDoubleClick: () => y(d),
            className: "flex items-center px-2 bg-[#55a8c2] text-gray-50 rounded-full text-md",
            children: [
              b.label,
              /* @__PURE__ */ r(
                le,
                {
                  onClick: () => y(d),
                  className: "ml-2 h-4 w-4 hover:bg-[unset] cursor-pointer"
                }
              )
            ]
          },
          d
        );
      }),
      /* @__PURE__ */ r(
        "input",
        {
          "data-testid": "multiselectinput",
          type: "text",
          value: c,
          onChange: h,
          onKeyDown: v,
          placeholder: e || "Type and press enter...",
          className: "flex-1 min-w-[100px] text-xl outline-none placeholder:text-xl dark:bg-[#000000] dark:text-gray-50 text-gray-900"
        }
      )
    ] }),
    c && k.length > 0 && /* @__PURE__ */ r("div", { className: "absolute left-0 bottom-0 mt-1 w-full z-[9999] border bg-[#FFFFFF] rounded-md shadow-lg dark:bg-[#000000] dark-border-gray-50 dark:border-gray-700 dark:text-gray-50", children: k.slice(0, 6).map((d) => /* @__PURE__ */ r(
      "div",
      {
        className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer",
        "data-testid": "multiselectfilteredlabel",
        onClick: () => {
          var b;
          (b = n == null ? void 0 : n.value) != null && b.includes(d.value) || s.setValue([...n.value, d.value]), m("");
        },
        children: d.label
      },
      d.value
    )) }),
    i.touched && i.error && /* @__PURE__ */ r("div", { className: "text-red-500 text-sm", children: i.error })
  ] });
}
function dt({ label: t, prefix: e, disabled: a, ...o }) {
  const [n, i] = N(o.name);
  return /* @__PURE__ */ l("div", { className: "w-full", children: [
    t && /* @__PURE__ */ r(
      "label",
      {
        htmlFor: o.id || o.name,
        className: "block mb-2 text-md font-medium dark:text-gray-50",
        children: t
      }
    ),
    /* @__PURE__ */ l("div", { className: "relative", children: [
      e && /* @__PURE__ */ r("span", { className: "absolute left-0 text-lg border-r-2 dark:border-r-0 w-10 h-full text-gray-900 bg-gray-100 dark:bg-transparent dark:text-gray-50 px-3 py-1 dark:py-2", children: e }),
      /* @__PURE__ */ r(
        "input",
        {
          ...n,
          type: o.type || "text",
          placeholder: o.placeholder,
          className: `h-12 w-full text-lg outline-none placeholder:text-xl dark:bg-[#000000] dark:text-gray-50 ${e ? "pl-12" : ""} ${i.touched && i.error ? "border-red-500 border" : ""} ${o.className || ""}`,
          disabled: a ?? !1,
          "data-testid": `${o.name.toLowerCase()}input`
        }
      ),
      i.touched && i.error ? /* @__PURE__ */ r("div", { className: "text-red-500 text-sm mt-1", children: i.error }) : null
    ] })
  ] });
}
function ut({ label: t, ...e }) {
  const [, a, o] = N(e);
  return /* @__PURE__ */ l("div", { className: "mb-4", children: [
    t && /* @__PURE__ */ r("label", { className: "block text-md font-medium text-gray-700 dark:text-gray-300 mb-1", children: t }),
    /* @__PURE__ */ r(
      "input",
      {
        type: "file",
        id: e.id,
        name: e.name,
        onChange: (n) => e.handleFileChange(n, o),
        onBlur: () => o.setTouched(!0),
        "data-testid": `${e.name.toLowerCase()}input`,
        className: `block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100
          dark:file:bg-blue-900 dark:file:text-blue-100
          dark:hover:file:bg-blue-800
          ${a.touched && a.error ? "border-red-500" : "border-gray-300"}`
      }
    ),
    a.touched && a.error ? /* @__PURE__ */ r("div", { className: "text-red-500 text-xs mt-1", children: a.error }) : null
  ] });
}
function gt({ label: t, ...e }) {
  const [a, o, n] = N(e.name);
  return /* @__PURE__ */ l("div", { className: "w-full", children: [
    t && /* @__PURE__ */ r(
      "label",
      {
        htmlFor: e.id || e.name,
        className: "block mb-2 text-md font-medium",
        children: t
      }
    ),
    /* @__PURE__ */ r(
      ne,
      {
        id: e.id || e.name,
        selected: a.value,
        onChange: (i) => n.setValue(i),
        onBlur: () => n.setTouched(!0),
        placeholderText: e.placeholder,
        className: `h-12 w-full text-lg outline-none placeholder:text-xl dark:bg-[#000000] ${o.touched && o.error ? "border-red-500 border" : ""} ${e.className || ""}`,
        dateFormat: "MM/dd/yyyy",
        showYearDropdown: !0,
        dropdownMode: "select"
      }
    ),
    o.touched && o.error ? /* @__PURE__ */ r("div", { className: "text-red-500 text-sm mt-1", children: o.error }) : null
  ] });
}
const E = {
  username: "",
  avatar: "",
  bgThumbnail: "",
  email: "",
  bio: "",
  firstName: "",
  lastName: "",
  dateOfBirth: void 0,
  maritalStatus: void 0,
  hobbies: [],
  religion: "",
  countryOfOrigin: void 0,
  followingUsers: []
}, M = () => {
  var t;
  return ((t = S()) == null ? void 0 : t.testMode) ?? !1;
}, mt = () => {
  var t;
  return {
    redirectTo: (t = S()) == null ? void 0 : t.baseUrl
  };
}, j = "https://res.cloudinary.com/aa1997/image/upload/v1720130142/Web3-Client-Projects/Gm.png", F = "/explore-news-placeholder.svg", P = "/post-placeholder.svg", ce = {
  default: [
    { title: "Explore", iconSrc: "/icons/explore.svg", href: "/explore" },
    { title: "Notifications", iconSrc: "/icons/notifications.svg", href: "/notifications", requiresAuth: !0 },
    { title: "Messages", iconSrc: "/icons/messages.svg", href: "/messages", requiresAuth: !0 },
    { title: "Bookmarks", iconSrc: "/icons/bookmarks.svg", href: "/bookmarks", requiresAuth: !0 },
    { title: "Lists", iconSrc: "/icons/lists.svg", href: "/lists", requiresAuth: !0 },
    { title: "Communities", iconSrc: "/icons/community.svg", href: "/communities", requiresAuth: !0 },
    { title: "Marketplace", iconSrc: "/icons/zook.svg", externalUrlKey: "zookUrl" },
    { title: "Meetups", iconSrc: "/icons/meetup.svg", externalUrlKey: "meetupUrl" }
  ],
  meetup: [
    { title: "Notifications", iconSrc: "/icons/notification.svg", href: "/notifications" },
    { title: "Inbox", iconSrc: "/icons/inbox.svg", href: "/messages" },
    { title: "My Groups", iconSrc: "/icons/my-groups.svg", href: "/my-groups" },
    { title: "My Events", iconSrc: "/icons/my-events.svg", href: "/my-events" },
    { title: "Location", iconSrc: "/icons/location.svg", modalKey: "location", group: "Location" },
    { title: "Groups", iconSrc: "/icons/groups.svg", href: "/groups" },
    { title: "Events", iconSrc: "/icons/events.svg", href: "/events" },
    { title: "Online Events", iconSrc: "/icons/online-events.svg", href: "/online-events" },
    { title: "Local Guides", iconSrc: "/icons/local-guides.svg", href: "/local-guides" }
  ],
  zook: [
    { title: "Notifications", iconSrc: "/icons/notification.svg", href: "/notifications" },
    { title: "Inbox", iconSrc: "/icons/inbox.svg", href: "/messages" },
    { title: "Buying", iconSrc: "/icons/buying.svg", href: "/buying" },
    { title: "Selling", iconSrc: "/icons/selling.svg", href: "/selling" },
    { title: "Location", iconSrc: "/icons/location.svg", modalKey: "location", group: "Location" },
    { title: "Vehicles", iconSrc: "/icons/vehicles.svg", href: "/vehicles", group: "Categories" },
    { title: "Rentals", iconSrc: "/icons/rentals.svg", href: "/rentals", group: "Categories" },
    { title: "Clothing", iconSrc: "/icons/clothing.svg", href: "/clothing", group: "Categories" },
    { title: "Electronics", iconSrc: "/icons/electronics.svg", href: "/electronics", group: "Categories" },
    { title: "Office Supplies", iconSrc: "/icons/officesupplies.svg", href: "/office-supplies", group: "Categories" },
    { title: "Pet Supplies", iconSrc: "/icons/petsupplies.svg", href: "/pet-supplies", group: "Categories" },
    { title: "Sporting Goods", iconSrc: "/icons/sportinggoods.svg", href: "/sporting-goods", group: "Categories" },
    { title: "Toys and Games", iconSrc: "/icons/toysandgames.svg", href: "/toys-and-games", group: "Categories" }
  ]
};
function ht({ src: t, alt: e, onClick: a }) {
  return /* @__PURE__ */ r(
    "img",
    {
      className: "h-10 w-10 rounded-full object-cover",
      src: t,
      alt: e,
      height: 50,
      width: 50,
      onClick: a,
      loading: "lazy"
    }
  );
}
function de({
  src: t,
  alt: e,
  onClick: a,
  classNames: o,
  loadedHeight: n,
  loadedWidth: i
}) {
  const [s, c] = w(t);
  return /* @__PURE__ */ r(
    "img",
    {
      className: o || "h-10 w-10 rounded-full object-cover",
      src: s ?? "",
      alt: e,
      height: n || 50,
      width: i || 50,
      onClick: a,
      onError: () => {
        s != j && c(j);
      },
      loading: "lazy"
    }
  );
}
function ft({
  src: t,
  alt: e,
  onClick: a,
  classNames: o
}) {
  const [n, i] = w(t);
  return /* @__PURE__ */ r(
    "img",
    {
      className: o || "h-full w-full object-cover",
      src: n ?? "",
      alt: e,
      height: 600,
      width: 600,
      onClick: a,
      onError: () => {
        n != F && i(F);
      },
      loading: "lazy"
    }
  );
}
function bt({
  src: t,
  alt: e,
  onClick: a,
  classNames: o
}) {
  const [n, i] = w(t);
  return /* @__PURE__ */ r(
    "img",
    {
      className: o || "h-full w-full object-cover",
      src: n ?? "",
      alt: e,
      height: 600,
      width: 600,
      onClick: a,
      onError: () => {
        n != P && i(P);
      },
      loading: "lazy"
    }
  );
}
const pt = ({
  innerRef: t,
  children: e,
  classNames: a,
  testId: o,
  ...n
}) => /* @__PURE__ */ r(
  "div",
  {
    ref: t,
    className: `max-w-4xl mx-auto bg-white dark:bg-[#0e1517] rounded-lg mt-10 ${a && a}`,
    "data-testid": o ?? "",
    ...n,
    children: e
  }
);
function xt({
  children: t,
  ...e
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: "max-w-xl mx-auto bg-white dark:bg-[#0e1517] shadow-md rounded-lg mt-10",
      ...e,
      children: t
    }
  );
}
function vt({
  username: t,
  bgThumbnail: e,
  avatar: a
}) {
  return /* @__PURE__ */ r(
    L.div,
    {
      className: "flex justify-center items-center bg-gray-100 w-full h-[10em] relative",
      style: e ? {
        backgroundImage: `url('${e}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      } : {},
      children: /* @__PURE__ */ r(
        "img",
        {
          className: "h-20 w-20 bottom-10 rounded-full",
          src: a,
          alt: t,
          height: 50,
          width: 50
        }
      )
    }
  );
}
function yt({ user: t, index: e }) {
  return /* @__PURE__ */ r(
    de,
    {
      src: t.avatar,
      alt: t.username,
      classNames: `w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 relative ${e === 0 ? "z-0" : e === 1 ? "z-10" : "z-20"} ${e > 0 ? "ml-[-1rem]" : ""}`
    },
    t.id
  );
}
function wt({
  children: t,
  classNames: e
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: `relative flex flex-1 flex-col border-y border-gray-100 p-5 hover:shadow-lg dark:border-gray-800 dark:hover:bg-[#000000] dark:text-gray-50 ${e && e}`,
      children: t
    }
  );
}
const q = ({
  onClose: t,
  headerChildren: e,
  children: a,
  classNames: o,
  bodyClassNames: n,
  ...i
}) => /* @__PURE__ */ r(
  "div",
  {
    className: `fixed inset-0 z-[999] flex items-center justify-center bg-black/75 h-screen ${o ?? ""}`,
    ...i,
    children: /* @__PURE__ */ l(
      "div",
      {
        className: `relative bg-white dark:bg-[#000000] rounded-lg shadow-lg w-11/12 mx-auto ${n ?? "max-w-lg"}`,
        children: [
          /* @__PURE__ */ r("div", { className: "relative p-4", children: e || /* @__PURE__ */ r(
            "button",
            {
              onClick: t,
              className: "absolute right-5 top-3 text-gray-400 hover:text-gray-600 block float-right cursor-pointer",
              children: /* @__PURE__ */ r(
                "svg",
                {
                  className: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ r(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M6 18L18 6M6 6l12 12"
                    }
                  )
                }
              )
            }
          ) }),
          /* @__PURE__ */ r("div", { className: "flex flex-col align-center justify-center p-4", children: a })
        ]
      }
    )
  }
), G = ({ children: t }) => {
  const [e, a] = w(!1);
  return z(() => (a(!0), () => a(!1)), []), e ? re(t, document.body) : null;
}, ue = ({
  isOpen: t,
  onClose: e,
  children: a,
  classNames: o,
  bodyClassNames: n
}) => t ? /* @__PURE__ */ r(G, { children: /* @__PURE__ */ r(
  q,
  {
    onClose: e,
    classNames: o,
    bodyClassNames: n,
    children: a
  }
) }) : null, kt = ({
  isOpen: t,
  title: e,
  confirmMessage: a,
  children: o,
  onClose: n,
  confirmFunc: i,
  declineButtonText: s,
  confirmButtonText: c,
  confirmButtonClassNames: m
}) => {
  const [h, v] = w(!1);
  return t ? /* @__PURE__ */ r(G, { children: /* @__PURE__ */ r(q, { headerChildren: /* @__PURE__ */ r("h2", { children: e }), onClose: n, children: /* @__PURE__ */ l("div", { className: "flex flex-col w-full h-full", children: [
    o ?? null,
    /* @__PURE__ */ r("p", { children: a }),
    /* @__PURE__ */ l("div", { className: "flex px-2 justify-between", children: [
      /* @__PURE__ */ r(
        "button",
        {
          onClick: n,
          className: "rounded-full bg-gray-100 px-5 py-2 font-bold text-gray-900 disabled:opacity-40 cursor-pointer",
          type: "button",
          children: s
        }
      ),
      /* @__PURE__ */ r(
        "button",
        {
          onClick: async (y) => {
            y.stopPropagation(), v(!0);
            try {
              await i();
            } finally {
              v(!1);
            }
          },
          disabled: h,
          className: `rounded-full bg-[#55a8c2] px-5 py-2 font-bold text-white ${m ?? ""} disabled:opacity-40 cursor-pointer`,
          type: "button",
          children: h ? /* @__PURE__ */ r(ie, {}) : c
        }
      )
    ] })
  ] }) }) }) : null;
};
function Nt({ size: t, color: e }) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: `${t} animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${e}`,
      role: "status",
      children: /* @__PURE__ */ r("span", { className: "sr-only", children: "Loading..." })
    }
  );
}
const ge = {
  theme: "system",
  setTheme: () => null
}, K = _(ge);
function Ct({
  children: t,
  defaultTheme: e = "system",
  storageKey: a = "alsaqr-ui-theme",
  ...o
}) {
  const [n, i] = w(() => typeof window > "u" ? e : localStorage.getItem(a) || e);
  z(() => {
    const c = window.document.documentElement;
    if (c.classList.remove("light", "dark"), n === "system") {
      const m = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      c.classList.add(m);
      return;
    }
    c.classList.add(n);
  }, [n]);
  const s = {
    theme: n,
    setTheme: (c) => {
      typeof window < "u" && localStorage.setItem(a, c), i(c);
    }
  };
  return /* @__PURE__ */ r(K.Provider, { ...o, value: s, children: t });
}
const me = () => {
  const t = D(K);
  if (t === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return t;
}, he = () => {
  const { theme: t, setTheme: e } = me();
  return /* @__PURE__ */ l(
    L.button,
    {
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.9 },
      className: "group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-2 py-1 mx-1 lg:px-6 my-1 md:mt-6 lg:py-3 transition-all duration-200 hover:bg-[#55a8c2] dark:bg-[#1d2a2e] dark:text-gray-50 bg-gray-50 dark:hover:opacity-80 dark:hover:text-[#1d2a2e]",
      onClick: () => e(t === "dark" ? "light" : "dark"),
      children: [
        t === "dark" ? /* @__PURE__ */ r(
          "img",
          {
            src: "/icons/light-mode.svg",
            alt: "Light Mode Icon",
            className: "h-4 w-4 md:h-6 md:w-6 flex-shrink-0 mr-2 p-0"
          }
        ) : /* @__PURE__ */ r(
          "img",
          {
            src: "/icons/dark-mode.svg",
            alt: "Dark Mode Icon",
            className: "h-4 w-4 md:h-6 md:w-6 flex-shrink-0 mr-2 p-0"
          }
        ),
        /* @__PURE__ */ r("p", { className: "hidden md:inline-flex dark:text-gray-50 font-light group-hover:text-black dark:group-hover:text-[#1d2a2e] text-[#1d2a2e]", children: t === "dark" ? "Light Mode" : "Dark Mode" })
      ]
    }
  );
};
function C({
  title: t,
  iconSrc: e,
  Icon: a,
  IconImage: o,
  active: n,
  isShow: i,
  onClick: s
}) {
  return /* @__PURE__ */ l(
    "button",
    {
      type: "button",
      "data-testid": `${t.toLowerCase()}row`,
      onClick: s,
      className: "group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-1 md:px-4 py-3 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-600",
      children: [
        e && /* @__PURE__ */ r(
          "img",
          {
            src: e,
            alt: `${t} Icon`,
            className: "h-4 w-4 md:h-6 md:w-6 flex-shrink-0 mr-2 p-0"
          }
        ),
        a && /* @__PURE__ */ r(a, { className: "h-4 w-4 md:h-6 md:w-6 flex-shrink-0" }),
        o,
        /* @__PURE__ */ r(
          "p",
          {
            className: `${i ? "inline-flex" : "hidden md:inline-flex"} group-hover:text-[#55a8c2] text-base font-light ${n ? "text-[#55a8c2]" : "dark:text-gray-50"}`,
            children: t
          }
        )
      ]
    }
  );
}
function fe(t, e) {
  return /* @__PURE__ */ f.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: e
  }, t), /* @__PURE__ */ f.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  }), /* @__PURE__ */ f.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  }));
}
const be = f.forwardRef(fe);
function pe(t, e) {
  return /* @__PURE__ */ f.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: e
  }, t), /* @__PURE__ */ f.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}
const xe = f.forwardRef(pe);
function ve(t, e) {
  return /* @__PURE__ */ f.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: e
  }, t), /* @__PURE__ */ f.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
  }));
}
const ye = f.forwardRef(ve);
function we(t, e) {
  return /* @__PURE__ */ f.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: e
  }, t), /* @__PURE__ */ f.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
  }));
}
const ke = f.forwardRef(we), I = {
  id: "user_c1191483-90fb-4fc1-b094-524b2e05a47a",
  username: "Reta.Spinka56",
  email: "Kristy.Orn@yahoo.com",
  firstName: "",
  lastName: "",
  bio: " معلم في الأردن 🇯🇴✨ شغوف بتعليم الأجيال الجديدة ومشاركة المعرفة. #تعليم #الأردن #معلم",
  avatar: "https://avatars.githubusercontent.com/u/23651665",
  bgThumbnail: "https://loremflickr.com/3609/1324/mosque?lock=3412212241714891",
  countryOfOrigin: "UAE",
  religion: "Prefer Not To Disclose",
  preferredMadhab: "Hanbali",
  frequentMasjid: "Al-Aqsa Mosque",
  maritalStatus: "married",
  dateOfBirth: "2006-08-03T16:54:24.206000000Z",
  hobbies: ["Reading Quran"],
  islamicStudyTopics: ["Arabic Grammar", "Seerah", "Aqeedah"],
  favoriteIslamicScholars: ["Nouman Ali Khan", "Ibn Taymiyyah"],
  followingUsers: [],
  followedByUsers: [],
  bookmarks: [],
  reposts: [],
  likedPosts: [],
  verified: !0,
  isCompleted: !0,
  createdAt: "2025-05-29T17:14:18.228000000Z",
  updatedAt: "2025-05-29T17:14:18.228000000Z"
};
class B {
  constructor(e) {
    u(this, "cookie");
    this.cookie = e ?? new ee();
  }
  getToken(e = "jwt") {
    return this.cookie.get(e) || null;
  }
  setToken(e, a = "jwt") {
    const o = /* @__PURE__ */ new Date();
    o.setDate(o.getDate() + 3), this.cookie.set(a, e, {
      path: "/",
      expires: o,
      secure: !0,
      sameSite: "strict"
    });
  }
  setUser(e, a = "user") {
    const o = /* @__PURE__ */ new Date();
    o.setDate(o.getDate() + 3), this.cookie.set(a, JSON.stringify(e), {
      path: "/",
      expires: o,
      secure: !0,
      sameSite: "strict"
    });
  }
  getUser(e = "user") {
    return this.cookie.get(e) ? JSON.parse(JSON.stringify(this.cookie.get(e))) : null;
  }
  isLoggedIn() {
    return !!this.cookie.get("user");
  }
  isTestUser() {
    var e;
    return this.isLoggedIn() && ((e = this.getUser()) == null ? void 0 : e.email) === I.email;
  }
  clearUser() {
    return this.cookie.remove("user");
  }
  clearToken(e = "jwt") {
    this.cookie.remove(e);
  }
}
class Ne {
  constructor(e, a) {
    u(this, "data");
    u(this, "pagination");
    this.data = e, this.pagination = a;
  }
}
class St {
  constructor(e, a) {
    u(this, "currentPage", 1);
    u(this, "itemsPerPage", 20);
    e && (this.currentPage = e), a && (this.itemsPerPage = a);
  }
}
let A;
function W() {
  if (!A) {
    const { supabaseUrl: t, supabaseAnonKey: e } = T();
    A = J(t, e);
  }
  return A;
}
const Ce = {
  sessionSignin: (t) => Se.post("/api/Session/signin", { values: t }).then(x),
  sessionCheck: (t) => p.post(
    "/api/Session/check",
    { values: { email: t } },
    { headers: { "Content-Type": "application/json" } }
  ).then(x),
  getUserProfile: (t) => p.get(`/api/Profile/${t}`).then(x),
  getUsersToAdd: (t) => p.get("/api/Users/usersToAdd", { params: t }).then(x),
  completeRegistration: (t, e) => p.post(`/api/Users/${t}`, { values: e }).then(x),
  followUser: (t) => p.patch("/api/Users/follow", { values: t }).then(x),
  unFollowUser: (t) => p.patch("/api/Users/unfollow", { values: t }).then(x),
  updateUser: (t) => p.put("/api/Users", { values: t }).then(x),
  deleteUser: () => p.delete("/api/Users").then(x)
}, x = (t) => t.data, Se = {
  get: (t) => p.get(t).then(x),
  post: (t, e, a) => p.post(t, e, a).then(x),
  put: (t, e) => p.put(t, e).then(x),
  patch: (t, e) => p.patch(t, e).then(x),
  del: (t) => p.delete(t).then(x)
};
p.interceptors.request.use(async (t) => {
  var o;
  t.baseURL = T().apiBaseUrl;
  const { data: e } = await W().auth.getSession(), a = (o = e.session) == null ? void 0 : o.access_token;
  return a && (t.headers.Authorization = `Bearer ${a}`), t;
});
p.interceptors.response.use(
  async (t) => {
    const e = t.headers.pagination;
    return e && (t.data = new Ne(t.data, JSON.parse(e))), t;
  },
  (t) => {
    const e = t.response;
    if (!(e != null && e.status))
      return Promise.reject("Error");
    switch (e.status) {
      case 400:
        console.log("Bad request");
        break;
      case 401:
        console.log("Authorization Error");
        break;
      case 403:
        console.log("Forbidden");
        break;
      case 404:
        console.log("Not found");
        break;
      case 500:
        console.log("Server error");
        break;
      default:
        console.log("A unique issue.");
        break;
    }
    return Promise.reject(t);
  }
);
const Le = {
  userApiClient: Ce
};
class Ue {
  constructor() {
    u(this, "processingUserCheck", !1);
    u(this, "currentSessionUser");
    u(this, "auth");
    u(this, "loadingRegistration", !1);
    u(this, "loadingUpsert", !1);
    u(this, "currentStepInUserRegistration", 0);
    u(this, "currentRegistrationForm", E);
    u(this, "initializeFromStorage", async () => {
      var e, a, o;
      if (this.auth || (this.auth = new B()), M())
        this.auth.setUser(I), this.setCurrentSessionUser(I);
      else if (!M() && ((e = this.auth) != null && e.isTestUser())) {
        this.resetAuthState();
        return;
      } else {
        const n = (a = this.auth) == null ? void 0 : a.getUser();
        return n ? (this.setCurrentSessionUser(n), n.id) : (o = this.currentSessionUser) == null ? void 0 : o.id;
      }
    });
    u(this, "setProcessingUserCheck", (e) => {
      this.processingUserCheck = e;
    });
    u(this, "setLoadingRegistration", (e) => {
      this.loadingRegistration = e;
    });
    u(this, "setLoadingUpsert", (e) => {
      this.loadingUpsert = e;
    });
    u(this, "setCurrentStepInUserRegistration", (e) => {
      this.currentStepInUserRegistration = e;
    });
    u(this, "setCurrentRegistrationForm", (e) => {
      this.currentRegistrationForm = e;
    });
    u(this, "setCurrentSessionUser", (e) => {
      var a;
      this.currentSessionUser = e, e && ((a = this.auth) == null || a.setUser(e));
    });
    u(this, "navigateBackToHome", () => {
      var e;
      window.location.href = `${((e = S()) == null ? void 0 : e.baseUrl) ?? "/"}`;
    });
    u(this, "resetAuthState", () => {
      var e, a;
      this.auth && ((e = this.auth) == null || e.clearToken(), (a = this.auth) == null || a.clearUser()), this.currentSessionUser = void 0;
    });
    u(this, "completeRegistration", async (e, a) => {
      this.setLoadingRegistration(!0);
      try {
        const o = {
          ...a,
          followingUsers: a.followingUsers.map((n) => n.id)
        };
        await Le.userApiClient.completeRegistration(e, o), Y(() => {
          this.setCurrentRegistrationForm(E), this.setCurrentStepInUserRegistration(0);
        });
      } finally {
        this.setLoadingRegistration(!1);
      }
    });
    this.auth = new B(), X(this);
  }
}
class $e {
  constructor() {
    u(this, "authStore");
    this.authStore = new Ue();
  }
}
const Re = new $e(), Ae = _(Re), Ie = () => D(Ae), Te = ({ appType: t = "default", onShowModal: e }) => {
  const a = oe(), { authStore: o } = Ie(), { currentSessionUser: n, resetAuthState: i } = o, [s, c] = w(!1), m = (g) => {
    var d;
    if (g.modalKey) return e == null ? void 0 : e(g.modalKey);
    if (g.requiresAuth && !n) return e == null ? void 0 : e("login");
    if (g.externalUrlKey) {
      const b = (d = S()) == null ? void 0 : d[g.externalUrlKey];
      b && (window.location.href = b);
      return;
    }
    g.href && a(g.href);
  }, h = async () => {
    i(), await W().auth.signOut();
  }, v = () => {
    var g;
    t === "default" ? a("/settings") : window.location.href = `${((g = S()) == null ? void 0 : g.baseUrl) ?? ""}settings`;
  }, y = ce[t];
  let k;
  return /* @__PURE__ */ l(
    "div",
    {
      className: "col-span-1 md:col-span-2 flex flex-col item-center mt-2 md:mt-0 md:px-4 md:items-start overflow-y-auto scrollbar-hide max-h-[90vh]",
      onClick: () => c(!1),
      children: [
        /* @__PURE__ */ r("div", { className: "flex justify-start", children: /* @__PURE__ */ r(
          "img",
          {
            "data-testid": "navlogo",
            className: "m-0 h-full w-full md:w-[90%] transition-all duration-200 sidebarLogo cursor-pointer",
            alt: "",
            style: { maxWidth: "unset" },
            onClick: () => a("/")
          }
        ) }),
        y.map((g) => {
          const d = g.group && g.group !== k ? /* @__PURE__ */ r("p", { className: "px-4 pt-3 pb-1 text-xs font-bold uppercase opacity-60 dark:text-gray-50", children: g.group }) : null;
          return k = g.group, /* @__PURE__ */ l(Q, { children: [
            d,
            /* @__PURE__ */ r(
              C,
              {
                title: g.title,
                iconSrc: g.iconSrc,
                onClick: () => m(g)
              }
            )
          ] }, g.title);
        }),
        /* @__PURE__ */ l("div", { className: "relative more-container", children: [
          /* @__PURE__ */ r(
            C,
            {
              Icon: xe,
              title: "More",
              onClick: () => c(!s)
            }
          ),
          s && /* @__PURE__ */ r("div", { className: "absolute left-0 mt-2 w-48 rounded-md shadow-lg ring-1 bg-white dark:bg-[#000000] ring-black ring-opacity-5 z-[950]", children: /* @__PURE__ */ r("div", { className: "py-1", role: "menu", "aria-orientation": "vertical", children: n ? /* @__PURE__ */ l(te, { children: [
            /* @__PURE__ */ r(
              C,
              {
                Icon: be,
                title: "Settings",
                isShow: !0,
                onClick: v
              }
            ),
            /* @__PURE__ */ r(C, { Icon: ke, title: "Sign Out", isShow: !0, onClick: h })
          ] }) : /* @__PURE__ */ r(
            C,
            {
              Icon: ye,
              title: "Sign In",
              isShow: !0,
              onClick: () => e == null ? void 0 : e("login")
            }
          ) }) })
        ] }),
        /* @__PURE__ */ r(he, {})
      ]
    }
  );
}, Oe = ae(Te);
function Ee({
  title: t,
  classNames: e,
  children: a
}) {
  return /* @__PURE__ */ l(
    "aside",
    {
      className: `hidden lg:col-span-2 lg:flex flex-col px-2 mt-2 space-y-3 ${e ?? ""}`,
      children: [
        t && /* @__PURE__ */ r("h3", { className: "text-xl font-bold dark:text-gray-50", children: t }),
        a
      ]
    }
  );
}
function Lt({
  appType: t = "default",
  children: e,
  widgets: a,
  modal: o,
  onShowModal: n
}) {
  return /* @__PURE__ */ l("div", { className: "grid grid-cols-9 min-h-screen bg-gray-50 dark:bg-[#0e1517]", children: [
    /* @__PURE__ */ r(Oe, { appType: t, onShowModal: n }),
    /* @__PURE__ */ r("main", { className: "col-span-8 lg:col-span-5 border-x border-gray-100 dark:border-gray-800", children: e }),
    a ? /* @__PURE__ */ r(Ee, { children: a }) : null,
    o ? /* @__PURE__ */ r(ue, { isOpen: o.isOpen, onClose: o.onClose, children: o.content }) : null
  ] });
}
const Ut = async () => {
  const { hfNsfwChecker: t, hfToken: e } = T();
  return V.connect(t, { hf_token: e });
}, $t = async (t, e) => {
  var n;
  const a = await t.predict("/chat", [e]), o = (a == null ? void 0 : a.data) ?? [];
  if (o != null && o.length)
    return ((n = o[0]) == null ? void 0 : n.text) ?? "No Response";
};
export {
  nt as Accordion,
  nt as AccordionDefault,
  B as Auth,
  Ue as AuthStore,
  ie as ButtonLoader,
  lt as CheckboxCard,
  kt as ConfirmModal,
  xt as ContentContainer,
  pt as ContentContainerWithRef,
  Je as CustomPageLoader,
  E as DEFAULT_USER_REGISTRATION_FORM,
  ot as DangerAlert,
  he as DarkSwitch,
  j as FALLBACK_IMAGE_URL,
  F as FALLBACK_NEWS_IMAGE_URL,
  P as FALLBACK_POST_IMAGE_URL,
  ht as FallbackImage,
  ut as FileUploadInput,
  wt as InfoCardContainer,
  Nt as LoadingSpinner,
  yt as MessagesImagePreview,
  ue as Modal,
  q as ModalBody,
  Qe as ModalLoader,
  G as ModalPortal,
  ct as MultiSelect,
  gt as MyDatePicker,
  dt as MyInput,
  rt as NoRecordsTitle,
  de as OptimizedImage,
  ft as OptimizedNewsImage,
  bt as OptimizedPostImage,
  Lt as PageContainer,
  et as PageTitle,
  tt as PageTitleNoPadding,
  Ne as PaginatedResult,
  St as PagingParams,
  vt as ProfileImagePreview,
  st as RadioCard,
  $e as RootStore,
  ce as SIDEBAR_LINKS,
  it as Select,
  Oe as Sidebar,
  C as SidebarRow,
  Ye as SkeletonLoader,
  Ae as StoreContext,
  Xe as SuspenseLoader,
  at as TagOrLabel,
  Ct as ThemeProvider,
  Ee as Widgets,
  $t as checkNsfwInImage,
  Ve as configureAlSaqr,
  T as getConfig,
  S as getConfigSafe,
  mt as getOAuthOptions,
  W as getSupabase,
  M as inTestMode,
  Ut as initializeClient,
  Re as rootStore,
  Ie as useStore,
  me as useTheme
};
//# sourceMappingURL=alsaqr-web-core.js.map
