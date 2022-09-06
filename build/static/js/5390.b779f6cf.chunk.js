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
      var r = n(29439),
        i = n(72791),
        a = n(30606),
        s = n(61146),
        c = n(89743),
        l = n(65218),
        o = n(87681),
        u = n(59909),
        d = n(56384),
        m = n(80184),
        h = (0, i.forwardRef)(function (e, t) {
          var n,
            s,
            h = (0, i.useState)({}),
            f = (0, r.Z)(h, 2),
            p = f[0],
            x = f[1],
            v = (0, i.useState)(!0),
            y = (0, r.Z)(v, 2),
            j = y[0],
            g = y[1];
          return (
            (0, i.useEffect)(function () {
              o.Z.getFacilityFields()
                .then(function (e) {
                  var t = e.data.related;
                  t.unshift({
                    name: "Facility code",
                    params: [],
                    type: "text",
                  });
                  var n = e.data.levels;
                  t.unshift({ name: "Levels", params: n }),
                    x(e.data.related),
                    g(!1);
                })
                .catch(function () {
                  l.ZP.error("There is a problem loading data"), g(!1);
                });
            }, []),
            (0, m.jsx)(m.Fragment, {
              children: j
                ? (0, m.jsx)(u.Z, {})
                : (0, m.jsx)("div", {
                    ref: t,
                    className: "mx-5 my-5",
                    style: { color: "#000" },
                    children: (0, m.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, m.jsxs)("div", {
                          className: " text-center my-4",
                          children: [
                            (0, m.jsx)("div", {
                              className: "",
                              children: (0, m.jsx)("h4", {
                                children:
                                  "Inventory and Gap Analysis System (IGA)",
                              }),
                            }),
                            (0, m.jsx)("div", {
                              children: (0, m.jsxs)("h4", {
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
                        (0, m.jsx)("h2", {
                          className: "mb-4",
                          children: (0, m.jsxs)(a.c, {
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
                        (0, m.jsxs)("p", { children: [" ", (0, d.A)()] }),
                        (0, m.jsx)("div", {
                          className: "wrapper",
                          children: (0, m.jsx)(c.Z, {
                            children: p.map(function (e) {
                              return (0, m.jsx)(m.Fragment, {
                                children: (0, m.jsxs)("div", {
                                  style: { width: "50%" },
                                  children: [
                                    (0, m.jsx)("h6", { children: e.name }),
                                    (0, m.jsx)("div", {
                                      className: "box mb-3",
                                      style: {
                                        border: "gray 1px solid",
                                        padding: "1rem",
                                        "border-radius": "5px",
                                        marginButtom: "5px",
                                      },
                                      children: e.params.map(function (e) {
                                        return (0,
                                        m.jsxs)("div", { className: "param", children: [(0, m.jsx)("input", { style: { Background: "white", Border: "1px solid #ababab70", BorderRadius: "5px", Padding: "0.5rem", marginRight: "5px" }, className: "m-1", type: "checkbox", checked: !1, disabled: !0 }), (0, m.jsx)("span", { className: "mr-3", children: e.name || e.describe })] });
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
          var e = i.useRef(null),
            t = i.useRef(null),
            n = i.useState(!1),
            c = (0, r.Z)(n, 2),
            l = c[0],
            o = c[1],
            u = i.useCallback(
              function () {
                return (
                  o(!0),
                  new Promise(function (e) {
                    (t.current = e),
                      setTimeout(function () {
                        o(!1), e();
                      }, 0);
                  })
                );
              },
              [o]
            ),
            d = i.useCallback(
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
            i.useEffect(
              function () {
                "function" === typeof t.current && t.current();
              },
              [t.current]
            ),
            (0, m.jsxs)(i.Fragment, {
              children: [
                (0, m.jsxs)("button", {
                  className: "btn btn-info btn-icon-text px-3 pr-4",
                  onClick: f,
                  children: [
                    (0, m.jsx)("i", {
                      className: "mdi mdi-printer btn-icon-append ",
                    }),
                    l
                      ? (0, m.jsx)(a.c, { children: "Loading..." })
                      : (0, m.jsx)(a.c, { children: " Print" }),
                  ],
                }),
                (0, m.jsx)(h, { ref: e }),
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
        c = "http://127.0.0.1:8000/facilities/",
        l = (function () {
          function e() {
            (0, r.Z)(this, e);
          }
          return (
            (0, i.Z)(e, [
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
      t.Z = new l();
    },
  },
]);
//# sourceMappingURL=5390.b779f6cf.chunk.js.map
