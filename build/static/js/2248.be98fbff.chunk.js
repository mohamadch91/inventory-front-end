"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [2248],
  {
    87684: function (e, s, n) {
      var c = n(15671),
        l = n(43144),
        a = n(39877),
        t = n(54318),
        i = "https://jorapi.invgap.org/maintanance/",
        r = (function () {
          function e() {
            (0, c.Z)(this, e);
          }
          return (
            (0, l.Z)(e, [
              {
                key: "getMaintenanceHelper",
                value: function () {
                  return a.Z.get(i + "helper", {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "getMaintenance",
                value: function (e, s) {
                  var n = { item_class: e, item_type: s };
                  return a.Z.get(i, {
                    headers: { Authorization: (0, t.Z)() },
                    params: n,
                  });
                },
              },
              {
                key: "postMaintenance",
                value: function (e) {
                  return a.Z.post(i, e, {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "putMaintenance",
                value: function (e) {
                  return a.Z.put(i, e, {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "getMaintenanceGp",
                value: function (e, s) {
                  var n = { item_class: e, item_type: s };
                  return a.Z.get(i + "gp", {
                    headers: { Authorization: (0, t.Z)() },
                    params: n,
                  });
                },
              },
              {
                key: "postMaintenanceGp",
                value: function (e) {
                  return a.Z.post(i + "gp", e, {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "putMaintenanceGp",
                value: function (e) {
                  return a.Z.put(i + "gp", e, {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "getMaintenanceActive",
                value: function (e, s, n) {
                  var c = { item_class: e, item_type: s, gp: n };
                  return a.Z.get(i + "active", {
                    headers: { Authorization: (0, t.Z)() },
                    params: c,
                  });
                },
              },
              {
                key: "postMaintenanceActive",
                value: function (e) {
                  return a.Z.post(i + "active", e, {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      s.Z = new r();
    },
    12248: function (e, s, n) {
      n.r(s);
      var c = n(1413),
        l = n(74165),
        a = n(15861),
        t = n(29439),
        i = n(56890),
        r = n(35855),
        o = n(53994),
        d = n(53382),
        m = n(72791),
        u = n(23821),
        h = n(91933),
        x = n(59909),
        v = n(95907),
        j = n(16149),
        p = (n(93650), n(2423), n(87684)),
        f = n(30606),
        Z = n(80184),
        N = { name: "", freq: "", freq_in_loc: "", enable: !1, requires: !1 };
      s.default = function () {
        var e = (0, m.useState)(),
          s = (0, t.Z)(e, 2),
          n = s[0],
          y = s[1],
          g = (0, m.useState)(),
          b = (0, t.Z)(g, 2),
          k = b[0],
          w = b[1],
          _ = (0, m.useState)(!1),
          C = (0, t.Z)(_, 2),
          M = C[0],
          q = C[1],
          z = (0, m.useState)(N),
          A = (0, t.Z)(z, 2),
          G = A[0],
          I = A[1],
          S = (0, h.useQuery)(
            ["active-item-classes-with-item-type"],
            (0, a.Z)(
              (0, l.Z)().mark(function e() {
                var s;
                return (0, l.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), p.Z.getMaintenanceHelper();
                      case 2:
                        return (s = e.sent), e.abrupt("return", s.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            {
              onSuccess: function (e) {
                y(e[0]), w(e[0].item_type[0]);
              },
            }
          ),
          E = S.data,
          R = S.isLoading,
          F = (0, h.useQuery)(
            [
              "get-maintenances",
              null === k || void 0 === k ? void 0 : k.id,
              null === n || void 0 === n ? void 0 : n.item_class.id,
            ],
            (0, a.Z)(
              (0, l.Z)().mark(function e() {
                var s;
                return (0, l.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          p.Z.getMaintenance(
                            null === n || void 0 === n
                              ? void 0
                              : n.item_class.id,
                            null === k || void 0 === k ? void 0 : k.id
                          )
                        );
                      case 2:
                        return (s = e.sent), e.abrupt("return", s.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { enabled: !1 }
          ),
          H = F.data,
          L = F.isLoading,
          Q = F.refetch;
        (0, m.useEffect)(
          function () {
            k && n && Q();
          },
          [k]
        );
        var B = (function () {
          var e = (0, a.Z)(
            (0, l.Z)().mark(function e() {
              var s;
              return (0, l.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (s = (0, c.Z)(
                          (0, c.Z)({}, G),
                          {},
                          {
                            item_type:
                              null === k || void 0 === k ? void 0 : k.id,
                            item_class:
                              null === n || void 0 === n
                                ? void 0
                                : n.item_class.id,
                          }
                        )),
                        (e.next = 3),
                        s.id
                      );
                    case 3:
                      if (!e.sent) {
                        e.next = 7;
                        break;
                      }
                      p.Z.putMaintenance(s).then(function (e) {
                        Q();
                      }),
                        (e.next = 8);
                      break;
                    case 7:
                      p.Z.postMaintenance(s).then(function (e) {
                        Q();
                      });
                    case 8:
                      I(N), q(!1);
                    case 10:
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
        return R || L
          ? (0, Z.jsx)(x.Z, {})
          : (0, Z.jsxs)("div", {
              children: [
                (0, Z.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, Z.jsx)(f.c, {
                    children: "Maintenance service",
                  }),
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
                            children: (0, Z.jsxs)(j.Z.Group, {
                              className: "row",
                              children: [
                                (0, Z.jsx)("label", {
                                  className: "col-sm-12",
                                  children: (0, Z.jsx)(f.c, {
                                    children: "Item class",
                                  }),
                                }),
                                (0, Z.jsx)("div", {
                                  className: "col-sm-12",
                                  children: (0, Z.jsx)(j.Z.Control, {
                                    onChange: function (e) {
                                      var s;
                                      console.log(e.target.value),
                                        console.log(E),
                                        y(E[e.target.value]),
                                        w(
                                          null ===
                                            (s = E[e.target.value].item_type) ||
                                            void 0 === s
                                            ? void 0
                                            : s[0]
                                        );
                                    },
                                    className: "form-select",
                                    as: "select",
                                    children: E.map(function (e, s) {
                                      return (0,
                                      Z.jsx)("option", { selected: (null === e || void 0 === e ? void 0 : e.item_class.id) === (null === n || void 0 === n ? void 0 : n.item_class.id), value: s, children: e.item_class.title });
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, Z.jsxs)(j.Z.Group, {
                              className: "row",
                              children: [
                                (0, Z.jsx)("label", {
                                  className: "col-sm-12",
                                  children: (0, Z.jsx)(f.c, {
                                    children: "Items category",
                                  }),
                                }),
                                (0, Z.jsx)("div", {
                                  className: "col-sm-12",
                                  children: (0, Z.jsx)(j.Z.Control, {
                                    onChange: function (e) {
                                      console.log(e.target.value),
                                        console.log(n),
                                        w(n.item_type[e.target.value]);
                                    },
                                    className: "form-select",
                                    disabled: null === n,
                                    as: "select",
                                    children:
                                      null === n || void 0 === n
                                        ? void 0
                                        : n.item_type.map(function (e, s) {
                                            return (0,
                                            Z.jsx)("option", { selected: e.id === k.id, value: s, children: e.title });
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
                          children: M
                            ? (0, Z.jsx)(f.c, {
                                children: "Edit maintenance service",
                              })
                            : (0, Z.jsx)(f.c, {
                                children: "New maintenance service",
                              }),
                        }),
                        (0, Z.jsxs)(j.Z.Group, {
                          className: "row",
                          children: [
                            (0, Z.jsx)("label", {
                              className: "col-sm-4",
                              style: {
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                              },
                              children: (0, Z.jsx)(f.c, {
                                children: "Service maintenance item",
                              }),
                            }),
                            (0, Z.jsx)("div", {
                              className: "col-sm-8",
                              children: (0, Z.jsx)(j.Z.Control, {
                                onChange: function (e) {
                                  e.persist(),
                                    I(function (s) {
                                      return (0,
                                      c.Z)((0, c.Z)({}, s), {}, { name: e.target.value });
                                    });
                                },
                                className: "form-control",
                                value:
                                  null === G || void 0 === G ? void 0 : G.name,
                              }),
                            }),
                          ],
                        }),
                        (0, Z.jsxs)(j.Z.Group, {
                          className: "row",
                          children: [
                            (0, Z.jsx)("label", {
                              className: "col-sm-4",
                              style: {
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                              },
                              children: (0, Z.jsx)(f.c, {
                                children: "Service intervals (days)",
                              }),
                            }),
                            (0, Z.jsx)("div", {
                              className: "col-sm-8",
                              children: (0, Z.jsx)(j.Z.Control, {
                                type: "number",
                                min: "0",
                                onChange: function (e) {
                                  e.persist(),
                                    I(function (s) {
                                      return (0,
                                      c.Z)((0, c.Z)({}, s), {}, { freq: e.target.value });
                                    });
                                },
                                className: "form-control",
                                value:
                                  null === G || void 0 === G ? void 0 : G.freq,
                              }),
                            }),
                          ],
                        }),
                        (0, Z.jsxs)(j.Z.Group, {
                          className: "row",
                          children: [
                            (0, Z.jsx)("label", {
                              className: "col-sm-4",
                              style: {
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                              },
                              children: (0, Z.jsx)(f.c, {
                                children: "Interval for locations",
                              }),
                            }),
                            (0, Z.jsx)("div", {
                              className: "col-sm-8",
                              children: (0, Z.jsx)(j.Z.Control, {
                                type: "number",
                                min: 1,
                                onChange: function (e) {
                                  e.persist(),
                                    I(function (s) {
                                      return (0,
                                      c.Z)((0, c.Z)({}, s), {}, { freq_in_loc: e.target.value });
                                    });
                                },
                                className: "form-control",
                                value:
                                  null === G || void 0 === G
                                    ? void 0
                                    : G.freq_in_loc,
                              }),
                            }),
                          ],
                        }),
                        (0, Z.jsxs)(j.Z.Group, {
                          className: "row",
                          children: [
                            (0, Z.jsx)("label", {
                              className: "col-sm-4",
                              style: {
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                              },
                              children: (0, Z.jsx)(f.c, { children: "Enable" }),
                            }),
                            (0, Z.jsx)("div", {
                              className: "col-sm-8",
                              children: (0, Z.jsx)("div", {
                                class: "form-check form-check-primary mt-3",
                                children: (0, Z.jsxs)("label", {
                                  className: "form-check-label",
                                  children: [
                                    (0, Z.jsx)("input", {
                                      type: "checkbox",
                                      checked:
                                        null === G || void 0 === G
                                          ? void 0
                                          : G.enable,
                                      onChange: function (e) {
                                        e.persist(),
                                          I(function (s) {
                                            return (0,
                                            c.Z)((0, c.Z)({}, s), {}, { enable: e.target.checked });
                                          });
                                      },
                                    }),
                                    (0, Z.jsx)("i", {
                                      className: "input-helper mt-3",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, Z.jsxs)(j.Z.Group, {
                          className: "row",
                          children: [
                            (0, Z.jsx)("label", {
                              className: "col-sm-4",
                              style: {
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                              },
                              children: (0, Z.jsx)(f.c, {
                                children: "Required",
                              }),
                            }),
                            (0, Z.jsx)("div", {
                              className: "col-sm-8",
                              children: (0, Z.jsx)("div", {
                                class: "form-check form-check-primary mt-3",
                                children: (0, Z.jsxs)("label", {
                                  className: "form-check-label",
                                  children: [
                                    (0, Z.jsx)("input", {
                                      type: "checkbox",
                                      checked:
                                        null === G || void 0 === G
                                          ? void 0
                                          : G.requires,
                                      onChange: function (e) {
                                        e.persist(),
                                          I(function (s) {
                                            return (0,
                                            c.Z)((0, c.Z)({}, s), {}, { requires: e.target.checked });
                                          });
                                      },
                                    }),
                                    (0, Z.jsx)("i", {
                                      className: "input-helper mt-3",
                                    }),
                                  ],
                                }),
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
                                disabled: G === N,
                                className: "btn btn-primary",
                                onClick: B,
                                children: (0, Z.jsx)(f.c, {
                                  children: "Accept",
                                }),
                              }),
                            }),
                            (0, Z.jsx)("div", {
                              className: "col-sm-1",
                              children: (0, Z.jsx)("button", {
                                className: "btn btn-secondary",
                                onClick: function () {
                                  I(N), q(!1);
                                },
                                children: (0, Z.jsx)(f.c, {
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
                          children: (0, Z.jsxs)(u.Z, {
                            children: [
                              (0, Z.jsx)(i.Z, {
                                children: (0, Z.jsxs)(r.Z, {
                                  children: [
                                    (0, Z.jsx)(o.Z, {
                                      className: "col-sm-5",
                                      children: (0, Z.jsx)(f.c, {
                                        children: "Service/ Maintenance items",
                                      }),
                                    }),
                                    (0, Z.jsx)(o.Z, {
                                      className: "col-sm-2",
                                      children: (0, Z.jsx)(f.c, {
                                        children: "Service intervals (days)",
                                      }),
                                    }),
                                    (0, Z.jsx)(o.Z, {
                                      className: "col-sm-2",
                                      children: (0, Z.jsx)(f.c, {
                                        children: "Interval for locations",
                                      }),
                                    }),
                                    (0, Z.jsx)(o.Z, {
                                      className: "col-sm-1",
                                      children: (0, Z.jsx)(f.c, {
                                        children: "Enable",
                                      }),
                                    }),
                                    (0, Z.jsx)(o.Z, {
                                      className: "col-sm-1",
                                      children: (0, Z.jsx)(f.c, {
                                        children: "Required",
                                      }),
                                    }),
                                    (0, Z.jsx)(o.Z, {
                                      className: "col-sm-1",
                                      children: (0, Z.jsx)(f.c, {
                                        children: "Edit",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, Z.jsx)(d.Z, {
                                children:
                                  null === H || void 0 === H
                                    ? void 0
                                    : H.map(function (e) {
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
                                                children: (0, Z.jsx)("div", {
                                                  class:
                                                    "form-check form-check-primary mt-3",
                                                  children: (0, Z.jsxs)(
                                                    "label",
                                                    {
                                                      className:
                                                        "form-check-label",
                                                      children: [
                                                        (0, Z.jsx)("input", {
                                                          type: "checkbox",
                                                          disabled: !0,
                                                          checked: e.enable,
                                                        }),
                                                        (0, Z.jsx)("i", {
                                                          className:
                                                            "input-helper mt-3",
                                                        }),
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              }),
                                              (0, Z.jsx)(o.Z, {
                                                className: "col-sm-1",
                                                children: (0, Z.jsx)("div", {
                                                  class:
                                                    "form-check form-check-primary mt-3",
                                                  children: (0, Z.jsxs)(
                                                    "label",
                                                    {
                                                      className:
                                                        "form-check-label",
                                                      children: [
                                                        (0, Z.jsx)("input", {
                                                          type: "checkbox",
                                                          disabled: !0,
                                                          checked: e.requires,
                                                        }),
                                                        (0, Z.jsx)("i", {
                                                          className:
                                                            "input-helper mt-3",
                                                        }),
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              }),
                                              (0, Z.jsx)(o.Z, {
                                                className: "col-sm-2",
                                                children: (0, Z.jsx)("button", {
                                                  type: "button",
                                                  className: "edit-btn",
                                                  onClick: function () {
                                                    I(e), q(!0);
                                                  },
                                                  children: (0, Z.jsx)(v.Z, {}),
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
    95907: function (e, s, n) {
      var c = n(80184);
      s.Z = function () {
        return (0, c.jsx)(c.Fragment, {
          children: (0, c.jsx)("svg", {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            width: "30",
            height: "30",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            "enable-background": "new 0 0 512 512",
            children: (0, c.jsx)("path", {
              d: "m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z",
            }),
          }),
        });
      };
    },
    23821: function (e, s, n) {
      var c = n(39281),
        l = n(79836),
        a = n(80184);
      s.Z = function (e) {
        var s = e.children;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)(c.Z, {
            children: (0, a.jsx)(l.Z, { children: s }),
          }),
        });
      };
    },
    93650: function () {},
  },
]);
//# sourceMappingURL=2248.be98fbff.chunk.js.map
