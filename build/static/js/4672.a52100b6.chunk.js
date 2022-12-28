"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [4672],
  {
    51763: function (e, s, l) {
      var a = l(15671),
        c = l(43144),
        n = l(54318),
        i = l(39877),
        r = "https://phlapi.invgap.org/reports/",
        t = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, c.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return i.Z.get(r + "excel", {
                    headers: { Authorization: (0, n.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return i.Z.get(r + "facseg", {
                    headers: { Authorization: (0, n.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return i.Z.get(r + "subfacpop", {
                    headers: { Authorization: (0, n.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return i.Z.get(r + "facmap", {
                    headers: { Authorization: (0, n.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return i.Z.get(r + "gapmap", {
                    headers: { Authorization: (0, n.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return i.Z.get(r + "item-gp", {
                    headers: { Authorization: (0, n.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return i.Z.get(r + "itemfac", {
                    headers: { Authorization: (0, n.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return i.Z.get(r + "gapitem", {
                    headers: { Authorization: (0, n.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return i.Z.get(r + "facprof", {
                    headers: { Authorization: (0, n.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return i.Z.get(r + "coldprof", {
                    headers: { Authorization: (0, n.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return i.Z.get(r + "planingreport", {
                    headers: { Authorization: (0, n.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return i.Z.get(r + "gapcce", {
                    headers: { Authorization: (0, n.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return i.Z.get(r + "gapccePlan", {
                    headers: { Authorization: (0, n.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return i.Z.post(r + "gapccePlan", e, {
                    headers: { Authorization: (0, n.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return i.Z.delete(r + "gapccePlan", {
                    headers: { Authorization: (0, n.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return i.Z.put(r + "gapccePlan", e, {
                    headers: { Authorization: (0, n.Z)() },
                  });
                },
              },
              {
                key: "savegaps",
                value: function (e, s) {
                  return i.Z.post(r + "gapsave?condition=" + e, s, {
                    headers: { Authorization: (0, n.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      s.Z = new t();
    },
    84672: function (e, s, l) {
      l.r(s);
      var a = l(1413),
        c = l(74165),
        n = l(15861),
        i = l(29439),
        r = l(72791),
        t = l(30606),
        d = l(91933),
        o = l(16149),
        u = l(51763),
        m = l(59909),
        h = l(23821),
        p = l(56890),
        v = l(35855),
        x = l(53994),
        j = l(53382),
        N = (l(93650), l(79271)),
        g = l(91523),
        f = l(97915),
        Z = l(80184),
        y = { pqs: null, count: "" };
      s.default = function () {
        var e,
          s,
          l,
          b,
          w,
          k,
          C,
          P,
          q,
          S,
          z,
          A,
          F,
          G,
          I,
          E,
          Q,
          _,
          M = (0, r.useState)(y),
          K = (0, i.Z)(M, 2),
          L = K[0],
          T = K[1],
          D = (0, N.UO)().id,
          R = (0, d.useQuery)(
            ["fac-gap-info-helper"],
            (0, n.Z)(
              (0, c.Z)().mark(function e() {
                var s;
                return (0, c.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), u.Z.getGapCCEPlan({ id: D });
                      case 2:
                        return (s = e.sent), e.abrupt("return", s.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )
          ),
          O = R.data,
          U = R.isLoading,
          B = (0, d.useQuery)(
            [
              "pqs-data",
              D,
              null === (e = L.pqs) || void 0 === e ? void 0 : e.id,
              null === (s = L.pqs) || void 0 === s ? void 0 : s.pqs,
            ],
            (0, n.Z)(
              (0, c.Z)().mark(function e() {
                var s, l, a, n;
                return (0, c.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = {
                            id: D,
                            type:
                              null === (s = L.pqs) || void 0 === s
                                ? void 0
                                : s.pqs,
                            pqs_id:
                              null === (l = L.pqs) || void 0 === l
                                ? void 0
                                : l.id,
                          }),
                          (e.next = 3),
                          u.Z.getGapCCEPlan(a)
                        );
                      case 3:
                        return (n = e.sent), e.abrupt("return", n.data);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { enabled: !1 }
          ),
          W = B.data,
          H = B.isLoading,
          J = B.refetch,
          V = (0, d.useMutation)({
            mutationKey: ["post-plan"],
            mutationFn: (function () {
              var e = (0, n.Z)(
                (0, c.Z)().mark(function e() {
                  var s, l, a, n;
                  return (0, c.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = {
                              id: D,
                              type:
                                null === (s = L.pqs) || void 0 === s
                                  ? void 0
                                  : s.pqs,
                              pqs_id:
                                null === (l = L.pqs) || void 0 === l
                                  ? void 0
                                  : l.id,
                              count: L.count,
                            }),
                            (e.next = 3),
                            u.Z.postGapCCEPlan(a)
                          );
                        case 3:
                          return (n = e.sent), J(), e.abrupt("return", n.data);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: function () {
              J();
            },
          }),
          X = V.mutate,
          Y = V.isLoading,
          $ = (0, d.useMutation)({
            mutationKey: ["plan-delete"],
            mutationFn: (function () {
              var e = (0, n.Z)(
                (0, c.Z)().mark(function e(s) {
                  var l;
                  return (0, c.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), u.Z.deleteGapCCEPlan({ id: s });
                        case 2:
                          return (l = e.sent), J(), e.abrupt("return", l.data);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (s) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: function () {
              J();
            },
          }),
          ee = $.mutate,
          se = (0, d.useMutation)({
            mutationKey: ["plan-provided"],
            mutationFn: (function () {
              var e = (0, n.Z)(
                (0, c.Z)().mark(function e(s) {
                  var l;
                  return (0, c.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), u.Z.putGapCCEPlan({ id: s });
                        case 2:
                          return (l = e.sent), J(), e.abrupt("return", l.data);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (s) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: function () {
              J();
            },
          }),
          le = se.mutate;
        if (U || H) return (0, Z.jsx)(m.Z, {});
        var ae = W ? W.table : null === O || void 0 === O ? void 0 : O.table;
        return (0, Z.jsxs)("div", {
          children: [
            (0, Z.jsx)("h3", {
              className: "page-title mb-3",
              children: (0, Z.jsx)(t.c, {
                children: "Facility Gap Information",
              }),
            }),
            (0, Z.jsx)("div", {
              className: "mt-3",
              children: (0, Z.jsx)("div", {
                className: "card",
                children: (0, Z.jsx)("div", {
                  className: "card-body py-3",
                  children: (0, Z.jsxs)("form", {
                    onSubmit: function (e) {
                      e.preventDefault(), X();
                    },
                    children: [
                      (0, Z.jsx)("h4", {
                        children: (0, Z.jsx)(t.c, { children: "Filters" }),
                      }),
                      (0, Z.jsxs)("div", {
                        className: "row mt-5",
                        children: [
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, Z.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, Z.jsx)("p", {
                                  className: "label col-sm-4",
                                  children: (0, Z.jsx)(t.c, {
                                    children: "Facility name:",
                                  }),
                                }),
                                (0, Z.jsx)("p", {
                                  className: " col-sm-8",
                                  children:
                                    null === O || void 0 === O
                                      ? void 0
                                      : O.data.facility,
                                }),
                              ],
                            }),
                          }),
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, Z.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, Z.jsx)("p", {
                                  className: "label col-sm-4",
                                  children: (0, Z.jsx)(t.c, {
                                    children: "Storage condition:",
                                  }),
                                }),
                                (0, Z.jsx)("p", {
                                  className: " col-sm-8",
                                  children:
                                    null === O || void 0 === O
                                      ? void 0
                                      : O.data.condition,
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, Z.jsx)("hr", { className: "mt-0" }),
                      (0, Z.jsxs)("div", {
                        className: "row mt-1",
                        children: [
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, Z.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, Z.jsx)("p", {
                                  className: "label col-sm-4",
                                  children: (0, Z.jsx)(t.c, {
                                    children: "Require Capacity:",
                                  }),
                                }),
                                (0, Z.jsx)("p", {
                                  className: " col-sm-8",
                                  children:
                                    null === O || void 0 === O
                                      ? void 0
                                      : O.data.req_capacity,
                                }),
                              ],
                            }),
                          }),
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, Z.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, Z.jsx)("p", {
                                  className: "label col-sm-4",
                                  children: (0, Z.jsx)(t.c, {
                                    children: "Available capacity (lit.):",
                                  }),
                                }),
                                (0, Z.jsx)("p", {
                                  className: " col-sm-8",
                                  children:
                                    null === O || void 0 === O
                                      ? void 0
                                      : O.data.available,
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, Z.jsx)("hr", { className: "mt-0" }),
                      (0, Z.jsxs)("div", {
                        className: "row mt-1",
                        children: [
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, Z.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, Z.jsx)("p", {
                                  className: "label col-sm-4",
                                  children: (0, Z.jsx)(t.c, {
                                    children: "Functional Capacity:",
                                  }),
                                }),
                                (0, Z.jsx)("p", {
                                  className: " col-sm-8",
                                  children:
                                    null === O || void 0 === O
                                      ? void 0
                                      : O.data.func_cap,
                                }),
                              ],
                            }),
                          }),
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, Z.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, Z.jsx)("p", {
                                  className: "label col-sm-4",
                                  children: (0, Z.jsx)(t.c, {
                                    children: "Shortage/Exces Capacity:",
                                  }),
                                }),
                                (0, Z.jsx)("p", {
                                  className: " col-sm-8",
                                  children:
                                    null === O || void 0 === O
                                      ? void 0
                                      : O.data.exces,
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, Z.jsx)("hr", { className: "mt-0" }),
                      (0, Z.jsxs)(o.Z.Group, {
                        className: "row mt-1",
                        children: [
                          (0, Z.jsx)("label", {
                            className: "label col-sm-2",
                            children: (0, Z.jsx)(t.c, {
                              children: "PQS/PIS Code:",
                            }),
                          }),
                          (0, Z.jsx)(f.ZP, {
                            options:
                              null === O || void 0 === O
                                ? void 0
                                : O.pqs.map(function (e) {
                                    return { label: e.name, value: e };
                                  }),
                            onChange: function (e) {
                              T(function (s) {
                                return (0,
                                a.Z)((0, a.Z)({}, s), {}, { pqs: e.value });
                              });
                            },
                            value: {
                              label:
                                null === (l = L.pqs) || void 0 === l
                                  ? void 0
                                  : l.name,
                              value: L.pqs,
                            },
                            className: "col-sm-6",
                          }),
                          (0, Z.jsx)("div", {
                            className: "col-sm-1",
                            children: (0, Z.jsx)("button", {
                              className: "btn btn-primary w-100 h-100",
                              onClick: J,
                              type: "button",
                              disabled: H,
                              children: (0, Z.jsx)(t.c, { children: "Load" }),
                            }),
                          }),
                        ],
                      }),
                      (0, Z.jsx)("hr", { className: "mt-0" }),
                      (0, Z.jsxs)("div", {
                        className: "row mt-1",
                        children: [
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, Z.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, Z.jsx)("p", {
                                  className: "label col-sm-4",
                                  children: (0, Z.jsx)(t.c, {
                                    children: "Model:",
                                  }),
                                }),
                                (0, Z.jsx)("p", {
                                  className: " col-sm-8",
                                  children:
                                    null !==
                                      (b =
                                        null === W || void 0 === W
                                          ? void 0
                                          : W.data.model) && void 0 !== b
                                      ? b
                                      : "-",
                                }),
                              ],
                            }),
                          }),
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, Z.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, Z.jsx)("p", {
                                  className: "label col-sm-4",
                                  children: (0, Z.jsx)(t.c, {
                                    children: "PQS/PIS-Type:",
                                  }),
                                }),
                                (0, Z.jsx)("p", {
                                  className: " col-sm-8",
                                  children:
                                    null !==
                                      (w =
                                        4 ===
                                        (null === (k = L.pqs) || void 0 === k
                                          ? void 0
                                          : k.pqs)
                                          ? null === W || void 0 === W
                                            ? void 0
                                            : W.data.type
                                          : null === W || void 0 === W
                                          ? void 0
                                          : W.data.description) && void 0 !== w
                                      ? w
                                      : "-",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, Z.jsx)("hr", { className: "mt-0" }),
                      (0, Z.jsxs)("div", {
                        className: "row mt-1",
                        children: [
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, Z.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, Z.jsx)("p", {
                                  className: "label col-sm-4",
                                  children: (0, Z.jsx)(t.c, {
                                    children: "PQS/PIS-Manufacturer:",
                                  }),
                                }),
                                (0, Z.jsx)("p", {
                                  className: " col-sm-8",
                                  children:
                                    null !==
                                      (C =
                                        4 ===
                                        (null === (P = L.pqs) || void 0 === P
                                          ? void 0
                                          : P.pqs)
                                          ? null === W || void 0 === W
                                            ? void 0
                                            : W.data.manufacturer
                                          : null === W || void 0 === W
                                          ? void 0
                                          : W.data.make) && void 0 !== C
                                      ? C
                                      : "-",
                                }),
                              ],
                            }),
                          }),
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, Z.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, Z.jsx)("p", {
                                  className: "label col-sm-4",
                                  children: (0, Z.jsx)(t.c, {
                                    children: "PQS/PIS-Refrigerant gas",
                                  }),
                                }),
                                (0, Z.jsx)("p", {
                                  className: " col-sm-8",
                                  children:
                                    null !==
                                      (q =
                                        3 ===
                                        (null === (S = L.pqs) || void 0 === S
                                          ? void 0
                                          : S.pqs)
                                          ? null === W || void 0 === W
                                            ? void 0
                                            : W.data.refrigerant
                                          : "-") && void 0 !== q
                                      ? q
                                      : "-",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, Z.jsx)("hr", { className: "mt-0" }),
                      (0, Z.jsxs)("div", {
                        className: "row mt-1",
                        children: [
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, Z.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, Z.jsx)("p", {
                                  className: "label col-sm-4",
                                  children: (0, Z.jsx)(t.c, {
                                    children: "PQS/PIS-Temperature Zone:",
                                  }),
                                }),
                                (0, Z.jsx)("p", {
                                  className: " col-sm-8",
                                  children: "-",
                                }),
                              ],
                            }),
                          }),
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, Z.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, Z.jsx)("p", {
                                  className: "label col-sm-4",
                                  children: (0, Z.jsx)(t.c, {
                                    children:
                                      "Net vaccine storage capacity (lit.):",
                                  }),
                                }),
                                (0, Z.jsx)("p", {
                                  className: " col-sm-8",
                                  children:
                                    null !==
                                      (z =
                                        3 ===
                                        (null === (A = L.pqs) || void 0 === A
                                          ? void 0
                                          : A.pqs)
                                          ? null === W || void 0 === W
                                            ? void 0
                                            : W.data.refrigeratorcapacity
                                          : null === W || void 0 === W
                                          ? void 0
                                          : W.data.vaccinenetstoragecapacity) &&
                                    void 0 !== z
                                      ? z
                                      : "-",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, Z.jsx)("hr", { className: "mt-0" }),
                      (0, Z.jsxs)("div", {
                        className: "row mt-1",
                        children: [
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, Z.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, Z.jsx)("p", {
                                  className: "label col-sm-4",
                                  children: (0, Z.jsx)(t.c, {
                                    children: "Freezer Net Capacity (lit.):",
                                  }),
                                }),
                                (0, Z.jsx)("p", {
                                  className: " col-sm-8",
                                  children:
                                    null !==
                                      (F =
                                        3 ===
                                        (null === (G = L.pqs) || void 0 === G
                                          ? void 0
                                          : G.pqs)
                                          ? null === W || void 0 === W
                                            ? void 0
                                            : W.data.freezercapacity
                                          : null === W || void 0 === W
                                          ? void 0
                                          : W.data
                                              .coolantpacknominalcapacity) &&
                                    void 0 !== F
                                      ? F
                                      : "-",
                                }),
                              ],
                            }),
                          }),
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, Z.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, Z.jsx)("p", {
                                  className: "label col-sm-4",
                                  children: (0, Z.jsx)(t.c, {
                                    children:
                                      "Ice making capacity (Kg/24 hours):",
                                  }),
                                }),
                                (0, Z.jsx)("p", {
                                  className: " col-sm-8",
                                  children: "-",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, Z.jsx)("hr", { className: "mt-0" }),
                      (0, Z.jsxs)("div", {
                        className: "row mt-1",
                        children: [
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, Z.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, Z.jsx)("p", {
                                  className: "label col-sm-4",
                                  children: (0, Z.jsx)(t.c, {
                                    children:
                                      "Cool-water pack production capacity (Kg/24 hours):",
                                  }),
                                }),
                                (0, Z.jsx)("p", {
                                  className: " col-sm-8",
                                  children:
                                    null !==
                                      (I =
                                        3 ===
                                        (null === (E = L.pqs) || void 0 === E
                                          ? void 0
                                          : E.pqs)
                                          ? null === W || void 0 === W
                                            ? void 0
                                            : W.data.kg_24_hrs
                                          : null === W || void 0 === W
                                          ? void 0
                                          : W.data.numbercoolantpacks) &&
                                    void 0 !== I
                                      ? I
                                      : "-",
                                }),
                              ],
                            }),
                          }),
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, Z.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, Z.jsx)("p", {
                                  className: "label col-sm-4",
                                  children: (0, Z.jsx)(t.c, {
                                    children: "Original cost:",
                                  }),
                                }),
                                (0, Z.jsx)("p", {
                                  className: " col-sm-8",
                                  children: "-",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, Z.jsx)("hr", { className: "mt-0" }),
                      (0, Z.jsxs)("div", {
                        className: "row mt-1",
                        children: [
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, Z.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, Z.jsx)("p", {
                                  className: "label col-sm-4",
                                  children: (0, Z.jsx)(t.c, {
                                    children: "Net shipping volume (m3):",
                                  }),
                                }),
                                (0, Z.jsx)("p", {
                                  className: " col-sm-8",
                                  children:
                                    null !==
                                      (Q =
                                        3 ===
                                        (null === (_ = L.pqs) || void 0 === _
                                          ? void 0
                                          : _.pqs)
                                          ? null === W || void 0 === W
                                            ? void 0
                                            : W.data.h.toFixed(2)
                                          : null === W || void 0 === W
                                          ? void 0
                                          : W.data.externalvolume.toFixed(2)) &&
                                    void 0 !== Q
                                      ? Q
                                      : "-",
                                }),
                              ],
                            }),
                          }),
                          (0, Z.jsx)("div", {
                            className: "col-sm-12 col-lg-6",
                            children: (0, Z.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, Z.jsx)("p", {
                                  className: "label col-sm-4",
                                  children: (0, Z.jsx)(t.c, {
                                    children: "Weight (kg):",
                                  }),
                                }),
                                (0, Z.jsx)("p", {
                                  className: " col-sm-8",
                                  children: "-",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, Z.jsx)("hr", { className: "mt-0" }),
                      (0, Z.jsxs)(o.Z.Group, {
                        className: "row mt-1",
                        children: [
                          (0, Z.jsx)("label", {
                            className: "label col-sm-2",
                            children: (0, Z.jsx)(t.c, { children: "Count:" }),
                          }),
                          (0, Z.jsx)(o.Z.Control, {
                            className: "form-control col-sm-6",
                            onChange: function (e) {
                              var s = e.target.value;
                              T(function (e) {
                                return (0,
                                a.Z)((0, a.Z)({}, e), {}, { count: s });
                              });
                            },
                            type: "number",
                            value: L.count,
                          }),
                        ],
                      }),
                      (0, Z.jsxs)("div", {
                        className: "row mt-4 text-center",
                        style: { display: "flex", justifyContent: "center" },
                        children: [
                          (0, Z.jsx)("div", {
                            className: "col-sm-2",
                            children: (0, Z.jsx)("button", {
                              type: "submit",
                              disabled: 0 === L.count.length || Y,
                              className: "btn btn-primary",
                              children: (0, Z.jsx)(t.c, {
                                children: "Add To Plan",
                              }),
                            }),
                          }),
                          (0, Z.jsx)(g.rU, {
                            to: "/settings/planning-cce-gap",
                            className: "col-sm-2",
                            children: (0, Z.jsx)("button", {
                              type: "button",
                              className: "btn btn-info",
                              children: (0, Z.jsx)(t.c, {
                                children: "Back To Plan",
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
            (0, Z.jsx)("div", {
              className: "mt-3",
              children: (0, Z.jsx)("div", {
                className: "card",
                children: (0, Z.jsxs)("div", {
                  className: "card-body py-3",
                  children: [
                    (0, Z.jsx)("h4", {
                      children: (0, Z.jsx)(t.c, { children: "Reports" }),
                    }),
                    (0, Z.jsx)("div", {
                      className: "mt-3 table-container",
                      children: (0, Z.jsxs)(h.Z, {
                        children: [
                          (0, Z.jsx)(p.Z, {
                            children: (0, Z.jsxs)(v.Z, {
                              children: [
                                (0, Z.jsx)(x.Z, {
                                  children: (0, Z.jsx)(t.c, {
                                    children: "Facility Name",
                                  }),
                                }),
                                (0, Z.jsx)(x.Z, {
                                  children: (0, Z.jsx)(t.c, {
                                    children: "PQS/PIS Code",
                                  }),
                                }),
                                (0, Z.jsx)(x.Z, {
                                  children: (0, Z.jsx)(t.c, {
                                    children: "PQS/PIS-Type",
                                  }),
                                }),
                                (0, Z.jsx)(x.Z, {
                                  children: (0, Z.jsx)(t.c, {
                                    children:
                                      "Net vaccine storage capacity (lit.)",
                                  }),
                                }),
                                (0, Z.jsx)(x.Z, {
                                  children: (0, Z.jsx)(t.c, {
                                    children: "Freezer Net Capacity (lit.)",
                                  }),
                                }),
                                (0, Z.jsx)(x.Z, {
                                  children: (0, Z.jsx)(t.c, {
                                    children: "Assign",
                                  }),
                                }),
                                (0, Z.jsx)(x.Z, {
                                  children: (0, Z.jsx)(t.c, {
                                    children: "Delete",
                                  }),
                                }),
                                (0, Z.jsx)(x.Z, {
                                  children: (0, Z.jsx)(t.c, {
                                    children: "Provided",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, Z.jsx)(j.Z, {
                            children:
                              null === ae || void 0 === ae
                                ? void 0
                                : ae.map(function (e, s) {
                                    var l, a, c, n, i;
                                    return (0, Z.jsxs)(
                                      v.Z,
                                      {
                                        children: [
                                          (0, Z.jsx)(x.Z, {
                                            children:
                                              null !== (l = e.facility) &&
                                              void 0 !== l
                                                ? l
                                                : "-",
                                          }),
                                          (0, Z.jsx)(x.Z, {
                                            children:
                                              null !== (a = e.code) &&
                                              void 0 !== a
                                                ? a
                                                : "-",
                                          }),
                                          (0, Z.jsx)(x.Z, {
                                            children:
                                              null !== (c = e.type) &&
                                              void 0 !== c
                                                ? c
                                                : "-",
                                          }),
                                          (0, Z.jsx)(x.Z, {
                                            children:
                                              null !== (n = e.vac_cap) &&
                                              void 0 !== n
                                                ? n
                                                : "-",
                                          }),
                                          (0, Z.jsx)(x.Z, {
                                            children:
                                              null !== (i = e.freez_cap) &&
                                              void 0 !== i
                                                ? i
                                                : "-",
                                          }),
                                          (0, Z.jsx)(x.Z, {
                                            children: (0, Z.jsx)("input", {
                                              type: "checkbox",
                                              disabled: !0,
                                              defaultChecked: e.assigned,
                                            }),
                                          }),
                                          (0, Z.jsx)(x.Z, {
                                            style: {
                                              cursor: "pointer",
                                              color: "red",
                                            },
                                            onClick: function () {
                                              return ee(e.id);
                                            },
                                            children: (0, Z.jsx)(t.c, {
                                              children: "Delete",
                                            }),
                                          }),
                                          (0, Z.jsx)(x.Z, {
                                            style: {
                                              cursor: "pointer",
                                              color: "green",
                                            },
                                            onClick: function () {
                                              return le(e.id);
                                            },
                                            children: (0, Z.jsx)(t.c, {
                                              children: "Provided",
                                            }),
                                          }),
                                        ],
                                      },
                                      s
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
    23821: function (e, s, l) {
      var a = l(39281),
        c = l(79836),
        n = l(80184);
      s.Z = function (e) {
        var s = e.children;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(a.Z, {
            children: (0, n.jsx)(c.Z, { children: s }),
          }),
        });
      };
    },
    93650: function () {},
  },
]);
//# sourceMappingURL=4672.a52100b6.chunk.js.map
