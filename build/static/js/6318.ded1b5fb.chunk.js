"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [6318],
  {
    71986: function (e, n, t) {
      var i = t(15671),
        r = t(43144),
        c = t(39877),
        a = t(54318),
        l = "http://127.0.0.1:8000/related/",
        s = (function () {
          function e() {
            (0, i.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getParameters",
                value: function () {
                  return c.Z.get(l + "params", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getParameterDescriptions",
                value: function (e, n) {
                  return c.Z.get(l + "params/?id=" + e + "&type=" + n, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putParameters",
                value: function (e) {
                  return c.Z.put(l + "params/", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getItemFields",
                value: function () {
                  return c.Z.get(l + "item-fields", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putItemFields",
                value: function (e) {
                  return c.Z.put(l + "item-fields", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getRelatedItemType",
                value: function (e) {
                  var n = {};
                  return (
                    e && (n.id = e),
                    c.Z.get(l + "related-item-type", {
                      headers: { Authorization: (0, a.Z)() },
                      params: n,
                    })
                  );
                },
              },
              {
                key: "putRelatedItemType",
                value: function (e) {
                  return c.Z.put(l + "related-item-type", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getRelatedFacility",
                value: function () {
                  return c.Z.get(l + "related-facility/", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putRelatedFacility",
                value: function (e) {
                  return c.Z.put(l + "related-facility/", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new s();
    },
    16318: function (e, n, t) {
      t.r(n);
      var i = t(1413),
        r = t(93433),
        c = t(37762),
        a = t(74165),
        l = t(15861),
        s = t(29439),
        o = t(56890),
        u = t(35855),
        d = t(53994),
        h = t(53382),
        x = t(72791),
        p = t(23821),
        f = t(91933),
        v = t(59909),
        m = t(95907),
        Z = t(40277),
        j = t(70242),
        y = t(74512),
        b = t(64554),
        g = t(36151),
        w = t(74130),
        k = (t(93650), t(71986)),
        N = (t(2423), t(30606)),
        R = t(80184);
      n.default = function () {
        var e,
          n = (0, x.useState)(0),
          t = (0, s.Z)(n, 2),
          S = t[0],
          z = t[1],
          C = (0, x.useState)([]),
          F = (0, s.Z)(C, 2),
          A = F[0],
          L = F[1],
          q = (0, x.useState)(null),
          B = (0, s.Z)(q, 2),
          M = B[0],
          I = B[1],
          O = (0, x.useState)(""),
          P = (0, s.Z)(O, 2),
          E = P[0],
          T = P[1],
          D = (0, f.useQuery)(
            ["related-facility"],
            (0, l.Z)(
              (0, a.Z)().mark(function e() {
                var n;
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), k.Z.getRelatedFacility();
                      case 2:
                        return (n = e.sent), e.abrupt("return", n.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { refetchOnMount: !0 }
          ),
          V = D.data,
          X = D.isLoading,
          Q = D.refetch,
          _ = (0, x.useMemo)(
            function () {
              var e = {};
              if (V) {
                var n,
                  t = (0, c.Z)(V);
                try {
                  for (t.s(); !(n = t.n()).done; ) {
                    var i,
                      r = n.value,
                      a = null !== (i = e[r.topic]) && void 0 !== i ? i : [];
                    a.push(r), (e[r.topic] = a);
                  }
                } catch (l) {
                  t.e(l);
                } finally {
                  t.f();
                }
              }
              return e;
            },
            [V]
          ),
          G = function (e, n, t) {
            var c = e.target.checked,
              a = (0, r.Z)(A),
              l = A.findIndex(function (e) {
                return e.id === n.id;
              });
            if (-1 === l)
              a.push(
                (0, i.Z)(
                  (0, i.Z)({}, n),
                  {},
                  {
                    required: "required" === t && c,
                    active: "enable" !== t || c,
                  }
                )
              );
            else {
              var s = A[l];
              a[l] = (0, i.Z)(
                (0, i.Z)({}, s),
                {},
                {
                  required: "required" === t ? c : s.required,
                  active: "enable" === t ? c : s.active,
                }
              );
            }
            L(a);
          },
          H = (function () {
            var e = (0, l.Z)(
              (0, a.Z)().mark(function e() {
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          k.Z.putRelatedFacility([
                            (0, i.Z)((0, i.Z)({}, M), {}, { name: E }),
                          ])
                        );
                      case 2:
                        e.sent, Q(), I(null), T("");
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          J = (function () {
            var e = (0, l.Z)(
              (0, a.Z)().mark(function e() {
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), k.Z.putRelatedFacility(A);
                      case 2:
                        e.sent;
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (0, R.jsxs)("div", {
          children: [
            (0, R.jsxs)("h3", {
              className: "page-title mb-3",
              children: [
                (0, R.jsx)(N.c, { children: "Fields related to" }),
                " ",
                (0, R.jsx)(N.c, { children: "facilities" }),
              ],
            }),
            X
              ? (0, R.jsx)(v.Z, {})
              : (0, R.jsxs)(R.Fragment, {
                  children: [
                    (0, R.jsx)("div", {
                      className: "mt-3",
                      children: (0, R.jsx)("div", {
                        className: "card",
                        children: (0, R.jsxs)("div", {
                          className: "card-body pb-3",
                          children: [
                            (0, R.jsx)("div", {
                              className: "row pb-4",
                              style: { overflow: "auto" },
                              children: (0, R.jsx)(j.Z, {
                                activeStep: S,
                                children: Object.keys(_).map(function (e, n) {
                                  return (0, R.jsx)(
                                    y.Z,
                                    {
                                      onClick: function () {
                                        z(n);
                                      },
                                      children: (0, R.jsx)(w.Z, {
                                        color: "inherit",
                                        style: { width: "max-content" },
                                        children: e,
                                      }),
                                    },
                                    e
                                  );
                                }),
                              }),
                            }),
                            (0, R.jsx)("div", {
                              className: "row mt-2",
                              children: (0, R.jsxs)(b.Z, {
                                sx: {
                                  display: "flex",
                                  flexDirection: "row",
                                  pt: 2,
                                },
                                children: [
                                  (0, R.jsx)(g.Z, {
                                    color: "inherit",
                                    disabled: 0 === S,
                                    onClick: function () {
                                      z(function (e) {
                                        return e - 1;
                                      });
                                    },
                                    sx: { mr: 1 },
                                    children: (0, R.jsx)(N.c, {
                                      children: "Back",
                                    }),
                                  }),
                                  (0, R.jsx)(b.Z, { sx: { flex: "1 1 auto" } }),
                                  (0, R.jsx)(g.Z, {
                                    disabled: S === Object.keys(_).length - 1,
                                    onClick: function () {
                                      z(function (e) {
                                        return e + 1;
                                      });
                                    },
                                    sx: { mr: 1 },
                                    children: (0, R.jsx)(N.c, {
                                      children: "Next",
                                    }),
                                  }),
                                  (0, R.jsx)("button", {
                                    className: "btn btn-primary ",
                                    onClick: J,
                                    children: (0, R.jsx)(N.c, {
                                      children: "Save all",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, R.jsx)("div", {
                      className: "mt-3",
                      children: (0, R.jsx)("div", {
                        className: "card",
                        children: (0, R.jsx)("div", {
                          className: "card-body p-3",
                          children: (0, R.jsxs)("div", {
                            className: "row",
                            children: [
                              (0, R.jsxs)("h4", {
                                children: [" ", Object.keys(_)[S]],
                              }),
                              (0, R.jsx)("div", {
                                className: "mt-5 table-container",
                                children: (0, R.jsxs)(p.Z, {
                                  children: [
                                    (0, R.jsx)(o.Z, {
                                      children: (0, R.jsxs)(u.Z, {
                                        children: [
                                          (0, R.jsx)(d.Z, {
                                            className: "col-sm-4",
                                            children: (0, R.jsx)(N.c, {
                                              children: "Field name",
                                            }),
                                          }),
                                          (0, R.jsx)(d.Z, {
                                            className: "col-sm-2",
                                            children: (0, R.jsx)(N.c, {
                                              children: "Enable",
                                            }),
                                          }),
                                          (0, R.jsxs)(d.Z, {
                                            className: "col-sm-4",
                                            children: [
                                              (0, R.jsx)(N.c, {
                                                children:
                                                  "Is this required field for",
                                              }),
                                              " ",
                                              (0, R.jsx)(N.c, {
                                                children: " facility?",
                                              }),
                                            ],
                                          }),
                                          (0, R.jsx)(d.Z, {
                                            className: "col-sm-2",
                                            children: (0, R.jsx)(N.c, {
                                              children: "Edit",
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, R.jsx)(h.Z, {
                                      children:
                                        null === (e = Object.values(_)[S]) ||
                                        void 0 === e
                                          ? void 0
                                          : e.map(function (e) {
                                              var n,
                                                t =
                                                  null !==
                                                    (n = A.find(function (n) {
                                                      return n.id === e.id;
                                                    })) && void 0 !== n
                                                    ? n
                                                    : null === V || void 0 === V
                                                    ? void 0
                                                    : V.find(function (n) {
                                                        return e.id === n.id;
                                                      });
                                              return (0, R.jsxs)(
                                                u.Z,
                                                {
                                                  children: [
                                                    (0, R.jsx)(d.Z, {
                                                      className: "col-sm-4",
                                                      children:
                                                        (null === M ||
                                                        void 0 === M
                                                          ? void 0
                                                          : M.id) === e.id
                                                          ? (0, R.jsx)(
                                                              "input",
                                                              {
                                                                name: "field-name",
                                                                type: "text",
                                                                onChange:
                                                                  function (e) {
                                                                    return T(
                                                                      e.target
                                                                        .value
                                                                    );
                                                                  },
                                                                defaultValue:
                                                                  e.name,
                                                              }
                                                            )
                                                          : e.name,
                                                    }),
                                                    (0, R.jsx)(d.Z, {
                                                      className: "col-sm-2",
                                                      children: (0, R.jsx)(
                                                        "input",
                                                        {
                                                          type: "checkbox",
                                                          disabled:
                                                            null === t ||
                                                            void 0 === t
                                                              ? void 0
                                                              : t.disabled,
                                                          checked:
                                                            null === t ||
                                                            void 0 === t
                                                              ? void 0
                                                              : t.active,
                                                          onChange: function (
                                                            n
                                                          ) {
                                                            return G(
                                                              n,
                                                              e,
                                                              "enable"
                                                            );
                                                          },
                                                        }
                                                      ),
                                                    }),
                                                    (0, R.jsx)(d.Z, {
                                                      className: "col-sm-4",
                                                      children: (0, R.jsx)(
                                                        "input",
                                                        {
                                                          type: "checkbox",
                                                          disabled:
                                                            (null === t ||
                                                            void 0 === t
                                                              ? void 0
                                                              : t.disabled) ||
                                                            !(
                                                              null !== t &&
                                                              void 0 !== t &&
                                                              t.active
                                                            ),
                                                          checked:
                                                            null === t ||
                                                            void 0 === t
                                                              ? void 0
                                                              : t.required,
                                                          onChange: function (
                                                            n
                                                          ) {
                                                            return G(
                                                              n,
                                                              e,
                                                              "required"
                                                            );
                                                          },
                                                        }
                                                      ),
                                                    }),
                                                    (0, R.jsx)(d.Z, {
                                                      className: "col-sm-2",
                                                      children:
                                                        (null === M ||
                                                        void 0 === M
                                                          ? void 0
                                                          : M.id) === e.id
                                                          ? (0, R.jsxs)(
                                                              R.Fragment,
                                                              {
                                                                children: [
                                                                  (0, R.jsx)(
                                                                    "button",
                                                                    {
                                                                      className:
                                                                        "save-btn",
                                                                      onClick:
                                                                        H,
                                                                      children:
                                                                        (0,
                                                                        R.jsx)(
                                                                          N.c,
                                                                          {
                                                                            children:
                                                                              "Save",
                                                                          }
                                                                        ),
                                                                    }
                                                                  ),
                                                                  (0, R.jsx)(
                                                                    "button",
                                                                    {
                                                                      className:
                                                                        "close-btn",
                                                                      onClick:
                                                                        function () {
                                                                          I(
                                                                            null
                                                                          ),
                                                                            T(
                                                                              ""
                                                                            );
                                                                        },
                                                                      children:
                                                                        (0,
                                                                        R.jsx)(
                                                                          Z.Z,
                                                                          {}
                                                                        ),
                                                                    }
                                                                  ),
                                                                ],
                                                              }
                                                            )
                                                          : (0, R.jsx)(
                                                              "button",
                                                              {
                                                                className:
                                                                  "edit-btn",
                                                                onClick:
                                                                  function () {
                                                                    I(e),
                                                                      T(e.name);
                                                                  },
                                                                children: (0,
                                                                R.jsx)(m.Z, {}),
                                                              }
                                                            ),
                                                    }),
                                                  ],
                                                },
                                                e.id
                                              );
                                            }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
          ],
        });
      };
    },
    40277: function (e, n, t) {
      var i = t(80184);
      n.Z = function () {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("svg", {
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
            children: (0, i.jsx)("g", {
              children: (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z",
              }),
            }),
          }),
        });
      };
    },
    95907: function (e, n, t) {
      var i = t(80184);
      n.Z = function () {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            width: "20",
            height: "20",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, i.jsx)("path", {
              d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
            }),
          }),
        });
      };
    },
    23821: function (e, n, t) {
      var i = t(39281),
        r = t(79836),
        c = t(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, c.jsx)(c.Fragment, {
          children: (0, c.jsx)(i.Z, {
            children: (0, c.jsx)(r.Z, { children: n }),
          }),
        });
      };
    },
    74130: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var i = t(4942),
        r = t(63366),
        c = t(87462),
        a = t(72791),
        l = t(28182),
        s = t(94419),
        o = t(47630),
        u = t(61046),
        d = t(23701),
        h = t(15825),
        x = t(19103),
        p = t(75414),
        f = t(73822),
        v = t(21217);
      function m(e) {
        return (0, v.Z)("MuiStepButton", e);
      }
      var Z = (0, t(75878).Z)("MuiStepButton", [
          "root",
          "horizontal",
          "vertical",
          "touchRipple",
        ]),
        j = t(80184),
        y = ["children", "className", "icon", "optional"],
        b = (0, o.ZP)(d.Z, {
          name: "MuiStepButton",
          slot: "Root",
          overridesResolver: function (e, n) {
            var t = e.ownerState;
            return [
              (0, i.Z)({}, "& .".concat(Z.touchRipple), n.touchRipple),
              n.root,
              n[t.orientation],
            ];
          },
        })(function (e) {
          var n = e.ownerState;
          return (0,
          c.Z)({ width: "100%", padding: "24px 16px", margin: "-24px -16px", boxSizing: "content-box" }, "vertical" === n.orientation && { justifyContent: "flex-start", padding: "8px", margin: "-8px" }, (0, i.Z)({}, "& .".concat(Z.touchRipple), { color: "rgba(0, 0, 0, 0.3)" }));
        }),
        g = a.forwardRef(function (e, n) {
          var t = (0, u.Z)({ props: e, name: "MuiStepButton" }),
            i = t.children,
            o = t.className,
            d = t.icon,
            v = t.optional,
            Z = (0, r.Z)(t, y),
            g = a.useContext(f.Z).disabled,
            w = a.useContext(p.Z).orientation,
            k = (0, c.Z)({}, t, { orientation: w }),
            N = (function (e) {
              var n = e.classes,
                t = {
                  root: ["root", e.orientation],
                  touchRipple: ["touchRipple"],
                };
              return (0, s.Z)(t, m, n);
            })(k),
            R = { icon: d, optional: v },
            S = (0, x.Z)(i, ["StepLabel"])
              ? a.cloneElement(i, R)
              : (0, j.jsx)(h.Z, (0, c.Z)({}, R, { children: i }));
          return (0,
          j.jsx)(b, (0, c.Z)({ focusRipple: !0, disabled: g, TouchRippleProps: { className: N.touchRipple }, className: (0, l.Z)(N.root, o), ref: n, ownerState: k }, Z, { children: S }));
        });
    },
    19103: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var i = t(72791);
      var r = function (e, n) {
        return i.isValidElement(e) && -1 !== n.indexOf(e.type.muiName);
      };
    },
    93650: function () {},
  },
]);
//# sourceMappingURL=6318.ded1b5fb.chunk.js.map
