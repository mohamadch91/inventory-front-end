"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [3723, 2480],
  {
    3723: function (e, n, t) {
      t.r(n);
      var a = t(1413),
        l = t(74165),
        o = t(15861),
        r = t(29439),
        s = t(72791),
        i = t(30606),
        c = t(91933),
        u = t(16149),
        d = t(51763),
        p = (t(92854), t(59909)),
        h = t(2480),
        m = t(80184),
        v = { level: "-1", type: "-1", power: "-1", func: "-1" };
      n.default = function () {
        var e = (0, s.useState)(v),
          n = (0, r.Z)(e, 2),
          t = n[0],
          g = n[1],
          f = JSON.parse(localStorage.getItem("country")) || {},
          x = (0, c.useQuery)(
            ["fac-map-based-helper"],
            (0, o.Z)(
              (0, l.Z)().mark(function e() {
                var n;
                return (0, l.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), d.Z.getFacMap({ help: !0 });
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
          Z = x.data,
          j = x.isLoading,
          y = (0, c.useQuery)(
            ["fac-map-report"],
            (0, o.Z)(
              (0, l.Z)().mark(function e() {
                var n, a, o, r;
                return (0, l.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (a in ((n = { help: !1 }), t))
                          (o = t[a]).length > 0 && "-1" !== o && (n[a] = o);
                        return (e.next = 4), d.Z.getFacMap(n);
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
          N = y.data,
          b = y.isLoading,
          S = y.refetch;
        return j || b
          ? (0, m.jsx)(p.Z, {})
          : (0, m.jsxs)("div", {
              children: [
                (0, m.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, m.jsx)(i.c, {
                    children: "Facility Map-Based Report",
                  }),
                }),
                (0, m.jsx)("div", {
                  className: "mt-3",
                  children: (0, m.jsx)("div", {
                    className: "card",
                    children: (0, m.jsx)("div", {
                      className: "card-body py-3",
                      children: (0, m.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), S();
                        },
                        children: [
                          (0, m.jsx)("h4", {
                            children: (0, m.jsx)(i.c, { children: "Filter" }),
                          }),
                          (0, m.jsxs)("div", {
                            className: "row mt-5",
                            children: [
                              (0, m.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, m.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, m.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, m.jsx)(i.c, {
                                        children: "Level:",
                                      }),
                                    }),
                                    (0, m.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { level: n });
                                        });
                                      },
                                      value: t.level,
                                      as: "select",
                                      children: [
                                        (0, m.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === Z || void 0 === Z
                                          ? void 0
                                          : Z.level.map(function (e) {
                                              return (0,
                                              m.jsx)("option", { value: e.id, children: "".concat(e.id, " - ").concat(e.name) }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, m.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, m.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, m.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, m.jsx)(i.c, {
                                        children: "Type:",
                                      }),
                                    }),
                                    (0, m.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { type: n });
                                        });
                                      },
                                      value: t.type,
                                      as: "select",
                                      children: [
                                        (0, m.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === Z || void 0 === Z
                                          ? void 0
                                          : Z.type.map(function (e) {
                                              return (0,
                                              m.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, m.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, m.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, m.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, m.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, m.jsx)(i.c, {
                                        children: "Power source:",
                                      }),
                                    }),
                                    (0, m.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { power: n });
                                        });
                                      },
                                      value: t.power,
                                      as: "select",
                                      children: [
                                        (0, m.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        null === Z || void 0 === Z
                                          ? void 0
                                          : Z.power.map(function (e) {
                                              return (0,
                                              m.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, m.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, m.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, m.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, m.jsx)(i.c, {
                                        children: "Functioning Status:",
                                      }),
                                    }),
                                    (0, m.jsxs)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        g(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { func: n });
                                        });
                                      },
                                      value: t.func,
                                      as: "select",
                                      children: [
                                        (0, m.jsx)("option", {
                                          value: "-1",
                                          selected: !0,
                                          disabled: !0,
                                          children: "Please select",
                                        }),
                                        (0, m.jsx)("option", {
                                          value: !0,
                                          children: "Working",
                                        }),
                                        (0, m.jsx)("option", {
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
                          (0, m.jsxs)("div", {
                            className: "row mt-4",
                            children: [
                              (0, m.jsx)("div", {
                                className: "col-sm-1",
                                children: (0, m.jsx)("button", {
                                  type: "submit",
                                  className: "btn btn-primary",
                                  children: "Reports",
                                }),
                              }),
                              (0, m.jsx)("div", {
                                className: "col-sm-1",
                                children: (0, m.jsx)("button", {
                                  type: "button",
                                  className: "btn btn-secondary",
                                  onClick: function () {
                                    return g(v);
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
                (0, m.jsxs)("div", {
                  className: "p-3",
                  children: [
                    (0, m.jsx)("h4", {
                      children: (0, m.jsxs)(i.c, {
                        children: [
                          "Report Number: Facility Map-Based (",
                          null === f || void 0 === f ? void 0 : f.country,
                          ")",
                        ],
                      }),
                    }),
                    (0, m.jsxs)("h6", {
                      children: [
                        "Date: ",
                        new Date().toISOString().split("T")[0],
                      ],
                    }),
                    (0, m.jsx)(h.default, { locations: N }),
                  ],
                }),
              ],
            });
      };
    },
    51763: function (e, n, t) {
      var a = t(15671),
        l = t(43144),
        o = t(54318),
        r = t(39877),
        s = "https://inventory.runflare.run/reports/",
        i = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, l.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return r.Z.get(s + "excel", {
                    headers: { Authorization: (0, o.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return r.Z.get(s + "facseg", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return r.Z.get(s + "subfacpop", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return r.Z.get(s + "facmap", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return r.Z.get(s + "gapmap", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return r.Z.get(s + "item-gp", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return r.Z.get(s + "itemfac", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return r.Z.get(s + "gapitem", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return r.Z.get(s + "facprof", {
                    headers: { Authorization: (0, o.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return r.Z.get(s + "coldprof", {
                    headers: { Authorization: (0, o.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return r.Z.get(s + "planingreport", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return r.Z.get(s + "gapcce", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return r.Z.get(s + "gapccePlan", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return r.Z.post(s + "gapccePlan", e, {
                    headers: { Authorization: (0, o.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return r.Z.delete(s + "gapccePlan", {
                    headers: { Authorization: (0, o.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return r.Z.put(s + "gapccePlan", e, {
                    headers: { Authorization: (0, o.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new i();
    },
    2480: function (e, n, t) {
      t.r(n);
      var a = t(29439),
        l = t(72791),
        o = t(46293),
        r = t(69961),
        s = t(17626),
        i = t(6042),
        c = t(59500),
        u = t(78559),
        d = t.n(u),
        p = (t(23666), t(80184));
      function h() {
        var e = (0, l.useState)(null),
          n = (0, a.Z)(e, 2),
          t = n[0],
          r = n[1],
          s = (0, o.zV)({
            click: function () {
              s.locate(), s.invalidateSize();
            },
            locationfound: function (e) {
              r(e.latlng), s.flyTo(e.latlng, s.getZoom());
            },
          });
        return null === t ? null : (0, p.jsx)(p.Fragment, {});
      }
      delete d().Icon.Default.prototype._getIconUrl,
        d().Icon.Default.mergeOptions({
          iconRetinaUrl: t(6431),
          iconUrl: t(37093),
          shadowUrl: t(68858),
        });
      var m = function (e) {
        var n = (0, o.Sx)();
        return (
          (0, l.useEffect)(
            function () {
              if (n) {
                var t = d().DomUtil.create("div", "legend"),
                  a = d().Control.extend({
                    options: { position: "bottomleft" },
                    onAdd: function () {
                      return (
                        (t.textContent = "Click on map too add location"), t
                      );
                    },
                  });
                n.on("load", function (e) {
                  console.log("salam");
                }),
                  n.on("click", function (n) {
                    window.navigator.geolocation.getCurrentPosition(
                      console.log,
                      console.log
                    ),
                      (t.textContent = n.latlng),
                      (function (n) {
                        e.change(n);
                      })(n);
                  }),
                  n.addControl(new a());
              }
            },
            [n]
          ),
          null
        );
      };
      n.default = function (e) {
        var n,
          t,
          o,
          u,
          d = e.locations,
          v = (0, l.useState)(null),
          g = (0, a.Z)(v, 2),
          f = (g[0], g[1]),
          x = (0, l.useState)([]),
          Z = (0, a.Z)(x, 2),
          j = Z[0],
          y = Z[1],
          N = (0, l.useState)(
            null === JSON.parse(localStorage.getItem("country")) ||
              void 0 ===
                JSON.parse(localStorage.getItem("country")).mainlocation
              ? 35
              : null ===
                  (n = JSON.parse(
                    localStorage.getItem("country")
                  ).mainlocation) ||
                void 0 === n ||
                null === (t = n.split("(")[1]) ||
                void 0 === t
              ? void 0
              : t.split(",")[0]
          ),
          b = (0, a.Z)(N, 2),
          S = b[0],
          C = b[1],
          k = (0, l.useState)(
            null === JSON.parse(localStorage.getItem("country")) ||
              void 0 ===
                JSON.parse(localStorage.getItem("country")).mainlocation
              ? 51
              : null ===
                  (o = JSON.parse(
                    localStorage.getItem("country")
                  ).mainlocation) ||
                void 0 === o ||
                null === (u = o.split(",")[1]) ||
                void 0 === u
              ? void 0
              : u.split(")")[0]
          ),
          w = (0, a.Z)(k, 2),
          z = w[0],
          P = w[1];
        return (
          (0, l.useEffect)(function () {
            var e =
              null === JSON.parse(localStorage.getItem("country"))
                ? void 0
                : JSON.parse(localStorage.getItem("country")).mainlocation;
            console.log(e);
            var n = [];
            if (void 0 === e) n = [50, 50];
            else {
              var t, a, l;
              console.log(e);
              var o =
                  null === e ||
                  void 0 === e ||
                  null === (t = e.split("(")[1]) ||
                  void 0 === t
                    ? void 0
                    : t.split(",")[0],
                r =
                  null === e ||
                  void 0 === e ||
                  null === (a = e.split("(")[1]) ||
                  void 0 === a ||
                  null === (l = a.split(",")[1]) ||
                  void 0 === l
                    ? void 0
                    : l.split(")")[0];
              void 0 === o || void 0 === r
                ? (C(35), P(51))
                : (C(parseFloat(o)), P(parseFloat(r)));
            }
            y(n);
          }, []),
          (0, p.jsx)("div", {
            className: "map",
            children:
              null !== j &&
              S &&
              z &&
              (0, p.jsxs)(r.h, {
                center: [S, z],
                zoom: 9,
                scrollWheelZoom: !0,
                style: { width: "100%", height: "450px", zIndex: "1" },
                children: [
                  (0, p.jsx)(s.I, {
                    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    width: 500,
                  }),
                  (0, p.jsx)(m, {
                    change: function (n) {
                      e.handleChange(n), f(n.latlng);
                    },
                  }),
                  (0, p.jsx)(p.Fragment, {
                    children:
                      null === d || void 0 === d
                        ? void 0
                        : d.map(function (e, n) {
                            return (0,
                            p.jsx)(i.J, { position: e.cordinates, children: (0, p.jsx)(c.G, { children: (0, p.jsx)("span", { children: e.cordinates }) }) }, n);
                          }),
                  }),
                  (0, p.jsx)(h, {}),
                ],
              }),
          })
        );
      };
    },
    92854: function () {},
  },
]);
//# sourceMappingURL=3723.ad63c7d9.chunk.js.map
