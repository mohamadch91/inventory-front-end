"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [5629],
  {
    35629: function (e, a, n) {
      n.r(a);
      var l = n(1413),
        r = n(74165),
        t = n(15861),
        c = n(29439),
        s = n(72791),
        i = n(30606),
        o = n(91933),
        u = n(16149),
        d = n(51763),
        m = (n(92854), n(59909)),
        h = n(23821),
        p = n(56890),
        v = n(35855),
        x = n(53994),
        f = n(53382),
        j = (n(93650), n(80794)),
        g = n(80184),
        Z = {
          name: "",
          code: "",
          level: "-1",
          type: "-1",
          power: "-1",
          degree: "1",
          option: "1",
          year_to: "-1",
          year_from: "-1",
          calculate_for: "-1",
        },
        y = [
          { id: "1", name: "2-8 C" },
          { id: "2", name: "-20 C" },
          { id: "3", name: "-70 C" },
          { id: "4", name: "+25 C" },
          { id: "5", name: "Dry store" },
          { id: "6", name: "All" },
        ],
        N = [
          { id: "1", name: "All Equipment" },
          { id: "2", name: "Only equipment from PQS/PIS" },
          { id: "3", name: "Only equipment with installation date" },
        ],
        b = [
          { headTitle: "Parent", valueKey: "parent" },
          { headTitle: "Name", valueKey: "name" },
          { headTitle: "Level", valueKey: "level" },
          { headTitle: "Code", valueKey: "code" },
          { headTitle: "Type", valueKey: "type" },
          { headTitle: "General", valueKey: "general" },
          { headTitle: "Under_1", valueKey: "children" },
        ],
        C = [
          { headTitle: "Required Capacity(lit)", valueKey: "req" },
          { headTitle: "All Total Available (lit)", valueKey: "tcapacity" },
          {
            headTitle: "Functioning Total Available (lit)",
            valueKey: "fcapacity",
          },
          { headTitle: "Excess/ Shortage (lit)", valueKey: "excees" },
        ];
      a.default = function () {
        var e = (0, s.useState)(Z),
          a = (0, c.Z)(e, 2),
          n = a[0],
          w = a[1],
          A = (0, s.useState)("1"),
          k = (0, c.Z)(A, 2),
          T = k[0],
          G = k[1],
          P = JSON.parse(localStorage.getItem("country")) || {},
          S = (0, o.useQuery)(
            ["gap-item-helper"],
            (0, t.Z)(
              (0, r.Z)().mark(function e() {
                var a;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), d.Z.getGapItem({ help: !0 });
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
          K = S.data,
          z = S.isLoading,
          F = (0, o.useQuery)(
            ["gap-item-report"],
            (0, t.Z)(
              (0, r.Z)().mark(function e() {
                var a, l, t, c;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (l in ((a = { help: !1 }), n))
                          (t = n[l]).length > 0 && "-1" !== t && (a[l] = t);
                        return (e.next = 4), d.Z.getGapItem(a);
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
                G(n.degree);
              },
            }
          ),
          _ = F.data,
          I = F.isLoading,
          D = F.refetch;
        return z || I
          ? (0, g.jsx)(m.Z, {})
          : (0, g.jsxs)("div", {
              children: [
                (0, g.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, g.jsx)(i.c, { children: "Gap Item Report" }),
                }),
                (0, g.jsx)("div", {
                  className: "mt-3",
                  children: (0, g.jsx)("div", {
                    className: "card",
                    children: (0, g.jsx)("div", {
                      className: "card-body py-3",
                      children: (0, g.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), D();
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
                                children: (0, g.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, g.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, g.jsx)(i.c, {
                                        children: "Facility name:",
                                      }),
                                    }),
                                    (0, g.jsx)(u.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var a = e.target.value;
                                        w(function (e) {
                                          return (0,
                                          l.Z)((0, l.Z)({}, e), {}, { name: a });
                                        });
                                      },
                                      value: n.name,
                                    }),
                                  ],
                                }),
                              }),
                              (0, g.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, g.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, g.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, g.jsx)(i.c, {
                                        children: "Code:",
                                      }),
                                    }),
                                    (0, g.jsx)(u.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var a = e.target.value;
                                        w(function (e) {
                                          return (0,
                                          l.Z)((0, l.Z)({}, e), {}, { code: a });
                                        });
                                      },
                                      value: n.code,
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
                                children: (0, g.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, g.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, g.jsx)(i.c, {
                                        children: "Level:",
                                      }),
                                    }),
                                    (0, g.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var a = e.target.value;
                                        w(function (e) {
                                          return (0,
                                          l.Z)((0, l.Z)({}, e), {}, { level: a });
                                        });
                                      },
                                      value: n.level,
                                      as: "select",
                                      children: [
                                        (0, g.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === K || void 0 === K
                                          ? void 0
                                          : K.level.map(function (e) {
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
                                children: (0, g.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, g.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, g.jsx)(i.c, {
                                        children: "Type:",
                                      }),
                                    }),
                                    (0, g.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var a = e.target.value;
                                        w(function (e) {
                                          return (0,
                                          l.Z)((0, l.Z)({}, e), {}, { type: a });
                                        });
                                      },
                                      value: n.type,
                                      as: "select",
                                      children: [
                                        (0, g.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === K || void 0 === K
                                          ? void 0
                                          : K.type.map(function (e) {
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
                              children: (0, g.jsxs)(u.Z.Group, {
                                className: "row",
                                children: [
                                  (0, g.jsx)("label", {
                                    className: "label col-sm-4",
                                    children: (0, g.jsx)(i.c, {
                                      children: "Power source:",
                                    }),
                                  }),
                                  (0, g.jsxs)(u.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var a = e.target.value;
                                      w(function (e) {
                                        return (0,
                                        l.Z)((0, l.Z)({}, e), {}, { power: a });
                                      });
                                    },
                                    value: n.power,
                                    as: "select",
                                    children: [
                                      (0, g.jsx)("option", {
                                        value: "-1",
                                        selected: !0,
                                        disabled: !0,
                                        children: "Please select",
                                      }),
                                      null === K || void 0 === K
                                        ? void 0
                                        : K.power.map(function (e) {
                                            return (0,
                                            g.jsx)("option", { value: e.id, children: e.name }, e.id);
                                          }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, g.jsx)("div", {
                            className: "row mt-1",
                            children: (0, g.jsx)("div", {
                              className: "col-sm-12 col-lg-6",
                              children: (0, g.jsxs)(u.Z.Group, {
                                className: "row",
                                children: [
                                  (0, g.jsx)("label", {
                                    className: "label col-sm-4",
                                    children: (0, g.jsx)(i.c, {
                                      children: "Storage condition:",
                                    }),
                                  }),
                                  (0, g.jsx)(u.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var a = e.target.value;
                                      w(function (e) {
                                        return (0,
                                        l.Z)((0, l.Z)({}, e), {}, { degree: a });
                                      });
                                    },
                                    value: n.item_class,
                                    as: "select",
                                    children:
                                      null === y || void 0 === y
                                        ? void 0
                                        : y.map(function (e) {
                                            return (0,
                                            g.jsx)("option", { value: e.id, children: e.name }, e.id);
                                          }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, g.jsx)("div", {
                            className: "row mt-5",
                            children: (0, g.jsx)("h4", {
                              children: (0, g.jsx)(i.c, {
                                children: "Item Options",
                              }),
                            }),
                          }),
                          (0, g.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, g.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, g.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, g.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, g.jsx)(i.c, {
                                        children: "Options:",
                                      }),
                                    }),
                                    (0, g.jsx)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var a = e.target.value;
                                        w(function (e) {
                                          return (0,
                                          l.Z)((0, l.Z)({}, e), {}, { option: a });
                                        });
                                      },
                                      value: n.item_class,
                                      as: "select",
                                      children:
                                        null === N || void 0 === N
                                          ? void 0
                                          : N.map(function (e) {
                                              return (0,
                                              g.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, g.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, g.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, g.jsx)("label", {
                                      className: "label col-sm-2",
                                      children: (0, g.jsx)(i.c, {
                                        children: "from:",
                                      }),
                                    }),
                                    (0, g.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-2",
                                      onChange: function (e) {
                                        var a = e.target.value;
                                        w(function (e) {
                                          return (0,
                                          l.Z)((0, l.Z)({}, e), {}, { year_from: a });
                                        });
                                      },
                                      value: n.year_from,
                                      as: "select",
                                      children: [
                                        (0, g.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "select",
                                        }),
                                        Array.from({ length: 30 }).map(
                                          function (e, a) {
                                            var l =
                                              (n.year_to ||
                                                new Date().getUTCFullYear()) -
                                              a;
                                            return (0, g.jsx)(
                                              "option",
                                              { value: l, children: l },
                                              l
                                            );
                                          }
                                        ),
                                      ],
                                    }),
                                    (0, g.jsx)("label", {
                                      className: "label col-sm-1",
                                      children: (0, g.jsx)(i.c, {
                                        children: "to:",
                                      }),
                                    }),
                                    (0, g.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-2",
                                      onChange: function (e) {
                                        var a = e.target.value;
                                        w(function (e) {
                                          return (0,
                                          l.Z)((0, l.Z)({}, e), {}, { year_to: a });
                                        });
                                      },
                                      value: n.year_to,
                                      as: "select",
                                      children: [
                                        (0, g.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "select",
                                        }),
                                        Array.from({
                                          length:
                                            new Date().getUTCFullYear() -
                                            n.year_from,
                                        }).map(function (e, a) {
                                          var n =
                                            new Date().getUTCFullYear() - a;
                                          return (0,
                                          g.jsx)("option", { value: n, children: n }, n);
                                        }),
                                      ],
                                    }),
                                    (0, g.jsx)("label", {
                                      className: "label col-sm-3",
                                      children: (0, g.jsx)(i.c, {
                                        children: "Calculate for year:",
                                      }),
                                    }),
                                    (0, g.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-2",
                                      onChange: function (e) {
                                        var a = e.target.value;
                                        w(function (e) {
                                          return (0,
                                          l.Z)((0, l.Z)({}, e), {}, { calculate_for: a });
                                        });
                                      },
                                      value: n.calculate_for,
                                      as: "select",
                                      children: [
                                        (0, g.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "select",
                                        }),
                                        Array.from({ length: 30 }).map(
                                          function (e, a) {
                                            var n =
                                              new Date().getUTCFullYear() - a;
                                            return (0, g.jsx)(
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
                            ],
                          }),
                          (0, g.jsxs)("div", {
                            className: "row mt-4",
                            children: [
                              (0, g.jsx)("div", {
                                className: "col-sm-1",
                                children: (0, g.jsx)("button", {
                                  type: "submit",
                                  className: "btn btn-primary",
                                  children: "Reports",
                                }),
                              }),
                              (0, g.jsx)("div", {
                                className: "col-sm-1",
                                children: (0, g.jsx)("button", {
                                  type: "button",
                                  className: "btn btn-secondary",
                                  onClick: function () {
                                    return w(Z);
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
                (0, g.jsx)("div", {
                  className: "mt-3",
                  children: (0, g.jsx)("div", {
                    className: "card",
                    children: (0, g.jsxs)("div", {
                      className: "card-body py-3",
                      children: [
                        (0, g.jsx)("h4", {
                          children: (0, g.jsxs)(i.c, {
                            children: [
                              "Report Number: Gap Item Report (",
                              null === P || void 0 === P ? void 0 : P.country,
                              ")",
                            ],
                          }),
                        }),
                        (0, g.jsxs)("h6", {
                          children: [
                            "Date: ",
                            new Date().toISOString().split("T")[0],
                          ],
                        }),
                        (0, g.jsx)("div", {
                          className: "mt-3 table-container ",
                          children: (0, g.jsxs)(h.Z, {
                            children: [
                              (0, g.jsxs)(p.Z, {
                                children: [
                                  (0, g.jsxs)(v.Z, {
                                    children: [
                                      (0, g.jsx)(x.Z, {
                                        align: "center",
                                        colSpan: 5,
                                        children: "Facility information",
                                      }),
                                      (0, g.jsx)(x.Z, {
                                        align: "center",
                                        colSpan: 2,
                                        children: "Populations",
                                      }),
                                      "6" === T
                                        ? Array.from({ length: 5 }).map(
                                            function (e, a) {
                                              return (0, g.jsx)(
                                                x.Z,
                                                {
                                                  align: "center",
                                                  colSpan: 4,
                                                  style: {
                                                    textAlign: "center",
                                                  },
                                                  children: y[a].name,
                                                },
                                                a
                                              );
                                            }
                                          )
                                        : (0, g.jsx)(x.Z, {
                                            align: "center",
                                            colSpan: 4,
                                            style: { textAlign: "center" },
                                            children: y[+T - 1].name,
                                          }),
                                    ],
                                  }),
                                  (0, g.jsxs)(v.Z, {
                                    children: [
                                      b.map(function (e) {
                                        return (0,
                                        g.jsx)(x.Z, { children: (0, g.jsx)(i.c, { children: e.headTitle }) }, e.headTitle);
                                      }),
                                      Array.from({
                                        length: "6" === T ? 5 : 1,
                                      }).map(function (e, a) {
                                        return (0, g.jsx)(
                                          s.Fragment,
                                          {
                                            children: C.map(function (e) {
                                              return (0,
                                              g.jsx)(x.Z, { children: (0, g.jsx)(i.c, { children: e.headTitle }) }, "".concat(e.valueKey).concat(a + 1));
                                            }),
                                          },
                                          a
                                        );
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, g.jsx)(f.Z, {
                                children:
                                  null === _ || void 0 === _
                                    ? void 0
                                    : _.data.map(function (e, a) {
                                        return (0, g.jsxs)(
                                          v.Z,
                                          {
                                            children: [
                                              b.map(function (a) {
                                                var n;
                                                return (0,
                                                g.jsx)(x.Z, { children: null !== (n = e[a.valueKey]) && void 0 !== n ? n : "-" }, a.valueKey);
                                              }),
                                              Array.from({
                                                length: "6" === T ? 5 : 1,
                                              }).map(function (a, n) {
                                                return (0, g.jsx)(
                                                  s.Fragment,
                                                  {
                                                    children: C.map(function (
                                                      a
                                                    ) {
                                                      return (0, g.jsx)(
                                                        x.Z,
                                                        {
                                                          style: {
                                                            color:
                                                              "excees" ===
                                                              a.valueKey
                                                                ? e[
                                                                    "exceed".concat(
                                                                      n + 1
                                                                    )
                                                                  ]
                                                                  ? "blue"
                                                                  : "red"
                                                                : "unset",
                                                          },
                                                          children:
                                                            e[
                                                              ""
                                                                .concat(
                                                                  a.valueKey
                                                                )
                                                                .concat(n + 1)
                                                            ],
                                                        },
                                                        ""
                                                          .concat(a.valueKey)
                                                          .concat(n + 1)
                                                      );
                                                    }),
                                                  },
                                                  n
                                                );
                                              }),
                                            ],
                                          },
                                          a
                                        );
                                      }),
                              }),
                            ],
                          }),
                        }),
                        (null === _ || void 0 === _ ? void 0 : _.excel) &&
                          (0, g.jsx)("div", {
                            className: "row mt-4",
                            children: (0, g.jsx)("div", {
                              className: "col-sm-2",
                              children: (0, g.jsx)("a", {
                                href: j.Z + _.excel,
                                download: !0,
                                children: (0, g.jsx)("button", {
                                  className: "btn btn-primary",
                                  children: (0, g.jsx)(i.c, {
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
    51763: function (e, a, n) {
      var l = n(15671),
        r = n(43144),
        t = n(54318),
        c = n(39877),
        s = "http://127.0.0.1:8000/reports/",
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
      a.Z = new i();
    },
    23821: function (e, a, n) {
      var l = n(39281),
        r = n(79836),
        t = n(80184);
      a.Z = function (e) {
        var a = e.children;
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(l.Z, {
            children: (0, t.jsx)(r.Z, { children: a }),
          }),
        });
      };
    },
    92854: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=5629.40c53bf0.chunk.js.map
