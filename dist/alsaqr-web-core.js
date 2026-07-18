var ne = Object.defineProperty;
var ae = (e, t, o) => t in e ? ne(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var m = (e, t, o) => ae(e, typeof t != "symbol" ? t + "" : t, o);
import { Client as se } from "@gradio/client";
import { createClient as ie } from "@supabase/supabase-js";
import * as b from "react";
import D, { useState as y, useEffect as F, createContext as T, useContext as X, useLayoutEffect as ee, Fragment as le } from "react";
import { makeAutoObservable as ce, runInAction as de } from "mobx";
import ue from "universal-cookie";
import d from "axios";
import { jsx as r, jsxs as l, Fragment as ge } from "react/jsx-runtime";
import { motion as I } from "framer-motion";
import { useField as S } from "formik";
import { createPortal as me } from "react-dom";
import { observer as te } from "mobx-react-lite";
import { useLocation as _, useNavigate as he } from "react-router-dom";
import fe from "react-datepicker";
let R;
function ft(e) {
  R = e;
}
function $() {
  if (!R)
    throw new Error(
      "alsaqr-web-core: call configureAlSaqr({...}) before using its clients."
    );
  return R;
}
function A() {
  return R;
}
const pt = ({ title: e }) => /* @__PURE__ */ r("div", { id: "page-loader-container", children: /* @__PURE__ */ l("div", { className: "wave", children: [
  /* @__PURE__ */ r("h2", { children: e }),
  /* @__PURE__ */ r("h2", { children: e })
] }) }), q = ({ className: e }) => /* @__PURE__ */ l(
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
), bt = D.memo(function() {
  return /* @__PURE__ */ r(q, { className: "inline w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-[#55a8c2]" });
}), pe = D.memo(function() {
  return /* @__PURE__ */ r(q, { className: "inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-[#55a8c2]" });
}), vt = D.memo(function() {
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
    /* @__PURE__ */ r(q, { className: "h-[5rem] w-[5rem] md:h-[8rem] md:w-[8rem] 2xl:h-[9.5rem] 2xl:w-[9.5rem] text-gray-200 animate-spin dark:text-gray-600 fill-[#55a8c2] mt-[2rem]" })
  ] });
}), xt = D.memo(function({
  count: t = 1,
  className: o
}) {
  return /* @__PURE__ */ r("div", { className: "space-y-4 w-full", children: Array.from({ length: t }).map((n, a) => /* @__PURE__ */ l(
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
function wt({ children: e, classNames: t }) {
  return /* @__PURE__ */ r(
    "h2",
    {
      className: `bg-gray-50 sticky top-0 z-[999] p-5 pb-0 text-xl dark:bg-[#0e1517] dark:text-gray-50 font-bold ${t || ""}`,
      children: e
    }
  );
}
function yt({
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
function kt({ children: e }) {
  return /* @__PURE__ */ r("h3", { className: "pt-5 dark:text-gray-50", children: e });
}
function Nt({
  children: e,
  color: t = "primary",
  size: o = "md",
  rounded: n = !1,
  outlined: a = !1,
  className: s = "",
  testId: i,
  ...c
}) {
  const f = "inline-flex items-center font-medium whitespace-nowrap", p = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-1",
    lg: "text-base px-3 py-1.5"
  }, w = {
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
    a ? `border ${w.border} ${w.text} bg-transparent` : `${w.bg} ${w.text} border border-transparent`,
    s
  ].join(" ");
  return /* @__PURE__ */ r("span", { "data-testid": i ?? "tagorlabel", className: C, ...c, children: e });
}
function Ct({
  title: e = "Error",
  message: t,
  onClose: o,
  actions: n,
  className: a = ""
}) {
  const [s, i] = y(!0);
  if (!s) return null;
  const c = () => {
    i(!1), o == null || o();
  };
  return /* @__PURE__ */ r(
    "div",
    {
      role: "alert",
      "aria-live": "assertive",
      className: `relative w-full rounded-lg border border-red-200 bg-red-50 text-red-900 shadow-sm ${a}`,
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
          e && /* @__PURE__ */ r("h3", { className: "text-sm font-semibold", children: e }),
          /* @__PURE__ */ r("p", { className: "mt-1 text-sm", children: t }),
          n && /* @__PURE__ */ r("div", { className: "mt-3 flex flex-wrap gap-2", children: n })
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
const St = ({
  items: e,
  defaultExpanded: t = [0],
  allowMultiple: o = !0,
  className: n = ""
}) => {
  const [a, s] = y(
    new Set(t)
  ), i = (f) => {
    s((p) => {
      const v = o ? new Set(p) : /* @__PURE__ */ new Set();
      return p.has(f) ? v.delete(f) : v.add(f), v;
    });
  }, c = (f) => a.has(f);
  return /* @__PURE__ */ r("div", { className: `w-full divide-y ${n}`, children: e.map((f, p) => /* @__PURE__ */ l("div", { className: "group", children: [
    /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        className: "w-full p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors",
        onClick: (v) => {
          v.stopPropagation(), i(p);
        },
        "aria-expanded": c(p),
        "aria-controls": `accordion-section-${p}`,
        children: [
          /* @__PURE__ */ r("h4", { className: "font-medium text-gray-700 dark:text-gray-50", children: f.title }),
          /* @__PURE__ */ r(
            I.div,
            {
              animate: { rotate: c(p) ? 180 : 0 },
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
          height: c(p) ? "auto" : 0,
          opacity: c(p) ? 1 : 0
        },
        transition: { duration: 0.2 },
        className: "overflow-hidden",
        children: /* @__PURE__ */ r("div", { id: `accordion-section-${p}`, className: "px-4 pb-4", children: f.jsx })
      }
    )
  ] }, p)) });
};
function It({ label: e, placeholder: t, options: o, ...n }) {
  const [a, s] = S(n);
  return /* @__PURE__ */ l("div", { className: "space-y-2 w-full", children: [
    e && /* @__PURE__ */ r("label", { htmlFor: n.name, className: "block mb-1 text-sm font-medium", children: e }),
    /* @__PURE__ */ l(
      "select",
      {
        name: a.name,
        onBlur: a.onBlur,
        onChange: a.onChange,
        value: a.value,
        className: `h-12 w-full text-lg outline-none placeholder:text-xl dark:bg-[#000000] border rounded-md px-3 ${n.className ?? ""} ${s.touched && s.error ? "border-red-500" : "dark:border-gray-700"}`,
        children: [
          t && /* @__PURE__ */ r("option", { value: "", disabled: !0, children: t }),
          o.map((i) => /* @__PURE__ */ r("option", { value: i.value, children: i.label }, i.value))
        ]
      }
    ),
    s.touched && s.error && /* @__PURE__ */ r("div", { className: "text-red-500 text-sm mt-1", children: s.error })
  ] });
}
const Lt = ({
  label: e,
  description: t,
  value: o,
  icon: n,
  testId: a,
  ...s
}) => {
  const [i] = S(s.name);
  return /* @__PURE__ */ l(
    "label",
    {
      className: `relative flex cursor-pointer rounded-xl border p-2 shadow-sm focus:outline-none ${i.value === o ? "border-blue-500 ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 bg-white dark:bg-gray-800"}`,
      children: [
        /* @__PURE__ */ r(
          "input",
          {
            type: "radio",
            ...i,
            value: o,
            checked: i.value === o,
            className: "sr-only",
            "aria-labelledby": `${s.name}-${o}-label`
          }
        ),
        /* @__PURE__ */ l("div", { className: "flex flex-1", children: [
          n && /* @__PURE__ */ r("div", { className: "mr-3 flex-shrink-0", children: n }),
          /* @__PURE__ */ l("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ r(
              "span",
              {
                id: `${s.name}-${o}-label`,
                className: `block text-sm font-medium ${i.value === o ? "text-blue-900 dark:text-blue-100" : "text-gray-900 dark:text-gray-100"}`,
                "data-testid": a ?? "",
                children: e
              }
            ),
            t && /* @__PURE__ */ r(
              "span",
              {
                className: `mt-1 flex items-center text-sm ${i.value === o ? "text-blue-700 dark:text-blue-300" : "text-gray-500 dark:text-gray-400"}`,
                children: t
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ r(
          "div",
          {
            className: `absolute -top-2 -right-2 h-5 w-5 rounded-full border flex items-center justify-center ${i.value === o ? "border-blue-500 bg-blue-500" : "border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700"}`,
            "aria-hidden": "true",
            children: i.value === o && /* @__PURE__ */ r("div", { className: "h-2 w-2 rounded-full bg-white" })
          }
        )
      ]
    }
  );
}, Ut = ({
  label: e,
  description: t,
  icon: o,
  ...n
}) => {
  const [a] = S(n.name);
  return /* @__PURE__ */ l(
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
        /* @__PURE__ */ l("div", { className: "flex flex-1", children: [
          o && /* @__PURE__ */ r("div", { className: "mr-3 flex-shrink-0", children: o }),
          /* @__PURE__ */ l("div", { className: "flex flex-col", children: [
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
function be(e, t) {
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
const ve = b.forwardRef(be);
function $t({
  label: e,
  placeholder: t,
  options: o,
  ...n
}) {
  var P;
  const [a, s, i] = S(n.name), [c, f] = y(""), p = (h) => {
    f(h.target.value);
  }, v = (h) => {
    if (h.key === "Enter" && c.trim()) {
      h.preventDefault();
      const x = { value: c };
      a.value.some((L) => L === x.value) || i.setValue([...a.value, x.value]), f("");
    }
    h.key === "Backspace" && !c && a.value.length > 0 && i.setValue(a.value.slice(0, -1));
  }, w = (h) => {
    i.setValue(a.value.filter((x) => x !== h));
  }, C = o.filter(
    (h) => {
      var x;
      return h.label.toLowerCase().includes(c.toLowerCase()) && !((x = a == null ? void 0 : a.value) != null && x.includes(h.value));
    }
  );
  return /* @__PURE__ */ l("div", { className: "space-y-2 relative", children: [
    e && /* @__PURE__ */ r(
      "label",
      {
        htmlFor: n.name,
        className: "block text-md font-medium text-gray-700 dark:text-gray-100",
        children: e
      }
    ),
    /* @__PURE__ */ l("div", { className: "flex flex-wrap gap-2 p-2 min-h-8 w-full border rounded-md dark:bg-[#000000] dark:border-gray-700", children: [
      (P = a == null ? void 0 : a.value) == null ? void 0 : P.map((h) => {
        const x = o.find((L) => L.value === h) || {
          label: h
        };
        return /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onDoubleClick: () => w(h),
            className: "flex items-center px-2 bg-[#55a8c2] text-gray-50 rounded-full text-md",
            children: [
              x.label,
              /* @__PURE__ */ r(
                ve,
                {
                  onClick: () => w(h),
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
          value: c,
          onChange: p,
          onKeyDown: v,
          placeholder: t || "Type and press enter...",
          className: "flex-1 min-w-[100px] text-xl outline-none placeholder:text-xl dark:bg-[#000000] dark:text-gray-50 text-gray-900"
        }
      )
    ] }),
    c && C.length > 0 && /* @__PURE__ */ r("div", { className: "absolute left-0 bottom-0 mt-1 w-full z-[9999] border bg-[#FFFFFF] rounded-md shadow-lg dark:bg-[#000000] dark-border-gray-50 dark:border-gray-700 dark:text-gray-50", children: C.slice(0, 6).map((h) => /* @__PURE__ */ r(
      "div",
      {
        className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer",
        "data-testid": "multiselectfilteredlabel",
        onClick: () => {
          var x;
          (x = a == null ? void 0 : a.value) != null && x.includes(h.value) || i.setValue([...a.value, h.value]), f("");
        },
        children: h.label
      },
      h.value
    )) }),
    s.touched && s.error && /* @__PURE__ */ r("div", { className: "text-red-500 text-sm", children: s.error })
  ] });
}
function At({ label: e, prefix: t, disabled: o, ...n }) {
  const [a, s] = S(n.name);
  return /* @__PURE__ */ l("div", { className: "w-full", children: [
    e && /* @__PURE__ */ r(
      "label",
      {
        htmlFor: n.id || n.name,
        className: "block mb-2 text-md font-medium dark:text-gray-50",
        children: e
      }
    ),
    /* @__PURE__ */ l("div", { className: "relative", children: [
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
function Pt({ label: e, ...t }) {
  const [, o, n] = S(t);
  return /* @__PURE__ */ l("div", { className: "mb-4", children: [
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
function Rt({ label: e, ...t }) {
  const [o, n, a] = S(t.name);
  return /* @__PURE__ */ l("div", { className: "w-full", children: [
    e && /* @__PURE__ */ r(
      "label",
      {
        htmlFor: t.id || t.name,
        className: "block mb-2 text-md font-medium",
        children: e
      }
    ),
    /* @__PURE__ */ r(
      fe,
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
const V = {
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
}, xe = () => {
  var e;
  return {
    redirectTo: (e = A()) == null ? void 0 : e.baseUrl
  };
}, J = "https://res.cloudinary.com/aa1997/image/upload/v1720130142/Web3-Client-Projects/Gm.png", K = "/explore-news-placeholder.svg", Y = "/post-placeholder.svg", we = {
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
function Dt({ src: e, alt: t, onClick: o }) {
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
function ye({
  src: e,
  alt: t,
  onClick: o,
  classNames: n,
  loadedHeight: a,
  loadedWidth: s
}) {
  const [i, c] = y(e);
  return /* @__PURE__ */ r(
    "img",
    {
      className: n || "h-10 w-10 rounded-full object-cover",
      src: i ?? "",
      alt: t,
      height: a || 50,
      width: s || 50,
      onClick: o,
      onError: () => {
        i != J && c(J);
      },
      loading: "lazy"
    }
  );
}
function Mt({
  src: e,
  alt: t,
  onClick: o,
  classNames: n
}) {
  const [a, s] = y(e);
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
        a != K && s(K);
      },
      loading: "lazy"
    }
  );
}
function Ot({
  src: e,
  alt: t,
  onClick: o,
  classNames: n
}) {
  const [a, s] = y(e);
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
const jt = ({
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
function Et({
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
function Bt({
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
function zt({ user: e, index: t }) {
  return /* @__PURE__ */ r(
    ye,
    {
      src: e.avatar,
      alt: e.username,
      classNames: `w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 relative ${t === 0 ? "z-0" : t === 1 ? "z-10" : "z-20"} ${t > 0 ? "ml-[-1rem]" : ""}`
    },
    e.id
  );
}
function Ft({
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
const G = ({
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
    children: /* @__PURE__ */ l(
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
), W = ({ children: e }) => {
  const [t, o] = y(!1);
  return F(() => (o(!0), () => o(!1)), []), t ? me(e, document.body) : null;
}, ke = ({
  isOpen: e,
  onClose: t,
  children: o,
  classNames: n,
  bodyClassNames: a
}) => e ? /* @__PURE__ */ r(W, { children: /* @__PURE__ */ r(
  G,
  {
    onClose: t,
    classNames: n,
    bodyClassNames: a,
    children: o
  }
) }) : null, _t = ({
  isOpen: e,
  title: t,
  confirmMessage: o,
  children: n,
  onClose: a,
  confirmFunc: s,
  declineButtonText: i,
  confirmButtonText: c,
  confirmButtonClassNames: f
}) => {
  const [p, v] = y(!1);
  return e ? /* @__PURE__ */ r(W, { children: /* @__PURE__ */ r(G, { headerChildren: /* @__PURE__ */ r("h2", { children: t }), onClose: a, children: /* @__PURE__ */ l("div", { className: "flex flex-col w-full h-full", children: [
    n ?? null,
    /* @__PURE__ */ r("p", { children: o }),
    /* @__PURE__ */ l("div", { className: "flex px-2 justify-between", children: [
      /* @__PURE__ */ r(
        "button",
        {
          onClick: a,
          className: "rounded-full bg-gray-100 px-5 py-2 font-bold text-gray-900 disabled:opacity-40 cursor-pointer",
          type: "button",
          children: i
        }
      ),
      /* @__PURE__ */ r(
        "button",
        {
          onClick: async (w) => {
            w.stopPropagation(), v(!0);
            try {
              await s();
            } finally {
              v(!1);
            }
          },
          disabled: p,
          className: `rounded-full bg-[#55a8c2] px-5 py-2 font-bold text-white ${f ?? ""} disabled:opacity-40 cursor-pointer`,
          type: "button",
          children: p ? /* @__PURE__ */ r(pe, {}) : c
        }
      )
    ] })
  ] }) }) }) : null;
}, Ne = ({
  title: e,
  defaultOpen: t = !1,
  children: o,
  className: n = ""
}) => {
  const [a, s] = y(t);
  return /* @__PURE__ */ l("div", { className: `w-full ${n}`, children: [
    /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        onClick: (i) => {
          i.stopPropagation(), s((c) => !c);
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
}, B = {
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
class O {
  constructor(t) {
    m(this, "cookie");
    this.cookie = t ?? new ue();
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
    return this.isLoggedIn() && ((t = this.getUser()) == null ? void 0 : t.email) === B.email;
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
class Ce {
  constructor(t, o) {
    m(this, "data");
    m(this, "pagination");
    this.data = t, this.pagination = o;
  }
}
class qt {
  constructor(t, o) {
    m(this, "currentPage", 1);
    m(this, "itemsPerPage", 20);
    t && (this.currentPage = t), o && (this.itemsPerPage = o);
  }
}
let j;
function M() {
  if (!j) {
    const { supabaseUrl: e, supabaseAnonKey: t } = $();
    j = ie(e, t);
  }
  return j;
}
const z = {
  sessionSignin: (e) => d.post("/api/auth/signin", { values: e }, { headers: {
    "Content-Type": "application/json"
  } }).then(g),
  sessionCheck: (e, t) => d.post("/api/Session/check ", { values: { email: e, web3_address: t } }, { headers: {
    "Content-Type": "application/json"
  } }).then(g),
  // Web3 wallet auth mirrors the oauth flow: signin upserts the wallet user,
  // check returns the session user keyed by wallet address instead of email.
  web3SessionSignin: (e) => d.post("/api/auth/signin", { values: { web3_address: e, provider: "web3" } }, { headers: {
    "Content-Type": "application/json"
  } }).then(g),
  web3SessionCheck: (e) => d.post("/api/Session/check ", { values: { web3_address: e, email: "" } }, { headers: {
    "Content-Type": "application/json"
  } }).then(g),
  getUserProfile: (e) => d.get(`/api/Profile/${e}`).then(g),
  getUsersToAdd: (e) => d.get("/api/Users/usersToAdd", { params: e }).then(g),
  getUserProfilePosts: (e, t) => d.get(`/api/Profile/${e}/posts`, { params: t }).then(g),
  getUserProfileMediaPosts: (e, t) => d.get(`/api/Profile/${e}/media-posts`, { params: t }).then(g),
  getUserProfileCommunities: (e, t) => d.get(`/api/Profile/${e}/communities`, { params: t }).then(g),
  getUserProfileCommunityDiscussions: (e, t) => d.get(`/api/Profile/${e}/communityDiscussions`, { params: t }).then(g),
  getUserProfileGroups: (e, t) => d.get(`/api/Profile/${e}/groups`, { params: t }).then(g),
  getUserProfileEvents: (e, t) => d.get(`/api/Profile/${e}/events`, { params: t }).then(g),
  getUserProfileProducts: (e, t) => d.get(`/api/Profile/${e}/products`, { params: t }).then(g),
  completeRegistration: (e, t) => d.post(`/api/Users/${e}`, { values: t }).then(g),
  followUser: (e) => d.patch("/api/Users/follow", { values: e }).then(g),
  unFollowUser: (e) => d.patch("/api/Users/unfollow", { values: e }).then(g),
  updateUser: (e) => d.put("/api/Users", { values: e }).then(g),
  deleteUser: () => d.delete("/api/Users").then(g)
}, Se = {
  getIpAddress: () => d.get($().locationApiUrl).then(g),
  reverseLocateAddress: (e, t) => d.get(`${$().locationReverseApiUrl ?? ""}?lat=${e}&lon=${t}&format=geojson`).then(g)
}, Ie = {
  getNotifications: (e, t, o) => o ? d.get(`/api/notifications/${e}`, {
    params: t,
    headers: {
      Authorization: `Bearer ${o}`
    }
  }).then(g) : d.get(`/api/notifications/${e}`, {
    params: t
  }).then(g)
}, Le = {
  loadDirectMessages: (e) => d.get("/api/users/messages", { params: e }).then(g),
  sendDirectMessage: (e) => d.post("/api/messages/sendMessage", { values: e }).then(g),
  loadDirectMessageThreads: (e, t) => t ? d.get("/api/users/messageThreads", { params: e, headers: { Authorization: `Bearer ${t}` } }).then(g) : d.get("/api/users/messageThreads", { params: e }).then(g)
}, Ue = {
  getSubscriptionDailyUse: (e) => d.get("/api/Yumna/dailyUse", { params: e }).then(g)
}, $e = {
  getExplore: (e) => d.get("/api/explore", { params: e }).then(g),
  getExploreFromSource: (e, t) => d.get(`/api/explore/source/${e}`, { params: t }).then(g)
}, g = (e) => e.data;
d.interceptors.request.use(async (e) => {
  var n;
  e.baseURL = $().apiBaseUrl;
  const { data: t } = await M().auth.getSession(), o = (n = t.session) == null ? void 0 : n.access_token;
  return o && (e.headers.Authorization = `Bearer ${o}`), e;
});
d.interceptors.response.use(
  async (e) => {
    const t = e.headers.pagination;
    return t && (e.data = new Ce(e.data, JSON.parse(t))), e;
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
const Q = {
  userApiClient: z,
  subscriptionApiClient: Ue,
  notificationApiClient: Ie,
  messageApiClient: Le,
  locationApiClient: Se,
  exploreApiClient: $e
};
class Ae {
  constructor() {
    m(this, "processingUserCheck", !1);
    m(this, "currentSessionUser");
    m(this, "auth");
    m(this, "userIpInfo");
    m(this, "loadingRegistration", !1);
    m(this, "loadingUpsert", !1);
    m(this, "currentStepInUserRegistration", 0);
    m(this, "currentRegistrationForm", V);
    m(this, "initializeFromStorage", async () => {
      var t, o, n;
      if (this.auth || (this.auth = new O()), H())
        this.auth.setUser(B), this.setCurrentSessionUser(B);
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
      if (this.auth || (this.auth = new O()), (t = this.auth) != null && t.getUserIpInfo())
        this.setUserIpInfo(this.auth.getUserIpInfo());
      else {
        const n = await Q.locationApiClient.getIpAddress(), a = {
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
        await Q.userApiClient.completeRegistration(t, n), de(() => {
          this.setCurrentRegistrationForm(V), this.setCurrentStepInUserRegistration(0);
        });
      } finally {
        this.setLoadingRegistration(!1);
      }
    });
    this.auth = new O(), ce(this);
  }
}
class Pe {
  constructor() {
    m(this, "authStore");
    this.authStore = new Ae();
  }
}
const Re = new Pe(), De = T(Re), re = () => X(De), E = `
  flex items-center p-3 border rounded-lg font-medium
  text-gray-600 border-gray-300 hover:bg-gray-100 hover:text-gray-800
  dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white
`, Gt = te(
  ({ onClose: e, routesUserCantAccess: t = [] }) => {
    const { pathname: o } = _(), { authStore: n } = re(), { currentSessionUser: a } = n, s = (c) => M().auth.signInWithOAuth({
      provider: c,
      options: xe()
    });
    return /* @__PURE__ */ r(W, { children: /* @__PURE__ */ r(G, { onClose: () => {
      (!t.some(
        (f) => o.includes(f)
      ) || a) && e();
    }, children: /* @__PURE__ */ l("div", { className: "flex flex-col justify-center", children: [
      /* @__PURE__ */ l(
        "button",
        {
          className: E,
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
      /* @__PURE__ */ l(
        "button",
        {
          className: E,
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
      /* @__PURE__ */ l(
        "button",
        {
          className: E,
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
function Wt(e, t) {
  const { pathname: o } = _();
  async function n() {
    const a = await M().auth.getSession();
    if (a && a.data.session) {
      const s = a.data.session.user.email;
      await z.sessionSignin(s);
      const i = await z.sessionCheck(s);
      i && e(i.result);
    } else
      e(void 0);
  }
  return ee(() => {
    n();
  }, [t == null ? void 0 : t.id, o]), {};
}
function Zt({ size: e, color: t }) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: `${e} animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${t}`,
      role: "status",
      children: /* @__PURE__ */ r("span", { className: "sr-only", children: "Loading..." })
    }
  );
}
const Me = {
  theme: "system",
  setTheme: () => null
}, oe = T(Me);
function Vt({
  children: e,
  defaultTheme: t = "system",
  storageKey: o = "alsaqr-ui-theme",
  ...n
}) {
  const [a, s] = y(() => typeof window > "u" ? t : localStorage.getItem(o) || t);
  F(() => {
    const c = window.document.documentElement;
    if (c.classList.remove("light", "dark"), a === "system") {
      const f = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      c.classList.add(f);
      return;
    }
    c.classList.add(a);
  }, [a]);
  const i = {
    theme: a,
    setTheme: (c) => {
      typeof window < "u" && localStorage.setItem(o, c), s(c);
    }
  };
  return /* @__PURE__ */ r(oe.Provider, { ...n, value: i, children: e });
}
const Oe = () => {
  const e = X(oe);
  if (e === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}, je = () => {
  const { theme: e, setTheme: t } = Oe();
  return /* @__PURE__ */ l(
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
function U({
  title: e,
  iconSrc: t,
  Icon: o,
  IconImage: n,
  active: a,
  isShow: s,
  onClick: i
}) {
  return /* @__PURE__ */ l(
    "button",
    {
      type: "button",
      "data-testid": `${e.toLowerCase()}row`,
      onClick: i,
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
function Ee(e, t) {
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
const Be = b.forwardRef(Ee);
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
    d: "M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
    d: "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
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
    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
  }));
}
const We = b.forwardRef(Ge), Ze = ({
  appType: e = "default",
  onShowModal: t,
  routesUserCantAccess: o = []
}) => {
  const n = he(), a = _(), { authStore: s } = re(), { auth: i, currentSessionUser: c, resetAuthState: f } = s, [p, v] = y(!1), [w, C] = y(!1);
  F(() => (C(!0), () => C(!1)), []), ee(() => {
    const u = w && !(i != null && i.isLoggedIn()), k = o.some(
      (N) => a.pathname.includes(N)
    );
    u && k && (t == null || t("login", e));
  }, [c == null ? void 0 : c.id, w, a.pathname]);
  const P = (u) => {
    var k;
    if (u.modalKey) return t == null ? void 0 : t(u.modalKey, e);
    if (u.requiresAuth && !c)
      return t == null ? void 0 : t("login", e);
    if (u.externalUrlKey) {
      const N = (k = A()) == null ? void 0 : k[u.externalUrlKey];
      N && (window.location.href = N);
      return;
    }
    u.href && n(u.href);
  }, h = async () => {
    f(), await M().auth.signOut();
  }, x = () => {
    var u;
    e === "default" ? n("/settings") : window.location.href = `${((u = A()) == null ? void 0 : u.baseUrl) ?? ""}settings`;
  }, L = we[e].reduce((u, k) => {
    const N = u[u.length - 1];
    return k.group && (N == null ? void 0 : N.group) === k.group ? N.links.push(k) : u.push({ group: k.group, links: [k] }), u;
  }, []), Z = (u) => /* @__PURE__ */ r(
    U,
    {
      title: u.title,
      iconSrc: u.iconSrc,
      onClick: () => P(u)
    },
    u.title
  );
  return /* @__PURE__ */ l(
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
          (u) => u.group ? /* @__PURE__ */ r(Ne, { title: u.group, defaultOpen: !0, children: u.links.map(Z) }, u.group) : /* @__PURE__ */ r(le, { children: u.links.map(Z) }, u.links[0].title)
        ),
        /* @__PURE__ */ l("div", { className: "relative more-container", children: [
          /* @__PURE__ */ r(
            U,
            {
              Icon: Fe,
              title: "More",
              onClick: () => v(!p)
            }
          ),
          p && /* @__PURE__ */ r("div", { className: "absolute left-0 mt-2 w-48 rounded-md shadow-lg ring-1 bg-white dark:bg-[#000000] ring-black ring-opacity-5 z-[950]", children: /* @__PURE__ */ r("div", { className: "py-1", role: "menu", "aria-orientation": "vertical", children: c ? /* @__PURE__ */ l(ge, { children: [
            /* @__PURE__ */ r(
              U,
              {
                Icon: Be,
                title: "Settings",
                isShow: !0,
                onClick: x
              }
            ),
            /* @__PURE__ */ r(U, { Icon: We, title: "Sign Out", isShow: !0, onClick: h })
          ] }) : /* @__PURE__ */ r(
            U,
            {
              Icon: qe,
              title: "Sign In",
              isShow: !0,
              onClick: () => t == null ? void 0 : t("login", e)
            }
          ) }) })
        ] }),
        /* @__PURE__ */ r(je, {})
      ]
    }
  );
}, Ve = te(Ze);
function He({
  title: e,
  classNames: t,
  children: o
}) {
  return /* @__PURE__ */ l(
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
function Ht({
  appType: e = "default",
  children: t,
  widgets: o,
  modal: n,
  onShowModal: a
}) {
  return /* @__PURE__ */ l("div", { className: "grid grid-cols-9 min-h-screen bg-gray-50 dark:bg-[#0e1517]", children: [
    /* @__PURE__ */ r(Ve, { appType: e, onShowModal: a }),
    /* @__PURE__ */ r("main", { className: "col-span-8 lg:col-span-5 border-x border-gray-100 dark:border-gray-800", children: t }),
    o ? /* @__PURE__ */ r(He, { children: o }) : null,
    n ? /* @__PURE__ */ r(ke, { isOpen: n.isOpen, onClose: n.onClose, children: n.content }) : null
  ] });
}
const Jt = async () => {
  const { hfNsfwChecker: e, hfToken: t } = $();
  return se.connect(e, { hf_token: t });
}, Kt = async (e, t) => {
  var a;
  const o = await e.predict("/chat", [t]), n = (o == null ? void 0 : o.data) ?? [];
  if (n != null && n.length)
    return ((a = n[0]) == null ? void 0 : a.text) ?? "No Response";
};
var Je = /* @__PURE__ */ ((e) => (e.Post = "Post", e.List = "List", e.Community = "Community", e.UpdateCommunity = "Update-Community", e.CommunityDiscussion = "CommunityDiscussion", e.UpdateCommunityDiscussion = "Update-Community-Discussion", e.Register = "Register", e))(Je || {}), Ke = /* @__PURE__ */ ((e) => (e[e.Explore = 0] = "Explore", e[e.Notifications = 1] = "Notifications", e[e.Messages = 2] = "Messages", e[e.Bookmarks = 3] = "Bookmarks", e[e.Lists = 4] = "Lists", e[e.Communities = 5] = "Communities", e[e.Zook = 6] = "Zook", e[e.Meetup = 7] = "Meetup", e[e.YumnaAI = 8] = "YumnaAI", e))(Ke || {}), Ye = /* @__PURE__ */ ((e) => (e[e.PersonalInfo = 0] = "PersonalInfo", e[e.PersonalizeAccount = 1] = "PersonalizeAccount", e[e.DeleteYourAccount = 2] = "DeleteYourAccount", e[e.Usage = 3] = "Usage", e))(Ye || {}), Qe = /* @__PURE__ */ ((e) => (e.Member = "member", e.Invited = "invited", e.Moderator = "moderator", e.Founder = "founder", e.Requested = "requested", e.InviteRequestedForCommunityDiscussion = "INVITE_REQUESTED_FOR_DISCUSSION", e.None = "none", e))(Qe || {}), Te = /* @__PURE__ */ ((e) => (e.Popular = "popular", e.AlJazeeraEnglish = "al-jazeera-english", e.Argaam = "argaam", e.BleacherReport = "bleacher-report", e.CryptoCoinsNews = "crypto-coins-news", e.HackerNews = "hacker-news", e.SABQ = "sabq", e))(Te || {}), Xe = /* @__PURE__ */ ((e) => (e.All = "All", e.Verified = "Verified", e.Mentions = "Mentions", e))(Xe || {}), et = /* @__PURE__ */ ((e) => (e.Search = "search", e.SearchUsers = "search-users", e.SearchPosts = "search-posts", e.MyBookmarks = "my-bookmarks", e.Explore = "explore", e.Normal = "normal", e.Lists = "lists", e.Community = "community", e.CommunityDiscussion = "community-discussion", e.Register = "register", e))(et || {});
export {
  St as Accordion,
  St as AccordionDefault,
  O as Auth,
  Ae as AuthStore,
  pe as ButtonLoader,
  Ut as CheckboxCard,
  Ne as Collapsible,
  Ne as CollapsibleDefault,
  Je as CommonUpsertBoxTypes,
  _t as ConfirmModal,
  Et as ContentContainer,
  jt as ContentContainerWithRef,
  pt as CustomPageLoader,
  V as DEFAULT_USER_REGISTRATION_FORM,
  Ct as DangerAlert,
  je as DarkSwitch,
  Te as ExploreTabs,
  J as FALLBACK_IMAGE_URL,
  K as FALLBACK_NEWS_IMAGE_URL,
  Y as FALLBACK_POST_IMAGE_URL,
  Dt as FallbackImage,
  Pt as FileUploadInput,
  et as FilterKeys,
  Ft as InfoCardContainer,
  Zt as LoadingSpinner,
  Gt as LoginModal,
  zt as MessagesImagePreview,
  ke as Modal,
  G as ModalBody,
  bt as ModalLoader,
  W as ModalPortal,
  $t as MultiSelect,
  Rt as MyDatePicker,
  At as MyInput,
  kt as NoRecordsTitle,
  Xe as NotificationTabs,
  ye as OptimizedImage,
  Mt as OptimizedNewsImage,
  Ot as OptimizedPostImage,
  Ht as PageContainer,
  wt as PageTitle,
  yt as PageTitleNoPadding,
  Ce as PaginatedResult,
  qt as PagingParams,
  Bt as ProfileImagePreview,
  Lt as RadioCard,
  Qe as RelationshipType,
  Pe as RootStore,
  we as SIDEBAR_LINKS,
  It as Select,
  Ye as SettingsTabs,
  Ve as Sidebar,
  U as SidebarRow,
  Ke as SidebarTabs,
  xt as SkeletonLoader,
  De as StoreContext,
  vt as SuspenseLoader,
  Nt as TagOrLabel,
  Vt as ThemeProvider,
  He as Widgets,
  Kt as checkNsfwInImage,
  Q as commonAgent,
  ft as configureAlSaqr,
  $ as getConfig,
  A as getConfigSafe,
  xe as getOAuthOptions,
  M as getSupabase,
  H as inTestMode,
  Jt as initializeClient,
  Re as rootStore,
  Wt as useCheckSession,
  re as useStore,
  Oe as useTheme
};
//# sourceMappingURL=alsaqr-web-core.js.map
