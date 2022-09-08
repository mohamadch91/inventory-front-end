"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [5668],
  {
    65668: function (e, a, t) {
      t.r(a);
      var n = t(74165),
        r = t(15861),
        l = (t(72791), t(30606)),
        i = t(91933),
        u = t(51763),
        o = t(59909),
        c = t(23821),
        s = t(56890),
        d = t(35855),
        h = t(53994),
        p = t(53382),
        v = (t(93650), t(80184)),
        m = {
          by_type: [
            { headTitle: "Level", valueKey: "level" },
            { headTitle: "Level Name", valueKey: "name" },
            { headTitle: "Facility type", valueKey: "type" },
            { headTitle: "Total number of facilities", valueKey: "count" },
          ],
          by_owner: [
            { headTitle: "Level", valueKey: "level" },
            { headTitle: "Level Name", valueKey: "name" },
            { headTitle: "Ownership", valueKey: "owner" },
            { headTitle: "Total number of facilities", valueKey: "count" },
          ],
          by_power: [
            { headTitle: "Level", valueKey: "level" },
            { headTitle: "Level Name", valueKey: "name" },
            { headTitle: "Power source", valueKey: "power" },
            { headTitle: "Total number of facilities", valueKey: "count" },
          ],
          general: [
            { headTitle: "Level", valueKey: "level" },
            { headTitle: "Level Name", valueKey: "name" },
            { headTitle: "Total", valueKey: "total" },
            { headTitle: "Average population", valueKey: "avg" },
            { headTitle: "Minimum population", valueKey: "min" },
            { headTitle: "Maximum population", valueKey: "max" },
          ],
          under_1: [
            { headTitle: "Level", valueKey: "level" },
            { headTitle: "Level Name", valueKey: "name" },
            { headTitle: "Total", valueKey: "total" },
            { headTitle: "Average population", valueKey: "avg" },
            { headTitle: "Minimum population", valueKey: "min" },
            { headTitle: "Maximum population", valueKey: "max" },
          ],
        },
        f = function (e) {
          var a = e.reports,
            t = e.tableData,
            n = e.title;
          return (0, v.jsx)("div", {
            className: "mt-3",
            children: (0, v.jsx)("div", {
              className: "card",
              children: (0, v.jsxs)("div", {
                className: "card-body py-3",
                children: [
                  n.length > 0 &&
                    (0, v.jsx)("h4", { className: "mt-2", children: n }),
                  (0, v.jsx)("div", {
                    className: "mt-3 table-container",
                    children: (0, v.jsxs)(c.Z, {
                      children: [
                        (0, v.jsx)(s.Z, {
                          children: (0, v.jsx)(d.Z, {
                            children: t.map(function (e) {
                              return (0,
                              v.jsx)(h.Z, { children: (0, v.jsx)(l.c, { children: e.headTitle }) }, e.headTitle);
                            }),
                          }),
                        }),
                        (0, v.jsx)(p.Z, {
                          children:
                            null === a || void 0 === a
                              ? void 0
                              : a.map(function (e, a) {
                                  return (0, v.jsx)(
                                    d.Z,
                                    {
                                      children: t.map(function (a) {
                                        var t;
                                        return (0,
                                        v.jsx)(h.Z, { children: null !== (t = e[a.valueKey]) && void 0 !== t ? t : "-" }, a.valueKey);
                                      }),
                                    },
                                    a
                                  );
                                }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        };
      a.default = function () {
        var e = JSON.parse(localStorage.getItem("country")) || {},
          a = (0, i.useQuery)(
            ["profile-of-facility-reports"],
            (0, r.Z)(
              (0, n.Z)().mark(function e() {
                var a;
                return (0, n.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), u.Z.getProfOfFac();
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )
          ),
          t = a.data;
        return a.isLoading
          ? (0, v.jsx)(o.Z, {})
          : (0, v.jsxs)("div", {
              children: [
                (0, v.jsx)("h4", {
                  children: (0, v.jsxs)(l.c, {
                    children: [
                      "Report Number: Profile of facility (",
                      null === e || void 0 === e ? void 0 : e.country,
                      ")",
                    ],
                  }),
                }),
                (0, v.jsxs)("h6", {
                  children: ["Date: ", new Date().toISOString().split("T")[0]],
                }),
                t &&
                  Object.keys(t).map(function (e) {
                    var a =
                      "general" === e
                        ? "General population"
                        : "under_1" === e
                        ? "Under-1 Population"
                        : "";
                    return (0,
                    v.jsx)(f, { reports: t[e], tableData: m[e], title: a });
                  }),
              ],
            });
      };
    },
    51763: function (e, a, t) {
      var n = t(15671),
        r = t(43144),
        l = t(54318),
        i = t(39877),
        u = "http://127.0.0.1:8000/reports/",
        o = (function () {
          function e() {
            (0, n.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return i.Z.get(u + "excel", {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return i.Z.get(u + "facseg", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return i.Z.get(u + "subfacpop", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return i.Z.get(u + "facmap", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return i.Z.get(u + "gapmap", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return i.Z.get(u + "item-gp", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return i.Z.get(u + "itemfac", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return i.Z.get(u + "gapitem", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return i.Z.get(u + "facprof", {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return i.Z.get(u + "coldprof", {
                    headers: { Authorization: (0, l.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return i.Z.get(u + "planingreport", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return i.Z.get(u + "gapcce", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return i.Z.get(u + "gapccePlan", {
                    headers: { Authorization: (0, l.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return i.Z.post(u + "gapccePlan", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return i.Z.delete(u + "gapccePlan", {
                    headers: { Authorization: (0, l.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return i.Z.put(u + "gapccePlan", e, {
                    headers: { Authorization: (0, l.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      a.Z = new o();
    },
    23821: function (e, a, t) {
      var n = t(39281),
        r = t(79836),
        l = t(80184);
      a.Z = function (e) {
        var a = e.children;
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)(n.Z, {
            children: (0, l.jsx)(r.Z, { children: a }),
          }),
        });
      };
    },
    93650: function () {},
  },
]);
//# sourceMappingURL=5668.76ba1d2c.chunk.js.map
