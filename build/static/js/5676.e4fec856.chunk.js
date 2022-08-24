"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [5676],
  {
    45676: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return re;
          },
        });
      var n = a(4942),
        o = a(1413),
        r = a(70885),
        i = a(56890),
        l = a(35855),
        s = a(53994),
        c = a(53382),
        d = a(87462),
        u = a(63366),
        p = a(72791),
        v = a(28182),
        h = a(94419),
        m = a(61046),
        g = a(21217),
        x = a(75878);
      function f(e) {
        return (0, g.Z)("MuiPagination", e);
      }
      (0, x.Z)("MuiPagination", ["root", "ul", "outlined", "text"]);
      var Z = a(42982),
        b = a(58959),
        y = [
          "boundaryCount",
          "componentName",
          "count",
          "defaultPage",
          "disabled",
          "hideNextButton",
          "hidePrevButton",
          "onChange",
          "page",
          "showFirstButton",
          "showLastButton",
          "siblingCount",
        ];
      var j = a(12065);
      function w(e) {
        return (0, g.Z)("MuiPaginationItem", e);
      }
      var C = (0, x.Z)("MuiPaginationItem", [
          "root",
          "page",
          "sizeSmall",
          "sizeLarge",
          "text",
          "textPrimary",
          "textSecondary",
          "outlined",
          "outlinedPrimary",
          "outlinedSecondary",
          "rounded",
          "ellipsis",
          "firstLast",
          "previousNext",
          "focusVisible",
          "disabled",
          "selected",
          "icon",
        ]),
        N = a(13967),
        k = a(23701),
        z = a(14036),
        P = a(58721),
        S = a(95722),
        L = a(74223),
        B = a(80184),
        M = (0, L.Z)(
          (0, B.jsx)("path", {
            d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",
          }),
          "NavigateBefore"
        ),
        R = (0, L.Z)(
          (0, B.jsx)("path", {
            d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
          }),
          "NavigateNext"
        ),
        O = a(47630),
        F = [
          "className",
          "color",
          "component",
          "components",
          "disabled",
          "page",
          "selected",
          "shape",
          "size",
          "type",
          "variant",
        ],
        T = function (e, t) {
          var a = e.ownerState;
          return [
            t.root,
            t[a.variant],
            t["size".concat((0, z.Z)(a.size))],
            "text" === a.variant && t["text".concat((0, z.Z)(a.color))],
            "outlined" === a.variant && t["outlined".concat((0, z.Z)(a.color))],
            "rounded" === a.shape && t.rounded,
            "page" === a.type && t.page,
            ("start-ellipsis" === a.type || "end-ellipsis" === a.type) &&
              t.ellipsis,
            ("previous" === a.type || "next" === a.type) && t.previousNext,
            ("first" === a.type || "last" === a.type) && t.firstLast,
          ];
        },
        I = (0, O.ZP)("div", {
          name: "MuiPaginationItem",
          slot: "Root",
          overridesResolver: T,
        })(function (e) {
          var t = e.theme,
            a = e.ownerState;
          return (0,
          d.Z)({}, t.typography.body2, (0, n.Z)({ borderRadius: 16, textAlign: "center", boxSizing: "border-box", minWidth: 32, padding: "0 6px", margin: "0 3px", color: (t.vars || t).palette.text.primary, height: "auto" }, "&.".concat(C.disabled), { opacity: (t.vars || t).palette.action.disabledOpacity }), "small" === a.size && { minWidth: 26, borderRadius: 13, margin: "0 1px", padding: "0 4px" }, "large" === a.size && { minWidth: 40, borderRadius: 20, padding: "0 10px", fontSize: t.typography.pxToRem(15) });
        }),
        A = (0, O.ZP)(k.Z, {
          name: "MuiPaginationItem",
          slot: "Root",
          overridesResolver: T,
        })(
          function (e) {
            var t,
              a,
              o = e.theme,
              r = e.ownerState;
            return (0, d.Z)(
              {},
              o.typography.body2,
              ((a = {
                borderRadius: 16,
                textAlign: "center",
                boxSizing: "border-box",
                minWidth: 32,
                height: 32,
                padding: "0 6px",
                margin: "0 3px",
                color: (o.vars || o).palette.text.primary,
              }),
              (0, n.Z)(a, "&.".concat(C.focusVisible), {
                backgroundColor: (o.vars || o).palette.action.focus,
              }),
              (0, n.Z)(a, "&.".concat(C.disabled), {
                opacity: (o.vars || o).palette.action.disabledOpacity,
              }),
              (0, n.Z)(
                a,
                "transition",
                o.transitions.create(["color", "background-color"], {
                  duration: o.transitions.duration.short,
                })
              ),
              (0, n.Z)(a, "&:hover", {
                backgroundColor: (o.vars || o).palette.action.hover,
                "@media (hover: none)": { backgroundColor: "transparent" },
              }),
              (0, n.Z)(
                a,
                "&.".concat(C.selected),
                ((t = {
                  backgroundColor: (o.vars || o).palette.action.selected,
                  "&:hover": {
                    backgroundColor: o.vars
                      ? "rgba("
                          .concat(o.vars.palette.action.selected, " / calc(")
                          .concat(o.vars.palette.action.selectedOpacity, " + ")
                          .concat(o.vars.palette.action.hoverOpacity, "))")
                      : (0, j.Fq)(
                          o.palette.action.selected,
                          o.palette.action.selectedOpacity +
                            o.palette.action.hoverOpacity
                        ),
                    "@media (hover: none)": {
                      backgroundColor: (o.vars || o).palette.action.selected,
                    },
                  },
                }),
                (0, n.Z)(t, "&.".concat(C.focusVisible), {
                  backgroundColor: o.vars
                    ? "rgba("
                        .concat(o.vars.palette.action.selected, " / calc(")
                        .concat(o.vars.palette.action.selectedOpacity, " + ")
                        .concat(o.vars.palette.action.focusOpacity, "))")
                    : (0, j.Fq)(
                        o.palette.action.selected,
                        o.palette.action.selectedOpacity +
                          o.palette.action.focusOpacity
                      ),
                }),
                (0, n.Z)(t, "&.".concat(C.disabled), {
                  opacity: 1,
                  color: (o.vars || o).palette.action.disabled,
                  backgroundColor: (o.vars || o).palette.action.selected,
                }),
                t)
              ),
              a),
              "small" === r.size && {
                minWidth: 26,
                height: 26,
                borderRadius: 13,
                margin: "0 1px",
                padding: "0 4px",
              },
              "large" === r.size && {
                minWidth: 40,
                height: 40,
                borderRadius: 20,
                padding: "0 10px",
                fontSize: o.typography.pxToRem(15),
              },
              "rounded" === r.shape && {
                borderRadius: (o.vars || o).shape.borderRadius,
              }
            );
          },
          function (e) {
            var t = e.theme,
              a = e.ownerState;
            return (0, d.Z)(
              {},
              "text" === a.variant &&
                (0, n.Z)(
                  {},
                  "&.".concat(C.selected),
                  (0, d.Z)(
                    {},
                    "standard" !== a.color &&
                      (0, n.Z)(
                        {
                          color: (t.vars || t).palette[a.color].contrastText,
                          backgroundColor: (t.vars || t).palette[a.color].main,
                          "&:hover": {
                            backgroundColor: (t.vars || t).palette[a.color]
                              .dark,
                            "@media (hover: none)": {
                              backgroundColor: (t.vars || t).palette[a.color]
                                .main,
                            },
                          },
                        },
                        "&.".concat(C.focusVisible),
                        { backgroundColor: (t.vars || t).palette[a.color].dark }
                      ),
                    (0, n.Z)({}, "&.".concat(C.disabled), {
                      color: (t.vars || t).palette.action.disabled,
                    })
                  )
                ),
              "outlined" === a.variant &&
                (0, n.Z)(
                  {
                    border: t.vars
                      ? "1px solid rgba(".concat(
                          t.vars.palette.common.onBackgroundChannel,
                          " / 0.23)"
                        )
                      : "1px solid ".concat(
                          "light" === t.palette.mode
                            ? "rgba(0, 0, 0, 0.23)"
                            : "rgba(255, 255, 255, 0.23)"
                        ),
                  },
                  "&.".concat(C.selected),
                  (0, d.Z)(
                    {},
                    "standard" !== a.color &&
                      (0, n.Z)(
                        {
                          color: (t.vars || t).palette[a.color].main,
                          border: "1px solid ".concat(
                            t.vars
                              ? "rgba(".concat(
                                  t.vars.palette[a.color].mainChannel,
                                  " / 0.5)"
                                )
                              : (0, j.Fq)(t.palette[a.color].main, 0.5)
                          ),
                          backgroundColor: t.vars
                            ? "rgba("
                                .concat(
                                  t.vars.palette[a.color].mainChannel,
                                  " / "
                                )
                                .concat(
                                  t.vars.palette.action.activatedOpacity,
                                  ")"
                                )
                            : (0, j.Fq)(
                                t.palette[a.color].main,
                                t.palette.action.activatedOpacity
                              ),
                          "&:hover": {
                            backgroundColor: t.vars
                              ? "rgba("
                                  .concat(
                                    t.vars.palette[a.color].mainChannel,
                                    " / calc("
                                  )
                                  .concat(
                                    t.vars.palette.action.activatedOpacity,
                                    " + "
                                  )
                                  .concat(
                                    t.vars.palette.action.focusOpacity,
                                    "))"
                                  )
                              : (0, j.Fq)(
                                  t.palette[a.color].main,
                                  t.palette.action.activatedOpacity +
                                    t.palette.action.focusOpacity
                                ),
                            "@media (hover: none)": {
                              backgroundColor: "transparent",
                            },
                          },
                        },
                        "&.".concat(C.focusVisible),
                        {
                          backgroundColor: t.vars
                            ? "rgba("
                                .concat(
                                  t.vars.palette[a.color].mainChannel,
                                  " / calc("
                                )
                                .concat(
                                  t.vars.palette.action.activatedOpacity,
                                  " + "
                                )
                                .concat(
                                  t.vars.palette.action.focusOpacity,
                                  "))"
                                )
                            : (0, j.Fq)(
                                t.palette[a.color].main,
                                t.palette.action.activatedOpacity +
                                  t.palette.action.focusOpacity
                              ),
                        }
                      ),
                    (0, n.Z)({}, "&.".concat(C.disabled), {
                      borderColor: (t.vars || t).palette.action
                        .disabledBackground,
                      color: (t.vars || t).palette.action.disabled,
                    })
                  )
                )
            );
          }
        ),
        q = (0, O.ZP)("div", {
          name: "MuiPaginationItem",
          slot: "Icon",
          overridesResolver: function (e, t) {
            return t.icon;
          },
        })(function (e) {
          var t = e.theme,
            a = e.ownerState;
          return (0,
          d.Z)({ fontSize: t.typography.pxToRem(20), margin: "0 -8px" }, "small" === a.size && { fontSize: t.typography.pxToRem(18) }, "large" === a.size && { fontSize: t.typography.pxToRem(22) });
        }),
        V = p.forwardRef(function (e, t) {
          var a = (0, m.Z)({ props: e, name: "MuiPaginationItem" }),
            n = a.className,
            o = a.color,
            r = void 0 === o ? "standard" : o,
            i = a.component,
            l = a.components,
            s =
              void 0 === l
                ? { first: P.Z, last: S.Z, next: R, previous: M }
                : l,
            c = a.disabled,
            p = void 0 !== c && c,
            g = a.page,
            x = a.selected,
            f = void 0 !== x && x,
            Z = a.shape,
            b = void 0 === Z ? "circular" : Z,
            y = a.size,
            j = void 0 === y ? "medium" : y,
            C = a.type,
            k = void 0 === C ? "page" : C,
            L = a.variant,
            O = void 0 === L ? "text" : L,
            T = (0, u.Z)(a, F),
            V = (0, d.Z)({}, a, {
              color: r,
              disabled: p,
              selected: f,
              shape: b,
              size: j,
              type: k,
              variant: O,
            }),
            W = (0, N.Z)(),
            E = (function (e) {
              var t = e.classes,
                a = e.color,
                n = e.disabled,
                o = e.selected,
                r = e.size,
                i = e.shape,
                l = e.type,
                s = e.variant,
                c = {
                  root: [
                    "root",
                    "size".concat((0, z.Z)(r)),
                    s,
                    i,
                    "standard" !== a && "".concat(s).concat((0, z.Z)(a)),
                    n && "disabled",
                    o && "selected",
                    {
                      page: "page",
                      first: "firstLast",
                      last: "firstLast",
                      "start-ellipsis": "ellipsis",
                      "end-ellipsis": "ellipsis",
                      previous: "previousNext",
                      next: "previousNext",
                    }[l],
                  ],
                  icon: ["icon"],
                };
              return (0, h.Z)(c, w, t);
            })(V),
            D = (
              "rtl" === W.direction
                ? {
                    previous: s.next || R,
                    next: s.previous || M,
                    last: s.first || P.Z,
                    first: s.last || S.Z,
                  }
                : {
                    previous: s.previous || M,
                    next: s.next || R,
                    first: s.first || P.Z,
                    last: s.last || S.Z,
                  }
            )[k];
          return "start-ellipsis" === k || "end-ellipsis" === k
            ? (0, B.jsx)(I, {
                ref: t,
                ownerState: V,
                className: (0, v.Z)(E.root, n),
                children: "\u2026",
              })
            : (0, B.jsxs)(
                A,
                (0, d.Z)(
                  {
                    ref: t,
                    ownerState: V,
                    component: i,
                    disabled: p,
                    className: (0, v.Z)(E.root, n),
                  },
                  T,
                  {
                    children: [
                      "page" === k && g,
                      D
                        ? (0, B.jsx)(q, {
                            as: D,
                            ownerState: V,
                            className: E.icon,
                          })
                        : null,
                    ],
                  }
                )
              );
        }),
        W = [
          "boundaryCount",
          "className",
          "color",
          "count",
          "defaultPage",
          "disabled",
          "getItemAriaLabel",
          "hideNextButton",
          "hidePrevButton",
          "onChange",
          "page",
          "renderItem",
          "shape",
          "showFirstButton",
          "showLastButton",
          "siblingCount",
          "size",
          "variant",
        ],
        E = (0, O.ZP)("nav", {
          name: "MuiPagination",
          slot: "Root",
          overridesResolver: function (e, t) {
            var a = e.ownerState;
            return [t.root, t[a.variant]];
          },
        })({}),
        D = (0, O.ZP)("ul", {
          name: "MuiPagination",
          slot: "Ul",
          overridesResolver: function (e, t) {
            return t.ul;
          },
        })({
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          padding: 0,
          margin: 0,
          listStyle: "none",
        });
      function G(e, t, a) {
        return "page" === e
          ? "".concat(a ? "" : "Go to ", "page ").concat(t)
          : "Go to ".concat(e, " page");
      }
      var Q = p.forwardRef(function (e, t) {
          var a = (0, m.Z)({ props: e, name: "MuiPagination" }),
            n = a.boundaryCount,
            o = void 0 === n ? 1 : n,
            i = a.className,
            l = a.color,
            s = void 0 === l ? "standard" : l,
            c = a.count,
            p = void 0 === c ? 1 : c,
            g = a.defaultPage,
            x = void 0 === g ? 1 : g,
            j = a.disabled,
            w = void 0 !== j && j,
            C = a.getItemAriaLabel,
            N = void 0 === C ? G : C,
            k = a.hideNextButton,
            z = void 0 !== k && k,
            P = a.hidePrevButton,
            S = void 0 !== P && P,
            L = a.renderItem,
            M =
              void 0 === L
                ? function (e) {
                    return (0, B.jsx)(V, (0, d.Z)({}, e));
                  }
                : L,
            R = a.shape,
            O = void 0 === R ? "circular" : R,
            F = a.showFirstButton,
            T = void 0 !== F && F,
            I = a.showLastButton,
            A = void 0 !== I && I,
            q = a.siblingCount,
            Q = void 0 === q ? 1 : q,
            X = a.size,
            H = void 0 === X ? "medium" : X,
            U = a.variant,
            _ = void 0 === U ? "text" : U,
            J = (0, u.Z)(a, W),
            K = (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.boundaryCount,
                a = void 0 === t ? 1 : t,
                n = e.componentName,
                o = void 0 === n ? "usePagination" : n,
                i = e.count,
                l = void 0 === i ? 1 : i,
                s = e.defaultPage,
                c = void 0 === s ? 1 : s,
                p = e.disabled,
                v = void 0 !== p && p,
                h = e.hideNextButton,
                m = void 0 !== h && h,
                g = e.hidePrevButton,
                x = void 0 !== g && g,
                f = e.onChange,
                j = e.page,
                w = e.showFirstButton,
                C = void 0 !== w && w,
                N = e.showLastButton,
                k = void 0 !== N && N,
                z = e.siblingCount,
                P = void 0 === z ? 1 : z,
                S = (0, u.Z)(e, y),
                L = (0, b.Z)({
                  controlled: j,
                  default: c,
                  name: o,
                  state: "page",
                }),
                B = (0, r.Z)(L, 2),
                M = B[0],
                R = B[1],
                O = function (e, t) {
                  j || R(t), f && f(e, t);
                },
                F = function (e, t) {
                  var a = t - e + 1;
                  return Array.from({ length: a }, function (t, a) {
                    return e + a;
                  });
                },
                T = F(1, Math.min(a, l)),
                I = F(Math.max(l - a + 1, a + 1), l),
                A = Math.max(Math.min(M - P, l - a - 2 * P - 1), a + 2),
                q = Math.min(
                  Math.max(M + P, a + 2 * P + 2),
                  I.length > 0 ? I[0] - 2 : l - 1
                ),
                V = [].concat(
                  (0, Z.Z)(C ? ["first"] : []),
                  (0, Z.Z)(x ? [] : ["previous"]),
                  (0, Z.Z)(T),
                  (0, Z.Z)(
                    A > a + 2
                      ? ["start-ellipsis"]
                      : a + 1 < l - a
                      ? [a + 1]
                      : []
                  ),
                  (0, Z.Z)(F(A, q)),
                  (0, Z.Z)(
                    q < l - a - 1 ? ["end-ellipsis"] : l - a > a ? [l - a] : []
                  ),
                  (0, Z.Z)(I),
                  (0, Z.Z)(m ? [] : ["next"]),
                  (0, Z.Z)(k ? ["last"] : [])
                ),
                W = function (e) {
                  switch (e) {
                    case "first":
                      return 1;
                    case "previous":
                      return M - 1;
                    case "next":
                      return M + 1;
                    case "last":
                      return l;
                    default:
                      return null;
                  }
                },
                E = V.map(function (e) {
                  return "number" === typeof e
                    ? {
                        onClick: function (t) {
                          O(t, e);
                        },
                        type: "page",
                        page: e,
                        selected: e === M,
                        disabled: v,
                        "aria-current": e === M ? "true" : void 0,
                      }
                    : {
                        onClick: function (t) {
                          O(t, W(e));
                        },
                        type: e,
                        page: W(e),
                        selected: !1,
                        disabled:
                          v ||
                          (-1 === e.indexOf("ellipsis") &&
                            ("next" === e || "last" === e ? M >= l : M <= 1)),
                      };
                });
              return (0, d.Z)({ items: E }, S);
            })((0, d.Z)({}, a, { componentName: "Pagination" })),
            Y = K.items,
            $ = (0, d.Z)({}, a, {
              boundaryCount: o,
              color: s,
              count: p,
              defaultPage: x,
              disabled: w,
              getItemAriaLabel: N,
              hideNextButton: z,
              hidePrevButton: S,
              renderItem: M,
              shape: O,
              showFirstButton: T,
              showLastButton: A,
              siblingCount: Q,
              size: H,
              variant: _,
            }),
            ee = (function (e) {
              var t = e.classes,
                a = { root: ["root", e.variant], ul: ["ul"] };
              return (0, h.Z)(a, f, t);
            })($);
          return (0, B.jsx)(
            E,
            (0, d.Z)(
              {
                "aria-label": "pagination navigation",
                className: (0, v.Z)(ee.root, i),
                ownerState: $,
                ref: t,
              },
              J,
              {
                children: (0, B.jsx)(D, {
                  className: ee.ul,
                  ownerState: $,
                  children: Y.map(function (e, t) {
                    return (0,
                    B.jsx)("li", { children: M((0, d.Z)({}, e, { color: s, "aria-label": N(e.type, e.page, e.selected), shape: O, size: H, variant: _ })) }, t);
                  }),
                }),
              }
            )
          );
        }),
        X = Q,
        H = a(40277),
        U = a(95907),
        _ = a(23821),
        J = a(65218),
        K = a(59909),
        Y = a(15671),
        $ = a(43144),
        ee = a(74569),
        te = a.n(ee),
        ae = a(54318),
        ne = "http://127.0.0.1:8000/languages/",
        oe = new ((function () {
          function e() {
            (0, Y.Z)(this, e);
          }
          return (
            (0, $.Z)(e, [
              {
                key: "getTranslations",
                value: function () {
                  return te().get(ne, {
                    headers: { Authorization: (0, ae.Z)() },
                  });
                },
              },
              {
                key: "getTranslationsByQuery",
                value: function (e) {
                  return te().get(ne + e, {
                    headers: { Authorization: (0, ae.Z)() },
                  });
                },
              },
              {
                key: "putTranslations",
                value: function (e) {
                  return te().put(ne, e, {
                    headers: { Authorization: (0, ae.Z)() },
                  });
                },
              },
              {
                key: "postTranslations",
                value: function (e) {
                  return te().post(ne, e, {
                    headers: { Authorization: (0, ae.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })())();
      a(93650), a(2423), a(65487), a(5227), a(87004);
      var re = function () {
        var e = [
            { label: "English", value: "en" },
            { label: "Fran\xe7ais", value: "fr" },
            { label: "\u0627\u0644\u0639\u0631\u0628\u064a", value: "ar" },
            { label: "\u0641\u0627\u0631\u0633\u06cc", value: "fa" },
            { label: "Espa\xf1ola", value: "es" },
            { label: "P\u0443\u0441\u0441\u043a\u0438\u0439", value: "ru" },
          ],
          t = (0, p.useState)({}),
          a = (0, r.Z)(t, 2),
          d = a[0],
          u = a[1],
          v = (0, p.useState)({ word: "", translate: "", language: "en" }),
          h = (0, r.Z)(v, 2),
          m = h[0],
          g = h[1],
          x = (0, p.useState)(null),
          f = (0, r.Z)(x, 2),
          Z = f[0],
          b = f[1],
          y = (0, p.useState)(!0),
          j = (0, r.Z)(y, 2),
          w = j[0],
          C = j[1],
          N = (0, p.useState)([]),
          k = (0, r.Z)(N, 2),
          z = k[0],
          P = k[1],
          S = (0, p.useState)("en"),
          L = (0, r.Z)(S, 2),
          M = L[0],
          R = L[1],
          O = (0, p.useState)(1),
          F = (0, r.Z)(O, 2),
          T = F[0],
          I = F[1],
          A = (0, p.useState)(1),
          q = (0, r.Z)(A, 2),
          V = q[0],
          W = q[1],
          E = (0, p.useState)(""),
          D = (0, r.Z)(E, 2),
          G = D[0],
          Q = D[1];
        function Y(e) {
          oe
            .getTranslations()
            .then(function (e) {
              var t = e.data.reduce(function (e, t) {
                return e + t.words;
              }, 0);
              I(Math.ceil(t / 20)), C(!1);
            })
            .catch(function (e) {
              J.ZP.error("There is a problem loading data"), C(!1);
            }),
            oe
              .getTranslationsByQuery(e)
              .then(function (e) {
                P(e.data.words), C(!1);
              })
              .catch(function (e) {
                J.ZP.error("There is a problem loading data"), C(!1);
              });
        }
        function $(e) {
          var t = e.target,
            a = t.name,
            r = t.value;
          u((0, o.Z)((0, o.Z)({}, d), {}, (0, n.Z)({}, a, r)));
        }
        function ee(e) {
          var t = e.target,
            a = t.name,
            r = t.value;
          g((0, o.Z)((0, o.Z)({}, m), {}, (0, n.Z)({}, a, r)));
        }
        function te(e) {
          if (
            (e.preventDefault(),
            Object.keys(d).every(function (e) {
              return "" !== d[e] && null !== d[e];
            }))
          ) {
            C(!0);
            var t = d;
            oe
              .putTranslations(t)
              .then(function (e) {
                Y(
                  "?pnum="
                    .concat(V, "&name=")
                    .concat(M)
                    .concat(G.length > 0 ? "&search=" + G : "")
                );
              })
              .catch(function (e) {
                J.ZP.error("There is a problem sending data"), C(!1);
              }),
              b(null),
              u({});
          } else J.ZP.error("Please fill all the fields");
        }
        return (
          (0, p.useEffect)(function () {
            Y("?pnum=1&name=" + M);
          }, []),
          (0, B.jsxs)("div", {
            className: "item-class-page",
            children: [
              (0, B.jsx)("h3", {
                className: "page-title mb-3",
                children: "Manufacturers by Item class",
              }),
              w
                ? (0, B.jsx)(K.Z, {})
                : (0, B.jsxs)(B.Fragment, {
                    children: [
                      (0, B.jsxs)("div", {
                        className: "row mb-4 mt-4",
                        children: [
                          (0, B.jsx)("div", {
                            className: "col-md-2 d-flex align-items-center",
                            children: (0, B.jsx)("h4", {
                              className: "page-title",
                              children: "Language",
                            }),
                          }),
                          (0, B.jsx)("div", {
                            className: "col-md-2 d-flex",
                            children: (0, B.jsx)("select", {
                              name: "language",
                              className: "w-100",
                              onChange: function (e) {
                                R(e.target.value);
                              },
                              value: M,
                              children: e.map(function (e, t) {
                                return (0,
                                B.jsx)("option", { value: e.value, children: e.label }, e.value);
                              }),
                            }),
                          }),
                          (0, B.jsx)("div", {
                            className:
                              "col-md-2 d-flex align-items-center justify-content-end",
                            children: (0, B.jsx)("h4", {
                              className: "page-title",
                              children: "Search",
                            }),
                          }),
                          (0, B.jsx)("div", {
                            className: "col-md-4 d-flex",
                            children: (0, B.jsx)("input", {
                              type: "text",
                              name: "search",
                              value: G,
                              onChange: function (e) {
                                return Q(e.target.value);
                              },
                            }),
                          }),
                          (0, B.jsx)("div", {
                            className: "col-md-2 d-flex align-items-center",
                            children: (0, B.jsx)("button", {
                              className: "save-btn w-100",
                              onClick: function () {
                                C(!0),
                                  Y(
                                    "?pnum="
                                      .concat(V, "&name=")
                                      .concat(M)
                                      .concat("&search=" + G)
                                  );
                              },
                              children: "Filter",
                            }),
                          }),
                        ],
                      }),
                      (0, B.jsx)("div", {
                        children: (0, B.jsxs)(_.Z, {
                          children: [
                            (0, B.jsx)(i.Z, {
                              children: (0, B.jsxs)(l.Z, {
                                children: [
                                  (0, B.jsx)(s.Z, { children: "Level name" }),
                                  (0, B.jsx)(s.Z, { children: "Value" }),
                                  (0, B.jsx)(s.Z, { children: "Edit" }),
                                ],
                              }),
                            }),
                            (0, B.jsx)(c.Z, {
                              children:
                                z &&
                                z.map(function (e) {
                                  return (0, B.jsx)(B.Fragment, {
                                    children:
                                      Z !== e.id
                                        ? (0, B.jsxs)(l.Z, {
                                            children: [
                                              (0, B.jsx)(s.Z, {
                                                children: e.word,
                                              }),
                                              (0, B.jsx)(s.Z, {
                                                children: e.translate,
                                              }),
                                              (0, B.jsx)(s.Z, {
                                                children: (0, B.jsx)("button", {
                                                  className: "edit-btn",
                                                  onClick: function () {
                                                    return (function (e) {
                                                      var t = z.find(function (
                                                        t
                                                      ) {
                                                        return t.id === e.id;
                                                      });
                                                      u(t), b(e.id);
                                                    })(e);
                                                  },
                                                  children: (0, B.jsx)(U.Z, {}),
                                                }),
                                              }),
                                            ],
                                          })
                                        : (0, B.jsxs)(l.Z, {
                                            children: [
                                              (0, B.jsx)(s.Z, {
                                                children: (0, B.jsx)("input", {
                                                  name: "word",
                                                  type: "text",
                                                  onChange: $,
                                                  value:
                                                    null === d || void 0 === d
                                                      ? void 0
                                                      : d.word,
                                                }),
                                              }),
                                              (0, B.jsx)(s.Z, {
                                                children: (0, B.jsx)("input", {
                                                  name: "translate",
                                                  type: "text",
                                                  onChange: $,
                                                  value:
                                                    null === d || void 0 === d
                                                      ? void 0
                                                      : d.translate,
                                                  required: !0,
                                                }),
                                              }),
                                              (0, B.jsxs)(s.Z, {
                                                children: [
                                                  (0, B.jsx)("button", {
                                                    className: "save-btn",
                                                    onClick: te,
                                                    children: "Save",
                                                  }),
                                                  (0, B.jsx)("button", {
                                                    className: "close-btn",
                                                    onClick: function () {
                                                      return b(null);
                                                    },
                                                    children: (0, B.jsx)(
                                                      H.Z,
                                                      {}
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                  });
                                }),
                            }),
                          ],
                        }),
                      }),
                      (0, B.jsx)("div", {
                        className: "mt-4",
                        children: (0, B.jsx)(X, {
                          onChange: function (e, t) {
                            C(!0),
                              W(t),
                              Y(
                                "?pnum="
                                  .concat(V, "&name=")
                                  .concat(M)
                                  .concat(G.length > 0 ? "&search=" + G : "")
                              );
                          },
                          count: T,
                          color: "primary",
                          page: V,
                        }),
                      }),
                      (0, B.jsx)("div", {
                        className: "add-row mt-4 mb-4",
                        children: (0, B.jsxs)("form", {
                          onSubmit: function (e) {
                            var t;
                            if (
                              (e.preventDefault(),
                              Object.keys(m).every(function (e) {
                                return "" !== m[e] && null !== m[e];
                              }))
                            ) {
                              C(!0);
                              var a = {
                                language: (t = m).language,
                                word: t.word,
                                translate: t.translate,
                              };
                              oe
                                .postTranslations(a)
                                .then(function (e) {
                                  Y(
                                    "?pnum="
                                      .concat(V, "&name=")
                                      .concat(M)
                                      .concat(
                                        G.length > 0 ? "&search=" + G : ""
                                      )
                                  );
                                })
                                .catch(function (e) {
                                  J.ZP.error("There is a problem sending data"),
                                    C(!1);
                                }),
                                g(
                                  (0, o.Z)(
                                    (0, o.Z)({}, m),
                                    {},
                                    { word: "", translate: "" }
                                  )
                                );
                            } else J.ZP.error("Please fill all the fields");
                          },
                          children: [
                            (0, B.jsx)("h3", {
                              className: "mb-3 mt-3",
                              children: "Insert translation",
                            }),
                            (0, B.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, B.jsxs)("div", {
                                  className: "col-md-3 flex-column d-flex",
                                  children: [
                                    (0, B.jsx)("label", {
                                      children: "Level name",
                                    }),
                                    (0, B.jsx)("input", {
                                      name: "word",
                                      type: "text",
                                      onChange: ee,
                                      value:
                                        null === m || void 0 === m
                                          ? void 0
                                          : m.word,
                                      required: !0,
                                    }),
                                  ],
                                }),
                                (0, B.jsxs)("div", {
                                  className: "col-md-3 flex-column d-flex",
                                  children: [
                                    (0, B.jsx)("label", { children: "Value" }),
                                    (0, B.jsx)("input", {
                                      name: "translate",
                                      type: "text",
                                      onChange: ee,
                                      value:
                                        null === m || void 0 === m
                                          ? void 0
                                          : m.translate,
                                      required: !0,
                                    }),
                                  ],
                                }),
                                (0, B.jsxs)("div", {
                                  className: "col-md-3 flex-column d-flex",
                                  children: [
                                    (0, B.jsx)("label", {
                                      children: "Language",
                                    }),
                                    (0, B.jsx)("select", {
                                      name: "language",
                                      onChange: ee,
                                      value:
                                        null === m || void 0 === m
                                          ? void 0
                                          : m.language,
                                      children: e.map(function (e, t) {
                                        return (0,
                                        B.jsx)("option", { value: e.value, selected: 0 === t, children: e.label }, e.value);
                                      }),
                                    }),
                                  ],
                                }),
                                (0, B.jsx)("div", {
                                  className:
                                    "col-md-3 d-flex justify-content-center align-items-center",
                                  children: (0, B.jsx)("button", {
                                    className: "save-btn",
                                    type: "submit",
                                    children: "Save",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
            ],
          })
        );
      };
    },
    40277: function (e, t, a) {
      var n = a(80184);
      t.Z = function () {
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("svg", {
            version: "1.1",
            id: "Layer_1",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            x: "0px",
            y: "0px",
            width: "121.31px",
            height: "122.876px",
            viewBox: "0 0 121.31 122.876",
            enableBackground: "new 0 0 121.31 122.876",
            xmlSpace: "preserve",
            children: (0, n.jsx)("g", {
              children: (0, n.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z",
              }),
            }),
          }),
        });
      };
    },
    95907: function (e, t, a) {
      var n = a(80184);
      t.Z = function () {
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, n.jsx)("g", {
              children: (0, n.jsx)("g", {
                children: (0, n.jsx)("path", {
                  d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
                }),
              }),
            }),
          }),
        });
      };
    },
    23821: function (e, t, a) {
      var n = a(39281),
        o = a(79836),
        r = a(80184);
      t.Z = function (e) {
        var t = e.children;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(n.Z, {
            children: (0, r.jsx)(o.Z, { children: t }),
          }),
        });
      };
    },
    58721: function (e, t, a) {
      a(72791);
      var n = a(74223),
        o = a(80184);
      t.Z = (0, n.Z)(
        (0, o.jsx)("path", {
          d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z",
        }),
        "FirstPage"
      );
    },
    95722: function (e, t, a) {
      a(72791);
      var n = a(74223),
        o = a(80184);
      t.Z = (0, n.Z)(
        (0, o.jsx)("path", {
          d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z",
        }),
        "LastPage"
      );
    },
    13967: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      a(72791);
      var n = a(50886),
        o = a(36482);
      function r() {
        return (0, n.Z)(o.Z);
      }
    },
    58959: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = a(70885),
        o = a(72791);
      function r(e) {
        var t = e.controlled,
          a = e.default,
          r = (e.name, e.state, o.useRef(void 0 !== t).current),
          i = o.useState(a),
          l = (0, n.Z)(i, 2),
          s = l[0],
          c = l[1];
        return [
          r ? t : s,
          o.useCallback(function (e) {
            r || c(e);
          }, []),
        ];
      }
    },
    5227: function () {},
    87004: function () {},
    65487: function () {},
    2423: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=5676.e4fec856.chunk.js.map
