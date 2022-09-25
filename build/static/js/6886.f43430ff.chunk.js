"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [6886],
  {
    71986: function (e, t, r) {
      var i = r(15671),
        n = r(43144),
        a = r(39877),
        s = r(54318),
        c = "http://127.0.0.1:8000/related/",
        l = (function () {
          function e() {
            (0, i.Z)(this, e);
          }
          return (
            (0, n.Z)(e, [
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
    76886: function (e, t, r) {
      r.r(t);
      var i = r(29439),
        n = r(56890),
        a = r(35855),
        s = r(53994),
        c = r(53382),
        l = r(72791),
        u = r(91523),
        d = r(71986),
        o = r(23821),
        h = r(65218),
        Z = r(59909),
        m = (r(5227), r(87004), r(2423), r(30606)),
        f = r(80184);
      t.default = function () {
        var e,
          t,
          r = (0, l.useState)({}),
          p = (0, i.Z)(r, 2),
          x = p[0],
          j = p[1],
          v = (0, l.useState)(!0),
          y = (0, i.Z)(v, 2),
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
          (0, f.jsx)("div", {
            className: "item-class-page-param",
            children: g
              ? (0, f.jsx)(Z.Z, {})
              : (0, f.jsxs)(f.Fragment, {
                  children: [
                    (0, f.jsx)("h2", {
                      className: "page-title mb-3",
                      children: (0, f.jsx)(m.c, {
                        children: "Parameters related to facilities",
                      }),
                    }),
                    (0, f.jsx)("div", {
                      children: (0, f.jsxs)(o.Z, {
                        children: [
                          (0, f.jsx)(n.Z, {
                            children: (0, f.jsx)(a.Z, {
                              children: (0, f.jsx)(s.Z, {
                                children: (0, f.jsx)(m.c, {
                                  children: "Description",
                                }),
                              }),
                            }),
                          }),
                          (0, f.jsx)(c.Z, {
                            children:
                              null === x ||
                              void 0 === x ||
                              null === (e = x.facility) ||
                              void 0 === e
                                ? void 0
                                : e.map(function (e) {
                                    return (0,
                                    f.jsx)(f.Fragment, { children: (0, f.jsx)(a.Z, { children: (0, f.jsx)(s.Z, { children: (0, f.jsxs)(u.rU, { to: "/settings/params/facility-".concat(e.id), children: [e.name, " (", e.description, ")"] }) }) }) });
                                  }),
                          }),
                        ],
                      }),
                    }),
                    (0, f.jsx)("h2", {
                      className: "page-title text-left mb-3 mt-5",
                      children: (0, f.jsx)(m.c, {
                        children: "Parameters related to item categories",
                      }),
                    }),
                    (0, f.jsx)("div", {
                      children: (0, f.jsxs)(o.Z, {
                        children: [
                          (0, f.jsx)(n.Z, {
                            children: (0, f.jsx)(a.Z, {
                              children: (0, f.jsx)(s.Z, {
                                children: (0, f.jsx)(m.c, {
                                  children: "Description",
                                }),
                              }),
                            }),
                          }),
                          (0, f.jsx)(c.Z, {
                            children:
                              null === x ||
                              void 0 === x ||
                              null === (t = x.item) ||
                              void 0 === t
                                ? void 0
                                : t.map(function (e) {
                                    return (0,
                                    f.jsx)(f.Fragment, { children: (0, f.jsx)(a.Z, { children: (0, f.jsx)(s.Z, { children: (0, f.jsxs)(u.rU, { to: "/settings/params/type-".concat(e.id), children: [e.name, " (", e.description, ")"] }) }) }) });
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
    23821: function (e, t, r) {
      var i = r(39281),
        n = r(79836),
        a = r(80184);
      t.Z = function (e) {
        var t = e.children;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)(i.Z, {
            children: (0, a.jsx)(n.Z, { children: t }),
          }),
        });
      };
    },
    5227: function () {},
    87004: function () {},
  },
]);
//# sourceMappingURL=6886.f43430ff.chunk.js.map
