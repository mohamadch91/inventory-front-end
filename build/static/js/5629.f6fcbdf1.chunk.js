"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [5629],
  {
    78083: function (e, n, a) {
      a.d(n, {
        k: function () {
          return l;
        },
      });
      var l = function (e) {
        if (void 0 !== e && null !== e)
          return (function (e, n) {
            function a(e) {
              return e.split("").reverse().join("");
            }
            var l = /(\d{3}(?!.*\.|$))/g;
            n || (n = " ");
            return a(a(e.toString()).replace(l, "$1" + n));
          })((e = parseInt(e)));
      };
    },
    35629: function (e, n, a) {
      a.r(n);
      var l = a(1413),
        r = a(74165),
        t = a(15861),
        c = a(29439),
        s = a(72791),
        i = a(30606),
        o = a(91933),
        u = a(16149),
        d = a(51763),
        m = (a(92854), a(59909)),
        h = a(23821),
        v = a(56890),
        f = a(35855),
        p = a(53994),
        x = a(53382),
        j = (a(93650), a(80794)),
        g = a(78083),
        Z = a(80184),
        y = {
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
        N = [
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
        C = [
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
            headTitle: "Level",
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
              return (0, g.k)(e);
            },
          },
          {
            headTitle: "Under_1",
            valueKey: "children",
            func: function (e) {
              return (0, g.k)(e);
            },
          },
        ],
        w = [
          {
            headTitle: "Required Capacity(lit)",
            valueKey: "req",
            func: function (e) {
              parseFloat(e).toFixed(2);
            },
          },
          {
            headTitle: "All Total Available (lit)",
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
            headTitle: "Excess/ Shortage (lit)",
            valueKey: "excees",
            func: function (e) {
              return parseFloat(e).toFixed(2);
            },
          },
        ];
      n.default = function () {
        var e = (0, s.useState)(y),
          n = (0, c.Z)(e, 2),
          a = n[0],
          g = n[1],
          A = (0, s.useState)("1"),
          k = (0, c.Z)(A, 2),
          F = k[0],
          T = k[1],
          G = JSON.parse(localStorage.getItem("country")) || {},
          P = (0, o.useQuery)(
            ["gap-item-helper"],
            (0, t.Z)(
              (0, r.Z)().mark(function e() {
                var n;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), d.Z.getGapItem({ help: !0 });
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
          S = P.data,
          K = P.isLoading,
          z = (0, o.useQuery)(
            ["gap-item-report"],
            (0, t.Z)(
              (0, r.Z)().mark(function e() {
                var n, l, t, c;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (l in ((n = { help: !1 }), a))
                          (t = a[l]).length > 0 && "-1" !== t && (n[l] = t);
                        return (e.next = 4), d.Z.getGapItem(n);
                      case 4:
                        return (c = e.sent), e.abrupt("return", c.data);
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
                T(a.degree);
              },
            }
          ),
          _ = z.data,
          I = z.isLoading,
          D = z.refetch;
        return K || I
          ? (0, Z.jsx)(m.Z, {})
          : (0, Z.jsxs)("div", {
              children: [
                (0, Z.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, Z.jsx)(i.c, { children: "Gap Item Report" }),
                }),
                (0, Z.jsx)("div", {
                  className: "mt-3",
                  children: (0, Z.jsx)("div", {
                    className: "card",
                    children: (0, Z.jsx)("div", {
                      className: "card-body py-3",
                      children: (0, Z.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), D();
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
                                children: (0, Z.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, Z.jsx)(i.c, {
                                        children: "Facility name:",
                                      }),
                                    }),
                                    (0, Z.jsx)(u.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          l.Z)((0, l.Z)({}, e), {}, { name: n });
                                        });
                                      },
                                      value: a.name,
                                    }),
                                  ],
                                }),
                              }),
                              (0, Z.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, Z.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, Z.jsx)(i.c, {
                                        children: "Code:",
                                      }),
                                    }),
                                    (0, Z.jsx)(u.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          l.Z)((0, l.Z)({}, e), {}, { code: n });
                                        });
                                      },
                                      value: a.code,
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
                                children: (0, Z.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, Z.jsx)(i.c, {
                                        children: "Level:",
                                      }),
                                    }),
                                    (0, Z.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          l.Z)((0, l.Z)({}, e), {}, { level: n });
                                        });
                                      },
                                      value: a.level,
                                      as: "select",
                                      children: [
                                        (0, Z.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === S || void 0 === S
                                          ? void 0
                                          : S.level.map(function (e) {
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
                                children: (0, Z.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, Z.jsx)(i.c, {
                                        children: "Type:",
                                      }),
                                    }),
                                    (0, Z.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          l.Z)((0, l.Z)({}, e), {}, { type: n });
                                        });
                                      },
                                      value: a.type,
                                      as: "select",
                                      children: [
                                        (0, Z.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === S || void 0 === S
                                          ? void 0
                                          : S.type.map(function (e) {
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
                              children: (0, Z.jsxs)(u.Z.Group, {
                                className: "row",
                                children: [
                                  (0, Z.jsx)("label", {
                                    className: "label col-sm-4",
                                    children: (0, Z.jsx)(i.c, {
                                      children: "Power source:",
                                    }),
                                  }),
                                  (0, Z.jsxs)(u.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      g(function (e) {
                                        return (0,
                                        l.Z)((0, l.Z)({}, e), {}, { power: n });
                                      });
                                    },
                                    value: a.power,
                                    as: "select",
                                    children: [
                                      (0, Z.jsx)("option", {
                                        value: "-1",
                                        selected: !0,
                                        disabled: !0,
                                        children: "Please select",
                                      }),
                                      null === S || void 0 === S
                                        ? void 0
                                        : S.power.map(function (e) {
                                            return (0,
                                            Z.jsx)("option", { value: e.id, children: e.name }, e.id);
                                          }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, Z.jsx)("div", {
                            className: "row mt-1",
                            children: (0, Z.jsx)("div", {
                              className: "col-sm-12 col-lg-6",
                              children: (0, Z.jsxs)(u.Z.Group, {
                                className: "row",
                                children: [
                                  (0, Z.jsx)("label", {
                                    className: "label col-sm-4",
                                    children: (0, Z.jsx)(i.c, {
                                      children: "Storage condition:",
                                    }),
                                  }),
                                  (0, Z.jsx)(u.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      g(function (e) {
                                        return (0,
                                        l.Z)((0, l.Z)({}, e), {}, { degree: n });
                                      });
                                    },
                                    value: a.item_class,
                                    as: "select",
                                    children:
                                      null === N || void 0 === N
                                        ? void 0
                                        : N.map(function (e) {
                                            return (0,
                                            Z.jsx)("option", { value: e.id, children: e.name }, e.id);
                                          }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, Z.jsx)("div", {
                            className: "row mt-5",
                            children: (0, Z.jsx)("h4", {
                              children: (0, Z.jsx)(i.c, {
                                children: "Item Options",
                              }),
                            }),
                          }),
                          (0, Z.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, Z.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, Z.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, Z.jsx)(i.c, {
                                        children: "Options:",
                                      }),
                                    }),
                                    (0, Z.jsx)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          l.Z)((0, l.Z)({}, e), {}, { option: n });
                                        });
                                      },
                                      value: a.item_class,
                                      as: "select",
                                      children:
                                        null === b || void 0 === b
                                          ? void 0
                                          : b.map(function (e) {
                                              return (0,
                                              Z.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, Z.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, Z.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsx)("label", {
                                      className: "label col-sm-2",
                                      children: (0, Z.jsx)(i.c, {
                                        children: "from:",
                                      }),
                                    }),
                                    (0, Z.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-2",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          l.Z)((0, l.Z)({}, e), {}, { year_from: n });
                                        });
                                      },
                                      value: a.year_from,
                                      as: "select",
                                      children: [
                                        (0, Z.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "select",
                                        }),
                                        console.log(
                                          new Date().getUTCFullYear()
                                        ),
                                        Array.from({ length: 30 }).map(
                                          function (e, n) {
                                            var a =
                                              new Date().getUTCFullYear() - n;
                                            return (0, Z.jsx)(
                                              "option",
                                              { value: a, children: a },
                                              a
                                            );
                                          }
                                        ),
                                      ],
                                    }),
                                    (0, Z.jsx)("label", {
                                      className: "label col-sm-1",
                                      children: (0, Z.jsx)(i.c, {
                                        children: "to:",
                                      }),
                                    }),
                                    (0, Z.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-2",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          l.Z)((0, l.Z)({}, e), {}, { year_to: n });
                                        });
                                      },
                                      value: a.year_to,
                                      as: "select",
                                      children: [
                                        (0, Z.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "select",
                                        }),
                                        Array.from({
                                          length:
                                            new Date().getUTCFullYear() -
                                            a.year_from +
                                            1,
                                        }).map(function (e, n) {
                                          var a =
                                            new Date().getUTCFullYear() - n;
                                          return (0,
                                          Z.jsx)("option", { value: a, children: a }, a);
                                        }),
                                      ],
                                    }),
                                    (0, Z.jsx)("label", {
                                      className: "label col-sm-3",
                                      children: (0, Z.jsx)(i.c, {
                                        children: "Calculate for year:",
                                      }),
                                    }),
                                    (0, Z.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-2",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          l.Z)((0, l.Z)({}, e), {}, { calculate_for: n });
                                        });
                                      },
                                      value: a.calculate_for,
                                      as: "select",
                                      children: [
                                        (0, Z.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "select",
                                        }),
                                        Array.from({ length: 30 }).map(
                                          function (e, n) {
                                            var a =
                                              new Date().getUTCFullYear() - n;
                                            return (0, Z.jsx)(
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
                          (0, Z.jsxs)("div", {
                            className: "row mt-4",
                            children: [
                              (0, Z.jsx)("div", {
                                className: "col-sm-1",
                                children: (0, Z.jsx)("button", {
                                  type: "submit",
                                  className: "btn btn-primary",
                                  children: "Reports",
                                }),
                              }),
                              (0, Z.jsx)("div", {
                                className: "col-sm-1",
                                children: (0, Z.jsx)("button", {
                                  type: "button",
                                  className: "btn btn-secondary",
                                  onClick: function () {
                                    return g(y);
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
                (0, Z.jsx)("div", {
                  className: "mt-3",
                  children: (0, Z.jsx)("div", {
                    className: "card",
                    children: (0, Z.jsxs)("div", {
                      className: "card-body py-3",
                      children: [
                        (0, Z.jsx)("h4", {
                          children: (0, Z.jsxs)(i.c, {
                            children: [
                              "Report : Gap Item Report (",
                              null === G || void 0 === G ? void 0 : G.country,
                              ")",
                            ],
                          }),
                        }),
                        (0, Z.jsxs)("h6", {
                          children: [
                            "Filters : ",
                            "",
                            " ",
                            (function () {
                              var e = "",
                                n = function (n) {
                                  var l = a[n];
                                  l.length > 0 &&
                                    "-1" !== l &&
                                    (e +=
                                      "degree" === n
                                        ? "Storage condition=".concat(
                                            N.find(function (e) {
                                              return e.id === l;
                                            }).name,
                                            " , "
                                          )
                                        : "option" === n
                                        ? "".concat(n, " = ").concat(
                                            b.find(function (e) {
                                              return e.id === l;
                                            }).name,
                                            " , "
                                          )
                                        : "".concat(n, " = ").concat(l, " , "));
                                };
                              for (var l in a) n(l);
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
                          className: "mt-3 table-container ",
                          children: (0, Z.jsxs)(h.Z, {
                            children: [
                              (0, Z.jsxs)(v.Z, {
                                children: [
                                  (0, Z.jsxs)(f.Z, {
                                    children: [
                                      (0, Z.jsx)(p.Z, {
                                        align: "center",
                                        colSpan: 5,
                                        children: "Facility information",
                                      }),
                                      (0, Z.jsx)(p.Z, {
                                        align: "center",
                                        colSpan: 2,
                                        children: "Populations",
                                      }),
                                      "6" === F
                                        ? Array.from({ length: 5 }).map(
                                            function (e, n) {
                                              return (0, Z.jsx)(
                                                p.Z,
                                                {
                                                  align: "center",
                                                  colSpan: 4,
                                                  style: {
                                                    textAlign: "center",
                                                  },
                                                  children: N[n].name,
                                                },
                                                n
                                              );
                                            }
                                          )
                                        : (0, Z.jsx)(p.Z, {
                                            align: "center",
                                            colSpan: 4,
                                            style: { textAlign: "center" },
                                            children: N[+F - 1].name,
                                          }),
                                    ],
                                  }),
                                  (0, Z.jsxs)(f.Z, {
                                    children: [
                                      C.map(function (e) {
                                        return (0,
                                        Z.jsx)(p.Z, { children: (0, Z.jsx)(i.c, { children: e.headTitle }) }, e.headTitle);
                                      }),
                                      Array.from({
                                        length: "6" === F ? 5 : 1,
                                      }).map(function (e, n) {
                                        return (0, Z.jsx)(
                                          s.Fragment,
                                          {
                                            children: w.map(function (e) {
                                              return (0,
                                              Z.jsx)(p.Z, { children: (0, Z.jsx)(i.c, { children: e.headTitle }) }, "".concat(e.valueKey).concat(n + 1));
                                            }),
                                          },
                                          n
                                        );
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, Z.jsx)(x.Z, {
                                children:
                                  null === _ || void 0 === _
                                    ? void 0
                                    : _.data.map(function (e, n) {
                                        return (0, Z.jsxs)(
                                          f.Z,
                                          {
                                            children: [
                                              C.map(function (n) {
                                                var a;
                                                return (0,
                                                Z.jsx)(p.Z, { children: null !== (a = n.func(e[n.valueKey])) && void 0 !== a ? a : "-" }, n.valueKey);
                                              }),
                                              Array.from({
                                                length: "6" === F ? 5 : 1,
                                              }).map(function (n, a) {
                                                return (0, Z.jsx)(
                                                  s.Fragment,
                                                  {
                                                    children: w.map(function (
                                                      n
                                                    ) {
                                                      var l;
                                                      return (0, Z.jsx)(
                                                        p.Z,
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
                                                              (l = n.func(
                                                                e[
                                                                  ""
                                                                    .concat(
                                                                      n.valueKey
                                                                    )
                                                                    .concat(
                                                                      a + 1
                                                                    )
                                                                ]
                                                              )) && void 0 !== l
                                                              ? l
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
                        (null === _ || void 0 === _ ? void 0 : _.excel) &&
                          (0, Z.jsx)("div", {
                            className: "row mt-4",
                            children: (0, Z.jsx)("div", {
                              className: "col-sm-2",
                              children: (0, Z.jsx)("a", {
                                href: j.Z + _.excel,
                                download: !0,
                                children: (0, Z.jsx)("button", {
                                  className: "btn btn-primary",
                                  children: (0, Z.jsx)(i.c, {
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
      var l = a(15671),
        r = a(43144),
        t = a(54318),
        c = a(39877),
        s = "https://inventory.runflare.run/reports/",
        i = (function () {
          function e() {
            (0, l.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
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
      var l = a(39281),
        r = a(79836),
        t = a(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(l.Z, {
            children: (0, t.jsx)(r.Z, { children: n }),
          }),
        });
      };
    },
    92854: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=5629.f6fcbdf1.chunk.js.map
