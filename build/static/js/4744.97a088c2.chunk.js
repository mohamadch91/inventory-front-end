"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [4744],
  {
    51763: function (e, l, n) {
      var a = n(15671),
        r = n(43144),
        c = n(54318),
        s = n(39877),
        t = "https://api.invgap.org/reports/",
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
                value: function (e, l) {
                  return s.Z.post(t + "gapsave?condition=" + e, l, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      l.Z = new o();
    },
    4744: function (e, l, n) {
      n.r(l);
      var a = n(1413),
        r = n(74165),
        c = n(15861),
        s = n(29439),
        t = n(72791),
        o = n(30606),
        i = n(12902),
        u = n(91933),
        d = n(16149),
        m = n(51763),
        h = n(59909),
        x = n(23821),
        j = n(56890),
        f = n(35855),
        v = n(53994),
        p = n(53382),
        Z = (n(93650), n(65218)),
        g = n(80184),
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
      l.default = function () {
        var e = (0, t.useState)(N),
          l = (0, s.Z)(e, 2),
          n = l[0],
          C = l[1],
          _ = (0, u.useQuery)(
            ["planning-report-helper"],
            (0, c.Z)(
              (0, r.Z)().mark(function e() {
                var l;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2), m.Z.getPlanningReport({ help: !0 })
                        );
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
          y = _.data,
          w = _.isLoading,
          k = (0, u.useQuery)(
            ["planning-report"],
            (0, c.Z)(
              (0, r.Z)().mark(function e() {
                var l, a, c, s;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (a in ((l = { help: !1 }), n))
                          (c = n[a]).length > 0 && "-1" !== c && (l[a] = c);
                        return (e.next = 4), m.Z.getPlanningReport(l);
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
                                        var l = e.target.value;
                                        C(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { name: l });
                                        });
                                      },
                                      value: n.name,
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
                                        var l = e.target.value;
                                        C(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { code: l });
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
                                        var l = e.target.value;
                                        C(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { level: l });
                                        });
                                      },
                                      value: n.level,
                                      as: "select",
                                      children: [
                                        (0, g.jsx)(i.W, {
                                          children: function (e, l) {
                                            l.i18n;
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
                                        var l = e.target.value;
                                        C(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { type: l });
                                        });
                                      },
                                      value: n.type,
                                      as: "select",
                                      children: [
                                        (0, g.jsx)(i.W, {
                                          children: function (e, l) {
                                            l.i18n;
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
                                      var l = e.target.value;
                                      C(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { power: l });
                                      });
                                    },
                                    value: n.power,
                                    as: "select",
                                    children: [
                                      (0, g.jsx)(i.W, {
                                        children: function (e, l) {
                                          l.i18n;
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
                                      var l = e.target.value;
                                      C(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { degree: l });
                                      });
                                    },
                                    value: n.degree,
                                    as: "select",
                                    children: [
                                      (0, g.jsx)(i.W, {
                                        children: function (e, l) {
                                          l.i18n;
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
                                  var l = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { general_from: l });
                                  });
                                },
                                value: n.general_from,
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
                                  var l = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { general_to: l });
                                  });
                                },
                                value: n.general_to,
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
                                  var l = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { under_1_from: l });
                                  });
                                },
                                value: n.under_1_from,
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
                                  var l = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { under_1_to: l });
                                  });
                                },
                                value: n.under_1_to,
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
                                  var l = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { req_cap_from: l });
                                  });
                                },
                                value: n.req_cap_from,
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
                                  var l = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { req_cap_to: l });
                                  });
                                },
                                value: n.req_cap_to,
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
                                  var l = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { available_from: l });
                                  });
                                },
                                value: n.available_from,
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
                                  var l = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { available_to: l });
                                  });
                                },
                                value: n.available_to,
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
                                  var l = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { func_cap_from: l });
                                  });
                                },
                                value: n.func_cap_from,
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
                                  var l = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { func_cap_to: l });
                                  });
                                },
                                value: n.func_cap_to,
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
                                  var l = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { excees_from: l });
                                  });
                                },
                                value: n.excees_from,
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
                                  var l = e.target.value;
                                  C(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { excees_to: l });
                                  });
                                },
                                value: n.excees_to,
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
                              (0, g.jsx)(j.Z, {
                                children: (0, g.jsxs)(f.Z, {
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
                                    : P.map(function (e, l) {
                                        var n, a, r, c, s;
                                        return (0,
                                        g.jsxs)(f.Z, { children: [(0, g.jsx)(v.Z, { children: null !== (n = e.facility) && void 0 !== n ? n : "-" }), (0, g.jsx)(v.Z, { children: null !== (a = e.code) && void 0 !== a ? a : "-" }), (0, g.jsx)(v.Z, { children: null !== (r = e.type) && void 0 !== r ? r : "-" }), (0, g.jsx)(v.Z, { children: null !== (c = e.vac_cap) && void 0 !== c ? c : "-" }), (0, g.jsx)(v.Z, { children: null !== (s = e.freez_cap) && void 0 !== s ? s : "-" }), (0, g.jsx)(v.Z, { children: (0, g.jsx)("input", { type: "checkbox", disabled: !0, defaultChecked: e.assigned }) })] }, l);
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
    23821: function (e, l, n) {
      var a = n(39281),
        r = n(79836),
        c = n(80184);
      l.Z = function (e) {
        var l = e.children;
        return (0, c.jsx)(c.Fragment, {
          children: (0, c.jsx)(a.Z, {
            children: (0, c.jsx)(r.Z, { children: l }),
          }),
        });
      };
    },
    93650: function () {},
  },
]);
//# sourceMappingURL=4744.97a088c2.chunk.js.map
