"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [6318],
  {
    71986: function (e, n, t) {
      var i = t(15671),
        r = t(43144),
        a = t(74569),
        c = t.n(a),
        l = t(54318),
        s = "http://127.0.0.1:8000/related/",
        d = (function () {
          function e() {
            (0, i.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getParameters",
                value: function () {
                  return c().get(s + "params", {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getParameterDescriptions",
                value: function (e, n) {
                  return c().get(s + "params/?id=" + e + "&type=" + n, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "putParameters",
                value: function (e) {
                  return c().put(s + "params/", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getItemFields",
                value: function () {
                  return c().get(s + "item-fields", {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "putItemFields",
                value: function (e) {
                  return c().put(s + "item-fields", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getRelatedItemType",
                value: function (e) {
                  var n = {};
                  return (
                    e && (n.id = e),
                    c().get(s + "related-item-type", {
                      headers: { Authorization: (0, l.Z)() },
                      params: n,
                    })
                  );
                },
              },
              {
                key: "putRelatedItemType",
                value: function (e) {
                  return c().put(s + "related-item-type", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getRelatedFacility",
                value: function () {
                  return c().get(s + "related-facility/", {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "putRelatedFacility",
                value: function (e) {
                  return c().put(s + "related-facility/", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new d();
    },
    16318: function (e, n, t) {
      t.r(n);
      var i = t(1413),
        r = t(42982),
        a = t(37762),
        c = t(74165),
        l = t(15861),
        s = t(70885),
        d = t(56890),
        u = t(35855),
        o = t(53994),
        h = t(53382),
        x = t(72791),
        v = t(23821),
        m = t(91933),
        f = t(59909),
        p = t(95907),
        Z = t(40277),
        j = t(70242),
        y = t(74512),
        g = t(64554),
        k = t(36151),
        b = t(74130),
        w = (t(93650), t(71986)),
        N = (t(2423), t(80184));
      n.default = function () {
        var e,
          n = (0, x.useState)(0),
          t = (0, s.Z)(n, 2),
          z = t[0],
          F = t[1],
          C = (0, x.useState)([]),
          A = (0, s.Z)(C, 2),
          R = A[0],
          q = A[1],
          L = (0, x.useState)(null),
          S = (0, s.Z)(L, 2),
          I = S[0],
          O = S[1],
          B = (0, x.useState)(""),
          M = (0, s.Z)(B, 2),
          P = M[0],
          T = M[1],
          D = (0, m.useQuery)(
            ["related-facility"],
            (0, l.Z)(
              (0, c.Z)().mark(function e() {
                var n;
                return (0, c.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), w.Z.getRelatedFacility();
                      case 2:
                        return (n = e.sent), e.abrupt("return", n.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { staleTime: 1 / 0, refetchOnMount: !0 }
          ),
          E = D.data,
          X = D.isLoading,
          Q = D.refetch,
          V = (0, x.useMemo)(
            function () {
              var e = {};
              if (E) {
                var n,
                  t = (0, a.Z)(E);
                try {
                  for (t.s(); !(n = t.n()).done; ) {
                    var i,
                      r = n.value,
                      c = null !== (i = e[r.topic]) && void 0 !== i ? i : [];
                    c.push(r), (e[r.topic] = c);
                  }
                } catch (l) {
                  t.e(l);
                } finally {
                  t.f();
                }
              }
              return e;
            },
            [E]
          ),
          _ = function (e, n, t) {
            var a = e.target.checked,
              c = (0, r.Z)(R),
              l = R.findIndex(function (e) {
                return e.id === n.id;
              });
            if (-1 === l)
              c.push(
                (0, i.Z)(
                  (0, i.Z)({}, n),
                  {},
                  {
                    required: "required" === t && a,
                    active: "enable" !== t || a,
                  }
                )
              );
            else {
              var s = R[l];
              c[l] = (0, i.Z)(
                (0, i.Z)({}, s),
                {},
                {
                  required: "required" === t ? a : s.required,
                  active: "enable" === t ? a : s.active,
                }
              );
            }
            q(c);
          },
          G = (function () {
            var e = (0, l.Z)(
              (0, c.Z)().mark(function e() {
                return (0, c.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          w.Z.putRelatedFacility([
                            (0, i.Z)((0, i.Z)({}, I), {}, { name: P }),
                          ])
                        );
                      case 2:
                        e.sent, Q(), O(null), T("");
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
          H = (function () {
            var e = (0, l.Z)(
              (0, c.Z)().mark(function e() {
                return (0, c.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), w.Z.putRelatedFacility(R);
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
        return (0, N.jsxs)("div", {
          children: [
            (0, N.jsx)("h3", {
              className: "page-title mb-3",
              children: "Fields related to facilities",
            }),
            X
              ? (0, N.jsx)(f.Z, {})
              : (0, N.jsxs)(N.Fragment, {
                  children: [
                    (0, N.jsx)("div", {
                      className: "mt-3",
                      children: (0, N.jsx)("div", {
                        className: "card",
                        children: (0, N.jsxs)("div", {
                          className: "card-body pb-3",
                          children: [
                            (0, N.jsx)("div", {
                              className: "row pb-4",
                              style: { overflow: "auto" },
                              children: (0, N.jsx)(j.Z, {
                                activeStep: z,
                                children: Object.keys(V).map(function (e, n) {
                                  return (0, N.jsx)(
                                    y.Z,
                                    {
                                      onClick: function () {
                                        F(n);
                                      },
                                      children: (0, N.jsx)(b.Z, {
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
                            (0, N.jsx)("div", {
                              className: "row mt-2",
                              children: (0, N.jsxs)(g.Z, {
                                sx: {
                                  display: "flex",
                                  flexDirection: "row",
                                  pt: 2,
                                },
                                children: [
                                  (0, N.jsx)(k.Z, {
                                    color: "inherit",
                                    disabled: 0 === z,
                                    onClick: function () {
                                      F(function (e) {
                                        return e - 1;
                                      });
                                    },
                                    sx: { mr: 1 },
                                    children: "Back",
                                  }),
                                  (0, N.jsx)(g.Z, { sx: { flex: "1 1 auto" } }),
                                  (0, N.jsx)(k.Z, {
                                    disabled: z === Object.keys(V).length - 1,
                                    onClick: function () {
                                      F(function (e) {
                                        return e + 1;
                                      });
                                    },
                                    sx: { mr: 1 },
                                    children: "Next",
                                  }),
                                  (0, N.jsx)("button", {
                                    className: "btn btn-primary ",
                                    onClick: H,
                                    children: "Save",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, N.jsx)("div", {
                      className: "mt-3",
                      children: (0, N.jsx)("div", {
                        className: "card",
                        children: (0, N.jsx)("div", {
                          className: "card-body p-3",
                          children: (0, N.jsxs)("div", {
                            className: "row",
                            children: [
                              (0, N.jsxs)("h4", {
                                children: [" ", Object.keys(V)[z]],
                              }),
                              (0, N.jsx)("div", {
                                className: "mt-5 table-container",
                                children: (0, N.jsxs)(v.Z, {
                                  children: [
                                    (0, N.jsx)(d.Z, {
                                      children: (0, N.jsxs)(u.Z, {
                                        children: [
                                          (0, N.jsx)(o.Z, {
                                            className: "col-sm-4",
                                            children: "Field name",
                                          }),
                                          (0, N.jsx)(o.Z, {
                                            className: "col-sm-2",
                                            children: "Enable",
                                          }),
                                          (0, N.jsx)(o.Z, {
                                            className: "col-sm-4",
                                            children:
                                              "Is this required field for item category?",
                                          }),
                                          (0, N.jsx)(o.Z, {
                                            className: "col-sm-2",
                                            children: "Edit",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, N.jsx)(h.Z, {
                                      children:
                                        null === (e = Object.values(V)[z]) ||
                                        void 0 === e
                                          ? void 0
                                          : e.map(function (e) {
                                              var n,
                                                t =
                                                  null !==
                                                    (n = R.find(function (n) {
                                                      return n.id === e.id;
                                                    })) && void 0 !== n
                                                    ? n
                                                    : null === E || void 0 === E
                                                    ? void 0
                                                    : E.find(function (n) {
                                                        return e.id === n.id;
                                                      });
                                              return (0, N.jsxs)(
                                                u.Z,
                                                {
                                                  children: [
                                                    (0, N.jsx)(o.Z, {
                                                      className: "col-sm-4",
                                                      children:
                                                        (null === I ||
                                                        void 0 === I
                                                          ? void 0
                                                          : I.id) === e.id
                                                          ? (0, N.jsx)(
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
                                                    (0, N.jsx)(o.Z, {
                                                      className: "col-sm-2",
                                                      children: (0, N.jsx)(
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
                                                            return _(
                                                              n,
                                                              e,
                                                              "enable"
                                                            );
                                                          },
                                                        }
                                                      ),
                                                    }),
                                                    (0, N.jsx)(o.Z, {
                                                      className: "col-sm-4",
                                                      children: (0, N.jsx)(
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
                                                            return _(
                                                              n,
                                                              e,
                                                              "required"
                                                            );
                                                          },
                                                        }
                                                      ),
                                                    }),
                                                    (0, N.jsx)(o.Z, {
                                                      className: "col-sm-2",
                                                      children:
                                                        (null === I ||
                                                        void 0 === I
                                                          ? void 0
                                                          : I.id) === e.id
                                                          ? (0, N.jsxs)(
                                                              N.Fragment,
                                                              {
                                                                children: [
                                                                  (0, N.jsx)(
                                                                    "button",
                                                                    {
                                                                      className:
                                                                        "save-btn",
                                                                      onClick:
                                                                        G,
                                                                      children:
                                                                        "Save",
                                                                    }
                                                                  ),
                                                                  (0, N.jsx)(
                                                                    "button",
                                                                    {
                                                                      className:
                                                                        "close-btn",
                                                                      onClick:
                                                                        function () {
                                                                          O(
                                                                            null
                                                                          ),
                                                                            T(
                                                                              ""
                                                                            );
                                                                        },
                                                                      children:
                                                                        (0,
                                                                        N.jsx)(
                                                                          Z.Z,
                                                                          {}
                                                                        ),
                                                                    }
                                                                  ),
                                                                ],
                                                              }
                                                            )
                                                          : (0, N.jsx)(
                                                              "button",
                                                              {
                                                                className:
                                                                  "edit-btn",
                                                                onClick:
                                                                  function () {
                                                                    O(e),
                                                                      T(e.name);
                                                                  },
                                                                children: (0,
                                                                N.jsx)(p.Z, {}),
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
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, i.jsx)("g", {
              children: (0, i.jsx)("g", {
                children: (0, i.jsx)("path", {
                  d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
                }),
              }),
            }),
          }),
        });
      };
    },
    23821: function (e, n, t) {
      var i = t(39281),
        r = t(79836),
        a = t(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)(i.Z, {
            children: (0, a.jsx)(r.Z, { children: n }),
          }),
        });
      };
    },
    2423: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=6318.45f69fca.chunk.js.map
