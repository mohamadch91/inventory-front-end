"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [2896],
  {
    92896: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return G;
          },
        });
      var a = n(72791),
        s = n(74165),
        i = n(15861),
        r = n(29439),
        l = "ChartDropDown_drop__3zt0I",
        c = n(12902),
        d = n(80184),
        o = function (e) {
          return (
            console.log(e),
            (0, d.jsx)("div", {
              className: l,
              children: (0, d.jsxs)("select", {
                onChange: e.onChange,
                children: [
                  (0, d.jsx)("option", { value: "", children: e.text }),
                  (0, d.jsx)(c.W, {
                    children: function (t, n) {
                      n.i18n;
                      return (0, d.jsx)("option", {
                        i18n: !0,
                        value: "",
                        selected: !0,
                        children: t("".concat(e.text)),
                      });
                    },
                  }),
                  e.options.map(function (e, t) {
                    return (0,
                    d.jsx)("option", { value: e.id, children: e.op }, t);
                  }),
                ],
              }),
            })
          );
        },
        u = "Facilities_facilities__joa8-",
        h = "Card_card__Bhi4l",
        x = function (e) {
          return (0, d.jsx)("div", { className: h, children: e.children });
        },
        p = n(65218),
        j = (n(59909), n(31457)),
        m = n(30606),
        v = n(10140),
        f = n(91933),
        g = function () {
          var e = (0, a.useState)([]),
            t = (0, r.Z)(e, 2),
            n = t[0],
            l = t[1],
            c = (0, a.useState)(),
            h = (0, r.Z)(c, 2),
            p = h[0],
            g = h[1],
            b = (0, f.useQuery)(
              ["charts-facilities"],
              (0, i.Z)(
                (0, s.Z)().mark(function e() {
                  var t;
                  return (0, s.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), v.Z.getAllFacilities();
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
            y = b.data,
            N = b.isLoading;
          if (!b.isFetched)
            return (0, d.jsx)("div", {
              className: "spinner-wrapper",
              style: { position: "relative" },
              children: (0, d.jsx)("div", { className: "donut" }),
            });
          if (!N && 0 === n.length) {
            var w = [];
            y.map(function (e, t) {
              w.push({ op: e.name, id: t, facility: e });
            }),
              l(w),
              console.log(n);
          }
          return (0, d.jsx)("div", {
            className: u,
            children: (0, d.jsxs)(x, {
              className: "w-50",
              children: [
                (0, d.jsxs)("h3", {
                  children: [
                    "\ud83c\udfe2 ",
                    (0, d.jsx)(m.c, { children: "Facilities" }),
                    " ",
                  ],
                }),
                (0, d.jsx)(o, {
                  onChange: function (e) {
                    e.preventDefault(),
                      n.map(function (t) {
                        if (t.id === +e.target.value) {
                          var n = +t.facility.defined;
                          g({
                            defined: n.toFixed(2),
                            subFacilities: t.facility.sub_fac,
                            lower: t.facility.lower,
                          });
                        }
                      });
                  },
                  options: n,
                  text: "Select facility",
                }),
                (0, d.jsx)(j.Z, {
                  id: "gauge-chart6",
                  animate: !0,
                  nrOfLevels: 15,
                  percent: p ? p.defined : 0,
                  needleColor: "#345243",
                  colors: ["#EA4228", "#F5CD19", "#5BE12C"],
                  textColor: "#000000",
                  animDelay: 100,
                }),
                p &&
                  (0, d.jsxs)(d.Fragment, {
                    children: [
                      (0, d.jsxs)("div", {
                        children: [
                          (0, d.jsx)("span", { children: p.subFacilities }),
                          (0, d.jsxs)("p", {
                            children: [
                              " ",
                              (0, d.jsx)(m.c, {
                                children: "Subset Facilities defined",
                              }),
                              " ",
                            ],
                          }),
                        ],
                      }),
                      (0, d.jsxs)("div", {
                        children: [
                          (0, d.jsx)("span", { children: p.lower }),
                          (0, d.jsxs)("p", {
                            children: [
                              " ",
                              (0, d.jsx)(m.c, { children: "Can be defined" }),
                              " ",
                            ],
                          }),
                          (0, d.jsx)("br", {}),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          });
        };
      function b() {
        return y.apply(this, arguments);
      }
      function y() {
        return (y = (0, i.Z)(
          (0, s.Z)().mark(function e() {
            var t;
            return (0, s.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0), (e.next = 3), v.Z.getAllDashboardItems()
                      );
                    case 3:
                      return (
                        (t = e.sent),
                        e.abrupt(
                          "return",
                          null === t || void 0 === t ? void 0 : t.data
                        )
                      );
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
      function N() {
        return w.apply(this, arguments);
      }
      function w() {
        return (w = (0, i.Z)(
          (0, s.Z)().mark(function e() {
            var t, n;
            return (0, s.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), v.Z.getAllTablesData();
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
      var Z = n(1413);
      function _(e, t) {
        return "SEND" === t.type
          ? { data: null, error: null, status: "pending" }
          : "SUCCESS" === t.type
          ? { data: t.responseData, error: null, status: "completed" }
          : "ERROR" === t.type
          ? { data: null, error: t.errorMessage, status: "completed" }
          : e;
      }
      var k = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (0, a.useReducer)(_, {
              status: t ? "pending" : null,
              data: null,
              error: null,
            }),
            l = (0, r.Z)(n, 2),
            c = l[0],
            d = l[1],
            o = (0, a.useCallback)(
              (function () {
                var t = (0, i.Z)(
                  (0, s.Z)().mark(function t(n) {
                    var a;
                    return (0, s.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                d({ type: "SEND" }),
                                (t.prev = 1),
                                (t.next = 4),
                                e(n)
                              );
                            case 4:
                              (a = t.sent),
                                d({ type: "SUCCESS", responseData: a }),
                                (t.next = 11);
                              break;
                            case 8:
                              (t.prev = 8),
                                (t.t0 = t.catch(1)),
                                d({
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
          return (0, Z.Z)({ sendRequest: o }, c);
        },
        D = { item: "ItemCard_item__XSGC1" },
        C = function () {
          var e = (0, a.useState)([]),
            t = (0, r.Z)(e, 2),
            n = t[0],
            s = t[1],
            i = (0, a.useState)([]),
            l = (0, r.Z)(i, 2),
            c = l[0],
            u = l[1],
            h = (0, a.useState)(),
            v = (0, r.Z)(h, 2),
            f = v[0],
            g = v[1],
            y = k(b),
            N = y.sendRequest,
            w = y.status,
            Z = y.data,
            _ = y.error;
          if (
            ((0, a.useEffect)(function () {
              N();
            }, []),
            "pending" === w)
          )
            return (0, d.jsx)("div", {
              className: "spinner-wrapper",
              style: { position: "relative" },
              children: (0, d.jsx)("div", { className: "donut" }),
            });
          if (_)
            return (
              p.ZP.error("There was a problem loading data"),
              (0, d.jsx)("p", { children: _ })
            );
          if ("completed" === w && 0 === n.length) {
            var C = [];
            null === Z ||
              void 0 === Z ||
              Z.map(function (e, t) {
                C.push({ op: e.item_class, id: t });
              }),
              s(C),
              (C = []);
          }
          return (0, d.jsx)("div", {
            className: null === D || void 0 === D ? void 0 : D.item,
            children: (0, d.jsxs)(x, {
              children: [
                (0, d.jsxs)("h3", {
                  children: [
                    "\ud83c\udfe2 ",
                    (0, d.jsx)(m.c, { children: "Items" }),
                    " ",
                  ],
                }),
                (0, d.jsx)(o, {
                  onChange: function (e) {
                    e.preventDefault();
                    var t = [],
                      n = e.target.value;
                    null === Z ||
                      void 0 === Z ||
                      Z.map(function (e, a) {
                        a === +n &&
                          e.items.map(function (e, n) {
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
                      u(t);
                  },
                  options: n,
                  text: "Select item Class",
                }),
                (0, d.jsx)(o, {
                  onChange: function (e) {
                    var t = e.target.value;
                    null === c ||
                      void 0 === c ||
                      c.map(function (e) {
                        e.id === +t &&
                          g({
                            notWorking: e.notWorking,
                            working: e.working.toFixed(2),
                            totalItems: e.totalItems,
                          });
                      });
                  },
                  options: c,
                  text: "Select item Category",
                }),
                (0, d.jsx)(j.Z, {
                  className: "pt-3",
                  id: "gauge-chart6",
                  animate: !0,
                  nrOfLevels: 15,
                  percent: f ? f.working : 0,
                  needleColor: "#345243",
                  colors: ["#EA4228", "#F5CD19", "#5BE12C"],
                  textColor: "#000000",
                  animDelay: 100,
                }),
                f &&
                  (0, d.jsxs)("div", {
                    children: [
                      (0, d.jsx)("span", {
                        children:
                          null === f || void 0 === f ? void 0 : f.totalItems,
                      }),
                      (0, d.jsx)("p", {
                        children: (0, d.jsx)(m.c, { children: "Items" }),
                      }),
                      (0, d.jsxs)("p", {
                        children: [
                          (0, d.jsx)(m.c, { children: "Working" }),
                          ": ",
                          100 *
                            (null === f || void 0 === f ? void 0 : f.working),
                          "%",
                        ],
                      }),
                      (0, d.jsxs)("p", {
                        children: [
                          (0, d.jsx)(m.c, { children: "Not working" }),
                          ": ",
                          null === f || void 0 === f ? void 0 : f.notWorking,
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          });
        },
        S = n(91523),
        F = function (e) {
          return (0, d.jsxs)("div", {
            className: "d-flex mb-3",
            children: [
              (0, d.jsx)("div", {
                children: (0, d.jsxs)("p", {
                  className: "activity-info bg-warning",
                  style: { color: "#000000" },
                  children: [" ", "\u26a0", " "],
                }),
              }),
              (0, d.jsx)("div", {
                className: "activity-details",
                children: (0, d.jsxs)(S.rU, {
                  className: "p-0 btn btn-link btn-fw text-muted ".concat(
                    0 === e.count ? "pe-none" : "",
                    " "
                  ),
                  style: { fontSize: "16px", textDecorationColor: "#777" },
                  to: "dashboard/warnings-info/" + e.param,
                  children: [
                    (0, d.jsxs)(m.c, {
                      children: ["(".concat(e.count, ")  "), e.title],
                    }),
                    (0, d.jsx)("label", {
                      className: "badge badge-danger opacity-".concat(
                        e.badgeOp,
                        " "
                      ),
                      style: { fontSize: "12px" },
                      children: (0, d.jsx)(m.c, { children: e.badge }),
                    }),
                    e.maxExtended &&
                      (0, d.jsx)("label", {
                        className: "badge badge-warning  ",
                        style: { fontSize: "12px" },
                        children: (0, d.jsxs)(m.c, {
                          children: [e.maxExtended, " days extended"],
                        }),
                      }),
                  ],
                }),
              }),
            ],
          });
        },
        E = "Warnings_warnings__73LHj",
        A = function () {
          return (0, d.jsxs)("div", {
            className: "d-flex mb-3",
            children: [
              (0, d.jsx)("div", {
                children: (0, d.jsx)("p", {
                  className: "activity-info bg-info",
                  style: { color: "#000000" },
                  children: "i",
                }),
              }),
              (0, d.jsx)("div", {
                className: "activity-details",
                children: (0, d.jsx)(S.rU, {
                  className: "p-0 btn btn-link btn-fw text-muted ",
                  style: { fontSize: "16px", textDecorationColor: "#777" },
                  to: "dashboard/maintenanceLog",
                  children: (0, d.jsx)(m.c, {
                    children: "Item Maintenance Logbook",
                  }),
                }),
              }),
            ],
          });
        },
        I = [
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
        W = function () {
          var e = (0, f.useQuery)(
              ["warnings"],
              (0, i.Z)(
                (0, s.Z)().mark(function e() {
                  var t;
                  return (0, s.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), v.Z.getAllWarningsData();
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
            ? (0, d.jsx)("div", {
                className: "spinner-wrapper",
                style: { position: "relative" },
                children: (0, d.jsx)("div", { className: "donut" }),
              })
            : (0, d.jsxs)("div", {
                className: "card-body recent-activity ".concat(E),
                children: [
                  (0, d.jsx)("h4", {
                    className: "card-title",
                    children: (0, d.jsx)(m.c, { children: "Warnings" }),
                  }),
                  (0, d.jsx)("p", {
                    className: "card-description",
                    children: (0, d.jsx)(m.c, {
                      children: "Warnings that need to be taken cared of",
                    }),
                  }),
                  t &&
                    (0, d.jsxs)("div", {
                      className: "activities",
                      children: [
                        (0, d.jsx)(F, {
                          title: I[0].title,
                          text: I[0].text,
                          badge: I[0].badge,
                          count: t.seven_days,
                          badgeOp: 50,
                          param: "day=7",
                        }),
                        (0, d.jsx)(F, {
                          title: I[1].title,
                          text: I[1].text,
                          badge: I[1].badge,
                          count: t.three_days,
                          badgeOp: 75,
                          param: "day=3",
                        }),
                        (0, d.jsx)(F, {
                          title: I[2].title,
                          text: I[2].text,
                          badge: I[2].badge,
                          count: t.extended.count,
                          maxExtended: t.extended.maxExtended,
                          badgeOp: 100,
                          param: "day=extended",
                        }),
                        (0, d.jsx)(A, {}),
                      ],
                    }),
                ],
              });
        },
        L = "Dashbord_charts__aHm0k",
        z = "Dashbord_warning__DSWyr",
        O = "DashboardTables_levels__KWMUa",
        M = "DashboardTables_sub-facilities__YkEFi",
        R = n(29913),
        T = function (e) {
          var t = e.updatedOn.split("T")[0].replace(/-/g, " / ");
          return (0, d.jsxs)("tr", {
            children: [
              (0, d.jsxs)("td", { children: [" ", e.num, " "] }, "E"),
              (0, d.jsx)("td", { className: "py-1", children: e.name }, "F"),
              (0, d.jsx)(
                "td",
                {
                  children: (0, d.jsxs)("label", {
                    className: "badge badge-info",
                    children: [" ", e.level, " "],
                  }),
                },
                "G"
              ),
              (0, d.jsx)(
                "td",
                { className: "py-1", children: " ".concat(e.levelName) },
                "Z"
              ),
              (0, d.jsx)(
                "td",
                {
                  children: (0, d.jsx)(R.Z, {
                    variant: e.variant,
                    now: e.registered,
                  }),
                },
                "H"
              ),
              (0, d.jsxs)("td", { children: [" ", t, " "] }, "J"),
            ],
          });
        },
        U = function (e) {
          return (0, d.jsxs)("div", {
            className: "py-2 px-2",
            children: [
              (0, d.jsxs)("h4", {
                className: "card-title",
                children: [
                  " ",
                  (0, d.jsx)(m.c, { children: "Sub Facilities" }),
                ],
              }),
              (0, d.jsx)("p", {
                className: "card-description",
                children: (0, d.jsx)(m.c, {
                  children: "list of all sub facilities ",
                }),
              }),
              (0, d.jsx)("div", {
                className: "table-responsive",
                children: (0, d.jsxs)("table", {
                  className: "table table-striped",
                  children: [
                    (0, d.jsx)("thead", {
                      children: (0, d.jsxs)("tr", {
                        children: [
                          (0, d.jsx)("th", {
                            children: (0, d.jsx)(m.c, { children: "#" }),
                          }),
                          (0, d.jsx)("th", {
                            children: (0, d.jsx)(m.c, {
                              children: "Facility Name",
                            }),
                          }),
                          (0, d.jsx)("th", {
                            children: (0, d.jsx)(m.c, { children: "Levels" }),
                          }),
                          (0, d.jsx)("th", {
                            children: (0, d.jsx)(m.c, {
                              children: "Level Name",
                            }),
                          }),
                          (0, d.jsx)("th", {
                            children: (0, d.jsx)(m.c, {
                              children: "Registered",
                            }),
                          }),
                          (0, d.jsx)("th", {
                            children: (0, d.jsx)(m.c, {
                              children: "Last Update",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, d.jsx)("tbody", {
                      children: (function () {
                        for (var t = [], n = 0; n < e.data.length; n++) {
                          var a = n % 2 === 0 ? "success" : "warning";
                          t.push(
                            (0, d.jsx)(
                              T,
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
        B = function (e) {
          return (0, d.jsxs)("tr", {
            children: [
              (0, d.jsxs)(
                "td",
                {
                  children: [
                    (0, d.jsxs)("label", {
                      className: "badge badge-info",
                      children: [" ", e.level, " "],
                    }),
                    " ",
                  ],
                },
                "A"
              ),
              (0, d.jsx)("td", { children: e.levelName }, "B"),
              (0, d.jsx)("td", { children: e.facilitiesNum }, "C"),
              (0, d.jsx)("td", { children: e.subFacilitiesNum }, "D"),
              (0, d.jsx)("td", { children: e.defSubFacilitiesNum }, "E"),
            ],
          });
        },
        q = function (e) {
          return (0, d.jsxs)("div", {
            className: "px-2 py-5",
            children: [
              (0, d.jsxs)("h4", {
                className: "card-title",
                children: [
                  " \ud83c\udfe2 ",
                  (0, d.jsx)(m.c, { children: "Facilities" }),
                ],
              }),
              (0, d.jsxs)("p", {
                className: "card-description",
                children: [
                  " ",
                  (0, d.jsx)(m.c, {
                    children: "Facilities owned separated by levels",
                  }),
                ],
              }),
              (0, d.jsx)("div", {
                className: "table-responsive",
                children: (0, d.jsxs)("table", {
                  className: "table table-striped",
                  children: [
                    (0, d.jsx)("thead", {
                      children: (0, d.jsxs)("tr", {
                        children: [
                          (0, d.jsx)("th", {
                            children: (0, d.jsx)(m.c, { children: "Levels" }),
                          }),
                          (0, d.jsx)("th", {
                            children: (0, d.jsx)(m.c, {
                              children: "Level Name",
                            }),
                          }),
                          (0, d.jsx)("th", {
                            children: (0, d.jsx)(m.c, {
                              children: "Total number of facilities",
                            }),
                          }),
                          (0, d.jsx)("th", {
                            children: (0, d.jsx)(m.c, {
                              children: "Total number of sub-facilities",
                            }),
                          }),
                          (0, d.jsx)("th", {
                            children: (0, d.jsx)(m.c, {
                              children:
                                "Number of Defined sub-level facilities",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, d.jsx)("tbody", {
                      children: e.data.map(function (e, t) {
                        return (0,
                        d.jsx)(B, { level: e.level_id, levelName: e.level_name, facilitiesNum: e.total, subFacilitiesNum: e.sub, defSubFacilitiesNum: e.def }, t);
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        H = function () {
          var e = k(N),
            t = e.sendRequest,
            n = e.status,
            s = e.data,
            i = e.error,
            l = (0, a.useState)(!1),
            c = (0, r.Z)(l, 2),
            o = c[0],
            u = c[1];
          return (
            (0, a.useEffect)(function () {
              t();
            }, []),
            "pending" === n
              ? (0, d.jsx)("div", {
                  className: "spinner-wrapper",
                  style: { position: "relative" },
                  children: (0, d.jsx)("div", { className: "donut" }),
                })
              : i
              ? (p.ZP.error("There was a problem loading data"),
                (0, d.jsx)("p", { children: i }))
              : ("completed" !== n || o || u(!0),
                (0, d.jsxs)(a.Fragment, {
                  children: [
                    (0, d.jsx)("section", {
                      className: O,
                      children: o && (0, d.jsx)(q, { data: s.level_table }),
                    }),
                    (0, d.jsx)("section", {
                      className: M,
                      children: o && (0, d.jsx)(U, { data: s.facility_table }),
                    }),
                  ],
                }))
          );
        },
        G = function () {
          return (0, d.jsxs)("main", {
            children: [
              (0, d.jsxs)("section", {
                className: L,
                children: [(0, d.jsx)(C, {}), (0, d.jsx)(g, {})],
              }),
              (0, d.jsx)("section", {
                className: z,
                children: (0, d.jsx)(W, {}),
              }),
              (0, d.jsx)(H, {}),
            ],
          });
        };
    },
    10140: function (e, t, n) {
      var a = n(15671),
        s = n(43144),
        i = n(39877),
        r = n(54318),
        l = "http://127.0.0.1:8000/dashboard",
        c = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, s.Z)(e, [
              {
                key: "getAllDashboardItems",
                value: function () {
                  return i.Z.get(l + "/item", {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "getAllFacilities",
                value: function () {
                  return i.Z.get(l + "/facility", {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "getAllTablesData",
                value: function () {
                  return i.Z.get(l + "/table", {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "getAllWarningsData",
                value: function () {
                  return i.Z.get(l + "/maintenance", {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "getWarningsInfo",
                value: function (e) {
                  return i.Z.get(l + "/todo" + e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "getMaintenanceLog",
                value: function () {
                  return i.Z.get(l + "/maintenancelog", {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "postWarningsAsDone",
                value: function (e) {
                  return i.Z.post(l + "/todo", e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
                },
              },
              {
                key: "getLogDetails",
                value: function (e) {
                  return i.Z.get(l + "/maintenancelog" + e, {
                    headers: { Authorization: (0, r.Z)() },
                  });
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
//# sourceMappingURL=2896.bc662fe7.chunk.js.map
