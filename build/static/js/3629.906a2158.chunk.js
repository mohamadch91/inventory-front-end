"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [3629],
  {
    51763: function (e, a, t) {
      var n = t(15671),
        r = t(43144),
        o = t(54318),
        i = t(39877),
        u = "https://tlsapi.invgap.org/reports/",
        c = (function () {
          function e() {
            (0, n.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return i.Z.get(u + "excel", {
                    headers: { Authorization: (0, o.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return i.Z.get(u + "facseg", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return i.Z.get(u + "subfacpop", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return i.Z.get(u + "facmap", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return i.Z.get(u + "gapmap", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return i.Z.get(u + "item-gp", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return i.Z.get(u + "itemfac", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return i.Z.get(u + "gapitem", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return i.Z.get(u + "facprof", {
                    headers: { Authorization: (0, o.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return i.Z.get(u + "coldprof", {
                    headers: { Authorization: (0, o.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return i.Z.get(u + "planingreport", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return i.Z.get(u + "gapcce", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return i.Z.get(u + "gapccePlan", {
                    headers: { Authorization: (0, o.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return i.Z.post(u + "gapccePlan", e, {
                    headers: { Authorization: (0, o.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return i.Z.delete(u + "gapccePlan", {
                    headers: { Authorization: (0, o.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return i.Z.put(u + "gapccePlan", e, {
                    headers: { Authorization: (0, o.Z)() },
                  });
                },
              },
              {
                key: "savegaps",
                value: function (e, a) {
                  return i.Z.post(u + "gapsave?condition=" + e, a, {
                    headers: { Authorization: (0, o.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      a.Z = new c();
    },
    33629: function (e, a, t) {
      t.r(a),
        t.d(a, {
          default: function () {
            return p;
          },
        });
      var n = t(29439),
        r = t(30606),
        o = (t(2423), t(51763)),
        i = t(72791),
        u = t(65218),
        c = t(59909),
        l = t(80794),
        s = t(80184);
      var p = function () {
        var e = (0, i.useState)({}),
          a = (0, n.Z)(e, 2),
          t = a[0],
          p = a[1],
          h = (0, i.useState)(!0),
          d = (0, n.Z)(h, 2),
          f = d[0],
          g = d[1];
        return (
          (0, i.useEffect)(function () {
            o.Z.getDownloadLinks()
              .then(function (e) {
                p(e.data), g(!1);
              })
              .catch(function (e) {
                u.ZP.error(
                  (0, s.jsx)(r.c, {
                    children: "There is a problem loading data",
                  })
                ),
                  g(!1);
              });
          }, []),
          (0, s.jsx)(s.Fragment, {
            children: f
              ? (0, s.jsx)(c.Z, {})
              : (0, s.jsxs)("div", {
                  className: "container excel-page",
                  children: [
                    (0, s.jsx)("h2", {
                      className: "mb-4",
                      children: (0, s.jsx)(r.c, {
                        children:
                          "Export bulk data of facilities and all types of equipment to MS Excel files",
                      }),
                    }),
                    (0, s.jsx)("p", {
                      children: (0, s.jsx)(r.c, {
                        children:
                          "Export bulk data to two MS Excel files separately; 1) for all data related to all facilities, 2) for all data related to all items (equipment). Once you click on any or both of them, one or two MS Excel files will be generated by the application and you can find them in the Download folder of your PC.",
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "mt-4",
                      children: [
                        (0, s.jsx)("a", {
                          href: l.Z + t.facility,
                          download: !0,
                          children: (0, s.jsx)(r.c, {
                            children: "Export Facilities",
                          }),
                        }),
                        (0, s.jsx)("a", {
                          href: l.Z + t.item,
                          download: !0,
                          children: (0, s.jsx)(r.c, {
                            children: "Export Items",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=3629.906a2158.chunk.js.map
