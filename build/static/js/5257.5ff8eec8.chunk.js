"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [5257],
  {
    87684: function (e, n, t) {
      var s = t(15671),
        a = t(43144),
        c = t(39877),
        i = t(54318),
        l = "http://127.0.0.1:8000/maintanance/",
        r = (function () {
          function e() {
            (0, s.Z)(this, e);
          }
          return (
            (0, a.Z)(e, [
              {
                key: "getMaintenanceHelper",
                value: function () {
                  return c.Z.get(l + "helper", {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "getMaintenance",
                value: function (e, n) {
                  var t = { item_class: e, item_type: n };
                  return c.Z.get(l, {
                    headers: { Authorization: (0, i.Z)() },
                    params: t,
                  });
                },
              },
              {
                key: "postMaintenance",
                value: function (e) {
                  return c.Z.post(l, e, {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "putMaintenance",
                value: function (e) {
                  return c.Z.put(l, e, {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "getMaintenanceGp",
                value: function (e, n) {
                  var t = { item_class: e, item_type: n };
                  return c.Z.get(l + "gp", {
                    headers: { Authorization: (0, i.Z)() },
                    params: t,
                  });
                },
              },
              {
                key: "postMaintenanceGp",
                value: function (e) {
                  return c.Z.post(l + "gp", e, {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "putMaintenanceGp",
                value: function (e) {
                  return c.Z.put(l + "gp", e, {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "getMaintenanceActive",
                value: function (e, n, t) {
                  var s = { item_class: e, item_type: n, gp: t };
                  return c.Z.get(l + "active", {
                    headers: { Authorization: (0, i.Z)() },
                    params: s,
                  });
                },
              },
              {
                key: "postMaintenanceActive",
                value: function (e) {
                  return c.Z.post(l + "active", e, {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new r();
    },
    25257: function (e, n, t) {
      t.r(n);
      var s = t(1413),
        a = t(74165),
        c = t(15861),
        i = t(29439),
        l = t(56890),
        r = t(35855),
        o = t(53994),
        d = t(53382),
        u = t(72791),
        m = t(23821),
        h = t(91933),
        v = t(59909),
        x = t(95907),
        p = t(16149),
        j = (t(93650), t(2423), t(87684)),
        Z = t(30606),
        f = t(80184),
        N = { name: "", enable: !1 };
      n.default = function () {
        var e = (0, u.useState)(),
          n = (0, i.Z)(e, 2),
          t = n[0],
          g = n[1],
          b = (0, u.useState)(),
          y = (0, i.Z)(b, 2),
          k = y[0],
          w = y[1],
          M = (0, u.useState)(!1),
          _ = (0, i.Z)(M, 2),
          C = _[0],
          z = _[1],
          A = (0, u.useState)(N),
          G = (0, i.Z)(A, 2),
          S = G[0],
          E = G[1],
          I = (0, h.useQuery)(
            ["active-item-classes-with-item-type"],
            (0, c.Z)(
              (0, a.Z)().mark(function e() {
                var n;
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), j.Z.getMaintenanceHelper();
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
                g(e[0]), w(e[0].item_type[0]);
              },
            }
          ),
          F = I.data,
          H = I.isLoading,
          L = (0, h.useQuery)(
            [
              "get-maintenances-gp",
              null === k || void 0 === k ? void 0 : k.id,
              null === t || void 0 === t ? void 0 : t.item_class.id,
            ],
            (0, c.Z)(
              (0, a.Z)().mark(function e() {
                var n;
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          j.Z.getMaintenanceGp(
                            null === t || void 0 === t
                              ? void 0
                              : t.item_class.id,
                            null === k || void 0 === k ? void 0 : k.id
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
            { enabled: !1 }
          ),
          Q = L.data,
          B = L.isLoading,
          R = L.refetch;
        (0, u.useEffect)(
          function () {
            k && t && R();
          },
          [k]
        );
        var X = (function () {
          var e = (0, c.Z)(
            (0, a.Z)().mark(function e() {
              var n;
              return (0, a.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = (0, s.Z)(
                          (0, s.Z)({}, S),
                          {},
                          {
                            item_type:
                              null === k || void 0 === k ? void 0 : k.id,
                            item_class:
                              null === t || void 0 === t
                                ? void 0
                                : t.item_class.id,
                          }
                        )),
                        (e.next = 3),
                        n.id
                      );
                    case 3:
                      if (!e.sent) {
                        e.next = 7;
                        break;
                      }
                      j.Z.putMaintenanceGp(n).then(function (e) {
                        R(), E(N), z(!1);
                      }),
                        (e.next = 8);
                      break;
                    case 7:
                      j.Z.postMaintenanceGp(n).then(function (e) {
                        R(), E(N), z(!1);
                      });
                    case 8:
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
        return H || B
          ? (0, f.jsx)(v.Z, {})
          : (0, f.jsxs)("div", {
              children: [
                (0, f.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, f.jsx)(Z.c, { children: "Maintenance group" }),
                }),
                (0, f.jsx)("div", {
                  className: "mt-3",
                  children: (0, f.jsx)("div", {
                    className: "card",
                    children: (0, f.jsx)("div", {
                      className: "card-body",
                      children: (0, f.jsxs)("div", {
                        className: "row",
                        children: [
                          (0, f.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, f.jsxs)(p.Z.Group, {
                              className: "row",
                              children: [
                                (0, f.jsx)("label", {
                                  className: "col-sm-12",
                                  children: (0, f.jsx)(Z.c, {
                                    children: "Item class",
                                  }),
                                }),
                                (0, f.jsx)("div", {
                                  className: "col-sm-12",
                                  children: (0, f.jsx)(p.Z.Control, {
                                    onChange: function (e) {
                                      var n;
                                      g(F[e.target.value]),
                                        w(
                                          null ===
                                            (n = F[e.target.value].item_type) ||
                                            void 0 === n
                                            ? void 0
                                            : n[0]
                                        );
                                    },
                                    className: "form-select",
                                    as: "select",
                                    children: F.map(function (e, n) {
                                      return (0,
                                      f.jsx)("option", { value: n, selected: (null === e || void 0 === e ? void 0 : e.item_class.id) === (null === t || void 0 === t ? void 0 : t.item_class.id), children: e.item_class.title });
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, f.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, f.jsxs)(p.Z.Group, {
                              className: "row",
                              children: [
                                (0, f.jsx)("label", {
                                  className: "col-sm-12",
                                  children: (0, f.jsx)(Z.c, {
                                    children: "Items category",
                                  }),
                                }),
                                (0, f.jsx)("div", {
                                  className: "col-sm-12",
                                  children: (0, f.jsx)(p.Z.Control, {
                                    onChange: function (e) {
                                      w(t.item_type[e.target.value]);
                                    },
                                    className: "form-select",
                                    disabled: null === t,
                                    as: "select",
                                    children:
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.item_type.map(function (e, n) {
                                            return (0,
                                            f.jsx)("option", { selected: e.id === k.id, value: n, children: e.title });
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
                (0, f.jsx)("div", {
                  className: "mt-3",
                  children: (0, f.jsx)("div", {
                    className: "card",
                    children: (0, f.jsxs)("div", {
                      className: "card-body",
                      children: [
                        (0, f.jsx)("h3", {
                          className: "page-title mb-3",
                          children: C
                            ? "Edit Maintenance Group"
                            : "New Maintenance Group",
                        }),
                        (0, f.jsxs)(p.Z.Group, {
                          className: "row",
                          children: [
                            (0, f.jsx)("label", {
                              className: "col-sm-4",
                              style: {
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                              },
                              children: (0, f.jsx)(Z.c, {
                                children: "Service/ Maintenance Name",
                              }),
                            }),
                            (0, f.jsx)("div", {
                              className: "col-sm-8",
                              children: (0, f.jsx)(p.Z.Control, {
                                onChange: function (e) {
                                  e.persist(),
                                    E(function (n) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, n), {}, { name: e.target.value });
                                    });
                                },
                                className: "form-control",
                                value:
                                  null === S || void 0 === S ? void 0 : S.name,
                              }),
                            }),
                          ],
                        }),
                        (0, f.jsxs)(p.Z.Group, {
                          className: "row",
                          children: [
                            (0, f.jsx)("label", {
                              className: "col-sm-4",
                              style: {
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                              },
                              children: (0, f.jsx)(Z.c, { children: "Enable" }),
                            }),
                            (0, f.jsx)("div", {
                              className: "col-sm-8",
                              children: (0, f.jsx)("input", {
                                type: "checkbox",
                                checked:
                                  null === S || void 0 === S
                                    ? void 0
                                    : S.enable,
                                onChange: function (e) {
                                  e.persist(),
                                    E(function (n) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, n), {}, { enable: e.target.checked });
                                    });
                                },
                              }),
                            }),
                          ],
                        }),
                        (0, f.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, f.jsx)("div", {
                              className: "col-sm-1",
                              children: (0, f.jsx)("button", {
                                disabled: S === N,
                                className: "btn btn-primary",
                                onClick: X,
                                children: (0, f.jsx)(Z.c, {
                                  children: "Accept",
                                }),
                              }),
                            }),
                            (0, f.jsx)("div", {
                              className: "col-sm-1",
                              children: (0, f.jsx)("button", {
                                className: "btn btn-secondary",
                                onClick: function () {
                                  E(N), z(!1);
                                },
                                children: (0, f.jsx)(Z.c, {
                                  children: "Return",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, f.jsx)("div", {
                  className: "mt-3",
                  children: (0, f.jsx)("div", {
                    className: "card",
                    children: (0, f.jsx)("div", {
                      className: "card-body p-3",
                      children: (0, f.jsx)("div", {
                        className: "row",
                        children: (0, f.jsx)("div", {
                          className: "mt-5 table-container",
                          children: (0, f.jsxs)(m.Z, {
                            children: [
                              (0, f.jsx)(l.Z, {
                                children: (0, f.jsxs)(r.Z, {
                                  children: [
                                    (0, f.jsx)(o.Z, {
                                      className: "col-sm-9",
                                      children: (0, f.jsx)(Z.c, {
                                        children: "Service/ Maintenance items",
                                      }),
                                    }),
                                    (0, f.jsx)(o.Z, {
                                      className: "col-sm-1",
                                      children: (0, f.jsx)(Z.c, {
                                        children: "Enable",
                                      }),
                                    }),
                                    (0, f.jsx)(o.Z, {
                                      className: "col-sm-2",
                                      children: (0, f.jsx)(Z.c, {
                                        children: "Edit",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, f.jsx)(d.Z, {
                                children:
                                  null === Q || void 0 === Q
                                    ? void 0
                                    : Q.map(function (e) {
                                        return (0, f.jsxs)(
                                          r.Z,
                                          {
                                            children: [
                                              (0, f.jsx)(o.Z, {
                                                className: "col-sm-9",
                                                children: e.name,
                                              }),
                                              (0, f.jsx)(o.Z, {
                                                className: "col-sm-1",
                                                children: (0, f.jsx)("input", {
                                                  type: "checkbox",
                                                  disabled: !0,
                                                  checked: e.enable,
                                                }),
                                              }),
                                              (0, f.jsx)(o.Z, {
                                                className: "col-sm-2",
                                                children: (0, f.jsx)("button", {
                                                  type: "button",
                                                  className: "edit-btn",
                                                  onClick: function () {
                                                    E({
                                                      id: e.id,
                                                      enable: e.enable,
                                                      name: e.name,
                                                    }),
                                                      z(!0);
                                                  },
                                                  children: (0, f.jsx)(x.Z, {}),
                                                }),
                                              }),
                                            ],
                                          },
                                          e.id
                                        );
                                      }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            });
      };
    },
    95907: function (e, n, t) {
      var s = t(80184);
      n.Z = function () {
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            width: "20",
            height: "20",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, s.jsx)("path", {
              d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
            }),
          }),
        });
      };
    },
    23821: function (e, n, t) {
      var s = t(39281),
        a = t(79836),
        c = t(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, c.jsx)(c.Fragment, {
          children: (0, c.jsx)(s.Z, {
            children: (0, c.jsx)(a.Z, { children: n }),
          }),
        });
      };
    },
    93650: function () {},
  },
]);
//# sourceMappingURL=5257.5ff8eec8.chunk.js.map
