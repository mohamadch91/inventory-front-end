"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [1195],
  {
    91195: function (e, l, n) {
      n.r(l);
      var a = n(1413),
        s = n(74165),
        c = n(15861),
        r = n(29439),
        t = n(72791),
        i = n(30606),
        o = n(91933),
        d = n(16149),
        u = n(51763),
        m = (n(92854), n(59909)),
        h = n(23821),
        v = n(56890),
        p = n(35855),
        f = n(53994),
        x = n(53382),
        j = (n(93650), n(80184)),
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
          manufacturer: "-1",
          pqs: "",
          year_from: "-1",
          year_to: "-1",
          capacity_from: "",
          capacity_to: "",
        };
      l.default = function () {
        var e,
          l,
          n,
          g,
          N,
          y,
          b = (0, t.useState)(Z),
          w = (0, r.Z)(b, 2),
          C = w[0],
          _ = w[1],
          P = (0, t.useState)(null),
          k = (0, r.Z)(P, 2),
          G = k[0],
          I = k[1],
          A = (0, o.useQuery)(
            ["item-gp-helper"],
            (0, c.Z)(
              (0, s.Z)().mark(function e() {
                var l;
                return (0, s.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), u.Z.getItemGp({ help: !0 });
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
          z = A.data,
          F = A.isLoading,
          S = (0, o.useQuery)(
            ["item-gp-report"],
            (0, c.Z)(
              (0, s.Z)().mark(function e() {
                var l, n, a, c;
                return (0, s.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (n in ((l = { help: !1 }), C))
                          (a = C[n]).length > 0 && "-1" !== a && (l[n] = a);
                        return (e.next = 4), u.Z.getItemGp(l);
                      case 4:
                        return (c = e.sent), e.abrupt("return", c.data);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { refetchOnMount: !1, enabled: !1 }
          ),
          D = S.data,
          E = S.isLoading,
          M = S.refetch;
        if (F || E) return (0, j.jsx)(m.Z, {});
        var L = JSON.parse(localStorage.getItem("country")) || {};
        return (0, j.jsxs)("div", {
          children: [
            (0, j.jsx)("h3", {
              className: "page-title mb-3",
              children: (0, j.jsx)(i.c, { children: "Item Grouped Report" }),
            }),
            (0, j.jsx)("div", {
              className: "mt-3",
              children: (0, j.jsx)("div", {
                className: "card",
                children: (0, j.jsx)("div", {
                  className: "card-body py-3",
                  children: (0, j.jsxs)("form", {
                    onSubmit: function (e) {
                      e.preventDefault(), M();
                    },
                    children: [
                      (0, j.jsx)("h4", {
                        children: (0, j.jsx)(i.c, { children: "Filters" }),
                      }),
                      (0, j.jsxs)("div", {
                        className: "row mt-5",
                        children: [
                          (0, j.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, j.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, j.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, j.jsx)(i.c, {
                                    children: "Facility name:",
                                  }),
                                }),
                                (0, j.jsx)(d.Z.Control, {
                                  className: "form-control col-sm-8",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { name: l });
                                    });
                                  },
                                  value: C.name,
                                }),
                              ],
                            }),
                          }),
                          (0, j.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, j.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, j.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, j.jsx)(i.c, {
                                    children: "Code:",
                                  }),
                                }),
                                (0, j.jsx)(d.Z.Control, {
                                  className: "form-control col-sm-8",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { code: l });
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
                            children: (0, j.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, j.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, j.jsx)(i.c, {
                                    children: "Level:",
                                  }),
                                }),
                                (0, j.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { level: l });
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
                                    null === z || void 0 === z
                                      ? void 0
                                      : z.level.map(function (e) {
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
                            children: (0, j.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, j.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, j.jsx)(i.c, {
                                    children: "Type:",
                                  }),
                                }),
                                (0, j.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { type: l });
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
                                    null === z || void 0 === z
                                      ? void 0
                                      : z.type.map(function (e) {
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
                          children: (0, j.jsxs)(d.Z.Group, {
                            className: "row",
                            children: [
                              (0, j.jsx)("label", {
                                className: "label col-sm-4",
                                children: (0, j.jsx)(i.c, {
                                  children: "Power source:",
                                }),
                              }),
                              (0, j.jsxs)(d.Z.Control, {
                                className: "form-select col-sm-8",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  _(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { power: l });
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
                                  null === z || void 0 === z
                                    ? void 0
                                    : z.power.map(function (e) {
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
                        children: (0, j.jsx)(i.c, { children: "Item Options" }),
                      }),
                      (0, j.jsxs)("div", {
                        className: "row mt-5",
                        children: [
                          (0, j.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, j.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, j.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, j.jsx)(i.c, {
                                    children: "Item class:",
                                  }),
                                }),
                                (0, j.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { item_class: l, item_type: "-1", manufacturer: "-1" });
                                    }),
                                      I(
                                        z.item.find(function (e) {
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
                                      disabled: !0,
                                      children: "Please select",
                                    }),
                                    null === z ||
                                    void 0 === z ||
                                    null === (e = z.item) ||
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
                            children: (0, j.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, j.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, j.jsx)(i.c, {
                                    children: "Item type:",
                                  }),
                                }),
                                (0, j.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  disabled: !G,
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { item_type: l });
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
                                    null === G || void 0 === G
                                      ? void 0
                                      : G.item_type.map(function (e) {
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
                            children: (0, j.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, j.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, j.jsx)(i.c, {
                                    children: "Physical condition:",
                                  }),
                                }),
                                (0, j.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { physical: l });
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
                                    null === z ||
                                    void 0 === z ||
                                    null === (l = z.physical) ||
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
                            children: (0, j.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, j.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, j.jsx)(i.c, {
                                    children: "Working condition:",
                                  }),
                                }),
                                (0, j.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { working: l });
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
                                    null === z ||
                                    void 0 === z ||
                                    null === (n = z.working) ||
                                    void 0 === n
                                      ? void 0
                                      : n.map(function (e) {
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
                            children: (0, j.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, j.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, j.jsx)(i.c, {
                                    children: "Financial source:",
                                  }),
                                }),
                                (0, j.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { financial: l });
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
                                    null === z ||
                                    void 0 === z ||
                                    null === (g = z.financial) ||
                                    void 0 === g
                                      ? void 0
                                      : g.map(function (e) {
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
                            children: (0, j.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, j.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, j.jsx)(i.c, {
                                    children: "Energy source for Cold chain:",
                                  }),
                                }),
                                (0, j.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { item_power: l });
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
                                    null === z ||
                                    void 0 === z ||
                                    null === (N = z.item_power) ||
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
                        className: "row mt-1",
                        children: [
                          (0, j.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, j.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, j.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, j.jsx)(i.c, {
                                    children: "PQS/PIS Code:",
                                  }),
                                }),
                                (0, j.jsx)(d.Z.Control, {
                                  className: "form-control col-sm-8",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { pqs: l });
                                    });
                                  },
                                  value: C.pqs,
                                }),
                              ],
                            }),
                          }),
                          (0, j.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, j.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, j.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, j.jsx)(i.c, {
                                    children: "Manufacturer:",
                                  }),
                                }),
                                (0, j.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  disabled: !G,
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { manufacturer: l });
                                    });
                                  },
                                  value: C.manufacturer,
                                  as: "select",
                                  children: [
                                    (0, j.jsx)("option", {
                                      value: "-1",
                                      selected: !0,
                                      disabled: !0,
                                      children: "Please select",
                                    }),
                                    null === G ||
                                    void 0 === G ||
                                    null === (y = G.manufacturer) ||
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
                        ],
                      }),
                      (0, j.jsxs)("div", {
                        className: "row mt-1",
                        children: [
                          (0, j.jsx)("div", {
                            className: "col-sm-6",
                            children: (0, j.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, j.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, j.jsx)(i.c, {
                                    children: "Year installed:",
                                  }),
                                }),
                                (0, j.jsx)("label", {
                                  className: "label col-sm-2",
                                  children: (0, j.jsx)(i.c, {
                                    children: "from:",
                                  }),
                                }),
                                (0, j.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-2",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { year_from: l });
                                    });
                                  },
                                  value: C.year_from,
                                  as: "select",
                                  children: [
                                    (0, j.jsx)("option", {
                                      value: "-1",
                                      selected: !0,
                                      disabled: !0,
                                      children: "Please select",
                                    }),
                                    Array.from({ length: 30 }).map(function (
                                      e,
                                      l
                                    ) {
                                      var n = new Date().getUTCFullYear() - l;
                                      return (0, j.jsx)(
                                        "option",
                                        { value: n, children: n },
                                        n
                                      );
                                    }),
                                  ],
                                }),
                                (0, j.jsx)("label", {
                                  className: "label col-sm-2",
                                  children: (0, j.jsx)(i.c, {
                                    children: "to:",
                                  }),
                                }),
                                (0, j.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-2",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { year_to: l });
                                    });
                                  },
                                  value: C.year_to,
                                  as: "select",
                                  children: [
                                    (0, j.jsx)("option", {
                                      value: "-1",
                                      selected: !0,
                                      disabled: !0,
                                      children: "Please select",
                                    }),
                                    Array.from({ length: 30 }).map(function (
                                      e,
                                      l
                                    ) {
                                      var n = new Date().getUTCFullYear() - l;
                                      return (0, j.jsx)(
                                        "option",
                                        { value: n, children: n },
                                        n
                                      );
                                    }),
                                  ],
                                }),
                                "Year to can not be lower than from",
                              ],
                            }),
                          }),
                          (0, j.jsx)("div", {
                            className: "col-sm-6",
                            children: (0, j.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, j.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, j.jsx)(i.c, {
                                    children: "Capacity:",
                                  }),
                                }),
                                (0, j.jsx)("label", {
                                  className: "label col-sm-2",
                                  children: (0, j.jsx)(i.c, {
                                    children: "from:",
                                  }),
                                }),
                                (0, j.jsx)(d.Z.Control, {
                                  className: "form-control col-sm-2",
                                  type: "number",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { capacity_from: l });
                                    });
                                  },
                                  value: C.capacity_from,
                                }),
                                (0, j.jsx)("label", {
                                  className: "label col-sm-2",
                                  children: (0, j.jsx)(i.c, {
                                    children: "to:",
                                  }),
                                }),
                                (0, j.jsx)(d.Z.Control, {
                                  className: "form-control col-sm-2",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { capacity_to: l });
                                    });
                                  },
                                  value: C.capacity_to,
                                  as: "select",
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
                                return _(Z);
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
                      children: (0, j.jsxs)(i.c, {
                        children: [
                          "Report Number: Item Grouped Report (",
                          null === L || void 0 === L ? void 0 : L.country,
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
                              var n = C[l];
                              if ((console.log(z), n.length > 0 && "-1" !== n))
                                if ("level" === l)
                                  e += "Level = ".concat(n, "- ").concat(
                                    z.level.find(function (e) {
                                      return e.id === parseInt(n);
                                    }).name,
                                    " "
                                  );
                                else if ("type" === l)
                                  e += "".concat(l, "= ").concat(
                                    z.type.find(function (e) {
                                      return e.id === parseInt(n);
                                    }).name,
                                    " "
                                  );
                                else if ("power" === l)
                                  e += "Power source = ".concat(
                                    z.power.find(function (e) {
                                      return e.id === parseInt(n);
                                    }).name,
                                    " "
                                  );
                                else if ("item_class" === l) {
                                  var a = G.item_class_name;
                                  e += "".concat(l, ": ").concat(a, ", ");
                                } else if ("item_type" === l) {
                                  var s,
                                    c = G.item_type.filter(function (e) {
                                      return e.id === parseInt(n);
                                    });
                                  console.log(c),
                                    (e += ""
                                      .concat(l, ": ")
                                      .concat(
                                        null === (s = c[0]) || void 0 === s
                                          ? void 0
                                          : s.name,
                                        ", "
                                      ));
                                } else if ("physical" === l)
                                  e += "".concat(l, "= ").concat(
                                    z.physical.find(function (e) {
                                      return e.id === parseInt(n);
                                    }).name,
                                    " "
                                  );
                                else if ("financial" === l)
                                  e += "".concat(l, "= ").concat(
                                    z.financial.find(function (e) {
                                      return e.id === parseInt(n);
                                    }).name,
                                    " "
                                  );
                                else if ("working" === l)
                                  e += "".concat(l, "= ").concat(
                                    z.working.find(function (e) {
                                      return e.id === parseInt(n);
                                    }).name,
                                    " "
                                  );
                                else if ("item_power" === l)
                                  e += "Item Power source = ".concat(
                                    z.item_power.find(function (e) {
                                      return e.id === parseInt(n);
                                    }).name,
                                    " "
                                  );
                                else if ("manufacturer" === l) {
                                  var r,
                                    t = G.manufacturer.filter(function (e) {
                                      return e.id === parseInt(n);
                                    });
                                  e += ""
                                    .concat(l, ": ")
                                    .concat(
                                      null === (r = t[0]) || void 0 === r
                                        ? void 0
                                        : r.name,
                                      ", "
                                    );
                                } else e += "".concat(l, "=").concat(n, "&");
                            };
                          for (var n in C) l(n);
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
                      className: "mt-3 table-container",
                      children: (0, j.jsxs)(h.Z, {
                        children: [
                          (0, j.jsx)(v.Z, {
                            children: (0, j.jsxs)(p.Z, {
                              children: [
                                (0, j.jsx)(f.Z, {
                                  className: "col-sm-2",
                                  children: (0, j.jsx)(i.c, {
                                    children: "Type",
                                  }),
                                }),
                                (0, j.jsx)(f.Z, {
                                  className: "col-sm-2",
                                  children: (0, j.jsx)(i.c, {
                                    children: "Model",
                                  }),
                                }),
                                (0, j.jsx)(f.Z, {
                                  className: "col-sm-1",
                                  children: (0, j.jsx)(i.c, {
                                    children: "Manufacturer",
                                  }),
                                }),
                                (0, j.jsx)(f.Z, {
                                  className: "col-sm-2",
                                  children: (0, j.jsx)(i.c, {
                                    children: "PQS/PIS Code",
                                  }),
                                }),
                                (0, j.jsx)(f.Z, {
                                  className: "col-sm-1",
                                  children: (0, j.jsx)(i.c, {
                                    children: "Count",
                                  }),
                                }),
                                (0, j.jsx)(f.Z, {
                                  className: "col-sm-4",
                                  children: (0, j.jsx)(i.c, {
                                    children: "Facility list",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, j.jsx)(x.Z, {
                            children:
                              null === D || void 0 === D
                                ? void 0
                                : D.map(function (e, l) {
                                    var n, a, s, c, r, t, i;
                                    return (0, j.jsxs)(
                                      p.Z,
                                      {
                                        children: [
                                          (0, j.jsx)(f.Z, {
                                            className: "col-sm-2",
                                            children:
                                              null !== (n = e.item_type) &&
                                              void 0 !== n
                                                ? n
                                                : "-",
                                          }),
                                          (0, j.jsx)(f.Z, {
                                            className: "col-sm-2",
                                            children:
                                              null !== (a = e.model) &&
                                              void 0 !== a
                                                ? a
                                                : "-",
                                          }),
                                          (0, j.jsx)(f.Z, {
                                            className: "col-sm-1",
                                            children:
                                              null !== (s = e.manufacturer) &&
                                              void 0 !== s
                                                ? s
                                                : "-",
                                          }),
                                          (0, j.jsx)(f.Z, {
                                            className: "col-sm-2",
                                            children:
                                              null !== (c = e.pqs) &&
                                              void 0 !== c
                                                ? c
                                                : "-",
                                          }),
                                          (0, j.jsx)(f.Z, {
                                            className: "col-sm-1",
                                            children:
                                              null !== (r = e.count) &&
                                              void 0 !== r
                                                ? r
                                                : "-",
                                          }),
                                          (0, j.jsx)(f.Z, {
                                            className: "col-sm-4",
                                            children:
                                              null !==
                                                (t =
                                                  null === (i = e.facility) ||
                                                  void 0 === i
                                                    ? void 0
                                                    : i.map(function (l, n) {
                                                        return ""
                                                          .concat(l.name)
                                                          .concat(
                                                            n ===
                                                              e.facility
                                                                .length -
                                                                1
                                                              ? ""
                                                              : ", "
                                                          );
                                                      })) && void 0 !== t
                                                ? t
                                                : "-",
                                          }),
                                        ],
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
    51763: function (e, l, n) {
      var a = n(15671),
        s = n(43144),
        c = n(54318),
        r = n(39877),
        t = "http://127.0.0.1:8000/reports/",
        i = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, s.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return r.Z.get(t + "excel", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return r.Z.get(t + "facseg", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return r.Z.get(t + "subfacpop", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return r.Z.get(t + "facmap", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return r.Z.get(t + "gapmap", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return r.Z.get(t + "item-gp", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return r.Z.get(t + "itemfac", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return r.Z.get(t + "gapitem", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return r.Z.get(t + "facprof", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return r.Z.get(t + "coldprof", {
                    headers: { Authorization: (0, c.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return r.Z.get(t + "planingreport", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return r.Z.get(t + "gapcce", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return r.Z.get(t + "gapccePlan", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return r.Z.post(t + "gapccePlan", e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return r.Z.delete(t + "gapccePlan", {
                    headers: { Authorization: (0, c.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return r.Z.put(t + "gapccePlan", e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      l.Z = new i();
    },
    23821: function (e, l, n) {
      var a = n(39281),
        s = n(79836),
        c = n(80184);
      l.Z = function (e) {
        var l = e.children;
        return (0, c.jsx)(c.Fragment, {
          children: (0, c.jsx)(a.Z, {
            children: (0, c.jsx)(s.Z, { children: l }),
          }),
        });
      };
    },
    92854: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=1195.c1eff881.chunk.js.map
