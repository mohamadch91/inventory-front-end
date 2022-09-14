"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [5257],
  {
    87684: function (e, n, t) {
      var a = t(15671),
        s = t(43144),
        i = t(39877),
        c = t(54318),
        l = "http://127.0.0.1:8000/maintanance/",
        r = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, s.Z)(e, [
              {
                key: "getMaintenanceHelper",
                value: function () {
                  return i.Z.get(l + "helper", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getMaintenance",
                value: function (e, n) {
                  var t = { item_class: e, item_type: n };
                  return i.Z.get(l, {
                    headers: { Authorization: (0, c.Z)() },
                    params: t,
                  });
                },
              },
              {
                key: "postMaintenance",
                value: function (e) {
                  return i.Z.post(l, e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "putMaintenance",
                value: function (e) {
                  return i.Z.put(l, e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getMaintenanceGp",
                value: function (e, n) {
                  var t = { item_class: e, item_type: n };
                  return i.Z.get(l + "gp", {
                    headers: { Authorization: (0, c.Z)() },
                    params: t,
                  });
                },
              },
              {
                key: "postMaintenanceGp",
                value: function (e) {
                  return i.Z.post(l + "gp", e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "putMaintenanceGp",
                value: function (e) {
                  return i.Z.put(l + "gp", e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getMaintenanceActive",
                value: function (e, n, t) {
                  var a = { item_class: e, item_type: n, gp: t };
                  return i.Z.get(l + "active", {
                    headers: { Authorization: (0, c.Z)() },
                    params: a,
                  });
                },
              },
              {
                key: "postMaintenanceActive",
                value: function (e) {
                  return i.Z.post(l + "active", e, {
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
    25257: function (e, n, t) {
      t.r(n);
      var a = t(1413),
        s = t(74165),
        i = t(15861),
        c = t(29439),
        l = t(56890),
        r = t(35855),
        o = t(53994),
        d = t(53382),
        u = t(72791),
        m = t(23821),
        h = t(91933),
        v = t(59909),
        p = t(95907),
        x = t(16149),
        Z = (t(93650), t(2423), t(87684)),
        j = t(80184),
        f = { name: "", enable: !1 };
      n.default = function () {
        var e = (0, u.useState)(),
          n = (0, c.Z)(e, 2),
          t = n[0],
          N = n[1],
          b = (0, u.useState)(),
          g = (0, c.Z)(b, 2),
          y = g[0],
          k = g[1],
          w = (0, u.useState)(!1),
          M = (0, c.Z)(w, 2),
          _ = M[0],
          C = M[1],
          z = (0, u.useState)(f),
          G = (0, c.Z)(z, 2),
          A = G[0],
          S = G[1],
          E = (0, h.useQuery)(
            ["active-item-classes-with-item-type"],
            (0, i.Z)(
              (0, s.Z)().mark(function e() {
                var n;
                return (0, s.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), Z.Z.getMaintenanceHelper();
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
                N(e[0]), k(e[0].item_type[0]);
              },
            }
          ),
          I = E.data,
          F = E.isLoading,
          H = (0, h.useQuery)(
            [
              "get-maintenances-gp",
              null === y || void 0 === y ? void 0 : y.id,
              null === t || void 0 === t ? void 0 : t.item_class.id,
            ],
            (0, i.Z)(
              (0, s.Z)().mark(function e() {
                var n;
                return (0, s.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Z.Z.getMaintenanceGp(
                            null === t || void 0 === t
                              ? void 0
                              : t.item_class.id,
                            null === y || void 0 === y ? void 0 : y.id
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
          L = H.data,
          Q = H.isLoading,
          B = H.refetch;
        (0, u.useEffect)(
          function () {
            y && t && B();
          },
          [y]
        );
        var R = (function () {
          var e = (0, i.Z)(
            (0, s.Z)().mark(function e() {
              var n;
              return (0, s.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = (0, a.Z)(
                          (0, a.Z)({}, A),
                          {},
                          {
                            item_type:
                              null === y || void 0 === y ? void 0 : y.id,
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
                      Z.Z.putMaintenanceGp(n).then(function (e) {
                        B(), S(f), C(!1);
                      }),
                        (e.next = 8);
                      break;
                    case 7:
                      Z.Z.postMaintenanceGp(n).then(function (e) {
                        B(), S(f), C(!1);
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
        return F || Q
          ? (0, j.jsx)(v.Z, {})
          : (0, j.jsxs)("div", {
              children: [
                (0, j.jsx)("h3", {
                  className: "page-title mb-3",
                  children: "Maintenance Group",
                }),
                (0, j.jsx)("div", {
                  className: "mt-3",
                  children: (0, j.jsx)("div", {
                    className: "card",
                    children: (0, j.jsx)("div", {
                      className: "card-body",
                      children: (0, j.jsxs)("div", {
                        className: "row",
                        children: [
                          (0, j.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, j.jsxs)(x.Z.Group, {
                              className: "row",
                              children: [
                                (0, j.jsx)("label", {
                                  className: "col-sm-12",
                                  children: "Item class",
                                }),
                                (0, j.jsx)("div", {
                                  className: "col-sm-12",
                                  children: (0, j.jsx)(x.Z.Control, {
                                    onChange: function (e) {
                                      var n;
                                      N(I[e.target.value]),
                                        k(
                                          null ===
                                            (n = I[e.target.value].item_type) ||
                                            void 0 === n
                                            ? void 0
                                            : n[0]
                                        );
                                    },
                                    className: "form-select",
                                    as: "select",
                                    children: I.map(function (e, n) {
                                      return (0,
                                      j.jsx)("option", { value: n, children: e.item_class.title });
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, j.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, j.jsxs)(x.Z.Group, {
                              className: "row",
                              children: [
                                (0, j.jsx)("label", {
                                  className: "col-sm-12",
                                  children: "item type",
                                }),
                                (0, j.jsx)("div", {
                                  className: "col-sm-12",
                                  children: (0, j.jsx)(x.Z.Control, {
                                    onChange: function (e) {
                                      k(t.item_type[e.target.value]);
                                    },
                                    className: "form-select",
                                    disabled: null === t,
                                    as: "select",
                                    children:
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.item_type.map(function (e, n) {
                                            return (0,
                                            j.jsx)("option", { value: n, children: e.title });
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
                (0, j.jsx)("div", {
                  className: "mt-3",
                  children: (0, j.jsx)("div", {
                    className: "card",
                    children: (0, j.jsxs)("div", {
                      className: "card-body",
                      children: [
                        (0, j.jsx)("h3", {
                          className: "page-title mb-3",
                          children: _
                            ? "Edit Maintenance Group"
                            : "New Maintenance Group",
                        }),
                        (0, j.jsxs)(x.Z.Group, {
                          className: "row",
                          children: [
                            (0, j.jsx)("label", {
                              className: "col-sm-4",
                              style: {
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                              },
                              children: "Service/ Maintenance Name",
                            }),
                            (0, j.jsx)("div", {
                              className: "col-sm-8",
                              children: (0, j.jsx)(x.Z.Control, {
                                onChange: function (e) {
                                  e.persist(),
                                    S(function (n) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, n), {}, { name: e.target.value });
                                    });
                                },
                                className: "form-control",
                                value:
                                  null === A || void 0 === A ? void 0 : A.name,
                              }),
                            }),
                          ],
                        }),
                        (0, j.jsxs)(x.Z.Group, {
                          className: "row",
                          children: [
                            (0, j.jsx)("label", {
                              className: "col-sm-4",
                              style: {
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                              },
                              children: "Enable",
                            }),
                            (0, j.jsx)("div", {
                              className: "col-sm-8",
                              children: (0, j.jsx)("input", {
                                type: "checkbox",
                                checked:
                                  null === A || void 0 === A
                                    ? void 0
                                    : A.enable,
                                onChange: function (e) {
                                  e.persist(),
                                    S(function (n) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, n), {}, { enable: e.target.checked });
                                    });
                                },
                              }),
                            }),
                          ],
                        }),
                        (0, j.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, j.jsx)("div", {
                              className: "col-sm-1",
                              children: (0, j.jsx)("button", {
                                disabled: A === f,
                                className: "btn btn-primary",
                                onClick: R,
                                children: "Accept",
                              }),
                            }),
                            (0, j.jsx)("div", {
                              className: "col-sm-1",
                              children: (0, j.jsx)("button", {
                                className: "btn btn-secondary",
                                onClick: function () {
                                  S(f), C(!1);
                                },
                                children: "Return",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, j.jsx)("div", {
                  className: "mt-3",
                  children: (0, j.jsx)("div", {
                    className: "card",
                    children: (0, j.jsx)("div", {
                      className: "card-body p-3",
                      children: (0, j.jsx)("div", {
                        className: "row",
                        children: (0, j.jsx)("div", {
                          className: "mt-5 table-container",
                          children: (0, j.jsxs)(m.Z, {
                            children: [
                              (0, j.jsx)(l.Z, {
                                children: (0, j.jsxs)(r.Z, {
                                  children: [
                                    (0, j.jsx)(o.Z, {
                                      className: "col-sm-9",
                                      children: "Service/ Maintenance items",
                                    }),
                                    (0, j.jsx)(o.Z, {
                                      className: "col-sm-1",
                                      children: "Enable",
                                    }),
                                    (0, j.jsx)(o.Z, {
                                      className: "col-sm-2",
                                      children: "Edit",
                                    }),
                                  ],
                                }),
                              }),
                              (0, j.jsx)(d.Z, {
                                children:
                                  null === L || void 0 === L
                                    ? void 0
                                    : L.map(function (e) {
                                        return (0, j.jsxs)(
                                          r.Z,
                                          {
                                            children: [
                                              (0, j.jsx)(o.Z, {
                                                className: "col-sm-9",
                                                children: e.name,
                                              }),
                                              (0, j.jsx)(o.Z, {
                                                className: "col-sm-1",
                                                children: (0, j.jsx)("input", {
                                                  type: "checkbox",
                                                  disabled: !0,
                                                  checked: e.enable,
                                                }),
                                              }),
                                              (0, j.jsx)(o.Z, {
                                                className: "col-sm-2",
                                                children: (0, j.jsx)("button", {
                                                  type: "button",
                                                  className: "edit-btn",
                                                  onClick: function () {
                                                    S({
                                                      id: e.id,
                                                      enable: e.enable,
                                                      name: e.name,
                                                    }),
                                                      C(!0);
                                                  },
                                                  children: (0, j.jsx)(p.Z, {}),
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
      var a = t(80184);
      n.Z = function () {
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            width: "20",
            height: "20",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, a.jsx)("path", {
              d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
            }),
          }),
        });
      };
    },
    23821: function (e, n, t) {
      var a = t(39281),
        s = t(79836),
        i = t(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(a.Z, {
            children: (0, i.jsx)(s.Z, { children: n }),
          }),
        });
      };
    },
    93650: function () {},
  },
]);
//# sourceMappingURL=5257.85b21878.chunk.js.map
