"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [2248],
  {
    87684: function (e, n, s) {
      var t = s(15671),
        a = s(43144),
        c = s(39877),
        l = s(54318),
        i = "http://127.0.0.1:8000/maintanance/",
        r = (function () {
          function e() {
            (0, t.Z)(this, e);
          }
          return (
            (0, a.Z)(e, [
              {
                key: "getMaintenanceHelper",
                value: function () {
                  return c.Z.get(i + "helper", {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getMaintenance",
                value: function (e, n) {
                  var s = { item_class: e, item_type: n };
                  return c.Z.get(i, {
                    headers: { Authorization: (0, l.Z)() },
                    params: s,
                  });
                },
              },
              {
                key: "postMaintenance",
                value: function (e) {
                  return c.Z.post(i, e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "putMaintenance",
                value: function (e) {
                  return c.Z.put(i, e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getMaintenanceGp",
                value: function (e, n) {
                  var s = { item_class: e, item_type: n };
                  return c.Z.get(i + "gp", {
                    headers: { Authorization: (0, l.Z)() },
                    params: s,
                  });
                },
              },
              {
                key: "postMaintenanceGp",
                value: function (e) {
                  return c.Z.post(i + "gp", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "putMaintenanceGp",
                value: function (e) {
                  return c.Z.put(i + "gp", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getMaintenanceActive",
                value: function (e, n, s) {
                  var t = { item_class: e, item_type: n, gp: s };
                  return c.Z.get(i + "active", {
                    headers: { Authorization: (0, l.Z)() },
                    params: t,
                  });
                },
              },
              {
                key: "postMaintenanceActive",
                value: function (e) {
                  return c.Z.post(i + "active", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new r();
    },
    12248: function (e, n, s) {
      s.r(n);
      var t = s(1413),
        a = s(74165),
        c = s(15861),
        l = s(29439),
        i = s(56890),
        r = s(35855),
        o = s(53994),
        d = s(53382),
        u = s(72791),
        m = s(23821),
        h = s(91933),
        v = s(59909),
        x = s(95907),
        p = s(16149),
        j = (s(93650), s(2423), s(87684)),
        Z = s(80184),
        f = { name: "", freq: "", freq_in_loc: "", enable: !1, requires: !1 };
      n.default = function () {
        var e = (0, u.useState)(),
          n = (0, l.Z)(e, 2),
          s = n[0],
          N = n[1],
          y = (0, u.useState)(),
          g = (0, l.Z)(y, 2),
          b = g[0],
          k = g[1],
          w = (0, u.useState)(!1),
          _ = (0, l.Z)(w, 2),
          C = _[0],
          M = _[1],
          q = (0, u.useState)(f),
          z = (0, l.Z)(q, 2),
          A = z[0],
          S = z[1],
          G = (0, h.useQuery)(
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
                N(e[0]), k(e[0].item_type[0]);
              },
            }
          ),
          I = G.data,
          E = G.isLoading,
          R = (0, h.useQuery)(
            [
              "get-maintenances",
              null === b || void 0 === b ? void 0 : b.id,
              null === s || void 0 === s ? void 0 : s.item_class.id,
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
                          j.Z.getMaintenance(
                            null === s || void 0 === s
                              ? void 0
                              : s.item_class.id,
                            null === b || void 0 === b ? void 0 : b.id
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
          F = R.data,
          H = R.isLoading,
          L = R.refetch;
        (0, u.useEffect)(
          function () {
            b && s && L();
          },
          [b]
        );
        var Q = (function () {
          var e = (0, c.Z)(
            (0, a.Z)().mark(function e() {
              var n;
              return (0, a.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = (0, t.Z)(
                          (0, t.Z)({}, A),
                          {},
                          {
                            item_type:
                              null === b || void 0 === b ? void 0 : b.id,
                            item_class:
                              null === s || void 0 === s
                                ? void 0
                                : s.item_class.id,
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
                      (e.t0 = j.Z.putMaintenance(n)), (e.next = 8);
                      break;
                    case 7:
                      e.t0 = j.Z.postMaintenance(n);
                    case 8:
                      e.t0, L(), S(f), M(!1);
                    case 12:
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
        return E || H
          ? (0, Z.jsx)(v.Z, {})
          : (0, Z.jsxs)("div", {
              children: [
                (0, Z.jsx)("h3", {
                  className: "page-title mb-3",
                  children: "Maintenance Service",
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
                            className: "col-sm-12 col-lg-6",
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
                                      var n;
                                      console.log(),
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
                                      Z.jsx)("option", { value: n, children: e.item_class.title });
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
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
                                      k(s.item_type[e.target.value]);
                                    },
                                    className: "form-select",
                                    disabled: null === s,
                                    as: "select",
                                    children:
                                      null === s || void 0 === s
                                        ? void 0
                                        : s.item_type.map(function (e, n) {
                                            return (0,
                                            Z.jsx)("option", { value: n, children: e.title });
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
                      className: "card-body",
                      children: [
                        (0, Z.jsx)("h3", {
                          className: "page-title mb-3",
                          children: C
                            ? "Edit Maintenance Service"
                            : "New Maintenance Service",
                        }),
                        (0, Z.jsxs)(p.Z.Group, {
                          className: "row",
                          children: [
                            (0, Z.jsx)("label", {
                              className: "col-sm-4",
                              style: {
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                              },
                              children: "Service/ Maintenance items",
                            }),
                            (0, Z.jsx)("div", {
                              className: "col-sm-8",
                              children: (0, Z.jsx)(p.Z.Control, {
                                onChange: function (e) {
                                  e.persist(),
                                    S(function (n) {
                                      return (0,
                                      t.Z)((0, t.Z)({}, n), {}, { name: e.target.value });
                                    });
                                },
                                className: "form-control",
                                value:
                                  null === A || void 0 === A ? void 0 : A.name,
                              }),
                            }),
                          ],
                        }),
                        (0, Z.jsxs)(p.Z.Group, {
                          className: "row",
                          children: [
                            (0, Z.jsx)("label", {
                              className: "col-sm-4",
                              style: {
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                              },
                              children: "Service Interval (day)",
                            }),
                            (0, Z.jsx)("div", {
                              className: "col-sm-8",
                              children: (0, Z.jsx)(p.Z.Control, {
                                type: "number",
                                min: "0",
                                onChange: function (e) {
                                  e.persist(),
                                    S(function (n) {
                                      return (0,
                                      t.Z)((0, t.Z)({}, n), {}, { freq: e.target.value });
                                    });
                                },
                                className: "form-control",
                                value:
                                  null === A || void 0 === A ? void 0 : A.freq,
                              }),
                            }),
                          ],
                        }),
                        (0, Z.jsxs)(p.Z.Group, {
                          className: "row",
                          children: [
                            (0, Z.jsx)("label", {
                              className: "col-sm-4",
                              style: {
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                              },
                              children: "Interval per location",
                            }),
                            (0, Z.jsx)("div", {
                              className: "col-sm-8",
                              children: (0, Z.jsx)(p.Z.Control, {
                                type: "number",
                                min: 1,
                                onChange: function (e) {
                                  e.persist(),
                                    S(function (n) {
                                      return (0,
                                      t.Z)((0, t.Z)({}, n), {}, { freq_in_loc: e.target.value });
                                    });
                                },
                                className: "form-control",
                                value:
                                  null === A || void 0 === A
                                    ? void 0
                                    : A.freq_in_loc,
                              }),
                            }),
                          ],
                        }),
                        (0, Z.jsxs)(p.Z.Group, {
                          className: "row",
                          children: [
                            (0, Z.jsx)("label", {
                              className: "col-sm-4",
                              style: {
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                              },
                              children: "Enable",
                            }),
                            (0, Z.jsx)("div", {
                              className: "col-sm-8",
                              children: (0, Z.jsx)("input", {
                                type: "checkbox",
                                checked:
                                  null === A || void 0 === A
                                    ? void 0
                                    : A.enable,
                                onChange: function (e) {
                                  e.persist(),
                                    S(function (n) {
                                      return (0,
                                      t.Z)((0, t.Z)({}, n), {}, { enable: e.target.checked });
                                    });
                                },
                              }),
                            }),
                          ],
                        }),
                        (0, Z.jsxs)(p.Z.Group, {
                          className: "row",
                          children: [
                            (0, Z.jsx)("label", {
                              className: "col-sm-4",
                              style: {
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                              },
                              children: "Required",
                            }),
                            (0, Z.jsx)("div", {
                              className: "col-sm-8",
                              children: (0, Z.jsx)("input", {
                                type: "checkbox",
                                checked:
                                  null === A || void 0 === A
                                    ? void 0
                                    : A.requires,
                                onChange: function (e) {
                                  e.persist(),
                                    S(function (n) {
                                      return (0,
                                      t.Z)((0, t.Z)({}, n), {}, { requires: e.target.checked });
                                    });
                                },
                              }),
                            }),
                          ],
                        }),
                        (0, Z.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, Z.jsx)("div", {
                              className: "col-sm-1",
                              children: (0, Z.jsx)("button", {
                                disabled: A === f,
                                className: "btn btn-primary",
                                onClick: Q,
                                children: "Accept",
                              }),
                            }),
                            (0, Z.jsx)("div", {
                              className: "col-sm-1",
                              children: (0, Z.jsx)("button", {
                                className: "btn btn-secondary",
                                onClick: function () {
                                  S(f), M(!1);
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
                (0, Z.jsx)("div", {
                  className: "mt-3",
                  children: (0, Z.jsx)("div", {
                    className: "card",
                    children: (0, Z.jsx)("div", {
                      className: "card-body p-3",
                      children: (0, Z.jsx)("div", {
                        className: "row",
                        children: (0, Z.jsx)("div", {
                          className: "mt-5 table-container",
                          children: (0, Z.jsxs)(m.Z, {
                            children: [
                              (0, Z.jsx)(i.Z, {
                                children: (0, Z.jsxs)(r.Z, {
                                  children: [
                                    (0, Z.jsx)(o.Z, {
                                      className: "col-sm-5",
                                      children: "Service/ Maintenance items",
                                    }),
                                    (0, Z.jsx)(o.Z, {
                                      className: "col-sm-2",
                                      children: "Service Interval (day)",
                                    }),
                                    (0, Z.jsx)(o.Z, {
                                      className: "col-sm-2",
                                      children: "Interval per location",
                                    }),
                                    (0, Z.jsx)(o.Z, {
                                      className: "col-sm-1",
                                      children: "Enable",
                                    }),
                                    (0, Z.jsx)(o.Z, {
                                      className: "col-sm-1",
                                      children: "Required",
                                    }),
                                    (0, Z.jsx)(o.Z, {
                                      className: "col-sm-1",
                                      children: "Edit",
                                    }),
                                  ],
                                }),
                              }),
                              (0, Z.jsx)(d.Z, {
                                children:
                                  null === F || void 0 === F
                                    ? void 0
                                    : F.map(function (e) {
                                        return (0, Z.jsxs)(
                                          r.Z,
                                          {
                                            children: [
                                              (0, Z.jsx)(o.Z, {
                                                className: "col-sm-5",
                                                children: e.name,
                                              }),
                                              (0, Z.jsx)(o.Z, {
                                                className: "col-sm-2",
                                                children: e.freq,
                                              }),
                                              (0, Z.jsx)(o.Z, {
                                                className: "col-sm-2",
                                                children: e.freq_in_loc,
                                              }),
                                              (0, Z.jsx)(o.Z, {
                                                className: "col-sm-1",
                                                children: (0, Z.jsx)("input", {
                                                  type: "checkbox",
                                                  disabled: !0,
                                                  checked: e.enable,
                                                }),
                                              }),
                                              (0, Z.jsx)(o.Z, {
                                                className: "col-sm-1",
                                                children: (0, Z.jsx)("input", {
                                                  type: "checkbox",
                                                  disabled: !0,
                                                  checked: e.requires,
                                                }),
                                              }),
                                              (0, Z.jsx)(o.Z, {
                                                className: "col-sm-2",
                                                children: (0, Z.jsx)("button", {
                                                  type: "button",
                                                  className: "edit-btn",
                                                  onClick: function () {
                                                    S(e), M(!0);
                                                  },
                                                  children: (0, Z.jsx)(x.Z, {}),
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
    95907: function (e, n, s) {
      var t = s(80184);
      n.Z = function () {
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            width: "20",
            height: "20",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, t.jsx)("path", {
              d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
            }),
          }),
        });
      };
    },
    23821: function (e, n, s) {
      var t = s(39281),
        a = s(79836),
        c = s(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, c.jsx)(c.Fragment, {
          children: (0, c.jsx)(t.Z, {
            children: (0, c.jsx)(a.Z, { children: n }),
          }),
        });
      };
    },
    93650: function () {},
  },
]);
//# sourceMappingURL=2248.7ce78792.chunk.js.map
