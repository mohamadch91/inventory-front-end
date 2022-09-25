"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [1751],
  {
    31751: function (e, n, l) {
      l.r(n);
      var a = l(1413),
        r = l(74165),
        s = l(15861),
        c = l(29439),
        t = l(72791),
        o = l(30606),
        i = l(12902),
        u = l(91933),
        d = l(16149),
        m = l(51763),
        h = (l(92854), l(59909)),
        p = l(23821),
        v = l(56890),
        x = l(35855),
        f = l(53994),
        j = l(53382),
        Z = (l(93650), l(80184)),
        g = {
          name: "",
          code: "",
          level: "-1",
          type: "-1",
          power: "-1",
          func: "-1",
          gfrom: "",
          gto: "",
          underfrom: "",
          underto: "",
        };
      n.default = function () {
        var e = (0, t.useState)(g),
          n = (0, c.Z)(e, 2),
          l = n[0],
          N = n[1],
          y = JSON.parse(localStorage.getItem("country")) || {},
          b = (0, u.useQuery)(
            ["fac-seg-helper"],
            (0, s.Z)(
              (0, r.Z)().mark(function e() {
                var n;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), m.Z.getFacSeg({ help: !0 });
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
          w = b.data,
          C = b.isLoading,
          k = (0, u.useQuery)(
            ["fac-seg-report"],
            (0, s.Z)(
              (0, r.Z)().mark(function e() {
                var n, a, s, c;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (a in ((n = { help: !1 }), l))
                          (s = l[a]).length > 0 && (n[a] = s);
                        return (e.next = 4), m.Z.getFacSeg(n);
                      case 4:
                        return (c = e.sent), e.abrupt("return", c.data);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { refetchOnMount: !1, enabled: !1 }
          ),
          F = k.data,
          P = k.isLoading,
          G = k.refetch;
        return C || P
          ? (0, Z.jsx)(h.Z, {})
          : (0, Z.jsxs)("div", {
              children: [
                (0, Z.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, Z.jsx)(o.c, {
                    children: "Facility Segmentation",
                  }),
                }),
                (0, Z.jsx)("div", {
                  className: "mt-3",
                  children: (0, Z.jsx)("div", {
                    className: "card",
                    children: (0, Z.jsx)("div", {
                      className: "card-body py-3",
                      children: (0, Z.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), G();
                        },
                        children: [
                          (0, Z.jsx)("h4", {
                            children: (0, Z.jsx)(o.c, { children: "Filter" }),
                          }),
                          (0, Z.jsxs)("div", {
                            className: "row mt-5",
                            children: [
                              (0, Z.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, Z.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Facility name:",
                                      }),
                                    }),
                                    (0, Z.jsx)(d.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { name: n });
                                        });
                                      },
                                      value: l.name,
                                    }),
                                  ],
                                }),
                              }),
                              (0, Z.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, Z.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Code:",
                                      }),
                                    }),
                                    (0, Z.jsx)(d.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
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
                          (0, Z.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, Z.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, Z.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Level:",
                                      }),
                                    }),
                                    (0, Z.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { level: n });
                                        });
                                      },
                                      value: l.level,
                                      as: "select",
                                      children: [
                                        (0, Z.jsx)(i.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, Z.jsx)("option", {
                                              i18n: !0,
                                              value: "-1",
                                              selected: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === w || void 0 === w
                                          ? void 0
                                          : w.level.map(function (e) {
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
                                children: (0, Z.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Type:",
                                      }),
                                    }),
                                    (0, Z.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { type: n });
                                        });
                                      },
                                      value: l.type,
                                      as: "select",
                                      children: [
                                        (0, Z.jsx)("option", {
                                          value: "-1",
                                          children: "Please select",
                                        }),
                                        null === w || void 0 === w
                                          ? void 0
                                          : w.type.map(function (e) {
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
                          (0, Z.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, Z.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, Z.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Power source:",
                                      }),
                                    }),
                                    (0, Z.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { power: n });
                                        });
                                      },
                                      value: l.power,
                                      as: "select",
                                      children: [
                                        (0, Z.jsx)("option", {
                                          value: "-1",
                                          children: "Please select",
                                        }),
                                        null === w || void 0 === w
                                          ? void 0
                                          : w.power.map(function (e) {
                                              return (0,
                                              Z.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, Z.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, Z.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, Z.jsx)(o.c, {
                                          children: "Functioning status",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, Z.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        N(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { func: n });
                                        });
                                      },
                                      value: l.func,
                                      as: "select",
                                      children: [
                                        (0, Z.jsx)("option", {
                                          value: "-1",
                                          children: "Please select",
                                        }),
                                        (0, Z.jsx)("option", {
                                          value: !0,
                                          children: "Working",
                                        }),
                                        (0, Z.jsx)("option", {
                                          value: !1,
                                          children: "Not working",
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
                              className: "col-sm-12",
                              children: (0, Z.jsxs)(d.Z.Group, {
                                className: "row",
                                children: [
                                  (0, Z.jsxs)("label", {
                                    className: "label col-sm-2",
                                    children: [
                                      (0, Z.jsx)(o.c, {
                                        children: "General population",
                                      }),
                                      ":",
                                    ],
                                  }),
                                  (0, Z.jsxs)("label", {
                                    className: "label col-sm-1",
                                    children: [
                                      (0, Z.jsx)(o.c, { children: "From" }),
                                      ":",
                                    ],
                                  }),
                                  (0, Z.jsx)(d.Z.Control, {
                                    className: "form-control col-sm-4",
                                    type: "number",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      N(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { gfrom: n });
                                      });
                                    },
                                    value: l.gfrom,
                                  }),
                                  (0, Z.jsxs)("label", {
                                    className: "label col-sm-1",
                                    children: [
                                      (0, Z.jsx)(o.c, { children: "To" }),
                                      ":",
                                    ],
                                  }),
                                  (0, Z.jsx)(d.Z.Control, {
                                    className: "form-control col-sm-4",
                                    type: "number",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      N(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { gto: n });
                                      });
                                    },
                                    value: l.gto,
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, Z.jsx)("div", {
                            className: "row mt-1",
                            children: (0, Z.jsx)("div", {
                              className: "col-sm-12",
                              children: (0, Z.jsxs)(d.Z.Group, {
                                className: "row",
                                children: [
                                  (0, Z.jsx)("label", {
                                    className: "label col-sm-2",
                                    children: (0, Z.jsx)(o.c, {
                                      children: "Under-1 Population:",
                                    }),
                                  }),
                                  (0, Z.jsxs)("label", {
                                    className: "label col-sm-1",
                                    children: [
                                      (0, Z.jsx)(o.c, { children: "From" }),
                                      ":",
                                    ],
                                  }),
                                  (0, Z.jsx)(d.Z.Control, {
                                    className: "form-control col-sm-4",
                                    type: "number",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      N(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { underfrom: n });
                                      });
                                    },
                                    value: l.underfrom,
                                  }),
                                  (0, Z.jsx)("label", {
                                    className: "label col-sm-1",
                                    children: (0, Z.jsx)(o.c, {
                                      children: "To:",
                                    }),
                                  }),
                                  (0, Z.jsx)(d.Z.Control, {
                                    className: "form-control col-sm-4",
                                    type: "number",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      N(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { underto: n });
                                      });
                                    },
                                    value: l.underto,
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, Z.jsxs)("div", {
                            className: "row mt-4",
                            children: [
                              (0, Z.jsx)("div", {
                                className: "col-sm-1",
                                children: (0, Z.jsx)("button", {
                                  type: "submit",
                                  className: "btn btn-primary",
                                  children: (0, Z.jsx)(o.c, {
                                    children: "Reports",
                                  }),
                                }),
                              }),
                              (0, Z.jsx)("div", {
                                className: "col-sm-1",
                                children: (0, Z.jsx)("button", {
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
                (0, Z.jsx)("div", {
                  className: "mt-3",
                  children: (0, Z.jsx)("div", {
                    className: "card",
                    children: (0, Z.jsxs)("div", {
                      className: "card-body py-3",
                      children: [
                        (0, Z.jsx)("h4", {
                          children: (0, Z.jsxs)(o.c, {
                            children: [
                              "Report Number: Facility Segmentation (",
                              null === y || void 0 === y ? void 0 : y.country,
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
                                  var a = l[n];
                                  if (a.length > 0 && "-1" !== a)
                                    if ("power" === n) {
                                      var r = w.power.find(function (e) {
                                        return e.id === parseInt(a);
                                      });
                                      e += "Power source: ".concat(
                                        r.name,
                                        ", "
                                      );
                                    } else if ("func" === n)
                                      console.log(a),
                                        (e +=
                                          "true" === a
                                            ? "Function: Working, "
                                            : "Function: Not working, ");
                                    else if ("type" === n) {
                                      var s = w.type.find(function (e) {
                                        return e.id === parseInt(a);
                                      });
                                      e += "Type: ".concat(s.name, ", ");
                                    } else if ("level" === n) {
                                      var c = w.level.find(function (e) {
                                        return e.id === parseInt(a);
                                      });
                                      e += "Level: "
                                        .concat(c.id, " - ")
                                        .concat(c.name, " , ");
                                    } else
                                      e +=
                                        "gfrom" === n
                                          ? "General population from: ".concat(
                                              a,
                                              ", "
                                            )
                                          : "gto" === n
                                          ? "General population to: ".concat(
                                              a,
                                              ", "
                                            )
                                          : "underfrom" === n
                                          ? "Under 1 population from: ".concat(
                                              a,
                                              ", "
                                            )
                                          : "underto" === n
                                          ? "Under 1 population to: ".concat(
                                              a,
                                              ", "
                                            )
                                          : "".concat(n, "=").concat(a, " , ");
                                };
                              for (var a in l) n(a);
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
                          className: "mt-3 table-container",
                          children: (0, Z.jsxs)(p.Z, {
                            children: [
                              (0, Z.jsx)(v.Z, {
                                children: (0, Z.jsxs)(x.Z, {
                                  children: [
                                    (0, Z.jsx)(f.Z, {
                                      className: "col-sm-2",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Facility name",
                                      }),
                                    }),
                                    (0, Z.jsx)(f.Z, {
                                      className: "col-sm-2",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Facility parent",
                                      }),
                                    }),
                                    (0, Z.jsx)(f.Z, {
                                      className: "col-sm-1",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Level",
                                      }),
                                    }),
                                    (0, Z.jsx)(f.Z, {
                                      className: "col-sm-2",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Code",
                                      }),
                                    }),
                                    (0, Z.jsx)(f.Z, {
                                      className: "col-sm-1",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Type",
                                      }),
                                    }),
                                    (0, Z.jsx)(f.Z, {
                                      className: "col-sm-1",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Power",
                                      }),
                                    }),
                                    (0, Z.jsx)(f.Z, {
                                      className: "col-sm-1",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "owner",
                                      }),
                                    }),
                                    (0, Z.jsx)(f.Z, {
                                      className: "col-sm-2",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Functioning status",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, Z.jsx)(j.Z, {
                                children:
                                  null === F || void 0 === F
                                    ? void 0
                                    : F.map(function (e, n) {
                                        var l, a, r, s, c, t, o;
                                        return (0,
                                        Z.jsxs)(x.Z, { children: [(0, Z.jsx)(f.Z, { className: "col-sm-2", children: null !== (l = e.name) && void 0 !== l ? l : "-" }), (0, Z.jsx)(f.Z, { className: "col-sm-2", children: null !== (a = e.parent) && void 0 !== a ? a : "-" }), (0, Z.jsx)(f.Z, { className: "col-sm-1", children: null !== (r = e.level) && void 0 !== r ? r : "-" }), (0, Z.jsx)(f.Z, { className: "col-sm-2", children: null !== (s = e.code) && void 0 !== s ? s : "-" }), (0, Z.jsx)(f.Z, { className: "col-sm-1", children: null !== (c = e.type) && void 0 !== c ? c : "-" }), (0, Z.jsx)(f.Z, { className: "col-sm-1", children: null !== (t = e.power) && void 0 !== t ? t : "-" }), (0, Z.jsx)(f.Z, { className: "col-sm-1", children: null !== (o = e.owner) && void 0 !== o ? o : "-" }), (0, Z.jsx)(f.Z, { className: "col-sm-2", children: e.func ? "working" : "not working" })] }, n);
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
    51763: function (e, n, l) {
      var a = l(15671),
        r = l(43144),
        s = l(54318),
        c = l(39877),
        t = "http://127.0.0.1:8000/reports/",
        o = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return c.Z.get(t + "excel", {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return c.Z.get(t + "facseg", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return c.Z.get(t + "subfacpop", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return c.Z.get(t + "facmap", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return c.Z.get(t + "gapmap", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return c.Z.get(t + "item-gp", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return c.Z.get(t + "itemfac", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return c.Z.get(t + "gapitem", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return c.Z.get(t + "facprof", {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return c.Z.get(t + "coldprof", {
                    headers: { Authorization: (0, s.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return c.Z.get(t + "planingreport", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return c.Z.get(t + "gapcce", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return c.Z.get(t + "gapccePlan", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return c.Z.post(t + "gapccePlan", e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return c.Z.delete(t + "gapccePlan", {
                    headers: { Authorization: (0, s.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return c.Z.put(t + "gapccePlan", e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new o();
    },
    23821: function (e, n, l) {
      var a = l(39281),
        r = l(79836),
        s = l(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)(a.Z, {
            children: (0, s.jsx)(r.Z, { children: n }),
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
        s = l(22020),
        c = ["ns", "children"];
      function t(e) {
        var n = e.ns,
          l = e.children,
          t = (0, r.Z)(e, c),
          o = (0, s.$)(n, t),
          i = (0, a.Z)(o, 3),
          u = i[0],
          d = i[1],
          m = i[2];
        return l(u, { i18n: d, lng: d.language }, m);
      }
    },
    92854: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=1751.06b78a02.chunk.js.map
