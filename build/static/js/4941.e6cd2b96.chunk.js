"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [4941],
  {
    78083: function (e, a, r) {
      r.d(a, {
        k: function () {
          return n;
        },
      });
      var n = function (e) {
        if (void 0 !== e && null !== e)
          return (function (e, a) {
            function r(e) {
              return e.split("").reverse().join("");
            }
            var n = /(\d{3}(?!.*\.|$))/g;
            a || (a = " ");
            return r(r(e.toString()).replace(n, "$1" + a));
          })((e = parseInt(e)));
      };
    },
    84941: function (e, a, r) {
      r.r(a),
        r.d(a, {
          default: function () {
            return z;
          },
        });
      var n = r(74165),
        t = r(15861),
        s = r(29439),
        l = r(72791),
        c = r(30606),
        i = r(91933),
        o = r(16149),
        u = r(51763),
        d = (r(92854), r(59909)),
        h = r(23821),
        p = r(56890),
        m = r(35855),
        g = r(53994),
        v = r(53382),
        Z = (r(93650), r(78083)),
        f = r(37762),
        x = r(15671),
        j = r(43144),
        y = r(60136),
        b = r(54062),
        N = r(28353),
        k = r(80184),
        C = [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        A = [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        P = (function (e) {
          (0, y.Z)(r, e);
          var a = (0, b.Z)(r);
          function r() {
            var e;
            (0, x.Z)(this, r);
            for (var n = arguments.length, t = new Array(n), s = 0; s < n; s++)
              t[s] = arguments[s];
            return (
              ((e = a.call.apply(a, [this].concat(t))).generateData = function (
                a
              ) {
                var r,
                  n = {
                    labels: [],
                    datasets: [
                      {
                        label: "# of Votes",
                        data: [],
                        backgroundColor: [],
                        borderColor: [],
                        borderWidth: 1,
                        fill: !1,
                      },
                    ],
                  },
                  t = (0, f.Z)(a);
                try {
                  for (t.s(); !(r = t.n()).done; ) {
                    var s = r.value,
                      l = Math.floor(6 * Math.random());
                    n.labels.push(s.name),
                      n.datasets[0].data.push(
                        e.props.isGeneral ? s.generalpopulation : s.underage
                      ),
                      n.datasets[0].backgroundColor.push(C[l]),
                      n.datasets[0].borderColor.push(A[l]);
                  }
                } catch (c) {
                  t.e(c);
                } finally {
                  t.f();
                }
                return n;
              }),
              (e.options = {
                scales: { yAxes: [{ ticks: { beginAtZero: !0 } }] },
                legend: { display: !1 },
                elements: { point: { radius: 0 } },
              }),
              e
            );
          }
          return (
            (0, j.Z)(r, [
              {
                key: "render",
                value: function () {
                  return (0, k.jsx)("div", {
                    children: (0, k.jsx)("div", {
                      className: "row",
                      children: (0, k.jsx)("div", {
                        className: "col-md-12 grid-margin stretch-card",
                        children: (0, k.jsx)("div", {
                          className: "card",
                          children: (0, k.jsxs)("div", {
                            className: "card-body",
                            children: [
                              (0, k.jsx)("h4", {
                                className: "card-title",
                                children: "Sub Facility population data",
                              }),
                              (0, k.jsx)("h6", {
                                className: "mt-1",
                                children: this.props.isGeneral
                                  ? "General Population"
                                  : "Under 1 Population",
                              }),
                              this.props.rows &&
                                (0, k.jsx)(N.n4, {
                                  data: this.generateData(this.props.rows),
                                  options: this.options,
                                }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  });
                },
              },
            ]),
            r
          );
        })(l.Component);
      var z = function () {
        var e = (0, l.useState)(-1),
          a = (0, s.Z)(e, 2),
          r = a[0],
          f = a[1],
          x = (0, i.useQuery)(
            ["sub-fac-pop-data-helper"],
            (0, t.Z)(
              (0, n.Z)().mark(function e() {
                var a;
                return (0, n.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), u.Z.getSubFacPop({ help: !0 });
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
          j = x.data,
          y = x.isLoading,
          b = (0, i.useQuery)(
            ["sub-fac-pop-report"],
            (0, t.Z)(
              (0, n.Z)().mark(function e() {
                var a, t;
                return (0, n.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = { help: !1 }),
                          -1 !== r && (a.level = r),
                          (e.next = 4),
                          u.Z.getSubFacPop(a)
                        );
                      case 4:
                        return (t = e.sent), e.abrupt("return", t.data);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )
          ),
          N = b.data,
          C = b.isLoading,
          A = b.refetch;
        (0, l.useEffect)(
          function () {
            r && A();
          },
          [r]
        );
        var z = JSON.parse(localStorage.getItem("country"));
        return y || C
          ? (0, k.jsx)(d.Z, {})
          : (0, k.jsxs)("div", {
              children: [
                (0, k.jsx)("h3", {
                  className: "page-title mb-3",
                  children: (0, k.jsx)(c.c, {
                    children: "Sub Facility population data",
                  }),
                }),
                (0, k.jsx)(P, {
                  isGeneral:
                    "General population" ===
                    (null === z || void 0 === z ? void 0 : z.poptarget),
                  rows: N,
                }),
                (0, k.jsx)("div", {
                  className: "mt-3",
                  children: (0, k.jsx)("div", {
                    className: "card",
                    children: (0, k.jsx)("div", {
                      className: "card-body py-3",
                      children: (0, k.jsxs)(o.Z.Group, {
                        className: "row",
                        children: [
                          (0, k.jsx)("label", {
                            className: "col-sm-4",
                            children: (0, k.jsx)(c.c, { children: "Level:" }),
                          }),
                          (0, k.jsxs)(o.Z.Control, {
                            className: "form-select col-sm-4",
                            onChange: function (e) {
                              var a = e.target.value;
                              f(a);
                            },
                            as: "select",
                            children: [
                              (0, k.jsx)("option", {
                                value: -1,
                                selected: !0,
                                children: "Please select",
                              }),
                              null === j || void 0 === j
                                ? void 0
                                : j.map(function (e) {
                                    return (0,
                                    k.jsx)("option", { value: e.id, children: "".concat(e.id, " - ").concat(e.name) }, e.id);
                                  }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                (0, k.jsx)("div", {
                  className: "mt-3",
                  children: (0, k.jsx)("div", {
                    className: "card",
                    children: (0, k.jsxs)("div", {
                      className: "card-body py-3",
                      children: [
                        (0, k.jsx)("h4", {
                          children: (0, k.jsx)(c.c, { children: "Reports" }),
                        }),
                        (0, k.jsx)("div", {
                          className: "mt-3 table-container",
                          children: (0, k.jsxs)(h.Z, {
                            children: [
                              (0, k.jsx)(p.Z, {
                                children: (0, k.jsxs)(m.Z, {
                                  children: [
                                    (0, k.jsx)(g.Z, {
                                      className: "col-sm-2",
                                      children: (0, k.jsx)(c.c, {
                                        children: "Facility name",
                                      }),
                                    }),
                                    (0, k.jsx)(g.Z, {
                                      className: "col-sm-2",
                                      children: (0, k.jsx)(c.c, {
                                        children: "Facility parent",
                                      }),
                                    }),
                                    (0, k.jsx)(g.Z, {
                                      className: "col-sm-2",
                                      children: (0, k.jsx)(c.c, {
                                        children: "Level",
                                      }),
                                    }),
                                    (0, k.jsx)(g.Z, {
                                      className: "col-sm-2",
                                      children: (0, k.jsx)(c.c, {
                                        children: "Code",
                                      }),
                                    }),
                                    (0, k.jsx)(g.Z, {
                                      className: "col-sm-1",
                                      children: (0, k.jsx)(c.c, {
                                        children: "Type",
                                      }),
                                    }),
                                    (0, k.jsx)(g.Z, {
                                      className: "col-sm-1",
                                      children: (0, k.jsx)(c.c, {
                                        children: "Underage",
                                      }),
                                    }),
                                    (0, k.jsx)(g.Z, {
                                      className: "col-sm-2",
                                      children: (0, k.jsx)(c.c, {
                                        children: "general population",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, k.jsx)(v.Z, {
                                children:
                                  null === N || void 0 === N
                                    ? void 0
                                    : N.map(function (e, a) {
                                        var r, n, t, s, l, c, i;
                                        return (0,
                                        k.jsxs)(m.Z, { children: [(0, k.jsx)(g.Z, { className: "col-sm-2", children: null !== (r = e.name) && void 0 !== r ? r : "-" }), (0, k.jsx)(g.Z, { className: "col-sm-2", children: null !== (n = e.parent) && void 0 !== n ? n : "-" }), (0, k.jsx)(g.Z, { className: "col-sm-2", children: null !== (t = e.level) && void 0 !== t ? t : "-" }), (0, k.jsx)(g.Z, { className: "col-sm-2", children: null !== (s = e.code) && void 0 !== s ? s : "-" }), (0, k.jsx)(g.Z, { className: "col-sm-1", children: null !== (l = e.type) && void 0 !== l ? l : "-" }), (0, k.jsx)(g.Z, { className: "col-sm-1", children: null !== (c = (0, Z.k)(e.underage)) && void 0 !== c ? c : "-" }), (0, k.jsx)(g.Z, { className: "col-sm-2", children: null !== (i = (0, Z.k)(e.generalpopulation)) && void 0 !== i ? i : "-" })] }, a);
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
    51763: function (e, a, r) {
      var n = r(15671),
        t = r(43144),
        s = r(54318),
        l = r(39877),
        c = "http://127.0.0.1:8000/reports/",
        i = (function () {
          function e() {
            (0, n.Z)(this, e);
          }
          return (
            (0, t.Z)(e, [
              {
                key: "getDownloadLinks",
                value: function () {
                  return l.Z.get(c + "excel", {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getFacSeg",
                value: function (e) {
                  return l.Z.get(c + "facseg", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacPop",
                value: function (e) {
                  return l.Z.get(c + "subfacpop", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacMap",
                value: function (e) {
                  return l.Z.get(c + "facmap", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapMap",
                value: function (e) {
                  return l.Z.get(c + "gapmap", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemGp",
                value: function (e) {
                  return l.Z.get(c + "item-gp", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getItemFac",
                value: function (e) {
                  return l.Z.get(c + "itemfac", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapItem",
                value: function (e) {
                  return l.Z.get(c + "gapitem", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getProfOfFac",
                value: function () {
                  return l.Z.get(c + "facprof", {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getColdProf",
                value: function (e) {
                  return l.Z.get(c + "coldprof", {
                    headers: { Authorization: (0, s.Z)() },
                    params: { degree: e },
                  });
                },
              },
              {
                key: "getPlanningReport",
                value: function (e) {
                  return l.Z.get(c + "planingreport", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getPlanningCCEGap",
                value: function (e) {
                  return l.Z.get(c + "gapcce", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getGapCCEPlan",
                value: function (e) {
                  return l.Z.get(c + "gapccePlan", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postGapCCEPlan",
                value: function (e) {
                  return l.Z.post(c + "gapccePlan", e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "deleteGapCCEPlan",
                value: function (e) {
                  return l.Z.delete(c + "gapccePlan", {
                    headers: { Authorization: (0, s.Z)() },
                    data: e,
                  });
                },
              },
              {
                key: "putGapCCEPlan",
                value: function (e) {
                  return l.Z.put(c + "gapccePlan", e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      a.Z = new i();
    },
    23821: function (e, a, r) {
      var n = r(39281),
        t = r(79836),
        s = r(80184);
      a.Z = function (e) {
        var a = e.children;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)(n.Z, {
            children: (0, s.jsx)(t.Z, { children: a }),
          }),
        });
      };
    },
    92854: function () {},
    93650: function () {},
  },
]);
//# sourceMappingURL=4941.e6cd2b96.chunk.js.map
