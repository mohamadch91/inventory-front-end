"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [4744],
  {
    51763: function (e, l, a) {
      var n = a(15671),
        r = a(43144),
        c = a(54318),
        s = a(39877),
        o = "http://127.0.0.1:8000/reports/",
        t = (function () {
          function e() {
            (0, n.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return s.Z.get(o + "excel", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return s.Z.get(o + "facseg", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return s.Z.get(o + "subfacpop", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return s.Z.get(o + "facmap", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return s.Z.get(o + "gapmap", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return s.Z.get(o + "item-gp", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return s.Z.get(o + "itemfac", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return s.Z.get(o + "gapitem", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return s.Z.get(o + "facprof", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return s.Z.get(o + "coldprof", {
                    headers: { Authorization: (0, c.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return s.Z.get(o + "planingreport", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return s.Z.get(o + "gapcce", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return s.Z.get(o + "gapccePlan", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return s.Z.post(o + "gapccePlan", e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return s.Z.delete(o + "gapccePlan", {
                    headers: { Authorization: (0, c.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return s.Z.put(o + "gapccePlan", e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      l.Z = new t();
    },
    4744: function (e, l, a) {
      a.r(l);
      var n = a(1413),
        r = a(74165),
        c = a(15861),
        s = a(29439),
        o = a(72791),
        t = a(30606),
        i = a(91933),
        u = a(16149),
        d = a(51763),
        m = a(59909),
        h = a(23821),
        x = a(56890),
        j = a(35855),
        f = a(53994),
        v = a(53382),
        p = (a(93650), a(80184)),
        Z = {
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
        g = [
          { id: "1", name: "2-8 C" },
          { id: "2", name: "-20 C" },
          { id: "3", name: "-70 C" },
          { id: "4", name: "+25 C" },
          { id: "5", name: "Dry store" },
        ];
      l.default = function () {
        var e = (0, o.useState)(Z),
          l = (0, s.Z)(e, 2),
          a = l[0],
          b = l[1],
          N = (0, i.useQuery)(
            ["planning-report-helper"],
            (0, c.Z)(
              (0, r.Z)().mark(function e() {
                var l;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2), d.Z.getPlanningReport({ help: !0 })
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
          C = N.data,
          _ = N.isLoading,
          y = (0, i.useQuery)(
            ["planning-report"],
            (0, c.Z)(
              (0, r.Z)().mark(function e() {
                var l, n, c, s;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (n in ((l = { help: !1 }), a))
                          (c = a[n]).length > 0 && "-1" !== c && (l[n] = c);
                        return (e.next = 4), d.Z.getPlanningReport(l);
                      case 4:
                        return (s = e.sent), e.abrupt("return", s.data);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { refetchOnMount: !1, enabled: !1 }
          ),
          w = y.data,
          P = y.isLoading,
          k = y.refetch;
        return _ || P
          ? (0, p.jsx)(m.Z, {})
          : (0, p.jsxs)("div", {
              children: [
                (0, p.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, p.jsx)(t.c, { children: "Planning Report" }),
                }),
                (0, p.jsx)("div", {
                  className: "mt-3",
                  children: (0, p.jsx)("div", {
                    className: "card",
                    children: (0, p.jsx)("div", {
                      className: "card-body py-3",
                      children: (0, p.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), k();
                        },
                        children: [
                          (0, p.jsx)("h4", {
                            children: (0, p.jsx)(t.c, { children: "Filters" }),
                          }),
                          (0, p.jsxs)("div", {
                            className: "row mt-5",
                            children: [
                              (0, p.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, p.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, p.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, p.jsx)(t.c, {
                                        children: "Facility name:",
                                      }),
                                    }),
                                    (0, p.jsx)(u.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        b(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { name: l });
                                        });
                                      },
                                      value: a.name,
                                    }),
                                  ],
                                }),
                              }),
                              (0, p.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, p.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, p.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, p.jsx)(t.c, {
                                        children: "Code:",
                                      }),
                                    }),
                                    (0, p.jsx)(u.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        b(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { code: l });
                                        });
                                      },
                                      value: a.code,
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, p.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, p.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, p.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, p.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, p.jsx)(t.c, {
                                        children: "Level:",
                                      }),
                                    }),
                                    (0, p.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        b(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { level: l });
                                        });
                                      },
                                      value: a.level,
                                      as: "select",
                                      children: [
                                        (0, p.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === C || void 0 === C
                                          ? void 0
                                          : C.level.map(function (e) {
                                              return (0,
                                              p.jsx)("option", { value: e.id, children: "".concat(e.id, " - ").concat(e.name) }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, p.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, p.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, p.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, p.jsx)(t.c, {
                                        children: "Type:",
                                      }),
                                    }),
                                    (0, p.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        b(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { type: l });
                                        });
                                      },
                                      value: a.type,
                                      as: "select",
                                      children: [
                                        (0, p.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === C || void 0 === C
                                          ? void 0
                                          : C.type.map(function (e) {
                                              return (0,
                                              p.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, p.jsx)("div", {
                            className: "row mt-1",
                            children: (0, p.jsx)("div", {
                              className: "col-sm-12 col-lg-6",
                              children: (0, p.jsxs)(u.Z.Group, {
                                className: "row",
                                children: [
                                  (0, p.jsx)("label", {
                                    className: "label col-sm-4",
                                    children: (0, p.jsx)(t.c, {
                                      children: "Power source:",
                                    }),
                                  }),
                                  (0, p.jsxs)(u.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var l = e.target.value;
                                      b(function (e) {
                                        return (0,
                                        n.Z)((0, n.Z)({}, e), {}, { power: l });
                                      });
                                    },
                                    value: a.power,
                                    as: "select",
                                    children: [
                                      (0, p.jsx)("option", {
                                        value: "-1",
                                        selected: !0,
                                        disabled: !0,
                                        children: "Please select",
                                      }),
                                      null === C || void 0 === C
                                        ? void 0
                                        : C.power.map(function (e) {
                                            return (0,
                                            p.jsx)("option", { value: e.id, children: e.name }, e.id);
                                          }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, p.jsx)("div", {
                            className: "row mt-1",
                            children: (0, p.jsx)("div", {
                              className: "col-sm-12 col-lg-6",
                              children: (0, p.jsxs)(u.Z.Group, {
                                className: "row",
                                children: [
                                  (0, p.jsx)("label", {
                                    className: "label col-sm-4",
                                    children: (0, p.jsx)(t.c, {
                                      children:
                                        "Storage Condition For Planning:",
                                    }),
                                  }),
                                  (0, p.jsxs)(u.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var l = e.target.value;
                                      b(function (e) {
                                        return (0,
                                        n.Z)((0, n.Z)({}, e), {}, { degree: l });
                                      });
                                    },
                                    value: a.degree,
                                    as: "select",
                                    children: [
                                      (0, p.jsx)("option", {
                                        value: "-1",
                                        selected: !0,
                                        disabled: !0,
                                        children: "Please select",
                                      }),
                                      g.map(function (e) {
                                        return (0,
                                        p.jsx)("option", { value: e.id, children: e.name }, e.id);
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, p.jsxs)(u.Z.Group, {
                            className: "row mt-1",
                            children: [
                              (0, p.jsx)("label", {
                                className: "label col-sm-2",
                                children: (0, p.jsx)(t.c, {
                                  children: "General population:",
                                }),
                              }),
                              (0, p.jsx)("label", {
                                className: "label-center col-sm-2",
                                children: (0, p.jsx)(t.c, {
                                  children: "from:",
                                }),
                              }),
                              (0, p.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  b(function (e) {
                                    return (0,
                                    n.Z)((0, n.Z)({}, e), {}, { general_from: l });
                                  });
                                },
                                value: a.general_from,
                              }),
                              (0, p.jsx)("label", {
                                className: "label-center col-sm-2",
                                children: (0, p.jsx)(t.c, { children: "to:" }),
                              }),
                              (0, p.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  b(function (e) {
                                    return (0,
                                    n.Z)((0, n.Z)({}, e), {}, { general_to: l });
                                  });
                                },
                                value: a.general_to,
                              }),
                            ],
                          }),
                          (0, p.jsxs)(u.Z.Group, {
                            className: "row mt-1",
                            children: [
                              (0, p.jsx)("label", {
                                className: "label col-sm-2",
                                children: (0, p.jsx)(t.c, {
                                  children: "Under-1 Population",
                                }),
                              }),
                              (0, p.jsx)("label", {
                                className: "label-center col-sm-2",
                                children: (0, p.jsx)(t.c, {
                                  children: "from:",
                                }),
                              }),
                              (0, p.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  b(function (e) {
                                    return (0,
                                    n.Z)((0, n.Z)({}, e), {}, { under_1_from: l });
                                  });
                                },
                                value: a.under_1_from,
                              }),
                              (0, p.jsx)("label", {
                                className: "label-center col-sm-2",
                                children: (0, p.jsx)(t.c, { children: "to:" }),
                              }),
                              (0, p.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  b(function (e) {
                                    return (0,
                                    n.Z)((0, n.Z)({}, e), {}, { under_1_to: l });
                                  });
                                },
                                value: a.under_1_to,
                              }),
                            ],
                          }),
                          (0, p.jsxs)(u.Z.Group, {
                            className: "row mt-1",
                            children: [
                              (0, p.jsx)("label", {
                                className: "label col-sm-2",
                                children: (0, p.jsx)(t.c, {
                                  children: "Require Capacity",
                                }),
                              }),
                              (0, p.jsx)("label", {
                                className: "label-center col-sm-2",
                                children: (0, p.jsx)(t.c, {
                                  children: "from:",
                                }),
                              }),
                              (0, p.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  b(function (e) {
                                    return (0,
                                    n.Z)((0, n.Z)({}, e), {}, { req_cap_from: l });
                                  });
                                },
                                value: a.req_cap_from,
                              }),
                              (0, p.jsx)("label", {
                                className: "label-center col-sm-2",
                                children: (0, p.jsx)(t.c, { children: "to:" }),
                              }),
                              (0, p.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  b(function (e) {
                                    return (0,
                                    n.Z)((0, n.Z)({}, e), {}, { req_cap_to: l });
                                  });
                                },
                                value: a.req_cap_to,
                              }),
                            ],
                          }),
                          (0, p.jsxs)(u.Z.Group, {
                            className: "row mt-1",
                            children: [
                              (0, p.jsx)("label", {
                                className: "label col-sm-2",
                                children: (0, p.jsx)(t.c, {
                                  children: "Available capacity (lit.)",
                                }),
                              }),
                              (0, p.jsx)("label", {
                                className: "label-center col-sm-2",
                                children: (0, p.jsx)(t.c, {
                                  children: "from:",
                                }),
                              }),
                              (0, p.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  b(function (e) {
                                    return (0,
                                    n.Z)((0, n.Z)({}, e), {}, { available_from: l });
                                  });
                                },
                                value: a.available_from,
                              }),
                              (0, p.jsx)("label", {
                                className: "label-center col-sm-2",
                                children: (0, p.jsx)(t.c, { children: "to:" }),
                              }),
                              (0, p.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  b(function (e) {
                                    return (0,
                                    n.Z)((0, n.Z)({}, e), {}, { available_to: l });
                                  });
                                },
                                value: a.available_to,
                              }),
                            ],
                          }),
                          (0, p.jsxs)(u.Z.Group, {
                            className: "row mt-1",
                            children: [
                              (0, p.jsx)("label", {
                                className: "label col-sm-2",
                                children: (0, p.jsx)(t.c, {
                                  children: "Functional Capacity",
                                }),
                              }),
                              (0, p.jsx)("label", {
                                className: "label-center col-sm-2",
                                children: (0, p.jsx)(t.c, {
                                  children: "from:",
                                }),
                              }),
                              (0, p.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  b(function (e) {
                                    return (0,
                                    n.Z)((0, n.Z)({}, e), {}, { func_cap_from: l });
                                  });
                                },
                                value: a.func_cap_from,
                              }),
                              (0, p.jsx)("label", {
                                className: "label-center col-sm-2",
                                children: (0, p.jsx)(t.c, { children: "to:" }),
                              }),
                              (0, p.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  b(function (e) {
                                    return (0,
                                    n.Z)((0, n.Z)({}, e), {}, { func_cap_to: l });
                                  });
                                },
                                value: a.func_cap_to,
                              }),
                            ],
                          }),
                          (0, p.jsxs)(u.Z.Group, {
                            className: "row mt-1",
                            children: [
                              (0, p.jsx)("label", {
                                className: "label col-sm-2",
                                children: (0, p.jsx)(t.c, {
                                  children: "Shortage/Exces Capacity",
                                }),
                              }),
                              (0, p.jsx)("label", {
                                className: "label-center col-sm-2",
                                children: (0, p.jsx)(t.c, {
                                  children: "from:",
                                }),
                              }),
                              (0, p.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  b(function (e) {
                                    return (0,
                                    n.Z)((0, n.Z)({}, e), {}, { excees_from: l });
                                  });
                                },
                                value: a.excees_from,
                              }),
                              (0, p.jsx)("label", {
                                className: "label-center col-sm-2",
                                children: (0, p.jsx)(t.c, { children: "to:" }),
                              }),
                              (0, p.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  b(function (e) {
                                    return (0,
                                    n.Z)((0, n.Z)({}, e), {}, { excees_to: l });
                                  });
                                },
                                value: a.excees_to,
                              }),
                            ],
                          }),
                          (0, p.jsxs)("div", {
                            className: "row mt-4",
                            children: [
                              (0, p.jsx)("div", {
                                className: "col-sm-1",
                                children: (0, p.jsx)("button", {
                                  type: "submit",
                                  className: "btn btn-primary",
                                  children: "Reports",
                                }),
                              }),
                              (0, p.jsx)("div", {
                                className: "col-sm-1",
                                children: (0, p.jsx)("button", {
                                  type: "button",
                                  className: "btn btn-secondary",
                                  onClick: function () {
                                    return b(Z);
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
                (0, p.jsx)("div", {
                  className: "mt-3",
                  children: (0, p.jsx)("div", {
                    className: "card",
                    children: (0, p.jsxs)("div", {
                      className: "card-body py-3",
                      children: [
                        (0, p.jsx)("h4", {
                          children: (0, p.jsx)(t.c, { children: "Reports" }),
                        }),
                        (0, p.jsx)("div", {
                          className: "mt-3 table-container",
                          children: (0, p.jsxs)(h.Z, {
                            children: [
                              (0, p.jsx)(x.Z, {
                                children: (0, p.jsxs)(j.Z, {
                                  children: [
                                    (0, p.jsx)(f.Z, {
                                      children: (0, p.jsx)(t.c, {
                                        children: "Facility Name",
                                      }),
                                    }),
                                    (0, p.jsx)(f.Z, {
                                      children: (0, p.jsx)(t.c, {
                                        children: "PQS/PIS Code",
                                      }),
                                    }),
                                    (0, p.jsx)(f.Z, {
                                      children: (0, p.jsx)(t.c, {
                                        children: "PQS/PIS-Type",
                                      }),
                                    }),
                                    (0, p.jsx)(f.Z, {
                                      children: (0, p.jsx)(t.c, {
                                        children:
                                          "Net vaccine storage capacity (lit.)",
                                      }),
                                    }),
                                    (0, p.jsx)(f.Z, {
                                      children: (0, p.jsx)(t.c, {
                                        children: "Freezer Net Capacity (lit.)",
                                      }),
                                    }),
                                    (0, p.jsx)(f.Z, {
                                      children: (0, p.jsx)(t.c, {
                                        children: "Assign",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, p.jsx)(v.Z, {
                                children:
                                  null === w || void 0 === w
                                    ? void 0
                                    : w.map(function (e, l) {
                                        var a, n, r, c, s;
                                        return (0,
                                        p.jsxs)(j.Z, { children: [(0, p.jsx)(f.Z, { children: null !== (a = e.facility) && void 0 !== a ? a : "-" }), (0, p.jsx)(f.Z, { children: null !== (n = e.code) && void 0 !== n ? n : "-" }), (0, p.jsx)(f.Z, { children: null !== (r = e.type) && void 0 !== r ? r : "-" }), (0, p.jsx)(f.Z, { children: null !== (c = e.vac_cap) && void 0 !== c ? c : "-" }), (0, p.jsx)(f.Z, { children: null !== (s = e.freez_cap) && void 0 !== s ? s : "-" }), (0, p.jsx)(f.Z, { children: (0, p.jsx)("input", { type: "checkbox", disabled: !0, defaultChecked: e.assigned }) })] }, l);
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
    23821: function (e, l, a) {
      var n = a(39281),
        r = a(79836),
        c = a(80184);
      l.Z = function (e) {
        var l = e.children;
        return (0, c.jsx)(c.Fragment, {
          children: (0, c.jsx)(n.Z, {
            children: (0, c.jsx)(r.Z, { children: l }),
          }),
        });
      };
    },
    93650: function () {},
  },
]);
//# sourceMappingURL=4744.2f525a32.chunk.js.map
