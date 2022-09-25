"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [3308],
  {
    93308: function (e, n, l) {
      l.r(n);
      var a = l(1413),
        i = l(74165),
        r = l(15861),
        t = l(29439),
        c = l(72791),
        s = l(30606),
        o = l(12902),
        u = l(91933),
        d = l(16149),
        m = l(51763),
        h = (l(92854), l(59909)),
        v = l(23821),
        p = l(56890),
        f = l(35855),
        x = l(53994),
        j = l(53382),
        g = (l(93650), l(80184)),
        Z = {
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
        y = [
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
          { headTitle: "Levels", group: "facility", valueKey: "fac_level" },
          { headTitle: "Type", group: "facility", valueKey: "fac_type" },
          { headTitle: "Item class", group: "item", valueKey: "item_class" },
          { headTitle: "Items category", group: "item", valueKey: "item_type" },
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
      n.default = function () {
        var e,
          n,
          l,
          N,
          w,
          b = (0, c.useState)(Z),
          C = (0, t.Z)(b, 2),
          k = C[0],
          _ = C[1],
          P = (0, c.useState)(null),
          I = (0, t.Z)(P, 2),
          T = I[0],
          G = I[1],
          K = JSON.parse(localStorage.getItem("country")) || {},
          z = (0, u.useQuery)(
            ["item-fac-helper"],
            (0, r.Z)(
              (0, i.Z)().mark(function e() {
                var n;
                return (0, i.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), m.Z.getItemFac({ help: !0 });
                      case 2:
                        return (n = e.sent), e.abrupt("return", n.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )
          ),
          A = z.data,
          F = z.isLoading,
          W = (0, u.useQuery)(
            ["item-fac-report"],
            (0, r.Z)(
              (0, i.Z)().mark(function e() {
                var n, l, a, r;
                return (0, i.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (l in ((n = { help: !1 }), k))
                          (a = k[l]).length > 0 && "-1" !== a && (n[l] = a);
                        return (e.next = 4), m.Z.getItemFac(n);
                      case 4:
                        return (r = e.sent), e.abrupt("return", r.data);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { refetchOnMount: !1, enabled: !1 }
          ),
          S = W.data,
          L = W.isLoading,
          E = W.refetch;
        return F || L
          ? (0, g.jsx)(h.Z, {})
          : (0, g.jsxs)("div", {
              children: [
                (0, g.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, g.jsx)(s.c, {
                    children: "Item report by facility",
                  }),
                }),
                (0, g.jsx)("div", {
                  className: "mt-3",
                  children: (0, g.jsx)("div", {
                    className: "card",
                    children: (0, g.jsx)("div", {
                      className: "card-body py-3",
                      children: (0, g.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), E();
                        },
                        children: [
                          (0, g.jsx)("h4", {
                            children: (0, g.jsx)(s.c, { children: "Filters" }),
                          }),
                          (0, g.jsxs)("div", {
                            className: "row mt-5",
                            children: [
                              (0, g.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, g.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, g.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, g.jsx)(s.c, {
                                        children: "Facility name:",
                                      }),
                                    }),
                                    (0, g.jsx)(d.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { name: n });
                                        });
                                      },
                                      value: k.name,
                                    }),
                                  ],
                                }),
                              }),
                              (0, g.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, g.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, g.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, g.jsx)(s.c, { children: "Code" }),
                                        ":",
                                      ],
                                    }),
                                    (0, g.jsx)(d.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { code: n });
                                        });
                                      },
                                      value: k.code,
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, g.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, g.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, g.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, g.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, g.jsx)(s.c, { children: "Levels" }),
                                        ":",
                                      ],
                                    }),
                                    (0, g.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { level: n });
                                        });
                                      },
                                      value: k.level,
                                      as: "select",
                                      children: [
                                        (0, g.jsx)(o.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, g.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === A || void 0 === A
                                          ? void 0
                                          : A.level.map(function (e) {
                                              return (0,
                                              g.jsx)("option", { value: e.id, children: "".concat(e.id, " - ").concat(e.name) }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, g.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, g.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, g.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, g.jsx)(s.c, { children: "Type" }),
                                        ":",
                                      ],
                                    }),
                                    (0, g.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { type: n });
                                        });
                                      },
                                      value: k.type,
                                      as: "select",
                                      children: [
                                        (0, g.jsx)(o.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, g.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === A || void 0 === A
                                          ? void 0
                                          : A.type.map(function (e) {
                                              return (0,
                                              g.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, g.jsx)("div", {
                            className: "row mt-1",
                            children: (0, g.jsx)("div", {
                              className: "col-sm-12 col-lg-6",
                              children: (0, g.jsxs)(d.Z.Group, {
                                className: "row",
                                children: [
                                  (0, g.jsxs)("label", {
                                    className: "label col-sm-4",
                                    children: [
                                      (0, g.jsx)(s.c, {
                                        children: "Power source",
                                      }),
                                      ":",
                                    ],
                                  }),
                                  (0, g.jsxs)(d.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      _(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { power: n });
                                      });
                                    },
                                    value: k.power,
                                    as: "select",
                                    children: [
                                      (0, g.jsx)(o.W, {
                                        children: function (e, n) {
                                          n.i18n;
                                          return (0, g.jsx)("option", {
                                            i18n: !0,
                                            value: "-1",
                                            selected: !0,
                                            children: e("Please select"),
                                          });
                                        },
                                      }),
                                      null === A || void 0 === A
                                        ? void 0
                                        : A.power.map(function (e) {
                                            return (0,
                                            g.jsx)("option", { value: e.id, children: e.name }, e.id);
                                          }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, g.jsx)("h4", {
                            className: "mt-1",
                            children: (0, g.jsx)(s.c, {
                              children: "Item Options",
                            }),
                          }),
                          (0, g.jsxs)("div", {
                            className: "row mt-5",
                            children: [
                              (0, g.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, g.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, g.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, g.jsx)(s.c, {
                                          children: "Item class",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, g.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { item_class: n, item_type: "-1" });
                                        }),
                                          G(
                                            A.item.find(function (e) {
                                              return e.item_class_id === +n;
                                            })
                                          );
                                      },
                                      value: k.item_class,
                                      as: "select",
                                      children: [
                                        (0, g.jsx)(o.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, g.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === A ||
                                        void 0 === A ||
                                        null === (e = A.item) ||
                                        void 0 === e
                                          ? void 0
                                          : e.map(function (e) {
                                              return (0,
                                              g.jsx)("option", { value: e.item_class_id, children: e.item_class_name }, e.item_class_id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, g.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, g.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, g.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, g.jsx)(s.c, {
                                          children: "Items category",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, g.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      disabled: !T,
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { item_type: n });
                                        });
                                      },
                                      value: k.item_type,
                                      as: "select",
                                      children: [
                                        (0, g.jsx)(o.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, g.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === T || void 0 === T
                                          ? void 0
                                          : T.item_type.map(function (e) {
                                              return (0,
                                              g.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, g.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, g.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, g.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, g.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, g.jsx)(s.c, {
                                          children: "Physical condition",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, g.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { physical: n });
                                        });
                                      },
                                      value: k.physical,
                                      as: "select",
                                      children: [
                                        (0, g.jsx)(o.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, g.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === A ||
                                        void 0 === A ||
                                        null === (n = A.physical) ||
                                        void 0 === n
                                          ? void 0
                                          : n.map(function (e) {
                                              return (0,
                                              g.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, g.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, g.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, g.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, g.jsx)(s.c, {
                                          children: "Working condition",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, g.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { working: n });
                                        });
                                      },
                                      value: k.working,
                                      as: "select",
                                      children: [
                                        (0, g.jsx)(o.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, g.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === A ||
                                        void 0 === A ||
                                        null === (l = A.working) ||
                                        void 0 === l
                                          ? void 0
                                          : l.map(function (e) {
                                              return (0,
                                              g.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, g.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, g.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, g.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, g.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, g.jsx)(s.c, {
                                          children: "Financial source",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, g.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { financial: n });
                                        });
                                      },
                                      value: k.financial,
                                      as: "select",
                                      children: [
                                        (0, g.jsx)(o.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, g.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === A ||
                                        void 0 === A ||
                                        null === (N = A.financial) ||
                                        void 0 === N
                                          ? void 0
                                          : N.map(function (e) {
                                              return (0,
                                              g.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, g.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, g.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, g.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, g.jsx)(s.c, {
                                        children: "Power source:",
                                      }),
                                    }),
                                    (0, g.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { item_power: n });
                                        });
                                      },
                                      value: k.item_power,
                                      as: "select",
                                      children: [
                                        (0, g.jsx)(o.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, g.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === A ||
                                        void 0 === A ||
                                        null === (w = A.item_power) ||
                                        void 0 === w
                                          ? void 0
                                          : w.map(function (e) {
                                              return (0,
                                              g.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, g.jsxs)("div", {
                            className: "row mt-4",
                            children: [
                              (0, g.jsx)("div", {
                                className: "col-sm-1",
                                children: (0, g.jsx)("button", {
                                  type: "submit",
                                  className: "btn btn-primary",
                                  children: (0, g.jsx)(s.c, {
                                    children: "Reports",
                                  }),
                                }),
                              }),
                              (0, g.jsx)("div", {
                                className: "col-sm-1",
                                children: (0, g.jsx)("button", {
                                  type: "button",
                                  className: "btn btn-secondary",
                                  onClick: function () {
                                    return _(Z);
                                  },
                                  children: (0, g.jsx)(s.c, {
                                    children: "Clear",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                (0, g.jsx)("div", {
                  className: "mt-3",
                  children: (0, g.jsx)("div", {
                    className: "card",
                    children: (0, g.jsxs)("div", {
                      className: "card-body py-3",
                      children: [
                        (0, g.jsxs)("h4", {
                          children: [
                            (0, g.jsx)(s.c, { children: "Report" }),
                            ": ",
                            (0, g.jsx)(s.c, {
                              children: "Item report by facility",
                            }),
                            " (",
                            null === K || void 0 === K ? void 0 : K.country,
                            ")",
                          ],
                        }),
                        (0, g.jsxs)("h6", {
                          children: [
                            (0, g.jsx)(s.c, { children: "Filters" }),
                            " : ",
                            "",
                            " ",
                            (function () {
                              var e = "",
                                n = function (n) {
                                  var l = k[n];
                                  if (l.length > 0 && "-1" !== l)
                                    if ("item_class" === n) {
                                      var a = T.item_class_name;
                                      e += "".concat(n, ": ").concat(a, ", ");
                                    } else if ("item_type" === n) {
                                      var i,
                                        r = T.item_type.filter(function (e) {
                                          return e.id === parseInt(l);
                                        });
                                      e += ""
                                        .concat(n, ": ")
                                        .concat(
                                          null === (i = r[0]) || void 0 === i
                                            ? void 0
                                            : i.name,
                                          ", "
                                        );
                                    } else if ("level" === n) {
                                      var t,
                                        c = A.level.filter(function (e) {
                                          return e.id === parseInt(l);
                                        });
                                      e += "Level : ".concat(
                                        null === (t = c[0]) || void 0 === t
                                          ? void 0
                                          : t.name,
                                        ", "
                                      );
                                    } else if ("type" === n) {
                                      var s,
                                        o = A.type.filter(function (e) {
                                          return e.id === parseInt(l);
                                        });
                                      e += "Type : ".concat(
                                        null === (s = o[0]) || void 0 === s
                                          ? void 0
                                          : s.name,
                                        ", "
                                      );
                                    } else if ("power" === n) {
                                      var u,
                                        d = A.power.filter(function (e) {
                                          return e.id === parseInt(l);
                                        });
                                      e += "Power source: ".concat(
                                        null === (u = d[0]) || void 0 === u
                                          ? void 0
                                          : u.name,
                                        ", "
                                      );
                                    } else if ("physical" === n) {
                                      var m,
                                        h = A.physical.filter(function (e) {
                                          return e.id === parseInt(l);
                                        });
                                      e += "Physical condition : ".concat(
                                        null === (m = h[0]) || void 0 === m
                                          ? void 0
                                          : m.name,
                                        ", "
                                      );
                                    } else if ("financial" === n) {
                                      var v,
                                        p = A.financial.filter(function (e) {
                                          return e.id === parseInt(l);
                                        });
                                      e += "Financial : ".concat(
                                        null === (v = p[0]) || void 0 === v
                                          ? void 0
                                          : v.name,
                                        ", "
                                      );
                                    } else if ("working" === n) {
                                      var f,
                                        x = A.working.filter(function (e) {
                                          return e.id === parseInt(l);
                                        });
                                      e += "Working condition : ".concat(
                                        null === (f = x[0]) || void 0 === f
                                          ? void 0
                                          : f.name,
                                        ", "
                                      );
                                    } else if ("item_power" === n) {
                                      var j,
                                        g = A.item_power.filter(function (e) {
                                          return e.id === parseInt(l);
                                        });
                                      e += "Item power : ".concat(
                                        null === (j = g[0]) || void 0 === j
                                          ? void 0
                                          : j.name,
                                        ", "
                                      );
                                    } else
                                      e += "".concat(n, ": ").concat(l, ", ");
                                };
                              for (var l in k) n(l);
                              return e;
                            })(),
                          ],
                        }),
                        (0, g.jsxs)("h6", {
                          children: [
                            (0, g.jsx)(s.c, { children: "Date" }),
                            ": ",
                            new Date().toISOString().split("T")[0],
                          ],
                        }),
                        (0, g.jsx)("div", {
                          className: "mt-3 table-container ",
                          children: (0, g.jsxs)(v.Z, {
                            stickyHeader: !0,
                            children: [
                              (0, g.jsx)(p.Z, {
                                children: (0, g.jsx)(f.Z, {
                                  children: y.map(function (e) {
                                    return (0,
                                    g.jsx)(x.Z, { children: (0, g.jsx)(s.c, { children: e.headTitle }) }, e.headTitle);
                                  }),
                                }),
                              }),
                              (0, g.jsx)(j.Z, {
                                children:
                                  null === S || void 0 === S
                                    ? void 0
                                    : S.map(function (e, n) {
                                        return (0, g.jsx)(
                                          f.Z,
                                          {
                                            children: y.map(function (n) {
                                              var l;
                                              return (0,
                                              g.jsx)(x.Z, { children: null !== (l = e[n.group][n.valueKey]) && void 0 !== l ? l : "-" }, n.valueKey);
                                            }),
                                          },
                                          n
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
    51763: function (e, n, l) {
      var a = l(15671),
        i = l(43144),
        r = l(54318),
        t = l(39877),
        c = "http://127.0.0.1:8000/reports/",
        s = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, i.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return t.Z.get(c + "excel", {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return t.Z.get(c + "facseg", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return t.Z.get(c + "subfacpop", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return t.Z.get(c + "facmap", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return t.Z.get(c + "gapmap", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return t.Z.get(c + "item-gp", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return t.Z.get(c + "itemfac", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return t.Z.get(c + "gapitem", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return t.Z.get(c + "facprof", {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return t.Z.get(c + "coldprof", {
                    headers: { Authorization: (0, r.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return t.Z.get(c + "planingreport", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return t.Z.get(c + "gapcce", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return t.Z.get(c + "gapccePlan", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return t.Z.post(c + "gapccePlan", e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return t.Z.delete(c + "gapccePlan", {
                    headers: { Authorization: (0, r.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return t.Z.put(c + "gapccePlan", e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new s();
    },
    23821: function (e, n, l) {
      var a = l(39281),
        i = l(79836),
        r = l(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(a.Z, {
            children: (0, r.jsx)(i.Z, { children: n }),
          }),
        });
      };
    },
    12902: function (e, n, l) {
      l.d(n, {
        W: function () {
          return c;
        },
      });
      var a = l(29439),
        i = l(45987),
        r = l(22020),
        t = ["ns", "children"];
      function c(e) {
        var n = e.ns,
          l = e.children,
          c = (0, i.Z)(e, t),
          s = (0, r.$)(n, c),
          o = (0, a.Z)(s, 3),
          u = o[0],
          d = o[1],
          m = o[2];
        return l(u, { i18n: d, lng: d.language }, m);
      }
    },
    92854: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=3308.46a0a53c.chunk.js.map
