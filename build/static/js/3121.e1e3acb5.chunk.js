"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [3121],
  {
    51763: function (e, l, n) {
      var a = n(15671),
        r = n(43144),
        c = n(54318),
        s = n(39877),
        o = "http://5.182.47.38:8000/reports/",
        t = (function () {
          function e() {
            (0, a.Z)(this, e);
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
    13121: function (e, l, n) {
      n.r(l);
      var a = n(1413),
        r = n(74165),
        c = n(15861),
        s = n(29439),
        o = n(72791),
        t = n(30606),
        i = n(91933),
        d = n(16149),
        u = n(51763),
        m = n(59909),
        h = n(23821),
        x = n(56890),
        j = n(35855),
        v = n(53994),
        Z = n(53382),
        f = (n(93650), n(91523)),
        p = n(80184),
        g = {
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
        var e = (0, o.useState)(g),
          l = (0, s.Z)(e, 2),
          n = l[0],
          N = l[1],
          C = (0, i.useQuery)(
            ["planning-cce-gap-helper"],
            (0, c.Z)(
              (0, r.Z)().mark(function e() {
                var l;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2), u.Z.getPlanningCCEGap({ help: !0 })
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
          _ = C.data,
          y = C.isLoading,
          w = (0, i.useQuery)(
            ["gap-cce-report"],
            (0, c.Z)(
              (0, r.Z)().mark(function e() {
                var l, a, c, s;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (a in ((l = { help: !1 }), n))
                          (c = n[a]).length > 0 && "-1" !== c && (l[a] = c);
                        return (e.next = 4), u.Z.getPlanningCCEGap(l);
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
          P = w.data,
          k = w.isLoading,
          G = w.refetch;
        return y || k
          ? (0, p.jsx)(m.Z, {})
          : (0, p.jsxs)("div", {
              children: [
                (0, p.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, p.jsx)(t.c, { children: "Planning CCE Gap" }),
                }),
                (0, p.jsx)("div", {
                  className: "mt-3",
                  children: (0, p.jsx)("div", {
                    className: "card",
                    children: (0, p.jsx)("div", {
                      className: "card-body py-3",
                      children: (0, p.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), G();
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
                                children: (0, p.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, p.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, p.jsx)(t.c, {
                                        children: "Facility name:",
                                      }),
                                    }),
                                    (0, p.jsx)(d.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { name: l });
                                        });
                                      },
                                      value: n.name,
                                    }),
                                  ],
                                }),
                              }),
                              (0, p.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, p.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, p.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, p.jsx)(t.c, {
                                        children: "Code:",
                                      }),
                                    }),
                                    (0, p.jsx)(d.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        N(function (e) {
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
                          (0, p.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, p.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, p.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, p.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, p.jsx)(t.c, {
                                        children: "Level:",
                                      }),
                                    }),
                                    (0, p.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { level: l });
                                        });
                                      },
                                      value: n.level,
                                      as: "select",
                                      children: [
                                        (0, p.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === _ || void 0 === _
                                          ? void 0
                                          : _.level.map(function (e) {
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
                                children: (0, p.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, p.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, p.jsx)(t.c, {
                                        children: "Type:",
                                      }),
                                    }),
                                    (0, p.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { type: l });
                                        });
                                      },
                                      value: n.type,
                                      as: "select",
                                      children: [
                                        (0, p.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === _ || void 0 === _
                                          ? void 0
                                          : _.type.map(function (e) {
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
                              children: (0, p.jsxs)(d.Z.Group, {
                                className: "row",
                                children: [
                                  (0, p.jsx)("label", {
                                    className: "label col-sm-4",
                                    children: (0, p.jsx)(t.c, {
                                      children: "Power source:",
                                    }),
                                  }),
                                  (0, p.jsxs)(d.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var l = e.target.value;
                                      N(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { power: l });
                                      });
                                    },
                                    value: n.power,
                                    as: "select",
                                    children: [
                                      (0, p.jsx)("option", {
                                        value: "-1",
                                        selected: !0,
                                        disabled: !0,
                                        children: "Please select",
                                      }),
                                      null === _ || void 0 === _
                                        ? void 0
                                        : _.power.map(function (e) {
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
                              children: (0, p.jsxs)(d.Z.Group, {
                                className: "row",
                                children: [
                                  (0, p.jsx)("label", {
                                    className: "label col-sm-4",
                                    children: (0, p.jsx)(t.c, {
                                      children:
                                        "Storage Condition For Planning:",
                                    }),
                                  }),
                                  (0, p.jsxs)(d.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var l = e.target.value;
                                      N(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { degree: l });
                                      });
                                    },
                                    value: n.degree,
                                    as: "select",
                                    children: [
                                      (0, p.jsx)("option", {
                                        value: "-1",
                                        selected: !0,
                                        disabled: !0,
                                        children: "Please select",
                                      }),
                                      b.map(function (e) {
                                        return (0,
                                        p.jsx)("option", { value: e.id, children: e.name }, e.id);
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, p.jsxs)(d.Z.Group, {
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
                              (0, p.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  N(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { general_from: l });
                                  });
                                },
                                value: n.general_from,
                              }),
                              (0, p.jsx)("label", {
                                className: "label-center col-sm-2",
                                children: (0, p.jsx)(t.c, { children: "to:" }),
                              }),
                              (0, p.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  N(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { general_to: l });
                                  });
                                },
                                value: n.general_to,
                              }),
                            ],
                          }),
                          (0, p.jsxs)(d.Z.Group, {
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
                              (0, p.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  N(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { under_1_from: l });
                                  });
                                },
                                value: n.under_1_from,
                              }),
                              (0, p.jsx)("label", {
                                className: "label-center col-sm-2",
                                children: (0, p.jsx)(t.c, { children: "to:" }),
                              }),
                              (0, p.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  N(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { under_1_to: l });
                                  });
                                },
                                value: n.under_1_to,
                              }),
                            ],
                          }),
                          (0, p.jsxs)(d.Z.Group, {
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
                              (0, p.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  N(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { req_cap_from: l });
                                  });
                                },
                                value: n.req_cap_from,
                              }),
                              (0, p.jsx)("label", {
                                className: "label-center col-sm-2",
                                children: (0, p.jsx)(t.c, { children: "to:" }),
                              }),
                              (0, p.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  N(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { req_cap_to: l });
                                  });
                                },
                                value: n.req_cap_to,
                              }),
                            ],
                          }),
                          (0, p.jsxs)(d.Z.Group, {
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
                              (0, p.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  N(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { available_from: l });
                                  });
                                },
                                value: n.available_from,
                              }),
                              (0, p.jsx)("label", {
                                className: "label-center col-sm-2",
                                children: (0, p.jsx)(t.c, { children: "to:" }),
                              }),
                              (0, p.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  N(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { available_to: l });
                                  });
                                },
                                value: n.available_to,
                              }),
                            ],
                          }),
                          (0, p.jsxs)(d.Z.Group, {
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
                              (0, p.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  N(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { func_cap_from: l });
                                  });
                                },
                                value: n.func_cap_from,
                              }),
                              (0, p.jsx)("label", {
                                className: "label-center col-sm-2",
                                children: (0, p.jsx)(t.c, { children: "to:" }),
                              }),
                              (0, p.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  N(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { func_cap_to: l });
                                  });
                                },
                                value: n.func_cap_to,
                              }),
                            ],
                          }),
                          (0, p.jsxs)(d.Z.Group, {
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
                              (0, p.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  N(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { excees_from: l });
                                  });
                                },
                                value: n.excees_from,
                              }),
                              (0, p.jsx)("label", {
                                className: "label-center col-sm-2",
                                children: (0, p.jsx)(t.c, { children: "to:" }),
                              }),
                              (0, p.jsx)(d.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var l = e.target.value;
                                  N(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { excees_to: l });
                                  });
                                },
                                value: n.excees_to,
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
                                    return N(g);
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
                                    (0, p.jsx)(v.Z, {
                                      children: (0, p.jsx)(t.c, {
                                        children: "Planned",
                                      }),
                                    }),
                                    (0, p.jsx)(v.Z, {
                                      children: (0, p.jsx)(t.c, {
                                        children: "Facility Name",
                                      }),
                                    }),
                                    (0, p.jsx)(v.Z, {
                                      children: (0, p.jsx)(t.c, {
                                        children: "Parent Facility",
                                      }),
                                    }),
                                    (0, p.jsx)(v.Z, {
                                      children: (0, p.jsx)(t.c, {
                                        children: "Level",
                                      }),
                                    }),
                                    (0, p.jsx)(v.Z, {
                                      children: (0, p.jsx)(t.c, {
                                        children: "Code",
                                      }),
                                    }),
                                    (0, p.jsx)(v.Z, {
                                      children: (0, p.jsx)(t.c, {
                                        children: "Type",
                                      }),
                                    }),
                                    (0, p.jsx)(v.Z, {
                                      children: (0, p.jsx)(t.c, {
                                        children: "Power source",
                                      }),
                                    }),
                                    (0, p.jsx)(v.Z, {
                                      children: (0, p.jsx)(t.c, {
                                        children: "Storage condition",
                                      }),
                                    }),
                                    (0, p.jsx)(v.Z, {
                                      children: (0, p.jsx)(t.c, {
                                        children: "Require Capacity",
                                      }),
                                    }),
                                    (0, p.jsx)(v.Z, {
                                      children: (0, p.jsx)(t.c, {
                                        children: "Available Capacity (lit.)",
                                      }),
                                    }),
                                    (0, p.jsx)(v.Z, {
                                      children: (0, p.jsx)(t.c, {
                                        children: "Functional Capacity",
                                      }),
                                    }),
                                    (0, p.jsx)(v.Z, {
                                      children: (0, p.jsx)(t.c, {
                                        children: "Shortage/exces Capacity",
                                      }),
                                    }),
                                    (0, p.jsx)(v.Z, {
                                      children: (0, p.jsx)(t.c, {
                                        children: "Plan it",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, p.jsx)(Z.Z, {
                                children:
                                  null === P || void 0 === P
                                    ? void 0
                                    : P.map(function (e, l) {
                                        var n, a, r, c, s, o, t, i, d, u, m;
                                        return (0,
                                        p.jsxs)(j.Z, { children: [(0, p.jsx)(v.Z, { children: (0, p.jsx)("input", { type: "checkbox", disabled: !0, defaultChecked: e.planned }) }), (0, p.jsx)(v.Z, { children: null !== (n = e.facility) && void 0 !== n ? n : "-" }), (0, p.jsx)(v.Z, { children: null !== (a = e.parent) && void 0 !== a ? a : "-" }), (0, p.jsx)(v.Z, { children: null !== (r = e.level) && void 0 !== r ? r : "-" }), (0, p.jsx)(v.Z, { children: null !== (c = e.code) && void 0 !== c ? c : "-" }), (0, p.jsx)(v.Z, { children: null !== (s = e.type) && void 0 !== s ? s : "-" }), (0, p.jsx)(v.Z, { children: null !== (o = e.power) && void 0 !== o ? o : "-" }), (0, p.jsx)(v.Z, { children: null !== (t = e.condition) && void 0 !== t ? t : "-" }), (0, p.jsx)(v.Z, { children: null !== (i = e.req_capacity) && void 0 !== i ? i : "-" }), (0, p.jsx)(v.Z, { children: null !== (d = e.available) && void 0 !== d ? d : "-" }), (0, p.jsx)(v.Z, { children: null !== (u = e.func_cap) && void 0 !== u ? u : "-" }), (0, p.jsx)(v.Z, { children: null !== (m = e.exces) && void 0 !== m ? m : "-" }), (0, p.jsx)(v.Z, { children: (0, p.jsx)(f.rU, { to: "/settings/fac-gap-info/".concat(e.id), children: "Plan it" }) })] }, l);
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
//# sourceMappingURL=3121.e1e3acb5.chunk.js.map
