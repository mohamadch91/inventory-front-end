"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [1195],
  {
    91195: function (e, n, l) {
      l.r(n);
      var s = l(1413),
        a = l(74165),
        c = l(15861),
        r = l(29439),
        t = l(72791),
        i = l(30606),
        o = l(12902),
        u = l(91933),
        d = l(16149),
        m = l(51763),
        h = (l(92854), l(59909)),
        v = l(23821),
        f = l(56890),
        p = l(35855),
        x = l(53994),
        j = l(53382),
        Z = (l(93650), l(80184)),
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
          N,
          y,
          b,
          w = (0, t.useState)(g),
          C = (0, r.Z)(w, 2),
          _ = C[0],
          P = C[1],
          k = (0, t.useState)(null),
          G = (0, r.Z)(k, 2),
          I = G[0],
          A = G[1],
          z = (0, u.useQuery)(
            ["item-gp-helper"],
            (0, c.Z)(
              (0, a.Z)().mark(function e() {
                var n;
                return (0, a.Z)().wrap(function (e) {
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
          F = z.isLoading,
          S = (0, u.useQuery)(
            ["item-gp-report"],
            (0, c.Z)(
              (0, a.Z)().mark(function e() {
                var n, l, s, c;
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (l in ((n = { help: !1 }), _))
                          (s = _[l]).length > 0 && "-1" !== s && (n[l] = s);
                        return (e.next = 4), m.Z.getItemGp(n);
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
        if (F || E) return (0, Z.jsx)(h.Z, {});
        var L = JSON.parse(localStorage.getItem("country")) || {};
        return (0, Z.jsxs)("div", {
          children: [
            (0, Z.jsx)("h3", {
              className: "page-title mb-3",
              children: (0, Z.jsx)(i.c, { children: "Item grouped report" }),
            }),
            (0, Z.jsx)("div", {
              className: "mt-3",
              children: (0, Z.jsx)("div", {
                className: "card",
                children: (0, Z.jsx)("div", {
                  className: "card-body py-3",
                  children: (0, Z.jsxs)("form", {
                    onSubmit: function (e) {
                      e.preventDefault(), M();
                    },
                    children: [
                      (0, Z.jsx)("h4", {
                        children: (0, Z.jsx)(i.c, { children: "Filters" }),
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
                                    (0, Z.jsx)(i.c, {
                                      children: "Facility name",
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
                                      s.Z)((0, s.Z)({}, e), {}, { name: n });
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
                                    (0, Z.jsx)(i.c, { children: "Code" }),
                                    ":",
                                  ],
                                }),
                                (0, Z.jsx)(d.Z.Control, {
                                  className: "form-control col-sm-8",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    P(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { code: n });
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
                                    (0, Z.jsx)(i.c, { children: "Levels" }),
                                    ":",
                                  ],
                                }),
                                (0, Z.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    P(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { level: n });
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
                                    null === W || void 0 === W
                                      ? void 0
                                      : W.level.map(function (e) {
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
                                    (0, Z.jsx)(i.c, { children: "Type" }),
                                    ":",
                                  ],
                                }),
                                (0, Z.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    P(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { type: n });
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
                                    null === W || void 0 === W
                                      ? void 0
                                      : W.type.map(function (e) {
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
                                  (0, Z.jsx)(i.c, { children: "Power source" }),
                                  ":",
                                ],
                              }),
                              (0, Z.jsxs)(d.Z.Control, {
                                className: "form-select col-sm-8",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  P(function (e) {
                                    return (0,
                                    s.Z)((0, s.Z)({}, e), {}, { power: n });
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
                                  null === W || void 0 === W
                                    ? void 0
                                    : W.power.map(function (e) {
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
                        children: (0, Z.jsx)(i.c, { children: "Item Options" }),
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
                                    (0, Z.jsx)(i.c, { children: "Item class" }),
                                    ":",
                                  ],
                                }),
                                (0, Z.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    P(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { item_class: n, item_type: "-1", manufacturer: "-1" });
                                    }),
                                      A(
                                        W.item.find(function (e) {
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
                                    null === W ||
                                    void 0 === W ||
                                    null === (e = W.item) ||
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
                                    (0, Z.jsx)(i.c, {
                                      children: "Items category",
                                    }),
                                    ":",
                                  ],
                                }),
                                (0, Z.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  disabled: !I,
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    P(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { item_type: n });
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
                                    null === I || void 0 === I
                                      ? void 0
                                      : I.item_type.map(function (e) {
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
                                (0, Z.jsx)("label", {
                                  className: "label col-sm-4",
                                  children: (0, Z.jsx)(i.c, {
                                    children: "Physical condition:",
                                  }),
                                }),
                                (0, Z.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    P(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { physical: n });
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
                                    null === W ||
                                    void 0 === W ||
                                    null === (n = W.physical) ||
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
                                    (0, Z.jsx)(i.c, {
                                      children: "Working condition",
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
                                      s.Z)((0, s.Z)({}, e), {}, { working: n });
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
                                    null === W ||
                                    void 0 === W ||
                                    null === (l = W.working) ||
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
                                    (0, Z.jsx)(i.c, {
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
                                      s.Z)((0, s.Z)({}, e), {}, { financial: n });
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
                                    null === W ||
                                    void 0 === W ||
                                    null === (N = W.financial) ||
                                    void 0 === N
                                      ? void 0
                                      : N.map(function (e) {
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
                                    (0, Z.jsx)(i.c, {
                                      children: "Energy source for Cold chain",
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
                                      s.Z)((0, s.Z)({}, e), {}, { item_power: n });
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
                                    null === W ||
                                    void 0 === W ||
                                    null === (y = W.item_power) ||
                                    void 0 === y
                                      ? void 0
                                      : y.map(function (e) {
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
                                    (0, Z.jsx)(i.c, {
                                      children: "PQS/PIS Code",
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
                                      s.Z)((0, s.Z)({}, e), {}, { pqs: n });
                                    });
                                  },
                                  value: _.pqs,
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
                                    (0, Z.jsx)(i.c, {
                                      children: "Manufacturer",
                                    }),
                                    ":",
                                  ],
                                }),
                                (0, Z.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-8",
                                  disabled: !I,
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    P(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { manufacturer: n });
                                    });
                                  },
                                  value: _.manufacturer,
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
                                    null === I ||
                                    void 0 === I ||
                                    null === (b = I.manufacturer) ||
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
                        className: "row mt-1",
                        children: [
                          (0, Z.jsx)("div", {
                            className: "col-sm-6",
                            children: (0, Z.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, Z.jsxs)("label", {
                                  className: "label col-sm-4",
                                  children: [
                                    (0, Z.jsx)(i.c, {
                                      children: "Year installed",
                                    }),
                                    ":",
                                  ],
                                }),
                                (0, Z.jsxs)("label", {
                                  className: "label col-sm-2",
                                  children: [
                                    (0, Z.jsx)(i.c, { children: "from" }),
                                    ":",
                                  ],
                                }),
                                (0, Z.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-2",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    P(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { year_from: n });
                                    });
                                  },
                                  value: _.year_from,
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
                                    Array.from({ length: 30 }).map(function (
                                      e,
                                      n
                                    ) {
                                      var l = new Date().getUTCFullYear() - n;
                                      return (0, Z.jsx)(
                                        "option",
                                        { value: l, children: l },
                                        l
                                      );
                                    }),
                                  ],
                                }),
                                (0, Z.jsxs)("label", {
                                  className: "label col-sm-2",
                                  children: [
                                    (0, Z.jsx)(i.c, { children: "to" }),
                                    ":",
                                  ],
                                }),
                                (0, Z.jsxs)(d.Z.Control, {
                                  className: "form-select col-sm-2",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    P(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { year_to: n });
                                    });
                                  },
                                  value: _.year_to,
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
                                    Array.from({ length: 30 }).map(function (
                                      e,
                                      n
                                    ) {
                                      var l = new Date().getUTCFullYear() - n;
                                      return (0, Z.jsx)(
                                        "option",
                                        { value: l, children: l },
                                        l
                                      );
                                    }),
                                  ],
                                }),
                                "Year to can not be lower than from",
                              ],
                            }),
                          }),
                          (0, Z.jsx)("div", {
                            className: "col-sm-6",
                            children: (0, Z.jsxs)(d.Z.Group, {
                              className: "row",
                              children: [
                                (0, Z.jsxs)("label", {
                                  className: "label col-sm-4",
                                  children: [
                                    (0, Z.jsx)(i.c, { children: "capacity" }),
                                    ":",
                                  ],
                                }),
                                (0, Z.jsxs)("label", {
                                  className: "label col-sm-2",
                                  children: [
                                    (0, Z.jsx)(i.c, { children: "from" }),
                                    ":",
                                  ],
                                }),
                                (0, Z.jsx)(d.Z.Control, {
                                  className: "form-control col-sm-2",
                                  type: "number",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    P(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { capacity_from: n });
                                    });
                                  },
                                  value: _.capacity_from,
                                }),
                                (0, Z.jsxs)("label", {
                                  className: "label col-sm-2",
                                  children: [
                                    (0, Z.jsx)(i.c, { children: "to" }),
                                    ":",
                                  ],
                                }),
                                (0, Z.jsx)(d.Z.Control, {
                                  className: "form-control col-sm-2",
                                  onChange: function (e) {
                                    var n = e.target.value;
                                    P(function (e) {
                                      return (0,
                                      s.Z)((0, s.Z)({}, e), {}, { capacity_to: n });
                                    });
                                  },
                                  value: _.capacity_to,
                                  as: "select",
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
                            className: "col-sm-1",
                            children: (0, Z.jsx)("button", {
                              type: "submit",
                              className: "btn btn-primary",
                              children: (0, Z.jsx)(i.c, {
                                children: "Reports",
                              }),
                            }),
                          }),
                          (0, Z.jsx)("div", {
                            className: "col-sm-1",
                            children: (0, Z.jsx)("button", {
                              type: "button",
                              className: "btn btn-secondary",
                              onClick: function () {
                                return P(g);
                              },
                              children: (0, Z.jsx)(i.c, { children: "Clear" }),
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
                        (0, Z.jsx)(i.c, { children: "Report" }),
                        " : ",
                        (0, Z.jsx)(i.c, { children: "Item grouped report" }),
                        " (",
                        null === L || void 0 === L ? void 0 : L.country,
                        ")",
                      ],
                    }),
                    (0, Z.jsxs)("h6", {
                      children: [
                        "Filters : ",
                        "",
                        " ",
                        (function () {
                          var e = "",
                            n = function (n) {
                              var l = _[n];
                              if ((console.log(W), l.length > 0 && "-1" !== l))
                                if ("level" === n)
                                  e += "Level = ".concat(l, "- ").concat(
                                    W.level.find(function (e) {
                                      return e.id === parseInt(l);
                                    }).name,
                                    " "
                                  );
                                else if ("type" === n)
                                  e += "".concat(n, "= ").concat(
                                    W.type.find(function (e) {
                                      return e.id === parseInt(l);
                                    }).name,
                                    " "
                                  );
                                else if ("power" === n)
                                  e += "Power source = ".concat(
                                    W.power.find(function (e) {
                                      return e.id === parseInt(l);
                                    }).name,
                                    " "
                                  );
                                else if ("item_class" === n) {
                                  var s = I.item_class_name;
                                  e += "".concat(n, ": ").concat(s, ", ");
                                } else if ("item_type" === n) {
                                  var a,
                                    c = I.item_type.filter(function (e) {
                                      return e.id === parseInt(l);
                                    });
                                  console.log(c),
                                    (e += ""
                                      .concat(n, ": ")
                                      .concat(
                                        null === (a = c[0]) || void 0 === a
                                          ? void 0
                                          : a.name,
                                        ", "
                                      ));
                                } else if ("physical" === n)
                                  e += "".concat(n, "= ").concat(
                                    W.physical.find(function (e) {
                                      return e.id === parseInt(l);
                                    }).name,
                                    " "
                                  );
                                else if ("financial" === n)
                                  e += "".concat(n, "= ").concat(
                                    W.financial.find(function (e) {
                                      return e.id === parseInt(l);
                                    }).name,
                                    " "
                                  );
                                else if ("working" === n)
                                  e += "".concat(n, "= ").concat(
                                    W.working.find(function (e) {
                                      return e.id === parseInt(l);
                                    }).name,
                                    " "
                                  );
                                else if ("item_power" === n)
                                  e += "Item Power source = ".concat(
                                    W.item_power.find(function (e) {
                                      return e.id === parseInt(l);
                                    }).name,
                                    " "
                                  );
                                else if ("manufacturer" === n) {
                                  var r,
                                    t = I.manufacturer.filter(function (e) {
                                      return e.id === parseInt(l);
                                    });
                                  e += ""
                                    .concat(n, ": ")
                                    .concat(
                                      null === (r = t[0]) || void 0 === r
                                        ? void 0
                                        : r.name,
                                      ", "
                                    );
                                } else e += "".concat(n, "=").concat(l, "&");
                            };
                          for (var l in _) n(l);
                          return e;
                        })(),
                      ],
                    }),
                    (0, Z.jsxs)("h6", {
                      children: [
                        "Date: ",
                        new Date().toISOString().split("T")[0],
                      ],
                    }),
                    (0, Z.jsx)("div", {
                      className: "mt-3 table-container",
                      children: (0, Z.jsxs)(v.Z, {
                        children: [
                          (0, Z.jsx)(f.Z, {
                            children: (0, Z.jsxs)(p.Z, {
                              children: [
                                (0, Z.jsx)(x.Z, {
                                  className: "col-sm-2",
                                  children: (0, Z.jsx)(i.c, {
                                    children: "Type",
                                  }),
                                }),
                                (0, Z.jsx)(x.Z, {
                                  className: "col-sm-2",
                                  children: (0, Z.jsx)(i.c, {
                                    children: "Model",
                                  }),
                                }),
                                (0, Z.jsx)(x.Z, {
                                  className: "col-sm-1",
                                  children: (0, Z.jsx)(i.c, {
                                    children: "Manufacturer",
                                  }),
                                }),
                                (0, Z.jsx)(x.Z, {
                                  className: "col-sm-2",
                                  children: (0, Z.jsx)(i.c, {
                                    children: "PQS/PIS Code",
                                  }),
                                }),
                                (0, Z.jsx)(x.Z, {
                                  className: "col-sm-1",
                                  children: (0, Z.jsx)(i.c, {
                                    children: "Count",
                                  }),
                                }),
                                (0, Z.jsx)(x.Z, {
                                  className: "col-sm-4",
                                  children: (0, Z.jsx)(i.c, {
                                    children: "Facility list",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, Z.jsx)(j.Z, {
                            children:
                              null === D || void 0 === D
                                ? void 0
                                : D.map(function (e, n) {
                                    var l, s, a, c, r, t, i;
                                    return (0, Z.jsxs)(
                                      p.Z,
                                      {
                                        children: [
                                          (0, Z.jsx)(x.Z, {
                                            className: "col-sm-2",
                                            children:
                                              null !== (l = e.item_type) &&
                                              void 0 !== l
                                                ? l
                                                : "-",
                                          }),
                                          (0, Z.jsx)(x.Z, {
                                            className: "col-sm-2",
                                            children:
                                              null !== (s = e.model) &&
                                              void 0 !== s
                                                ? s
                                                : "-",
                                          }),
                                          (0, Z.jsx)(x.Z, {
                                            className: "col-sm-1",
                                            children:
                                              null !== (a = e.manufacturer) &&
                                              void 0 !== a
                                                ? a
                                                : "-",
                                          }),
                                          (0, Z.jsx)(x.Z, {
                                            className: "col-sm-2",
                                            children:
                                              null !== (c = e.pqs) &&
                                              void 0 !== c
                                                ? c
                                                : "-",
                                          }),
                                          (0, Z.jsx)(x.Z, {
                                            className: "col-sm-1",
                                            children:
                                              null !== (r = e.count) &&
                                              void 0 !== r
                                                ? r
                                                : "-",
                                          }),
                                          (0, Z.jsx)(x.Z, {
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
      var s = l(15671),
        a = l(43144),
        c = l(54318),
        r = l(39877),
        t = "http://127.0.0.1:8000/reports/",
        i = (function () {
          function e() {
            (0, s.Z)(this, e);
          }
          return (
            (0, a.Z)(e, [
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
      n.Z = new i();
    },
    23821: function (e, n, l) {
      var s = l(39281),
        a = l(79836),
        c = l(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, c.jsx)(c.Fragment, {
          children: (0, c.jsx)(s.Z, {
            children: (0, c.jsx)(a.Z, { children: n }),
          }),
        });
      };
    },
    12902: function (e, n, l) {
      l.d(n, {
        W: function () {
          return t;
        },
      });
      var s = l(29439),
        a = l(45987),
        c = l(22020),
        r = ["ns", "children"];
      function t(e) {
        var n = e.ns,
          l = e.children,
          t = (0, a.Z)(e, r),
          i = (0, c.$)(n, t),
          o = (0, s.Z)(i, 3),
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
//# sourceMappingURL=1195.c4678ce2.chunk.js.map
