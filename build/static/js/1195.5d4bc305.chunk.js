/*! For license information please see 1195.5d4bc305.chunk.js.LICENSE.txt */
"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [1195],
  {
    91195: function (e, t, n) {
      n.r(t);
      var r = n(1413),
        a = n(74165),
        l = n(15861),
        o = n(29439),
        c = n(72791),
        s = n(30606),
        i = n(91933),
        u = n(16149),
        d = n(51763),
        h = (n(92854), n(59909)),
        m = n(23821),
        f = n(56890),
        v = n(35855),
        p = n(53994),
        x = n(53382),
        j = (n(93650), n(80184)),
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
      t.default = function () {
        var e,
          t,
          n,
          y,
          Z,
          N,
          b = (0, c.useState)(g),
          w = (0, o.Z)(b, 2),
          C = w[0],
          _ = w[1],
          P = (0, c.useState)(null),
          k = (0, o.Z)(P, 2),
          G = k[0],
          L = k[1],
          E = (0, i.useQuery)(
            ["item-gp-helper"],
            (0, l.Z)(
              (0, a.Z)().mark(function e() {
                var t;
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), d.Z.getItemGp({ help: !0 });
                      case 2:
                        return (t = e.sent), e.abrupt("return", t.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )
          ),
          A = E.data,
          F = E.isLoading,
          z = (0, i.useQuery)(
            ["item-gp-report"],
            (0, l.Z)(
              (0, a.Z)().mark(function e() {
                var t, n, r, l;
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (n in ((t = { help: !1 }), C))
                          (r = C[n]).length > 0 && "-1" !== r && (t[n] = r);
                        return (e.next = 4), d.Z.getItemGp(t);
                      case 4:
                        return (l = e.sent), e.abrupt("return", l.data);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { refetchOnMount: !1, enabled: !1 }
          ),
          S = z.data,
          O = z.isLoading,
          I = z.refetch;
        return F || O
          ? (0, j.jsx)(h.Z, {})
          : (0, j.jsxs)("div", {
              children: [
                (0, j.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, j.jsx)(s.c, {
                    children: "Item Grouped Report",
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
                          e.preventDefault(), I();
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
                                        var t = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { name: t });
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
                                        var t = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { code: t });
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
                                        var t = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { level: t });
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
                                      children: (0, j.jsx)(s.c, {
                                        children: "Type:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var t = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { type: t });
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
                                    children: (0, j.jsx)(s.c, {
                                      children: "Power source:",
                                    }),
                                  }),
                                  (0, j.jsxs)(u.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var t = e.target.value;
                                      _(function (e) {
                                        return (0,
                                        r.Z)((0, r.Z)({}, e), {}, { power: t });
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
                                        var t = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { item_class: t, item_type: "-1", manufacturer: "-1" });
                                        }),
                                          L(
                                            A.item.find(function (e) {
                                              return e.item_class_id === +t;
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
                                      children: (0, j.jsx)(s.c, {
                                        children: "Item type:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      disabled: !G,
                                      onChange: function (e) {
                                        var t = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { item_type: t });
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
                                        var t = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { physical: t });
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
                                        null === (t = A.physical) ||
                                        void 0 === t
                                          ? void 0
                                          : t.map(function (e) {
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
                                        var t = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { working: t });
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
                                        null === (n = A.working) ||
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
                                        var t = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { financial: t });
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
                                      children: (0, j.jsx)(s.c, {
                                        children: "Power source:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var t = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { item_power: t });
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
                                        null === (Z = A.item_power) ||
                                        void 0 === Z
                                          ? void 0
                                          : Z.map(function (e) {
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
                                        children: "PQS/PIS Code:",
                                      }),
                                    }),
                                    (0, j.jsx)(u.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var t = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { pqs: t });
                                        });
                                      },
                                      value: C.pqs,
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
                                        children: "Manufacturer:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      disabled: !G,
                                      onChange: function (e) {
                                        var t = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { manufacturer: t });
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
                                        null === (N = G.manufacturer) ||
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
                                className: "col-sm-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(s.c, {
                                        children: "Year installed:",
                                      }),
                                    }),
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-2",
                                      children: (0, j.jsx)(s.c, {
                                        children: "from:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-2",
                                      onChange: function (e) {
                                        var t = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { year_from: t });
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
                                        Array.from({ length: 30 }).map(
                                          function (e, t) {
                                            var n =
                                              new Date().getUTCFullYear() - t;
                                            return (0, j.jsx)(
                                              "option",
                                              { value: n, children: n },
                                              n
                                            );
                                          }
                                        ),
                                      ],
                                    }),
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-2",
                                      children: (0, j.jsx)(s.c, {
                                        children: "to:",
                                      }),
                                    }),
                                    (0, j.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-2",
                                      onChange: function (e) {
                                        var t = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { year_to: t });
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
                                        Array.from({ length: 30 }).map(
                                          function (e, t) {
                                            var n =
                                              new Date().getUTCFullYear() - t;
                                            return (0, j.jsx)(
                                              "option",
                                              { value: n, children: n },
                                              n
                                            );
                                          }
                                        ),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, j.jsx)("div", {
                                className: "col-sm-6",
                                children: (0, j.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, j.jsx)(s.c, {
                                        children: "Capacity:",
                                      }),
                                    }),
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-2",
                                      children: (0, j.jsx)(s.c, {
                                        children: "from:",
                                      }),
                                    }),
                                    (0, j.jsx)(u.Z.Control, {
                                      className: "form-control col-sm-2",
                                      type: "number",
                                      onChange: function (e) {
                                        var t = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { capacity_from: t });
                                        });
                                      },
                                      value: C.capacity_from,
                                    }),
                                    (0, j.jsx)("label", {
                                      className: "label col-sm-2",
                                      children: (0, j.jsx)(s.c, {
                                        children: "to:",
                                      }),
                                    }),
                                    (0, j.jsx)(u.Z.Control, {
                                      className: "form-control col-sm-2",
                                      onChange: function (e) {
                                        var t = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { capacity_to: t });
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
                                    return _(g);
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
                          children: (0, j.jsx)(s.c, { children: "Reports" }),
                        }),
                        (0, j.jsx)("div", {
                          className: "mt-3 table-container",
                          children: (0, j.jsxs)(m.Z, {
                            children: [
                              (0, j.jsx)(f.Z, {
                                children: (0, j.jsxs)(v.Z, {
                                  children: [
                                    (0, j.jsx)(p.Z, {
                                      className: "col-sm-2",
                                      children: (0, j.jsx)(s.c, {
                                        children: "Type",
                                      }),
                                    }),
                                    (0, j.jsx)(p.Z, {
                                      className: "col-sm-2",
                                      children: (0, j.jsx)(s.c, {
                                        children: "Model",
                                      }),
                                    }),
                                    (0, j.jsx)(p.Z, {
                                      className: "col-sm-1",
                                      children: (0, j.jsx)(s.c, {
                                        children: "Manufacturer",
                                      }),
                                    }),
                                    (0, j.jsx)(p.Z, {
                                      className: "col-sm-2",
                                      children: (0, j.jsx)(s.c, {
                                        children: "PQS/PIS Code",
                                      }),
                                    }),
                                    (0, j.jsx)(p.Z, {
                                      className: "col-sm-1",
                                      children: (0, j.jsx)(s.c, {
                                        children: "Count",
                                      }),
                                    }),
                                    (0, j.jsx)(p.Z, {
                                      className: "col-sm-4",
                                      children: (0, j.jsx)(s.c, {
                                        children: "Facility list",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, j.jsx)(x.Z, {
                                children:
                                  null === S || void 0 === S
                                    ? void 0
                                    : S.map(function (e, t) {
                                        var n, r, a, l, o, c, s;
                                        return (0, j.jsxs)(
                                          v.Z,
                                          {
                                            children: [
                                              (0, j.jsx)(p.Z, {
                                                className: "col-sm-2",
                                                children:
                                                  null !== (n = e.item_type) &&
                                                  void 0 !== n
                                                    ? n
                                                    : "-",
                                              }),
                                              (0, j.jsx)(p.Z, {
                                                className: "col-sm-2",
                                                children:
                                                  null !== (r = e.model) &&
                                                  void 0 !== r
                                                    ? r
                                                    : "-",
                                              }),
                                              (0, j.jsx)(p.Z, {
                                                className: "col-sm-1",
                                                children:
                                                  null !==
                                                    (a = e.manufacturer) &&
                                                  void 0 !== a
                                                    ? a
                                                    : "-",
                                              }),
                                              (0, j.jsx)(p.Z, {
                                                className: "col-sm-2",
                                                children:
                                                  null !== (l = e.pqs) &&
                                                  void 0 !== l
                                                    ? l
                                                    : "-",
                                              }),
                                              (0, j.jsx)(p.Z, {
                                                className: "col-sm-1",
                                                children:
                                                  null !== (o = e.count) &&
                                                  void 0 !== o
                                                    ? o
                                                    : "-",
                                              }),
                                              (0, j.jsx)(p.Z, {
                                                className: "col-sm-4",
                                                children:
                                                  null !==
                                                    (c =
                                                      null ===
                                                        (s = e.facility) ||
                                                      void 0 === s
                                                        ? void 0
                                                        : s.map(function (
                                                            t,
                                                            n
                                                          ) {
                                                            return ""
                                                              .concat(t.name)
                                                              .concat(
                                                                n ===
                                                                  e.facility
                                                                    .length -
                                                                    1
                                                                  ? ""
                                                                  : ", "
                                                              );
                                                          })) && void 0 !== c
                                                    ? c
                                                    : "-",
                                              }),
                                            ],
                                          },
                                          t
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
    51763: function (e, t, n) {
      var r = n(15671),
        a = n(43144),
        l = n(54318),
        o = n(39877),
        c = "http://127.0.0.1:8000/reports/",
        s = (function () {
          function e() {
            (0, r.Z)(this, e);
          }
          return (
            (0, a.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return o.Z.get(c + "excel", {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return o.Z.get(c + "facseg", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return o.Z.get(c + "subfacpop", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return o.Z.get(c + "facmap", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return o.Z.get(c + "gapmap", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return o.Z.get(c + "item-gp", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return o.Z.get(c + "itemfac", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return o.Z.get(c + "gapitem", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return o.Z.get(c + "facprof", {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return o.Z.get(c + "coldprof", {
                    headers: { Authorization: (0, l.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return o.Z.get(c + "planingreport", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return o.Z.get(c + "gapcce", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return o.Z.get(c + "gapccePlan", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return o.Z.post(c + "gapccePlan", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return o.Z.delete(c + "gapccePlan", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return o.Z.delete(c + "gapccePlan", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      t.Z = new s();
    },
    23821: function (e, t, n) {
      var r = n(39281),
        a = n(79836),
        l = n(80184);
      t.Z = function (e) {
        var t = e.children;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)(r.Z, {
            children: (0, l.jsx)(a.Z, { children: t }),
          }),
        });
      };
    },
    92854: function () {},
    93650: function () {},
    15861: function (e, t, n) {
      function r(e, t, n, r, a, l, o) {
        try {
          var c = e[l](o),
            s = c.value;
        } catch (i) {
          return void n(i);
        }
        c.done ? t(s) : Promise.resolve(s).then(r, a);
      }
      function a(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (a, l) {
            var o = e.apply(t, n);
            function c(e) {
              r(o, a, l, c, s, "next", e);
            }
            function s(e) {
              r(o, a, l, c, s, "throw", e);
            }
            c(void 0);
          });
        };
      }
      n.d(t, {
        Z: function () {
          return a;
        },
      });
    },
    74165: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(71002);
      function a() {
        a = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          l = "function" == typeof Symbol ? Symbol : {},
          o = l.iterator || "@@iterator",
          c = l.asyncIterator || "@@asyncIterator",
          s = l.toStringTag || "@@toStringTag";
        function i(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          i({}, "");
        } catch (k) {
          i = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, r) {
          var a = t && t.prototype instanceof m ? t : m,
            l = Object.create(a.prototype),
            o = new C(r || []);
          return (
            (l._invoke = (function (e, t, n) {
              var r = "suspendedStart";
              return function (a, l) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === a) throw l;
                  return P();
                }
                for (n.method = a, n.arg = l; ; ) {
                  var o = n.delegate;
                  if (o) {
                    var c = N(o, n);
                    if (c) {
                      if (c === h) continue;
                      return c;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === r)
                      throw ((r = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = "executing";
                  var s = d(e, t, n);
                  if ("normal" === s.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      s.arg === h)
                    )
                      continue;
                    return { value: s.arg, done: n.done };
                  }
                  "throw" === s.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
                }
              };
            })(e, n, o)),
            l
          );
        }
        function d(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        e.wrap = u;
        var h = {};
        function m() {}
        function f() {}
        function v() {}
        var p = {};
        i(p, o, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          j = x && x(x(_([])));
        j && j !== t && n.call(j, o) && (p = j);
        var g = (v.prototype = m.prototype = Object.create(p));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            i(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function Z(e, t) {
          function a(l, o, c, s) {
            var i = d(e[l], e, o);
            if ("throw" !== i.type) {
              var u = i.arg,
                h = u.value;
              return h && "object" == (0, r.Z)(h) && n.call(h, "__await")
                ? t.resolve(h.__await).then(
                    function (e) {
                      a("next", e, c, s);
                    },
                    function (e) {
                      a("throw", e, c, s);
                    }
                  )
                : t.resolve(h).then(
                    function (e) {
                      (u.value = e), c(u);
                    },
                    function (e) {
                      return a("throw", e, c, s);
                    }
                  );
            }
            s(i.arg);
          }
          var l;
          this._invoke = function (e, n) {
            function r() {
              return new t(function (t, r) {
                a(e, n, t, r);
              });
            }
            return (l = l ? l.then(r, r) : r());
          };
        }
        function N(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                N(e, t),
                "throw" === t.method)
              )
                return h;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return h;
          }
          var r = d(n, e.iterator, t.arg);
          if ("throw" === r.type)
            return (
              (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), h
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((t[e.resultName] = a.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                h)
              : a
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              h);
        }
        function b(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function w(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function C(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(b, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: P };
        }
        function P() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = v),
          i(g, "constructor", v),
          i(v, "constructor", f),
          (f.displayName = i(v, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === f || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, v)
                : ((e.__proto__ = v), i(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(Z.prototype),
          i(Z.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = Z),
          (e.async = function (t, n, r, a, l) {
            void 0 === l && (l = Promise);
            var o = new Z(u(t, n, r, a), l);
            return e.isGeneratorFunction(n)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next();
                });
          }),
          y(g),
          i(g, s, "Generator"),
          i(g, o, function () {
            return this;
          }),
          i(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = _),
          (C.prototype = {
            constructor: C,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(w),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (o.type = "throw"),
                  (o.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var l = this.tryEntries[a],
                  o = l.completion;
                if ("root" === l.tryLoc) return r("end");
                if (l.tryLoc <= this.prev) {
                  var c = n.call(l, "catchLoc"),
                    s = n.call(l, "finallyLoc");
                  if (c && s) {
                    if (this.prev < l.catchLoc) return r(l.catchLoc, !0);
                    if (this.prev < l.finallyLoc) return r(l.finallyLoc);
                  } else if (c) {
                    if (this.prev < l.catchLoc) return r(l.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < l.finallyLoc) return r(l.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var l = a;
                  break;
                }
              }
              l &&
                ("break" === e || "continue" === e) &&
                l.tryLoc <= t &&
                t <= l.finallyLoc &&
                (l = null);
              var o = l ? l.completion : {};
              return (
                (o.type = e),
                (o.arg = t),
                l
                  ? ((this.method = "next"), (this.next = l.finallyLoc), h)
                  : this.complete(o)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                h
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), w(n), h;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    w(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                h
              );
            },
          }),
          e
        );
      }
    },
  },
]);
//# sourceMappingURL=1195.5d4bc305.chunk.js.map
