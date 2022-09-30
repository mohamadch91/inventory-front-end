"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [5390],
  {
    15390: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var r = n(29439),
        i = n(72791),
        a = n(30606),
        s = n(61146),
        c = n(89743),
        u = n(65218),
        l = n(87681),
        o = n(59909),
        d = (n(56384), n(80184)),
        m = (0, i.forwardRef)(function (e, t) {
          var n,
            s,
            m = (0, i.useState)({}),
            h = (0, r.Z)(m, 2),
            f = h[0],
            p = h[1],
            x = (0, i.useState)(!0),
            y = (0, r.Z)(x, 2),
            v = y[0],
            Z = y[1];
          return (
            (0, i.useEffect)(function () {
              l.Z.getFacilityFields1()
                .then(function (e) {
                  var t = e.data.related;
                  t.unshift({
                    name: "Facility code",
                    params: [],
                    type: "text",
                  });
                  var n = e.data.levels;
                  (n = n.map(function (e) {
                    return { id: e.id, name: e.id + " - " + e.name };
                  })),
                    t.unshift({ name: "Levels", params: n }),
                    p(e.data.related),
                    Z(!1);
                })
                .catch(function () {
                  u.ZP.error("There is a problem loading data"), Z(!1);
                });
            }, []),
            (0, d.jsx)(d.Fragment, {
              children: v
                ? (0, d.jsx)(o.Z, {})
                : (0, d.jsx)("div", {
                    ref: t,
                    className: "mx-5 my-5",
                    style: { color: "#000" },
                    children: (0, d.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, d.jsxs)("div", {
                          className: " text-center my-4",
                          children: [
                            (0, d.jsx)("div", {
                              className: "",
                              children: (0, d.jsx)("h4", {
                                children:
                                  "Inventory and Gap Analysis System (IGA)",
                              }),
                            }),
                            (0, d.jsx)("div", {
                              children: (0, d.jsxs)("h4", {
                                children: [
                                  "Country:",
                                  " ",
                                  null ===
                                    (n = JSON.parse(
                                      localStorage.getItem("country")
                                    )) || void 0 === n
                                    ? void 0
                                    : n.country,
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, d.jsx)("h2", {
                          className: "mb-4",
                          children: (0, d.jsxs)(a.c, {
                            children: [
                              " ",
                              "".concat(
                                null ===
                                  (s = JSON.parse(
                                    localStorage.getItem("user")
                                  )) || void 0 === s
                                  ? void 0
                                  : s.facility_name,
                                " Facility information:"
                              ),
                            ],
                          }),
                        }),
                        (0, d.jsx)("p", { children: "Date: -----------" }),
                        (0, d.jsx)("div", {
                          className: "wrapper",
                          children: (0, d.jsx)(c.Z, {
                            children: f.map(function (e) {
                              return (0, d.jsx)(d.Fragment, {
                                children: (0, d.jsxs)("div", {
                                  style: { width: "50%" },
                                  children: [
                                    (0, d.jsx)("h6", { children: e.name }),
                                    (0, d.jsx)("div", {
                                      className: "box mb-3 row",
                                      style: {
                                        border: "gray 1px solid",
                                        padding: "1rem",
                                        "border-radius": "5px",
                                        marginButtom: "5px",
                                      },
                                      children: e.params.map(function (e) {
                                        return (0,
                                        d.jsxs)("div", { className: "param col-md-5", children: [(0, d.jsx)("input", { style: { Background: "white", Border: "1px solid #ababab70", BorderRadius: "5px", Padding: "0.5rem", marginRight: "5px" }, className: "m-1", type: "checkbox", checked: !1, disabled: !0 }), (0, d.jsx)("span", { className: "mr-3", children: e.name || e.describe })] });
                                      }),
                                    }),
                                  ],
                                }),
                              });
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
            })
          );
        }),
        h = function () {
          var e = i.useRef(null),
            t = i.useRef(null),
            n = i.useState(!1),
            c = (0, r.Z)(n, 2),
            u = c[0],
            l = c[1],
            o = i.useCallback(
              function () {
                return (
                  l(!0),
                  new Promise(function (e) {
                    (t.current = e),
                      setTimeout(function () {
                        l(!1), e();
                      }, 0);
                  })
                );
              },
              [l]
            ),
            h = i.useCallback(
              function () {
                return e.current;
              },
              [e.current]
            ),
            f = (0, s.useReactToPrint)({
              content: h,
              documentTitle: "AwesomeFileName",
              onBeforeGetContent: o,
              removeAfterPrint: !0,
            });
          return (
            i.useEffect(
              function () {
                "function" === typeof t.current && t.current();
              },
              [t.current]
            ),
            (0, d.jsxs)(i.Fragment, {
              children: [
                (0, d.jsxs)("button", {
                  className: "btn btn-info btn-icon-text px-3 pr-4",
                  onClick: f,
                  children: [
                    (0, d.jsx)("i", {
                      className: "mdi mdi-printer btn-icon-append ",
                    }),
                    u
                      ? (0, d.jsx)(a.c, { children: "Loading..." })
                      : (0, d.jsx)(a.c, { children: " Print" }),
                  ],
                }),
                (0, d.jsx)(m, { ref: e }),
              ],
            })
          );
        };
    },
    87681: function (e, t, n) {
      var r = n(15671),
        i = n(43144),
        a = n(39877),
        s = n(54318),
        c = (n(74569), "http://127.0.0.1:8000/facilities/"),
        u = (function () {
          function e() {
            (0, r.Z)(this, e);
          }
          return (
            (0, i.Z)(e, [
              {
                key: "getFacilities",
                value: function (e) {
                  return a.Z.get(c, {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getSubFacilities",
                value: function (e) {
                  var t = { id: e };
                  return a.Z.get(c + "parent", {
                    headers: { Authorization: (0, s.Z)() },
                    params: t,
                  });
                },
              },
              {
                key: "getFacilityFields",
                value: function (e) {
                  return a.Z.get(c + "facility-field", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "getFacilityFields1",
                value: function (e) {
                  return a.Z.get(c + "print", {
                    headers: { Authorization: (0, s.Z)() },
                    params: e,
                  });
                },
              },
              {
                key: "postFacility",
                value: function (e) {
                  return a.Z.post(c, e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "putFacility",
                value: function (e) {
                  return a.Z.put(c, e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "importFacilities",
                value: function (e) {
                  return a.Z.post(
                    "http://127.0.0.1:8000/facilities/import",
                    e,
                    { headers: { Authorization: (0, s.Z)() } }
                  );
                },
              },
              {
                key: "deletefacilityparam",
                value: function () {
                  return a.Z.get(c + "delete", {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
              {
                key: "deleteFacility",
                value: function (e) {
                  return a.Z.post(c + "delete", e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      t.Z = new u();
    },
  },
]);
//# sourceMappingURL=5390.82093bd6.chunk.js.map
