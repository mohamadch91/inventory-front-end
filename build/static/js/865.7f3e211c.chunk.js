"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [865],
  {
    69778: function (e, t, n) {
      var i = n(15671),
        a = n(43144),
        l = n(74569),
        s = n.n(l),
        c = n(54318),
        r = "http://127.0.0.1:8000/items/",
        u = (function () {
          function e() {
            (0, i.Z)(this, e);
          }
          return (
            (0, a.Z)(e, [
              {
                key: "getItemClasses",
                value: function () {
                  return s().get(r + "itemClass", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getActiveItemClasses",
                value: function () {
                  return s().get(r + "class-helper", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "putItemClass",
                value: function (e) {
                  return s().put(r + "itemClass", e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getItemTypes",
                value: function () {
                  return s().get(r + "itemType", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "postItemType",
                value: function (e) {
                  return s().post(r + "itemType", e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "putItemTypes",
                value: function (e) {
                  return s().put(r + "itemType", e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getItemClassesOfAnItemType",
                value: function (e) {
                  return s().get(r + "itembyclass?id=" + e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getActiveItemClassesWithFields",
                value: function (e) {
                  var t = {};
                  return (
                    e && (t.id = e),
                    s().get(r + "itembyclass", {
                      headers: { Authorization: (0, c.Z)() },
                      params: t,
                    })
                  );
                },
              },
              {
                key: "getItemTinLevels",
                value: function (e) {
                  var t = {};
                  return (
                    e && (t.level = e),
                    s().get(r + "itemTinLevels", {
                      headers: { Authorization: (0, c.Z)() },
                      params: t,
                    })
                  );
                },
              },
              {
                key: "putItemTypeInClass",
                value: function (e) {
                  return s().put(r + "itemTinLevels", e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getManufacturers",
                value: function (e) {
                  return s().get(r + "manufacturer?id=" + e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "postManufacturer",
                value: function (e) {
                  return s().post(r + "manufacturer", e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "putManufacturer",
                value: function (e) {
                  return s().put(r + "manufacturer", e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      t.Z = new u();
    },
    865: function (e, t, n) {
      n.r(t);
      var i = n(4942),
        a = n(1413),
        l = n(70885),
        s = n(56890),
        c = n(35855),
        r = n(53994),
        u = n(53382),
        o = n(72791),
        d = n(69778),
        h = n(40277),
        v = n(95907),
        m = n(23821),
        x = n(65218),
        f = n(59909),
        Z = (n(5227), n(87004), n(2423), n(80184));
      t.default = function () {
        var e = (0, o.useState)([]),
          t = (0, l.Z)(e, 2),
          n = t[0],
          j = t[1],
          p = (0, o.useState)([]),
          g = (0, l.Z)(p, 2),
          y = g[0],
          k = g[1],
          b = (0, o.useState)({}),
          C = (0, l.Z)(b, 2),
          w = C[0],
          S = C[1],
          P = (0, o.useState)({}),
          I = (0, l.Z)(P, 2),
          T = I[0],
          z = I[1],
          A = (0, o.useState)(null),
          Q = (0, l.Z)(A, 2),
          N = Q[0],
          L = Q[1],
          F = (0, o.useState)(!0),
          M = (0, l.Z)(F, 2),
          B = M[0],
          E = M[1];
        function O() {
          d.Z.getItemTypes()
            .then(function (e) {
              j(e.data), E(!1);
            })
            .catch(function (e) {
              x.ZP.error("There is a problem loading data"), E(!1);
            });
        }
        function q(e) {
          var t = e.target,
            n = t.name,
            l = t.value;
          S((0, a.Z)((0, a.Z)({}, w), {}, (0, i.Z)({}, n, l)));
        }
        function H(e) {
          var t = e.target,
            n = t.name,
            l = t.value;
          z((0, a.Z)((0, a.Z)({}, T), {}, (0, i.Z)({}, n, l)));
        }
        function R() {
          var e;
          if (
            Object.keys(w).every(function (e) {
              return "" !== w[e];
            })
          ) {
            E(!0);
            var t = {
              id: (e = w).id,
              title: e.title,
              code: e.code,
              active: e.active,
              havePQS: e.havePQS,
              itemclass: e.itemclass,
            };
            d.Z.putItemTypes(t)
              .then(function (e) {
                O();
              })
              .catch(function (e) {
                x.ZP.error("There is a problem sending data"), E(!1);
              }),
              L(null),
              S({});
          } else x.ZP.error("Please fill all the fields");
        }
        return (
          (0, o.useEffect)(function () {
            d.Z.getItemClasses()
              .then(function (e) {
                var t = e.data.filter(function (e) {
                  return !0 === e.active;
                });
                k(t), O();
              })
              .catch(function (e) {
                x.ZP.error("There is a problem loading data"), E(!1);
              });
          }, []),
          (0, o.useEffect)(
            function () {
              z(
                (0, a.Z)(
                  (0, a.Z)({}, T),
                  {},
                  { itemClass: y[0], active: !1, havePQS: !1 }
                )
              );
            },
            [y]
          ),
          (0, Z.jsx)("div", {
            className: "item-class-page",
            children: B
              ? (0, Z.jsx)(f.Z, {})
              : (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)("h3", {
                      className: "page-title mb-3",
                      children: "item category list",
                    }),
                    (0, Z.jsx)("div", {
                      children: (0, Z.jsxs)(m.Z, {
                        children: [
                          (0, Z.jsx)(s.Z, {
                            children: (0, Z.jsxs)(c.Z, {
                              children: [
                                (0, Z.jsx)(r.Z, {}),
                                (0, Z.jsx)(r.Z, { children: "Title" }),
                                (0, Z.jsx)(r.Z, { children: "Item class" }),
                                (0, Z.jsx)(r.Z, { children: "Code" }),
                                (0, Z.jsx)(r.Z, { children: "Active" }),
                                (0, Z.jsx)(r.Z, { children: "Have PQS?" }),
                                (0, Z.jsx)(r.Z, { children: "Edit" }),
                              ],
                            }),
                          }),
                          (0, Z.jsx)(u.Z, {
                            children: n.map(function (e, t) {
                              var i, l;
                              return (0, Z.jsx)(Z.Fragment, {
                                children:
                                  N !== e.id
                                    ? (0, Z.jsxs)(c.Z, {
                                        children: [
                                          (0, Z.jsx)(r.Z, { children: t + 1 }),
                                          (0, Z.jsx)(r.Z, {
                                            children: e.title,
                                          }),
                                          (0, Z.jsx)(r.Z, {
                                            children:
                                              null ===
                                                ((l = e.itemclass),
                                                (i = y.find(function (e) {
                                                  return e.id === l;
                                                }))) || void 0 === i
                                                ? void 0
                                                : i.title,
                                          }),
                                          (0, Z.jsx)(r.Z, { children: e.code }),
                                          (0, Z.jsx)(r.Z, {
                                            children: (0, Z.jsx)("input", {
                                              type: "checkbox",
                                              checked: e.active,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, Z.jsx)(r.Z, {
                                            children: (0, Z.jsx)("input", {
                                              type: "checkbox",
                                              checked: e.havePQS,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, Z.jsx)(r.Z, {
                                            children: (0, Z.jsx)("button", {
                                              className: "edit-btn",
                                              onClick: function (t) {
                                                return (function (e) {
                                                  var t = n.find(function (t) {
                                                    return t.id === e.id;
                                                  });
                                                  S(t), L(e.id);
                                                })(e);
                                              },
                                              children: (0, Z.jsx)(v.Z, {}),
                                            }),
                                          }),
                                        ],
                                      })
                                    : (0, Z.jsxs)(c.Z, {
                                        children: [
                                          (0, Z.jsx)(r.Z, { children: t + 1 }),
                                          (0, Z.jsx)(r.Z, {
                                            children: (0, Z.jsx)("input", {
                                              name: "title",
                                              type: "text",
                                              onChange: q,
                                              value:
                                                null === w || void 0 === w
                                                  ? void 0
                                                  : w.title,
                                              required: !0,
                                            }),
                                          }),
                                          (0, Z.jsx)(r.Z, {
                                            children: (0, Z.jsx)("select", {
                                              name: "itemclass",
                                              onChange: q,
                                              value:
                                                null === w || void 0 === w
                                                  ? void 0
                                                  : w.itemClass,
                                              children: y.map(function (t, n) {
                                                return (0,
                                                Z.jsx)("option", { value: t.id, selected: e.itemclass === t.id, children: t.title }, t.id);
                                              }),
                                            }),
                                          }),
                                          (0, Z.jsx)(r.Z, {
                                            children:
                                              null === w || void 0 === w
                                                ? void 0
                                                : w.code,
                                          }),
                                          (0, Z.jsx)(r.Z, {
                                            children: (0, Z.jsx)("input", {
                                              name: "active",
                                              type: "checkbox",
                                              onChange: function () {
                                                return S(
                                                  (0, a.Z)(
                                                    (0, a.Z)({}, w),
                                                    {},
                                                    { active: !w.active }
                                                  )
                                                );
                                              },
                                              checked:
                                                null === w || void 0 === w
                                                  ? void 0
                                                  : w.active,
                                            }),
                                          }),
                                          (0, Z.jsx)(r.Z, {
                                            children: (0, Z.jsx)("input", {
                                              name: "havePQS",
                                              type: "checkbox",
                                              onChange: function () {
                                                return S(
                                                  (0, a.Z)(
                                                    (0, a.Z)({}, w),
                                                    {},
                                                    { havePQS: !w.havePQS }
                                                  )
                                                );
                                              },
                                              checked:
                                                null === w || void 0 === w
                                                  ? void 0
                                                  : w.havePQS,
                                            }),
                                          }),
                                          (0, Z.jsxs)(r.Z, {
                                            children: [
                                              (0, Z.jsx)("button", {
                                                className: "save-btn",
                                                onClick: R,
                                                children: "Save",
                                              }),
                                              (0, Z.jsx)("button", {
                                                className: "close-btn",
                                                onClick: function () {
                                                  return L(null);
                                                },
                                                children: (0, Z.jsx)(h.Z, {}),
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
                    (0, Z.jsxs)("div", {
                      className: "add-row mt-4",
                      children: [
                        (0, Z.jsx)("h3", { children: "Submit new" }),
                        (0, Z.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, Z.jsxs)("div", {
                              className: "col-md-4 flex-column d-flex",
                              children: [
                                (0, Z.jsx)("label", {
                                  children: "item category",
                                }),
                                (0, Z.jsx)("input", {
                                  name: "title",
                                  type: "text",
                                  onChange: H,
                                  value:
                                    null === T || void 0 === T
                                      ? void 0
                                      : T.title,
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, Z.jsxs)("div", {
                              className: "col-md-4 flex-column d-flex",
                              children: [
                                (0, Z.jsx)("label", { children: "Item class" }),
                                (0, Z.jsx)("select", {
                                  name: "itemClass",
                                  onChange: H,
                                  value:
                                    null === T || void 0 === T
                                      ? void 0
                                      : T.itemClass,
                                  children: y.map(function (e, t) {
                                    return (0,
                                    Z.jsx)("option", { value: e.id, selected: 0 === t, children: e.title }, e.id);
                                  }),
                                }),
                              ],
                            }),
                            (0, Z.jsxs)("div", {
                              className:
                                "col-md-4 d-flex justify-content-center align-items-center",
                              children: [
                                (0, Z.jsx)("label", { children: "Active" }),
                                (0, Z.jsx)("input", {
                                  name: "active",
                                  className: "mr-4",
                                  type: "checkbox",
                                  onChange: function () {
                                    return z(
                                      (0, a.Z)(
                                        (0, a.Z)({}, T),
                                        {},
                                        { active: !T.active }
                                      )
                                    );
                                  },
                                  checked:
                                    null === T || void 0 === T
                                      ? void 0
                                      : T.active,
                                }),
                                (0, Z.jsx)("label", { children: "Have PQS?" }),
                                (0, Z.jsx)("input", {
                                  name: "havePQS",
                                  className: "mr-4",
                                  type: "checkbox",
                                  onChange: function () {
                                    return z(
                                      (0, a.Z)(
                                        (0, a.Z)({}, T),
                                        {},
                                        { havePQS: !T.havePQS }
                                      )
                                    );
                                  },
                                  checked:
                                    null === T || void 0 === T
                                      ? void 0
                                      : T.havePQS,
                                }),
                                (0, Z.jsx)("button", {
                                  className: "save-btn",
                                  onClick: function () {
                                    var e;
                                    if (
                                      Object.keys(T).every(function (e) {
                                        return "" !== T[e];
                                      })
                                    ) {
                                      var t;
                                      E(!0);
                                      var n = {
                                        title: (e = T).title,
                                        code: e.code,
                                        active: e.active,
                                        havePQS: e.havePQS,
                                      };
                                      null !== T &&
                                      void 0 !== T &&
                                      null !== (t = T.itemClass) &&
                                      void 0 !== t &&
                                      t.id
                                        ? (n.itemclass = parseInt(
                                            T.itemClass.id
                                          ))
                                        : (n.itemclass = parseInt(T.itemClass)),
                                        d.Z.postItemType(n)
                                          .then(function (e) {
                                            O();
                                          })
                                          .catch(function (e) {
                                            x.ZP.error(
                                              "There is a problem sending data"
                                            ),
                                              E(!1);
                                          }),
                                        z(
                                          (0, a.Z)(
                                            (0, a.Z)({}, T),
                                            {},
                                            {
                                              itemClass: y[0],
                                              active: !1,
                                              havePQS: !1,
                                              title: "",
                                            }
                                          )
                                        );
                                    } else
                                      x.ZP.error("Please fill all the fields");
                                  },
                                  children: "Save",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
          })
        );
      };
    },
    40277: function (e, t, n) {
      var i = n(80184);
      t.Z = function () {
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
    95907: function (e, t, n) {
      var i = n(80184);
      t.Z = function () {
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
    23821: function (e, t, n) {
      var i = n(39281),
        a = n(79836),
        l = n(80184);
      t.Z = function (e) {
        var t = e.children;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)(i.Z, {
            children: (0, l.jsx)(a.Z, { children: t }),
          }),
        });
      };
    },
    5227: function () {},
    87004: function () {},
    2423: function () {},
  },
]);
//# sourceMappingURL=865.7f3e211c.chunk.js.map
