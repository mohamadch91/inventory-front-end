"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [5629],
  {
    78083: function (e, n, t) {
      t.d(n, {
        k: function () {
          return a;
        },
      });
      var a = function (e) {
        if (void 0 !== e && null !== e && "" !== e)
          return (function (e, n) {
            function t(e) {
              return e.split("").reverse().join("");
            }
            var a = /(\d{3}(?!.*\.|$))/g;
            n || (n = " ");
            return t(t(e.toString()).replace(a, "$1" + n));
          })((e = parseInt(e)));
      };
    },
    67116: function (e, n, t) {
      t.d(n, {
        p: function () {
          return l;
        },
      });
      var a = t(60324),
        r = function () {
          return a.Z.language;
        },
        l = function () {
          return "ar" === r() || "en" === r() ? "." : ",";
        };
    },
    35629: function (e, n, t) {
      t.r(n);
      var a = t(1413),
        r = t(74165),
        l = t(15861),
        c = t(29439),
        i = t(72791),
        o = t(30606),
        s = t(12902),
        u = t(91933),
        d = t(16149),
        m = t(51763),
        h = (t(92854), t(59909)),
        p = t(23821),
        f = t(56890),
        v = t(35855),
        x = t(53994),
        j = t(53382),
        g = (t(93650), t(65218)),
        y = t(80794),
        Z = t(78083),
        N = t(67116),
        b = t(80184),
        C = {
          name: "",
          code: "",
          level: "-1",
          type: "-1",
          power: "-1",
          degree: "1",
          option: "1",
          year_from: "-1",
          year_to: "-1",
          calculate_for: "-1",
        },
        _ = [
          { id: "1", name: "2-8 C" },
          { id: "2", name: "-20 C" },
          { id: "3", name: "-70 C" },
          { id: "4", name: "+25 C" },
          { id: "5", name: "Dry store" },
          { id: "6", name: "All" },
        ],
        w = [
          { id: "1", name: "All Equipment" },
          { id: "2", name: "Only equipment from PQS/PIS" },
          { id: "3", name: "Only equipment with installation date" },
        ],
        F = [
          {
            headTitle: "Parent",
            valueKey: "parent",
            func: function (e) {
              return e;
            },
          },
          {
            headTitle: "Name",
            valueKey: "name",
            func: function (e) {
              return e;
            },
          },
          {
            headTitle: "Levels",
            valueKey: "level",
            func: function (e) {
              return e;
            },
          },
          {
            headTitle: "Code",
            valueKey: "code",
            func: function (e) {
              return e;
            },
          },
          {
            headTitle: "Type",
            valueKey: "type",
            func: function (e) {
              return e;
            },
          },
          {
            headTitle: "General",
            valueKey: "general",
            func: function (e) {
              return (0, Z.k)(e);
            },
          },
          {
            headTitle: "Under_1",
            valueKey: "children",
            func: function (e) {
              return (0, Z.k)(e);
            },
          },
        ],
        A = [
          {
            headTitle: "Required capacity (lit.)",
            valueKey: "req",
            func: function (e) {
              return parseFloat(e)
                .toFixed(2)
                .toString()
                .replace(".", (0, N.p)());
            },
          },
          {
            headTitle: "All total available (lit.)",
            valueKey: "tcapacity",
            func: function (e) {
              return parseFloat(e)
                .toFixed(2)
                .toString()
                .replace(".", (0, N.p)());
            },
          },
          {
            headTitle: "Functioning Total Available (lit)",
            valueKey: "fcapacity",
            func: function (e) {
              return parseFloat(e)
                .toFixed(2)
                .toString()
                .replace(".", (0, N.p)());
            },
          },
          {
            headTitle: "Excess/ Shortage (lit.)",
            valueKey: "excees",
            func: function (e) {
              return parseFloat(e)
                .toFixed(2)
                .toString()
                .replace(".", (0, N.p)());
            },
          },
          {
            headTitle: "Items Count",
            valueKey: "item_type",
            func: function (e) {
              return e;
            },
          },
        ];
      n.default = function (e) {
        e.i18n;
        var n = (0, i.useState)(C),
          t = (0, c.Z)(n, 2),
          Z = t[0],
          N = t[1],
          k = (0, i.useState)("1"),
          S = (0, c.Z)(k, 2),
          T = S[0],
          P = S[1],
          K = JSON.parse(localStorage.getItem("country")) || {},
          G = (0, u.useQuery)(
            ["gap-item-helper"],
            (0, l.Z)(
              (0, r.Z)().mark(function e() {
                var n;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), m.Z.getGapItem({ help: !0 });
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
          z = G.data,
          I = G.isLoading,
          D = (0, u.useQuery)(
            ["gap-item-report"],
            (0, l.Z)(
              (0, r.Z)().mark(function e() {
                var n, t, a, l;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (t in ((n = { help: !1 }), Z))
                          (a = Z[t]).length > 0 && "-1" !== a && (n[t] = a);
                        return (e.next = 4), m.Z.getGapItem(n);
                      case 4:
                        return (
                          0 === (l = e.sent).data.data.length &&
                            g.Am.error(
                              (0, b.jsx)(o.c, { children: "No data found" })
                            ),
                          e.abrupt("return", l.data)
                        );
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            {
              refetchOnMount: !1,
              enabled: !1,
              onSuccess: function () {
                P(Z.degree);
              },
            }
          ),
          E = D.data,
          O = D.isLoading,
          Y = D.refetch;
        return I || O
          ? (0, b.jsx)(h.Z, {})
          : (0, b.jsxs)("div", {
              children: [
                (0, b.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, b.jsx)(o.c, { children: "Item gap report" }),
                }),
                (0, b.jsx)("div", {
                  className: "mt-3",
                  children: (0, b.jsx)("div", {
                    className: "card",
                    children: (0, b.jsx)("div", {
                      className: "card-body py-3",
                      children: (0, b.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), Y();
                        },
                        children: [
                          (0, b.jsx)("h4", {
                            children: (0, b.jsx)(o.c, { children: "Filter" }),
                          }),
                          (0, b.jsxs)("div", {
                            className: "row mt-5",
                            children: [
                              (0, b.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, b.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, b.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, b.jsx)(o.c, {
                                          children: "Facility Name",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, b.jsx)(d.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { name: n });
                                        });
                                      },
                                      value: Z.name,
                                    }),
                                  ],
                                }),
                              }),
                              (0, b.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, b.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, b.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, b.jsx)(o.c, { children: "Code" }),
                                        ":",
                                      ],
                                    }),
                                    (0, b.jsx)(d.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { code: n });
                                        });
                                      },
                                      value: Z.code,
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, b.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, b.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, b.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, b.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, b.jsx)(o.c, { children: "Levels" }),
                                        ":",
                                      ],
                                    }),
                                    (0, b.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { level: n });
                                        });
                                      },
                                      value: Z.level,
                                      as: "select",
                                      children: [
                                        (0, b.jsx)(s.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, b.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === z || void 0 === z
                                          ? void 0
                                          : z.level.map(function (e) {
                                              return (0,
                                              b.jsx)("option", { value: e.id, children: "".concat(e.id, " - ").concat(e.name) }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, b.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, b.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, b.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, b.jsx)(o.c, { children: "Type" }),
                                        ":",
                                      ],
                                    }),
                                    (0, b.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { type: n });
                                        });
                                      },
                                      value: Z.type,
                                      as: "select",
                                      children: [
                                        (0, b.jsx)(s.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, b.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === z || void 0 === z
                                          ? void 0
                                          : z.type.map(function (e) {
                                              return (0,
                                              b.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, b.jsx)("div", {
                            className: "row mt-1",
                            children: (0, b.jsx)("div", {
                              className: "col-sm-12 col-lg-6",
                              children: (0, b.jsxs)(d.Z.Group, {
                                className: "row",
                                children: [
                                  (0, b.jsxs)("label", {
                                    className: "label col-sm-4",
                                    children: [
                                      (0, b.jsx)(o.c, {
                                        children: "Power source",
                                      }),
                                      ":",
                                    ],
                                  }),
                                  (0, b.jsxs)(d.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      N(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { power: n });
                                      });
                                    },
                                    value: Z.power,
                                    as: "select",
                                    children: [
                                      (0, b.jsx)(s.W, {
                                        children: function (e, n) {
                                          n.i18n;
                                          return (0, b.jsx)("option", {
                                            i18n: !0,
                                            value: "-1",
                                            selected: !0,
                                            children: e("Please select"),
                                          });
                                        },
                                      }),
                                      null === z || void 0 === z
                                        ? void 0
                                        : z.power.map(function (e) {
                                            return (0,
                                            b.jsx)("option", { value: e.id, children: e.name }, e.id);
                                          }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, b.jsx)("div", {
                            className: "row mt-1",
                            children: (0, b.jsx)("div", {
                              className: "col-sm-12 col-lg-6",
                              children: (0, b.jsxs)(d.Z.Group, {
                                className: "row",
                                children: [
                                  (0, b.jsxs)("label", {
                                    className: "label col-sm-4",
                                    children: [
                                      (0, b.jsx)(o.c, {
                                        children: "Storage conditions",
                                      }),
                                      ":",
                                    ],
                                  }),
                                  (0, b.jsx)(d.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      N(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { degree: n });
                                      });
                                    },
                                    value: Z.item_class,
                                    as: "select",
                                    children:
                                      null === _ || void 0 === _
                                        ? void 0
                                        : _.map(function (e) {
                                            return (0,
                                            b.jsx)("option", { value: e.id, children: e.name }, e.id);
                                          }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, b.jsx)("div", {
                            className: "row mt-5",
                            children: (0, b.jsx)("h4", {
                              children: (0, b.jsx)(o.c, {
                                children: "Item Options",
                              }),
                            }),
                          }),
                          (0, b.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, b.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, b.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, b.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, b.jsx)(o.c, {
                                          children: "Options",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, b.jsx)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { option: n });
                                        });
                                      },
                                      value: Z.item_class,
                                      as: "select",
                                      children:
                                        null === w || void 0 === w
                                          ? void 0
                                          : w.map(function (e) {
                                              return (0,
                                              b.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, b.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, b.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, b.jsxs)("label", {
                                      className: "label col-sm-2",
                                      children: [
                                        (0, b.jsx)(o.c, { children: "from" }),
                                        ":",
                                      ],
                                    }),
                                    (0, b.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-2",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { year_from: n });
                                        });
                                      },
                                      value: Z.year_from,
                                      as: "select",
                                      children: [
                                        (0, b.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          children: "select",
                                        }),
                                        console.log(
                                          new Date().getUTCFullYear()
                                        ),
                                        Array.from({ length: 30 }).map(
                                          function (e, n) {
                                            var t =
                                              new Date().getUTCFullYear() - n;
                                            return (0, b.jsx)(
                                              "option",
                                              { value: t, children: t },
                                              t
                                            );
                                          }
                                        ),
                                      ],
                                    }),
                                    (0, b.jsxs)("label", {
                                      className: "label col-sm-1",
                                      children: [
                                        (0, b.jsx)(o.c, { children: "to" }),
                                        ":",
                                      ],
                                    }),
                                    (0, b.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-2",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { year_to: n });
                                        });
                                      },
                                      value: Z.year_to,
                                      as: "select",
                                      children: [
                                        (0, b.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          children: "select",
                                        }),
                                        Array.from({
                                          length:
                                            new Date().getUTCFullYear() -
                                            Z.year_from +
                                            1,
                                        }).map(function (e, n) {
                                          var t =
                                            new Date().getUTCFullYear() - n;
                                          return (0,
                                          b.jsx)("option", { value: t, children: t }, t);
                                        }),
                                      ],
                                    }),
                                    (0, b.jsx)("label", {
                                      className: "label col-sm-3",
                                      children: (0, b.jsx)(o.c, {
                                        children: "Calculate for Year:",
                                      }),
                                    }),
                                    (0, b.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-2",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { calculate_for: n });
                                        });
                                      },
                                      value: Z.calculate_for,
                                      as: "select",
                                      children: [
                                        (0, b.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          children: "select",
                                        }),
                                        Array.from({ length: 10 }).map(
                                          function (e, n) {
                                            var t =
                                              new Date().getUTCFullYear() + n;
                                            return (0, b.jsx)(
                                              "option",
                                              { value: t, children: t },
                                              t
                                            );
                                          }
                                        ),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, b.jsxs)("div", {
                            className: "row mt-4",
                            children: [
                              (0, b.jsx)("div", {
                                className: "col-sm-2",
                                children: (0, b.jsx)("button", {
                                  type: "submit",
                                  className: "btn btn-primary fs-5",
                                  children: (0, b.jsx)(o.c, {
                                    children: "Report",
                                  }),
                                }),
                              }),
                              (0, b.jsx)("div", {
                                className: "col-sm-3 ",
                                children: (0, b.jsx)("button", {
                                  type: "button",
                                  className: "btn btn-secondary fs-5",
                                  onClick: function () {
                                    N(C), window.location.reload();
                                  },
                                  children: (0, b.jsx)(o.c, {
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
                (0, b.jsx)("div", {
                  className: "mt-3",
                  children: (0, b.jsx)("div", {
                    className: "card",
                    children: (0, b.jsxs)("div", {
                      className: "card-body py-3",
                      children: [
                        (0, b.jsxs)("h4", {
                          children: [
                            (0, b.jsx)(o.c, { children: "Report" }),
                            " : ",
                            (0, b.jsx)(o.c, { children: "Item gap report" }),
                            (0, b.jsxs)(o.c, {
                              children: [
                                " (",
                                null === K || void 0 === K ? void 0 : K.country,
                                ")",
                              ],
                            }),
                          ],
                        }),
                        (0, b.jsxs)("h6", {
                          children: [
                            (0, b.jsx)(o.c, { children: "Filter" }),
                            " : ",
                            "",
                            " ",
                            (function () {
                              var e = "",
                                n = function (n) {
                                  var t = Z[n];
                                  t.length > 0 &&
                                    "-1" !== t &&
                                    (e +=
                                      "degree" === n
                                        ? "Storage condition:".concat(
                                            _.find(function (e) {
                                              return e.id === t;
                                            }).name,
                                            " , "
                                          )
                                        : "option" === n
                                        ? "Option : ".concat(
                                            w.find(function (e) {
                                              return e.id === t;
                                            }).name,
                                            " , "
                                          )
                                        : "type" === n
                                        ? "Type : ".concat(
                                            null === z || void 0 === z
                                              ? void 0
                                              : z.type.find(function (e) {
                                                  return e.id === parseInt(t);
                                                }).name,
                                            " , "
                                          )
                                        : "level" === n
                                        ? "Level :   "
                                            .concat(
                                              null === z || void 0 === z
                                                ? void 0
                                                : z.level.find(function (e) {
                                                    return e.id === parseInt(t);
                                                  }).id,
                                              "  - "
                                            )
                                            .concat(
                                              null === z || void 0 === z
                                                ? void 0
                                                : z.level.find(function (e) {
                                                    return e.id === parseInt(t);
                                                  }).name,
                                              " , "
                                            )
                                        : "power" === n
                                        ? "Power source = ".concat(
                                            null === z || void 0 === z
                                              ? void 0
                                              : z.power.find(function (e) {
                                                  return e.id === parseInt(t);
                                                }).name,
                                            " , "
                                          )
                                        : "code" === n
                                        ? "Code : ".concat(t, " , ")
                                        : "name" === n
                                        ? "Facility name : ".concat(t, " , ")
                                        : "year_from" === n
                                        ? "Year from : ".concat(t, " , ")
                                        : "year_to" === n
                                        ? "Year to : ".concat(t, " , ")
                                        : "calculate_for" === n
                                        ? "Calculate for : ".concat(t, " , ")
                                        : "".concat(n, " = ").concat(t, " , "));
                                };
                              for (var t in Z) n(t);
                              return e;
                            })(),
                          ],
                        }),
                        (0, b.jsxs)("h6", {
                          children: [
                            (0, b.jsx)(o.c, { children: "Date" }),
                            ": ",
                            new Date().toLocaleDateString("en-GB"),
                          ],
                        }),
                        (0, b.jsx)("div", {
                          className: "mt-3 table-container ",
                          children: (0, b.jsxs)(p.Z, {
                            children: [
                              (0, b.jsxs)(f.Z, {
                                children: [
                                  (0, b.jsxs)(v.Z, {
                                    children: [
                                      (0, b.jsx)(x.Z, {
                                        align: "center",
                                        colSpan: 5,
                                        children: (0, b.jsx)(o.c, {
                                          children: "Facility information",
                                        }),
                                      }),
                                      (0, b.jsx)(x.Z, {
                                        align: "center",
                                        colSpan: 2,
                                        children: (0, b.jsx)(o.c, {
                                          children: "Population",
                                        }),
                                      }),
                                      "6" === T
                                        ? Array.from({ length: 5 }).map(
                                            function (e, n) {
                                              return (0, b.jsx)(
                                                x.Z,
                                                {
                                                  align: "center",
                                                  colSpan: 6,
                                                  style: {
                                                    textAlign: "center",
                                                  },
                                                  children: _[n].name,
                                                },
                                                n
                                              );
                                            }
                                          )
                                        : (0, b.jsx)(x.Z, {
                                            align: "center",
                                            colSpan: 6,
                                            style: { textAlign: "center" },
                                            children: _[+T - 1].name,
                                          }),
                                    ],
                                  }),
                                  (0, b.jsxs)(v.Z, {
                                    children: [
                                      F.map(function (e) {
                                        return (0,
                                        b.jsx)(x.Z, { children: (0, b.jsx)(o.c, { children: e.headTitle }) }, e.headTitle);
                                      }),
                                      Array.from({
                                        length: "6" === T ? 5 : 1,
                                      }).map(function (e, n) {
                                        return (0, b.jsx)(
                                          i.Fragment,
                                          {
                                            children: A.map(function (e) {
                                              return (0,
                                              b.jsx)(x.Z, { colSpan: "item_type" === e.valueKey ? 2 : 1, children: (0, b.jsx)(o.c, { children: e.headTitle }) }, "".concat(e.valueKey).concat(n + 1));
                                            }),
                                          },
                                          n
                                        );
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, b.jsx)(j.Z, {
                                children:
                                  null === E || void 0 === E
                                    ? void 0
                                    : E.data.map(function (e, n) {
                                        return (0, b.jsxs)(
                                          v.Z,
                                          {
                                            children: [
                                              F.map(function (n) {
                                                var t;
                                                return (0,
                                                b.jsx)(x.Z, { children: null !== (t = n.func(e[n.valueKey])) && void 0 !== t ? t : "-" }, n.valueKey);
                                              }),
                                              Array.from({
                                                length: "6" === T ? 5 : 1,
                                              }).map(function (n, t) {
                                                return (0, b.jsx)(
                                                  i.Fragment,
                                                  {
                                                    children: A.map(function (
                                                      n
                                                    ) {
                                                      var a;
                                                      return (0, b.jsx)(
                                                        b.Fragment,
                                                        {
                                                          children:
                                                            "item_type" ===
                                                            n.valueKey
                                                              ? (0, b.jsxs)(
                                                                  x.Z,
                                                                  {
                                                                    colSpan: 2,
                                                                    children: [
                                                                      (0,
                                                                      b.jsx)(
                                                                        b.Fragment,
                                                                        {
                                                                          children:
                                                                            "2" !==
                                                                              T &&
                                                                            "3" !==
                                                                              T &&
                                                                            "6" !==
                                                                              T &&
                                                                            (0,
                                                                            b.jsxs)(
                                                                              b.Fragment,
                                                                              {
                                                                                children:
                                                                                  [
                                                                                    e
                                                                                      .item_type
                                                                                      .name,
                                                                                    ":",
                                                                                    e
                                                                                      .item_type
                                                                                      .count,
                                                                                    (0,
                                                                                    b.jsx)(
                                                                                      "br",
                                                                                      {}
                                                                                    ),
                                                                                    e
                                                                                      .item_type
                                                                                      .name1,
                                                                                    ":",
                                                                                    e
                                                                                      .item_type
                                                                                      .count1,
                                                                                    (0,
                                                                                    b.jsx)(
                                                                                      "br",
                                                                                      {}
                                                                                    ),
                                                                                    e
                                                                                      .item_type
                                                                                      .name2,
                                                                                    ":",
                                                                                    e
                                                                                      .item_type
                                                                                      .count2,
                                                                                  ],
                                                                              }
                                                                            ),
                                                                        }
                                                                      ),
                                                                      (0,
                                                                      b.jsx)(
                                                                        b.Fragment,
                                                                        {
                                                                          children:
                                                                            "2" ===
                                                                              T &&
                                                                            (0,
                                                                            b.jsxs)(
                                                                              b.Fragment,
                                                                              {
                                                                                children:
                                                                                  [
                                                                                    e
                                                                                      .item_type
                                                                                      .name,
                                                                                    " :",
                                                                                    " ",
                                                                                    e
                                                                                      .item_type
                                                                                      .count,
                                                                                    (0,
                                                                                    b.jsx)(
                                                                                      "br",
                                                                                      {}
                                                                                    ),
                                                                                    e
                                                                                      .item_type
                                                                                      .name1,
                                                                                    " :",
                                                                                    " ",
                                                                                    e
                                                                                      .item_type
                                                                                      .count1,
                                                                                  ],
                                                                              }
                                                                            ),
                                                                        }
                                                                      ),
                                                                      (0,
                                                                      b.jsx)(
                                                                        b.Fragment,
                                                                        {
                                                                          children:
                                                                            "3" ===
                                                                              T &&
                                                                            (0,
                                                                            b.jsxs)(
                                                                              b.Fragment,
                                                                              {
                                                                                children:
                                                                                  [
                                                                                    e
                                                                                      .item_type
                                                                                      .name,
                                                                                    ":",
                                                                                    e
                                                                                      .item_type
                                                                                      .count,
                                                                                  ],
                                                                              }
                                                                            ),
                                                                        }
                                                                      ),
                                                                      (0,
                                                                      b.jsx)(
                                                                        b.Fragment,
                                                                        {
                                                                          children:
                                                                            "6" ===
                                                                              T &&
                                                                            (0,
                                                                            b.jsxs)(
                                                                              b.Fragment,
                                                                              {
                                                                                children:
                                                                                  [
                                                                                    console.log(
                                                                                      t
                                                                                    ),
                                                                                    1 !==
                                                                                      t &&
                                                                                      2 !==
                                                                                        t &&
                                                                                      (0,
                                                                                      b.jsxs)(
                                                                                        b.Fragment,
                                                                                        {
                                                                                          children:
                                                                                            [
                                                                                              e
                                                                                                .item_type
                                                                                                .name,
                                                                                              ":",
                                                                                              e
                                                                                                .item_type
                                                                                                .count,
                                                                                              (0,
                                                                                              b.jsx)(
                                                                                                "br",
                                                                                                {}
                                                                                              ),
                                                                                              e
                                                                                                .item_type
                                                                                                .name1,
                                                                                              ":",
                                                                                              e
                                                                                                .item_type
                                                                                                .count1,
                                                                                              (0,
                                                                                              b.jsx)(
                                                                                                "br",
                                                                                                {}
                                                                                              ),
                                                                                              e
                                                                                                .item_type
                                                                                                .name2,
                                                                                              ":",
                                                                                              e
                                                                                                .item_type
                                                                                                .count2,
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                    1 ==
                                                                                      t &&
                                                                                      (0,
                                                                                      b.jsxs)(
                                                                                        b.Fragment,
                                                                                        {
                                                                                          children:
                                                                                            [
                                                                                              e
                                                                                                .item_type
                                                                                                .name5,
                                                                                              ":",
                                                                                              e
                                                                                                .item_type
                                                                                                .count5,
                                                                                              (0,
                                                                                              b.jsx)(
                                                                                                "br",
                                                                                                {}
                                                                                              ),
                                                                                              e
                                                                                                .item_type
                                                                                                .name4,
                                                                                              " :",
                                                                                              e
                                                                                                .item_type
                                                                                                .count4,
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                    2 ==
                                                                                      t &&
                                                                                      (0,
                                                                                      b.jsxs)(
                                                                                        b.Fragment,
                                                                                        {
                                                                                          children:
                                                                                            [
                                                                                              e
                                                                                                .item_type
                                                                                                .name3,
                                                                                              ":",
                                                                                              e
                                                                                                .item_type
                                                                                                .count3,
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                  ],
                                                                              }
                                                                            ),
                                                                        }
                                                                      ),
                                                                    ],
                                                                  },
                                                                  ""
                                                                    .concat(
                                                                      n.valueKey
                                                                    )
                                                                    .concat(
                                                                      t + 1
                                                                    )
                                                                )
                                                              : (0, b.jsx)(
                                                                  x.Z,
                                                                  {
                                                                    style: {
                                                                      color:
                                                                        "excees" ===
                                                                        n.valueKey
                                                                          ? e[
                                                                              "exceed".concat(
                                                                                t +
                                                                                  1
                                                                              )
                                                                            ]
                                                                            ? "blue"
                                                                            : "red"
                                                                          : "unset",
                                                                    },
                                                                    children:
                                                                      null !==
                                                                        (a =
                                                                          n.func(
                                                                            e[
                                                                              ""
                                                                                .concat(
                                                                                  n.valueKey
                                                                                )
                                                                                .concat(
                                                                                  t +
                                                                                    1
                                                                                )
                                                                            ]
                                                                          )) &&
                                                                      void 0 !==
                                                                        a
                                                                        ? a
                                                                        : "-",
                                                                  },
                                                                  ""
                                                                    .concat(
                                                                      n.valueKey
                                                                    )
                                                                    .concat(
                                                                      t + 1
                                                                    )
                                                                ),
                                                        }
                                                      );
                                                    }),
                                                  },
                                                  t
                                                );
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
                        (null === E || void 0 === E ? void 0 : E.excel) &&
                          (0, b.jsxs)("div", {
                            className: "row mt-4",
                            children: [
                              (0, b.jsx)("div", {
                                className: "col-sm-2",
                                children: (0, b.jsx)("a", {
                                  href: y.Z + E.excel,
                                  download: !0,
                                  children: (0, b.jsx)("button", {
                                    className: "btn btn-primary",
                                    children: (0, b.jsx)(o.c, {
                                      children: "Export to MS Excel",
                                    }),
                                  }),
                                }),
                              }),
                              (0, b.jsx)("div", {
                                className: "col-sm-2",
                                children: (0, b.jsx)("button", {
                                  onClick: function () {
                                    m.Z.savegaps(
                                      Z.degree,
                                      null === E || void 0 === E
                                        ? void 0
                                        : E.save
                                    ).then(function (e) {
                                      console.log(e);
                                    });
                                  },
                                  className: "btn btn-primary",
                                  children: (0, b.jsx)(o.c, {
                                    children: "Save Reports",
                                  }),
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                }),
              ],
            });
      };
    },
    51763: function (e, n, t) {
      var a = t(15671),
        r = t(43144),
        l = t(54318),
        c = t(39877),
        i = "https://tlsapi.invgap.org/reports/",
        o = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return c.Z.get(i + "excel", {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return c.Z.get(i + "facseg", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return c.Z.get(i + "subfacpop", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return c.Z.get(i + "facmap", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return c.Z.get(i + "gapmap", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return c.Z.get(i + "item-gp", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return c.Z.get(i + "itemfac", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return c.Z.get(i + "gapitem", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return c.Z.get(i + "facprof", {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return c.Z.get(i + "coldprof", {
                    headers: { Authorization: (0, l.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return c.Z.get(i + "planingreport", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return c.Z.get(i + "gapcce", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return c.Z.get(i + "gapccePlan", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return c.Z.post(i + "gapccePlan", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return c.Z.delete(i + "gapccePlan", {
                    headers: { Authorization: (0, l.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return c.Z.put(i + "gapccePlan", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "savegaps",
                value: function (e, n) {
                  return c.Z.post(i + "gapsave?condition=" + e, n, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new o();
    },
    23821: function (e, n, t) {
      var a = t(39281),
        r = t(79836),
        l = t(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)(a.Z, {
            children: (0, l.jsx)(r.Z, { children: n }),
          }),
        });
      };
    },
    12902: function (e, n, t) {
      t.d(n, {
        W: function () {
          return i;
        },
      });
      var a = t(29439),
        r = t(45987),
        l = t(22020),
        c = ["ns", "children"];
      function i(e) {
        var n = e.ns,
          t = e.children,
          i = (0, r.Z)(e, c),
          o = (0, l.$)(n, i),
          s = (0, a.Z)(o, 3),
          u = s[0],
          d = s[1],
          m = s[2];
        return t(u, { i18n: d, lng: d.language }, m);
      }
    },
    92854: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=5629.70ca0756.chunk.js.map
