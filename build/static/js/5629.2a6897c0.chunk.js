"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [5629],
  {
    78083: function (e, n, a) {
      a.d(n, {
        k: function () {
          return r;
        },
      });
      var r = function (e) {
        if (void 0 !== e && null !== e && "" !== e)
          return (function (e, n) {
            function a(e) {
              return e.split("").reverse().join("");
            }
            var r = /(\d{3}(?!.*\.|$))/g;
            n || (n = " ");
            return a(a(e.toString()).replace(r, "$1" + n));
          })((e = parseInt(e)));
      };
    },
    67116: function (e, n, a) {
      a.d(n, {
        p: function () {
          return l;
        },
      });
      var r = a(60324),
        t = function () {
          return r.Z.language;
        },
        l = function () {
          return "ar" === t() || "en" === t() ? "." : ",";
        };
    },
    35629: function (e, n, a) {
      a.r(n);
      var r = a(1413),
        t = a(74165),
        l = a(15861),
        c = a(29439),
        i = a(72791),
        o = a(30606),
        s = a(12902),
        u = a(91933),
        d = a(16149),
        h = a(51763),
        m = (a(92854), a(59909)),
        f = a(23821),
        v = a(56890),
        p = a(35855),
        x = a(53994),
        j = a(53382),
        g = (a(93650), a(65218)),
        Z = a(80794),
        y = a(78083),
        N = a(67116),
        C = a(80184),
        b = {
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
        w = [
          { id: "1", name: "2-8 C" },
          { id: "2", name: "-20 C" },
          { id: "3", name: "-70 C" },
          { id: "4", name: "+25 C" },
          { id: "5", name: "Dry store" },
          { id: "6", name: "All" },
        ],
        A = [
          { id: "1", name: "All Equipment" },
          { id: "2", name: "Only equipment from PQS/PIS" },
          { id: "3", name: "Only equipment with installation date" },
        ],
        k = [
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
              return (0, y.k)(e);
            },
          },
          {
            headTitle: "Under_1",
            valueKey: "children",
            func: function (e) {
              return (0, y.k)(e);
            },
          },
        ],
        F = [
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
        ];
      n.default = function (e) {
        e.i18n;
        var n = (0, i.useState)(b),
          a = (0, c.Z)(n, 2),
          y = a[0],
          N = a[1],
          S = (0, i.useState)("1"),
          T = (0, c.Z)(S, 2),
          P = T[0],
          G = T[1],
          K = JSON.parse(localStorage.getItem("country")) || {},
          z = (0, u.useQuery)(
            ["gap-item-helper"],
            (0, l.Z)(
              (0, t.Z)().mark(function e() {
                var n;
                return (0, t.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), h.Z.getGapItem({ help: !0 });
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
          _ = z.data,
          I = z.isLoading,
          D = (0, u.useQuery)(
            ["gap-item-report"],
            (0, l.Z)(
              (0, t.Z)().mark(function e() {
                var n, a, r, l;
                return (0, t.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (a in ((n = { help: !1 }), y))
                          (r = y[a]).length > 0 && "-1" !== r && (n[a] = r);
                        return (e.next = 4), h.Z.getGapItem(n);
                      case 4:
                        return (
                          0 === (l = e.sent).data.data.length &&
                            g.Am.error(
                              (0, C.jsx)(o.c, { children: "No data found" })
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
                G(y.degree);
              },
            }
          ),
          E = D.data,
          O = D.isLoading,
          Y = D.refetch;
        return I || O
          ? (0, C.jsx)(m.Z, {})
          : (0, C.jsxs)("div", {
              children: [
                (0, C.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, C.jsx)(o.c, { children: "Item gap report" }),
                }),
                (0, C.jsx)("div", {
                  className: "mt-3",
                  children: (0, C.jsx)("div", {
                    className: "card",
                    children: (0, C.jsx)("div", {
                      className: "card-body py-3",
                      children: (0, C.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), Y();
                        },
                        children: [
                          (0, C.jsx)("h4", {
                            children: (0, C.jsx)(o.c, { children: "Filter" }),
                          }),
                          (0, C.jsxs)("div", {
                            className: "row mt-5",
                            children: [
                              (0, C.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, C.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, C.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, C.jsx)(o.c, {
                                          children: "Facility Name",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, C.jsx)(d.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { name: n });
                                        });
                                      },
                                      value: y.name,
                                    }),
                                  ],
                                }),
                              }),
                              (0, C.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, C.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, C.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, C.jsx)(o.c, { children: "Code" }),
                                        ":",
                                      ],
                                    }),
                                    (0, C.jsx)(d.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { code: n });
                                        });
                                      },
                                      value: y.code,
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, C.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, C.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, C.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, C.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, C.jsx)(o.c, { children: "Levels" }),
                                        ":",
                                      ],
                                    }),
                                    (0, C.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { level: n });
                                        });
                                      },
                                      value: y.level,
                                      as: "select",
                                      children: [
                                        (0, C.jsx)(s.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, C.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === _ || void 0 === _
                                          ? void 0
                                          : _.level.map(function (e) {
                                              return (0,
                                              C.jsx)("option", { value: e.id, children: "".concat(e.id, " - ").concat(e.name) }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, C.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, C.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, C.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, C.jsx)(o.c, { children: "Type" }),
                                        ":",
                                      ],
                                    }),
                                    (0, C.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { type: n });
                                        });
                                      },
                                      value: y.type,
                                      as: "select",
                                      children: [
                                        (0, C.jsx)(s.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, C.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === _ || void 0 === _
                                          ? void 0
                                          : _.type.map(function (e) {
                                              return (0,
                                              C.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, C.jsx)("div", {
                            className: "row mt-1",
                            children: (0, C.jsx)("div", {
                              className: "col-sm-12 col-lg-6",
                              children: (0, C.jsxs)(d.Z.Group, {
                                className: "row",
                                children: [
                                  (0, C.jsxs)("label", {
                                    className: "label col-sm-4",
                                    children: [
                                      (0, C.jsx)(o.c, {
                                        children: "Power source",
                                      }),
                                      ":",
                                    ],
                                  }),
                                  (0, C.jsxs)(d.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      N(function (e) {
                                        return (0,
                                        r.Z)((0, r.Z)({}, e), {}, { power: n });
                                      });
                                    },
                                    value: y.power,
                                    as: "select",
                                    children: [
                                      (0, C.jsx)(s.W, {
                                        children: function (e, n) {
                                          n.i18n;
                                          return (0, C.jsx)("option", {
                                            i18n: !0,
                                            value: "-1",
                                            selected: !0,
                                            children: e("Please select"),
                                          });
                                        },
                                      }),
                                      null === _ || void 0 === _
                                        ? void 0
                                        : _.power.map(function (e) {
                                            return (0,
                                            C.jsx)("option", { value: e.id, children: e.name }, e.id);
                                          }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, C.jsx)("div", {
                            className: "row mt-1",
                            children: (0, C.jsx)("div", {
                              className: "col-sm-12 col-lg-6",
                              children: (0, C.jsxs)(d.Z.Group, {
                                className: "row",
                                children: [
                                  (0, C.jsxs)("label", {
                                    className: "label col-sm-4",
                                    children: [
                                      (0, C.jsx)(o.c, {
                                        children: "Storage conditions",
                                      }),
                                      ":",
                                    ],
                                  }),
                                  (0, C.jsx)(d.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      N(function (e) {
                                        return (0,
                                        r.Z)((0, r.Z)({}, e), {}, { degree: n });
                                      });
                                    },
                                    value: y.item_class,
                                    as: "select",
                                    children:
                                      null === w || void 0 === w
                                        ? void 0
                                        : w.map(function (e) {
                                            return (0,
                                            C.jsx)("option", { value: e.id, children: e.name }, e.id);
                                          }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, C.jsx)("div", {
                            className: "row mt-5",
                            children: (0, C.jsx)("h4", {
                              children: (0, C.jsx)(o.c, {
                                children: "Item Options",
                              }),
                            }),
                          }),
                          (0, C.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, C.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, C.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, C.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, C.jsx)(o.c, {
                                          children: "Options",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, C.jsx)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { option: n });
                                        });
                                      },
                                      value: y.item_class,
                                      as: "select",
                                      children:
                                        null === A || void 0 === A
                                          ? void 0
                                          : A.map(function (e) {
                                              return (0,
                                              C.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, C.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, C.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, C.jsxs)("label", {
                                      className: "label col-sm-2",
                                      children: [
                                        (0, C.jsx)(o.c, { children: "from" }),
                                        ":",
                                      ],
                                    }),
                                    (0, C.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-2",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { year_from: n });
                                        });
                                      },
                                      value: y.year_from,
                                      as: "select",
                                      children: [
                                        (0, C.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          children: "select",
                                        }),
                                        console.log(
                                          new Date().getUTCFullYear()
                                        ),
                                        Array.from({ length: 30 }).map(
                                          function (e, n) {
                                            var a =
                                              new Date().getUTCFullYear() - n;
                                            return (0, C.jsx)(
                                              "option",
                                              { value: a, children: a },
                                              a
                                            );
                                          }
                                        ),
                                      ],
                                    }),
                                    (0, C.jsxs)("label", {
                                      className: "label col-sm-1",
                                      children: [
                                        (0, C.jsx)(o.c, { children: "to" }),
                                        ":",
                                      ],
                                    }),
                                    (0, C.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-2",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { year_to: n });
                                        });
                                      },
                                      value: y.year_to,
                                      as: "select",
                                      children: [
                                        (0, C.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          children: "select",
                                        }),
                                        Array.from({
                                          length:
                                            new Date().getUTCFullYear() -
                                            y.year_from +
                                            1,
                                        }).map(function (e, n) {
                                          var a =
                                            new Date().getUTCFullYear() - n;
                                          return (0,
                                          C.jsx)("option", { value: a, children: a }, a);
                                        }),
                                      ],
                                    }),
                                    (0, C.jsx)("label", {
                                      className: "label col-sm-3",
                                      children: (0, C.jsx)(o.c, {
                                        children: "Calculate for Year:",
                                      }),
                                    }),
                                    (0, C.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-2",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { calculate_for: n });
                                        });
                                      },
                                      value: y.calculate_for,
                                      as: "select",
                                      children: [
                                        (0, C.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          children: "select",
                                        }),
                                        Array.from({ length: 10 }).map(
                                          function (e, n) {
                                            var a =
                                              new Date().getUTCFullYear() + n;
                                            return (0, C.jsx)(
                                              "option",
                                              { value: a, children: a },
                                              a
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
                          (0, C.jsxs)("div", {
                            className: "row mt-4",
                            children: [
                              (0, C.jsx)("div", {
                                className: "col-sm-2",
                                children: (0, C.jsx)("button", {
                                  type: "submit",
                                  className: "btn btn-primary fs-5",
                                  children: (0, C.jsx)(o.c, {
                                    children: "Report",
                                  }),
                                }),
                              }),
                              (0, C.jsx)("div", {
                                className: "col-sm-3 ",
                                children: (0, C.jsx)("button", {
                                  type: "button",
                                  className: "btn btn-secondary fs-5",
                                  onClick: function () {
                                    N(b), window.location.reload();
                                  },
                                  children: (0, C.jsx)(o.c, {
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
                (0, C.jsx)("div", {
                  className: "mt-3",
                  children: (0, C.jsx)("div", {
                    className: "card",
                    children: (0, C.jsxs)("div", {
                      className: "card-body py-3",
                      children: [
                        (0, C.jsxs)("h4", {
                          children: [
                            (0, C.jsx)(o.c, { children: "Report" }),
                            " : ",
                            (0, C.jsx)(o.c, { children: "Item gap report" }),
                            (0, C.jsxs)(o.c, {
                              children: [
                                " (",
                                null === K || void 0 === K ? void 0 : K.country,
                                ")",
                              ],
                            }),
                          ],
                        }),
                        (0, C.jsxs)("h6", {
                          children: [
                            (0, C.jsx)(o.c, { children: "Filter" }),
                            " : ",
                            "",
                            " ",
                            (function () {
                              var e = "",
                                n = function (n) {
                                  var a = y[n];
                                  a.length > 0 &&
                                    "-1" !== a &&
                                    (e +=
                                      "degree" === n
                                        ? "Storage condition:".concat(
                                            w.find(function (e) {
                                              return e.id === a;
                                            }).name,
                                            " , "
                                          )
                                        : "option" === n
                                        ? "Option : ".concat(
                                            A.find(function (e) {
                                              return e.id === a;
                                            }).name,
                                            " , "
                                          )
                                        : "type" === n
                                        ? "Type : ".concat(
                                            null === _ || void 0 === _
                                              ? void 0
                                              : _.type.find(function (e) {
                                                  return e.id === parseInt(a);
                                                }).name,
                                            " , "
                                          )
                                        : "level" === n
                                        ? "Level :   "
                                            .concat(
                                              null === _ || void 0 === _
                                                ? void 0
                                                : _.level.find(function (e) {
                                                    return e.id === parseInt(a);
                                                  }).id,
                                              "  - "
                                            )
                                            .concat(
                                              null === _ || void 0 === _
                                                ? void 0
                                                : _.level.find(function (e) {
                                                    return e.id === parseInt(a);
                                                  }).name,
                                              " , "
                                            )
                                        : "power" === n
                                        ? "Power source = ".concat(
                                            null === _ || void 0 === _
                                              ? void 0
                                              : _.power.find(function (e) {
                                                  return e.id === parseInt(a);
                                                }).name,
                                            " , "
                                          )
                                        : "code" === n
                                        ? "Code : ".concat(a, " , ")
                                        : "name" === n
                                        ? "Facility name : ".concat(a, " , ")
                                        : "year_from" === n
                                        ? "Year from : ".concat(a, " , ")
                                        : "year_to" === n
                                        ? "Year to : ".concat(a, " , ")
                                        : "calculate_for" === n
                                        ? "Calculate for : ".concat(a, " , ")
                                        : "".concat(n, " = ").concat(a, " , "));
                                };
                              for (var a in y) n(a);
                              return e;
                            })(),
                          ],
                        }),
                        (0, C.jsxs)("h6", {
                          children: [
                            (0, C.jsx)(o.c, { children: "Date" }),
                            ": ",
                            new Date().toLocaleDateString("en-GB"),
                          ],
                        }),
                        (0, C.jsx)("div", {
                          className: "mt-3 table-container ",
                          children: (0, C.jsxs)(f.Z, {
                            children: [
                              (0, C.jsxs)(v.Z, {
                                children: [
                                  (0, C.jsxs)(p.Z, {
                                    children: [
                                      (0, C.jsx)(x.Z, {
                                        align: "center",
                                        colSpan: 5,
                                        children: (0, C.jsx)(o.c, {
                                          children: "Facility information",
                                        }),
                                      }),
                                      (0, C.jsx)(x.Z, {
                                        align: "center",
                                        colSpan: 2,
                                        children: (0, C.jsx)(o.c, {
                                          children: "Population",
                                        }),
                                      }),
                                      "6" === P
                                        ? Array.from({ length: 5 }).map(
                                            function (e, n) {
                                              return (0, C.jsx)(
                                                x.Z,
                                                {
                                                  align: "center",
                                                  colSpan: 4,
                                                  style: {
                                                    textAlign: "center",
                                                  },
                                                  children: w[n].name,
                                                },
                                                n
                                              );
                                            }
                                          )
                                        : (0, C.jsx)(x.Z, {
                                            align: "center",
                                            colSpan: 4,
                                            style: { textAlign: "center" },
                                            children: w[+P - 1].name,
                                          }),
                                    ],
                                  }),
                                  (0, C.jsxs)(p.Z, {
                                    children: [
                                      k.map(function (e) {
                                        return (0,
                                        C.jsx)(x.Z, { children: (0, C.jsx)(o.c, { children: e.headTitle }) }, e.headTitle);
                                      }),
                                      Array.from({
                                        length: "6" === P ? 5 : 1,
                                      }).map(function (e, n) {
                                        return (0, C.jsx)(
                                          i.Fragment,
                                          {
                                            children: F.map(function (e) {
                                              return (0,
                                              C.jsx)(x.Z, { children: (0, C.jsx)(o.c, { children: e.headTitle }) }, "".concat(e.valueKey).concat(n + 1));
                                            }),
                                          },
                                          n
                                        );
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, C.jsx)(j.Z, {
                                children:
                                  null === E || void 0 === E
                                    ? void 0
                                    : E.data.map(function (e, n) {
                                        return (0, C.jsxs)(
                                          p.Z,
                                          {
                                            children: [
                                              k.map(function (n) {
                                                var a;
                                                return (0,
                                                C.jsx)(x.Z, { children: null !== (a = n.func(e[n.valueKey])) && void 0 !== a ? a : "-" }, n.valueKey);
                                              }),
                                              Array.from({
                                                length: "6" === P ? 5 : 1,
                                              }).map(function (n, a) {
                                                return (0, C.jsx)(
                                                  i.Fragment,
                                                  {
                                                    children: F.map(function (
                                                      n
                                                    ) {
                                                      var r;
                                                      return (0, C.jsxs)(
                                                        x.Z,
                                                        {
                                                          style: {
                                                            color:
                                                              "excees" ===
                                                              n.valueKey
                                                                ? e[
                                                                    "exceed".concat(
                                                                      a + 1
                                                                    )
                                                                  ]
                                                                  ? "blue"
                                                                  : "red"
                                                                : "unset",
                                                          },
                                                          children: [
                                                            console.log(
                                                              e[
                                                                ""
                                                                  .concat(
                                                                    n.valueKey
                                                                  )
                                                                  .concat(a + 1)
                                                              ]
                                                            ),
                                                            null !==
                                                              (r = n.func(
                                                                e[
                                                                  ""
                                                                    .concat(
                                                                      n.valueKey
                                                                    )
                                                                    .concat(
                                                                      a + 1
                                                                    )
                                                                ]
                                                              )) && void 0 !== r
                                                              ? r
                                                              : "-",
                                                          ],
                                                        },
                                                        ""
                                                          .concat(n.valueKey)
                                                          .concat(a + 1)
                                                      );
                                                    }),
                                                  },
                                                  a
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
                          (0, C.jsxs)("div", {
                            className: "row mt-4",
                            children: [
                              (0, C.jsx)("div", {
                                className: "col-sm-2",
                                children: (0, C.jsx)("a", {
                                  href: Z.Z + E.excel,
                                  download: !0,
                                  children: (0, C.jsx)("button", {
                                    className: "btn btn-primary",
                                    children: (0, C.jsx)(o.c, {
                                      children: "Export to MS Excel",
                                    }),
                                  }),
                                }),
                              }),
                              (0, C.jsx)("div", {
                                className: "col-sm-2",
                                children: (0, C.jsx)("button", {
                                  onClick: function () {
                                    h.Z.savegaps(
                                      y.degree,
                                      null === E || void 0 === E
                                        ? void 0
                                        : E.save
                                    ).then(function (e) {
                                      console.log(e);
                                    });
                                  },
                                  className: "btn btn-primary",
                                  children: (0, C.jsx)(o.c, {
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
    51763: function (e, n, a) {
      var r = a(15671),
        t = a(43144),
        l = a(54318),
        c = a(39877),
        i = "https://ukrapi.invgap.org/reports/",
        o = (function () {
          function e() {
            (0, r.Z)(this, e);
          }
          return (
            (0, t.Z)(e, [
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
    23821: function (e, n, a) {
      var r = a(39281),
        t = a(79836),
        l = a(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)(r.Z, {
            children: (0, l.jsx)(t.Z, { children: n }),
          }),
        });
      };
    },
    12902: function (e, n, a) {
      a.d(n, {
        W: function () {
          return i;
        },
      });
      var r = a(29439),
        t = a(45987),
        l = a(22020),
        c = ["ns", "children"];
      function i(e) {
        var n = e.ns,
          a = e.children,
          i = (0, t.Z)(e, c),
          o = (0, l.$)(n, i),
          s = (0, r.Z)(o, 3),
          u = s[0],
          d = s[1],
          h = s[2];
        return a(u, { i18n: d, lng: d.language }, h);
      }
    },
    92854: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=5629.2a6897c0.chunk.js.map
