"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [1202],
  {
    71986: function (e, n, t) {
      var r = t(15671),
        i = t(43144),
        l = t(39877),
        a = t(54318),
        s = "http://5.182.47.38:8000/related/",
        c = (function () {
          function e() {
            (0, r.Z)(this, e);
          }
          return (
            (0, i.Z)(e, [
              {
                key: "getParameters",
                value: function () {
                  return l.Z.get(s + "params", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getParameterDescriptions",
                value: function (e, n) {
                  return l.Z.get(s + "params/?id=" + e + "&type=" + n, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putParameters",
                value: function (e) {
                  return l.Z.put(s + "params/", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getItemFields",
                value: function () {
                  return l.Z.get(s + "item-fields", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putItemFields",
                value: function (e) {
                  return l.Z.put(s + "item-fields", e, {
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
                    l.Z.get(s + "related-item-type", {
                      headers: { Authorization: (0, a.Z)() },
                      params: n,
                    })
                  );
                },
              },
              {
                key: "putRelatedItemType",
                value: function (e) {
                  return l.Z.put(s + "related-item-type", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getRelatedFacility",
                value: function () {
                  return l.Z.get(s + "related-facility/", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putRelatedFacility",
                value: function (e) {
                  return l.Z.put(s + "related-facility/", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new c();
    },
    31202: function (e, n, t) {
      t.r(n);
      var r = t(4942),
        i = t(1413),
        l = t(29439),
        a = t(56890),
        s = t(35855),
        c = t(53994),
        d = t(53382),
        u = t(72791),
        o = t(40277),
        h = t(95907),
        x = t(23821),
        m = t(65218),
        p = t(59909),
        v = (t(5227), t(87004), t(2423), t(71986)),
        j = t(79271),
        Z = t(30606),
        f = t(80184);
      n.default = function () {
        var e = (0, u.useState)([]),
          n = (0, l.Z)(e, 2),
          t = n[0],
          b = n[1],
          g = (0, u.useState)(""),
          y = (0, l.Z)(g, 2),
          k = y[0],
          w = y[1],
          P = (0, u.useState)({}),
          z = (0, l.Z)(P, 2),
          N = z[0],
          S = z[1],
          C = (0, u.useState)({ name: "", order: null, enabled: !1 }),
          A = (0, l.Z)(C, 2),
          F = A[0],
          I = A[1],
          L = (0, u.useState)(null),
          D = (0, l.Z)(L, 2),
          R = D[0],
          T = D[1],
          q = (0, u.useState)(!0),
          E = (0, l.Z)(q, 2),
          B = E[0],
          O = E[1],
          X = (0, j.UO)().id;
        function M(e, n) {
          v.Z.getParameterDescriptions(n, e)
            .then(function (e) {
              b(e.data.description), w(e.data.name), O(!1);
            })
            .catch(function (e) {
              m.ZP.error("There is a problem loading data"), O(!1);
            });
        }
        function U(e) {
          var n = e.target,
            t = n.name,
            l = n.value;
          S((0, i.Z)((0, i.Z)({}, N), {}, (0, r.Z)({}, t, l)));
        }
        function _(e) {
          var n = e.target,
            t = n.name,
            l = n.value;
          I((0, i.Z)((0, i.Z)({}, F), {}, (0, r.Z)({}, t, l)));
        }
        function G(e) {
          if (
            (e.preventDefault(),
            Object.keys(N).every(function (e) {
              return "" !== N[e] && null !== N[e];
            }))
          ) {
            O(!0);
            var n = N;
            (n.type = X.split("-")[0]),
              v.Z.putParameters(n)
                .then(function (e) {
                  var n = X.split("-");
                  M(n[0], n[1]);
                })
                .catch(function (e) {
                  m.ZP.error("There is a problem sending data"), O(!1);
                }),
              T(null),
              S({});
          } else m.ZP.error("Please fill all the fields");
        }
        return (
          (0, u.useEffect)(
            function () {
              var e = null === X || void 0 === X ? void 0 : X.split("-");
              M(e[0], e[1]);
            },
            [X]
          ),
          (0, f.jsxs)("div", {
            className: "item-class-page-param",
            children: [
              (0, f.jsxs)("h2", {
                className: "page-title mb-3",
                children: [
                  (0, f.jsx)(Z.c, {
                    children:
                      null === X || void 0 === X ? void 0 : X.split("-")[0],
                  }),
                  " ",
                  (0, f.jsx)(Z.c, { children: "Parameter Descriptions" }),
                ],
              }),
              (0, f.jsx)("h3", { className: "mb-3 param-name", children: k }),
              (0, f.jsxs)("div", {
                className: "add-row mt-4 mb-4",
                children: [
                  (0, f.jsx)("h3", {
                    children: (0, f.jsx)(Z.c, {
                      children: "Insert parameter In this row!",
                    }),
                  }),
                  (0, f.jsx)("form", {
                    onSubmit: function (e) {
                      var n;
                      if (
                        (e.preventDefault(),
                        Object.keys(F).every(function (e) {
                          return "" !== F[e] && null !== F[e];
                        }))
                      ) {
                        O(!0);
                        var t = {
                          name: (n = F).name,
                          enabled: n.enabled,
                          order: n.order,
                        };
                        (t.type = X.split("-")[0]),
                          (t.paramid = parseInt(X.split("-")[1])),
                          v.Z.putParameters(t)
                            .then(function (e) {
                              var n = X.split("-");
                              M(n[0], n[1]);
                            })
                            .catch(function (e) {
                              m.ZP.error("There is a problem sending data"),
                                O(!1);
                            }),
                          I(
                            (0, i.Z)(
                              (0, i.Z)({}, F),
                              {},
                              { name: "", order: null, enabled: !1 }
                            )
                          );
                      } else m.ZP.error("Please fill all the fields");
                    },
                    children: (0, f.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, f.jsxs)("div", {
                          className: "col-md-4 flex-column d-flex",
                          children: [
                            (0, f.jsx)("label", {
                              children: (0, f.jsx)(Z.c, {
                                children: "Parameter description",
                              }),
                            }),
                            (0, f.jsx)("input", {
                              name: "name",
                              type: "text",
                              onChange: _,
                              value:
                                null === F || void 0 === F ? void 0 : F.name,
                              required: !0,
                            }),
                          ],
                        }),
                        (0, f.jsxs)("div", {
                          className: "col-md-4 flex-column d-flex",
                          children: [
                            (0, f.jsx)("label", {
                              children: (0, f.jsx)(Z.c, {
                                children: "Show order",
                              }),
                            }),
                            (0, f.jsx)("input", {
                              name: "order",
                              type: "number",
                              onChange: _,
                              value:
                                null === F || void 0 === F ? void 0 : F.order,
                              required: !0,
                            }),
                          ],
                        }),
                        (0, f.jsxs)("div", {
                          className:
                            "col-md-4 d-flex justify-content-center align-items-center",
                          children: [
                            (0, f.jsx)("label", {
                              children: (0, f.jsx)(Z.c, { children: "Enable" }),
                            }),
                            (0, f.jsx)("input", {
                              name: "enabled",
                              className: "mr-4",
                              type: "checkbox",
                              onChange: function () {
                                return I(
                                  (0, i.Z)(
                                    (0, i.Z)({}, F),
                                    {},
                                    { enabled: !F.enabled }
                                  )
                                );
                              },
                              checked:
                                null === F || void 0 === F ? void 0 : F.enabled,
                            }),
                            (0, f.jsx)("button", {
                              className: "save-btn",
                              type: "submit",
                              children: (0, f.jsx)(Z.c, { children: "Save" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              B
                ? (0, f.jsx)(p.Z, {})
                : (0, f.jsx)(f.Fragment, {
                    children: (0, f.jsx)("div", {
                      children: (0, f.jsxs)(x.Z, {
                        children: [
                          (0, f.jsx)(a.Z, {
                            children: (0, f.jsxs)(s.Z, {
                              children: [
                                (0, f.jsx)(c.Z, {
                                  children: (0, f.jsx)(Z.c, {
                                    children: "Description",
                                  }),
                                }),
                                (0, f.jsx)(c.Z, {
                                  children: (0, f.jsx)(Z.c, {
                                    children: "Show order",
                                  }),
                                }),
                                (0, f.jsx)(c.Z, {
                                  children: (0, f.jsx)(Z.c, {
                                    children: "Enable",
                                  }),
                                }),
                                (0, f.jsx)(c.Z, {
                                  children: (0, f.jsx)(Z.c, {
                                    children: "Edit",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, f.jsx)(d.Z, {
                            children: t.map(function (e, n) {
                              return (0, f.jsx)(f.Fragment, {
                                children:
                                  R !== e.id
                                    ? (0, f.jsxs)(s.Z, {
                                        children: [
                                          (0, f.jsx)(c.Z, { children: e.name }),
                                          (0, f.jsx)(c.Z, {
                                            children: e.order,
                                          }),
                                          (0, f.jsx)(c.Z, {
                                            children: (0, f.jsx)("input", {
                                              type: "checkbox",
                                              checked: e.enabled,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, f.jsx)(c.Z, {
                                            children: (0, f.jsx)("button", {
                                              className: "edit-btn",
                                              onClick: function (n) {
                                                return (function (e) {
                                                  var n = t.find(function (n) {
                                                    return n.id === e.id;
                                                  });
                                                  S(n), T(e.id);
                                                })(e);
                                              },
                                              children: (0, f.jsx)(h.Z, {}),
                                            }),
                                          }),
                                        ],
                                      })
                                    : (0, f.jsxs)(s.Z, {
                                        children: [
                                          (0, f.jsx)(c.Z, {
                                            children: (0, f.jsx)("input", {
                                              name: "name",
                                              type: "text",
                                              onChange: U,
                                              value:
                                                null === N || void 0 === N
                                                  ? void 0
                                                  : N.name,
                                              required: !0,
                                            }),
                                          }),
                                          (0, f.jsx)(c.Z, {
                                            children: (0, f.jsx)("input", {
                                              name: "order",
                                              type: "number",
                                              onChange: U,
                                              value:
                                                null === N || void 0 === N
                                                  ? void 0
                                                  : N.order,
                                              required: !0,
                                            }),
                                          }),
                                          (0, f.jsx)(c.Z, {
                                            children: (0, f.jsx)("input", {
                                              name: "enabled",
                                              type: "checkbox",
                                              onChange: function () {
                                                return S(
                                                  (0, i.Z)(
                                                    (0, i.Z)({}, N),
                                                    {},
                                                    { enabled: !N.enabled }
                                                  )
                                                );
                                              },
                                              checked:
                                                null === N || void 0 === N
                                                  ? void 0
                                                  : N.enabled,
                                            }),
                                          }),
                                          (0, f.jsxs)(c.Z, {
                                            children: [
                                              (0, f.jsx)("button", {
                                                className: "save-btn",
                                                onClick: G,
                                                children: (0, f.jsx)(Z.c, {
                                                  children: "Save",
                                                }),
                                              }),
                                              (0, f.jsx)("button", {
                                                className: "close-btn",
                                                onClick: function () {
                                                  return T(null);
                                                },
                                                children: (0, f.jsx)(o.Z, {}),
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
                  }),
            ],
          })
        );
      };
    },
    40277: function (e, n, t) {
      var r = t(80184);
      n.Z = function () {
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("svg", {
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
            children: (0, r.jsx)("g", {
              children: (0, r.jsx)("path", {
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
      var r = t(80184);
      n.Z = function () {
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            width: "20",
            height: "20",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, r.jsx)("path", {
              d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
            }),
          }),
        });
      };
    },
    23821: function (e, n, t) {
      var r = t(39281),
        i = t(79836),
        l = t(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)(r.Z, {
            children: (0, l.jsx)(i.Z, { children: n }),
          }),
        });
      };
    },
    5227: function () {},
    87004: function () {},
  },
]);
//# sourceMappingURL=1202.1f4a0e7e.chunk.js.map
