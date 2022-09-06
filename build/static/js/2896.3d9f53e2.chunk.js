"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [2896],
  {
    92896: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return J;
          },
        });
      var a = n(72791),
        r = n(29439),
        s = "ChartDropDown_drop__3zt0I",
        i = n(80184),
        l = function (e) {
          return (0, i.jsx)("div", {
            className: s,
            children: (0, i.jsxs)("select", {
              onChange: e.onChange,
              children: [
                (0, i.jsx)("option", { value: "", children: e.text }),
                e.options.map(function (e, t) {
                  return (0,
                  i.jsx)("option", { value: e.id, children: e.op }, t);
                }),
              ],
            }),
          });
        },
        c = "Facilities_facilities__joa8-",
        d = "Card_card__Bhi4l",
        o = function (e) {
          return (0, i.jsx)("div", { className: d, children: e.children });
        },
        u = n(1413),
        h = n(74165),
        x = n(15861);
      function p(e, t) {
        return "SEND" === t.type
          ? { data: null, error: null, status: "pending" }
          : "SUCCESS" === t.type
          ? { data: t.responseData, error: null, status: "completed" }
          : "ERROR" === t.type
          ? { data: null, error: t.errorMessage, status: "completed" }
          : e;
      }
      var m = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (0, a.useReducer)(p, {
              status: t ? "pending" : null,
              data: null,
              error: null,
            }),
            s = (0, r.Z)(n, 2),
            i = s[0],
            l = s[1],
            c = (0, a.useCallback)(
              (function () {
                var t = (0, x.Z)(
                  (0, h.Z)().mark(function t(n) {
                    var a;
                    return (0, h.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                l({ type: "SEND" }),
                                (t.prev = 1),
                                (t.next = 4),
                                e(n)
                              );
                            case 4:
                              (a = t.sent),
                                l({ type: "SUCCESS", responseData: a }),
                                (t.next = 11);
                              break;
                            case 8:
                              (t.prev = 8),
                                (t.t0 = t.catch(1)),
                                l({
                                  type: "ERROR",
                                  errorMessage:
                                    t.t0.message || "Something went wrong!",
                                });
                            case 11:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[1, 8]]
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              [e]
            );
          return (0, u.Z)({ sendRequest: c }, i);
        },
        f = n(10140);
      function j() {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = (0, x.Z)(
          (0, h.Z)().mark(function e() {
            var t;
            return (0, h.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0), (e.next = 3), f.Z.getAllDashboardItems()
                      );
                    case 3:
                      return (t = e.sent), e.abrupt("return", t.data);
                    case 7:
                      throw (
                        ((e.prev = 7),
                        (e.t0 = e.catch(0)),
                        new Error(
                          "Error fetching data from back-end " + e.t0.message
                        ))
                      );
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 7]]
            );
          })
        )).apply(this, arguments);
      }
      function v() {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = (0, x.Z)(
          (0, h.Z)().mark(function e() {
            var t, n;
            return (0, h.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), f.Z.getAllFacilities();
                    case 3:
                      return (t = e.sent), e.abrupt("return", t.data);
                    case 7:
                      (e.prev = 7),
                        (e.t0 = e.catch(0)),
                        403 ===
                          (null === (n = e.t0.response) || void 0 === n
                            ? void 0
                            : n.status) &&
                          (window.location.href = "/error-pages/error-403"),
                        401 ===
                          (null === n || void 0 === n ? void 0 : n.status) &&
                          (localStorage.removeItem("user"),
                          localStorage.removeItem("country"),
                          (window.location.href = "/login"));
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 7]]
            );
          })
        )).apply(this, arguments);
      }
      function y() {
        return N.apply(this, arguments);
      }
      function N() {
        return (N = (0, x.Z)(
          (0, h.Z)().mark(function e() {
            var t, n;
            return (0, h.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), f.Z.getAllTablesData();
                    case 3:
                      return (t = e.sent), e.abrupt("return", t.data);
                    case 7:
                      (e.prev = 7),
                        (e.t0 = e.catch(0)),
                        403 ===
                          (null === (n = e.t0.response) || void 0 === n
                            ? void 0
                            : n.status) &&
                          (window.location.href = "/error-pages/error-403"),
                        401 ===
                          (null === n || void 0 === n ? void 0 : n.status) &&
                          (localStorage.removeItem("user"),
                          localStorage.removeItem("country"),
                          (window.location.href = "/login"));
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 7]]
            );
          })
        )).apply(this, arguments);
      }
      var Z = n(65218),
        w = n(59909),
        _ = n(31457),
        k = n(30606),
        S = function () {
          var e = (0, a.useState)([]),
            t = (0, r.Z)(e, 2),
            n = t[0],
            s = t[1],
            d = (0, a.useState)(),
            u = (0, r.Z)(d, 2),
            h = u[0],
            x = u[1],
            p = m(v),
            f = p.sendRequest,
            j = p.status,
            g = p.data,
            b = p.error;
          if (
            ((0, a.useEffect)(function () {
              f();
            }, []),
            "pending" === j)
          )
            return (0, i.jsx)(w.Z, {});
          if (b)
            return (
              Z.ZP.error("There was a problem loading data"),
              (0, i.jsx)("p", { children: b })
            );
          if ("completed" === j && 0 === n.length) {
            var y = [];
            g.map(function (e, t) {
              y.push({ op: e.name, id: t, facility: e });
            }),
              s(y);
          }
          return (0, i.jsx)("div", {
            className: c,
            children: (0, i.jsxs)(o, {
              className: "w-50",
              children: [
                (0, i.jsxs)("h3", {
                  children: [
                    "\ud83c\udfe2 ",
                    (0, i.jsx)(k.c, { children: "Facilities" }),
                    " ",
                  ],
                }),
                (0, i.jsx)(l, {
                  onChange: function (e) {
                    e.preventDefault(),
                      n.map(function (t) {
                        if (t.id === +e.target.value) {
                          var n = +t.facility.defined;
                          x({
                            defined: n.toFixed(2),
                            subFacilities: t.facility.sub_fac,
                          });
                        }
                      });
                  },
                  options: n,
                  text: "Select facility",
                }),
                (0, i.jsx)(_.Z, {
                  id: "gauge-chart6",
                  animate: !0,
                  nrOfLevels: 15,
                  percent: h ? h.defined : "",
                  needleColor: "#345243",
                  colors: ["#EA4228", "#F5CD19", "#5BE12C"],
                  textColor: "#000000",
                  animDelay: 100,
                }),
                h &&
                  (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)("span", { children: h.subFacilities }),
                      (0, i.jsxs)("p", {
                        children: [
                          " ",
                          (0, i.jsx)(k.c, { children: "Subset Facilities" }),
                          " ",
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          });
        },
        D = "ItemCard_item__XSGC1",
        C = function () {
          var e = (0, a.useState)([]),
            t = (0, r.Z)(e, 2),
            n = t[0],
            s = t[1],
            c = (0, a.useState)([]),
            d = (0, r.Z)(c, 2),
            u = d[0],
            h = d[1],
            x = (0, a.useState)(),
            p = (0, r.Z)(x, 2),
            f = p[0],
            g = p[1],
            v = m(j),
            b = v.sendRequest,
            y = v.status,
            N = v.data,
            S = v.error;
          if (
            ((0, a.useEffect)(function () {
              b();
            }, []),
            "pending" === y)
          )
            return (0, i.jsx)(w.Z, {});
          if (S)
            return (
              Z.ZP.error("There was a problem loading data"),
              (0, i.jsx)("p", { children: S })
            );
          if ("completed" === y && 0 === n.length) {
            var C = [];
            N.map(function (e, t) {
              C.push({ op: e.item_class, id: t });
            }),
              s(C),
              (C = []);
          }
          return (0, i.jsx)("div", {
            className: D,
            children: (0, i.jsxs)(o, {
              children: [
                (0, i.jsxs)("h3", {
                  children: [
                    "\ud83c\udfe2 ",
                    (0, i.jsx)(k.c, { children: "Items" }),
                    " ",
                  ],
                }),
                (0, i.jsx)(l, {
                  onChange: function (e) {
                    e.preventDefault();
                    var t = [],
                      n = e.target.value;
                    N.map(function (e, a) {
                      a === +n &&
                        e.items.map(function (e, n) {
                          console.log(e),
                            t.push({
                              id: n,
                              classId: a,
                              op: e.item_type,
                              working: e.working,
                              notWorking: e.not_working,
                              totalItems: e.total_items,
                            });
                        });
                    }),
                      h(t);
                  },
                  options: n,
                  text: "Select item Class",
                }),
                (0, i.jsx)(l, {
                  onChange: function (e) {
                    var t = e.target.value;
                    u.map(function (e) {
                      e.id === +t &&
                        g({
                          notWorking: e.notWorking,
                          working: e.working.toFixed(2),
                          totalItems: e.totalItems,
                        });
                    });
                  },
                  options: u,
                  text: "Select item Type",
                }),
                (0, i.jsx)(_.Z, {
                  className: "pt-3",
                  id: "gauge-chart6",
                  animate: !0,
                  nrOfLevels: 15,
                  percent: f ? f.working : "",
                  needleColor: "#345243",
                  colors: ["#EA4228", "#F5CD19", "#5BE12C"],
                  textColor: "#000000",
                  animDelay: 100,
                }),
                f &&
                  (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)("span", { children: f.totalItems }),
                      (0, i.jsx)("p", {
                        children: (0, i.jsx)(k.c, { children: "Items" }),
                      }),
                      (0, i.jsxs)("p", {
                        className: "text-secondary mb-1",
                        style: { fontSize: "13px" },
                        children: [
                          (0, i.jsx)(k.c, { children: "Working" }),
                          ": ",
                          100 * f.working,
                          "%",
                        ],
                      }),
                      (0, i.jsxs)("p", {
                        className: "text-secondary mb-1",
                        style: { fontSize: "13px" },
                        children: [
                          (0, i.jsx)(k.c, { children: "Not working" }),
                          ": ",
                          f.notWorking,
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          });
        },
        E = n(91523),
        F = function (e) {
          return (0, i.jsxs)("div", {
            className: "d-flex mb-3",
            children: [
              (0, i.jsx)("div", {
                children: (0, i.jsxs)("p", {
                  className: "activity-info bg-warning",
                  style: { color: "#000000" },
                  children: [" ", "\u26a0", " "],
                }),
              }),
              (0, i.jsx)("div", {
                className: "activity-details",
                children: (0, i.jsxs)(E.rU, {
                  className: "p-0 btn btn-link btn-fw text-muted ".concat(
                    0 === e.count ? "pe-none" : "",
                    " "
                  ),
                  style: { fontSize: "16px", textDecorationColor: "#777" },
                  to: "dashboard/warnings-info/" + e.param,
                  children: [
                    (0, i.jsxs)(k.c, {
                      children: ["(".concat(e.count, ")  "), e.title],
                    }),
                    (0, i.jsx)("label", {
                      className: "badge badge-danger opacity-".concat(
                        e.badgeOp,
                        " "
                      ),
                      style: { fontSize: "12px" },
                      children: (0, i.jsx)(k.c, { children: e.badge }),
                    }),
                    e.maxExtended &&
                      (0, i.jsx)("label", {
                        className: "badge badge-warning  ",
                        style: { fontSize: "12px" },
                        children: (0, i.jsxs)(k.c, {
                          children: [e.maxExtended, " days extended"],
                        }),
                      }),
                  ],
                }),
              }),
            ],
          });
        },
        A = "Warnings_warnings__73LHj",
        I = n(91933),
        z = function () {
          return (0, i.jsxs)("div", {
            className: "d-flex mb-3",
            children: [
              (0, i.jsx)("div", {
                children: (0, i.jsx)("p", {
                  className: "activity-info bg-info",
                  style: { color: "#000000" },
                  children: "i",
                }),
              }),
              (0, i.jsx)("div", {
                className: "activity-details",
                children: (0, i.jsx)(E.rU, {
                  className: "p-0 btn btn-link btn-fw text-muted ",
                  style: { fontSize: "16px", textDecorationColor: "#777" },
                  to: "dashboard/maintenanceLog",
                  children: (0, i.jsx)(k.c, {
                    children: "Item Maintenance Logbook",
                  }),
                }),
              }),
            ],
          });
        },
        W = [
          { title: "Maintenance services must be done in   ", badge: "7 Days" },
          { title: "Maintenance services must be done in   ", badge: "3 Days" },
          {
            title: "Maintenance  services were ",
            badge: "not performed on time",
          },
          {
            title: "Maintenance  services were ",
            badge: "not performed on time",
          },
        ],
        L = function () {
          var e = (0, I.useQuery)(
              ["warnings"],
              (0, x.Z)(
                (0, h.Z)().mark(function e() {
                  var t;
                  return (0, h.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), f.Z.getAllWarningsData();
                        case 2:
                          return (t = e.sent), e.abrupt("return", t.data);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              { refetchOnMount: !0 }
            ),
            t = e.data;
          return e.isLoading || 0 === t.length
            ? null
            : (0, i.jsxs)("div", {
                className: "card-body recent-activity ".concat(A),
                children: [
                  (0, i.jsxs)("h4", {
                    className: "card-title",
                    children: [" ", (0, i.jsx)(k.c, { children: "Warnings" })],
                  }),
                  (0, i.jsx)("p", {
                    className: "card-description",
                    children: (0, i.jsx)(k.c, {
                      children: "Warnings that need to be taken cared of",
                    }),
                  }),
                  t &&
                    (0, i.jsxs)("div", {
                      className: "activities",
                      children: [
                        (0, i.jsx)(F, {
                          title: W[0].title,
                          text: W[0].text,
                          badge: W[0].badge,
                          count: t.seven_days,
                          badgeOp: 50,
                          param: "day=7",
                        }),
                        (0, i.jsx)(F, {
                          title: W[1].title,
                          text: W[1].text,
                          badge: W[1].badge,
                          count: t.three_days,
                          badgeOp: 75,
                          param: "day=3",
                        }),
                        (0, i.jsx)(F, {
                          title: W[2].title,
                          text: W[2].text,
                          badge: W[2].badge,
                          count: t.extended.count,
                          maxExtended: t.extended.maxExtended,
                          badgeOp: 100,
                          param: "day=extended",
                        }),
                        (0, i.jsx)(z, {}),
                      ],
                    }),
                ],
              });
        },
        R = "Dashbord_charts__aHm0k",
        O = "Dashbord_warning__DSWyr",
        T = "DashboardTables_levels__KWMUa",
        M = "DashboardTables_sub-facilities__YkEFi",
        U = n(29913),
        q = function (e) {
          var t = e.updatedOn.split("T")[0].replace(/-/g, " / ");
          return (0, i.jsxs)("tr", {
            children: [
              (0, i.jsxs)("td", { children: [" ", e.num, " "] }, "E"),
              (0, i.jsx)("td", { className: "py-1", children: e.name }, "F"),
              (0, i.jsx)(
                "td",
                {
                  children: (0, i.jsxs)("label", {
                    className: "badge badge-info",
                    children: [" ", e.level, " "],
                  }),
                },
                "G"
              ),
              (0, i.jsx)(
                "td",
                { className: "py-1", children: " ".concat(e.levelName) },
                "Z"
              ),
              (0, i.jsx)(
                "td",
                {
                  children: (0, i.jsx)(U.Z, {
                    variant: e.variant,
                    now: e.registered,
                  }),
                },
                "H"
              ),
              (0, i.jsxs)("td", { children: [" ", t, " "] }, "J"),
            ],
          });
        },
        B = function (e) {
          return (0, i.jsxs)("div", {
            className: "py-2 px-2",
            children: [
              (0, i.jsxs)("h4", {
                className: "card-title",
                children: [
                  " ",
                  (0, i.jsx)(k.c, { children: "Sub Facilities" }),
                ],
              }),
              (0, i.jsx)("p", {
                className: "card-description",
                children: (0, i.jsx)(k.c, {
                  children: "list of all sub facilities ",
                }),
              }),
              (0, i.jsx)("div", {
                className: "table-responsive",
                children: (0, i.jsxs)("table", {
                  className: "table table-striped",
                  children: [
                    (0, i.jsx)("thead", {
                      children: (0, i.jsxs)("tr", {
                        children: [
                          (0, i.jsx)("th", {
                            children: (0, i.jsx)(k.c, { children: "#" }),
                          }),
                          (0, i.jsx)("th", {
                            children: (0, i.jsx)(k.c, {
                              children: "Facility Name",
                            }),
                          }),
                          (0, i.jsx)("th", {
                            children: (0, i.jsx)(k.c, { children: "Level" }),
                          }),
                          (0, i.jsx)("th", {
                            children: (0, i.jsx)(k.c, {
                              children: "Level name",
                            }),
                          }),
                          (0, i.jsx)("th", {
                            children: (0, i.jsx)(k.c, {
                              children: "Registered",
                            }),
                          }),
                          (0, i.jsx)("th", {
                            children: (0, i.jsx)(k.c, {
                              children: "Last Update",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("tbody", {
                      children: (function () {
                        for (var t = [], n = 0; n < e.data.length; n++) {
                          var a = n % 2 === 0 ? "success" : "warning";
                          t.push(
                            (0, i.jsx)(
                              q,
                              {
                                num: e.data[n].id,
                                name: e.data[n].name,
                                level: e.data[n].level_id,
                                levelName: e.data[n].level_name,
                                registered: 100 * +e.data[n].defined,
                                updatedOn: e.data[n].update,
                                variant: a,
                              },
                              n + 1
                            )
                          );
                        }
                        return t;
                      })(),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        H = function (e) {
          return (
            console.log(e._key),
            (0, i.jsxs)("tr", {
              children: [
                (0, i.jsxs)(
                  "td",
                  {
                    children: [
                      (0, i.jsxs)("label", {
                        className: "badge badge-info",
                        children: [" ", e.level, " "],
                      }),
                      " ",
                    ],
                  },
                  "A"
                ),
                (0, i.jsx)("td", { children: e.levelName }, "B"),
                (0, i.jsx)("td", { children: e.facilitiesNum }, "C"),
                (0, i.jsx)("td", { children: e.subFacilitiesNum }, "D"),
                (0, i.jsx)("td", { children: e.defSubFacilitiesNum }, "E"),
              ],
            })
          );
        },
        P = function (e) {
          return (0, i.jsxs)("div", {
            className: "px-2 py-5",
            children: [
              (0, i.jsx)("h4", {
                className: "card-title",
                children: " \ud83c\udfe2 Facilities",
              }),
              (0, i.jsx)("p", {
                className: "card-description",
                children: " Facilities owned separated by levels",
              }),
              (0, i.jsx)("div", {
                className: "table-responsive",
                children: (0, i.jsxs)("table", {
                  className: "table",
                  children: [
                    (0, i.jsx)("thead", {
                      children: (0, i.jsxs)("tr", {
                        children: [
                          (0, i.jsx)("th", {
                            children: (0, i.jsx)(k.c, { children: "Level" }),
                          }),
                          (0, i.jsx)("th", {
                            children: (0, i.jsx)(k.c, {
                              children: "Level Name",
                            }),
                          }),
                          (0, i.jsx)("th", {
                            children: (0, i.jsx)(k.c, {
                              children: "Total number of facilities",
                            }),
                          }),
                          (0, i.jsx)("th", {
                            children: (0, i.jsx)(k.c, {
                              children: "Total number of sub-facilities",
                            }),
                          }),
                          (0, i.jsx)("th", {
                            children: (0, i.jsx)(k.c, {
                              children:
                                "Number of Defined sub-level facilities",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("tbody", {
                      children: e.data.map(function (e, t) {
                        return (0,
                        i.jsx)(H, { level: e.level_id, levelName: e.level_name, facilitiesNum: e.total, subFacilitiesNum: e.sub, defSubFacilitiesNum: e.def }, t);
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        G = function () {
          var e = m(y),
            t = e.sendRequest,
            n = e.status,
            s = e.data,
            l = e.error,
            c = (0, a.useState)(!1),
            d = (0, r.Z)(c, 2),
            o = d[0],
            u = d[1];
          return (
            (0, a.useEffect)(function () {
              t();
            }, []),
            "pending" === n
              ? (0, i.jsx)(w.Z, {})
              : (console.log("error object", l),
                l
                  ? (Z.ZP.error("There was a problem loading data"),
                    (0, i.jsx)("p", { children: l }))
                  : ("completed" !== n || o || u(!0),
                    (0, i.jsxs)(a.Fragment, {
                      children: [
                        (0, i.jsx)("section", {
                          className: T,
                          children: o && (0, i.jsx)(P, { data: s.level_table }),
                        }),
                        (0, i.jsx)("section", {
                          className: M,
                          children:
                            o && (0, i.jsx)(B, { data: s.facility_table }),
                        }),
                      ],
                    })))
          );
        },
        J = function () {
          return (0, i.jsxs)("main", {
            children: [
              (0, i.jsxs)("section", {
                className: R,
                children: [(0, i.jsx)(C, {}), (0, i.jsx)(S, {})],
              }),
              (0, i.jsx)("section", {
                className: O,
                children: (0, i.jsx)(L, {}),
              }),
              (0, i.jsx)(G, {}),
            ],
          });
        };
    },
    10140: function (e, t, n) {
      var a = n(15671),
        r = n(43144),
        s = n(39877),
        i = n(54318),
        l = "http://127.0.0.1:8000/dashboard",
        c = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getAllDashboardItems",
                value: function () {
                  return s.Z.get(l + "/item", {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "getAllFacilities",
                value: function () {
                  return s.Z.get(l + "/facility", {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "getAllTablesData",
                value: function () {
                  return s.Z.get(l + "/table", {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "getAllWarningsData",
                value: function () {
                  return s.Z.get(l + "/maintenance", {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "getWarningsInfo",
                value: function (e) {
                  return s.Z.get(l + "/todo" + e, {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "getMaintenanceLog",
                value: function () {
                  return s.Z.get(l + "/maintenancelog", {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "postWarningsAsDone",
                value: function (e) {
                  return s.Z.post(l + "/todo", e, {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "getLogDetails",
                value: function (e) {
                  return (
                    console.log(l + "/maintenancelog" + e),
                    s.Z.get(l + "/maintenancelog" + e, {
                      headers: { Authorization: (0, i.Z)() },
                    })
                  );
                },
              },
            ]),
            e
          );
        })();
      t.Z = new c();
    },
  },
]);
//# sourceMappingURL=2896.3d9f53e2.chunk.js.map
