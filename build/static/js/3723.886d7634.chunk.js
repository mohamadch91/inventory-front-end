"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [3723, 2480],
  {
    3723: function (e, n, t) {
      t.r(n);
      var a = t(1413),
        l = t(74165),
        r = t(15861),
        o = t(29439),
        c = t(72791),
        s = t(30606),
        i = t(12902),
        u = t(91933),
        d = t(16149),
        h = t(51763),
        p = (t(92854), t(59909)),
        m = t(2480),
        g = t(65218),
        v = t(80184),
        f = { level: "-1", type: "-1", power: "-1", func: "-1" };
      n.default = function () {
        var e = (0, c.useState)(f),
          n = (0, o.Z)(e, 2),
          t = n[0],
          x = n[1],
          Z = JSON.parse(localStorage.getItem("country")) || {},
          j = (0, u.useQuery)(
            ["fac-map-based-helper"],
            (0, r.Z)(
              (0, l.Z)().mark(function e() {
                var n;
                return (0, l.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), h.Z.getFacMap({ help: !0 });
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
          y = j.data,
          F = j.isLoading,
          N = (0, u.useQuery)(
            ["fac-map-report"],
            (0, r.Z)(
              (0, l.Z)().mark(function e() {
                var n, a, r, o;
                return (0, l.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (a in ((n = { help: !1 }), t))
                          (r = t[a]).length > 0 && "-1" !== r && (n[a] = r);
                        return (e.next = 4), h.Z.getFacMap(n);
                      case 4:
                        return (
                          0 === (o = e.sent).data.length &&
                            g.Am.error(
                              (0, v.jsx)(s.c, { children: "No data found" })
                            ),
                          e.abrupt("return", o.data)
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
        return F || b
          ? (0, v.jsx)(p.Z, {})
          : (0, v.jsxs)("div", {
              children: [
                (0, v.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, v.jsx)(s.c, {
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
                            children: (0, v.jsx)(s.c, { children: "Filter" }),
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
                                        (0, v.jsx)(s.c, { children: "Levels" }),
                                        ":",
                                      ],
                                    }),
                                    (0, v.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        x(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { level: n });
                                        });
                                      },
                                      value: t.level,
                                      as: "select",
                                      children: [
                                        (0, v.jsx)(i.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, v.jsx)("option", {
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
                                        (0, v.jsx)(s.c, { children: "Type" }),
                                        ":",
                                      ],
                                    }),
                                    (0, v.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        x(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { type: n });
                                        });
                                      },
                                      value: t.type,
                                      as: "select",
                                      children: [
                                        (0, v.jsx)(i.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, v.jsx)("option", {
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
                                        (0, v.jsx)(s.c, {
                                          children: "Power source",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, v.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        x(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { power: n });
                                        });
                                      },
                                      value: t.power,
                                      as: "select",
                                      children: [
                                        (0, v.jsx)(i.W, {
                                          children: function (e, n) {
                                            n.i18n;
                                            return (0, v.jsx)("option", {
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
                                        (0, v.jsx)(s.c, {
                                          children: "Functioning Status",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, v.jsxs)(d.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var n = e.target.value;
                                        x(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { func: n });
                                        });
                                      },
                                      value: t.func,
                                      as: "select",
                                      children: [
                                        (0, v.jsx)(i.W, {
                                          children: function (e, n) {
                                            n.i18n;
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
                                className: "col-sm-1",
                                children: (0, v.jsx)("button", {
                                  type: "submit",
                                  className: "btn btn-primary",
                                  children: (0, v.jsx)(s.c, {
                                    children: "Reports",
                                  }),
                                }),
                              }),
                              (0, v.jsx)("div", {
                                className: "col-sm-2",
                                children: (0, v.jsx)("button", {
                                  type: "button",
                                  className: "btn btn-secondary",
                                  onClick: function () {
                                    return x(f);
                                  },
                                  children: (0, v.jsx)(s.c, {
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
                    (0, v.jsxs)("h4", {
                      children: [
                        (0, v.jsx)(s.c, { children: "Report" }),
                        " : ",
                        (0, v.jsx)(s.c, { children: "Facility Map-Based" }),
                        " (",
                        null === Z || void 0 === Z ? void 0 : Z.country,
                        ")",
                      ],
                    }),
                    (0, v.jsxs)("h6", {
                      children: [
                        (0, v.jsx)(s.c, { children: "Date" }),
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
    51763: function (e, n, t) {
      var a = t(15671),
        l = t(43144),
        r = t(54318),
        o = t(39877),
        c = "http://127.0.0.1:8000/reports/",
        s = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, l.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return o.Z.get(c + "excel", {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return o.Z.get(c + "facseg", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return o.Z.get(c + "subfacpop", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return o.Z.get(c + "facmap", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return o.Z.get(c + "gapmap", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return o.Z.get(c + "item-gp", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return o.Z.get(c + "itemfac", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return o.Z.get(c + "gapitem", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return o.Z.get(c + "facprof", {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return o.Z.get(c + "coldprof", {
                    headers: { Authorization: (0, r.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return o.Z.get(c + "planingreport", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return o.Z.get(c + "gapcce", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return o.Z.get(c + "gapccePlan", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return o.Z.post(c + "gapccePlan", e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return o.Z.delete(c + "gapccePlan", {
                    headers: { Authorization: (0, r.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return o.Z.put(c + "gapccePlan", e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "savegaps",
                value: function (e, n) {
                  return o.Z.post(c + "gapsave?condition=" + e, n, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new s();
    },
    2480: function (e, n, t) {
      t.r(n);
      var a = t(29439),
        l = t(72791),
        r = t(46293),
        o = t(69961),
        c = t(17626),
        s = t(6042),
        i = t(59500),
        u = t(78559),
        d = t.n(u),
        h = (t(23666), t(80184));
      function p() {
        var e = (0, l.useState)(null),
          n = (0, a.Z)(e, 2),
          t = n[0],
          o = n[1],
          c = (0, r.zV)({
            click: function () {
              c.locate(), c.invalidateSize();
            },
            locationfound: function (e) {
              o(e.latlng), c.flyTo(e.latlng, c.getZoom());
            },
          });
        return null === t ? null : (0, h.jsx)(h.Fragment, {});
      }
      d().Icon.Default.mergeOptions({
        iconRetinaUrl: t(6431),
        iconUrl: t(37093),
        shadowUrl: t(68858),
      });
      var m = function (e) {
        var n = (0, r.Sx)();
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
          r,
          u,
          g = d().Icon.extend({ options: {} }),
          v = new g({
            iconUrl:
              "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF",
          }),
          f = new g({
            iconUrl:
              "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF",
          }),
          x = new g({
            iconUrl:
              "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ccc22&chf=a,s,ee00FFFF",
          }),
          Z = new g({
            iconUrl:
              "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|4acc71&chf=a,s,ee00FFFF",
          }),
          j = new g({
            iconUrl:
              "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|7dcc71&chf=a,s,ee00FFFF",
          }),
          y = new g({
            iconUrl:
              "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|3ccc71&chf=a,s,ee00FFFF",
          }),
          F = new g({
            iconUrl:
              "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2dcc71&chf=a,s,ee00FFFF",
          }),
          N = new g({
            iconUrl:
              "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2eee71&chf=a,s,ee00FFFF",
          }),
          w = { 1: v, 2: f, 3: x, 4: Z, 5: j, 6: y, 7: F, 8: N },
          b = e.locations,
          S = (0, l.useState)(null),
          k = (0, a.Z)(S, 2),
          C = (k[0], k[1]),
          A = (0, l.useState)([]),
          _ = (0, a.Z)(A, 2),
          z = _[0],
          P = _[1],
          I = (0, l.useState)(
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
          E = (0, a.Z)(I, 2),
          G = E[0],
          O = E[1],
          U = (0, l.useState)(
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
          J = (0, a.Z)(U, 2),
          M = J[0],
          W = J[1];
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
              var r =
                  null === e ||
                  void 0 === e ||
                  null === (t = e.split("(")[1]) ||
                  void 0 === t
                    ? void 0
                    : t.split(",")[0],
                o =
                  null === e ||
                  void 0 === e ||
                  null === (a = e.split("(")[1]) ||
                  void 0 === a ||
                  null === (l = a.split(",")[1]) ||
                  void 0 === l
                    ? void 0
                    : l.split(")")[0];
              void 0 === r || void 0 === o
                ? (O(35), W(51))
                : (O(parseFloat(r)), W(parseFloat(o)));
            }
            P(n);
          }, []),
          (0, h.jsx)("div", {
            className: "map",
            children:
              null !== z &&
              G &&
              M &&
              (0, h.jsxs)(o.h, {
                center: [G, M],
                zoom: 5,
                scrollWheelZoom: !0,
                style: { width: "100%", height: "450px", zIndex: "1" },
                children: [
                  (0, h.jsx)(c.I, {
                    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    width: 500,
                  }),
                  (0, h.jsx)(m, {
                    change: function (n) {
                      e.handleChange(n), C(n.latlng);
                    },
                  }),
                  (0, h.jsx)(h.Fragment, {
                    children:
                      null === b || void 0 === b
                        ? void 0
                        : b.map(function (e, n) {
                            return (0,
                            h.jsx)(s.J, { position: e.cordinates, icon: w[e.level] ? w[e.level] : v, children: (0, h.jsx)(i.G, { children: (0, h.jsx)("span", { children: e.cordinates }) }) }, n);
                          }),
                  }),
                  (0, h.jsx)(p, {}),
                ],
              }),
          })
        );
      };
    },
    12902: function (e, n, t) {
      t.d(n, {
        W: function () {
          return c;
        },
      });
      var a = t(29439),
        l = t(45987),
        r = t(22020),
        o = ["ns", "children"];
      function c(e) {
        var n = e.ns,
          t = e.children,
          c = (0, l.Z)(e, o),
          s = (0, r.$)(n, c),
          i = (0, a.Z)(s, 3),
          u = i[0],
          d = i[1],
          h = i[2];
        return t(u, { i18n: d, lng: d.language }, h);
      }
    },
    92854: function () {},
  },
]);
//# sourceMappingURL=3723.886d7634.chunk.js.map
