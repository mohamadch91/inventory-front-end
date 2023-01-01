"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [7852, 7734],
  {
    3723: function (e, t, n) {
      n.r(t);
      var a = n(1413),
        l = n(74165),
        r = n(15861),
        c = n(29439),
        s = n(72791),
        o = n(30606),
        i = n(12902),
        u = n(91933),
        d = n(16149),
        h = n(51763),
        p = (n(92854), n(59909)),
        m = n(2480),
        g = n(65218),
        v = n(80184),
        f = { level: "-1", type: "-1", power: "-1", func: "-1" };
      t.default = function () {
        var e = (0, s.useState)(f),
          t = (0, c.Z)(e, 2),
          n = t[0],
          x = t[1],
          Z = JSON.parse(localStorage.getItem("country")) || {},
          j = (0, u.useQuery)(
            ["fac-map-based-helper"],
            (0, r.Z)(
              (0, l.Z)().mark(function e() {
                var t;
                return (0, l.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), h.Z.getFacMap({ help: !0 });
                      case 2:
                        return (t = e.sent), e.abrupt("return", t.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )
          ),
          F = j.data,
          y = j.isLoading,
          N = (0, u.useQuery)(
            ["fac-map-report"],
            (0, r.Z)(
              (0, l.Z)().mark(function e() {
                var t, a, r, c;
                return (0, l.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (a in ((t = { help: !1 }), n))
                          (r = n[a]).length > 0 && "-1" !== r && (t[a] = r);
                        return (e.next = 4), h.Z.getFacMap(t);
                      case 4:
                        return (
                          0 === (c = e.sent).data.length &&
                            g.Am.error(
                              (0, v.jsx)(o.c, { children: "No data found" })
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
          w = N.data,
          b = N.isLoading,
          S = N.refetch;
        return y || b
          ? (0, v.jsx)(p.Z, {})
          : (0, v.jsxs)("div", {
              children: [
                (0, v.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, v.jsx)(o.c, {
                    children: "Facility Map-Based Report",
                  }),
                }),
                (0, v.jsx)("div", {
                  className: "mt-3",
                  children: (0, v.jsx)("div", {
                    className: "card",
                    children: (0, v.jsx)("div", {
                      className: "card-body py-3",
                      children: (0, v.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), S();
                        },
                        children: [
                          (0, v.jsx)("h4", {
                            children: (0, v.jsx)(o.c, { children: "Filter" }),
                          }),
                          (0, v.jsxs)("div", {
                            className: "row mt-5",
                            children: [
                              (0, v.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, v.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, v.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, v.jsx)(o.c, { children: "Levels" }),
                                        ":",
                                      ],
                                    }),
                                    (0, v.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var t = e.target.value;
                                        x(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { level: t });
                                        });
                                      },
                                      value: n.level,
                                      as: "select",
                                      children: [
                                        (0, v.jsx)(i.W, {
                                          children: function (e, t) {
                                            t.i18n;
                                            return (0, v.jsx)("option", {
                                              value: "-1",
                                              selected: !0,
                                              disabled: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === F || void 0 === F
                                          ? void 0
                                          : F.level.map(function (e) {
                                              return (0,
                                              v.jsx)("option", { value: e.id, children: "".concat(e.id, " - ").concat(e.name) }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, v.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, v.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, v.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, v.jsx)(o.c, { children: "Type" }),
                                        ":",
                                      ],
                                    }),
                                    (0, v.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var t = e.target.value;
                                        x(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { type: t });
                                        });
                                      },
                                      value: n.type,
                                      as: "select",
                                      children: [
                                        (0, v.jsx)(i.W, {
                                          children: function (e, t) {
                                            t.i18n;
                                            return (0, v.jsx)("option", {
                                              value: "-1",
                                              selected: !0,
                                              disabled: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === F || void 0 === F
                                          ? void 0
                                          : F.type.map(function (e) {
                                              return (0,
                                              v.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, v.jsxs)("div", {
                            className: "row mt-1",
                            children: [
                              (0, v.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, v.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, v.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, v.jsx)(o.c, {
                                          children: "Power source",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, v.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var t = e.target.value;
                                        x(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { power: t });
                                        });
                                      },
                                      value: n.power,
                                      as: "select",
                                      children: [
                                        (0, v.jsx)(i.W, {
                                          children: function (e, t) {
                                            t.i18n;
                                            return (0, v.jsx)("option", {
                                              value: "-1",
                                              selected: !0,
                                              disabled: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        null === F || void 0 === F
                                          ? void 0
                                          : F.power.map(function (e) {
                                              return (0,
                                              v.jsx)("option", { value: e.id, children: e.name }, e.id);
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, v.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, v.jsxs)(d.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, v.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, v.jsx)(o.c, {
                                          children: "Functioning Status",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, v.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var t = e.target.value;
                                        x(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { func: t });
                                        });
                                      },
                                      value: n.func,
                                      as: "select",
                                      children: [
                                        (0, v.jsx)(i.W, {
                                          children: function (e, t) {
                                            t.i18n;
                                            return (0, v.jsx)("option", {
                                              value: "-1",
                                              selected: !0,
                                              disabled: !0,
                                              children: e("Please select"),
                                            });
                                          },
                                        }),
                                        (0, v.jsx)("option", {
                                          value: !0,
                                          children: "Working",
                                        }),
                                        (0, v.jsx)("option", {
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
                          (0, v.jsxs)("div", {
                            className: "row mt-4",
                            children: [
                              (0, v.jsx)("div", {
                                className: "col-sm-2",
                                children: (0, v.jsx)("button", {
                                  type: "submit",
                                  className: "btn fs-5  btn-primary",
                                  children: (0, v.jsx)(o.c, {
                                    children: "Reports",
                                  }),
                                }),
                              }),
                              (0, v.jsx)("div", {
                                className: "col-sm-3",
                                children: (0, v.jsx)("button", {
                                  type: "button",
                                  className: "btn btn-primary fs-5",
                                  onClick: function () {
                                    return x(f);
                                  },
                                  children: (0, v.jsx)(o.c, {
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
                (0, v.jsxs)("div", {
                  className: "p-3",
                  children: [
                    (0, v.jsxs)("h2", {
                      className: "text-dark fs-5",
                      children: [
                        (0, v.jsx)(o.c, { children: "Report" }),
                        " : ",
                        (0, v.jsx)(o.c, { children: "Facility Map-Based" }),
                        " (",
                        null === Z || void 0 === Z ? void 0 : Z.country,
                        ")",
                      ],
                    }),
                    (0, v.jsxs)("h5", {
                      className: "text-dark fs-5",
                      children: [
                        (0, v.jsx)(o.c, { children: "Date" }),
                        ": ",
                        new Date().toISOString().split("T")[0],
                      ],
                    }),
                    (0, v.jsx)(m.default, { locations: w }),
                  ],
                }),
              ],
            });
      };
    },
    51763: function (e, t, n) {
      var a = n(15671),
        l = n(43144),
        r = n(54318),
        c = n(39877),
        s = "https://api.invgap.org/reports/",
        o = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, l.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return c.Z.get(s + "excel", {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return c.Z.get(s + "facseg", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return c.Z.get(s + "subfacpop", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return c.Z.get(s + "facmap", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return c.Z.get(s + "gapmap", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return c.Z.get(s + "item-gp", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return c.Z.get(s + "itemfac", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return c.Z.get(s + "gapitem", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return c.Z.get(s + "facprof", {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return c.Z.get(s + "coldprof", {
                    headers: { Authorization: (0, r.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return c.Z.get(s + "planingreport", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return c.Z.get(s + "gapcce", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return c.Z.get(s + "gapccePlan", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return c.Z.post(s + "gapccePlan", e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return c.Z.delete(s + "gapccePlan", {
                    headers: { Authorization: (0, r.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return c.Z.put(s + "gapccePlan", e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "savegaps",
                value: function (e, t) {
                  return c.Z.post(s + "gapsave?condition=" + e, t, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      t.Z = new o();
    },
    2480: function (e, t, n) {
      n.r(t);
      var a = n(29439),
        l = n(72791),
        r = n(46293),
        c = n(69961),
        s = n(17626),
        o = n(6042),
        i = n(59500),
        u = n(78559),
        d = n.n(u),
        h = (n(23666), n(80184));
      function p() {
        var e = (0, l.useState)(null),
          t = (0, a.Z)(e, 2),
          n = t[0],
          c = t[1],
          s = (0, r.zV)({
            click: function () {
              s.locate(), s.invalidateSize();
            },
            locationfound: function (e) {
              c(e.latlng), s.flyTo(e.latlng, s.getZoom());
            },
          });
        return null === n ? null : (0, h.jsx)(h.Fragment, {});
      }
      d().Icon.Default.mergeOptions({
        iconRetinaUrl: n(6431),
        iconUrl: n(37093),
        shadowUrl: n(68858),
      });
      t.default = function (e) {
        var t,
          n,
          r,
          u,
          m = d().Icon.extend({ options: {} }),
          g = new m({
            iconUrl:
              "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF",
          }),
          v = new m({
            iconUrl:
              "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF",
          }),
          f = new m({
            iconUrl:
              "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ccc22&chf=a,s,ee00FFFF",
          }),
          x = new m({
            iconUrl:
              "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|4acc71&chf=a,s,ee00FFFF",
          }),
          Z = new m({
            iconUrl:
              "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|7dcc71&chf=a,s,ee00FFFF",
          }),
          j = new m({
            iconUrl:
              "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|3ccc71&chf=a,s,ee00FFFF",
          }),
          F = new m({
            iconUrl:
              "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2dcc71&chf=a,s,ee00FFFF",
          }),
          y = new m({
            iconUrl:
              "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2eee71&chf=a,s,ee00FFFF",
          }),
          N = { 1: g, 2: v, 3: f, 4: x, 5: Z, 6: j, 7: F, 8: y },
          w = e.locations,
          b = (0, l.useState)(null),
          S = (0, a.Z)(b, 2),
          k = (S[0], S[1], (0, l.useState)([])),
          A = (0, a.Z)(k, 2),
          _ = A[0],
          C = A[1],
          z = (0, l.useState)(
            null === JSON.parse(localStorage.getItem("country")) ||
              void 0 ===
                JSON.parse(localStorage.getItem("country")).mainlocation
              ? 35
              : null ===
                  (t = JSON.parse(
                    localStorage.getItem("country")
                  ).mainlocation) ||
                void 0 === t ||
                null === (n = t.split("(")[1]) ||
                void 0 === n
              ? void 0
              : n.split(",")[0]
          ),
          P = (0, a.Z)(z, 2),
          I = P[0],
          E = P[1],
          G = (0, l.useState)(
            null === JSON.parse(localStorage.getItem("country")) ||
              void 0 ===
                JSON.parse(localStorage.getItem("country")).mainlocation
              ? 51
              : null ===
                  (r = JSON.parse(
                    localStorage.getItem("country")
                  ).mainlocation) ||
                void 0 === r ||
                null === (u = r.split(",")[1]) ||
                void 0 === u
              ? void 0
              : u.split(")")[0]
          ),
          O = (0, a.Z)(G, 2),
          U = O[0],
          J = O[1];
        return (
          (0, l.useEffect)(function () {
            var e =
              null === JSON.parse(localStorage.getItem("country"))
                ? void 0
                : JSON.parse(localStorage.getItem("country")).mainlocation;
            console.log(e);
            var t = [];
            if (void 0 === e) t = [50, 50];
            else {
              var n, a, l;
              console.log(e);
              var r =
                  null === e ||
                  void 0 === e ||
                  null === (n = e.split("(")[1]) ||
                  void 0 === n
                    ? void 0
                    : n.split(",")[0],
                c =
                  null === e ||
                  void 0 === e ||
                  null === (a = e.split("(")[1]) ||
                  void 0 === a ||
                  null === (l = a.split(",")[1]) ||
                  void 0 === l
                    ? void 0
                    : l.split(")")[0];
              void 0 === r || void 0 === c
                ? (E(35), J(51))
                : (E(parseFloat(r)), J(parseFloat(c)));
            }
            C(t);
          }, []),
          (0, h.jsx)("div", {
            className: "map",
            children:
              null !== _ &&
              I &&
              U &&
              (0, h.jsxs)(c.h, {
                center: [I, U],
                zoom: 5,
                scrollWheelZoom: !0,
                style: { width: "100%", height: "450px", zIndex: "1" },
                children: [
                  (0, h.jsx)(s.I, {
                    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    width: 500,
                  }),
                  (0, h.jsxs)(h.Fragment, {
                    children: [
                      console.log(w),
                      null === w || void 0 === w
                        ? void 0
                        : w.map(function (e, t) {
                            return (0,
                            h.jsx)(o.J, { position: e.cordinates, icon: N[e.level] ? N[e.level] : g, children: (0, h.jsx)(i.G, { children: (0, h.jsx)("span", { children: e.cordinates }) }) }, t);
                          }),
                    ],
                  }),
                  (0, h.jsx)(p, {}),
                ],
              }),
          })
        );
      };
    },
    12902: function (e, t, n) {
      n.d(t, {
        W: function () {
          return s;
        },
      });
      var a = n(29439),
        l = n(45987),
        r = n(22020),
        c = ["ns", "children"];
      function s(e) {
        var t = e.ns,
          n = e.children,
          s = (0, l.Z)(e, c),
          o = (0, r.$)(t, s),
          i = (0, a.Z)(o, 3),
          u = i[0],
          d = i[1],
          h = i[2];
        return n(u, { i18n: d, lng: d.language }, h);
      }
    },
    92854: function () {},
  },
]);
//# sourceMappingURL=7852.4bce40b6.chunk.js.map
