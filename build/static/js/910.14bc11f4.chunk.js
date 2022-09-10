"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [910, 2480],
  {
    50910: function (e, t, n) {
      n.r(t);
      var a = n(1413),
        o = n(74165),
        r = n(15861),
        l = n(29439),
        i = n(72791),
        s = n(30606),
        c = n(91933),
        u = n(16149),
        d = n(51763),
        p = (n(92854), n(59909)),
        g = n(2480),
        m = n(80184),
        h = { degree: "1", status: "1" },
        f = [
          { id: "1", name: "2-8 C" },
          { id: "2", name: "-20 C" },
          { id: "3", name: "-70 C" },
          { id: "4", name: "+25 C" },
          { id: "5", name: "Dry store" },
        ],
        v = [
          { id: "1", name: "Gap Ok" },
          { id: "2", name: "Gap Excess" },
          { id: "3", name: "Gap Shortage" },
        ];
      t.default = function () {
        var e = (0, i.useState)(h),
          t = (0, l.Z)(e, 2),
          n = t[0],
          Z = t[1],
          x = JSON.parse(localStorage.getItem("country")) || {},
          j = (0, c.useQuery)(
            ["gap-map-report"],
            (0, r.Z)(
              (0, o.Z)().mark(function e() {
                var t, a, r, l;
                return (0, o.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        for (a in ((t = {}), n))
                          (r = n[a]).length > 0 && (t[a] = r);
                        return (e.next = 4), d.Z.getGapMap(t);
                      case 4:
                        return (l = e.sent), e.abrupt("return", l.data);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { refetchOnMount: !1, enabled: !1 }
          ),
          y = j.data,
          S = j.isLoading,
          C = j.refetch;
        return S
          ? (0, m.jsx)(p.Z, {})
          : (0, m.jsxs)("div", {
              children: [
                (0, m.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, m.jsx)(s.c, {
                    children: "Gap Map-Based Report",
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
                          e.preventDefault(), C();
                        },
                        children: [
                          (0, m.jsx)("h4", {
                            children: (0, m.jsx)(s.c, { children: "Filter" }),
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
                                      children: (0, m.jsx)(s.c, {
                                        children: "Storage condition:",
                                      }),
                                    }),
                                    (0, m.jsx)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var t = e.target.value;
                                        Z(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { degree: t });
                                        });
                                      },
                                      value: n.degree,
                                      as: "select",
                                      children: f.map(function (e) {
                                        return (0,
                                        m.jsx)("option", { value: e.id, children: e.name }, e.id);
                                      }),
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
                                      children: (0, m.jsx)(s.c, {
                                        children: "Gap Status:",
                                      }),
                                    }),
                                    (0, m.jsx)(u.Z.Control, {
                                      className: "form-select col-sm-8",
                                      onChange: function (e) {
                                        var t = e.target.value;
                                        Z(function (e) {
                                          return (0,
                                          a.Z)((0, a.Z)({}, e), {}, { status: t });
                                        });
                                      },
                                      value: n.status,
                                      as: "select",
                                      children: v.map(function (e) {
                                        return (0,
                                        m.jsx)("option", { value: e.id, children: e.name }, e.id);
                                      }),
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
                                    return Z(h);
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
                      children: (0, m.jsxs)(s.c, {
                        children: [
                          "Report Number: Gap Map-Based (",
                          null === x || void 0 === x ? void 0 : x.country,
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
                    (0, m.jsx)(g.default, { locations: y }),
                  ],
                }),
              ],
            });
      };
    },
    51763: function (e, t, n) {
      var a = n(15671),
        o = n(43144),
        r = n(54318),
        l = n(39877),
        i = "http://5.182.47.38:8000/reports/",
        s = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, o.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return l.Z.get(i + "excel", {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return l.Z.get(i + "facseg", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return l.Z.get(i + "subfacpop", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return l.Z.get(i + "facmap", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return l.Z.get(i + "gapmap", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return l.Z.get(i + "item-gp", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return l.Z.get(i + "itemfac", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return l.Z.get(i + "gapitem", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return l.Z.get(i + "facprof", {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return l.Z.get(i + "coldprof", {
                    headers: { Authorization: (0, r.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return l.Z.get(i + "planingreport", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return l.Z.get(i + "gapcce", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return l.Z.get(i + "gapccePlan", {
                    headers: { Authorization: (0, r.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return l.Z.post(i + "gapccePlan", e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return l.Z.delete(i + "gapccePlan", {
                    headers: { Authorization: (0, r.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return l.Z.put(i + "gapccePlan", e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      t.Z = new s();
    },
    2480: function (e, t, n) {
      n.r(t);
      var a = n(29439),
        o = n(72791),
        r = n(46293),
        l = n(69961),
        i = n(17626),
        s = n(6042),
        c = n(59500),
        u = n(78559),
        d = n.n(u),
        p = (n(23666), n(80184));
      function g() {
        var e = (0, o.useState)(null),
          t = (0, a.Z)(e, 2),
          n = t[0],
          l = t[1],
          i = (0, r.zV)({
            click: function () {
              i.locate(), i.invalidateSize();
            },
            locationfound: function (e) {
              l(e.latlng), i.flyTo(e.latlng, i.getZoom());
            },
          });
        return null === n ? null : (0, p.jsx)(p.Fragment, {});
      }
      delete d().Icon.Default.prototype._getIconUrl,
        d().Icon.Default.mergeOptions({
          iconRetinaUrl: n(6431),
          iconUrl: n(37093),
          shadowUrl: n(68858),
        });
      var m = function (e) {
        var t = (0, r.Sx)();
        return (
          (0, o.useEffect)(
            function () {
              if (t) {
                var n = d().DomUtil.create("div", "legend"),
                  a = d().Control.extend({
                    options: { position: "bottomleft" },
                    onAdd: function () {
                      return (
                        (n.textContent = "Click on map too add location"), n
                      );
                    },
                  });
                t.on("load", function (e) {
                  console.log("salam");
                }),
                  t.on("click", function (t) {
                    window.navigator.geolocation.getCurrentPosition(
                      console.log,
                      console.log
                    ),
                      (n.textContent = t.latlng),
                      (function (t) {
                        e.change(t);
                      })(t);
                  }),
                  t.addControl(new a());
              }
            },
            [t]
          ),
          null
        );
      };
      t.default = function (e) {
        var t,
          n,
          r,
          u,
          d = e.locations,
          h = (0, o.useState)(null),
          f = (0, a.Z)(h, 2),
          v = (f[0], f[1]),
          Z = (0, o.useState)([]),
          x = (0, a.Z)(Z, 2),
          j = x[0],
          y = x[1],
          S = (0, o.useState)(
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
          C = (0, a.Z)(S, 2),
          N = C[0],
          k = C[1],
          b = (0, o.useState)(
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
          z = (0, a.Z)(b, 2),
          G = z[0],
          I = z[1];
        return (
          (0, o.useEffect)(function () {
            var e =
              null === JSON.parse(localStorage.getItem("country"))
                ? void 0
                : JSON.parse(localStorage.getItem("country")).mainlocation;
            console.log(e);
            var t = [];
            if (void 0 === e) t = [50, 50];
            else {
              var n, a, o;
              console.log(e);
              var r =
                  null === e ||
                  void 0 === e ||
                  null === (n = e.split("(")[1]) ||
                  void 0 === n
                    ? void 0
                    : n.split(",")[0],
                l =
                  null === e ||
                  void 0 === e ||
                  null === (a = e.split("(")[1]) ||
                  void 0 === a ||
                  null === (o = a.split(",")[1]) ||
                  void 0 === o
                    ? void 0
                    : o.split(")")[0];
              void 0 === r || void 0 === l
                ? (k(35), I(51))
                : (k(parseFloat(r)), I(parseFloat(l)));
            }
            y(t);
          }, []),
          (0, p.jsx)("div", {
            className: "map",
            children:
              null !== j &&
              N &&
              G &&
              (0, p.jsxs)(l.h, {
                center: [N, G],
                zoom: 9,
                scrollWheelZoom: !0,
                style: { width: "100%", height: "450px", zIndex: "1" },
                children: [
                  (0, p.jsx)(i.I, {
                    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    width: 500,
                  }),
                  (0, p.jsx)(m, {
                    change: function (t) {
                      e.handleChange(t), v(t.latlng);
                    },
                  }),
                  (0, p.jsx)(p.Fragment, {
                    children:
                      null === d || void 0 === d
                        ? void 0
                        : d.map(function (e, t) {
                            return (0,
                            p.jsx)(s.J, { position: e.cordinates, children: (0, p.jsx)(c.G, { children: (0, p.jsx)("span", { children: e.cordinates }) }) }, t);
                          }),
                  }),
                  (0, p.jsx)(g, {}),
                ],
              }),
          })
        );
      };
    },
    92854: function () {},
  },
]);
//# sourceMappingURL=910.14bc11f4.chunk.js.map
