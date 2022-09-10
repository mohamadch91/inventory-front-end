"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [3308],
  {
    93308: function (e, a, l) {
      l.r(a);
      var n = l(1413),
        c = l(74165),
        t = l(15861),
        s = l(29439),
        i = l(72791),
        r = l(30606),
        o = l(91933),
        u = l(16149),
        d = l(51763),
        m = (l(92854), l(59909)),
        h = l(23821),
        p = l(56890),
        v = l(35855),
        f = l(53994),
        x = l(53382),
        j = (l(93650), l(80184)),
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
          { headTitle: "Item type", group: "item", valueKey: "item_type" },
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
      a.default = function () {
        var e,
          a,
          l,
          y,
          N,
          b = (0, i.useState)(g),
          w = (0, s.Z)(b, 2),
          C = w[0],
          k = w[1],
          _ = (0, i.useState)(null),
          P = (0, s.Z)(_, 2),
          T = P[0],
          G = P[1],
          K = JSON.parse(localStorage.getItem("country")) || {},
          z = (0, o.useQuery)(
            ["item-fac-helper"],
            (0, t.Z)(
              (0, c.Z)().mark(function e() {
                var a;
                return (0, c.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), d.Z.getItemFac({ help: !0 });
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
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
          I = (0, o.useQuery)(
            ["item-fac-report"],
            (0, t.Z)(
              (0, c.Z)().mark(function e() {
                var a, l, n, t;
                return (0, c.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (l in ((a = { help: !1 }), C))
                          (n = C[l]).length > 0 && "-1" !== n && (a[l] = n);
                        return (e.next = 4), d.Z.getItemFac(a);
                      case 4:
                        return (t = e.sent), e.abrupt("return", t.data);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { refetchOnMount: !1, enabled: !1 }
          ),
          S = I.data,
          E = I.isLoading,
          L = I.refetch;
        return F || E
          ? (0, j.jsx)(m.Z, {})
          : (0, j.jsxs)("div", {
              children: [
                (0, j.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, j.jsx)(r.c, {
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
                          e.preventDefault(), L();
                        },
                        children: [
                          (0, j.jsx)("h4", {
                            children: (0, j.jsx)(r.c, { children: "Filters" }),
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
                                      children: (0, j.jsx)(r.c, {
                                        children: "Facility name:",
                                      }),
                                    }),
                                    (0, j.jsx)(u.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var a = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { name: a });
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
                                      children: (0, j.jsx)(r.c, {
                                        children: "Code:",
                                      }),
                                    }),
                                    (0, j.jsx)(u.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var a = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { code: a });
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
                                      children: (0, j.jsx)(r.c, {
                                        children: "Level:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var a = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { level: a });
                                        });
                                      },
                                      value: C.level,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === A || void 0 === A
                                          ? void 0
                                          : A.level.map(function (e) {
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
                                      children: (0, j.jsx)(r.c, {
                                        children: "Type:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var a = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { type: a });
                                        });
                                      },
                                      value: C.type,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === A || void 0 === A
                                          ? void 0
                                          : A.type.map(function (e) {
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
                                    children: (0, j.jsx)(r.c, {
                                      children: "Power source:",
                                    }),
                                  }),
                                  (0, j.jsxs)(u.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var a = e.target.value;
                                      k(function (e) {
                                        return (0,
                                        n.Z)((0, n.Z)({}, e), {}, { power: a });
                                      });
                                    },
                                    value: C.power,
                                    as: "select",
                                    children: [
                                      (0, j.jsx)("option", {
                                        value: "-1",
                                        selected: !0,
                                        disabled: !0,
                                        children: "Please select",
                                      }),
                                      null === A || void 0 === A
                                        ? void 0
                                        : A.power.map(function (e) {
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
                            children: (0, j.jsx)(r.c, {
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
                                      children: (0, j.jsx)(r.c, {
                                        children: "Item class:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var a = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { item_class: a, item_type: "-1" });
                                        }),
                                          G(
                                            A.item.find(function (e) {
                                              return e.item_class_id === +a;
                                            })
                                          );
                                      },
                                      value: C.item_class,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === A ||
                                        void 0 === A ||
                                        null === (e = A.item) ||
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
                                      children: (0, j.jsx)(r.c, {
                                        children: "Item type:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      disabled: !T,
                                      onChange: function (e) {
                                        var a = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { item_type: a });
                                        });
                                      },
                                      value: C.item_type,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === T || void 0 === T
                                          ? void 0
                                          : T.item_type.map(function (e) {
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
                                      children: (0, j.jsx)(r.c, {
                                        children: "Physical condition:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var a = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { physical: a });
                                        });
                                      },
                                      value: C.physical,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === A ||
                                        void 0 === A ||
                                        null === (a = A.physical) ||
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
                              (0, j.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(r.c, {
                                        children: "Working condition:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var a = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { working: a });
                                        });
                                      },
                                      value: C.working,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === A ||
                                        void 0 === A ||
                                        null === (l = A.working) ||
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
                                      children: (0, j.jsx)(r.c, {
                                        children: "Financial source:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var a = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { financial: a });
                                        });
                                      },
                                      value: C.financial,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === A ||
                                        void 0 === A ||
                                        null === (y = A.financial) ||
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
                                      children: (0, j.jsx)(r.c, {
                                        children: "Power source:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var a = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { item_power: a });
                                        });
                                      },
                                      value: C.item_power,
                                      as: "select",
                                      children: [
                                        (0, j.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === A ||
                                        void 0 === A ||
                                        null === (N = A.item_power) ||
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
                          children: (0, j.jsxs)(r.c, {
                            children: [
                              "Report Number: Item Report By Facility (",
                              null === K || void 0 === K ? void 0 : K.country,
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
                                a = function (a) {
                                  var l = C[a];
                                  if (l.length > 0 && "-1" !== l)
                                    if ("item_class" === a) {
                                      var n = T.item_class_name;
                                      e += "".concat(a, ": ").concat(n, ", ");
                                    } else if ("item_type" === a) {
                                      var c,
                                        t = T.item_type.filter(function (e) {
                                          return e.id === parseInt(l);
                                        });
                                      e += ""
                                        .concat(a, ": ")
                                        .concat(
                                          null === (c = t[0]) || void 0 === c
                                            ? void 0
                                            : c.name,
                                          ", "
                                        );
                                    } else
                                      e +=
                                        "level" === a
                                          ? ""
                                              .concat(a, ": ")
                                              .concat(A.level[l], ", ")
                                          : "type" === a
                                          ? ""
                                              .concat(a, ": ")
                                              .concat(A.type[l], ", ")
                                          : "power" === a
                                          ? ""
                                              .concat(a, ": ")
                                              .concat(A.power[l], ", ")
                                          : "physical" === a
                                          ? ""
                                              .concat(a, ": ")
                                              .concat(A.physical[l], ", ")
                                          : "financial" === a
                                          ? ""
                                              .concat(a, ": ")
                                              .concat(A.financial[l], ", ")
                                          : "working" === a
                                          ? ""
                                              .concat(a, ": ")
                                              .concat(A.working[l], ", ")
                                          : "item_power" === a
                                          ? ""
                                              .concat(a, ": ")
                                              .concat(A.item_power[l], ", ")
                                          : "".concat(a, ": ").concat(l, ", ");
                                };
                              for (var l in C) a(l);
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
                              (0, j.jsx)(p.Z, {
                                children: (0, j.jsx)(v.Z, {
                                  children: Z.map(function (e) {
                                    return (0,
                                    j.jsx)(f.Z, { children: (0, j.jsx)(r.c, { children: e.headTitle }) }, e.headTitle);
                                  }),
                                }),
                              }),
                              (0, j.jsx)(x.Z, {
                                children:
                                  null === S || void 0 === S
                                    ? void 0
                                    : S.map(function (e, a) {
                                        return (0, j.jsx)(
                                          v.Z,
                                          {
                                            children: Z.map(function (a) {
                                              var l;
                                              return (0,
                                              j.jsx)(f.Z, { children: null !== (l = e[a.group][a.valueKey]) && void 0 !== l ? l : "-" }, a.valueKey);
                                            }),
                                          },
                                          a
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
    51763: function (e, a, l) {
      var n = l(15671),
        c = l(43144),
        t = l(54318),
        s = l(39877),
        i = "http://127.0.0.1:8000/reports/",
        r = (function () {
          function e() {
            (0, n.Z)(this, e);
          }
          return (
            (0, c.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return s.Z.get(i + "excel", {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return s.Z.get(i + "facseg", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return s.Z.get(i + "subfacpop", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return s.Z.get(i + "facmap", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return s.Z.get(i + "gapmap", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return s.Z.get(i + "item-gp", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return s.Z.get(i + "itemfac", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return s.Z.get(i + "gapitem", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return s.Z.get(i + "facprof", {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return s.Z.get(i + "coldprof", {
                    headers: { Authorization: (0, t.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return s.Z.get(i + "planingreport", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return s.Z.get(i + "gapcce", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return s.Z.get(i + "gapccePlan", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return s.Z.post(i + "gapccePlan", e, {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return s.Z.delete(i + "gapccePlan", {
                    headers: { Authorization: (0, t.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return s.Z.put(i + "gapccePlan", e, {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      a.Z = new r();
    },
    23821: function (e, a, l) {
      var n = l(39281),
        c = l(79836),
        t = l(80184);
      a.Z = function (e) {
        var a = e.children;
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(n.Z, {
            children: (0, t.jsx)(c.Z, { children: a }),
          }),
        });
      };
    },
    92854: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=3308.46710050.chunk.js.map
