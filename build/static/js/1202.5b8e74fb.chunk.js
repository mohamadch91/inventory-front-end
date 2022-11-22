"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [1202],
  {
    71986: function (e, n, r) {
      var t = r(15671),
        i = r(43144),
        l = r(39877),
        a = r(54318),
        c = "https://ukrapi.invgap.org/related/",
        s = (function () {
          function e() {
            (0, t.Z)(this, e);
          }
          return (
            (0, i.Z)(e, [
              {
                key: "getParameters",
                value: function () {
                  return l.Z.get(c + "params", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getParameterDescriptions",
                value: function (e, n) {
                  return l.Z.get(c + "params/?id=" + e + "&type=" + n, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putParameters",
                value: function (e) {
                  return l.Z.put(c + "params/", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getItemFields",
                value: function () {
                  return l.Z.get(c + "item-fields", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putItemFields",
                value: function (e) {
                  return l.Z.put(c + "item-fields", e, {
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
                    l.Z.get(c + "related-item-type", {
                      headers: { Authorization: (0, a.Z)() },
                      params: n,
                    })
                  );
                },
              },
              {
                key: "putRelatedItemType",
                value: function (e) {
                  return l.Z.put(c + "related-item-type", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getRelatedFacility",
                value: function () {
                  return l.Z.get(c + "related-facility/", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putRelatedFacility",
                value: function (e) {
                  return l.Z.put(c + "related-facility/", e, {
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
    31202: function (e, n, r) {
      r.r(n);
      var t = r(4942),
        i = r(1413),
        l = r(29439),
        a = r(56890),
        c = r(35855),
        s = r(53994),
        d = r(53382),
        o = r(72791),
        u = r(40277),
        h = r(95907),
        m = r(23821),
        x = r(65218),
        p = r(59909),
        j = (r(5227), r(87004), r(2423), r(71986)),
        v = r(79271),
        f = r(30606),
        Z = r(80184);
      n.default = function () {
        var e = (0, o.useState)([]),
          n = (0, l.Z)(e, 2),
          r = n[0],
          b = n[1],
          g = (0, o.useState)(""),
          y = (0, l.Z)(g, 2),
          k = y[0],
          w = y[1],
          N = (0, o.useState)({}),
          P = (0, l.Z)(N, 2),
          z = P[0],
          S = P[1],
          C = (0, o.useState)({ name: "", order: null, enabled: !1 }),
          A = (0, l.Z)(C, 2),
          F = A[0],
          I = A[1],
          L = (0, o.useState)(null),
          D = (0, l.Z)(L, 2),
          R = D[0],
          T = D[1],
          q = (0, o.useState)(!0),
          E = (0, l.Z)(q, 2),
          B = E[0],
          O = E[1],
          X = (0, v.UO)().id;
        function M(e, n) {
          j.Z.getParameterDescriptions(n, e)
            .then(function (e) {
              b(e.data.description), w(e.data.name), O(!1);
            })
            .catch(function (e) {
              x.ZP.error(
                (0, Z.jsx)(f.c, { children: "There is a problem loading data" })
              ),
                O(!1);
            });
        }
        function U(e) {
          var n = e.target,
            r = n.name,
            l = n.value;
          S((0, i.Z)((0, i.Z)({}, z), {}, (0, t.Z)({}, r, l)));
        }
        function _(e) {
          var n = e.target,
            r = n.name,
            l = n.value;
          I((0, i.Z)((0, i.Z)({}, F), {}, (0, t.Z)({}, r, l)));
        }
        function G(e) {
          if (
            (e.preventDefault(),
            Object.keys(z).every(function (e) {
              return "" !== z[e] && null !== z[e];
            }))
          ) {
            O(!0);
            var n = z;
            (n.type = X.split("-")[0]),
              j.Z.putParameters(n)
                .then(function (e) {
                  var n = X.split("-");
                  M(n[0], n[1]);
                })
                .catch(function (e) {
                  x.ZP.error(
                    (0, Z.jsx)(f.c, {
                      children: "There is a problem sending data",
                    })
                  ),
                    O(!1);
                }),
              T(null),
              S({});
          } else
            x.ZP.error(
              (0, Z.jsx)(f.c, { children: "Please fill all the fields" })
            );
        }
        return (
          (0, o.useEffect)(
            function () {
              var e = null === X || void 0 === X ? void 0 : X.split("-");
              M(e[0], e[1]);
            },
            [X]
          ),
          (0, Z.jsxs)("div", {
            className: "item-class-page-param",
            children: [
              (0, Z.jsxs)("h2", {
                className: "page-title mb-3",
                children: [
                  (0, Z.jsx)(f.c, {
                    children:
                      null === X || void 0 === X ? void 0 : X.split("-")[0],
                  }),
                  " ",
                  (0, Z.jsx)(f.c, { children: "Parameter Descriptions" }),
                ],
              }),
              (0, Z.jsx)("h3", { className: "mb-3 param-name", children: k }),
              (0, Z.jsxs)("div", {
                className: "add-row mt-4 mb-4",
                children: [
                  (0, Z.jsx)("h3", {
                    children: (0, Z.jsx)(f.c, {
                      children: "Insert parameter In this row :",
                    }),
                  }),
                  (0, Z.jsx)("form", {
                    onSubmit: function (e) {
                      var n;
                      if (
                        (e.preventDefault(),
                        Object.keys(F).every(function (e) {
                          return "" !== F[e] && null !== F[e];
                        }))
                      ) {
                        O(!0);
                        var r = {
                          name: (n = F).name,
                          enabled: n.enabled,
                          order: n.order,
                        };
                        (r.type = X.split("-")[0]),
                          (r.paramid = parseInt(X.split("-")[1])),
                          j.Z.putParameters(r)
                            .then(function (e) {
                              var n = X.split("-");
                              M(n[0], n[1]);
                            })
                            .catch(function (e) {
                              x.ZP.error(
                                (0, Z.jsx)(f.c, {
                                  children: "There is a problem sending data",
                                })
                              ),
                                O(!1);
                            }),
                          I(
                            (0, i.Z)(
                              (0, i.Z)({}, F),
                              {},
                              { name: "", order: null, enabled: !1 }
                            )
                          );
                      } else
                        x.ZP.error(
                          (0, Z.jsx)(f.c, {
                            children: "Please fill all the fields",
                          })
                        );
                    },
                    children: (0, Z.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, Z.jsxs)("div", {
                          className: "col-md-4 flex-column d-flex",
                          children: [
                            (0, Z.jsx)("label", {
                              children: (0, Z.jsx)(f.c, {
                                children: "Parameter description",
                              }),
                            }),
                            (0, Z.jsx)("input", {
                              name: "name",
                              type: "text",
                              onChange: _,
                              value:
                                null === F || void 0 === F ? void 0 : F.name,
                              required: !0,
                            }),
                          ],
                        }),
                        (0, Z.jsxs)("div", {
                          className: "col-md-4 flex-column d-flex",
                          children: [
                            (0, Z.jsx)("label", {
                              children: (0, Z.jsx)(f.c, {
                                children: "Show order",
                              }),
                            }),
                            (0, Z.jsx)("input", {
                              name: "order",
                              type: "number",
                              onChange: _,
                              value:
                                null === F || void 0 === F ? void 0 : F.order,
                              required: !0,
                            }),
                          ],
                        }),
                        (0, Z.jsxs)("div", {
                          className:
                            "col-md-4 d-flex justify-content-center align-items-center mt-3",
                          children: [
                            (0, Z.jsx)("label", {
                              children: (0, Z.jsx)(f.c, { children: "Enable" }),
                            }),
                            (0, Z.jsx)("div", {
                              class: "form-check form-check-primary mt-3",
                              children: (0, Z.jsxs)("label", {
                                className: "form-check-label",
                                children: [
                                  (0, Z.jsx)("input", {
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
                                      null === F || void 0 === F
                                        ? void 0
                                        : F.enabled,
                                  }),
                                  (0, Z.jsx)("i", {
                                    className: "input-helper mt-3",
                                  }),
                                ],
                              }),
                            }),
                            (0, Z.jsx)("button", {
                              className: "save-btn",
                              type: "submit",
                              children: (0, Z.jsx)(f.c, { children: "Save" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              B
                ? (0, Z.jsx)(p.Z, {})
                : (0, Z.jsx)(Z.Fragment, {
                    children: (0, Z.jsx)("div", {
                      children: (0, Z.jsxs)(m.Z, {
                        children: [
                          (0, Z.jsx)(a.Z, {
                            children: (0, Z.jsxs)(c.Z, {
                              children: [
                                (0, Z.jsx)(s.Z, {
                                  children: (0, Z.jsx)(f.c, {
                                    children: "Description",
                                  }),
                                }),
                                (0, Z.jsx)(s.Z, {
                                  children: (0, Z.jsx)(f.c, {
                                    children: "Show order",
                                  }),
                                }),
                                (0, Z.jsx)(s.Z, {
                                  children: (0, Z.jsx)(f.c, {
                                    children: "Enable",
                                  }),
                                }),
                                (0, Z.jsx)(s.Z, {
                                  children: (0, Z.jsx)(f.c, {
                                    children: "Edit",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, Z.jsx)(d.Z, {
                            children: r.map(function (e, n) {
                              return (0, Z.jsx)(Z.Fragment, {
                                children:
                                  R !== e.id
                                    ? (0, Z.jsxs)(c.Z, {
                                        children: [
                                          (0, Z.jsx)(s.Z, { children: e.name }),
                                          (0, Z.jsx)(s.Z, {
                                            children: e.order,
                                          }),
                                          (0, Z.jsx)(s.Z, {
                                            children: (0, Z.jsx)("div", {
                                              class:
                                                "form-check form-check-primary mt-3",
                                              children: (0, Z.jsxs)("label", {
                                                className: "form-check-label",
                                                children: [
                                                  (0, Z.jsx)("input", {
                                                    type: "checkbox",
                                                    checked: e.enabled,
                                                    disabled: !0,
                                                  }),
                                                  (0, Z.jsx)("i", {
                                                    className:
                                                      "input-helper mt-3",
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                          (0, Z.jsx)(s.Z, {
                                            children: (0, Z.jsx)("button", {
                                              className: "edit-btn",
                                              onClick: function (n) {
                                                return (function (e) {
                                                  var n = r.find(function (n) {
                                                    return n.id === e.id;
                                                  });
                                                  S(n), T(e.id);
                                                })(e);
                                              },
                                              children: (0, Z.jsx)(h.Z, {}),
                                            }),
                                          }),
                                        ],
                                      })
                                    : (0, Z.jsxs)(c.Z, {
                                        children: [
                                          (0, Z.jsx)(s.Z, {
                                            children: (0, Z.jsx)("input", {
                                              name: "name",
                                              type: "text",
                                              onChange: U,
                                              value:
                                                null === z || void 0 === z
                                                  ? void 0
                                                  : z.name,
                                              required: !0,
                                            }),
                                          }),
                                          (0, Z.jsx)(s.Z, {
                                            children: (0, Z.jsx)("input", {
                                              name: "order",
                                              type: "number",
                                              onChange: U,
                                              value:
                                                null === z || void 0 === z
                                                  ? void 0
                                                  : z.order,
                                              required: !0,
                                            }),
                                          }),
                                          (0, Z.jsx)(s.Z, {
                                            children: (0, Z.jsx)("div", {
                                              class:
                                                "form-check form-check-primary mt-3",
                                              children: (0, Z.jsxs)("label", {
                                                className: "form-check-label",
                                                children: [
                                                  (0, Z.jsx)("input", {
                                                    name: "enabled",
                                                    type: "checkbox",
                                                    onChange: function () {
                                                      return S(
                                                        (0, i.Z)(
                                                          (0, i.Z)({}, z),
                                                          {},
                                                          {
                                                            enabled: !z.enabled,
                                                          }
                                                        )
                                                      );
                                                    },
                                                    checked:
                                                      null === z || void 0 === z
                                                        ? void 0
                                                        : z.enabled,
                                                  }),
                                                  (0, Z.jsx)("i", {
                                                    className:
                                                      "input-helper mt-3",
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                          (0, Z.jsxs)(s.Z, {
                                            children: [
                                              (0, Z.jsx)("button", {
                                                className: "save-btn",
                                                onClick: G,
                                                children: (0, Z.jsx)(f.c, {
                                                  children: "Save",
                                                }),
                                              }),
                                              (0, Z.jsx)("button", {
                                                className: "close-btn",
                                                onClick: function () {
                                                  return T(null);
                                                },
                                                children: (0, Z.jsx)(u.Z, {}),
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
    40277: function (e, n, r) {
      var t = r(80184);
      n.Z = function () {
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("svg", {
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
            children: (0, t.jsx)("g", {
              children: (0, t.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z",
              }),
            }),
          }),
        });
      };
    },
    95907: function (e, n, r) {
      var t = r(80184);
      n.Z = function () {
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            width: "20",
            height: "20",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, t.jsx)("path", {
              d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
            }),
          }),
        });
      };
    },
    23821: function (e, n, r) {
      var t = r(39281),
        i = r(79836),
        l = r(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)(t.Z, {
            children: (0, l.jsx)(i.Z, { children: n }),
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=1202.5b8e74fb.chunk.js.map
