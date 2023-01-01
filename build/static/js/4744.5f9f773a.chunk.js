"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [4744],
  {
    51763: function (e, n, l) {
      var a = l(15671),
        r = l(43144),
        c = l(54318),
        s = l(39877),
        t = "https://tls.invgap.org/reports/",
        o = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return s.Z.get(t + "excel", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return s.Z.get(t + "facseg", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return s.Z.get(t + "subfacpop", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return s.Z.get(t + "facmap", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return s.Z.get(t + "gapmap", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return s.Z.get(t + "item-gp", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return s.Z.get(t + "itemfac", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return s.Z.get(t + "gapitem", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return s.Z.get(t + "facprof", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return s.Z.get(t + "coldprof", {
                    headers: { Authorization: (0, c.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return s.Z.get(t + "planingreport", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return s.Z.get(t + "gapcce", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return s.Z.get(t + "gapccePlan", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return s.Z.post(t + "gapccePlan", e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return s.Z.delete(t + "gapccePlan", {
                    headers: { Authorization: (0, c.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return s.Z.put(t + "gapccePlan", e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "savegaps",
                value: function (e, n) {
                  return s.Z.post(t + "gapsave?condition=" + e, n, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new o();
    },
    4744: function (e, n, l) {
      l.r(n);
      var a = l(1413),
        r = l(74165),
        c = l(15861),
        s = l(29439),
        t = l(72791),
        o = l(30606),
        i = l(12902),
        u = l(91933),
        d = l(16149),
        m = l(51763),
        h = l(59909),
        x = l(23821),
        f = l(56890),
        j = l(35855),
        v = l(53994),
        p = l(53382),
        Z = (l(93650), l(65218)),
        g = l(80184),
        N = {
          name: "",
          level: "-1",
          type: "-1",
          power: "-1",
          code: "",
          degree: "-1",
          general_from: "",
          general_to: "",
          under_1_from: "",
          under_1_to: "",
          req_cap_from: "",
          req_cap_to: "",
          available_from: "",
          available_to: "",
          func_cap_from: "",
          func_cap_to: "",
          excees_from: "",
          excees_to: "",
        },
        b = [
          { id: "1", name: "2-8 C" },
          { id: "2", name: "-20 C" },
          { id: "3", name: "-70 C" },
          { id: "4", name: "+25 C" },
          { id: "5", name: "Dry store" },
        ];
      n.default = function () {
        var e = (0, t.useState)(N),
          n = (0, s.Z)(e, 2),
          l = n[0],
          C = n[1],
          _ = (0, u.useQuery)(
            ["planning-report-helper"],
            (0, c.Z)(
              (0, r.Z)().mark(function e() {
                var n;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2), m.Z.getPlanningReport({ help: !0 })
                        );
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
          y = _.data,
          w = _.isLoading,
          k = (0, u.useQuery)(
            ["planning-report"],
            (0, c.Z)(
              (0, r.Z)().mark(function e() {
                var n, a, c, s;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (a in ((n = { help: !1 }), l))
                          (c = l[a]).length > 0 && "-1" !== c && (n[a] = c);
                        return (e.next = 4), m.Z.getPlanningReport(n);
                      case 4:
                        return (
                          0 === (s = e.sent).data.length &&
                            Z.Am.error(
                              (0, g.jsx)(o.c, { children: "No data found" })
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
          P = k.data,
          G = k.isLoading,
          A = k.refetch;
        return w || G
          ? (0, g.jsx)(h.Z, {})
          : (0, g.jsxs)("div", {
              children: [
                (0, g.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, g.jsx)(o.c, { children: "Planning Report" }),
                }),
                (0, g.jsx)("div", {
                  className: "mt-3",
                  children: (0, g.jsx)("div", {
                    className: "card",
                    children: (0, g.jsx)("div", {
                      className: "card-body py-3",
                      children: (0, g.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), A();
                        },
                        children: [
                          (0, g.jsx)("h4", {
                            children: (0, g.jsx)(o.c, { children: "Filter" }),
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
                                      className: "label col-sm-4 mt-3 ",
                                      children: [
                                        (0, g.jsx)(o.c, {
                                          children: "Facility Name",
                                        }),
                                        ";",
                                      ],
                                    }),
                                    (0, g.jsx)(d.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        C(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { name: n });
                                        });
                                      },
                                      value: l.name,
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
                                      className: "label col-sm-4 mt-3",
                                      children: [
                                        (0, g.jsx)(o.c, { children: "Code" }),
                                        ":",
                                      ],
                                    }),
                                    (0, g.jsx)(d.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        C(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { code: n });
                                        });
                                      },
                                      value: l.code,
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
                                      className: "label col-sm-4 mt-3",
                                      children: [
                                        (0, g.jsx)(o.c, { children: "Levels" }),
                                        ":",
                                      ],
                                    }),
                                    (0, g.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        C(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { level: n });
                                        });
                                      },
                                      value: l.level,
                                      as: "select",
                                      children: [
                                        (0, g.jsx)(i.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, g.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              disabled: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === y || void 0 === y
                                          ? void 0
                                          : y.level.map(function (e) {
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
                                      className: "label col-sm-4 mt-3",
                                      children: [
                                        (0, g.jsx)(o.c, { children: "Type" }),
                                        ":",
                                      ],
                                    }),
                                    (0, g.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        C(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { type: n });
                                        });
                                      },
                                      value: l.type,
                                      as: "select",
                                      children: [
                                        (0, g.jsx)(i.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, g.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              disabled: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === y || void 0 === y
                                          ? void 0
                                          : y.type.map(function (e) {
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
                                    className: "label col-sm-4 mt-3",
                                    children: [
                                      (0, g.jsx)(o.c, {
                                        children: "Power source",
                                      }),
                                      ":",
                                    ],
                                  }),
                                  (0, g.jsxs)(d.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      C(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { power: n });
                                      });
                                    },
                                    value: l.power,
                                    as: "select",
                                    children: [
                                      (0, g.jsx)(i.W, {
                                        children: function (e, n) {
                                          n.i18n;
                                          return (0, g.jsx)("option", {
                                            i18n: !0,
                                            value: "-1",
                                            selected: !0,
                                            disabled: !0,
                                            children: e("Please select"),
                                          });
                                        },
                                      }),
                                      null === y || void 0 === y
                                        ? void 0
                                        : y.power.map(function (e) {
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
                              children: (0, g.jsxs)(d.Z.Group, {
                                className: "row",
                                children: [
                                  (0, g.jsxs)("label", {
                                    className: "label col-sm-4 mt-2",
                                    children: [
                                      (0, g.jsx)(o.c, {
                                        children:
                                          "Storage Condition For Planning",
                                      }),
                                      ":",
                                    ],
                                  }),
                                  (0, g.jsxs)(d.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      C(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { degree: n });
                                      });
                                    },
                                    value: l.degree,
                                    as: "select",
                                    children: [
                                      (0, g.jsx)(i.W, {
                                        children: function (e, n) {
                                          n.i18n;
                                          return (0, g.jsx)("option", {
                                            i18n: !0,
                                            value: "-1",
                                            selected: !0,
                                            disabled: !0,
                                            children: e("Please select"),
                                          });
                                        },
                                      }),
                                      b.map(function (e) {
                                        return (0,
                                        g.jsx)("option", { value: e.id, children: e.name }, e.id);
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, g.jsxs)(d.Z.Group, {
                            className: "row mt-1",
                            children: [
                              (0, g.jsx)("label", {
                                className: "label col-sm-2 mt-3",
                                children: (0, g.jsx)(o.c, {
                                  children: "General populations",
                                }),
                              }),
                              (0, g.jsxs)("label", {
                                className: "label-center col-sm-1 mt-3",
                                children: [
                                  (0, g.jsx)(o.c, { children: "from" }),
                                  ":",
                                ],
                              }),
                              (0, g.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { general_from: n });
                                  });
                                },
                                value: l.general_from,
                              }),
                              (0, g.jsxs)("label", {
                                className: "label-center col-sm-1 mt-3",
                                children: [
                                  (0, g.jsx)(o.c, { children: "to" }),
                                  ":",
                                ],
                              }),
                              (0, g.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { general_to: n });
                                  });
                                },
                                value: l.general_to,
                              }),
                            ],
                          }),
                          (0, g.jsxs)(d.Z.Group, {
                            className: "row mt-1",
                            children: [
                              (0, g.jsx)("label", {
                                className: "label col-sm-2 mt-3",
                                children: (0, g.jsx)(o.c, {
                                  children: "Under-1 Population",
                                }),
                              }),
                              (0, g.jsxs)("label", {
                                className: "label-center col-sm-1 mt-3",
                                children: [
                                  (0, g.jsx)(o.c, { children: "from" }),
                                  ":",
                                ],
                              }),
                              (0, g.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { under_1_from: n });
                                  });
                                },
                                value: l.under_1_from,
                              }),
                              (0, g.jsxs)("label", {
                                className: "label-center col-sm-1 mt-3",
                                children: [
                                  (0, g.jsx)(o.c, { children: "to" }),
                                  ":",
                                ],
                              }),
                              (0, g.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { under_1_to: n });
                                  });
                                },
                                value: l.under_1_to,
                              }),
                            ],
                          }),
                          (0, g.jsxs)(d.Z.Group, {
                            className: "row mt-1",
                            children: [
                              (0, g.jsx)("label", {
                                className: "label col-sm-2 mt-3",
                                children: (0, g.jsx)(o.c, {
                                  children: "Require Capacity",
                                }),
                              }),
                              (0, g.jsxs)("label", {
                                className: "label-center col-sm-1 mt-3",
                                children: [
                                  (0, g.jsx)(o.c, { children: "from" }),
                                  ":",
                                ],
                              }),
                              (0, g.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { req_cap_from: n });
                                  });
                                },
                                value: l.req_cap_from,
                              }),
                              (0, g.jsxs)("label", {
                                className: "label-center col-sm-1 mt-3",
                                children: [
                                  (0, g.jsx)(o.c, { children: "to" }),
                                  ":",
                                ],
                              }),
                              (0, g.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { req_cap_to: n });
                                  });
                                },
                                value: l.req_cap_to,
                              }),
                            ],
                          }),
                          (0, g.jsxs)(d.Z.Group, {
                            className: "row mt-1",
                            children: [
                              (0, g.jsx)("label", {
                                className: "label col-sm-2 mt-3",
                                children: (0, g.jsx)(o.c, {
                                  children: "Available capacity (lit.)",
                                }),
                              }),
                              (0, g.jsxs)("label", {
                                className: "label-center col-sm-1 mt-3",
                                children: [
                                  (0, g.jsx)(o.c, { children: "from" }),
                                  ":",
                                ],
                              }),
                              (0, g.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { available_from: n });
                                  });
                                },
                                value: l.available_from,
                              }),
                              (0, g.jsxs)("label", {
                                className: "label-center col-sm-1 mt-3",
                                children: [
                                  (0, g.jsx)(o.c, { children: "to" }),
                                  ":",
                                ],
                              }),
                              (0, g.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { available_to: n });
                                  });
                                },
                                value: l.available_to,
                              }),
                            ],
                          }),
                          (0, g.jsxs)(d.Z.Group, {
                            className: "row mt-1",
                            children: [
                              (0, g.jsx)("label", {
                                className: "label col-sm-2 mt-3",
                                children: (0, g.jsx)(o.c, {
                                  children: "Functional Capacity",
                                }),
                              }),
                              (0, g.jsxs)("label", {
                                className: "label-center col-sm-1 mt-3",
                                children: [
                                  (0, g.jsx)(o.c, { children: "from" }),
                                  ":",
                                ],
                              }),
                              (0, g.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { func_cap_from: n });
                                  });
                                },
                                value: l.func_cap_from,
                              }),
                              (0, g.jsxs)("label", {
                                className: "label-center col-sm-1 mt-3",
                                children: [
                                  (0, g.jsx)(o.c, { children: "to" }),
                                  ":",
                                ],
                              }),
                              (0, g.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { func_cap_to: n });
                                  });
                                },
                                value: l.func_cap_to,
                              }),
                            ],
                          }),
                          (0, g.jsxs)(d.Z.Group, {
                            className: "row mt-1",
                            children: [
                              (0, g.jsx)("label", {
                                className: "label col-sm-2 mt-3",
                                children: (0, g.jsx)(o.c, {
                                  children: "Shortage/Exces Capacity",
                                }),
                              }),
                              (0, g.jsxs)("label", {
                                className: "label-center col-sm-1 mt-3",
                                children: [
                                  (0, g.jsx)(o.c, { children: "from" }),
                                  ":",
                                ],
                              }),
                              (0, g.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { excees_from: n });
                                  });
                                },
                                value: l.excees_from,
                              }),
                              (0, g.jsxs)("label", {
                                className: "label-center col-sm-1 mt-3",
                                children: [
                                  (0, g.jsx)(o.c, { children: "to" }),
                                  ":",
                                ],
                              }),
                              (0, g.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { excees_to: n });
                                  });
                                },
                                value: l.excees_to,
                              }),
                            ],
                          }),
                          (0, g.jsxs)("div", {
                            className: "row mt-4",
                            children: [
                              (0, g.jsx)("div", {
                                className: "col-sm-2  ",
                                children: (0, g.jsx)("button", {
                                  type: "submit",
                                  className: "btn btn-primary fs-5",
                                  children: (0, g.jsx)(o.c, {
                                    children: "Reports",
                                  }),
                                }),
                              }),
                              (0, g.jsx)("div", {
                                className: "col-sm-2",
                                children: (0, g.jsx)("button", {
                                  type: "button",
                                  className: "btn btn-primary fs-5",
                                  onClick: function () {
                                    C(N), window.location.reload();
                                  },
                                  children: (0, g.jsx)(o.c, {
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
                        (0, g.jsx)("h4", {
                          children: (0, g.jsx)(o.c, { children: "Reports" }),
                        }),
                        (0, g.jsx)("div", {
                          className: "mt-3 table-container",
                          children: (0, g.jsxs)(x.Z, {
                            children: [
                              (0, g.jsx)(f.Z, {
                                children: (0, g.jsxs)(j.Z, {
                                  children: [
                                    (0, g.jsx)(v.Z, {
                                      children: (0, g.jsx)(o.c, {
                                        children: "Facility Name",
                                      }),
                                    }),
                                    (0, g.jsx)(v.Z, {
                                      children: (0, g.jsx)(o.c, {
                                        children: "PQS/PIS Code",
                                      }),
                                    }),
                                    (0, g.jsx)(v.Z, {
                                      children: (0, g.jsx)(o.c, {
                                        children: "PQS/PIS type",
                                      }),
                                    }),
                                    (0, g.jsx)(v.Z, {
                                      children: (0, g.jsx)(o.c, {
                                        children:
                                          "Net vaccine storage capacity (lit.)",
                                      }),
                                    }),
                                    (0, g.jsxs)(v.Z, {
                                      children: [
                                        (0, g.jsx)(o.c, {
                                          children: "Freezer Net Capacity",
                                        }),
                                        " (lit.)",
                                      ],
                                    }),
                                    (0, g.jsx)(v.Z, {
                                      children: (0, g.jsx)(o.c, {
                                        children: "Assign",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, g.jsx)(p.Z, {
                                children:
                                  null === P || void 0 === P
                                    ? void 0
                                    : P.map(function (e, n) {
                                        var l, a, r, c, s;
                                        return (0,
                                        g.jsxs)(j.Z, { children: [(0, g.jsx)(v.Z, { children: null !== (l = e.facility) && void 0 !== l ? l : "-" }), (0, g.jsx)(v.Z, { children: null !== (a = e.code) && void 0 !== a ? a : "-" }), (0, g.jsx)(v.Z, { children: null !== (r = e.type) && void 0 !== r ? r : "-" }), (0, g.jsx)(v.Z, { children: null !== (c = e.vac_cap) && void 0 !== c ? c : "-" }), (0, g.jsx)(v.Z, { children: null !== (s = e.freez_cap) && void 0 !== s ? s : "-" }), (0, g.jsx)(v.Z, { children: (0, g.jsx)("div", { class: "form-check form-check-primary mt-3", children: (0, g.jsxs)("label", { className: "form-check-label", children: [(0, g.jsx)("input", { type: "checkbox", disabled: !0, defaultChecked: e.assigned }), (0, g.jsx)("i", { className: "input-helper mt-3" })] }) }) })] }, n);
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
    23821: function (e, n, l) {
      var a = l(39281),
        r = l(79836),
        c = l(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, c.jsx)(c.Fragment, {
          children: (0, c.jsx)(a.Z, {
            children: (0, c.jsx)(r.Z, { children: n }),
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
      var a = l(29439),
        r = l(45987),
        c = l(22020),
        s = ["ns", "children"];
      function t(e) {
        var n = e.ns,
          l = e.children,
          t = (0, r.Z)(e, s),
          o = (0, c.$)(n, t),
          i = (0, a.Z)(o, 3),
          u = i[0],
          d = i[1],
          m = i[2];
        return l(u, { i18n: d, lng: d.language }, m);
      }
    },
    93650: function () {},
  },
]);
//# sourceMappingURL=4744.5f9f773a.chunk.js.map
