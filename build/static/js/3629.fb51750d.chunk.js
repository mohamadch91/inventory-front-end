"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [3629],
  {
    51763: function (e, t, a) {
      var n = a(15671),
        r = a(43144),
        o = a(54318),
        i = a(39877),
        u = "http://127.0.0.1:8000/reports/",
        l = (function () {
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
                value: function (e, t) {
                  return i.Z.post(u + "gapsave?condition=" + e, t, {
                    headers: { Authorization: (0, o.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      t.Z = new l();
    },
    33629: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return p;
          },
        });
      var n = a(29439),
        r = a(30606),
        o = (a(2423), a(51763)),
        i = a(72791),
        u = a(65218),
        l = a(59909),
        c = a(80794),
        s = a(80184);
      var p = function () {
        var e = (0, i.useState)({}),
          t = (0, n.Z)(e, 2),
          a = t[0],
          p = t[1],
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
                u.ZP.error("There is a problem loading data"), g(!1);
              });
          }, []),
          (0, s.jsx)(s.Fragment, {
            children: f
              ? (0, s.jsx)(l.Z, {})
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
                          href: c.Z + a.facility,
                          download: !0,
                          children: (0, s.jsx)(r.c, {
                            children: "Export Facilities",
                          }),
                        }),
                        (0, s.jsx)("a", {
                          href: c.Z + a.item,
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
//# sourceMappingURL=3629.fb51750d.chunk.js.map
