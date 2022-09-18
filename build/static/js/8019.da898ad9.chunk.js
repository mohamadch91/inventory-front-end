"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [8019],
  {
    87684: function (e, n, a) {
      var i = a(15671),
        t = a(43144),
        s = a(39877),
        c = a(54318),
        l = "https://inventory.runflare.run/maintanance/",
        r = (function () {
          function e() {
            (0, i.Z)(this, e);
          }
          return (
            (0, t.Z)(e, [
              {
                key: "getMaintenanceHelper",
                value: function () {
                  return s.Z.get(l + "helper", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getMaintenance",
                value: function (e, n) {
                  var a = { item_class: e, item_type: n };
                  return s.Z.get(l, {
                    headers: { Authorization: (0, c.Z)() },
                    params: a,
                  });
                },
              },
              {
                key: "postMaintenance",
                value: function (e) {
                  return s.Z.post(l, e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "putMaintenance",
                value: function (e) {
                  return s.Z.put(l, e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getMaintenanceGp",
                value: function (e, n) {
                  var a = { item_class: e, item_type: n };
                  return s.Z.get(l + "gp", {
                    headers: { Authorization: (0, c.Z)() },
                    params: a,
                  });
                },
              },
              {
                key: "postMaintenanceGp",
                value: function (e) {
                  return s.Z.post(l + "gp", e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "putMaintenanceGp",
                value: function (e) {
                  return s.Z.put(l + "gp", e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getMaintenanceActive",
                value: function (e, n, a) {
                  var i = { item_class: e, item_type: n, gp: a };
                  return s.Z.get(l + "active", {
                    headers: { Authorization: (0, c.Z)() },
                    params: i,
                  });
                },
              },
              {
                key: "postMaintenanceActive",
                value: function (e) {
                  return s.Z.post(l + "active", e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new r();
    },
    88019: function (e, n, a) {
      a.r(n);
      var i = a(93433),
        t = a(74165),
        s = a(15861),
        c = a(29439),
        l = a(56890),
        r = a(35855),
        o = a(53994),
        d = a(53382),
        u = a(72791),
        v = a(23821),
        m = a(91933),
        h = a(59909),
        p = a(16149),
        f = (a(93650), a(2423), a(87684)),
        Z = a(80184);
      n.default = function () {
        var e = (0, u.useState)(),
          n = (0, c.Z)(e, 2),
          a = n[0],
          x = n[1],
          j = (0, u.useState)(),
          g = (0, c.Z)(j, 2),
          y = g[0],
          N = g[1],
          b = (0, u.useState)(),
          k = (0, c.Z)(b, 2),
          _ = k[0],
          w = k[1],
          M = (0, u.useState)([]),
          A = (0, c.Z)(M, 2),
          C = A[0],
          z = A[1],
          G = (0, m.useQuery)(
            ["active-item-classes-with-item-type"],
            (0, s.Z)(
              (0, t.Z)().mark(function e() {
                var n;
                return (0, t.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), f.Z.getMaintenanceHelper();
                      case 2:
                        return (n = e.sent), e.abrupt("return", n.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            {
              onSuccess: function (e) {
                x(e[0]),
                  N(e[0].item_type[0]),
                  w(e[0].item_type[0].maintancegp[0]);
              },
            }
          ),
          S = G.data,
          E = G.isLoading,
          H = (0, m.useQuery)(
            [
              "get-maintenances",
              null === y || void 0 === y ? void 0 : y.id,
              null === a || void 0 === a ? void 0 : a.item_class.id,
              null === _ || void 0 === _ ? void 0 : _.id,
            ],
            (0, s.Z)(
              (0, t.Z)().mark(function e() {
                var n;
                return (0, t.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          f.Z.getMaintenanceActive(
                            null === a || void 0 === a
                              ? void 0
                              : a.item_class.id,
                            null === y || void 0 === y ? void 0 : y.id,
                            null === _ || void 0 === _ ? void 0 : _.id
                          )
                        );
                      case 2:
                        return (n = e.sent), e.abrupt("return", n.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { enabled: !1, cacheTime: 0 }
          ),
          I = H.data,
          L = H.isLoading,
          Q = H.refetch;
        (0, u.useEffect)(
          function () {
            y && a && _ && Q();
          },
          [_]
        );
        var F = (function () {
          var e = (0, s.Z)(
            (0, t.Z)().mark(function e() {
              return (0, t.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), f.Z.postMaintenanceActive(C);
                    case 2:
                      e.sent, Q(), z([]);
                    case 5:
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
        return E || L
          ? (0, Z.jsx)(h.Z, {})
          : (console.log(y),
            (0, Z.jsxs)("div", {
              children: [
                (0, Z.jsx)("h3", {
                  className: "page-title mb-3",
                  children: "Maintenance Service Group Assignment",
                }),
                (0, Z.jsx)("div", {
                  className: "mt-3",
                  children: (0, Z.jsx)("div", {
                    className: "card",
                    children: (0, Z.jsx)("div", {
                      className: "card-body",
                      children: (0, Z.jsxs)("div", {
                        className: "row",
                        children: [
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-4",
                            children: (0, Z.jsxs)(p.Z.Group, {
                              className: "row",
                              children: [
                                (0, Z.jsx)("label", {
                                  className: "col-sm-12",
                                  children: "Item class",
                                }),
                                (0, Z.jsx)("div", {
                                  className: "col-sm-12",
                                  children: (0, Z.jsx)(p.Z.Control, {
                                    onChange: function (e) {
                                      var n,
                                        a,
                                        i,
                                        t,
                                        s = +e.target.value,
                                        c = S.find(function (e) {
                                          return e.item_class.id === s;
                                        });
                                      x(c),
                                        N(
                                          null === (n = c.item_type) ||
                                            void 0 === n
                                            ? void 0
                                            : n[0]
                                        ),
                                        w(
                                          null === (a = c.item_type) ||
                                            void 0 === a ||
                                            null === (i = a[0]) ||
                                            void 0 === i ||
                                            null === (t = i.maintancegp) ||
                                            void 0 === t
                                            ? void 0
                                            : t[0]
                                        );
                                    },
                                    className: "form-select",
                                    as: "select",
                                    value:
                                      null === a || void 0 === a
                                        ? void 0
                                        : a.item_class.id,
                                    children: S.map(function (e) {
                                      return (0,
                                      Z.jsx)("option", { value: e.item_class.id, children: e.item_class.title }, e.item_class.id);
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-4",
                            children: (0, Z.jsxs)(p.Z.Group, {
                              className: "row",
                              children: [
                                (0, Z.jsx)("label", {
                                  className: "col-sm-12",
                                  children: "item Category",
                                }),
                                (0, Z.jsx)("div", {
                                  className: "col-sm-12",
                                  children: (0, Z.jsx)(p.Z.Control, {
                                    onChange: function (e) {
                                      var n,
                                        i = +e.target.value,
                                        t = a.item_type.find(function (e) {
                                          return e.id === i;
                                        });
                                      N(t),
                                        w(
                                          null === (n = t.maintancegp) ||
                                            void 0 === n
                                            ? void 0
                                            : n[0]
                                        );
                                    },
                                    className: "form-select",
                                    disabled: null === a,
                                    as: "select",
                                    value:
                                      null === y || void 0 === y
                                        ? void 0
                                        : y.id,
                                    children:
                                      null === a || void 0 === a
                                        ? void 0
                                        : a.item_type.map(function (e) {
                                            return (0,
                                            Z.jsx)("option", { value: e.id, children: e.title }, e.id);
                                          }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-4",
                            children: (0, Z.jsxs)(p.Z.Group, {
                              className: "row",
                              children: [
                                (0, Z.jsx)("label", {
                                  className: "col-sm-12",
                                  children: "Maintenance Group",
                                }),
                                (0, Z.jsx)("div", {
                                  className: "col-sm-12",
                                  children: (0, Z.jsx)(p.Z.Control, {
                                    onChange: function (e) {
                                      var n = +e.target.value,
                                        a = y.maintancegp.find(function (e) {
                                          return e.id === n;
                                        });
                                      w(a);
                                    },
                                    className: "form-select",
                                    disabled: null === y,
                                    as: "select",
                                    value:
                                      null === _ || void 0 === _
                                        ? void 0
                                        : _.id,
                                    children:
                                      null === y || void 0 === y
                                        ? void 0
                                        : y.maintancegp.map(function (e) {
                                            return (0,
                                            Z.jsx)("option", { value: e.id, disabled: !e.enable, children: e.name }, e.id);
                                          }),
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
                (0, Z.jsx)("div", {
                  className: "mt-3",
                  children: (0, Z.jsx)("div", {
                    className: "card",
                    children: (0, Z.jsxs)("div", {
                      className: "card-body p-3",
                      children: [
                        (0, Z.jsx)("div", {
                          className: "row",
                          style: {
                            display: "flex",
                            justifyContent: "flex-end",
                          },
                          children: (0, Z.jsx)("div", {
                            className: "col-sm-2",
                            children: (0, Z.jsx)("button", {
                              disabled: 0 === C.length,
                              className: "btn btn-primary",
                              onClick: F,
                              children: "Save changes",
                            }),
                          }),
                        }),
                        (0, Z.jsx)("div", {
                          className: "row",
                          children: (0, Z.jsx)("div", {
                            className: "mt-3 table-container",
                            children: (0, Z.jsxs)(v.Z, {
                              children: [
                                (0, Z.jsx)(l.Z, {
                                  children: (0, Z.jsxs)(r.Z, {
                                    children: [
                                      (0, Z.jsx)(o.Z, {
                                        className: "col-sm-10",
                                        children: "Service/ Maintenance items",
                                      }),
                                      (0, Z.jsx)(o.Z, {
                                        className: "col-sm-2",
                                        children: "Enable",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, Z.jsx)(d.Z, {
                                  children:
                                    null === I || void 0 === I
                                      ? void 0
                                      : I.map(function (e) {
                                          var n, a;
                                          return (0, Z.jsxs)(
                                            r.Z,
                                            {
                                              children: [
                                                (0, Z.jsx)(o.Z, {
                                                  className: "col-sm-10",
                                                  children:
                                                    null ===
                                                      (a = e.maintance) ||
                                                    void 0 === a
                                                      ? void 0
                                                      : a.name,
                                                }),
                                                (0, Z.jsx)(o.Z, {
                                                  className: "col-sm-2",
                                                  children: (0, Z.jsx)(
                                                    "input",
                                                    {
                                                      type: "checkbox",
                                                      defaultChecked:
                                                        e.assigned,
                                                      onChange: function (n) {
                                                        var a =
                                                            n.target.checked,
                                                          t = (0, i.Z)(C),
                                                          s = t.findIndex(
                                                            function (n) {
                                                              return (
                                                                n.id === e.id
                                                              );
                                                            }
                                                          );
                                                        s >= 0
                                                          ? (t[s].enable = a)
                                                          : t.push({
                                                              id: e.maintance
                                                                .id,
                                                              gp: _.id,
                                                              enable: a,
                                                            }),
                                                          z(t);
                                                      },
                                                    }
                                                  ),
                                                }),
                                              ],
                                            },
                                            e.assigned
                                              ? e.id
                                              : null === (n = e.maintance) ||
                                                void 0 === n
                                              ? void 0
                                              : n.name
                                          );
                                        }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }));
      };
    },
    23821: function (e, n, a) {
      var i = a(39281),
        t = a(79836),
        s = a(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)(i.Z, {
            children: (0, s.jsx)(t.Z, { children: n }),
          }),
        });
      };
    },
    93650: function () {},
  },
]);
//# sourceMappingURL=8019.da898ad9.chunk.js.map
