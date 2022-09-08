"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [1195],
  {
    91195: function (e, l, a) {
      a.r(l);
      var s = a(1413),
        n = a(74165),
        c = a(15861),
        r = a(29439),
        t = a(72791),
        i = a(30606),
        o = a(91933),
        d = a(16149),
        u = a(51763),
        m = (a(92854), a(59909)),
        h = a(23821),
        v = a(56890),
        x = a(35855),
        p = a(53994),
        j = a(53382),
        f = (a(93650), a(80184)),
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
          a,
          g,
          N,
          b,
          y = (0, t.useState)(Z),
          C = (0, r.Z)(y, 2),
          w = C[0],
          _ = C[1],
          P = (0, t.useState)(null),
          k = (0, r.Z)(P, 2),
          G = k[0],
          A = k[1],
          z = (0, o.useQuery)(
            ["item-gp-helper"],
            (0, c.Z)(
              (0, n.Z)().mark(function e() {
                var l;
                return (0, n.Z)().wrap(function (e) {
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
          I = z.data,
          S = z.isLoading,
          F = (0, o.useQuery)(
            ["item-gp-report"],
            (0, c.Z)(
              (0, n.Z)().mark(function e() {
                var l, a, s, c;
                return (0, n.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (a in ((l = { help: !1 }), w))
                          (s = w[a]).length > 0 && "-1" !== s && (l[a] = s);
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
          D = F.data,
          M = F.isLoading,
          E = F.refetch;
        if (S || M) return (0, f.jsx)(m.Z, {});
        var O = JSON.parse(localStorage.getItem("country")) || {};
        return (0, f.jsxs)("div", {
          children: [
            (0, f.jsx)("h3", {
              className: "page-title mb-3",
              children: (0, f.jsx)(i.c, { children: "Item Grouped Report" }),
            }),
            (0, f.jsx)("div", {
              className: "mt-3",
              children: (0, f.jsx)("div", {
                className: "card",
                children: (0, f.jsx)("div", {
                  className: "card-body py-3",
                  children: (0, f.jsxs)("form", {
                    onSubmit: function (e) {
                      e.preventDefault(), E();
                    },
                    children: [
                      (0, f.jsx)("h4", {
                        children: (0, f.jsx)(i.c, { children: "Filters" }),
                      }),
                      (0, f.jsxs)("div", {
                        className: "row mt-5",
                        children: [
                          (0, f.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, f.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, f.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, f.jsx)(i.c, {
                                    children: "Facility name:",
                                  }),
                                }),
                                (0, f.jsx)(d.Z.Control, {
                                  className: "form-control col-sm-8",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { name: l });
                                    });
                                  },
                                  value: w.name,
                                }),
                              ],
                            }),
                          }),
                          (0, f.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, f.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, f.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, f.jsx)(i.c, {
                                    children: "Code:",
                                  }),
                                }),
                                (0, f.jsx)(d.Z.Control, {
                                  className: "form-control col-sm-8",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { code: l });
                                    });
                                  },
                                  value: w.code,
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, f.jsxs)("div", {
                        className: "row mt-1",
                        children: [
                          (0, f.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, f.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, f.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, f.jsx)(i.c, {
                                    children: "Level:",
                                  }),
                                }),
                                (0, f.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { level: l });
                                    });
                                  },
                                  value: w.level,
                                  as: "select",
                                  children: [
                                    (0, f.jsx)("option", {
                                      value: "-1",
                                      selected: !0,
                                      disabled: !0,
                                      children: "Please select",
                                    }),
                                    null === I || void 0 === I
                                      ? void 0
                                      : I.level.map(function (e) {
                                          return (0,
                                          f.jsx)("option", { value: e.id, children: "".concat(e.id, " - ").concat(e.name) }, e.id);
                                        }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, f.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, f.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, f.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, f.jsx)(i.c, {
                                    children: "Type:",
                                  }),
                                }),
                                (0, f.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { type: l });
                                    });
                                  },
                                  value: w.type,
                                  as: "select",
                                  children: [
                                    (0, f.jsx)("option", {
                                      value: "-1",
                                      selected: !0,
                                      disabled: !0,
                                      children: "Please select",
                                    }),
                                    null === I || void 0 === I
                                      ? void 0
                                      : I.type.map(function (e) {
                                          return (0,
                                          f.jsx)("option", { value: e.id, children: e.name }, e.id);
                                        }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, f.jsx)("div", {
                        className: "row mt-1",
                        children: (0, f.jsx)("div", {
                          className: "col-sm-12 col-lg-6",
                          children: (0, f.jsxs)(d.Z.Group, {
                            className: "row",
                            children: [
                              (0, f.jsx)("label", {
                                className: "label col-sm-4",
                                children: (0, f.jsx)(i.c, {
                                  children: "Power source:",
                                }),
                              }),
                              (0, f.jsxs)(d.Z.Control, {
                                className: "form-select col-sm-8",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  _(function (e) {
                                    return (0,
                                    s.Z)((0, s.Z)({}, e), {}, { power: l });
                                  });
                                },
                                value: w.power,
                                as: "select",
                                children: [
                                  (0, f.jsx)("option", {
                                    value: "-1",
                                    selected: !0,
                                    disabled: !0,
                                    children: "Please select",
                                  }),
                                  null === I || void 0 === I
                                    ? void 0
                                    : I.power.map(function (e) {
                                        return (0,
                                        f.jsx)("option", { value: e.id, children: e.name }, e.id);
                                      }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, f.jsx)("h4", {
                        className: "mt-1",
                        children: (0, f.jsx)(i.c, { children: "Item Options" }),
                      }),
                      (0, f.jsxs)("div", {
                        className: "row mt-5",
                        children: [
                          (0, f.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, f.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, f.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, f.jsx)(i.c, {
                                    children: "Item class:",
                                  }),
                                }),
                                (0, f.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { item_class: l, item_type: "-1", manufacturer: "-1" });
                                    }),
                                      A(
                                        I.item.find(function (e) {
                                          return e.item_class_id === +l;
                                        })
                                      );
                                  },
                                  value: w.item_class,
                                  as: "select",
                                  children: [
                                    (0, f.jsx)("option", {
                                      value: "-1",
                                      selected: !0,
                                      disabled: !0,
                                      children: "Please select",
                                    }),
                                    null === I ||
                                    void 0 === I ||
                                    null === (e = I.item) ||
                                    void 0 === e
                                      ? void 0
                                      : e.map(function (e) {
                                          return (0,
                                          f.jsx)("option", { value: e.item_class_id, children: e.item_class_name }, e.item_class_id);
                                        }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, f.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, f.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, f.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, f.jsx)(i.c, {
                                    children: "Item type:",
                                  }),
                                }),
                                (0, f.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  disabled: !G,
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { item_type: l });
                                    });
                                  },
                                  value: w.item_type,
                                  as: "select",
                                  children: [
                                    (0, f.jsx)("option", {
                                      value: "-1",
                                      selected: !0,
                                      disabled: !0,
                                      children: "Please select",
                                    }),
                                    null === G || void 0 === G
                                      ? void 0
                                      : G.item_type.map(function (e) {
                                          return (0,
                                          f.jsx)("option", { value: e.id, children: e.name }, e.id);
                                        }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, f.jsxs)("div", {
                        className: "row mt-1",
                        children: [
                          (0, f.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, f.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, f.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, f.jsx)(i.c, {
                                    children: "Physical condition:",
                                  }),
                                }),
                                (0, f.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { physical: l });
                                    });
                                  },
                                  value: w.physical,
                                  as: "select",
                                  children: [
                                    (0, f.jsx)("option", {
                                      value: "-1",
                                      selected: !0,
                                      disabled: !0,
                                      children: "Please select",
                                    }),
                                    null === I ||
                                    void 0 === I ||
                                    null === (l = I.physical) ||
                                    void 0 === l
                                      ? void 0
                                      : l.map(function (e) {
                                          return (0,
                                          f.jsx)("option", { value: e.id, children: e.name }, e.id);
                                        }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, f.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, f.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, f.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, f.jsx)(i.c, {
                                    children: "Working condition:",
                                  }),
                                }),
                                (0, f.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { working: l });
                                    });
                                  },
                                  value: w.working,
                                  as: "select",
                                  children: [
                                    (0, f.jsx)("option", {
                                      value: "-1",
                                      selected: !0,
                                      disabled: !0,
                                      children: "Please select",
                                    }),
                                    null === I ||
                                    void 0 === I ||
                                    null === (a = I.working) ||
                                    void 0 === a
                                      ? void 0
                                      : a.map(function (e) {
                                          return (0,
                                          f.jsx)("option", { value: e.id, children: e.name }, e.id);
                                        }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, f.jsxs)("div", {
                        className: "row mt-1",
                        children: [
                          (0, f.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, f.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, f.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, f.jsx)(i.c, {
                                    children: "Financial source:",
                                  }),
                                }),
                                (0, f.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { financial: l });
                                    });
                                  },
                                  value: w.financial,
                                  as: "select",
                                  children: [
                                    (0, f.jsx)("option", {
                                      value: "-1",
                                      selected: !0,
                                      disabled: !0,
                                      children: "Please select",
                                    }),
                                    null === I ||
                                    void 0 === I ||
                                    null === (g = I.financial) ||
                                    void 0 === g
                                      ? void 0
                                      : g.map(function (e) {
                                          return (0,
                                          f.jsx)("option", { value: e.id, children: e.name }, e.id);
                                        }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, f.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, f.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, f.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, f.jsx)(i.c, {
                                    children: "Power source:",
                                  }),
                                }),
                                (0, f.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { item_power: l });
                                    });
                                  },
                                  value: w.item_power,
                                  as: "select",
                                  children: [
                                    (0, f.jsx)("option", {
                                      value: "-1",
                                      selected: !0,
                                      disabled: !0,
                                      children: "Please select",
                                    }),
                                    null === I ||
                                    void 0 === I ||
                                    null === (N = I.item_power) ||
                                    void 0 === N
                                      ? void 0
                                      : N.map(function (e) {
                                          return (0,
                                          f.jsx)("option", { value: e.id, children: e.name }, e.id);
                                        }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, f.jsxs)("div", {
                        className: "row mt-1",
                        children: [
                          (0, f.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, f.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, f.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, f.jsx)(i.c, {
                                    children: "PQS/PIS Code:",
                                  }),
                                }),
                                (0, f.jsx)(d.Z.Control, {
                                  className: "form-control col-sm-8",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { pqs: l });
                                    });
                                  },
                                  value: w.pqs,
                                }),
                              ],
                            }),
                          }),
                          (0, f.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, f.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, f.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, f.jsx)(i.c, {
                                    children: "Manufacturer:",
                                  }),
                                }),
                                (0, f.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  disabled: !G,
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { manufacturer: l });
                                    });
                                  },
                                  value: w.manufacturer,
                                  as: "select",
                                  children: [
                                    (0, f.jsx)("option", {
                                      value: "-1",
                                      selected: !0,
                                      disabled: !0,
                                      children: "Please select",
                                    }),
                                    null === G ||
                                    void 0 === G ||
                                    null === (b = G.manufacturer) ||
                                    void 0 === b
                                      ? void 0
                                      : b.map(function (e) {
                                          return (0,
                                          f.jsx)("option", { value: e.id, children: e.name }, e.id);
                                        }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, f.jsxs)("div", {
                        className: "row mt-1",
                        children: [
                          (0, f.jsx)("div", {
                            className: "col-sm-6",
                            children: (0, f.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, f.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, f.jsx)(i.c, {
                                    children: "Year installed:",
                                  }),
                                }),
                                (0, f.jsx)("label", {
                                  className: "label col-sm-2",
                                  children: (0, f.jsx)(i.c, {
                                    children: "from:",
                                  }),
                                }),
                                (0, f.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-2",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { year_from: l });
                                    });
                                  },
                                  value: w.year_from,
                                  as: "select",
                                  children: [
                                    (0, f.jsx)("option", {
                                      value: "-1",
                                      selected: !0,
                                      disabled: !0,
                                      children: "Please select",
                                    }),
                                    Array.from({ length: 30 }).map(function (
                                      e,
                                      l
                                    ) {
                                      var a = new Date().getUTCFullYear() - l;
                                      return (0, f.jsx)(
                                        "option",
                                        { value: a, children: a },
                                        a
                                      );
                                    }),
                                  ],
                                }),
                                (0, f.jsx)("label", {
                                  className: "label col-sm-2",
                                  children: (0, f.jsx)(i.c, {
                                    children: "to:",
                                  }),
                                }),
                                (0, f.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-2",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { year_to: l });
                                    });
                                  },
                                  value: w.year_to,
                                  as: "select",
                                  children: [
                                    (0, f.jsx)("option", {
                                      value: "-1",
                                      selected: !0,
                                      disabled: !0,
                                      children: "Please select",
                                    }),
                                    Array.from({ length: 30 }).map(function (
                                      e,
                                      l
                                    ) {
                                      var a = new Date().getUTCFullYear() - l;
                                      return (0, f.jsx)(
                                        "option",
                                        { value: a, children: a },
                                        a
                                      );
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, f.jsx)("div", {
                            className: "col-sm-6",
                            children: (0, f.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, f.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, f.jsx)(i.c, {
                                    children: "Capacity:",
                                  }),
                                }),
                                (0, f.jsx)("label", {
                                  className: "label col-sm-2",
                                  children: (0, f.jsx)(i.c, {
                                    children: "from:",
                                  }),
                                }),
                                (0, f.jsx)(d.Z.Control, {
                                  className: "form-control col-sm-2",
                                  type: "number",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { capacity_from: l });
                                    });
                                  },
                                  value: w.capacity_from,
                                }),
                                (0, f.jsx)("label", {
                                  className: "label col-sm-2",
                                  children: (0, f.jsx)(i.c, {
                                    children: "to:",
                                  }),
                                }),
                                (0, f.jsx)(d.Z.Control, {
                                  className: "form-control col-sm-2",
                                  onChange: function (e) {
                                    var l = e.target.value;
                                    _(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { capacity_to: l });
                                    });
                                  },
                                  value: w.capacity_to,
                                  as: "select",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, f.jsxs)("div", {
                        className: "row mt-4",
                        children: [
                          (0, f.jsx)("div", {
                            className: "col-sm-1",
                            children: (0, f.jsx)("button", {
                              type: "submit",
                              className: "btn btn-primary",
                              children: "Reports",
                            }),
                          }),
                          (0, f.jsx)("div", {
                            className: "col-sm-1",
                            children: (0, f.jsx)("button", {
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
            (0, f.jsx)("div", {
              className: "mt-3",
              children: (0, f.jsx)("div", {
                className: "card",
                children: (0, f.jsxs)("div", {
                  className: "card-body py-3",
                  children: [
                    (0, f.jsx)("h4", {
                      children: (0, f.jsxs)(i.c, {
                        children: [
                          "Report Number: Item Grouped Report (",
                          null === O || void 0 === O ? void 0 : O.country,
                          ")",
                        ],
                      }),
                    }),
                    (0, f.jsxs)("h6", {
                      children: [
                        "Date: ",
                        new Date().toISOString().split("T")[0],
                      ],
                    }),
                    (0, f.jsx)("div", {
                      className: "mt-3 table-container",
                      children: (0, f.jsxs)(h.Z, {
                        children: [
                          (0, f.jsx)(v.Z, {
                            children: (0, f.jsxs)(x.Z, {
                              children: [
                                (0, f.jsx)(p.Z, {
                                  className: "col-sm-2",
                                  children: (0, f.jsx)(i.c, {
                                    children: "Type",
                                  }),
                                }),
                                (0, f.jsx)(p.Z, {
                                  className: "col-sm-2",
                                  children: (0, f.jsx)(i.c, {
                                    children: "Model",
                                  }),
                                }),
                                (0, f.jsx)(p.Z, {
                                  className: "col-sm-1",
                                  children: (0, f.jsx)(i.c, {
                                    children: "Manufacturer",
                                  }),
                                }),
                                (0, f.jsx)(p.Z, {
                                  className: "col-sm-2",
                                  children: (0, f.jsx)(i.c, {
                                    children: "PQS/PIS Code",
                                  }),
                                }),
                                (0, f.jsx)(p.Z, {
                                  className: "col-sm-1",
                                  children: (0, f.jsx)(i.c, {
                                    children: "Count",
                                  }),
                                }),
                                (0, f.jsx)(p.Z, {
                                  className: "col-sm-4",
                                  children: (0, f.jsx)(i.c, {
                                    children: "Facility list",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, f.jsx)(j.Z, {
                            children:
                              null === D || void 0 === D
                                ? void 0
                                : D.map(function (e, l) {
                                    var a, s, n, c, r, t, i;
                                    return (0, f.jsxs)(
                                      x.Z,
                                      {
                                        children: [
                                          (0, f.jsx)(p.Z, {
                                            className: "col-sm-2",
                                            children:
                                              null !== (a = e.item_type) &&
                                              void 0 !== a
                                                ? a
                                                : "-",
                                          }),
                                          (0, f.jsx)(p.Z, {
                                            className: "col-sm-2",
                                            children:
                                              null !== (s = e.model) &&
                                              void 0 !== s
                                                ? s
                                                : "-",
                                          }),
                                          (0, f.jsx)(p.Z, {
                                            className: "col-sm-1",
                                            children:
                                              null !== (n = e.manufacturer) &&
                                              void 0 !== n
                                                ? n
                                                : "-",
                                          }),
                                          (0, f.jsx)(p.Z, {
                                            className: "col-sm-2",
                                            children:
                                              null !== (c = e.pqs) &&
                                              void 0 !== c
                                                ? c
                                                : "-",
                                          }),
                                          (0, f.jsx)(p.Z, {
                                            className: "col-sm-1",
                                            children:
                                              null !== (r = e.count) &&
                                              void 0 !== r
                                                ? r
                                                : "-",
                                          }),
                                          (0, f.jsx)(p.Z, {
                                            className: "col-sm-4",
                                            children:
                                              null !==
                                                (t =
                                                  null === (i = e.facility) ||
                                                  void 0 === i
                                                    ? void 0
                                                    : i.map(function (l, a) {
                                                        return ""
                                                          .concat(l.name)
                                                          .concat(
                                                            a ===
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
    51763: function (e, l, a) {
      var s = a(15671),
        n = a(43144),
        c = a(54318),
        r = a(39877),
        t = "http://127.0.0.1:8000/reports/",
        i = (function () {
          function e() {
            (0, s.Z)(this, e);
          }
          return (
            (0, n.Z)(e, [
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
    23821: function (e, l, a) {
      var s = a(39281),
        n = a(79836),
        c = a(80184);
      l.Z = function (e) {
        var l = e.children;
        return (0, c.jsx)(c.Fragment, {
          children: (0, c.jsx)(s.Z, {
            children: (0, c.jsx)(n.Z, { children: l }),
          }),
        });
      };
    },
    92854: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=1195.a5fcbbb5.chunk.js.map
