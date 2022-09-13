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
        i = l(91933),
        u = l(16149),
        d = l(51763),
        m = (l(92854), l(59909)),
        h = l(23821),
        p = l(56890),
        v = l(35855),
        x = l(53994),
        j = l(53382),
        f = (l(93650), l(80184)),
        Z = {
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
      n.default = function () {
        var e = (0, t.useState)(Z),
          n = (0, c.Z)(e, 2),
          l = n[0],
          g = n[1],
          N = JSON.parse(localStorage.getItem("country")) || {},
          b = (0, i.useQuery)(
            ["fac-seg-helper"],
            (0, s.Z)(
              (0, r.Z)().mark(function e() {
                var n;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), d.Z.getFacSeg({ help: !0 });
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
          y = b.data,
          w = b.isLoading,
          C = (0, i.useQuery)(
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
                        return (e.next = 4), d.Z.getFacSeg(n);
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
          k = C.data,
          F = C.isLoading,
          P = C.refetch;
        return w || F
          ? (0, f.jsx)(m.Z, {})
          : (0, f.jsxs)("div", {
              children: [
                (0, f.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, f.jsx)(o.c, {
                    children: "Facility Segmentation",
                  }),
                }),
                (0, f.jsx)("div", {
                  className: "mt-3",
                  children: (0, f.jsx)("div", {
                    className: "card",
                    children: (0, f.jsx)("div", {
                      className: "card-body py-3",
                      children: (0, f.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), P();
                        },
                        children: [
                          (0, f.jsx)("h4", {
                            children: (0, f.jsx)(o.c, { children: "Filter" }),
                          }),
                          (0, f.jsxs)("div", {
                            className: "row mt-5",
                            children: [
                              (0, f.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, f.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, f.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, f.jsx)(o.c, {
                                        children: "Facility name:",
                                      }),
                                    }),
                                    (0, f.jsx)(u.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { name: n });
                                        });
                                      },
                                      value: l.name,
                                    }),
                                  ],
                                }),
                              }),
                              (0, f.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, f.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, f.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, f.jsx)(o.c, {
                                        children: "Code:",
                                      }),
                                    }),
                                    (0, f.jsx)(u.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        g(function (e) {
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
                          (0, f.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, f.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, f.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, f.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, f.jsx)(o.c, {
                                        children: "Level:",
                                      }),
                                    }),
                                    (0, f.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { level: n });
                                        });
                                      },
                                      value: l.level,
                                      as: "select",
                                      children: [
                                        (0, f.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === y || void 0 === y
                                          ? void 0
                                          : y.level.map(function (e) {
                                              return (0,
                                              f.jsx)("option", { value: e.id, children: "".concat(e.id, " - ").concat(e.name) }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, f.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, f.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, f.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, f.jsx)(o.c, {
                                        children: "Type:",
                                      }),
                                    }),
                                    (0, f.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { type: n });
                                        });
                                      },
                                      value: l.type,
                                      as: "select",
                                      children: [
                                        (0, f.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === y || void 0 === y
                                          ? void 0
                                          : y.type.map(function (e) {
                                              return (0,
                                              f.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, f.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, f.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, f.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, f.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, f.jsx)(o.c, {
                                        children: "Power source:",
                                      }),
                                    }),
                                    (0, f.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { power: n });
                                        });
                                      },
                                      value: l.power,
                                      as: "select",
                                      children: [
                                        (0, f.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === y || void 0 === y
                                          ? void 0
                                          : y.power.map(function (e) {
                                              return (0,
                                              f.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, f.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, f.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, f.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, f.jsx)(o.c, {
                                        children: "Functioning Status:",
                                      }),
                                    }),
                                    (0, f.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { func: n });
                                        });
                                      },
                                      value: l.func,
                                      as: "select",
                                      children: [
                                        (0, f.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        (0, f.jsx)("option", {
                                          value: !0,
                                          children: "Working",
                                        }),
                                        (0, f.jsx)("option", {
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
                          (0, f.jsx)("div", {
                            className: "row mt-1",
                            children: (0, f.jsx)("div", {
                              className: "col-sm-12",
                              children: (0, f.jsxs)(u.Z.Group, {
                                className: "row",
                                children: [
                                  (0, f.jsx)("label", {
                                    className: "label col-sm-2",
                                    children: (0, f.jsx)(o.c, {
                                      children: "General population:",
                                    }),
                                  }),
                                  (0, f.jsx)("label", {
                                    className: "label col-sm-1",
                                    children: (0, f.jsx)(o.c, {
                                      children: "From:",
                                    }),
                                  }),
                                  (0, f.jsx)(u.Z.Control, {
                                    className: "form-control col-sm-4",
                                    type: "number",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      g(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { gfrom: n });
                                      });
                                    },
                                    value: l.gfrom,
                                  }),
                                  (0, f.jsx)("label", {
                                    className: "label col-sm-1",
                                    children: (0, f.jsx)(o.c, {
                                      children: "To:",
                                    }),
                                  }),
                                  (0, f.jsx)(u.Z.Control, {
                                    className: "form-control col-sm-4",
                                    type: "number",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      g(function (e) {
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
                          (0, f.jsx)("div", {
                            className: "row mt-1",
                            children: (0, f.jsx)("div", {
                              className: "col-sm-12",
                              children: (0, f.jsxs)(u.Z.Group, {
                                className: "row",
                                children: [
                                  (0, f.jsx)("label", {
                                    className: "label col-sm-2",
                                    children: (0, f.jsx)(o.c, {
                                      children: "Under-1 Population:",
                                    }),
                                  }),
                                  (0, f.jsx)("label", {
                                    className: "label col-sm-1",
                                    children: (0, f.jsx)(o.c, {
                                      children: "From:",
                                    }),
                                  }),
                                  (0, f.jsx)(u.Z.Control, {
                                    className: "form-control col-sm-4",
                                    type: "number",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      g(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { underfrom: n });
                                      });
                                    },
                                    value: l.underfrom,
                                  }),
                                  (0, f.jsx)("label", {
                                    className: "label col-sm-1",
                                    children: (0, f.jsx)(o.c, {
                                      children: "To:",
                                    }),
                                  }),
                                  (0, f.jsx)(u.Z.Control, {
                                    className: "form-control col-sm-4",
                                    type: "number",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      g(function (e) {
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
                          (0, f.jsxs)("div", {
                            className: "row mt-4",
                            children: [
                              (0, f.jsx)("div", {
                                className: "col-sm-1",
                                children: (0, f.jsx)("button", {
                                  type: "submit",
                                  className: "btn btn-primary",
                                  children: "Reports",
                                }),
                              }),
                              (0, f.jsx)("div", {
                                className: "col-sm-1",
                                children: (0, f.jsx)("button", {
                                  type: "button",
                                  className: "btn btn-secondary",
                                  onClick: function () {
                                    return g(Z);
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
                (0, f.jsx)("div", {
                  className: "mt-3",
                  children: (0, f.jsx)("div", {
                    className: "card",
                    children: (0, f.jsxs)("div", {
                      className: "card-body py-3",
                      children: [
                        (0, f.jsx)("h4", {
                          children: (0, f.jsxs)(o.c, {
                            children: [
                              "Report Number: Facility Segmentation (",
                              null === N || void 0 === N ? void 0 : N.country,
                              ")",
                            ],
                          }),
                        }),
                        (0, f.jsxs)("h6", {
                          children: [
                            "Filters : ",
                            "",
                            " ",
                            (function () {
                              var e = "",
                                n = function (n) {
                                  var a = l[n];
                                  if (a.length > 0)
                                    if ("power" === n) {
                                      var r = y.power.find(function (e) {
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
                                      var s = y.type.find(function (e) {
                                        return e.id === parseInt(a);
                                      });
                                      e += "Type: ".concat(s.name, ", ");
                                    } else if ("level" === n) {
                                      var c = y.level.find(function (e) {
                                        return e.id === parseInt(a);
                                      });
                                      e += "Level: ".concat(c.name, ", ");
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
                                          : "".concat(n, "=").concat(a, "&");
                                };
                              for (var a in l) n(a);
                              return e;
                            })(),
                          ],
                        }),
                        (0, f.jsxs)("h6", {
                          children: [
                            "Date: ",
                            new Date().toISOString().split("T")[0],
                          ],
                        }),
                        (0, f.jsx)("div", {
                          className: "mt-3 table-container",
                          children: (0, f.jsxs)(h.Z, {
                            children: [
                              (0, f.jsx)(p.Z, {
                                children: (0, f.jsxs)(v.Z, {
                                  children: [
                                    (0, f.jsx)(x.Z, {
                                      className: "col-sm-2",
                                      children: (0, f.jsx)(o.c, {
                                        children: "Facility name",
                                      }),
                                    }),
                                    (0, f.jsx)(x.Z, {
                                      className: "col-sm-2",
                                      children: (0, f.jsx)(o.c, {
                                        children: "Facility parent",
                                      }),
                                    }),
                                    (0, f.jsx)(x.Z, {
                                      className: "col-sm-1",
                                      children: (0, f.jsx)(o.c, {
                                        children: "Level",
                                      }),
                                    }),
                                    (0, f.jsx)(x.Z, {
                                      className: "col-sm-2",
                                      children: (0, f.jsx)(o.c, {
                                        children: "Code",
                                      }),
                                    }),
                                    (0, f.jsx)(x.Z, {
                                      className: "col-sm-1",
                                      children: (0, f.jsx)(o.c, {
                                        children: "Type",
                                      }),
                                    }),
                                    (0, f.jsx)(x.Z, {
                                      className: "col-sm-1",
                                      children: (0, f.jsx)(o.c, {
                                        children: "Power",
                                      }),
                                    }),
                                    (0, f.jsx)(x.Z, {
                                      className: "col-sm-1",
                                      children: (0, f.jsx)(o.c, {
                                        children: "owner",
                                      }),
                                    }),
                                    (0, f.jsx)(x.Z, {
                                      className: "col-sm-2",
                                      children: (0, f.jsx)(o.c, {
                                        children: "Functioning status",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, f.jsx)(j.Z, {
                                children:
                                  null === k || void 0 === k
                                    ? void 0
                                    : k.map(function (e, n) {
                                        var l, a, r, s, c, t, o;
                                        return (0,
                                        f.jsxs)(v.Z, { children: [(0, f.jsx)(x.Z, { className: "col-sm-2", children: null !== (l = e.name) && void 0 !== l ? l : "-" }), (0, f.jsx)(x.Z, { className: "col-sm-2", children: null !== (a = e.parent) && void 0 !== a ? a : "-" }), (0, f.jsx)(x.Z, { className: "col-sm-1", children: null !== (r = e.level) && void 0 !== r ? r : "-" }), (0, f.jsx)(x.Z, { className: "col-sm-2", children: null !== (s = e.code) && void 0 !== s ? s : "-" }), (0, f.jsx)(x.Z, { className: "col-sm-1", children: null !== (c = e.type) && void 0 !== c ? c : "-" }), (0, f.jsx)(x.Z, { className: "col-sm-1", children: null !== (t = e.power) && void 0 !== t ? t : "-" }), (0, f.jsx)(x.Z, { className: "col-sm-1", children: null !== (o = e.owner) && void 0 !== o ? o : "-" }), (0, f.jsx)(x.Z, { className: "col-sm-2", children: e.func ? "working" : "not working" })] }, n);
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
        t = "https://inventory.runflare.run/reports/",
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
    92854: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=1751.1230489f.chunk.js.map
