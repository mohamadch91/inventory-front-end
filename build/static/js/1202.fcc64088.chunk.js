"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [1202],
  {
    71986: function (e, n, t) {
      var r = t(15671),
        i = t(43144),
        l = t(74569),
        a = t.n(l),
        s = t(54318),
        c = "http://127.0.0.1:8000/related/",
        d = (function () {
          function e() {
            (0, r.Z)(this, e);
          }
          return (
            (0, i.Z)(e, [
              {
                key: "getParameters",
                value: function () {
                  return a().get(c + "params", {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getParameterDescriptions",
                value: function (e, n) {
                  return a().get(c + "params/?id=" + e + "&type=" + n, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "putParameters",
                value: function (e) {
                  return a().put(c + "params/", e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getItemFields",
                value: function () {
                  return a().get(c + "item-fields", {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "putItemFields",
                value: function (e) {
                  return a().put(c + "item-fields", e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getRelatedItemType",
                value: function (e) {
                  var n = {};
                  return (
                    e && (n.id = e),
                    a().get(c + "related-item-type", {
                      headers: { Authorization: (0, s.Z)() },
                      params: n,
                    })
                  );
                },
              },
              {
                key: "putRelatedItemType",
                value: function (e) {
                  return a().put(c + "related-item-type", e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getRelatedFacility",
                value: function () {
                  return a().get(c + "related-facility/", {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "putRelatedFacility",
                value: function (e) {
                  return a().put(c + "related-facility/", e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new d();
    },
    31202: function (e, n, t) {
      t.r(n);
      var r = t(4942),
        i = t(1413),
        l = t(70885),
        a = t(56890),
        s = t(35855),
        c = t(53994),
        d = t(53382),
        u = t(72791),
        o = t(40277),
        h = t(95907),
        m = t(23821),
        x = t(65218),
        p = t(59909),
        v = (t(5227), t(87004), t(2423), t(71986)),
        f = t(79271),
        Z = t(80184);
      n.default = function () {
        var e = (0, u.useState)([]),
          n = (0, l.Z)(e, 2),
          t = n[0],
          j = n[1],
          b = (0, u.useState)({}),
          g = (0, l.Z)(b, 2),
          y = g[0],
          k = g[1],
          w = (0, u.useState)({ name: "", order: null, enabled: !1 }),
          P = (0, l.Z)(w, 2),
          z = P[0],
          N = P[1],
          C = (0, u.useState)(null),
          S = (0, l.Z)(C, 2),
          A = S[0],
          F = S[1],
          I = (0, u.useState)(!0),
          L = (0, l.Z)(I, 2),
          D = L[0],
          R = L[1],
          T = (0, f.UO)().id;
        function q(e, n) {
          v.Z.getParameterDescriptions(n, e)
            .then(function (e) {
              j(e.data), R(!1);
            })
            .catch(function (e) {
              x.ZP.error("There is a problem loading data"), R(!1);
            });
        }
        function E(e) {
          var n = e.target,
            t = n.name,
            l = n.value;
          k((0, i.Z)((0, i.Z)({}, y), {}, (0, r.Z)({}, t, l)));
        }
        function B(e) {
          var n = e.target,
            t = n.name,
            l = n.value;
          N((0, i.Z)((0, i.Z)({}, z), {}, (0, r.Z)({}, t, l)));
        }
        function O(e) {
          if (
            (e.preventDefault(),
            Object.keys(y).every(function (e) {
              return "" !== y[e] && null !== y[e];
            }))
          ) {
            R(!0);
            var n = y;
            (n.type = T.split("-")[0]),
              v.Z.putParameters(n)
                .then(function (e) {
                  var n = T.split("-");
                  q(n[0], n[1]);
                })
                .catch(function (e) {
                  x.ZP.error("There is a problem sending data"), R(!1);
                }),
              F(null),
              k({});
          } else x.ZP.error("Please fill all the fields");
        }
        return (
          (0, u.useEffect)(
            function () {
              var e = null === T || void 0 === T ? void 0 : T.split("-");
              q(e[0], e[1]);
            },
            [T]
          ),
          (0, Z.jsxs)("div", {
            className: "item-class-page",
            children: [
              (0, Z.jsx)("h3", {
                className: "page-title mb-3",
                children: "Parameter Descriptions",
              }),
              (0, Z.jsxs)("div", {
                className: "add-row mt-4 mb-4",
                children: [
                  (0, Z.jsx)("h3", {
                    children: "Insert parameter In this row!",
                  }),
                  (0, Z.jsx)("form", {
                    onSubmit: function (e) {
                      var n;
                      if (
                        (e.preventDefault(),
                        Object.keys(z).every(function (e) {
                          return "" !== z[e] && null !== z[e];
                        }))
                      ) {
                        R(!0);
                        var t = {
                          name: (n = z).name,
                          enabled: n.enabled,
                          order: n.order,
                        };
                        (t.type = T.split("-")[0]),
                          (t.paramid = parseInt(T.split("-")[1])),
                          v.Z.putParameters(t)
                            .then(function (e) {
                              var n = T.split("-");
                              q(n[0], n[1]);
                            })
                            .catch(function (e) {
                              x.ZP.error("There is a problem sending data"),
                                R(!1);
                            }),
                          N(
                            (0, i.Z)(
                              (0, i.Z)({}, z),
                              {},
                              { name: "", order: null, enabled: !1 }
                            )
                          );
                      } else x.ZP.error("Please fill all the fields");
                    },
                    children: (0, Z.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, Z.jsxs)("div", {
                          className: "col-md-4 flex-column d-flex",
                          children: [
                            (0, Z.jsx)("label", {
                              children: "Parameter description",
                            }),
                            (0, Z.jsx)("input", {
                              name: "name",
                              type: "text",
                              onChange: B,
                              value:
                                null === z || void 0 === z ? void 0 : z.name,
                              required: !0,
                            }),
                          ],
                        }),
                        (0, Z.jsxs)("div", {
                          className: "col-md-4 flex-column d-flex",
                          children: [
                            (0, Z.jsx)("label", { children: "Show order" }),
                            (0, Z.jsx)("input", {
                              name: "order",
                              type: "number",
                              onChange: B,
                              value:
                                null === z || void 0 === z ? void 0 : z.order,
                              required: !0,
                            }),
                          ],
                        }),
                        (0, Z.jsxs)("div", {
                          className:
                            "col-md-4 d-flex justify-content-center align-items-center",
                          children: [
                            (0, Z.jsx)("label", { children: "Enable" }),
                            (0, Z.jsx)("input", {
                              name: "enabled",
                              className: "mr-4",
                              type: "checkbox",
                              onChange: function () {
                                return N(
                                  (0, i.Z)(
                                    (0, i.Z)({}, z),
                                    {},
                                    { enabled: !z.enabled }
                                  )
                                );
                              },
                              checked:
                                null === z || void 0 === z ? void 0 : z.enabled,
                            }),
                            (0, Z.jsx)("button", {
                              className: "save-btn",
                              type: "submit",
                              children: "Save",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              D
                ? (0, Z.jsx)(p.Z, {})
                : (0, Z.jsx)(Z.Fragment, {
                    children: (0, Z.jsx)("div", {
                      children: (0, Z.jsxs)(m.Z, {
                        children: [
                          (0, Z.jsx)(a.Z, {
                            children: (0, Z.jsxs)(s.Z, {
                              children: [
                                (0, Z.jsx)(c.Z, { children: "Description" }),
                                (0, Z.jsx)(c.Z, { children: "Show order" }),
                                (0, Z.jsx)(c.Z, { children: "Enable" }),
                                (0, Z.jsx)(c.Z, { children: "Edit" }),
                              ],
                            }),
                          }),
                          (0, Z.jsx)(d.Z, {
                            children: t.map(function (e, n) {
                              return (0, Z.jsx)(Z.Fragment, {
                                children:
                                  A !== e.id
                                    ? (0, Z.jsxs)(s.Z, {
                                        children: [
                                          (0, Z.jsx)(c.Z, { children: e.name }),
                                          (0, Z.jsx)(c.Z, {
                                            children: e.order,
                                          }),
                                          (0, Z.jsx)(c.Z, {
                                            children: (0, Z.jsx)("input", {
                                              type: "checkbox",
                                              checked: e.enabled,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, Z.jsx)(c.Z, {
                                            children: (0, Z.jsx)("button", {
                                              className: "edit-btn",
                                              onClick: function (n) {
                                                return (function (e) {
                                                  var n = t.find(function (n) {
                                                    return n.id === e.id;
                                                  });
                                                  k(n), F(e.id);
                                                })(e);
                                              },
                                              children: (0, Z.jsx)(h.Z, {}),
                                            }),
                                          }),
                                        ],
                                      })
                                    : (0, Z.jsxs)(s.Z, {
                                        children: [
                                          (0, Z.jsx)(c.Z, {
                                            children: (0, Z.jsx)("input", {
                                              name: "name",
                                              type: "text",
                                              onChange: E,
                                              value:
                                                null === y || void 0 === y
                                                  ? void 0
                                                  : y.name,
                                              required: !0,
                                            }),
                                          }),
                                          (0, Z.jsx)(c.Z, {
                                            children: (0, Z.jsx)("input", {
                                              name: "order",
                                              type: "number",
                                              onChange: E,
                                              value:
                                                null === y || void 0 === y
                                                  ? void 0
                                                  : y.order,
                                              required: !0,
                                            }),
                                          }),
                                          (0, Z.jsx)(c.Z, {
                                            children: (0, Z.jsx)("input", {
                                              name: "enabled",
                                              type: "checkbox",
                                              onChange: function () {
                                                return k(
                                                  (0, i.Z)(
                                                    (0, i.Z)({}, y),
                                                    {},
                                                    { enabled: !y.enabled }
                                                  )
                                                );
                                              },
                                              checked:
                                                null === y || void 0 === y
                                                  ? void 0
                                                  : y.enabled,
                                            }),
                                          }),
                                          (0, Z.jsxs)(c.Z, {
                                            children: [
                                              (0, Z.jsx)("button", {
                                                className: "save-btn",
                                                onClick: O,
                                                children: "Save",
                                              }),
                                              (0, Z.jsx)("button", {
                                                className: "close-btn",
                                                onClick: function () {
                                                  return F(null);
                                                },
                                                children: (0, Z.jsx)(o.Z, {}),
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
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, r.jsx)("g", {
              children: (0, r.jsx)("g", {
                children: (0, r.jsx)("path", {
                  d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
                }),
              }),
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
    2423: function () {},
  },
]);
//# sourceMappingURL=1202.fcc64088.chunk.js.map
