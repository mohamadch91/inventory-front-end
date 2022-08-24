"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [752],
  {
    69778: function (e, n, t) {
      var i = t(15671),
        r = t(43144),
        s = t(74569),
        l = t.n(s),
        a = t(54318),
        c = "http://127.0.0.1:8000/items/",
        u = (function () {
          function e() {
            (0, i.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getItemClasses",
                value: function () {
                  return l().get(c + "itemClass", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getActiveItemClasses",
                value: function () {
                  return l().get(c + "class-helper", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putItemClass",
                value: function (e) {
                  return l().put(c + "itemClass", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getItemTypes",
                value: function () {
                  return l().get(c + "itemType", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "postItemType",
                value: function (e) {
                  return l().post(c + "itemType", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putItemTypes",
                value: function (e) {
                  return l().put(c + "itemType", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getItemClassesOfAnItemType",
                value: function (e) {
                  return l().get(c + "itembyclass?id=" + e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getActiveItemClassesWithFields",
                value: function (e) {
                  var n = {};
                  return (
                    e && (n.id = e),
                    l().get(c + "itembyclass", {
                      headers: { Authorization: (0, a.Z)() },
                      params: n,
                    })
                  );
                },
              },
              {
                key: "getItemTinLevels",
                value: function (e) {
                  var n = {};
                  return (
                    e && (n.level = e),
                    l().get(c + "itemTinLevels", {
                      headers: { Authorization: (0, a.Z)() },
                      params: n,
                    })
                  );
                },
              },
              {
                key: "putItemTypeInClass",
                value: function (e) {
                  return l().put(c + "itemTinLevels", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getManufacturers",
                value: function (e) {
                  return l().get(c + "manufacturer?id=" + e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "postManufacturer",
                value: function (e) {
                  return l().post(c + "manufacturer", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putManufacturer",
                value: function (e) {
                  return l().put(c + "manufacturer", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new u();
    },
    70752: function (e, n, t) {
      t.r(n);
      var i = t(4942),
        r = t(1413),
        s = t(70885),
        l = t(56890),
        a = t(35855),
        c = t(53994),
        u = t(53382),
        d = t(72791),
        o = t(40277),
        h = t(95907),
        m = t(23821),
        v = t(65218),
        x = t(59909),
        f = (t(93650), t(2423), t(65487), t(5227), t(87004), t(69778)),
        j = t(80184);
      n.default = function () {
        var e = (0, d.useState)([]),
          n = (0, s.Z)(e, 2),
          t = n[0],
          Z = n[1],
          p = (0, d.useState)({}),
          g = (0, s.Z)(p, 2),
          b = g[0],
          y = g[1],
          k = (0, d.useState)({ describe: "", order: null, active: !1 }),
          w = (0, s.Z)(k, 2),
          C = w[0],
          z = w[1],
          A = (0, d.useState)(null),
          I = (0, s.Z)(A, 2),
          N = I[0],
          T = I[1],
          S = (0, d.useState)(!0),
          L = (0, s.Z)(S, 2),
          M = L[0],
          P = L[1],
          F = (0, d.useState)([]),
          E = (0, s.Z)(F, 2),
          q = E[0],
          B = E[1],
          D = (0, d.useState)(null),
          O = (0, s.Z)(D, 2),
          R = O[0],
          X = O[1];
        function W(e) {
          f.Z.getManufacturers(e)
            .then(function (e) {
              Z(e.data[0].manufacturer), P(!1);
            })
            .catch(function (e) {
              v.ZP.error("There is a problem loading data"), P(!1);
            });
        }
        function _(e) {
          var n = e.target,
            t = n.name,
            s = n.value;
          y((0, r.Z)((0, r.Z)({}, b), {}, (0, i.Z)({}, t, s)));
        }
        function G(e) {
          var n = e.target,
            t = n.name,
            s = n.value;
          z((0, r.Z)((0, r.Z)({}, C), {}, (0, i.Z)({}, t, s)));
        }
        function H(e) {
          if (
            (e.preventDefault(),
            Object.keys(b).every(function (e) {
              return "" !== b[e] && null !== b[e];
            }))
          ) {
            P(!0);
            var n = b;
            f.Z.putManufacturer(n)
              .then(function (e) {
                W(R);
              })
              .catch(function (e) {
                v.ZP.error("There is a problem sending data"), P(!1);
              }),
              T(null),
              y({});
          } else v.ZP.error("Please fill all the fields");
        }
        return (
          (0, d.useEffect)(function () {
            f.Z.getActiveItemClasses()
              .then(function (e) {
                var n = e.data;
                B(n), X(n[0].id), P(!1), W(n[0].id);
              })
              .catch(function (e) {
                v.ZP.error("There is a problem loading data"), P(!1);
              });
          }, []),
          (0, d.useEffect)(
            function () {
              var e;
              q &&
                z(
                  (0, r.Z)(
                    (0, r.Z)({}, C),
                    {},
                    {
                      itemclass:
                        null === (e = q[0]) || void 0 === e ? void 0 : e.id,
                    }
                  )
                );
            },
            [q]
          ),
          (0, j.jsxs)("div", {
            className: "item-class-page",
            children: [
              (0, j.jsx)("h3", {
                className: "page-title mb-3",
                children: "Manufacturers by Item class",
              }),
              M
                ? (0, j.jsx)(x.Z, {})
                : (0, j.jsxs)(j.Fragment, {
                    children: [
                      (0, j.jsxs)("div", {
                        className: "row mb-4 mt-4",
                        children: [
                          (0, j.jsx)("div", {
                            className: "col-md-2 d-flex align-items-center",
                            children: (0, j.jsx)("h4", {
                              children: "Item class",
                            }),
                          }),
                          (0, j.jsx)("div", {
                            className: "col-md-10 d-flex",
                            children: (0, j.jsx)("select", {
                              name: "itemclass",
                              onChange: function (e) {
                                X(e.target.value), W(e.target.value);
                              },
                              value: R,
                              children: q.map(function (e, n) {
                                return (0,
                                j.jsx)("option", { value: e.id, children: e.title }, e.id);
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, j.jsx)("div", {
                        children: (0, j.jsxs)(m.Z, {
                          children: [
                            (0, j.jsx)(l.Z, {
                              children: (0, j.jsxs)(a.Z, {
                                children: [
                                  (0, j.jsx)(c.Z, { children: "Description" }),
                                  (0, j.jsx)(c.Z, { children: "Item class" }),
                                  (0, j.jsx)(c.Z, { children: "Show order" }),
                                  (0, j.jsx)(c.Z, { children: "Enable" }),
                                  (0, j.jsx)(c.Z, { children: "Edit" }),
                                ],
                              }),
                            }),
                            (0, j.jsx)(u.Z, {
                              children:
                                t &&
                                t.map(function (e, n) {
                                  var i, s;
                                  return (0, j.jsx)(j.Fragment, {
                                    children:
                                      N !== e.id
                                        ? (0, j.jsxs)(a.Z, {
                                            children: [
                                              (0, j.jsx)(c.Z, {
                                                children: e.describe,
                                              }),
                                              (0, j.jsx)(c.Z, {
                                                children:
                                                  null ===
                                                    ((s = e.itemclass),
                                                    (i = q.find(function (e) {
                                                      return e.id === s;
                                                    }))) || void 0 === i
                                                    ? void 0
                                                    : i.title,
                                              }),
                                              (0, j.jsx)(c.Z, {
                                                children: e.order,
                                              }),
                                              (0, j.jsx)(c.Z, {
                                                children: (0, j.jsx)("input", {
                                                  type: "checkbox",
                                                  checked: e.active,
                                                  disabled: !0,
                                                }),
                                              }),
                                              (0, j.jsx)(c.Z, {
                                                children: (0, j.jsx)("button", {
                                                  className: "edit-btn",
                                                  onClick: function (n) {
                                                    return (function (e) {
                                                      var n = t.find(function (
                                                        n
                                                      ) {
                                                        return n.id === e.id;
                                                      });
                                                      y(n), T(e.id);
                                                    })(e);
                                                  },
                                                  children: (0, j.jsx)(h.Z, {}),
                                                }),
                                              }),
                                            ],
                                          })
                                        : (0, j.jsxs)(a.Z, {
                                            children: [
                                              (0, j.jsx)(c.Z, {
                                                children: (0, j.jsx)("input", {
                                                  name: "describe",
                                                  type: "text",
                                                  onChange: _,
                                                  value:
                                                    null === b || void 0 === b
                                                      ? void 0
                                                      : b.describe,
                                                }),
                                              }),
                                              (0, j.jsx)(c.Z, {
                                                children: (0, j.jsx)("select", {
                                                  name: "itemclass",
                                                  onChange: _,
                                                  value:
                                                    null === b || void 0 === b
                                                      ? void 0
                                                      : b.itemclass,
                                                  children: q.map(function (
                                                    n,
                                                    t
                                                  ) {
                                                    return (0, j.jsx)(
                                                      "option",
                                                      {
                                                        value: n.id,
                                                        selected:
                                                          e.itemclass === n.id,
                                                        children: n.title,
                                                      },
                                                      n.id
                                                    );
                                                  }),
                                                }),
                                              }),
                                              (0, j.jsx)(c.Z, {
                                                children: (0, j.jsx)("input", {
                                                  name: "order",
                                                  type: "number",
                                                  onChange: _,
                                                  value:
                                                    null === b || void 0 === b
                                                      ? void 0
                                                      : b.order,
                                                  required: !0,
                                                }),
                                              }),
                                              (0, j.jsx)(c.Z, {
                                                children: (0, j.jsx)("input", {
                                                  name: "active",
                                                  type: "checkbox",
                                                  onChange: function () {
                                                    return y(
                                                      (0, r.Z)(
                                                        (0, r.Z)({}, b),
                                                        {},
                                                        { active: !b.active }
                                                      )
                                                    );
                                                  },
                                                  checked:
                                                    null === b || void 0 === b
                                                      ? void 0
                                                      : b.active,
                                                }),
                                              }),
                                              (0, j.jsxs)(c.Z, {
                                                children: [
                                                  (0, j.jsx)("button", {
                                                    className: "save-btn",
                                                    onClick: H,
                                                    children: "Save",
                                                  }),
                                                  (0, j.jsx)("button", {
                                                    className: "close-btn",
                                                    onClick: function () {
                                                      return T(null);
                                                    },
                                                    children: (0, j.jsx)(
                                                      o.Z,
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
                      (0, j.jsx)("div", {
                        className: "add-row mt-4 mb-4",
                        children: (0, j.jsxs)("form", {
                          onSubmit: function (e) {
                            var n;
                            if (
                              (e.preventDefault(),
                              Object.keys(C).every(function (e) {
                                return "" !== C[e] && null !== C[e];
                              }))
                            ) {
                              P(!0);
                              var t = {
                                describe: (n = C).describe,
                                active: n.active,
                                order: n.order,
                                itemclass: n.itemclass,
                              };
                              f.Z.postManufacturer(t)
                                .then(function (e) {
                                  W(R);
                                })
                                .catch(function (e) {
                                  v.ZP.error("There is a problem sending data"),
                                    P(!1);
                                }),
                                z(
                                  (0, r.Z)(
                                    (0, r.Z)({}, C),
                                    {},
                                    { describe: "", order: null, active: !1 }
                                  )
                                );
                            } else v.ZP.error("Please fill all the fields");
                          },
                          children: [
                            (0, j.jsx)("h3", {
                              className: "mb-3 mt-3",
                              children: "Insert Manufacturer",
                            }),
                            (0, j.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, j.jsxs)("div", {
                                  className: "col-md-3 flex-column d-flex",
                                  children: [
                                    (0, j.jsx)("label", {
                                      children: "Parameter description",
                                    }),
                                    (0, j.jsx)("input", {
                                      name: "describe",
                                      type: "text",
                                      onChange: G,
                                      value:
                                        null === C || void 0 === C
                                          ? void 0
                                          : C.describe,
                                      required: !0,
                                    }),
                                  ],
                                }),
                                (0, j.jsxs)("div", {
                                  className: "col-md-3 flex-column d-flex",
                                  children: [
                                    (0, j.jsx)("label", {
                                      children: "Item class",
                                    }),
                                    (0, j.jsx)("select", {
                                      name: "itemclass",
                                      onChange: G,
                                      value:
                                        null === C || void 0 === C
                                          ? void 0
                                          : C.itemclass,
                                      children: q.map(function (e, n) {
                                        return (0,
                                        j.jsx)("option", { value: e.id, selected: 0 === n, children: e.title }, e.id);
                                      }),
                                    }),
                                  ],
                                }),
                                (0, j.jsxs)("div", {
                                  className: "col-md-3 flex-column d-flex",
                                  children: [
                                    (0, j.jsx)("label", {
                                      children: "Show order",
                                    }),
                                    (0, j.jsx)("input", {
                                      name: "order",
                                      type: "number",
                                      onChange: G,
                                      value:
                                        null === C || void 0 === C
                                          ? void 0
                                          : C.order,
                                      required: !0,
                                    }),
                                  ],
                                }),
                                (0, j.jsxs)("div", {
                                  className:
                                    "col-md-3 d-flex justify-content-center align-items-center",
                                  children: [
                                    (0, j.jsx)("label", { children: "Active" }),
                                    (0, j.jsx)("input", {
                                      name: "active",
                                      className: "mr-4",
                                      type: "checkbox",
                                      onChange: function () {
                                        return z(
                                          (0, r.Z)(
                                            (0, r.Z)({}, C),
                                            {},
                                            { active: !C.active }
                                          )
                                        );
                                      },
                                      checked:
                                        null === C || void 0 === C
                                          ? void 0
                                          : C.active,
                                    }),
                                    (0, j.jsx)("button", {
                                      className: "save-btn",
                                      type: "submit",
                                      children: "Save",
                                    }),
                                  ],
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
        s = t(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)(i.Z, {
            children: (0, s.jsx)(r.Z, { children: n }),
          }),
        });
      };
    },
    5227: function () {},
    87004: function () {},
    65487: function () {},
    2423: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=752.ed299a64.chunk.js.map
