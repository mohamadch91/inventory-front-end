"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [6886],
  {
    71986: function (e, t, n) {
      var r = n(15671),
        i = n(43144),
        a = n(74569),
        s = n.n(a),
        c = n(54318),
        l = "http://127.0.0.1:8000/related/",
        u = (function () {
          function e() {
            (0, r.Z)(this, e);
          }
          return (
            (0, i.Z)(e, [
              {
                key: "getParameters",
                value: function () {
                  return s().get(l + "params", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getParameterDescriptions",
                value: function (e, t) {
                  return s().get(l + "params/?id=" + e + "&type=" + t, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "putParameters",
                value: function (e) {
                  return s().put(l + "params/", e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getItemFields",
                value: function () {
                  return s().get(l + "item-fields", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "putItemFields",
                value: function (e) {
                  return s().put(l + "item-fields", e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getRelatedItemType",
                value: function (e) {
                  var t = {};
                  return (
                    e && (t.id = e),
                    s().get(l + "related-item-type", {
                      headers: { Authorization: (0, c.Z)() },
                      params: t,
                    })
                  );
                },
              },
              {
                key: "putRelatedItemType",
                value: function (e) {
                  return s().put(l + "related-item-type", e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getRelatedFacility",
                value: function () {
                  return s().get(l + "related-facility/", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "putRelatedFacility",
                value: function (e) {
                  return s().put(l + "related-facility/", e, {
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
    76886: function (e, t, n) {
      n.r(t);
      var r = n(70885),
        i = n(56890),
        a = n(35855),
        s = n(53994),
        c = n(53382),
        l = n(72791),
        u = n(91523),
        d = n(71986),
        o = n(23821),
        h = n(65218),
        Z = n(59909),
        m = (n(5227), n(87004), n(2423), n(80184));
      t.default = function () {
        var e,
          t,
          n = (0, l.useState)({}),
          f = (0, r.Z)(n, 2),
          p = f[0],
          j = f[1],
          x = (0, l.useState)(!0),
          v = (0, r.Z)(x, 2),
          y = v[0],
          g = v[1];
        return (
          (0, l.useEffect)(function () {
            d.Z.getParameters()
              .then(function (e) {
                j(e.data), g(!1);
              })
              .catch(function (e) {
                h.ZP.error("There is a problem loading data"), g(!1);
              });
          }, []),
          (0, m.jsx)("div", {
            className: "item-class-page",
            children: y
              ? (0, m.jsx)(Z.Z, {})
              : (0, m.jsxs)(m.Fragment, {
                  children: [
                    (0, m.jsx)("h2", {
                      className: "page-title mb-3",
                      children: "Facility:",
                    }),
                    (0, m.jsx)("div", {
                      children: (0, m.jsxs)(o.Z, {
                        children: [
                          (0, m.jsx)(i.Z, {
                            children: (0, m.jsxs)(a.Z, {
                              children: [
                                (0, m.jsx)(s.Z, { children: "Description" }),
                                (0, m.jsx)(s.Z, { children: "Show order" }),
                              ],
                            }),
                          }),
                          (0, m.jsx)(c.Z, {
                            children:
                              null === p ||
                              void 0 === p ||
                              null === (e = p.facility) ||
                              void 0 === e
                                ? void 0
                                : e.map(function (e) {
                                    return (0,
                                    m.jsx)(m.Fragment, { children: (0, m.jsxs)(a.Z, { children: [(0, m.jsx)(s.Z, { children: (0, m.jsx)(u.rU, { to: "/settings/params/facility-".concat(e.id), children: e.name }) }), (0, m.jsx)(s.Z, { children: e.order })] }) });
                                  }),
                          }),
                        ],
                      }),
                    }),
                    (0, m.jsx)("h2", {
                      className: "page-title mb-3 mt-5",
                      children: "Item:",
                    }),
                    (0, m.jsx)("div", {
                      children: (0, m.jsxs)(o.Z, {
                        children: [
                          (0, m.jsx)(i.Z, {
                            children: (0, m.jsxs)(a.Z, {
                              children: [
                                (0, m.jsx)(s.Z, { children: "Description" }),
                                (0, m.jsx)(s.Z, { children: "Show order" }),
                              ],
                            }),
                          }),
                          (0, m.jsx)(c.Z, {
                            children:
                              null === p ||
                              void 0 === p ||
                              null === (t = p.item) ||
                              void 0 === t
                                ? void 0
                                : t.map(function (e) {
                                    return (0,
                                    m.jsx)(m.Fragment, { children: (0, m.jsxs)(a.Z, { children: [(0, m.jsx)(s.Z, { children: (0, m.jsx)(u.rU, { to: "/settings/params/type-".concat(e.id), children: e.name }) }), (0, m.jsx)(s.Z, { children: e.order })] }) });
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
    23821: function (e, t, n) {
      var r = n(39281),
        i = n(79836),
        a = n(80184);
      t.Z = function (e) {
        var t = e.children;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)(r.Z, {
            children: (0, a.jsx)(i.Z, { children: t }),
          }),
        });
      };
    },
    5227: function () {},
    87004: function () {},
    2423: function () {},
  },
]);
//# sourceMappingURL=6886.80906198.chunk.js.map
