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
        i = a(29439),
        r = a(56890),
        l = a(35855),
        c = a(53994),
        s = a(53382),
        d = a(87462),
        u = a(63366),
        v = a(72791),
        p = a(28182),
        h = a(94419),
        m = a(61046),
        g = a(21217),
        x = a(75878);
      function f(e) {
        return (0, g.Z)("MuiPagination", e);
      }
      (0, x.Z)("MuiPagination", ["root", "ul", "outlined", "text"]);
      var Z = a(93433),
        b = a(58959),
        j = [
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
      var y = a(12065);
      function w(e) {
        return (0, g.Z)("MuiPaginationItem", e);
      }
      var S = (0, x.Z)("MuiPaginationItem", [
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
        C = a(13967),
        z = a(23701),
        N = a(14036),
        k = a(58721),
        P = a(95722),
        B = a(74223),
        L = a(80184),
        R = (0, B.Z)(
          (0, L.jsx)("path", {
            d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",
          }),
          "NavigateBefore"
        ),
        M = (0, B.Z)(
          (0, L.jsx)("path", {
            d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
          }),
          "NavigateNext"
        ),
        O = a(47630),
        I = [
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
            t["size".concat((0, N.Z)(a.size))],
            "text" === a.variant && t["text".concat((0, N.Z)(a.color))],
            "outlined" === a.variant && t["outlined".concat((0, N.Z)(a.color))],
            "rounded" === a.shape && t.rounded,
            "page" === a.type && t.page,
            ("start-ellipsis" === a.type || "end-ellipsis" === a.type) &&
              t.ellipsis,
            ("previous" === a.type || "next" === a.type) && t.previousNext,
            ("first" === a.type || "last" === a.type) && t.firstLast,
          ];
        },
        F = (0, O.ZP)("div", {
          name: "MuiPaginationItem",
          slot: "Root",
          overridesResolver: T,
        })(function (e) {
          var t = e.theme,
            a = e.ownerState;
          return (0,
          d.Z)({}, t.typography.body2, (0, n.Z)({ borderRadius: 16, textAlign: "center", boxSizing: "border-box", minWidth: 32, padding: "0 6px", margin: "0 3px", color: (t.vars || t).palette.text.primary, height: "auto" }, "&.".concat(S.disabled), { opacity: (t.vars || t).palette.action.disabledOpacity }), "small" === a.size && { minWidth: 26, borderRadius: 13, margin: "0 1px", padding: "0 4px" }, "large" === a.size && { minWidth: 40, borderRadius: 20, padding: "0 10px", fontSize: t.typography.pxToRem(15) });
        }),
        A = (0, O.ZP)(z.Z, {
          name: "MuiPaginationItem",
          slot: "Root",
          overridesResolver: T,
        })(
          function (e) {
            var t,
              a,
              o = e.theme,
              i = e.ownerState;
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
              (0, n.Z)(a, "&.".concat(S.focusVisible), {
                backgroundColor: (o.vars || o).palette.action.focus,
              }),
              (0, n.Z)(a, "&.".concat(S.disabled), {
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
                "&.".concat(S.selected),
                ((t = {
                  backgroundColor: (o.vars || o).palette.action.selected,
                  "&:hover": {
                    backgroundColor: o.vars
                      ? "rgba("
                          .concat(o.vars.palette.action.selected, " / calc(")
                          .concat(o.vars.palette.action.selectedOpacity, " + ")
                          .concat(o.vars.palette.action.hoverOpacity, "))")
                      : (0, y.Fq)(
                          o.palette.action.selected,
                          o.palette.action.selectedOpacity +
                            o.palette.action.hoverOpacity
                        ),
                    "@media (hover: none)": {
                      backgroundColor: (o.vars || o).palette.action.selected,
                    },
                  },
                }),
                (0, n.Z)(t, "&.".concat(S.focusVisible), {
                  backgroundColor: o.vars
                    ? "rgba("
                        .concat(o.vars.palette.action.selected, " / calc(")
                        .concat(o.vars.palette.action.selectedOpacity, " + ")
                        .concat(o.vars.palette.action.focusOpacity, "))")
                    : (0, y.Fq)(
                        o.palette.action.selected,
                        o.palette.action.selectedOpacity +
                          o.palette.action.focusOpacity
                      ),
                }),
                (0, n.Z)(t, "&.".concat(S.disabled), {
                  opacity: 1,
                  color: (o.vars || o).palette.action.disabled,
                  backgroundColor: (o.vars || o).palette.action.selected,
                }),
                t)
              ),
              a),
              "small" === i.size && {
                minWidth: 26,
                height: 26,
                borderRadius: 13,
                margin: "0 1px",
                padding: "0 4px",
              },
              "large" === i.size && {
                minWidth: 40,
                height: 40,
                borderRadius: 20,
                padding: "0 10px",
                fontSize: o.typography.pxToRem(15),
              },
              "rounded" === i.shape && {
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
                  "&.".concat(S.selected),
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
                        "&.".concat(S.focusVisible),
                        { backgroundColor: (t.vars || t).palette[a.color].dark }
                      ),
                    (0, n.Z)({}, "&.".concat(S.disabled), {
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
                  "&.".concat(S.selected),
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
                              : (0, y.Fq)(t.palette[a.color].main, 0.5)
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
                            : (0, y.Fq)(
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
                              : (0, y.Fq)(
                                  t.palette[a.color].main,
                                  t.palette.action.activatedOpacity +
                                    t.palette.action.focusOpacity
                                ),
                            "@media (hover: none)": {
                              backgroundColor: "transparent",
                            },
                          },
                        },
                        "&.".concat(S.focusVisible),
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
                            : (0, y.Fq)(
                                t.palette[a.color].main,
                                t.palette.action.activatedOpacity +
                                  t.palette.action.focusOpacity
                              ),
                        }
                      ),
                    (0, n.Z)({}, "&.".concat(S.disabled), {
                      borderColor: (t.vars || t).palette.action
                        .disabledBackground,
                      color: (t.vars || t).palette.action.disabled,
                    })
                  )
                )
            );
          }
        ),
        V = (0, O.ZP)("div", {
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
        q = v.forwardRef(function (e, t) {
          var a = (0, m.Z)({ props: e, name: "MuiPaginationItem" }),
            n = a.className,
            o = a.color,
            i = void 0 === o ? "standard" : o,
            r = a.component,
            l = a.components,
            c =
              void 0 === l
                ? { first: k.Z, last: P.Z, next: M, previous: R }
                : l,
            s = a.disabled,
            v = void 0 !== s && s,
            g = a.page,
            x = a.selected,
            f = void 0 !== x && x,
            Z = a.shape,
            b = void 0 === Z ? "circular" : Z,
            j = a.size,
            y = void 0 === j ? "medium" : j,
            S = a.type,
            z = void 0 === S ? "page" : S,
            B = a.variant,
            O = void 0 === B ? "text" : B,
            T = (0, u.Z)(a, I),
            q = (0, d.Z)({}, a, {
              color: i,
              disabled: v,
              selected: f,
              shape: b,
              size: y,
              type: z,
              variant: O,
            }),
            W = (0, C.Z)(),
            E = (function (e) {
              var t = e.classes,
                a = e.color,
                n = e.disabled,
                o = e.selected,
                i = e.size,
                r = e.shape,
                l = e.type,
                c = e.variant,
                s = {
                  root: [
                    "root",
                    "size".concat((0, N.Z)(i)),
                    c,
                    r,
                    "standard" !== a && "".concat(c).concat((0, N.Z)(a)),
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
              return (0, h.Z)(s, w, t);
            })(q),
            D = (
              "rtl" === W.direction
                ? {
                    previous: c.next || M,
                    next: c.previous || R,
                    last: c.first || k.Z,
                    first: c.last || P.Z,
                  }
                : {
                    previous: c.previous || R,
                    next: c.next || M,
                    first: c.first || k.Z,
                    last: c.last || P.Z,
                  }
            )[z];
          return "start-ellipsis" === z || "end-ellipsis" === z
            ? (0, L.jsx)(F, {
                ref: t,
                ownerState: q,
                className: (0, p.Z)(E.root, n),
                children: "\u2026",
              })
            : (0, L.jsxs)(
                A,
                (0, d.Z)(
                  {
                    ref: t,
                    ownerState: q,
                    component: r,
                    disabled: v,
                    className: (0, p.Z)(E.root, n),
                  },
                  T,
                  {
                    children: [
                      "page" === z && g,
                      D
                        ? (0, L.jsx)(V, {
                            as: D,
                            ownerState: q,
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
      var Q = v.forwardRef(function (e, t) {
          var a = (0, m.Z)({ props: e, name: "MuiPagination" }),
            n = a.boundaryCount,
            o = void 0 === n ? 1 : n,
            r = a.className,
            l = a.color,
            c = void 0 === l ? "standard" : l,
            s = a.count,
            v = void 0 === s ? 1 : s,
            g = a.defaultPage,
            x = void 0 === g ? 1 : g,
            y = a.disabled,
            w = void 0 !== y && y,
            S = a.getItemAriaLabel,
            C = void 0 === S ? G : S,
            z = a.hideNextButton,
            N = void 0 !== z && z,
            k = a.hidePrevButton,
            P = void 0 !== k && k,
            B = a.renderItem,
            R =
              void 0 === B
                ? function (e) {
                    return (0, L.jsx)(q, (0, d.Z)({}, e));
                  }
                : B,
            M = a.shape,
            O = void 0 === M ? "circular" : M,
            I = a.showFirstButton,
            T = void 0 !== I && I,
            F = a.showLastButton,
            A = void 0 !== F && F,
            V = a.siblingCount,
            Q = void 0 === V ? 1 : V,
            X = a.size,
            H = void 0 === X ? "medium" : X,
            U = a.variant,
            $ = void 0 === U ? "text" : U,
            _ = (0, u.Z)(a, W),
            J = (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.boundaryCount,
                a = void 0 === t ? 1 : t,
                n = e.componentName,
                o = void 0 === n ? "usePagination" : n,
                r = e.count,
                l = void 0 === r ? 1 : r,
                c = e.defaultPage,
                s = void 0 === c ? 1 : c,
                v = e.disabled,
                p = void 0 !== v && v,
                h = e.hideNextButton,
                m = void 0 !== h && h,
                g = e.hidePrevButton,
                x = void 0 !== g && g,
                f = e.onChange,
                y = e.page,
                w = e.showFirstButton,
                S = void 0 !== w && w,
                C = e.showLastButton,
                z = void 0 !== C && C,
                N = e.siblingCount,
                k = void 0 === N ? 1 : N,
                P = (0, u.Z)(e, j),
                B = (0, b.Z)({
                  controlled: y,
                  default: s,
                  name: o,
                  state: "page",
                }),
                L = (0, i.Z)(B, 2),
                R = L[0],
                M = L[1],
                O = function (e, t) {
                  y || M(t), f && f(e, t);
                },
                I = function (e, t) {
                  var a = t - e + 1;
                  return Array.from({ length: a }, function (t, a) {
                    return e + a;
                  });
                },
                T = I(1, Math.min(a, l)),
                F = I(Math.max(l - a + 1, a + 1), l),
                A = Math.max(Math.min(R - k, l - a - 2 * k - 1), a + 2),
                V = Math.min(
                  Math.max(R + k, a + 2 * k + 2),
                  F.length > 0 ? F[0] - 2 : l - 1
                ),
                q = [].concat(
                  (0, Z.Z)(S ? ["first"] : []),
                  (0, Z.Z)(x ? [] : ["previous"]),
                  (0, Z.Z)(T),
                  (0, Z.Z)(
                    A > a + 2
                      ? ["start-ellipsis"]
                      : a + 1 < l - a
                      ? [a + 1]
                      : []
                  ),
                  (0, Z.Z)(I(A, V)),
                  (0, Z.Z)(
                    V < l - a - 1 ? ["end-ellipsis"] : l - a > a ? [l - a] : []
                  ),
                  (0, Z.Z)(F),
                  (0, Z.Z)(m ? [] : ["next"]),
                  (0, Z.Z)(z ? ["last"] : [])
                ),
                W = function (e) {
                  switch (e) {
                    case "first":
                      return 1;
                    case "previous":
                      return R - 1;
                    case "next":
                      return R + 1;
                    case "last":
                      return l;
                    default:
                      return null;
                  }
                },
                E = q.map(function (e) {
                  return "number" === typeof e
                    ? {
                        onClick: function (t) {
                          O(t, e);
                        },
                        type: "page",
                        page: e,
                        selected: e === R,
                        disabled: p,
                        "aria-current": e === R ? "true" : void 0,
                      }
                    : {
                        onClick: function (t) {
                          O(t, W(e));
                        },
                        type: e,
                        page: W(e),
                        selected: !1,
                        disabled:
                          p ||
                          (-1 === e.indexOf("ellipsis") &&
                            ("next" === e || "last" === e ? R >= l : R <= 1)),
                      };
                });
              return (0, d.Z)({ items: E }, P);
            })((0, d.Z)({}, a, { componentName: "Pagination" })),
            K = J.items,
            Y = (0, d.Z)({}, a, {
              boundaryCount: o,
              color: c,
              count: v,
              defaultPage: x,
              disabled: w,
              getItemAriaLabel: C,
              hideNextButton: N,
              hidePrevButton: P,
              renderItem: R,
              shape: O,
              showFirstButton: T,
              showLastButton: A,
              siblingCount: Q,
              size: H,
              variant: $,
            }),
            ee = (function (e) {
              var t = e.classes,
                a = { root: ["root", e.variant], ul: ["ul"] };
              return (0, h.Z)(a, f, t);
            })(Y);
          return (0, L.jsx)(
            E,
            (0, d.Z)(
              {
                "aria-label": "pagination navigation",
                className: (0, p.Z)(ee.root, r),
                ownerState: Y,
                ref: t,
              },
              _,
              {
                children: (0, L.jsx)(D, {
                  className: ee.ul,
                  ownerState: Y,
                  children: K.map(function (e, t) {
                    return (0,
                    L.jsx)("li", { children: R((0, d.Z)({}, e, { color: c, "aria-label": C(e.type, e.page, e.selected), shape: O, size: H, variant: $ })) }, t);
                  }),
                }),
              }
            )
          );
        }),
        X = Q,
        H = a(40277),
        U = a(95907),
        $ = a(23821),
        _ = a(65218),
        J = a(59909),
        K = a(15671),
        Y = a(43144),
        ee = a(39877),
        te = a(54318),
        ae = "https://mdemo.invgap.org/languages/",
        ne = new ((function () {
          function e() {
            (0, K.Z)(this, e);
          }
          return (
            (0, Y.Z)(e, [
              {
                key: "getTranslations",
                value: function () {
                  return ee.Z.get(ae, {
                    headers: { Authorization: (0, te.Z)() },
                  });
                },
              },
              {
                key: "getTranslationsByQuery",
                value: function (e) {
                  return ee.Z.get(ae + e, {
                    headers: { Authorization: (0, te.Z)() },
                  });
                },
              },
              {
                key: "putTranslations",
                value: function (e) {
                  return ee.Z.put(ae, e, {
                    headers: { Authorization: (0, te.Z)() },
                  });
                },
              },
              {
                key: "postTranslations",
                value: function (e) {
                  return ee.Z.post(ae, e, {
                    headers: { Authorization: (0, te.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })())(),
        oe = (a(93650), a(2423), a(65487), a(77776), a(87004), a(22020)),
        ie = a(30606);
      var re = function () {
        var e = [
            { label: "English", value: "en" },
            { label: "Fran\xe7ais", value: "fr" },
            { label: "\u0639\u0631\u0628\u064a", value: "ar" },
            { label: "Espa\xf1ola", value: "es" },
            { label: "P\u0443\u0441\u0441\u043a\u0438\u0439", value: "ru" },
            {
              label:
                "\u0443\u043a\u0440\u0430\u0457\u0301\u043d\u0441\u044c\u043a\u0430",
              value: "uk",
            },
            { label: "ti\u1ebfng Vi\u1ec7t", value: "vi" },
            { label: "Other", value: "ot" },
          ],
          t = (0, v.useState)({}),
          a = (0, i.Z)(t, 2),
          d = a[0],
          u = a[1],
          p = (0, v.useState)({ word: "", translate: "", language: "en" }),
          h = (0, i.Z)(p, 2),
          m = h[0],
          g = h[1],
          x = (0, v.useState)(null),
          f = (0, i.Z)(x, 2),
          Z = f[0],
          b = f[1],
          j = (0, v.useState)(!0),
          y = (0, i.Z)(j, 2),
          w = y[0],
          S = y[1],
          C = (0, v.useState)([]),
          z = (0, i.Z)(C, 2),
          N = z[0],
          k = z[1],
          P = (0, v.useState)("en"),
          B = (0, i.Z)(P, 2),
          R = B[0],
          M = B[1],
          O = (0, v.useState)(1),
          I = (0, i.Z)(O, 2),
          T = I[0],
          F = I[1],
          A = (0, v.useState)(1),
          V = (0, i.Z)(A, 2),
          q = V[0],
          W = V[1],
          E = (0, v.useState)(""),
          D = (0, i.Z)(E, 2),
          G = D[0],
          Q = D[1];
        function K(e) {
          ne
            .getTranslations()
            .then(function (e) {
              for (var t = 0, a = e.data, n = 0; n < a.length; n++)
                a[n].language === R && (t += a[n].words);
              console.log(t), F(Math.ceil(t / 20)), S(!1);
            })
            .catch(function (e) {
              _.ZP.error(
                (0, L.jsx)(ie.c, {
                  children: "There is a problem loading data",
                })
              ),
                S(!1);
            }),
            ne
              .getTranslationsByQuery(e)
              .then(function (e) {
                k(e.data.words), S(!1);
              })
              .catch(function (e) {
                _.ZP.error(
                  (0, L.jsx)(ie.c, {
                    children: "There is a problem loading data",
                  })
                ),
                  S(!1);
              });
        }
        function Y(e) {
          var t = e.target,
            a = t.name,
            i = t.value;
          u((0, o.Z)((0, o.Z)({}, d), {}, (0, n.Z)({}, a, i)));
        }
        function ee(e) {
          var t = e.target,
            a = t.name,
            i = t.value;
          g((0, o.Z)((0, o.Z)({}, m), {}, (0, n.Z)({}, a, i)));
        }
        function te(e) {
          if (
            (e.preventDefault(),
            Object.keys(d).every(function (e) {
              return "" !== d[e] && null !== d[e];
            }))
          ) {
            S(!0);
            var t = d;
            ne
              .putTranslations(t)
              .then(function (e) {
                K(
                  "?pnum="
                    .concat(q, "&name=")
                    .concat(R)
                    .concat(G.length > 0 ? "&search=" + G : "")
                );
              })
              .catch(function (e) {
                _.ZP.error(
                  (0, L.jsx)(ie.c, {
                    children: "There is a problem sending data",
                  })
                ),
                  S(!1);
              }),
              b(null),
              u({});
          } else
            _.ZP.error(
              (0, L.jsx)(ie.c, { children: "Please fill all the fields" })
            );
        }
        return (
          (0, oe.$)().t,
          (0, v.useEffect)(function () {
            K("?pnum=1&name=" + R);
          }, []),
          (0, L.jsxs)("div", {
            className: "item-class-page",
            children: [
              (0, L.jsx)("h3", {
                className: "page-title mb-3",
                children: (0, L.jsx)(ie.c, { children: "Language settings" }),
              }),
              w
                ? (0, L.jsx)(J.Z, {})
                : (0, L.jsxs)(L.Fragment, {
                    children: [
                      (0, L.jsxs)("div", {
                        className: "row mb-4 mt-4",
                        children: [
                          (0, L.jsx)("div", {
                            className: "col-md-2 d-flex align-items-center",
                            children: (0, L.jsx)("h4", {
                              className: "page-title",
                              children: (0, L.jsx)(ie.c, {
                                children: "Language",
                              }),
                            }),
                          }),
                          (0, L.jsx)("div", {
                            className: "col-md-2 d-flex",
                            children: (0, L.jsx)("select", {
                              name: "language",
                              className: "w-100",
                              onChange: function (e) {
                                M(e.target.value);
                              },
                              value: R,
                              children: e.map(function (e, t) {
                                return (0,
                                L.jsx)("option", { value: e.value, children: e.label }, e.value);
                              }),
                            }),
                          }),
                          (0, L.jsx)("div", {
                            className:
                              "col-md-2 d-flex align-items-center justify-content-end",
                            children: (0, L.jsx)("h4", {
                              className: "page-title",
                              children: (0, L.jsx)(ie.c, {
                                children: "Search",
                              }),
                            }),
                          }),
                          (0, L.jsx)("div", {
                            className: "col-md-4 d-flex",
                            children: (0, L.jsx)("input", {
                              type: "text",
                              name: "search",
                              value: G,
                              onChange: function (e) {
                                return Q(e.target.value);
                              },
                            }),
                          }),
                          (0, L.jsx)("div", {
                            className: "col-md-2 d-flex align-items-center",
                            children: (0, L.jsx)("button", {
                              className: "save-btn w-100",
                              onClick: function () {
                                S(!0),
                                  K(
                                    "?pnum="
                                      .concat(q, "&name=")
                                      .concat(R)
                                      .concat("&search=" + G)
                                  );
                              },
                              children: (0, L.jsx)(ie.c, {
                                children: "Filter",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, L.jsx)("div", {
                        children: (0, L.jsxs)($.Z, {
                          children: [
                            (0, L.jsx)(r.Z, {
                              children: (0, L.jsxs)(l.Z, {
                                children: [
                                  (0, L.jsx)(c.Z, {
                                    children: (0, L.jsx)(ie.c, {
                                      children: "Clause",
                                    }),
                                  }),
                                  (0, L.jsx)(c.Z, {
                                    children: (0, L.jsx)(ie.c, {
                                      children: "Value",
                                    }),
                                  }),
                                  (0, L.jsx)(c.Z, {
                                    children: (0, L.jsx)(ie.c, {
                                      children: "Edit",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, L.jsx)(s.Z, {
                              children:
                                N &&
                                N.map(function (e) {
                                  return (0, L.jsx)(L.Fragment, {
                                    children:
                                      Z !== e.id
                                        ? (0, L.jsxs)(l.Z, {
                                            children: [
                                              (0, L.jsx)(c.Z, {
                                                children: e.word,
                                              }),
                                              (0, L.jsx)(c.Z, {
                                                children: e.translate,
                                              }),
                                              (0, L.jsx)(c.Z, {
                                                children: (0, L.jsx)("button", {
                                                  className: "edit-btn",
                                                  onClick: function () {
                                                    return (function (e) {
                                                      var t = N.find(function (
                                                        t
                                                      ) {
                                                        return t.id === e.id;
                                                      });
                                                      u(t), b(e.id);
                                                    })(e);
                                                  },
                                                  children: (0, L.jsx)(U.Z, {}),
                                                }),
                                              }),
                                            ],
                                          })
                                        : (0, L.jsxs)(l.Z, {
                                            children: [
                                              (0, L.jsx)(c.Z, {
                                                children: (0, L.jsx)("input", {
                                                  name: "word",
                                                  type: "text",
                                                  disabled: !0,
                                                  onChange: Y,
                                                  value:
                                                    null === d || void 0 === d
                                                      ? void 0
                                                      : d.word,
                                                }),
                                              }),
                                              (0, L.jsx)(c.Z, {
                                                children: (0, L.jsx)("input", {
                                                  name: "translate",
                                                  type: "text",
                                                  onChange: Y,
                                                  value:
                                                    null === d || void 0 === d
                                                      ? void 0
                                                      : d.translate,
                                                  required: !0,
                                                }),
                                              }),
                                              (0, L.jsxs)(c.Z, {
                                                children: [
                                                  (0, L.jsx)("button", {
                                                    className: "save-btn",
                                                    onClick: te,
                                                    children: (0, L.jsx)(ie.c, {
                                                      children: "Save",
                                                    }),
                                                  }),
                                                  (0, L.jsx)("button", {
                                                    className: "close-btn",
                                                    onClick: function () {
                                                      return b(null);
                                                    },
                                                    children: (0, L.jsx)(
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
                      (0, L.jsx)("div", {
                        className: "mt-4",
                        children: (0, L.jsx)(X, {
                          onChange: function (e, t) {
                            S(!0),
                              W(t),
                              K(
                                "?pnum="
                                  .concat(t, "&name=")
                                  .concat(R)
                                  .concat(G.length > 0 ? "&search=" + G : "")
                              );
                          },
                          count: T,
                          color: "primary",
                          page: q,
                        }),
                      }),
                      (0, L.jsx)("div", {
                        className: "add-row mt-4 mb-4",
                        children: (0, L.jsxs)("form", {
                          onSubmit: function (e) {
                            var t;
                            if (
                              (e.preventDefault(),
                              Object.keys(m).every(function (e) {
                                return "" !== m[e] && null !== m[e];
                              }))
                            ) {
                              S(!0);
                              var a = {
                                language: (t = m).language,
                                word: t.word,
                                translate: t.translate,
                              };
                              ne
                                .postTranslations(a)
                                .then(function (e) {
                                  K(
                                    "?pnum="
                                      .concat(q, "&name=")
                                      .concat(R)
                                      .concat(
                                        G.length > 0 ? "&search=" + G : ""
                                      )
                                  );
                                })
                                .catch(function (e) {
                                  _.ZP.error(
                                    (0, L.jsx)(ie.c, {
                                      children:
                                        "There is a problem sending data",
                                    })
                                  ),
                                    S(!1);
                                }),
                                g(
                                  (0, o.Z)(
                                    (0, o.Z)({}, m),
                                    {},
                                    { word: "", translate: "" }
                                  )
                                );
                            } else
                              _.ZP.error(
                                (0, L.jsx)(ie.c, {
                                  children: "Please fill all the fields",
                                })
                              );
                          },
                          children: [
                            (0, L.jsx)("h3", {
                              className: "mb-3 mt-3",
                              children: (0, L.jsx)(ie.c, {
                                children: "Insert translation",
                              }),
                            }),
                            (0, L.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, L.jsxs)("div", {
                                  className: "col-md-3 flex-column d-flex",
                                  children: [
                                    (0, L.jsx)("label", {
                                      children: (0, L.jsx)(ie.c, {
                                        children: "Clause",
                                      }),
                                    }),
                                    (0, L.jsx)("input", {
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
                                (0, L.jsxs)("div", {
                                  className: "col-md-3 flex-column d-flex",
                                  children: [
                                    (0, L.jsx)("label", {
                                      children: (0, L.jsx)(ie.c, {
                                        children: "Value",
                                      }),
                                    }),
                                    (0, L.jsx)("input", {
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
                                (0, L.jsxs)("div", {
                                  className: "col-md-3 flex-column d-flex",
                                  children: [
                                    (0, L.jsx)("label", {
                                      children: (0, L.jsx)(ie.c, {
                                        children: "Language",
                                      }),
                                    }),
                                    (0, L.jsx)("select", {
                                      name: "language",
                                      onChange: ee,
                                      value:
                                        null === m || void 0 === m
                                          ? void 0
                                          : m.language,
                                      children: e.map(function (e, t) {
                                        return (0,
                                        L.jsx)("option", { value: e.value, selected: 0 === t, children: e.label }, e.value);
                                      }),
                                    }),
                                  ],
                                }),
                                (0, L.jsx)("div", {
                                  className:
                                    "col-md-3 mt-4 d-flex justify-content-center align-items-center",
                                  children: (0, L.jsx)("button", {
                                    className: "save-btn",
                                    type: "submit",
                                    children: (0, L.jsx)(ie.c, {
                                      children: "Save",
                                    }),
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
            width: "30",
            height: "30",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, n.jsx)("path", {
              d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
            }),
          }),
        });
      };
    },
    23821: function (e, t, a) {
      var n = a(39281),
        o = a(79836),
        i = a(80184);
      t.Z = function (e) {
        var t = e.children;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(n.Z, {
            children: (0, i.jsx)(o.Z, { children: t }),
          }),
        });
      };
    },
    99259: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return x;
        },
      });
      var n = a(87462),
        o = a(63366),
        i = a(72791),
        r = a(28182),
        l = a(94419),
        c = a(14036),
        s = a(61046),
        d = a(47630),
        u = a(21217);
      function v(e) {
        return (0, u.Z)("MuiSvgIcon", e);
      }
      (0, a(75878).Z)("MuiSvgIcon", [
        "root",
        "colorPrimary",
        "colorSecondary",
        "colorAction",
        "colorError",
        "colorDisabled",
        "fontSizeInherit",
        "fontSizeSmall",
        "fontSizeMedium",
        "fontSizeLarge",
      ]);
      var p = a(80184),
        h = [
          "children",
          "className",
          "color",
          "component",
          "fontSize",
          "htmlColor",
          "inheritViewBox",
          "titleAccess",
          "viewBox",
        ],
        m = (0, d.ZP)("svg", {
          name: "MuiSvgIcon",
          slot: "Root",
          overridesResolver: function (e, t) {
            var a = e.ownerState;
            return [
              t.root,
              "inherit" !== a.color && t["color".concat((0, c.Z)(a.color))],
              t["fontSize".concat((0, c.Z)(a.fontSize))],
            ];
          },
        })(function (e) {
          var t,
            a,
            n,
            o,
            i,
            r,
            l,
            c,
            s,
            d,
            u,
            v,
            p,
            h,
            m,
            g,
            x,
            f = e.theme,
            Z = e.ownerState;
          return {
            userSelect: "none",
            width: "1em",
            height: "1em",
            display: "inline-block",
            fill: "currentColor",
            flexShrink: 0,
            transition:
              null == (t = f.transitions) || null == (a = t.create)
                ? void 0
                : a.call(t, "fill", {
                    duration:
                      null == (n = f.transitions) || null == (o = n.duration)
                        ? void 0
                        : o.shorter,
                  }),
            fontSize: {
              inherit: "inherit",
              small:
                (null == (i = f.typography) || null == (r = i.pxToRem)
                  ? void 0
                  : r.call(i, 20)) || "1.25rem",
              medium:
                (null == (l = f.typography) || null == (c = l.pxToRem)
                  ? void 0
                  : c.call(l, 24)) || "1.5rem",
              large:
                (null == (s = f.typography) || null == (d = s.pxToRem)
                  ? void 0
                  : d.call(s, 35)) || "2.1875",
            }[Z.fontSize],
            color:
              null !=
              (u =
                null == (v = (f.vars || f).palette) || null == (p = v[Z.color])
                  ? void 0
                  : p.main)
                ? u
                : {
                    action:
                      null == (h = (f.vars || f).palette) ||
                      null == (m = h.action)
                        ? void 0
                        : m.active,
                    disabled:
                      null == (g = (f.vars || f).palette) ||
                      null == (x = g.action)
                        ? void 0
                        : x.disabled,
                    inherit: void 0,
                  }[Z.color],
          };
        }),
        g = i.forwardRef(function (e, t) {
          var a = (0, s.Z)({ props: e, name: "MuiSvgIcon" }),
            i = a.children,
            d = a.className,
            u = a.color,
            g = void 0 === u ? "inherit" : u,
            x = a.component,
            f = void 0 === x ? "svg" : x,
            Z = a.fontSize,
            b = void 0 === Z ? "medium" : Z,
            j = a.htmlColor,
            y = a.inheritViewBox,
            w = void 0 !== y && y,
            S = a.titleAccess,
            C = a.viewBox,
            z = void 0 === C ? "0 0 24 24" : C,
            N = (0, o.Z)(a, h),
            k = (0, n.Z)({}, a, {
              color: g,
              component: f,
              fontSize: b,
              instanceFontSize: e.fontSize,
              inheritViewBox: w,
              viewBox: z,
            }),
            P = {};
          w || (P.viewBox = z);
          var B = (function (e) {
            var t = e.color,
              a = e.fontSize,
              n = e.classes,
              o = {
                root: [
                  "root",
                  "inherit" !== t && "color".concat((0, c.Z)(t)),
                  "fontSize".concat((0, c.Z)(a)),
                ],
              };
            return (0, l.Z)(o, v, n);
          })(k);
          return (0,
          p.jsxs)(m, (0, n.Z)({ as: f, className: (0, r.Z)(B.root, d), ownerState: k, focusable: "false", color: j, "aria-hidden": !S || void 0, role: S ? "img" : void 0, ref: t }, P, N, { children: [i, S ? (0, p.jsx)("title", { children: S }) : null] }));
        });
      g.muiName = "SvgIcon";
      var x = g;
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
          return i;
        },
      });
      a(72791);
      var n = a(30418),
        o = a(36482);
      function i() {
        return (0, n.Z)(o.Z);
      }
    },
    74223: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = a(87462),
        o = a(72791),
        i = a(99259),
        r = a(80184);
      function l(e, t) {
        var a = function (a, o) {
          return (0, r.jsx)(
            i.Z,
            (0, n.Z)({ "data-testid": "".concat(t, "Icon"), ref: o }, a, {
              children: e,
            })
          );
        };
        return (a.muiName = i.Z.muiName), o.memo(o.forwardRef(a));
      }
    },
    58959: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = a(29439),
        o = a(72791);
      function i(e) {
        var t = e.controlled,
          a = e.default,
          i = (e.name, e.state, o.useRef(void 0 !== t).current),
          r = o.useState(a),
          l = (0, n.Z)(r, 2),
          c = l[0],
          s = l[1];
        return [
          i ? t : c,
          o.useCallback(function (e) {
            i || s(e);
          }, []),
        ];
      }
    },
    77776: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=5676.f28cccf5.chunk.js.map
