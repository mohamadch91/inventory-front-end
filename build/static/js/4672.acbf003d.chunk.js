"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [4672],
  {
    51763: function (e, s, l) {
      var a = l(15671),
        c = l(43144),
        n = l(54318),
        i = l(39877),
        r = "https://inventory.runflare.run/reports/",
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
        f = l(91523),
        g = l(97915),
        Z = l(80184),
        y = { pqs: null, count: "" };
      s.default = function () {
        var e,
          s,
          l,
          b,
          w,
          C,
          k,
          P,
          q,
          S,
          z,
          A,
          F,
          G,
          I,
          E,
          Q = (0, r.useState)(y),
          _ = (0, i.Z)(Q, 2),
          M = _[0],
          K = _[1],
          L = (0, N.UO)().id,
          T = (0, d.useQuery)(
            ["fac-gap-info-helper"],
            (0, n.Z)(
              (0, c.Z)().mark(function e() {
                var s;
                return (0, c.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), u.Z.getGapCCEPlan({ id: L });
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
          D = T.data,
          R = T.isLoading,
          O = (0, d.useQuery)(
            [
              "pqs-data",
              L,
              null === (e = M.pqs) || void 0 === e ? void 0 : e.id,
              null === (s = M.pqs) || void 0 === s ? void 0 : s.pqs,
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
                            id: L,
                            type:
                              null === (s = M.pqs) || void 0 === s
                                ? void 0
                                : s.pqs,
                            pqs_id:
                              null === (l = M.pqs) || void 0 === l
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
          U = O.data,
          B = O.isLoading,
          W = O.refetch,
          H = (0, d.useMutation)({
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
                              id: L,
                              type:
                                null === (s = M.pqs) || void 0 === s
                                  ? void 0
                                  : s.pqs,
                              pqs_id:
                                null === (l = M.pqs) || void 0 === l
                                  ? void 0
                                  : l.id,
                              count: M.count,
                            }),
                            (e.next = 3),
                            u.Z.postGapCCEPlan(a)
                          );
                        case 3:
                          return (n = e.sent), e.abrupt("return", n.data);
                        case 5:
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
              W();
            },
          }),
          J = H.mutate,
          V = H.isLoading,
          X = (0, d.useMutation)({
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
                          return (l = e.sent), e.abrupt("return", l.data);
                        case 4:
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
              W();
            },
          }),
          Y = X.mutate,
          $ = (0, d.useMutation)({
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
                          return (l = e.sent), e.abrupt("return", l.data);
                        case 4:
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
              W();
            },
          }),
          ee = $.mutate;
        if (R || B) return (0, Z.jsx)(m.Z, {});
        var se = U ? U.table : null === D || void 0 === D ? void 0 : D.table;
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
                      e.preventDefault(), J();
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
                                    null === D || void 0 === D
                                      ? void 0
                                      : D.data.facility,
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
                                    null === D || void 0 === D
                                      ? void 0
                                      : D.data.condition,
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
                                    null === D || void 0 === D
                                      ? void 0
                                      : D.data.req_capacity,
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
                                    null === D || void 0 === D
                                      ? void 0
                                      : D.data.available,
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
                                    null === D || void 0 === D
                                      ? void 0
                                      : D.data.func_cap,
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
                                    null === D || void 0 === D
                                      ? void 0
                                      : D.data.exces,
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
                          (0, Z.jsx)(g.ZP, {
                            options:
                              null === D || void 0 === D
                                ? void 0
                                : D.pqs.map(function (e) {
                                    return { label: e.name, value: e };
                                  }),
                            onChange: function (e) {
                              K(function (s) {
                                return (0,
                                a.Z)((0, a.Z)({}, s), {}, { pqs: e.value });
                              });
                            },
                            value: {
                              label:
                                null === (l = M.pqs) || void 0 === l
                                  ? void 0
                                  : l.name,
                              value: M.pqs,
                            },
                            className: "col-sm-6",
                          }),
                          (0, Z.jsx)("div", {
                            className: "col-sm-1",
                            children: (0, Z.jsx)("button", {
                              className: "btn btn-primary w-100 h-100",
                              onClick: W,
                              type: "button",
                              disabled: B,
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
                                        null === U || void 0 === U
                                          ? void 0
                                          : U.data.model) && void 0 !== b
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
                                        3 ===
                                        (null === (C = M.pqs) || void 0 === C
                                          ? void 0
                                          : C.pqs)
                                          ? null === U || void 0 === U
                                            ? void 0
                                            : U.data.type
                                          : null === U || void 0 === U
                                          ? void 0
                                          : U.data.description) && void 0 !== w
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
                                      (k =
                                        3 ===
                                        (null === (P = M.pqs) || void 0 === P
                                          ? void 0
                                          : P.pqs)
                                          ? null === U || void 0 === U
                                            ? void 0
                                            : U.data.manufacturer
                                          : null === U || void 0 === U
                                          ? void 0
                                          : U.data.mak) && void 0 !== k
                                      ? k
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
                                      (q =
                                        3 ===
                                        (null === (S = M.pqs) || void 0 === S
                                          ? void 0
                                          : S.pqs)
                                          ? null === U || void 0 === U
                                            ? void 0
                                            : U.data.refrigeratorcapacity
                                          : null === U || void 0 === U
                                          ? void 0
                                          : U.data.vaccinenetstoragecapacity) &&
                                    void 0 !== q
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
                                    children: "Freezer Net Capacity (lit.):",
                                  }),
                                }),
                                (0, Z.jsx)("p", {
                                  className: " col-sm-8",
                                  children:
                                    null !==
                                      (z =
                                        3 ===
                                        (null === (A = M.pqs) || void 0 === A
                                          ? void 0
                                          : A.pqs)
                                          ? null === U || void 0 === U
                                            ? void 0
                                            : U.data.freezercapacity
                                          : null === U || void 0 === U
                                          ? void 0
                                          : U.data
                                              .coolantpacknominalcapacity) &&
                                    void 0 !== z
                                      ? z
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
                                      (F =
                                        3 ===
                                        (null === (G = M.pqs) || void 0 === G
                                          ? void 0
                                          : G.pqs)
                                          ? null === U || void 0 === U
                                            ? void 0
                                            : U.data.kg_24_hrs
                                          : null === U || void 0 === U
                                          ? void 0
                                          : U.data.numbercoolantpacks) &&
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
                                      (I =
                                        3 ===
                                        (null === (E = M.pqs) || void 0 === E
                                          ? void 0
                                          : E.pqs)
                                          ? null === U || void 0 === U
                                            ? void 0
                                            : U.data.h
                                          : null === U || void 0 === U
                                          ? void 0
                                          : U.data.externalvolume) &&
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
                              K(function (e) {
                                return (0,
                                a.Z)((0, a.Z)({}, e), {}, { count: s });
                              });
                            },
                            type: "number",
                            value: M.count,
                          }),
                        ],
                      }),
                      (0, Z.jsxs)("div", {
                        className: "row mt-4 text-center",
                        style: { display: "flex", justifyContent: "center" },
                        children: [
                          (0, Z.jsx)("div", {
                            className: "col-sm-1",
                            children: (0, Z.jsx)("button", {
                              type: "submit",
                              disabled: 0 === M.count.length || V,
                              className: "btn btn-primary",
                              children: "Add To Plan",
                            }),
                          }),
                          (0, Z.jsx)(f.rU, {
                            to: "/settings/planning-cce-gap",
                            className: "col-sm-1",
                            children: (0, Z.jsx)("button", {
                              type: "button",
                              className: "btn btn-info",
                              children: "Back To Plan",
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
                              null === se || void 0 === se
                                ? void 0
                                : se.map(function (e, s) {
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
                                              return Y(e.id);
                                            },
                                            children: "Delete",
                                          }),
                                          (0, Z.jsx)(x.Z, {
                                            style: {
                                              cursor: "pointer",
                                              color: "green",
                                            },
                                            onClick: function () {
                                              return ee(e.id);
                                            },
                                            children: "Provided",
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
//# sourceMappingURL=4672.acbf003d.chunk.js.map
