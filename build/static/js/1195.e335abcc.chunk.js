"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [1195],
  {
    91195: function (e, n, l) {
      l.r(n);
      var a = l(1413),
        c = l(74165),
        s = l(15861),
        r = l(29439),
        t = l(72791),
        i = l(30606),
        o = l(12902),
        u = l(91933),
        d = l(16149),
        m = l(51763),
        h = (l(92854), l(59909)),
        f = l(23821),
        v = l(56890),
        p = l(35855),
        x = l(53994),
        j = l(53382),
        Z = (l(93650), l(65218)),
        g = l(80184),
        N = {
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
      n.default = function () {
        var e,
          n,
          l,
          y,
          b,
          w,
          C = (0, t.useState)(N),
          _ = (0, r.Z)(C, 2),
          P = _[0],
          k = _[1],
          G = (0, t.useState)(null),
          I = (0, r.Z)(G, 2),
          A = I[0],
          F = I[1],
          z = (0, u.useQuery)(
            ["item-gp-helper"],
            (0, s.Z)(
              (0, c.Z)().mark(function e() {
                var n;
                return (0, c.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), m.Z.getItemGp({ help: !0 });
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
          W = z.data,
          S = z.isLoading,
          D = (0, u.useQuery)(
            ["item-gp-report"],
            (0, s.Z)(
              (0, c.Z)().mark(function e() {
                var n, l, a, s;
                return (0, c.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (l in ((n = { help: !1 }), P))
                          (a = P[l]).length > 0 && "-1" !== a && (n[l] = a);
                        return (e.next = 4), m.Z.getItemGp(n);
                      case 4:
                        return (
                          0 === (s = e.sent).data.length &&
                            Z.Am.error(
                              (0, g.jsx)(i.c, { children: "No data found" })
                            ),
                          e.abrupt("return", s.data)
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
          M = D.data,
          T = D.isLoading,
          q = D.refetch;
        if (S || T) return (0, g.jsx)(h.Z, {});
        var E = JSON.parse(localStorage.getItem("country")) || {};
        return (0, g.jsxs)("div", {
          children: [
            (0, g.jsx)("h3", {
              className: "page-title mb-3",
              children: (0, g.jsx)(i.c, { children: "Item grouped report" }),
            }),
            (0, g.jsx)("div", {
              className: "mt-3",
              children: (0, g.jsx)("div", {
                className: "card",
                children: (0, g.jsx)("div", {
                  className: "card-body py-3",
                  children: (0, g.jsxs)("form", {
                    onSubmit: function (e) {
                      e.preventDefault(), q();
                    },
                    children: [
                      (0, g.jsx)("h4", {
                        children: (0, g.jsx)(i.c, { children: "Filters" }),
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
                                    (0, g.jsx)(i.c, {
                                      children: "Facility Name",
                                    }),
                                    ":",
                                  ],
                                }),
                                (0, g.jsx)(d.Z.Control, {
                                  className: "form-control col-sm-8",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    k(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { name: n });
                                    });
                                  },
                                  value: P.name,
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
                                    (0, g.jsx)(i.c, { children: "Code" }),
                                    ":",
                                  ],
                                }),
                                (0, g.jsx)(d.Z.Control, {
                                  className: "form-control col-sm-8",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    k(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { code: n });
                                    });
                                  },
                                  value: P.code,
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
                                    (0, g.jsx)(i.c, { children: "Levels" }),
                                    ":",
                                  ],
                                }),
                                (0, g.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    k(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { level: n });
                                    });
                                  },
                                  value: P.level,
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
                                    null === W || void 0 === W
                                      ? void 0
                                      : W.level.map(function (e) {
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
                                    (0, g.jsx)(i.c, { children: "Type" }),
                                    ":",
                                  ],
                                }),
                                (0, g.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    k(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { type: n });
                                    });
                                  },
                                  value: P.type,
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
                                    null === W || void 0 === W
                                      ? void 0
                                      : W.type.map(function (e) {
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
                                  (0, g.jsx)(i.c, { children: "Power source" }),
                                  ":",
                                ],
                              }),
                              (0, g.jsxs)(d.Z.Control, {
                                className: "form-select col-sm-8",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  k(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { power: n });
                                  });
                                },
                                value: P.power,
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
                                  null === W || void 0 === W
                                    ? void 0
                                    : W.power.map(function (e) {
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
                        children: (0, g.jsx)(i.c, { children: "Item Options" }),
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
                                    (0, g.jsx)(i.c, { children: "Item class" }),
                                    ":",
                                  ],
                                }),
                                (0, g.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    k(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { item_class: n, item_type: "-1", manufacturer: "-1" });
                                    }),
                                      F(
                                        W.item.find(function (e) {
                                          return e.item_class_id === +n;
                                        })
                                      );
                                  },
                                  value: P.item_class,
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
                                    null === W ||
                                    void 0 === W ||
                                    null === (e = W.item) ||
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
                                    (0, g.jsx)(i.c, {
                                      children: "Items category",
                                    }),
                                    ":",
                                  ],
                                }),
                                (0, g.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  disabled: !A,
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    k(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { item_type: n });
                                    });
                                  },
                                  value: P.item_type,
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
                                      : A.item_type.map(function (e) {
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
                                    (0, g.jsx)(i.c, {
                                      children: "Physical condition",
                                    }),
                                    ":",
                                  ],
                                }),
                                (0, g.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    k(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { physical: n });
                                    });
                                  },
                                  value: P.physical,
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
                                    null === W ||
                                    void 0 === W ||
                                    null === (n = W.physical) ||
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
                                    (0, g.jsx)(i.c, {
                                      children: "Working condition",
                                    }),
                                    ":",
                                  ],
                                }),
                                (0, g.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    k(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { working: n });
                                    });
                                  },
                                  value: P.working,
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
                                    null === W ||
                                    void 0 === W ||
                                    null === (l = W.working) ||
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
                                    (0, g.jsx)(i.c, {
                                      children: "Financial source",
                                    }),
                                    ":",
                                  ],
                                }),
                                (0, g.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    k(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { financial: n });
                                    });
                                  },
                                  value: P.financial,
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
                                    null === W ||
                                    void 0 === W ||
                                    null === (y = W.financial) ||
                                    void 0 === y
                                      ? void 0
                                      : y.map(function (e) {
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
                                    (0, g.jsx)(i.c, {
                                      children:
                                        "Energy source for cold chain equipment",
                                    }),
                                    ":",
                                  ],
                                }),
                                (0, g.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    k(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { item_power: n });
                                    });
                                  },
                                  value: P.item_power,
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
                                    null === W ||
                                    void 0 === W ||
                                    null === (b = W.item_power) ||
                                    void 0 === b
                                      ? void 0
                                      : b.map(function (e) {
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
                                    (0, g.jsx)(i.c, {
                                      children: "PQS/PIS Code",
                                    }),
                                    ":",
                                  ],
                                }),
                                (0, g.jsx)(d.Z.Control, {
                                  className: "form-control col-sm-8",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    k(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { pqs: n });
                                    });
                                  },
                                  value: P.pqs,
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
                                    (0, g.jsx)(i.c, {
                                      children: "Manufacturer",
                                    }),
                                    ":",
                                  ],
                                }),
                                (0, g.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  disabled: !A,
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    k(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { manufacturer: n });
                                    });
                                  },
                                  value: P.manufacturer,
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
                                    null === (w = A.manufacturer) ||
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
                        className: "row mt-1",
                        children: [
                          (0, g.jsx)("div", {
                            className: "col-sm-6",
                            children: (0, g.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, g.jsxs)("label", {
                                  className: "label col-sm-4",
                                  children: [
                                    (0, g.jsx)(i.c, {
                                      children: "Year installed",
                                    }),
                                    ":",
                                  ],
                                }),
                                (0, g.jsxs)("label", {
                                  className: "label col-sm-2",
                                  children: [
                                    (0, g.jsx)(i.c, { children: "from" }),
                                    ":",
                                  ],
                                }),
                                (0, g.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-2",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    k(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { year_from: n });
                                    });
                                  },
                                  value: P.year_from,
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
                                    Array.from({ length: 35 }).map(function (
                                      e,
                                      n
                                    ) {
                                      var l = new Date().getUTCFullYear() - n;
                                      return (0, g.jsx)(
                                        "option",
                                        { value: l, children: l },
                                        l
                                      );
                                    }),
                                  ],
                                }),
                                (0, g.jsxs)("label", {
                                  className: "label col-sm-2",
                                  children: [
                                    (0, g.jsx)(i.c, { children: "to" }),
                                    ":",
                                  ],
                                }),
                                (0, g.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-2",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    k(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { year_to: n });
                                    });
                                  },
                                  value: P.year_to,
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
                                    Array.from({
                                      length:
                                        new Date().getUTCFullYear() -
                                        P.year_from +
                                        1,
                                    }).map(function (e, n) {
                                      var l = new Date().getUTCFullYear() - n;
                                      return (0,
                                      g.jsx)("option", { value: l, children: l }, l);
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, g.jsx)("div", {
                            className: "col-sm-6",
                            children: (0, g.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, g.jsxs)("label", {
                                  className: "label col-sm-4",
                                  children: [
                                    (0, g.jsx)(i.c, { children: "Capacity" }),
                                    ":",
                                  ],
                                }),
                                (0, g.jsxs)("label", {
                                  className: "label col-sm-2",
                                  children: [
                                    (0, g.jsx)(i.c, { children: "from" }),
                                    ":",
                                  ],
                                }),
                                (0, g.jsx)(d.Z.Control, {
                                  className: "form-control col-sm-2",
                                  type: "number",
                                  min: 0,
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    k(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { capacity_from: n });
                                    });
                                  },
                                  value: P.capacity_from,
                                }),
                                (0, g.jsxs)("label", {
                                  className: "label col-sm-2",
                                  children: [
                                    (0, g.jsx)(i.c, { children: "to" }),
                                    ":",
                                  ],
                                }),
                                (0, g.jsx)(d.Z.Control, {
                                  className: "form-control col-sm-2",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    k(function (e) {
                                      return (0,
                                      a.Z)((0, a.Z)({}, e), {}, { capacity_to: n });
                                    });
                                  },
                                  value: P.capacity_to,
                                  type: "number",
                                  min: 0,
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
                            className: "col-sm-2",
                            children: (0, g.jsx)("button", {
                              type: "submit",
                              className: "btn btn-primary fs-5",
                              children: (0, g.jsx)(i.c, {
                                children: "Reports",
                              }),
                            }),
                          }),
                          (0, g.jsx)("div", {
                            className: "col-sm-3",
                            children: (0, g.jsx)("button", {
                              type: "button",
                              className: "btn btn-primary fs-5",
                              onClick: function () {
                                k(N), window.location.reload();
                              },
                              children: (0, g.jsx)(i.c, {
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
            (0, g.jsx)("div", {
              className: "mt-3",
              children: (0, g.jsx)("div", {
                className: "card",
                children: (0, g.jsxs)("div", {
                  className: "card-body py-3",
                  children: [
                    (0, g.jsxs)("h4", {
                      children: [
                        (0, g.jsx)(i.c, { children: "Report" }),
                        " : ",
                        (0, g.jsx)(i.c, { children: "Item grouped report" }),
                        " (",
                        null === E || void 0 === E ? void 0 : E.country,
                        ")",
                      ],
                    }),
                    (0, g.jsxs)("h6", {
                      children: [
                        (0, g.jsx)(i.c, { children: "Filter" }),
                        " : ",
                        "",
                        " ",
                        (function () {
                          var e = "",
                            n = function (n) {
                              var l = P[n];
                              if (l.length > 0 && "-1" !== l)
                                if ("level" === n)
                                  e += "Level : ".concat(l, "- ").concat(
                                    W.level.find(function (e) {
                                      return e.id === parseInt(l);
                                    }).name,
                                    " "
                                  );
                                else if ("type" === n)
                                  e += "".concat(n, " : ").concat(
                                    W.type.find(function (e) {
                                      return e.id === parseInt(l);
                                    }).name,
                                    " "
                                  );
                                else if ("power" === n)
                                  e += "Power source : ".concat(
                                    W.power.find(function (e) {
                                      return e.id === parseInt(l);
                                    }).name,
                                    " "
                                  );
                                else if ("item_class" === n) {
                                  var a = A.item_class_name;
                                  e += "Item class: ".concat(a, ", ");
                                } else if ("item_type" === n) {
                                  var c,
                                    s = A.item_type.filter(function (e) {
                                      return e.id === parseInt(l);
                                    });
                                  e += "Items category: ".concat(
                                    null === (c = s[0]) || void 0 === c
                                      ? void 0
                                      : c.name,
                                    ", "
                                  );
                                } else if ("physical" === n)
                                  e += "Physical = ".concat(
                                    W.physical.find(function (e) {
                                      return e.id === parseInt(l);
                                    }).name,
                                    ", "
                                  );
                                else if ("financial" === n)
                                  e += "Financial : ".concat(
                                    W.financial.find(function (e) {
                                      return e.id === parseInt(l);
                                    }).name,
                                    " "
                                  );
                                else if ("working" === n)
                                  e += "Working : ".concat(
                                    W.working.find(function (e) {
                                      return e.id === parseInt(l);
                                    }).name,
                                    " ,"
                                  );
                                else if ("item_power" === n)
                                  e += "Item Power source : ".concat(
                                    W.item_power.find(function (e) {
                                      return e.id === parseInt(l);
                                    }).name,
                                    ", "
                                  );
                                else if ("manufacturer" === n) {
                                  var r,
                                    t = A.manufacturer.filter(function (e) {
                                      return e.id === parseInt(l);
                                    });
                                  e += "Manufacturer: ".concat(
                                    null === (r = t[0]) || void 0 === r
                                      ? void 0
                                      : r.name,
                                    ", "
                                  );
                                } else
                                  e +=
                                    "year_from" === n
                                      ? "From year :".concat(l, " ,")
                                      : "year_to" === n
                                      ? "To year =".concat(l, ", ")
                                      : "capacity_from" === n
                                      ? "From capaciti :".concat(l, " ,")
                                      : "capacity_to" === n
                                      ? "To capacity :".concat(l, ", ")
                                      : "pqs" === n
                                      ? "PQS Code:".concat(l, ", ")
                                      : "".concat(n, "=").concat(l, ", ");
                            };
                          for (var l in P) n(l);
                          return e;
                        })(),
                      ],
                    }),
                    (0, g.jsxs)("h6", {
                      children: [
                        (0, g.jsx)(i.c, { children: "Date" }),
                        ": ",
                        new Date().toLocaleDateString("en-GB"),
                      ],
                    }),
                    (0, g.jsx)("div", {
                      className: "mt-3 table-container",
                      children: (0, g.jsxs)(f.Z, {
                        children: [
                          (0, g.jsx)(v.Z, {
                            children: (0, g.jsxs)(p.Z, {
                              children: [
                                (0, g.jsx)(x.Z, {
                                  className: "col-sm-2",
                                  children: (0, g.jsx)(i.c, {
                                    children: "Type",
                                  }),
                                }),
                                (0, g.jsx)(x.Z, {
                                  className: "col-sm-2",
                                  children: (0, g.jsx)(i.c, {
                                    children: "Model",
                                  }),
                                }),
                                (0, g.jsx)(x.Z, {
                                  className: "col-sm-1",
                                  children: (0, g.jsx)(i.c, {
                                    children: "Manufacturer",
                                  }),
                                }),
                                (0, g.jsx)(x.Z, {
                                  className: "col-sm-2",
                                  children: (0, g.jsx)(i.c, {
                                    children: "PQS/PIS Code",
                                  }),
                                }),
                                (0, g.jsx)(x.Z, {
                                  className: "col-sm-1",
                                  children: (0, g.jsx)(i.c, {
                                    children: "Count",
                                  }),
                                }),
                                (0, g.jsx)(x.Z, {
                                  className: "col-sm-4",
                                  children: (0, g.jsx)(i.c, {
                                    children: "Facility list",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, g.jsx)(j.Z, {
                            children:
                              null === M || void 0 === M
                                ? void 0
                                : M.map(function (e, n) {
                                    var l, a, c, s, r, t, i;
                                    return (0, g.jsxs)(
                                      p.Z,
                                      {
                                        children: [
                                          (0, g.jsx)(x.Z, {
                                            className: "col-sm-2",
                                            children:
                                              null !== (l = e.item_type) &&
                                              void 0 !== l
                                                ? l
                                                : "-",
                                          }),
                                          (0, g.jsx)(x.Z, {
                                            className: "col-sm-2",
                                            children:
                                              null !== (a = e.model) &&
                                              void 0 !== a
                                                ? a
                                                : "-",
                                          }),
                                          (0, g.jsx)(x.Z, {
                                            className: "col-sm-1",
                                            children:
                                              null !== (c = e.manufacturer) &&
                                              void 0 !== c
                                                ? c
                                                : "-",
                                          }),
                                          (0, g.jsx)(x.Z, {
                                            className: "col-sm-2",
                                            children:
                                              null !== (s = e.pqs) &&
                                              void 0 !== s
                                                ? s
                                                : "-",
                                          }),
                                          (0, g.jsx)(x.Z, {
                                            className: "col-sm-1",
                                            children:
                                              null !== (r = e.count) &&
                                              void 0 !== r
                                                ? r
                                                : "-",
                                          }),
                                          (0, g.jsx)(x.Z, {
                                            className: "col-sm-4",
                                            children:
                                              null !==
                                                (t =
                                                  null === (i = e.facility) ||
                                                  void 0 === i
                                                    ? void 0
                                                    : i.map(function (n, l) {
                                                        return ""
                                                          .concat(n.name)
                                                          .concat(
                                                            l ===
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
        c = l(43144),
        s = l(54318),
        r = l(39877),
        t = "https://demoapi2.invgap.org/reports/",
        i = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, c.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return r.Z.get(t + "excel", {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return r.Z.get(t + "facseg", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return r.Z.get(t + "subfacpop", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return r.Z.get(t + "facmap", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return r.Z.get(t + "gapmap", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return r.Z.get(t + "item-gp", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return r.Z.get(t + "itemfac", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return r.Z.get(t + "gapitem", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return r.Z.get(t + "facprof", {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return r.Z.get(t + "coldprof", {
                    headers: { Authorization: (0, s.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return r.Z.get(t + "planingreport", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return r.Z.get(t + "gapcce", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return r.Z.get(t + "gapccePlan", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return r.Z.post(t + "gapccePlan", e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return r.Z.delete(t + "gapccePlan", {
                    headers: { Authorization: (0, s.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return r.Z.put(t + "gapccePlan", e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "savegaps",
                value: function (e, n) {
                  return r.Z.post(t + "gapsave?condition=" + e, n, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new i();
    },
    23821: function (e, n, l) {
      var a = l(39281),
        c = l(79836),
        s = l(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)(a.Z, {
            children: (0, s.jsx)(c.Z, { children: n }),
          }),
        });
      };
    },
    92854: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=1195.e335abcc.chunk.js.map
