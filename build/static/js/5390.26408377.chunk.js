"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [5390],
  {
    15390: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var i = n(29439),
        r = n(72791),
        a = n(30606),
        s = n(61146),
        c = n(89743),
        l = n(65218),
        u = n(87681),
        o = n(59909),
        d = (n(56384), n(80184)),
        h = (0, r.forwardRef)(function (e, t) {
          var n,
            s,
            h = (0, r.useState)({}),
            m = (0, i.Z)(h, 2),
            f = m[0],
            p = m[1],
            x = (0, r.useState)(!0),
            y = (0, i.Z)(x, 2),
            v = y[0],
            Z = y[1];
          return (
            (0, r.useEffect)(function () {
              u.Z.getFacilityFields1()
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
                  l.ZP.error("There is a problem loading data"), Z(!1);
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
                                      className: "box mb-3",
                                      style: {
                                        border: "gray 1px solid",
                                        padding: "1rem",
                                        "border-radius": "5px",
                                        marginButtom: "5px",
                                      },
                                      children: e.params.map(function (e) {
                                        return (0,
                                        d.jsxs)("div", { className: "param", children: [(0, d.jsx)("input", { style: { Background: "white", Border: "1px solid #ababab70", BorderRadius: "5px", Padding: "0.5rem", marginRight: "5px" }, className: "m-1", type: "checkbox", checked: !1, disabled: !0 }), (0, d.jsx)("span", { className: "mr-3", children: e.name || e.describe })] });
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
        m = function () {
          var e = r.useRef(null),
            t = r.useRef(null),
            n = r.useState(!1),
            c = (0, i.Z)(n, 2),
            l = c[0],
            u = c[1],
            o = r.useCallback(
              function () {
                return (
                  u(!0),
                  new Promise(function (e) {
                    (t.current = e),
                      setTimeout(function () {
                        u(!1), e();
                      }, 0);
                  })
                );
              },
              [u]
            ),
            m = r.useCallback(
              function () {
                return e.current;
              },
              [e.current]
            ),
            f = (0, s.useReactToPrint)({
              content: m,
              documentTitle: "AwesomeFileName",
              onBeforeGetContent: o,
              removeAfterPrint: !0,
            });
          return (
            r.useEffect(
              function () {
                "function" === typeof t.current && t.current();
              },
              [t.current]
            ),
            (0, d.jsxs)(r.Fragment, {
              children: [
                (0, d.jsxs)("button", {
                  className: "btn btn-info btn-icon-text px-3 pr-4",
                  onClick: f,
                  children: [
                    (0, d.jsx)("i", {
                      className: "mdi mdi-printer btn-icon-append ",
                    }),
                    l
                      ? (0, d.jsx)(a.c, { children: "Loading..." })
                      : (0, d.jsx)(a.c, { children: " Print" }),
                  ],
                }),
                (0, d.jsx)(h, { ref: e }),
              ],
            })
          );
        };
    },
    87681: function (e, t, n) {
      var i = n(15671),
        r = n(43144),
        a = n(39877),
        s = n(54318),
        c = (n(74569), "http://127.0.0.1:8000/facilities/"),
        l = (function () {
          function e() {
            (0, i.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getFacilities",
                value: function (e, t) {
                  var n = {};
                  return (
                    e && (n.id = e),
                    t && (n.deleted = t),
                    a.Z.get(c, {
                      headers: { Authorization: (0, s.Z)() },
                      params: n,
                    })
                  );
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
      t.Z = new l();
    },
  },
]);
//# sourceMappingURL=5390.26408377.chunk.js.map