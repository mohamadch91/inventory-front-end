"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [5668],
  {
    78083: function (e, n, t) {
      t.d(n, {
        k: function () {
          return a;
        },
      });
      var a = function (e) {
        if (void 0 !== e && null !== e && "" !== e)
          return (function (e, n) {
            function t(e) {
              return e.split("").reverse().join("");
            }
            var a = /(\d{3}(?!.*\.|$))/g;
            n || (n = " ");
            return t(t(e.toString()).replace(a, "$1" + n));
          })((e = parseInt(e)));
      };
    },
    65668: function (e, n, t) {
      t.r(n);
      var a = t(74165),
        r = t(15861),
        u = (t(72791), t(30606)),
        i = t(91933),
        l = t(51763),
        o = t(59909),
        c = t(23821),
        s = t(56890),
        f = t(35855),
        d = t(53994),
        h = t(53382),
        p = (t(93650), t(78083)),
        v = t(80184),
        m = {
          by_type: [
            {
              headTitle: "Level",
              valueKey: "level",
              func: function (e) {
                return e;
              },
            },
            {
              headTitle: "Level Name",
              valueKey: "name",
              func: function (e) {
                return e;
              },
            },
            {
              headTitle: "Facility types",
              valueKey: "type",
              func: function (e) {
                return e;
              },
            },
            {
              headTitle: "Total number of facilities",
              valueKey: "count",
              func: function (e) {
                return (0, p.k)(e);
              },
            },
          ],
          func: function (e) {
            return e;
          },
          by_owner: [
            {
              headTitle: "Level",
              valueKey: "level",
              func: function (e) {
                return e;
              },
            },
            {
              headTitle: "Level Name",
              valueKey: "name",
              func: function (e) {
                return e;
              },
            },
            {
              headTitle: "Ownership",
              valueKey: "owner",
              func: function (e) {
                return e;
              },
            },
            {
              headTitle: "Total number of facilities",
              valueKey: "count",
              func: function (e) {
                return (0, p.k)(e);
              },
            },
          ],
          by_power: [
            {
              headTitle: "Level",
              valueKey: "level",
              func: function (e) {
                return e;
              },
            },
            {
              headTitle: "Level Name",
              valueKey: "name",
              func: function (e) {
                return e;
              },
            },
            {
              headTitle: "Power source",
              valueKey: "power",
              func: function (e) {
                return e;
              },
            },
            {
              headTitle: "Total number of facilities",
              valueKey: "count",
              func: function (e) {
                return (0, p.k)(e);
              },
            },
          ],
          general: [
            {
              headTitle: "Level",
              valueKey: "level",
              func: function (e) {
                return e;
              },
            },
            {
              headTitle: "Level Name",
              valueKey: "name",
              func: function (e) {
                return e;
              },
            },
            {
              headTitle: "Total",
              valueKey: "total",
              func: function (e) {
                return (0, p.k)(e);
              },
            },
            {
              headTitle: "Average populations",
              valueKey: "avg",
              func: function (e) {
                return (0, p.k)(e);
              },
            },
            {
              headTitle: "Minimum populations",
              valueKey: "min",
              func: function (e) {
                return (0, p.k)(e);
              },
            },
            {
              headTitle: "Maximum populations",
              valueKey: "max",
              func: function (e) {
                return (0, p.k)(e);
              },
            },
          ],
          under_1: [
            {
              headTitle: "Level",
              valueKey: "level",
              func: function (e) {
                return e;
              },
            },
            {
              headTitle: "Level Name",
              valueKey: "name",
              func: function (e) {
                return e;
              },
            },
            {
              headTitle: "Total",
              valueKey: "total",
              func: function (e) {
                return (0, p.k)(e);
              },
            },
            {
              headTitle: "Average populations",
              valueKey: "avg",
              func: function (e) {
                return (0, p.k)(e);
              },
            },
            {
              headTitle: "Minimum populations",
              valueKey: "min",
              func: function (e) {
                return (0, p.k)(e);
              },
            },
            {
              headTitle: "Maximum populations",
              valueKey: "max",
              func: function (e) {
                return (0, p.k)(e);
              },
            },
          ],
        },
        y = function (e) {
          var n = e.reports,
            t = e.tableData,
            a = e.title;
          return (0, v.jsx)("div", {
            className: "mt-3",
            children: (0, v.jsx)("div", {
              className: "card",
              children: (0, v.jsxs)("div", {
                className: "card-body py-3",
                children: [
                  a.length > 0 &&
                    (0, v.jsx)("h4", { className: "mt-2", children: a }),
                  (0, v.jsx)("div", {
                    className: "mt-3 table-container",
                    children: (0, v.jsxs)(c.Z, {
                      children: [
                        (0, v.jsx)(s.Z, {
                          children: (0, v.jsx)(f.Z, {
                            children: t.map(function (e) {
                              return (0,
                              v.jsx)(d.Z, { children: (0, v.jsx)(u.c, { children: e.headTitle }) }, e.headTitle);
                            }),
                          }),
                        }),
                        (0, v.jsx)(h.Z, {
                          children:
                            null === n || void 0 === n
                              ? void 0
                              : n.map(function (e, n) {
                                  return (0, v.jsx)(
                                    f.Z,
                                    {
                                      children: t.map(function (n) {
                                        var t;
                                        return (0,
                                        v.jsx)(d.Z, { children: null !== (t = n.func(e[n.valueKey])) && void 0 !== t ? t : "-" }, n.valueKey);
                                      }),
                                    },
                                    n
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
      n.default = function () {
        var e = JSON.parse(localStorage.getItem("country")) || {},
          n = (0, i.useQuery)(
            ["profile-of-facility-reports"],
            (0, r.Z)(
              (0, a.Z)().mark(function e() {
                var n;
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), l.Z.getProfOfFac();
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
          t = n.data;
        return n.isLoading
          ? (0, v.jsx)(o.Z, {})
          : (0, v.jsxs)("div", {
              children: [
                (0, v.jsxs)("h3", {
                  className: "text-black",
                  children: [
                    (0, v.jsx)(u.c, { children: "Report" }),
                    ":",
                    (0, v.jsx)(u.c, { children: "Profile of facilities" }),
                    " (",
                    null === e || void 0 === e ? void 0 : e.country,
                    ")",
                  ],
                }),
                (0, v.jsxs)("h5", {
                  className: "text-black",
                  children: [
                    (0, v.jsx)(u.c, { children: "Date" }),
                    ": ",
                    new Date().toLocaleDateString("en-GB"),
                  ],
                }),
                t &&
                  Object.keys(t).map(function (e) {
                    var n =
                      "general" === e
                        ? (0, v.jsx)(u.c, { children: "General populations" })
                        : "under_1" === e
                        ? (0, v.jsx)(u.c, { children: "Under-1 Population" })
                        : "";
                    return (0,
                    v.jsx)(y, { reports: t[e], tableData: m[e], title: n });
                  }),
              ],
            });
      };
    },
    51763: function (e, n, t) {
      var a = t(15671),
        r = t(43144),
        u = t(54318),
        i = t(39877),
        l = "https://tls.invgap.org/reports/",
        o = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return i.Z.get(l + "excel", {
                    headers: { Authorization: (0, u.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return i.Z.get(l + "facseg", {
                    headers: { Authorization: (0, u.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return i.Z.get(l + "subfacpop", {
                    headers: { Authorization: (0, u.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return i.Z.get(l + "facmap", {
                    headers: { Authorization: (0, u.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return i.Z.get(l + "gapmap", {
                    headers: { Authorization: (0, u.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return i.Z.get(l + "item-gp", {
                    headers: { Authorization: (0, u.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return i.Z.get(l + "itemfac", {
                    headers: { Authorization: (0, u.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return i.Z.get(l + "gapitem", {
                    headers: { Authorization: (0, u.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return i.Z.get(l + "facprof", {
                    headers: { Authorization: (0, u.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return i.Z.get(l + "coldprof", {
                    headers: { Authorization: (0, u.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return i.Z.get(l + "planingreport", {
                    headers: { Authorization: (0, u.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return i.Z.get(l + "gapcce", {
                    headers: { Authorization: (0, u.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return i.Z.get(l + "gapccePlan", {
                    headers: { Authorization: (0, u.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return i.Z.post(l + "gapccePlan", e, {
                    headers: { Authorization: (0, u.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return i.Z.delete(l + "gapccePlan", {
                    headers: { Authorization: (0, u.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return i.Z.put(l + "gapccePlan", e, {
                    headers: { Authorization: (0, u.Z)() },
                  });
                },
              },
              {
                key: "savegaps",
                value: function (e, n) {
                  return i.Z.post(l + "gapsave?condition=" + e, n, {
                    headers: { Authorization: (0, u.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new o();
    },
    23821: function (e, n, t) {
      var a = t(39281),
        r = t(79836),
        u = t(80184);
      n.Z = function (e) {
        var n = e.children;
        return (0, u.jsx)(u.Fragment, {
          children: (0, u.jsx)(a.Z, {
            children: (0, u.jsx)(r.Z, { children: n }),
          }),
        });
      };
    },
    93650: function () {},
  },
]);
//# sourceMappingURL=5668.31ab7d36.chunk.js.map
