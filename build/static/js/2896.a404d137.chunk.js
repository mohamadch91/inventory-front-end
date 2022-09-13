"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [2896],
  {
    92896: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return H;
          },
        });
      var a = n(72791),
        s = n(74165),
        i = n(15861),
        r = n(29439),
        l = "ChartDropDown_drop__3zt0I",
        c = n(80184),
        d = function (e) {
          return (0, c.jsx)("div", {
            className: l,
            children: (0, c.jsxs)("select", {
              onChange: e.onChange,
              children: [
                (0, c.jsx)("option", { value: "", children: e.text }),
                e.options.map(function (e, t) {
                  return (0,
                  c.jsx)("option", { value: e.id, children: e.op }, t);
                }),
              ],
            }),
          });
        },
        o = "Facilities_facilities__joa8-",
        u = "Card_card__Bhi4l",
        h = function (e) {
          return (0, c.jsx)("div", { className: u, children: e.children });
        },
        x = n(65218),
        p = (n(59909), n(31457)),
        m = n(30606),
        j = n(10140),
        v = n(91933),
        f = function () {
          var e = (0, a.useState)([]),
            t = (0, r.Z)(e, 2),
            n = t[0],
            l = t[1],
            u = (0, a.useState)(),
            x = (0, r.Z)(u, 2),
            f = x[0],
            g = x[1],
            b = (0, v.useQuery)(
              ["charts-facilities"],
              (0, i.Z)(
                (0, s.Z)().mark(function e() {
                  var t;
                  return (0, s.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), j.Z.getAllFacilities();
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
            return (0, c.jsx)("div", {
              className: "spinner-wrapper",
              style: { position: "relative" },
              children: (0, c.jsx)("div", { className: "donut" }),
            });
          if (!N && 0 !== n.length) {
            var w = [];
            y.map(function (e, t) {
              w.push({ op: e.name, id: t, facility: e });
            }),
              l(w);
          }
          return (0, c.jsx)("div", {
            className: o,
            children: (0, c.jsxs)(h, {
              className: "w-50",
              children: [
                (0, c.jsxs)("h3", {
                  children: [
                    "\ud83c\udfe2 ",
                    (0, c.jsx)(m.c, { children: "Facilities" }),
                    " ",
                  ],
                }),
                (0, c.jsx)(d, {
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
                (0, c.jsx)(p.Z, {
                  id: "gauge-chart6",
                  animate: !0,
                  nrOfLevels: 15,
                  percent: f ? f.defined : 0,
                  needleColor: "#345243",
                  colors: ["#EA4228", "#F5CD19", "#5BE12C"],
                  textColor: "#000000",
                  animDelay: 100,
                }),
                f &&
                  (0, c.jsxs)(c.Fragment, {
                    children: [
                      (0, c.jsxs)("div", {
                        children: [
                          (0, c.jsx)("span", { children: f.subFacilities }),
                          (0, c.jsxs)("p", {
                            children: [
                              " ",
                              (0, c.jsx)(m.c, {
                                children: "Subset Facilities defined",
                              }),
                              " ",
                            ],
                          }),
                        ],
                      }),
                      (0, c.jsxs)("div", {
                        children: [
                          (0, c.jsx)("span", { children: f.lower }),
                          (0, c.jsxs)("p", {
                            children: [
                              " ",
                              (0, c.jsx)(m.c, { children: "Can be defined" }),
                              " ",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          });
        };
      function g() {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = (0, i.Z)(
          (0, s.Z)().mark(function e() {
            var t;
            return (0, s.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0), (e.next = 3), j.Z.getAllDashboardItems()
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
      function y() {
        return N.apply(this, arguments);
      }
      function N() {
        return (N = (0, i.Z)(
          (0, s.Z)().mark(function e() {
            var t, n;
            return (0, s.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), j.Z.getAllTablesData();
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
      var w = n(1413);
      function Z(e, t) {
        return "SEND" === t.type
          ? { data: null, error: null, status: "pending" }
          : "SUCCESS" === t.type
          ? { data: t.responseData, error: null, status: "completed" }
          : "ERROR" === t.type
          ? { data: null, error: t.errorMessage, status: "completed" }
          : e;
      }
      var _ = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (0, a.useReducer)(Z, {
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
          return (0, w.Z)({ sendRequest: o }, c);
        },
        k = { item: "ItemCard_item__XSGC1" },
        S = function () {
          var e = (0, a.useState)([]),
            t = (0, r.Z)(e, 2),
            n = t[0],
            s = t[1],
            i = (0, a.useState)([]),
            l = (0, r.Z)(i, 2),
            o = l[0],
            u = l[1],
            j = (0, a.useState)(),
            v = (0, r.Z)(j, 2),
            f = v[0],
            b = v[1],
            y = _(g),
            N = y.sendRequest,
            w = y.status,
            Z = y.data,
            S = y.error;
          if (
            ((0, a.useEffect)(function () {
              N();
            }, []),
            "pending" === w)
          )
            return (0, c.jsx)("div", {
              className: "spinner-wrapper",
              style: { position: "relative" },
              children: (0, c.jsx)("div", { className: "donut" }),
            });
          if (S)
            return (
              x.ZP.error("There was a problem loading data"),
              (0, c.jsx)("p", { children: S })
            );
          if ("completed" === w && 0 !== n.length) {
            var D = [];
            null === Z ||
              void 0 === Z ||
              Z.map(function (e, t) {
                D.push({ op: e.item_class, id: t });
              }),
              s(D),
              (D = []);
          }
          return (0, c.jsx)("div", {
            className: null === k || void 0 === k ? void 0 : k.item,
            children: (0, c.jsxs)(h, {
              children: [
                (0, c.jsxs)("h3", {
                  children: [
                    "\ud83c\udfe2 ",
                    (0, c.jsx)(m.c, { children: "Items" }),
                    " ",
                  ],
                }),
                (0, c.jsx)(d, {
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
                (0, c.jsx)(d, {
                  onChange: function (e) {
                    var t = e.target.value;
                    null === o ||
                      void 0 === o ||
                      o.map(function (e) {
                        e.id === +t &&
                          b({
                            notWorking: e.notWorking,
                            working: e.working.toFixed(2),
                            totalItems: e.totalItems,
                          });
                      });
                  },
                  options: o,
                  text: "Select item Type",
                }),
                (0, c.jsx)(p.Z, {
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
                  (0, c.jsxs)("div", {
                    children: [
                      (0, c.jsx)("span", {
                        children:
                          null === f || void 0 === f ? void 0 : f.totalItems,
                      }),
                      (0, c.jsx)("p", {
                        children: (0, c.jsx)(m.c, { children: "Items" }),
                      }),
                      (0, c.jsxs)("p", {
                        className: "text-secondary mb-1",
                        style: { fontSize: "13px" },
                        children: [
                          (0, c.jsx)(m.c, { children: "Working" }),
                          ": ",
                          100 *
                            (null === f || void 0 === f ? void 0 : f.working),
                          "%",
                        ],
                      }),
                      (0, c.jsxs)("p", {
                        className: "text-secondary mb-1",
                        style: { fontSize: "13px" },
                        children: [
                          (0, c.jsx)(m.c, { children: "Not working" }),
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
        D = n(91523),
        C = function (e) {
          return (0, c.jsxs)("div", {
            className: "d-flex mb-3",
            children: [
              (0, c.jsx)("div", {
                children: (0, c.jsxs)("p", {
                  className: "activity-info bg-warning",
                  style: { color: "#000000" },
                  children: [" ", "\u26a0", " "],
                }),
              }),
              (0, c.jsx)("div", {
                className: "activity-details",
                children: (0, c.jsxs)(D.rU, {
                  className: "p-0 btn btn-link btn-fw text-muted ".concat(
                    0 === e.count ? "pe-none" : "",
                    " "
                  ),
                  style: { fontSize: "16px", textDecorationColor: "#777" },
                  to: "dashboard/warnings-info/" + e.param,
                  children: [
                    (0, c.jsxs)(m.c, {
                      children: ["(".concat(e.count, ")  "), e.title],
                    }),
                    (0, c.jsx)("label", {
                      className: "badge badge-danger opacity-".concat(
                        e.badgeOp,
                        " "
                      ),
                      style: { fontSize: "12px" },
                      children: (0, c.jsx)(m.c, { children: e.badge }),
                    }),
                    e.maxExtended &&
                      (0, c.jsx)("label", {
                        className: "badge badge-warning  ",
                        style: { fontSize: "12px" },
                        children: (0, c.jsxs)(m.c, {
                          children: [e.maxExtended, " days extended"],
                        }),
                      }),
                  ],
                }),
              }),
            ],
          });
        },
        F = "Warnings_warnings__73LHj",
        E = function () {
          return (0, c.jsxs)("div", {
            className: "d-flex mb-3",
            children: [
              (0, c.jsx)("div", {
                children: (0, c.jsx)("p", {
                  className: "activity-info bg-info",
                  style: { color: "#000000" },
                  children: "i",
                }),
              }),
              (0, c.jsx)("div", {
                className: "activity-details",
                children: (0, c.jsx)(D.rU, {
                  className: "p-0 btn btn-link btn-fw text-muted ",
                  style: { fontSize: "16px", textDecorationColor: "#777" },
                  to: "dashboard/maintenanceLog",
                  children: (0, c.jsx)(m.c, {
                    children: "Item Maintenance Logbook",
                  }),
                }),
              }),
            ],
          });
        },
        A = [
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
        z = function () {
          var e = (0, v.useQuery)(
              ["warnings"],
              (0, i.Z)(
                (0, s.Z)().mark(function e() {
                  var t;
                  return (0, s.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), j.Z.getAllWarningsData();
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
            ? (0, c.jsx)("div", {
                className: "spinner-wrapper",
                style: { position: "relative" },
                children: (0, c.jsx)("div", { className: "donut" }),
              })
            : (0, c.jsxs)("div", {
                className: "card-body recent-activity ".concat(F),
                children: [
                  (0, c.jsx)("h4", {
                    className: "card-title",
                    children: (0, c.jsx)(m.c, { children: "Warnings" }),
                  }),
                  (0, c.jsx)("p", {
                    className: "card-description",
                    children: (0, c.jsx)(m.c, {
                      children: "Warnings that need to be taken cared of",
                    }),
                  }),
                  t &&
                    (0, c.jsxs)("div", {
                      className: "activities",
                      children: [
                        (0, c.jsx)(C, {
                          title: A[0].title,
                          text: A[0].text,
                          badge: A[0].badge,
                          count: t.seven_days,
                          badgeOp: 50,
                          param: "day=7",
                        }),
                        (0, c.jsx)(C, {
                          title: A[1].title,
                          text: A[1].text,
                          badge: A[1].badge,
                          count: t.three_days,
                          badgeOp: 75,
                          param: "day=3",
                        }),
                        (0, c.jsx)(C, {
                          title: A[2].title,
                          text: A[2].text,
                          badge: A[2].badge,
                          count: t.extended.count,
                          maxExtended: t.extended.maxExtended,
                          badgeOp: 100,
                          param: "day=extended",
                        }),
                        (0, c.jsx)(E, {}),
                      ],
                    }),
                ],
              });
        },
        I = "Dashbord_charts__aHm0k",
        L = "Dashbord_warning__DSWyr",
        W = "DashboardTables_levels__KWMUa",
        O = "DashboardTables_sub-facilities__YkEFi",
        M = n(29913),
        R = function (e) {
          var t = e.updatedOn.split("T")[0].replace(/-/g, " / ");
          return (0, c.jsxs)("tr", {
            children: [
              (0, c.jsxs)("td", { children: [" ", e.num, " "] }, "E"),
              (0, c.jsx)("td", { className: "py-1", children: e.name }, "F"),
              (0, c.jsx)(
                "td",
                {
                  children: (0, c.jsxs)("label", {
                    className: "badge badge-info",
                    children: [" ", e.level, " "],
                  }),
                },
                "G"
              ),
              (0, c.jsx)(
                "td",
                { className: "py-1", children: " ".concat(e.levelName) },
                "Z"
              ),
              (0, c.jsx)(
                "td",
                {
                  children: (0, c.jsx)(M.Z, {
                    variant: e.variant,
                    now: e.registered,
                  }),
                },
                "H"
              ),
              (0, c.jsxs)("td", { children: [" ", t, " "] }, "J"),
            ],
          });
        },
        T = function (e) {
          return (0, c.jsxs)("div", {
            className: "py-2 px-2",
            children: [
              (0, c.jsxs)("h4", {
                className: "card-title",
                children: [
                  " ",
                  (0, c.jsx)(m.c, { children: "Sub Facilities" }),
                ],
              }),
              (0, c.jsx)("p", {
                className: "card-description",
                children: (0, c.jsx)(m.c, {
                  children: "list of all sub facilities ",
                }),
              }),
              (0, c.jsx)("div", {
                className: "table-responsive",
                children: (0, c.jsxs)("table", {
                  className: "table table-striped",
                  children: [
                    (0, c.jsx)("thead", {
                      children: (0, c.jsxs)("tr", {
                        children: [
                          (0, c.jsx)("th", {
                            children: (0, c.jsx)(m.c, { children: "#" }),
                          }),
                          (0, c.jsx)("th", {
                            children: (0, c.jsx)(m.c, {
                              children: "Facility Name",
                            }),
                          }),
                          (0, c.jsx)("th", {
                            children: (0, c.jsx)(m.c, { children: "Level" }),
                          }),
                          (0, c.jsx)("th", {
                            children: (0, c.jsx)(m.c, {
                              children: "Level name",
                            }),
                          }),
                          (0, c.jsx)("th", {
                            children: (0, c.jsx)(m.c, {
                              children: "Registered",
                            }),
                          }),
                          (0, c.jsx)("th", {
                            children: (0, c.jsx)(m.c, {
                              children: "Last Update",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, c.jsx)("tbody", {
                      children: (function () {
                        for (var t = [], n = 0; n < e.data.length; n++) {
                          var a = n % 2 === 0 ? "success" : "warning";
                          t.push(
                            (0, c.jsx)(
                              R,
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
        U = function (e) {
          return (0, c.jsxs)("tr", {
            children: [
              (0, c.jsxs)(
                "td",
                {
                  children: [
                    (0, c.jsxs)("label", {
                      className: "badge badge-info",
                      children: [" ", e.level, " "],
                    }),
                    " ",
                  ],
                },
                "A"
              ),
              (0, c.jsx)("td", { children: e.levelName }, "B"),
              (0, c.jsx)("td", { children: e.facilitiesNum }, "C"),
              (0, c.jsx)("td", { children: e.subFacilitiesNum }, "D"),
              (0, c.jsx)("td", { children: e.defSubFacilitiesNum }, "E"),
            ],
          });
        },
        B = function (e) {
          return (0, c.jsxs)("div", {
            className: "px-2 py-5",
            children: [
              (0, c.jsx)("h4", {
                className: "card-title",
                children: " \ud83c\udfe2 Facilities",
              }),
              (0, c.jsx)("p", {
                className: "card-description",
                children: " Facilities owned separated by levels",
              }),
              (0, c.jsx)("div", {
                className: "table-responsive",
                children: (0, c.jsxs)("table", {
                  className: "table table-striped",
                  children: [
                    (0, c.jsx)("thead", {
                      children: (0, c.jsxs)("tr", {
                        children: [
                          (0, c.jsx)("th", {
                            children: (0, c.jsx)(m.c, { children: "Level" }),
                          }),
                          (0, c.jsx)("th", {
                            children: (0, c.jsx)(m.c, {
                              children: "Level Name",
                            }),
                          }),
                          (0, c.jsx)("th", {
                            children: (0, c.jsx)(m.c, {
                              children: "Total number of facilities",
                            }),
                          }),
                          (0, c.jsx)("th", {
                            children: (0, c.jsx)(m.c, {
                              children: "Total number of sub-facilities",
                            }),
                          }),
                          (0, c.jsx)("th", {
                            children: (0, c.jsx)(m.c, {
                              children:
                                "Number of Defined sub-level facilities",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, c.jsx)("tbody", {
                      children: e.data.map(function (e, t) {
                        return (0,
                        c.jsx)(U, { level: e.level_id, levelName: e.level_name, facilitiesNum: e.total, subFacilitiesNum: e.sub, defSubFacilitiesNum: e.def }, t);
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        q = function () {
          var e = _(y),
            t = e.sendRequest,
            n = e.status,
            s = e.data,
            i = e.error,
            l = (0, a.useState)(!1),
            d = (0, r.Z)(l, 2),
            o = d[0],
            u = d[1];
          return (
            (0, a.useEffect)(function () {
              t();
            }, []),
            "pending" === n
              ? (0, c.jsx)("div", {
                  className: "spinner-wrapper",
                  style: { position: "relative" },
                  children: (0, c.jsx)("div", { className: "donut" }),
                })
              : i
              ? (x.ZP.error("There was a problem loading data"),
                (0, c.jsx)("p", { children: i }))
              : ("completed" !== n || o || u(!0),
                (0, c.jsxs)(a.Fragment, {
                  children: [
                    (0, c.jsx)("section", {
                      className: W,
                      children: o && (0, c.jsx)(B, { data: s.level_table }),
                    }),
                    (0, c.jsx)("section", {
                      className: O,
                      children: o && (0, c.jsx)(T, { data: s.facility_table }),
                    }),
                  ],
                }))
          );
        },
        H = function () {
          return (0, c.jsxs)("main", {
            children: [
              (0, c.jsxs)("section", {
                className: I,
                children: [(0, c.jsx)(S, {}), (0, c.jsx)(f, {})],
              }),
              (0, c.jsx)("section", {
                className: L,
                children: (0, c.jsx)(z, {}),
              }),
              (0, c.jsx)(q, {}),
            ],
          });
        };
    },
    10140: function (e, t, n) {
      var a = n(15671),
        s = n(43144),
        i = n(39877),
        r = n(54318),
        l = "https://inventory.runflare.run/dashboard",
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
//# sourceMappingURL=2896.a404d137.chunk.js.map
