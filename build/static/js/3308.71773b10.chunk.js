"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [3308],
  {
    93308: function (e, n, l) {
      l.r(n);
      var a = l(1413),
        i = l(74165),
        t = l(15861),
        r = l(29439),
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
        g = (l(93650), l(65218)),
        Z = l(80184),
        y = {
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
        N = [
          {
            headTitle: "Facility Name",
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
          w,
          b,
          C = (0, c.useState)(y),
          k = (0, r.Z)(C, 2),
          _ = k[0],
          P = k[1],
          I = (0, c.useState)(null),
          T = (0, r.Z)(I, 2),
          G = T[0],
          A = T[1],
          K = JSON.parse(localStorage.getItem("country")) || {},
          z = (0, u.useQuery)(
            ["item-fac-helper"],
            (0, t.Z)(
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
          F = z.data,
          W = z.isLoading,
          S = (0, u.useQuery)(
            ["item-fac-report"],
            (0, t.Z)(
              (0, i.Z)().mark(function e() {
                var n, l, a, t;
                return (0, i.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (l in ((n = { help: !1 }), _))
                          (a = _[l]).length > 0 && "-1" !== a && (n[l] = a);
                        return (e.next = 4), m.Z.getItemFac(n);
                      case 4:
                        return (
                          0 === (t = e.sent).data.length &&
                            g.Am.error(
                              (0, Z.jsx)(s.c, { children: "No data found" })
                            ),
                          e.abrupt("return", t.data)
                        );
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { refetchOnMount: !1, enabled: !1 }
          ),
          L = S.data,
          D = S.isLoading,
          E = S.refetch;
        return W || D
          ? (0, Z.jsx)(h.Z, {})
          : (0, Z.jsxs)("div", {
              children: [
                (0, Z.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, Z.jsx)(s.c, {
                    children: "Item report by facility",
                  }),
                }),
                (0, Z.jsx)("div", {
                  className: "mt-3",
                  children: (0, Z.jsx)("div", {
                    className: "card",
                    children: (0, Z.jsx)("div", {
                      className: "card-body py-3",
                      children: (0, Z.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), E();
                        },
                        children: [
                          (0, Z.jsx)("h4", {
                            children: (0, Z.jsx)(s.c, { children: "Filter" }),
                          }),
                          (0, Z.jsxs)("div", {
                            className: "row mt-5",
                            children: [
                              (0, Z.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, Z.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, Z.jsx)(s.c, {
                                          children: "Facility Name",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, Z.jsx)(d.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        P(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { name: n });
                                        });
                                      },
                                      value: _.name,
                                    }),
                                  ],
                                }),
                              }),
                              (0, Z.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, Z.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, Z.jsx)(s.c, { children: "Code" }),
                                        ":",
                                      ],
                                    }),
                                    (0, Z.jsx)(d.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        P(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { code: n });
                                        });
                                      },
                                      value: _.code,
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, Z.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, Z.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, Z.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, Z.jsx)(s.c, { children: "Levels" }),
                                        ":",
                                      ],
                                    }),
                                    (0, Z.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        P(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { level: n });
                                        });
                                      },
                                      value: _.level,
                                      as: "select",
                                      children: [
                                        (0, Z.jsx)(o.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, Z.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === F || void 0 === F
                                          ? void 0
                                          : F.level.map(function (e) {
                                              return (0,
                                              Z.jsx)("option", { value: e.id, children: "".concat(e.id, " - ").concat(e.name) }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, Z.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, Z.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, Z.jsx)(s.c, { children: "Type" }),
                                        ":",
                                      ],
                                    }),
                                    (0, Z.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        P(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { type: n });
                                        });
                                      },
                                      value: _.type,
                                      as: "select",
                                      children: [
                                        (0, Z.jsx)(o.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, Z.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === F || void 0 === F
                                          ? void 0
                                          : F.type.map(function (e) {
                                              return (0,
                                              Z.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, Z.jsx)("div", {
                            className: "row mt-1",
                            children: (0, Z.jsx)("div", {
                              className: "col-sm-12 col-lg-6",
                              children: (0, Z.jsxs)(d.Z.Group, {
                                className: "row",
                                children: [
                                  (0, Z.jsxs)("label", {
                                    className: "label col-sm-4",
                                    children: [
                                      (0, Z.jsx)(s.c, {
                                        children: "Power source",
                                      }),
                                      ":",
                                    ],
                                  }),
                                  (0, Z.jsxs)(d.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      P(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { power: n });
                                      });
                                    },
                                    value: _.power,
                                    as: "select",
                                    children: [
                                      (0, Z.jsx)(o.W, {
                                        children: function (e, n) {
                                          n.i18n;
                                          return (0, Z.jsx)("option", {
                                            i18n: !0,
                                            value: "-1",
                                            selected: !0,
                                            children: e("Please select"),
                                          });
                                        },
                                      }),
                                      null === F || void 0 === F
                                        ? void 0
                                        : F.power.map(function (e) {
                                            return (0,
                                            Z.jsx)("option", { value: e.id, children: e.name }, e.id);
                                          }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, Z.jsx)("h4", {
                            className: "mt-1",
                            children: (0, Z.jsx)(s.c, {
                              children: "Item Options",
                            }),
                          }),
                          (0, Z.jsxs)("div", {
                            className: "row mt-5",
                            children: [
                              (0, Z.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, Z.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, Z.jsx)(s.c, {
                                          children: "Item class",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, Z.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        P(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { item_class: n, item_type: "-1" });
                                        }),
                                          A(
                                            F.item.find(function (e) {
                                              return e.item_class_id === +n;
                                            })
                                          );
                                      },
                                      value: _.item_class,
                                      as: "select",
                                      children: [
                                        (0, Z.jsx)(o.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, Z.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === F ||
                                        void 0 === F ||
                                        null === (e = F.item) ||
                                        void 0 === e
                                          ? void 0
                                          : e.map(function (e) {
                                              return (0,
                                              Z.jsx)("option", { value: e.item_class_id, children: e.item_class_name }, e.item_class_id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, Z.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, Z.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, Z.jsx)(s.c, {
                                          children: "Items category",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, Z.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      disabled: !G,
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        P(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { item_type: n });
                                        });
                                      },
                                      value: _.item_type,
                                      as: "select",
                                      children: [
                                        (0, Z.jsx)(o.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, Z.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === G || void 0 === G
                                          ? void 0
                                          : G.item_type.map(function (e) {
                                              return (0,
                                              Z.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, Z.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, Z.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, Z.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, Z.jsx)(s.c, {
                                          children: "Physical condition",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, Z.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        P(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { physical: n });
                                        });
                                      },
                                      value: _.physical,
                                      as: "select",
                                      children: [
                                        (0, Z.jsx)(o.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, Z.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === F ||
                                        void 0 === F ||
                                        null === (n = F.physical) ||
                                        void 0 === n
                                          ? void 0
                                          : n.map(function (e) {
                                              return (0,
                                              Z.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, Z.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, Z.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, Z.jsx)(s.c, {
                                          children: "Working conditions",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, Z.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        P(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { working: n });
                                        });
                                      },
                                      value: _.working,
                                      as: "select",
                                      children: [
                                        (0, Z.jsx)(o.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, Z.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === F ||
                                        void 0 === F ||
                                        null === (l = F.working) ||
                                        void 0 === l
                                          ? void 0
                                          : l.map(function (e) {
                                              return (0,
                                              Z.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, Z.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, Z.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, Z.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, Z.jsx)(s.c, {
                                          children: "Financial source",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, Z.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        P(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { financial: n });
                                        });
                                      },
                                      value: _.financial,
                                      as: "select",
                                      children: [
                                        (0, Z.jsx)(o.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, Z.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === F ||
                                        void 0 === F ||
                                        null === (w = F.financial) ||
                                        void 0 === w
                                          ? void 0
                                          : w.map(function (e) {
                                              return (0,
                                              Z.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, Z.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, Z.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, Z.jsx)(s.c, {
                                          children: "Power source",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, Z.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        P(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { item_power: n });
                                        });
                                      },
                                      value: _.item_power,
                                      as: "select",
                                      children: [
                                        (0, Z.jsx)(o.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, Z.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === F ||
                                        void 0 === F ||
                                        null === (b = F.item_power) ||
                                        void 0 === b
                                          ? void 0
                                          : b.map(function (e) {
                                              return (0,
                                              Z.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, Z.jsxs)("div", {
                            className: "row mt-4",
                            children: [
                              (0, Z.jsx)("div", {
                                className: "col-sm-2",
                                children: (0, Z.jsx)("button", {
                                  type: "submit",
                                  className: "btn btn-primary fs-5",
                                  children: (0, Z.jsx)(s.c, {
                                    children: "Reports",
                                  }),
                                }),
                              }),
                              (0, Z.jsx)("div", {
                                className: "col-sm-2 ",
                                children: (0, Z.jsx)("button", {
                                  type: "button",
                                  className: "btn btn-primary fs-5",
                                  onClick: function () {
                                    P(y), window.location.reload();
                                  },
                                  children: (0, Z.jsx)(s.c, {
                                    children: "Clear Filter",
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
                (0, Z.jsx)("div", {
                  className: "mt-3",
                  children: (0, Z.jsx)("div", {
                    className: "card",
                    children: (0, Z.jsxs)("div", {
                      className: "card-body py-3",
                      children: [
                        (0, Z.jsxs)("h4", {
                          children: [
                            (0, Z.jsx)(s.c, { children: "Report" }),
                            ": ",
                            (0, Z.jsx)(s.c, {
                              children: "Item report by facility",
                            }),
                            " (",
                            null === K || void 0 === K ? void 0 : K.country,
                            ")",
                          ],
                        }),
                        (0, Z.jsxs)("h6", {
                          children: [
                            (0, Z.jsx)(s.c, { children: "Filter" }),
                            " : ",
                            "",
                            " ",
                            (function () {
                              var e = "",
                                n = function (n) {
                                  var l = _[n];
                                  if (l.length > 0 && "-1" !== l)
                                    if ("item_class" === n) {
                                      var a = G.item_class_name;
                                      e += "Item class: ".concat(a, ", ");
                                    } else if ("item_type" === n) {
                                      var i,
                                        t = G.item_type.filter(function (e) {
                                          return e.id === parseInt(l);
                                        });
                                      e += "Items category: ".concat(
                                        null === (i = t[0]) || void 0 === i
                                          ? void 0
                                          : i.name,
                                        ", "
                                      );
                                    } else if ("level" === n) {
                                      var r,
                                        c = F.level.filter(function (e) {
                                          return e.id === parseInt(l);
                                        });
                                      e += "Level : ".concat(
                                        null === (r = c[0]) || void 0 === r
                                          ? void 0
                                          : r.name,
                                        ", "
                                      );
                                    } else if ("type" === n) {
                                      var s,
                                        o = F.type.filter(function (e) {
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
                                        d = F.power.filter(function (e) {
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
                                        h = F.physical.filter(function (e) {
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
                                        p = F.financial.filter(function (e) {
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
                                        x = F.working.filter(function (e) {
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
                                        g = F.item_power.filter(function (e) {
                                          return e.id === parseInt(l);
                                        });
                                      e += "Item power : ".concat(
                                        null === (j = g[0]) || void 0 === j
                                          ? void 0
                                          : j.name,
                                        ", "
                                      );
                                    } else
                                      e +=
                                        "name" === n
                                          ? "Facility name: ".concat(l, ", ")
                                          : "code" === n
                                          ? "Code: ".concat(l, ", ")
                                          : "".concat(n, ": ").concat(l, ", ");
                                };
                              for (var l in _) n(l);
                              return e;
                            })(),
                          ],
                        }),
                        (0, Z.jsxs)("h6", {
                          children: [
                            (0, Z.jsx)(s.c, { children: "Date" }),
                            ": ",
                            new Date().toLocaleDateString("en-GB"),
                          ],
                        }),
                        (0, Z.jsx)("div", {
                          className: "mt-3 table-container ",
                          children: (0, Z.jsxs)(v.Z, {
                            stickyHeader: !0,
                            children: [
                              (0, Z.jsx)(p.Z, {
                                children: (0, Z.jsx)(f.Z, {
                                  children: N.map(function (e) {
                                    return (0,
                                    Z.jsx)(x.Z, { children: (0, Z.jsx)(s.c, { children: e.headTitle }) }, e.headTitle);
                                  }),
                                }),
                              }),
                              (0, Z.jsx)(j.Z, {
                                children:
                                  null === L || void 0 === L
                                    ? void 0
                                    : L.map(function (e, n) {
                                        return (0, Z.jsx)(
                                          f.Z,
                                          {
                                            children: N.map(function (n) {
                                              var l;
                                              return (0,
                                              Z.jsx)(x.Z, { children: null !== (l = e[n.group][n.valueKey]) && void 0 !== l ? l : "-" }, n.valueKey);
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
        t = l(54318),
        r = l(39877),
        c = "https://api.invgap.org/reports/",
        s = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, i.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return r.Z.get(c + "excel", {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return r.Z.get(c + "facseg", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return r.Z.get(c + "subfacpop", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return r.Z.get(c + "facmap", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return r.Z.get(c + "gapmap", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return r.Z.get(c + "item-gp", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return r.Z.get(c + "itemfac", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return r.Z.get(c + "gapitem", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return r.Z.get(c + "facprof", {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return r.Z.get(c + "coldprof", {
                    headers: { Authorization: (0, t.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return r.Z.get(c + "planingreport", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return r.Z.get(c + "gapcce", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return r.Z.get(c + "gapccePlan", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return r.Z.post(c + "gapccePlan", e, {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return r.Z.delete(c + "gapccePlan", {
                    headers: { Authorization: (0, t.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return r.Z.put(c + "gapccePlan", e, {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "savegaps",
                value: function (e, n) {
                  return r.Z.post(c + "gapsave?condition=" + e, n, {
                    headers: { Authorization: (0, t.Z)() },
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
        t = l(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(a.Z, {
            children: (0, t.jsx)(i.Z, { children: n }),
          }),
        });
      };
    },
    92854: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=3308.71773b10.chunk.js.map
