"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [9108],
  {
    9108: function (e, n, t) {
      t.r(n);
      var a = t(74165),
        i = t(15861),
        r = (t(72791), t(79271)),
        s = t(91933),
        c = t(10140),
        l = t(24849),
        d = t(30606),
        o = t(40355),
        h = t(80184);
      n.default = function () {
        var e = (0, r.UO)(),
          n = (0, s.useQuery)(
            ["log-details"],
            (0, i.Z)(
              (0, a.Z)().mark(function n() {
                var t;
                return (0, a.Z)().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), c.Z.getLogDetails("?item=" + e.id);
                      case 2:
                        return (t = n.sent), n.abrupt("return", t.data);
                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            ),
            { refetchOnMount: !0 }
          ),
          t = n.data,
          u = n.isLoading;
        if (u) return (0, h.jsx)(l.Z, {});
        if (!u && 0 === t.length) return (0, h.jsx)(o.Z, {});
        var x = t.maintanances;
        return (0, h.jsx)("div", {
          className: "d-flex mb-3",
          children: (0, h.jsx)("div", {
            className: "col-lg-12 stretch-card",
            children: (0, h.jsx)("div", {
              className: "card",
              children: (0, h.jsxs)("div", {
                className: "card-body",
                children: [
                  (0, h.jsx)("h4", {
                    className: "card-title",
                    children: (0, h.jsxs)(d.c, {
                      children: [
                        "Details of ",
                        (0, h.jsx)("i", { children: "".concat(t.type) }),
                        " maintenance performed by ",
                        "".concat(t.gp),
                        ": #",
                        "".concat(t.code),
                      ],
                    }),
                  }),
                  (0, h.jsx)("div", {
                    className: "table-responsive",
                    children: (0, h.jsxs)("table", {
                      className: "table table-bordered",
                      children: [
                        (0, h.jsx)("thead", {
                          children: (0, h.jsxs)("tr", {
                            children: [
                              (0, h.jsxs)("th", {
                                children: [
                                  " ",
                                  (0, h.jsx)(d.c, { children: "#" }),
                                  " ",
                                ],
                              }),
                              (0, h.jsxs)("th", {
                                children: [
                                  " ",
                                  (0, h.jsx)(d.c, { children: "Name" }),
                                  " ",
                                ],
                              }),
                              (0, h.jsxs)("th", {
                                children: [
                                  " ",
                                  (0, h.jsx)(d.c, { children: "Code" }),
                                  " ",
                                ],
                              }),
                              (0, h.jsxs)("th", {
                                children: [
                                  " ",
                                  (0, h.jsx)(d.c, { children: "interval" }),
                                  " ",
                                ],
                              }),
                              (0, h.jsxs)("th", {
                                children: [
                                  " ",
                                  (0, h.jsx)(d.c, {
                                    children: "interval in location",
                                  }),
                                  " ",
                                ],
                              }),
                              (0, h.jsxs)("th", {
                                children: [
                                  " ",
                                  (0, h.jsx)(d.c, { children: "Deadline" }),
                                  " ",
                                ],
                              }),
                              (0, h.jsxs)("th", {
                                children: [
                                  " ",
                                  (0, h.jsx)(d.c, {
                                    children: " Deadline in location",
                                  }),
                                  " ",
                                ],
                              }),
                              (0, h.jsxs)("th", {
                                children: [
                                  " ",
                                  (0, h.jsx)(d.c, { children: "Status" }),
                                  " ",
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, h.jsx)("tbody", {
                          children: x.map(function (e, n) {
                            return (0,
                            h.jsxs)("tr", { className: "table-info", children: [(0, h.jsxs)("td", { children: [" ", n + 1, " "] }, e.id + n), (0, h.jsxs)("td", { children: [" ", e.name, " "] }, n + e.name), (0, h.jsxs)("td", { children: [" ", e.code, " "] }, n + e.code), (0, h.jsxs)("td", { children: [" ", e.interval, " "] }, n + e.interval), (0, h.jsxs)("td", { children: [" ", e.loc_interval, " "] }, n + e.loc_interval), (0, h.jsxs)("td", { children: [" ", e.deadline, " "] }, n + e.deadline), (0, h.jsx)("td", { children: e.deadline_in_loc }, n + e.deadline_in_loc), (0, h.jsx)("td", { children: (0, h.jsx)("label", { className: "badge badge-".concat(e.done ? "success" : "warning", "  "), style: { fontSize: "12px" }, children: e.done ? "Done" : "Pending" }) }, n + "A")] }, e.id);
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      };
    },
    10140: function (e, n, t) {
      var a = t(15671),
        i = t(43144),
        r = t(39877),
        s = t(54318),
        c = "https://inventory.runflare.run/dashboard",
        l = (function () {
          function e() {
            (0, a.Z)(this, e);
          }
          return (
            (0, i.Z)(e, [
              {
                key: "getAllDashboardItems",
                value: function () {
                  return r.Z.get(c + "/item", {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getAllFacilities",
                value: function () {
                  return r.Z.get(c + "/facility", {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getAllTablesData",
                value: function () {
                  return r.Z.get(c + "/table", {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getAllWarningsData",
                value: function () {
                  return r.Z.get(c + "/maintenance", {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getWarningsInfo",
                value: function (e) {
                  return r.Z.get(c + "/todo" + e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getMaintenanceLog",
                value: function () {
                  return r.Z.get(c + "/maintenancelog", {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "postWarningsAsDone",
                value: function (e) {
                  return r.Z.post(c + "/todo", e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "getLogDetails",
                value: function (e) {
                  return r.Z.get(c + "/maintenancelog" + e, {
                    headers: { Authorization: (0, s.Z)() },
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
        i = t(80184);
      n.Z = function (e) {
        return (0, i.jsxs)("div", {
          className: "alert alert-danger w-50 text-center m-auto",
          role: "alert",
          children: [
            (0, i.jsx)("p", {
              className: "display-4",
              children: (0, i.jsx)(a.c, {
                children:
                  "We've been looking everywhere, nothing was found ... \ud83d\ude1f",
              }),
            }),
            e.message && (0, i.jsx)("p", { children: e.message }),
          ],
        });
      };
    },
    24849: function (e, n, t) {
      var a = t(87462),
        i = t(63366),
        r = t(81694),
        s = t.n(r),
        c = t(72791),
        l = t(10162),
        d = [
          "bsPrefix",
          "variant",
          "animation",
          "size",
          "children",
          "as",
          "className",
        ],
        o = c.forwardRef(function (e, n) {
          var t = e.bsPrefix,
            r = e.variant,
            o = e.animation,
            h = e.size,
            u = e.children,
            x = e.as,
            j = void 0 === x ? "div" : x,
            f = e.className,
            v = (0, i.Z)(e, d),
            g = (t = (0, l.vE)(t, "spinner")) + "-" + o;
          return c.createElement(
            j,
            (0, a.Z)({ ref: n }, v, {
              className: s()(f, g, h && g + "-" + h, r && "text-" + r),
            }),
            u
          );
        });
      (o.displayName = "Spinner"), (n.Z = o);
    },
  },
]);
//# sourceMappingURL=9108.b95d78ea.chunk.js.map
