"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [1751],
  {
    31751: function (e, l, n) {
      n.r(l);
      var a = n(1413),
        s = n(74165),
        c = n(15861),
        r = n(29439),
        t = n(72791),
        o = n(30606),
        i = n(91933),
        u = n(16149),
        d = n(51763),
        m = (n(92854), n(59909)),
        h = n(23821),
        x = n(56890),
        j = n(35855),
        v = n(53994),
        p = n(53382),
        Z = (n(93650), n(80184)),
        f = {
          name: "",
          code: "",
          level: "",
          type: "",
          power: "",
          func: "",
          gfrom: "",
          gto: "",
          underfrom: "",
          underto: "",
        };
      l.default = function () {
        var e = (0, t.useState)(f),
          l = (0, r.Z)(e, 2),
          n = l[0],
          g = l[1],
          N = JSON.parse(localStorage.getItem("country")) || {},
          b = (0, i.useQuery)(
            ["fac-seg-helper"],
            (0, c.Z)(
              (0, s.Z)().mark(function e() {
                var l;
                return (0, s.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), d.Z.getFacSeg({ help: !0 });
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
          y = b.data,
          w = b.isLoading,
          C = (0, i.useQuery)(
            ["fac-seg-report"],
            (0, c.Z)(
              (0, s.Z)().mark(function e() {
                var l, a, c, r;
                return (0, s.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (a in ((l = { help: !1 }), n))
                          (c = n[a]).length > 0 && (l[a] = c);
                        return (e.next = 4), d.Z.getFacSeg(l);
                      case 4:
                        return (r = e.sent), e.abrupt("return", r.data);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { refetchOnMount: !1, enabled: !1 }
          ),
          k = C.data,
          P = C.isLoading,
          F = C.refetch;
        return w || P
          ? (0, Z.jsx)(m.Z, {})
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
                          e.preventDefault(), F();
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
                                children: (0, Z.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Facility name:",
                                      }),
                                    }),
                                    (0, Z.jsx)(u.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { name: l });
                                        });
                                      },
                                      value: n.name,
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
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Code:",
                                      }),
                                    }),
                                    (0, Z.jsx)(u.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        g(function (e) {
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
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Level:",
                                      }),
                                    }),
                                    (0, Z.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { level: l });
                                        });
                                      },
                                      value: n.level,
                                      as: "select",
                                      children: [
                                        (0, Z.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === y || void 0 === y
                                          ? void 0
                                          : y.level.map(function (e) {
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
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Type:",
                                      }),
                                    }),
                                    (0, Z.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { type: l });
                                        });
                                      },
                                      value: n.type,
                                      as: "select",
                                      children: [
                                        (0, Z.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === y || void 0 === y
                                          ? void 0
                                          : y.type.map(function (e) {
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
                                children: (0, Z.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Power source:",
                                      }),
                                    }),
                                    (0, Z.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { power: l });
                                        });
                                      },
                                      value: n.power,
                                      as: "select",
                                      children: [
                                        (0, Z.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === y || void 0 === y
                                          ? void 0
                                          : y.power.map(function (e) {
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
                                children: (0, Z.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, Z.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Functioning Status:",
                                      }),
                                    }),
                                    (0, Z.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var l = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { func: l });
                                        });
                                      },
                                      value: n.func,
                                      as: "select",
                                      children: [
                                        (0, Z.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
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
                              children: (0, Z.jsxs)(u.Z.Group, {
                                className: "row",
                                children: [
                                  (0, Z.jsx)("label", {
                                    className: "label col-sm-2",
                                    children: (0, Z.jsx)(o.c, {
                                      children: "General population:",
                                    }),
                                  }),
                                  (0, Z.jsx)("label", {
                                    className: "label col-sm-1",
                                    children: (0, Z.jsx)(o.c, {
                                      children: "From:",
                                    }),
                                  }),
                                  (0, Z.jsx)(u.Z.Control, {
                                    className: "form-control col-sm-4",
                                    type: "number",
                                    onChange: function (e) {
                                      var l = e.target.value;
                                      g(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { gfrom: l });
                                      });
                                    },
                                    value: n.gfrom,
                                  }),
                                  (0, Z.jsx)("label", {
                                    className: "label col-sm-1",
                                    children: (0, Z.jsx)(o.c, {
                                      children: "To:",
                                    }),
                                  }),
                                  (0, Z.jsx)(u.Z.Control, {
                                    className: "form-control col-sm-4",
                                    type: "number",
                                    onChange: function (e) {
                                      var l = e.target.value;
                                      g(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { gto: l });
                                      });
                                    },
                                    value: n.gto,
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, Z.jsx)("div", {
                            className: "row mt-1",
                            children: (0, Z.jsx)("div", {
                              className: "col-sm-12",
                              children: (0, Z.jsxs)(u.Z.Group, {
                                className: "row",
                                children: [
                                  (0, Z.jsx)("label", {
                                    className: "label col-sm-2",
                                    children: (0, Z.jsx)(o.c, {
                                      children: "Under-1 Population:",
                                    }),
                                  }),
                                  (0, Z.jsx)("label", {
                                    className: "label col-sm-1",
                                    children: (0, Z.jsx)(o.c, {
                                      children: "From:",
                                    }),
                                  }),
                                  (0, Z.jsx)(u.Z.Control, {
                                    className: "form-control col-sm-4",
                                    type: "number",
                                    onChange: function (e) {
                                      var l = e.target.value;
                                      g(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { underfrom: l });
                                      });
                                    },
                                    value: n.underfrom,
                                  }),
                                  (0, Z.jsx)("label", {
                                    className: "label col-sm-1",
                                    children: (0, Z.jsx)(o.c, {
                                      children: "To:",
                                    }),
                                  }),
                                  (0, Z.jsx)(u.Z.Control, {
                                    className: "form-control col-sm-4",
                                    type: "number",
                                    onChange: function (e) {
                                      var l = e.target.value;
                                      g(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { underto: l });
                                      });
                                    },
                                    value: n.underto,
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
                                  children: "Reports",
                                }),
                              }),
                              (0, Z.jsx)("div", {
                                className: "col-sm-1",
                                children: (0, Z.jsx)("button", {
                                  type: "button",
                                  className: "btn btn-secondary",
                                  onClick: function () {
                                    return g(f);
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
                              null === N || void 0 === N ? void 0 : N.country,
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
                              var e = "";
                              for (var l in n) {
                                var a = n[l];
                                a.length > 0 &&
                                  (e +=
                                    "power" === l
                                      ? ""
                                          .concat(l, "=")
                                          .concat(y.power[a].name, "&")
                                      : "".concat(l, "=").concat(a, "&"));
                              }
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
                          children: (0, Z.jsxs)(h.Z, {
                            children: [
                              (0, Z.jsx)(x.Z, {
                                children: (0, Z.jsxs)(j.Z, {
                                  children: [
                                    (0, Z.jsx)(v.Z, {
                                      className: "col-sm-2",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Facility name",
                                      }),
                                    }),
                                    (0, Z.jsx)(v.Z, {
                                      className: "col-sm-2",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Facility parent",
                                      }),
                                    }),
                                    (0, Z.jsx)(v.Z, {
                                      className: "col-sm-1",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Level",
                                      }),
                                    }),
                                    (0, Z.jsx)(v.Z, {
                                      className: "col-sm-2",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Code",
                                      }),
                                    }),
                                    (0, Z.jsx)(v.Z, {
                                      className: "col-sm-1",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Type",
                                      }),
                                    }),
                                    (0, Z.jsx)(v.Z, {
                                      className: "col-sm-1",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Power",
                                      }),
                                    }),
                                    (0, Z.jsx)(v.Z, {
                                      className: "col-sm-1",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "owner",
                                      }),
                                    }),
                                    (0, Z.jsx)(v.Z, {
                                      className: "col-sm-2",
                                      children: (0, Z.jsx)(o.c, {
                                        children: "Functioning status",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, Z.jsx)(p.Z, {
                                children:
                                  null === k || void 0 === k
                                    ? void 0
                                    : k.map(function (e, l) {
                                        var n, a, s, c, r, t, o;
                                        return (0,
                                        Z.jsxs)(j.Z, { children: [(0, Z.jsx)(v.Z, { className: "col-sm-2", children: null !== (n = e.name) && void 0 !== n ? n : "-" }), (0, Z.jsx)(v.Z, { className: "col-sm-2", children: null !== (a = e.parent) && void 0 !== a ? a : "-" }), (0, Z.jsx)(v.Z, { className: "col-sm-1", children: null !== (s = e.level) && void 0 !== s ? s : "-" }), (0, Z.jsx)(v.Z, { className: "col-sm-2", children: null !== (c = e.code) && void 0 !== c ? c : "-" }), (0, Z.jsx)(v.Z, { className: "col-sm-1", children: null !== (r = e.type) && void 0 !== r ? r : "-" }), (0, Z.jsx)(v.Z, { className: "col-sm-1", children: null !== (t = e.power) && void 0 !== t ? t : "-" }), (0, Z.jsx)(v.Z, { className: "col-sm-1", children: null !== (o = e.owner) && void 0 !== o ? o : "-" }), (0, Z.jsx)(v.Z, { className: "col-sm-2", children: e.func ? "working" : "not working" })] }, l);
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
    51763: function (e, l, n) {
      var a = n(15671),
        s = n(43144),
        c = n(54318),
        r = n(39877),
        t = "http://127.0.0.1:8000/reports/",
        o = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, s.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return r.Z.get(t + "excel", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return r.Z.get(t + "facseg", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return r.Z.get(t + "subfacpop", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return r.Z.get(t + "facmap", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return r.Z.get(t + "gapmap", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return r.Z.get(t + "item-gp", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return r.Z.get(t + "itemfac", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return r.Z.get(t + "gapitem", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return r.Z.get(t + "facprof", {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return r.Z.get(t + "coldprof", {
                    headers: { Authorization: (0, c.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return r.Z.get(t + "planingreport", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return r.Z.get(t + "gapcce", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return r.Z.get(t + "gapccePlan", {
                    headers: { Authorization: (0, c.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return r.Z.post(t + "gapccePlan", e, {
                    headers: { Authorization: (0, c.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return r.Z.delete(t + "gapccePlan", {
                    headers: { Authorization: (0, c.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return r.Z.put(t + "gapccePlan", e, {
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
    23821: function (e, l, n) {
      var a = n(39281),
        s = n(79836),
        c = n(80184);
      l.Z = function (e) {
        var l = e.children;
        return (0, c.jsx)(c.Fragment, {
          children: (0, c.jsx)(a.Z, {
            children: (0, c.jsx)(s.Z, { children: l }),
          }),
        });
      };
    },
    92854: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=1751.407ca606.chunk.js.map
