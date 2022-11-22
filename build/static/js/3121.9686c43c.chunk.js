"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [3121],
  {
    51763: function (e, n, l) {
      var a = l(15671),
        r = l(43144),
        c = l(54318),
        s = l(39877),
        t = "https://ukrapi.invgap.org/reports/",
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
    13121: function (e, n, l) {
      l.r(n);
      var a = l(1413),
        r = l(74165),
        c = l(15861),
        s = l(29439),
        t = l(72791),
        o = l(30606),
        i = l(12902),
        d = l(91933),
        u = l(16149),
        m = l(51763),
        h = l(59909),
        x = l(23821),
        j = l(56890),
        f = l(35855),
        v = l(53994),
        p = l(53382),
        Z = (l(93650), l(91523)),
        g = l(65218),
        b = l(80184),
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
        C = [
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
          _ = n[1],
          y = (0, d.useQuery)(
            ["planning-cce-gap-helper"],
            (0, c.Z)(
              (0, r.Z)().mark(function e() {
                var n;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2), m.Z.getPlanningCCEGap({ help: !0 })
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
          w = y.data,
          k = y.isLoading,
          P = (0, d.useQuery)(
            ["gap-cce-report"],
            (0, c.Z)(
              (0, r.Z)().mark(function e() {
                var n, a, c, s;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (a in ((n = { help: !1 }), l))
                          (c = l[a]).length > 0 && "-1" !== c && (n[a] = c);
                        return (e.next = 4), m.Z.getPlanningCCEGap(n);
                      case 4:
                        return (
                          0 === (s = e.sent).data.length &&
                            g.Am.error(
                              (0, b.jsx)(o.c, { children: "No data found" })
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
          G = P.data,
          A = P.isLoading,
          z = P.refetch;
        return k || A
          ? (0, b.jsx)(h.Z, {})
          : (0, b.jsxs)("div", {
              children: [
                (0, b.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, b.jsx)(o.c, {
                    children: "Planning for Cold Chain Equipment Gap",
                  }),
                }),
                (0, b.jsx)("div", {
                  className: "mt-3",
                  children: (0, b.jsx)("div", {
                    className: "card",
                    children: (0, b.jsx)("div", {
                      className: "card-body py-3",
                      children: (0, b.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), z();
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
                                children: (0, b.jsxs)(u.Z.Group, {
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
                                    (0, b.jsx)(u.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { name: n });
                                        });
                                      },
                                      value: l.name,
                                    }),
                                  ],
                                }),
                              }),
                              (0, b.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, b.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, b.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, b.jsx)(o.c, { children: "Code" }),
                                        ":",
                                      ],
                                    }),
                                    (0, b.jsx)(u.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        _(function (e) {
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
                          (0, b.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, b.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, b.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, b.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, b.jsx)(o.c, { children: "Levels" }),
                                        ":",
                                      ],
                                    }),
                                    (0, b.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { level: n });
                                        });
                                      },
                                      value: l.level,
                                      as: "select",
                                      children: [
                                        (0, b.jsx)(i.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, b.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              disabled: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === w || void 0 === w
                                          ? void 0
                                          : w.level.map(function (e) {
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
                                children: (0, b.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, b.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, b.jsx)(o.c, { children: "Type" }),
                                        ":",
                                      ],
                                    }),
                                    (0, b.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        _(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { type: n });
                                        });
                                      },
                                      value: l.type,
                                      as: "select",
                                      children: [
                                        (0, b.jsx)(i.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, b.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              disabled: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === w || void 0 === w
                                          ? void 0
                                          : w.type.map(function (e) {
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
                              children: (0, b.jsxs)(u.Z.Group, {
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
                                  (0, b.jsxs)(u.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      _(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { power: n });
                                      });
                                    },
                                    value: l.power,
                                    as: "select",
                                    children: [
                                      (0, b.jsx)(i.W, {
                                        children: function (e, n) {
                                          n.i18n;
                                          return (0, b.jsx)("option", {
                                            i18n: !0,
                                            value: "-1",
                                            selected: !0,
                                            disabled: !0,
                                            children: e("Please select"),
                                          });
                                        },
                                      }),
                                      null === w || void 0 === w
                                        ? void 0
                                        : w.power.map(function (e) {
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
                              children: (0, b.jsxs)(u.Z.Group, {
                                className: "row",
                                children: [
                                  (0, b.jsxs)("label", {
                                    className: "label col-sm-4",
                                    children: [
                                      (0, b.jsx)(o.c, {
                                        children:
                                          "Storage Condition For Planning",
                                      }),
                                      ":",
                                    ],
                                  }),
                                  (0, b.jsxs)(u.Z.Control, {
                                    className: "form-select col-sm-8",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      _(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { degree: n });
                                      });
                                    },
                                    value: l.degree,
                                    as: "select",
                                    children: [
                                      (0, b.jsx)(i.W, {
                                        children: function (e, n) {
                                          n.i18n;
                                          return (0, b.jsx)("option", {
                                            i18n: !0,
                                            value: "-1",
                                            selected: !0,
                                            disabled: !0,
                                            children: e("Please select"),
                                          });
                                        },
                                      }),
                                      C.map(function (e) {
                                        return (0,
                                        b.jsx)("option", { value: e.id, children: e.name }, e.id);
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, b.jsxs)(u.Z.Group, {
                            className: "row mt-1",
                            children: [
                              (0, b.jsx)("label", {
                                className: "label col-sm-2 mt-3",
                                children: (0, b.jsx)(o.c, {
                                  children: "General populations",
                                }),
                              }),
                              (0, b.jsxs)("label", {
                                className: "label-center col-sm-2 mt-3",
                                children: [
                                  (0, b.jsx)(o.c, { children: "from" }),
                                  ":",
                                ],
                              }),
                              (0, b.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  _(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { general_from: n });
                                  });
                                },
                                value: l.general_from,
                              }),
                              (0, b.jsxs)("label", {
                                className: "label-center col-sm-2 mt-3",
                                children: [
                                  (0, b.jsx)(o.c, { children: "to" }),
                                  ":",
                                ],
                              }),
                              (0, b.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  _(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { general_to: n });
                                  });
                                },
                                value: l.general_to,
                              }),
                            ],
                          }),
                          (0, b.jsxs)(u.Z.Group, {
                            className: "row mt-1",
                            children: [
                              (0, b.jsx)("label", {
                                className: "label col-sm-2 mt-3",
                                children: (0, b.jsx)(o.c, {
                                  children: "Under-1 populations",
                                }),
                              }),
                              (0, b.jsxs)("label", {
                                className: "label-center col-sm-2 mt-3",
                                children: [
                                  (0, b.jsx)(o.c, { children: "from" }),
                                  ":",
                                ],
                              }),
                              (0, b.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  _(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { under_1_from: n });
                                  });
                                },
                                value: l.under_1_from,
                              }),
                              (0, b.jsxs)("label", {
                                className: "label-center col-sm-2 mt-3",
                                children: [
                                  (0, b.jsx)(o.c, { children: "to" }),
                                  ":",
                                ],
                              }),
                              (0, b.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  _(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { under_1_to: n });
                                  });
                                },
                                value: l.under_1_to,
                              }),
                            ],
                          }),
                          (0, b.jsxs)(u.Z.Group, {
                            className: "row mt-1",
                            children: [
                              (0, b.jsx)("label", {
                                className: "label col-sm-2 mt-3",
                                children: (0, b.jsx)(o.c, {
                                  children: "Require Capacity",
                                }),
                              }),
                              (0, b.jsxs)("label", {
                                className: "label-center col-sm-2 mt-3",
                                children: [
                                  (0, b.jsx)(o.c, { children: "from" }),
                                  ":",
                                ],
                              }),
                              (0, b.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  _(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { req_cap_from: n });
                                  });
                                },
                                value: l.req_cap_from,
                              }),
                              (0, b.jsxs)("label", {
                                className: "label-center col-sm-2 mt-3",
                                children: [
                                  (0, b.jsx)(o.c, { children: "to" }),
                                  ":",
                                ],
                              }),
                              (0, b.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  _(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { req_cap_to: n });
                                  });
                                },
                                value: l.req_cap_to,
                              }),
                            ],
                          }),
                          (0, b.jsxs)(u.Z.Group, {
                            className: "row mt-1",
                            children: [
                              (0, b.jsxs)("label", {
                                className: "label col-sm-2 mt-3",
                                children: [
                                  (0, b.jsx)(o.c, {
                                    children: "Available capacity",
                                  }),
                                  " (lit.)",
                                ],
                              }),
                              (0, b.jsxs)("label", {
                                className: "label-center col-sm-2 mt-3",
                                children: [
                                  (0, b.jsx)(o.c, { children: "from" }),
                                  ":",
                                ],
                              }),
                              (0, b.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  _(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { available_from: n });
                                  });
                                },
                                value: l.available_from,
                              }),
                              (0, b.jsxs)("label", {
                                className: "label-center col-sm-2 mt-3",
                                children: [
                                  (0, b.jsx)(o.c, { children: "to" }),
                                  ":",
                                ],
                              }),
                              (0, b.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  _(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { available_to: n });
                                  });
                                },
                                value: l.available_to,
                              }),
                            ],
                          }),
                          (0, b.jsxs)(u.Z.Group, {
                            className: "row mt-1",
                            children: [
                              (0, b.jsx)("label", {
                                className: "label col-sm-2 mt-3 mt-3",
                                children: (0, b.jsx)(o.c, {
                                  children: "Functional Capacity",
                                }),
                              }),
                              (0, b.jsxs)("label", {
                                className: "label-center col-sm-2 mt-3 mt-3",
                                children: [
                                  (0, b.jsx)(o.c, { children: "from" }),
                                  ":",
                                ],
                              }),
                              (0, b.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  _(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { func_cap_from: n });
                                  });
                                },
                                value: l.func_cap_from,
                              }),
                              (0, b.jsxs)("label", {
                                className: "label-center col-sm-2 mt-3 mt-3",
                                children: [
                                  (0, b.jsx)(o.c, { children: "to" }),
                                  ":",
                                ],
                              }),
                              (0, b.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  _(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { func_cap_to: n });
                                  });
                                },
                                value: l.func_cap_to,
                              }),
                            ],
                          }),
                          (0, b.jsxs)(u.Z.Group, {
                            className: "row mt-1",
                            children: [
                              (0, b.jsx)("label", {
                                className: "label col-sm-2 mt-3",
                                children: (0, b.jsx)(o.c, {
                                  children: "Shortage/Exces Capacity",
                                }),
                              }),
                              (0, b.jsxs)("label", {
                                className: "label-center col-sm-2 mt-3",
                                children: [
                                  (0, b.jsx)(o.c, { children: "from" }),
                                  ":",
                                ],
                              }),
                              (0, b.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  _(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { excees_from: n });
                                  });
                                },
                                value: l.excees_from,
                              }),
                              (0, b.jsxs)("label", {
                                className: "label-center col-sm-2 mt-3",
                                children: [
                                  (0, b.jsx)(o.c, { children: "to" }),
                                  ":",
                                ],
                              }),
                              (0, b.jsx)(u.Z.Control, {
                                className: "form-control col-sm-3 ",
                                onChange: function (e) {
                                  var n = e.target.value;
                                  _(function (e) {
                                    return (0,
                                    a.Z)((0, a.Z)({}, e), {}, { excees_to: n });
                                  });
                                },
                                value: l.excees_to,
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
                                  className: "btn btn-primary fs-5 ",
                                  children: (0, b.jsx)(o.c, {
                                    children: "Reports",
                                  }),
                                }),
                              }),
                              (0, b.jsx)("div", {
                                className: "col-sm-2",
                                children: (0, b.jsx)("button", {
                                  type: "button",
                                  className: "btn btn-primary fs-5",
                                  onClick: function () {
                                    _(N), window.location.reload();
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
                        (0, b.jsx)("h4", {
                          children: (0, b.jsx)(o.c, { children: "Reports" }),
                        }),
                        (0, b.jsx)("div", {
                          className: "mt-3 table-container",
                          children: (0, b.jsxs)(x.Z, {
                            children: [
                              (0, b.jsx)(j.Z, {
                                children: (0, b.jsxs)(f.Z, {
                                  children: [
                                    (0, b.jsx)(v.Z, {
                                      children: (0, b.jsx)(o.c, {
                                        children: "Planned",
                                      }),
                                    }),
                                    (0, b.jsx)(v.Z, {
                                      children: (0, b.jsx)(o.c, {
                                        children: "Facility Name",
                                      }),
                                    }),
                                    (0, b.jsx)(v.Z, {
                                      children: (0, b.jsx)(o.c, {
                                        children: "Parent facility",
                                      }),
                                    }),
                                    (0, b.jsx)(v.Z, {
                                      children: (0, b.jsx)(o.c, {
                                        children: "Level",
                                      }),
                                    }),
                                    (0, b.jsx)(v.Z, {
                                      children: (0, b.jsx)(o.c, {
                                        children: "Code",
                                      }),
                                    }),
                                    (0, b.jsx)(v.Z, {
                                      children: (0, b.jsx)(o.c, {
                                        children: "Type",
                                      }),
                                    }),
                                    (0, b.jsx)(v.Z, {
                                      children: (0, b.jsx)(o.c, {
                                        children: "Power source",
                                      }),
                                    }),
                                    (0, b.jsx)(v.Z, {
                                      children: (0, b.jsx)(o.c, {
                                        children: "Storage conditions",
                                      }),
                                    }),
                                    (0, b.jsx)(v.Z, {
                                      children: (0, b.jsx)(o.c, {
                                        children: "Require Capacity",
                                      }),
                                    }),
                                    (0, b.jsxs)(v.Z, {
                                      children: [
                                        (0, b.jsx)(o.c, {
                                          children: "Available capacity",
                                        }),
                                        " (lit.)",
                                      ],
                                    }),
                                    (0, b.jsx)(v.Z, {
                                      children: (0, b.jsx)(o.c, {
                                        children: "Functional Capacity",
                                      }),
                                    }),
                                    (0, b.jsx)(v.Z, {
                                      children: (0, b.jsx)(o.c, {
                                        children: "Shortage/Exces Capacity",
                                      }),
                                    }),
                                    (0, b.jsx)(v.Z, {
                                      children: (0, b.jsx)(o.c, {
                                        children: "Plan it",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, b.jsx)(p.Z, {
                                children:
                                  null === G || void 0 === G
                                    ? void 0
                                    : G.map(function (e, n) {
                                        var l, a, r, c, s, t, o, i, d, u, m;
                                        return (0,
                                        b.jsxs)(f.Z, { children: [(0, b.jsx)(v.Z, { children: (0, b.jsx)("div", { class: "form-check form-check-primary mt-3", children: (0, b.jsxs)("label", { className: "form-check-label", children: [(0, b.jsx)("input", { type: "checkbox", disabled: !0, defaultChecked: e.planned }), (0, b.jsx)("i", { className: "input-helper mt-3" })] }) }) }), (0, b.jsx)(v.Z, { children: null !== (l = e.facility) && void 0 !== l ? l : "-" }), (0, b.jsx)(v.Z, { children: null !== (a = e.parent) && void 0 !== a ? a : "-" }), (0, b.jsx)(v.Z, { children: null !== (r = e.level) && void 0 !== r ? r : "-" }), (0, b.jsx)(v.Z, { children: null !== (c = e.code) && void 0 !== c ? c : "-" }), (0, b.jsx)(v.Z, { children: null !== (s = e.type) && void 0 !== s ? s : "-" }), (0, b.jsx)(v.Z, { children: null !== (t = e.power) && void 0 !== t ? t : "-" }), (0, b.jsx)(v.Z, { children: null !== (o = e.condition) && void 0 !== o ? o : "-" }), (0, b.jsx)(v.Z, { children: null !== (i = e.req_capacity.toFixed(2)) && void 0 !== i ? i : "-" }), (0, b.jsx)(v.Z, { children: null !== (d = e.available.toFixed(2)) && void 0 !== d ? d : "-" }), (0, b.jsx)(v.Z, { children: null !== (u = e.func_cap.toFixed(2)) && void 0 !== u ? u : "-" }), (0, b.jsx)(v.Z, { children: null !== (m = e.exces) && void 0 !== m ? m : "-" }), (0, b.jsx)(v.Z, { children: (0, b.jsx)(Z.rU, { to: "/settings/fac-gap-info/".concat(e.id), children: "Plan it" }) })] }, n);
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
          d = i[0],
          u = i[1],
          m = i[2];
        return l(d, { i18n: u, lng: u.language }, m);
      }
    },
    93650: function () {},
  },
]);
//# sourceMappingURL=3121.9686c43c.chunk.js.map
