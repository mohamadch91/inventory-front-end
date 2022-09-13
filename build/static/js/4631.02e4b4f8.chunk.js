"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [4631],
  {
    94631: function (e, n, t) {
      t.r(n);
      var a = t(74165),
        r = t(15861),
        s = (t(72791), t(91523)),
        i = t(91933),
        c = t(10140),
        l = t(30606),
        o = t(40355),
        d = t(80184);
      n.default = function () {
        var e = (0, i.useQuery)(
            ["logbook-data"],
            (0, r.Z)(
              (0, a.Z)().mark(function e() {
                var n;
                return (0, a.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), c.Z.getMaintenanceLog();
                      case 2:
                        return (n = e.sent), e.abrupt("return", n.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            { refetchOnMount: !0 }
          ),
          n = e.data,
          t = e.isLoading;
        return t
          ? (0, d.jsx)("div", { children: " Loading ... " })
          : t || 0 !== n.length
          ? (0, d.jsx)("div", {
              className: "d-flex mb-3",
              children: (0, d.jsx)("div", {
                className: "col-lg-12 stretch-card",
                children: (0, d.jsx)("div", {
                  className: "card",
                  children: (0, d.jsxs)("div", {
                    className: "card-body p-2",
                    children: [
                      (0, d.jsx)("h4", {
                        className: "card-title",
                        children: "Warnings Info",
                      }),
                      (0, d.jsx)("div", {
                        className: "table-responsive",
                        children: (0, d.jsxs)("table", {
                          className: "table table-bordered p-2 m-2",
                          children: [
                            (0, d.jsx)("thead", {
                              children: (0, d.jsxs)("tr", {
                                children: [
                                  (0, d.jsxs)("th", {
                                    className: "col-3",
                                    children: [
                                      " ",
                                      (0, d.jsx)(l.c, { children: "#" }),
                                      " ",
                                    ],
                                  }),
                                  (0, d.jsxs)("th", {
                                    className: "col-3",
                                    children: [
                                      " ",
                                      (0, d.jsx)(l.c, { children: "Code" }),
                                      " ",
                                    ],
                                  }),
                                  (0, d.jsxs)("th", {
                                    className: "col-3",
                                    children: [
                                      (0, d.jsx)(l.c, {
                                        children: "Maintenance group",
                                      }),
                                      " ",
                                    ],
                                  }),
                                  (0, d.jsx)("th", {
                                    className: "col-3",
                                    children: (0, d.jsx)(l.c, {
                                      children: "Details",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, d.jsx)("tbody", {
                              children: n.map(function (e, n) {
                                return (0,
                                d.jsxs)("tr", { className: "table-info", children: [(0, d.jsxs)("td", { children: [" ", n + 1, " "] }, e.id + n), (0, d.jsxs)("td", { children: [" ", e.code, " "] }, n + e.code), (0, d.jsx)("td", { children: e.gp }, n + e.gp), (0, d.jsx)("td", { children: (0, d.jsx)(s.rU, { to: "/dashboard/maintenanceLog/".concat(e.id), className: "btn btn-info btn-fw ", children: (0, d.jsx)(l.c, { children: "Click for details" }) }) }, n + "A")] }, e.id);
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            })
          : (0, d.jsx)(o.Z, {});
      };
    },
    10140: function (e, n, t) {
      var a = t(15671),
        r = t(43144),
        s = t(39877),
        i = t(54318),
        c = "https://inventory.runflare.run/dashboard",
        l = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getAllDashboardItems",
                value: function () {
                  return s.Z.get(c + "/item", {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "getAllFacilities",
                value: function () {
                  return s.Z.get(c + "/facility", {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "getAllTablesData",
                value: function () {
                  return s.Z.get(c + "/table", {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "getAllWarningsData",
                value: function () {
                  return s.Z.get(c + "/maintenance", {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "getWarningsInfo",
                value: function (e) {
                  return s.Z.get(c + "/todo" + e, {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "getMaintenanceLog",
                value: function () {
                  return s.Z.get(c + "/maintenancelog", {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "postWarningsAsDone",
                value: function (e) {
                  return s.Z.post(c + "/todo", e, {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
              {
                key: "getLogDetails",
                value: function (e) {
                  return s.Z.get(c + "/maintenancelog" + e, {
                    headers: { Authorization: (0, i.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      n.Z = new l();
    },
    40355: function (e, n, t) {
      t(72791);
      var a = t(30606),
        r = t(80184);
      n.Z = function (e) {
        return (0, r.jsxs)("div", {
          className: "alert alert-danger w-50 text-center m-auto",
          role: "alert",
          children: [
            (0, r.jsx)("p", {
              className: "display-4",
              children: (0, r.jsx)(a.c, {
                children:
                  "We've been looking everywhere, nothing was found ... \ud83d\ude1f",
              }),
            }),
            e.message && (0, r.jsx)("p", { children: e.message }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=4631.02e4b4f8.chunk.js.map
