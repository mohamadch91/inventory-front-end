"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [8019],
  {
    87684: function (e, n, i) {
      var a = i(15671),
        t = i(43144),
        s = i(39877),
        c = i(54318),
        l = "http://127.0.0.1:8000/maintanance/",
        r = (function () {
          function e() {
            (0, a.Z)(this, e);
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
                  var i = { item_class: e, item_type: n };
                  return s.Z.get(l, {
                    headers: { Authorization: (0, c.Z)() },
                    params: i,
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
                  var i = { item_class: e, item_type: n };
                  return s.Z.get(l + "gp", {
                    headers: { Authorization: (0, c.Z)() },
                    params: i,
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
                value: function (e, n, i) {
                  var a = { item_class: e, item_type: n, gp: i };
                  return s.Z.get(l + "active", {
                    headers: { Authorization: (0, c.Z)() },
                    params: a,
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
    88019: function (e, n, i) {
      i.r(n);
      var a = i(93433),
        t = i(74165),
        s = i(15861),
        c = i(29439),
        l = i(56890),
        r = i(35855),
        d = i(53994),
        o = i(53382),
        u = i(72791),
        m = i(23821),
        v = i(91933),
        h = i(59909),
        p = i(16149),
        f = (i(93650), i(2423), i(87684)),
        Z = i(80184);
      n.default = function () {
        var e = (0, u.useState)(),
          n = (0, c.Z)(e, 2),
          i = n[0],
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
          G = (0, v.useQuery)(
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
          H = (0, v.useQuery)(
            [
              "get-maintenances",
              null === y || void 0 === y ? void 0 : y.id,
              null === i || void 0 === i ? void 0 : i.item_class.id,
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
                            null === i || void 0 === i
                              ? void 0
                              : i.item_class.id,
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
            y && i && _ && Q();
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
                                        i,
                                        a,
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
                                          null === (i = c.item_type) ||
                                            void 0 === i ||
                                            null === (a = i[0]) ||
                                            void 0 === a ||
                                            null === (t = a.maintancegp) ||
                                            void 0 === t
                                            ? void 0
                                            : t[0]
                                        );
                                    },
                                    className: "form-select",
                                    as: "select",
                                    value:
                                      null === i || void 0 === i
                                        ? void 0
                                        : i.item_class.id,
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
                                  children: "item type",
                                }),
                                (0, Z.jsx)("div", {
                                  className: "col-sm-12",
                                  children: (0, Z.jsx)(p.Z.Control, {
                                    onChange: function (e) {
                                      var n,
                                        a = +e.target.value,
                                        t = i.item_type.find(function (e) {
                                          return e.id === a;
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
                                    disabled: null === i,
                                    as: "select",
                                    value:
                                      null === y || void 0 === y
                                        ? void 0
                                        : y.id,
                                    children:
                                      null === i || void 0 === i
                                        ? void 0
                                        : i.item_type.map(function (e) {
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
                                        i = y.maintancegp.find(function (e) {
                                          return e.id === n;
                                        });
                                      w(i);
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
                            children: (0, Z.jsxs)(m.Z, {
                              children: [
                                (0, Z.jsx)(l.Z, {
                                  children: (0, Z.jsxs)(r.Z, {
                                    children: [
                                      (0, Z.jsx)(d.Z, {
                                        className: "col-sm-10",
                                        children: "Service/ Maintenance items",
                                      }),
                                      (0, Z.jsx)(d.Z, {
                                        className: "col-sm-2",
                                        children: "Enable",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, Z.jsx)(o.Z, {
                                  children:
                                    null === I || void 0 === I
                                      ? void 0
                                      : I.map(function (e) {
                                          var n, i;
                                          return (0, Z.jsxs)(
                                            r.Z,
                                            {
                                              children: [
                                                (0, Z.jsx)(d.Z, {
                                                  className: "col-sm-10",
                                                  children:
                                                    null ===
                                                      (i = e.maintance) ||
                                                    void 0 === i
                                                      ? void 0
                                                      : i.name,
                                                }),
                                                (0, Z.jsx)(d.Z, {
                                                  className: "col-sm-2",
                                                  children: (0, Z.jsx)(
                                                    "input",
                                                    {
                                                      type: "checkbox",
                                                      defaultChecked:
                                                        e.assigned,
                                                      onChange: function (n) {
                                                        var i =
                                                            n.target.checked,
                                                          t = (0, a.Z)(C),
                                                          s = t.findIndex(
                                                            function (n) {
                                                              return (
                                                                n.id === e.id
                                                              );
                                                            }
                                                          );
                                                        s >= 0
                                                          ? (t[s].enable = i)
                                                          : t.push({
                                                              id: e.maintance
                                                                .id,
                                                              gp: _.id,
                                                              enable: i,
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
    23821: function (e, n, i) {
      var a = i(39281),
        t = i(79836),
        s = i(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)(a.Z, {
            children: (0, s.jsx)(t.Z, { children: n }),
          }),
        });
      };
    },
    93650: function () {},
  },
]);
//# sourceMappingURL=8019.e73755ec.chunk.js.map