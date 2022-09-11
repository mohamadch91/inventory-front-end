"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [6886],
  {
    71986: function (e, t, i) {
      var n = i(15671),
        r = i(43144),
        a = i(39877),
        s = i(54318),
        c = "http://127.0.0.1:8000/related/",
        l = (function () {
          function e() {
            (0, n.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getParameters",
                value: function () {
                  return a.Z.get(c + "params", {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getParameterDescriptions",
                value: function (e, t) {
                  return a.Z.get(c + "params/?id=" + e + "&type=" + t, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "putParameters",
                value: function (e) {
                  return a.Z.put(c + "params/", e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getItemFields",
                value: function () {
                  return a.Z.get(c + "item-fields", {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "putItemFields",
                value: function (e) {
                  return a.Z.put(c + "item-fields", e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getRelatedItemType",
                value: function (e) {
                  var t = {};
                  return (
                    e && (t.id = e),
                    a.Z.get(c + "related-item-type", {
                      headers: { Authorization: (0, s.Z)() },
                      params: t,
                    })
                  );
                },
              },
              {
                key: "putRelatedItemType",
                value: function (e) {
                  return a.Z.put(c + "related-item-type", e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getRelatedFacility",
                value: function () {
                  return a.Z.get(c + "related-facility/", {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "putRelatedFacility",
                value: function (e) {
                  return a.Z.put(c + "related-facility/", e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      t.Z = new l();
    },
    76886: function (e, t, i) {
      i.r(t);
      var n = i(29439),
        r = i(56890),
        a = i(35855),
        s = i(53994),
        c = i(53382),
        l = i(72791),
        u = i(91523),
        d = i(71986),
        o = i(23821),
        h = i(65218),
        Z = i(59909),
        m = (i(5227), i(87004), i(2423), i(30606)),
        p = i(80184);
      t.default = function () {
        var e,
          t,
          i = (0, l.useState)({}),
          f = (0, n.Z)(i, 2),
          x = f[0],
          j = f[1],
          v = (0, l.useState)(!0),
          y = (0, n.Z)(v, 2),
          g = y[0],
          k = y[1];
        return (
          (0, l.useEffect)(function () {
            d.Z.getParameters()
              .then(function (e) {
                j(e.data), k(!1);
              })
              .catch(function (e) {
                h.ZP.error("There is a problem loading data"), k(!1);
              });
          }, []),
          (0, p.jsx)("div", {
            className: "item-class-page-param",
            children: g
              ? (0, p.jsx)(Z.Z, {})
              : (0, p.jsxs)(p.Fragment, {
                  children: [
                    (0, p.jsx)("h2", {
                      className: "page-title mb-3",
                      children: (0, p.jsx)(m.c, { children: "Facility:" }),
                    }),
                    (0, p.jsx)("div", {
                      children: (0, p.jsxs)(o.Z, {
                        children: [
                          (0, p.jsx)(r.Z, {
                            children: (0, p.jsx)(a.Z, {
                              children: (0, p.jsx)(s.Z, {
                                children: (0, p.jsx)(m.c, {
                                  children: "Description",
                                }),
                              }),
                            }),
                          }),
                          (0, p.jsx)(c.Z, {
                            children:
                              null === x ||
                              void 0 === x ||
                              null === (e = x.facility) ||
                              void 0 === e
                                ? void 0
                                : e.map(function (e) {
                                    return (0,
                                    p.jsx)(p.Fragment, { children: (0, p.jsx)(a.Z, { children: (0, p.jsx)(s.Z, { children: (0, p.jsxs)(u.rU, { to: "/settings/params/facility-".concat(e.id), children: [e.name, " (", e.description, ")"] }) }) }) });
                                  }),
                          }),
                        ],
                      }),
                    }),
                    (0, p.jsxs)("h2", {
                      className: "page-title text-left mb-3 mt-5",
                      children: [(0, p.jsx)(m.c, { children: "Item" }), ":"],
                    }),
                    (0, p.jsx)("div", {
                      children: (0, p.jsxs)(o.Z, {
                        children: [
                          (0, p.jsx)(r.Z, {
                            children: (0, p.jsx)(a.Z, {
                              children: (0, p.jsx)(s.Z, {
                                children: (0, p.jsx)(m.c, {
                                  children: "Description",
                                }),
                              }),
                            }),
                          }),
                          (0, p.jsx)(c.Z, {
                            children:
                              null === x ||
                              void 0 === x ||
                              null === (t = x.item) ||
                              void 0 === t
                                ? void 0
                                : t.map(function (e) {
                                    return (0,
                                    p.jsx)(p.Fragment, { children: (0, p.jsx)(a.Z, { children: (0, p.jsx)(s.Z, { children: (0, p.jsxs)(u.rU, { to: "/settings/params/type-".concat(e.id), children: [e.name, " (", e.description, ")"] }) }) }) });
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
    23821: function (e, t, i) {
      var n = i(39281),
        r = i(79836),
        a = i(80184);
      t.Z = function (e) {
        var t = e.children;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)(n.Z, {
            children: (0, a.jsx)(r.Z, { children: t }),
          }),
        });
      };
    },
    5227: function () {},
    87004: function () {},
  },
]);
//# sourceMappingURL=6886.0d7ae4f6.chunk.js.map
