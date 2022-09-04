"use strict";
(self.webpackChunkinventory = self.webpackChunkinventory || []).push([
  [5390],
  {
    15390: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var i = n(29439),
        r = n(72791),
        a = n(30606),
        s = n(61146),
        c = n(89743),
        o = n(65218),
        l = n(87681),
        u = n(59909),
        d = n(56384),
        h = n(80184),
        m = (0, r.forwardRef)(function (e, t) {
          var n,
            s,
            m = (0, r.useState)({}),
            f = (0, i.Z)(m, 2),
            p = f[0],
            x = f[1],
            y = (0, r.useState)(!0),
            v = (0, i.Z)(y, 2),
            j = v[0],
            g = v[1];
          return (
            (0, r.useEffect)(function () {
              l.Z.getFacilityFields()
                .then(function (e) {
                  x(e.data.related), g(!1);
                })
                .catch(function () {
                  o.ZP.error("There is a problem loading data"), g(!1);
                });
            }, []),
            (0, h.jsx)(h.Fragment, {
              children: j
                ? (0, h.jsx)(u.Z, {})
                : (0, h.jsx)("div", {
                    ref: t,
                    className: "mx-5 my-5",
                    style: { color: "#000" },
                    children: (0, h.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, h.jsxs)("div", {
                          className: " text-center my-4",
                          children: [
                            (0, h.jsx)("div", {
                              className: "",
                              children: (0, h.jsx)("h4", {
                                children:
                                  "Inventory and Gap Analysis System (IGA)",
                              }),
                            }),
                            (0, h.jsx)("div", {
                              children: (0, h.jsxs)("h4", {
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
                        (0, h.jsx)("h2", {
                          className: "mb-4",
                          children: (0, h.jsxs)(a.c, {
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
                        (0, h.jsxs)("p", { children: [" ", (0, d.A)()] }),
                        (0, h.jsx)("div", {
                          className: "wrapper",
                          children: (0, h.jsx)(c.Z, {
                            children: p.map(function (e) {
                              return (0, h.jsx)(h.Fragment, {
                                children: (0, h.jsxs)("div", {
                                  style: { width: "50%" },
                                  children: [
                                    (0, h.jsx)("h6", { children: e.name }),
                                    (0, h.jsx)("div", {
                                      className: "box mb-3",
                                      style: {
                                        border: "gray 1px solid",
                                        padding: "1rem",
                                        "border-radius": "5px",
                                        marginButtom: "5px",
                                      },
                                      children: e.params.map(function (e) {
                                        return (0,
                                        h.jsxs)("div", { className: "param", children: [(0, h.jsx)("input", { style: { Background: "white", Border: "1px solid #ababab70", BorderRadius: "5px", Padding: "0.5rem", marginRight: "5px" }, className: "m-1", type: "checkbox", checked: !1, disabled: !0 }), (0, h.jsx)("span", { className: "mr-3", children: e.name || e.describe })] });
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
        f = function () {
          var e = r.useRef(null),
            t = r.useRef(null),
            n = r.useState(!1),
            c = (0, i.Z)(n, 2),
            o = c[0],
            l = c[1],
            u = r.useCallback(
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
            d = r.useCallback(
              function () {
                return e.current;
              },
              [e.current]
            ),
            f = (0, s.useReactToPrint)({
              content: d,
              documentTitle: "AwesomeFileName",
              onBeforeGetContent: u,
              removeAfterPrint: !0,
            });
          return (
            r.useEffect(
              function () {
                "function" === typeof t.current && t.current();
              },
              [t.current]
            ),
            (0, h.jsxs)(r.Fragment, {
              children: [
                (0, h.jsxs)("button", {
                  className: "btn btn-info btn-icon-text px-3 pr-4",
                  onClick: f,
                  children: [
                    (0, h.jsx)("i", {
                      className: "mdi mdi-printer btn-icon-append ",
                    }),
                    o
                      ? (0, h.jsx)(a.c, { children: "Loading..." })
                      : (0, h.jsx)(a.c, { children: " Print" }),
                  ],
                }),
                (0, h.jsx)(m, { ref: e }),
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
        c = "http://127.0.0.1:8000/facilities/",
        o = (function () {
          function e() {
            (0, i.Z)(this, e);
          }
          return (
            (0, r.Z)(e, [
              {
                key: "getFacilities",
                value: function (e) {
                  var t = {};
                  return (
                    e && (t.id = e),
                    a.Z.get(c, {
                      headers: { Authorization: (0, s.Z)() },
                      params: t,
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
                  return a.Z.post("http://127.0.0.1:8000facilities/import", e, {
                    headers: { Authorization: (0, s.Z)() },
                  });
                },
              },
            ]),
            e
          );
        })();
      t.Z = new o();
    },
  },
]);
//# sourceMappingURL=5390.345ac1c6.chunk.js.map
