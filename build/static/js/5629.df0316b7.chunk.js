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
    35629: function (e, n, a) {
      a.r(n);
      var r = a(1413),
        l = a(74165),
        t = a(15861),
        c = a(29439),
        s = a(72791),
        i = a(30606),
        o = a(12902),
        u = a(91933),
        d = a(16149),
        h = a(51763),
        m = (a(92854), a(59909)),
        f = a(23821),
        v = a(56890),
        p = a(35855),
        x = a(53994),
        j = a(53382),
        g = (a(93650), a(80794)),
        Z = a(78083),
        y = a(80184),
        N = {
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
        C = [
          { id: "1", name: "2-8 C" },
          { id: "2", name: "-20 C" },
          { id: "3", name: "-70 C" },
          { id: "4", name: "+25 C" },
          { id: "5", name: "Dry store" },
          { id: "6", name: "All" },
        ],
        b = [
          { id: "1", name: "All Equipment" },
          { id: "2", name: "Only equipment from PQS/PIS" },
          { id: "3", name: "Only equipment with installation date" },
        ],
        w = [
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
              parseFloat(e).toFixed(2);
            },
          },
          {
            headTitle: "All total available (lit.)",
            valueKey: "tcapacity",
            func: function (e) {
              return parseFloat(e).toFixed(2);
            },
          },
          {
            headTitle: "Functioning Total Available (lit)",
            valueKey: "fcapacity",
            func: function (e) {
              return parseFloat(e).toFixed(2);
            },
          },
          {
            headTitle: "Excess/ Shortage (lit.)",
            valueKey: "excees",
            func: function (e) {
              return parseFloat(e).toFixed(2);
            },
          },
        ];
      n.default = function (e) {
        e.i18n;
        var n = (0, s.useState)(N),
          a = (0, c.Z)(n, 2),
          Z = a[0],
          k = a[1],
          F = (0, s.useState)("1"),
          T = (0, c.Z)(F, 2),
          P = T[0],
          S = T[1],
          G = JSON.parse(localStorage.getItem("country")) || {},
          K = (0, u.useQuery)(
            ["gap-item-helper"],
            (0, t.Z)(
              (0, l.Z)().mark(function e() {
                var n;
                return (0, l.Z)().wrap(function (e) {
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
          z = K.data,
          _ = K.isLoading,
          I = (0, u.useQuery)(
            ["gap-item-report"],
            (0, t.Z)(
              (0, l.Z)().mark(function e() {
                var n, a, r, t;
                return (0, l.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (a in ((n = { help: !1 }), Z))
                          (r = Z[a]).length > 0 && "-1" !== r && (n[a] = r);
                        return (e.next = 4), h.Z.getGapItem(n);
                      case 4:
                        return (t = e.sent), e.abrupt("return", t.data);
                      case 6:
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
                S(Z.degree);
              },
            }
          ),
          D = I.data,
          E = I.isLoading,
          O = I.refetch;
        return _ || E
          ? (0, y.jsx)(m.Z, {})
          : (0, y.jsxs)("div", {
              children: [
                (0, y.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, y.jsx)(i.c, { children: "Item gap report" }),
                }),
                (0, y.jsx)("div", {
                  className: "mt-3",
                  children: (0, y.jsx)("div", {
                    className: "card",
                    children: (0, y.jsx)("div", {
                      className: "card-body py-3",
                      children: (0, y.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), O();
                        },
                        children: [
                          (0, y.jsx)("h4", {
                            children: (0, y.jsx)(i.c, { children: "Filters" }),
                          }),
                          (0, y.jsxs)("div", {
                            className: "row mt-5",
                            children: [
                              (0, y.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, y.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, y.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, y.jsx)(i.c, {
                                        children: "Facility name:",
                                      }),
                                    }),
                                    (0, y.jsx)(d.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { name: n });
                                        });
                                      },
                                      value: Z.name,
                                    }),
                                  ],
                                }),
                              }),
                              (0, y.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, y.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, y.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, y.jsx)(i.c, {
                                        children: "Code:",
                                      }),
                                    }),
                                    (0, y.jsx)(d.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { code: n });
                                        });
                                      },
                                      value: Z.code,
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, y.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, y.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, y.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, y.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, y.jsx)(i.c, { children: "Levels" }),
                                        ":",
                                      ],
                                    }),
                                    (0, y.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { level: n });
                                        });
                                      },
                                      value: Z.level,
                                      as: "select",
                                      children: [
                                        (0, y.jsx)(o.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, y.jsx)("option", {
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
                                              y.jsx)("option", { value: e.id, children: "".concat(e.id, " - ").concat(e.name) }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, y.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, y.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, y.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, y.jsx)(i.c, { children: "Type" }),
                                        ":",
                                      ],
                                    }),
                                    (0, y.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { type: n });
                                        });
                                      },
                                      value: Z.type,
                                      as: "select",
                                      children: [
                                        (0, y.jsx)(o.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, y.jsx)("option", {
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
                                              y.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, y.jsx)("div", {
                            className: "row mt-1",
                            children: (0, y.jsx)("div", {
                              className: "col-sm-12 col-lg-6",
                              children: (0, y.jsxs)(d.Z.Group, {
                                className: "row",
                                children: [
                                  (0, y.jsxs)("label", {
                                    className: "label col-sm-4",
                                    children: [
                                      (0, y.jsx)(i.c, {
                                        children: "Power source",
                                      }),
                                      ":",
                                    ],
                                  }),
                                  (0, y.jsxs)(d.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      k(function (e) {
                                        return (0,
                                        r.Z)((0, r.Z)({}, e), {}, { power: n });
                                      });
                                    },
                                    value: Z.power,
                                    as: "select",
                                    children: [
                                      (0, y.jsx)(o.W, {
                                        children: function (e, n) {
                                          n.i18n;
                                          return (0, y.jsx)("option", {
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
                                            y.jsx)("option", { value: e.id, children: e.name }, e.id);
                                          }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, y.jsx)("div", {
                            className: "row mt-1",
                            children: (0, y.jsx)("div", {
                              className: "col-sm-12 col-lg-6",
                              children: (0, y.jsxs)(d.Z.Group, {
                                className: "row",
                                children: [
                                  (0, y.jsxs)("label", {
                                    className: "label col-sm-4",
                                    children: [
                                      (0, y.jsx)(i.c, {
                                        children: "Storage conditions",
                                      }),
                                      ":",
                                    ],
                                  }),
                                  (0, y.jsx)(d.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      k(function (e) {
                                        return (0,
                                        r.Z)((0, r.Z)({}, e), {}, { degree: n });
                                      });
                                    },
                                    value: Z.item_class,
                                    as: "select",
                                    children:
                                      null === C || void 0 === C
                                        ? void 0
                                        : C.map(function (e) {
                                            return (0,
                                            y.jsx)("option", { value: e.id, children: e.name }, e.id);
                                          }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, y.jsx)("div", {
                            className: "row mt-5",
                            children: (0, y.jsx)("h4", {
                              children: (0, y.jsx)(i.c, {
                                children: "Item Options",
                              }),
                            }),
                          }),
                          (0, y.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, y.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, y.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, y.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, y.jsx)(i.c, {
                                          children: "Options",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, y.jsx)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { option: n });
                                        });
                                      },
                                      value: Z.item_class,
                                      as: "select",
                                      children:
                                        null === b || void 0 === b
                                          ? void 0
                                          : b.map(function (e) {
                                              return (0,
                                              y.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, y.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, y.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, y.jsxs)("label", {
                                      className: "label col-sm-2",
                                      children: [
                                        (0, y.jsx)(i.c, { children: "from" }),
                                        ":",
                                      ],
                                    }),
                                    (0, y.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-2",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { year_from: n });
                                        });
                                      },
                                      value: Z.year_from,
                                      as: "select",
                                      children: [
                                        (0, y.jsx)("option", {
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
                                            return (0, y.jsx)(
                                              "option",
                                              { value: a, children: a },
                                              a
                                            );
                                          }
                                        ),
                                      ],
                                    }),
                                    (0, y.jsxs)("label", {
                                      className: "label col-sm-1",
                                      children: [
                                        (0, y.jsx)(i.c, { children: "to" }),
                                        ":",
                                      ],
                                    }),
                                    (0, y.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-2",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { year_to: n });
                                        });
                                      },
                                      value: Z.year_to,
                                      as: "select",
                                      children: [
                                        (0, y.jsx)("option", {
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
                                          var a =
                                            new Date().getUTCFullYear() - n;
                                          return (0,
                                          y.jsx)("option", { value: a, children: a }, a);
                                        }),
                                      ],
                                    }),
                                    (0, y.jsx)("label", {
                                      className: "label col-sm-3",
                                      children: (0, y.jsx)(i.c, {
                                        children: "Calculate for Year:",
                                      }),
                                    }),
                                    (0, y.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-2",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        k(function (e) {
                                          return (0,
                                          r.Z)((0, r.Z)({}, e), {}, { calculate_for: n });
                                        });
                                      },
                                      value: Z.calculate_for,
                                      as: "select",
                                      children: [
                                        (0, y.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          children: "select",
                                        }),
                                        Array.from({ length: 10 }).map(
                                          function (e, n) {
                                            var a =
                                              new Date().getUTCFullYear() + n;
                                            return (0, y.jsx)(
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
                          (0, y.jsxs)("div", {
                            className: "row mt-4",
                            children: [
                              (0, y.jsx)("div", {
                                className: "col-sm-1",
                                children: (0, y.jsx)("button", {
                                  type: "submit",
                                  className: "btn btn-primary",
                                  children: (0, y.jsx)(i.c, {
                                    children: "Report",
                                  }),
                                }),
                              }),
                              (0, y.jsx)("div", {
                                className: "col-sm-1",
                                children: (0, y.jsx)("button", {
                                  type: "button",
                                  className: "btn btn-secondary",
                                  onClick: function () {
                                    return k(N);
                                  },
                                  children: (0, y.jsx)(i.c, {
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
                (0, y.jsx)("div", {
                  className: "mt-3",
                  children: (0, y.jsx)("div", {
                    className: "card",
                    children: (0, y.jsxs)("div", {
                      className: "card-body py-3",
                      children: [
                        (0, y.jsxs)("h4", {
                          children: [
                            (0, y.jsx)(i.c, { children: "Report" }),
                            " : ",
                            (0, y.jsx)(i.c, { children: "Item gap report" }),
                            (0, y.jsxs)(i.c, {
                              children: [
                                " (",
                                null === G || void 0 === G ? void 0 : G.country,
                                ")",
                              ],
                            }),
                          ],
                        }),
                        (0, y.jsxs)("h6", {
                          children: [
                            (0, y.jsx)(i.c, { children: "Filters" }),
                            " : ",
                            "",
                            " ",
                            (function () {
                              var e = "",
                                n = function (n) {
                                  var a = Z[n];
                                  a.length > 0 &&
                                    "-1" !== a &&
                                    (e +=
                                      "degree" === n
                                        ? "Storage condition=".concat(
                                            C.find(function (e) {
                                              return e.id === a;
                                            }).name,
                                            " , "
                                          )
                                        : "option" === n
                                        ? "".concat(n, " = ").concat(
                                            b.find(function (e) {
                                              return e.id === a;
                                            }).name,
                                            " , "
                                          )
                                        : "".concat(n, " = ").concat(a, " , "));
                                };
                              for (var a in Z) n(a);
                              return e;
                            })(),
                          ],
                        }),
                        (0, y.jsxs)("h6", {
                          children: [
                            "Date: ",
                            new Date().toISOString().split("T")[0],
                          ],
                        }),
                        (0, y.jsx)("div", {
                          className: "mt-3 table-container ",
                          children: (0, y.jsxs)(f.Z, {
                            children: [
                              (0, y.jsxs)(v.Z, {
                                children: [
                                  (0, y.jsxs)(p.Z, {
                                    children: [
                                      (0, y.jsx)(x.Z, {
                                        align: "center",
                                        colSpan: 5,
                                        children: (0, y.jsx)(i.c, {
                                          children: "Facility information",
                                        }),
                                      }),
                                      (0, y.jsx)(x.Z, {
                                        align: "center",
                                        colSpan: 2,
                                        children: (0, y.jsx)(i.c, {
                                          children: "Populations",
                                        }),
                                      }),
                                      "6" === P
                                        ? Array.from({ length: 5 }).map(
                                            function (e, n) {
                                              return (0, y.jsx)(
                                                x.Z,
                                                {
                                                  align: "center",
                                                  colSpan: 4,
                                                  style: {
                                                    textAlign: "center",
                                                  },
                                                  children: C[n].name,
                                                },
                                                n
                                              );
                                            }
                                          )
                                        : (0, y.jsx)(x.Z, {
                                            align: "center",
                                            colSpan: 4,
                                            style: { textAlign: "center" },
                                            children: C[+P - 1].name,
                                          }),
                                    ],
                                  }),
                                  (0, y.jsxs)(p.Z, {
                                    children: [
                                      w.map(function (e) {
                                        return (0,
                                        y.jsx)(x.Z, { children: (0, y.jsx)(i.c, { children: e.headTitle }) }, e.headTitle);
                                      }),
                                      Array.from({
                                        length: "6" === P ? 5 : 1,
                                      }).map(function (e, n) {
                                        return (0, y.jsx)(
                                          s.Fragment,
                                          {
                                            children: A.map(function (e) {
                                              return (0,
                                              y.jsx)(x.Z, { children: (0, y.jsx)(i.c, { children: e.headTitle }) }, "".concat(e.valueKey).concat(n + 1));
                                            }),
                                          },
                                          n
                                        );
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, y.jsx)(j.Z, {
                                children:
                                  null === D || void 0 === D
                                    ? void 0
                                    : D.data.map(function (e, n) {
                                        return (0, y.jsxs)(
                                          p.Z,
                                          {
                                            children: [
                                              w.map(function (n) {
                                                var a;
                                                return (0,
                                                y.jsx)(x.Z, { children: null !== (a = n.func(e[n.valueKey])) && void 0 !== a ? a : "-" }, n.valueKey);
                                              }),
                                              Array.from({
                                                length: "6" === P ? 5 : 1,
                                              }).map(function (n, a) {
                                                return (0, y.jsx)(
                                                  s.Fragment,
                                                  {
                                                    children: A.map(function (
                                                      n
                                                    ) {
                                                      var r;
                                                      return (0, y.jsx)(
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
                                                          children:
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
                        (null === D || void 0 === D ? void 0 : D.excel) &&
                          (0, y.jsx)("div", {
                            className: "row mt-4",
                            children: (0, y.jsx)("div", {
                              className: "col-sm-2",
                              children: (0, y.jsx)("a", {
                                href: g.Z + D.excel,
                                download: !0,
                                children: (0, y.jsx)("button", {
                                  className: "btn btn-primary",
                                  children: (0, y.jsx)(i.c, {
                                    children: "Export to MS Excel",
                                  }),
                                }),
                              }),
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
    51763: function (e, n, a) {
      var r = a(15671),
        l = a(43144),
        t = a(54318),
        c = a(39877),
        s = "http://127.0.0.1:8000/reports/",
        i = (function () {
          function e() {
            (0, r.Z)(this, e);
          }
          return (
            (0, l.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return c.Z.get(s + "excel", {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return c.Z.get(s + "facseg", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return c.Z.get(s + "subfacpop", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return c.Z.get(s + "facmap", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return c.Z.get(s + "gapmap", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return c.Z.get(s + "item-gp", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return c.Z.get(s + "itemfac", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return c.Z.get(s + "gapitem", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return c.Z.get(s + "facprof", {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return c.Z.get(s + "coldprof", {
                    headers: { Authorization: (0, t.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return c.Z.get(s + "planingreport", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return c.Z.get(s + "gapcce", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return c.Z.get(s + "gapccePlan", {
                    headers: { Authorization: (0, t.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return c.Z.post(s + "gapccePlan", e, {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return c.Z.delete(s + "gapccePlan", {
                    headers: { Authorization: (0, t.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return c.Z.put(s + "gapccePlan", e, {
                    headers: { Authorization: (0, t.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new i();
    },
    23821: function (e, n, a) {
      var r = a(39281),
        l = a(79836),
        t = a(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(r.Z, {
            children: (0, t.jsx)(l.Z, { children: n }),
          }),
        });
      };
    },
    12902: function (e, n, a) {
      a.d(n, {
        W: function () {
          return s;
        },
      });
      var r = a(29439),
        l = a(45987),
        t = a(22020),
        c = ["ns", "children"];
      function s(e) {
        var n = e.ns,
          a = e.children,
          s = (0, l.Z)(e, c),
          i = (0, t.$)(n, s),
          o = (0, r.Z)(i, 3),
          u = o[0],
          d = o[1],
          h = o[2];
        return a(u, { i18n: d, lng: d.language }, h);
      }
    },
    92854: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=5629.df0316b7.chunk.js.map
