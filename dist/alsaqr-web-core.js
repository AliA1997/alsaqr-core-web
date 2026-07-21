var ae = Object.defineProperty;
var se = (e, t, o) => t in e ? ae(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var m = (e, t, o) => se(e, typeof t != "symbol" ? t + "" : t, o);
import { Client as ie } from "@gradio/client";
import { createClient as le } from "@supabase/supabase-js";
import * as b from "react";
import O, { useState as w, useEffect as _, createContext as T, useContext as ee, useLayoutEffect as te, Fragment as ce } from "react";
import { makeAutoObservable as de, runInAction as ue } from "mobx";
import ge from "universal-cookie";
import l from "axios";
import { jsx as r, jsxs as d, Fragment as me } from "react/jsx-runtime";
import { motion as I } from "framer-motion";
import { useField as S } from "formik";
import { createPortal as he } from "react-dom";
import { observer as re } from "mobx-react-lite";
import { useLocation as q, useNavigate as fe } from "react-router-dom";
import pe from "react-datepicker";
let D;
function bt(e) {
  D = e;
}
function P() {
  if (!D)
    throw new Error(
      "alsaqr-web-core: call configureAlSaqr({...}) before using its clients."
    );
  return D;
}
function A() {
  return D;
}
const vt = ({ title: e }) => /* @__PURE__ */ r("div", { id: "page-loader-container", children: /* @__PURE__ */ d("div", { className: "wave", children: [
  /* @__PURE__ */ r("h2", { children: e }),
  /* @__PURE__ */ r("h2", { children: e })
] }) }), G = ({ className: e }) => /* @__PURE__ */ d(
  "svg",
  {
    "aria-hidden": "true",
    className: e,
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
), xt = O.memo(function() {
  return /* @__PURE__ */ r(G, { className: "inline w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-[#55a8c2]" });
}), be = O.memo(function() {
  return /* @__PURE__ */ r(G, { className: "inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-[#55a8c2]" });
}), yt = O.memo(function() {
  return /* @__PURE__ */ d("div", { className: "flex flex-row justify-center items-center w-full h-full", children: [
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
    /* @__PURE__ */ r(G, { className: "h-[5rem] w-[5rem] md:h-[8rem] md:w-[8rem] 2xl:h-[9.5rem] 2xl:w-[9.5rem] text-gray-200 animate-spin dark:text-gray-600 fill-[#55a8c2] mt-[2rem]" })
  ] });
}), wt = O.memo(function({
  count: t = 1,
  className: o
}) {
  return /* @__PURE__ */ r("div", { className: "space-y-4 w-full", children: Array.from({ length: t }).map((n, a) => /* @__PURE__ */ d(
    "div",
    {
      className: `animate-pulse flex flex-col space-y-3 dark:bg-[#1d2a2e] bg-gray-100 p-4 rounded-md w-full ${o && o}`,
      children: [
        /* @__PURE__ */ r("div", { className: "h-6 dark:bg-[#0e1517] bg-gray-300 rounded w-3/4" }),
        /* @__PURE__ */ r("div", { className: "h-4 dark:bg-[#0e1517] bg-gray-300 rounded w-full" }),
        /* @__PURE__ */ r("div", { className: "h-4 dark:bg-[#0e1517] bg-gray-300 rounded w-5/6" })
      ]
    },
    a
  )) });
});
function kt({ children: e, classNames: t }) {
  return /* @__PURE__ */ r(
    "h2",
    {
      className: `bg-gray-50 sticky top-0 z-[999] p-5 pb-0 text-xl dark:bg-[#0e1517] dark:text-gray-50 font-bold ${t || ""}`,
      children: e
    }
  );
}
function Nt({
  children: e,
  classNames: t
}) {
  return /* @__PURE__ */ r(
    "h2",
    {
      className: `bg-gray-50 sticky top-0 z-[999] p-0 pb-0 text-xl dark:bg-[#0e1517] dark:text-gray-50 font-bold ${t || ""}`,
      children: e
    }
  );
}
function Ct({ children: e }) {
  return /* @__PURE__ */ r("h3", { className: "pt-5 dark:text-gray-50", children: e });
}
function St({
  children: e,
  color: t = "primary",
  size: o = "md",
  rounded: n = !1,
  outlined: a = !1,
  className: s = "",
  testId: c,
  ...u
}) {
  const f = "inline-flex items-center font-medium whitespace-nowrap", p = {
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
  }[t], C = [
    f,
    p[o],
    n ? "rounded-full" : "rounded-md",
    a ? `border ${y.border} ${y.text} bg-transparent` : `${y.bg} ${y.text} border border-transparent`,
    s
  ].join(" ");
  return /* @__PURE__ */ r("span", { "data-testid": c ?? "tagorlabel", className: C, ...u, children: e });
}
function It({
  title: e = "Error",
  message: t,
  onClose: o,
  actions: n,
  className: a = ""
}) {
  const [s, c] = w(!0);
  if (!s) return null;
  const u = () => {
    c(!1), o == null || o();
  };
  return /* @__PURE__ */ r(
    "div",
    {
      role: "alert",
      "aria-live": "assertive",
      className: `relative w-full rounded-lg border border-red-200 bg-red-50 text-red-900 shadow-sm ${a}`,
      children: /* @__PURE__ */ d("div", { className: "flex items-start gap-3 p-4", children: [
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
        /* @__PURE__ */ d("div", { className: "flex-1", children: [
          e && /* @__PURE__ */ r("h3", { className: "text-sm font-semibold", children: e }),
          /* @__PURE__ */ r("p", { className: "mt-1 text-sm", children: t }),
          n && /* @__PURE__ */ r("div", { className: "mt-3 flex flex-wrap gap-2", children: n })
        ] }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            onClick: u,
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
const Lt = ({
  items: e,
  defaultExpanded: t = [0],
  allowMultiple: o = !0,
  className: n = ""
}) => {
  const [a, s] = w(
    new Set(t)
  ), c = (f) => {
    s((p) => {
      const v = o ? new Set(p) : /* @__PURE__ */ new Set();
      return p.has(f) ? v.delete(f) : v.add(f), v;
    });
  }, u = (f) => a.has(f);
  return /* @__PURE__ */ r("div", { className: `w-full divide-y ${n}`, children: e.map((f, p) => /* @__PURE__ */ d("div", { className: "group", children: [
    /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: "w-full p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors",
        onClick: (v) => {
          v.stopPropagation(), c(p);
        },
        "aria-expanded": u(p),
        "aria-controls": `accordion-section-${p}`,
        children: [
          /* @__PURE__ */ r("h4", { className: "font-medium text-gray-700 dark:text-gray-50", children: f.title }),
          /* @__PURE__ */ r(
            I.div,
            {
              animate: { rotate: u(p) ? 180 : 0 },
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
      I.div,
      {
        initial: !1,
        animate: {
          height: u(p) ? "auto" : 0,
          opacity: u(p) ? 1 : 0
        },
        transition: { duration: 0.2 },
        className: "overflow-hidden",
        children: /* @__PURE__ */ r("div", { id: `accordion-section-${p}`, className: "px-4 pb-4", children: f.jsx })
      }
    )
  ] }, p)) });
};
function Ut({ label: e, placeholder: t, options: o, ...n }) {
  const [a, s] = S(n);
  return /* @__PURE__ */ d("div", { className: "space-y-2 w-full", children: [
    e && /* @__PURE__ */ r("label", { htmlFor: n.name, className: "block mb-1 text-sm font-medium", children: e }),
    /* @__PURE__ */ d(
      "select",
      {
        name: a.name,
        onBlur: a.onBlur,
        onChange: a.onChange,
        value: a.value,
        className: `h-12 w-full text-lg outline-none placeholder:text-xl dark:bg-[#000000] border rounded-md px-3 ${n.className ?? ""} ${s.touched && s.error ? "border-red-500" : "dark:border-gray-700"}`,
        children: [
          t && /* @__PURE__ */ r("option", { value: "", disabled: !0, children: t }),
          o.map((c) => /* @__PURE__ */ r("option", { value: c.value, children: c.label }, c.value))
        ]
      }
    ),
    s.touched && s.error && /* @__PURE__ */ r("div", { className: "text-red-500 text-sm mt-1", children: s.error })
  ] });
}
const $t = ({
  label: e,
  description: t,
  value: o,
  icon: n,
  testId: a,
  ...s
}) => {
  const [c] = S(s.name);
  return /* @__PURE__ */ d(
    "label",
    {
      className: `relative flex cursor-pointer rounded-xl border p-2 shadow-sm focus:outline-none ${c.value === o ? "border-blue-500 ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 bg-white dark:bg-gray-800"}`,
      children: [
        /* @__PURE__ */ r(
          "input",
          {
            type: "radio",
            ...c,
            value: o,
            checked: c.value === o,
            className: "sr-only",
            "aria-labelledby": `${s.name}-${o}-label`
          }
        ),
        /* @__PURE__ */ d("div", { className: "flex flex-1", children: [
          n && /* @__PURE__ */ r("div", { className: "mr-3 flex-shrink-0", children: n }),
          /* @__PURE__ */ d("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ r(
              "span",
              {
                id: `${s.name}-${o}-label`,
                className: `block text-sm font-medium ${c.value === o ? "text-blue-900 dark:text-blue-100" : "text-gray-900 dark:text-gray-100"}`,
                "data-testid": a ?? "",
                children: e
              }
            ),
            t && /* @__PURE__ */ r(
              "span",
              {
                className: `mt-1 flex items-center text-sm ${c.value === o ? "text-blue-700 dark:text-blue-300" : "text-gray-500 dark:text-gray-400"}`,
                children: t
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ r(
          "div",
          {
            className: `absolute -top-2 -right-2 h-5 w-5 rounded-full border flex items-center justify-center ${c.value === o ? "border-blue-500 bg-blue-500" : "border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700"}`,
            "aria-hidden": "true",
            children: c.value === o && /* @__PURE__ */ r("div", { className: "h-2 w-2 rounded-full bg-white" })
          }
        )
      ]
    }
  );
}, Pt = ({
  label: e,
  description: t,
  icon: o,
  ...n
}) => {
  const [a] = S(n.name);
  return /* @__PURE__ */ d(
    "label",
    {
      className: `relative flex cursor-pointer rounded-xl border p-2 shadow-sm focus:outline-none ${a.value ? "border-blue-500 ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 bg-white dark:bg-gray-800"}`,
      children: [
        /* @__PURE__ */ r(
          "input",
          {
            type: "checkbox",
            ...a,
            value: a.value.toString(),
            checked: a.value,
            className: "sr-only cursor-pointer",
            "aria-labelledby": `${n.name}--label`
          }
        ),
        /* @__PURE__ */ d("div", { className: "flex flex-1", children: [
          o && /* @__PURE__ */ r("div", { className: "mr-3 flex-shrink-0", children: o }),
          /* @__PURE__ */ d("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ r(
              "span",
              {
                id: `${n.name}-${a.value}-label`,
                className: `block text-sm font-medium ${a.value ? "text-blue-900 dark:text-blue-100" : "text-gray-900 dark:text-gray-100"}`,
                children: e
              }
            ),
            t && /* @__PURE__ */ r(
              "span",
              {
                className: `mt-1 flex items-center text-sm ${a.value ? "text-blue-700 dark:text-blue-300" : "text-gray-500 dark:text-gray-400"}`,
                children: t
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ r(
          "div",
          {
            className: `absolute -top-2 cursor-pointer -right-2 h-5 w-5 rounded-md border flex items-center justify-center ${a.value ? "border-blue-500 bg-blue-500" : "border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700"}`,
            "aria-hidden": "true",
            children: a.value && /* @__PURE__ */ r("svg", { className: "h-3 w-3 text-white", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ r(
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
function ve(e, t) {
  return /* @__PURE__ */ b.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: t
  }, e), /* @__PURE__ */ b.createElement("path", {
    fillRule: "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}
const xe = b.forwardRef(ve);
function At({
  label: e,
  placeholder: t,
  options: o,
  ...n
}) {
  var R;
  const [a, s, c] = S(n.name), [u, f] = w(""), p = (h) => {
    f(h.target.value);
  }, v = (h) => {
    if (h.key === "Enter" && u.trim()) {
      h.preventDefault();
      const x = { value: u };
      a.value.some((L) => L === x.value) || c.setValue([...a.value, x.value]), f("");
    }
    h.key === "Backspace" && !u && a.value.length > 0 && c.setValue(a.value.slice(0, -1));
  }, y = (h) => {
    c.setValue(a.value.filter((x) => x !== h));
  }, C = o.filter(
    (h) => {
      var x;
      return h.label.toLowerCase().includes(u.toLowerCase()) && !((x = a == null ? void 0 : a.value) != null && x.includes(h.value));
    }
  );
  return /* @__PURE__ */ d("div", { className: "space-y-2 relative", children: [
    e && /* @__PURE__ */ r(
      "label",
      {
        htmlFor: n.name,
        className: "block text-md font-medium text-gray-700 dark:text-gray-100",
        children: e
      }
    ),
    /* @__PURE__ */ d("div", { className: "flex flex-wrap gap-2 p-2 min-h-8 w-full border rounded-md dark:bg-[#000000] dark:border-gray-700", children: [
      (R = a == null ? void 0 : a.value) == null ? void 0 : R.map((h) => {
        const x = o.find((L) => L.value === h) || {
          label: h
        };
        return /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            onDoubleClick: () => y(h),
            className: "flex items-center px-2 bg-[#55a8c2] text-gray-50 rounded-full text-md",
            children: [
              x.label,
              /* @__PURE__ */ r(
                xe,
                {
                  onClick: () => y(h),
                  className: "ml-2 h-4 w-4 hover:bg-[unset] cursor-pointer"
                }
              )
            ]
          },
          h
        );
      }),
      /* @__PURE__ */ r(
        "input",
        {
          "data-testid": "multiselectinput",
          type: "text",
          value: u,
          onChange: p,
          onKeyDown: v,
          placeholder: t || "Type and press enter...",
          className: "flex-1 min-w-[100px] text-xl outline-none placeholder:text-xl dark:bg-[#000000] dark:text-gray-50 text-gray-900"
        }
      )
    ] }),
    u && C.length > 0 && /* @__PURE__ */ r("div", { className: "absolute left-0 bottom-0 mt-1 w-full z-[9999] border bg-[#FFFFFF] rounded-md shadow-lg dark:bg-[#000000] dark-border-gray-50 dark:border-gray-700 dark:text-gray-50", children: C.slice(0, 6).map((h) => /* @__PURE__ */ r(
      "div",
      {
        className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer",
        "data-testid": "multiselectfilteredlabel",
        onClick: () => {
          var x;
          (x = a == null ? void 0 : a.value) != null && x.includes(h.value) || c.setValue([...a.value, h.value]), f("");
        },
        children: h.label
      },
      h.value
    )) }),
    s.touched && s.error && /* @__PURE__ */ r("div", { className: "text-red-500 text-sm", children: s.error })
  ] });
}
function Rt({ label: e, prefix: t, disabled: o, ...n }) {
  const [a, s] = S(n.name);
  return /* @__PURE__ */ d("div", { className: "w-full", children: [
    e && /* @__PURE__ */ r(
      "label",
      {
        htmlFor: n.id || n.name,
        className: "block mb-2 text-md font-medium dark:text-gray-50",
        children: e
      }
    ),
    /* @__PURE__ */ d("div", { className: "relative", children: [
      t && /* @__PURE__ */ r("span", { className: "absolute left-0 text-lg border-r-2 dark:border-r-0 w-10 h-full text-gray-900 bg-gray-100 dark:bg-transparent dark:text-gray-50 px-3 py-1 dark:py-2", children: t }),
      /* @__PURE__ */ r(
        "input",
        {
          ...a,
          type: n.type || "text",
          placeholder: n.placeholder,
          className: `h-12 w-full text-lg outline-none placeholder:text-xl dark:bg-[#000000] dark:text-gray-50 ${t ? "pl-12" : ""} ${s.touched && s.error ? "border-red-500 border" : ""} ${n.className || ""}`,
          disabled: o ?? !1,
          "data-testid": `${n.name.toLowerCase()}input`
        }
      ),
      s.touched && s.error ? /* @__PURE__ */ r("div", { className: "text-red-500 text-sm mt-1", children: s.error }) : null
    ] })
  ] });
}
function Dt({ label: e, ...t }) {
  const [, o, n] = S(t);
  return /* @__PURE__ */ d("div", { className: "mb-4", children: [
    e && /* @__PURE__ */ r("label", { className: "block text-md font-medium text-gray-700 dark:text-gray-300 mb-1", children: e }),
    /* @__PURE__ */ r(
      "input",
      {
        type: "file",
        id: t.id,
        name: t.name,
        onChange: (a) => t.handleFileChange(a, n),
        onBlur: () => n.setTouched(!0),
        "data-testid": `${t.name.toLowerCase()}input`,
        className: `block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100
          dark:file:bg-blue-900 dark:file:text-blue-100
          dark:hover:file:bg-blue-800
          ${o.touched && o.error ? "border-red-500" : "border-gray-300"}`
      }
    ),
    o.touched && o.error ? /* @__PURE__ */ r("div", { className: "text-red-500 text-xs mt-1", children: o.error }) : null
  ] });
}
function Ot({ label: e, ...t }) {
  const [o, n, a] = S(t.name);
  return /* @__PURE__ */ d("div", { className: "w-full", children: [
    e && /* @__PURE__ */ r(
      "label",
      {
        htmlFor: t.id || t.name,
        className: "block mb-2 text-md font-medium",
        children: e
      }
    ),
    /* @__PURE__ */ r(
      pe,
      {
        id: t.id || t.name,
        selected: o.value,
        onChange: (s) => a.setValue(s),
        onBlur: () => a.setTouched(!0),
        placeholderText: t.placeholder,
        className: `h-12 w-full text-lg outline-none placeholder:text-xl dark:bg-[#000000] ${n.touched && n.error ? "border-red-500 border" : ""} ${t.className || ""}`,
        dateFormat: "MM/dd/yyyy",
        showYearDropdown: !0,
        dropdownMode: "select"
      }
    ),
    n.touched && n.error ? /* @__PURE__ */ r("div", { className: "text-red-500 text-sm mt-1", children: n.error }) : null
  ] });
}
const J = {
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
}, H = () => {
  var e;
  return ((e = A()) == null ? void 0 : e.testMode) ?? !1;
}, ye = () => {
  var e;
  return {
    redirectTo: (e = A()) == null ? void 0 : e.baseUrl
  };
}, K = "https://res.cloudinary.com/aa1997/image/upload/v1720130142/Web3-Client-Projects/Gm.png", Y = "/explore-news-placeholder.svg", Q = "/post-placeholder.svg", we = {
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
function Mt({ src: e, alt: t, onClick: o }) {
  return /* @__PURE__ */ r(
    "img",
    {
      className: "h-10 w-10 rounded-full object-cover",
      src: e,
      alt: t,
      height: 50,
      width: 50,
      onClick: o,
      loading: "lazy"
    }
  );
}
function ke({
  src: e,
  alt: t,
  onClick: o,
  classNames: n,
  loadedHeight: a,
  loadedWidth: s
}) {
  const [c, u] = w(e);
  return /* @__PURE__ */ r(
    "img",
    {
      className: n || "h-10 w-10 rounded-full object-cover",
      src: c ?? "",
      alt: t,
      height: a || 50,
      width: s || 50,
      onClick: o,
      onError: () => {
        c != K && u(K);
      },
      loading: "lazy"
    }
  );
}
function jt({
  src: e,
  alt: t,
  onClick: o,
  classNames: n
}) {
  const [a, s] = w(e);
  return /* @__PURE__ */ r(
    "img",
    {
      className: n || "h-full w-full object-cover",
      src: a ?? "",
      alt: t,
      height: 600,
      width: 600,
      onClick: o,
      onError: () => {
        a != Y && s(Y);
      },
      loading: "lazy"
    }
  );
}
function Et({
  src: e,
  alt: t,
  onClick: o,
  classNames: n
}) {
  const [a, s] = w(e);
  return /* @__PURE__ */ r(
    "img",
    {
      className: n || "h-full w-full object-cover",
      src: a ?? "",
      alt: t,
      height: 600,
      width: 600,
      onClick: o,
      onError: () => {
        a != Q && s(Q);
      },
      loading: "lazy"
    }
  );
}
const Bt = ({
  innerRef: e,
  children: t,
  classNames: o,
  testId: n,
  ...a
}) => /* @__PURE__ */ r(
  "div",
  {
    ref: e,
    className: `max-w-4xl mx-auto bg-white dark:bg-[#0e1517] rounded-lg mt-10 ${o && o}`,
    "data-testid": n ?? "",
    ...a,
    children: t
  }
);
function zt({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: "max-w-xl mx-auto bg-white dark:bg-[#0e1517] shadow-md rounded-lg mt-10",
      ...t,
      children: e
    }
  );
}
function Ft({
  username: e,
  bgThumbnail: t,
  avatar: o
}) {
  return /* @__PURE__ */ r(
    I.div,
    {
      className: "flex justify-center items-center bg-gray-100 w-full h-[10em] relative",
      style: t ? {
        backgroundImage: `url('${t}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      } : {},
      children: /* @__PURE__ */ r(
        "img",
        {
          className: "h-20 w-20 bottom-10 rounded-full",
          src: o,
          alt: e,
          height: 50,
          width: 50
        }
      )
    }
  );
}
function _t({ user: e, index: t }) {
  return /* @__PURE__ */ r(
    ke,
    {
      src: e.avatar,
      alt: e.username,
      classNames: `w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 relative ${t === 0 ? "z-0" : t === 1 ? "z-10" : "z-20"} ${t > 0 ? "ml-[-1rem]" : ""}`
    },
    e.id
  );
}
function qt({
  children: e,
  classNames: t
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: `relative flex flex-1 flex-col border-y border-gray-100 p-5 hover:shadow-lg dark:border-gray-800 dark:hover:bg-[#000000] dark:text-gray-50 ${t && t}`,
      children: e
    }
  );
}
const W = ({
  onClose: e,
  headerChildren: t,
  children: o,
  classNames: n,
  bodyClassNames: a,
  ...s
}) => /* @__PURE__ */ r(
  "div",
  {
    className: `fixed inset-0 z-[999] flex items-center justify-center bg-black/75 h-screen ${n ?? ""}`,
    ...s,
    children: /* @__PURE__ */ d(
      "div",
      {
        className: `relative bg-white dark:bg-[#000000] rounded-lg shadow-lg w-11/12 mx-auto ${a ?? "max-w-lg"}`,
        children: [
          /* @__PURE__ */ r("div", { className: "relative p-4", children: t || /* @__PURE__ */ r(
            "button",
            {
              onClick: e,
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
          /* @__PURE__ */ r("div", { className: "flex flex-col align-center justify-center p-4", children: o })
        ]
      }
    )
  }
), Z = ({ children: e }) => {
  const [t, o] = w(!1);
  return _(() => (o(!0), () => o(!1)), []), t ? he(e, document.body) : null;
}, Ne = ({
  isOpen: e,
  onClose: t,
  children: o,
  classNames: n,
  bodyClassNames: a
}) => e ? /* @__PURE__ */ r(Z, { children: /* @__PURE__ */ r(
  W,
  {
    onClose: t,
    classNames: n,
    bodyClassNames: a,
    children: o
  }
) }) : null, Gt = ({
  isOpen: e,
  title: t,
  confirmMessage: o,
  children: n,
  onClose: a,
  confirmFunc: s,
  declineButtonText: c,
  confirmButtonText: u,
  confirmButtonClassNames: f
}) => {
  const [p, v] = w(!1);
  return e ? /* @__PURE__ */ r(Z, { children: /* @__PURE__ */ r(W, { headerChildren: /* @__PURE__ */ r("h2", { children: t }), onClose: a, children: /* @__PURE__ */ d("div", { className: "flex flex-col w-full h-full", children: [
    n ?? null,
    /* @__PURE__ */ r("p", { children: o }),
    /* @__PURE__ */ d("div", { className: "flex px-2 justify-between", children: [
      /* @__PURE__ */ r(
        "button",
        {
          onClick: a,
          className: "rounded-full bg-gray-100 px-5 py-2 font-bold text-gray-900 disabled:opacity-40 cursor-pointer",
          type: "button",
          children: c
        }
      ),
      /* @__PURE__ */ r(
        "button",
        {
          onClick: async (y) => {
            y.stopPropagation(), v(!0);
            try {
              await s();
            } finally {
              v(!1);
            }
          },
          disabled: p,
          className: `rounded-full bg-[#55a8c2] px-5 py-2 font-bold text-white ${f ?? ""} disabled:opacity-40 cursor-pointer`,
          type: "button",
          children: p ? /* @__PURE__ */ r(be, {}) : u
        }
      )
    ] })
  ] }) }) }) : null;
}, Ce = ({
  title: e,
  defaultOpen: t = !1,
  children: o,
  className: n = ""
}) => {
  const [a, s] = w(t);
  return /* @__PURE__ */ d("div", { className: `w-full ${n}`, children: [
    /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        onClick: (c) => {
          c.stopPropagation(), s((u) => !u);
        },
        "aria-expanded": a,
        className: "w-full flex justify-between items-center px-4 pt-3 pb-1",
        children: [
          /* @__PURE__ */ r("span", { className: "text-xs font-bold uppercase opacity-60 dark:text-gray-50", children: e }),
          /* @__PURE__ */ r(
            I.svg,
            {
              animate: { rotate: a ? 180 : 0 },
              transition: { duration: 0.2 },
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              className: "h-4 w-4 text-gray-500",
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
        ]
      }
    ),
    /* @__PURE__ */ r(
      I.div,
      {
        initial: !1,
        animate: { height: a ? "auto" : 0, opacity: a ? 1 : 0 },
        transition: { duration: 0.2 },
        className: "overflow-hidden",
        children: o
      }
    )
  ] });
}, z = {
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
  maritalStatus: "married",
  dateOfBirth: "2006-08-03T16:54:24.206000000Z",
  hobbies: ["Playing Futbol"],
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
class j {
  constructor(t) {
    m(this, "cookie");
    this.cookie = t ?? new ge();
  }
  getToken(t = "jwt") {
    return this.cookie.get(t) || null;
  }
  setToken(t, o = "jwt") {
    const n = /* @__PURE__ */ new Date();
    n.setDate(n.getDate() + 3), this.cookie.set(o, t, {
      path: "/",
      expires: n,
      secure: !0,
      sameSite: "strict"
    });
  }
  setUser(t, o = "user") {
    const n = /* @__PURE__ */ new Date();
    n.setDate(n.getDate() + 3), this.cookie.set(o, JSON.stringify(t), {
      path: "/",
      expires: n,
      secure: !0,
      sameSite: "strict"
    });
  }
  getUser(t = "user") {
    return this.cookie.get(t) ? JSON.parse(JSON.stringify(this.cookie.get(t))) : null;
  }
  isLoggedIn() {
    return !!this.cookie.get("user");
  }
  isTestUser() {
    var t;
    return this.isLoggedIn() && ((t = this.getUser()) == null ? void 0 : t.email) === z.email;
  }
  clearUser() {
    return this.cookie.remove("user");
  }
  clearToken(t = "jwt") {
    this.cookie.remove(t);
  }
  setUserIpInfo(t, o = "userIpInfo") {
    const n = /* @__PURE__ */ new Date();
    n.setDate(n.getDate() + 7), this.cookie.set(o, JSON.stringify(t), {
      path: "/",
      expires: n,
      secure: !0,
      sameSite: "strict"
    });
  }
  getUserIpInfo(t = "userIpInfo") {
    return this.cookie.get(t) ? JSON.parse(JSON.stringify(this.cookie.get(t))) : null;
  }
}
class Se {
  constructor(t, o) {
    m(this, "data");
    m(this, "pagination");
    this.data = t, this.pagination = o;
  }
}
class Wt {
  constructor(t, o) {
    m(this, "currentPage", 1);
    m(this, "itemsPerPage", 20);
    t && (this.currentPage = t), o && (this.itemsPerPage = o);
  }
}
let E;
function M() {
  if (!E) {
    const { supabaseUrl: e, supabaseAnonKey: t } = P();
    E = le(e, t);
  }
  return E;
}
const F = {
  sessionSignin: (e) => l.post("/api/auth/signin", { values: e }, { headers: {
    "Content-Type": "application/json"
  } }).then(i),
  sessionCheck: (e, t) => l.post("/api/Session/check ", { values: { email: e, web3_address: t } }, { headers: {
    "Content-Type": "application/json"
  } }).then(i),
  // Web3 wallet auth mirrors the oauth flow: signin upserts the wallet user,
  // check returns the session user keyed by wallet address instead of email.
  web3SessionSignin: (e) => l.post("/api/auth/signin", { values: { web3_address: e, provider: "web3" } }, { headers: {
    "Content-Type": "application/json"
  } }).then(i),
  web3SessionCheck: (e) => l.post("/api/Session/check ", { values: { web3_address: e, email: "" } }, { headers: {
    "Content-Type": "application/json"
  } }).then(i),
  getUserProfile: (e) => l.get(`/api/Profile/${e}`).then(i),
  getUsersToAdd: (e) => l.get("/api/Users/usersToAdd", { params: e }).then(i),
  getUserProfilePosts: (e, t) => l.get(`/api/Profile/${e}/posts`, { params: t }).then(i),
  getUserProfileMediaPosts: (e, t) => l.get(`/api/Profile/${e}/media-posts`, { params: t }).then(i),
  getUserProfileCommunities: (e, t) => l.get(`/api/Profile/${e}/communities`, { params: t }).then(i),
  getUserProfileCommunityDiscussions: (e, t) => l.get(`/api/Profile/${e}/communityDiscussions`, { params: t }).then(i),
  getUserProfileGroups: (e, t) => l.get(`/api/Profile/${e}/groups`, { params: t }).then(i),
  getUserProfileEvents: (e, t) => l.get(`/api/Profile/${e}/events`, { params: t }).then(i),
  getUserProfileProducts: (e, t) => l.get(`/api/Profile/${e}/products`, { params: t }).then(i),
  completeRegistration: (e, t) => l.post(`/api/Users/${e}`, { values: t }).then(i),
  followUser: (e) => l.patch("/api/Users/follow", { values: e }).then(i),
  unFollowUser: (e) => l.patch("/api/Users/unfollow", { values: e }).then(i),
  updateUser: (e) => l.put("/api/Users", { values: e }).then(i),
  deleteUser: () => l.delete("/api/Users").then(i)
}, Ie = {
  getIpAddress: () => l.get(P().locationApiUrl).then(i),
  reverseLocateAddress: (e, t) => l.get(`${P().locationReverseApiUrl ?? ""}?lat=${e}&lon=${t}&format=geojson`).then(i)
}, Le = {
  getNotifications: (e, t, o) => o ? l.get(`/api/notifications/${e}`, {
    params: t,
    headers: {
      Authorization: `Bearer ${o}`
    }
  }).then(i) : l.get(`/api/notifications/${e}`, {
    params: t
  }).then(i)
}, Ue = {
  loadDirectMessages: (e) => l.get("/api/users/messages", { params: e }).then(i),
  sendDirectMessage: (e) => l.post("/api/messages/sendMessage", { values: e }).then(i),
  loadDirectMessageThreads: (e, t) => t ? l.get("/api/users/messageThreads", { params: e, headers: { Authorization: `Bearer ${t}` } }).then(i) : l.get("/api/users/messageThreads", { params: e }).then(i)
}, $e = {
  getSubscriptionDailyUse: (e) => l.get("/api/Yumna/dailyUse", { params: e }).then(i)
}, Pe = {
  getExplore: (e) => l.get("/api/explore", { params: e }).then(i),
  getExploreFromSource: (e, t) => l.get(`/api/explore/source/${e}`, { params: t }).then(i)
}, Ae = {
  getCategories: () => U.get("/api/Category"),
  getCategory: (e) => U.get(`/api/Category/${e}`).then(i),
  addProduct: (e) => U.post("/api/Products", { values: e }).then(i),
  updateProduct: (e, t) => U.put(`/api/Products/${t}`, { values: e }).then(i),
  deleteProduct: (e) => U.del(`/api/Products/${e}`).then(i),
  getSellingProducts: (e) => l.get("/api/UserProducts/selling", { params: e }).then(i),
  getBuyingProducts: (e) => l.get("/api/UserProducts/buying", { params: e }).then(i),
  getNearbyProducts: (e) => l.get("/api/Products", { params: e }).then(i),
  getNearbyProductsOnCategory: (e, t) => l.get(`/api/Products/${t}`, { params: e }).then(i),
  getProduct: (e, t) => l.get(`/api/ProductDetails/${t}`, { params: e }).then(i),
  getSimilarProducts: (e, t) => l.get(`/api/ProductDetails/${t}/marquee`, { params: e }).then(i)
}, i = (e) => e.data, U = {
  get: (e) => l.get(e).then(i),
  post: (e, t, o) => l.post(e, t, o).then(i),
  put: (e, t) => l.put(e, t).then(i),
  patch: (e, t) => l.patch(e, t).then(i),
  del: (e) => l.delete(e).then(i)
};
l.interceptors.request.use(async (e) => {
  var n;
  e.baseURL = P().apiBaseUrl;
  const { data: t } = await M().auth.getSession(), o = (n = t.session) == null ? void 0 : n.access_token;
  return o && (e.headers.Authorization = `Bearer ${o}`), e;
});
l.interceptors.response.use(
  async (e) => {
    const t = e.headers.pagination;
    return t && (e.data = new Se(e.data, JSON.parse(t))), e;
  },
  (e) => {
    const t = e.response;
    if (!(t != null && t.status))
      return Promise.reject("Error");
    switch (t.status) {
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
    return Promise.reject(e);
  }
);
const X = {
  userApiClient: F,
  subscriptionApiClient: $e,
  productApiClient: Ae,
  notificationApiClient: Le,
  messageApiClient: Ue,
  locationApiClient: Ie,
  exploreApiClient: Pe
};
class Re {
  constructor() {
    m(this, "processingUserCheck", !1);
    m(this, "currentSessionUser");
    m(this, "auth");
    m(this, "userIpInfo");
    m(this, "loadingRegistration", !1);
    m(this, "loadingUpsert", !1);
    m(this, "currentStepInUserRegistration", 0);
    m(this, "currentRegistrationForm", J);
    m(this, "initializeFromStorage", async () => {
      var t, o, n;
      if (this.auth || (this.auth = new j()), H())
        this.auth.setUser(z), this.setCurrentSessionUser(z);
      else if (!H() && ((t = this.auth) != null && t.isTestUser())) {
        this.resetAuthState();
        return;
      } else {
        const a = (o = this.auth) == null ? void 0 : o.getUser();
        return a ? (this.setCurrentSessionUser(a), a.id) : (n = this.currentSessionUser) == null ? void 0 : n.id;
      }
    });
    m(this, "setUserIpInfo", (t) => {
      this.userIpInfo = t;
    });
    m(this, "loadIpInfo", async () => {
      var t, o;
      if (this.auth || (this.auth = new j()), (t = this.auth) != null && t.getUserIpInfo())
        this.setUserIpInfo(this.auth.getUserIpInfo());
      else {
        const n = await X.locationApiClient.getIpAddress(), a = {
          locationDisplayName: `${n.city}, ${n.country_name}`,
          latitude: n.latitude,
          longitude: n.longitude
        };
        (o = this.auth) == null || o.setUserIpInfo(a), this.setUserIpInfo(a), console.log("user IP DATA:", this.userIpInfo);
      }
    });
    m(this, "setProcessingUserCheck", (t) => {
      this.processingUserCheck = t;
    });
    m(this, "setLoadingRegistration", (t) => {
      this.loadingRegistration = t;
    });
    m(this, "setLoadingUpsert", (t) => {
      this.loadingUpsert = t;
    });
    m(this, "setCurrentStepInUserRegistration", (t) => {
      this.currentStepInUserRegistration = t;
    });
    m(this, "setCurrentRegistrationForm", (t) => {
      this.currentRegistrationForm = t;
    });
    m(this, "setCurrentSessionUser", (t) => {
      var o;
      this.currentSessionUser = t, t && ((o = this.auth) == null || o.setUser(t));
    });
    m(this, "navigateBackToHome", () => {
      var t;
      window.location.href = `${((t = A()) == null ? void 0 : t.baseUrl) ?? "/"}`;
    });
    m(this, "resetAuthState", () => {
      var t, o;
      this.auth && ((t = this.auth) == null || t.clearToken(), (o = this.auth) == null || o.clearUser()), this.currentSessionUser = void 0;
    });
    m(this, "completeRegistration", async (t, o) => {
      this.setLoadingRegistration(!0);
      try {
        const n = {
          ...o,
          followingUsers: o.followingUsers.map((a) => a.id)
        };
        await X.userApiClient.completeRegistration(t, n), ue(() => {
          this.setCurrentRegistrationForm(J), this.setCurrentStepInUserRegistration(0);
        });
      } finally {
        this.setLoadingRegistration(!1);
      }
    });
    this.auth = new j(), de(this);
  }
}
class De {
  constructor() {
    m(this, "authStore");
    this.authStore = new Re();
  }
}
const Oe = new De(), Me = T(Oe), oe = () => ee(Me), B = `
  flex items-center p-3 border rounded-lg font-medium
  text-gray-600 border-gray-300 hover:bg-gray-100 hover:text-gray-800
  dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white
`, Zt = re(
  ({ onClose: e, routesUserCantAccess: t = [] }) => {
    const { pathname: o } = q(), { authStore: n } = oe(), { currentSessionUser: a } = n, s = (u) => M().auth.signInWithOAuth({
      provider: u,
      options: ye()
    });
    return /* @__PURE__ */ r(Z, { children: /* @__PURE__ */ r(W, { onClose: () => {
      (!t.some(
        (f) => o.includes(f)
      ) || a) && e();
    }, children: /* @__PURE__ */ d("div", { className: "flex flex-col justify-center", children: [
      /* @__PURE__ */ d(
        "button",
        {
          className: B,
          onClick: () => s("google"),
          children: [
            /* @__PURE__ */ r(
              "img",
              {
                src: "/google-icon.svg",
                height: 30,
                width: 30,
                alt: "Google Social Button Icon",
                className: "mr-2"
              }
            ),
            "Sign in with Google"
          ]
        }
      ),
      /* @__PURE__ */ d(
        "button",
        {
          className: B,
          onClick: () => s("facebook"),
          children: [
            /* @__PURE__ */ r(
              "img",
              {
                src: "/facebook-icon.svg",
                height: 30,
                width: 30,
                alt: "Facebook Social Button Icon",
                className: "mr-2"
              }
            ),
            "Sign in with Facebook"
          ]
        }
      ),
      /* @__PURE__ */ d(
        "button",
        {
          className: B,
          onClick: () => s("discord"),
          children: [
            /* @__PURE__ */ r(
              "img",
              {
                src: "/discord-icon.svg",
                height: 30,
                width: 30,
                alt: "Discord Social Button Icon",
                className: "mr-2"
              }
            ),
            "Sign in with Discord"
          ]
        }
      )
    ] }) }) });
  }
);
function Vt(e, t) {
  const { pathname: o } = q();
  async function n() {
    const a = await M().auth.getSession();
    if (a && a.data.session) {
      const s = a.data.session.user.email;
      await F.sessionSignin(s);
      const c = await F.sessionCheck(s);
      c && e(c.result);
    } else
      e(void 0);
  }
  return te(() => {
    n();
  }, [t == null ? void 0 : t.id, o]), {};
}
function Jt({ size: e, color: t }) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: `${e} animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${t}`,
      role: "status",
      children: /* @__PURE__ */ r("span", { className: "sr-only", children: "Loading..." })
    }
  );
}
const je = {
  theme: "system",
  setTheme: () => null
}, ne = T(je);
function Ht({
  children: e,
  defaultTheme: t = "system",
  storageKey: o = "alsaqr-ui-theme",
  ...n
}) {
  const [a, s] = w(() => typeof window > "u" ? t : localStorage.getItem(o) || t);
  _(() => {
    const u = window.document.documentElement;
    if (u.classList.remove("light", "dark"), a === "system") {
      const f = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      u.classList.add(f);
      return;
    }
    u.classList.add(a);
  }, [a]);
  const c = {
    theme: a,
    setTheme: (u) => {
      typeof window < "u" && localStorage.setItem(o, u), s(u);
    }
  };
  return /* @__PURE__ */ r(ne.Provider, { ...n, value: c, children: e });
}
const Ee = () => {
  const e = ee(ne);
  if (e === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}, Be = () => {
  const { theme: e, setTheme: t } = Ee();
  return /* @__PURE__ */ d(
    I.button,
    {
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.9 },
      className: "group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-2 py-1 mx-1 lg:px-6 my-1 md:mt-6 lg:py-3 transition-all duration-200 hover:bg-[#55a8c2] dark:bg-[#1d2a2e] dark:text-gray-50 bg-gray-50 dark:hover:opacity-80 dark:hover:text-[#1d2a2e]",
      onClick: () => t(e === "dark" ? "light" : "dark"),
      children: [
        e === "dark" ? /* @__PURE__ */ r(
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
        /* @__PURE__ */ r("p", { className: "hidden md:inline-flex dark:text-gray-50 font-light group-hover:text-black dark:group-hover:text-[#1d2a2e] text-[#1d2a2e]", children: e === "dark" ? "Light Mode" : "Dark Mode" })
      ]
    }
  );
};
function $({
  title: e,
  iconSrc: t,
  Icon: o,
  IconImage: n,
  active: a,
  isShow: s,
  onClick: c
}) {
  return /* @__PURE__ */ d(
    "button",
    {
      type: "button",
      "data-testid": `${e.toLowerCase()}row`,
      onClick: c,
      className: "group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-1 md:px-4 py-3 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-600",
      children: [
        t && /* @__PURE__ */ r(
          "img",
          {
            src: t,
            alt: `${e} Icon`,
            className: "h-4 w-4 md:h-6 md:w-6 flex-shrink-0 mr-2 p-0"
          }
        ),
        o && /* @__PURE__ */ r(o, { className: "h-4 w-4 md:h-6 md:w-6 flex-shrink-0" }),
        n,
        /* @__PURE__ */ r(
          "p",
          {
            className: `${s ? "inline-flex" : "hidden md:inline-flex"} group-hover:text-[#55a8c2] text-base font-light ${a ? "text-[#55a8c2]" : "dark:text-gray-50"}`,
            children: e
          }
        )
      ]
    }
  );
}
function ze(e, t) {
  return /* @__PURE__ */ b.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: t
  }, e), /* @__PURE__ */ b.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  }), /* @__PURE__ */ b.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  }));
}
const Fe = b.forwardRef(ze);
function _e(e, t) {
  return /* @__PURE__ */ b.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: t
  }, e), /* @__PURE__ */ b.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}
const qe = b.forwardRef(_e);
function Ge(e, t) {
  return /* @__PURE__ */ b.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: t
  }, e), /* @__PURE__ */ b.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
  }));
}
const We = b.forwardRef(Ge);
function Ze(e, t) {
  return /* @__PURE__ */ b.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: t
  }, e), /* @__PURE__ */ b.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
  }));
}
const Ve = b.forwardRef(Ze), Je = ({
  appType: e = "default",
  onShowModal: t,
  routesUserCantAccess: o = []
}) => {
  const n = fe(), a = q(), { authStore: s } = oe(), { auth: c, currentSessionUser: u, resetAuthState: f } = s, [p, v] = w(!1), [y, C] = w(!1);
  _(() => (C(!0), () => C(!1)), []), te(() => {
    const g = y && !(c != null && c.isLoggedIn()), k = o.some(
      (N) => a.pathname.includes(N)
    );
    g && k && (t == null || t("login", e));
  }, [u == null ? void 0 : u.id, y, a.pathname]);
  const R = (g) => {
    var k;
    if (g.modalKey) return t == null ? void 0 : t(g.modalKey, e);
    if (g.requiresAuth && !u)
      return t == null ? void 0 : t("login", e);
    if (g.externalUrlKey) {
      const N = (k = A()) == null ? void 0 : k[g.externalUrlKey];
      N && (window.location.href = N);
      return;
    }
    g.href && n(g.href);
  }, h = async () => {
    f(), await M().auth.signOut();
  }, x = () => {
    var g;
    e === "default" ? n("/settings") : window.location.href = `${((g = A()) == null ? void 0 : g.baseUrl) ?? ""}settings`;
  }, L = we[e].reduce((g, k) => {
    const N = g[g.length - 1];
    return k.group && (N == null ? void 0 : N.group) === k.group ? N.links.push(k) : g.push({ group: k.group, links: [k] }), g;
  }, []), V = (g) => /* @__PURE__ */ r(
    $,
    {
      title: g.title,
      iconSrc: g.iconSrc,
      onClick: () => R(g)
    },
    g.title
  );
  return /* @__PURE__ */ d(
    "div",
    {
      className: "col-span-1 md:col-span-2 flex flex-col item-center mt-2 md:mt-0 md:px-4 md:items-start overflow-y-auto scrollbar-hide max-h-[90vh]",
      onClick: () => v(!1),
      children: [
        /* @__PURE__ */ r("div", { className: "flex justify-start", children: /* @__PURE__ */ r(
          "img",
          {
            "data-testid": "navlogo",
            className: "m-0 h-full w-full md:w-[90%] transition-all duration-200 sidebarLogo cursor-pointer",
            alt: "",
            style: { maxWidth: "unset" },
            onClick: () => n("/")
          }
        ) }),
        L.map(
          (g) => g.group ? /* @__PURE__ */ r(Ce, { title: g.group, defaultOpen: !0, children: g.links.map(V) }, g.group) : /* @__PURE__ */ r(ce, { children: g.links.map(V) }, g.links[0].title)
        ),
        /* @__PURE__ */ d("div", { className: "relative more-container", children: [
          /* @__PURE__ */ r(
            $,
            {
              Icon: qe,
              title: "More",
              onClick: () => v(!p)
            }
          ),
          p && /* @__PURE__ */ r("div", { className: "absolute left-0 mt-2 w-48 rounded-md shadow-lg ring-1 bg-white dark:bg-[#000000] ring-black ring-opacity-5 z-[950]", children: /* @__PURE__ */ r("div", { className: "py-1", role: "menu", "aria-orientation": "vertical", children: u ? /* @__PURE__ */ d(me, { children: [
            /* @__PURE__ */ r(
              $,
              {
                Icon: Fe,
                title: "Settings",
                isShow: !0,
                onClick: x
              }
            ),
            /* @__PURE__ */ r($, { Icon: Ve, title: "Sign Out", isShow: !0, onClick: h })
          ] }) : /* @__PURE__ */ r(
            $,
            {
              Icon: We,
              title: "Sign In",
              isShow: !0,
              onClick: () => t == null ? void 0 : t("login", e)
            }
          ) }) })
        ] }),
        /* @__PURE__ */ r(Be, {})
      ]
    }
  );
}, He = re(Je);
function Ke({
  title: e,
  classNames: t,
  children: o
}) {
  return /* @__PURE__ */ d(
    "aside",
    {
      className: `hidden lg:col-span-2 lg:flex flex-col px-2 mt-2 space-y-3 ${t ?? ""}`,
      children: [
        e && /* @__PURE__ */ r("h3", { className: "text-xl font-bold dark:text-gray-50", children: e }),
        o
      ]
    }
  );
}
function Kt({
  appType: e = "default",
  children: t,
  widgets: o,
  modal: n,
  onShowModal: a
}) {
  return /* @__PURE__ */ d("div", { className: "grid grid-cols-9 min-h-screen bg-gray-50 dark:bg-[#0e1517]", children: [
    /* @__PURE__ */ r(He, { appType: e, onShowModal: a }),
    /* @__PURE__ */ r("main", { className: "col-span-8 lg:col-span-5 border-x border-gray-100 dark:border-gray-800", children: t }),
    o ? /* @__PURE__ */ r(Ke, { children: o }) : null,
    n ? /* @__PURE__ */ r(Ne, { isOpen: n.isOpen, onClose: n.onClose, children: n.content }) : null
  ] });
}
const Yt = async () => {
  const { hfNsfwChecker: e, hfToken: t } = P();
  return ie.connect(e, { hf_token: t });
}, Qt = async (e, t) => {
  var a;
  const o = await e.predict("/chat", [t]), n = (o == null ? void 0 : o.data) ?? [];
  if (n != null && n.length)
    return ((a = n[0]) == null ? void 0 : a.text) ?? "No Response";
};
var Ye = /* @__PURE__ */ ((e) => (e.Post = "Post", e.List = "List", e.Community = "Community", e.UpdateCommunity = "Update-Community", e.CommunityDiscussion = "CommunityDiscussion", e.UpdateCommunityDiscussion = "Update-Community-Discussion", e.Register = "Register", e))(Ye || {}), Qe = /* @__PURE__ */ ((e) => (e[e.Explore = 0] = "Explore", e[e.Notifications = 1] = "Notifications", e[e.Messages = 2] = "Messages", e[e.Bookmarks = 3] = "Bookmarks", e[e.Lists = 4] = "Lists", e[e.Communities = 5] = "Communities", e[e.Zook = 6] = "Zook", e[e.Meetup = 7] = "Meetup", e[e.YumnaAI = 8] = "YumnaAI", e))(Qe || {}), Xe = /* @__PURE__ */ ((e) => (e[e.PersonalInfo = 0] = "PersonalInfo", e[e.PersonalizeAccount = 1] = "PersonalizeAccount", e[e.DeleteYourAccount = 2] = "DeleteYourAccount", e[e.Usage = 3] = "Usage", e))(Xe || {}), Te = /* @__PURE__ */ ((e) => (e.Member = "member", e.Invited = "invited", e.Moderator = "moderator", e.Founder = "founder", e.Requested = "requested", e.InviteRequestedForCommunityDiscussion = "INVITE_REQUESTED_FOR_DISCUSSION", e.None = "none", e))(Te || {}), et = /* @__PURE__ */ ((e) => (e.Popular = "popular", e.AlJazeeraEnglish = "al-jazeera-english", e.Argaam = "argaam", e.BleacherReport = "bleacher-report", e.CryptoCoinsNews = "crypto-coins-news", e.HackerNews = "hacker-news", e.SABQ = "sabq", e))(et || {}), tt = /* @__PURE__ */ ((e) => (e.All = "All", e.Verified = "Verified", e.Mentions = "Mentions", e))(tt || {}), rt = /* @__PURE__ */ ((e) => (e.Search = "search", e.SearchUsers = "search-users", e.SearchPosts = "search-posts", e.MyBookmarks = "my-bookmarks", e.Explore = "explore", e.Normal = "normal", e.Lists = "lists", e.Community = "community", e.CommunityDiscussion = "community-discussion", e.Register = "register", e))(rt || {});
export {
  Lt as Accordion,
  Lt as AccordionDefault,
  j as Auth,
  Re as AuthStore,
  be as ButtonLoader,
  Pt as CheckboxCard,
  Ce as Collapsible,
  Ce as CollapsibleDefault,
  Ye as CommonUpsertBoxTypes,
  Gt as ConfirmModal,
  zt as ContentContainer,
  Bt as ContentContainerWithRef,
  vt as CustomPageLoader,
  J as DEFAULT_USER_REGISTRATION_FORM,
  It as DangerAlert,
  Be as DarkSwitch,
  et as ExploreTabs,
  K as FALLBACK_IMAGE_URL,
  Y as FALLBACK_NEWS_IMAGE_URL,
  Q as FALLBACK_POST_IMAGE_URL,
  Mt as FallbackImage,
  Dt as FileUploadInput,
  rt as FilterKeys,
  qt as InfoCardContainer,
  Jt as LoadingSpinner,
  Zt as LoginModal,
  _t as MessagesImagePreview,
  Ne as Modal,
  W as ModalBody,
  xt as ModalLoader,
  Z as ModalPortal,
  At as MultiSelect,
  Ot as MyDatePicker,
  Rt as MyInput,
  Ct as NoRecordsTitle,
  tt as NotificationTabs,
  ke as OptimizedImage,
  jt as OptimizedNewsImage,
  Et as OptimizedPostImage,
  Kt as PageContainer,
  kt as PageTitle,
  Nt as PageTitleNoPadding,
  Se as PaginatedResult,
  Wt as PagingParams,
  Ft as ProfileImagePreview,
  $t as RadioCard,
  Te as RelationshipType,
  De as RootStore,
  we as SIDEBAR_LINKS,
  Ut as Select,
  Xe as SettingsTabs,
  He as Sidebar,
  $ as SidebarRow,
  Qe as SidebarTabs,
  wt as SkeletonLoader,
  Me as StoreContext,
  yt as SuspenseLoader,
  St as TagOrLabel,
  Ht as ThemeProvider,
  Ke as Widgets,
  Qt as checkNsfwInImage,
  X as commonAgent,
  bt as configureAlSaqr,
  P as getConfig,
  A as getConfigSafe,
  ye as getOAuthOptions,
  M as getSupabase,
  H as inTestMode,
  Yt as initializeClient,
  Oe as rootStore,
  Vt as useCheckSession,
  oe as useStore,
  Ee as useTheme
};
//# sourceMappingURL=alsaqr-web-core.js.map
