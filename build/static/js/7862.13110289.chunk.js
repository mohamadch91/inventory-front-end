"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [7862, 7734],
  {
    50910: function (e, t, a) {
      a.r(t);
      var n = a(1413),
        r = a(74165),
        o = a(15861),
        l = a(29439),
        c = a(72791),
        s = a(30606),
        i = a(91933),
        u = a(16149),
        d = a(51763),
        h = (a(92854), a(59909)),
        p = a(2480),
        m = a(65218),
        g = a(80184),
        f = { degree: "1", status: "1" },
        v = [
          { id: "1", name: "2-8 C" },
          { id: "2", name: "-20 C" },
          { id: "3", name: "-70 C" },
          { id: "4", name: "+25 C" },
          { id: "5", name: "Dry store" },
        ],
        Z = [
          { id: "1", name: "Gap Ok" },
          { id: "2", name: "Gap Excess" },
          { id: "3", name: "Gap Shortage" },
        ];
      t.default = function () {
        var e = (0, c.useState)(f),
          t = (0, l.Z)(e, 2),
          a = t[0],
          x = t[1],
          j = JSON.parse(localStorage.getItem("country")) || {},
          F = (0, i.useQuery)(
            ["gap-map-report"],
            (0, o.Z)(
              (0, r.Z)().mark(function e() {
                var t, n, o, l;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (n in ((t = {}), a))
                          (o = a[n]).length > 0 && (t[n] = o);
                        return (e.next = 4), d.Z.getGapMap(t);
                      case 4:
                        return (
                          0 === (l = e.sent).data.length &&
                            m.Am.error(
                              (0, g.jsx)(s.c, { children: "No data found" })
                            ),
                          e.abrupt("return", l.data)
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
          y = F.data,
          N = F.isLoading,
          S = F.refetch;
        return N
          ? (0, g.jsx)(h.Z, {})
          : (0, g.jsxs)("div", {
              children: [
                (0, g.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, g.jsx)(s.c, { children: "Gap map report" }),
                }),
                (0, g.jsx)("div", {
                  className: "mt-3",
                  children: (0, g.jsx)("div", {
                    className: "card",
                    children: (0, g.jsx)("div", {
                      className: "card-body py-3",
                      children: (0, g.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), S();
                        },
                        children: [
                          (0, g.jsx)("h4", {
                            children: (0, g.jsx)(s.c, { children: "Filter" }),
                          }),
                          (0, g.jsxs)("div", {
                            className: "row mt-5",
                            children: [
                              (0, g.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, g.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, g.jsx)("label", {
                                      className: "label col-sm-4",
                                      children: (0, g.jsx)(s.c, {
                                        children: "Storage conditions:",
                                      }),
                                    }),
                                    (0, g.jsx)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var t = e.target.value;
                                        x(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { degree: t });
                                        });
                                      },
                                      value: a.degree,
                                      as: "select",
                                      children: v.map(function (e) {
                                        return (0,
                                        g.jsx)("option", { value: e.id, children: e.name }, e.id);
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, g.jsx)("div", {
                                className: "col-sm-12 col-lg-6",
                                children: (0, g.jsxs)(u.Z.Group, {
                                  className: "row",
                                  children: [
                                    (0, g.jsxs)("label", {
                                      className: "label col-sm-4",
                                      children: [
                                        (0, g.jsx)(s.c, {
                                          children: "Gap Status",
                                        }),
                                        ":",
                                      ],
                                    }),
                                    (0, g.jsx)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var t = e.target.value;
                                        x(function (e) {
                                          return (0,
                                          n.Z)((0, n.Z)({}, e), {}, { status: t });
                                        });
                                      },
                                      value: a.status,
                                      as: "select",
                                      children: Z.map(function (e) {
                                        return (0,
                                        g.jsx)("option", { value: e.id, children: e.name }, e.id);
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, g.jsxs)("div", {
                            className: "row mt-4",
                            children: [
                              (0, g.jsx)("div", {
                                className: "col-sm-2",
                                children: (0, g.jsx)("button", {
                                  type: "submit",
                                  className: "btn btn-primary fs-5",
                                  children: (0, g.jsx)(s.c, {
                                    children: "Reports",
                                  }),
                                }),
                              }),
                              (0, g.jsx)("div", {
                                className: "col-sm-3",
                                children: (0, g.jsx)("button", {
                                  type: "button",
                                  className: "btn btn-primary fs-5",
                                  onClick: function () {
                                    return x(f);
                                  },
                                  children: (0, g.jsx)(s.c, {
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
                (0, g.jsxs)("div", {
                  className: "p-3",
                  children: [
                    (0, g.jsxs)("h3", {
                      className: "text-black",
                      children: [
                        (0, g.jsx)(s.c, { children: "Report" }),
                        ": ",
                        (0, g.jsx)(s.c, { children: "Gap map report" }),
                        " (",
                        null === j || void 0 === j ? void 0 : j.country,
                        ")",
                      ],
                    }),
                    (0, g.jsxs)("h5", {
                      className: "text-black",
                      children: [
                        (0, g.jsx)(s.c, { children: "Date" }),
                        ": ",
                        new Date().toLocaleDateString("en-GB"),
                      ],
                    }),
                    (0, g.jsx)(p.default, { locations: y }),
                  ],
                }),
              ],
            });
      };
    },
    51763: function (e, t, a) {
      var n = a(15671),
        r = a(43144),
        o = a(54318),
        l = a(39877),
        c = "https://ukrapi.invgap.org/reports/",
        s = (function () {
          function e() {
            (0, n.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return l.Z.get(c + "excel", {
                    headers: { Authorization: (0, o.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return l.Z.get(c + "facseg", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return l.Z.get(c + "subfacpop", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return l.Z.get(c + "facmap", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return l.Z.get(c + "gapmap", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return l.Z.get(c + "item-gp", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return l.Z.get(c + "itemfac", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return l.Z.get(c + "gapitem", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return l.Z.get(c + "facprof", {
                    headers: { Authorization: (0, o.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return l.Z.get(c + "coldprof", {
                    headers: { Authorization: (0, o.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return l.Z.get(c + "planingreport", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return l.Z.get(c + "gapcce", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return l.Z.get(c + "gapccePlan", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return l.Z.post(c + "gapccePlan", e, {
                    headers: { Authorization: (0, o.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return l.Z.delete(c + "gapccePlan", {
                    headers: { Authorization: (0, o.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return l.Z.put(c + "gapccePlan", e, {
                    headers: { Authorization: (0, o.Z)() },
                  });
                },
              },
              {
                key: "savegaps",
                value: function (e, t) {
                  return l.Z.post(c + "gapsave?condition=" + e, t, {
                    headers: { Authorization: (0, o.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      t.Z = new s();
    },
    2480: function (e, t, a) {
      a.r(t);
      var n = a(29439),
        r = a(72791),
        o = a(46293),
        l = a(69961),
        c = a(17626),
        s = a(6042),
        i = a(59500),
        u = a(78559),
        d = a.n(u),
        h = (a(23666), a(80184));
      function p() {
        var e = (0, r.useState)(null),
          t = (0, n.Z)(e, 2),
          a = t[0],
          l = t[1],
          c = (0, o.zV)({
            click: function () {
              c.locate(), c.invalidateSize();
            },
            locationfound: function (e) {
              l(e.latlng), c.flyTo(e.latlng, c.getZoom());
            },
          });
        return null === a ? null : (0, h.jsx)(h.Fragment, {});
      }
      d().Icon.Default.mergeOptions({
        iconRetinaUrl: a(6431),
        iconUrl: a(37093),
        shadowUrl: a(68858),
      });
      t.default = function (e) {
        var t,
          a,
          o,
          u,
          m = d().Icon.extend({ options: {} }),
          g = new m({
            iconUrl:
              "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF",
          }),
          f = new m({
            iconUrl:
              "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF",
          }),
          v = new m({
            iconUrl:
              "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ccc22&chf=a,s,ee00FFFF",
          }),
          Z = new m({
            iconUrl:
              "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|4acc71&chf=a,s,ee00FFFF",
          }),
          x = new m({
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
          N = { 1: g, 2: f, 3: v, 4: Z, 5: x, 6: j, 7: F, 8: y },
          S = e.locations,
          k = (0, r.useState)(null),
          A = (0, n.Z)(k, 2),
          b = (A[0], A[1], (0, r.useState)([])),
          _ = (0, n.Z)(b, 2),
          C = _[0],
          w = _[1],
          z = (0, r.useState)(
            null === JSON.parse(localStorage.getItem("country")) ||
              void 0 ===
                JSON.parse(localStorage.getItem("country")).mainlocation
              ? 35
              : null ===
                  (t = JSON.parse(
                    localStorage.getItem("country")
                  ).mainlocation) ||
                void 0 === t ||
                null === (a = t.split("(")[1]) ||
                void 0 === a
              ? void 0
              : a.split(",")[0]
          ),
          G = (0, n.Z)(z, 2),
          I = G[0],
          E = G[1],
          O = (0, r.useState)(
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
          P = (0, n.Z)(O, 2),
          U = P[0],
          J = P[1];
        return (
          (0, r.useEffect)(function () {
            var e =
              null === JSON.parse(localStorage.getItem("country"))
                ? void 0
                : JSON.parse(localStorage.getItem("country")).mainlocation;
            console.log(e);
            var t = [];
            if (void 0 === e) t = [50, 50];
            else {
              var a, n, r;
              console.log(e);
              var o =
                  null === e ||
                  void 0 === e ||
                  null === (a = e.split("(")[1]) ||
                  void 0 === a
                    ? void 0
                    : a.split(",")[0],
                l =
                  null === e ||
                  void 0 === e ||
                  null === (n = e.split("(")[1]) ||
                  void 0 === n ||
                  null === (r = n.split(",")[1]) ||
                  void 0 === r
                    ? void 0
                    : r.split(")")[0];
              void 0 === o || void 0 === l
                ? (E(35), J(51))
                : (E(parseFloat(o)), J(parseFloat(l)));
            }
            w(t);
          }, []),
          (0, h.jsx)("div", {
            className: "map",
            children:
              null !== C &&
              I &&
              U &&
              (0, h.jsxs)(l.h, {
                center: [I, U],
                zoom: 5,
                scrollWheelZoom: !0,
                style: { width: "100%", height: "450px", zIndex: "1" },
                children: [
                  (0, h.jsx)(c.I, {
                    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    width: 500,
                  }),
                  (0, h.jsxs)(h.Fragment, {
                    children: [
                      console.log(S),
                      null === S || void 0 === S
                        ? void 0
                        : S.map(function (e, t) {
                            return (0,
                            h.jsx)(s.J, { position: e.cordinates, icon: N[e.level] ? N[e.level] : g, children: (0, h.jsx)(i.G, { children: (0, h.jsx)("span", { children: e.cordinates }) }) }, t);
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
    92854: function () {},
  },
]);
//# sourceMappingURL=7862.13110289.chunk.js.map
