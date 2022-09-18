"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [3308],
  {
    93308: function (e, l, a) {
      a.r(l);
      var n = a(1413),
        t = a(74165),
        i = a(15861),
        r = a(29439),
        c = a(72791),
        s = a(30606),
        o = a(91933),
        u = a(16149),
        d = a(51763),
        m = (a(92854), a(59909)),
        h = a(23821),
        v = a(56890),
        p = a(35855),
        f = a(53994),
        x = a(53382),
        j = (a(93650), a(80184)),
        g = {
          name: "",
          code: "",
          level: "-1",
          type: "-1",
          power: "-1",
          item_class: "-1",
          item_type: "-1",
          physical: "-1",
          financial: "-1",
          working: "-1",
          item_power: "-1",
        },
        Z = [
          {
            headTitle: "Facility name",
            group: "facility",
            valueKey: "fac_name",
          },
          {
            headTitle: "Parent facility",
            group: "facility",
            valueKey: "fac_parent",
          },
          { headTitle: "Level", group: "facility", valueKey: "fac_level" },
          { headTitle: "Type", group: "facility", valueKey: "fac_type" },
          { headTitle: "Item class", group: "item", valueKey: "item_class" },
          { headTitle: "Item Category", group: "item", valueKey: "item_type" },
          { headTitle: "Item code", group: "item", valueKey: "code" },
          { headTitle: "PQS", group: "item", valueKey: "pqs" },
          { headTitle: "Model", group: "item", valueKey: "model" },
          { headTitle: "Manufacturer", group: "item", valueKey: "manufac" },
          { headTitle: "Capacity", group: "item", valueKey: "capacity" },
          { headTitle: "Year installed", group: "item", valueKey: "year" },
          { headTitle: "Power source", group: "item", valueKey: "power" },
          { headTitle: "Financial", group: "item", valueKey: "financial" },
          { headTitle: "Physical", group: "item", valueKey: "physical" },
          {
            headTitle: "Working condition",
            group: "item",
            valueKey: "working",
          },
        ];
      l.default = function () {
        var e,
          l,
          a,
          y,
          N,
          w = (0, c.useState)(g),
          b = (0, r.Z)(w, 2),
          C = b[0],
          k = b[1],
          _ = (0, c.useState)(null),
          P = (0, r.Z)(_, 2),
          I = P[0],
          T = P[1],
          G = JSON.parse(localStorage.getItem("country")) || {},
          K = (0, o.useQuery)(
            ["item-fac-helper"],
            (0, i.Z)(
              (0, t.Z)().mark(function e() {
                var l;
                return (0, t.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), d.Z.getItemFac({ help: !0 });
                      case 2:
                        return (l = e.sent), e.abrupt("return", l.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )
          ),
          F = K.data,
          z = K.isLoading,
          A = (0, o.useQuery)(
            ["item-fac-report"],
            (0, i.Z)(
              (0, t.Z)().mark(function e() {
                var l, a, n, i;
                return (0, t.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (a in ((l = { help: !1 }), C))
                          (n = C[a]).length > 0 && "-1" !== n && (l[a] = n);
                        return (e.next = 4), d.Z.getItemFac(l);
                      case 4:
                        return (i = e.sent), e.abrupt("return", i.data);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { refetchOnMount: !1, enabled: !1 }
          ),
          S = A.data,
          L = A.isLoading,
          E = A.refetch;
        return z || L
          ? (0, j.jsx)(m.Z, {})
          : (0, j.jsxs)("div", {
              children: [
                (0, j.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, j.jsx)(s.c, {
                    children: "Item Report By Facility",
                  }),
                }),
                (0, j.jsx)("div", {
                  className: "mt-3",
                  children: (0, j.jsx)("div", {
                    className: "card",
                    children: (0, j.jsx)("div", {
                      className: "card-body py-3",
                      children: (0, j.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), E();
                        },
                        children: [
                          (0, j.jsx)("h4", {
                            children: (0, j.jsx)(s.c, { children: "Filters" }),
                          }),
                          (0, j.jsxs)("div", {
                            className: "row mt-5",
                            children: [
                              (0, j.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(s.c, {
                                        children: "Facility name:",
                                      }),
                                    }),
                                    (0, j.jsx)(u.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { name: l });
                                        });
                                      },
                                      value: C.name,
                                    }),
                                  ],
                                }),
                              }),
                              (0, j.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(s.c, {
                                        children: "Code:",
                                      }),
                                    }),
                                    (0, j.jsx)(u.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { code: l });
                                        });
                                      },
                                      value: C.code,
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, j.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, j.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(s.c, {
                                        children: "Level:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { level: l });
                                        });
                                      },
                                      value: C.level,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          children: "Please select",
                                        }),
                                        null === F || void 0 === F
                                          ? void 0
                                          : F.level.map(function (e) {
                                              return (0,
                                              j.jsx)("option", { value: e.id, children: "".concat(e.id, " - ").concat(e.name) }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, j.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(s.c, {
                                        children: "Type:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { type: l });
                                        });
                                      },
                                      value: C.type,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          children: "Please select",
                                        }),
                                        null === F || void 0 === F
                                          ? void 0
                                          : F.type.map(function (e) {
                                              return (0,
                                              j.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, j.jsx)("div", {
                            className: "row mt-1",
                            children: (0, j.jsx)("div", {
                              className: "col-sm-12 col-lg-6",
                              children: (0, j.jsxs)(u.Z.Group, {
                                className: "row",
                                children: [
                                  (0, j.jsx)("label", {
                                    className: "label col-sm-4",
                                    children: (0, j.jsx)(s.c, {
                                      children: "Power source:",
                                    }),
                                  }),
                                  (0, j.jsxs)(u.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var l = e.target.value;
                                      k(function (e) {
                                        return (0,
                                        n.Z)((0, n.Z)({}, e), {}, { power: l });
                                      });
                                    },
                                    value: C.power,
                                    as: "select",
                                    children: [
                                      (0, j.jsx)("option", {
                                        value: "-1",
                                        selected: !0,
                                        children: "Please select",
                                      }),
                                      null === F || void 0 === F
                                        ? void 0
                                        : F.power.map(function (e) {
                                            return (0,
                                            j.jsx)("option", { value: e.id, children: e.name }, e.id);
                                          }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, j.jsx)("h4", {
                            className: "mt-1",
                            children: (0, j.jsx)(s.c, {
                              children: "Item Options",
                            }),
                          }),
                          (0, j.jsxs)("div", {
                            className: "row mt-5",
                            children: [
                              (0, j.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(s.c, {
                                        children: "Item class:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { item_class: l, item_type: "-1" });
                                        }),
                                          T(
                                            F.item.find(function (e) {
                                              return e.item_class_id === +l;
                                            })
                                          );
                                      },
                                      value: C.item_class,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          children: "Please select",
                                        }),
                                        null === F ||
                                        void 0 === F ||
                                        null === (e = F.item) ||
                                        void 0 === e
                                          ? void 0
                                          : e.map(function (e) {
                                              return (0,
                                              j.jsx)("option", { value: e.item_class_id, children: e.item_class_name }, e.item_class_id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, j.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(s.c, {
                                        children: "Item Category:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      disabled: !I,
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { item_type: l });
                                        });
                                      },
                                      value: C.item_type,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          children: "Please select",
                                        }),
                                        null === I || void 0 === I
                                          ? void 0
                                          : I.item_type.map(function (e) {
                                              return (0,
                                              j.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, j.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, j.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(s.c, {
                                        children: "Physical condition:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { physical: l });
                                        });
                                      },
                                      value: C.physical,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          children: "Please select",
                                        }),
                                        null === F ||
                                        void 0 === F ||
                                        null === (l = F.physical) ||
                                        void 0 === l
                                          ? void 0
                                          : l.map(function (e) {
                                              return (0,
                                              j.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, j.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(s.c, {
                                        children: "Working condition:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { working: l });
                                        });
                                      },
                                      value: C.working,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          children: "Please select",
                                        }),
                                        null === F ||
                                        void 0 === F ||
                                        null === (a = F.working) ||
                                        void 0 === a
                                          ? void 0
                                          : a.map(function (e) {
                                              return (0,
                                              j.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, j.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, j.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(s.c, {
                                        children: "Financial source:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { financial: l });
                                        });
                                      },
                                      value: C.financial,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          children: "Please select",
                                        }),
                                        null === F ||
                                        void 0 === F ||
                                        null === (y = F.financial) ||
                                        void 0 === y
                                          ? void 0
                                          : y.map(function (e) {
                                              return (0,
                                              j.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, j.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(s.c, {
                                        children: "Power source:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { item_power: l });
                                        });
                                      },
                                      value: C.item_power,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          children: "Please select",
                                        }),
                                        null === F ||
                                        void 0 === F ||
                                        null === (N = F.item_power) ||
                                        void 0 === N
                                          ? void 0
                                          : N.map(function (e) {
                                              return (0,
                                              j.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, j.jsxs)("div", {
                            className: "row mt-4",
                            children: [
                              (0, j.jsx)("div", {
                                className: "col-sm-1",
                                children: (0, j.jsx)("button", {
                                  type: "submit",
                                  className: "btn btn-primary",
                                  children: "Reports",
                                }),
                              }),
                              (0, j.jsx)("div", {
                                className: "col-sm-1",
                                children: (0, j.jsx)("button", {
                                  type: "button",
                                  className: "btn btn-secondary",
                                  onClick: function () {
                                    return k(g);
                                  },
                                  children: "Clear",
                                }),
                              }),
                            ],
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
                      className: "card-body py-3",
                      children: [
                        (0, j.jsx)("h4", {
                          children: (0, j.jsxs)(s.c, {
                            children: [
                              "Report Number: Item Report By Facility (",
                              null === G || void 0 === G ? void 0 : G.country,
                              ")",
                            ],
                          }),
                        }),
                        (0, j.jsxs)("h6", {
                          children: [
                            "Filters : ",
                            "",
                            " ",
                            (function () {
                              var e = "",
                                l = function (l) {
                                  var a = C[l];
                                  if (a.length > 0 && "-1" !== a)
                                    if ("item_class" === l) {
                                      var n = I.item_class_name;
                                      e += "".concat(l, ": ").concat(n, ", ");
                                    } else if ("item_type" === l) {
                                      var t,
                                        i = I.item_type.filter(function (e) {
                                          return e.id === parseInt(a);
                                        });
                                      e += ""
                                        .concat(l, ": ")
                                        .concat(
                                          null === (t = i[0]) || void 0 === t
                                            ? void 0
                                            : t.name,
                                          ", "
                                        );
                                    } else if ("level" === l) {
                                      var r,
                                        c = F.level.filter(function (e) {
                                          return e.id === parseInt(a);
                                        });
                                      e += "Level : ".concat(
                                        null === (r = c[0]) || void 0 === r
                                          ? void 0
                                          : r.name,
                                        ", "
                                      );
                                    } else if ("type" === l) {
                                      var s,
                                        o = F.type.filter(function (e) {
                                          return e.id === parseInt(a);
                                        });
                                      e += "Type : ".concat(
                                        null === (s = o[0]) || void 0 === s
                                          ? void 0
                                          : s.name,
                                        ", "
                                      );
                                    } else if ("power" === l) {
                                      var u,
                                        d = F.power.filter(function (e) {
                                          return e.id === parseInt(a);
                                        });
                                      e += "Power source: ".concat(
                                        null === (u = d[0]) || void 0 === u
                                          ? void 0
                                          : u.name,
                                        ", "
                                      );
                                    } else if ("physical" === l) {
                                      var m,
                                        h = F.physical.filter(function (e) {
                                          return e.id === parseInt(a);
                                        });
                                      e += "Physical condition : ".concat(
                                        null === (m = h[0]) || void 0 === m
                                          ? void 0
                                          : m.name,
                                        ", "
                                      );
                                    } else if ("financial" === l) {
                                      var v,
                                        p = F.financial.filter(function (e) {
                                          return e.id === parseInt(a);
                                        });
                                      e += "Financial : ".concat(
                                        null === (v = p[0]) || void 0 === v
                                          ? void 0
                                          : v.name,
                                        ", "
                                      );
                                    } else if ("working" === l) {
                                      var f,
                                        x = F.working.filter(function (e) {
                                          return e.id === parseInt(a);
                                        });
                                      e += "Working condition : ".concat(
                                        null === (f = x[0]) || void 0 === f
                                          ? void 0
                                          : f.name,
                                        ", "
                                      );
                                    } else if ("item_power" === l) {
                                      var j,
                                        g = F.item_power.filter(function (e) {
                                          return e.id === parseInt(a);
                                        });
                                      e += "Item power : ".concat(
                                        null === (j = g[0]) || void 0 === j
                                          ? void 0
                                          : j.name,
                                        ", "
                                      );
                                    } else
                                      e += "".concat(l, ": ").concat(a, ", ");
                                };
                              for (var a in C) l(a);
                              return e;
                            })(),
                          ],
                        }),
                        (0, j.jsxs)("h6", {
                          children: [
                            "Date: ",
                            new Date().toISOString().split("T")[0],
                          ],
                        }),
                        (0, j.jsx)("div", {
                          className: "mt-3 table-container ",
                          children: (0, j.jsxs)(h.Z, {
                            stickyHeader: !0,
                            children: [
                              (0, j.jsx)(v.Z, {
                                children: (0, j.jsx)(p.Z, {
                                  children: Z.map(function (e) {
                                    return (0,
                                    j.jsx)(f.Z, { children: (0, j.jsx)(s.c, { children: e.headTitle }) }, e.headTitle);
                                  }),
                                }),
                              }),
                              (0, j.jsx)(x.Z, {
                                children:
                                  null === S || void 0 === S
                                    ? void 0
                                    : S.map(function (e, l) {
                                        return (0, j.jsx)(
                                          p.Z,
                                          {
                                            children: Z.map(function (l) {
                                              var a;
                                              return (0,
                                              j.jsx)(f.Z, { children: null !== (a = e[l.group][l.valueKey]) && void 0 !== a ? a : "-" }, l.valueKey);
                                            }),
                                          },
                                          l
                                        );
                                      }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            });
      };
    },
    51763: function (e, l, a) {
      var n = a(15671),
        t = a(43144),
        i = a(54318),
        r = a(39877),
        c = "https://inventory.runflare.run/reports/",
        s = (function () {
          function e() {
            (0, n.Z)(this, e);
          }
          return (
            (0, t.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return r.Z.get(c + "excel", {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return r.Z.get(c + "facseg", {
                    headers: { Authorization: (0, i.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return r.Z.get(c + "subfacpop", {
                    headers: { Authorization: (0, i.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return r.Z.get(c + "facmap", {
                    headers: { Authorization: (0, i.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return r.Z.get(c + "gapmap", {
                    headers: { Authorization: (0, i.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return r.Z.get(c + "item-gp", {
                    headers: { Authorization: (0, i.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return r.Z.get(c + "itemfac", {
                    headers: { Authorization: (0, i.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return r.Z.get(c + "gapitem", {
                    headers: { Authorization: (0, i.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return r.Z.get(c + "facprof", {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return r.Z.get(c + "coldprof", {
                    headers: { Authorization: (0, i.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return r.Z.get(c + "planingreport", {
                    headers: { Authorization: (0, i.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return r.Z.get(c + "gapcce", {
                    headers: { Authorization: (0, i.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return r.Z.get(c + "gapccePlan", {
                    headers: { Authorization: (0, i.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return r.Z.post(c + "gapccePlan", e, {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return r.Z.delete(c + "gapccePlan", {
                    headers: { Authorization: (0, i.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return r.Z.put(c + "gapccePlan", e, {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      l.Z = new s();
    },
    23821: function (e, l, a) {
      var n = a(39281),
        t = a(79836),
        i = a(80184);
      l.Z = function (e) {
        var l = e.children;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(n.Z, {
            children: (0, i.jsx)(t.Z, { children: l }),
          }),
        });
      };
    },
    92854: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=3308.c70b7229.chunk.js.map
