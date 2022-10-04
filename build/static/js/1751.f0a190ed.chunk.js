"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [1751],
  {
    31751: function (e, n, l) {
      l.r(n);
      var a = l(1413),
        s = l(74165),
        r = l(15861),
        c = l(29439),
        o = l(72791),
        t = l(30606),
        i = l(12902),
        u = l(91933),
        d = l(16149),
        m = l(51763),
        h = (l(92854), l(59909)),
        p = l(23821),
        x = l(56890),
        v = l(35855),
        j = l(53994),
        f = l(53382),
        Z = (l(93650), l(65218)),
        g = l(80184),
        N = {
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
        var e = (0, o.useState)(N),
          n = (0, c.Z)(e, 2),
          l = n[0],
          y = n[1],
          b = JSON.parse(localStorage.getItem("country")) || {},
          w = (0, u.useQuery)(
            ["fac-seg-helper"],
            (0, r.Z)(
              (0, s.Z)().mark(function e() {
                var n;
                return (0, s.Z)().wrap(function (e) {
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
          C = w.data,
          k = w.isLoading,
          F = (0, u.useQuery)(
            ["fac-seg-report"],
            (0, r.Z)(
              (0, s.Z)().mark(function e() {
                var n, a, r, c;
                return (0, s.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (a in ((n = { help: !1 }), l))
                          (r = l[a]).length > 0 && (n[a] = r);
                        return (e.next = 4), m.Z.getFacSeg(n);
                      case 4:
                        return (
                          0 === (c = e.sent).data.length &&
                            Z.Am.error(
                              (0, g.jsx)(t.c, { children: "No data found" })
                            ),
                          e.abrupt("return", c.data)
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
          P = F.data,
          G = F.isLoading,
          A = F.refetch;
        return k || G
          ? (0, g.jsx)(h.Z, {})
          : (0, g.jsxs)("div", {
              children: [
                (0, g.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, g.jsx)(t.c, {
                    children: "Facility Segmentation",
                  }),
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
                            children: (0, g.jsx)(t.c, { children: "Filter" }),
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
                                      className: "label col-sm-4",
                                      children: [
                                        (0, g.jsx)(t.c, {
                                          children: "Facility Name",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, g.jsx)(d.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        y(function (e) {
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
                                      className: "label col-sm-4",
                                      children: [
                                        (0, g.jsx)(t.c, { children: "Code" }),
                                        ":",
                                      ],
                                    }),
                                    (0, g.jsx)(d.Z.Control, {
                                      className: "form-control col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        y(function (e) {
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
                                      className: "label col-sm-4",
                                      children: [
                                        (0, g.jsx)(t.c, { children: "Level" }),
                                        ":",
                                      ],
                                    }),
                                    (0, g.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        y(function (e) {
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
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === C || void 0 === C
                                          ? void 0
                                          : C.level.map(function (e) {
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
                                      className: "label col-sm-4",
                                      children: [
                                        (0, g.jsx)(t.c, { children: "Type" }),
                                        ":",
                                      ],
                                    }),
                                    (0, g.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        y(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { type: n });
                                        });
                                      },
                                      value: l.type,
                                      as: "select",
                                      children: [
                                        (0, g.jsx)("option", {
                                          value: "-1",
                                          children: "Please select",
                                        }),
                                        null === C || void 0 === C
                                          ? void 0
                                          : C.type.map(function (e) {
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
                          (0, g.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, g.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, g.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, g.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, g.jsx)(t.c, {
                                          children: "Power source",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, g.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        y(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { power: n });
                                        });
                                      },
                                      value: l.power,
                                      as: "select",
                                      children: [
                                        (0, g.jsx)("option", {
                                          value: "-1",
                                          children: "Please select",
                                        }),
                                        null === C || void 0 === C
                                          ? void 0
                                          : C.power.map(function (e) {
                                              return (0,
                                              g.jsx)("option", { value: e.id, children: e.name }, e.id);
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
                                      className: "label col-sm-4",
                                      children: [
                                        (0, g.jsx)(t.c, {
                                          children: "Functioning status",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, g.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        y(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { func: n });
                                        });
                                      },
                                      value: l.func,
                                      as: "select",
                                      children: [
                                        (0, g.jsx)("option", {
                                          value: "-1",
                                          children: "Please select",
                                        }),
                                        (0, g.jsx)("option", {
                                          value: !0,
                                          children: "Working",
                                        }),
                                        (0, g.jsx)("option", {
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
                          (0, g.jsx)("div", {
                            className: "row mt-1",
                            children: (0, g.jsx)("div", {
                              className: "col-sm-12",
                              children: (0, g.jsxs)(d.Z.Group, {
                                className: "row",
                                children: [
                                  (0, g.jsxs)("label", {
                                    className: "label col-sm-2",
                                    children: [
                                      (0, g.jsx)(t.c, {
                                        children: "General population",
                                      }),
                                      ":",
                                    ],
                                  }),
                                  (0, g.jsxs)("label", {
                                    className: "label col-sm-1",
                                    children: [
                                      (0, g.jsx)(t.c, { children: "from" }),
                                      ":",
                                    ],
                                  }),
                                  (0, g.jsx)(d.Z.Control, {
                                    className: "form-control col-sm-4",
                                    type: "number",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      y(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { gfrom: n });
                                      });
                                    },
                                    value: l.gfrom,
                                  }),
                                  (0, g.jsxs)("label", {
                                    className: "label col-sm-1",
                                    children: [
                                      (0, g.jsx)(t.c, { children: "to" }),
                                      ":",
                                    ],
                                  }),
                                  (0, g.jsx)(d.Z.Control, {
                                    className: "form-control col-sm-4",
                                    type: "number",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      y(function (e) {
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
                          (0, g.jsx)("div", {
                            className: "row mt-1",
                            children: (0, g.jsx)("div", {
                              className: "col-sm-12",
                              children: (0, g.jsxs)(d.Z.Group, {
                                className: "row",
                                children: [
                                  (0, g.jsxs)("label", {
                                    className: "label col-sm-2",
                                    children: [
                                      (0, g.jsx)(t.c, {
                                        children: "Under-1 populations",
                                      }),
                                      ":",
                                    ],
                                  }),
                                  (0, g.jsxs)("label", {
                                    className: "label col-sm-1",
                                    children: [
                                      (0, g.jsx)(t.c, { children: "from" }),
                                      ":",
                                    ],
                                  }),
                                  (0, g.jsx)(d.Z.Control, {
                                    className: "form-control col-sm-4",
                                    type: "number",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      y(function (e) {
                                        return (0,
                                        a.Z)((0, a.Z)({}, e), {}, { underfrom: n });
                                      });
                                    },
                                    value: l.underfrom,
                                  }),
                                  (0, g.jsxs)("label", {
                                    className: "label col-sm-1",
                                    children: [
                                      (0, g.jsx)(t.c, { children: "to" }),
                                      ":",
                                    ],
                                  }),
                                  (0, g.jsx)(d.Z.Control, {
                                    className: "form-control col-sm-4",
                                    type: "number",
                                    onChange: function (e) {
                                      var n = e.target.value;
                                      y(function (e) {
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
                          (0, g.jsxs)("div", {
                            className: "row mt-4",
                            children: [
                              (0, g.jsx)("div", {
                                className: "col-sm-2",
                                children: (0, g.jsx)("button", {
                                  type: "submit",
                                  className: "btn fs-5 btn-primary",
                                  children: (0, g.jsx)(t.c, {
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
                                    y(N), window.location.reload();
                                  },
                                  children: (0, g.jsx)(t.c, {
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
                          children: (0, g.jsxs)(t.c, {
                            children: [
                              "Report Number: Facility Segmentation (",
                              null === b || void 0 === b ? void 0 : b.country,
                              ")",
                            ],
                          }),
                        }),
                        (0, g.jsxs)("h6", {
                          children: [
                            (0, g.jsx)(t.c, { children: "Filters" }),
                            " : ",
                            "",
                            " ",
                            (function () {
                              var e = "",
                                n = function (n) {
                                  var a = l[n];
                                  if (a.length > 0 && "-1" !== a)
                                    if ("power" === n) {
                                      var s = C.power.find(function (e) {
                                        return e.id === parseInt(a);
                                      });
                                      e += "Power source: ".concat(
                                        s.name,
                                        ", "
                                      );
                                    } else if ("func" === n)
                                      console.log(a),
                                        (e +=
                                          "true" === a
                                            ? "Function: Working, "
                                            : "Function: Not working, ");
                                    else if ("type" === n) {
                                      var r = C.type.find(function (e) {
                                        return e.id === parseInt(a);
                                      });
                                      e += "Type: ".concat(r.name, ", ");
                                    } else if ("level" === n) {
                                      var c = C.level.find(function (e) {
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
                        (0, g.jsxs)("h6", {
                          children: [
                            (0, g.jsx)(t.c, { children: "Date" }),
                            ": ",
                            new Date().toISOString().split("T")[0],
                          ],
                        }),
                        (0, g.jsx)("div", {
                          className: "mt-3 table-container",
                          children: (0, g.jsxs)(p.Z, {
                            children: [
                              (0, g.jsx)(x.Z, {
                                children: (0, g.jsxs)(v.Z, {
                                  children: [
                                    (0, g.jsx)(j.Z, {
                                      className: "col-sm-2",
                                      children: (0, g.jsx)(t.c, {
                                        children: "Facility Name",
                                      }),
                                    }),
                                    (0, g.jsx)(j.Z, {
                                      className: "col-sm-2",
                                      children: (0, g.jsx)(t.c, {
                                        children: "Facility parent",
                                      }),
                                    }),
                                    (0, g.jsx)(j.Z, {
                                      className: "col-sm-1",
                                      children: (0, g.jsx)(t.c, {
                                        children: "Level",
                                      }),
                                    }),
                                    (0, g.jsx)(j.Z, {
                                      className: "col-sm-2",
                                      children: (0, g.jsx)(t.c, {
                                        children: "Code",
                                      }),
                                    }),
                                    (0, g.jsx)(j.Z, {
                                      className: "col-sm-1",
                                      children: (0, g.jsx)(t.c, {
                                        children: "Type",
                                      }),
                                    }),
                                    (0, g.jsx)(j.Z, {
                                      className: "col-sm-1",
                                      children: (0, g.jsx)(t.c, {
                                        children: "Power",
                                      }),
                                    }),
                                    (0, g.jsx)(j.Z, {
                                      className: "col-sm-1",
                                      children: (0, g.jsx)(t.c, {
                                        children: "Owner",
                                      }),
                                    }),
                                    (0, g.jsx)(j.Z, {
                                      className: "col-sm-2",
                                      children: (0, g.jsx)(t.c, {
                                        children: "Functioning status",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, g.jsx)(f.Z, {
                                children:
                                  null === P || void 0 === P
                                    ? void 0
                                    : P.map(function (e, n) {
                                        var l, a, s, r, c, o, t;
                                        return (0,
                                        g.jsxs)(v.Z, { children: [(0, g.jsx)(j.Z, { className: "col-sm-2", children: null !== (l = e.name) && void 0 !== l ? l : "-" }), (0, g.jsx)(j.Z, { className: "col-sm-2", children: null !== (a = e.parent) && void 0 !== a ? a : "-" }), (0, g.jsx)(j.Z, { className: "col-sm-1", children: null !== (s = e.level) && void 0 !== s ? s : "-" }), (0, g.jsx)(j.Z, { className: "col-sm-2", children: null !== (r = e.code) && void 0 !== r ? r : "-" }), (0, g.jsx)(j.Z, { className: "col-sm-1", children: null !== (c = e.type) && void 0 !== c ? c : "-" }), (0, g.jsx)(j.Z, { className: "col-sm-1", children: null !== (o = e.power) && void 0 !== o ? o : "-" }), (0, g.jsx)(j.Z, { className: "col-sm-1", children: null !== (t = e.owner) && void 0 !== t ? t : "-" }), (0, g.jsx)(j.Z, { className: "col-sm-2", children: e.func ? "working" : "not working" })] }, n);
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
        s = l(43144),
        r = l(54318),
        c = l(39877),
        o = "http://46.105.58.235:8000/reports/",
        t = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, s.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return c.Z.get(o + "excel", {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return c.Z.get(o + "facseg", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return c.Z.get(o + "subfacpop", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return c.Z.get(o + "facmap", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return c.Z.get(o + "gapmap", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return c.Z.get(o + "item-gp", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return c.Z.get(o + "itemfac", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return c.Z.get(o + "gapitem", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return c.Z.get(o + "facprof", {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return c.Z.get(o + "coldprof", {
                    headers: { Authorization: (0, r.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return c.Z.get(o + "planingreport", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return c.Z.get(o + "gapcce", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return c.Z.get(o + "gapccePlan", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return c.Z.post(o + "gapccePlan", e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return c.Z.delete(o + "gapccePlan", {
                    headers: { Authorization: (0, r.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return c.Z.put(o + "gapccePlan", e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "savegaps",
                value: function (e, n) {
                  return c.Z.post(o + "gapsave?condition=" + e, n, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new t();
    },
    23821: function (e, n, l) {
      var a = l(39281),
        s = l(79836),
        r = l(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(a.Z, {
            children: (0, r.jsx)(s.Z, { children: n }),
          }),
        });
      };
    },
    92854: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=1751.f0a190ed.chunk.js.map