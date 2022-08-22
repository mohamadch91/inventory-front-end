"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [7414],
  {
    69778: function (e, t, n) {
      var i = n(15671),
        r = n(43144),
        s = n(74569),
        c = n.n(s),
        a = n(54318),
        l = "http://127.0.0.1:8000/items/",
        u = (function () {
          function e() {
            (0, i.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getItemClasses",
                value: function () {
                  return c().get(l + "itemClass", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getActiveItemClasses",
                value: function () {
                  return c().get(l + "class-helper", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putItemClass",
                value: function (e) {
                  return c().put(l + "itemClass", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getItemTypes",
                value: function () {
                  return c().get(l + "itemType", {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "postItemType",
                value: function (e) {
                  return c().post(l + "itemType", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putItemTypes",
                value: function (e) {
                  return c().put(l + "itemType", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getItemClassesOfAnItemType",
                value: function (e) {
                  return c().get(l + "itembyclass?id=" + e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getActiveItemClassesWithFields",
                value: function (e) {
                  var t = {};
                  return (
                    e && (t.id = e),
                    c().get(l + "itembyclass", {
                      headers: { Authorization: (0, a.Z)() },
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
                    c().get(l + "itemTinLevels", {
                      headers: { Authorization: (0, a.Z)() },
                      params: t,
                    })
                  );
                },
              },
              {
                key: "putItemTypeInClass",
                value: function (e) {
                  return c().put(l + "itemTinLevels", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "getManufacturers",
                value: function (e) {
                  return c().get(l + "manufacturer?id=" + e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "postManufacturer",
                value: function (e) {
                  return c().post(l + "manufacturer", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
              {
                key: "putManufacturer",
                value: function (e) {
                  return c().put(l + "manufacturer", e, {
                    headers: { Authorization: (0, a.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      t.Z = new u();
    },
    47414: function (e, t, n) {
      n.r(t);
      var i = n(42982),
        r = n(4942),
        s = n(1413),
        c = n(70885),
        a = n(56890),
        l = n(35855),
        u = n(53994),
        o = n(53382),
        d = n(72791),
        h = n(69778),
        v = n(40277),
        x = n(95907),
        f = n(23821),
        Z = n(65218),
        m = n(59909),
        p = (n(5227), n(2423), n(80184));
      t.default = function () {
        var e = (0, d.useState)([]),
          t = (0, c.Z)(e, 2),
          n = t[0],
          j = t[1],
          g = (0, d.useState)(!0),
          y = (0, c.Z)(g, 2),
          k = y[0],
          w = y[1],
          b = (0, d.useState)({}),
          z = (0, c.Z)(b, 2),
          C = z[0],
          A = z[1],
          I = (0, d.useState)(null),
          T = (0, c.Z)(I, 2),
          L = T[0],
          F = T[1];
        function S() {
          h.Z.getItemClasses()
            .then(function (e) {
              j(e.data), w(!1);
            })
            .catch(function (e) {
              Z.ZP.error("There is a problem loading data"), w(!1);
            });
        }
        function N(e) {
          var t = e.target,
            n = t.name,
            i = t.value;
          A((0, s.Z)((0, s.Z)({}, C), {}, (0, r.Z)({}, n, i)));
        }
        function M(e) {
          var t;
          if (
            (e.preventDefault(),
            Object.keys(C).every(function (e) {
              return "" !== C[e];
            }))
          ) {
            w(!0);
            var r = (0, i.Z)(n),
              s = r.findIndex(function (e) {
                return e.id === C.id;
              });
            r[s] = C;
            var c = {
              id: (t = C).id,
              title: t.title,
              code: t.code,
              active: t.active,
            };
            h.Z.putItemClass(c)
              .then(function (e) {
                S();
              })
              .catch(function (e) {
                Z.ZP.error("There is a problem sending data"), w(!1);
              }),
              F(null),
              A({});
          } else Z.ZP.error("Please fill all the fields");
        }
        return (
          (0, d.useEffect)(function () {
            S();
          }, []),
          (0, p.jsx)("div", {
            className: "item-class-page",
            children: k
              ? (0, p.jsx)(m.Z, {})
              : (0, p.jsxs)(p.Fragment, {
                  children: [
                    (0, p.jsx)("h3", {
                      className: "page-title mb-3",
                      children: "Item class list",
                    }),
                    (0, p.jsx)("div", {
                      children: (0, p.jsxs)(f.Z, {
                        children: [
                          (0, p.jsx)(a.Z, {
                            children: (0, p.jsxs)(l.Z, {
                              children: [
                                (0, p.jsx)(u.Z, {}),
                                (0, p.jsx)(u.Z, { children: "Title" }),
                                (0, p.jsx)(u.Z, { children: "Code" }),
                                (0, p.jsx)(u.Z, { children: "Active" }),
                                (0, p.jsx)(u.Z, { children: "Edit" }),
                              ],
                            }),
                          }),
                          (0, p.jsx)(o.Z, {
                            children: n.map(function (e) {
                              return (0, p.jsx)(p.Fragment, {
                                children:
                                  L !== e.id
                                    ? (0, p.jsxs)(l.Z, {
                                        children: [
                                          (0, p.jsx)(u.Z, { children: e.id }),
                                          (0, p.jsx)(u.Z, {
                                            children: e.title,
                                          }),
                                          (0, p.jsx)(u.Z, { children: e.code }),
                                          (0, p.jsx)(u.Z, {
                                            children: (0, p.jsx)("input", {
                                              type: "checkbox",
                                              checked: e.active,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, p.jsx)(u.Z, {
                                            children: (0, p.jsx)("button", {
                                              className: "edit-btn",
                                              onClick: function (t) {
                                                return (function (e) {
                                                  var t = n.find(function (t) {
                                                    return t.id === e.id;
                                                  });
                                                  A(t), F(e.id);
                                                })(e);
                                              },
                                              children: (0, p.jsx)(x.Z, {}),
                                            }),
                                          }),
                                        ],
                                      })
                                    : (0, p.jsxs)(l.Z, {
                                        children: [
                                          (0, p.jsx)(u.Z, {
                                            children:
                                              null === C || void 0 === C
                                                ? void 0
                                                : C.id,
                                          }),
                                          (0, p.jsx)(u.Z, {
                                            children: (0, p.jsx)("input", {
                                              name: "title",
                                              type: "text",
                                              onChange: N,
                                              value:
                                                null === C || void 0 === C
                                                  ? void 0
                                                  : C.title,
                                              required: !0,
                                            }),
                                          }),
                                          (0, p.jsx)(u.Z, { children: C.code }),
                                          (0, p.jsx)(u.Z, {
                                            children: (0, p.jsx)("input", {
                                              name: "active",
                                              type: "checkbox",
                                              onChange: function () {
                                                return A(
                                                  (0, s.Z)(
                                                    (0, s.Z)({}, C),
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
                                          }),
                                          (0, p.jsxs)(u.Z, {
                                            children: [
                                              (0, p.jsx)("button", {
                                                className: "save-btn",
                                                onClick: M,
                                                children: "Save",
                                              }),
                                              (0, p.jsx)("button", {
                                                className: "close-btn",
                                                onClick: function () {
                                                  return F(null);
                                                },
                                                children: (0, p.jsx)(v.Z, {}),
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
        r = n(79836),
        s = n(80184);
      t.Z = function (e) {
        var t = e.children;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)(i.Z, {
            children: (0, s.jsx)(r.Z, { children: t }),
          }),
        });
      };
    },
    5227: function () {},
    2423: function () {},
  },
]);
//# sourceMappingURL=7414.f73b5ff9.chunk.js.map
