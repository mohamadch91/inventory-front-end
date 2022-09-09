"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [307],
  {
    78083: function (e, a, n) {
      n.d(a, {
        k: function () {
          return r;
        },
      });
      var r = function (e) {
        if (void 0 !== e && null !== e)
          return (function (e, a) {
            function n(e) {
              return e.split("").reverse().join("");
            }
            var r = /(\d{3}(?!.*\.|$))/g;
            a || (a = " ");
            return n(n(e.toString()).replace(r, "$1" + a));
          })((e = parseInt(e)));
      };
    },
    10307: function (e, a, n) {
      n.r(a);
      var r = n(74165),
        t = n(15861),
        i = n(29439),
        l = n(72791),
        c = n(30606),
        u = n(91933),
        o = n(51763),
        d = n(59909),
        s = n(23821),
        h = n(56890),
        f = n(35855),
        p = n(53994),
        v = n(53382),
        m = (n(93650), n(16149)),
        y = (n(92854), n(78083)),
        g = n(80184),
        Z = [
          { headTitle: "Level", valueKey: "id" },
          { headTitle: "Level name", valueKey: "name" },
          { headTitle: "General population", valueKey: "general" },
          {
            headTitle: "Number of under-one children served by this facility",
            valueKey: "under1",
          },
          { headTitle: "Cold RoomA", valueKey: "cold_a" },
          { headTitle: "Freezer Room", valueKey: "fr" },
          { headTitle: "Refrigerator", valueKey: "refrig" },
          { headTitle: "Freezer", valueKey: "freezer" },
          { headTitle: "Cold Box", valueKey: "cb" },
          { headTitle: "Vaccine Carrier", valueKey: "vc" },
          { headTitle: "Cold RoomA", valueKey: "nw_cold_a" },
          { headTitle: "Freezer Room", valueKey: "nw_fr" },
          { headTitle: "Refrigerator", valueKey: "nw_refrig" },
          { headTitle: "Freezer", valueKey: "nw_freezer" },
          { headTitle: "Cold Box", valueKey: "nw_cb" },
          { headTitle: "Vaccine Carrier", valueKey: "nw_vc" },
        ],
        x = [
          {
            headTitle: "Level",
            valueKey: "id",
            func: function (e) {
              return e;
            },
            size: "fit",
          },
          {
            headTitle: "Level name",
            valueKey: "name",
            func: function (e) {
              return e;
            },
            size: "fit",
          },
          {
            headTitle: "General population",
            valueKey: "general",
            func: function (e) {
              return (0, y.k)(e);
            },
            size: "fit",
          },
          {
            headTitle: "Number of under-one children served by this facility",
            valueKey: "under1",
            func: function (e) {
              return (0, y.k)(e);
            },
            size: "large",
          },
          {
            headTitle: "Require capacity per target population (cm3)",
            valueKey: "req",
            func: function (e) {
              return (+e).toFixed(2);
            },
            size: "large",
          },
          {
            headTitle: "Available capacity per target population (cm3)",
            valueKey: "available",
            func: function (e) {
              return (+e).toFixed(2);
            },
            size: "large",
          },
          {
            headTitle:
              "The difference between available capacity and require capacity per target population (cm3)",
            valueKey: "diff",
            func: function (e) {
              return (+e).toFixed(2);
            },
            size: "large",
          },
          {
            headTitle: "Require capacity",
            valueKey: "require_capacity",
            func: function (e) {
              return (+(0, y.k)(e)).toFixed(2);
            },
            size: "fit",
          },
          {
            headTitle: "Available capacity (lit.)",
            valueKey: "available_capacity",
            func: function (e) {
              return (+(0, y.k)(e)).toFixed(2);
            },
            size: "fit",
          },
          {
            headTitle:
              "The difference between current available capacity and require capacity (lit.)",
            valueKey: "diff_capacity",
            func: function (e) {
              return (+(0, y.k)(e)).toFixed(2);
            },
            size: "large",
          },
        ],
        j = [
          { id: 1, name: "2-8 C" },
          { id: 2, name: "-20 C" },
          { id: 3, name: "-70 C" },
          { id: 4, name: "+25 C" },
        ];
      a.default = function () {
        var e = (0, l.useState)(1),
          a = (0, i.Z)(e, 2),
          n = a[0],
          y = a[1],
          z = (0, u.useQuery)(
            ["profile-of-cold-chain", n],
            (0, t.Z)(
              (0, r.Z)().mark(function e() {
                var a;
                return (0, r.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), o.Z.getColdProf(n);
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
          T = z.data;
        if (z.isLoading) return (0, g.jsx)(d.Z, {});
        var C = JSON.parse(localStorage.getItem("country")) || {};
        return (0, g.jsxs)("div", {
          children: [
            (0, g.jsx)("h3", {
              className: "page-title mb-3",
              children: (0, g.jsx)(c.c, { children: "Profile of Cold Chain" }),
            }),
            (0, g.jsx)("div", {
              className: "mt-3",
              children: (0, g.jsx)("div", {
                className: "card",
                children: (0, g.jsxs)("div", {
                  className: "card-body py-3",
                  children: [
                    (0, g.jsx)("h4", {
                      children: (0, g.jsxs)(c.c, {
                        children: [
                          "Report Number: Profile of Cold Chain (",
                          null === C || void 0 === C ? void 0 : C.country,
                          ")",
                        ],
                      }),
                    }),
                    (0, g.jsxs)("h6", {
                      children: [
                        "Date: ",
                        new Date().toISOString().split("T")[0],
                      ],
                    }),
                    (0, g.jsx)("div", {
                      className: "mt-3 table-container",
                      children: (0, g.jsxs)(s.Z, {
                        children: [
                          (0, g.jsxs)(h.Z, {
                            children: [
                              (0, g.jsxs)(f.Z, {
                                children: [
                                  (0, g.jsx)(p.Z, {
                                    align: "center",
                                    colSpan: 4,
                                  }),
                                  (0, g.jsx)(p.Z, {
                                    align: "center",
                                    colSpan: 6,
                                    children: "Exist Items",
                                  }),
                                  (0, g.jsx)(p.Z, {
                                    align: "center",
                                    colSpan: 6,
                                    children: "Not Work Items",
                                  }),
                                ],
                              }),
                              (0, g.jsx)(f.Z, {
                                children: Z.map(function (e, a) {
                                  return (0,
                                  g.jsx)(p.Z, { style: { minWidth: 3 === a ? "230px" : "" }, children: (0, g.jsx)(c.c, { children: e.headTitle }) }, e.headTitle);
                                }),
                              }),
                            ],
                          }),
                          (0, g.jsx)(v.Z, {
                            children:
                              null === T || void 0 === T
                                ? void 0
                                : T.table_1.map(function (e, a) {
                                    return (0, g.jsx)(
                                      f.Z,
                                      {
                                        children: Z.map(function (a) {
                                          var n;
                                          return (0,
                                          g.jsx)(p.Z, { children: null !== (n = e[a.valueKey]) && void 0 !== n ? n : "-" }, a.valueKey);
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
            }),
            (0, g.jsx)("div", {
              className: "mt-3",
              children: (0, g.jsx)("div", {
                className: "card",
                children: (0, g.jsxs)("div", {
                  className: "card-body",
                  children: [
                    (0, g.jsx)("div", {
                      className: "row",
                      children: (0, g.jsx)("div", {
                        className: "col-sm-12 col-lg-6",
                        children: (0, g.jsxs)(m.Z.Group, {
                          className: "row",
                          children: [
                            (0, g.jsx)("label", {
                              className: "col-sm-4 mt-3",
                              children: (0, g.jsx)(c.c, {
                                children: "Please select ...",
                              }),
                            }),
                            (0, g.jsx)(m.Z.Control, {
                              className: "form-select col-sm-3",
                              onChange: function (e) {
                                var a = e.target.value;
                                y(a);
                              },
                              value: n,
                              as: "select",
                              children: j.map(function (e) {
                                return (0,
                                g.jsx)("option", { value: e.id, children: e.name }, e.id);
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, g.jsx)("div", {
                      className: "mt-3 table-container",
                      children: (0, g.jsxs)(s.Z, {
                        children: [
                          (0, g.jsx)(h.Z, {
                            children: (0, g.jsx)(f.Z, {
                              children: x.map(function (e) {
                                return (0,
                                g.jsx)(p.Z, { style: { minWidth: "large" === e.size ? "230px" : "auto" }, children: (0, g.jsx)(c.c, { children: e.headTitle }) }, e.headTitle);
                              }),
                            }),
                          }),
                          (0, g.jsx)(v.Z, {
                            children:
                              null === T || void 0 === T
                                ? void 0
                                : T.table_2.map(function (e, a) {
                                    return (0, g.jsx)(
                                      f.Z,
                                      {
                                        children: x.map(function (a) {
                                          var n;
                                          return (0,
                                          g.jsx)(p.Z, { children: null !== (n = a.func(e[a.valueKey])) && void 0 !== n ? n : "-" }, a.valueKey);
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
            }),
          ],
        });
      };
    },
    51763: function (e, a, n) {
      var r = n(15671),
        t = n(43144),
        i = n(54318),
        l = n(39877),
        c = "http://127.0.0.1:8000/reports/",
        u = (function () {
          function e() {
            (0, r.Z)(this, e);
          }
          return (
            (0, t.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return l.Z.get(c + "excel", {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return l.Z.get(c + "facseg", {
                    headers: { Authorization: (0, i.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return l.Z.get(c + "subfacpop", {
                    headers: { Authorization: (0, i.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return l.Z.get(c + "facmap", {
                    headers: { Authorization: (0, i.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return l.Z.get(c + "gapmap", {
                    headers: { Authorization: (0, i.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return l.Z.get(c + "item-gp", {
                    headers: { Authorization: (0, i.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return l.Z.get(c + "itemfac", {
                    headers: { Authorization: (0, i.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return l.Z.get(c + "gapitem", {
                    headers: { Authorization: (0, i.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return l.Z.get(c + "facprof", {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return l.Z.get(c + "coldprof", {
                    headers: { Authorization: (0, i.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return l.Z.get(c + "planingreport", {
                    headers: { Authorization: (0, i.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return l.Z.get(c + "gapcce", {
                    headers: { Authorization: (0, i.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return l.Z.get(c + "gapccePlan", {
                    headers: { Authorization: (0, i.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return l.Z.post(c + "gapccePlan", e, {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return l.Z.delete(c + "gapccePlan", {
                    headers: { Authorization: (0, i.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return l.Z.put(c + "gapccePlan", e, {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      a.Z = new u();
    },
    23821: function (e, a, n) {
      var r = n(39281),
        t = n(79836),
        i = n(80184);
      a.Z = function (e) {
        var a = e.children;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(r.Z, {
            children: (0, i.jsx)(t.Z, { children: a }),
          }),
        });
      };
    },
    92854: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=307.8e776b0a.chunk.js.map